import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { StructuredData } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { Container, TextLink } from "@/components/ui";
import { technologyGroups, technologyItemCount, type TechnologyGroup } from "@/content/technologies";
import { breadcrumbNode } from "@/lib/seo";

const groupIcons: Record<string, ReactNode> = {
  "web-product": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 19h8" />
    </svg>
  ),
  "commerce-cms": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16l-1.2 11.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 7Z" />
      <path d="M9 7V5.5A3 3 0 0 1 12 2.5 3 3 0 0 1 15 5.5V7" />
    </svg>
  ),
  "apis-data": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 7h8M8 12h8M8 17h5" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>
  ),
  "cloud-devops": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.5 1.5A3.5 3.5 0 0 0 7 17Z" />
    </svg>
  ),
  "security-backup": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L14.8 10" />
    </svg>
  ),
  "ai-mobile": (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="8" y="2.5" width="8" height="19" rx="2" />
      <path d="M11 18.5h2M10 6h4" />
    </svg>
  ),
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function TechGroupCard({ group, index }: { group: TechnologyGroup; index: number }) {
  const onDark = group.accent === "navy" || group.accent === "deep";
  return (
    <article
      id={group.id}
      className={`tech-group tech-group-${group.accent}`}
      aria-labelledby={`tech-title-${group.id}`}
    >
      <div className="tech-group-glow" aria-hidden="true" />
      <Container className="relative z-10">
        <Reveal variant={index % 2 === 0 ? "left" : "right"}>
          <div className="tech-group-head">
            <div className={`tech-group-icon${onDark ? " is-on-dark" : ""}`}>{groupIcons[group.id]}</div>
            <div>
              <p className="tech-group-kicker">Group {String(index + 1).padStart(2, "0")}</p>
              <h2 id={`tech-title-${group.id}`} className="tech-group-title">
                {group.title}
              </h2>
              <p className="tech-group-summary">{group.summary}</p>
            </div>
          </div>

          <div className="tech-chip-grid mt-8">
            {group.items.map((item, itemIndex) => (
              <div key={item} className={`tech-chip${onDark ? " is-on-dark" : ""}`}>
                <span className="tech-chip-index">{String(itemIndex + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="tech-group-related mt-8">
            <p className="tech-related-label">Related services</p>
            <ul>
              {group.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </article>
  );
}

export function TechnologiesShowcase({
  crumbs,
  title,
  graph,
}: {
  crumbs: Crumb[];
  title: string;
  graph: Record<string, unknown>[];
}) {
  const itemCount = technologyItemCount();

  return (
    <>
      <StructuredData data={[breadcrumbNode(crumbs), ...graph]} />

      <header className="tech-hero page-banner-enter">
        <div className="tech-hero-glow" aria-hidden="true" />
        <div className="tech-hero-grid-bg" aria-hidden="true" />
        <Container className="relative z-10 py-12 md:py-16 lg:py-20">
          <Breadcrumbs items={crumbs} onDark />
          <div className="tech-hero-layout mt-8">
            <div>
              <p className="anim-eyebrow tech-hero-kicker">Technologies</p>
              <h1 className="anim-title mt-4 max-w-3xl font-display text-[2rem] font-bold leading-[1.08] text-white md:text-[2.7rem] lg:text-[3.15rem]">
                {title}
              </h1>
              <p className="anim-copy mt-5 max-w-2xl text-lg leading-relaxed text-offwhite md:text-xl">
                Tools are chosen for the problem, the team that will operate them and the licenses you can hold. These lists describe
                technologies QNVO Technologies can discuss — not partner badges, and not a promise every item appears in every engagement.
              </p>
              <div className="anim-cta mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact/" className="btn btn-blue">
                  Discuss your stack
                  <ArrowIcon />
                </Link>
                <Link href="/services/" className="btn btn-white">
                  Browse services
                  <ArrowIcon />
                </Link>
              </div>
              <nav className="tech-jump" aria-label="Technology groups">
                {technologyGroups.map((group) => (
                  <a key={group.id} href={`#${group.id}`} className="tech-jump-link">
                    {group.shortTitle}
                    <span>{group.items.length}</span>
                  </a>
                ))}
              </nav>
            </div>

            <aside className="tech-hero-panel anim-cta" aria-label="Catalogue snapshot">
              <p className="tech-hero-panel-label">Catalogue snapshot</p>
              <ul className="tech-hero-stats">
                <li>
                  <strong>{String(technologyGroups.length).padStart(2, "0")}</strong>
                  <span>Technology groups</span>
                </li>
                <li>
                  <strong>{String(itemCount).padStart(2, "0")}</strong>
                  <span>Discussable capabilities</span>
                </li>
                <li>
                  <strong>00</strong>
                  <span>Partner badges claimed here</span>
                </li>
              </ul>
              <p className="tech-hero-panel-note">
                Counts describe this page only. Vendor choice, licenses and fees belong in a written agreement.
              </p>
              <Link href="/process/" className="tech-hero-panel-link">
                Read how delivery is scoped
              </Link>
            </aside>
          </div>
        </Container>
      </header>

      <div className="tech-catalog">
        {technologyGroups.map((group, index) => (
          <TechGroupCard key={group.id} group={group} index={index} />
        ))}
      </div>

      <section className="tech-footer-band">
        <Container>
          <Reveal>
            <p className="tech-footer-kicker">Start from the problem</p>
            <h2 className="tech-footer-title">Prefer services or process over a toolchain list?</h2>
            <p className="tech-footer-copy">
              Browse the service catalogue or read how QNVO Technologies writes scope before tools are named.{" "}
              <TextLink href="/services/">Browse services</TextLink>
              {" · "}
              <TextLink href="/process/">Delivery process</TextLink>
              {" · "}
              <TextLink href="/industries/">Industries</TextLink>
            </p>
            <Link href="/contact/" className="btn btn-blue mt-8">
              Discuss your stack constraints
              <ArrowIcon />
            </Link>
          </Reveal>
        </Container>
      </section>

      <Cta
        title="Discuss the stack you can operate"
        body="Tell us which systems you already run and who will own them after handover. QNVO Technologies will say what fits a written scope."
      />
    </>
  );
}
