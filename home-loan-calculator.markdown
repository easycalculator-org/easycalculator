---
layout: default
title: Home Loan Calculator | Home Loan EMI
permalink: /home-loan-calculator/
description: "Use our simple Home Loan EMI Calculator to determine your monthly payments. Get the clarity you need to finance your dream home effortlessly."
---



<div class="container">
    <h1 class="text-center mb-4">Home Loan Calculator</h1>
    <div class="row ">
        <div class="col-md-6 shadow-lg py-5 rounded">
            <label for="principal" class="form-label">Loan Amount (Principal)</label>
            <input type="number" id="principal" class="form-control" value="0" min="1">
            <small id="principalWords" class="text-muted"></small>
            <br>
            <label for="interest" class="form-label">Annual Interest Rate (%)</label>
            <input type="number" id="interest" class="form-control" value="0" min="0" step="0.01">
            <br>
           <label for="years" class="form-label">Loan Term (Years)</label>
           <input type="range" id="years" class="slider-range" min="1" max="30" value="1">
           <span id="yearDisplay" class="d-block text-center mt-2">1 years</span>
        </div>
        <div class="col-md-6 position-relative chart01 py-4">
            <canvas id="breakdownChart"></canvas>  
        </div>
          </div>

          <div class="row mb-3 py-4">
            <div class="col-md-4">
                <h4>Monthly EMI: <span id="monthlyEMI" class="text-primary"></span></h4>
            </div>
            <div class="col-md-4">
                <h4>Total Interest Payable: <span id="totalInterest" class="text-primary"></span></h4>
            </div>
            <div class="col-md-4">
                <h4>Total Payment: <span id="totalPayment" class="text-primary"></span></h4>
            </div>
        </div>


   

    <h4>Amortization Schedule</h4>
    <table class="table table-striped bordered">
        <thead>
            <tr>
                <th>Year</th>
                <th>Principal Paid (Monthly)</th>
                <th>Interest Paid (Monthly)</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody id="amortizationSchedule"></tbody>
    </table>   

</div>  

<script src="{{ '/assets/js/home-loan.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>