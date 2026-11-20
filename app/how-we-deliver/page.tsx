import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import { Container, TextLink } from "@/components/ui";
import {
  deliveryExpectations,
  deliveryPhases,
  deliveryServiceTracks,
} from "@/content/how-we-deliver";
import { absoluteUrl } from "@/lib/site";
import { pageMetadata, webPageNode } from "@/lib/seo";

const title = "How We Deliver Technology Projects | QNVO Technologies";
const description =
  "How QNVO Technologies delivers work: discover, write the scope, design and build, hand over, then continue only if a further agreement says so. Applies across AI, web, software, cloud and growth services. No invented fees or SLAs.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/how-we-deliver/",
});

export default function HowWeDeliverPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "How we deliver", path: "/how-we-deliver/" },
      ]}
      eyebrow="Delivery"
      title="How we deliver"
      lede="A delivery spine built on clarity: nothing becomes an obligation until it is written down. The same process covers AI, web, software, cloud, security and growth work — shaped by the scope, not by a slogan."
      extraGraph={[
        webPageNode({
          name: "How we deliver",
          description,
          path: "/how-we-deliver/",
        }),
        {
          "@type": "HowTo",
          name: "QNVO Technologies delivery process",
          description,
          step: deliveryPhases.map((phase, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: phase.title,
            text: phase.detail,
            url: `${absoluteUrl("/how-we-deliver/")}#${phase.id}`,
          })),
        },
      ]}
    >
      <section className="deliver-hero bg-[#e8eef5] py-14 md:py-20" aria-labelledby="deliver-overview-heading">
        <Container>
          <Reveal>
            <div className="deliver-hero-panel">
              <div className="deliver-hero-copy">
                <p className="eyebrow">Accountability</p>
                <h2 id="deliver-overview-heading" className="font-display text-[1.75rem] font-bold text-navy md:text-[2.35rem]">
                  Clarity before code
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
                  Every engagement follows the same disciplined path — whether the work is an AI agent, a storefront, an ERP change or a hardening review. Timelines and fees live in the agreement, not on this page.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact/" className="btn btn-blue">
                    Start a conversation
                  </Link>
                  <Link href="/services/" className="btn btn-outline">
                    Browse services
                  </Link>
                </div>
              </div>
              <ol className="deliver-hero-rail" aria-label="Delivery phases">
                {deliveryPhases.map((phase, index) => (
                  <li key={phase.id} className="deliver-hero-rail-item">
                    <span className="deliver-hero-rail-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="deliver-hero-rail-label">{phase.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="deliver-phases-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Phases</p>
            <h2 id="deliver-phases-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Five phases, one written path
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              Scroll the board. Each phase is a checkpoint — not a marketing promise.
            </p>
          </Reveal>
          <ol className="deliver-phase-board mt-10">
            {deliveryPhases.map((phase, index) => (
              <li key={phase.id} id={phase.id} className="deliver-phase-card">
                <Reveal variant={index % 2 === 0 ? "left" : "right"}>
                  <article className="deliver-phase-inner">
                    <p className="deliver-phase-index">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-2xl font-bold text-navy md:text-[1.85rem]">{phase.title}</h3>
                    <p className="mt-3 text-lg font-semibold text-slate">{phase.summary}</p>
                    <p className="mt-3 leading-relaxed text-slate">{phase.detail}</p>
                    <p className="deliver-phase-fit mt-5">{phase.serviceFit}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="deliver-expect-stage py-14 md:py-20" aria-labelledby="deliver-expect-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Working with us</p>
            <h2 id="deliver-expect-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              What you can expect
            </h2>
          </Reveal>
          <div className="deliver-expect-grid stagger-host mt-8">
            {deliveryExpectations.map((item) => (
              <Reveal key={item.title} variant="scale">
                <article className="deliver-expect-card">
                  <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="deliver-tracks-heading">
        <Container>
          <Reveal>
            <p className="eyebrow">Across services</p>
            <h2 id="deliver-tracks-heading" className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              One delivery spine for every service track
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-slate">
              The catalog lists what we discuss. Delivery explains how the work moves once a scope is written.
            </p>
          </Reveal>
          <div className="deliver-track-grid mt-8">
            {deliveryServiceTracks.map((track, index) => (
              <Reveal key={track.href} variant="scale">
                <Link href={track.href} className={`deliver-track-card deliver-track-card-${(index % 5) + 1}`}>
                  <p className="deliver-track-kicker">Service track</p>
                  <h3 className="font-display text-xl font-bold">{track.title}</h3>
                  <p className="mt-2 leading-relaxed">{track.body}</p>
                  <span className="deliver-track-cta">View services</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8">
            <TextLink href="/resources/">Browse the resources hub</TextLink>
          </p>
        </Container>
      </section>

      <Cta
        title="Ready to describe the problem?"
        body="Share the system, the users and the constraints. QNVO Technologies will say whether it fits a service on this site. That reply is not a quote."
      />
    </InnerPage>
  );
}
