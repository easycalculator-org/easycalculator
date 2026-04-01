---
layout: default
title: Gratuity Calculator – Calculate Your Gratuity in India Instantly
permalink: /gratuity-calculator-india
description: "Use our free Gratuity Calculator India to calculate your gratuity amount instantly. Based on Payment of Gratuity Act 1972. Enter salary and years of service to get accurate results."
last_modified_at: 2026-04-01
---
<style>
.formula-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e5eaf2;
  transition: 0.2s ease;
}
.formula-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
.formula-box {
  background: #f1f5ff;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  color: #1e3a8a;
  text-align: center;
}
.section-title {
  font-weight: 700;
  margin-bottom: 20px;
}
.example-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e5eaf2;
  transition: 0.2s;
}
.example-card:hover {
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
.example-result {
  background: #ecfdf5;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 600;
  color: #065f46;
}
.example-title {
  font-weight: 600;
}
.note-box {
  background: #fff7ed;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
}
</style>


<div class="container mt-5">
 <div class="row justify-content-center">
  <div class="col-12 col-md-10 col-lg-8">
   <div class="card shadow-lg border-0 p-4 rounded-4">
    <h2 class="text-center mb-3 fw-bold">Gratuity Calculator</h2>
    <div class="bg-light rounded-3 p-3 mb-4 small text-muted text-center">Formula: <strong>(Salary × 15/26) × Years</strong><br>Eligibility: Minimum 5 years service </div>
    <div class="row g-4 align-items-center">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label fw-semibold">Monthly Salary (Basic + DA)</label>
          <input type="number" id="salary" class="form-control form-control-lg" placeholder="₹ 30000">
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Years of Service</label>
          <input type="number" id="years" class="form-control form-control-lg" placeholder="10">
        </div>
        <button onclick="calculate()" class="btn btn-primary w-100 py-2 fw-semibold">Calculate Gratuity</button>
      </div>
      <!-- Right Side (Result) -->
      <div class="col-md-6 text-center">
        <div class="p-4 bg-light rounded-4">
          <div class="text-muted small mb-2">Estimated Gratuity</div>
          <div id="result"  class="fs-1 text-primary fw-bold"> ₹ 0    </div>
          <div id="message" class="small mt-2"></div>
        </div>
      </div>
    </div>
  </div>
 </div>
</div>
</div>



<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->
<h2>What is Gratuity?</h2>
<p>
Gratuity is a financial benefit given by an employer to an employee as a reward for long-term service. In India, it is governed by the <strong>Payment of Gratuity Act, 1972</strong>. Employees typically become eligible after completing <strong>5 years of continuous service</strong>.
</p>

<p>
The gratuity amount depends mainly on your <strong>last drawn salary (Basic + DA)</strong> and <strong>total years of service</strong>. It acts as a retirement benefit and helps employees build financial security.
</p>

<hr>

<h2>What is a Gratuity Calculator?</h2>
<p>
A gratuity calculator is an online tool that helps you quickly estimate the gratuity amount you will receive when leaving a job. You just need to enter your salary and years of service, and the calculator will instantly show your estimated payout.
</p>



<hr>


<h2 class="section-title text-center">Gratuity Calculation Formula</h2>
<div class="row g-4 justify-content-center">
  <!-- Covered under Act -->
  <div class="col-md-6">
    <div class="formula-card h-100">
      <h5 class="mb-3 text-primary fw-semibold">     <i class="fas fa-check-circle me-2"></i> Covered Under Gratuity Act</h5>
  <div class="formula-box"> Gratuity = (Last Salary × 15 × Years) / 26</div>
  <p class="small text-muted mt-3 mb-0">Applicable for employees working in organizations covered under the Payment of Gratuity Act, 1972. </p>
</div>
  </div>

  <!-- Not Covered -->
  <div class="col-md-6">
    <div class="formula-card h-100">
      <h5 class="mb-3 text-danger fw-semibold"><i class="fas fa-user-clock me-2"></i> Not Covered Under Act </h5>
  <div class="formula-box">Gratuity = (Last Salary × 15 × Years) / 30 </div>
  <p class="small text-muted mt-3 mb-0">Used for employees not covered under the Gratuity Act. Calculation method may vary by company policy.</p>
</div>
  </div>
</div>


<ul>
<li><strong>Salary</strong> = Basic Pay + Dearness Allowance</li>
<li><strong>Years of Service</strong> = Total years worked (rounded as per rules)</li>
</ul>

<hr>
<h2 class="text-center mb-4 fw-bold">Example of Gratuity Calculation</h2>

<div class="row g-4">

  <!-- Example 1 -->
  <div class="col-md-6">
    <div class="example-card h-100">
  <div class="example-title mb-2 text-primary">
    Example 1 (Covered under Act)
  </div>

  <ul class="mb-3">
    <li><strong>Salary:</strong> ₹30,000</li>
    <li><strong>Years of Service:</strong> 15</li>
  </ul>

  <div class="small text-muted mb-2">
    Formula: (Salary × 15 × Years) / 26
  </div>

  <div class="example-result">
    ₹2,59,615
  </div>
</div>

  </div>

  <!-- Example 2 -->

  <div class="col-md-6">
    <div class="example-card h-100">

  <div class="example-title mb-2 text-danger">
    Example 2 (Not Covered under Act)
  </div>
  <ul class="mb-3">
    <li><strong>Salary:</strong> ₹30,000</li>
    <li><strong>Years of Service:</strong> 7</li>
  </ul>
  <div class="small text-muted mb-2">
    Formula: (Salary × 15 × Years) / 30
  </div>
  <div class="example-result">
    ₹1,05,000
  </div>
</div>

  </div>

</div>

<!-- Note -->

<div class="note-box mt-4">
  👉 If the service period in the final year exceeds <strong>6 months</strong>, it is rounded up to the next full year as per gratuity rules.
</div>


<hr>

<h2>Eligibility Criteria for Gratuity</h2>

<ul>
<li>Minimum <strong>5 years of continuous service</strong></li>
<li>Applicable in case of <strong>retirement, resignation, or superannuation</strong></li>
<li>In case of <strong>death or disability</strong>, gratuity is paid even before 5 years</li>
<li>Applicable to organizations with <strong>10 or more employees</strong></li>
</ul>

<hr>

<h2>Maximum Gratuity Limit</h2>

<p>
As per current rules, the maximum gratuity payable is <strong>₹20 lakh</strong>. Any amount above this may be treated differently depending on company policy.
</p>

<hr>

<h2>Tax on Gratuity in India</h2>

<p>
The tax treatment of gratuity depends on the type of employee:
</p>

<ul>
<li><strong>Government Employees:</strong> Fully tax-free</li>
<li><strong>Private Employees:</strong> Tax exemption is the lowest of:
  <ul>
    <li>₹20 lakh</li>
    <li>Actual gratuity received</li>
    <li>Calculated eligible gratuity</li>
  </ul>
</li>
</ul>

<p>
Any remaining amount is taxable as per your income tax slab.
</p>

<hr>

<h2>Best Ways to Invest Your Gratuity</h2>

<p>
After receiving gratuity, you can invest it based on your financial goals:
</p>

<ul>
<li>Fixed Deposits (FD) – Safe and stable returns</li>
<li>Public Provident Fund (PPF) – Long-term tax-saving option</li>
<li>National Pension System (NPS) – Retirement planning</li>
<li>Mutual Funds – Higher returns (moderate to high risk)</li>
<li>Real Estate – Long-term asset creation</li>
<li>Sovereign Gold Bonds – Gold investment alternative</li>
</ul>

<p>
💡 Tip: Diversify your investments to balance risk and returns.
</p>

<hr>

<h2>Benefits of Using Gratuity Calculator</h2>

<ul>
<li>Instant and accurate calculation</li>
<li>Helps in financial planning</li>
<li>Easy to use for everyone</li>
<li>Accessible anytime online</li>
</ul>

<hr>

<h2>FAQ on gratuity</h2>

<h4>1. Is gratuity mandatory in India?</h4>
<p>Yes, for companies with 10 or more employees under the Gratuity Act.</p>

<h4>2. Can I get gratuity before 5 years?</h4>
<p>Only in case of death or disability.</p>

<h4>3. Is 4 years 7 months eligible for gratuity?</h4>
<p>
In some cases (based on court rulings), employees completing <strong>4 years + 240 days</strong> may be eligible.
</p>

<h4>4. How many times can I receive gratuity?</h4>
<p>You can receive gratuity every time you complete eligible service with an employer.</p>

<h4>5. What salary is used for gratuity calculation?</h4>
<p>Only <strong>Basic Salary + Dearness Allowance (DA)</strong> is considered.</p>

<hr>



</div>



<script>
function calculate() {

  let salary = parseFloat(document.getElementById("salary").value);
  let years = parseFloat(document.getElementById("years").value);

  if (!salary || !years) {
    document.getElementById("result").innerHTML = "₹ 0";
    document.getElementById("message").innerHTML = "Please enter valid values";
    return;
  }

  if (years < 5) {
    document.getElementById("result").innerHTML = "₹ 0";
    document.getElementById("message").innerHTML =
      "<span style='color:red'>Not eligible (minimum 5 years required)</span>";
    return;
  }

  let gratuity = (salary * 15 / 26) * years;

  document.getElementById("result").innerHTML =
    "₹ " + gratuity.toLocaleString("en-IN");

  document.getElementById("message").innerHTML =
    "<span style='color:green'>Eligible for gratuity</span>";
}

// Auto calculate on input change (better UX)
document.getElementById("salary").addEventListener("input", calculate);
document.getElementById("years").addEventListener("input", calculate);
</script>


