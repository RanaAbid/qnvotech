"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { isGaId, isGtmId } from "@/lib/analytics";

type Choice = "granted" | "denied";
const STORAGE_KEY = "qnvo-analytics-consent";

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

function isAnalyticsTag(tagId: string): boolean {
  return isGaId(tagId) || isGtmId(tagId);
}

function applyConsent(choice: Choice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice === "granted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.dataLayer?.push({
    event: "qnvo_consent_update",
    qnvo_analytics_storage: choice === "granted" ? "granted" : "denied",
  });
}

export function ConsentProvider({
  children,
  measurementId,
  gaId = "",
}: {
  children: React.ReactNode;
  measurementId: string;
  gaId?: string;
  /** Kept for call-site compatibility; GTM/GA scripts load from the root layout. */
  nonce?: string;
}) {
  const enabled = isAnalyticsTag(measurementId);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [forceOpen, setForceOpen] = useState(false);
  const titleId = useId();
  const rejectRef = useRef<HTMLButtonElement>(null);
  const settingsTriggerRef = useRef<HTMLElement | null>(null);
  const choiceRef = useRef<Choice | null>(null);
  const configuredRef = useRef(false);

  useEffect(() => {
    if (!enabled || configuredRef.current) return;
    configuredRef.current = true;

    // Standalone GA4 config only when the primary tag is a GA id (no GTM container).
    if (!isGtmId(measurementId) && gaId && isGaId(gaId) && window.gtag) {
      window.gtag("config", gaId, {
        anonymize_ip: true,
        send_page_view: false,
      });
    }
  }, [enabled, gaId, measurementId]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted" || stored === "denied") {
      setChoice(stored);
      choiceRef.current = stored;
      applyConsent(stored);
    }
    setReady(true);
  }, []);

  const save = useCallback((next: Choice) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    choiceRef.current = next;
    setChoice(next);
    setForceOpen(false);
    applyConsent(next);
  }, []);

  const showBanner = enabled && ready && (forceOpen || choice === null);

  useEffect(() => {
    if (!showBanner) return;
    const previous = document.activeElement as HTMLElement | null;
    if (forceOpen) settingsTriggerRef.current = previous;
    const focusTimer = window.setTimeout(() => rejectRef.current?.focus(), 0);

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      if (forceOpen) {
        setForceOpen(false);
        settingsTriggerRef.current?.focus();
        return;
      }
      save("denied");
    }

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
    };
  }, [showBanner, forceOpen, save]);

  return (
    <ConsentContext.Provider value={{ measurementId: enabled ? measurementId : "", openSettings: () => setForceOpen(true) }}>
      {children}
      {showBanner ? (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-navy text-white shadow-lg"
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
        >
          <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p id={titleId} className="max-w-3xl text-base leading-relaxed text-offwhite">
              Analytics storage stays off until you allow it. The Google tag is present for site measurement setup; your choice
              is stored in this browser only. You can change it later.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-4 font-semibold text-navy"
                onClick={() => save("granted")}
              >
                Allow analytics
              </button>
              <button
                ref={rejectRef}
                type="button"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-4 font-semibold text-white"
                onClick={() => save("denied")}
              >
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
    <button
      type="button"
      className="mt-4 inline-flex min-h-11 items-center font-semibold text-white underline decoration-white/40 underline-offset-4"
      onClick={consent.openSettings}
    >
      Cookie settings
    </button>
  );
}
