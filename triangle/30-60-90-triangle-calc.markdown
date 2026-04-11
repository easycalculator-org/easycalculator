---
layout: default
title: 30-60-90 Triangle Calculator | Find Sides, Area, Perimeter & Formula
permalink: /30-60-90-triangle-calculator
description: "Use this free 30-60-90 triangle calculator to find sides, hypotenuse, area, and perimeter instantly. Solve special right triangle problems using formulas and examples."
image: "/assets/images/og/30-60-90-triangle-calculator.jpg"
last_modified_at: 2026-04-10
---

<div class="py-4">
<h1>30-60-90 Triangle Calculator</h1>
<div class="card shadow mb-4 border-0">
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
<h2>30-60-90 Triangle Calculator</h2>
<p>The <strong>30-60-90 triangle calculator</strong> helps you quickly find the sides, area, and perimeter of a special right triangle whose angles are <strong>30&deg;, 60&deg;, and 90&deg;</strong>. By entering any one side, the calculator automatically computes the remaining sides using the well-known <strong>1 : &radic;3 : 2 ratio</strong>.</p>
<p>This triangle appears frequently in <strong>geometry, trigonometry, architecture, and engineering</strong>, so understanding its properties can make many math problems easier to solve.</p>

<div class="alert alert-success"><strong>30-60-90 Triangle Formula:</strong><br>Short side = x<br>Long side = x√3<br>Hypotenuse = 2x</div>

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

<div class="row align-items-center p-4 ">
  <!-- LEFT SIDE (TEXT) -->
  <div class="col-md-6 bg-light rounded-3 p-4 ">
    <h3 class="h5 fw-bold mb-3">30-60-90 Triangle Side Ratio</h3>
    <p class="mb-2">The sides follow this fixed ratio:</p>
    <p class="fw-semibold fs-5 text-primary mb-3">1 : √3 : 2</p>
    <table class="table table-sm mb-0">
      <thead>
        <tr><th>Side</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>a</td><td>Short leg (opposite 30°)</td></tr>
        <tr><td>b</td><td>Long leg (opposite 60°)</td></tr>
        <tr><td>c</td><td>Hypotenuse (opposite 90°)</td></tr>
      </tbody>
    </table>
  </div>
  <!-- RIGHT SIDE (IMAGE) -->
  <div class="col-md-6 text-center mt-4 mt-md-0">
    <img src="/assets/images/30-60-90-triangle.svg" alt="30-60-90 triangle diagram showing 1 sqrt 3 2 ratio with labeled sides" class="img-fluid rounded shadow-sm"  loading="lazy" width="400" height="300">
  </div>

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
        <h2 class="mb-4">FAQ on 30-60-90 Triangle Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the ratio of a 30-60-90 triangle?</div>
            <p class="mb-0">The sides of a 30-60-90 triangle always follow the fixed ratio <strong>1 : √3 : 2</strong>, where the shortest side is opposite 30°, 
          the longest side (hypotenuse) is opposite 90°, and the middle side is opposite 60°.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2.  What is the formula for area of a 30-60-90 triangle?</div>
            <p class="mb-0"> The area is calculated using: <br><strong>Area = (√3 / 2) × a²</strong> where <strong>a</strong> is the shortest side.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. How do you solve a 30-60-90 triangle?</div>
            <p class="mb-0">You can solve a 30-60-90 triangle by using the fixed ratio <strong>1 : √3 : 2</strong>.  If you know one side, you can calculate the other two sides using simple multiplication.</p>
          </div>
        </div>
<div class="card mb-3 border-0 bg-light">
  <div class="card-body ">
    <div class="fw-bold text-primary"> 4. Where are 30-60-90 triangles used?</div>
     <p class="mb-0">These triangles are widely used in <strong>geometry, trigonometry, engineering, architecture, construction, and RF planning</strong> because of their predictable side ratios.</p>
   </div>
  </div>
   <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">5. How do you calculate the long leg?</div>
            <p class="mb-0"> The long leg (opposite 60°) is found by multiplying the short leg by <strong>√3</strong>.  <br>Formula: <strong>b = a√3</strong></p>
          </div>
        </div>


</section>

      {% include triangle.html%}
      <!-- Did You Know? -->

<script src="{{ '/assets/js/triangle/30-60-90-triangle-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [

{
"@type": "Question",
"name": "What is the ratio of a 30-60-90 triangle?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The sides of a 30-60-90 triangle follow the ratio 1 : √3 : 2, where the shortest side is opposite 30°, the longest side (hypotenuse) is opposite 90°, and the middle side is opposite 60°."
}
},

{
"@type": "Question",
"name": "What is the formula for area of a 30-60-90 triangle?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The area of a 30-60-90 triangle is calculated using Area = (√3 / 2) × a², where a is the shortest side."
}
},

{
"@type": "Question",
"name": "How do you solve a 30-60-90 triangle?",
"acceptedAnswer": {
"@type": "Answer",
"text": "You can solve a 30-60-90 triangle using the ratio 1 : √3 : 2. If one side is known, the other sides can be calculated using simple multiplication."
}
},

{
"@type": "Question",
"name": "Where are 30-60-90 triangles used?",
"acceptedAnswer": {
"@type": "Answer",
"text": "30-60-90 triangles are used in geometry, trigonometry, engineering, architecture, construction, and RF planning because of their predictable side ratios."
}
},

{
"@type": "Question",
"name": "How do you find the hypotenuse in a 30-60-90 triangle?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The hypotenuse is found by multiplying the shortest side by 2. Formula: c = 2a."
}
}

]
}
</script>