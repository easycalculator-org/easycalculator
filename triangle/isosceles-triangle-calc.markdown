---
layout: default
title: Isosceles Triangle Calculator – Find Area, Height & Perimeter
permalink: /isosceles-triangle-calculator
description: "Use the Isosceles Triangle Calculator to compute area, height, and perimeter when two triangle sides are equal."
last_modified_at: 2026-03-15
---
<style>
.calc-card{border-radius:18px;box-shadow:0 10px 30px #00000014;border:none}
.result-card{background:#fff; padding:14px;border-radius:10px;  margin-bottom:10px; display:flex; justify-content:space-between}
.graph-box{background:#fff;border-radius:12px;padding:20px;box-shadow:0 5px 15px #0000000d}
.explanation-box{background:#fff;padding:25px;border-radius:12px;margin-top:25px;box-shadow:0 5px 15px #0000000d}
</style>


<div class="card calc-card p-4">
<h1>Isosceles Triangle Calculator</h1>
<div class="row g-4">

<!-- INPUTS -->

<div class="col-lg-4">
<label class="form-label fw-semibold">Solve Mode</label>
<select id="solveMode" class="form-select mb-3">
<option value="side">Base + Equal Side</option>
<option value="height">Base + Height</option>
</select>

<div id="sideInputs">
<label class="form-label">Base (b)</label>
<input type="number" id="baseInput" class="form-control mb-3" value="6">
<label class="form-label">Equal Side (a)</label>
<input type="number" id="sideInput" class="form-control mb-3" value="5">
</div>

<div id="heightInputs" style="display:none">
<label class="form-label">Base (b)</label>
<input type="number" id="baseHeightInput" class="form-control mb-3" value="6">
<label class="form-label">Height (h)</label>
<input type="number" id="heightInput" class="form-control mb-3" value="4">
</div>

<div class="d-grid gap-2 mt-3">
<button class="btn btn-primary" onclick="calculate()">Calculate</button>
<button class="btn btn-outline-secondary" onclick="resetCalculator()">Reset</button>
</div>

</div>


<!-- GRAPH -->

<div class="col-lg-5">
<div class="graph-box text-center">
<svg id="triangleGraph" viewBox="0 0 400 300" width="100%" height="260">

<polygon id="triangleShape" points="120,250 280,250 200,80" fill="#e8f2ff" stroke="#1e4a7a" stroke-width="3"/>

<line id="heightLine" x1="200" y1="250" x2="200" y2="80" stroke="#dc3545" stroke-width="2" stroke-dasharray="6 6"/>

<text x="290" y="160">a</text>
<text x="110" y="160">a</text>
<text x="195" y="270">b</text>
<text x="210" y="160">h</text>
</svg>
</div>

</div>


<!-- RESULTS -->

<div class="col-lg-3 bg-light rounded-2 p-2 shadow-sm">
<div class="result-card"><span>Height</span><strong id="resHeight">—</strong></div>
<div class="result-card"><span>Area</span><strong id="resArea">—</strong></div>
<div class="result-card"><span>Perimeter</span><strong id="resPerimeter">—</strong></div>
<div class="result-card"><span>Vertex Angle</span><strong id="resVertex">—</strong></div>
<div class="result-card"><span>Base Angle</span><strong id="resBaseAngle">—</strong></div>
</div>

</div>

</div>


<!-- Explanation -->
<div class="explanation-box" id="explanationBox"  style="display:none;">
<h4>Calculation Explanation</h4>
<div id="explanationText">Enter values and press Calculate.</div>
</div>



<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->
<h2>Isosceles Triangle Calculator</h2>
<p class="lead">An <strong>isosceles triangle</strong> is a triangle that has two equal sides and two equal angles. Using the isosceles triangle calculator, you can quickly find the triangle's <strong>height, area, perimeter, vertex angle, and base angles</strong>.</p>
<p>Simply enter the <strong>base and equal side</strong> or the <strong>base and height</strong> to calculate all other properties instantly.</p>
<!-- Diagram -->
<div class="row justify-content-center my-4">
<div class="col-lg-6 text-center">
<img src="/assets/images/isosceles-triangle-diagram.jpg" class="img-fluid rounded shadow-sm" alt="Isosceles triangle diagram with equal sides base and height">
<p class="text-muted mt-2 small">Diagram of an isosceles triangle with equal sides (a), base (b), and height (h).</p>
</div>
</div>


<!-- Formulas -->

<div class="row g-4 my-4">

<div class="col-md-4">
<div class="card h-100 shadow-sm border-0">
<div class="card-body">

<h5 class="card-title">Height Formula</h5>
<p class="card-text"><code>h = √(a² − (b/2)²)</code></p>
<p class="small text-muted">Where <strong>a</strong> is the equal side and <strong>b</strong> is the base.</p>
</div>
</div>
</div>


<div class="col-md-4">
<div class="card h-100 shadow-sm border-0">
<div class="card-body">

<h5 class="card-title">Area Formula</h5>
<p class="card-text"><code>Area = (b × h) / 2</code></p>
<p class="small text-muted">Multiply the base by the height and divide by two.</p>

</div>
</div>
</div>


<div class="col-md-4">
<div class="card h-100 shadow-sm border-0">
<div class="card-body">

<h5 class="card-title">Perimeter Formula</h5>

<p class="card-text"><code>P = 2a + b</code></p>

<p class="small text-muted">Add both equal sides and the base.</p>

</div>
</div>
</div>

</div>


<!-- Example -->

<div class="row justify-content-center my-5">
<div class="col-lg-10">

<h3 class="fw-bold mb-3">Example Calculation</h3>

<p>Suppose an isosceles triangle has:</p>

<ul>
<li>Base <strong>b = 6 units</strong></li>
<li>Equal side <strong>a = 5 units</strong></li>
</ul>

<h5 class="mt-4">Step 1: Calculate Height</h5>
<p><code>h = √(a² − (b/2)²)</code></p>
<p><code>h = √(5² − (6/2)²)</code></p>
<p><code>h = √(25 − 9)</code></p>
<p><strong>h = 4 units</strong></p>
<h5 class="mt-4">Step 2: Calculate Area</h5>
<p><code>Area = (b × h) / 2</code></p>
<p><code>Area = (6 × 4) / 2</code></p>
<p><strong>Area = 12 square units</strong></p>
<h5 class="mt-4">Step 3: Calculate Perimeter</h5>
<p><code>P = 2a + b</code></p>
<p><code>P = 2(5) + 6</code></p>
<p><strong>Perimeter = 16 units</strong></p>
</div>
</div>


<!-- Results Table -->

<div class="row justify-content-center my-4">
<div class="col-lg-6">

<table class="table table-bordered text-center">
<thead class="table-light"><tr><th>Property</th><th>Value</th></tr></thead>
<tbody>
<tr><td>Height</td><td>4</td></tr>
<tr><td>Area</td><td>12</td></tr>
<tr><td>Perimeter</td><td>16</td></tr>
</tbody>
</table>

</div>
</div>


<!-- FAQ Section -->
<section class="mb-5">
        <h2 class="mb-4">FAQ on Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is an isosceles triangle?</div>
            <p class="mb-0">An isosceles triangle is a triangle that has two equal sides and two equal angles.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">How do you find the height of an isosceles triangle?</div>
            <p class="mb-0">Use the formula <code>h = √(a² − (b/2)²)</code> where a is the equal side and b is the base.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> How do you calculate the area? </div>
            <p class="mb-0">The area is calculated using <code>Area = (base × height) / 2</code>.</p>
          </div>
        </div>
       </section>
      <!-- Did You Know? -->



</div>


<script defer src="{{ '/assets/js/triangle/isosceles-triangle-calc.js' | relative_url }}"></script>

<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"FAQPage",
 "mainEntity":[
 {
 "@type":"Question",
 "name":"What is an isosceles triangle?",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"An isosceles triangle has two equal sides and two equal base angles."
 }
 },
 {
 "@type":"Question",
 "name":"How do you find the height of an isosceles triangle?",
 "acceptedAnswer":{
 "@type":"Answer",
 "text":"Use the formula h = √(a² − (b/2)²) where a is the equal side and b is the base."
 }
 }
 ]
}
</script>




<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
 {
 "@type":"ListItem",
 "position":1,
 "name":"Home",
 "item":"https://easycalculator.org/"
 },
 {
 "@type":"ListItem",
 "position":2,
 "name":"Triangle Calculators",
 "item":"https://easycalculator.org/triangle-calculators"
 },
 {
 "@type":"ListItem",
 "position":3,
 "name":"Isosceles Triangle Calculator"
 }
 ]
}
</script>