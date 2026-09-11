---
layout: default
title: "Military Time Converter"
permalink: /military-time-converter
description: "Convert military time to standard time and standard time to military time instantly with our free Military Time Converter."
last_modified_at: 2026-09-11
---
<style>
.conversion-btn{min-height:48px;font-size:.95rem;font-weight:500;white-space:nowrap}@media (max-width: 767.98px){.conversion-btn{min-height:46px}}.result-box{background:#f8f9fa;border-radius:20px;padding:28px 20px;text-align:center}.result-value{font-size:clamp(2.6rem,8vw,4rem);line-height:1.1;font-weight:700;color:#0d6efd;letter-spacing:1px}#standardTime{min-height:52px;font-size:1.15rem}#militaryTime{min-height:52px;font-size:1.25rem;letter-spacing:2px}@media (max-width: 576px){.card-body{padding:1.25rem!important}.result-box{padding:24px 15px}}
</style>

<!-- Military Time Converter -->
<div class="container py-4"><div class="row justify-content-center"><div class="col-md-12 col-lg-10 col-xl-9"><div class="card border-0 shadow-sm rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h1 class="fw-bold mb-2">Military Time Converter </h1><p class="text-muted mb-0">Convert standard time to military time and military time to standard time. </p></div><div class="mb-4"><label class="form-label fw-semibold">Convert </label><div class="row g-2"><div class="col-12 col-md-4"><button type="button" id="standardModeBtn" class="btn btn-primary w-100 conversion-btn" >Standard → Military </button></div><div class="col-12 col-md-4"><button type="button" id="militaryModeBtn" class="btn btn-outline-primary w-100 conversion-btn" >Military → Standard </button></div><div class="col-12 col-md-4"><button type="button" id="currentMilitaryBtn" class="btn btn-outline-secondary w-100 conversion-btn" >🕐 Current Military Time </button></div></div></div><div id="standardInputSection"><label for="standardTime" class="form-label fw-semibold" >Standard Time </label><input type="time" id="standardTime" class="form-control form-control-lg" step="1" ><div class="form-text">Select a time using the 12-hour clock. </div></div><div id="militaryInputSection" class="d-none" ><label for="militaryTime" class="form-label fw-semibold" >Military Time </label><input type="text" id="militaryTime" class="form-control form-control-lg text-center" placeholder="1430" maxlength="4" inputmode="numeric" autocomplete="off" ><div class="form-text">Enter four digits, for example <strong>1430</strong>for 2:30 PM. </div></div><button type="button" id="convertBtn" class="btn btn-primary btn-lg w-100 mt-4" >Convert to Military Time </button><div id="errorBox" class="alert alert-danger mt-3 d-none" role="alert" ></div><div id="resultBox" class="result-box mt-4 d-none" ><div id="resultLabel" class="small text-muted mb-2" >Result </div><div id="result" class="result-value" ></div><div id="resultDescription" class="text-muted mt-2" ></div><button type="button" id="copyBtn" class="btn btn-outline-secondary btn-sm mt-3" >📋 Copy Result </button></div></div></div>





<script src="{{ '/assets/js/timer/military-time.js' | relative_url }}"></script>