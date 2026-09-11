---
layout: default
title: "Fraction to Percentage Calculator"
permalink: /fraction-to-percentage
description: "Use our free Fraction to Percentage Calculator to convert any fraction into a percentage instantly. Enter a numerator and denominator to get the percentage with the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---
<!-- ==== -->
<div class="py-4">
<div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><h1 class="h3 fw-bold mb-2">Fraction to Percent Calculator </h1><p class="text-muted mb-4">Convert a fraction into a percentage instantly. Enter a numerator and denominator, or use a mixed number. </p><div class="mb-4"><label class="form-label fw-semibold">Fraction Type </label><div class="d-flex flex-wrap gap-2"><div class="form-check"><input class="form-check-input" type="radio" name="fractionType" id="properImproper" value="fraction" checked><label class="form-check-label" for="properImproper">Fraction </label></div><div class="form-check"><input class="form-check-input" type="radio" name="fractionType" id="mixedNumber" value="mixed"><label class="form-check-label" for="mixedNumber">Mixed Number </label></div></div></div><div id="fractionInputs"><div class="row g-3 align-items-end"><div class="col-md-5"><label for="numerator" class="form-label fw-semibold">Numerator </label><input type="number" id="numerator" class="form-control form-control-lg" placeholder="Example: 3" step="any"></div><div class="col-md-2 text-center d-none d-md-block"><div class="fs-2 fw-bold text-muted">÷ </div></div><div class="col-md-5"><label for="denominator" class="form-label fw-semibold">Denominator </label><input type="number" id="denominator" class="form-control form-control-lg" placeholder="Example: 4" step="any"></div></div></div><div id="mixedInputs" class="d-none"><div class="row g-3"><div class="col-md-4"><label for="wholeNumber" class="form-label fw-semibold">Whole Number </label><input type="number" id="wholeNumber" class="form-control form-control-lg" placeholder="Example: 2" min="0" step="1"></div><div class="col-md-4"><label for="mixedNumerator" class="form-label fw-semibold">Numerator </label><input type="number" id="mixedNumerator" class="form-control form-control-lg" placeholder="Example: 1" min="0" step="any"></div><div class="col-md-4"><label for="mixedDenominator" class="form-label fw-semibold">Denominator </label><input type="number" id="mixedDenominator" class="form-control form-control-lg" placeholder="Example: 2" min="1" step="any"></div></div></div><div class="d-flex flex-wrap gap-2 mt-4"><button type="button" id="calculateFractionBtn" class="btn btn-primary btn-lg px-4">Calculate Percentage </button><button type="button" id="resetFractionBtn" class="btn btn-outline-secondary btn-lg px-4">Reset </button></div><div id="fractionError" class="alert alert-danger mt-4 d-none" role="alert"></div></div>
</div>
<!--  RESULT -->
<div id="fractionResult" class="d-none"><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4"><div><h2 class="h4 fw-bold mb-1">Conversion Result </h2><p class="text-muted mb-0">Your fraction converted to a percentage </p></div><button type="button" id="downloadFractionPdf" class="btn btn-outline-primary">↓ Download PDF </button></div><div class="alert alert-success rounded-4 text-center mb-4"><div class="small text-muted mb-1">Percentage </div><div id="percentageValue" class="display-4 fw-bold">0% </div></div><div class="row g-3 mb-4"><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Fraction </small><div id="resultFraction" class="h4 fw-bold mb-0">0/1 </div></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Decimal </small><div id="resultDecimal" class="h4 fw-bold mb-0">0 </div></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Percentage </small><div id="resultPercentage" class="h4 fw-bold text-primary mb-0">0% </div></div></div></div><div class="border rounded-4 p-4"><h3 class="h5 fw-bold mb-3">Calculation </h3><div id="calculationSteps" class="fs-5"></div></div></div></div><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><h2 class="h5 fw-bold mb-3">Fraction to Percent Formula </h2><div class="bg-light border rounded-3 p-3 text-center"><div class="fs-5 fw-semibold">Percentage=<span class="text-primary">(Numerator ÷ Denominator) × 100 </span></div></div><p id="formulaExample" class="mt-3 mb-0"></p></div></div></div>

  <!-- ============================================
       ARTICLE
  ============================================= -->
