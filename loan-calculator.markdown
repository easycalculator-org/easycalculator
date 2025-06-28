---
layout: default
title: Smart Loan EMI Calculator – Charts & Detailed Amortization Table
permalink: /loan-calculator
description: "Free online Loan EMI Calculator with chart and amortization table. Calculate monthly EMIs, total interest, and repayment schedule in seconds."
---
<style>
 .calculator-container {
            background-color: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        .payment-breakdown {
            max-height: 400px;
            overflow-y: auto;
            margin-bottom: 20px;
        }
        .table thead th {
            position: sticky;
            top: 0;
            background-color: #e9ecef;
        }
        .term-option {
            display: flex;
            align-items: center;
        }
        .term-option input[type="radio"] {
            margin-right: 5px;
        }
        #chartPlaceholder {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
<!-- Loan input -->
<div class="row">
<h1 class="text-center">Loan Calculator</h1>
 <div class="col-lg-6">
   <div class="calculator-container">
      <form id="loanForm">
        <div class="mb-3"><label for="loanAmount" class="form-label">Loan Amount</label><input type="number" class="form-control" id="loanAmount" value="10000" min="100" step="100"></div>
        <div class="mb-3"><label for="interestRate" class="form-label">Interest Rate (%)</label><input type="number" class="form-control" id="interestRate" value="5" min="0.1" step="0.1"></div>
        <div class="mb-3"><label class="form-label">Loan Term</label>
         <div class="d-flex mb-2">
           <div class="term-option me-3"><input type="radio" id="termYears" name="termType" value="years" checked><label for="termYears">Years</label></div>
           <div class="term-option"><input type="radio" id="termMonths" name="termType" value="months"><label for="termMonths">Months</label></div>
          </div>
             <input type="number" class="form-control" id="loanTerm" value="5" min="1">
        </div>
            <div class="d-grid gap-2 d-md-flex"><button type="button" class="btn btn-primary me-md-2" id="calculateBtn">Calculate</button> <button type="button" class="btn btn-secondary" id="resetBtn">Reset</button> </div>
          </form>
      </div>
    </div>
<!-- chart -->
<div class="col-lg-6">
     <div id="chartPlaceholder" class="d-flex justify-content-center align-items-center ">
        <div class="text-center">
         <canvas id="loanChart" style="display: none;"></canvas>
         </div>
        </div>
   </div>

<!-- Results Section -->
<div class="p-4 bg-light rounded-2"><h4>Loan Summary</h4><div class="row"><div class="col-4"><p><strong>Monthly Payment:</strong> <span id="monthlyPayment">0.00</span></p></div><div class="col-4"><p><strong>Total Interest:</strong> <span id="totalInterest">0.00</span></p></div><div class="col-4"><p><strong>Total Payment:</strong> <span id="totalPayment">0.00</span></p></div></div></div>

<br>
 <div class="d-flex justify-content-between mb-3 p-3">
    <h4>Monthly Payment Breakdown</h4>
       <div>
       <button id="downloadPdf" class="btn btn-success" disabled><i class="bi bi-download"></i> Download PDF</button>
       <button id="shareResults" class="btn btn-info" disabled><i class="bi bi-share"></i> Share</button>
      </div>
     </div>
<div class="payment-breakdown">
     <table class="table table-striped table-hover text-center">
        <thead><tr><th>Month</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr> </thead>
          <tbody id="paymentSchedule">
             <tr><td colspan="5" class="text-center text-muted">Enter loan details and click Calculate to see payment schedule</td></tr>
           </tbody>
     </table>
</div>
<!-- Article Part -->
<h2>✅ What Is a Loan EMI Calculator?</h2>
<p>A Loan EMI Calculator is an online tool that helps you calculate your Equated Monthly Installments (EMIs) for any loan — be it a home loan, car loan, personal loan, or education loan. It simplifies financial planning by providing the monthly payment amount you need to make over a specific tenure.</p>
<p>With the help of this calculator, you can:</p>
  <ul><li>Know how much you'll pay monthly</li><li>See the total interest payable</li> <li>View a detailed amortization table</li><li>Compare different loan terms quickly</li></ul>
<section class="mb-5">
            <h2 class="mb-3">📊 How Does an EMI Calculator Work?</h2>
            <p>The EMI is calculated using this formula:</p>
 <div class="bg-light p-4 rounded mb-3">
                <h5 class="text-center">EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup>−1]</h5>
            </div>
  <p>Where:</p>
            <ul>
                <li><strong>P</strong> = Loan amount (Principal)</li>
                <li><strong>R</strong> = Monthly interest rate (Annual rate ÷ 12 ÷ 100)</li>
                <li><strong>N</strong> = Loan tenure in months</li>
            </ul>
 <p>This formula ensures that each EMI consists of both interest and principal components. Early EMIs contribute more toward interest, while later EMIs contribute more toward the principal.</p>
 </section>
 <section class="mb-5">
            <h2 class="mb-3">📈 Features of Our Online Loan EMI Calculator</h2>
            <p>Our free EMI calculator includes:</p>
  <div class="row">
                <div class="col-md-6">
                    <ul>
                        <li>✅ Monthly EMI Result</li>
                        <li>✅ Total Interest Payable</li>
                        <li>✅ Total Payment (Principal + Interest)</li>
                        <li>✅ Interactive Doughnut Chart (Principal vs Interest)</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <ul>
                        <li>✅ Amortization Table (Monthly breakdown)</li>
                        <li>✅ PDF Download for record-keeping</li>
                        <li>✅ Tenure Input in Years + Months for flexibility</li>
                    </ul>
                </div>
            </div>
        </section>
 <section class="mb-5">
            <h2 class="mb-3">📋 Example: EMI Calculation for ₹5,00,000 at 8.5% for 5 Years</h2>
  <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="table-light"><tr> <th>Details</th><th>Value</th></tr></thead>
                    <tbody>
                        <tr><td>Loan Amount</td><td>₹5,00,000</td></tr>
                        <tr><td>Annual Interest Rate</td><td>8.5%</td> </tr>
                        <tr><td>Loan Tenure</td><td>5 years</td> </tr>
                        <tr><td>Monthly EMI</td><td>₹10,252.37</td> </tr>
                        <tr> <td>Total Interest</td> <td>₹1,15,142</td> </tr>
                        <tr> <td>Total Payment</td> <td>₹6,15,142</td> </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3">This example helps users visualize the real cost of a loan over time.</p>
        </section>
        <section class="mb-5">
            <h2 class="mb-3">📌 Benefits of Using a Loan EMI Calculator</h2>
 <div class="row g-4">
                <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">1. 🧮 Accurate and Instant Results</h5>
                            <p class="card-text">No need to manually calculate. Results are shown immediately.</p>
                        </div>
                    </div>
                </div>
  <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">2. 📅 Helps in Planning</h5>
                            <p class="card-text">Knowing the EMI in advance helps manage monthly budgets and decide the ideal loan amount or tenure.</p>
                        </div>
                    </div>
                </div>
 <div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">3. 🔄 Compares Loan Scenarios</h5>
                            <p class="card-text">Try different combinations of amount, interest rate, and tenure to find what suits you best.</p>
                        </div>
                    </div>
                </div>
