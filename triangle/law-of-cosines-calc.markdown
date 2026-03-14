---
layout: default
title: Law of Cosines Calculator – Solve Triangle with Cosine Rule
permalink: /law-of-cosines-calculator
description: "Use the Law of Cosines Calculator to calculate triangle sides or angles using the cosine rule."
last_modified_at: 2026-03-11
---

<style>
.card-header{background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff}
.result-box{background:#eef4ff;border:1px solid #c7d2fe;font-size:18px;font-weight:500;color:#1e3a8a}
.graph-container{background:#fff;border-radius:12px;padding:15px;border:1px solid #e5e7eb}polygon{transition:all .4s ease}circle{transition:all .4s ease}
.triangle-vertex{font-size:14px;font-weight:600}
</style>
<div class="row justify-content-center">
<div class="col-lg-10 col-xl-8">

<div class="card shadow border-0 rounded-2">
<div class="bg-primary text-white  text-center py-3">
<h1>Law of Cosines Calculator</h1>
<p class="small mb-0 opacity-75">Find a missing side or angle of any triangle using the law of cosines</p>

</div>

<div class="card-body p-4">

<!-- formula -->
<div class="card bg-light border-0 mb-4">
<div class="card-body text-center">
<h6 class="fw-semibold mb-2">Law of Cosines Formula</h6>
<p class="mb-1">\(c^2 = a^2 + b^2 - 2ab\cos(C)\)</p>
<p class="text-muted small mb-0">Use when two sides and the included angle are known.</p>
</div>
</div>

<!-- inputs -->

<div class="row g-3 mb-4">
<div class="col-md-3">
<label class="form-label fw-semibold">Side a</label>
<div class="input-group">
<span class="input-group-text">a</span>
<input type="number" id="sideA" class="form-control" value="8">
</div>

</div>

<div class="col-md-3">
<label class="form-label fw-semibold">Side b</label>
<div class="input-group">
<span class="input-group-text">b</span>
<input type="number" id="sideB" class="form-control" value="11">
</div>

</div>

<div class="col-md-3">
<label class="form-label fw-semibold">Side c</label>
<div class="input-group">
<span class="input-group-text">c</span>
<input type="number" id="sideC" class="form-control">
</div>

</div>

<div class="col-md-3">
<label class="form-label fw-semibold">Angle C (°)</label>
<div class="input-group">
<span class="input-group-text">∠C</span>
<input type="number" id="angleC" class="form-control" value="60">
</div>

</div>

</div>

<!-- buttons -->

<div class="row g-2 mb-4">
<div class="col-md-4"><button class="btn btn-primary w-100 py-2 shadow-sm" id="calcSideCBtn"><i class="bi bi-calculator"></i>Solve Side c</button></div>
<div class="col-md-4"><button class="btn btn-success w-100 py-2 shadow-sm" id="calcAngleCBtn"><i class="bi bi-compass"></i>Solve Angle C</button></div>
<div class="col-md-4"><button class="btn btn-light border w-100 py-2" id="clearBtn"><i class="bi bi-arrow-repeat"></i>Reset</button></div>
</div>

<div class="text-center mb-3"><button class="btn btn-outline-secondary btn-sm" onclick="loadExample()">Load Example</button>

</div>

<!-- result -->

<div class="result-box text-center p-3 rounded mb-4" id="resultMessage">Enter values and calculate.</div>

<!-- graph -->
<div class="graph-container">
<div class="d-flex justify-content-between mb-2"><span class="fw-semibold">Triangle Visualization</span></div>

<svg viewBox="0 0 300 200" id="triangleSvg" style="max-height:200px;width:100%">

<polygon id="trianglePoly" fill="rgba(13,110,253,0.15)" stroke="#0d6efd" stroke-width="2.5"></polygon>
<circle id="markA" r="4" fill="#dc3545"></circle>
<circle id="markB" r="4" fill="#198754"></circle>
<circle id="markC" r="4" fill="#fd7e14"></circle>
<text id="labelA" class="triangle-vertex" fill="#dc3545">A</text>
<text id="labelB" class="triangle-vertex" fill="#198754">B</text>
<text id="labelC" class="triangle-vertex" fill="#fd7e14">C</text>
</svg>

<div class="small text-muted text-center mt-2">a = BC | b = AC | c = AB</div>
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

<h2 class="mb-3">Law of Cosines Calculator – Find Missing Side or Angle of a Triangle</h2>

<p>The <strong>Law of Cosines Calculator</strong> helps you solve any triangle when you know <strong>two sides and the included angle</strong> or <strong>all three sides</strong>. It is one of the most important formulas in trigonometry and is widely used in geometry, engineering, navigation, and physics.</p>

<p>This calculator instantly computes the missing side or angle and displays the triangle graph for better visualization.</p>

<hr class="my-4">

<h2>What is the Law of Cosines?</h2>

<p>The <strong>Law of Cosines</strong> is a mathematical formula that relates the three sides of a triangle to the cosine of one of its angles. It works for <strong>all types of triangles</strong>, including acute, obtuse, and right triangles.</p>

<div class="alert alert-primary text-center fs-5">\(c^2 = a^2 + b^2 - 2ab\cos(C)\)</div>

<ul class="list-group list-group-flush mb-4">
<li class="list-group-item"><strong>a, b, c</strong> = sides of the triangle</li>
<li class="list-group-item"><strong>C</strong> = angle opposite side <strong>c</strong></li>
<li class="list-group-item"><strong>cos</strong> = cosine trigonometric function</li>
</ul>

<hr class="my-4">


<h2>Law of Cosines Formula Explained</h2>

<p>The <strong>Law of Cosines formula</strong> describes the relationship between the three sides of a triangle and the cosine of one of its angles. It allows you to calculate a missing side or angle when enough information about the triangle is known.</p>

<div class="alert alert-primary text-center fs-5">\(c^2 = a^2 + b^2 - 2ab\cos(C)\)</div>

<p>In this formula:</p>

<ul class="list-group mb-4">
<li class="list-group-item"><strong>a</strong> = length of one side of the triangle</li>
<li class="list-group-item"><strong>b</strong> = length of another side</li>
<li class="list-group-item"><strong>c</strong> = side opposite angle <strong>C</strong></li>
<li class="list-group-item"><strong>C</strong> = the included angle between sides <strong>a</strong> and <strong>b</strong></li>
</ul>

<p>The formula works by subtracting the value of <strong>2ab cos(C)</strong> from the sum of the squares of sides <strong>a</strong> and <strong>b</strong>. The result gives the square of side <strong>c</strong>. Taking the square root provides the final side length.</p>

<h5 class="mt-4">Alternative Forms of the Law of Cosines</h5>

<p>The formula can also be rearranged to calculate other sides or angles of a triangle:</p>

<div class="row g-3">

<div class="col-md-4">
<div class="card bg-light border-0">
<div class="card-body text-center"><strong>Find Side a</strong>
<div class="mt-2">\(a^2 = b^2 + c^2 - 2bc\cos(A)\)</div>
</div>
</div>
</div>

<div class="col-md-4">
<div class="card bg-light border-0">
<div class="card-body text-center"><strong>Find Side b</strong>
<div class="mt-2">\(b^2 = a^2 + c^2 - 2ac\cos(B)\)</div>
</div>
</div>
</div>

<div class="col-md-4">
<div class="card bg-light border-0">
<div class="card-body text-center"><strong>Find Angle C</strong>
<div class="mt-2">\(C = \cos^{-1}\left(\frac{a^2+b^2-c^2}{2ab}\right)\)</div>
</div>
</div>
</div>

</div>

<p class="mt-4">These variations allow the <strong>Law of Cosines</strong> to solve almost any triangle problem when sufficient side or angle information is available.</p>





<h2>When to Use the Law of Cosines</h2>

<p>The Law of Cosines is used when:</p>

<ul class="list-group mb-4">
<li class="list-group-item">✔ Two sides and the included angle are known (SAS)</li>
<li class="list-group-item">✔ All three sides of a triangle are known (SSS)</li>
<li class="list-group-item">✔ The triangle is not a right triangle</li>
</ul>

<hr class="my-4">

<h2>Example: Using the Law of Cosines</h2>

<p>Suppose a triangle has the following values:</p>

<ul class="list-group mb-4">
<li class="list-group-item"><strong>Side a = 8</strong></li>
<li class="list-group-item"><strong>Side b = 11</strong></li>
<li class="list-group-item"><strong>Angle C = 60°</strong></li>
</ul>

<h5>Step 1: Write the formula</h5>

<div class="alert alert-secondary text-center">\(c^2 = a^2 + b^2 - 2ab\cos(C)\)</div>

<h5>Step 2: Substitute the values</h5>

<div class="alert alert-light text-center">\(c^2 = 8^2 + 11^2 - 2(8)(11)\cos(60^\circ)\)</div>

<h5>Step 3: Calculate squares</h5>

<div class="alert alert-light text-center">\(c^2 = 64 + 121 - 176 \times 0.5\)</div>

<h5>Step 4: Simplify</h5>

<div class="alert alert-light text-center">\(c^2 = 185 - 88\)</div>

<h5>Step 5: Take square root</h5>

<div class="alert alert-success text-center fs-5">\(c = \sqrt{97} \approx 9.85\)</div>

<p><strong>Final Result:</strong> The missing side is approximately <strong>9.85 units</strong>.</p>

<hr class="my-4">

<h2>How to Use the Law of Cosines Calculator</h2>

<div class="row">

<div class="col-md-6">
<div class="card shadow-sm mb-4">
<div class="card-body">

<h5 class="card-title">Method 1: Find a Missing Side</h5>

<ol>
<li>Enter <strong>side a</strong></li>
<li>Enter <strong>side b</strong></li>
<li>Enter <strong>angle C</strong></li>
<li>Click <strong>Solve Side</strong></li>
</ol>

</div>
</div>
</div>

<div class="col-md-6">
<div class="card shadow-sm mb-4">
<div class="card-body">

<h5 class="card-title">Method 2: Find a Missing Angle</h5>

<ol>
<li>Enter <strong>side a</strong></li>
<li>Enter <strong>side b</strong></li>
<li>Enter <strong>side c</strong></li>
<li>Click <strong>Solve Angle</strong></li>
</ol>

</div>
</div>
</div>

</div>

<hr class="my-4">
<h2>Law of Cosines vs Pythagorean Theorem</h2>
<div class="table-responsive">
<table class="table table-bordered text-center">
<thead class="table-dark">
<tr>
<th>Feature</th>
<th>Law of Cosines</th>
<th>Pythagorean Theorem</th>
</tr>
</thead>

<tbody>
<tr>
<td>Works for all triangles</td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>Works for right triangles</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Uses trigonometry</td>
<td>Yes</td>
<td>No</td>
</tr>

<tr>
<td>Formula</td>
<td>\(c^2 = a^2 + b^2 - 2ab\cos C\)</td>
<td>\(a^2 + b^2 = c^2\)</td>
</tr>

</tbody>
</table>

</div>

<hr class="my-4">

<h2>Applications of the Law of Cosines</h2>

<div class="row g-3">

<div class="col-md-6">
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5>Navigation</h5>
<p>Used to calculate distances between locations on maps.</p>
</div>
</div>
</div>

<div class="col-md-6">
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5>Engineering</h5>
<p>Helps determine angles and structural dimensions.</p>
</div>
</div>
</div>

<div class="col-md-6">
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5>Surveying</h5>
<p>Used in land measurement and mapping.</p>
</div>
</div>
</div>

<div class="col-md-6">
<div class="card h-100 shadow-sm">
<div class="card-body">
<h5>Physics</h5>
<p>Used to calculate forces, vectors, and distances.</p>
</div>
</div>
</div>

</div>

<hr class="my-4">




<!-- FAQ Section -->
 <section class="mb-5">
  <h2 class="mb-4">FAQ on Law of Cosines Calculator</h2>
    <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
      <div class="fw-bold text-primary">1. What is the Law of Cosines used for?</div>
        <p class="mb-0">The Law of Cosines is used to calculate the missing side or angle of a triangle when two sides and the included angle or all three sides are known.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. Is the Law of Cosines the same as the Pythagorean theorem?</div>
            <p class="mb-0">No. The Law of Cosines works for all triangles, while the Pythagorean theorem works only for right triangles.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">3. Can the Law of Cosines find angles? </div>
            <p class="mb-0">Yes. If all three sides are known, the Law of Cosines can be rearranged to calculate an angle using inverse cosine.</p>
          </div>
        </div>
       </section>
      <!-- Did You Know? -->

</div>

<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script defer src="{{ '/assets/js/triangle/law-of-cosines-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "What is the Law of Cosines used for?",
"acceptedAnswer": {
"@type": "Answer",
"text": "The Law of Cosines is used to calculate the missing side or angle of a triangle when two sides and the included angle or all three sides are known."
}
},
{
"@type": "Question",
"name": "Is the Law of Cosines the same as the Pythagorean theorem?",
"acceptedAnswer": {
"@type": "Answer",
"text": "No. The Law of Cosines works for all triangles, while the Pythagorean theorem only works for right triangles."
}
},
{
"@type": "Question",
"name": "Can the Law of Cosines find angles?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes. If all three sides of a triangle are known, the Law of Cosines can be rearranged to calculate an angle."
}
}
]
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
"name": "Triangle Calculators",
"item": "https://easycalculator.org/triangle-calculators"
},
{
"@type": "ListItem",
"position": 3,
"name": "Law of Cosines Calculator",
"item": "https://easycalculator.org/law-of-cosines-calculator"
}
]
}
</script>
