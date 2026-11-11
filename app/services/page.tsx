import { Cta } from "@/components/Cta";
import { InnerPage } from "@/components/InnerPage";
import { ServicesCatalog } from "@/components/ServicesCatalog";
import { serviceGroups, servicesForGroup } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";
import { getServices } from "@/lib/sanity";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata = pageMetadata({
  title: "AI, Web, SEO & Software Services Catalog | QNVO Technologies",
  description:
    "Browse QNVO Technologies services: AI agent development, web development company work, technical SEO for Google, ecommerce, Shopify, WordPress, cloud DevOps, cybersecurity and more. Scope is agreed in writing.",
  path: "/services/",
});

export default async function ServicesPage() {
  const catalog = await getServices();
  const groups = serviceGroups
    .map((group) => ({
      id: group.id,
      title: group.title,
      shortTitle: group.shortTitle,
      blurb: group.blurb,
      tone: group.tone,
      items: servicesForGroup(group, catalog),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <InnerPage
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
      ]}
      eyebrow="Services"
      title="AI, Web Development, SEO and Software Services"
      lede={`QNVO Technologies groups its work into ${catalog.length} service areas — AI agent development, web development, technical SEO for Google, ecommerce, Shopify, WordPress, cloud DevOps, cybersecurity and digital growth. Each page explains who the service is for, what a typical engagement can include, and how to start a conversation. Nothing here is a quote or a guaranteed search ranking.`}
      extraGraph={[
        {
          "@type": "CollectionPage",
          name: "Technology Services for Growing Businesses",
          url: absoluteUrl("/services/"),
          description:
            "Browse QNVO Technologies service areas across AI, software, web, commerce, cloud, security and digital growth.",
          isPartOf: { "@id": `${siteUrl}/#website` },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: catalog.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: service.title,
              url: absoluteUrl(`/services/${service.slug}/`),
            })),
          },
        },
      ]}
    >
      <ServicesCatalog groups={groups} total={catalog.length} />
      <Cta />
    </InnerPage>
  );
}
