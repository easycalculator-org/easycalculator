---
layout: default
title: Systematic Withdrawal Plan (SWP) Calculator with Inflation Adjustment
description: "Use our free SWP Calculator with inflation to estimate monthly withdrawals, investment sustainability, and corpus longevity. Plan your retirement with accurate, inflation-adjusted projections."
permalink: /systematic-withdrawal-plan-calculator-with-inflation
image: "/assets/images/systematic-withdrawal-plan.png"
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<style>
 :root{--primary:#4361ee;--secondary:#3a0ca3;--accent:#4cc9f0;--light:#f8f9fa;--dark:#212529;--success:#4bb543;--warning:#ffc107;--danger:#dc3545;--gray:#6c757d}.calculator-container{background:#fff;border-radius:15px;box-shadow:0 10px 30px rgba(0,0,0,.1);overflow:hidden;margin-bottom:30px}.calculator-header{background:linear-gradient(to right,var(--primary),var(--secondary));color:#fff;padding:25px;text-align:center}.calculator-body{padding:30px}.btn-primary,.view-btn{padding:10px 20px;font-weight:600}.input-group-text{background-color:var(--light);border:1px solid #ced4da}.form-control:focus,.form-select:focus{border-color:var(--accent);box-shadow:0 0 0 .25rem rgba(76,201,240,.25)}.btn-primary{background-color:var(--primary);border-color:var(--primary)}.btn-primary:hover{background-color:var(--secondary);border-color:var(--secondary)}.btn-outline-primary:hover,.table thead th,input:checked+.slider{background-color:var(--primary)}.btn-outline-primary{color:var(--primary);border-color:var(--primary)}.btn-outline-primary:hover{border-color:var(--primary);color:#fff}.result-section{display:none;margin-top:30px}.view-buttons{display:flex;justify-content:center;margin-bottom:25px;flex-wrap:wrap;gap:10px}.view-btn{border:2px solid var(--primary);background:#fff;color:var(--primary);border-radius:30px;transition:.3s}.view-btn.active{background:var(--primary);color:#fff}.view-btn:hover:not(.active){background:rgba(67,97,238,.1)}.view-content{display:none;animation:.5s fadeIn}.view-content.active{display:block}@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.summary-card{background:linear-gradient(to right,#f8f9fa,#e9ecef);border-left:4px solid var(--primary);padding:25px;border-radius:10px;margin-bottom:20px}.summary-value{font-size:1.8rem;font-weight:700;color:var(--primary);margin:10px 0}.summary-item{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #dee2e6}.summary-item:last-child{border-bottom:none}.summary-label{font-weight:600;color:var(--gray)}.chart-container{height:400px;margin-bottom:20px}.yearly-table-container{max-height:500px;overflow-y:auto;border:1px solid #dee2e6;border-radius:10px}.table thead th{color:#fff;position:sticky;top:0;z-index:10}.yearly-table tbody tr:hover{background-color:rgba(67,97,238,.05)}.info-icon{color:var(--accent);cursor:pointer;margin-left:5px}.toggle-label{display:flex;align-items:center;cursor:pointer}.toggle-switch{position:relative;display:inline-block;width:50px;height:24px;margin:0 10px}.slider,.slider:before{position:absolute;transition:.4s}.toggle-switch input{opacity:0;width:0;height:0}.slider{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:24px}.slider:before{content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;border-radius:50%}input:checked+.slider:before{transform:translateX(26px)}.result-highlight{font-size:1.2rem;font-weight:700;color:var(--primary);text-align:center;padding:15px;background:rgba(67,97,238,.1);border-radius:10px;margin:20px 0}@media (max-width:768px){.calculator-body{padding:20px}.summary-value{font-size:1.4rem}.chart-container{height:300px}}     
</style>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="calculator-container">
                    <div class="calculator-header">
                        <h1><i class="fas fa-calculator me-2"></i> SWP Calculator</h1>
                        <p class="mb-0">Calculate your Systematic Withdrawal Plan with inflation adjustment</p>
                    </div>
                    <div class="calculator-body">
                        <form id="swpForm">
                            <div class="row mb-4">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="initialInvestment" class="form-label">Initial Investment Amount <i class="fas fa-info-circle info-icon" title="The total amount you plan to invest initially"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                                            <input type="number" class="form-control" id="initialInvestment" value="1000000" min="0" step="1000">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="withdrawalAmount" class="form-label">Monthly Withdrawal Amount <i class="fas fa-info-circle info-icon" title="The amount you want to withdraw each month"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-dollar-sign"></i></span>
                                            <input type="number" class="form-control" id="withdrawalAmount" value="10000" min="0" step="100">
                                        </div>
                                    </div> 
                                    <div class="mb-3">
                                        <label for="expectedReturn" class="form-label">Expected Annual Return (%) <i class="fas fa-info-circle info-icon" title="The expected annual return on your remaining investment"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-percentage"></i></span>
                                            <input type="number" class="form-control" id="expectedReturn" value="8" min="0" step="0.1">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="inflationRate" class="form-label">Expected Annual Inflation Rate (%) <i class="fas fa-info-circle info-icon" title="The expected annual inflation rate for adjusting withdrawals"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-percentage"></i></span>
                                            <input type="number" class="form-control" id="inflationRate" value="6" min="0" step="0.1">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="investmentPeriod" class="form-label">Investment Period (Years) <i class="fas fa-info-circle info-icon" title="The total duration for which you plan to withdraw"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                                            <input type="number" class="form-control" id="investmentPeriod" value="20" min="1" max="50" step="1">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="startDate" class="form-label">Start Date <i class="fas fa-info-circle info-icon" title="The date when you plan to start withdrawals"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-calendar"></i></span>
                                            <input type="text" class="form-control" id="startDate" placeholder="Select start date">
                                        </div>
                                    </div>
                                </div>
                            </div>
 <div class="row mb-4">
     <div class="col-12">
        <div class="form-check form-switch d-flex align-items-center mb-3">
           <input class="form-check-input me-2" type="checkbox" id="adjustForInflation" checked>
            <label class="form-check-label toggle-label" for="adjustForInflation"> Adjust withdrawal for inflation </label>
            </div>
            </div>
           </div>
                            <div class="d-grid gap-2">
                                <button type="button" class="btn btn-primary btn-lg" id="calculateBtn">
                                    <i class="fas fa-calculator me-2"></i>Calculate SWP
                                </button>
                            </div>
                        </form>
                 <div class="result-section" id="resultsSection">
                    <div class="result-highlight">Your SWP will last for <span id="durationYears">0</span> years and <span id="durationMonths">0</span> months</div>
                            <div class="view-buttons">
                                <button class="view-btn active" data-view="summary">Summary</button>
                                <button class="view-btn" data-view="chart">Chart View</button>
                                <button class="view-btn" data-view="yearly">Yearly Breakdown</button>
                            </div>
                            <div class="view-content active" id="summaryView">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="summary-card">
                                            <h4><i class="fas fa-chart-line me-2"></i>Investment Summary</h4>
                                            <div class="summary-item">
                                                <span class="summary-label">Initial Investment:</span>
                                                <span id="summaryInitial">$10,00,000</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Total Withdrawals:</span>
                                                <span id="summaryTotalWithdrawal">$0</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Final Corpus:</span>
                                                <span id="summaryFinalCorpus">$0</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Total Returns Earned:</span>
                                                <span id="summaryTotalReturns">$0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="summary-card">
                                            <h4><i class="fas fa-info-circle me-2"></i>SWP Details</h4>
                                            <div class="summary-item">
                                                <span class="summary-label">Monthly Withdrawal:</span>
                                                <span id="summaryMonthlyWithdrawal">$10,000</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Annual Return Rate:</span>
                                                <span id="summaryReturnRate">8%</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Inflation Rate:</span>
                                                <span id="summaryInflationRate">6%</span>
                                            </div>
                                            <div class="summary-item">
                                                <span class="summary-label">Inflation Adjusted:</span>
                                                <span id="summaryInflationAdjusted">Yes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="summary-card mt-4">
                                    <h4><i class="fas fa-lightbulb me-2"></i>Key Insights</h4>
                                    <div id="keyInsights">
                                        <!-- Insights will be populated here -->
                                    </div>
                                </div>
                            </div>
                            <div class="view-content" id="chartView">
                                <div class="chart-container">
                                    <canvas id="swpChart"></canvas>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-6">
                                        <div class="summary-card">
                                            <h5><i class="fas fa-chart-pie me-2"></i>Chart Legend</h5>
                                            <div class="d-flex align-items-center mb-2">
                                                <div style="width: 20px; height: 10px; background-color: #4361ee; margin-right: 10px;"></div>
                                                <span>Investment Balance</span>
                                            </div>
                                            <div class="d-flex align-items-center mb-2">
                                                <div style="width: 20px; height: 10px; background-color: #4cc9f0; margin-right: 10px;"></div>
                                                <span>Monthly Withdrawal</span>
                                            </div>
                                            <div class="d-flex align-items-center">
                                                <div style="width: 20px; height: 10px; background-color: #3a0ca3; margin-right: 10px;"></div>
                                                <span>Cumulative Withdrawals</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="summary-card">
                                            <h5><i class="fas fa-download me-2"></i>Chart Options</h5>
                                            <button class="btn btn-outline-primary btn-sm me-2" id="exportChart">
                                                <i class="fas fa-image me-1"></i>Export as Image
                                            </button>
                                            <button class="btn btn-outline-primary btn-sm" id="toggleLogScale">
                                                <i class="fas fa-chart-bar me-1"></i>Toggle Log Scale
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="view-content" id="yearlyView">
                                <div class="yearly-table-container">
                                    <table class="table table-striped yearly-table">
                                        <thead>
                                            <tr>
                                                <th>Year</th>
                                                <th>Beginning Balance</th>
                                                <th>Annual Withdrawal</th>
                                                <th>Annual Returns</th>
                                                <th>Ending Balance</th>
                                                <th>Withdrawal Growth</th>
                                            </tr>
                                        </thead>
                                        <tbody id="yearlyTableBody">
                                            <!-- Yearly data will be populated here -->
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-between mt-3">
                                    <div>
                                        <button class="btn btn-outline-primary btn-sm" id="exportTable">
                                            <i class="fas fa-file-csv me-1"></i>Export as CSV
                                        </button>
                                    </div>
                                    <div>
                                        <span class="text-muted" id="tableInfo">Showing 0 years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="{{ '/assets/js/swp-calc.js' | relative_url }}"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>