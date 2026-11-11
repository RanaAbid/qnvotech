import { mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = process.cwd();

const heroes = [
  "hero-team",
  "hero-systems",
  "hero-web",
  "hero-cloud",
  "hero-growth",
];

const logos = [
  { input: "public/logo/qnvo-logo-horizontal-transparent.png", base: "public/logo/qnvo-logo-horizontal-transparent", maxWidth: 484 },
  { input: "public/logo/qnvo-logo-full-lockup-transparent.png", base: "public/logo/qnvo-logo-full-lockup-transparent", maxWidth: 720 },
];

async function writeVariants(input, base, widths, { webpQuality = 74, avifQuality = 48 } = {}) {
  const source = sharp(input).rotate();
  const meta = await source.metadata();
  const aspect = meta.width && meta.height ? meta.height / meta.width : 2 / 3;

  for (const width of widths) {
    const pipeline = sharp(input).rotate().resize({
      width,
      withoutEnlargement: true,
    });
    const suffix = widths.length === 1 || width === Math.max(...widths) ? "" : `-${width}`;
    const webpOut = join(root, `${base}${suffix}.webp`);
    const avifOut = join(root, `${base}${suffix}.avif`);
    mkdirSync(dirname(webpOut), { recursive: true });
    await pipeline.clone().webp({ quality: webpQuality, effort: 6 }).toFile(webpOut);
    await pipeline.clone().avif({ quality: avifQuality, effort: 5 }).toFile(avifOut);
    const [wMeta, aMeta] = await Promise.all([sharp(webpOut).metadata(), sharp(avifOut).metadata()]);
    console.log(
      `${base}${suffix} -> webp ${Math.round((wMeta.size ?? 0) / 1024)}KB / avif ${Math.round((aMeta.size ?? 0) / 1024)}KB (${wMeta.width}x${wMeta.height})`,
    );
  }

  return { aspect };
}

for (const name of heroes) {
  const input = join(root, `public/images/${name}.jpg`);
  if (!existsSync(input)) {
    console.warn(`skip missing ${input}`);
    continue;
  }
  await writeVariants(input, `public/images/${name}`, [800, 1200, 1600], { webpQuality: 72, avifQuality: 45 });
  // Keep a lean JPG fallback at 1200w for <picture> raster fallback.
  const jpgOut = join(root, `public/images/${name}.jpg`);
  await sharp(input)
    .rotate()
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(join(root, `public/images/${name}.tmp.jpg`));
  const { renameSync, unlinkSync } = await import("node:fs");
  try {
    unlinkSync(jpgOut);
  } catch {
    // ignore
  }
  renameSync(join(root, `public/images/${name}.tmp.jpg`), jpgOut);
  const jpgMeta = await sharp(jpgOut).metadata();
  console.log(`${name}.jpg fallback -> ${Math.round((jpgMeta.size ?? 0) / 1024)}KB`);
}

for (const job of logos) {
  const input = join(root, job.input);
  if (!existsSync(input)) continue;
  await writeVariants(input, job.base, [job.maxWidth], { webpQuality: 78, avifQuality: 52 });
}

const og = join(root, "public/og-default.png");
if (existsSync(og)) {
  await sharp(og)
    .resize({ width: 1200, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 80 })
    .toFile(join(root, "public/og-default.tmp.png"));
  const { renameSync, unlinkSync } = await import("node:fs");
  try {
    unlinkSync(og);
  } catch {
    // ignore
  }
  renameSync(join(root, "public/og-default.tmp.png"), og);
  const ogMeta = await sharp(og).metadata();
  console.log(`og-default.png -> ${Math.round((ogMeta.size ?? 0) / 1024)}KB`);
}
