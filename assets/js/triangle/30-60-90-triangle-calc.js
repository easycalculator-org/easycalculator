
const shortLeg=document.getElementById("shortLeg");
const longLeg=document.getElementById("longLeg");
const hypotenuse=document.getElementById("hypotenuse");

const ROOT3=Math.sqrt(3);

function round(n){return Number(n.toFixed(4));}

function updateTriangle(a,b,c){

let svgW=340;
let svgH=260;
let pad=60;

let scale=Math.min((svgW-pad*2)/b,(svgH-pad*2)/a);

let Ax=pad;
let Ay=svgH-pad;

let Bx=pad+b*scale;
let By=svgH-pad;

let Cx=pad;
let Cy=svgH-pad-a*scale;

triangle.setAttribute("points",`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`);

Apoint.setAttribute("cx",Ax);
Apoint.setAttribute("cy",Ay);

Bpoint.setAttribute("cx",Bx);
Bpoint.setAttribute("cy",By);

Cpoint.setAttribute("cx",Cx);
Cpoint.setAttribute("cy",Cy);

Atext.setAttribute("x",Ax-12);
Atext.setAttribute("y",Ay+16);

Btext.setAttribute("x",Bx+6);
Btext.setAttribute("y",By+16);

Ctext.setAttribute("x",Cx-12);
Ctext.setAttribute("y",Cy-6);

sideA.setAttribute("x",Ax-55);
sideA.setAttribute("y",(Ay+Cy)/2);

sideB.setAttribute("x",(Bx+Cx)/2+10);
sideB.setAttribute("y",(By+Cy)/2);

sideC.setAttribute("x",(Ax+Bx)/2);
sideC.setAttribute("y",Ay+18);

sideA.textContent="a="+round(a);
sideB.textContent="b="+round(b);
sideC.textContent="c="+round(c);

angleA.setAttribute("x",Ax+8);
angleA.setAttribute("y",Ay-6);

angleB.setAttribute("x",Bx-40);
angleB.setAttribute("y",By-6);

angleC.setAttribute("x",Cx+8);
angleC.setAttribute("y",Cy+20);

}

function updateExtras(a,b,c){

let area=0.5*a*b;
let perimeter=a+b+c;

areaValue.textContent=round(area);
perimeterValue.textContent=round(perimeter);

updateTriangle(a,b,c);

}

function calcFromA(a){

let b=a*ROOT3;
let c=2*a;

shortLeg.value=round(a);
longLeg.value=round(b);
hypotenuse.value=round(c);

updateExtras(a,b,c);

}

function calcFromB(b){

let a=b/ROOT3;
let c=2*a;

shortLeg.value=round(a);
longLeg.value=round(b);
hypotenuse.value=round(c);

updateExtras(a,b,c);

}

function calcFromC(c){

let a=c/2;
let b=a*ROOT3;

shortLeg.value=round(a);
longLeg.value=round(b);
hypotenuse.value=round(c);

updateExtras(a,b,c);

}

shortLeg.addEventListener("input",()=>{
let a=parseFloat(shortLeg.value);
if(a>0) calcFromA(a);
});

longLeg.addEventListener("input",()=>{
let b=parseFloat(longLeg.value);
if(b>0) calcFromB(b);
});

hypotenuse.addEventListener("input",()=>{
let c=parseFloat(hypotenuse.value);
if(c>0) calcFromC(c);
});


