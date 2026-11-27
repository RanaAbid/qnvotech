const { spawn } = require("child_process");
const fs = require("fs");
const chrome = process.env.CHROME;
const port = 9334;
const outDir = process.env.OUTDIR;
const proc = spawn(chrome, ["--headless=new","--disable-gpu","--no-first-run","--no-default-browser-check",`--remote-debugging-port=${port}`,"--user-data-dir="+outDir+"/profile2","about:blank"], {stdio:"ignore"});
const sleep = (ms)=>new Promise(r=>setTimeout(r,ms));
async function waitJson(){ for(let i=0;i<40;i++){ try{ const res=await fetch(`http://127.0.0.1:${port}/json/version`); if(res.ok) return await res.json(); }catch{} await sleep(250);} throw new Error("cdp"); }
(async()=>{
  const version = await waitJson();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((res,rej)=>{ws.onopen=res; ws.onerror=rej;});
  let id=0; const pending=new Map();
  ws.onmessage=(ev)=>{ const msg=JSON.parse(ev.data); if(msg.id&&pending.has(msg.id)){ const {resolve,reject}=pending.get(msg.id); pending.delete(msg.id); msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result);} };
  const send=(method,params={})=>new Promise((resolve,reject)=>{ const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,method,params})); });
  const {targetId}=await send("Target.createTarget",{url:"about:blank"});
  const {sessionId}=await send("Target.attachToTarget",{targetId,flatten:true});
  ws.onmessage=(ev)=>{ const msg=JSON.parse(ev.data); if(msg.id&&pending.has(msg.id)){ const {resolve,reject}=pending.get(msg.id); pending.delete(msg.id); msg.error?reject(new Error(JSON.stringify(msg.error))):resolve(msg.result);} };
  const call=(method,params={})=>new Promise((resolve,reject)=>{ const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,sessionId,method,params})); });
  await call("Page.enable"); await call("Runtime.enable");
  await call("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:2,mobile:true});
  await call("Page.navigate",{url:"https://qnvotech.com/"});
  await sleep(4000);
  const expr=`(()=>{
    try{ sessionStorage.setItem("qnvo-logo-intro-v3","1"); }catch(e){}
    const pick=(sel)=>{ const el=document.querySelector(sel); if(!el) return null; const r=el.getBoundingClientRect(); const cs=getComputedStyle(el); return {x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),display:cs.display,cols:cs.gridTemplateColumns}; };
    return {href:location.href, title:document.title, inner:pick(".site-nav-inner"), logo:pick(".site-logo"), burger:pick(".site-nav-burger"), nav:pick(".site-nav-desktop"), actions:pick(".site-nav-actions"), header:pick(".site-header"), topline: document.querySelector(".site-topline")?.innerText?.slice(0,120) };
  })()`;
  let ev=await call("Runtime.evaluate",{expression:expr,returnByValue:true});
  await call("Page.navigate",{url:"https://qnvotech.com/"});
  await sleep(500);
  await call("Runtime.evaluate",{expression:`sessionStorage.setItem("qnvo-logo-intro-v3","1")`});
  await call("Page.reload",{ignoreCache:true});
  await sleep(3500);
  ev=await call("Runtime.evaluate",{expression:expr,returnByValue:true});
  fs.writeFileSync(outDir+"/prod-390.json", JSON.stringify(ev,null,2));
  const shot=await call("Page.captureScreenshot",{format:"png",clip:{x:0,y:0,width:390,height:220,scale:1}});
  fs.writeFileSync(outDir+"/prod-header.png", Buffer.from(shot.data,"base64"));
  console.log("done");
  proc.kill(); process.exit(0);
})().catch(e=>{console.error(e); proc.kill(); process.exit(1);});
