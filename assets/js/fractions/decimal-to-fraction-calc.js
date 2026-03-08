
function gcd(a,b){
return b==0?a:gcd(b,a%b)
}

function convertDecimal(){

let decimal=parseFloat(document.getElementById("decimalInput").value)

if(isNaN(decimal)) return

let decimalStr=decimal.toString()

let decimals=decimalStr.split(".")[1]?.length || 0

let denominator=Math.pow(10,decimals)

let numerator=Math.round(decimal*denominator)

let g=gcd(numerator,denominator)

let finalNum=numerator/g
let finalDen=denominator/g

document.getElementById("resultNum").innerText=finalNum
document.getElementById("resultDen").innerText=finalDen
document.getElementById("decimalResult").innerText=decimal


let stepHTML=""

stepHTML+="Step 1: Write decimal as fraction<br>"
stepHTML+=decimal+" = "+numerator+"/"+denominator+"<br><br>"

stepHTML+="Step 2: Simplify fraction<br>"
stepHTML+=finalNum+"/"+finalDen

document.getElementById("steps").innerHTML=stepHTML

}
