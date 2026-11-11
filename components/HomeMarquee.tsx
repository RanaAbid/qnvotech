"use client";

import { useEffect, useRef, useState } from "react";

/** Pauses the CSS marquee until it is near the viewport to cut first-paint main-thread work. */
export function HomeMarquee({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRunning(true);
          observer.disconnect();
        }
      },
      { rootMargin: "80px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`marquee${running ? " is-running" : ""}`} aria-hidden="true">
      <div className="marquee-track">
        {items.map((title, index) => (
          <span key={`${title}-${index}`} className="marquee-item">
            <span className="marquee-label">{title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
