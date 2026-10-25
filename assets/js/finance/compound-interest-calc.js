(function () {
'use strict';
const $ = id => document.getElementById('ci-' + id);
const form = $('form');
function project(p) {
 const months = p.years * 12 + p.months;
 const g = Math.exp(p.n / 12 * Math.log1p(p.rate / 100 / p.n));
 let balance = p.principal, invested = p.principal;
 const rows = [{month:0,balance,invested,interest:0}];
 for(let m=1;m<=months;m++) {
  if(p.timing==='start' && (m-1)%p.frequency===0){balance+=p.deposit;invested+=p.deposit;}
  balance*=g;
  if(p.timing==='end' && m%p.frequency===0){balance+=p.deposit;invested+=p.deposit;}
  if(!Number.isFinite(balance)||balance>1e15)throw Error('Projected balance exceeds the supported limit. Reduce the amount, rate or duration.');
  if(m%12===0||m===months) rows.push({month:m,balance,invested,interest:Math.max(0,balance-invested)});
 }
 return {rows,balance,invested,interest:Math.max(0,balance-invested),effective:Math.expm1(p.n*Math.log1p(p.rate/100/p.n))*100,months};
}
function read(){
 if(!form.reportValidity())throw Error('Please check the highlighted input.');
 const p={};for(const key of ['principal','rate','years','months','deposit','frequency'])p[key]=Number($(key).value);
 p.n=Number($('compound').value);p.timing=$('timing').value;p.currency=$('currency').value;
 if(p.years*12+p.months<1||p.years*12+p.months>1200)throw Error('Enter a duration between 1 month and 100 years.');
 return p;
}
function formatter(currency){return new Intl.NumberFormat(currency==='INR'?'en-IN':navigator.language||'en-US',{style:'currency',currency,currencyDisplay:'code'});}
function period(m){return m===0?'Start':m%12===0?'Year '+m/12:Math.floor(m/12)+'y '+m%12+'m';}
let current;
function calculate(){try{
 const p=read(),r=project(p),f=formatter(p.currency);current={p,r};
 $('error').hidden=true;$('result').style.opacity='1';$('pdf').disabled=false;
 $('total').textContent=f.format(r.balance);$('invested').textContent=f.format(r.invested);$('interest').textContent=f.format(r.interest);
 $('effective').textContent='Effective annual rate: '+r.effective.toFixed(4)+'%';
 $('rows').innerHTML=r.rows.map(row=>'<tr><th scope="row">'+period(row.month)+'</th>'+['invested','interest','balance'].map(k=>'<td class="text-end text-nowrap">'+f.format(row[k])+'</td>').join('')+'</tr>').join('');
 $('caption').textContent='Amounts in '+p.currency+'. Interest is cumulative.';return current;
 }catch(e){current=null;$('error').hidden=false;$('error').textContent=e.message;$('pdf').disabled=true;$('result').style.opacity='.5';return null;}
}
// Small dependency-free PDF writer: ASCII text and repeated table headers.
function makePDF(p,r){
 const pages=[];let s='';const esc=t=>String(t).replace(/[^\x20-\x7E]/g,' ').replace(/([\\()])/g,'\\$1');
 const text=(x,y,t,size=10)=>{s+='0.08 0.16 0.27 rg BT /F1 '+size+' Tf '+x+' '+y+' Td ('+esc(t)+') Tj ET\n';};
 const line=(x,y,xx,yy,color='0.8 0.85 0.9')=>{s+=color+' RG 1 w '+x+' '+y+' m '+xx+' '+yy+' l S\n';};
 const money=v=>new Intl.NumberFormat('en-US',{minimumFractionDigits:formatter(p.currency).resolvedOptions().maximumFractionDigits,maximumFractionDigits:formatter(p.currency).resolvedOptions().maximumFractionDigits}).format(v);
 function header(){text(40,800,'EasyCalculator.org | Compound Interest',18);text(40,781,'Projection report - '+new Date().toISOString().slice(0,10),9);line(40,770,555,770);}
 function finish(){text(40,28,'easycalculator.org/compound-interest-calculator',9);text(505,28,'Page '+(pages.length+1),9);pages.push(s);s='';}
 header();text(40,745,'Currency: '+p.currency+' | Duration: '+r.months+' months');
 text(40,727,'Initial investment: '+money(p.principal)+' | Nominal annual rate: '+p.rate+'%');
 text(40,709,'Compounding: '+p.n+' times/year | Effective annual rate: '+r.effective.toFixed(4)+'%');
 text(40,691,'Regular deposit: '+money(p.deposit)+' every '+p.frequency+' month(s), at period '+p.timing);
 text(40,657,'Future value: '+p.currency+' '+money(r.balance),16);
 text(40,634,'Total contributed: '+money(r.invested)+' | Interest earned: '+money(r.interest),11);
 text(40,604,'Assumptions',11);
 ['Fixed nominal rate; no taxes, fees, inflation or exchange-rate adjustments.',
  'Equivalent monthly growth: (1 + annual rate / compounding periods)^(periods / 12).',
  'Daily uses 365 periods/year. Partial periods use exponential growth.',
  'Beginning deposits: period start; end deposits: completed periods only.',
  'Hypothetical estimate. Actual account terms and investment returns may differ.'
 ].forEach((t,i)=>text(40,587-i*15,t,9));
 text(40,489,'Year-by-year breakdown ('+p.currency+')',12);
 function tableHead(y){text(40,y,'Period',10);text(122,y,'Contributed',10);text(275,y,'Interest to date',10);text(425,y,'Balance',10);line(40,y-6,555,y-6);}
 let cursor=466;tableHead(cursor);cursor-=24;
 for(const row of r.rows){if(cursor<60){finish();header();tableHead(745);cursor=721;}text(40,cursor,period(row.month),9);text(122,cursor,money(row.invested),9);text(275,cursor,money(row.interest),9);text(425,cursor,money(row.balance),9);cursor-=19;}
 finish();
 const objects=['<< /Type /Catalog /Pages 2 0 R >>','', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'];
 const kids=[];for(const content of pages){const pageId=objects.length+1,streamId=pageId+1;kids.push(pageId+' 0 R');objects.push('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents '+streamId+' 0 R >>');objects.push('<< /Length '+content.length+' >>\nstream\n'+content+'endstream');}
 objects[1]='<< /Type /Pages /Kids ['+kids.join(' ')+'] /Count '+pages.length+' >>';
 let out='%PDF-1.4\n',offsets=[0];objects.forEach((o,i)=>{offsets.push(out.length);out+=(i+1)+' 0 obj\n'+o+'\nendobj\n';});const start=out.length;
 out+='xref\n0 '+(objects.length+1)+'\n0000000000 65535 f \n'+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('');out+='trailer\n<< /Size '+(objects.length+1)+' /Root 1 0 R >>\nstartxref\n'+start+'\n%%EOF';return new Blob([out],{type:'application/pdf'});
}
form.addEventListener('submit',e=>{e.preventDefault();calculate();});
form.addEventListener('input',()=>{current=null;$('pdf').disabled=true;$('result').style.opacity='.5';$('error').hidden=false;$('error').textContent='Inputs changed. Select Calculate to refresh your results.';});
form.addEventListener('change',()=>calculate());
form.addEventListener('reset',()=>setTimeout(calculate,0));
$('pdf').addEventListener('click',()=>{const data=calculate();if(!data)return;try{const url=URL.createObjectURL(makePDF(data.p,data.r)),a=document.createElement('a');a.href=url;a.download='compound-interest-report-'+data.p.currency+'.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}catch(e){$('error').hidden=false;$('error').textContent='The PDF could not be generated. Please try again.';}});
calculate();
})();