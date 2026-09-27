---
layout: default
title: Salary Hike Calculator – Pay Raise Percentage & New Salary
permalink: /salary-hike-calculator
description: "Calculate your new salary after a hike using our free Salary Hike Calculator. Enter your current salary and hike percentage to instantly find your salary increase and updated pay."
image: "/assets/images/salary-hike-calculator.svg"
last_modified_at: 2026-03-28
---
<style>
.ec-hike{--ink:#18324d;--muted:#53677b;--blue:#245bbc;margin:24px auto 44px;padding:0 16px;color:var(--ink);line-height:1.65}.ec-hike *{box-sizing:border-box}.ec-hike [hidden]{display:none!important}.ec-hike h1{font-size:clamp(1.7rem,4vw,2.35rem);margin:0 0 8px}.ec-hike h2{font-size:1.5rem;margin:28px 0 12px}.ec-hike h3{font-size:1.13rem;margin:20px 0 8px}.ec-hike p{margin:0 0 16px}.ec-hike .sh-intro{text-align:center;max-width:750px;margin:0 auto 24px}.ec-hike .sh-muted{color:var(--muted)}.ec-hike .sh-panel{padding:clamp(18px,3vw,30px);background:linear-gradient(130deg,#f0f6ff,#fff);border:1px solid #d8e4f3;border-radius:20px;box-shadow:0 12px 32px #15304a0a}.ec-hike .sh-modes{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px}.ec-hike button{font:inherit;cursor:pointer;border-radius:10px;padding:10px 16px;border:1px solid #b4c8df;background:#fff;color:var(--ink);font-weight:600}.ec-hike button[aria-pressed=true],.ec-hike .sh-primary{background:var(--blue);color:#fff;border-color:var(--blue)}.ec-hike button:disabled{opacity:.5;cursor:not-allowed}.ec-hike :focus-visible{outline:3px solid #e0a328;outline-offset:3px}.ec-hike .sh-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.ec-hike .sh-fields{display:grid;grid-template-columns:1fr 1fr;gap:16px}.ec-hike .sh-wide{grid-column:1/-1}.ec-hike label{display:block;font-weight:600;margin-bottom:6px}.ec-hike input,.ec-hike select{width:100%;min-height:46px;border:1px solid #a9bdd3;border-radius:9px;background:white;padding:10px 12px;color:var(--ink);font:inherit}.ec-hike small{display:block;color:var(--muted);margin-top:5px}.ec-hike .sh-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.ec-hike .sh-result{background:#fff;border:1px solid #d9e5f2;border-radius:16px;padding:22px;min-width:0}.ec-hike .sh-big{font-weight:750;font-size:clamp(1.6rem,3.5vw,2.3rem);overflow-wrap:anywhere;line-height:1.3;margin:8px 0 16px}.ec-hike .sh-badge{display:inline-block;background:#e5f6ed;color:#12643a;padding:5px 12px;border-radius:30px;font-weight:700}.ec-hike .sh-negative{background:#fff0f0;color:#a52232}.ec-hike dl{margin:20px 0 0}.ec-hike dl>div{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #edf1f5}.ec-hike dt{font-weight:400}.ec-hike dd{text-align:right;font-weight:650;margin:0;overflow-wrap:anywhere}.ec-hike .sh-error{color:#a52232;margin:12px 0 0}.ec-hike .sh-table-wrap{overflow:auto;margin:18px 0}.ec-hike table{width:100%;border-collapse:collapse;white-space:nowrap}.ec-hike th,.ec-hike td{padding:12px;text-align:right;border-bottom:1px solid #dae4ef}.ec-hike th:first-child,.ec-hike td:first-child{text-align:left}.ec-hike thead{background:#eef4fc}.ec-hike .sh-note{padding:16px;background:#f3f7fb;border-radius:6px;margin:18px 0}.ec-hike .article-container{margin-top:36px}.ec-hike .sh-meta{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-bottom:1px solid #dde5ef;padding-bottom:16px;margin-bottom:24px;font-size:.9rem}.ec-hike details{background:#f5f8fc;border:1px solid #dce5ef;border-radius:10px;padding:15px 18px;margin:12px 0}.ec-hike summary{cursor:pointer;font-weight:650}.ec-hike details p{margin:12px 0 0}.ec-hike a{color:#245bbc}.ec-hike .sh-formula{font-size:1.05rem;font-weight:600;background:#edf4ff;padding:16px;border-radius:10px;margin-bottom:14px}@media(max-width:720px){.ec-hike .sh-grid{grid-template-columns:1fr}.ec-hike .sh-panel{padding:16px}.ec-hike .sh-fields{gap:12px}.ec-hike th,.ec-hike td{padding:10px 8px}}@media(max-width:380px){.ec-hike .sh-fields{grid-template-columns:1fr}}
</style>
<div class="ec-hike" id="ec-salary-hike">
  <header class="sh-intro"><h1>Salary Hike Calculator</h1><p class="sh-muted">Find your pay raise percentage or calculate your new salary. Choose your currency, compare pay periods and download your results as a PDF.</p></header>
  <section class="sh-panel" aria-label="Salary hike calculator">
    <div class="sh-modes" role="group" aria-label="Calculation mode"><button type="button" id="sh-mode-compare" aria-pressed="true">Current + new salary</button><button type="button" id="sh-mode-percent" aria-pressed="false">Current salary + hike %</button></div>
    <div class="sh-grid">
      <form id="sh-form" novalidate>
        <div class="sh-fields">
          <div><label for="sh-currency">Currency</label><select id="sh-currency"><option value="">Any currency (no symbol)</option><option value="USD">USD — US Dollar</option><option value="EUR">EUR — Euro</option><option value="GBP">GBP — British Pound</option><option value="INR">INR — Indian Rupee</option><option value="CAD">CAD — Canadian Dollar</option><option value="AUD">AUD — Australian Dollar</option><option value="AED">AED — UAE Dirham</option><option value="SAR">SAR — Saudi Riyal</option><option value="SGD">SGD — Singapore Dollar</option><option value="JPY">JPY — Japanese Yen</option><option value="CNY">CNY — Chinese Yuan</option><option value="CHF">CHF — Swiss Franc</option><option value="NZD">NZD — New Zealand Dollar</option><option value="ZAR">ZAR — South African Rand</option><option value="BRL">BRL — Brazilian Real</option><option value="MXN">MXN — Mexican Peso</option><option value="PKR">PKR — Pakistani Rupee</option><option value="BDT">BDT — Bangladeshi Taka</option><option value="NPR">NPR — Nepalese Rupee</option><option value="PHP">PHP — Philippine Peso</option><option value="IDR">IDR — Indonesian Rupiah</option><option value="KRW">KRW — South Korean Won</option><option value="NGN">NGN — Nigerian Naira</option></select></div>
          <div><label for="sh-period">Salary paid per</label><select id="sh-period"><option value="1">Year</option><option value="12">Month</option><option value="24">Half-month (24/year)</option><option value="26">Two weeks (26/year)</option><option value="52">Week (52/year)</option></select></div>
          <div class="sh-wide"><label for="sh-format">Number format</label><select id="sh-format"><option value="en-US">International: 1,234,567.89</option><option value="en-IN">Indian: 12,34,567.89</option><option value="de-DE">European: 1.234.567,89</option></select><small>Enter ungrouped amounts with a decimal point, e.g. 50000.50. This setting formats results only.</small></div>
          <div class="sh-wide"><label for="sh-current">Current salary</label><input id="sh-current" type="number" min="0.01" max="1000000000000" step="any" inputmode="decimal" placeholder="e.g. 80000" required aria-describedby="sh-input-note sh-error"></div>
          <div class="sh-wide" id="sh-new-field"><label for="sh-new">New salary</label><input id="sh-new" type="number" min="0" max="1000000000000" step="any" inputmode="decimal" placeholder="e.g. 100000" required aria-describedby="sh-input-note sh-error"></div>
          <div class="sh-wide" id="sh-rate-field" hidden><label for="sh-rate">Salary hike (%)</label><input id="sh-rate" type="number" min="-100" max="100000" step="any" inputmode="decimal" placeholder="e.g. 10" disabled aria-describedby="sh-error"><small>A negative percentage calculates a pay cut.</small></div>
        </div>
        <small id="sh-input-note">Use the same currency and pay period for both amounts. Currency selection does not convert money.</small>
        <p id="sh-error" class="sh-error" role="alert" hidden></p>
        <div class="sh-actions"><button type="submit" class="sh-primary">Calculate</button><button type="button" id="sh-example">Try example</button><button type="reset">Reset</button></div>
      </form>
      <div class="sh-result" aria-live="polite" aria-atomic="true">
        <div id="sh-empty"><h2 style="margin-top:0">Your salary comparison</h2><p class="sh-muted">Enter your salary details and select Calculate to see your revised pay, percentage change and yearly difference.</p></div>
        <div id="sh-output" hidden><div id="sh-result-label" class="sh-muted">New salary</div><div id="sh-total" class="sh-big"></div><span id="sh-badge" class="sh-badge"></span><dl><div><dt>Current salary</dt><dd id="sh-old"></dd></div><div><dt>Change per selected period</dt><dd id="sh-difference"></dd></div><div><dt>Annual change</dt><dd id="sh-annual"></dd></div></dl></div>
        <div class="sh-actions"><button id="sh-download" type="button" disabled>Download PDF</button></div><small id="sh-pdf-status" role="status">Calculate a result to enable your PDF report.</small>
      </div>
    </div>
    <div id="sh-breakdown" hidden><h2>Salary breakdown</h2><div class="sh-table-wrap"><table><caption class="sh-muted">Estimated equivalent pay; rounded for display.</caption><thead><tr><th scope="col">Pay period</th><th scope="col">Current</th><th scope="col">New</th><th scope="col">Change</th></tr></thead><tbody id="sh-rows"></tbody></table></div><p class="sh-muted">Conversions assume 12 months, 24 half-months, 26 two-week periods or 52 weeks per year. Monthly figures are averages, not a payroll schedule.</p></div>
  </section>

<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>5 min read</span>
    </div>
  </div>
<!-- Article-->
<h2>Calculate your salary hike and understand your pay raise</h2>
<p>A salary hike is an increase in pay compared with your previous salary. It can follow an annual review, promotion, role change or new job offer. This salary hike calculator shows the percentage change, the extra amount per pay period and the equivalent annual difference.</p>
<p>You can calculate a hike from your current and new salaries, or enter a proposed percentage to find your revised salary. Use annual, monthly, weekly, two-weekly or half-monthly figures. Compare the same type of pay in both fields: for example, gross base salary with gross base salary.</p>
<div class="bg-light p-4"><h2>How to use the salary hike calculator</h2>
<ol><li><strong>Choose a calculation mode.</strong> Use “Current + new salary” to find the percentage, or “Current salary + hike %” to find revised pay.</li><li><strong>Select your currency and pay period.</strong> Currency codes make amounts clear for international users. “Any currency” works without a currency label.</li><li><strong>Enter your figures.</strong> Type plain numbers such as 80000 or 80000.50, without currency symbols or thousands separators.</li><li><strong>Select Calculate.</strong> Review the pay change and equivalent salary breakdown.</li><li><strong>Download the PDF.</strong> Save a report of the calculated figures, inputs, formulas and conversion assumptions.</li></ol></div>
 <h2>Salary hike formulas</h2>
 <div class="sh-formula">Salary hike (%) = ((New salary − Current salary) ÷ Current salary) × 100</div>
 <p>The current salary is the starting point, so it is the denominator. A positive result means a pay increase, zero means no change and a negative result means a pay cut. Percentage change cannot be calculated from a current salary of zero.</p>
 <div class="sh-formula">New salary = Current salary × (1 + Hike percentage ÷ 100)</div>
    <p><strong>Hike amount = New salary − Current salary.</strong> For a monthly salary, multiply this change by 12 to estimate the annual increase if the revised pay applies for a full year.</p>
    <h2>Salary hike examples in different currencies</h2>
    <p>The calculation is the same in every currency. These independent examples illustrate the formula; they are not exchange-rate conversions.</p>
    <div class="sh-table-wrap"><table><thead><tr><th scope="col">Currency / period</th><th scope="col">Current salary</th><th scope="col">New salary</th><th scope="col">Hike</th></tr></thead><tbody><tr><td>USD / year</td><td>60,000</td><td>66,000</td><td>10%</td></tr><tr><td>EUR / year</td><td>40,000</td><td>44,800</td><td>12%</td></tr><tr><td>GBP / year</td><td>35,000</td><td>38,500</td><td>10%</td></tr><tr><td>INR / month</td><td>50,000</td><td>60,000</td><td>20%</td></tr><tr><td>AED / month</td><td>10,000</td><td>11,500</td><td>15%</td></tr></tbody></table></div>
    <h3>Example: an annual salary rises from 80,000 to 100,000</h3><p>The increase is 100,000 − 80,000 = <strong>20,000</strong>. Divide by 80,000 and multiply by 100: (20,000 ÷ 80,000) × 100 = <strong>25%</strong>. The monthly equivalent rises from approximately 6,666.67 to 8,333.33. The average monthly increase is approximately 1,666.67.</p>
    <h3>Example: a 15% raise on a monthly salary of 50,000</h3><p>The revised salary is 50,000 × 1.15 = <strong>57,500 per month</strong>. The increase is 7,500 per month, or 90,000 over a full 12 months. All amounts remain in the currency you entered.</p>
    <h2>Monthly salary versus annual salary</h2><p>Use matching pay periods when comparing salaries. If your current salary is 4,000 per month and an offer is 54,000 per year, convert the current salary to 48,000 per year first. The hike is then (54,000 − 48,000) ÷ 48,000 × 100 = <strong>12.5%</strong>.</p><p>Two-weekly pay and twice-monthly pay are different: this calculator uses 26 two-week periods and 24 half-month periods per year. Extra payroll dates, a 13th-month salary, irregular hours and variable bonuses require separate adjustments.</p>
    <h2>Does a salary hike mean the same increase in take-home pay?</h2><p>No. This calculator measures the change between the amounts you enter. It does not calculate taxes, pension contributions, insurance or other deductions. An increase in gross salary may produce a different percentage increase in take-home pay. If you enter known net-pay figures instead, the result compares those figures only.</p><div class="sh-note"><strong>Compare like with like:</strong> Base salary, total compensation and cost to company (CTC) may include different components. Compare equivalent components and working hours to make the percentage meaningful.</div>
    <h2>Successive hikes and a raise partway through the year</h2><p>Successive raises compound. A 10% increase followed by another 10% increase produces a total increase of <strong>21%</strong>, because 1.10 × 1.10 = 1.21. You should not simply add the percentages.</p><p>The annual difference shown assumes the revised rate applies for a full year. If a monthly raise of 500 begins with only six paid months left in the year, the additional pay for those six months is 3,000. For partial periods, try the <a href="/pro-rata-salary-calculator">pro rata salary calculator</a>.</p>
<!-- FAQ Section -->
<section class="p-4">
  <h2 class="mb-4">FAQ on Salary Hike Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">How do I calculate my salary hike percentage?</div>
       <p class="mb-0">Subtract your current salary from your new salary, divide the difference by your current salary and multiply by 100. Use the same currency and pay period for both amounts.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">How do I calculate a 20% salary increase?</div>
         <p class="mb-0">Multiply your current salary by 1.20. For example, a salary of 50,000 becomes 60,000, an increase of 10,000 in the same currency and pay period.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">Can I use this calculator for any country or currency?</div>
        <p class="mb-0">Yes. The percentage formula works with any currency. Select a currency code or use the no-symbol option. The calculator does not convert currencies or apply country-specific payroll rules.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can I calculate a salary decrease?</div>
        <p class="mb-0">Yes. Enter a new salary below your current salary, or enter a negative hike percentage. For example, a change from 50,000 to 45,000 is a 10% decrease. A decrease cannot exceed 100%.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Does this calculator include taxes and deductions?</div>
        <p class="mb-0">No. It compares the salary amounts you enter without calculating taxes or deductions. Use comparable gross figures, or known net figures, for both salaries.</p>
       </div>
     </div>
      <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can I download my salary hike calculation as a PDF?</div>
        <p class="mb-0">Yes. Calculate your result, then select Download PDF to save your salary comparison, percentage change, formulas and pay-period assumptions.</p>
       </div>
     </div>
   <h2>Related calculators</h2><p><a href="/percentage-increase-calculator">Percentage increase calculator</a> · <a href="/percentage-change-calculator">Percentage change calculator</a> · <a href="/pro-rata-salary-calculator">Pro rata salary calculator</a> · <a href="/compound-percentage-calculator">Compound percentage calculator</a></p>
   </section>
   
</div>
</div>




 

<script src="{{ '/assets/js/salary-hike-calc.js' | relative_url }}"></script>