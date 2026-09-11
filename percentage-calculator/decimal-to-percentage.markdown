---
layout: default
title: "Decimal to Percentage Calculator"
permalink: /decimal-to-percentage
description: "Convert decimals to percentages quickly and accurately with our free Decimal to Percentage Calculator."
last_modified_at: 2026-09-10
---
<!-- Decimal to Percentage Calculator -->
<div class="my-4">
<div class="row justify-content-center">
<div class="col-lg-8"><div class="card shadow border-0 rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h2 class="h4 fw-bold mb-2">Decimal to Percentage Calculator</h2><p class="text-muted mb-0">Convert a decimal number into a percentage quickly and accurately. </p></div><div class="mb-4"><label for="decimalValue" class="form-label fw-semibold">Enter Decimal </label><input type="text" id="decimalValue" class="form-control form-control-lg" placeholder="Example: 0.75" inputmode="decimal" autocomplete="off" aria-describedby="decimalHelp"><div id="decimalHelp" class="form-text">Enter any decimal number, such as 0.75 or 1.25. </div></div><div class="mb-4"><span class="small text-muted me-2">Try an example: </span><button type="button" class="btn btn-sm btn-outline-secondary rounded-pill me-1 mb-1 example-btn" data-value="0.75">0.75 </button><button type="button" class="btn btn-sm btn-outline-secondary rounded-pill me-1 mb-1 example-btn" data-value="0.5">0.5 </button><button type="button" class="btn btn-sm btn-outline-secondary rounded-pill mb-1 example-btn" data-value="1.25">1.25 </button></div><div class="d-flex gap-2 justify-content-center mb-4"><button type="button" id="calculateBtn" class="btn btn-primary btn-lg rounded-pill px-4">Calculate </button><button type="button" id="resetBtn" class="btn btn-outline-secondary btn-lg rounded-pill px-4">Reset </button></div><div id="result" class="alert alert-success text-center rounded-4 mb-0" style="display:none;" role="status" aria-live="polite"><div class="small text-muted mb-1">Percentage </div><div id="percentageResult" class="display-6 fw-bold">0% </div><div id="calculationDetails" class="small text-muted mt-2"></div></div><div id="error" class="alert alert-danger rounded-3 mt-3 mb-0" style="display:none;" role="alert"></div></div></div></div></div></div>

<script src="{{ '/assets/js/percentage/decimal-to-percent-calc.js' | relative_url }}"></script>


