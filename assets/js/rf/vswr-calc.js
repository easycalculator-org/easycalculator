
(() => {
'use strict';
const root = document.getElementById('ec-vswr');
if (!root) return;
const el = id => root.querySelector('#ec-' + id);
const modes = {
 vswr: {label:'VSWR (ratio to 1)', help:'Enter a value of 1 or greater. For 1.5:1, enter 1.5.', a:1.5, min:1},
 rl: {label:'Return loss (dB)', help:'Enter positive return loss, or 0 dB for total reflection.', a:14, min:0},
 s11: {label:'S11 magnitude (dB)', help:'Enter zero or negative dB, for example −14. Return loss uses the opposite sign.', a:-14, max:0},
 gamma: {label:'Reflection coefficient magnitude |Γ|', help:'Enter a magnitude from 0 to 1, not a signed or complex coefficient.', a:0.2, min:0, max:1},
 power: {label:'Forward power (W)', second:'Reflected power (W)', help:'Forward power must be greater than 0; reflected power must be between 0 and forward power.', a:100, b:4, min:0},
 voltage: {label:'Standing-wave Vmax (V)', second:'Standing-wave Vmin (V)', help:'Vmax must be greater than 0; Vmin must be between 0 and Vmax.', a:5, b:2, min:0}
};
let mode = 'vswr', last = null;
const fmt = (n, digits=4) => !Number.isFinite(n) ? (n < 0 ? '−∞' : '∞') : n === 0 ? '0' : (Math.abs(n) < 0.0001 || Math.abs(n) >= 1e9) ? n.toExponential(4) : Number(n.toFixed(digits)).toString();
function invalidate() {
 last = null; el('result-content').hidden = true; el('empty').hidden = false;
 el('empty').textContent = 'Select Calculate to update your results.';
 el('download').disabled = true;
}
function switchMode(next) {
 mode = next; const m = modes[mode];
 root.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
 el('label-a').textContent = m.label; el('input-help').textContent = m.help;
 const a = el('input-a'); a.value = m.a;
 a.removeAttribute('min'); a.removeAttribute('max');
 if (m.min !== undefined) a.min = m.min;
 if (m.max !== undefined) a.max = m.max;
 el('second').hidden = !m.second; el('input-b').disabled = !m.second;
 el('input-b').required = !!m.second;
 if (m.second) {el('label-b').textContent = m.second; el('input-b').value = m.b;}
 el('error').hidden = true;
 [a,el('input-b')].forEach(i => i.removeAttribute('aria-invalid'));
 invalidate();
}
function fail(message, field='input-a') {
 invalidate(); el('error').textContent = message; el('error').hidden = false;
 el(field).setAttribute('aria-invalid','true'); el(field).focus();
}
function calculate() {
 const a = el('input-a').valueAsNumber, b = el('input-b').valueAsNumber;
 [el('input-a'),el('input-b')].forEach(i => i.removeAttribute('aria-invalid'));
 el('error').hidden = true;
 if (!Number.isFinite(a)) return fail('Enter a finite numeric value.');
 if (modes[mode].second && !Number.isFinite(b)) return fail('Enter a finite second value.','input-b');
 let g, s, accepted;
 if (mode === 'vswr') {
   if (a < 1) return fail('VSWR must be at least 1.');
   s=a; g=(a-1)/(a+1); accepted=(4/(a+1))*(a/(a+1));
 } else if (mode === 'rl' || mode === 's11') {
   if (mode === 'rl' && a < 0) return fail('Return loss must be 0 dB or greater. Use S11 mode for negative dB.');
   if (mode === 's11' && a > 0) return fail('S11 must be 0 dB or less for this passive-load calculator.');
   const rl=mode==='rl'?a:-a, t=-rl*Math.LN10/20;
   g=Math.exp(t); const oneMinusG=-Math.expm1(t);
   s=oneMinusG===0?Infinity:(1+g)/oneMinusG;
   accepted=-Math.expm1(2*t);
 } else if (mode === 'gamma') {
   if (a < 0 || a > 1) return fail('Reflection magnitude must be between 0 and 1.');
   g=a;
 } else if (mode === 'power') {
   if (a <= 0) return fail('Forward power must be greater than 0 W.');
   if (b < 0 || b > a) return fail('Reflected power must be between 0 and forward power.','input-b');
   g=Math.sqrt(b/a); accepted=(a-b)/a;
 } else {
   if (a <= 0) return fail('Vmax must be greater than 0 V.');
   if (b < 0 || b > a) return fail('Vmin must be between 0 and Vmax.','input-b');
   const ratio=b/a; g=(1-ratio)/(1+ratio); s=b===0?Infinity:a/b;
   accepted=(4*ratio)/((1+ratio)*(1+ratio));
 }
 if (accepted===undefined) accepted=(1-g)*(1+g);
 if (s===undefined) s=g===1?Infinity:(1+g)/(1-g);
 const rl=mode==='rl'?a:mode==='s11'?-a:g===0?Infinity:-20*Math.log10(g);
 const ml=accepted===0?Infinity:-10*Math.log10(accepted);
 const reflected=mode==='power'?b/a:g*g;
 last={mode,a,b,s,g,rl,ml,reflected:reflected*100,accepted:accepted*100};
 el('out-vswr').textContent=fmt(s)+':1';
 el('out-rl').textContent=fmt(rl)+' dB';
 el('out-gamma').textContent=fmt(g,6);
 el('out-reflected').textContent=fmt(reflected*100)+'%';
 el('out-accepted').textContent=fmt(accepted*100)+'%';
 el('out-ml').textContent=fmt(ml)+' dB';
 el('out-s11').textContent=fmt(-rl)+' dB';
 el('power-bar').style.width=(accepted*100)+'%';
 el('power-text').textContent=mode==='power'?`At this plane: ${fmt(b)} W reflected; ${fmt(a-b)} W accepted.`:`${fmt(accepted*100)}% accepted · ${fmt(reflected*100)}% reflected at the reference plane.`;
 el('interpretation').textContent=g===0?'Ideal match at this reference plane.':accepted===0?'Total reflection: no incident power is accepted at this plane.':'Lower VSWR means less reflection. Compare with your equipment specification at the operating frequency.';
 const formulas={vswr:`|Γ| = (${fmt(a)} − 1) / (${fmt(a)} + 1)`,rl:`|Γ| = 10^(−${fmt(a)}/20)`,s11:`|Γ| = 10^(${fmt(a)}/20)`,gamma:`VSWR = (1 + ${fmt(g)}) / (1 − ${fmt(g)})`,power:`|Γ| = √(${fmt(b)} / ${fmt(a)})`,voltage:`VSWR = ${fmt(a)} / ${fmt(b)}`};
 el('worked').textContent=formulas[mode];
 el('empty').hidden=true; el('result-content').hidden=false; el('download').disabled=false;
}
root.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{switchMode(b.dataset.mode);calculate();}));
root.querySelectorAll('[data-vswr]').forEach(b=>b.addEventListener('click',()=>{switchMode('vswr');el('input-a').value=b.dataset.vswr;calculate();}));
el('vswr-form').addEventListener('submit',e=>{e.preventDefault();calculate();});
[el('input-a'),el('input-b')].forEach(i=>i.addEventListener('input',()=>{invalidate();el('error').hidden=true;i.removeAttribute('aria-invalid');}));
el('reset').addEventListener('click',()=>{switchMode('vswr');calculate();});
el('download').addEventListener('click',()=>{
 if (!last) return;
 const r=last, rows=[['Quantity','Value','Unit'],['Input mode',r.mode,''],[modes[r.mode].label,r.a,'']];
 if (modes[r.mode].second) rows.push([modes[r.mode].second,r.b,'']);
 rows.push(['VSWR',fmt(r.s),':1'],['Reflection magnitude',fmt(r.g,8),''],['Return loss',fmt(r.rl),'dB'],['S11',fmt(-r.rl),'dB'],['Reflected power',fmt(r.reflected),'%'],['Accepted power',fmt(r.accepted),'%'],['Mismatch loss',fmt(r.ml),'dB'],['Assumption','Passive load; same reference plane; accepted power is not radiation efficiency','']);
 const csv=rows.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n');
 const url=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'}));
 const link=document.createElement('a');link.href=url;link.download='vswr-results.csv';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
calculate();
})();