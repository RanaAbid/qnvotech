// Packages the Next.js standalone build into a zip for cPanel "Setup Node.js App" (Passenger).
// Usage: NEXT_PUBLIC_SITE_URL=https://qnvotech.com npm run build && npm run package:cpanel
// Output: deploy/qnvotech-cpanel.zip  (upload + extract into the app root, startup file: server.js)
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const outDir = join(root, "deploy");
const appDir = join(outDir, "app");
const zipPath = join(outDir, "qnvotech-cpanel.zip");

if (!existsSync(join(standalone, "server.js"))) {
  console.error("No .next/standalone/server.js. Run `npm run build` first (next.config needs output: 'standalone').");
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

console.log("Copying standalone server, static assets and public/ ...");
cpSync(standalone, appDir, { recursive: true });
cpSync(join(root, ".next", "static"), join(appDir, ".next", "static"), { recursive: true });
cpSync(join(root, "public"), join(appDir, "public"), { recursive: true });
// Same copies the cPanel deploy makes, so a hard refresh can read CSS from disk.
mkdirSync(join(appDir, "_next"), { recursive: true });
mkdirSync(join(appDir, "public", "_next"), { recursive: true });
cpSync(join(root, ".next", "static"), join(appDir, "_next", "static"), { recursive: true });
cpSync(join(root, ".next", "static"), join(appDir, "public", "_next", "static"), { recursive: true });

// cPanel servers are Linux x64: replace whatever native sharp binaries the local build traced.
const imgDir = join(appDir, "node_modules", "@img");
const sharpPkg = join(appDir, "node_modules", "sharp", "package.json");
if (existsSync(sharpPkg)) {
  const opt = JSON.parse(readFileSync(sharpPkg, "utf8")).optionalDependencies ?? {};
  const wanted = ["@img/sharp-linux-x64", "@img/sharp-libvips-linux-x64"];
  // Drop only native binaries (keep pure-JS deps such as @img/colour).
  for (const name of existsSync(imgDir) ? readdirSync(imgDir) : []) {
    if (name.startsWith("sharp-")) rmSync(join(imgDir, name), { recursive: true, force: true });
  }
  const tmp = join(outDir, ".sharp-linux");
  mkdirSync(tmp, { recursive: true });
  console.log("Fetching Linux x64 sharp binaries ...");
  execFileSync(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["install", "--prefix", tmp, "--no-save", "--no-package-lock", "--os=linux", "--cpu=x64", "--libc=glibc", "--force",
      ...wanted.map((n) => `${n}@${opt[n]}`)],
    { stdio: "inherit", shell: process.platform === "win32" },
  );
  cpSync(join(tmp, "node_modules", "@img"), imgDir, { recursive: true });
  rmSync(tmp, { recursive: true, force: true });
}

console.log("Creating zip ...");
if (process.platform === "win32") {
  // Windows' built-in bsdtar writes zip archives with -a (and keeps the hidden .next folder).
  // List entries by name (not ".") so paths have no "./" prefix — cPanel's extractor mishandles it.
  execFileSync("C:\\Windows\\System32\\tar.exe", ["-a", "-c", "-f", zipPath, "-C", appDir, ...readdirSync(appDir)], { stdio: "inherit" });
} else {
  execFileSync("zip", ["-qr", zipPath, ...readdirSync(appDir)], { cwd: appDir, stdio: "inherit" });
}
console.log(`Done: ${zipPath}`);
