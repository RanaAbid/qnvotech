const { spawn } = require("child_process");
const fs = require("fs");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9344;
const out = "d:\\wamp64\\www\\my_sites\\qnvotech\\.tmp-nav2";
const proc = spawn(chrome, ["--headless=new","--disable-gpu","--no-first-run",`--remote-debugging-port=${port}`,`--user-data-dir=${out}\\p3`,"about:blank"],{stdio:"ignore"});
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
async function waitJson(){for(let i=0;i<50;i++){try{const r=await fetch(`http://127.0.0.1:${port}/json/version`); if(r.ok) return r.json();}catch{} await sleep(200);} throw new Error("cdp");}
(async()=>{
  const version=await waitJson();
  const ws=new WebSocket(version.webSocketDebuggerUrl);
  const logs=[];
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  let id=0; const pending=new Map();
  ws.onmessage=(ev)=>{
    const msg=JSON.parse(ev.data);
    if (msg.method==="Runtime.consoleAPICalled") logs.push(msg.params.args?.map(a=>a.value||a.description).join(" "));
    if (msg.method==="Runtime.exceptionThrown") logs.push("EXC "+(msg.params.exceptionDetails?.text||"")+" "+(msg.params.exceptionDetails?.exception?.description||"").slice(0,300));
    if(msg.id&&pending.has(msg.id)){const p=pending.get(msg.id); pending.delete(msg.id); msg.error?p.reject(new Error(JSON.stringify(msg.error))):p.resolve(msg.result);}
  };
  const send=(method,params={})=>new Promise((resolve,reject)=>{const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,method,params}));});
  const {targetId}=await send("Target.createTarget",{url:"about:blank"});
  const {sessionId}=await send("Target.attachToTarget",{targetId,flatten:true});
  const call=(method,params={})=>new Promise((resolve,reject)=>{const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,sessionId,method,params}));});
  await call("Page.enable");
  await call("Runtime.enable");
  await call("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:2,mobile:true});
  await call("Page.navigate",{url:"http://127.0.0.1:3000/"});
  await sleep(600);
  await call("Runtime.evaluate",{expression:`sessionStorage.setItem("qnvo-logo-intro-v3","1")`});
  await call("Page.reload",{ignoreCache:true});
  await sleep(4000);
  const hit=await call("Runtime.evaluate",{expression:`(()=>{
    const b=document.querySelector(".site-nav-burger");
    const r=b.getBoundingClientRect();
    const x=r.x+r.width/2, y=r.y+r.height/2;
    const top=document.elementFromPoint(x,y);
    return {x:Math.round(x), y:Math.round(y), top: top? top.tagName+"."+top.className : null, expanded:b.getAttribute("aria-expanded")};
  })()`, returnByValue:true});
  await call("Input.dispatchMouseEvent",{type:"mousePressed", x: hit.result.value.x, y: hit.result.value.y, button:"left", clickCount:1});
  await call("Input.dispatchMouseEvent",{type:"mouseReleased", x: hit.result.value.x, y: hit.result.value.y, button:"left", clickCount:1});
  await sleep(500);
  const after=await call("Runtime.evaluate",{expression:`(()=>{
    const m=document.querySelector(".site-mobile");
    const b=m.getBoundingClientRect();
    return {hidden:m.hasAttribute("hidden"), cls:m.className, h:Math.round(b.height), y:Math.round(b.y), exp:document.querySelector(".site-nav-burger").getAttribute("aria-expanded"), text:m.innerText.slice(0,80)};
  })()`, returnByValue:true});
  const shot=await call("Page.captureScreenshot",{format:"png"});
  fs.writeFileSync(out+"/open.png", Buffer.from(shot.data,"base64"));
  fs.writeFileSync(out+"/logs.txt", logs.join("\n"));
  console.log(JSON.stringify({hit:hit.result.value, after:after.result.value, logCount:logs.length}, null, 2));
  console.log(logs.slice(0,15).join("\n"));
  proc.kill();
})().catch(e=>{console.error(e); proc.kill(); process.exit(1);});
