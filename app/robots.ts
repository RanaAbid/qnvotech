import type { MetadataRoute } from "next";
import { insights } from "@/content/insights";
import { absoluteUrl, legalPagesIndexable, siteUrl } from "@/lib/site";

const agents = ["*", "GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/api/"];

  if (!legalPagesIndexable) {
    disallow.push("/privacy/", "/terms/", "/accessibility/");
  }

  // Draft insight URLs stay reachable for preview but should not be prioritized for crawling.
  for (const article of insights) {
    if (article.draft) disallow.push(`/insights/${article.slug}/`);
  }

  // Legacy legal aliases redirect permanently; keep them out of crawl queues.
  disallow.push("/privacy-policy/", "/terms-of-use/", "/accessibility-statement/");

  return {
    rules: agents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow,
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
