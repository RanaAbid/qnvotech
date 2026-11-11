import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Container, TextLink } from "@/components/ui";
import {
  aboutDifferentiators,
  aboutIntro,
  aboutPractice,
  aboutPullQuote,
  aboutStandards,
} from "@/content/about";
import { processSteps, regions } from "@/lib/data";
import { pageMetadata, webPageNode } from "@/lib/seo";
import { tagline } from "@/lib/site";

const aboutTitle = "About Our Software and AI Firm | QNVO Technologies";
const aboutDescription =
  "About QNVO Technologies — who we are, what makes the approach different, and the standards behind a written scope. No invented client counts or office addresses.";

export const metadata = pageMetadata({
  title: aboutTitle,
  description: aboutDescription,
  path: "/about/",
});

const letters = [
  {
    term: "Quality",
    detail: "Requirements and review points are written down before build work is treated as agreed.",
  },
  {
    term: "Next-Gen",
    detail: "Current software and AI are used where they fit the task, with a person able to check the result.",
  },
  {
    term: "Vision",
    detail: "A system is described in terms of the people who will use it, not only the tools used to build it.",
  },
  {
    term: "Operations",
    detail: "Software is discussed in the context of day-to-day work: the steps, the data and the hand-off.",
  },
];

export default function AboutPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about/" },
      ]}
      eyebrow={aboutIntro.eyebrow}
      title="About QNVO Technologies"
      lede="QNVO Technologies is a technology services company for software, AI, web, ecommerce, cloud and related work. This page states how we talk about that work — without inventing client proof, prices or office addresses."
      extraGraph={[
        webPageNode({
          name: "About QNVO Technologies",
          description: aboutDescription,
          path: "/about/",
          type: "AboutPage",
        }),
      ]}
    >
      <section className="about-who bg-white py-14 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,22rem)]">
          <Reveal variant="left">
            <p className="anim-eyebrow eyebrow">{aboutIntro.eyebrow}</p>
            <h2 className="anim-title mt-3 font-display text-[1.75rem] font-bold md:text-[2.35rem]">{aboutIntro.title}</h2>
            <div className="anim-copy mt-5 grid gap-4 text-lg leading-relaxed">
              {aboutIntro.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="about-quote mt-8">
              <p>{aboutPullQuote}</p>
            </blockquote>
            <p className="anim-cta mt-8 flex flex-wrap gap-x-5 gap-y-2">
              <TextLink href="/contact/">Discuss a project</TextLink>
              <TextLink href="/process/">Read the process</TextLink>
            </p>
          </Reveal>
          <Reveal variant="right">
            <div className="about-logo-card soft-card p-5 md:p-6">
              <OptimizedImage
                base="/logo/qnvo-logo-full-lockup-transparent"
                alt="QNVO Technologies"
                width={448}
                height={280}
                sizes="(min-width: 1024px) 352px, 100vw"
                className="h-auto w-full"
              />
              <p className="mt-4 text-sm leading-relaxed text-slate">{tagline}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-14 md:py-20" aria-labelledby="about-name-heading">
        <Container>
          <Reveal>
            <p className="anim-eyebrow eyebrow">The name</p>
            <h2 id="about-name-heading" className="anim-title mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              What QNVO stands for
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg">Quality • Next-Gen • Vision • Operations — four words that frame how work is discussed on this site.</p>
          </Reveal>
          <Reveal className="stagger-host mt-8 grid gap-4 sm:grid-cols-2" variant="scale">
            {letters.map((item) => (
              <article key={item.term} className="soft-card p-5 md:p-6">
                <p className="step-index text-base">{item.term.slice(0, 1)}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.term}</h3>
                <p className="mt-2 leading-relaxed">{item.detail}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="about-diff-heading">
        <Container>
          <Reveal>
            <p className="anim-eyebrow eyebrow">Approach</p>
            <h2 id="about-diff-heading" className="anim-title mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              What actually makes this different
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg">
              Not a buzzword list — the practices this site commits to in public. None of these items invent headcount, ratings or 24/7 coverage.
            </p>
          </Reveal>
          <Reveal className="stagger-host mt-8 grid gap-4 md:grid-cols-2" variant="rise">
            {aboutDifferentiators.map((item, index) => (
              <article key={item.title} className="about-pillar soft-card p-6">
                <p className="font-display text-sm font-bold tracking-[0.14em] text-blue">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="about-standards py-14 md:py-20" aria-labelledby="about-standards-heading">
        <Container>
          <Reveal>
            <p className="anim-eyebrow eyebrow text-amber">Standards</p>
            <h2 id="about-standards-heading" className="anim-title mt-3 font-display text-[1.75rem] font-bold text-white md:text-[2.25rem]">
              The standards we hold the conversation to
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg text-offwhite">
              These are working rules for how QNVO Technologies talks about delivery — not marketing awards or invented client scores.
            </p>
          </Reveal>
          <Reveal className="stagger-host mt-8 grid gap-4 sm:grid-cols-2" variant="scale">
            {aboutStandards.map((item) => (
              <article key={item.title} className="about-standard-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-14 md:py-20" aria-labelledby="about-practice-heading">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <Reveal variant="left">
            <p className="anim-eyebrow eyebrow">{aboutPractice.kicker}</p>
            <h2 id="about-practice-heading" className="anim-title mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              {aboutPractice.title}
            </h2>
            <p className="anim-copy mt-4 text-lg leading-relaxed">{aboutPractice.body}</p>
            <p className="anim-cta mt-6">
              <Link href="/process/" className="btn btn-blue">
                Full process
              </Link>
            </p>
          </Reveal>
          <Reveal variant="right">
            <ol className="about-process-list">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" aria-labelledby="about-markets-heading">
        <Container>
          <Reveal>
            <p className="anim-eyebrow eyebrow">Audiences</p>
            <h2 id="about-markets-heading" className="anim-title mt-3 font-display text-[1.75rem] font-bold md:text-[2.25rem]">
              Written for these markets
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg">
              Business English on this site is written for organizations in the audiences below. A market listed here is not an office address, a registered branch or a headcount claim.
            </p>
            <ul className="stagger-host mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {regions.map((region) => (
                <li key={region} className="soft-card px-5 py-4 font-display text-lg font-semibold text-navy">
                  {region}
                </li>
              ))}
            </ul>
            <p className="anim-copy mt-8 max-w-3xl leading-relaxed text-slate">
              Client names, testimonials, prices, founding year, certifications, social profiles and street addresses are omitted until they are verified for publication.
            </p>
            <p className="anim-cta mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <TextLink href="/services/">Explore our services</TextLink>
              <TextLink href="/industries/">Browse industries</TextLink>
              <TextLink href="/technologies/">Technologies we discuss</TextLink>
              <TextLink href="/case-studies/">Published work</TextLink>
            </p>
          </Reveal>
        </Container>
      </section>

      <Cta
        title="Ready to discuss a project?"
        body="Describe the users, the data and the systems involved. A message starts a conversation. It is not a quote or a contract."
      />
    </InnerPage>
  );
}
