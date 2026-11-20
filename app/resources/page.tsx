import Link from "next/link";
import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { Reveal } from "@/components/Motion";
import { Container } from "@/components/ui";
import { resourceGroups } from "@/content/resources";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { pageMetadata, webPageNode } from "@/lib/seo";

const title = "Resources for Technology Projects | QNVO Technologies";
const description =
  "QNVO Technologies resources hub: delivery guides, service pages, case studies, insights, technologies and FAQs. Public pages only — no invented downloads or lead magnets.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/resources/",
});

export default function ResourcesPage() {
  const flat = resourceGroups.flatMap((group) => group.items);

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources/" },
      ]}
      eyebrow="Library"
      title="Resources"
      lede="A hub of public QNVO Technologies pages — delivery, services, work and company context. No fake PDF library, no sign-up wall, no invented whitepapers."
      extraGraph={[
        webPageNode({
          name: "Resources",
          description,
          path: "/resources/",
          type: "CollectionPage",
        }),
        {
          "@type": "ItemList",
          name: "QNVO Technologies resources",
          itemListElement: flat.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: absoluteUrl(item.href),
          })),
          isPartOf: { "@id": `${siteUrl}/#website` },
        },
      ]}
    >
      <section className="resource-hero bg-[#e8eef5] py-14 md:py-20" aria-labelledby="resource-hub-heading">
        <Container>
          <Reveal>
            <div className="resource-hero-panel">
              <div>
                <p className="eyebrow">Public pages</p>
                <h2 id="resource-hub-heading" className="font-display text-[1.75rem] font-bold text-navy md:text-[2.35rem]">
                  Find the page that matches the question
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate">
                  Start with delivery if you want the process. Open services if you need a capability area. Use work and insights for published examples and writing.
                </p>
              </div>
              <div className="resource-hero-stats" aria-hidden="true">
                <p>
                  <span>{resourceGroups.length}</span>
                  Groups
                </p>
                <p>
                  <span>{flat.length}</span>
                  Links
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {resourceGroups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={`py-14 md:py-20 ${groupIndex % 2 === 0 ? "bg-white" : "bg-[#e8eef5]"}`}
          aria-labelledby={`resource-group-${group.id}`}
        >
          <Container>
            <Reveal>
              <p className="eyebrow">Collection</p>
              <h2 id={`resource-group-${group.id}`} className="mt-3 font-display text-[1.75rem] font-bold md:text-[2.15rem]">
                {group.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-slate">{group.body}</p>
            </Reveal>
            <div className="resource-card-grid mt-8">
              {group.items.map((item, index) => (
                <Reveal key={item.href} variant="scale">
                  <Link href={item.href} className={`resource-card resource-card-${(index % 4) + 1}`}>
                    <p className="resource-card-kind">{item.kind}</p>
                    <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate">{item.body}</p>
                    <span className="resource-card-cta">Open</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <Cta
        title="Need a page that is not listed?"
        body="Ask about a service area or a delivery question. A message starts a conversation — it is not a download or a quote."
      />
    </InnerPage>
  );
}
