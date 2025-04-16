---
layout: default
title: LCM Calculator | Least Common Multiple Calculator
permalink: /lcm-calculator
description: "Use our free LCM calculator to quickly find the least common multiple of up to 4 numbers. It's easy, fast, and perfect for your math needs!"
---


<div class="container">
    <h1 class="text-center">LCM Calculator</h1>
    <div class="row">
        <!-- Input Section -->
        <div class="col-md-6 shadow-lg py-4 mb-5 bg-body-tertiary rounded">
            <h4 class="text-center"> Enter numbers up to 4 Numbers </h4>
            <form id="lcmForm">
                <div class="mb-3">
                    <input type="number" class="form-control" id="number1" required placeholder="Enter Number 1">
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="number2" required placeholder="Enter Number 2">
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="number3" placeholder="Enter Number 3 (Optional)">
                </div>
                <div class="mb-3">
                    <input type="number" class="form-control" id="number4" placeholder="Enter Number 3 (Optional)">
                </div>
                <button type="button" class="btn btn-primary" onclick="calculateLCM()">Calculate LCM</button>
            </form>
        </div>

        <!-- Output Section -->
        <div class="col-md-6">
            <h4>LCM Result</h4>
            <div class="alert alert-info" id="lcmResult" role="alert">
                Enter numbers and click "Calculate LCM" to see the result here.
            </div>
            <h4>Calculation Details</h4>
            <div class="alert alert-secondary" id="lcmDetails" role="alert">
                Calculation details will be displayed here.
            </div>
        </div>
    </div>
<h2>LCM Calculator - Least Common Multiple</h2>
<p>The Least Common Multiple, or LCM, is the smallest positive number that can be divided evenly by two or more numbers. Its also called the Lowest Common Multiple.</p>
<p>For Example: Find the LCM of 12 and 16.<br>Multiples of 12: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120 ... <br>Multiples of 16: 16, 32, 48, 64, 80, 96, 112, 128, 144, 160...<br> So the common multiples of 12 and 16 are 48, 96, ..., but the smallest of these is 48. So, LCM(12, 16) = 48. </p>
    <strong> <p>Take another example with division method</p></strong>
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
    <ol>
    <li>Enter 2, 3, or 4 numbers in the input fields.</li>
    <li>Click the "Calculate LCM" button.</li>
    <li>The LCM and the calculation process will be displayed on the right side.</li>
    </ol>
    <h3><strong>Example Calculation</strong></h3>
    <p><strong>Input</strong>: Number 1 = 12 , Number 2 = 15, Number 3 = 20</p>
    <p><strong>Calculation</strong>: LCM(12, 15) = 60, LCM(60, 20) = 60</p>
    <p><strong>Output</strong>:&nbsp;<strong>LCM: 60&nbsp;</strong><strong>Formula: LCM(12, 15, 20) = LCM(12, 15) = 60, LCM(60, 20) = 60</strong></p>

 <p>In the image below, we can see how to calculate the LCM with the division method.</p>
    <img src="/assets/images/lcm-calculation.jpg" alt="Example of Lcm Least Common Multiple calculation" fetchpriority="high" loading="auto">
</div>
<script src="{{ '/assets/js/lcm-calc.js' | relative_url }}"></script>