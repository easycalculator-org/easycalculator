---
layout: default
title: 45-45-90 Triangle Calculator – Find Side Lengths of Special Right Triangle
permalink: /45-45-90-triangle-calculator
description: "Use the 45-45-90 Triangle Calculator to calculate missing sides of an isosceles right triangle. Enter one side to instantly find the others."
image: "/assets/images/45-45-90-triangle-calculator-with-formula.svg"
last_modified_at: 2026-03-11
--- 
<style>
svg text {font-size: 15px;font-weight: 600;}
.value-text { fill: #0d6efd; font-weight: 800;}
</style>

<div class="row p-4 shadow-sm">
<!-- LEFT SIDE -->
<div class="col-md-6">
    <p class="h5 mb-2">45°-45°-90° Triangle</p>
    <p class="text-muted small">Ratio: 1 : 1 : √2</p>
    <label class="form-label">Known Side</label>
    <select id="type" class="form-select mb-3">
      <option value="leg">Leg</option>
      <option value="hyp">Hypotenuse</option>
    </select>
    <label class="form-label">Value</label>
    <input type="number" id="value" class="form-control mb-3" placeholder="Enter value">
    <button onclick="calculate()" class="btn btn-primary w-100 mb-3"> Calculate  </button>
    <div class="alert alert-primary border mb-0">
      <div>Leg (a = b): <strong id="leg">-</strong></div>
      <div>Hypotenuse (c): <strong id="hyp">-</strong></div>
    </div>
    <p class="small text-muted mt-3 mb-0">Formula: c = a × √2 </p>
</div>

<!-- RIGHT SIDE TRIANGLE -->
<div class="col-md-6 text-center">
  <div class=" p-4">
    <svg width="320" height="240" viewBox="0 0 320 240">

<!-- Triangle -->
<polygon points="40,200 40,40 260,200" 
               fill="#f8f9fa" stroke="#212529" stroke-width="2"/>
      <!-- Side Labels -->
      <text x="30" y="120">b</text>
      <text x="140" y="220">a</text>
      <text x="150" y="120">c</text>
      <!-- Angles -->
      <text x="30" y="220">90°</text>
      <text x="30" y="35">45°</text>
      <text x="240" y="210">45°</text>
      <!-- Dynamic Values -->
      <text id="valA" class="value-text" x="140" y="190"></text>
      <text id="valB" class="value-text" x="45" y="120"></text>
      <text id="valC" class="value-text " x="170" y="110"></text>
    </svg>
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
<h1>What is a 45-45-90 Triangle?</h1>
<p> A <strong>45-45-90 triangle</strong> is a <strong>special right triangle</strong> that has angles of <strong>45°, 45°, and 90°</strong>. Because the two angles are equal,   the opposite sides (called <strong>legs</strong>) are also equal in length.</p>
<p> This triangle is also known as an <strong>isosceles right triangle</strong>.  It is one of the most important triangles in geometry because all of its sides follow a fixed ratio, allowing you to calculate unknown values instantly.</p>
<p class="fw-semibold text-success">✔ A 45-45-90 triangle can be solved instantly using the ratio 1 : 1 : √2.</p>
<p class="text-muted small">👉 If one side is known, all other sides, area, and perimeter can be calculated easily.</p>

<div class="row pt-4 align-items-center">

<!-- LEFT-->
<div class="col-md-6">
<h3 class="h5 fw-semibold mt-2">45-45-90 Triangle Formula</h3>
<p>In a 45-45-90 triangle, all sides follow a constant ratio: </p>
 <div class="alert alert-light border text-center fw-semibold">Side Ratio = <span class="text-primary">1 : 1 : √2</span></div>
    <ul class="list-group mb-3">
      <li class="list-group-item"><strong>Leg a = Leg b</strong> (both sides are equal)</li>
      <li class="list-group-item"><strong>Hypotenuse (c) = a × √2</strong></li>
      <li class="list-group-item"><strong>Leg (a) = c ÷ √2</strong></li>
    </ul>
    <h5 class="fw-semibold mt-3">Additional Formulas</h5>
    <ul class="list-group mb-3">
      <li class="list-group-item"><strong>Area = a² / 2</strong></li>
      <li class="list-group-item"><strong>Perimeter = a(2 + √2)</strong></li>
    </ul>
    <p class="text-muted small">👉 These formulas come from the <strong>Pythagorean theorem</strong> (a² + b² = c²).</p>
  </div>
<!-- RIGHT -->
<div class="col-md-6 text-center mt-4 mt-md-0">
 <img src="/assets/images/45-45-90-triangle-calculator-with-formula.svg" alt="45-45-90 triangle diagram with sides a, b and hypotenuse c" class="img-fluid rounded shadow-sm" loading="lazy" decoding="async">   
  </div>
</div>


  <!-- Importance -->
  <h3 class="h5 fw-semibold mt-4">Why is it Important?</h3>
  <ul>
    <li>Used in geometry and trigonometry</li>
    <li>Helpful in engineering and construction</li>
    <li>Quick calculations without complex formulas</li>
  </ul>

  <!-- How to Use -->

  <h3 class="h5 fw-semibold mt-4">How to Use This Calculator?</h3>
  <ol>
    <li>Select known side (leg or hypotenuse)</li>
    <li>Enter value</li>
    <li>Click calculate</li>
    <li>View instant result and triangle</li>
  </ol>
<h2 class="h5 fw-semibold mt-4">How to Solve a 45-45-90 Triangle?</h2>

<ol>
  <li>If leg is known → multiply by √2 to find hypotenuse</li>
  <li>If hypotenuse is known → divide by √2 to find leg</li>
  <li>Use area = a² / 2</li>
  <li>Use perimeter = a(2 + √2)</li>
</ol>

<!-- FAQ Section -->
 <section class="mb-5 p-4">
        <h2 class="mb-4">FAQ on 45-45-90 triangle</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is a 45-45-90 triangle?</div>
            <p class="mb-0">A triangle with angles 45°, 45°, and 90° where both legs are equal.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> What is the formula of 45-45-90 triangle?</div>
            <p class="mb-0">Hypotenuse = Leg × √2 and Leg = Hypotenuse ÷ √2.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is the ratio 45-45-90 triangle?</div>
            <p class="mb-0">The ratio is 1 : 1 : √2.</p>
          </div>
        </div>
      </section>
 <!-- Did You Know? -->
 {% include triangle.html%}

<!-- FAQ Schema -->

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is a 45-45-90 triangle?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "A triangle with angles 45°, 45°, and 90° where both legs are equal."
   }
  },
  {
   "@type": "Question",
   "name": "What is the formula of 45-45-90 triangle?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Hypotenuse = Leg × √2 and Leg = Hypotenuse ÷ √2."
   }
  },
  {
   "@type": "Question",
   "name": "What is the ratio?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "The ratio is 1 : 1 : √2."
   }
  },
  {
   "@type": "Question",
   "name": "Where is it used?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Used in math, engineering, construction, and design."
   }
  },
  {
   "@type": "Question",
   "name": "How to find hypotenuse?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Multiply the leg by √2."
   }
  }
 ]
}
</script>


<script src="{{ '/assets/js/triangle/45-45-90-triangle-calc.js' | relative_url }}"></script>



