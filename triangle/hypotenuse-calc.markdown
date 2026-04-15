---
layout: default
title: Hypotenuse Calculator – Find Hypotenuse of a Right Triangle
permalink: /hypotenuse-calculator
description: "A hypotenuse calculator helps you find the longest side (c) of a right triangle using the formula c = √(a² + b²). Enter two sides to calculate instantly."
image: "/assets/images/og/hypotenuse-calculator.jpg" 
last_modified_at: 2026-04-15
---

<style>
.card { border-radius: 1.2rem; }
#triangleSVG { max-width: 260px; }
</style>
<div class="pt-4 fw-bold text-primary mb-2 text-center">
<h1>Hypotenuse Calculator</h1> 
<p class="text-muted small text-center mb-4">Formula: c = √(a² + b²)</p></div>
 <div class="card shadow-sm border-0 p-4">
  <div class="row g-4 align-items-center">
   <div class="col-md-6">
    <div class="mb-3"><input type="number" id="sideA" class="form-control form-control-lg" placeholder="Side a" value="3"></div>
    <div class="mb-3"><input type="number" id="sideB" class="form-control form-control-lg" placeholder="Side b" value="4"></div>
      <div class="d-flex gap-2"><button id="calcBtn" class="btn btn-primary w-50">Calculate</button><button id="clearBtn" class="btn btn-outline-secondary w-50">Clear</button></div>
        <div class="text-center mt-4"><h6>Hypotenuse</h6><div id="resultDisplay" class="display-6 fw-bold text-success">5</div></div>
      </div>
 <!-- RIGHT SIDE (SVG) -->
<div class="col-md-6 text-center">
<h6 class="fw-semibold mb-3">Triangle Visualization</h6>
  <svg id="triangleSVG" viewBox="0 0 200 200" class="border rounded bg-light p-2 mx-auto d-block" style="max-width: 240px;">

 <polygon id="triangleShape"
            fill="#0d6efd15"
            stroke="#0d6efd"
            stroke-width="2"/>
          <text id="labelA" font-size="12"></text>
          <text id="labelB" font-size="12"></text>
          <text id="labelC" font-size="12" font-weight="bold"></text>
        </svg>
        <p class="small text-muted mt-2"> Right triangle with sides a, b and hypotenuse c </p>
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
<h2 class="h4 fw-bold text-primary mb-3">📐 What is a Hypotenuse Calculator?</h2>
<p class="fs-6">
<strong>A Hypotenuse Calculator is a tool that helps you quickly find the longest side of a right triangle without manual calculation. You simply enter the two known sides (a and b), and it instantly calculates the hypotenuse (c) using the Pythagorean theorem.</strong></p>

<p>Instead of solving square roots manually, this calculator gives you fast and accurate results, making it useful for students, engineers, and everyday problem-solving.</p>

<hr>
<div class="row">
<div class="col-md-6">
<h2 class="h5 fw-semibold mt-4">📘 How to calculate the hypotenuse of a right triangle?</h2>
<p>The hypotenuse is the longest side of a right triangle, located opposite the 90° angle.  It is calculated using the Pythagorean theorem:</p>

<div class="bg-light p-3 rounded text-center">
\[
c = \sqrt{a^2 + b^2}
\]
</div>

<p class="mt-2">Where:</p>
<ul>
<li><strong>a</strong> = one side of the triangle</li>
<li><strong>b</strong> = second side of the triangle</li>
<li><strong>c</strong> = hypotenuse (longest side)</li>
</ul>
</div>
<div class="col-md-6">

<div class="text-center mb-4">
  <img src="/assets/images/hypotenuse-calculator.svg" alt="how to calculate hypotenuse of a right triangle example 6 8 10" class="img-fluid rounded shadow-sm" width="600" height="460" loading="eager" fetchpriority="high">
</div>
</div>
</div>
<hr>

<h2 class="h5 fw-semibold mt-4">🧮 Step-by-Step Example</h2>

<p>Let’s understand how the calculator works:</p>

<ul>
<li>Enter side <strong>a = 6</strong></li>
<li>Enter side <strong>b = 8</strong></li>
</ul>

<div class="bg-light p-3 rounded text-center">
\[
c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10
\]
</div>

<p class="mt-2">So, the hypotenuse is <strong>10</strong>.</p>

<hr>
<h2 class="h5 fw-semibold mt-4">🎯 When Do You Need This Calculator?</h2>
<p>This calculator is useful in many real-life situations:</p>
<ul>
<li>📏 Measuring diagonal distance between two points</li>
<li>🏗️ Construction and civil engineering calculations</li>
<li>📡 RF and antenna alignment (distance estimation)</li>
<li>🎮 Game development and graphics positioning</li>
<li>📐 School and competitive exam problems</li>
</ul>



<!-- FAQ Section -->
<section class="p-4">
 <h2 class="mb-4">FAQ on Hypotenuse Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is the hypotenuse?</div>
            <p class="mb-0"> The hypotenuse is the longest side of a right triangle, opposite the 90° angle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">Can the hypotenuse be smaller than other sides?</div>
            <p class="mb-0">No, the hypotenuse is always the longest side in a right triangle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">Does this formula work for all triangles? </div>
            <p class="mb-0">No, it only works for right-angled triangles.</p>
          </div>
        </div>
      </section>


 {% include triangle.html%}

</div>

 <script src="{{ '/assets/js/triangle/hypotenuse-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>