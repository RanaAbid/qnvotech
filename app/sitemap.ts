import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { services } from "@/lib/data";
import { absoluteUrl, contentUpdated, legalPagesIndexable } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);

  const primaryPaths: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services/", priority: 0.9, changeFrequency: "weekly" },
    ...services.map((service) => ({
      path: `/services/${service.slug}/`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/industries/", priority: 0.8, changeFrequency: "monthly" },
    ...industries.map((industry) => ({
      path: `/industries/${industry.slug}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    { path: "/technologies/", priority: 0.75, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/process/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies/", priority: 0.75, changeFrequency: "monthly" },
    { path: "/insights/", priority: 0.65, changeFrequency: "weekly" },
    { path: "/faq/", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
  ];

  const primary = primaryPaths.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));

  const articles = insights
    .filter((article) => !article.draft)
    .map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}/`),
      lastModified: new Date(`${article.publishedAt}T00:00:00.000Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const legal = legalPagesIndexable
    ? (["/privacy/", "/terms/", "/accessibility/"] as const).map((path) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      }))
    : [];

  return [...primary, ...articles, ...legal];
}
