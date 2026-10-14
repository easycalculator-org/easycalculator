
(() => {
'use strict';
const root = document.getElementById('ec-endpoint');
const get = id => root.querySelector('#ec-' + id);
const inputs = ['x1','y1','mx','my'].map(get);
const fmt = n => Number(n.toPrecision(10)).toString();
const pair = (x,y) => '(' + fmt(x) + ', ' + fmt(y) + ')';
const term = n => n < 0 ? '(' + fmt(n) + ')' : fmt(n);
const tick = n => Math.abs(n)>=10000 ? n.toExponential(1) : fmt(n);
const NS = 'http://www.w3.org/2000/svg';
function svg(tag, attrs, content) {
 const el = document.createElementNS(NS,tag);
 Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));
 if(content !== undefined) el.textContent = content;
 get('drawing').appendChild(el); return el;
}
function draw(a,b,c,d,mx,my) {
 get('drawing').replaceChildren();
 // Equal unit scale; centering on M keeps large coordinates manageable.
 const span = Math.max(Math.abs(c-a),Math.abs(d-b),2);
 const scale = 220 / span;
 const X = x => 260 + (x-mx)*scale;
 const Y = y => 180 - (y-my)*scale;
 const rawStep = span/4;
 const power = Math.pow(10,Math.floor(Math.log10(rawStep)));
 const step = [1,2,5,10].find(n=>n*power>=rawStep)*power;
 const loX=mx-220/scale, hiX=mx+220/scale, loY=my-140/scale, hiY=my+140/scale;
 for(let i=Math.ceil(loX/step),end=Math.floor(hiX/step);i<=end;i++){
  const value=i*step, px=X(value);
  svg('line',{x1:px,y1:30,x2:px,y2:320,stroke:value===0?'#8b9ab0':'#e5ebf3','stroke-width':value===0?1.5:1});
  svg('text',{x:px,y:340,'text-anchor':'middle','font-size':10,fill:'#586b83'},tick(value));
 }
 for(let i=Math.ceil(loY/step),end=Math.floor(hiY/step);i<=end;i++){
  const value=i*step, py=Y(value);
  svg('line',{x1:40,y1:py,x2:480,y2:py,stroke:value===0?'#8b9ab0':'#e5ebf3','stroke-width':value===0?1.5:1});
  svg('text',{x:35,y:py+3,'text-anchor':'end','font-size':10,fill:'#586b83'},tick(value));
 }
 svg('text',{x:496,y:340,'font-size':12,fill:'#53657d'},'x');
 svg('text',{x:18,y:20,'font-size':12,fill:'#53657d'},'y');
 svg('line',{x1:X(a),y1:Y(b),x2:X(mx),y2:Y(my),stroke:'#2563eb','stroke-width':3});
 svg('line',{x1:X(mx),y1:Y(my),x2:X(c),y2:Y(d),stroke:'#7c3aed','stroke-width':3,'stroke-dasharray':'7 5'});
 const points=[[a,b,'A','#2563eb'],[c,d,'B','#7c3aed'],[mx,my,'M','#087f5b']];
 const same=a===c&&b===d;
 for(const [x,y,label,color] of (same ? [[mx,my,'A = M = B','#087f5b']] : points)){
  svg('circle',{cx:X(x),cy:Y(y),r:7,fill:color,stroke:'#fff','stroke-width':3});
  svg('text',{x:X(x),y:Y(y)-15,'text-anchor':'middle','font-size':14,'font-weight':700,fill:color},label);
 }
 get('legend').replaceChildren();
 points.forEach(([x,y,label,color])=>{const el=document.createElement('span');el.style.color=color;el.textContent=label+' '+pair(x,y);get('legend').appendChild(el);});
 get('svg-desc').textContent='Endpoint A '+pair(a,b)+', endpoint B '+pair(c,d)+', midpoint M '+pair(mx,my)+'. AM equals MB.';
 get('caption').textContent=same?'A, M and B coincide: the segment has zero length.':'AM = MB. The dashed section extends from M to the missing endpoint B. Equal scale on both axes.';
}
function calculate() {
 const values=inputs.map(i=>i.valueAsNumber);
 const invalid=inputs.find((i,k)=>!i.value.trim()||!Number.isFinite(values[k])||Math.abs(values[k])>1e12);
 inputs.forEach(i=>i.removeAttribute('aria-invalid'));
 if(invalid){invalid.setAttribute('aria-invalid','true');get('error').textContent='Enter a valid number from −1,000,000,000,000 to 1,000,000,000,000 in each field.';get('error').hidden=false;get('result').hidden=true;get('drawing').replaceChildren();get('legend').replaceChildren();get('svg-desc').textContent='No result. Enter four valid coordinates.';get('caption').textContent='Enter valid coordinates to update the diagram.';invalid.focus();return;}
 get('error').hidden=true; get('result').hidden=false;
 const [a,b,mx,my]=values, c=2*mx-a, d=2*my-b;
 get('answer').textContent='B = '+pair(c,d);
 get('steps').replaceChildren();
 [['x₂',a,mx,c],['y₂',b,my,d]].forEach(([axis,known,mid,result])=>{const p=document.createElement('p');p.textContent=axis+' = 2 × '+term(mid)+' − '+term(known)+' = '+fmt(result);get('steps').appendChild(p);});
 draw(a,b,c,d,mx,my);
}
get('form').addEventListener('submit',e=>{e.preventDefault();calculate();});
get('form').addEventListener('reset',()=>{setTimeout(calculate,0);});
root.querySelectorAll('[data-values]').forEach(btn=>btn.addEventListener('click',()=>{btn.dataset.values.split(',').forEach((v,k)=>{inputs[k].value=v;});calculate();}));
calculate();
})();