<div class="col-md-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">4. 📥 Export/Download Option</h5>
                            <p class="card-text">You can save the amortization schedule and EMI summary as PDF for offline use or sharing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  <section class="mb-5">
            <h2 class="mb-3">🛠️ How to Use the Loan EMI Calculator</h2>
            <ol>
                <li>Enter the loan amount you want to borrow.</li>
                <li>Input the annual interest rate.</li>
                <li>Specify the loan tenure in years and months.</li>
                <li>Click on "Calculate EMI".</li>
                <li>View your results:
                    <ul>
                        <li>Monthly EMI</li>
                        <li>Total Interest</li>
                        <li>Total Payment</li>
                        <li>Visual Chart</li>
                        <li>Amortization Table</li>
                    </ul>
                </li>
                <li>Optional: Click "Download PDF" to save the full loan report.</li>
            </ol>
        </section>
 <section class="mb-5">
            <h2 class="mb-3">🤔 What Is an Amortization Table?</h2>
            <p>An amortization table breaks down every EMI payment into two parts:</p>
            <ul>
                <li>Interest payment</li>
                <li>Principal repayment</li>
            </ul>
 <p>It also shows:</p>
            <ul>
                <li>The opening balance before payment</li>
                <li>The closing balance after payment</li>
                <li>Cumulative totals over time</li>
            </ul>
  <p>This helps you understand how your loan gets repaid month-by-month.</p>
        </section>

<!-- jsPDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="{{ '/assets/js/loan-calc.js' | relative_url }}"></script>

