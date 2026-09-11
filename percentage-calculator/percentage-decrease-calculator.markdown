---
layout: default
title: "Percentage Decrease Calculator"
permalink: /percentage-decrease-calculator
description: "Use our free Percentage Decrease Calculator to calculate the percentage decrease between an original and new value. Get instant results with the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---

<div class="row justify-content-center">
<div class="col-12 col-md-9">
<div class="card border-0 shadow-sm rounded-4">
<div class="card-body p-4 p-md-5">
<div class="text-center mb-4">
<h1 class="fw-bold mb-2">Percentage Decrease Calculator </h1>
<p class="text-muted mb-0">Calculate the percentage decrease from an original value to a new value. </p>
</div><div class="row g-4"><div class="col-md-6"><label for="decreaseOriginal" class="form-label fw-semibold">Original Value </label><input type="number" id="decreaseOriginal" class="form-control form-control-lg" placeholder="e.g. 100" step="any" inputmode="decimal" ></div><div class="col-md-6"><label for="decreaseNew" class="form-label fw-semibold">New Value </label><input type="number" id="decreaseNew" class="form-control form-control-lg" placeholder="e.g. 75" step="any" inputmode="decimal" ></div><div class="col-12 text-center"><button type="button" class="btn btn-primary btn-lg px-5 rounded-3" onclick="calculatePercentageDecrease()" >Calculate Percentage Decrease </button><button type="button" class="btn btn-light btn-lg px-4 rounded-3 ms-2" onclick="resetPercentageDecrease()" >Reset </button></div></div><div id="decreaseError" class="alert alert-danger mt-4 d-none" role="alert" ></div><div id="decreaseResult" class="mt-4 d-none"><div class="bg-light rounded-4 p-4"><div class="text-center mb-4"><div class="text-muted small mb-1">Percentage Decrease </div><div id="decreasePercentage" class="display-5 fw-bold text-danger" >0% </div><div id="decreaseResultType" class="fw-semibold mt-2 text-danger" >Percentage Decrease </div></div><div class="row g-3"><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">Original Value </div><div id="decreaseResultOriginal" class="fs-4 fw-bold mt-1" >0 </div></div></div><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">New Value </div><div id="decreaseResultNew" class="fs-4 fw-bold mt-1" >0 </div></div></div><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">Change </div><div id="decreaseResultDifference" class="fs-4 fw-bold mt-1 text-danger" >0 </div></div></div></div></div><div class="mt-4"><h5 class="fw-bold mb-3">Percentage Decrease Formula </h5><div class="bg-light rounded-3 p-3 text-center"><div class="fw-semibold">Percentage Decrease=</div><div class="mt-2"><span class="text-primary fw-bold">(Original Value − New Value) </span><span class="mx-1">÷</span><span class="text-primary fw-bold">Original Value </span><span class="mx-1">×</span><span class="text-primary fw-bold">100 </span></div></div></div><div class="mt-4"><h5 class="fw-bold mb-3">Calculation </h5><div id="decreaseCalculation" class="bg-light rounded-3 p-3" ></div></div></div></div></div></div></div>



<script src="{{ '/assets/js/percentage/percentage-decrease-calc.js' | relative_url }}"></script>