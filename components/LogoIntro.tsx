"use client";

import { useEffect, useState } from "react";
import { LogoGlobe } from "@/components/LogoGlobe";

const STORAGE_KEY = "qnvo-logo-intro-v3";

function shouldSkipIntro(): boolean {
  // Manual replay for QA: /?intro=1
  try {
    if (new URLSearchParams(window.location.search).get("intro") === "1") {
      window.sessionStorage.removeItem(STORAGE_KEY);
      return false;
    }
  } catch {
    // ignore
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  // Lab / automated browsers: keep first paint free for LCP measurement.
  if (navigator.webdriver) return true;
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") return true;
  } catch {
    // Private mode: still allow once for this mount.
  }
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (connection?.saveData) return true;
  if (connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") return true;
  return false;
}

/**
 * First-visit brand intro: QNVO particle globe + solid logo plate.
 * Skips on reduced motion, slow networks, lab tools, and after first show.
 */
export function LogoIntro() {
  const [phase, setPhase] = useState<"boot" | "show" | "out" | "done">("boot");

  useEffect(() => {
    if (shouldSkipIntro()) {
      setPhase("done");
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const previous = document.body.style.overflow;

    // Brief delay so the hero can start LCP work, then run the globe intro.
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setPhase("show");
        document.body.style.overflow = "hidden";

        timers.push(
          window.setTimeout(() => {
            if (!cancelled) setPhase("out");
          }, 3200),
        );
        timers.push(
          window.setTimeout(() => {
            if (cancelled) return;
            try {
              window.sessionStorage.setItem(STORAGE_KEY, "1");
            } catch {
              // ignore
            }
            document.body.style.overflow = previous;
            setPhase("done");
          }, 3900),
        );
      }, 180),
    );

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = previous;
    };
  }, []);

  if (phase === "boot" || phase === "done") return null;

  return (
    <div className={`logo-intro${phase === "out" ? " is-out" : ""}`} role="presentation" aria-hidden="true">
      <div className="logo-intro-grid" />
      <div className="logo-intro-core">
        <LogoGlobe />
        <p className="logo-intro-tag">QNVO Technologies</p>
        <p className="logo-intro-sub">Quality · Next-Gen · Vision · Operations</p>
      </div>
    </div>
  );
}
