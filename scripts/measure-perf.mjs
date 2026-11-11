/**
 * Records Lighthouse performance when Chrome/Chromium is available.
 * Usage: node scripts/measure-perf.mjs [url] [mobile|desktop]
 */
import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";

const url = process.argv[2] || "http://localhost:3000/";
const formFactor = process.argv[3] === "desktop" ? "desktop" : "mobile";
const outJson = `scripts/.lighthouse-home-${formFactor}.json`;
const summaryPath = "scripts/.perf-summary.json";

const args = [
  "lighthouse",
  url,
  "--only-categories=performance",
  `--form-factor=${formFactor}`,
  formFactor === "mobile" ? "--screenEmulation.mobile=true" : "--screenEmulation.mobile=false",
  "--quiet",
  "--chrome-flags=--headless=new --no-sandbox",
  "--output=json",
  `--output-path=${outJson}`,
];

console.log(`Running: npx ${args.join(" ")}`);
const result = spawnSync("npx", ["--yes", ...args], { encoding: "utf8", shell: true, timeout: 240000 });
if (result.status !== 0) {
  console.error(result.stderr || result.stdout || "Lighthouse failed");
  process.exit(result.status || 1);
}

const report = JSON.parse(readFileSync(outJson, "utf8"));
const audits = report.audits ?? {};
const summary = {
  url,
  formFactor,
  fetchTime: report.fetchTime,
  performanceScore: Math.round((report.categories?.performance?.score ?? 0) * 100),
  LCP_ms: Math.round(audits["largest-contentful-paint"]?.numericValue ?? 0),
  INP_ms: Math.round(
    audits["interaction-to-next-paint"]?.numericValue ??
      audits["experimental-interaction-to-next-paint"]?.numericValue ??
      0,
  ),
  CLS: Number((audits["cumulative-layout-shift"]?.numericValue ?? 0).toFixed(3)),
  TBT_ms: Math.round(audits["total-blocking-time"]?.numericValue ?? 0),
  FCP_ms: Math.round(audits["first-contentful-paint"]?.numericValue ?? 0),
  speedIndex_ms: Math.round(audits["speed-index"]?.numericValue ?? 0),
};

let all = {};
try {
  all = JSON.parse(readFileSync(summaryPath, "utf8"));
  if (all.formFactor) all = { [all.formFactor]: all };
} catch {
  all = {};
}
all[formFactor] = summary;
writeFileSync(summaryPath, JSON.stringify(all, null, 2));
console.log(JSON.stringify(summary, null, 2));
