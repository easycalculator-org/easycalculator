
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


function divideSign(){

let p=document.createElement("span");
p.className="operator";
p.innerText="÷";
return p;

}


function addFraction(){

let row=document.getElementById("fractionRow");

let count=row.querySelectorAll(".fraction").length;

if(count>=maxFractions) return;

if(count>0) row.appendChild(divideSign());

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
return b==0?a:gcd(b,a%b)
}


function calculate(){

let nums=document.querySelectorAll(".numerator");
let dens=document.querySelectorAll(".denominator");

let numerator=parseInt(nums[0].value)||0
let denominator=parseInt(dens[0].value)||1

let numList=[]
let denList=[]

nums.forEach((n,i)=>{

let num=parseInt(n.value)||0
let den=parseInt(dens[i].value)||1

numList.push(num)
denList.push(den)

if(i>0){

numerator*=den
denominator*=num

}

})

let g=gcd(Math.abs(numerator),denominator)

let finalNum=numerator/g
let finalDen=denominator/g


document.getElementById("resultNum").innerText=finalNum
document.getElementById("resultDen").innerText=finalDen
document.getElementById("decimalResult").innerText=(finalNum/finalDen).toFixed(5)


let stepHTML=""

stepHTML+="Step 1: Keep first fraction<br>"
stepHTML+=numList[0]+"/"+denList[0]+"<br><br>"

stepHTML+="Step 2: Flip the next fraction and multiply<br><br>"

stepHTML+="Step 3: Multiply numerators and denominators<br>"
stepHTML+=finalNum+"/"+finalDen

document.getElementById("steps").innerHTML=stepHTML

}

addFraction()
addFraction()
calculate()
