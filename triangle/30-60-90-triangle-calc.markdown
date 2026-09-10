---
layout: default
title: 30-60-90 Triangle Calculator | Find Sides, Area, Perimeter & Formula
permalink: /30-60-90-triangle-calculator
description: "Use this free 30-60-90 triangle calculator to find sides, hypotenuse, and perimeter instantly. Solve special right triangle problems using formulas and examples."
image: "/assets/images/og/30-60-90-triangle-calculator.jpg"
last_modified_at: 2026-09-10
---

<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/triangle-calculators">Triangle Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">30-60-90 Triangle Calculator</li>
  </ol>
</div>

<div class="py-4">
<h1>30-60-90 Triangle Calculator</h1>
<p class="text-muted mb-4">Find the missing side lengths, area, and perimeter of a 30-60-90 triangle. Enter <strong>any one known side</strong> to calculate the other sides using the <strong>1 : √3 : 2</strong> ratio.</p>
<div class="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
<div class="card-body p-4 p-md-5">
<div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4"><div>
<h2 class="h4 fw-bold mb-1">Calculate Triangle Sides</h2>
<p class="text-muted small mb-0">Enter one known side. The other values are calculated automatically. </p>
</div>
<span class="badge bg-light text-dark border rounded-pill px-3 py-2">30° · 60° · 90° </span>
</div>
<div class="row g-4 align-items-stretch">
<div class="col-lg-5">
<div class="bg-light rounded-4 p-3 p-md-4 h-100">
<div class="mb-3"><label for="shortLeg" class="form-label fw-semibold mb-1">Short leg <span class="text-muted">(a)</span></label>
<input type="number" step="any" id="shortLeg" class="form-control form-control-lg" placeholder="Opposite 30°" autocomplete="off" inputmode="decimal" ><div class="form-text">Shortest side of the triangle </div></div>
<div class="mb-3"><label for="longLeg" class="form-label fw-semibold mb-1">Long leg <span class="text-muted">(b)</span></label>
<input type="number" step="any" id="longLeg" class="form-control form-control-lg" placeholder="Opposite 60°" autocomplete="off" inputmode="decimal" ><div class="form-text">Longer side next to the 60° angle </div></div>
<div class="mb-4"><label for="hypotenuse" class="form-label fw-semibold mb-1">Hypotenuse <span class="text-muted">(c)</span></label>
<input type="number" step="any" id="hypotenuse" class="form-control form-control-lg" placeholder="Opposite 90°" autocomplete="off" inputmode="decimal" ><div class="form-text">Longest side of the triangle </div></div>
<div class="border-top pt-3">
<h3 class="h6 fw-bold mb-3">Triangle Results </h3>
<div class="row g-2"><div class="col-6"><div class="bg-white rounded-3 p-3 h-100"><div class="small text-muted">Area</div>
<div class="fw-bold fs-5" id="areaValue">0</div></div></div><div class="col-6"><div class="bg-white rounded-3 p-3 h-100"><div class="small text-muted">Perimeter</div>
<div class="fw-bold fs-5" id="perimeterValue">0</div></div></div></div></div></div></div>
<div class="col-lg-7"><div class="border rounded-4 p-3 p-md-4 h-100 d-flex flex-column"><div class="text-center mb-2">
<h3 class="h5 fw-bold mb-1">30-60-90 Triangle Diagram</h3>
<p class="small text-muted mb-0">Side lengths update as you enter a value </p>
</div>
<div class="flex-grow-1 d-flex align-items-center justify-content-center"><svg id="triangleSVG" viewBox="0 0 340 260" width="100%" height="260" role="img" aria-label="30-60-90 triangle diagram showing 30 degree, 60 degree and 90 degree angles with side lengths" style="max-width: 420px;" ><polygon id="triangle" fill="#dbeafe" stroke="#2563eb" stroke-width="3" /><circle id="Apoint" r="4" /><circle id="Bpoint" r="4" /><circle id="Cpoint" r="4" /><text id="Atext">A</text><text id="Btext">B</text><text id="Ctext">C</text><text id="angleA">90°</text><text id="angleB">30°</text><text id="angleC">60°</text><text id="sideA"></text><text id="sideB"></text><text id="sideC"></text></svg>
</div>
<div class="bg-light rounded-3 text-center p-3 mt-2">
<div class="small text-muted mb-1">Special Triangle Side Ratio </div>
<div class="fw-bold fs-5">1 : √3 : 2 </div>
<div class="small text-muted mt-1">Short leg : Long leg : Hypotenuse </div></div></div></div></div></div></div><section class="bg-light rounded-4 p-4 p-md-5 mb-4"><h2 class="h4 fw-bold mb-3">How to Use the 30-60-90 Triangle Calculator </h2><p>Enter any one known side of the triangle. The calculator uses the <strong>1 : √3 : 2</strong>ratio to find the remaining sides, then calculates the triangle's area and perimeter. </p><ol class="mb-0"><li class="mb-2">Enter the known <strong>short leg</strong>, <strong>long leg</strong>, or <strong>hypotenuse</strong>. </li><li class="mb-2">The calculator automatically finds the other two side lengths. </li><li class="mb-2">Check the diagram to see the <strong>30°, 60°, and 90°</strong>angles and corresponding side values. </li><li>Use the calculated <strong>area</strong>and <strong>perimeter</strong>to solve your geometry problem. </li></ol></section></div>
<!-- Article Content -->
<div class="article-container">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">
   {% include naren_create.html %}
   {% include reema_verify.html %}
   </div>
 <div class="text-muted small d-flex align-items-center gap-2 mt-4"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
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
</div></div></div>
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
<!-- 30-60-90 Triangle Formulas -->
<section class="mb-4 shadow-sm p-4"><h2>30-60-90 Triangle Formulas for Each Known Side</h2><p>You can solve a 30-60-90 triangle when any one side is known. Use the following formulas to calculate the remaining sides. </p><div class="row g-3"><div class="col-md-4"><div class="bg-light rounded-4 p-4 h-100"><h3 class="h6 fw-bold">Short Leg Known</h3><p class="mb-2">Long leg=<strong>a√3</strong></p><p class="mb-0">Hypotenuse=<strong>2a</strong></p></div></div><div class="col-md-4"><div class="bg-light rounded-4 p-4 h-100"><h3 class="h6 fw-bold">Long Leg Known</h3><p class="mb-2">Short leg=<strong>b / √3</strong></p><p class="mb-0">Hypotenuse=<strong>2b / √3</strong></p></div></div><div class="col-md-4"><div class="bg-light rounded-4 p-4 h-100"><h3 class="h6 fw-bold">Hypotenuse Known</h3><p class="mb-2">Short leg=<strong>c / 2</strong></p><p class="mb-0">Long leg=<strong>c√3 / 2</strong></p></div></div></div></section>

