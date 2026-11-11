import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Container, TextLink } from "@/components/ui";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";

const title = "Industry Software, AI and Digital Services";
const description =
  "QNVO Technologies discusses AI, web development, cloud, cybersecurity and digital services for banking, retail, healthcare, public sector, SaaS and other industries. No invented client logos or guaranteed outcomes.";

export const metadata = pageMetadata({
  title: "Industry AI, Web & Software Services | QNVO Technologies",
  description,
  path: "/industries/",
});

export default function IndustriesPage() {
  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries/" },
      ]}
      eyebrow="Industries"
      title={title}
      lede="Every sector brings different constraints: compliance language, change windows, peak traffic or public accessibility. These pages describe how QNVO Technologies service areas can apply — not a claim that we publish client lists or guaranteed outcomes for each industry."
      extraGraph={[
        {
          "@type": "CollectionPage",
          name: title,
          url: absoluteUrl("/industries/"),
          description,
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: industries.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              url: absoluteUrl(`/industries/${item.slug}/`),
            })),
          },
        },
      ]}
    >
      <section className="bg-[#e8eef5] py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((item) => (
              <article key={item.slug} className="soft-card flex h-full flex-col p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-navy">
                  <Link href={`/industries/${item.slug}/`} className="hover:text-blue">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 leading-relaxed">{item.card}</p>
                <p className="mt-6">
                  <TextLink href={`/industries/${item.slug}/`}>Read industry details</TextLink>
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed">
            Do not see your sector listed? Describe the workflow on the{" "}
            <TextLink href="/contact/">contact page</TextLink>. A message starts a conversation — it is not a quote.
          </p>
        </Container>
      </section>
      <Cta title="Tell us about your sector." body="Share the systems, constraints and what is not working today. QNVO Technologies will say whether it fits a service area on this site." />
    </InnerPage>
  );
}
