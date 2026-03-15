---
layout: default
title: Law of Sines Calculator – Solve Triangle Using Sine Rule
permalink: /law-of-sines-calculator
description: "Use the Law of Sines Calculator to find missing sides and angles of a triangle using the sine rule."
last_modified_at: 2026-03-11
---  


<style>
.calc-card{background:#fff;border-radius:16px;box-shadow:0 10px 25px #0000000d}.graph-box{background:#fff;border-radius:16px;border:1px solid #eee;padding:15px}svg{width:100%;height:auto}.calc-btn{padding:12px;font-weight:600;border-radius:10px}.article{max-width:900px;margin:auto}

</style>


<div class="row g-4 align-items-stretch">

<!-- INPUT PANEL -->

<div class="col-lg-5">
<div class="card shadow-sm border-0 h-100">
<div class="card-body p-4">
<h1>Law of Sines Calculator</h1>
<p class="small text-muted mb-3">Minimum required: <b>a</b>, <b>A</b>, and <b>b</b>.</p>
<div class="row g-3">
<div class="col-6"><label class="form-label fw-semibold">Side a</label><input type="number" step="any" min="0" id="sideA" class="form-control" placeholder="e.g. 7"></div>
<div class="col-6"><label class="form-label fw-semibold">Angle A (°)</label><input type="number" step="any" min="1" max="179" id="angleA" class="form-control" placeholder="e.g. 45"></div>
<div class="col-6"><label class="form-label">Side b</label><input type="number" step="any" min="0" id="sideB" class="form-control" placeholder="e.g. 8"></div>
<div class="col-6"><label class="form-label">Angle B (°)</label><input type="number" step="any" min="1" max="179" id="angleB" class="form-control" placeholder="optional"></div>
</div>

<hr class="my-4">

<h6 class="fw-semibold">Results</h6>
<div class="row g-3">
<div class="col-6"><label class="form-label">Side c</label><input type="text" id="sideC" class="form-control bg-light" readonly></div>
<div class="col-6"><label class="form-label">Angle C</label><input type="text" id="angleC" class="form-control bg-light" readonly></div>
</div>

<div class="d-grid gap-2 mt-4">
<button id="calcBtn" class="btn btn-primary btn-lg">Calculate Triangle</button>
<button id="resetBtn" class="btn btn-outline-secondary">Reset</button>
</div>

<div class="alert alert-light mt-4 text-center">
<strong> Law of Sines Formula</strong>

<div class="mt-2">

\[
\frac{a}{\sin(A)} =
\frac{b}{\sin(B)} =
\frac{c}{\sin(C)}
\]

</div>

</div>

</div>

</div>

</div>

<!-- GRAPH PANEL -->

<div class="col-lg-7">
<div class="card shadow-sm border-0 h-100">
<div class="card-body p-4">
<h2 class="h5 text-center fw-semibold mb-3">Triangle Visualization</h2>

<div class="border rounded p-3 bg-light">

<svg viewBox="0 0 400 260">

<polygon id="triPoly" fill="#e7f1ff" stroke="#0d6efd" stroke-width="3"/>
<circle id="pA" r="5" fill="#dc3545"/>
<circle id="pB" r="5" fill="#198754"/>
<circle id="pC" r="5" fill="#0d6efd"/>
<text id="angleAText" font-size="13" fill="#dc3545"></text>
<text id="angleBText" font-size="13" fill="#198754"></text>
<text id="angleCText" font-size="13" fill="#0d6efd"></text>
<text id="sideAText" font-size="13" fill="#000"></text>
<text id="sideBText" font-size="13" fill="#000"></text>
<text id="sideCText" font-size="13" fill="#000"></text>
</svg>

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
<h2 class="mb-3">What is the Law of Sines?</h2>

<p>The <strong>Law of Sines</strong> is an important trigonometric rule used to find missing sides and angles in a triangle. It states that the ratio of each side of a triangle to the sine of its opposite angle is always constant.</p>

<p>This rule is commonly used to solve <strong>oblique triangles</strong>, which are triangles that do not contain a right angle. The Law of Sines is widely taught in geometry and trigonometry classes and is frequently used in engineering, navigation, and surveying calculations.</p>

<hr class="my-4">

<h2 class="mb-3">Law of Sines Formula</h2>
<div class="row card bg-light border-0 mb-4">
<div class="col-md-5 card-body text-center">

\[
\frac{a}{\sin(A)} =
\frac{b}{\sin(B)} =
\frac{c}{\sin(C)}
\]

<p class="small text-muted mt-2 mb-0">Each side of a triangle is proportional to the sine of its opposite angle.</p>

</div>
</div>

<p>
Where:
</p>

<ul>
<li><strong>a, b, c</strong> represent the sides of the triangle</li>
<li><strong>A, B, C</strong> represent the angles opposite those sides</li>
</ul>

<hr class="my-4">

<h2 class="mb-3">How to Use the Law of Sines Calculator</h2>

<p>
The Law of Sines calculator helps you find unknown sides and angles instantly.
To solve a triangle using the calculator, follow these simple steps:
</p>

<ol>
<li>Enter the value of <strong>Side a</strong></li>
<li>Enter the value of <strong>Angle A</strong></li>
<li>Enter the value of <strong>Side b</strong></li>
<li>Click the <strong>Calculate Triangle</strong> button</li>
</ol>

<p>
The calculator will automatically compute the remaining values such as:
</p>

<ul>
<li>Angle B</li>
<li>Angle C</li>
<li>Side c</li>
</ul>

<p>
A triangle diagram will also appear to help visualize the result.
</p>

<hr class="my-4">

<h2 class="mb-3">Example Problem</h2>

<div class="card border-0 shadow-sm mb-4">
<div class="card-body">

<h3 class="h6 mb-3">Given:</h3>

<ul>
<li>Side a = 7</li>
<li>Angle A = 45°</li>
<li>Side b = 8</li>
</ul>

<h3 class="h6 mt-4 mb-3">Step 1: Apply the Law of Sines</h3>

<div class="row">

<div class="col-md-2">

\[
\frac{a}{\sin(A)} = \frac{b}{\sin(B)}
\]

</div>

</div>

<h3 class="h6 mt-4 mb-3">Step 2: Substitute Values</h3>

<div class="row">

<div class="col-md-2">

\[
\frac{7}{\sin(45^\circ)} = \frac{8}{\sin(B)}
\]

</div>



</div>

<h3 class="h6 mt-4 mb-3">Step 3: Solve for Angle B</h3>

<div class="row">

<div class="col-md-2">

\[
B \approx 53.13^\circ
\]

</div>

</div>

<h3 class="h6 mt-4 mb-3">Step 4: Find Angle C</h3>

<div class="row">

<div class="col-md-2">

\[
C = 180^\circ - A - B
\]

</div>

<div class="col-md-2">

\[
C \approx 81.87^\circ
\]

</div>

</div>

<h3 class="h6 mt-4 mb-3">Step 5: Find Side c</h3>

<div class="row ">

<div class="col-md-2">

\[
c = \frac{a \cdot \sin(C)}{\sin(A)}
\]

</div>

</div>

<p class="mt-3 mb-0"><strong>Final Result:</strong></p>

<ul>
<li>Angle B ≈ 53.13°</li>
<li>Angle C ≈ 81.87°</li>
<li>Side c ≈ 10.43</li>
</ul>

</div>
</div>


<hr class="my-4">

<h2 class="mb-3">When to Use the Law of Sines</h2>

<p>The Law of Sines is used in the following triangle cases:</p>

<ul>
<li><strong>ASA (Angle–Side–Angle)</strong> – Two angles and one side are known</li>
<li><strong>AAS (Angle–Angle–Side)</strong> – Two angles and a non-included side are known</li>
<li><strong>SSA (Side–Side–Angle)</strong> – Two sides and one opposite angle are known</li>
</ul>

<p>However, the SSA case may produce two different triangles. This situation is called the<strong> ambiguous case</strong>.</p>

<hr class="my-4">

<h2 class="mb-3">Applications of the Law of Sines</h2>

<p>The Law of Sines has many real-world applications including:</p>

<ul>
<li>Surveying and mapping land distances</li>
<li>Navigation and GPS triangulation</li>
<li>Engineering design calculations</li>
<li>Architecture measurements</li>
<li>Physics vector analysis</li>
</ul>

<p>Because of its importance in geometry, it is widely used by students, engineers, scientists, and mathematicians.</p>


<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ on Law of Sines Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is the Law of Sines?</div>
            <p class="mb-0">The Law of Sines is a trigonometric rule stating that the ratio of each side of a triangle to the sine of its opposite angle is constant. It is used to calculate unknown sides and angles in triangles.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">When should I use the Law of Sines?</div>
            <p class="mb-0">You should use the Law of Sines when two angles and one side are known (ASA or AAS) or when two sides and a non-included angle are known (SSA).</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">Can the Law of Sines solve all triangles?</div>
            <p class="mb-0">No. Some triangles require the Law of Cosines, especially when three sides or two sides and the included angle are known.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is the ambiguous case of the Law of Sines?</div>
            <p class="mb-0">The ambiguous case occurs when two sides and one opposite angle are known (SSA). In this situation, two different triangles may satisfy the given measurements.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">How do I use the Law of Sines calculator?</div>
            <p class="mb-0">Enter one side and its opposite angle, then provide another side or angle. The calculator will compute the remaining sides and angles automatically.</p>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->
</div>




<script defer src="{{ '/assets/js/triangle/law-of-sines-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [

{
"@type": "Question",
"name": "What is the Law of Sines?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The Law of Sines is a trigonometric rule that states the ratio of each side of a triangle to the sine of its opposite angle is constant. It helps calculate unknown sides and angles in triangles."
}
},

{
"@type": "Question",
"name": "When should I use the Law of Sines?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The Law of Sines is used when two angles and one side are known (ASA or AAS) or when two sides and a non-included angle are known (SSA)."
}
},

{
"@type": "Question",
"name": "Can the Law of Sines solve all triangles?",
"acceptedAnswer": {
"@type": "Answer",
"text": "No. Some triangles require the Law of Cosines, especially when three sides or two sides and the included angle are known."
}
},

{
"@type": "Question",
"name": "What is the ambiguous case in the Law of Sines?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The ambiguous case occurs when two sides and one opposite angle are known (SSA). In this case, two different triangles may satisfy the same measurements."
}
},

{
"@type": "Question",
"name": "How do I use the Law of Sines calculator?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Enter one side and its opposite angle, then enter another side or angle. The calculator will automatically compute the remaining triangle values."
}
}

]
}
</script>