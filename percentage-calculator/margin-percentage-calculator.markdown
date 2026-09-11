---
layout: default
title: "Margin Percentage Calculator"
permalink: /margin-percentage-calculator
description: "Use our free Margin Percentage Calculator to calculate profit margin and margin percentage from cost and selling price. Get instant results with the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---


<div class="py-4">
<div class="card border-0 shadow-sm rounded-4 mb-4">
<div class="card-body p-4">
<h1 class="h3 fw-bold mb-2">Margin Percentage Calculator </h1>
<p class="text-muted mb-4">Calculate profit margin, profit, markup, and selling price using your cost and selling price. </p>
<div class="mb-4"><label class="form-label fw-semibold">Calculate </label><div class="d-flex flex-column gap-2"><div class="form-check"><input class="form-check-input" type="radio" name="marginMode" id="modeMargin" value="margin" checked><label class="form-check-label" for="modeMargin">Profit Margin from Cost and Selling Price </label></div><div class="form-check"><input class="form-check-input" type="radio" name="marginMode" id="modeSelling" value="selling"><label class="form-check-label" for="modeSelling">Selling Price from Cost and Desired Margin % </label></div></div></div><div id="marginModeInputs"><div class="row g-3"><div class="col-md-6"><label for="costPrice" class="form-label fw-semibold">Cost Price </label><input type="number" id="costPrice" class="form-control form-control-lg" placeholder="Example: 80" min="0" step="any"><small class="text-muted">The amount paid to purchase or produce the product. </small></div><div class="col-md-6"><label for="sellingPrice" class="form-label fw-semibold">Selling Price </label><input type="number" id="sellingPrice" class="form-control form-control-lg" placeholder="Example: 100" min="0" step="any"><small class="text-muted">The amount received when the product is sold. </small></div></div></div><div id="sellingModeInputs" class="d-none"><div class="row g-3"><div class="col-md-6"><label for="costPriceSelling" class="form-label fw-semibold">Cost Price </label><input type="number" id="costPriceSelling" class="form-control form-control-lg" placeholder="Example: 80" min="0" step="any"><small class="text-muted">Enter the cost of the product. </small></div><div class="col-md-6"><label for="desiredMargin" class="form-label fw-semibold">Desired Profit Margin </label><div class="input-group input-group-lg"><input type="number" id="desiredMargin" class="form-control" placeholder="Example: 20" min="0" max="99.999999" step="any"><span class="input-group-text">%</span></div><small class="text-muted">Enter the desired margin as a percentage of the selling price. </small></div></div></div><div class="d-flex flex-wrap gap-2 mt-4"><button type="button" id="calculateMarginBtn" class="btn btn-primary btn-lg px-4">Calculate Margin </button><button type="button" id="resetMarginBtn" class="btn btn-outline-secondary btn-lg px-4">Reset </button></div><div id="marginError" class="alert alert-danger mt-4 d-none" role="alert"></div></div></div><div id="marginResult" class="d-none"><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4"><div><h2 class="h4 fw-bold mb-1">Margin Result </h2><p class="text-muted mb-0">Your profit margin and pricing results </p></div><button type="button" id="downloadMarginPdf" class="btn btn-outline-primary">↓ Download PDF </button></div><div class="alert alert-success rounded-4 text-center mb-4"><div class="small text-muted mb-1">Profit Margin </div><div id="mainMarginValue" class="display-4 fw-bold">0% </div></div><div class="row g-3 mb-4"><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Cost Price </small><div id="resultCost" class="h5 fw-bold mb-0">0 </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Selling Price </small><div id="resultSelling" class="h5 fw-bold mb-0">0 </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Profit / Loss </small><div id="resultProfit" class="h5 fw-bold mb-0">0 </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Markup </small><div id="resultMarkup" class="h5 fw-bold mb-0">0% </div></div></div></div><div class="table-responsive"><table class="table table-bordered align-middle mb-0"><tbody><tr><th>Cost Price</th><td id="tableCost">0</td></tr><tr><th>Selling Price</th><td id="tableSelling">0</td></tr><tr><th>Profit / Loss</th><td id="tableProfit">0</td></tr><tr><th>Profit Margin</th><td id="tableMargin">0%</td></tr><tr><th>Markup</th><td id="tableMarkup">0%</td></tr></tbody></table></div><div class="border rounded-4 p-4 mt-4"><h3 class="h5 fw-bold mb-3">Calculation </h3><div id="marginCalculation" class="fs-5"></div></div><div id="marginMessage" class="alert alert-success mt-4 mb-0"></div></div></div><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><h2 class="h5 fw-bold mb-3">Margin Percentage Formula </h2><div class="bg-light border rounded-3 p-3"><div class="fs-5 mb-3"><strong>Profit</strong>=Selling Price − Cost Price </div><div class="fs-5"><strong>Profit Margin</strong>=(Profit ÷ Selling Price) × 100 </div></div><p class="text-muted mt-3 mb-0">Profit margin is always expressed as a percentage of the selling price. </p></div>
</div>
</div>



  <!-- ============================================
       ARTICLE
  ============================================= -->
