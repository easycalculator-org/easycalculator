---
layout: default
title: "Average Percentage Calculator"
permalink: /average-percentage-calculator
description: "Calculate the average of multiple percentages quickly and accurately with our free Average Percentage Calculator."
last_modified_at: 2026-09-10
---
<div class="my-4">
<div class="row justify-content-center">
<div class="col-lg-8"><div class="card shadow border-0 rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h2 class="h4 fw-bold mb-2">Average Percentage Calculator</h2><p class="text-muted mb-0">Enter two or more percentages to find their average quickly. </p></div><div class="mb-4"><label for="percentages" class="form-label fw-semibold">Enter percentages </label><input type="text" id="percentages" class="form-control form-control-lg" placeholder="Example: 80, 75, 90, 85" inputmode="decimal" autocomplete="off" ><div class="form-text">Separate each percentage with a comma. </div></div><div class="mb-4"><span class="small text-muted me-2">Try an example:</span><button type="button" class="btn btn-sm btn-outline-secondary rounded-pill me-1 mb-1" onclick="setExample('80, 75, 90, 85')">80, 75, 90, 85 </button><button type="button" class="btn btn-sm btn-outline-secondary rounded-pill mb-1" onclick="setExample('60, 70, 80')">60, 70, 80 </button></div><div class="d-flex gap-2 justify-content-center mb-4"><button type="button" id="calculateBtn" class="btn btn-primary btn-lg rounded-pill px-4">Calculate </button><button type="button" id="resetBtn" class="btn btn-outline-secondary btn-lg rounded-pill px-4">Reset </button></div><div id="result" class="alert alert-success text-center rounded-4 mb-0" style="display: none;" role="status" aria-live="polite"><div class="small text-muted mb-1">Average Percentage </div><div id="averageResult" class="display-6 fw-bold">0% </div><div id="calculationDetails" class="small text-muted mt-2"></div></div><div id="error" class="alert alert-danger rounded-3 mt-3 mb-0" style="display: none;" role="alert"></div></div></div></div>
</div>
</div>

<script src="{{ '/assets/js/percentage/average-percentage-calc.js' | relative_url }}"></script>

