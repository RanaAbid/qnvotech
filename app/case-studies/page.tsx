import Link from "next/link";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import { caseStudies, caseStudyFaqs, useCasesByCategory } from "@/lib/data";
import { faqNode, pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { useCases } from "@/content/use-cases";

const title = "Case Studies and Use Cases";
const description =
  "QNVO Technologies work examples: BMS and CSM platform case studies, plus illustrative use cases across web, software, cloud, backup and support. No invented metrics.";

export const metadata = pageMetadata({
  title: "Case Studies and Use Cases | QNVO Technologies",
  description,
  path: "/case-studies/",
});

export default function CaseStudiesPage() {
  const groupedUseCases = useCasesByCategory();

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Case studies", path: "/case-studies/" },
      ]}
      eyebrow="Work"
      title={title}
      lede="QNVO Technologies presents two enterprise platforms in depth — BMS and CSM — then a set of illustrative use cases: common challenge shapes and approaches mapped to our service areas. None of these entries are named client wins. Measured results are published only with permission."
      extraGraph={[
        {
          "@type": "CollectionPage",
          name: title,
          url: absoluteUrl("/case-studies/"),
          description,
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              ...caseStudies.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `${item.code}: ${item.title}`,
                url: absoluteUrl(`/case-studies/#${item.id}`),
              })),
              ...useCases.map((item, index) => ({
                "@type": "ListItem",
                position: caseStudies.length + index + 1,
                name: item.title,
                url: absoluteUrl(`/case-studies/#${item.id}`),
              })),
            ],
          },
        },
        faqNode(caseStudyFaqs),
      ]}
    >
      <section className="bg-[#e8eef5] py-16 md:py-24" aria-labelledby="platform-studies-heading">
        <Container>
          <h2 id="platform-studies-heading" className="font-display text-[1.85rem] font-bold md:text-4xl">
            Platform case studies
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Deep looks at two enterprise platforms and the engineering that kind of work involves.
          </p>
          <div className="mt-10 grid gap-8">
            {caseStudies.map((item, index) => (
              <article id={item.id} key={item.id} className="scroll-mt-36 overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_40px_rgba(2,40,95,0.08)]">
                <div className={`relative overflow-hidden px-8 py-8 text-white md:px-10 ${index === 0 ? "bg-navy" : "bg-[#03306f]"}`}>
                  <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
                  <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-amber">Platform case study</p>
                  <p className="relative mt-3 font-display text-4xl font-bold text-white md:text-5xl">{item.code}</p>
                  <h3 className="relative mt-2 max-w-3xl font-display text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-8 md:p-10">
                  <h4 className="font-display text-xl font-semibold text-navy">What it is</h4>
                  <p className="mt-3 text-lg leading-relaxed">{item.what}</p>
                  <h4 className="mt-8 font-display text-xl font-semibold text-navy">The engineering involved</h4>
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
                  <h4 className="mt-8 font-display text-xl font-semibold text-navy">Services this maps to</h4>
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
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="use-cases-heading">
        <Container>
          <h2 id="use-cases-heading" className="font-display text-[1.85rem] font-bold md:text-4xl">
            Illustrative use cases
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Common challenge shapes and approaches across web, software, cloud, backup and support. These patterns help you recognize similar work. They are not anonymized guarantees, client logos or published outcome metrics.
          </p>

          {groupedUseCases.map((group) => (
            <div
              key={group.category}
              id={`use-case-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              className="mt-14 scroll-mt-36"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-blue">{group.category}</h3>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {group.items.map((item) => (
                  <article id={item.id} key={item.id} className="soft-card scroll-mt-36 p-6 md:p-8">
                    <h4 className="font-display text-xl font-semibold text-navy">{item.title}</h4>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate/70">Challenge</p>
                    <p className="mt-2 leading-relaxed">{item.challenge}</p>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-slate/70">Approach</p>
                    <p className="mt-2 leading-relaxed">{item.approach}</p>
                    <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
                      {item.services.map((service) => (
                        <li key={service.href}>
                          <TextLink href={service.href}>{service.label}</TextLink>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-12 max-w-3xl leading-relaxed text-slate">
            No client names, conversion rates, uptime percentages or testimonials are attached to these use cases. If a measured result is published later, it will be real and permissioned.
          </p>
          <p className="mt-8">
            <Link href="/contact/" className="btn btn-blue">
              Discuss a similar workflow
            </Link>
          </p>
        </Container>
      </section>

      <section className="bg-[#e8eef5] py-16 md:py-20" aria-labelledby="case-faq-heading">
        <Container>
          <h2 id="case-faq-heading" className="font-display text-[1.85rem] font-bold md:text-4xl">
            Questions about this work
          </h2>
          <div className="mt-8">
            <FaqList items={caseStudyFaqs} />
          </div>
        </Container>
      </section>
      <Cta
        title="Tell us about your workflow."
        body="Describe the users, the data and the systems involved. A message starts a conversation. It is not a quote or a contract."
      />
    </InnerPage>
  );
}