<div class="row align-items-center p-4 ">
  <!-- LEFT -->
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
  <!-- RIGHT -->
  <div class="col-md-6 text-center mt-4 mt-md-0">
   <img src="/assets/images/30-60-90-triangle.svg" alt="30-60-90 triangle diagram showing 1 sqrt 3 2 ratio with labeled sides" class="img-fluid rounded shadow-sm"  loading="lazy" width="400" height="300">
  </div>
</div>

<!-- Step by Step, Area and Perimeter -->
<div class="p-4"><h2>Step-by-Step Calculation</h2><p>Given short side=10<br>Long side=10 × √3=17.32<br>Hypotenuse=2 × 10=20<br>Area=½ × 10 × 17.32=86.60</p></div><div class="shadow-sm mb-4 p-4"><div class="card-body"><h3 class="h5 fw-bold mb-3">Area and Perimeter</h3><div class="row g-3"><div class="col-md-6"><div class="border rounded p-3 bg-light"><h6 class="fw-bold">Area Formula</h6><p class="mb-1">Area=½ × a × b</p><p class="mb-0">Area=(√3 / 2)a²</p></div></div><div class="col-md-6"><div class="border rounded p-3 bg-light"><h6 class="fw-bold">Perimeter Formula</h6><p class="mb-1">Perimeter=a + b + c</p><p class="mb-0">Perimeter=a(3 + √3)</p></div></div></div></div></div>

