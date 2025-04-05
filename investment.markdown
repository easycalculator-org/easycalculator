---
layout: default
title: Simple Investment Calculator, ROI
permalink: /investment-calculator/
description: "Investment Calculator : How much your investment increases based on your contributions, timeframe, expected returns, check the investment charts and tables."
---
<!-- Article -->
<div class="container mt-5 " >
    <div class="row">
        <!-- Left side: Input form -->
        <div class="col-md-6">
            <div class="shadow-box">
                <h3 class="text-center">Investment Calculator</h3>
                <form id="calculatorForm">
                    <div class="mb-3">
                        <label for="principal" class="form-label">Principal Amount ($)</label>
                        <input type="number" class="form-control" id="principal" required>
                    </div>
                    <div class="mb-3">
                        <label for="rate" class="form-label">Annual Interest Rate (%)</label>
                        <input type="number" class="form-control" id="rate" step="0.1" required>
                    </div>
                    <!-- <div class="mb-3">
                        <label for="years" class="form-label">Number of Years</label>
                        <input type="number" class="form-control" id="years" max="100" required>
                    </div> -->
                    <div class="mb-3"> 
    <label for="years" class="form-label">Number of Years</label>
    <input type="number" class="form-control" id="years" max="100" required>
    <small id="error-message" style="color: red; display: none;">Age cannot be more than 100 years.</small>
</div>
                    <button type="submit" class="btn btn-primary w-100">Calculate</button>
                </form>
                <div class="mt-4">
                    <h5>Future Value:</h5>
                    <p id="result" class="lead text-primary"></p>
                </div>
            </div>
        </div>
 <!-- Right side: Chart -->
 <div  class="col-md-6">
    <div class="shadow-box">
        <h4 class="text-center">Investment Growth Chart</h4>
        <canvas id="investmentChart" width="400" height="300"></canvas>
    </div>
</div>
    </div>

 <!-- Yearly Breakdown -->
            <div id="resultsSection" >
                <div class="shadow-box">
                    <h4>Yearly Breakdown</h4>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Principal Value ($)</th>
                                <th>Growth ($)</th>
                            </tr>
                        </thead>
                        <tbody id="yearlyBreakdown"></tbody>
                    </table>
                </div>
            </div>

</div>


<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/investment.js' | relative_url }}"></script>
    