async function main() {
  const css = await (await fetch("https://qnvotech.com/_next/static/css/9b6dad9f71351253.css")).text();
  const i = css.indexOf("site-nav-inner");
  console.log("idx", i, "len", css.length);
  console.log(css.slice(Math.max(0, i - 40), i + 300));
  const j = css.indexOf("site-nav-actions");
  console.log("\nactions", css.slice(j, j + 200));
  const k = css.indexOf("site-nav-burger");
  console.log("\nburger", css.slice(k, k + 180));
}
main();
