import { TechnologiesShowcase } from "@/components/TechnologiesShowcase";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/site";

const title = "Web, AI, Cloud and SEO Technologies We Use";
const description =
  "QNVO Technologies discusses Next.js, React, Shopify, WordPress, cloud DevOps, cybersecurity, AI agents and technical SEO technologies chosen for the written scope — not a partner badge wall.";

export const metadata = pageMetadata({
  title: "Web, AI, Cloud & SEO Technologies | QNVO Technologies",
  description,
  path: "/technologies/",
});

export default function TechnologiesPage() {
  return (
    <TechnologiesShowcase
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Technologies", path: "/technologies/" },
      ]}
      title={title}
      graph={[
        {
          "@type": "CollectionPage",
          name: title,
          url: absoluteUrl("/technologies/"),
          description,
          isPartOf: { "@id": `${siteUrl}/#website` },
        },
      ]}
    />
  );
}
