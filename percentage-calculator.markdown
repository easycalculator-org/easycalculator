---
layout: default
title: Percentage Calculator | Percentage Formula
permalink: /percentage-calculator/
description: "Use our free online percentage calculator to simplify your math! Learn the step-by-step process for quick and easy percentage formula and calculations."
---


<!-- Calculator  Part -->
<div class="container">
<h1 class="text-center">Percentage Calculator</h1>
<div class="row  ">
<!-- Calculator 1: Calculate Percentage -->
<div class="col-md-3 custom-box " >
  <h4 class="text-center">Calculate Percentage</h4>
  <div class="mb-3">
    <label for="part1" class="form-label">Part Value</label>
    <input type="number" class="form-control" id="part1" placeholder="Enter part value">
</div>
<div class="mb-3">
    <label for="whole1" class="form-label">Whole Value</label>
    <input type="number" class="form-control" id="whole1" placeholder="Enter whole value">
</div>
<button class="btn btn-primary" onclick="calculatePercentage()">Calculate Percentage</button>
<div class="result" id="result1"></div>
</div>


<div class="col-md-3 custom-box">
<!-- Calculator 2: Calculate Part -->
<h4 class="text-center">Calculate Part</h4>
<div class="mb-3">
    <label for="percentage2" class="form-label">Percentage Value</label>
    <input type="number" class="form-control" id="percentage2" placeholder="Enter percentage value">
</div>
<div class="mb-3">
    <label for="whole2" class="form-label">Whole Value</label>
    <input type="number" class="form-control" id="whole2" placeholder="Enter whole value">
</div>
<button class="btn btn-primary" onclick="calculatePart()">Calculate Part</button>
<div class="result" id="result2"></div>
</div>

<div class="col-md-3 custom-box">
  <!-- Calculator 3: Calculate Whole -->
  <h4 class="text-center">Calculate Whole</h4>
  <div class="mb-3">
      <label for="part3" class="form-label">Part Value</label>
      <input type="number" class="form-control" id="part3" placeholder="Enter part value">
  </div>
  <div class="mb-3">
      <label for="percentage3" class="form-label">Percentage Value</label>
      <input type="number" class="form-control" id="percentage3" placeholder="Enter percentage value">
  </div>
  <button class="btn btn-primary" onclick="calculateWhole()">Calculate Whole</button>
  <div class="result" id="result3"></div>

</div>
<hr class="text-success">
</div>

<!-- writing Part -->
 <h2>Percentage Calculator</h2>
 <p>A Percentage Calculator is an online tool that performs percentage-related calculations automatically. It allows users to calculate percentages, parts, and whole values using predefined formulas. This makes it super easy to use. </p>
<h2>What is a Percentage?</h2>
<p>A percentage is a number or ratio expressed as a fraction of 100. It is denoted by the symbol %. The term "per cent" means "per hundred." For example: if you have a score of 60% on a test, it means you got 60 out of 100 questions correct or you got 30 out of 50 questions.</p>
<h2>Percentage Formula for Calculation</h2> 
<p>Below is an example that explains how to calculate the percentage, determine the part value, and find the complete whole value. </p>
<strong class="text-primary">Calculate Percentage</strong>
<p>Inputs: <strong>Part</strong> and <strong>Whole</strong></p>
<ul>
<li>Formula: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>Percentage</mtext><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mtext>Part</mtext><mtext>Whole</mtext></mfrac><mo fence="true">)</mo></mrow><mo>&times;</mo><mn>100</mn></mrow><annotation encoding="application/x-tex">\text{Percentage} = \left( \frac{\text{Part}}{\text{Whole}} \right) \times 100</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"></span><span class="mord text"><span class="mord">Percentage</span></span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="minner"><span class="mopen delimcenter"><span class="delimsizing size1">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight">Whole</span></span></span></span><span><span class="pstrut"></span><span class="frac-line"></span></span><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight">Part</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter"><span class="delimsizing size1">)</span></span></span><span class="mspace"></span><span class="mbin">&times;</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">100</span></span></span></span></li>
</ul>
<strong class="text-primary">Calculate Part</strong>
<p>Inputs: <strong>Percentage</strong> and <strong>Whole</strong><strong></strong></p>
<ul>
<li>Formula: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>Part</mtext><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mtext>Percentage</mtext><mo>&times;</mo><mtext>Whole</mtext></mrow><mn>100</mn></mfrac><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">\text{Part} = \left( \frac{\text{Percentage} \times \text{Whole}}{100} \right)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"></span><span class="mord text"><span class="mord">Part</span></span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="minner"><span class="mopen delimcenter"><span class="delimsizing size2">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">100</span></span></span><span><span class="pstrut"></span><span class="frac-line"></span></span><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight">Percentage</span><span class="mbin mtight">&times;</span><span class="mord text mtight">Whole</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter"><span class="delimsizing size2">)</span></span></span></span></span></span></li>
</ul>
<strong class="text-primary">Calculate Whole</strong>
<p>Inputs: <strong>Part</strong> and <strong>Percentage</strong></p>
<ul>
<li>Formula: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>Whole</mtext><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mtext>Part</mtext><mo>&times;</mo><mn>100</mn></mrow><mtext>Percentage</mtext></mfrac><mo fence="true">)</mo></mrow></mrow><annotation encoding="application/x-tex">\text{Whole} = \left( \frac{\text{Part} \times 100}{\text{Percentage}} \right)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"></span><span class="mord text"><span class="mord">Whole</span></span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="minner"><span class="mopen delimcenter"><span class="delimsizing size2">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist"><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight">Percentage</span></span></span></span><span><span class="pstrut"></span><span class="frac-line"></span></span><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight">Part</span><span class="mbin mtight">&times;</span>100</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter"><span class="delimsizing size2">)</span></span></span></span></span></span></li>
</ul>

<h3>How to calculate percentage of a number</h3>
<p> A percentage calculator is super user-friendly! Here how to use it step by step:</p>
 <p> Pick Your Calculation Type: There are three boxes on the calculator. You can select either percentage, part, or whole.<br>
  1. Input Values: Enter the known values for the Part, Whole, or Percentage.<br>
  2. Click Calculate: The percentage calculator automatically applies the appropriate formula.<br>
  3. View Result: The final result is displayed, showing the percentage, part, or whole as required.</p>
</div>

<script src="{{ '/assets/js/percentage-calc.js' | relative_url }}"></script>
