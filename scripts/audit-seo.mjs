import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function extractPageMeta(file) {
  const text = fs.readFileSync(file, "utf8");
  const title = text.match(/title:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? null;
  const pathMatch = text.match(/path:\s*["'`]([^"'`]+)["'`]/)?.[1] ?? null;
  const indexMatch = text.match(/index:\s*([^,\n]+)/)?.[1]?.trim() ?? "default-true";
  const hasPageMeta = text.includes("pageMetadata");
  const hasGenerate = text.includes("generateMetadata");
  return {
    file: path.relative(root, file).replace(/\\/g, "/"),
    title,
    path: pathMatch,
    index: indexMatch,
    hasPageMeta,
    hasGenerate,
  };
}

const pages = walk(path.join(root, "app")).filter((f) => /page\.tsx$/.test(f));
const metas = pages.map(extractPageMeta);
const titles = metas.map((m) => m.title).filter(Boolean);
const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);

const servicesText = fs.readFileSync(path.join(root, "content/services.ts"), "utf8") + fs.readFileSync(path.join(root, "content/services-extended.ts"), "utf8");
const seoTitles = [...servicesText.matchAll(/seoTitle:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const dupSeo = seoTitles.filter((t, i) => seoTitles.indexOf(t) !== i);

const industryText = fs.readFileSync(path.join(root, "content/industries.ts"), "utf8");
const indSeo = [...industryText.matchAll(/seoTitle:\s*["']([^"']+)["']/g)].map((m) => m[1]);
const dupInd = indSeo.filter((t, i) => indSeo.indexOf(t) !== i);

const alts = [];
for (const file of walk(root).filter((f) => /\.(tsx|ts)$/.test(f) && !f.includes("node_modules"))) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/\balt=\{?["']([^"']*)["']\}?/g)) {
    if (!match[1].trim() || match[1].toLowerCase() === "image" || match[1].toLowerCase() === "logo") {
      alts.push({ file: path.relative(root, file), alt: match[1] });
    }
  }
  for (const match of text.matchAll(/\balt=["']["']/g)) {
    alts.push({ file: path.relative(root, file), alt: "" });
  }
}

console.log(
  JSON.stringify(
    {
      pageCount: metas.length,
      metas,
      dupTitles: [...new Set(dupTitles)],
      serviceSeoCount: seoTitles.length,
      dupServiceSeo: [...new Set(dupSeo)],
      industrySeoCount: indSeo.length,
      dupIndustrySeo: [...new Set(dupInd)],
      weakAlts: alts.slice(0, 40),
    },
    null,
    2,
  ),
);
