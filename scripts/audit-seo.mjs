import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { serviceCatalog } from "../content/services.ts";
import { insights } from "../content/insights.ts";

const pages = [
  ["/", "Enterprise Software and AI Work | QNVO Technologies", "QNVO Technologies shares enterprise software, AI agent, automation, ERP and digital services for teams in the USA, UK, Middle East and Pakistan."],
  ["/about/", "About Our Software and AI Firm | QNVO Technologies", "QNVO Technologies — Quality, Next-Gen, Vision and Operations — discusses software, AI and digital services. No client proof, address or headcount listed here."],
  ["/services/", "Software Development & AI Services | QNVO Technologies", "Browse QNVO Technologies services: enterprise software, AI agents, automation, ERP, ecommerce, web development, technical SEO and website security."],
  ["/process/", "Our Technology Delivery Process | QNVO Technologies", "See how a QNVO Technologies project moves from a problem statement to a written scope, build, handover and any later support named in the agreement."],
  ["/faq/", "FAQ: Services, Regions & Contact | QNVO Technologies", "Answers about QNVO Technologies services, regions, contact, case studies and what this website does not promise. Email info@qnvotech.com to ask."],
  ["/contact/", "Contact Us for Software Projects | QNVO Technologies", "Contact QNVO Technologies about a software, AI, ERP or website project. Email info@qnvotech.com or use the form. A message is not a contract."],
  ["/insights/", "Insights on Software & AI Work | QNVO Technologies", "Original QNVO Technologies writing on AI agents, ERP, enterprise software and process automation, linked to the related service pages."],
  ["/case-studies/", "Case Studies: BMS & CSM Platforms | QNVO Technologies", "QNVO Technologies case studies: enterprise platform work on BMS and CSM — web development, modernization, performance and security. No hype, just the work."],
  ["/privacy/", "Privacy Policy for This Website | QNVO Technologies", "How QNVO Technologies handles website enquiries, cookies, third parties, privacy rights and contact. Draft — replace owner placeholders before publishing."],
  ["/terms/", "Website Terms of Use Draft Page | QNVO Technologies", "Website terms for QNVO Technologies: site use, intellectual property, liability and governing law. Draft — replace owner placeholders before publishing."],
  ["/accessibility/", "Website Accessibility Statement | QNVO Technologies", "QNVO Technologies accessibility goals for WCAG 2.2 AA, known site limits, and how to report barriers. Draft — replace owner placeholders before publishing."],
];

for (const s of serviceCatalog) pages.push([`/services/${s.slug}/`, s.seoTitle, s.description]);
for (const a of insights) pages.push([`/insights/${a.slug}/`, a.seoTitle, a.description]);

const titles = new Map();
const descs = new Map();
let fail = 0;
console.log("path\ttitleLen\tdescLen\ttitleOK\tdescOK\tsuffixOK");
for (const [path, title, desc] of pages) {
  const tOk = title.length >= 50 && title.length <= 60;
  const dOk = desc.length >= 120 && desc.length <= 160;
  const sOk = title.endsWith("| QNVO Technologies");
  if (!tOk || !dOk || !sOk) {
    fail += 1;
    console.log(`FAIL ${path}\tt=${title.length}\td=${desc.length}\t${title}`);
  } else {
    console.log(`OK   ${path}\tt=${title.length}\td=${desc.length}`);
  }
  titles.set(title, (titles.get(title) || []).concat(path));
  descs.set(desc, (descs.get(desc) || []).concat(path));
}

console.log("\nDUPLICATE TITLES");
for (const [t, paths] of titles) if (paths.length > 1) console.log(JSON.stringify(t), paths);
console.log("DUPLICATE DESCS");
for (const [d, paths] of descs) if (paths.length > 1) console.log(d.slice(0, 60), paths);

const known = new Set([
  "/",
  "/about/",
  "/services/",
  "/process/",
  "/faq/",
  "/contact/",
  "/insights/",
  "/case-studies/",
  "/privacy/",
  "/terms/",
  "/accessibility/",
  "/privacy-policy/",
  "/terms-of-use/",
  "/accessibility-statement/",
  ...serviceCatalog.map((s) => `/services/${s.slug}/`),
  ...insights.map((a) => `/insights/${a.slug}/`),
]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === ".next" || name === "scripts") continue;
      walk(p, out);
    } else if (/\.(tsx|ts|jsx|js|mdx)$/.test(name)) out.push(p);
  }
  return out;
}

const hashLinks = [];
const broken = [];
for (const file of walk(process.cwd())) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/href=(["'])(.*?)\1/g)) {
    const href = m[2];
    if (href === "#") hashLinks.push(`${file}: bare #`);
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/api/") && !href.includes("${") && !href.includes("{")) {
      const pathOnly = href.split("?")[0].split("#")[0];
      const normalized = pathOnly.endsWith("/") || pathOnly.includes(".") ? pathOnly : `${pathOnly}/`;
      if (!pathOnly.includes(".") && !known.has(normalized) && !known.has(pathOnly)) {
        broken.push(`${file}: ${href}`);
      }
    }
  }
}

console.log("\nBARE # LINKS", hashLinks.length ? hashLinks : "none");
console.log("BROKEN INTERNAL", broken.length ? broken : "none");
console.log("FAIL_COUNT", fail);
console.log("SAMEAS", "omitted (no LinkedIn/GitHub in §0)");
