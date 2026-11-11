import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { services } from "@/lib/data";
import { absoluteUrl, contentUpdated } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);

  const primary = [
    "/",
    "/services/",
    ...services.map((service) => `/services/${service.slug}/`),
    "/industries/",
    ...industries.map((industry) => `/industries/${industry.slug}/`),
    "/technologies/",
    "/about/",
    "/process/",
    "/case-studies/",
    "/insights/",
    "/faq/",
    "/contact/",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));

  const articles = insights
    .filter((article) => !article.draft)
    .map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}/`),
      lastModified: new Date(`${article.publishedAt}T00:00:00.000Z`),
      priority: 0.6,
    }));

  const legal = ["/privacy/", "/terms/", "/accessibility/"].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    priority: 0.5,
  }));

  return [...primary, ...articles, ...legal];
}
