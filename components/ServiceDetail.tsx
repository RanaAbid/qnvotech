import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { StructuredData } from "@/components/JsonLd";
import { Reveal } from "@/components/Motion";
import { ServiceCard } from "@/components/ServiceCard";
import { Container, TextLink } from "@/components/ui";
import type { Insight } from "@/content/insights";
import type { Service } from "@/lib/data";
import { serviceGroups, servicesForGroup } from "@/lib/data";
import { breadcrumbNode, faqNode, serviceNode } from "@/lib/seo";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "audience", label: "Who it is for" },
  { id: "scope", label: "Scope" },
  { id: "approach", label: "Approach" },
  { id: "process", label: "Process" },
  { id: "technologies", label: "Technologies" },
  { id: "faq", label: "FAQ" },
] as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
      <path d="M5 12.5 9.2 17 19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function groupForService(service: Service, catalog: Service[]) {
  return serviceGroups.find((group) => servicesForGroup(group, catalog).some((item) => item.slug === service.slug));
}

export function ServiceDetail({
  service,
  catalog,
  related,
  relatedInsight,
  crumbs,
}: {
  service: Service;
  catalog: Service[];
  related: Service[];
  relatedInsight?: Insight;
  crumbs: Crumb[];
}) {
  const group = groupForService(service, catalog);

  return (
    <>
      <StructuredData data={[breadcrumbNode(crumbs), serviceNode(service), faqNode(service.faqs)]} />

      <header className="svc-detail-hero page-banner-enter">
        <div className="svc-detail-hero-glow" aria-hidden="true" />
        <Container className="relative z-10 py-12 md:py-16 lg:py-20">
          <Breadcrumbs items={crumbs} onDark />
          <div className="svc-detail-hero-grid mt-8">
            <div>
              <p className="anim-eyebrow svc-detail-kicker">
                {group ? group.title : "Service area"}
              </p>
              <div className="anim-title mt-5 flex flex-wrap items-start gap-4">
                <span className="svc-detail-icon" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.icon} alt="" width={40} height={40} decoding="async" />
                </span>
                <h1 className="min-w-0 flex-1 font-display text-[2rem] font-bold leading-[1.08] text-white md:text-[2.7rem] lg:text-[3.15rem]">
                  {service.h1}
                </h1>
              </div>
              <p className="anim-copy mt-5 max-w-2xl text-lg leading-relaxed text-offwhite md:text-xl">{service.summary}</p>
              <div className="anim-cta mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact/" className="btn btn-blue">
                  Discuss this service
                  <ArrowIcon />
                </Link>
                <Link href="/services/" className="btn btn-white">
                  All services
                  <ArrowIcon />
                </Link>
              </div>
              <nav className="svc-detail-jump" aria-label="On this page">
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="svc-detail-jump-link">
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>

            <aside className="svc-detail-panel anim-cta" aria-label="Service snapshot">
              <p className="svc-detail-panel-label">On this page</p>
              <ul className="svc-detail-stats">
                <li>
                  <strong>{String(service.deliverables.length).padStart(2, "0")}</strong>
                  <span>Scope items described</span>
                </li>
                <li>
                  <strong>{String(service.process.length).padStart(2, "0")}</strong>
                  <span>Delivery steps outlined</span>
                </li>
                <li>
                  <strong>{String(service.technologies.length).padStart(2, "0")}</strong>
                  <span>Tools that can be discussed</span>
                </li>
              </ul>
              <p className="svc-detail-panel-note">
                Counts describe this page&apos;s outline — not fees, timelines or results. Those belong in a written agreement.
              </p>
              <Link href="/contact/" className="svc-detail-panel-cta">
                Start a conversation
                <ArrowIcon />
              </Link>
              <Link href="/process/" className="svc-detail-panel-link">
                Read the delivery process
              </Link>
            </aside>
          </div>
        </Container>
      </header>

      <section className="svc-detail-body">
        <Container className="svc-detail-layout">
          <div className="svc-detail-main">
            <Reveal>
              <div className="svc-detail-duo">
                <article id="problem" className="svc-detail-story">
                  <p className="svc-detail-section-kicker">01 — Context</p>
                  <h2>The problem this service addresses</h2>
                  <p>{service.problem}</p>
                </article>
                <article id="audience" className="svc-detail-story svc-detail-story-tint">
                  <p className="svc-detail-section-kicker">02 — Fit</p>
                  <h2>Who it is for</h2>
                  <p>{service.audience}</p>
                </article>
              </div>
            </Reveal>

            <Reveal className="mt-14" variant="scale">
              <div id="scope" className="svc-detail-block">
                <div className="svc-detail-block-head">
                  <p className="svc-detail-section-kicker">03 — Scope</p>
                  <h2>What a typical scope can include</h2>
                  <p className="svc-detail-block-lede">
                    These are example inclusions for discussion. The written agreement names what is actually in and out of scope.
                  </p>
                </div>
                <ul className="svc-detail-check-grid">
                  {service.deliverables.map((item, index) => (
                    <li key={item}>
                      <span className="svc-detail-check-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="svc-detail-check-mark" aria-hidden="true">
                        <CheckIcon />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="mt-14" variant="left">
              <div id="approach" className="svc-detail-block">
                <div className="svc-detail-block-head">
                  <p className="svc-detail-section-kicker">04 — Approach</p>
                  <h2>How the work is approached</h2>
                </div>
                <ol className="svc-detail-approach">
                  {service.approach.map((item, index) => (
                    <li key={item}>
                      <span className="svc-detail-approach-num">{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal className="mt-14" variant="right">
              <div id="process" className="svc-detail-block svc-detail-process-wrap">
                <div className="svc-detail-block-head">
                  <p className="svc-detail-section-kicker">05 — Delivery</p>
                  <h2>Delivery process</h2>
                  <p className="svc-detail-block-lede">
                    A practical sequence for this service area. Checkpoints and owners are confirmed in the agreement for your project.
                  </p>
                </div>
                <ol className="svc-detail-timeline">
                  {service.process.map((item, index) => (
                    <li key={item}>
                      <span className="svc-detail-timeline-node" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal className="mt-14" variant="blur">
              <div id="technologies" className="svc-detail-block">
                <div className="svc-detail-block-head">
                  <p className="svc-detail-section-kicker">06 — Stack</p>
                  <h2>Technologies and tools</h2>
                  <p className="svc-detail-block-lede">
                    Only tools that fit the written scope are used. This list describes technologies QNVO Technologies can discuss for this
                    service — not a promise that every item appears in every engagement.
                  </p>
                </div>
                <ul className="svc-detail-techs">
                  {service.technologies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <div className="svc-detail-links">
                <TextLink href="/contact/">Discuss your project</TextLink>
                <span aria-hidden="true">·</span>
                <TextLink href="/process/">Read the delivery process</TextLink>
                {relatedInsight ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <TextLink href={`/insights/${relatedInsight.slug}/`}>
                      {relatedInsight.draft ? "Read the related draft insight" : "Read the related insight"}
                    </TextLink>
                  </>
                ) : null}
              </div>
            </Reveal>
          </div>

          <aside className="svc-detail-rail" aria-label="Service shortcuts">
            <div className="svc-detail-rail-card">
              <p className="svc-detail-rail-label">Next step</p>
              <h2 className="svc-detail-rail-title">Discuss {service.title}</h2>
              <p className="svc-detail-rail-copy">
                Share the workflow, users and systems involved. QNVO Technologies will say whether it fits this service area.
              </p>
              <Link href="/contact/" className="btn btn-blue w-full justify-center">
                Contact
                <ArrowIcon />
              </Link>
              <p className="svc-detail-rail-mail">
                Or email{" "}
                <a href="mailto:info@qnvotech.com">info@qnvotech.com</a>
              </p>
            </div>

            {group ? (
              <div className="svc-detail-rail-card svc-detail-rail-quiet">
                <p className="svc-detail-rail-label">Service group</p>
                <p className="svc-detail-rail-group">{group.title}</p>
                <p className="svc-detail-rail-copy">{group.blurb}</p>
                <TextLink href={`/services/#svc-group-${group.id}`}>View group on services</TextLink>
              </div>
            ) : null}

            {related.length ? (
              <div className="svc-detail-rail-card svc-detail-rail-quiet">
                <p className="svc-detail-rail-label">Related</p>
                <ul className="svc-detail-rail-related">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/services/${item.slug}/`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>

      <section className="svc-detail-related" aria-labelledby="related-heading">
        <Container>
          <Reveal>
            <p className="svc-detail-section-kicker text-blue">Continue exploring</p>
            <h2 id="related-heading" className="mt-2 font-display text-[1.75rem] font-bold text-navy md:text-[2.25rem]">
              Related services
            </h2>
          </Reveal>
          <Reveal
            className={`stagger-host mt-8 grid gap-6 ${
              related.length === 1 ? "md:grid-cols-1 max-w-xl" : related.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
            variant="scale"
          >
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </Reveal>
        </Container>
      </section>

      <section id="faq" className="svc-detail-faq" aria-labelledby="faq-heading">
        <Container>
          <Reveal>
            <p className="svc-detail-section-kicker">Questions</p>
            <h2 id="faq-heading" className="mt-2 font-display text-[1.75rem] font-bold text-navy md:text-[2.25rem]">
              Questions about this service
            </h2>
          </Reveal>
          <Reveal className="mt-8">
            <FaqList items={service.faqs} />
          </Reveal>
        </Container>
      </section>

      <Cta
        title={`Talk about ${service.title}`}
        body="Describe the workflow, the users and the systems involved. QNVO Technologies will tell you whether it fits this service."
      />
    </>
  );
}
