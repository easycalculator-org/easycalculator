(() => {
'use strict';
const root=document.getElementById('frequency-calculator');
const $=id=>root.querySelector('#'+id);
const form=$('fw-form'),freq=$('fw-frequency'),unit=$('fw-unit'),output=$('fw-output'),error=$('fw-error'),copy=$('fw-copy');
const symbols=['m','cm','mm','in'];
let resultText='';
function fmt(n){return Number(n.toPrecision(6)).toString();}
function calculate(){
 $('fw-copy-status').textContent='';
 const n=Number(freq.value),hz=n*Number(unit.value),meters=299792458/hz,factor=Number(output.value);
 const valid=freq.value.trim()!=='' && n>0 && Number.isFinite(hz) && hz>0 && Number.isFinite(meters) && meters>0 && Number.isFinite(meters*1000) && meters/4>0;
 error.hidden=valid;freq.setAttribute('aria-invalid',String(!valid));copy.disabled=!valid;
 if(!valid){error.textContent='Enter a positive, finite frequency within the supported numeric range.';['fw-full','fw-half','fw-quarter'].forEach(id=>$(id).textContent='—');$('fw-equivalents').textContent='';$('fw-calculation').textContent='A valid frequency is required.';resultText='';return;}
 const symbol=symbols[output.selectedIndex];
 $('fw-full').textContent=fmt(meters*factor)+' '+symbol;
 $('fw-half').textContent=fmt(meters*factor/2)+' '+symbol;
 $('fw-quarter').textContent=fmt(meters*factor/4)+' '+symbol;
 $('fw-equivalents').textContent=[1,100,1000,1/0.0254].map((v,i)=>fmt(meters*v)+' '+symbols[i]).join(' · ');
 $('fw-calculation').textContent='λ = 299,792,458 ÷ '+fmt(hz)+' ≈ '+fmt(meters)+' m';
 resultText='Frequency: '+freq.value+' '+unit.options[unit.selectedIndex].text+'\nFull wavelength: '+$('fw-full').textContent+'\nHalf wavelength: '+$('fw-half').textContent+'\nQuarter wavelength: '+$('fw-quarter').textContent+'\nFree-space calculation using c = 299,792,458 m/s.';
}
form.addEventListener('submit',e=>{e.preventDefault();calculate();});
[freq,unit,output].forEach(el=>el.addEventListener('input',calculate));
form.addEventListener('reset',()=>setTimeout(calculate,0));
root.querySelectorAll('[data-frequency]').forEach(button=>button.addEventListener('click',()=>{freq.value=button.dataset.frequency;unit.value=button.dataset.unit;calculate();}));
copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(resultText);$('fw-copy-status').textContent='Result copied.';}catch(e){$('fw-copy-status').textContent='Copy is unavailable here. Select and copy the displayed result.';}});
calculate();
})();
