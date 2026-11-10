import Link from "next/link";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { ColorBand } from "@/components/SectionBackdrop";
import { Container, TextLink } from "@/components/ui";
import { caseStudies, caseStudyFaqs } from "@/lib/data";
import { faqNode, pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";

const title = "Case Studies: BMS & CSM Enterprise Platforms";
const description =
  "QNVO Technologies case studies: enterprise platform work on BMS and CSM — web development, modernization, performance and security. No hype, just the work.";

export const metadata = pageMetadata({
  title: "Case Studies: BMS & CSM Platforms | QNVO Technologies",
  description,
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Case studies", path: "/case-studies/" },
      ]}
      eyebrow="Case studies"
      title={title}
      lede="QNVO Technologies works on enterprise platforms: large, real systems that teams rely on every day. This page presents two such platforms in depth — BMS, a business management platform, and CSM (Cognitive Security Management), a security management platform. Each entry below covers what the platform is, the engineering it involves, and the QNVO services behind that kind of work. Measured results are published only with permission, so this page describes the work itself — not invented outcomes."
      extraGraph={[
        {
          "@type": "CollectionPage",
          name: title,
          url: absoluteUrl("/case-studies/"),
          description,
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: caseStudies.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `${item.code}: ${item.title}`,
              url: absoluteUrl(`/case-studies/#${item.id}`),
              item: {
                "@type": "Service",
                name: `${item.code}: ${item.title}`,
                description: item.summary,
                provider: { "@id": `${siteUrl}/#organization` },
                url: absoluteUrl(`/case-studies/#${item.id}`),
              },
            })),
          },
        },
        faqNode(caseStudyFaqs),
      ]}
    >
      <section className="bg-[#e8eef5] py-16 md:py-24">
        <Container className="grid gap-8">
          {caseStudies.map((item, index) => (
            <article id={item.id} key={item.id} className="scroll-mt-36 overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_40px_rgba(2,40,95,0.08)]">
              <div className={`relative overflow-hidden px-8 py-8 text-white md:px-10 ${index === 0 ? "bg-navy" : "bg-[#03306f]"}`}>
                <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-amber">Platform case study</p>
                <p className="relative mt-3 font-display text-4xl font-bold text-white md:text-5xl">{item.code}</p>
                <h2 className="relative mt-2 max-w-3xl font-display text-2xl font-bold text-white">{item.title}</h2>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-xl font-semibold text-navy">What it is</h3>
                <p className="mt-3 text-lg leading-relaxed">{item.what}</p>
                <h3 className="mt-8 font-display text-xl font-semibold text-navy">The engineering involved</h3>
                <ul className="mt-4 grid gap-4">
                  {item.engineering.map((point) => (
                    <li key={point.label} className="flex gap-3">
                      <span className="mark-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
                          <path d="M5 12.5 9.2 17 19 7" />
                        </svg>
                      </span>
                      <span>
                        <strong className="font-semibold text-navy">{point.label}.</strong> {point.body}
                      </span>
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 font-display text-xl font-semibold text-navy">Services this maps to</h3>
                <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {item.services.map((service) => (
                    <li key={service.href}>
                      <TextLink href={service.href}>{service.label}</TextLink>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 leading-relaxed text-slate">{item.notClaimed}</p>
                <p className="mt-8">
                  <Link href="/contact/" className="btn btn-blue">
                    Tell us about your platform
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <ColorBand tone="amber" className="py-16 md:py-20" aria-labelledby="case-faq-heading">
        <Container>
          <h2 id="case-faq-heading" className="font-display text-[1.85rem] font-bold text-white md:text-4xl">
            Questions about these platforms
          </h2>
          <div className="mt-8">
            <FaqList items={caseStudyFaqs} />
          </div>
        </Container>
      </ColorBand>
      <Cta title="Tell us about your platform." body="Describe the workflow the platform must support. A message starts a conversation. It is not a quote or a contract." />
    </InnerPage>
  );
}
