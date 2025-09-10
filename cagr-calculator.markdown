---
layout: default
title: CAGR Calculator - Calculate Compound Annual Growth Rate
permalink: /cagr-calculator
description: "Use our free CAGR Calculator to quickly find the compound annual growth rate of your investments. Simple, accurate, and easy to use online tool."
image: "/assets/images/cagr-calculator.png"
---
<style>
        .calculator-card {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            border: none;
            overflow: hidden;
        }
        .card-header {
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            color: white;
            padding: 20px;
        }
        .result-display {
            background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
            color: white;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            margin-top: 20px;
            display: none;
        }
        .form-label {
            font-weight: 500;
            color: #2c3e50;
        }
        .input-group-text {
            background-color: #f8f9fa;
        }
        .slider-value {
            font-weight: 600;
            color: #3498db;
            min-width: 50px;
            text-align: center;
        }
        .btn-calculate {
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
            border: none;
            padding: 12px 24px;
            font-weight: 600;
            transition: all 0.3s;
        }
        .btn-calculate:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .cagr-formula {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            font-family: monospace;
        }
        .growth-table {
            font-size: 0.9rem;
        }
        .growth-table th {
            background-color: #6a11cb;
            color: white;
        }
        .table-responsive {
            max-height: 300px;
            overflow-y: auto;
        }
        .chart-container {
            position: relative;
            height: 300px;
            margin-top: 30px;
        }
        .tab-content {
            padding: 20px 0;
        }
        .nav-tabs .nav-link {
            color: #495057;
            font-weight: 500;
        }
        .nav-tabs .nav-link.active {
            color: #6a11cb;
            font-weight: 600;
        }
    </style>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div class="calculator-card card">
                    <div class="card-header">
                        <h2 class="text-center mb-0"><i class="fas fa-chart-line me-2"></i>Advanced CAGR Calculator</h2>
                    </div>
                    <div class="card-body p-4">
                        <p class="text-muted text-center">Calculate the Compound Annual Growth Rate of your investments</p>
                        <form id="cagrForm" class="mt-4">
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <label for="initialValue" class="form-label"><i class="fas fa-dollar-sign me-2"></i>Initial Investment Value</label>
                                    <div class="input-group">
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" id="initialValue" placeholder="Enter initial amount" required step="0.01" min="0">
                                    </div>
                                    <div class="form-range mt-2">
                                        <input type="range" class="form-range" id="initialValueSlider" min="0" max="1000000" step="1000">
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <small>$0</small>
                                        <small id="initialValueDisplay" class="slider-value">$0</small>
                                        <small>$1,000,000</small>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <label for="finalValue" class="form-label"><i class="fas fa-chart-pie me-2"></i>Final Investment Value</label>
                                    <div class="input-group">
                                        <span class="input-group-text">$</span>
                                        <input type="number" class="form-control" id="finalValue" placeholder="Enter final amount" required step="0.01" min="0">
                                    </div>
                                    <div class="form-range mt-2">
                                        <input type="range" class="form-range" id="finalValueSlider" min="0" max="1000000" step="1000">
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <small>$0</small>
                                        <small id="finalValueDisplay" class="slider-value">$0</small>
                                        <small>$1,000,000</small>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label for="years" class="form-label"><i class="fas fa-calendar-alt me-2"></i>Investment Period (Years)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                    <input type="number" class="form-control" id="years" placeholder="Enter number of years" required min="1" max="100">
                                </div>
                                <div class="form-range mt-2">
                                    <input type="range" class="form-range" id="yearsSlider" min="1" max="50" step="1">
                                </div>
                                <div class="d-flex justify-content-between">
                                    <small>1 year</small>
                                    <small id="yearsDisplay" class="slider-value">1 year</small>
                                    <small>50 years</small>
                                </div>
                            </div>
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-lg ">
                                    <i class="fas fa-calculator me-2"></i>Calculate CAGR
                                </button>
                            </div>
                        </form>
                        <div class="result-display" id="resultSection">
                            <h3><i class="fas fa-tachometer-alt me-2"></i>Your CAGR Result</h3>
                            <h1 id="cagrResult" class="display-4 fw-bold my-3">0.00%</h1>
                            <p id="investmentSummary" class="mb-0">Your investment grew from $0 to $0 over 0 years</p>
                        </div>
                        <!-- Tabs for additional information -->
                        <ul class="nav nav-tabs mt-5" id="cagrTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="growth-tab" data-bs-toggle="tab" data-bs-target="#growth" type="button" role="tab" aria-controls="growth" aria-selected="true">
                                    <i class="fas fa-table me-2"></i>Yearly Growth
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="chart-tab" data-bs-toggle="tab" data-bs-target="#chart" type="button" role="tab" aria-controls="chart" aria-selected="false">
                                    <i class="fas fa-chart-bar me-2"></i>Growth Chart
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="formula-tab" data-bs-toggle="tab" data-bs-target="#formula" type="button" role="tab" aria-controls="formula" aria-selected="false">
                                    <i class="fas fa-info-circle me-2"></i>About CAGR
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="cagrTabContent">
                            <div class="tab-pane fade show active" id="growth" role="tabpanel" aria-labelledby="growth-tab">
                                <div class="table-responsive">
                                    <table class="table table-striped table-hover growth-table">
                                        <thead>
                                            <tr>
                                                <th>Year</th>
                                                <th>Starting Value</th>
                                                <th>Ending Value</th>
                                                <th>Annual Growth</th>
                                                <th>Growth %</th>
                                            </tr>
                                        </thead>
                                        <tbody id="growthTableBody">
                                            <!-- Will be populated by JavaScript -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="chart" role="tabpanel" aria-labelledby="chart-tab">
                                <div class="chart-container">
                                    <canvas id="growthChart"></canvas>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="formula" role="tabpanel" aria-labelledby="formula-tab">
                                <h4><i class="fas fa-info-circle me-2"></i>About CAGR</h4>
                                <p>Compound Annual Growth Rate (CAGR) is the mean annual growth rate of an investment over a specified period of time longer than one year.</p>
                                <h5 class="mt-3">CAGR Formula:</h5>
                                <div class="cagr-formula">
                                    CAGR = (Final Value / Initial Value)<sup>(1 / Number of Years)</sup> - 1
                                </div>
                                <h5 class="mt-3">Why use CAGR?</h5>
                                <ul>
                                    <li>It provides a smoothed annual rate of growth</li>
                                    <li>Eliminates the effect of volatility and periodic returns</li>
                                    <li>Allows for easy comparison between different investments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/cagr-calc.js' | relative_url }}"></script>