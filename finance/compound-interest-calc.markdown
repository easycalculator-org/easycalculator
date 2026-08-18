---
layout: default
title: Free Compound Interest Calculator – Daily, Monthly, Yearly
permalink: /compound-interest-calculator
description: "Plan your future. Use our free compound interest calculator to estimate returns on investments, with principal, rate, and time options"
last_modified_at: 2026-05-28
---

<style>
.ci-calculator{--ci-primary:#2563eb;--ci-primary-dark:#1d4ed8;--ci-bg:#f8fafc;--ci-border:#e2e8f0;--ci-text:#1e293b;--ci-muted:#64748b;--ci-success:#059669}.ci-calculator .ci-card{border:1px solid var(--ci-border);border-radius:16px;background:#fff;box-shadow:0 6px 24px #0f172a0f}.ci-calculator .ci-header{background:linear-gradient(135deg,#1e40af,#2563eb);color:#fff;padding:20px;border-radius:16px 16px 0 0}.ci-calculator .form-label{font-size:.86rem;font-weight:600;color:var(--ci-text);margin-bottom:6px}.ci-calculator .form-control,.ci-calculator .form-select{border:1px solid var(--ci-border);border-radius:9px;min-height:44px}.ci-calculator .form-control:focus,.ci-calculator .form-select:focus{border-color:var(--ci-primary);box-shadow:0 0 0 .2rem #2563eb1a}.ci-calculator .result-box{background:var(--ci-bg);border:1px solid var(--ci-border);border-radius:12px;padding:14px;height:100%}.ci-calculator .result-label{color:var(--ci-muted);font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.3px}.ci-calculator .result-value{font-size:1.35rem;font-weight:700;color:var(--ci-text);margin-top:4px;word-break:break-word}.ci-calculator .result-value.success{color:var(--ci-success)}.ci-calculator .small-text{font-size:.8rem;color:var(--ci-muted)}.ci-calculator .section-title{font-size:1rem;font-weight:700;color:var(--ci-text);margin-bottom:15px}.ci-calculator .btn{border-radius:9px;min-height:44px;font-weight:600}.ci-calculator .table{font-size:.88rem}.ci-calculator .table thead th{background:#f1f5f9;color:#334155;white-space:nowrap}.ci-calculator .table td,.ci-calculator .table th{vertical-align:middle}.ci-calculator .summary-strip{background:#eff6ff;border:1px solid #dbeafe;border-radius:12px;padding:13px 15px}.ci-calculator .chart-container{position:relative;height:280px}.ci-calculator .advanced-options{background:#f8fafc;border:1px solid var(--ci-border);border-radius:12px;padding:15px}@media(max-width:767px){.ci-calculator .result-value{font-size:1.1rem}.ci-calculator .chart-container{height:230px}}@media print{.ci-calculator .no-print{display:none!important}.ci-calculator .ci-card{box-shadow:none;border:1px solid #ddd}}
</style>


<div class="ci-calculator">
<div class="row g-4">
<!-- ================= INPUT ================= -->
<div class="col-lg-5">

<div class="ci-card">

<div class="ci-header">
    <h4 class="mb-1">Compound Interest Calculator</h4>
    <div class="small opacity-75">
        Calculate compound interest with regular contributions and detailed yearly growth.
    </div>
</div>

<div class="p-4">

<div class="section-title">Investment Details</div>

<!-- Principal -->
<div class="mb-3">
    <label class="form-label">Initial Principal Amount</label>
    <input type="number"
           id="principal"
           class="form-control"
           value="100000"
           min="0"
           step="0.01"
           oninput="convertPrincipal(); calculateCI();">

    <div id="principalWords" class="small-text mt-1"></div>
</div>

<!-- Rate -->
<div class="mb-3">
    <label class="form-label">Annual Interest Rate (%)</label>
    <input type="number"
           id="rate"
           class="form-control"
           value="8"
           min="0"
           step="0.01"
           oninput="calculateCI();">
</div>

<!-- Time -->
<div class="mb-3">
    <label class="form-label">Investment Period (Years)</label>
    <input type="number"
           id="time"
           class="form-control"
           value="10"
           min="0"
           step="0.1"
           oninput="calculateCI();">
</div>

<!-- Compound -->
<div class="mb-3">
    <label class="form-label">Compounding Frequency</label>
    <select id="compound"
            class="form-select"
            onchange="calculateCI();">
        <option value="1">Yearly</option>
        <option value="2">Half-Yearly</option>
        <option value="4">Quarterly</option>
        <option value="12" selected>Monthly</option>
        <option value="365">Daily</option>
        <option value="custom">Custom</option>
    </select>
</div>

<!-- Custom -->
<div class="mb-3 d-none" id="customCompoundBox">
    <label class="form-label">
        Custom Compounding Frequency
    </label>
    <input type="number"
           id="customCompound"
           class="form-control"
           value="6"
           min="1"
           step="1"
           oninput="calculateCI();">
    <div class="small-text mt-1">
        Number of times interest is compounded per year.
    </div>

</div>


<!-- Advanced -->
<div class="advanced-options mt-3">
<div class="section-title mb-3">
    Regular Contribution
</div>

<div class="row g-3">

<div class="col-7">

<label class="form-label">
    Contribution Amount
</label>

<input type="number"
       id="contribution"
       class="form-control"
       value="0"
       min="0"
       step="0.01"
       oninput="calculateCI();">

</div>

<div class="col-5">

<label class="form-label">
    Frequency
</label>

<select id="contributionFrequency"
        class="form-select"
        onchange="calculateCI();">

<option value="monthly">Monthly</option>
<option value="yearly">Yearly</option>
</select>

</div>

<div class="col-12">

<label class="form-label">
    Contribution Timing
</label>

<select id="contributionTiming"
        class="form-select"
        onchange="calculateCI();">

<option value="end">End of Period</option>
<option value="beginning">Beginning of Period</option>
</select>

</div>

</div>

</div>


<!-- Buttons -->
<div class="d-grid gap-2 mt-4 no-print">
<button class="btn btn-primary"
        onclick="calculateCI()">

<i class="fas fa-calculator me-1"></i>
Calculate
</button>

<button class="btn btn-outline-secondary"
        onclick="resetCI()">

<i class="fas fa-rotate-left me-1"></i>
Reset
</button>

<button class="btn btn-outline-success"
        onclick="downloadPDF()">

<i class="fas fa-file-pdf me-1"></i>
Download PDF Report

</button>

</div>

</div>
</div>
</div>


<!-- ================= RESULT ================= -->
<div class="col-lg-7">

<div class="ci-card p-4">

<div class="d-flex justify-content-between align-items-center mb-3">

<div>
    <div class="section-title mb-1">
        Investment Summary
    </div>

    <div class="small-text">
        Estimated compound growth
    </div>
</div>

<div class="badge bg-success-subtle text-success px-3 py-2">
    Compound Growth
</div>

</div>


<!-- Summary -->
<div class="row g-3">

<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Years</div>
<div id="resultYears" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Principal</div>
<div id="resultPrincipal" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Contributions</div>
<div id="resultContribution" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Interest Earned
</div>

<div id="interestAmount"
     class="result-value success">
    —
</div>

</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Total Amount
</div>

<div id="totalAmount"
     class="result-value">
    —
</div>

</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Return Amount
</div>

<div id="returnAmount"
     class="result-value success">
    —
</div>

</div>

</div>

</div>


<div class="summary-strip mt-3">

<div class="row g-2">

<div class="col-md-6">
    <span class="small-text">Effective Annual Rate:</span>
    <strong id="effectiveRate">—</strong>
</div>

<div class="col-md-6">
    <span class="small-text">Interest % of Investment:</span>
    <strong id="returnPercentage">—</strong>
</div>

</div>

</div>


<!-- Chart -->
<div class="mt-4">

<div class="section-title">
    Investment Growth
</div>

<div class="chart-container">
    <canvas id="chart"></canvas>
</div>

</div>


<!-- Year Table -->
<div class="mt-4">

<div class="d-flex justify-content-between align-items-center mb-2">

<div class="section-title mb-0">
    Year-wise Growth
</div>

<div class="small-text">
    Amounts are estimates
</div>

</div>


<div class="table-responsive">

<table class="table table-bordered table-sm">

<thead>

<tr>
<th>Year</th>
<th>Principal</th>
<th>Contribution</th>
<th>Interest</th>
<th>Total Amount</th>
<th>Return</th>
</tr>

</thead>

<tbody id="yearTable"></tbody>

</table>

</div>

</div>

</div>
</div>

</div>


<!-- ================= ARTICLE ================= -->

<div class="article-container mt-5">

<div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">

<div class="d-flex align-items-center gap-3 flex-wrap">

{% include naren_create.html %}
{% include reema_verify.html %}

</div>

<div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0">

<i class="fas fa-calendar"></i>

Last Updated:
{{ site.time | date: "%d-%m-%Y" }}

</div>

</div>

<!-- Article Content -->

</div>

</div>


<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- jsPDF AutoTable -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script src="{{ '/assets/js/finance/compound-interest-calc.js' | relative_url }}"></script>
