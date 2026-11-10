import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = process.cwd();

const jobs = [
  { input: "public/images/hero-team.jpg", base: "public/images/hero-team", maxWidth: 1600 },
  { input: "public/images/hero-systems.jpg", base: "public/images/hero-systems", maxWidth: 1600 },
  { input: "public/images/hero-web.jpg", base: "public/images/hero-web", maxWidth: 1600 },
  { input: "public/logo/qnvo-logo-horizontal-transparent.png", base: "public/logo/qnvo-logo-horizontal-transparent", maxWidth: 480 },
  { input: "public/logo/qnvo-logo-full-lockup-transparent.png", base: "public/logo/qnvo-logo-full-lockup-transparent", maxWidth: 900 },
];

async function convert(job) {
  const input = join(root, job.input);
  const webpOut = join(root, `${job.base}.webp`);
  const avifOut = join(root, `${job.base}.avif`);
  mkdirSync(dirname(webpOut), { recursive: true });

  const pipeline = sharp(input).rotate().resize({
    width: job.maxWidth,
    withoutEnlargement: true,
  });

  await pipeline.clone().webp({ quality: 78, effort: 5 }).toFile(webpOut);
  await pipeline.clone().avif({ quality: 55, effort: 4 }).toFile(avifOut);

  const [webpMeta, avifMeta] = await Promise.all([sharp(webpOut).metadata(), sharp(avifOut).metadata()]);
  console.log(`${job.input} -> webp ${webpMeta.size ?? "?"}B / avif ${avifMeta.size ?? "?"}B`);
}

for (const job of jobs) {
  await convert(job);
}
