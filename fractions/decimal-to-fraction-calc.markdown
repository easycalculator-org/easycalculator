---
layout: default
title: Decimal to Fraction Calculator – Convert Decimal to Fraction Online
permalink: /decimal-to-fraction-calculator
description: "Use the Decimal to Fraction Calculator to quickly convert decimal numbers into simplified fractions. Get accurate results with step-by-step explanations instantly."
last_modified_at: 2026-03-08
---

<style>
.result-box{background:#fff;padding:20px;border-radius:12px;box-shadow:0 4px 12px #0000000d;text-align:center}
.result-fraction{font-size:28px;font-weight:700}
.fraction-bar{width:100%;border-top:2px solid #000;margin:3px 0}
</style>
<div class="row justify-content-center">
 <div class="col-md-8">
  <div class="card shadow border-0">
    <div class="card-body p-4">
     <h1 class="text-center fw-bold mb-4">Decimal to Fraction Calculator</h1>
 <!-- INPUT -->
  <div class="row justify-content-center mb-4">
   <div class="col-md-6">
    <input type="number"  step="any" id="decimalInput" class="form-control text-center" placeholder="Enter Decimal (e.g. 0.75)"  oninput="convertDecimal()">
    </div>
   </div>
  <!-- RESULT -->
   <div class="result-box mb-4">
    <h5 class="fw-semibold">Result</h5>
    <div class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
    <div class="result-fraction text-center">
     <span id="resultNum">0</span>
     <div class="fraction-bar"></div>
     <span id="resultDen">1</span>
    </div>
  <div class="fs-3 fw-bold">=</div>
   <div class="text-success fw-semibold fs-5">Decimal: <span id="decimalResult">0</span></div>
   </div>
   </div>
<!-- STEPS -->
  <div class="card border-0 bg-light">
  <div class="card-body">
    <h5 class="fw-semibold">Steps</h5>
     <div id="steps"></div>
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
  <div class="card-body p-4 p-lg-5">
   <h2 class="mb-4">Decimal to Fraction Calculator</h2>
    <p> Convert decimal numbers into fractions instantly with our free <strong>Decimal to Fraction Calculator</strong>. Whether you're a student, teacher, engineer, or simply working with measurements, this tool helps you convert decimals into simplified fractions quickly and accurately. </p>
     <h3 class="mt-4">What is a Decimal to Fraction?</h3>
      <p>A decimal is a number written using a decimal point, such as <strong>0.5</strong>, <strong>0.25</strong>, or <strong>3.75</strong>.  A fraction represents a part of a whole and is written as a numerator over a denominator, such as <strong>1/2</strong>, <strong>1/4</strong>, or <strong>15/4</strong>.</p>
      <p>Converting decimals into fractions makes mathematical calculations easier and provides exact values without rounding errors. </p>
        <h3 class="mt-4">Decimal to Fraction Examples</h3>
       <div class="table-responsive">
                <table class="table table-bordered table-striped align-middle">
                    <thead class="table-primary">
                        <tr>
                            <th>Decimal</th>
                            <th>Fraction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>0.5</td><td>1/2</td></tr>
                        <tr><td>0.25</td><td>1/4</td></tr>
                        <tr><td>0.75</td><td>3/4</td></tr>
                        <tr><td>1.5</td><td>3/2</td></tr>
                        <tr><td>2.25</td><td>9/4</td></tr>
                        <tr><td>3.125</td><td>25/8</td></tr>
                    </tbody>
                </table>
            </div>
 <h3 class="mt-4">How to Convert a Decimal to a Fraction</h3>
  <div class="alert alert-light border">
   <h4 class="h6">Step 1: Write the Decimal as a Fraction</h4>
    <p class="mb-0">Place the decimal number over a power of 10.</p>
    <p class="mb-0"><strong>0.75 = 75/100</strong></p>
    </div>
  <div class="alert alert-light border">
    <h4 class="h6">Step 2: Simplify the Fraction</h4>
    <p class="mb-0">Divide both the numerator and denominator by their greatest common divisor (GCD).</p>
    <p class="mb-0"><strong>75 ÷ 25 = 3</strong><br><strong>100 ÷ 25 = 4</strong></p>
    <p class="mb-0">Therefore, <strong>0.75 = 3/4</strong></p>
   </div>
   <h3 class="mt-4">Decimal to Fraction Formula</h3>
    <div class="bg-light p-3 rounded border text-center mb-3"><strong>Fraction = (Decimal × 10ⁿ) / 10ⁿ</strong></div>
    <p>Here, <strong>n</strong> represents the number of digits after the decimal point. After creating the fraction, simplify it to its lowest terms.</p>
    <h3 class="mt-4">Example Calculation</h3>
     <div class="bg-light border rounded p-3">
       <p><strong>Convert 0.125 into a fraction:</strong></p>
       <p>0.125 = 125/1000</p>
       <p>Divide numerator and denominator by 125:</p>
       <p>125 ÷ 125 = 1<br> 1000 ÷ 125 = 8</p>
       <p class="mb-0"> Answer: <strong>1/8</strong> </p>
      </div>
        <h3 class="mt-4">Common Decimal to Fraction Conversion Table</h3>
           <div class="table-responsive">
             <table class="table table-bordered table-hover">
               <thead class="table-primary">
                  <tr>
                    <th>Decimal</th>
                    <th>Fraction</th>
                  </tr>
                </thead>
               <tbody>
                <tr><td>0.1</td><td>1/10</td></tr>
                <tr><td>0.2</td><td>1/5</td></tr>
                <tr><td>0.25</td><td>1/4</td></tr>
                <tr><td>0.3</td><td>3/10</td></tr>
                <tr><td>0.4</td><td>2/5</td></tr>
                <tr><td>0.5</td><td>1/2</td></tr>
                <tr><td>0.6</td><td>3/5</td></tr>
                <tr><td>0.75</td><td>3/4</td></tr>
                <tr><td>0.8</td><td>4/5</td></tr>
                <tr><td>0.875</td><td>7/8</td></tr>
                <tr><td>1.25</td><td>5/4</td></tr>
                <tr><td>2.5</td><td>5/2</td></tr>
              </tbody>
             </table>
           </div>
     <h3 class="mt-4">Benefits of Using This Calculator</h3>
       <ul>
       <li>Instant decimal to fraction conversion</li>
       <li>Automatically simplifies fractions</li>
       <li>Supports mixed numbers</li>
       <li>Accurate and easy to use</li>
       <li>Mobile-friendly design</li>
       <li>Free online tool</li>
      </ul>
            <h3 class="mt-4">Real-Life Applications</h3>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h4 class="h6">Education</h4>
                        <p class="mb-0">Useful for math homework, algebra, and geometry. </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h4 class="h6">Engineering</h4>
                        <p class="mb-0">Helps convert precise decimal measurements into fractions.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h4 class="h6">Construction</h4>
                        <p class="mb-0">Commonly used for dimensions and building plans.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="border rounded p-3 h-100">
                        <h4 class="h6">Cooking</h4>
                        <p class="mb-0">Converts decimal measurements into recipe-friendly fractions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>














<script src="/assets/js/fractions/decimal-to-fraction-calc.js"></script>

