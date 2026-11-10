"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PictureFill } from "@/components/OptimizedImage";

const slides = [
  {
    line: "AI agents for a defined task, with a person still reviewing the result.",
    base: "/images/hero-team",
    alt: "Three colleagues reviewing a laptop together in an office",
  },
  {
    line: "ERP, automation, and software shaped around a written scope.",
    base: "/images/hero-systems",
    alt: "Two colleagues reviewing dashboards on a pair of monitors",
  },
  {
    line: "Web, technical SEO, and security reviews. No ranking or compliance promise.",
    base: "/images/hero-web",
    alt: "Two colleagues reviewing a website layout on a laptop",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function HeroPanel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <div className="hero-grid hero-enter relative z-10 flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:pr-24">
        <p className="anim-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-amber">Professional technology services</p>
        <h1 className="anim-title mt-4 max-w-xl font-display text-[2.15rem] font-bold leading-[1.08] text-white md:text-5xl lg:text-[3.15rem]">
          Enterprise Software, AI Agents & Technology Services
        </h1>
        <p key={index} className="line-swap mt-4 max-w-xl text-lg font-semibold text-white" aria-hidden="true">
          {slides[index].line}
        </p>
        <p className="anim-copy mt-4 max-w-xl text-lg leading-relaxed text-offwhite">
          QNVO Technologies provides information on enterprise software, AI agents, automation, ERP, and digital services. Contact us to discuss a project. This site does not publish client names, prices, or results.
        </p>
        <div className="anim-cta mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact/" className="btn btn-blue">
            Discuss your project
            <Arrow />
          </Link>
          <Link href="/services/" className="btn btn-white">
            Explore our services
            <Arrow />
          </Link>
        </div>
      </div>
      <div className="hero-photo" aria-hidden="true">
        {slides.map((slide, slideIndex) => (
          <div key={slide.base} className={`hero-shot${slideIndex === index ? " is-on" : ""}`}>
            <PictureFill
              base={slide.base}
              alt={slide.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={slideIndex === 0}
            />
          </div>
        ))}
        <span className="hero-orb" />
        <span className="hero-ring hero-ring-a" />
        <span className="hero-ring hero-ring-b" />
        <span className="spark spark-a" />
        <span className="spark spark-b" />
        <span className="spark spark-c" />
        <div className="hero-curve" />
      </div>
    </>
  );
}
