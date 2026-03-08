
let maxFractions = 10;

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

function minus(){

let p=document.createElement("span");
p.className="operator";
p.innerText="−";
return p;

}

function addFraction(){

let row=document.getElementById("fractionRow");

let count=row.querySelectorAll(".fraction").length;

if(count>=maxFractions) return;

if(count>0) row.appendChild(minus());

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

function lcm(a,b){
return a*b/gcd(a,b);
}

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

let result=0;

numerators.forEach((n,i)=>{

let newNum=n*(commonDen/denominators[i]);

if(i==0){
result=newNum;
}else{
result-=newNum;
}

});

let g=gcd(Math.abs(result),commonDen);

let finalNum=result/g;
let finalDen=commonDen/g;

document.getElementById("resultNum").innerText=finalNum;
document.getElementById("resultDen").innerText=finalDen;

document.getElementById("decimalResult").innerText=(finalNum/finalDen).toFixed(5);

let stepHTML="";

stepHTML+="Step 1: Find common denominator<br>";
stepHTML+="LCM("+denominators.join(", ")+") = "+commonDen+"<br><br>";

stepHTML+="Step 2: Convert fractions<br>";

numerators.forEach((n,i)=>{

let factor=commonDen/denominators[i];
let newNum=n*factor;

stepHTML+=`${n}/${denominators[i]} = ${newNum}/${commonDen}<br>`;

});

stepHTML+="<br>Step 3: Subtract numerators<br>";

stepHTML+=`${result}/${commonDen}<br>`;

stepHTML+="<br>Step 4: Simplify<br>";

stepHTML+=`${finalNum}/${finalDen}`;

document.getElementById("steps").innerHTML=stepHTML;

}

addFraction();
addFraction();

calculate();


window.MathJax = {
tex: {
inlineMath: [['$', '$'], ['\\(', '\\)']],
displayMath: [['$$','$$'], ['\\[','\\]']]
}
};