<!-- 
  <div class="article-container">

    <h2 class="h4 fw-bold mb-3">
      What Is a Margin Percentage?
    </h2>

    <p>
      Profit margin shows how much of your selling price is profit.
      It is expressed as a percentage of the selling price.
    </p>

    <p>
      For example, if a product costs <strong>80</strong> and is sold for
      <strong>100</strong>, the profit is <strong>20</strong>.
    </p>

    <p>
      The profit margin is:
    </p>

    <div class="bg-light border rounded-3 p-3 text-center">

      <strong class="fs-5">
        (20 ÷ 100) × 100 = 20%
      </strong>

    </div>


    <h2 class="h4 fw-bold mt-4 mb-3">
      Profit Margin Formula
    </h2>

    <div class="bg-light border rounded-3 p-3">

      <div class="fs-5">
        Profit = Selling Price − Cost Price
      </div>

      <div class="fs-5 mt-2">
        Profit Margin =
        (Profit ÷ Selling Price) × 100
      </div>

    </div>


    <h2 class="h4 fw-bold mt-4 mb-3">
      Margin vs. Markup
    </h2>

    <p>
      Margin and markup are different percentages. Margin is based on the
      selling price, while markup is based on the cost price.
    </p>

    <div class="table-responsive">

      <table class="table table-bordered align-middle">

        <thead class="table-light">

          <tr>
            <th>Calculation</th>
            <th>Formula</th>
            <th>Percentage Based On</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td><strong>Profit Margin</strong></td>
            <td>(Profit ÷ Selling Price) × 100</td>
            <td>Selling Price</td>
          </tr>

          <tr>
            <td><strong>Markup</strong></td>
            <td>(Profit ÷ Cost Price) × 100</td>
            <td>Cost Price</td>
          </tr>

        </tbody>

      </table>

    </div>


    <h2 class="h4 fw-bold mt-4 mb-3">
      Example of Profit Margin
    </h2>

    <p>
      Suppose a product costs <strong>80</strong> and sells for
      <strong>100</strong>.
    </p>

    <ul>

      <li>
        Profit = 100 − 80 = <strong>20</strong>
      </li>

      <li>
        Profit Margin = (20 ÷ 100) × 100 =
        <strong>20%</strong>
      </li>

      <li>
        Markup = (20 ÷ 80) × 100 =
        <strong>25%</strong>
      </li>

    </ul>


    <h2 class="h4 fw-bold mt-4 mb-3">
      How to Use This Calculator
    </h2>

    <ol>

      <li>
        Choose <strong>Profit Margin from Cost and Selling Price</strong>
        to calculate an existing margin.
      </li>

      <li>
        Enter the cost price and selling price.
      </li>

      <li>
        Click <strong>Calculate Margin</strong>.
      </li>

      <li>
        To find a selling price for a target margin, choose
        <strong>Selling Price from Cost and Desired Margin %</strong>.
      </li>

      <li>
        Enter your cost and desired margin percentage.
      </li>

      <li>
        Click <strong>Calculate Selling Price</strong>.
      </li>

      <li>
        Download the calculation as a PDF if needed.
      </li>

    </ol>

  </div>

</div> -->


<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="{{ '/assets/js/percentage/margin-percentage-calc.js' | relative_url }}"></script>