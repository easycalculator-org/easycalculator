---
layout: default
title: Triangle Side Calculator – Find Missing Triangle Sides
permalink: /triangle-side-calculator
description: "Calculate missing triangle sides using known sides and angles with this Triangle Side Calculator."
last_modified_at: 2026-03-11
---
<style>
.result-box{font-size:2rem;font-weight:800;color:#0d6efd}.input-group{transition:.2s}.input-group:focus-within{transform:scale(1.03)}input:focus{box-shadow:none!important}.triangle-box{background:#f8fbff;border-radius:16px;padding:20px}
</style>

<div class="card p-4 border-0 shadow-sm">
<div class="text-center mb-4"> <h1>Triangle Side Calculator</h1></div>
<div class="row g-4 align-items-center">
<div class="col-12 col-md-6">
<div class="row g-3">
 <div class="col-4"><div class="input-group"><span class="input-group-text">a</span><input type="number" id="sideA" class="form-control" placeholder="0"></div></div>
 <div class="col-4"><div class="input-group"><span class="input-group-text">b</span><input type="number" id="sideB" class="form-control" placeholder="0"></div></div>
 <div class="col-4"><div class="input-group"><span class="input-group-text">c</span> <input type="number" id="sideC" class="form-control" placeholder="0"></div></div>
</div>

<div class="text-center mt-3 small text-muted"> Leave one field empty</div>

<div class="d-grid gap-2 mt-4"><button class="btn btn-primary" onclick="calculate()">Calculate </button><button class="btn btn-outline-secondary" onclick="resetCalc()">Reset</button></div>

</div>

<!-- RIGHT -->
<div class="col-12 col-md-6">
<div class="triangle-box text-center">

<svg id="triangleSVG" width="100%" height="220" viewBox="0 0 260 200">

  <defs>
    <linearGradient id="gradBlue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e3efff"/>
      <stop offset="100%" stop-color="#cfe2ff"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="5" stdDeviation="5" flood-opacity="0.15"/>
    </filter>
  </defs>
  <polygon id="triangleShape"
    points="40,160 200,160 40,50"
    fill="url(#gradBlue)"
    stroke="#0d6efd"
    stroke-width="3"
    filter="url(#shadow)"
    stroke-linejoin="round"
  />
  <line id="hypLine"
    x1="200" y1="160"
    x2="40" y2="50"
    stroke="#0d6efd"
    stroke-width="3"
    stroke-dasharray="6 4"
  />
  <rect x="40" y="140" width="20" height="20"
    fill="#0d6efd" opacity="0.2" rx="3"/>
  <text id="labelA" x="120" y="175" font-size="14" fill="#0d6efd">a</text>
  <text id="labelB" x="20" y="110" font-size="14" fill="#0d6efd">b</text>
  <text id="labelC" x="120" y="90" font-size="14" fill="#0d6efd">c</text>
</svg>

<div class="small text-muted mt-2">Live triangle visualization</div>
<div class="mt-3">
  <div class="small text-muted">Result</div>
  <div id="result" class="result-box">—</div>
  <div id="message" class="text-danger small mt-2"></div>
</div>
<div class="mt-3 small text-muted">  a² + b² = c²</div>

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
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-body">
      <h2 class="h5 fw-semibold">What is a Triangle Side Calculator?</h2>
      <p> A <strong>Triangle Side Calculator</strong> helps you find the missing side of a <strong>right-angled triangle</strong> using the Pythagorean theorem. Enter any two sides (a, b, or c) and the calculator will instantly compute the third.</p>
    </div>
  </div>

  <!-- FORMULA -->
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-body text-center">
      <h2 class="h5 fw-semibold mb-3">Pythagorean Formula</h2>
      <div class="display-6 fw-bold text-primary">a² + b² = c²</div>
      <p class="text-muted mt-2 mb-0">Applies only to right-angled triangles</p>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-body">
      <h2 class="h5 fw-semibold">How the Calculator Works</h2>
      <ul class="mb-0">
        <li><strong>Find hypotenuse (c):</strong> c = √(a² + b²)</li>
        <li><strong>Find base (a):</strong> a = √(c² − b²)</li>
        <li><strong>Find height (b):</strong> b = √(c² − a²)</li>
      </ul>
    </div>
  </div>

<!-- EXAMPLES -->
<div class="card border-0 shadow-sm mb-4">
  <div class="card-body">
    <h2 class="h5 fw-semibold mb-3">Examples</h2>
    <div class="row g-3">
      <!-- Example 1 -->
      <div class="col-md-4">
        <div class="p-3 border rounded-3 h-100">
          <h6 class="fw-semibold text-primary">Example 1: Find Hypotenuse</h6>
          <p class="mb-1">a = 3, b = 4</p>
          <p class="mb-0">c = √(3² + 4²) = √25 = <strong>5</strong></p>
        </div>
      </div>
      <!-- Example 2 -->
      <div class="col-md-4">
        <div class="p-3 border rounded-3 h-100">
          <h6 class="fw-semibold text-primary">Example 2: Find Base</h6>
          <p class="mb-1">b = 4, c = 5</p>
          <p class="mb-0">a = √(5² − 4²) = √9 = <strong>3</strong></p>
        </div>
      </div>
      <!-- Example 3 -->
      <div class="col-md-4">
        <div class="p-3 border rounded-3 h-100">
          <h6 class="fw-semibold text-primary">Example 3: Find Height</h6>
          <p class="mb-1">a = 6, c = 10</p>
          <p class="mb-0">b = √(10² − 6²) = √64 = <strong>8</strong></p>
        </div>
      </div>
    </div>
  </div>
</div>
  <!-- RULES -->
  <div class="card border-0 shadow-sm mb-4">
    <div class="card-body">
      <h2 class="h5 fw-semibold">Important Rules</h2>
      <ul class="mb-0">
        <li>Enter exactly <strong>two values</strong></li>
        <li>All sides must be <strong>positive numbers</strong></li>
        <li>Hypotenuse (c) must be the <strong>largest side</strong></li>
        <li>Works only for <strong>right-angled triangles</strong></li>
      </ul>
    </div>
  </div>


<!-- FAQ Section -->
<section class="p-4">
  <h4 class="mb-4">FAQ on Triangle Side Calculator</h4>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">What is the formula for triangle sides?</div>
      <p class="mb-0">The formula is a² + b² = c² for right-angled triangles.</p>
    </div>
  </div>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">Can I calculate any triangle?</div>
      <p class="mb-0">No, this calculator works only for right-angled triangles.</p>
    </div>
  </div>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">Which side is the hypotenuse?</div>
      <p class="mb-0">The hypotenuse (c) is the longest side opposite the 90° angle.</p>
    </div>
  </div>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">How many values should I enter?</div>
      <p class="mb-0">Enter exactly two values to calculate the third side.</p>
    </div>
  </div>
</section>
   
<script src="{{ '/assets/js/triangle/triangle-side-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is the formula for triangle sides?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "The formula is a² + b² = c² for right-angled triangles."
   }
  },
  {
   "@type": "Question",
   "name": "Can I calculate any triangle?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "No, this calculator works only for right-angled triangles."
   }
  },
  {
   "@type": "Question",
   "name": "Which side is the hypotenuse?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "The hypotenuse (c) is the longest side opposite the 90° angle."
   }
  },
  {
   "@type": "Question",
   "name": "How many values should I enter?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Enter exactly two values to calculate the third side."
   }
  }
 ]
}
</script>