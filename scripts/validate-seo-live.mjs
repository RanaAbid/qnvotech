const base = process.env.SEO_BASE || "http://localhost:3000";

async function get(path) {
  const response = await fetch(`${base}${path}`);
  const text = await response.text();
  return { status: response.status, text, headers: response.headers };
}

function pick(html, re) {
  return html.match(re)?.[1] ?? null;
}

const robots = await get("/robots.txt");
const sitemap = await get("/sitemap.xml");
const home = await get("/");
const privacyAlias = await get("/privacy-policy/");
const draftInsight = await get("/insights/ai-agent-development-company/");

const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const homeHtml = home.text;

console.log(
  JSON.stringify(
    {
      robotsStatus: robots.status,
      robotsSample: robots.text.slice(0, 500),
      sitemapStatus: sitemap.status,
      urlCount: urls.length,
      sitemapHasPrivacy: urls.some((u) => u.includes("/privacy/")),
      sitemapHasDraftInsight: urls.some((u) => u.includes("ai-agent-development-company")),
      sitemapHasService: urls.some((u) => u.includes("/services/ai-agent-development/")),
      home: {
        status: home.status,
        title: pick(homeHtml, /<title>([^<]+)<\/title>/i),
        canonical: pick(homeHtml, /rel="canonical"[^>]*href="([^"]+)"/i) || pick(homeHtml, /href="([^"]+)"[^>]*rel="canonical"/i),
        description: pick(homeHtml, /name="description" content="([^"]+)"/i)?.slice(0, 140),
        h1: pick(homeHtml, /<h1[^>]*>([^<]+)<\/h1>/i),
        og: homeHtml.includes("og:title"),
        twitter: homeHtml.includes("twitter:card"),
        jsonLd: homeHtml.includes("application/ld+json"),
      },
      privacyAliasStatus: privacyAlias.status,
      privacyAliasLocation: privacyAlias.headers.get("location"),
      draftInsightRobots: pick(draftInsight.text, /name="robots" content="([^"]+)"/i),
    },
    null,
    2,
  ),
);
