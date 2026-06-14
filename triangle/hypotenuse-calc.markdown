---
layout: default
title: Hypotenuse Calculator | Formula, Examples & Right Triangle Solver
permalink: /hypotenuse-calculator
description: "A hypotenuse calculator helps you find the longest side (c) of a right triangle using the formula c = √(a² + b²). Enter two sides to calculate instantly."
image: "/assets/images/og/hypotenuse-calculator.jpg" 
last_modified_at: 2026-04-23
---

<style>
.card { border-radius: 1.2rem; }
#triangleSVG { max-width: 260px; }
</style>

<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/triangle-calculators">Triangle Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">Hypotenuse Calculator</li>
  </ol>
</div>


<div class="pt-4 fw-bold text-primary mb-2 text-center">
<h1>Hypotenuse Calculator</h1> 
<p class="text-muted small text-center mb-4">Formula: c = √(a² + b²)</p></div>
<div class="card border-0 shadow-sm overflow-hidden">

  <!-- Content -->
  <div class="card-body p-4">
    <div class="row g-4 align-items-center">
      <!-- Left -->
      <div class="col-lg-6">
        <label class="form-label fw-semibold">Side A</label>
        <input type="number"
               id="sideA"
               class="form-control form-control-lg mb-3"
               value="3"
               placeholder="Enter side A">
        <label class="form-label fw-semibold">Side B</label>
        <input type="number"
               id="sideB"
               class="form-control form-control-lg mb-4"
               value="4"
               placeholder="Enter side B">
        <div class="d-flex gap-2">
          <button id="calcBtn" class="btn btn-primary flex-fill">Calculate</button>
          <button id="clearBtn" class="btn btn-outline-secondary flex-fill">Clear</button>
        </div>
        <div class="bg-light rounded p-4 text-center mt-4">
          <small class="text-muted d-block mb-2">Hypotenuse Result</small>
          <div id="resultDisplay"  class="display-5 fw-bold text-success"> 5 </div>
        </div>
      </div>
<!-- Right -->
 <div class="col-lg-6">
   <div class="bg-light rounded p-4 text-center h-100">
    <h5 class="fw-bold mb-3">Triangle Visualization</h5>
          <svg id="triangleSVG"
               viewBox="0 0 200 200"
               class="mx-auto d-block">

            <polygon id="triangleShape"
                     fill="#0d6efd15"
                     stroke="#0d6efd"
                     stroke-width="2"></polygon>

            <text id="labelA" font-size="12"></text>
            <text id="labelB" font-size="12"></text>
            <text id="labelC"
                  font-size="12"
                  font-weight="bold"></text>
          </svg>
          <p class="small text-muted mt-3 mb-0">Right triangle with sides a, b and hypotenuse c</p>
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
<h2 class="h4 fw-bold text-primary mb-3">📐 What is a Hypotenuse Calculator?</h2>
<p class="fs-6">
<strong>A Hypotenuse Calculator is a tool that helps you quickly find the longest side of a right triangle without manual calculation. You simply enter the two known sides (a and b), and it instantly calculates the hypotenuse (c) using the Pythagorean theorem.</strong></p>

<p>Instead of solving square roots manually, this calculator gives you fast and accurate results, making it useful for students, engineers, and everyday problem-solving.</p>

<hr>
<div class="row">
<div class="col-md-6 p-4">
<h2 class="h5 fw-semibold mt-4">How to calculate the hypotenuse of a right triangle?</h2>
<p>The hypotenuse is the longest side of a right triangle, located opposite the 90° angle.  It is calculated using the Pythagorean theorem: <strong>c = √(a² + b²)</strong>. Square the two shorter sides, add the results together, and then take the square root. For example, if a = 6 and b = 8: <strong>c = √(6² + 8²) = √100 = 10</strong>.</p>
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
<div class="row g-4">

  <!-- Example 1 -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold">🧮 Example 1 (Basic)</h2>
        <p>Find the hypotenuse when two sides are small numbers:</p>
        <ul>
          <li>a = <strong>6</strong></li>
          <li>b = <strong>8</strong></li>
        </ul>
        <div class="bg-light p-3 rounded text-center">
          \[
          c = \sqrt{6^2 + 8^2}
          \]
          \[
          c = \sqrt{36 + 64} = \sqrt{100} = 10
          \]
          <p class="mt-2 mb-0">✅ Hypotenuse = <strong>10</strong></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Example 2 -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold">📘 Example 2 (Common Exam)</h2>
        <p>This is a popular Pythagorean triple used in exams:</p>
        <ul>
          <li>a = <strong>5</strong></li>
          <li>b = <strong>12</strong></li>
        </ul>
        <div class="bg-light p-3 rounded text-center">
          \[
          c = \sqrt{5^2 + 12^2}
          \]
          \[
          c = \sqrt{25 + 144} = \sqrt{169} = 13
          \]
          <p class="mt-2 mb-0">✅ Hypotenuse = <strong>13</strong></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Example 3 -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold">🏗️ Example 3 (Real-Life Use)</h2>
        <p>A ladder is placed against a wall:</p>
        <ul>
          <li>Height (a) = <strong>9 m</strong></li>
          <li>Distance from wall (b) = <strong>12 m</strong></li>
        </ul>
        <div class="bg-light p-3 rounded text-center">
          \[
          c = \sqrt{9^2 + 12^2}
          \]
          \[
          c = \sqrt{81 + 144} = \sqrt{225} = 15
          \]
          <p class="mt-2 mb-0">📏 Ladder length = <strong>15 m</strong></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Example 4 -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold">📐 Example 4 (Advanced)</h2>
        <p>Find the hypotenuse for larger values:</p>
        <ul>
          <li>a = <strong>7</strong></li>
          <li>b = <strong>24</strong></li>
        </ul>
        <div class="bg-light p-3 rounded text-center">
          \[
          c = \sqrt{7^2 + 24^2}
          \]
          \[
          c = \sqrt{49 + 576} = \sqrt{625} = 25
          \]
          <p class="mt-2 mb-0">✅ Hypotenuse = <strong>25</strong></p>
        </div>
      </div>
    </div>
  </div>

