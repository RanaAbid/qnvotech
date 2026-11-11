"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { processSteps } from "@/lib/data";

const STEP_MS = 4200;

export function ProcessFilm() {
  const headingId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReduced);
    const video = videoRef.current;
    if (!video) return;
    if (prefersReduced) {
      video.pause();
      return;
    }
    video.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % processSteps.length);
    }, STEP_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const step = processSteps[active];

  return (
    <section id="process-film" className="process-film" aria-labelledby={headingId}>
      <div className="process-film-stage">
        <video
          ref={videoRef}
          className="process-film-video"
          src="/videos/process-ambient.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="process-film-veil" aria-hidden="true" />
        <div className="process-film-grid" aria-hidden="true" />

        <div className="process-film-content">
          <div className="process-film-copy">
            <p className="process-film-kicker">How work starts</p>
            <h2 id={headingId} className="process-film-title">
              A written process, not a slogan
            </h2>
            <p className="process-film-lede">
              From the first conversation to handover, each step stays tied to what you put in writing — and nothing is implied beyond that.
            </p>

            <ol className="process-film-rail" aria-label="Process steps">
              {processSteps.map((item, index) => {
                const isActive = index === active;
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      className={`process-film-dot${isActive ? " is-active" : ""}`}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Step ${index + 1}: ${item.title}`}
                      onClick={() => {
                        setActive(index);
                        setPaused(true);
                      }}
                    >
                      <span className="process-film-dot-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="process-film-dot-label">{item.title}</span>
                      {isActive && !paused ? <span className="process-film-progress" aria-hidden="true" /> : null}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <article className="process-film-card" aria-live="polite" key={step.title}>
            <div className="process-film-card-glow" aria-hidden="true" />
            <p className="process-film-card-watermark" aria-hidden="true">
              {String(active + 1).padStart(2, "0")}
            </p>
            <div className="process-film-card-top">
              <p className="process-film-card-kicker">Step {String(active + 1).padStart(2, "0")}</p>
              <span className="process-film-card-pulse" aria-hidden="true" />
            </div>
            <h3 className="process-film-card-title">{step.title}</h3>
            <p className="process-film-card-body">{step.body}</p>
            <div className="process-film-card-actions">
              <Link href="/process/" className="btn btn-blue">
                Full process
              </Link>
              <button
                type="button"
                className="process-film-toggle"
                onClick={() => setPaused((value) => !value)}
                aria-pressed={paused}
              >
                {paused ? "Play reel" : "Pause reel"}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
