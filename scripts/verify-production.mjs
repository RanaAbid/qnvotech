/**
 * Production readiness smoke checks against a running `next start` server.
 * Usage: node scripts/verify-production.mjs [baseUrl]
 * Does not deploy.
 */
import http from "node:http";
import https from "node:https";
import { existsSync } from "node:fs";
import { join } from "node:path";

const base = (process.argv[2] || "http://127.0.0.1:3001").replace(/\/$/, "");
const root = process.cwd();

function request(path, { method = "GET", headers = {}, body, redirect = "manual" } = {}) {
  const url = new URL(path, `${base}/`);
  const lib = url.protocol === "https:" ? https : http;
  return new Promise((resolve, reject) => {
    const req = lib.request(
      url,
      { method, headers: { Accept: "*/*", ...headers }, timeout: 15000 },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          resolve({
            status: res.statusCode ?? 0,
            headers: res.headers,
            body: buf.toString("utf8"),
            size: buf.length,
          });
        });
      },
    );
    req.on("error", reject);
    req.on("timeout", () => {
      req.destroy();
      reject(new Error(`timeout ${method} ${path}`));
    });
    if (body) req.write(body);
    req.end();
  });
}

const failures = [];
function check(name, ok, detail = "") {
  if (!ok) failures.push({ name, detail });
  return { name, ok: Boolean(ok), detail };
}

const assetFiles = [
  "public/images/hero-systems.avif",
  "public/images/hero-systems-800.avif",
  "public/logo/qnvo-logo-horizontal-transparent.webp",
  "public/favicon.ico",
  "public/og-default.png",
  "public/icons/icon-ai-agents.svg",
];

const pagePaths = [
  "/",
  "/about/",
  "/services/",
  "/services/ai-agent-development/",
  "/industries/",
  "/industries/banking-fintech/",
  "/technologies/",
  "/process/",
  "/case-studies/",
  "/insights/",
  "/faq/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/accessibility/",
];

const results = {
  base,
  assetsOnDisk: assetFiles.map((f) => check(`disk:${f}`, existsSync(join(root, f)))),
  pages: [],
  redirects: [],
  api: [],
  headers: [],
  robots: null,
  sitemap: null,
};

for (const path of pagePaths) {
  const res = await request(path);
  const html = res.body;
  results.pages.push(
    check(
      `GET ${path}`,
      res.status === 200 &&
        html.includes("Skip to main content") &&
        html.includes('id="main-content"') &&
        html.includes('lang="en"'),
      `status=${res.status} bytes=${res.size}`,
    ),
  );
}

for (const [from, to] of [
  ["/privacy-policy/", "/privacy/"],
  ["/terms-of-use/", "/terms/"],
  ["/accessibility-statement/", "/accessibility/"],
]) {
  const res = await request(from);
  const loc = res.headers.location ?? "";
  results.redirects.push(
    check(
      `redirect ${from}`,
      (res.status === 301 || res.status === 308) && loc.includes(to),
      `status=${res.status} location=${loc}`,
    ),
  );
}

const notFound = await request("/this-route-should-404/");
results.pages.push(
  check(`GET unknown → 404`, notFound.status === 404, `status=${notFound.status}`),
);

const robots = await request("/robots.txt");
results.robots = check(
  "robots.txt",
  robots.status === 200 && /sitemap/i.test(robots.body),
  `status=${robots.status}`,
);

const sitemap = await request("/sitemap.xml");
results.sitemap = check(
  "sitemap.xml",
  sitemap.status === 200 && sitemap.body.includes("<urlset") && sitemap.body.includes("/services/"),
  `status=${sitemap.status}`,
);

const home = await request("/");
const securityHeaderNames = [
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "content-security-policy",
  "cross-origin-opener-policy",
  "cross-origin-resource-policy",
];
for (const name of securityHeaderNames) {
  results.headers.push(check(`header ${name}`, Boolean(home.headers[name]), home.headers[name] || "missing"));
}

const assetUrls = [
  "/images/hero-systems-800.avif",
  "/logo/qnvo-logo-horizontal-transparent.webp",
  "/favicon.ico",
  "/icons/icon-ai-agents.svg",
  "/og-default.png",
];
for (const path of assetUrls) {
  const res = await request(path);
  results.pages.push(check(`asset ${path}`, res.status === 200 && res.size > 0, `status=${res.status} bytes=${res.size}`));
}

const contactGet = await request("/api/contact/", { method: "GET" });
results.api.push(check("API GET 405", contactGet.status === 405, `status=${contactGet.status}`));

const contactBadOrigin = await request("/api/contact/", {
  method: "POST",
  headers: { "Content-Type": "application/json", Origin: "https://evil.example" },
  body: JSON.stringify({ name: "Test User", email: "a@b.co", message: "x".repeat(30) }),
});
results.api.push(
  check("API rejects bad Origin", contactBadOrigin.status === 403, `status=${contactBadOrigin.status}`),
);

const contactNoJson = await request("/api/contact/", {
  method: "POST",
  headers: { "Content-Type": "text/plain", Origin: base },
  body: "nope",
});
results.api.push(check("API rejects non-JSON", contactNoJson.status === 415, `status=${contactNoJson.status}`));

const contactOkOrigin = await request("/api/contact/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Origin: base,
    "Sec-Fetch-Site": "same-origin",
  },
  body: JSON.stringify({
    name: "Test User",
    email: "test@example.com",
    organization: "",
    region: "united-states",
    country: "united-states",
    serviceInterest: "ai-agent-development",
    message: "Production readiness verification message.",
    companyWebsite: "",
    turnstileToken: "",
  }),
});
// Without Turnstile/Resend in local prod, expect 403 (turnstile fail-closed in production)
// or 503 unconfigured — never 500.
results.api.push(
  check(
    "API same-origin handled safely",
    [200, 403, 429, 503].includes(contactOkOrigin.status) && contactOkOrigin.status !== 500,
    `status=${contactOkOrigin.status} body=${contactOkOrigin.body.slice(0, 120)}`,
  ),
);

const flat = [
  ...results.assetsOnDisk,
  ...results.pages,
  ...results.redirects,
  ...results.api,
  ...results.headers,
  results.robots,
  results.sitemap,
].filter(Boolean);

const summary = {
  base,
  passed: flat.filter((r) => r.ok).length,
  failed: flat.filter((r) => !r.ok).length,
  failures: flat.filter((r) => !r.ok),
  nodeEnvNote: "Server should be started with NODE_ENV=production via next start",
};

console.log(JSON.stringify({ summary, results }, null, 2));
process.exit(summary.failed ? 1 : 0);
