
let maxFractions = 10;

/* CREATE FRACTION INPUT */

function createFraction(num=1,den=3){

let wrapper=document.createElement("div");
wrapper.className="d-inline-flex align-items-center";

let fraction=document.createElement("div");
fraction.className="fraction";

fraction.innerHTML=`

<input type="number" class="numerator form-control" value="${num}" oninput="calculate()">

<div class="fraction-bar"></div>

<input type="number" class="denominator form-control" value="${den}" oninput="calculate()">

`;

wrapper.appendChild(fraction);

return wrapper;

}

/* PLUS SIGN */

function plus(){

let p=document.createElement("span");
p.className="operator";
p.innerText="+";
return p;

}

/* ADD FRACTION */

function addFraction(){

let row=document.getElementById("fractionRow");

let count=row.querySelectorAll(".fraction").length;

if(count>=maxFractions) return;

if(count>0) row.appendChild(plus());

row.appendChild(createFraction());

calculate();

}

/* REMOVE FRACTION */

function removeFraction(){

let row=document.getElementById("fractionRow");

let fractions=row.querySelectorAll(".fraction");

if(fractions.length<=2) return;

row.removeChild(row.lastChild);
row.removeChild(row.lastChild);

calculate();

}

/* MATH FUNCTIONS */

function gcd(a,b){
return b==0?a:gcd(b,a%b);
}

function lcm(a,b){
return a*b/gcd(a,b);
}

/* DRAW PIE CHART */

function drawChart(num,den,color){

if(den>24){
return `<div class="small text-muted">${num}/${den}</div>`;
}

let svg='<div class="chart"><svg viewBox="0 0 100 100">';

let angle=360/den;

for(let i=0;i<den;i++){

let start=angle*i;
let end=angle*(i+1);

let x1=50+45*Math.cos(Math.PI*start/180);
let y1=50+45*Math.sin(Math.PI*start/180);

let x2=50+45*Math.cos(Math.PI*end/180);
let y2=50+45*Math.sin(Math.PI*end/180);

let fill=i<num?color:"#ddd";

svg+=`<path d="M50 50 L${x1} ${y1} A45 45 0 0 1 ${x2} ${y2} Z" fill="${fill}" class="slice"/>`;

}

svg+='</svg></div>';

return svg;

}

/* CALCULATE FRACTIONS */

function calculate(){

let nums=document.querySelectorAll(".numerator");
let dens=document.querySelectorAll(".denominator");

let numerators=[];
let denominators=[];

nums.forEach((n,i)=>{
numerators.push(parseInt(n.value)||0);
denominators.push(parseInt(dens[i].value)||1);
});

let commonDen=denominators.reduce((a,b)=>lcm(a,b));

let sum=0;

let converted=[];

numerators.forEach((n,i)=>{

let factor=commonDen/denominators[i];
let newNum=n*factor;

converted.push(newNum);

sum+=newNum;

});

let g=gcd(sum,commonDen);

let finalNum=sum/g;
let finalDen=commonDen/g;

/* RESULT */

document.getElementById("resultNum").innerText=finalNum;
document.getElementById("resultDen").innerText=finalDen;

document.getElementById("decimalResult").innerText=(finalNum/finalDen).toFixed(5);

/* STEPS */

let stepHTML="";

stepHTML+="Step 1: Find common denominator<br>";
stepHTML+="LCM("+denominators.join(", ")+") = "+commonDen+"<br><br>";

stepHTML+="Step 2: Convert fractions<br>";

numerators.forEach((n,i)=>{
stepHTML+=`${n}/${denominators[i]} = ${converted[i]}/${commonDen}<br>`;
});

stepHTML+="<br>Step 3: Add numerators<br>";
stepHTML+=`${sum}/${commonDen}<br>`;

stepHTML+="<br>Step 4: Simplify<br>";
stepHTML+=`${finalNum}/${finalDen}`;

document.getElementById("steps").innerHTML=stepHTML;

/* VISUALIZATION */

let visual="";

/* ORIGINAL */

visual+=`<div class="chart-row">`;

numerators.forEach((n,i)=>{
visual+=drawChart(n,denominators[i],"#4a6cf7");
if(i<numerators.length-1) visual+=`<span class="operator">+</span>`;
});

visual+=`</div>`;

/* ARROW */

visual+=`<div class="arrow">↓</div>`;

/* CONVERTED */

visual+=`<div class="chart-row">`;

converted.forEach((n,i)=>{
visual+=drawChart(n,commonDen,"#45c06a");
if(i<converted.length-1) visual+=`<span class="operator">+</span>`;
});

visual+=`</div>`;

/* ARROW */

visual+=`<div class="arrow">↓</div>`;

/* RESULT */

visual+=`<div class="chart-row">`;

visual+=drawChart(finalNum,finalDen,"#ff7b00");

visual+=`</div>`;

document.getElementById("visualization").innerHTML=visual;

}

/* INIT */

addFraction();
addFraction();

calculate();


window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$','$$'], ['\\[','\\]']]
  },
  svg: {
    fontCache: 'global'
  }
};