</div>

<hr>

<div class="row g-4 mt-1">

  <!-- Uses -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold text-primary mb-3">When Do You Need This Calculator?</h2>
        <p>This calculator is useful in many real-life situations:</p>
        <ul class="mb-0">
          <li>📏 Measuring diagonal distance between two points</li>
          <li>🏗️ Construction and civil engineering calculations</li>
          <li>📡 RF and antenna alignment (distance estimation)</li>
          <li>🎮 Game development and graphics positioning</li>
          <li>📐 School and competitive exam problems</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Steps -->
  <div class="col-md-6">
    <div class="card border-0 shadow-sm h-100">
      <div class="card-body p-4">
        <h2 class="h5 fw-semibold text-primary mb-3">Steps to Calculate the Hypotenuse</h2>
        <ol class="mb-0">
          <li>Measure the two shorter sides.</li>
          <li>Square both values.</li>
          <li>Add the squares together.</li>
          <li>Take the square root.</li>
          <li>The result is the hypotenuse.</li>
        </ol>
      </div>
    </div>
  </div>
</div>




<div class="p-4">
<h3>Common Hypotenuse Values</h3>
<table class="table table-bordered text-center">
<thead>
<tr>
<th>Side A</th>
<th>Side B</th>
<th>Hypotenuse</th>
</tr>
</thead>
<tbody>
<tr><td>3</td><td>4</td><td>5</td></tr>
<tr><td>5</td><td>12</td><td>13</td></tr>
<tr><td>8</td><td>15</td><td>17</td></tr>
<tr><td>7</td><td>24</td><td>25</td></tr>
<tr><td>9</td><td>40</td><td>41</td></tr>
</tbody>
</table>
</div>


<!-- FAQ Section -->
<section class="p-4">
 <h2 class="mb-4">FAQ on Hypotenuse Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the hypotenuse?</div>
            <p class="mb-0"> The hypotenuse is the longest side of a right triangle, opposite the 90° angle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">2. Can the hypotenuse be smaller than other sides?</div>
            <p class="mb-0">No, the hypotenuse is always the longest side in a right triangle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">3. Does this formula work for all triangles?</div>
            <p class="mb-0">No, it only works for right-angled triangles.</p>
          </div>
        </div>
         <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">4. What is the formula for the hypotenuse?</div>
            <p class="mb-0">The formula for the hypotenuse of a right triangle is: <strong>c = √(a² + b²)</strong> <br>where a and b are the two shorter sides, and c is the hypotenuse (the longest side). This formula is based on the Pythagorean theorem.</p>
          </div>
        </div>
         <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">5. What is the hypotenuse of a 3-4-5 triangle?</div>
            <p class="mb-0">In a 3-4-5 right triangle, the hypotenuse is <strong>5</strong>. The sides form a Pythagorean triple because <strong>3² + 4² = 5²</strong>, making 5 the longest side of the triangle.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">6. Why is the hypotenuse always the longest side?</div>
            <p class="mb-0">The hypotenuse is always the longest side of a right triangle because it is opposite the 90° angle. According to the Pythagorean theorem, its length is greater than either of the other two sides.</p>
          </div>
        </div>
      </section>

 {% include triangle.html%}


<div class="card border-0 shadow-sm mt-4">
  <div class="card-body">
    <h2 class="h5 fw-bold text-primary mb-3">📚 References</h2>
    <ul class="mb-0">
      <li>Wikipedia – Pythagorean Theorem</li>
      <li>Encyclopædia Britannica – Right Triangle</li>
      <li>Standard Geometry Textbooks</li>
      <li>NCERT Mathematics</li>
      <li>Khan Academy Geometry</li>
    </ul>
  </div>
</div>

</div>

 <script src="{{ '/assets/js/triangle/hypotenuse-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


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
      "name": "Hypotenuse Calculator",
      "item": "https://easycalculator.org/hypotenuse-calculator"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the hypotenuse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hypotenuse is the longest side of a right triangle, opposite the 90° angle."
      }
    },
    {
      "@type": "Question",
      "name": "Can the hypotenuse be smaller than other sides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the hypotenuse is always the longest side in a right triangle."
      }
    },
    {
      "@type": "Question",
      "name": "Does this formula work for all triangles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, it only works for right-angled triangles."
      }
    },
    {
      "@type": "Question",
      "name": "What is the formula for the hypotenuse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The formula for the hypotenuse of a right triangle is c = √(a² + b²), where a and b are the two shorter sides, and c is the hypotenuse (the longest side). This formula is based on the Pythagorean theorem."
      }
    },
    {
      "@type": "Question",
      "name": "What is the hypotenuse of a 3-4-5 triangle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In a 3-4-5 right triangle, the hypotenuse is 5. The sides form a Pythagorean triple because 3² + 4² = 5², making 5 the longest side of the triangle."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the hypotenuse always the longest side?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hypotenuse is always the longest side of a right triangle because it is opposite the 90° angle. According to the Pythagorean theorem, its length is greater than either of the other two sides."
      }
    }
  ]
}
</script>