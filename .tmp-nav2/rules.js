const { spawn } = require("child_process");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9342;
const proc = spawn(chrome, ["--headless=new","--disable-gpu","--no-first-run",`--remote-debugging-port=${port}`,`--user-data-dir=d:\\wamp64\\www\\my_sites\\qnvotech\\.tmp-nav2\\p2`,"about:blank"],{stdio:"ignore"});
const sleep=(ms)=>new Promise(r=>setTimeout(r,ms));
async function waitJson(){for(let i=0;i<40;i++){try{const r=await fetch(`http://127.0.0.1:${port}/json/version`); if(r.ok) return r.json();}catch{} await sleep(200);} throw new Error("cdp");}
(async()=>{
  const version=await waitJson();
  const ws=new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej;});
  let id=0; const pending=new Map();
  ws.onmessage=(ev)=>{const msg=JSON.parse(ev.data); if(msg.id&&pending.has(msg.id)){const p=pending.get(msg.id); pending.delete(msg.id); msg.error?p.reject(new Error(JSON.stringify(msg.error))):p.resolve(msg.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,method,params}));});
  const {targetId}=await send("Target.createTarget",{url:"about:blank"});
  const {sessionId}=await send("Target.attachToTarget",{targetId,flatten:true});
  const call=(method,params={})=>new Promise((resolve,reject)=>{const msgId=++id; pending.set(msgId,{resolve,reject}); ws.send(JSON.stringify({id:msgId,sessionId,method,params}));});
  await call("Page.enable"); await call("Runtime.enable");
  await call("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:1,mobile:true,screenWidth:390,screenHeight:844});
  await call("Page.navigate",{url:"http://127.0.0.1:3000/"});
  await sleep(500);
  await call("Runtime.evaluate",{expression:`sessionStorage.setItem("qnvo-logo-intro-v3","1")`});
  await call("Page.reload",{ignoreCache:true});
  await sleep(2000);
  const rules=await call("Runtime.evaluate",{expression:`(()=>{
    const hits=[];
    for (const sheet of document.styleSheets){
      let rules; try{ rules=sheet.cssRules; } catch(e){ hits.push({href:sheet.href, err:String(e)}); continue; }
      for (const rule of rules){
        const t=rule.cssText||"";
        if (t.includes("site-nav-inner") || t.includes("site-nav-burger") || t.includes("site-nav-desktop")) {
          hits.push(t.slice(0,240));
        }
      }
    }
    const burger=document.querySelector(".site-nav-burger");
    const r=burger.getBoundingClientRect();
    const top=document.elementFromPoint(r.x+r.width/2, r.y+r.height/2);
    burger.click();
    return {hits, top: top && (top.className+" "+top.tagName), expanded: burger.getAttribute("aria-expanded")};
  })()`, returnByValue:true});
  await sleep(300);
  const after=await call("Runtime.evaluate",{expression:`(()=>{
    const m=document.querySelector(".site-mobile");
    const b=m.getBoundingClientRect();
    return {hidden:m.hasAttribute("hidden"), className:m.className, h:Math.round(b.height), y:Math.round(b.y), expanded:document.querySelector(".site-nav-burger").getAttribute("aria-expanded")};
  })()`, returnByValue:true});
  console.log(JSON.stringify({rules:rules.result.value, after:after.result.value}, null, 2));
  proc.kill();
})().catch(e=>{console.error(e); proc.kill(); process.exit(1);});
