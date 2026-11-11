import fs from "node:fs";

const files = ["content/services.ts", "content/services-extended.ts"];
const entries = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const blocks = text.split(/{\s*\n\s*slug:/).slice(1);
  for (const block of blocks) {
    const slug = block.match(/^\s*["']([^"']+)["']/)?.[1];
    const title = block.match(/title:\s*["']([^"']+)["']/)?.[1];
    const card = block.match(/card:\s*["']([^"']+)["']/)?.[1];
    if (slug && title) entries.push({ slug, title, card: card ?? title });
  }
}
console.log(JSON.stringify(entries, null, 2));
