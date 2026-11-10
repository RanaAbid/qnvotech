"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Choice = "granted" | "denied";
const STORAGE_KEY = "qnvo-analytics-consent";
const GA_ID = /^G-[A-Z0-9]{4,32}$/;

type ConsentValue = {
  measurementId: string;
  openSettings: () => void;
};

const ConsentContext = createContext<ConsentValue | null>(null);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadAnalytics(measurementId: string, nonce: string) {
  if (!GA_ID.test(measurementId) || document.getElementById("qnvo-ga")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.id = "qnvo-ga";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  if (nonce) script.nonce = nonce;
  document.head.appendChild(script);
}

export function ConsentProvider({
  children,
  measurementId,
  nonce,
}: {
  children: React.ReactNode;
  measurementId: string;
  nonce: string;
}) {
  const enabled = GA_ID.test(measurementId);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") setChoice(stored);
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && choice === "granted" && enabled) loadAnalytics(measurementId, nonce);
  }, [ready, choice, enabled, measurementId, nonce]);

  function save(next: Choice) {
    const previous = choice;
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    setForceOpen(false);
    if (next === "denied" && previous === "granted") window.location.reload();
  }

  const showBanner = enabled && (!ready || forceOpen || choice === null);

  return (
    <ConsentContext.Provider value={{ measurementId: enabled ? measurementId : "", openSettings: () => setForceOpen(true) }}>
      {children}
      {showBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy text-white shadow-lg">
          <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-base leading-relaxed text-offwhite">
              Analytics stays off until you allow it. Rejecting keeps Google Analytics from loading. You can change this choice later.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-4 font-semibold text-navy" onClick={() => save("granted")}>
                Allow analytics
              </button>
              <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-4 font-semibold text-white" onClick={() => save("denied")}>
                Reject analytics
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </ConsentContext.Provider>
  );
}

export function CookieSettingsButton() {
  const consent = useContext(ConsentContext);
  if (!consent?.measurementId) return null;
  return (
    <button type="button" className="mt-4 inline-flex min-h-11 items-center font-semibold text-white underline decoration-white/40 underline-offset-4" onClick={consent.openSettings}>
      Cookie settings
    </button>
  );
}
