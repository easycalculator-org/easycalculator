---
layout: default
title: Fraction to Decimal Calculator – Convert Fractions to Decimals Online
permalink: /fraction-to-decimal-calculator
description: "Use the Fraction to Decimal Calculator to quickly convert fractions into decimal numbers. Get accurate results with step-by-step explanations instantly."
last_modified_at: 2026-03-08
---

<style>

.fraction{
display:inline-flex;
flex-direction:column;
align-items:center;
width:70px
}

.fraction input{
text-align:center;
border:0;
border-bottom:1px solid #ccc;
font-weight:600
}

.fraction-bar{
width:100%;
border-top:2px solid #000;
margin:3px 0
}

.result-box{
background:#fff;
padding:20px;
border-radius:12px;
box-shadow:0 4px 12px rgba(0,0,0,0.05);
text-align:center
}

.result-fraction{
font-size:28px;
font-weight:bold
}

</style>


<div class="card shadow border-0">
<div class="card-body p-4">

<h2 class="text-center fw-bold mb-4">
Fraction to Decimal Calculator
</h2>


<!-- FRACTION INPUT -->

<div class="text-center mb-4">
<div class="d-inline-flex align-items-center">
<div class="fraction">
<input type="number" id="numerator" class="form-control" value="1" oninput="convertFraction()">
<div class="fraction-bar"></div>
<input type="number" id="denominator" class="form-control" value="2" oninput="convertFraction()">
</div>

</div>

</div>


<!-- RESULT -->

<div class="result-box mb-4">
<h5 class="fw-semibold">Result</h5>
<div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
<div class="result-fraction text-center"><span id="resultNum">1</span>
<div class="fraction-bar"></div>
<span id="resultDen">2</span>

</div>

<div class="fs-3 fw-bold">=</div>

<div class="text-success fw-semibold fs-5">Decimal: <span id="decimalResult">0.5</span></div>

</div>

</div>


<div class="card border-0 bg-light">
<div class="card-body">
<h5 class="fw-semibold">Steps</h5>
<div id="steps"></div>
</div>
</div>
</div>
</div>

<script src="/assets/js/fractions/fraction-to-decimal-calc.js"></script>

