import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

const agents = ["*", "GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: agents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: "/api/",
    })),
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
