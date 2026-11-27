const { spawn } = require("child_process");
const fs = require("fs");
const chrome = process.env.CHROME;
const port = 9333;
const outDir = process.env.OUTDIR;

const proc = spawn(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  "--user-data-dir=" + outDir + "/profile",
  "about:blank",
], { stdio: "ignore" });

function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

async function waitJson(){
  for (let i=0;i<40;i++){
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) return await res.json();
    } catch {}
    await sleep(250);
  }
  throw new Error("cdp not up");
}

(async () => {
  const version = await waitJson();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const {resolve, reject} = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  };
  function send(method, params={}){
    const msgId = ++id;
    return new Promise((resolve, reject) => {
      pending.set(msgId, {resolve, reject});
      ws.send(JSON.stringify({id: msgId, method, params}));
    });
  }
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  function sessionSend(method, params={}){
    const msgId = ++id;
    return new Promise((resolve, reject) => {
      pending.set(msgId, {resolve, reject});
      ws.send(JSON.stringify({ id: msgId, method: "Target.sendMessageToTarget", params: { sessionId, message: JSON.stringify({ id: msgId, method, params }) } }));
    });
  }
  // With flatten:true, messages come back with sessionId. Need to handle that.
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    const inner = msg.method === "Target.receivedMessageFromTarget" || msg.method === "Target.dispatchMessage" ? null : msg;
    const payload = msg.sessionId ? msg : (msg.params && msg.params.message ? JSON.parse(msg.params.message) : msg);
    const key = payload.id;
    if (key && pending.has(key)) {
      const {resolve, reject} = pending.get(key);
      pending.delete(key);
      if (payload.error) reject(new Error(JSON.stringify(payload.error)));
      else resolve(payload.result);
    }
  };
  function call(method, params={}){
    const msgId = ++id;
    return new Promise((resolve, reject) => {
      pending.set(msgId, {resolve, reject});
      ws.send(JSON.stringify({ id: msgId, sessionId, method, params }));
    });
  }
  await call("Page.enable");
  await call("Runtime.enable");
  await call("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await call("Page.navigate", { url: "http://localhost:3000/" });
  await sleep(2500);
  const expr = `(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { sel, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), display: cs.display, position: cs.position, gridTemplateColumns: cs.gridTemplateColumns };
    };
    return {
      innerWidth: window.innerWidth,
      header: pick(".site-header"),
      topline: pick(".site-topline"),
      bar: pick(".site-nav-bar"),
      inner: pick(".site-nav-inner"),
      logo: pick(".site-logo"),
      desktop: pick(".site-nav-desktop"),
      actions: pick(".site-nav-actions"),
      burger: pick(".site-nav-burger"),
      toplineText: document.querySelector(".site-topline-inner")?.innerText?.slice(0,180),
    };
  })()`;
  const evaled = await call("Runtime.evaluate", { expression: expr, returnByValue: true });
  fs.writeFileSync(outDir + "/layout-390.json", JSON.stringify(evaled, null, 2));
  const shot = await call("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(outDir + "/home-390.png", Buffer.from(shot.data, "base64"));
  await call("Emulation.setDeviceMetricsOverride", { width: 320, height: 700, deviceScaleFactor: 1, mobile: true });
  await sleep(400);
  const evaled2 = await call("Runtime.evaluate", { expression: expr, returnByValue: true });
  fs.writeFileSync(outDir + "/layout-320.json", JSON.stringify(evaled2, null, 2));
  const shot2 = await call("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(outDir + "/home-320.png", Buffer.from(shot2.data, "base64"));
  console.log("done");
  proc.kill();
  process.exit(0);
})().catch((err) => { console.error(err); proc.kill(); process.exit(1); });
