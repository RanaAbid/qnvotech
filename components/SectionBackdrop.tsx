"use client";

import { useEffect, useRef, useState } from "react";

type Tone = "navy" | "deep";

/** Full-bleed dark band with animated shapes. Prefer home only (up to 2). */
export function ColorBand({
  tone = "navy",
  className = "",
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement> & { tone?: Tone }) {
  const ref = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { rootMargin: "40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`color-band color-band-${tone}${animated ? " is-animated" : ""} ${className}`}
      {...rest}
    >
      <div className="section-backdrop" aria-hidden="true">
        <span className="shape-blob shape-blob-a" />
        <span className="shape-blob shape-blob-b" />
        <span className="shape-ring shape-ring-a" />
        <span className="shape-ring shape-ring-b" />
        <span className="shape-slash" />
        <span className="shape-dot shape-dot-a" />
        <span className="shape-dot shape-dot-b" />
        <span className="shape-dot shape-dot-c" />
      </div>
      <div className="color-band-content">{children}</div>
    </section>
  );
}
