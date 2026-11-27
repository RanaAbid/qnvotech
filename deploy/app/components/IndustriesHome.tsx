"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Motion";
import { Container } from "@/components/ui";

type IndustryTeaser = {
  slug: string;
  title: string;
  card: string;
};

const iconPaths: Record<string, React.ReactNode> = {
  "banking-fintech": (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14h2M11 14h6" />
    </>
  ),
  "ecommerce-retail": (
    <>
      <path d="M6 7h15l-1.5 8.5H8L6 7z" />
      <path d="M6 7 5 4H2" />
      <circle cx="9.5" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  "travel-hospitality": (
    <>
      <path d="M3 17h18" />
      <path d="M6 17V9l6-4 6 4v8" />
      <path d="M10 17v-4h4v4" />
    </>
  ),
  "healthcare-pharmaceuticals": (
    <>
      <path d="M9 3h6v5h5v6h-5v5H9v-5H4V8h5V3z" />
    </>
  ),
  "government-public-sector": (
    <>
      <path d="M4 20h16M6 20V10l6-5 6 5v10" />
      <path d="M9 20v-5h6v5M8 10h8" />
    </>
  ),
  "saas-technology": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 15V9h3a2 2 0 0 1 0 4H7M14 9h3v6" />
    </>
  ),
  "energy-oil-gas": (
    <>
      <path d="M12 3v10" />
      <path d="m8 9 4 4 4-4" />
      <path d="M5 19h14" />
      <path d="M8 15c0 2 1.8 4 4 4s4-2 4-4" />
    </>
  ),
  telecoms: (
    <>
      <path d="M5 19h14" />
      <path d="M8 19V9l4-5 4 5v10" />
      <path d="M10 12h4M10 15h4" />
    </>
  ),
};

function IndustryIcon({ slug }: { slug: string }) {
  return (
    <svg className="industry-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[slug] ?? (
        <>
          <circle cx="12" cy="12" r="7.5" />
          <path d="M12 8.5v7M8.5 12h7" />
        </>
      )}
    </svg>
  );
}

export function IndustriesHome({ items }: { items: IndustryTeaser[] }) {
  const stageRef = useRef<HTMLElement>(null);
  const spotlight = items[0];
  const tiles = items.slice(1, 7);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function onMove(event: PointerEvent) {
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      stage.style.setProperty("--spot-x", `${x}%`);
      stage.style.setProperty("--spot-y", `${y}%`);
    }

    stage.addEventListener("pointermove", onMove);
    return () => stage.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section ref={stageRef} className="industry-stage" aria-labelledby="industries-heading">
      <div className="industry-stage-glow" aria-hidden="true" />
      <div className="industry-stage-grid" aria-hidden="true" />
      <span className="industry-float industry-float-a" aria-hidden="true" />
      <span className="industry-float industry-float-b" aria-hidden="true" />
      <span className="industry-float industry-float-c" aria-hidden="true" />

      <Container className="relative z-10">
        <Reveal variant="blur">
          <div className="industry-head">
            <p className="anim-eyebrow eyebrow industry-eyebrow">Industries</p>
            <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 id="industries-heading" className="anim-title font-display text-[1.85rem] font-bold leading-tight md:text-4xl">
                  Sector constraints shape the scope
                </h2>
                <p className="anim-copy mt-4 text-lg text-slate">
                  Banking, retail, healthcare, public sector, SaaS and more — each page explains realities and related services without inventing client logos.
                </p>
              </div>
              <div className="industry-stat" aria-hidden="true">
                <span className="industry-stat-num">{String(items.length).padStart(2, "0")}</span>
                <span className="industry-stat-label">sectors mapped</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="industry-bento stagger-host mt-10" variant="scale">
          {spotlight ? (
            <Link href={`/industries/${spotlight.slug}/`} className="industry-tile industry-tile-feature group">
              <span className="industry-tile-sheen" aria-hidden="true" />
              <span className="industry-tile-index">01</span>
              <span className="industry-icon-wrap industry-icon-wrap-feature">
                <IndustryIcon slug={spotlight.slug} />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-white md:text-3xl">{spotlight.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-offwhite/90 md:text-lg">{spotlight.card}</p>
              <span className="industry-tile-cta mt-8">
                Explore sector
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ) : null}

          {tiles.map((item, index) => (
            <Link key={item.slug} href={`/industries/${item.slug}/`} className="industry-tile group">
              <span className="industry-tile-sheen" aria-hidden="true" />
              <span className="industry-tile-index">{String(index + 2).padStart(2, "0")}</span>
              <span className="industry-icon-wrap">
                <IndustryIcon slug={item.slug} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate md:text-base">{item.card}</p>
              <span className="industry-tile-cta industry-tile-cta-light mt-5">
                Read more
                <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </Reveal>

        <Reveal className="anim-cta mt-10">
          <div className="industry-rail" aria-hidden="true">
            <div className="industry-rail-track">
              {[...items, ...items].map((item, index) => (
                <span key={`${item.slug}-${index}`} className="industry-rail-item">
                  {item.title}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/industries/" className="btn btn-blue">
              Browse all industries
            </Link>
            <Link href="/technologies/" className="btn btn-white">
              Technologies we discuss
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
