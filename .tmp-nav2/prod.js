async function main() {
  const html = await (await fetch("https://qnvotech.com/", { headers: { "cache-control": "no-cache" } })).text();
  const href = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => m[1]);
  console.log("css", href);
  for (const h of href) {
    const css = await (await fetch(new URL(h, "https://qnvotech.com/").toString(), { headers: { "cache-control": "no-cache" } })).text();
    const i = css.indexOf(".site-nav-inner");
    console.log(h, css.slice(i, i + 220));
  }
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
