import type { MetadataRoute } from "next";
import { legalPagesIndexable, siteUrl } from "@/lib/site";

const agents = ["*", "GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];

  if (!legalPagesIndexable) {
    disallow.push("/privacy/", "/terms/", "/accessibility/");
  }

  // Draft insights return 200 with noindex via page metadata — do not Disallow live URLs.
  // Legacy legal aliases redirect permanently; keep them out of crawl queues.
  disallow.push("/privacy-policy/", "/terms-of-use/", "/accessibility-statement/");

  return {
    rules: agents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow,
    })),
    // Sitemap path must not get a trailing slash (absoluteUrl adds one for HTML routes).
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
