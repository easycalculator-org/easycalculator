
function convertFraction(){

let num=parseFloat(document.getElementById("numerator").value)||0
let den=parseFloat(document.getElementById("denominator").value)||1

let decimal=num/den

document.getElementById("resultNum").innerText=num
document.getElementById("resultDen").innerText=den
document.getElementById("decimalResult").innerText=decimal.toFixed(6)

let stepHTML=""

stepHTML+="Step 1: Write fraction<br>"
stepHTML+=num+"/"+den+"<br><br>"

stepHTML+="Step 2: Divide numerator by denominator<br>"
stepHTML+=num+" ÷ "+den+" = "+decimal.toFixed(6)

document.getElementById("steps").innerHTML=stepHTML

}

convertFraction()