<!-- Table -->
<div class="table-responsive p-4"><h2>Common 30-60-90 Triangle Values</h2><table class="table table-sm"><thead><tr><th>Short leg</th><th>Long leg</th><th>Hypotenuse</th></tr></thead><tbody><tr><td>1</td><td>√3 ≈ 1.732</td><td>2</td></tr><tr><td>2</td><td>2√3 ≈ 3.464</td><td>4</td></tr><tr><td>5</td><td>5√3 ≈ 8.660</td><td>10</td></tr><tr><td>10</td><td>10√3 ≈ 17.321</td><td>20</td></tr></tbody></table></div>

<!-- FAQ Section -->
<section class="mb-5">
<h2 class="mb-4">FAQ on 30-60-90 Triangle Calculator</h2>
<div class="card mb-3 border-0 bg-light"><div class="card-body ">
<div class="fw-bold text-primary">1. What is the ratio of a 30-60-90 triangle?</div><p class="mb-0">The sides of a 30-60-90 triangle always follow the fixed ratio <strong>1 : √3 : 2</strong>, where the shortest side is opposite 30°, the longest side (hypotenuse) is opposite 90°, and the middle side is opposite 60°.</p></div></div>
<div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">2. What is the formula for area of a 30-60-90 triangle?</div><p class="mb-0">The area is calculated using: <br><strong>Area=(√3 / 2) × a²</strong>where <strong>a</strong>is the shortest side.</p></div></div>
<div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">3. How do you solve a 30-60-90 triangle?</div><p class="mb-0">You can solve a 30-60-90 triangle by using the fixed ratio <strong>1 : √3 : 2</strong>. If you know one side, you can calculate the other two sides using simple multiplication.</p></div></div>
<div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">4. Where are 30-60-90 triangles used?</div><p class="mb-0">These triangles are widely used in <strong>geometry, trigonometry, engineering, architecture, construction, and RF planning</strong>because of their predictable side ratios.</p></div></div>
<div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">5. How do you calculate the long leg?</div><p class="mb-0">The long leg (opposite 60°) is found by multiplying the short leg by <strong>√3</strong>. <br>Formula: <strong>b=a√3</strong></p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">6. Why is the ratio 1 : √3 : 2?</div><p class="mb-0">This ratio comes from dividing an equilateral triangle into two right triangles, which creates angles of 30°, 60°, and 90°. </p></div>
</div></section>

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
        "text": "The side lengths of a 30-60-90 triangle follow the fixed ratio 1 : √3 : 2. The shortest side is opposite 30°, the longer leg is opposite 60°, and the hypotenuse is opposite 90°."
      }
    },
    {
      "@type": "Question",
      "name": "What is the formula for the area of a 30-60-90 triangle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The area of a 30-60-90 triangle can be calculated using Area = (√3 / 2) × a², where a is the length of the shortest side."
      }
    },
    {
      "@type": "Question",
      "name": "How do you solve a 30-60-90 triangle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can solve a 30-60-90 triangle using the fixed side ratio 1 : √3 : 2. If one side is known, use the ratio to calculate the other two side lengths."
      }
    },
    {
      "@type": "Question",
      "name": "Where are 30-60-90 triangles used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "30-60-90 triangles are commonly used in geometry and trigonometry and can also be useful in applications involving architecture, engineering, construction, and other measurements involving right triangles."
      }
    },
    {
      "@type": "Question",
      "name": "How do you find the hypotenuse in a 30-60-90 triangle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the shortest side is known, multiply it by 2 to find the hypotenuse. The formula is c = 2a, where a is the shortest side and c is the hypotenuse."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "SoftwareApplication",
 "name": "30-60-90 Triangle Calculator",
 "applicationCategory": "Calculator",
 "operatingSystem": "Web"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://easycalculator.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Triangle Calculator",
      "item": "https://easycalculator.org/triangle-calculators"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "30-60-90 Triangle Calculator",
      "item": "https://easycalculator.org/30-60-90-triangle-calculator"
    }
  ]
}
</script>