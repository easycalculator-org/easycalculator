(() => {
'use strict';
const root=document.getElementById('wavelength-calculator');
const $=id=>root.querySelector('#'+id);
const form=$('wf-form'),wave=$('wf-wavelength'),unit=$('wf-unit'),output=$('wf-output'),error=$('wf-error'),copy=$('wf-copy');
const bands=[[1e12,'THz'],[1e9,'GHz'],[1e6,'MHz'],[1e3,'kHz'],[1,'Hz']];
let resultText='';
function fmt(n){return Number(n.toPrecision(6)).toString();}
function periodLabel(t){
 const scales=[[1,'s'],[1e-3,'ms'],[1e-6,'µs'],[1e-9,'ns'],[1e-12,'ps'],[1e-15,'fs']];
 const [scale,label]=scales.find(([d])=>t>=d)||scales[scales.length-1];
 return fmt(t/scale)+' '+label;
}
function calculate(){
 $('wf-copy-status').textContent='';
 const n=Number(wave.value),meters=n*Number(unit.value),hz=299792458/meters,period=meters/299792458;
 const selected=output.value==='auto'?(bands.find(([d])=>hz>=d)||bands[bands.length-1]):bands.find(([d])=>d===Number(output.value));
 const [divisor,symbol]=selected;
 const valid=wave.value.trim()!=='' && n>0 && Number.isFinite(meters) && meters>0 && Number.isFinite(hz) && hz>0 && Number.isFinite(period) && period>0 && hz/1e12>0;
 error.hidden=valid;wave.setAttribute('aria-invalid',String(!valid));copy.disabled=!valid;
 if(!valid){error.textContent='Enter a positive, finite wavelength within the supported numeric range.';['wf-frequency','wf-meters','wf-period'].forEach(id=>$(id).textContent='—');$('wf-equivalents').textContent='';$('wf-calculation').textContent='A valid wavelength is required.';resultText='';return;}
 $('wf-frequency').textContent=fmt(hz/divisor)+' '+symbol;
 $('wf-meters').textContent=fmt(meters)+' m';
 $('wf-period').textContent=periodLabel(period);
 $('wf-equivalents').textContent=[[1,'Hz'],[1e6,'MHz'],[1e9,'GHz'],[1e12,'THz']].filter(([d])=>d!==divisor).map(([d,u])=>fmt(hz/d)+' '+u).join(' · ');
 $('wf-calculation').textContent='f = 299,792,458 ÷ '+fmt(meters)+' ≈ '+fmt(hz)+' Hz';
 resultText='Wavelength: '+wave.value+' '+unit.options[unit.selectedIndex].text+'\nFrequency: '+$('wf-frequency').textContent+'\nPeriod: '+$('wf-period').textContent+'\nFree-space calculation using c = 299,792,458 m/s.';
}
form.addEventListener('submit',e=>{e.preventDefault();calculate();if(!error.hidden)wave.focus();});
[wave,unit,output].forEach(el=>el.addEventListener('input',calculate));
form.addEventListener('reset',()=>setTimeout(calculate,0));
root.querySelectorAll('[data-wavelength]').forEach(button=>button.addEventListener('click',()=>{wave.value=button.dataset.wavelength;unit.value=button.dataset.unit;calculate();}));
copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(resultText);$('wf-copy-status').textContent='Result copied.';}catch(e){$('wf-copy-status').textContent='Copy is unavailable here. Select and copy the displayed result.';}});
calculate();
})();