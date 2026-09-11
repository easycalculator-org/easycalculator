---
layout: default
title: "Percentage Change Calculator"
permalink: /percentage-change-calculator
description: "Use our free Percentage Change Calculator to calculate the percentage change between two values. Get instant results with the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---


<div class="row justify-content-center">
<div class="col-12 col-md-9"><div class="card border-0 shadow-sm rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h1 class="fw-bold mb-2">Percentage Change Calculator </h1><p class="text-muted mb-0">Calculate the percentage change between an original value and a new value. </p></div><div class="row g-4 justify-content-center"><div class="col-md-6"><label for="originalValue" class="form-label fw-semibold">Original Value </label><input type="number" id="originalValue" class="form-control form-control-lg" placeholder="e.g. 100" step="any" inputmode="decimal" ></div><div class="col-md-6"><label for="newValue" class="form-label fw-semibold">New Value </label><input type="number" id="newValue" class="form-control form-control-lg" placeholder="e.g. 125" step="any" inputmode="decimal" ></div><div class="col-12 text-center"><button type="button" class="btn btn-primary btn-lg px-5 rounded-3" onclick="calculatePercentageChange()" >Calculate Percentage Change </button><button type="button" class="btn btn-light btn-lg px-4 rounded-3 ms-2" onclick="resetPercentageChange()" >Reset </button></div></div><div id="percentageChangeError" class="alert alert-danger mt-4 d-none" role="alert" ></div><div id="percentageChangeResult" class="mt-4 d-none"><div class="bg-light rounded-4 p-4"><div class="text-center mb-4"><div class="text-muted small mb-1">Percentage Change </div><div id="percentageChangeValue" class="display-5 fw-bold" >0% </div><div id="percentageChangeType" class="fw-semibold mt-2" ></div></div><div class="row g-3"><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">Original Value </div><div id="resultOriginal" class="fs-4 fw-bold mt-1" >0 </div></div></div><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">New Value </div><div id="resultNew" class="fs-4 fw-bold mt-1" >0 </div></div></div><div class="col-md-4"><div class="bg-white rounded-3 p-3 h-100 text-center"><div class="text-muted small">Change </div><div id="resultDifference" class="fs-4 fw-bold mt-1" >0 </div></div></div></div></div><div class="mt-4"><h5 class="fw-bold mb-3">Percentage Change Formula </h5><div class="bg-light rounded-3 p-3 text-center"><div class="fw-semibold">Percentage Change=</div><div class="mt-2"><span class="text-primary fw-bold">|New Value − Original Value| </span><span class="mx-1">÷</span><span class="text-primary fw-bold">|Original Value| </span><span class="mx-1">×</span><span class="text-primary fw-bold">100 </span></div></div></div><div class="mt-4"><h5 class="fw-bold mb-3">Calculation </h5><div id="percentageChangeCalculation" class="bg-light rounded-3 p-3" ></div></div></div></div></div></div>
</div>


<script src="{{ '/assets/js/percentage/percentage-change-calc.js' | relative_url }}"></script>


