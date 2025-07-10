---
layout: default
title: Debt Avalanche Calculator – Pay Off High-Interest Debt Faster
permalink: /debt-avalanche-calculator
description: "Use our free Debt Avalanche Calculator to create a smart debt payoff plan that saves you money on interest. Organize your debts by highest interest rate and pay them off faster."
#image: "/assets/images/age-calc-open-graph.png"
---
  <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white">
                        <div class="d-flex justify-content-between align-items-center">
                            <h1 class="h4 mb-0">
                                <i class="fas fa-snowflake me-2"></i>Advanced Debt Avalanche Calculator
                            </h1>
                            <span class="badge bg-light text-primary">v2.1</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="text-muted mb-4"><i class="fas fa-info-circle me-2"></i>The debt avalanche method prioritizes paying off debts with the highest interest rates first, which saves you money on interest over time. </p>
                        <div id="debtForm">
                            <div class="mb-4">
                                <div class="d-flex justify-content-between mb-2">
                                    <h3 class="h5"> <i class="fas fa-wallet me-2"></i>Your Debts</h3>
                                    <button id="addDebt" class="btn btn-sm btn-outline-primary"> <i class="fas fa-plus me-1"></i>Add Debt</button>
                                </div>
                                <div class="table-responsive">
                                    <table class="table table-hover" id="debtsTable">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Balance</th>
                                                <th>Interest Rate</th>
                                                <th>Minimum Payment</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="text" class="form-control form-control-sm debt-name" placeholder="Credit Card" required> </td>
                                                <td>
                                                    <div class="input-group input-group-sm">
                                                        <span class="input-group-text">$</span>
                                                        <input type="number" class="form-control debt-balance" placeholder="5000" min="1" required>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-group input-group-sm">
                                                        <input type="number" class="form-control debt-rate" placeholder="18.99" step="0.01" min="0" required>
                                                        <span class="input-group-text">%</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="input-group input-group-sm">
                                                        <span class="input-group-text">$</span>
                                                        <input type="number" class="form-control debt-payment" placeholder="100" min="1" required>
                                                    </div>
                                                </td>
                                                <td class="text-center align-middle">
                                                    <button class="btn btn-sm btn-outline-danger remove-debt" disabled>
                                                        <i class="fas fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <label for="extraPayment" class="form-label"> <i class="fas fa-coins me-2"></i>Extra Monthly Payment </label>
                                    <div class="input-group">
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" id="extraPayment" value="200" min="0">
                                    </div>
                                    <small class="text-muted">Additional amount you can pay toward debts each month</small>
                                </div>
                                <div class="col-md-6">
                                    <label for="snowballOption" class="form-label"> <i class="fas fa-chart-line me-2"></i>Payment Strategy </label>
                                    <select class="form-select" id="snowballOption">
                                        <option value="avalanche">Avalanche (Highest Interest First)</option>
                                        <option value="snowball">Snowball (Smallest Balance First)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button id="resetForm" class="btn btn-outline-secondary me-md-2">
                                    <i class="fas fa-undo me-1"></i>Reset
                                </button>
                                <button id="calculate" class="btn btn-primary">
                                    <i class="fas fa-calculator me-1"></i>Calculate
                                </button>
                            </div>
                        </div>
                        <div id="results" class="mt-5 d-none">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="h5"><i class="fas fa-chart-pie me-2"></i>Results </h3>
                                <div>
                                    <button id="backToForm" class="btn btn-sm btn-outline-primary me-2"> <i class="fas fa-edit me-1"></i>Edit Debts</button>
                                    <button id="exportPDF" class="btn btn-sm btn-success"> <i class="fas fa-file-pdf me-1"></i>Export PDF </button>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="card border-success h-100">
                                        <div class="card-body text-center">
                                            <h5 class="card-title text-success"><i class="fas fa-calendar-alt me-2"></i>Time to Debt Free</h5>
                                            <p class="display-6 text-success" id="timeToFree">--</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <div class="card border-info h-100">
                                        <div class="card-body text-center">
                                            <h5 class="card-title text-info"><i class="fas fa-dollar-sign me-2"></i>Total Interest</h5>
                                            <p class="display-6 text-info" id="totalInterest">--</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card border-warning h-100">
                                        <div class="card-body text-center">
                                            <h5 class="card-title text-warning"> <i class="fas fa-hand-holding-usd me-2"></i>Total Payments </h5>
                                            <p class="display-6 text-warning" id="totalPayments">--</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h4 class="h5 mb-3"> <i class="fas fa-bolt me-2"></i>Quick Wins - Debts You Can Close Fast </h4>
                                <div class="table-responsive">
                                    <table class="table table-sm table-hover" id="quickWinsTable">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Debt Name</th>
                                                <th>Balance</th>
                                                <th>Months to Payoff</th>
                                                <th>Extra Needed</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                                <small class="text-muted">* These debts could be paid off quickly with small additional payments</small>
                            </div>
                            <div class="mb-4">
                                <h4 class="h5 mb-3"> <i class="fas fa-list-ol me-2"></i>Payment Schedule </h4>
                                <div class="table-responsive">
                                    <table class="table table-sm table-hover" id="scheduleTable">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Month</th>
                                                <th>Debt</th>
                                                <th>Payment</th>
                                                <th>Principal</th>
                                                <th>Interest</th>
                                                <th>Remaining</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="mb-4">
                                <h4 class="h5 mb-3"> <i class="fas fa-chart-bar me-2"></i>Debt Payoff Progress </h4>
                                <div class="progress mb-3" style="height: 30px;">
                                    <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%">
                                        <span class="fw-bold">0%</span>
                                    </div>
                                </div>
                                <div class="row text-center">
                                    <div class="col-md-6 mb-3 mb-md-0">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title"><i class="fas fa-credit-card me-2"></i>Starting Debt </h5>
                                                <p class="h4" id="startingDebt">$0.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title"> <i class="fas fa-piggy-bank me-2"></i>Current Debt </h5>
                                                <p class="h4" id="currentDebt">$0.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-light text-muted small">
                        <div class="d-flex justify-content-between">
                            <span><i class="fas fa-lightbulb me-1"></i>Tip: Pay more than minimums to accelerate payoff </span>
                            <span><i class="fas fa-clock me-1"></i>Last updated: <span id="timestamp"></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>

<script src="{{ '/assets/js/debt-avalanche.js' | relative_url }}"></script>


