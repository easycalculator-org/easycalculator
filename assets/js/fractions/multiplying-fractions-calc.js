
let maxFractions = 10;

function createFraction(num=1,den=2){

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

function multiplySign(){

let p=document.createElement("span");
p.className="operator";
p.innerText="×";
return p;

}

function addFraction(){

let row=document.getElementById("fractionRow");

let count=row.querySelectorAll(".fraction").length;

if(count>=maxFractions) return;

if(count>0) row.appendChild(multiplySign());

row.appendChild(createFraction());

calculate();

}

function removeFraction(){

let row=document.getElementById("fractionRow");

let fractions=row.querySelectorAll(".fraction");

if(fractions.length<=2) return;

row.removeChild(row.lastChild);
row.removeChild(row.lastChild);

calculate();

}

function gcd(a,b){
return b==0?a:gcd(b,a%b);
}

function calculate(){

let nums=document.querySelectorAll(".numerator");
let dens=document.querySelectorAll(".denominator");

let numerator=1;
let denominator=1;

let numList=[];
let denList=[];

nums.forEach((n,i)=>{

let num=parseInt(n.value)||0;
let den=parseInt(dens[i].value)||1;

numerator*=num;
denominator*=den;

numList.push(num);
denList.push(den);

});

let g=gcd(Math.abs(numerator),denominator);

let finalNum=numerator/g;
let finalDen=denominator/g;

document.getElementById("resultNum").innerText=finalNum;
document.getElementById("resultDen").innerText=finalDen;

document.getElementById("decimalResult").innerText=(finalNum/finalDen).toFixed(5);


let stepHTML="";

stepHTML+="Step 1: Multiply numerators<br>";
stepHTML+=numList.join(" × ")+" = "+numerator+"<br><br>";

stepHTML+="Step 2: Multiply denominators<br>";
stepHTML+=denList.join(" × ")+" = "+denominator+"<br><br>";

stepHTML+="Step 3: Simplify fraction<br>";
stepHTML+=finalNum+"/"+finalDen;

document.getElementById("steps").innerHTML=stepHTML;

}

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