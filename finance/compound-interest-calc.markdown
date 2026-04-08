---
layout: default
title: Free Compound Interest Calculator – Daily, Monthly, Yearly
permalink: /compound-interest-calculator
description: "Plan your future. Use our free compound interest calculator to estimate returns on investments, with principal, rate, and time options"
last_modified_at: 2026-03-11
---

<style>
.card { border-radius:16px; }
.result-card { background:#f8f9fa; border-radius:12px; padding:12px; }
.small-text { font-size:0.85rem; color:#6c757d; }
canvas { max-height:180px; }
</style>

  
<div class="row g-4">

<!-- INPUT -->
<div class="col-lg-5">
<div class="card shadow border-0 p-4">

<h4 class="text-primary mb-3">Compound Interest</h4>

<input type="number" id="principal" class="form-control mb-2" placeholder="Principal" oninput="convertPrincipal()">
<div id="principalWords" class="small-text mb-2"></div>

<input type="number" id="rate" class="form-control mb-2" placeholder="Interest %">
<input type="number" id="time" class="form-control mb-2" placeholder="Years">

<select id="compound" class="form-select mb-2">
<option value="1">Yearly</option>
<option value="2">Half-Yearly</option>
<option value="4">Quarterly</option>
<option value="12">Monthly</option>
<option value="365">Daily</option>
</select>

<input type="number" id="customCompound" class="form-control mb-3" placeholder="Custom (optional)">

<button class="btn btn-primary w-100" onclick="calculateCI()">Calculate</button>

<button class="btn btn-outline-success w-100 mt-2" onclick="downloadPDF()">📥 Download PDF</button>

</div>
</div>

<!-- RESULT -->
<div class="col-lg-7">
<div class="card shadow border-0 p-4">

<div class="row g-3 mb-3">
<div class="col-md-6">
<div class="result-card">
<strong>Total Amount</strong>
<div id="totalAmount">—</div>
<div id="totalWords" class="small-text"></div>
</div>
</div>

<div class="col-md-6">
<div class="result-card">
<strong>Interest</strong>
<div id="interestAmount">—</div>
</div>
</div>
</div>

<canvas id="chart"></canvas>

<div class="mt-4">
<h6>Year-wise Growth</h6>
<table class="table table-sm table-bordered">
<thead>
<tr>
<th>Year</th>
<th>Total Amount</th>
</tr>
</thead>
<tbody id="yearTable"></tbody>
</table>
</div>

</div>
</div>

</div>


<script src="{{ '/assets/js/finance/compound-interest-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>