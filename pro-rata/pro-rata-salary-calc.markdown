---
layout: default
title: "Pro Rata Salary Calculator"
permalink: /pro-rata-salary-calculator
description: "Use our free Pro Rata Salary Calculator to calculate a prorated salary based on hours, days, or part-time work. Includes the formula, examples, FAQs, and instant calculations."
last_modified_at: 2026-09-11
---
<style>
.pro-rata-card{ overflow: hidden;} .mode-switch{ background: #f1f3f5; padding: 5px; border-radius: 14px; display: flex; gap: 4px;} .mode-switch button{ flex: 1; border: 0; background: transparent; color: #6c757d; padding: 11px 12px; border-radius: 10px; font-weight: 600; transition: all 0.2s ease;} .mode-switch button.active{ background: #fff; color: #0d6efd; box-shadow: 0 2px 8px rgba(0,0,0,.08);} .salary-toggle{ background: #f1f3f5; padding: 4px; border-radius: 12px; display: inline-flex;} .salary-toggle button{ border: 0; background: transparent; color: #6c757d; padding: 9px 20px; border-radius: 9px; font-weight: 600; transition: all .2s ease;} .salary-toggle button.active{ background: #0d6efd; color: #fff;} .result-main{ background: linear-gradient(135deg, #f0f7ff, #f8fbff); border: 1px solid #dbeafe;} .result-amount{ font-size: clamp(2rem, 6vw, 3rem); font-weight: 800; letter-spacing: -1px;} .result-box{ background: #fff; border: 1px solid #e9ecef; border-radius: 14px; padding: 18px; height: 100%;} .input-group-text{ background: #f8f9fa; font-weight: 600;} .step-item{ display: flex; gap: 12px; margin-bottom: 14px;} .step-number{ width: 28px; height: 28px; min-width: 28px; border-radius: 50%; background: #0d6efd; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700;} .formula-box{ background: #f8f9fa; border-radius: 12px; font-family: monospace; line-height: 1.7;} .animate-section{ animation: slideFade .2s ease;} @keyframes slideFade{ from{ opacity: 0; transform: translateY(5px);} to{ opacity: 1; transform: translateY(0);}} @media (max-width: 576px){ .mode-switch{ flex-direction: column;} .salary-toggle button{ padding: 9px 15px;}}
</style>

<div class="row justify-content-center"><div class="col-12 col-md-9"><div class="card border-0 shadow-sm rounded-4 pro-rata-card"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h1>Pro Rata Salary Calculator </h1><p class="text-muted mb-0">Calculate the salary you should receive for part of a pay period, based on days or hours worked. </p></div><div class="text-center mb-4"><div class="small text-muted fw-semibold mb-2">SALARY PERIOD </div><div class="salary-toggle"><button type="button" class="salary-period-btn active" data-period="monthly" >Monthly </button><button type="button" class="salary-period-btn" data-period="annual" >Annual </button></div></div><div class="mb-4"><label for="salary" id="salaryLabel" class="form-label fw-semibold" >Monthly Salary </label><div class="input-group input-group-lg"><span class="input-group-text">$ </span><input type="number" id="salary" class="form-control" placeholder="Enter your salary" min="0" step="any" ></div></div><div class="mb-4"><div class="small text-muted fw-semibold mb-2">CALCULATION METHOD </div><div class="mode-switch"><button type="button" class="method-btn active" data-method="days" >📅 Working Days </button><button type="button" class="method-btn" data-method="unpaid" >🕐 Unpaid Leave </button><button type="button" class="method-btn" data-method="hours" >⏱️ Working Hours </button></div></div><div id="daysSection" class="method-section animate-section" ><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Total Working Days </label><input type="number" id="totalDays" class="form-control form-control-lg" placeholder="e.g. 22" min="1" step="any" ><div class="form-text">Working days in the pay period </div></div><div class="col-md-6"><label class="form-label fw-semibold">Days Worked </label><input type="number" id="workedDays" class="form-control form-control-lg" placeholder="e.g. 15" min="0" step="any" ><div class="form-text">Days actually worked </div></div></div></div><div id="unpaidSection" class="method-section d-none animate-section" ><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Total Working Days </label><input type="number" id="leaveTotalDays" class="form-control form-control-lg" placeholder="e.g. 22" min="1" step="any" ><div class="form-text">Working days in the pay period </div></div><div class="col-md-6"><label class="form-label fw-semibold">Unpaid Leave Days </label><input type="number" id="unpaidDays" class="form-control form-control-lg" placeholder="e.g. 3" min="0" step="any" ><div class="form-text">Days not paid </div></div></div></div><div id="hoursSection" class="method-section d-none animate-section" ><div class="row g-3"><div class="col-md-6"><label class="form-label fw-semibold">Total Working Hours </label><input type="number" id="totalHours" class="form-control form-control-lg" placeholder="e.g. 176" min="1" step="any" ><div class="form-text">Total hours in the pay period </div></div><div class="col-md-6"><label class="form-label fw-semibold">Hours Worked </label><input type="number" id="workedHours" class="form-control form-control-lg" placeholder="e.g. 120" min="0" step="any" ><div class="form-text">Hours actually worked </div></div></div></div><button type="button" id="calculateBtn" class="btn btn-primary btn-lg w-100 rounded-3 mt-4 py-3 fw-semibold" >Calculate Pro Rata Salary </button><div id="errorMessage" class="alert alert-danger rounded-3 mt-4 d-none" ></div><div id="resultSection" class="d-none mt-4"><div class="result-main rounded-4 p-4 text-center"><div class="small text-muted fw-semibold mb-1">YOUR PRO RATA SALARY </div><div id="proRataSalary" class="result-amount text-primary" >$0 </div><div class="text-muted">Based on <span id="proRataPercent" class="fw-bold text-dark">0% </span>of your full salary </div></div><div class="row g-3 mt-1"><div class="col-6"><div class="result-box text-center"><div class="small text-muted mb-1">Full Salary </div><div id="fullSalaryResult" class="fs-4 fw-bold" >$0 </div></div></div><div class="col-6"><div class="result-box text-center"><div class="small text-muted mb-1">Pro Rata </div><div id="summaryPercent" class="fs-4 fw-bold text-success" >0% </div></div></div></div><div class="border rounded-4 p-4 mt-3"><h5 class="fw-bold mb-3">Calculation Details </h5><div class="d-flex justify-content-between py-2 border-bottom"><span class="text-muted">Salary Period</span><span id="resultPeriod" class="fw-semibold"></span></div><div class="d-flex justify-content-between py-2 border-bottom"><span class="text-muted">Method</span><span id="resultMethod" class="fw-semibold"></span></div><div class="d-flex justify-content-between py-2"><span class="text-muted">Earned Salary</span><span id="resultEarnedSalary" class="fw-bold text-success" ></span></div></div><div class="mt-3"><h5 class="fw-bold mb-3">Formula </h5><div id="formulaText" class="formula-box p-3" ></div></div><div class="mt-4"><h5 class="fw-bold mb-3">Step-by-Step Calculation </h5><div id="calculationSteps"></div></div></div><button type="button" id="resetBtn" class="btn btn-outline-secondary w-100 rounded-3 mt-3 py-2" >Reset Calculator </button></div></div></div></div>

<!-- Article Content -->
<div class="article-container">

  <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>

    <div class="text-muted small mt-3 mt-md-0">
      <i class="fas fa-calendar me-1"></i>
      Last Updated: {{ site.time | date: "%d-%m-%Y" }}
    </div>
  </div>


 <h1 class="fw-bold mb-3">Pro Rata Salary Calculator </h1>
 <p class="lead">A <strong>Pro Rata Salary Calculator</strong>helps you find how much salary you should get when you work only part of a pay period. It can be useful when you start or leave a job during the month, take unpaid leave, or work part-time. </p>
 <p>Enter your salary and the days or hours you worked to quickly calculate your estimated pro rata salary. </p>
 <section class="mt-5"><h2 class="fw-bold mb-3">What Does Pro Rata Salary Mean? </h2><p><strong>Pro rata</strong>means "in proportion." A pro rata salary is the part of your full salary that you earn for the time you actually work. </p><p>For example, if your monthly salary is <strong>$4,000</strong>, there are <strong>20 working days</strong>in the month, and you work <strong>15 days</strong>, you work 75% of the month. </p><div class="bg-light rounded-3 p-3 my-4">
 <p class="mb-2"><strong>Pro Rata Percentage:</strong></p><p class="mb-3">15 ÷ 20 × 100=<strong>75%</strong></p><p class="mb-2"><strong>Pro Rata Salary:</strong></p><p class="mb-0">$4,000 × 75%=<strong class="text-success">$3,000</strong></p></div><p>So, the estimated salary for those 15 working days is <strong>$3,000</strong>, before other deductions or adjustments. </p>
 </section><section class="mt-5"><h2 class="fw-bold mb-3">How to Calculate Pro Rata Salary </h2><p>The basic formula is: </p><div class="bg-light rounded-3 p-3 mb-3 fw-semibold">Pro Rata Salary=Full Salary × (Amount Worked ÷ Total Amount) </div><p>You can use working days or working hours, depending on how your salary is calculated. </p><h3 class="h5 fw-bold mt-4 mb-3">Using Working Days </h3><p>If your salary is based on working days, use this formula: </p><div class="bg-light rounded-3 p-3 mb-3">Pro Rata Salary=Full Salary × (Days Worked ÷ Total Working Days) </div><p>For example, suppose your monthly salary is <strong>$3,600</strong>. There are <strong>20 working days</strong>in the month and you work <strong>12 days</strong>. </p><p>12 ÷ 20=0.60 </p><p>$3,600 × 0.60=<strong class="text-success">$2,160</strong></p><p>Your estimated pro rata salary is <strong>$2,160</strong>. </p>
 <h3 class="h5 fw-bold mt-4 mb-3">Using Unpaid Leave </h3><p>If you take unpaid leave, first find the number of days you will be paid for. </p><div class="bg-light rounded-3 p-3 mb-3">Paid Days=Total Working Days − Unpaid Leave Days </div>
 <p>For example, if there are <strong>22 working days</strong>and you take <strong>3 unpaid days</strong>: </p><p>22 − 3=<strong>19 paid days</strong></p><p>If your salary is $4,000: </p><p>$4,000 × (19 ÷ 22)=<strong class="text-success">$3,454.55</strong></p><p>Your estimated salary is <strong>$3,454.55</strong>before other payroll adjustments. </p><h3 class="h5 fw-bold mt-4 mb-3">Using Working Hours </h3><p>For part-time work or hourly calculations, you can use: </p><div class="bg-light rounded-3 p-3 mb-3">Pro Rata Salary=Full Salary × (Hours Worked ÷ Total Working Hours) </div><p>For example, if your full salary is <strong>$3,000</strong>, the total working hours are <strong>160</strong>, and you work <strong>100 hours</strong>: </p>
 <p>100 ÷ 160=0.625 </p><p>$3,000 × 0.625=<strong class="text-success">$1,875</strong></p></section>
 <section class="mt-5"><h2 class="fw-bold mb-3">How to Use the Pro Rata Salary Calculator </h2><p>Follow these simple steps: </p>
 <ol><li class="mb-2">Enter your full monthly or annual salary. </li><li class="mb-2">Choose whether you want to calculate by working days, unpaid leave, or working hours. </li><li class="mb-2">Enter the number of days or hours. </li><li class="mb-2">Click <strong>Calculate Pro Rata Salary</strong>. </li><li>The calculator will show your estimated salary and pro rata percentage. </li></ol><p class="mt-3">The calculator also shows the formula and calculation steps so you can easily check the result. </p></section>
 <section class="mt-5"><h2 class="fw-bold mb-3">When Is Pro Rata Salary Used? </h2><p>A pro rata salary calculation can be useful in many common situations. </p>
 <h3 class="h5 fw-bold mt-4">Starting a New Job </h3>
 <p>If you start a job after the beginning of a pay period, you may only work part of that period. Your salary may then be calculated for the days you worked. </p>
 <h3 class="h5 fw-bold mt-4">Leaving a Job </h3>
 <p>If you leave your job before the end of a pay period, your final salary may be based on the time you worked. </p>
 <h3 class="h5 fw-bold mt-4">Taking Unpaid Leave </h3>
 <p>Unpaid days may be removed from your salary. A pro rata calculation can help estimate how much salary remains. </p>
 <h3 class="h5 fw-bold mt-4">Part-Time Work </h3><p>If you work fewer hours than a full-time schedule, your salary may be calculated as a proportion of the full salary. </p><h3 class="h5 fw-bold mt-4">Changing Your Work Schedule </h3><p>A pro rata calculation can also be useful when your working hours or employment arrangement changes during a pay period. </p></section>
 <section class="mt-5"><h2 class="fw-bold mb-3">Pro Rata Salary Example </h2><p>Suppose an employee earns <strong>$5,000 per month</strong>. There are <strong>22 working days</strong>in the month, and the employee works <strong>17 days</strong>. </p><p>Use the formula: </p><div class="bg-light rounded-3 p-3 mb-3">$5,000 × (17 ÷ 22) </div><p>First: </p><div class="bg-light rounded-3 p-3 mb-3">17 ÷ 22=0.7727 </div><p>Then: </p><div class="bg-light rounded-3 p-3 mb-3">$5,000 × 0.7727=<strong class="text-success">$3,863.64</strong></div><p>So, the estimated pro rata salary is <strong>$3,863.64</strong>. </p></section><section class="mt-5"><h2 class="fw-bold mb-3">Pro Rata Salary vs Full Salary </h2><p>A full salary is the amount you earn for the complete pay period. A pro rata salary is the part of that salary earned for the time or hours worked. </p><div class="table-responsive mt-3"><table class="table table-bordered align-middle"><thead class="table-light"><tr><th>Term</th><th>Meaning</th></tr></thead><tbody><tr><td><strong>Full Salary</strong></td><td>Salary for the complete pay period.</td></tr><tr><td><strong>Pro Rata Salary</strong></td><td>Part of the full salary for part of the period.</td></tr><tr><td><strong>Days Worked</strong></td><td>Number of working days completed.</td></tr><tr><td><strong>Unpaid Leave</strong></td><td>Working days that are not paid.</td></tr><tr><td><strong>Hours Worked</strong></td><td>Number of hours completed.</td></tr><tr><td><strong>Pro Rata Percentage</strong></td><td>Percentage of the full salary earned.</td></tr></tbody></table></div></section>
 <section class="mt-5">
 <h2>Does Pro Rata Salary Include Tax and Deductions? </h2>
 <p>The calculator gives an estimate of your <strong>gross pro rata salary</strong>. It does not normally include taxes, insurance, pension contributions, benefits, or other payroll deductions. </p><p>Because of these deductions, the amount you actually receive may be different. </p>
 <p class="small text-muted">Payroll rules can be different between employers and countries. Check your employment agreement or payroll policy for the exact method used by your employer. </p>
 </section>
 <section class="mt-5">
 <h2>Important Things to Remember </h2>
 <ul><li class="mb-2">Use the correct number of <strong>working days</strong>for the pay period. </li><li class="mb-2">Working days and calendar days are not always the same. </li><li class="mb-2">Enter unpaid leave days correctly when using the unpaid leave method. </li><li class="mb-2">Use the correct total working hours for hourly calculations. </li><li class="mb-2">The calculator gives an estimate and may not include payroll deductions. </li><li>Your employer may use a different payroll formula. </li></ul></section>




<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Pro Rata Salary Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">1. What is a pro rata salary?</div>
       <p class="mb-0">A pro rata salary is part of your full salary based on the amount of time or work you completed during a pay period.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">2. How do I calculate pro rata salary?</div>
         <p class="mb-0">Use this basic formula: <div class="bg-light rounded-3 p-3 my-3"> Pro Rata Salary = Full Salary × (Amount Worked ÷ Total Amount)</div> You can use working days or working hours as the amount worked.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">3. Can I calculate salary after unpaid leave?</div>
        <p class="mb-0">Yes. Subtract the unpaid leave days from the total working days to find the paid days, then calculate the salary based on those paid days.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">4. Can I use an annual salary?</div>
        <p class="mb-0">Yes. You can enter either a monthly salary or an annual salary in the calculator.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">5. Is pro rata salary the same as hourly pay?</div>
        <p class="mb-0">No. Pro rata salary is a part of a full salary. Hourly pay is based on an hourly rate. However, working hours can be used to calculate a pro rata salary.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">6. Is the result my exact take-home pay?</div>
        <p class="mb-0">Not always. The calculator gives an estimated gross pro rata salary. Taxes and other payroll deductions may change the final amount you receive.</p>
       </div>
     </div>
   </section>
      <!-- Did You Know? -->




<script src="{{ '/assets/js/other/pro-rata-salary-calc.js' | relative_url }}"></script>