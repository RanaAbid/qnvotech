import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import { getIndustry, industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.seoTitle,
    description: industry.description,
    path: `/industries/${industry.slug}/`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries/" },
        { name: industry.title, path: `/industries/${industry.slug}/` },
      ]}
      eyebrow="Industry"
      title={industry.h1}
      lede={industry.summary}
      extraGraph={[
        {
          "@type": "WebPage",
          name: industry.h1,
          url: absoluteUrl(`/industries/${industry.slug}/`),
          description: industry.description,
          isPartOf: { "@id": `${siteUrl}/#website` },
          about: {
            "@type": "Thing",
            name: industry.title,
          },
        },
      ]}
    >
      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="font-display text-[1.75rem] font-bold md:text-[2.25rem]">Sector realities</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {industry.realities.map((item) => (
              <li key={item} className="soft-card p-5 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-[1.75rem] font-bold md:text-[2.25rem]">Challenges we often hear</h2>
          <ul className="mt-6 grid gap-4">
            {industry.challenges.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mark-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5 9.2 17 19 7" />
                  </svg>
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-[1.75rem] font-bold md:text-[2.25rem]">How a typical engagement can help</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {industry.howWeHelp.map((item, index) => (
              <li key={item} className="soft-card flex gap-3 p-5">
                <span className="step-index step-index-sm">{index + 1}</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 font-display text-[1.75rem] font-bold md:text-[2.25rem]">Related services</h2>
          <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {industry.services.map((service) => (
              <li key={service.href}>
                <TextLink href={service.href}>{service.label}</TextLink>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl leading-relaxed text-slate">{industry.note}</p>
          <p className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn btn-blue">
              Discuss your sector
            </Link>
            <Link href="/industries/" className="btn btn-white">
              All industries
            </Link>
          </p>
        </Container>
      </section>
      <Cta />
    </InnerPage>
  );
}
