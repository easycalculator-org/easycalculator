---
layout: default
title: 30-60-90 Triangle Calculator (Find Sides, Area & Perimeter)
permalink: /30-60-90-triangle-calculator
description: "Use the 30-60-90 triangle calculator to find missing sides, area, and perimeter instantly. Enter any value to solve the special right triangle using the 1:√3:2 ratio."
last_modified_at: 2026-03-11
---

<div class="py-4">
<p class="fs-2 fw-bold">30-60-90 Triangle Calculator</p>
<p class="text-muted">Use this calculator to find the sides, area and perimeter of a special right triangle. Enter any side and the calculator will compute the remaining values automatically.</p>

<!-- Calculator Card -->

<div class="card shadow-sm mb-4 border-0">
<div class="card-body">
<div class="row g-4">
<!-- Inputs -->

<div class="col-md-5">
<label class="form-label fw-semibold">Short leg (a)</label>
<input type="number" step="any" id="shortLeg" class="form-control mb-3" placeholder="Enter short side (opposite 30°)" autocomplete="off">
<label class="form-label fw-semibold">Long leg (b)</label>
<input type="number" step="any" id="longLeg" class="form-control mb-3" placeholder="Enter long side (opposite 60°)" autocomplete="off">
<label class="form-label fw-semibold">Hypotenuse (c)</label>
<input type="number" step="any" id="hypotenuse" class="form-control" placeholder="Enter hypotenuse (opposite 90°)" autocomplete="off">
<div class="alert alert-light border-0 mt-4">
<div>Area: <strong id="areaValue">0</strong></div>
<div>Perimeter: <strong id="perimeterValue">0</strong></div>
</div>
</div>

<!-- Triangle Graph -->
<div class="col-md-7 text-center">

<svg id="triangleSVG" viewBox="0 0 340 260" width="100%" height="260">

<polygon id="triangle" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>

<!-- points -->
<circle id="Apoint" r="4"/>
<circle id="Bpoint" r="4"/>
<circle id="Cpoint" r="4"/>

<!-- vertex labels -->
<text id="Atext">A</text>
<text id="Btext">B</text>
<text id="Ctext">C</text>

<!-- angle labels -->
<text id="angleA">90°</text>
<text id="angleB">30°</text>
<text id="angleC">60°</text>

<!-- side values -->
<text id="sideA"></text>
<text id="sideB"></text>
<text id="sideC"></text>
</svg>
</div>
</div>
</div>
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
<h1>30-60-90 Triangle Calculator</h1>
<p>The <strong>30-60-90 triangle calculator</strong> helps you quickly find the sides, area, and perimeter of a special right triangle whose angles are <strong>30&deg;, 60&deg;, and 90&deg;</strong>. By entering any one side, the calculator automatically computes the remaining sides using the well-known <strong>1 : &radic;3 : 2 ratio</strong>.</p>
<p>This triangle appears frequently in <strong>geometry, trigonometry, architecture, and engineering</strong>, so understanding its properties can make many math problems easier to solve.</p>
<h2>What Is a 30-60-90 Triangle?</h2>
<p>A <strong>30-60-90 triangle</strong> is a special right triangle where the three interior angles measure:</p>
<ul class="mb-3">
<li>30°</li>
<li>60°</li>
<li>90°</li>
</ul>



<p class="mb-0">Since it contains a right angle, the triangle follows the<strong>Pythagorean theorem</strong>.</p>
<div class="alert alert-primary text-center fw-bold mt-3">a² + b² = c²</div>




<!-- Formula Section -->
<div class="row g-4 mb-4 pt-4">
<!-- Formula Card -->
<div class="col-md-6">
<div class="card shadow-sm h-100 border-0">
<div class="card-body p-4">
<h2 class="h5 fw-bold mb-3 text-primary">30-60-90 Triangle Formula</h2>
<p class="text-muted">A 30-60-90 triangle is a special right triangle where the side lengths always follow a fixed ratio.</p>
<div class="alert alert-primary text-center fw-bold fs-5 py-2">1 : √3 : 2</div>
<ul class="list-group list-group-flush small">
<li class="list-group-item px-0"><strong>Short leg (a)</strong> – opposite 30°</li>
<li class="list-group-item px-0"><strong>Long leg (b)</strong> = a × √3</li>
<li class="list-group-item px-0"><strong>Hypotenuse (c)</strong> = 2a</li>
</ul>

