"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { PictureFill } from "@/components/OptimizedImage";

type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  line: string;
  copy: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  base: string;
  alt: string;
};

/** Five keyword-focused slides; all copy stays in the DOM for crawlers. */
const slides: HeroSlide[] = [
  {
    id: "enterprise",
    eyebrow: "AI, web development and SEO company",
    title: "AI Agent, Web Development & Technology Services Company",
    line: "Enterprise software, ERP and automation shaped around a written scope.",
    copy: "QNVO Technologies is a technology services company for AI, web development, ecommerce, cloud, cybersecurity and technical SEO. Contact us to discuss a project. This site does not publish client names, prices or guaranteed search rankings.",
    primary: { href: "/contact/", label: "Discuss your project" },
    secondary: { href: "/services/", label: "Explore our services" },
    base: "/images/hero-systems",
    alt: "Two colleagues reviewing dashboards on a pair of monitors",
  },
  {
    id: "ai",
    eyebrow: "AI agent development company",
    title: "AI Agent Development and AI Automation Services",
    line: "Bounded AI tasks you can define, review and keep inside an approved tool set.",
    copy: "Discuss AI agent development company services, AI business process automation and machine learning for a prediction task with evaluation data you can provide. Outcomes are scoped in writing — not promised as autonomous operations.",
    primary: { href: "/services/ai-agent-development/", label: "AI agent development" },
    secondary: { href: "/services/#svc-group-ai", label: "All AI services" },
    base: "/images/hero-team",
    alt: "Three colleagues reviewing a laptop together in an office",
  },
  {
    id: "web",
    eyebrow: "Web development company",
    title: "Web, Ecommerce, Shopify and WordPress Development",
    line: "Business websites and storefronts — built for editors, buyers and search engines to read.",
    copy: "Browse web development company services, ecommerce website development, Shopify development, WordPress development, Wix, mobile apps and UI/UX design. Each page states who it is for and what a typical scope can include.",
    primary: { href: "/services/web-development/", label: "Web development" },
    secondary: { href: "/services/#svc-group-web-commerce", label: "Web and commerce" },
    base: "/images/hero-web",
    alt: "Two colleagues reviewing a website layout on a laptop",
  },
  {
    id: "cloud",
    eyebrow: "Cloud DevOps and cybersecurity",
    title: "Cloud DevOps, Cybersecurity and IT Support Services",
    line: "Environments, hardening and helpdesk coverage with access written into the agreement.",
    copy: "Talk through cloud DevOps, cybersecurity risk management, website security optimization, data backup and IT helpdesk support for systems you authorize — without invented uptime SLAs or 24/7 claims on this page.",
    primary: { href: "/services/cloud-devops/", label: "Cloud and DevOps" },
    secondary: { href: "/services/#svc-group-cloud-security", label: "Cloud and security" },
    base: "/images/hero-cloud",
    alt: "IT professionals reviewing infrastructure and cloud systems in an office",
  },
  {
    id: "growth",
    eyebrow: "Technical SEO for Google",
    title: "Technical SEO and Digital Marketing Setup Services",
    line: "Google crawlability, metadata and campaign setup — rankings and lead volume are not guaranteed here.",
    copy: "Explore technical SEO services for Google and search engines, plus digital marketing campaign setup and industry pages for banking, retail, healthcare and more. Prefer examples? Browse platforms and use cases without invented client wins.",
    primary: { href: "/services/technical-seo/", label: "Technical SEO" },
    secondary: { href: "/industries/", label: "Explore industries" },
    base: "/images/hero-growth",
    alt: "Colleagues reviewing SEO and digital marketing dashboards on a monitor",
  },
];

const INTERVAL_MS = 6500;

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function HeroPanel() {
  const labelId = useId();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useRef(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion.current) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion.current) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const active = slides[index];

  const pause = () => setPaused(true);
  const resume = () => {
    if (!reduceMotion.current) setPaused(false);
  };

  return (
    <div className="hero-carousel" role="region" aria-roledescription="carousel" aria-labelledby={labelId}>
      <div
        className="hero-grid hero-enter relative z-10 flex flex-col justify-center px-6 py-14 md:px-10 md:py-20 lg:px-16 lg:pr-24"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) resume();
        }}
      >
        <p id={labelId} className="sr-only">
          Featured QNVO Technologies service themes
        </p>
        <div className="hero-copy-stack">
          {slides.map((slide, slideIndex) => {
            const isOn = slideIndex === index;
            const TitleTag = slideIndex === 0 ? "h1" : "p";
            return (
              <div
                key={slide.id}
                className={`hero-copy${isOn ? " is-on" : ""}`}
                // Keep copy in the DOM for SEO; only park focus on inactive CTAs.
                {...(!isOn ? { inert: true } : {})}
              >
                <p className="anim-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-amber">{slide.eyebrow}</p>
                <TitleTag
                  className={`anim-title mt-4 max-w-xl font-display text-[2.05rem] font-bold leading-[1.08] text-white md:text-5xl lg:text-[3.05rem]${
                    slideIndex === 0 ? "" : " hero-slide-title"
                  }`}
                >
                  {slide.title}
                </TitleTag>
                <p className="mt-4 max-w-xl text-lg font-semibold text-white">{slide.line}</p>
                <p className="anim-copy mt-4 max-w-xl text-lg leading-relaxed text-offwhite">{slide.copy}</p>
                <div className="anim-cta mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={slide.primary.href} className="btn btn-blue" tabIndex={isOn ? undefined : -1}>
                    {slide.primary.label}
                    <Arrow />
                  </Link>
                  <Link href={slide.secondary.href} className="btn btn-white" tabIndex={isOn ? undefined : -1}>
                    {slide.secondary.label}
                    <Arrow />
                  </Link>
                </div>
              </div>
            );
          })}
          <p className="sr-only" aria-live="polite">
            Slide {index + 1} of {slides.length}: {active.eyebrow}
          </p>
        </div>

        <div className="hero-controls mt-10">
          <div className="hero-progress" aria-hidden="true">
            <span
              key={`${active.id}-${paused}`}
              className={`hero-progress-bar${paused ? " is-paused" : ""}`}
              style={{ animationDuration: `${INTERVAL_MS}ms` }}
            />
          </div>
          <div className="hero-control-row">
            <div className="hero-dots" role="tablist" aria-label="Hero slides">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={slideIndex === index}
                  aria-label={`Show slide ${slideIndex + 1}: ${slide.eyebrow}`}
                  className={`hero-dot${slideIndex === index ? " is-on" : ""}`}
                  onClick={() => goTo(slideIndex)}
                />
              ))}
            </div>
            <div className="hero-arrows">
              <button type="button" className="hero-arrow" aria-label="Previous slide" onClick={() => goTo(index - 1)}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button type="button" className="hero-arrow" aria-label="Next slide" onClick={() => goTo(index + 1)}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
              <button
                type="button"
                className="hero-pause"
                aria-pressed={paused}
                aria-label={paused ? "Play slides" : "Pause slides"}
                onClick={() => setPaused((value) => !value)}
              >
                {paused ? "Play" : "Pause"}
              </button>
              <p className="hero-count" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <em>/</em>
                {String(slides.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-photo" onMouseEnter={pause} onMouseLeave={resume}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.base}
            className={`hero-shot${slideIndex === index ? " is-on" : ""}`}
            aria-hidden={slideIndex !== index}
          >
            <PictureFill
              base={slide.base}
              alt={slide.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={slideIndex === 0}
            />
          </div>
        ))}
        <div className="hero-curve" aria-hidden="true" />
      </div>
    </div>
  );
}
