import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "docs"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (/\.(tsx|ts|jsx|js|mjs|md|json)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

function collectPages(dir, base = "") {
  const pages = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "api") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("[")) continue;
      for (const page of collectPages(full, `${base}/${entry.name}`)) pages.add(page);
    } else if (entry.name === "page.tsx" || entry.name === "page.ts") {
      pages.add(base || "/");
    }
  }
  return pages;
}

function slugsFrom(file) {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  return new Set([...text.matchAll(/slug:\s*["']([^"']+)["']/g)].map((match) => match[1]));
}

function idsFrom(file, key = "id") {
  const text = fs.readFileSync(path.join(root, file), "utf8");
  const re = new RegExp(`${key}:\\s*["']([^"']+)["']`, "g");
  return new Set([...text.matchAll(re)].map((match) => match[1]));
}

const files = walk(root);
const found = new Set();
const external = new Set();
const placeholders = [];
const hrefRes = [
  /href=["'](\/[^"'?#]*)/g,
  /href=\{`(\/[^`$?#]*)/g,
  /href=\{["'](\/[^"'?#]*)["']\}/g,
  /href:\s*["'](\/[^"'?#]*)/g,
  /["'`](\/(?:about|contact|services|industries|technologies|process|case-studies|insights|faq|privacy|terms|accessibility)(?:\/[^"'`?#]*)?)["'`]/g,
];

for (const file of files) {
  if (file.includes(`${path.sep}node_modules${path.sep}`) || file.includes(`${path.sep}.next${path.sep}`)) continue;
  const text = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  if (/href=["']#["']/.test(text) || /href=\{["']#["']\}/.test(text)) {
    placeholders.push({ file: rel, kind: "hash-only" });
  }
  for (const hrefRe of hrefRes) {
    hrefRe.lastIndex = 0;
    let match;
    while ((match = hrefRe.exec(text))) {
      let value = match[1];
      if (value.includes("${")) value = value.split("${")[0];
      const clean = value.replace(/\/$/, "") || "/";
      if (clean.startsWith("/")) found.add(clean);
    }
  }
  for (const match of text.matchAll(/https?:\/\/[^\s"'`)<]+/g)) {
    external.add(match[0].replace(/[.,;]+$/, ""));
  }
}

const pages = collectPages(path.join(root, "app"));
const serviceSlugs = new Set([...slugsFrom("content/services.ts"), ...slugsFrom("content/services-extended.ts")]);
const industrySlugs = slugsFrom("content/industries.ts");
const insightSlugs = slugsFrom("content/insights.ts");
const redirects = new Set(["/privacy-policy", "/terms-of-use", "/accessibility-statement"]);

function exists(href) {
  const clean = href.replace(/\/$/, "") || "/";
  if (pages.has(clean) || pages.has(`${clean}/`)) return true;
  if (clean.startsWith("/services/") && serviceSlugs.has(clean.slice("/services/".length))) return true;
  if (clean.startsWith("/industries/") && industrySlugs.has(clean.slice("/industries/".length))) return true;
  if (clean.startsWith("/insights/") && insightSlugs.has(clean.slice("/insights/".length))) return true;
  if (redirects.has(clean)) return true;
  return false;
}

const bad = [...found].filter((href) => !exists(href)).sort();

const publicRoot = path.join(root, "public");
const requiredAssets = [
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "og-default.png",
  "logo/qnvo-logo-horizontal-transparent.png",
  "logo/qnvo-logo-full-lockup-transparent.png",
  "videos/process-ambient.mp4",
];
const missingAssets = requiredAssets.filter((asset) => !fs.existsSync(path.join(publicRoot, asset)));

const imageBases = new Set();
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:base|image):\s*["'](\/[^"']+)["']/g)) {
    imageBases.add(match[1]);
  }
}
const missingImages = [...imageBases]
  .filter((base) => {
    const png = path.join(publicRoot, `${base.replace(/^\//, "")}.png`);
    const webp = path.join(publicRoot, `${base.replace(/^\//, "")}.webp`);
    const jpg = path.join(publicRoot, `${base.replace(/^\//, "")}.jpg`);
    return !(fs.existsSync(png) || fs.existsSync(webp) || fs.existsSync(jpg) || fs.existsSync(path.join(publicRoot, base.replace(/^\//, ""))));
  })
  .sort();

function safeIds(file, key = "id") {
  try {
    return [...idsFrom(file, key)];
  } catch {
    return [];
  }
}

console.log(
  JSON.stringify(
    {
      hrefCount: found.size,
      pageCount: pages.size,
      bad,
      placeholders,
      missingAssets,
      missingImages,
      externalSample: [...external].slice(0, 30),
      caseStudyIds: safeIds("lib/data.ts").filter((id) => id.includes("platform") || id.includes("bms") || id.includes("csm")),
      techGroupIds: safeIds("content/technologies.ts"),
    },
    null,
    2,
  ),
);
