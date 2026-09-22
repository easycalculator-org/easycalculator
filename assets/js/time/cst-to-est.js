(() => {
'use strict';
const root=document.getElementById('ce-app');
if(!root) return;
const $=id=>root.querySelector('#ce-'+id);
const date=$('input-date'),time=$('input-time'),format=$('format');
const MINUTE=60000,DAY=86400000;
function zones(){return $('mode').value==='daylight'?{a:'CDT',b:'EDT',an:'Central Daylight Time',bn:'Eastern Daylight Time',ao:-300,bo:-240}:{a:'CST',b:'EST',an:'Central Standard Time',bn:'Eastern Standard Time',ao:-360,bo:-300};}
const offset=n=>'UTC −'+String(Math.abs(n)/60).padStart(2,'0')+':00';
let reverse=false,current=null,resultText='';
const pad=n=>String(n).padStart(2,'0');
const iso=d=>d.toISOString().slice(0,10);
const clockInput=d=>pad(d.getUTCHours())+':'+pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds());
function clock(d){const h=d.getUTCHours(),ms=pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds());return format.value==='24'?pad(h)+':'+ms:(h%12||12)+':'+ms+' '+(h<12?'AM':'PM');}
const dateLabel=d=>new Intl.DateTimeFormat('en-GB',{weekday:'short',day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(d);
function parse(){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date.value)||!/^\d{2}:\d{2}(?::\d{2})?$/.test(time.value))return null;
 const [y,mo,da]=date.value.split('-').map(Number),[h,m,sec=0]=time.value.split(':').map(Number);
 if(y<1900||y>2100||h>23||m>59||sec>59)return null;
 const d=new Date(Date.UTC(y,mo-1,da,h,m,sec));
 return iso(d)===date.value?d:null;
}
function labels(){
 const z=zones(),from=reverse?z.b:z.a,to=reverse?z.a:z.b;
 $('direction').textContent=from+' → '+to+' · '+(reverse?'−1 hour':'+1 hour');
 $('from').textContent=reverse?z.bn:z.an;$('to').textContent=reverse?z.an:z.bn;
 $('offset').textContent=offset(reverse?z.bo:z.ao);$('result-zone').textContent=to+' · '+offset(reverse?z.ao:z.bo);
 $('time-label').textContent='Time in '+from;$('rule').textContent=to+' = '+from+(reverse?' − 01:00':' + 01:00');
 $('basis-note').textContent=$('mode').value==='daylight'?'Fixed daylight-time clocks: CDT (UTC−05:00) and EDT (UTC−04:00). Choose this pair only when your event uses these abbreviations.':'Fixed standard-time clocks: CST (UTC−06:00) and EST (UTC−05:00). These are not automatic Chicago/New York local clocks during daylight saving time.';
}
function update(){
 labels();$('status').textContent='';
 const src=parse();current=null;resultText='';
 $('error').hidden=!!src;
 [date,time].forEach(el=>el.setAttribute('aria-invalid',String(!src)));
 $('copy').disabled=!src;
 $('range').disabled=!src;
 if(!src){$('result-time').textContent='—';$('result-date').textContent='Enter a valid date and time';$('day').textContent='';$('slider-time').textContent='—';return false;}
 const dst=new Date(src.getTime()+(reverse?-60:60)*MINUTE);
 current={src,dst};
 $('result-time').textContent=clock(dst);
 $('result-date').textContent=dateLabel(dst);
 const delta=Math.floor(dst.getTime()/DAY)-Math.floor(src.getTime()/DAY);
 $('day').textContent=delta<0?'Previous day · −1 day':delta>0?'Next day · +1 day':'Same day';
 $('range').value=src.getUTCHours()*60+src.getUTCMinutes();
 $('slider-time').textContent=clock(src)+' '+(reverse?zones().b:zones().a);
 $('range').setAttribute('aria-valuetext',$('slider-time').textContent);
 resultText=dateLabel(src)+' at '+clock(src)+' '+(reverse?zones().b:zones().a)+' = '+dateLabel(dst)+' at '+clock(dst)+' '+(reverse?zones().a:zones().b)+' ('+$('day').textContent+').';
 return true;
}
function now(){const d=new Date(Date.now()+(reverse?zones().bo:zones().ao)*MINUTE);date.value=iso(d);time.value=clockInput(d);update();}
$('form').addEventListener('submit',e=>{e.preventDefault();if(!update())(!date.value?date:time).focus();});
[date,time,format].forEach(el=>el.addEventListener('input',update));
$('now').addEventListener('click',now);
$('range').addEventListener('input',()=>{const n=Number($('range').value);time.value=pad(Math.floor(n/60))+':'+pad(n%60)+':'+pad(current?current.src.getUTCSeconds():0);update();});
root.querySelectorAll('[data-time]').forEach(b=>b.addEventListener('click',()=>{time.value=b.dataset.time;update();}));
$('swap').addEventListener('click',()=>{
 const valid=update();if(!valid)return;
 const target=current.dst;
 if(target.getUTCFullYear()<1900||target.getUTCFullYear()>2100){$('status').textContent='The converted date is outside the supported input range (1900–2100).';return;}
 reverse=!reverse;date.value=iso(target);time.value=clockInput(target);update();
});
async function copy(text,success){try{await navigator.clipboard.writeText(text);$('status').textContent=success;}catch(e){$('status').textContent='Automatic copying is unavailable. Copy the text below.';const field=document.createElement('textarea');field.value=text;field.readOnly=true;field.setAttribute('aria-label','Text to copy');field.style.cssText='width:100%;margin-top:8px;min-height:70px';$('status').appendChild(field);field.focus();field.select();}}
$('copy').addEventListener('click',()=>{if(update())copy(resultText,'Result copied.');});
function live(){
 const instant=Date.now(),z=zones();
 const central=new Date(instant+z.ao*MINUTE),eastern=new Date(instant+z.bo*MINUTE);
 $('live-central-label').textContent=z.a;$('live-eastern-label').textContent=z.b;
 $('live-central').textContent=clock(central);$('live-eastern').textContent=clock(eastern);
 $('live-central-date').textContent=dateLabel(central)+' · '+offset(z.ao);
 $('live-eastern-date').textContent=dateLabel(eastern)+' · '+offset(z.bo);
}
$('mode').addEventListener('change',()=>{update();live();});
format.addEventListener('input',live);
const params=new URLSearchParams(window.location.search);
reverse=params.get('direction')==='est-cst';
$('mode').value=params.get('mode')==='daylight'?'daylight':'standard';
format.value=params.get('format')==='24'?'24':'12';
now();
if(params.has('date')||params.has('time')){date.value=params.get('date')||date.value;time.value=params.get('time')||time.value;update();}
live();setInterval(()=>{if(!document.hidden)live();},1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)live();});
})();