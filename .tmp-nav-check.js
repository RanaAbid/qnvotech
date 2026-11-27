const { spawn } = require("child_process");
const fs = require("fs");
const chrome = process.env.CHROME;
const port = 9341;
const out = process.env.OUTDIR;
const proc = spawn(
  chrome,
  ["--headless=new", "--disable-gpu", "--no-first-run", `--remote-debugging-port=${port}`, `--user-data-dir=${out}/p`, "about:blank"],
  { stdio: "ignore" },
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function waitJson() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return await res.json();
    } catch {}
    await sleep(200);
  }
  throw new Error("cdp");
}
(async () => {
  const version = await waitJson();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.onopen = res;
    ws.onerror = rej;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const call = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
    });
  await call("Page.enable");
  await call("Runtime.enable");
  await call("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await call("Network.setUserAgentOverride", {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  });
  await call("Page.navigate", { url: "http://127.0.0.1:3000/" });
  await sleep(800);
  await call("Runtime.evaluate", { expression: `sessionStorage.setItem("qnvo-logo-intro-v3","1")` });
  await call("Page.reload", { ignoreCache: true });
  await sleep(2500);
  const info = await call("Runtime.evaluate", {
    expression: `(() => {
      const inner = document.querySelector(".site-nav-inner");
      const burger = document.querySelector(".site-nav-burger");
      const cs = getComputedStyle(inner);
      const bs = getComputedStyle(burger);
      const br = burger.getBoundingClientRect();
      const ir = inner.getBoundingClientRect();
      return {
        display: cs.display,
        justify: cs.justifyContent,
        width: cs.width,
        cols: cs.gridTemplateColumns,
        burgerX: Math.round(br.x),
        burgerRight: Math.round(br.right),
        innerW: Math.round(ir.width),
        innerDisplay: cs.display,
        burgerMargin: bs.marginLeft,
        vw: innerWidth,
      };
    })()`,
    returnByValue: true,
  });
  const shot = await call("Page.captureScreenshot", { format: "png", clip: { x: 0, y: 0, width: 390, height: 180, scale: 1 } });
  fs.writeFileSync(out + "/now.png", Buffer.from(shot.data, "base64"));
  console.log(JSON.stringify(info.result.value, null, 2));
  proc.kill();
})().catch((e) => {
  console.error(e);
  proc.kill();
  process.exit(1);
});
