import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { absoluteUrl, contentUpdated, legalPagesIndexable } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services/",
    ...services.map((service) => `/services/${service.slug}/`),
    "/about/",
    "/process/",
    "/case-studies/",
    "/insights/",
    "/faq/",
    "/contact/",
  ];
  if (legalPagesIndexable) {
    paths.push("/privacy-policy/", "/terms-of-use/", "/accessibility-statement/");
  }
  const lastModified = new Date(`${contentUpdated}T00:00:00.000Z`);
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));
}
