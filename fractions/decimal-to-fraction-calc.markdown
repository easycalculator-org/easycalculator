---
layout: default
title: Decimal to Fraction Calculator – Convert Decimal to Fraction Online
permalink: /decimal-to-fraction-calculator
description: "Use the Decimal to Fraction Calculator to quickly convert decimal numbers into simplified fractions. Get accurate results with step-by-step explanations instantly."
last_modified_at: 2026-03-08
---

<style>
.result-box{background:#fff;padding:20px;border-radius:12px;box-shadow:0 4px 12px #0000000d;text-align:center}
.result-fraction{font-size:28px;font-weight:700}
.fraction-bar{width:100%;border-top:2px solid #000;margin:3px 0}
</style>


<div class="card shadow border-0">
<div class="card-body p-4">

<h2 class="text-center fw-bold mb-4">Decimal to Fraction Calculator</h2>


<!-- INPUT -->

<div class="row justify-content-center mb-4">
<div class="col-md-4">
<input type="number" step="any" id="decimalInput" class="form-control text-center" placeholder="Enter Decimal (e.g. 0.75)" oninput="convertDecimal()">
</div>
</div>


<!-- RESULT -->

<div class="result-box mb-4">
<h5 class="fw-semibold">Result</h5>
<div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
<div class="result-fraction text-center">
<span id="resultNum">0</span>
<div class="fraction-bar"></div>
<span id="resultDen">1</span>
</div>

<div class="fs-3 fw-bold">=</div>
<div class="text-success fw-semibold fs-5">Decimal: <span id="decimalResult">0</span></div>
</div>
</div>


<!-- STEPS -->

<div class="card border-0 bg-light">
<div class="card-body"><h5 class="fw-semibold">Steps</h5><div id="steps"></div>
</div>
</div>
</div>
</div>


<script src="/assets/js/fractions/decimal-to-fraction-calc.js"></script>

