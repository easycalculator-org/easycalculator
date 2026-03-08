---
layout: default
title: Simplify Fractions Calculator – Reduce Fractions to Simplest Form Online
permalink: /simplify-fractions-calculator
description: "Use the Simplify Fractions Calculator to quickly reduce fractions to their simplest form. Enter any fraction to get simplified results and step-by-step explanations instantly."
last_modified_at: 2026-03-08
---

<style>
.fraction{display:inline-flex;flex-direction:column;align-items:center;width:70px}
.fraction input{text-align:center;border:0;border-bottom:1px solid #ccc;font-weight:600}
.fraction-bar{width:100%;border-top:2px solid #000;margin:3px 0}
.result-box{background:#fff;padding:20px;border-radius:12px;box-shadow:0 4px 12px #0000000d;text-align:center}
.result-fraction{font-size:28px;font-weight:700}
</style>


<div class="card shadow border-0">
<div class="card-body p-4">

<h2 class="text-center fw-bold mb-4">Simplify Fractions Calculator</h2>


<!-- FRACTION INPUT -->

<div class="text-center mb-4">
<div class="d-inline-flex align-items-center">
<div class="fraction">
<input type="number" id="numerator" class="form-control" value="8" oninput="simplifyFraction()">
<div class="fraction-bar"></div>
<input type="number" id="denominator" class="form-control" value="12" oninput="simplifyFraction()">
</div>
</div>
</div>


<!-- RESULT -->

<div class="result-box mb-4">
<h5 class="fw-semibold">Result</h5>
<div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
<div class="result-fraction text-center">
<span id="resultNum">2</span>
<div class="fraction-bar"></div>
<span id="resultDen">3</span>
</div>

<div class="fs-3 fw-bold">=</div>
<div class="text-success fw-semibold fs-5">Decimal: <span id="decimalResult">0.666667</span></div>
</div>
</div>


<!-- STEPS -->
<div class="card border-0 bg-light">
<div class="card-body">
<h5 class="fw-semibold">Steps</h5>
<div id="steps"></div>
</div>

</div>

</div>
</div>


<script>

function gcd(a,b){
return b==0?a:gcd(b,a%b)
}

function simplifyFraction(){

let num=parseInt(document.getElementById("numerator").value)||0
let den=parseInt(document.getElementById("denominator").value)||1

let g=gcd(Math.abs(num),Math.abs(den))

let finalNum=num/g
let finalDen=den/g

document.getElementById("resultNum").innerText=finalNum
document.getElementById("resultDen").innerText=finalDen

document.getElementById("decimalResult").innerText=(finalNum/finalDen).toFixed(6)

let stepHTML=""

stepHTML+="Step 1: Find the greatest common divisor (GCD)<br>"
stepHTML+="GCD("+num+", "+den+") = "+g+"<br><br>"

stepHTML+="Step 2: Divide numerator and denominator by GCD<br>"
stepHTML+=num+" ÷ "+g+" = "+finalNum+"<br>"
stepHTML+=den+" ÷ "+g+" = "+finalDen+"<br><br>"

stepHTML+="Simplified Fraction: "+finalNum+"/"+finalDen

document.getElementById("steps").innerHTML=stepHTML

}

simplifyFraction()

</script>