---
layout: default
title: Proportion Calculator – Solve Ratios & Cross Multiplication
permalink: /proportion-calculator
description: "Use the Proportion Calculator to solve ratios and proportions instantly. Find the missing value using cross multiplication with step-by-step results."
image: "/assets/images/og/proportion-calculator-formula.jpg"
last_modified_at: 2026-03-06
---

<style>
.fraction-box{background:#fff;border-radius:12px;padding:20px;border:1px solid #e9ecef;box-shadow:0 3px 10px #0000000d}
.fraction{display:flex;flex-direction:column;align-items:center;width:120px}
.fraction input{text-align:center;font-weight:600}
.fraction-line{width:100%;height:2px;background:#333;margin:12px 0}
.equals-sign{font-size:48px;font-weight:300;color:#6c757d}
.unknown-box{background:#eef5ff;border:2px dashed #0d6efd;font-weight:700;font-size:18px;color:#0d6efd}
.ratio-title{font-size:13px;letter-spacing:.5px;color:#6c757d;font-weight:600}
</style>
<div class="row justify-content-center">
<div class="card shadow border-0 rounded-4 col-lg-7 col-md-8 col-12">
<div class="card-body p-3">
<h1 class="text-center mb-3 fw-semibold">Proportion Calculator</h1>
<p class="text-center text-secondary mb-4">Solve <strong>a / b = c / x</strong> → <span class="font-monospace bg-light p-1 rounded">x = (b × c) / a</span></p>

<div class="row g-4 justify-content-center align-items-center mb-4">
<div class="col-md-4 text-center fraction-box">
<p class="ratio-title mb-3">FIRST RATIO</p>
<div class="d-flex justify-content-center">
<div class="fraction"><input type="number" id="inputA" class="form-control" value="3" step="any">
<div class="fraction-line"></div><input type="number" id="inputB" class="form-control" value="4" step="any">
</div>
</div>
</div>

<div class="col-md-auto text-center">
<div class="equals-sign">=</div>
</div>

<div class="col-md-4 text-center fraction-box">
<p class="ratio-title mb-3">SECOND RATIO</p>
<div class="d-flex justify-content-center">
<div class="fraction">
<input type="number" id="inputC" class="form-control" value="6" step="any">
<div class="fraction-line"></div>
<div class="form-control unknown-box">x</div>
<small class="text-primary mt-1">Unknown</small>
</div>
</div>
</div>

</div>

<div class="bg-white p-3 rounded-3 border mb-4">
<div class="d-flex flex-wrap align-items-center justify-content-between">
<span class="fw-light text-secondary">Proportion formula answer:</span>
<span class="font-monospace badge bg-light text-dark fs-6 p-2" id="formulaExpression">x = (4 × 6) / 3</span>
</div>

<div class="mt-3 d-flex justify-content-between align-items-center"><span class="h5 mb-0">calculated <strong class="text-primary">x</strong></span>
<span class="badge bg-primary px-4 py-3 fs-1 fw-bold rounded-4" id="resultBadge">8.000</span>
</div>
</div>

<div class="mb-2"><button class="btn btn-outline-secondary rounded-pill" id="resetBtn" aria-label="Reset proportion calculator values">↺ reset 3/4 = 6/x</button></div>
</div>
</div>
</div>

<!-- Article -->

<div class="article-container mt-5">
<div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
<div class="d-flex align-items-center gap-3 flex-wrap">
{% include naren_create.html %}
{% include reema_verify.html %}
</div>

<div class="text-muted small">Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
</div>

<h2>Proportion Calculator – Solve a/b = c/x Easily</h2>
<p class="lead">The <strong>Proportion Calculator</strong> helps you quickly solve ratios and find the missing value in a proportional equation. In mathematics, a <strong>proportion</strong> means two ratios are equal. By using the method of <strong>cross multiplication</strong>, you can easily calculate the unknown value in the equation.
</p>

<p>For example, if you know three numbers in a proportion like <strong>a / b = c / x</strong>, the calculator can instantly determine the missing value <strong>x</strong>.</p>


<h2>What Is a Proportion?</h2>
<p>A <strong>proportion</strong> is a mathematical relationship that shows two ratios are equal. It is commonly written in the form <strong>a / b = c / d</strong>, where both fractions represent the same value.</p>
<p>In simple terms, a proportion compares two ratios to show that they have the same relationship. Proportions are widely used in mathematics, finance, cooking recipes, engineering measurements, and many everyday calculations where values need to stay in the same ratio. </p>

<div class="row g-4 mb-4">

<!-- Formula -->
<div class="col-md-6">
<div class="bg-light rounded-4 p-4 h-100">
<h2 class="mb-3">Proportion Formula</h2>
<div class="bg-white p-3 text-center rounded border mb-3"><strong>a / b = c / x</strong></div>
<p class="text-center mb-2">Cross multiply:</p>
<div class="bg-white p-3 text-center rounded border mb-3"><strong>a × x = b × c</strong></div>
<div class="alert alert-success border-0 text-center mb-0"><strong>x = (b × c) / a</strong></div>
</div>
</div>


<!-- Step by Step -->
<div class="col-md-6">
<div class="bg-light rounded-3 p-4 h-100">
<h2>Step-by-Step Solution</h2>
<div class="bg-white p-3 text-center rounded border mb-3"><strong>3 / 4 = 6 / x</strong></div>
<p><strong>Step 1:</strong> 3 × x = 4 × 6</p>
<p><strong>Step 2:</strong> 3x = 24</p>
<p><strong>Step 3:</strong> x = 24 / 3</p>
<div class="alert alert-primary text-center mb-0"><strong>x = 8</strong></div>
</div>
</div>
</div>

<h2>Examples of Proportion Calculations</h2>
<div class="row g-4">
<div class="col-md-4"><div class="border rounded p-3 h-100"><h5>Example 1</h5><p>2 / 5 = 10 / x</p><p>2x = 50</p><p class="text-primary fw-bold">x = 25</p></div>
</div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><h5>Example 2</h5><p>4 / 7 = 12 / x</p><p>4x = 84</p><p class="text-primary fw-bold">x = 21</p></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><h5>Example 3</h5><p>5 notebooks cost $10</p><p>12 notebooks cost = ?</p><p><strong>x = 24</strong></p></div></div>
</div>


<div class="row g-3 pt-4">
<h3 class="mt-5">Real-Life Uses of Proportions</h3>
<div class="col-md-3"><div class="p-3 border rounded text-center"><h6>Cooking</h6><p class="small">Adjust ingredient quantities when changing recipe servings.</p></div></div>
<div class="col-md-3"><div class="p-3 border rounded text-center"><h6>Finance</h6><p class="small">Calculate proportional salary and profit.</p></div></div>
<div class="col-md-3"><div class="p-3 border rounded text-center"><h6>Engineering</h6><p class="small">Scale drawings and measurements.</p></div></div>
<div class="col-md-3"><div class="p-3 border rounded text-center"><h6>Education</h6><p class="small">Solve algebra and ratio problems.</p></div></div>
</div>

<h4 class="mt-5">FAQ on Proportion Calculator</h4>
 <div class="card mb-3 border-0 bg-light">
  <div class="card-body"><strong>What is a proportion in math?</strong><p class="mb-0">A proportion is an equation showing that two ratios are equal.</p></div>
 </div>

<div class="card mb-3 border-0 bg-light">
<div class="card-body"><strong>How do you solve proportions?</strong><p class="mb-0">Solve proportions using cross multiplication.</p></div>
</div>

<div class="card mb-3 border-0 bg-light">
<div class="card-body"><strong>What is cross multiplication?</strong><p class="mb-0">Cross multiplication means multiplying diagonally in a proportion equation.</p></div>
</div>

</div>

<script src="/assets/js/proportion-calc.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.7.0/math.min.js"></script>

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is a proportion in math?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "A proportion is an equation showing that two ratios are equal. It is written as a/b = c/d."
   }
  },
  {
   "@type": "Question",
   "name": "How do you solve a proportion?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "A proportion is solved using cross multiplication. Multiply diagonally and divide to find the unknown value."
   }
  },
  {
   "@type": "Question",
   "name": "What is cross multiplication?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Cross multiplication means multiplying the numerator of one fraction with the denominator of the other."
   }
  }
 ]
}
</script>
