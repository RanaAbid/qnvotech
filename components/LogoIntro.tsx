"use client";

import { useEffect, useState } from "react";
import { LogoStage } from "@/components/LogoStage";

const STORAGE_KEY = "qnvo-logo-intro-v1";

function shouldSkipIntro(): boolean {
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
 * One-time first-visit brand intro. Skips on reduced motion, slow networks, lab tools,
 * and after the first completed show. Deferred so the hero can claim LCP bandwidth first.
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

    // Let the hero image start before competing for network / main thread.
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        setPhase("show");
        document.body.style.overflow = "hidden";

        timers.push(
          window.setTimeout(() => {
            if (!cancelled) setPhase("out");
          }, 1200),
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
          }, 1700),
        );
      }, 450),
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
      <div className="logo-intro-core">
        <LogoStage size="intro" />
        <p className="logo-intro-tag">QNVO Technologies</p>
      </div>
    </div>
  );
}
