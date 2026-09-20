(function(){
'use strict';
const root=document.getElementById('ec-roman');if(!root)return;
const el=id=>root.querySelector('#rc-'+id);
const pairs=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
const values={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
let mode='roman',result='',lastNumber=2026;
function toRoman(n){let out='';for(const [v,s] of pairs){while(n>=v){out+=s;n-=v;}}return out;}
function fromRoman(s){let n=0;for(let i=0;i<s.length;i++){n+=values[s[i]]<(values[s[i+1]]||0)?-values[s[i]]:values[s[i]];}return n;}
function resetResult(message){result='';el('value').textContent='—';el('equation').textContent=message;el('steps').hidden=true;el('copy').disabled=true;el('status').textContent='';}
function clearError(){el('error').hidden=true;el('error').textContent='';el('input').removeAttribute('aria-invalid');}
function convert(){clearError();let s=el('input').value.trim(),n,roman,error;
if(mode==='roman'){if(!/^\d+$/.test(s)||Number(s)<1||Number(s)>3999){error='Enter a whole number between 1 and 3,999, without commas.';}else{n=Number(s);roman=toRoman(n);}}
else{s=s.toUpperCase();if(!s||!/^[IVXLCDM]+$/.test(s)){error='Enter Roman numeral letters only: I, V, X, L, C, D and M.';}else{n=fromRoman(s);if(n<1||n>3999||toRoman(n)!==s){error='Use standard Roman notation, such as IV for 4, IX for 9 or XL for 40.';}else{roman=s;el('input').value=s;}}}
if(error){resetResult('Check your input to continue.');el('error').textContent=error;el('error').hidden=false;el('input').setAttribute('aria-invalid','true');return;}
lastNumber=n;result=mode==='roman'?roman:String(n);el('value').textContent=result;el('equation').textContent=n.toLocaleString('en-US')+' = '+roman;el('copy').disabled=false;el('status').textContent='';el('tokens').replaceChildren();
const tokens=roman.match(/CM|CD|XC|XL|IX|IV|[MDCLXVI]/g);const parts=[];for(const token of tokens){const val=fromRoman(token);parts.push(val);const span=document.createElement('span');span.className='rc-token';span.textContent=token+' = '+val;el('tokens').appendChild(span);}el('sum').textContent=parts.join(' + ')+' = '+n.toLocaleString('en-US');el('steps').hidden=false;
}
function examples(){el('examples').replaceChildren();for(const n of [4,49,1994,2026]){const b=document.createElement('button');b.type='button';b.className='rc-chip';b.textContent=mode==='roman'?String(n):toRoman(n);b.addEventListener('click',()=>{el('input').value=b.textContent;convert();});el('examples').appendChild(b);}}
function setMode(next){if(next===mode)return;mode=next;const isRoman=mode==='roman';el('to-roman').setAttribute('aria-pressed',String(isRoman));el('to-number').setAttribute('aria-pressed',String(!isRoman));el('label').textContent=isRoman?'Enter a number':'Enter a Roman numeral';el('input').inputMode=isRoman?'numeric':'text';el('input').placeholder=isRoman?'e.g. 2026':'e.g. MMXXVI';el('help').textContent=isRoman?'Whole numbers from 1 to 3,999.':'Use I, V, X, L, C, D and M. Lowercase is accepted.';el('convert').textContent=isRoman?'Convert to Roman':'Convert to Number';el('result-label').textContent=isRoman?'Roman numeral':'Number';el('input').value=isRoman?String(lastNumber):toRoman(lastNumber);examples();convert();}
el('to-roman').addEventListener('click',()=>setMode('roman'));el('to-number').addEventListener('click',()=>setMode('number'));
el('form').addEventListener('submit',e=>{e.preventDefault();convert();});
el('input').addEventListener('input',()=>{clearError();resetResult('Select Convert to update your result.');});
el('reset').addEventListener('click',()=>{el('input').value='';clearError();resetResult('Enter a value to see your result.');el('input').focus();});
el('copy').addEventListener('click',async()=>{if(!result)return;try{await navigator.clipboard.writeText(result);el('status').textContent='Result copied.';}catch(e){el('status').textContent='Select the result and copy it manually.';}});
for(let row=1;row<=25;row++){const tr=document.createElement('tr');for(let col=0;col<4;col++){const n=row+col*25;for(const text of [String(n),toRoman(n)]){const td=document.createElement('td');td.textContent=text;tr.appendChild(td);}}el('chart-body').appendChild(tr);}
el('print').addEventListener('click',()=>{document.body.classList.add('rc-printing');try{window.print();}finally{document.body.classList.remove('rc-printing');}});window.addEventListener('afterprint',()=>document.body.classList.remove('rc-printing'));
examples();convert();
})();