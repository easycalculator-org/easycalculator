---
layout: default
title: LCM Calculator | Least Common Multiple Calculator
permalink: /lcm-calculator
description: "Use our free LCM calculator to quickly find the least common multiple of up to 4 numbers. It's easy, fast, and perfect for your math needs!"
---

 <div class="container py-1">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h1 class="text-center mb-0"><i class="fas fa-calculator me-2"></i>LCM Calculator</h1>
                        <p class="text-center mb-0">Least Common Multiple of up to 5 numbers</p>
                    </div>
                    <div class="card-body">
                        <form id="lcmForm">
                            <div class="row g-3 mb-4">
                                <div class="col-md">
                                    <label for="num1" class="form-label">Number 1</label>
                                    <input type="number" class="form-control form-control-lg" id="num1" min="1" required>
                                </div>
                                <div class="col-md">
                                    <label for="num2" class="form-label">Number 2</label>
                                    <input type="number" class="form-control form-control-lg" id="num2" min="1" required>
                                </div>
                                <div class="col-md">
                                    <label for="num3" class="form-label">Number 3 (Optional)</label>
                                    <input type="number" class="form-control form-control-lg" id="num3" min="1">
                                </div>
                            </div>
                            <div class="row g-3 mb-4">
                                <div class="col-md">
                                    <label for="num4" class="form-label">Number 4 (Optional)</label>
                                    <input type="number" class="form-control form-control-lg" id="num4" min="1">
                                </div>
                                <div class="col-md">
                                    <label for="num5" class="form-label">Number 5 (Optional)</label>
                                    <input type="number" class="form-control form-control-lg" id="num5" min="1">
                                </div>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary btn-lg"><i class="fas fa-calculator me-2"></i>Calculate LCM</button>
                                <button type="reset" id="customReset" class="btn btn-outline-secondary"><i class="fas fa-undo me-2"></i>Reset</button>
                            </div>
                        </form>
                        <div id="result" class="mt-4" style="display: none;">
                            <hr>
                            <h3 class="text-success text-center"><i class="fas fa-check-circle me-2"></i>Result</h3>
                            <div class="alert alert-success">
                                <h4 class="alert-heading">Least Common Multiple (LCM)</h4>
                                <p id="resultText" class="mb-0 fs-3 fw-bold text-center"></p>
                            </div>
                            <div class="alert alert-info">
                                <h4 class="alert-heading">Input Numbers</h4>
                                <p id="inputNumbers" class="mb-0 fs-5 text-center"></p>
                            </div>
                            <div class="card mt-3">
                                <div class="card-header bg-light">
                                    <h4 class="mb-0"><i class="fas fa-list-ol me-2"></i>Calculation Steps</h4>
                                </div>
                                <div class="card-body">
                                    <ol id="calculationSteps" class="mb-0"></ol>
                                    <div id="primeFactorsContainer" class="mt-3">
                                        <h5><i class="fas fa-table me-2"></i>Prime Factorization</h5>
                                        <div id="primeFactors" class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead class="table-light">
                                                    <tr><th>Number</th><th>Prime Factors</th> </tr>
                                                </thead>
                                                <tbody id="primeFactorsBody">
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-muted text-center">
                        <small>LCM is the smallest positive integer that is divisible by each of the numbers.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- Article Content -->
 <div class="article-container">
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div class="d-flex align-items-center">
          <div class=" p-2 "></div>
          <div>{% include narendra.html %}</div>
        </div>
        <div class="text-muted p-3">
          <i class="fas fa-calendar me-1"></i>Last Updated: {{ site.time | date: "%d-%m-%Y" }}
        </div>
      </div>

<!-- Section -->
<section class="mb-5">
 <h2>LCM Calculator - Least Common Multiple</h2>
<p>The Least Common Multiple, or LCM, is the smallest positive number that can be divided evenly by two or more numbers. Its also called the Lowest Common Multiple.</p>
<p>For Example: Find the LCM of 12 and 16.<br>Multiples of 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120 ... <br>Multiples of 16: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160...<br> So the common multiples of 12 and 16 are 48, 96, ..., but the smallest of these is 48. So, LCM(12, 16) = 48. </p>
<strong>Take another example with division method</strong>
 <ol>
  <li>Write the numbers side by side.</li>
  <li>Divide them by a prime number that divides at least one of the numbers.</li>
  <li>Write the quotients below.</li>
  <li>Repeat until no two numbers have a common divisor greater than 1.</li>
  <li>Multiply all the divisors and the final quotients to get the LCM.</li>
</ol>


<h4><strong>Example 3</strong></h4>
<p>Find the LCM of number <strong>20, 30, and 50</strong>.</p>
<p>| 2 | 20, 30, 50 |<br />| 2 | 10, 15, 25 |<br />| 3 | 5, 15, 25 |<br />| 5 | 5, 5, 25 |<br />| 5 | 1, 1, 5 |</p>
<p>Now, multiply the divisors: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>&times;</mo><mn>2</mn><mo>&times;</mo><mn>3</mn><mo>&times;</mo><mn>5</mn><mo>&times;</mo><mn>5</mn><mo>=</mo><mn>300</mn></mrow><annotation encoding="application/x-tex">2 \times 2 \times 3 \times 5 \times 5 = 300</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"></span><span class="mord">2</span><span class="mspace"></span><span class="mbin">&times;</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">2</span><span class="mspace"></span><span class="mbin">&times;</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">3</span><span class="mspace"></span><span class="mbin">&times;</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">5</span><span class="mspace"></span><span class="mbin">&times;</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">5</span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">300</span></span></span></span>.<br />So, <strong>LCM(20, 30, 50) = 300</strong>.</p>

<h3>How it works</h3>
<ol><li>Enter 2, 3, or 4 numbers in the input fields.</li><li>Click the "Calculate LCM" button.</li><li>The LCM and the calculation process will be displayed on the right side.</li></ol>
<h3><strong>Example Calculation</strong></h3>
<p><strong>Input</strong>: Number 1 = 12 , Number 2 = 15, Number 3 = 20</p>
<p><strong>Calculation</strong>: LCM(12, 15) = 60, LCM(60, 20) = 60</p>
<p><strong>Output</strong>:&nbsp;<strong>LCM: 60&nbsp;</strong><strong>Formula: LCM(12, 15, 20) = LCM(12, 15) = 60, LCM(60, 20) = 60</strong></p>
 <p>In the image below, we can see how to calculate the LCM with the division method.</p>
<img src="/assets/images/lcm-calculation.jpg" alt="Example of Lcm Least Common Multiple calculation" fetchpriority="high" loading="auto">

  
<div class="video-container py-4" itemscope itemtype="http://schema.org/VideoObject">
<p>This video explains how to calculate LCM using our free LCM calculator. Watch the steps and try it yourself using the tool below.</p>
<meta itemprop="name" content="Least Common Multiple (LCM) | Mathematics Grade 4 | Periwinkle">
<meta itemprop="description" content="Learn how to find the Least Common Multiple (LCM) in this fun and easy-to-understand video by Periwinkle! Designed for Grade 4 students, this lesson breaks down the concept of LCM using clear examples and engaging visuals to help kids grasp the fundamentals of multiplication and number relationships.">
<meta itemprop="uploadDate" content="2017-11-26">
<meta itemprop="thumbnailUrl" content="https://img.youtube.com/vi/CIkDcENjzBA/hqdefault.jpg">
<iframe width="100%" height="450" src="https://www.youtube.com/embed/CIkDcENjzBA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<script src="{{ '/assets/js/lcm-calc.js' | relative_url }}"></script>