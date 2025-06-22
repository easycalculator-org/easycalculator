---
layout: default
title: TVM Calculator – Calculate Time Value of Money Instantly
permalink: /tvm-calculator
description: "Use our free TVM Calculator to compute the Time Value of Money including present value, future value, interest rate, periods, or payment. Simple, accurate & fast financial tool."
---

 <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white">
                        <div class="d-flex justify-content-between align-items-center">
                            <h1 class="mb-0"><i class="bi bi-calculator"></i> Time Value of Money Calculator</h1>
                            <span class="badge bg-light text-primary fs-6">TVM</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-info">
                            <i class="bi bi-info-circle"></i> Enter any four values to calculate the fifth one
                        </div>
                        <!-- Input Fields -->
                        <div class="row g-3 mb-4">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="pv" placeholder="Present Value">
                                    <label for="pv">Present Value (PV)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="fv" placeholder="Future Value">
                                    <label for="fv">Future Value (FV)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="rate" placeholder="Interest Rate">
                                    <label for="rate">Interest Rate (%)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="nper" placeholder="Number of Periods">
                                    <label for="nper">Number of Periods (N)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="pmt" placeholder="Payment">
                                    <label for="pmt">Payment (PMT)</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <select class="form-select" id="paymentType">
                                        <option value="end">End of Period</option>
                                        <option value="beginning">Beginning of Period</option>
                                    </select>
                                    <label for="paymentType">Payment Type</label>
                                </div>
                            </div>
                        </div>
                        <!-- Calculation Buttons -->
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
                            <button class="btn btn-outline-primary" id="calcPV">
                                <i class="bi bi-cash-coin"></i> Calculate PV
                            </button>
                            <button class="btn btn-outline-success" id="calcFV">
                                <i class="bi bi-graph-up"></i> Calculate FV
                            </button>
                            <button class="btn btn-outline-danger" id="calcRate">
                                <i class="bi bi-percent"></i> Calculate Rate
                            </button>
                            <button class="btn btn-outline-info" id="calcNper">
                                <i class="bi bi-calendar-week"></i> Calculate N
                            </button>
                        </div>
                        <!-- Results Section -->
                        <div class="card bg-light mb-3">
                            <div class="card-header bg-secondary text-white">
                                <i class="bi bi-clipboard-data"></i> Calculation Results
                            </div>
                            <div class="card-body">
                                <div class="row text-center">
                                    <div class="col-md-3 mb-3">
                                        <div class="card border-primary h-100">
                                            <div class="card-header bg-primary text-white">PV</div>
                                            <div class="card-body">
                                                <h3 class="card-title" id="resultPV">0.00</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <div class="card border-success h-100">
                                            <div class="card-header bg-success text-white">FV</div>
                                            <div class="card-body">
                                                <h3 class="card-title" id="resultFV">0.00</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <div class="card border-danger h-100">
                                            <div class="card-header bg-danger text-white">Rate</div>
                                            <div class="card-body">
                                                <h3 class="card-title" id="resultRate">0.00%</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <div class="card border-info h-100">
                                            <div class="card-header bg-info text-white">Periods</div>
                                            <div class="card-body">
                                                <h3 class="card-title" id="resultNper">0</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Reset Button -->
                        <div class="d-grid">
                            <button class="btn btn-warning" id="resetBtn">
                                <i class="bi bi-arrow-repeat"></i> Reset Calculator
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
<script src="{{ '/assets/js/tvm-calc.js' | relative_url }}"></script>
