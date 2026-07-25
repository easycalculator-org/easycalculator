
let dur=5,rem=5,clk=0,run=false,start,raf,data=[];
let hist=JSON.parse(localStorage.cpsv2||"[]"),best=+(localStorage.bestv2||0);
bp.textContent=best.toFixed(2);
function drawHist(){h.innerHTML=hist.length?hist.map((x,i)=>`<tr><td>${i+1}</td><td>${x.t}s</td><td>${x.c}</td><td>${x.p}</td><td>${x.d}</td></tr>`).join(""):'<tr><td colspan=5 class=text-center>No results</td></tr>';
let tests=hist.length,clicks=hist.reduce((a,b)=>a+b.c,0),avg=tests?hist.reduce((a,b)=>a+ +b.p,0)/tests:0,peak=tests?Math.max(...hist.map(x=>+x.p)):0;
tt.textContent=tests;tc.textContent=clicks;ac.textContent=avg.toFixed(2);pk.textContent=peak.toFixed(2)}
drawHist();
document.querySelectorAll("[name=d]").forEach(x=>x.onchange=()=>{dur=+x.value;reset()});
function reset(){cancelAnimationFrame(raf);run=false;clk=0;rem=dur;data=[];t.textContent=dur.toFixed(2);c.textContent=0;cp.textContent="0.00";bar.style.width="100%";clickBtn.disabled=false;clickBtn.textContent="CLICK";pb.style.display="none";paint();}
function finish(){clickBtn.disabled=true;clickBtn.textContent="Finished";let cps=clk/dur;if(cps>best){best=cps;localStorage.bestv2=best;bp.textContent=best.toFixed(2);pb.style.display="inline-block";}
hist.unshift({t:dur,c:clk,p:cps.toFixed(2),d:new Date().toLocaleTimeString()});hist=hist.slice(0,10);localStorage.cpsv2=JSON.stringify(hist);drawHist();}
function loop(now){let e=(now-start)/1000;rem=Math.max(0,dur-e);t.textContent=rem.toFixed(2);bar.style.width=(rem/dur*100)+"%";if(rem<=0){finish();return;}raf=requestAnimationFrame(loop)}
function paint(){let ctx=g.getContext("2d");ctx.clearRect(0,0,g.width,g.height);ctx.beginPath();ctx.moveTo(0,120);data.forEach((v,i)=>ctx.lineTo(i*8,120-v*12));ctx.strokeStyle="#2563eb";ctx.lineWidth=2;ctx.stroke();}
clickBtn.onclick=e=>{if(!run){run=true;start=performance.now();raf=requestAnimationFrame(loop)}
let s=document.createElement("span");s.className="ripple";let rct=clickBtn.getBoundingClientRect();s.style.left=(e.offsetX||120)+"px";s.style.top=(e.offsetY||120)+"px";clickBtn.appendChild(s);setTimeout(()=>s.remove(),550);
clk++;c.textContent=clk;let live=clk/Math.max(.01,dur-rem);cp.textContent=live.toFixed(2);data.push(live);if(data.length>70)data.shift();paint();}
r.onclick=reset;document.addEventListener("keydown",e=>{if(e.code==="Space"&&!clickBtn.disabled){e.preventDefault();clickBtn.click()}});
reset();