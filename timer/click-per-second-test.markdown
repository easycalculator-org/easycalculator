---
layout: default
title: Click Per Second (CPS) Test – Free Mouse Click Speed Calculator
permalink: /click-per-second-test
description: "Test your mouse clicking speed with the free Click Per Second (CPS) Test. Measure clicks per second over 1, 5, 10, 30, or 60 seconds, track your best score, and compare your performance."
image: "/assets/images/og/click-per-second-test.jpg"
last_modified_at: 2026-07-06
---
<style>
.glass{background:rgba(255,255,255,.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);border-radius:22px}
.stat{padding:16px;border-radius:18px;background:rgba(255,255,255,.08)}
#clickBtn{width:240px;height:240px;border-radius:50%;font-size:2rem;font-weight:700;position:relative;overflow:hidden;transition:.1s}
#clickBtn:active{transform:scale(.97)}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.45);transform:scale(0);animation:r .55s linear}
@keyframes r{to{transform:scale(6);opacity:0}}
.badgepb{display:none}
canvas{width:100%;height:120px;background:#fff;border-radius:16px}
.table{color:#fff}
</style>

<div class="glass p-4 shadow-lg">
<div class="d-flex justify-content-between align-items-center flex-wrap">
<div><h2> Premium CPS Test</h2></div>
<div class="badge bg-warning text-dark badgepb" id="pb">🏆 New Personal Best</div>
</div>

<div class="my-3 d-flex flex-wrap gap-2">
<script>
[1,2,3,5,10,15,20,30,60].forEach(v=>document.write(`<input class='btn-check' type='radio' name='d' id='d${v}' value='${v}' ${v==5?'checked':''}><label class='btn btn-outline-light' for='d${v}'>${v}s</label>`))
</script>
</div>

<div class="row g-3">
<div class="col-md-3"><div class="stat"><small>Time</small><h3 id=t>5.00</h3></div></div>
<div class="col-md-3"><div class="stat"><small>Clicks</small><h3 id=c>0</h3></div></div>
<div class="col-md-3"><div class="stat"><small>Live CPS</small><h3 id=cp>0.00</h3></div></div>
<div class="col-md-3"><div class="stat"><small>Best CPS</small><h3 id=bp>0.00</h3></div></div>
</div>

<div class="progress my-3"><div id=bar class="progress-bar progress-bar-striped progress-bar-animated"></div></div>

<div class="text-center py-3">
<button class="btn btn-light text-primary shadow-lg" id="clickBtn">CLICK</button>
</div>

<div class="row g-3">
<div class="col-lg-6">
<div class="glass p-3">
<h5>Performance Graph</h5>
<canvas id=g width=600 height=120></canvas>
</div>
</div>
<div class="col-lg-6">
<div class="glass p-3">
<h5>Statistics</h5>
<div>Total Tests: <b id=tt>0</b></div>
<div>Total Clicks: <b id=tc>0</b></div>
<div>Average CPS: <b id=ac>0.00</b></div>
<div>Peak CPS: <b id=pk>0.00</b></div>
<button id=r class="btn btn-success mt-3">Restart</button>
</div>
</div>
</div>

<div class="glass p-3 mt-3">
<h5>Recent Results</h5>
<div class="table-responsive"><table class="table table-dark table-hover align-middle mb-0">
<thead><tr><th>#</th><th>Time</th><th>Clicks</th><th>CPS</th><th>When</th></tr></thead>
<tbody id=h></tbody>
</table></div>
</div>
</div>

<script src="{{ '/assets/js/timer/click-per-second-test.js' | relative_url }}"></script>

