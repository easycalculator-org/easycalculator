---
layout: default
title: Mortgage Calculator USA – Estimate Your Monthly Home Loan Payments with Taxes & Insurance
permalink: /mortgage-calculator
description: "Use our free online Mortgage Calculator to quickly estimate your monthly home loan payments. Includes principal, interest, taxes, insurance, and amortization chart. Fast, accurate, and easy to use!"
---
<style>
        .input-error {
            border-color: #dc3545 !important;
        }
        .error-message {
            color: #dc3545;
            font-size: 0.875em;
            display: none;
        }
        .progress-bar.loan-amount {
            background-color: #0d6efd;
        }
        .progress-bar.down-payment {
            background-color: #198754;
        }
        .chart-container {
            position: relative;
            height: 300px;
        }
        .form-range::-webkit-slider-thumb {
            background: #0d6efd;
        }
        .form-range::-moz-range-thumb {
            background: #0d6efd;
        }
        .form-range::-ms-thumb {
            background: #0d6efd;
        }
        .loan-term-value {
            font-weight: bold;
            color: #0d6efd;
            font-size: 1.1rem;
        }
    </style>
 <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card border-0 shadow-lg">
                    <div class="card-header bg-primary text-white py-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h2 class="mb-0"><i class="fas fa-home me-2"></i>USA Mortgage Calculator</h2>
                                <p class="mb-0">Estimate your monthly home payment</p>
                            </div>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png" alt="USA Flag" style="height: 40px;">
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <form id="mortgageForm" novalidate>
                            <div class="row g-4">
                                <!-- Left Column -->
                                <div class="col-md-6">
                                    <div class="bg-white p-3 rounded border">
                                        <h5 class="text-primary mb-3"><i class="fas fa-dollar-sign me-2"></i>Home Details</h5>
                                        <div class="mb-3">
                                            <label for="homePrice" class="form-label">Home Price ($)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-home"></i></span>
                                                <input type="text" class="form-control" id="homePrice" placeholder="300,000" required>
                                            </div>
                                            <div class="error-message" id="homePriceError">Please enter a valid home price ($50,000 minimum)</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="downPayment" class="form-label">Down Payment</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-hand-holding-usd"></i></span>
                                                <input type="text" class="form-control" id="downPayment" placeholder="60,000" required>
                                                <select class="form-select" id="downPaymentType" style="max-width: 100px;">
                                                    <option value="$">$</option>
                                                    <option value="%">%</option>
                                                </select>
                                            </div>
                                            <div class="error-message" id="downPaymentError">Down payment must be at least 3% of home price</div>
                                            <div class="form-text">Minimum 3.5% for FHA, 3% for conventional</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="loanTermRange" class="form-label">Loan Term: <span class="loan-term-value" id="loanTermValue">30</span> years</label>
                                            <input type="range" class="form-range" min="5" max="30" step="1" id="loanTermRange" value="30">
                                            <div class="d-flex justify-content-between">
                                                <small>5 years</small>
                                                <small>10</small>
                                                <small>15</small>
                                                <small>20</small>
                                                <small>25</small>
                                                <small>30 years</small>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="interestRate" class="form-label">Interest Rate (%)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-percent"></i></span>
                                                <input type="number" step="0.01" min="0.1" max="20" class="form-control" id="interestRate" placeholder="7.25" required>
                                            </div>
                                            <div class="error-message" id="interestRateError">Please enter a rate between 0.1% and 20%</div>
                                            <div class="form-text">Current average: 7.25% (June 2024)</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Right Column -->
                                <div class="col-md-6">
                                    <div class="bg-white p-3 rounded border">
                                        <h5 class="text-primary mb-3"><i class="fas fa-calculator me-2"></i>Additional Costs</h5>
                                        <div class="mb-3">
                                            <label for="propertyTax" class="form-label">Annual Property Tax ($)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-landmark"></i></span>
                                                <input type="text" class="form-control" id="propertyTax" placeholder="3,600" value="3,600">
                                            </div>
                                            <div class="error-message" id="propertyTaxError">Must be 0 or positive value</div>
                                            <div class="form-text">US average: 1.1% of home value</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="homeInsurance" class="form-label">Home Insurance ($/year)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-shield-alt"></i></span>
                                                <input type="text" class="form-control" id="homeInsurance" placeholder="1,200" value="1,200">
                                            </div>
                                            <div class="error-message" id="homeInsuranceError">Must be 0 or positive value</div>
                                            <div class="form-text">US average: $1,200/year</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="pmi" class="form-label">PMI (% of loan)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-file-invoice-dollar"></i></span>
                                                <input type="number" step="0.01" min="0" max="2" class="form-control" id="pmi" placeholder="0.5" value="0.5">
                                            </div>
                                            <div class="error-message" id="pmiError">Must be between 0% and 2%</div>
                                            <div class="form-text">Required if down payment < 20%</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="hoaFees" class="form-label">HOA Fees ($/month)</label>
                                            <div class="input-group">
                                                <span class="input-group-text"><i class="fas fa-swimming-pool"></i></span>
                                                <input type="text" class="form-control" id="hoaFees" placeholder="100" value="0">
                                            </div>
                                            <div class="error-message" id="hoaFeesError">Must be 0 or positive value</div>
                                            <div class="form-text">Common in condos and planned communities</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center mt-4 gap-3">
                                <button type="reset" class="btn btn-outline-secondary px-4">
                                    <i class="fas fa-redo me-2"></i>Reset
                                </button>
                                <button type="submit" class="btn btn-primary px-4">
                                    <i class="fas fa-calculator me-2"></i>Calculate Payment
                                </button>
                            </div>
                        </form>
                        <div id="results" class="mt-5 d-none">
                            <div class="bg-white p-4 rounded border">
                                <h3 class="text-center text-primary mb-4">
                                    <i class="fas fa-file-invoice-dollar me-2"></i>Your Mortgage Breakdown
                                </h3>
                                <div class="row">
                                    <!-- Left Results -->
                                    <div class="col-md-6">
                                        <div class="p-3">
                                            <div class="d-flex justify-content-between align-items-center mb-3">
                                                <h5 class="mb-0">Loan Details</h5>
                                                <span class="badge bg-primary rounded-pill">LTV: <span id="ltv">0</span>%</span>
                                            </div>
                                            <div class="mb-3">
                                                <div class="d-flex justify-content-between">
                                                    <span>Home Price:</span>
                                                    <strong>$<span id="displayHomePrice">0</span></strong>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <span>Down Payment:</span>
                                                    <strong>$<span id="downPaymentResult">0</span></strong>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <span>Loan Amount:</span>
                                                    <strong>$<span id="loanAmount">0</span></strong>
                                                </div>
                                            </div>
                                            <div class="progress mb-4" style="height: 10px;">
                                                <div class="progress-bar down-payment" id="downPaymentProgress" style="width: 0%"></div>
                                                <div class="progress-bar loan-amount" id="loanAmountProgress" style="width: 100%"></div>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Interest Rate:</span>
                                                <strong><span id="displayInterestRate">0</span>%</strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Loan Term:</span>
                                                <strong><span id="displayLoanTerm">0</span> years</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Right Results -->
                                    <div class="col-md-6">
                                        <div class="p-3">
                                            <h5 class="mb-3">Monthly Payment Breakdown</h5>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Principal & Interest:</span>
                                                <strong>$<span id="principalInterest">0</span></strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Property Tax:</span>
                                                <strong>$<span id="monthlyTax">0</span></strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>Home Insurance:</span>
                                                <strong>$<span id="monthlyInsurance">0</span></strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>PMI:</span>
                                                <strong>$<span id="monthlyPmi">0</span></strong>
                                            </div>
                                            <div class="d-flex justify-content-between mb-2">
                                                <span>HOA Fees:</span>
                                                <strong>$<span id="hoaFeesResult">0</span></strong>
                                            </div>
                                            <hr>
                                            <div class="d-flex justify-content-between fs-5 fw-bold text-primary">
                                                <span>Total Monthly Payment:</span>
                                                <span>$<span id="totalMonthly">0</span></span>
                                            </div>
                                            <hr>
                                            <div class="d-flex justify-content-between">
                                                <span>Total Interest Paid:</span>
                                                <strong>$<span id="totalInterest">0</span></strong>
                                            </div>
                                            <div class="d-flex justify-content-between">
                                                <span>Total Cost of Loan:</span>
                                                <strong>$<span id="totalCost">0</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Chart Section -->
                            <div class="mt-5 bg-white p-4 rounded border">
                                <h4 class="text-primary mb-4"><i class="fas fa-chart-pie me-2"></i>Payment Breakdown</h4>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="chart-container">
                                            <canvas id="paymentChart" height="300"></canvas>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="chart-container">
                                            <canvas id="balanceChart" height="300"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Amortization Schedule -->
                            <div class="mt-5 bg-white p-4 rounded border">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="text-primary mb-0"><i class="fas fa-table me-2"></i>Amortization Schedule</h4>
                                    <div class="btn-group">
                                        <button class="btn btn-sm btn-outline-primary" id="showFullSchedule">Show Full Schedule</button>
                                        <button class="btn btn-sm btn-outline-secondary" id="showSummary">Show Summary</button>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover" id="amortizationTable">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Year</th>
                                                <th>Month</th>
                                                <th class="text-end">Payment</th>
                                                <th class="text-end">Principal</th>
                                                <th class="text-end">Interest</th>
                                                <th class="text-end">Tax/Ins</th>
                                                <th class="text-end">Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody id="scheduleBody">
                                            <!-- Will be filled by JavaScript -->
                                        </tbody>
                                        <tfoot id="summaryFooter" class="d-none">
                                            <tr class="table-active">
                                                <th colspan="2">First 12 Months</th>
                                                <th class="text-end" id="firstYearPayment">$0</th>
                                                <th class="text-end" id="firstYearPrincipal">$0</th>
                                                <th class="text-end" id="firstYearInterest">$0</th>
                                                <th class="text-end" id="firstYearTaxIns">$0</th>
                                                <th class="text-end" id="firstYearBalance">$0</th>
                                            </tr>
                                            <tr class="table-active">
                                                <th colspan="2">Year 5</th>
                                                <th class="text-end" id="year5Payment">$0</th>
                                                <th class="text-end" id="year5Principal">$0</th>
                                                <th class="text-end" id="year5Interest">$0</th>
                                                <th class="text-end" id="year5TaxIns">$0</th>
                                                <th class="text-end" id="year5Balance">$0</th>
                                            </tr>
                                            <tr class="table-active">
                                                <th colspan="2">Year 10</th>
                                                <th class="text-end" id="year10Payment">$0</th>
                                                <th class="text-end" id="year10Principal">$0</th>
                                                <th class="text-end" id="year10Interest">$0</th>
                                                <th class="text-end" id="year10TaxIns">$0</th>
                                                <th class="text-end" id="year10Balance">$0</th>
                                            </tr>
                                            <tr class="table-active">
                                                <th colspan="2">Final Year</th>
                                                <th class="text-end" id="finalYearPayment">$0</th>
                                                <th class="text-end" id="finalYearPrincipal">$0</th>
                                                <th class="text-end" id="finalYearInterest">$0</th>
                                                <th class="text-end" id="finalYearTaxIns">$0</th>
                                                <th class="text-end" id="finalYearBalance">$0</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-light py-3">
                        <div class="text-center text-muted small">
                            <p class="mb-1">This calculator provides estimates only. For exact figures, please consult with a mortgage lender.</p>
                            <p class="mb-0">Rates as of June 2024. Property taxes vary by location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/mortgage-loan.js' | relative_url }}"></script>
