---
layout: default
title: Pythagorean Theorem Calculator – Find Hypotenuse, Area & Angles
permalink: /pythagorean-theorem-calculator
description: "Use the Pythagorean Theorem Calculator to find missing sides of a right triangle using the formula a² + b² = c²."
image: "/assets/images/og/pythagorean-theorem-right-triangle.jpg"
last_modified_at: 2026-03-11
---  
<style>
canvas { display: block; width: 100%; height: auto; background: transparent; }
.chart-container { position: relative; width: 100%; max-width: 360px; margin: 0 auto; }
.card { border-radius: 1rem; }
.bg-soft-primary { background-color: #f0f4ff; } 
.input-group-text { background-color: white; } 
</style>

 <div class="row justify-content-center">
  <div class="col-12 col-md-10 col-lg-9">
    <div class="card shadow border-0 overflow-hidden">
      <div class="row g-0">
      <div class="gap-2 p-4"><h1>Pythagorean theorem calculator</h1><p>a² + b² = c² · advanced with dynamic graph</p></div>
     <div class="col-md-6 p-4 d-flex flex-column">
      <div class="mb-3"><label class="form-label fw-semibold"> Leg a (adjacent)</label>
      <div class="input-group">
        <span class="input-group-text bg-white"><i class="fas fa-arrow-right text-success"></i></span>
        <input type="number" id="legA" class="form-control form-control-lg" step="any" value="3.0" placeholder="e.g. 3">
        </div>
        </div>
              <div class="mb-4">
                <label class="form-label fw-semibold">Leg b (opposite)</label>
                <div class="input-group">
                  <span class="input-group-text bg-white"><i class="fas fa-arrow-up text-danger"></i></span>
                  <input type="number" id="legB" class="form-control form-control-lg" step="any" value="4.0" placeholder="e.g. 4">
                </div>
              </div>
              <div class="bg-soft-primary rounded-3 p-3 mb-2">
                <div class="d-flex justify-content-between align-items-center"><span class="fw-medium">Hypotenuse (c) :</span><span class="h4 mb-0 fw-bold" id="cValue">5.000</span></div>
                <hr class="my-2 opacity-50">
                <div class="d-flex justify-content-between small text-secondary"><span>Perimeter</span> <span class="fw-semibold" id="perimeter">12.000</span></div>
                <div class="d-flex justify-content-between small text-secondary"><span>Area</span><span class="fw-semibold" id="area">6.000</span></div>
              </div>
   <div class="row g-2 mt-2">
    <div class="col-6"><div class="border rounded p-2 text-center"><span class="text-secondary small">∠ at (0,0)</span> <div class="fw-semibold" id="angleRight">90.00°</div></div></div>
    <div class="col-6"><div class="border rounded p-2 text-center"><span class="text-secondary small">∠ at (a,0)</span><div class="fw-semibold" id="angleA">36.87°</div> </div></div>
    <div class="col-6"> <div class="border rounded p-2 text-center"><span class="text-secondary small">∠ at (0,b)</span><div class="fw-semibold" id="angleB">53.13°</div></div></div>
    <div class="col-6"><div class="border rounded p-2 text-center bg-light"><span class="text-secondary small">Sum: </span><div class="fw-semibold" id="angleSum">180.00°</div></div>
   </div>
  </div>
  </div>
   <div class="col-md-6 bg-white p-3 d-flex flex-column align-items-center justify-content-center">
     <span class="badge bg-primary-subtle text-primary-emphasis px-3 py-2 mb-2 rounded-pill"><i class="fas fa-chart-line me-1"></i> interactive right triangle </span>
        <div class="chart-container"> <canvas id="triangleChart" width="300" height="300"></canvas> </div>
              <div class="d-flex justify-content-center gap-3 mt-2 small">
                <span><i class="fas fa-square text-success me-1"></i> leg a</span>
                <span><i class="fas fa-square text-danger me-1"></i> leg b</span>
                <span><i class="fas fa-square text-primary me-1"></i> hyp c</span>
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
<h2 class="fw-bold mb-3">Pythagorean Theorem: Definition, Formula and Example</h2>
<p>The <strong>Pythagorean theorem</strong> is a fundamental rule in geometry that explains the relationship between the three sides of a <strong>right-angled triangle</strong>. A right triangle contains one angle equal to <strong>90°</strong>. The longest side of the triangle is called the <strong>hypotenuse</strong>, while the other two sides are called <strong>legs</strong>.</p>
<p>The theorem states that the square of the hypotenuse is equal to the sum of the squares of the other two sides of the triangle.</p>
<div class="alert alert-primary">If the legs of a right triangle are known, the hypotenuse can easily be calculated using the Pythagorean formula.</div>


<!-- Formula -->
<div class="bg-light p-3 rounded-3">
<h3 class="mt-4">Pythagorean Theorem Formula</h3>
<div class="text-center fs-4 my-3">\( a^2 + b^2 = c^2 \)</div>
<ul class="mb-4">
<li><strong>a</strong> = first leg of the triangle</li>
<li><strong>b</strong> = second leg of the triangle</li>
<li><strong>c</strong> = hypotenuse (longest side)</li>
</ul>
</div>
<hr>

<!-- Graph Section -->
<h3 class="mt-4">Right Triangle Graph Explanation</h3>
<p>A right triangle can be visualized on a coordinate plane. Suppose we place the triangle with the following points:</p>
<div class="row align-items-center mb-4">
<div class="col-md-6">
<ul>
<li>Point <strong>O (0,0)</strong> forms the right angle</li>
<li>Point <strong>A (a,0)</strong> represents the horizontal side</li>
<li>Point <strong>B (0,b)</strong> represents the vertical side</li>
</ul>

</div>

<div class="col-md-6 text-center">
<img src="/assets/images/pythagorean-theorem-right-triangle.gif" alt="Pythagorean theorem right triangle diagram a² + b² = c²"  width="200"  loading="lazy">

</div>
</div>
<p>The line connecting points <strong>A</strong> and <strong>B</strong> forms the <strong>hypotenuse</strong>. The horizontal and vertical sides correspond to the values <strong>a</strong> and <strong>b</strong>. The triangle angles always add up to <strong>180°</strong>, with one angle fixed at <strong>90°</strong>.</p>


<hr>

<!-- Example -->
<h3 class="mt-4">Example of the Pythagorean Theorem</h3>
<p>Consider a right triangle with the following sides:</p>
<ul class="list-group mb-3">
<li class="list-group-item">Side a = 3</li>
<li class="list-group-item">Side b = 4</li>
</ul>

<p>Apply the formula:</p>
<div class="text-center fs-5 mb-3">\( 3^2 + 4^2 = c^2 \)</div>

<p>Calculate the squares:</p>
<div class="text-center fs-5 mb-3">\( 9 + 16 = 25 \)</div>
<p>Take the square root:</p>
<div class="text-center fs-5 mb-4">\( c = \sqrt{25} = 5 \)</div>
<div class="alert alert-success">Therefore, the hypotenuse of the triangle is <strong>5 units</strong>.</div>
<p>This triangle is known as the <strong>3-4-5 right triangle</strong>, one of the most common examples used to explain the Pythagorean theorem.</p>

<hr>

<!-- Applications -->
<h3 class="mt-4">Applications of the Pythagorean Theorem</h3>
<p>The Pythagorean theorem is widely used in many practical situations and scientific fields. Some common applications include:</p>
<ul class="list-group">
<li class="list-group-item">Calculating distances in coordinate geometry</li>
<li class="list-group-item">Construction and building measurements</li>
<li class="list-group-item">Architecture and engineering design</li>
<li class="list-group-item">Computer graphics and game development</li>
<li class="list-group-item">Navigation and GPS distance calculations</li>
</ul>
<p class="mt-3">Because of its simplicity and usefulness, the Pythagorean theorem remains one of the most important formulas in mathematics and geometry.</p>
<hr>



<!-- FAQ Section -->
<section class="p-4">
 <h2 class="mb-4">FAQ on Pythagorean Theorem Calculator</h2>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
     <div class="fw-bold text-primary">What is the hypotenuse?</div>
       <p class="mb-0">The hypotenuse is the longest side of a right triangle and lies opposite the 90° angle.</p>
      </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can the Pythagorean theorem be used for all triangles?</div>
        <p class="mb-0">No. The Pythagorean theorem only works for right-angled triangles.</p>
       </div>
      </div>
   <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
      <div class="fw-bold text-primary">What is the most common example of the theorem?</div>
       <p class="mb-0">The 3-4-5 triangle is the most commonly used example of the Pythagorean theorem.</p>
     </div>
    </div>
 </section>





<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>  
<script src="{{ '/assets/js/triangle/pythagorean-theorem-calc.js' | relative_url }}"></script>


