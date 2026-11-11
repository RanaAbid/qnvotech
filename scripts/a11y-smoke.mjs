/**
 * Lightweight a11y/compat smoke checks against a running server.
 * Usage: node scripts/a11y-smoke.mjs [baseUrl]
 */
import http from "node:http";
import https from "node:https";

const base = (process.argv[2] || "http://127.0.0.1:3001").replace(/\/$/, "");

function get(path) {
  const url = new URL(path, `${base}/`);
  const lib = url.protocol === "https:" ? https : http;
  return new Promise((resolve, reject) => {
    lib
      .get(url, (res) => {
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve({ status: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

const paths = ["/", "/contact/", "/insights/", "/accessibility/", "/services/"];
const results = [];

for (const path of paths) {
  const { status, data } = await get(path);
  results.push({
    path,
    status,
    skipLink: data.includes("Skip to main content"),
    mainLandmark: data.includes('id="main-content"'),
    langEn: data.includes('lang="en"'),
    logoLabel: data.includes("QNVO Technologies home") || data.includes('alt="QNVO Technologies"'),
    draftContrastFix: path !== "/insights/" || data.includes("text-navy") || data.includes("Draft · not indexed"),
  });
}

console.log(JSON.stringify({ base, results }, null, 2));
const bad = results.filter((r) => r.status !== 200 || !r.skipLink || !r.mainLandmark || !r.langEn);
process.exit(bad.length ? 1 : 0);
