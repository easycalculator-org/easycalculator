---
layout: default
title: Dividing Fractions Calculator – Divide & Simplify Fractions Online
permalink: /dividing-fractions-calculator
description: "Use the Dividing Fractions Calculator to quickly divide two or more fractions. Get simplified fraction results, decimal values, and step-by-step calculations instantly."
last_modified_at: 2026-03-08
---

<style>
.fraction{display:inline-flex;flex-direction:column;align-items:center;width:70px}
.fraction input{text-align:center;border:0;border-bottom:1px solid #ccc;font-weight:600}
.fraction-bar{width:100%;border-top:2px solid #000;margin:3px 0}
.operator{font-size:26px;font-weight:700;color:#0d6efd;margin:0 10px}
.result-box{background:#fff;padding:20px;border-radius:12px;box-shadow:0 4px 12px #0000000d;text-align:center}
.result-fraction{font-size:28px;font-weight:700}
</style>


<div class="card shadow border-0">
<div class="card-body p-4">

<h2 class="text-center fw-bold mb-4">Dividing Fractions Calculator</h2>


<!-- FRACTIONS -->

<div id="fractionRow" class="text-center mb-4"></div>
<div class="text-center mb-4">
<button class="btn btn-outline-primary me-2" onclick="addFraction()">Add Fraction</button>
<button class="btn btn-outline-secondary" onclick="removeFraction()">Remove</button>
</div>


<!-- RESULT -->

<div class="result-box mb-4">
<h5 class="fw-semibold">Result</h5>
<div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
<div class="result-fraction text-center"><span id="resultNum">0</span>
<div class="fraction-bar"></div>
<span id="resultDen">1</span>
</div>

<div class="fs-3 fw-bold">=</div>
<div class="text-success fw-semibold fs-5">Decimal: <span id="decimalResult">0</span></div>
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

<script src="/assets/js/fractions/dividing-fractions-calc.js"></script>

