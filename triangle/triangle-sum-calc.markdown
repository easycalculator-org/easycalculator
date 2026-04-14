---
layout: default
title: Triangle Sum Calculator – Find Missing Angle of a Triangle (180° Rule)
permalink: /triangle-sum-calculator
description: "Use the Triangle Sum Calculator to find the missing angle in any triangle using the triangle angle sum theorem (180° rule). Enter two angles to calculate the third instantly."
last_modified_at: 2026-03-11
---
<style>
 .card { border-radius: 1.5rem; }
  canvas { width: 100%; height: auto; max-height: 280px;display: block; background: linear-gradient(145deg, #f8faff 0%, #f0f5ff 100%);border-radius: 1rem; border: 1px solid #e0e7ff;box-shadow: 0 4px 12px rgba(0,20,50,0.05);}
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
    input[type=number] { -moz-appearance: textfield; }
    .h-130 { min-height: 320px; }
    .placeholder-graph {display: flex;align-items: center;justify-content: center;height: 280px;width: 100%;background: linear-gradient(145deg, #f8faff 0%, #f0f5ff 100%);
      border-radius: 1rem; border: 1px solid #e0e7ff; color: #6c757d;font-style: italic;}
    
    .side-card {background: linear-gradient(145deg, #ffffff 0%, #f8faff 100%);      border: 1px solid #e0e7ff;      transition: transform 0.2s;    }
    .side-card:hover {transform: translateY(-2px);      box-shadow: 0 6px 16px rgba(102,126,234,0.1);    }
  </style>
<div class="pt-4">
<div class="card shadow-lg border-0">
 <div class="card-body p-md-4">
<h1>Triangle Sum Calculator – Find the Missing Angle of a Triangle</h1>
 <p class="text-muted">Use this triangle sum calculator to find the missing angle using the <strong>triangle angle sum theorem (A + B + C = 180°)</strong>. Enter any two angles to calculate the third and visualize the triangle.</p>
 <div class="row g-4 mb-3 p-4">
     <!-- left: angle inputs -->
          <div class="col-md-5">
            <div class="bg-white p-3 rounded-4 h-130 shadow-sm" >
              <div class="mb-3">
                <label for="angleA" class="form-label fw-medium">A <span class="text-muted">(°)</span></label>
                <input type="number" min="0" max="180" required class="form-control form-control-lg" id="angleA" step="any" placeholder="Enter angle A" aria-label="Angle A in degrees">
              </div>
              <div class="mb-3">
                <label for="angleB" class="form-label fw-medium">B <span class="text-muted">(°)</span></label>
                <input type="number" min="0" max="180" required class="form-control form-control-lg" id="angleB" value="" step="any" placeholder="Enter angle B" aria-label="Angle B in degrees">
              </div>
              <div class="mb-3">
                <label for="angleC" class="form-label fw-medium">C <span class="text-muted">(calculated)</span></label>
                <input type="text" class="form-control form-control-lg bg-white" id="angleC" readonly value="—" placeholder="Will appear here">
              </div>
              <div class="mt-3 d-flex flex-wrap gap-2 align-items-center">
                <span class="badge bg-primary px-3 py-2 fs-6" id="sumDisplay">Enter angles to see sum</span>
                <span class="fw-medium" id="warningMessage"></span>
              </div>
            </div>
          </div>
          <!-- right: graph -->
          <div class="col-md-7">
            <div class="bg-white p-2 p-xl-3 rounded-4 h-130 d-flex align-items-center shadow-sm">
              <canvas id="triangleCanvas" width="600" height="480" style="display: none; "></canvas>
              <div id="graphPlaceholder" class="placeholder-graph w-100 text-center">
                <div>
                  <span class="display-1 d-block">📐</span>
                  <p class="mt-2 text-secondary">Enter two angles to see triangle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
 <!-- lengths panel -->
  <div class="row pt-3 g-3">
          <div class="col-md-4">
            <div class="side-card p-3 rounded-4 h-100 text-center shadow-sm">
              <div class="fw-semibold mb-2">📏 Side a</div>
              <div class="text-muted small mb-1">BC (opposite A)</div>
              <span class="badge rounded-pill px-3 py-2 bg-primary"  id="sideAVal">—</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="side-card p-3 rounded-4 h-100 text-center shadow-sm">
              <div class="fw-semibold mb-2">📏 Side b</div>
              <div class="text-muted small mb-1">AC (opposite B)</div>
              <span class="badge rounded-pill px-3 py-2 bg-primary"  id="sideBVal">—</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="side-card p-3 rounded-4 h-100 text-center shadow-sm">
              <div class="fw-semibold mb-2">📏 Side c</div>
              <div class="text-muted small mb-1">AB (opposite C)</div>
              <span class="badge rounded-pill px-3 py-2 bg-primary"  id="sideCVal">—</span>
            </div>
          </div>
        </div>
<!-- reset -->
<hr class="my-4">
 <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
     <button class="btn btn-outline-primary btn-sm px-4" id="resetDefaults" >↺ Try example (60°, 50°)</button>
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
<h2 class="mb-3">What Is a Triangle Sum Calculator?</h2>
<p>The <strong >Triangle Sum Calculator</strong> helps determine the missing angle of a triangle using the <strong>triangle angle sum theorem</strong>. In geometry, the sum of the three interior angles of any triangle is always <strong>180&deg;</strong>. When two angles are known, the third angle can be calculated by subtracting their sum from 180&deg;.</p>
<p>By entering the values of <strong>Angle A</strong> and <strong>Angle B</strong>, the calculator instantly determines <strong>Angle C</strong> and illustrates the triangle. It also shows the relative side lengths and a visual representation of the triangle to make the geometric relationship easier to understand.</p>
<p>This calculator is helpful for <strong>students, teachers, engineers, and anyone learning geometry</strong>. It simplifies triangle calculations, provides instant results, and helps visualize how the angles of a triangle work together.</p>

<div class="alert alert-light border rounded-3 mt-4"><strong>Triangle Angle Sum Formula</strong><br>A + B + C = 180°</div>



<div class="bg-light p-4 rounded mt-4">
   <h4 class="text-primary"><i class="fas fa-star me-2"></i>How to Use the Triangle Sum Calculator</h4>
   <p>Follow these simple steps to calculate the missing triangle angle:</p>
    <ul class="list-group list-group-flush">
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Enter the value of <strong>Angle A</strong> in degrees.</li>
         <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Enter the value of <strong>Angle B</strong> in degrees.</li>
         <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>The calculator automatically computes <strong>Angle C</strong>.</li>
         <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>A triangle graph will appear showing the triangle shape.</li>
         <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>The calculator also displays the relative lengths of sides a, b, and c.</li>
        </ul>
     </div>



<h2 class="mt-5">Triangle Angle Sum Theorem</h2>

<p>
The <strong>triangle angle sum theorem</strong> states that the total of the interior angles of any triangle equals 
<strong>180 degrees</strong>. This rule applies to all triangle types including:
</p>

<ul>
<li>Scalene triangles</li>
<li>Isosceles triangles</li>
<li>Equilateral triangles</li>
<li>Right triangles</li>
</ul>

<p>
If two angles are known, the third angle can always be calculated using the formula:
</p>

<div class="alert alert-primary">
<strong>Missing Angle = 180° − (Angle A + Angle B)</strong>
</div>


<h2 class="mt-5">Example Calculation</h2>

<p>
Suppose a triangle has the following angles:
</p>

<ul>
<li>Angle A = 60°</li>
<li>Angle B = 50°</li>
</ul>

<p>
To find the third angle:
</p>

<div class="alert alert-light border">
Angle C = 180° − (60° + 50°)<br>
Angle C = 180° − 110°<br>
<strong>Angle C = 70°</strong>
</div>

<p>
The triangle sum calculator performs this calculation instantly and displays the triangle graph.
</p>


<h2 class="mt-5">Types of Triangles Based on Angles</h2>

<div class="table-responsive">
<table class="table table-bordered table-striped">
<thead class="table-light">
<tr>
<th>Triangle Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Acute Triangle</td>
<td>All three angles are less than 90°.</td>
</tr>
<tr>
<td>Right Triangle</td>
<td>One angle equals 90°.</td>
</tr>
<tr>
<td>Obtuse Triangle</td>
<td>One angle is greater than 90°.</td>
</tr>
<tr>
<td>Equilateral Triangle</td>
<td>All three angles are equal (60° each).</td>
</tr>
</tbody>
</table>
</div>


<h2 class="mt-5">Why Use This Triangle Sum Calculator?</h2>

<ul>
<li>Instantly calculate the missing triangle angle</li>
<li>Visualize the triangle with a dynamic graph</li>
<li>Displays relative side lengths using trigonometry</li>
<li>Works for any triangle type</li>
<li>Simple and mobile-friendly interface</li>
</ul>


<h2 class="mt-5">Applications of the Triangle Angle Sum Rule</h2>

<p>The triangle sum theorem is widely used in mathematics and real-world applications such as:</p>

<ul>
<li>Geometry and trigonometry calculations</li>
<li>Engineering and structural design</li>
<li>Architecture and construction</li>
<li>Navigation and surveying</li>
<li>Computer graphics and simulations</li>
</ul>



<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the sum of angles in a triangle?</div>
            <p class="mb-0">The sum of the interior angles of any triangle is always <strong>180 degrees</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. How do you find a missing triangle angle?</div>
            <p class="mb-0">Subtract the sum of the two known angles from 180°. The result is the missing angle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. Can a triangle have two 90° angles? </div>
            <p class="mb-0">No. If two angles were 90°, their sum would already be 180°, leaving no angle for the third corner. Therefore, such a triangle cannot exist.</p>
          </div>
        </div>
       </section>
 {% include triangle.html%}


<script src="{{ '/assets/js/triangle/triangle-sum-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "What is the sum of angles in a triangle?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "The sum of the interior angles of any triangle is always 180 degrees."
 }
 },
 {
 "@type": "Question",
 "name": "How do you find a missing triangle angle?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Subtract the sum of the two known angles from 180 degrees to get the missing angle."
 }
 },
 {
 "@type": "Question",
 "name": "Can a triangle have two 90 degree angles?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "No. Two 90 degree angles would already total 180 degrees leaving no angle for the third vertex."
 }
 }
 ]
}
</script>