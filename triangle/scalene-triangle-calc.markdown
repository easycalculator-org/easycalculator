---
layout: default
title: Scalene Triangle Calculator – Calculate Properties of Scalene Triangle
permalink: /scalene-triangle-calculator
description: "Calculate area, perimeter, and angles of a scalene triangle where all sides are different."
last_modified_at: 2026-03-11
---
 <style>
.result-tile{background:#f8fafd; border-radius:1rem;}
.side-legend span{ width:18px; height:6px; border-radius:6px;}
svg text{ font-family:'Inter','Segoe UI',sans-serif;}
</style>


<div class="row justify-content-center pt-2">
<div class="card shadow p-2 p-xl-5 border-0">
<div class="card-body p-0">

<!-- Header -->
<div class="d-flex align-items-center gap-3 mb-2"><h2>Scalene Triangle</h2></div>


<div class="row g-4 g-xl-5">

<!-- LEFT SIDE -->
<div class="col-lg-6">
<form id="triangleForm">
<div class="row gy-4">
<div class="col-md-4">
<label class="form-label fw-semibold"> Side a (BC)</label>
<input type="number" step="any" class="form-control" id="sideA" placeholder="e.g. 9.2"  required>
<div class="invalid-feedback" id="aFeedback"></div>
</div>


<div class="col-md-4">
<label class="form-label fw-semibold"> Side b (AC)</label>
<input type="number" step="any" class="form-control" id="sideB" placeholder="e.g. 6.7"  required>
<div class="invalid-feedback" id="bFeedback"></div>
</div>


<div class="col-md-4">
<label class="form-label fw-semibold"> Side c (AB)</label>
<input type="number" step="any" class="form-control" id="sideC" placeholder="e.g. 11.3"  required>
<div class="invalid-feedback" id="cFeedback"></div>
</div>
</div>


<!-- Buttons -->
<div class="d-flex gap-3 mt-4">
<button type="button" class="btn btn-primary px-4" id="calculateBtn"> Calculate</button>
<button type="button" class="btn btn-outline-secondary px-4" id="clearBtn"> Clear</button>
</div>
</form>



<!-- Results -->
<div class="result-tile mt-5 p-4">

<div class="row g-3 text-center">
<div class="col-6 col-md-3"><small class="text-secondary">Perimeter</small><h4 class="fw-bold mt-1" id="perimeterVal">—</h4></div>
<div class="col-6 col-md-3"><small class="text-secondary">Area</small><h4 class="fw-bold mt-1" id="areaVal">—</h4></div>
<div class="col-6 col-md-3"><small class="text-secondary">Semiperimeter</small><h4 class="fw-bold mt-1" id="semiVal">—</h4></div>
<div class="col-6 col-md-3"><small class="text-secondary">Type</small><h4 class="fw-bold mt-1" id="typeVal">—</h4></div>
</div>


<!-- Angle Results -->
<div class="d-flex justify-content-between gap-3 mt-4 text-center">

  <div class="bg-light rounded-3 py-3 flex-fill">
    <div class="fw-bold text-primary fs-4">α</div>
    <div class="fw-semibold fs-3" id="angleAVal">—</div>
  </div>

  <div class="bg-light rounded-3 py-3 flex-fill">
    <div class="fw-bold text-success fs-4">β</div>
    <div class="fw-semibold fs-3" id="angleBVal">—</div>
  </div>

  <div class="bg-light rounded-3 py-3 flex-fill">
    <div class="fw-bold text-danger fs-4">γ</div>
    <div class="fw-semibold fs-3" id="angleCVal">—</div>
  </div>

</div>

</div>

<!-- Message -->
<div class="alert mt-4 mb-0 rounded-4 d-flex align-items-center" id="infoMessage"><span id="infoText">Enter three different positive sides</span></div>

</div>



<!-- RIGHT SIDE GRAPH -->
<div class="col-lg-6">
<div class="h-100 d-flex flex-column">
<div class="d-flex align-items-center gap-3 mb-3"><span class="fw-semibold">Side Colors · AB (c) Blue · BC (a) Red · CA (b) Green</span></div>
<div class="flex-grow-1 d-flex align-items-center justify-content-center">

<svg id="triangleSvg" viewBox="0 0 420 320" style="width:100%;max-height:300px;background:#f4f9ff;border-radius:24px;box-shadow:0 6px 16px rgba(0,0,0,0.05);">

<polygon id="fillPoly" fill="#cddffa" fill-opacity="0.25"></polygon>
<line id="sideAB" stroke="#0d6efd" stroke-width="5" stroke-linecap="round"></line>
<line id="sideBC" stroke="#dc3545" stroke-width="5" stroke-linecap="round"></line>
<line id="sideCA" stroke="#198754" stroke-width="5" stroke-linecap="round"></line>
<circle id="markerA" r="6" fill="white" stroke="#0d6efd" stroke-width="3"></circle>
<circle id="markerB" r="6" fill="white" stroke="#dc3545" stroke-width="3"></circle>
<circle id="markerC" r="6" fill="white" stroke="#198754" stroke-width="3"></circle>
<text id="labelA" fill="#0d6efd" font-weight="700">A</text>
<text id="labelB" fill="#dc3545" font-weight="700">B</text>
<text id="labelC" fill="#198754" font-weight="700">C</text>
<text id="angleLabelA" fill="#0d6efd" font-size="13" font-weight="600"></text>
<text id="angleLabelB" fill="#dc3545" font-size="13" font-weight="600"></text>
<text id="angleLabelC" fill="#198754" font-size="13" font-weight="600"></text>
</svg>
</div>


<!-- Legend -->
<div class="d-flex justify-content-center gap-4 mt-3 small side-legend">
<div><span class="d-inline-block bg-primary me-1"></span>AB (c)</div>
<div><span class="d-inline-block bg-danger me-1"></span>BC (a)</div>
<div><span class="d-inline-block bg-success me-1"></span>CA (b)</div>
</div>
</div>
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
<h2 class="mb-4">Scalene Triangle Calculator</h2>
<p>A <strong>Scalene Triangle Calculator</strong> helps you quickly calculate the <strong>area, perimeter, semiperimeter, and angles</strong> of a triangle when all
three side lengths are known. Simply enter the sides <strong>a, b, and c</strong>, and the calculator instantly determines the triangle’s measurements.</p>

<p>A <strong>scalene triangle</strong> is a triangle where all three sides have different lengths and all angles are different. Because none of the sides are equal, general formulas such as <strong>Heron’s formula</strong> and the <strong>Law of Cosines</strong> are used to calculate its properties.</p>

<hr class="my-4">

<h3>What Is a Scalene Triangle?</h3>
<p>A <strong>scalene triangle</strong> is a triangle in which all three sides are different.</p>

<ul>
<li>All sides have different lengths</li>
<li>All interior angles are different</li>
<li>No sides are equal</li>
<li>No line of symmetry exists</li>
</ul>

<p>The sum of the interior angles of any triangle is:</p>

<p class="text-center">\( A + B + C = 180^\circ \)</p>


<hr class="my-4">


<h3>Scalene Triangle Formulas</h3>
<h5 class="mt-4">1. Perimeter Formula</h5>
<p>The perimeter of a scalene triangle is the sum of all three sides.</p>
<p class="text-center">\( P = a + b + c \)</p>

<p>Where:</p>

<ul><li><strong>a, b, c</strong> = lengths of the triangle sides</li></ul>


<h5 class="mt-4">2. Semiperimeter Formula</h5>
<p>The semiperimeter is half of the triangle’s perimeter.</p>

<p class="text-center">\( s = \frac{a + b + c}{2} \)</p>


<h5 class="mt-4">3. Area Formula (Heron's Formula)</h5>

<p>The area of a scalene triangle can be calculated using <strong>Heron's formula</strong>.</p>

<p class="text-center">\( Area = \sqrt{s(s-a)(s-b)(s-c)} \)</p>

<p>Where:</p>

<ul>
<li><strong>s</strong> = semiperimeter</li>
<li><strong>a, b, c</strong> = side lengths</li>
</ul>


<h5 class="mt-4">4. Angle Formula (Law of Cosines)</h5>

<p>Angles of a scalene triangle are calculated using the <strong>Law of Cosines</strong>.</p>

<p class="text-center">\( A = \cos^{-1}\left(\frac{b^2 + c^2 - a^2}{2bc}\right) \)</p>

<p class="text-center">\( B = \cos^{-1}\left(\frac{a^2 + c^2 - b^2}{2ac}\right) \)</p>

<p class="text-center">\( C = 180^\circ - A - B \)</p>


<hr class="my-4">


<h3>Example Calculation</h3>

<p>Suppose the triangle sides are:</p>

<ul>
<li>a = 5</li>
<li>b = 6</li>
<li>c = 7</li>
</ul>

<h5>Step 1: Perimeter</h5>

<p class="text-center">\( P = 5 + 6 + 7 = 18 \)</p>

<h5>Step 2: Semiperimeter</h5>

<p class="text-center">\( s = \frac{18}{2} = 9 \)</p>

<h5>Step 3: Area</h5>

<p class="text-center">\( Area = \sqrt{9(9-5)(9-6)(9-7)} \)</p>

<p class="text-center">\( Area = \sqrt{216} \approx 14.7 \)</p>

<h5>Step 4: Angles</h5>

<p>Using the Law of Cosines:</p>

<ul>
<li>A ≈ 44.4°</li>
<li>B ≈ 57.1°</li>
<li>C ≈ 78.5°</li>
</ul>


<hr class="my-4">


<h3>Triangle Inequality Rule</h3>

<p>For three sides to form a triangle, they must satisfy the<strong>triangle inequality rule</strong>.</p>

<p class="text-center">\( a + b > c \)</p>
<p class="text-center">\( b + c > a \)</p>
<p class="text-center">\( a + c > b \)</p>

<p>If these conditions are not satisfied, the triangle cannot exist.</p>


<hr class="my-4">


<h3>Applications of Scalene Triangles</h3>

<p>Scalene triangles appear in many real-world applications:</p>

<ul>
<li>Architecture and construction</li>
<li>Engineering design</li>
<li>Surveying and navigation</li>
<li>Computer graphics and geometry</li>
<li>Physics and mechanical calculations</li>
</ul>
<hr class="my-4">


<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ on Scalene Triangle Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is a scalene triangle?</div>
            <p class="mb-0">A scalene triangle is a triangle in which all three sides and all three angles are different.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">Can a scalene triangle be a right triangle?</div>
            <p class="mb-0">Yes. A triangle can be both scalene and right-angled if one angle equals 90° and all sides are different.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">How do you calculate the area of a scalene triangle? </div>
            <p class="mb-0">The area is calculated using Heron's formula:</p><p class="text-center">\( Area = \sqrt{s(s-a)(s-b)(s-c)} \)</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is the difference between scalene and isosceles triangles?</div>
            <div class="table-responsive">
<table class="table table-bordered">
<thead>
<tr>
<th>Triangle Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scalene</td>
<td>All sides are different</td>
</tr>
<tr>
<td>Isosceles</td>
<td>Two sides are equal</td>
</tr>
<tr>
<td>Equilateral</td>
<td>All sides are equal</td>
</tr>
</tbody>
</table>
</div>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->



 {% include triangle.html%}




</div>







<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="{{ '/assets/js/triangle/scalene-triangle-calc.js' | relative_url }}"></script>

