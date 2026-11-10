"use client";

import { useEffect, useRef, useState } from "react";

type RevealVariant = "rise" | "left" | "right" | "scale" | "blur";

export function Reveal({
  children,
  className = "",
  variant = "rise",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "wait" | "in">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const seen = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (seen) {
      setState("in");
      return;
    }

    setState("wait");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setState("in");
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const motionClass =
    state === "wait" ? `reveal-wait reveal-${variant}` : state === "in" ? `reveal-in reveal-${variant}` : `reveal-${variant}`;

  return (
    <div ref={ref} className={`${motionClass} ${className}`}>
      {children}
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 560);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-top"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <span className="sr-only">Back to top</span>
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 14l6-6 6 6" />
      </svg>
    </button>
  );
}
