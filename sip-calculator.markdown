---
layout: default
title: SIP Calculator – Calculate Your Mutual Fund Returns Easily
permalink: /sip-calculator
description: "Use our SIP calculator to estimate your mutual fund returns with ease. Plan your monthly investments, visualize wealth growth, and achieve your financial goals smartly."
#image: "/assets/images/age-calc-open-graph.png"
---
 <style>
        .form-range::-webkit-slider-thumb {
            background: #0d6efd;
        }
        .form-range::-moz-range-thumb {
            background: #0d6efd;
        }
        .card-header {
            border-radius: 0.375rem 0.375rem 0 0 !important;
        }
        .input-group-text {
            min-width: 40px;
            justify-content: center;
        }
        .table-hover tbody tr:hover {
            background-color: rgba(13, 110, 253, 0.1);
        }
    </style>
<div class="row justify-content-center">
 <div class="col-lg-9">
   <div class="card shadow-lg border-0">
     <div class="card-header bg-primary text-white py-3">
       <h2 class="text-center mb-0">Systematic Investment Plan (SIP) Calculator</h2>
     </div>
     <div class="card-body">
        <div class="row g-4">
         <div class="col-md-6">

<div class="mb-4">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <label for="monthlyInvestment" class="form-label mb-0"><i class="fas fa-wallet text-primary me-2"></i>Monthly Investment</label>
    <input type="number" class="form-control bg-primary-subtle ms-3" style="max-width: 150px;" id="monthlyInvestment" value="10000">
  </div>
  <input type="range" class="form-range" min="500" max="100000" step="500" id="monthlyInvestmentRange" value="10000">
</div>

<div class="mb-4">
  <div class="d-flex justify-content-between align-items-center mb-2">
     <label for="investmentPeriod" class="form-label"><i class="far fa-calendar-alt text-primary me-2"></i>Investment Period (Years) </label>
     <input type="number" class="form-control bg-primary-subtle" id="investmentPeriod" value="10" style="max-width: 150px;">
   </div>  
      <input type="range" class="form-range mb-2" min="1" max="40" id="investmentPeriodRange" value="10">
   </div> 

                
  <div class="mb-4">
   <div class="d-flex justify-content-between align-items-center mb-2">
      <label for="expectedReturn" class="form-label"><i class="fas fa-chart-line text-primary me-2"></i>Expected Return Rate (%) </label>
      <input type="number" class="form-control bg-primary-subtle" id="expectedReturn" value="12" step="0.1" style="max-width: 150px;">
     </div>
        <input type="range" class="form-range mb-2" min="1" max="30" step="0.1" id="expectedReturnRange" value="12">
  </div>


 <div class="mb-4">
  <div class="d-flex justify-content-between align-items-center mb-2">
    <label for="inflationRate" class="form-label">  <i class="fas fa-money-bill-trend-up text-primary me-2"></i>Inflation Rate (%)  </label>
 <input type="number" class="form-control bg-primary-subtle" id="inflationRate" value="6" step="0.1" style="max-width: 150px;">
 </div> 
    <input type="range" class="form-range mb-2" min="0" max="15" step="0.1" id="inflationRateRange" value="6" >
               </div>
                               
              <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="stepUpSIP" checked>
                                    <label class="form-check-label" for="stepUpSIP"> <i class="fas fa-step-forward text-primary me-2"></i>Annual Step-up SIP </label>
                                </div>
  <div class="mb-3" id="stepUpContainer">
                                    <label for="stepUpPercentage" class="form-label"> <i class="fas fa-arrow-up text-primary me-2"></i>Increase by (%) </label>
                                    <div class="input-group">
                                        <span class="input-group-text"><i class="fas fa-percent"></i></span>
                                        <input type="number" class="form-control" id="stepUpPercentage" value="10" min="0" max="100">
                                    </div>
                                </div>
                            </div>
     <div class="col-md-6">
      <div class="results-card p-4 bg-white rounded border">
         <h5 class="text-center mb-4 text-primary">  <i class="fas fa-chart-pie me-2"></i>Projected Returns </h5>
           <div class="d-flex justify-content-between mb-3">
              <span><i class="fas fa-money-bill-wave me-2 text-success"></i>Invested Amount:</span><strong id="investedAmount" class="text-success">0</strong>
            </div>
          <div class="d-flex justify-content-between mb-3"><span><i class="fas fa-coins me-2 text-warning"></i>Est. Returns:</span> <strong id="estimatedReturns" class="text-warning">₹0</strong> </div>
                                    <div class="d-flex justify-content-between mb-3">
                                        <span><i class="fas fa-piggy-bank me-2 text-primary"></i>Total Value:</span><strong id="totalValue" class="text-primary">₹0</strong>
                                    </div>
                                    <div class="d-flex justify-content-between mb-3">
                                        <span><i class="fas fa-inflation me-2 text-info"></i>Inflation Adjusted:</span><strong id="inflationAdjustedValue" class="text-info">₹0</strong>
                                    </div>
                                    <hr>
                                    <div class="chart-container" style="position: relative; height:200px;"><canvas id="sipChart"></canvas></div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12">
                                <div class="accordion" id="sipDetails">
                                    <div class="accordion-item border-0 shadow-sm">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#yearlyBreakdown">
                                                <i class="fas fa-table me-2"></i>Yearly Investment Breakdown
                                            </button>
                                        </h2>
                                        <div id="yearlyBreakdown" class="accordion-collapse collapse" data-bs-parent="#sipDetails">
                                            <div class="accordion-body p-0">
                                                <div class="table-responsive">
                                                    <table class="table table-hover mb-0">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th><i class="far fa-calendar me-1"></i>Year</th>
                                                                <th><i class="fas fa-investment me-1"></i>Yearly Investment</th>
                                                                <th><i class="fas fa-investment me-1"></i>Cumulative Investment</th>
                                                                <th><i class="fas fa-chart-bar me-1"></i>Year End Value</th>
                                                                <th><i class="fas fa-adjust me-1"></i>Inflation Adj. Value</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="yearlyTableBody">
                                                            <!-- Yearly data will be inserted here -->
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-center bg-light py-3">
                        <button class="btn btn-primary btn-lg px-4 me-3" onclick="calculateSIP()">  <i class="fas fa-calculator me-2"></i>Calculate</button>
                        <button class="btn btn-outline-secondary btn-lg px-4" onclick="resetCalculator()"> <i class="fas fa-redo me-2"></i>Reset </button>
                    </div>
                </div>
            </div>
        </div>


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/sip-calc.js' | relative_url }}"></script>


