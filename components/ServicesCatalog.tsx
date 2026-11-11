"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Motion";
import { Container, TextLink } from "@/components/ui";
import type { Service, ServiceGroup } from "@/lib/data";

type CatalogGroup = {
  id: string;
  title: string;
  shortTitle: string;
  blurb: string;
  tone: ServiceGroup["tone"];
  items: Service[];
};

function gridModifier(count: number): string {
  if (count <= 1) return "svc-grid-1";
  if (count === 2) return "svc-grid-2";
  if (count === 3) return "svc-grid-3";
  if (count === 4) return "svc-grid-4";
  if (count === 7) return "svc-grid-7";
  if (count % 3 === 1) return "svc-grid-fill-last";
  if (count % 3 === 2) return "svc-grid-pair-last";
  return "svc-grid-even";
}

function CatalogCard({
  service,
  index,
  onDark = false,
}: {
  service: Service;
  index: number;
  onDark?: boolean;
}) {
  return (
    <Link href={`/services/${service.slug}/`} className={onDark ? "svc-tile svc-tile-feature group" : "svc-tile group"}>
      <span className="svc-tile-sheen" aria-hidden="true" />
      <span className="svc-tile-top">
        <span className={onDark ? "icon-tile relative bg-white" : "icon-tile"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.icon} alt="" width={32} height={32} decoding="async" />
        </span>
        <span className="svc-tile-index">{String(index + 1).padStart(2, "0")}</span>
      </span>
      <h3 className={`relative mt-5 font-display font-semibold ${onDark ? "text-2xl text-white md:text-[1.7rem]" : "text-xl text-navy"}`}>
        {service.title}
      </h3>
      <p className={`relative mt-3 flex-1 leading-relaxed ${onDark ? "text-base text-offwhite" : "text-base text-slate"}`}>
        {service.card}
      </p>
      <span className={`svc-tile-cta relative mt-6 ${onDark ? "" : "text-blue"}`}>
        Explore service
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}

export function ServicesCatalog({ groups, total }: { groups: CatalogGroup[]; total: number }) {
  const [active, setActive] = useState(groups[0]?.id ?? "");

  useEffect(() => {
    const nodes = groups
      .map((group) => document.getElementById(`svc-group-${group.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id.replace("svc-group-", ""));
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [groups]);

  return (
    <div className="svc-catalog">
      <div className="svc-catalog-nav-wrap">
        <Container>
          <div className="svc-catalog-nav" role="navigation" aria-label="Service groups">
            <p className="svc-catalog-nav-count">
              <span>{String(total).padStart(2, "0")}</span>
              <em>services</em>
            </p>
            <div className="svc-catalog-chips">
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#svc-group-${group.id}`}
                  className={active === group.id ? "svc-chip svc-chip-active" : "svc-chip"}
                  onClick={() => setActive(group.id)}
                >
                  {group.shortTitle}
                  <span>{group.items.length}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {groups.map((group, groupIndex) => {
        const onDark = group.tone === "navy" || group.tone === "deep";
        return (
          <section
            key={group.id}
            id={`svc-group-${group.id}`}
            className={`svc-group svc-group-${group.tone}`}
            aria-labelledby={`svc-group-title-${group.id}`}
          >
            <div className="svc-group-glow" aria-hidden="true" />
            <Container className="relative z-10">
              <Reveal variant={groupIndex % 2 === 0 ? "left" : "right"}>
                <div className="svc-group-head">
                  <p className="svc-group-kicker">Group {String(groupIndex + 1).padStart(2, "0")}</p>
                  <h2 id={`svc-group-title-${group.id}`} className="svc-group-title">
                    {group.title}
                  </h2>
                  <p className="svc-group-blurb">{group.blurb}</p>
                </div>
              </Reveal>

              <Reveal className={`svc-grid stagger-host mt-8 ${gridModifier(group.items.length)}`} variant="scale">
                {group.items.map((service, index) => (
                  <CatalogCard key={service.slug} service={service} index={index} onDark={onDark} />
                ))}
              </Reveal>
            </Container>
          </section>
        );
      })}

      <section className="svc-catalog-footer">
        <Container>
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-slate">
              Every service page states who it is for, what a typical scope can include, and what QNVO Technologies does not promise. Prefer examples over catalogues?{" "}
              <TextLink href="/case-studies/">Browse platforms and use cases</TextLink>
              {" · "}
              <TextLink href="/industries/">Explore industries</TextLink>
            </p>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
