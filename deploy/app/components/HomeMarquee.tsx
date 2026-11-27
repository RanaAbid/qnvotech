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
      <div className="marquee-fx">
        <span className="marquee-shape marquee-shape-cube marquee-shape-a">
          <i className="cube-top" />
          <i className="cube-left" />
          <i className="cube-right" />
        </span>
        <span className="marquee-shape marquee-shape-cube marquee-shape-b">
          <i className="cube-top" />
          <i className="cube-left" />
          <i className="cube-right" />
        </span>
        <span className="marquee-shape marquee-shape-pyramid marquee-shape-c">
          <i className="pyr-left" />
          <i className="pyr-right" />
        </span>
        <span className="marquee-shape marquee-shape-ring marquee-shape-d" />
        <span className="marquee-shape marquee-shape-diamond marquee-shape-e" />
        <span className="marquee-shape marquee-shape-ring marquee-shape-f" />
        <span className="marquee-shape marquee-shape-diamond marquee-shape-g" />
        <span className="marquee-fx-shine" />
      </div>
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