</div>
</div>

</div>


<!-- Example Card -->
<div class="col-md-6 ">
<div class="card shadow-sm h-100 border-0">
<div class="card-body p-4">
<h2 class="h5 fw-bold mb-3 text-success">Example Calculation</h2>
<p class="text-muted mb-3">If the short leg is <strong>a = 5</strong></p>
<div class="bg-light border rounded p-2 mb-2 small"><strong>Step 1 – Long leg</strong><br>b = a × √3 = 5 × 1.732 = <strong>8.66</strong></div>
<div class="bg-light border rounded p-2 mb-2 small"><strong>Step 2 – Hypotenuse</strong><br>c = 2a = 2 × 5 = <strong>10</strong></div>
<div class="bg-light border rounded p-2 small"><strong>Step 3 – Area</strong><br>Area = ½ × a × b = ½ × 5 × 8.66 = <strong>21.65</strong></div>
</div>
</div>
</div>
</div>

<div class="bg-light p-4 rounded-3 mb-4">
<h3 class="h5 fw-bold mb-3">30-60-90 Triangle Side Ratio</h3>
<p class="mb-2">The sides follow this fixed ratio:</p>
<p class="fw-semibold fs-5 text-primary mb-3">1 : √3 : 2</p>
<table class="table table-sm mb-0">
<thead><tr><th>Side</th><th>Description</th></tr></thead>

<tbody>
<tr><td>a</td><td>Short leg (opposite 30°)</td></tr>
<tr><td>b</td><td>Long leg (opposite 60°)</td></tr>
<tr><td>c</td><td>Hypotenuse (opposite 90°)</td></tr>
</tbody>
</table>
</div>








<!-- Area and Perimeter -->
<div class="card shadow-sm mb-4">
<div class="card-body">

<h3 class="h5 fw-bold mb-3">Area and Perimeter</h3>

<div class="row g-3">

<div class="col-md-6">
<div class="border rounded p-3 bg-light">
<h6 class="fw-bold">Area Formula</h6>
<p class="mb-1">Area = ½ × a × b</p>
<p class="mb-0">Area = (√3 / 2)a²</p>

</div>
</div>


<div class="col-md-6">
<div class="border rounded p-3 bg-light">
<h6 class="fw-bold">Perimeter Formula</h6>
<p class="mb-1">Perimeter = a + b + c</p>
<p class="mb-0">Perimeter = a(3 + √3)</p>

</div>
</div>

</div>

</div>
</div>

<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the ratio of a 30-60-90 triangle?</div>
            <p class="mb-0">The side ratio is <strong>1 : √3 : 2</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. How do you find the hypotenuse?</div>
            <p class="mb-0">Multiply the shortest side by <strong>2</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. How do you find the long leg?</div>
            <p class="mb-0"> Multiply the short leg by <strong>√3</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 4. Where are 30-60-90 triangles used?</div>
            <p class="mb-0">They appear in geometry, engineering, architecture, and trigonometry problems.</p>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->

<script src="{{ '/assets/js/triangle/30-60-90-triangle-calc.js' | relative_url }}"></script>

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"FAQPage",
"mainEntity":[
{
"@type":"Question",
"name":"What is the ratio of a 30-60-90 triangle?",
"acceptedAnswer":{
"@type":"Answer",
"text":"The side ratio of a 30-60-90 triangle is 1 : √3 : 2."
}
},
{
"@type":"Question",
"name":"How do you find the hypotenuse in a 30-60-90 triangle?",
"acceptedAnswer":{
"@type":"Answer",
"text":"Multiply the shortest side by 2 to get the hypotenuse."
}
}
]
}
</script>