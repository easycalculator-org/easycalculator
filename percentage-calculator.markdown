---
layout: default
title: Percentage Calculator | Percentage Formula
permalink: /percentage-calculator
description: "Use our free online percentage calculator to simplify your math! Learn the step-by-step process for quick and easy percentage formula and calculations."
image: "/assets/images/percentage-calculation-example.jpg"
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
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>


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
<div class="p-4"><img src="/assets/images/percentage-calculation-example.jpg"  alt="Percentage calculation example explaining part, whole, fraction, and percentage"  width="70%"  loading="lazy"> </div>
<h3>How to calculate percentage of a number</h3>
<p> A percentage calculator is super user-friendly! Here how to use it step by step:</p>
 <p> Pick Your Calculation Type: There are three boxes on the calculator. You can select either percentage, part, or whole.<br>
  1. Input Values: Enter the known values for the Part, Whole, or Percentage.<br>
  2. Click Calculate: The percentage calculator automatically applies the appropriate formula.<br>
  3. View Result: The final result is displayed, showing the percentage, part, or whole as required.</p>


<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ on Age Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is a percentage?</div>
            <p class="mb-0">A percentage is a way of expressing a number as a part of 100. It shows how much something is out of a total and is represented using the % symbol.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. How do you calculate a percentage?</div>
            <p class="mb-0">To calculate a percentage, divide the part by the whole and multiply the result by 100. <br> <strong>Formula: (Part ÷ Whole) × 100</strong></p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. How do I calculate the percentage of a number? </div>
            <p class="mb-0"> Multiply the number by the percentage and divide by 100. For example, 20% of 200 equals (20 × 200) ÷ 100 = 40.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 4. How do I find the original number from a percentage?</div>
            <p class="mb-0">To find the whole value, divide the part by the percentage and multiply by 100.<br> <strong>Formula: (Part × 100) ÷ Percentage</strong></p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 5. Can percentages be greater than 100?</div>
            <p class="mb-0">Yes, percentages can be more than 100% when the part value is greater than the whole, such as profit growth or increased measurements.</p>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->
</div>

</div>
<script src="{{ '/assets/js/percentage-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a percentage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A percentage is a way of expressing a number as a part of 100. It shows how much something is out of a total and is represented using the % symbol."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate a percentage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate a percentage, divide the part by the whole and multiply the result by 100. Formula: (Part ÷ Whole) × 100."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate the percentage of a number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiply the number by the percentage and divide by 100. For example, 20% of 200 equals 40."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find the original number from a percentage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To find the original number, divide the part by the percentage and multiply by 100. Formula: (Part × 100) ÷ Percentage."
      }
    },
    {
      "@type": "Question",
      "name": "What are percentages used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Percentages are used in exams, shopping discounts, finance, interest calculations, statistics, and data comparison."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I use a percentage calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A percentage calculator provides quick, accurate results, saves time, and helps avoid calculation errors."
      }
    },
    {
      "@type": "Question",
      "name": "Can percentages be greater than 100?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, percentages can exceed 100% when the part value is greater than the whole, such as growth or profit increases."
      }
    }
  ]
}
</script>

