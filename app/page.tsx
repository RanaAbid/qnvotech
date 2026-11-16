import Link from "next/link";
import dynamic from "next/dynamic";
import { HeroPanel } from "@/components/HeroMotion";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { HomeMarquee } from "@/components/HomeMarquee";
import { LogoIntro } from "@/components/LogoIntro";
import { Reveal } from "@/components/Motion";
import { ColorBand } from "@/components/SectionBackdrop";
import { ServiceCard } from "@/components/ServiceCard";
import { Container, TextLink } from "@/components/ui";
import { StructuredData } from "@/components/JsonLd";
import { industries } from "@/content/industries";
import { caseStudies, faqs, processSteps, services, servicesInOrder } from "@/lib/data";
import { breadcrumbNode, pageMetadata, webPageNode } from "@/lib/seo";
import { getServices } from "@/lib/sanity";

const ProcessFilm = dynamic(() => import("@/components/ProcessFilm").then((mod) => mod.ProcessFilm), {
  loading: () => <section className="process-film" aria-hidden="true" />,
});
const IndustriesHome = dynamic(() => import("@/components/IndustriesHome").then((mod) => mod.IndustriesHome));

const homeTitle = "AI, Web Development & Technical SEO Company | QNVO Technologies";
const homeDescription =
  "QNVO Technologies is an AI, web development and technical SEO company for businesses — plus ecommerce, Shopify, WordPress, cloud DevOps and cybersecurity. Serving USA, UK, Middle East and Pakistan. No fake rankings or client lists on this site.";

export const metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

export default async function HomePage() {
  const catalog = await getServices();
  const ordered = servicesInOrder(services);
  const loop = [...ordered, ...ordered];

  return (
    <>
      <LogoIntro />
      <StructuredData
        data={[
          webPageNode({
            name: "AI, Web Development & Technical SEO Company",
            description: homeDescription,
            path: "/",
          }),
          breadcrumbNode([{ name: "Home", path: "/" }]),
        ]}
      />
      <section className="hero-shell">
        <HeroPanel />
      </section>

      <HomeMarquee items={loop.map((service) => service.title)} />

      <section className="bg-[#e8eef5] py-16 md:py-24" aria-labelledby="about-heading">
        <Container className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-navy px-7 py-10 text-white shadow-[0_24px_50px_rgba(2,40,95,0.18)] md:px-10 md:py-12">
              <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
              <span className="cta-orb cta-orb-a" aria-hidden="true" />
              <div className="relative">
                <p className="anim-eyebrow text-sm font-semibold uppercase tracking-[0.16em] text-amber">About QNVO</p>
                <h2 id="about-heading" className="anim-title mt-4 max-w-md font-display text-[1.85rem] font-bold leading-tight text-white md:text-4xl">
                  Technology services for businesses that want a written scope
                </h2>
                <p className="anim-copy mt-5 max-w-md text-lg leading-relaxed text-offwhite">
                  The work starts with the users, the data, and the systems you already run. Fees, timelines, and deliverables belong in an agreement, not in a slogan.
                </p>
              </div>
              <div className="anim-cta relative mt-8">
                <Link href="/about/" className="btn btn-blue">
                  Read about QNVO Technologies
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right">
            <ol className="stagger-host flex h-full flex-col gap-4">
              {processSteps.slice(0, 3).map((step, index) => (
                <li key={step.title} className="soft-card flex flex-1 items-start gap-4 p-5 md:p-6">
                  <p className="step-index shrink-0">0{index + 1}</p>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-16 md:py-24" aria-labelledby="services-heading">
        <Container>
          <Reveal variant="blur">
            <p className="anim-eyebrow eyebrow">Our services</p>
            <h2 id="services-heading" className="anim-title mt-3 max-w-3xl font-display text-[1.85rem] font-bold leading-tight md:text-4xl">
              AI services first, then web, software and operations
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg">
              Every page says who the service is for, what a typical scope can include, and what QNVO Technologies does not promise. The full catalog includes Shopify, WordPress, Wix and related capability areas.
            </p>
          </Reveal>
          <Reveal className="stagger-host mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3" variant="scale">
            {catalog.filter((service) => service.slug.startsWith("ai-")).map((service) => (
              <ServiceCard key={service.slug} service={service} featured />
            ))}
          </Reveal>
          <Reveal className="stagger-host mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {catalog
              .filter((service) => !service.slug.startsWith("ai-"))
              .slice(0, 9)
              .map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
          </Reveal>
          <Reveal className="anim-cta mt-8">
            <TextLink href="/services/">Browse all {catalog.length} service areas</TextLink>
          </Reveal>
        </Container>
      </section>

      <ProcessFilm />

      <IndustriesHome
        items={industries.map((item) => ({
          slug: item.slug,
          title: item.title,
          card: item.card,
        }))}
      />

      <section className="bg-white py-16 md:py-20" aria-labelledby="work-heading">
        <Container>
          <Reveal variant="left">
            <p className="anim-eyebrow eyebrow">Published work</p>
            <h2 id="work-heading" className="anim-title mt-3 font-display text-[1.85rem] font-bold md:text-4xl">
              Platforms and illustrative use cases
            </h2>
            <p className="anim-copy mt-4 max-w-3xl text-lg">
              BMS and CSM in depth, plus use-case patterns across web, software, cloud and support. Measured results are published only with permission.
            </p>
          </Reveal>
          <Reveal className="stagger-host mt-8 grid gap-6 lg:grid-cols-2" variant="right">
            {caseStudies.map((item) => (
              <article key={item.id} className="service-card soft-card relative overflow-hidden p-8">
                <p className="font-display text-sm font-bold tracking-[0.16em] text-blue">{item.code}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3">{item.summary}</p>
                <p className="mt-5">
                  <TextLink href={`/case-studies/#${item.id}`}>Read the {item.code} case study</TextLink>
                </p>
              </article>
            ))}
          </Reveal>
          <Reveal className="anim-cta mt-8">
            <TextLink href="/case-studies/#use-cases-heading">Browse illustrative use cases</TextLink>
          </Reveal>
        </Container>
      </section>

      <ColorBand tone="deep" className="py-16 md:py-20" aria-labelledby="home-faq-heading">
        <Container>
          <Reveal variant="blur">
            <p className="anim-eyebrow eyebrow">Questions</p>
            <h2 id="home-faq-heading" className="anim-title mt-3 font-display text-[1.85rem] font-bold md:text-4xl">
              Straight answers
            </h2>
          </Reveal>
          <Reveal className="mt-8">
            <FaqList items={faqs.slice(0, 3)} />
          </Reveal>
          <Reveal className="anim-cta mt-6">
            <TextLink href="/faq/">Read all frequently asked questions</TextLink>
          </Reveal>
        </Container>
      </ColorBand>
      <Cta />
    </>
  );
}