<!-- 
  <div class="article-container">

    <h2 class="h4 fw-bold mb-3">
      What Is a Fraction to Percent Calculator?
    </h2>

    <p>
      A fraction to percent calculator converts a fraction into a percentage.
      It is useful for students, teachers, homework, exams, and everyday
      calculations.
    </p>

    <p>
      A fraction has two parts: the <strong>numerator</strong> on top and
      the <strong>denominator</strong> on the bottom. To convert the fraction
      to a percentage, divide the numerator by the denominator and multiply
      the result by 100.
    </p>


    <h2 class="h4 fw-bold mt-4 mb-3">
      How to Convert a Fraction to a Percentage
    </h2>

    <p>
      Use this simple formula:
    </p>

    <div class="bg-light border rounded-3 p-3 text-center mb-3">

      <strong class="fs-5">
        Percentage = (Numerator ÷ Denominator) × 100
      </strong>

    </div>


    <h3 class="h5 fw-bold mt-4">
      Example: 3/4 as a Percentage
    </h3>

    <p>
      Suppose you want to convert <strong>3/4</strong> into a percentage.
    </p>

    <div class="bg-light border rounded-3 p-3">

      <div>3 ÷ 4 = 0.75</div>

      <div>0.75 × 100 = 75%</div>

      <div class="fw-bold text-success mt-1">
        3/4 = 75%
      </div>

    </div>


    <h2 class="h4 fw-bold mt-4 mb-3">
      Fraction to Percent Examples
    </h2>

    <div class="table-responsive">

      <table class="table table-bordered align-middle">

        <thead class="table-light">

          <tr>
            <th>Fraction</th>
            <th>Decimal</th>
            <th>Percentage</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>1/2</td>
            <td>0.5</td>
            <td>50%</td>
          </tr>

          <tr>
            <td>1/4</td>
            <td>0.25</td>
            <td>25%</td>
          </tr>

          <tr>
            <td>3/4</td>
            <td>0.75</td>
            <td>75%</td>
          </tr>

          <tr>
            <td>1/5</td>
            <td>0.2</td>
            <td>20%</td>
          </tr>

          <tr>
            <td>2/5</td>
            <td>0.4</td>
            <td>40%</td>
          </tr>

          <tr>
            <td>3/5</td>
            <td>0.6</td>
            <td>60%</td>
          </tr>

        </tbody>

      </table>

    </div>


    <h2 class="h4 fw-bold mt-4 mb-3">
      How to Use This Calculator
    </h2>

    <ol>

      <li>
        Select <strong>Fraction</strong> or
        <strong>Mixed Number</strong>.
      </li>

      <li>
        Enter the numerator and denominator.
      </li>

      <li>
        Click <strong>Calculate Percentage</strong>.
      </li>

      <li>
        The calculator shows the decimal and percentage.
      </li>

      <li>
        Use <strong>Download PDF</strong> if you want to save the result.
      </li>

    </ol>


    <h2 class="h4 fw-bold mt-4 mb-3">
      Can an Improper Fraction Be Converted to a Percentage?
    </h2>

    <p>
      Yes. An improper fraction has a numerator that is greater than its
      denominator. For example, <strong>5/4</strong> is an improper fraction.
    </p>

    <p>
      Divide 5 by 4 and multiply by 100:
    </p>

    <div class="bg-light border rounded-3 p-3">

      <div>5 ÷ 4 = 1.25</div>

      <div>1.25 × 100 = 125%</div>

      <div class="fw-bold text-success mt-1">
        5/4 = 125%
      </div>

    </div>

  </div>

</div> -->



<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="{{ '/assets/js/percentage/fraction-to-percentage-calc.js' | relative_url }}"></script>