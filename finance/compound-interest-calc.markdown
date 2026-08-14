---
layout: default
title: Free Compound Interest Calculator – Daily, Monthly, Yearly
permalink: /compound-interest-calculator
description: "Plan your future. Use our free compound interest calculator to estimate returns on investments, with principal, rate, and time options"
last_modified_at: 2026-05-28
---

<style>
.ci-calculator{--ci-primary:#2563eb;--ci-primary-dark:#1d4ed8;--ci-bg:#f8fafc;--ci-border:#e2e8f0;--ci-text:#1e293b;--ci-muted:#64748b;--ci-success:#059669}.ci-calculator .ci-card{border:1px solid var(--ci-border);border-radius:16px;background:#fff;box-shadow:0 6px 24px #0f172a0f}.ci-calculator .ci-header{background:linear-gradient(135deg,#1e40af,#2563eb);color:#fff;padding:20px;border-radius:16px 16px 0 0}.ci-calculator .form-label{font-size:.86rem;font-weight:600;color:var(--ci-text);margin-bottom:6px}.ci-calculator .form-control,.ci-calculator .form-select{border:1px solid var(--ci-border);border-radius:9px;min-height:44px}.ci-calculator .form-control:focus,.ci-calculator .form-select:focus{border-color:var(--ci-primary);box-shadow:0 0 0 .2rem #2563eb1a}.ci-calculator .result-box{background:var(--ci-bg);border:1px solid var(--ci-border);border-radius:12px;padding:14px;height:100%}.ci-calculator .result-label{color:var(--ci-muted);font-size:.78rem;font-weight:600;text-transform:uppercase;letter-spacing:.3px}.ci-calculator .result-value{font-size:1.35rem;font-weight:700;color:var(--ci-text);margin-top:4px;word-break:break-word}.ci-calculator .result-value.success{color:var(--ci-success)}.ci-calculator .small-text{font-size:.8rem;color:var(--ci-muted)}.ci-calculator .section-title{font-size:1rem;font-weight:700;color:var(--ci-text);margin-bottom:15px}.ci-calculator .btn{border-radius:9px;min-height:44px;font-weight:600}.ci-calculator .table{font-size:.88rem}.ci-calculator .table thead th{background:#f1f5f9;color:#334155;white-space:nowrap}.ci-calculator .table td,.ci-calculator .table th{vertical-align:middle}.ci-calculator .summary-strip{background:#eff6ff;border:1px solid #dbeafe;border-radius:12px;padding:13px 15px}.ci-calculator .chart-container{position:relative;height:280px}.ci-calculator .advanced-options{background:#f8fafc;border:1px solid var(--ci-border);border-radius:12px;padding:15px}@media(max-width:767px){.ci-calculator .result-value{font-size:1.1rem}.ci-calculator .chart-container{height:230px}}@media print{.ci-calculator .no-print{display:none!important}.ci-calculator .ci-card{box-shadow:none;border:1px solid #ddd}}
</style>


<div class="ci-calculator">

<div class="row g-4">

<!-- ================= INPUT ================= -->
<div class="col-lg-5">

<div class="ci-card">

<div class="ci-header">
    <h4 class="mb-1">Compound Interest Calculator</h4>
    <div class="small opacity-75">
        Calculate compound interest with regular contributions and detailed yearly growth.
    </div>
</div>

<div class="p-4">

<div class="section-title">Investment Details</div>

<!-- Principal -->
<div class="mb-3">
    <label class="form-label">Initial Principal Amount</label>
    <input type="number"
           id="principal"
           class="form-control"
           value="100000"
           min="0"
           step="0.01"
           oninput="convertPrincipal(); calculateCI();">

    <div id="principalWords" class="small-text mt-1"></div>
</div>

<!-- Rate -->
<div class="mb-3">
    <label class="form-label">Annual Interest Rate (%)</label>
    <input type="number"
           id="rate"
           class="form-control"
           value="8"
           min="0"
           step="0.01"
           oninput="calculateCI();">
</div>

<!-- Time -->
<div class="mb-3">
    <label class="form-label">Investment Period (Years)</label>
    <input type="number"
           id="time"
           class="form-control"
           value="10"
           min="0"
           step="0.1"
           oninput="calculateCI();">
</div>

<!-- Compound -->
<div class="mb-3">
    <label class="form-label">Compounding Frequency</label>

    <select id="compound"
            class="form-select"
            onchange="calculateCI();">

        <option value="1">Yearly</option>
        <option value="2">Half-Yearly</option>
        <option value="4">Quarterly</option>
        <option value="12" selected>Monthly</option>
        <option value="365">Daily</option>
        <option value="custom">Custom</option>

    </select>
</div>

<!-- Custom -->
<div class="mb-3 d-none" id="customCompoundBox">

    <label class="form-label">
        Custom Compounding Frequency
    </label>

    <input type="number"
           id="customCompound"
           class="form-control"
           value="6"
           min="1"
           step="1"
           oninput="calculateCI();">

    <div class="small-text mt-1">
        Number of times interest is compounded per year.
    </div>

</div>


<!-- Advanced -->
<div class="advanced-options mt-3">

<div class="section-title mb-3">
    Regular Contribution
</div>

<div class="row g-3">

<div class="col-7">

<label class="form-label">
    Contribution Amount
</label>

<input type="number"
       id="contribution"
       class="form-control"
       value="0"
       min="0"
       step="0.01"
       oninput="calculateCI();">

</div>

<div class="col-5">

<label class="form-label">
    Frequency
</label>

<select id="contributionFrequency"
        class="form-select"
        onchange="calculateCI();">

<option value="monthly">Monthly</option>
<option value="yearly">Yearly</option>

</select>

</div>

<div class="col-12">

<label class="form-label">
    Contribution Timing
</label>

<select id="contributionTiming"
        class="form-select"
        onchange="calculateCI();">

<option value="end">End of Period</option>
<option value="beginning">Beginning of Period</option>

</select>

</div>

</div>

</div>


<!-- Buttons -->
<div class="d-grid gap-2 mt-4 no-print">

<button class="btn btn-primary"
        onclick="calculateCI()">

<i class="fas fa-calculator me-1"></i>
Calculate

</button>

<button class="btn btn-outline-secondary"
        onclick="resetCI()">

<i class="fas fa-rotate-left me-1"></i>
Reset

</button>

<button class="btn btn-outline-success"
        onclick="downloadPDF()">

<i class="fas fa-file-pdf me-1"></i>
Download PDF Report

</button>

</div>

</div>
</div>
</div>


<!-- ================= RESULT ================= -->
<div class="col-lg-7">

<div class="ci-card p-4">

<div class="d-flex justify-content-between align-items-center mb-3">

<div>
    <div class="section-title mb-1">
        Investment Summary
    </div>

    <div class="small-text">
        Estimated compound growth
    </div>
</div>

<div class="badge bg-success-subtle text-success px-3 py-2">
    Compound Growth
</div>

</div>


<!-- Summary -->
<div class="row g-3">

<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Years</div>
<div id="resultYears" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Principal</div>
<div id="resultPrincipal" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">
<div class="result-label">Contributions</div>
<div id="resultContribution" class="result-value">—</div>
</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Interest Earned
</div>

<div id="interestAmount"
     class="result-value success">
    —
</div>

</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Total Amount
</div>

<div id="totalAmount"
     class="result-value">
    —
</div>

</div>

</div>


<div class="col-sm-4">

<div class="result-box">

<div class="result-label">
    Return Amount
</div>

<div id="returnAmount"
     class="result-value success">
    —
</div>

</div>

</div>

</div>


<div class="summary-strip mt-3">

<div class="row g-2">

<div class="col-md-6">
    <span class="small-text">Effective Annual Rate:</span>
    <strong id="effectiveRate">—</strong>
</div>

<div class="col-md-6">
    <span class="small-text">Interest % of Investment:</span>
    <strong id="returnPercentage">—</strong>
</div>

</div>

</div>


<!-- Chart -->
<div class="mt-4">

<div class="section-title">
    Investment Growth
</div>

<div class="chart-container">
    <canvas id="chart"></canvas>
</div>

</div>


<!-- Year Table -->
<div class="mt-4">

<div class="d-flex justify-content-between align-items-center mb-2">

<div class="section-title mb-0">
    Year-wise Growth
</div>

<div class="small-text">
    Amounts are estimates
</div>

</div>


<div class="table-responsive">

<table class="table table-bordered table-sm">

<thead>

<tr>
<th>Year</th>
<th>Principal</th>
<th>Contribution</th>
<th>Interest</th>
<th>Total Amount</th>
<th>Return</th>
</tr>

</thead>

<tbody id="yearTable"></tbody>

</table>

</div>

</div>

</div>
</div>

</div>


<!-- ================= ARTICLE ================= -->

<div class="article-container mt-5">

<div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">

<div class="d-flex align-items-center gap-3 flex-wrap">

{% include naren_create.html %}
{% include reema_verify.html %}

</div>

<div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0">

<i class="fas fa-calendar"></i>

Last Updated:
{{ site.time | date: "%d-%m-%Y" }}

</div>

</div>

<!-- Article Content -->

</div>

</div>


<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- jsPDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<!-- jsPDF AutoTable -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"></script>



<script>
let ciChart = null;

/* =========================
   FORMAT MONEY
========================= */
function formatMoney(value) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(value || 0);
}


/* =========================
   NUMBER TO WORDS
========================= */
function numberToWords(num) {

    num = Math.floor(Number(num));

    if (!num) return "Zero";

    const ones = [
        "", "One", "Two", "Three", "Four", "Five",
        "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen",
        "Nineteen"
    ];

    const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    function convert(n) {

        if (n < 20) return ones[n];

        if (n < 100) {
            return tens[Math.floor(n / 10)] +
                (n % 10 ? " " + ones[n % 10] : "");
        }

        if (n < 1000) {
            return ones[Math.floor(n / 100)] +
                " Hundred " +
                (n % 100 ? convert(n % 100) : "");
        }

        if (n < 100000) {
            return convert(Math.floor(n / 1000)) +
                " Thousand " +
                (n % 1000 ? convert(n % 1000) : "");
        }

        if (n < 10000000) {
            return convert(Math.floor(n / 100000)) +
                " Lakh " +
                (n % 100000 ? convert(n % 100000) : "");
        }

        return convert(Math.floor(n / 10000000)) +
            " Crore " +
            (n % 10000000 ? convert(n % 10000000) : "");
    }

    return convert(num).replace(/\s+/g, " ").trim();
}


/* =========================
   PRINCIPAL WORDS
========================= */
function convertPrincipal() {

    const principal =
        parseFloat(document.getElementById("principal").value) || 0;

    document.getElementById("principalWords").textContent =
        principal > 0
            ? numberToWords(principal) + " Rupees"
            : "";
}


/* =========================
   COMPOUND FREQUENCY
========================= */
function getCompoundFrequency() {

    const value =
        document.getElementById("compound").value;

    if (value === "custom") {

        return Math.max(
            1,
            parseInt(
                document.getElementById("customCompound").value
            ) || 1
        );
    }

    return parseInt(value) || 1;
}


/* =========================
   MAIN CALCULATOR
========================= */
function calculateCI() {

    const principal =
        Math.max(
            0,
            parseFloat(
                document.getElementById("principal").value
            ) || 0
        );

    const annualRate =
        Math.max(
            0,
            parseFloat(
                document.getElementById("rate").value
            ) || 0
        );

    const years =
        Math.max(
            0,
            parseFloat(
                document.getElementById("time").value
            ) || 0
        );

    const compoundFrequency =
        getCompoundFrequency();

    const contribution =
        Math.max(
            0,
            parseFloat(
                document.getElementById("contribution").value
            ) || 0
        );

    const contributionFrequency =
        document.getElementById("contributionFrequency").value;

    const contributionTiming =
        document.getElementById("contributionTiming").value;


    /* --------------------------------
       Effective Annual Rate
    -------------------------------- */

    const periodicRate =
        (annualRate / 100) / compoundFrequency;

    const effectiveAnnualRate =
        Math.pow(
            1 + periodicRate,
            compoundFrequency
        ) - 1;


    document.getElementById("effectiveRate").textContent =
        (effectiveAnnualRate * 100).toFixed(2) + "%";


    /* --------------------------------
       Contribution periods
    -------------------------------- */

    const contributionPeriods =
        contributionFrequency === "monthly"
            ? 12
            : 1;

    const contributionRate =
        Math.pow(
            1 + effectiveAnnualRate,
            1 / contributionPeriods
        ) - 1;


    /* --------------------------------
       Year-wise calculation
    -------------------------------- */

    const yearTable =
        document.getElementById("yearTable");

    yearTable.innerHTML = "";

    let chartLabels = [];
    let chartAmounts = [];

    let finalAmount = principal;
    let totalContributions = 0;

    const wholeYears = Math.floor(years);
    const remainingMonths =
        Math.round((years - wholeYears) * 12);


    /* --------------------------------
       Calculate each complete year
    -------------------------------- */

    for (let year = 1; year <= wholeYears; year++) {

        /* Principal growth */
        const principalGrowth =
            principal *
            Math.pow(
                1 + effectiveAnnualRate,
                year
            );


        /* Contributions */
        let contributionValue = 0;
        let investedContribution = 0;

        if (contribution > 0) {

            if (contributionFrequency === "monthly") {

                const months = year * 12;

                investedContribution =
                    contribution * months;

                for (let month = 1; month <= months; month++) {

                    const monthsRemaining =
                        months - month;

                    let exponent =
                        monthsRemaining;

                    if (
                        contributionTiming === "beginning"
                    ) {
                        exponent = monthsRemaining + 1;
                    }

                    contributionValue +=
                        contribution *
                        Math.pow(
                            1 + contributionRate,
                            exponent
                        );
                }

            } else {

                investedContribution =
                    contribution * year;

                for (let i = 1; i <= year; i++) {

                    const yearsRemaining =
                        year - i;

                    let exponent =
                        yearsRemaining;

                    if (
                        contributionTiming === "beginning"
                    ) {
                        exponent =
                            yearsRemaining + 1;
                    }

                    contributionValue +=
                        contribution *
                        Math.pow(
                            1 + effectiveAnnualRate,
                            exponent
                        );
                }
            }
        }


        const totalInvested =
            principal +
            investedContribution;


        const totalAmount =
            principalGrowth +
            contributionValue;


        const interestEarned =
            totalAmount -
            totalInvested;


        const returnAmount =
            interestEarned;


        finalAmount = totalAmount;

        totalContributions =
            investedContribution;


        /* --------------------------------
           Add row
        -------------------------------- */

        yearTable.innerHTML += `

        <tr>

            <td>
                <strong>${year}</strong>
            </td>

            <td>
                ${formatMoney(principal)}
            </td>

            <td>
                ${formatMoney(investedContribution)}
            </td>

            <td class="text-success">
                ${formatMoney(interestEarned)}
            </td>

            <td>
                <strong>
                    ${formatMoney(totalAmount)}
                </strong>
            </td>

            <td class="text-success">
                ${formatMoney(returnAmount)}
            </td>

        </tr>

        `;


        chartLabels.push("Year " + year);
        chartAmounts.push(totalAmount);
    }


    /* --------------------------------
       Partial year
    -------------------------------- */

    if (remainingMonths > 0) {

        const totalMonths =
            wholeYears * 12 +
            remainingMonths;


        const principalGrowth =
            principal *
            Math.pow(
                1 + effectiveAnnualRate,
                totalMonths / 12
            );


        let contributionValue = 0;

        let investedContribution = 0;


        if (contribution > 0) {

            if (
                contributionFrequency === "monthly"
            ) {

                investedContribution =
                    contribution *
                    totalMonths;

                for (
                    let month = 1;
                    month <= totalMonths;
                    month++
                ) {

                    const monthsRemaining =
                        totalMonths - month;

                    let exponent =
                        monthsRemaining;

                    if (
                        contributionTiming === "beginning"
                    ) {
                        exponent++;
                    }

                    contributionValue +=
                        contribution *
                        Math.pow(
                            1 + contributionRate,
                            exponent
                        );
                }

            } else {

                /*
                 * Yearly contribution is made only
                 * when a complete year is reached.
                 */
                investedContribution =
                    contribution * wholeYears;

                for (
                    let i = 1;
                    i <= wholeYears;
                    i++
                ) {

                    const yearsRemaining =
                        years - i;

                    let exponent =
                        yearsRemaining;

                    if (
                        contributionTiming === "beginning"
                    ) {
                        exponent++;
                    }

                    contributionValue +=
                        contribution *
                        Math.pow(
                            1 + effectiveAnnualRate,
                            exponent
                        );
                }
            }
        }


        const totalAmount =
            principalGrowth +
            contributionValue;


        const interestEarned =
            totalAmount -
            principal -
            investedContribution;


        yearTable.innerHTML += `

        <tr>

            <td>
                <strong>${years}</strong>
            </td>

            <td>
                ${formatMoney(principal)}
            </td>

            <td>
                ${formatMoney(investedContribution)}
            </td>

            <td class="text-success">
                ${formatMoney(interestEarned)}
            </td>

            <td>
                <strong>
                    ${formatMoney(totalAmount)}
                </strong>
            </td>

            <td class="text-success">
                ${formatMoney(interestEarned)}
            </td>

        </tr>

        `;


        chartLabels.push("Year " + years);
        chartAmounts.push(totalAmount);

        finalAmount = totalAmount;
        totalContributions = investedContribution;
    }


    /* --------------------------------
       If 0 years
    -------------------------------- */

    if (years === 0) {

        finalAmount = principal;

        totalContributions = 0;

        yearTable.innerHTML = `
            <tr>
                <td colspan="6"
                    class="text-center text-muted">
                    Enter an investment period greater than 0 years.
                </td>
            </tr>
        `;
    }


    /* --------------------------------
       Final Results
    -------------------------------- */

    const interestEarned =
        finalAmount -
        principal -
        totalContributions;


    const totalInvested =
        principal +
        totalContributions;


    document.getElementById("resultYears").textContent =
        years + (years === 1 ? " Year" : " Years");


    document.getElementById("resultPrincipal").textContent =
        formatMoney(principal);


    document.getElementById("resultContribution").textContent =
        formatMoney(totalContributions);


    document.getElementById("interestAmount").textContent =
        formatMoney(interestEarned);


    document.getElementById("totalAmount").textContent =
        formatMoney(finalAmount);


    document.getElementById("returnAmount").textContent =
        formatMoney(interestEarned);


    const returnPercentage =
        totalInvested > 0
            ? (interestEarned / totalInvested) * 100
            : 0;


    document.getElementById("returnPercentage").textContent =
        returnPercentage.toFixed(2) + "%";


    /* --------------------------------
       Chart
    -------------------------------- */

    createChart(
        chartLabels,
        chartAmounts
    );
}


/* =========================
   CHART
========================= */
function createChart(labels, amounts) {

    const canvas =
        document.getElementById("chart");

    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    if (ciChart) {
        ciChart.destroy();
    }


    ciChart = new Chart(canvas, {

        type: "line",

        data: {

            labels: labels,

            datasets: [{

                label: "Total Amount",

                data: amounts,

                borderWidth: 2,

                fill: true,

                tension: 0.35,

                pointRadius: 3

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: true
                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            return formatMoney(
                                context.raw
                            );
                        }

                    }

                }

            },

            scales: {

                y: {

                    ticks: {

                        callback: function(value) {

                            return "₹" +
                                Number(value)
                                .toLocaleString("en-IN");

                        }

                    }

                }

            }

        }

    });
}


/* =========================
   RESET
========================= */
function resetCI() {

    document.getElementById("principal").value =
        100000;

    document.getElementById("rate").value =
        8;

    document.getElementById("time").value =
        10;

    document.getElementById("compound").value =
        12;

    document.getElementById("customCompound").value =
        6;

    document.getElementById("contribution").value =
        0;

    document.getElementById("contributionFrequency").value =
        "monthly";

    document.getElementById("contributionTiming").value =
        "end";

    document.getElementById("customCompoundBox")
        .classList.add("d-none");

    convertPrincipal();

    calculateCI();
}



function downloadPDF() {

    if (
        typeof window.jspdf === "undefined" ||
        typeof window.jspdf.jsPDF === "undefined"
    ) {
        alert("PDF library could not be loaded.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF("p", "mm", "a4");

    const pageWidth =
        doc.internal.pageSize.getWidth();

    const pageHeight =
        doc.internal.pageSize.getHeight();

    const margin = 15;

    let y = 18;


    /* =================================
       PDF MONEY FORMAT
       Use INR instead of ₹ because
       default jsPDF fonts don't support ₹
    ================================= */

    function pdfMoney(value) {

        value = Number(value) || 0;

        return "INR " +
            value.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
    }


    /* =================================
       GET CALCULATOR VALUES
    ================================= */

    const principal =
        parseFloat(
            document.getElementById("principal").value
        ) || 0;

    const rate =
        parseFloat(
            document.getElementById("rate").value
        ) || 0;

    const years =
        parseFloat(
            document.getElementById("time").value
        ) || 0;

    const compoundFrequency =
        getCompoundFrequency();

    const contribution =
        parseFloat(
            document.getElementById("contribution").value
        ) || 0;

    const totalAmount =
        document.getElementById("totalAmount")
            .textContent
            .trim();

    const interestAmount =
        document.getElementById("interestAmount")
            .textContent
            .trim();

    const totalContribution =
        document.getElementById("resultContribution")
            .textContent
            .trim();

    const returnAmount =
        document.getElementById("returnAmount")
            .textContent
            .trim();

    const effectiveRate =
        document.getElementById("effectiveRate")
            .textContent
            .trim();


    /* =================================
       HEADER
    ================================= */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(19);

    doc.text(
        "Compound Interest Calculator",
        margin,
        y
    );

    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);

    doc.text(
        "EasyCalculator.org",
        margin,
        y
    );

    y += 7;

    doc.setLineWidth(0.5);

    doc.line(
        margin,
        y,
        pageWidth - margin,
        y
    );

    y += 10;


    /* =================================
       INVESTMENT DETAILS
    ================================= */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);

    doc.text(
        "Investment Details",
        margin,
        y
    );

    y += 9;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);


    function addDetail(label, value) {

        doc.setFont("helvetica", "normal");

        doc.text(
            label,
            margin,
            y
        );

        doc.setFont("helvetica", "bold");

        doc.text(
            value,
            82,
            y
        );

        y += 7;

    }


    addDetail(
        "Principal Amount:",
        pdfMoney(principal)
    );

    addDetail(
        "Annual Interest Rate:",
        rate + "%"
    );

    addDetail(
        "Investment Period:",
        years + (years === 1 ? " Year" : " Years")
    );

    addDetail(
        "Compounding Frequency:",
        compoundFrequency + " times per year"
    );

    addDetail(
        "Regular Contribution:",
        pdfMoney(contribution)
    );


    y += 6;


    /* =================================
       CALCULATION RESULTS
    ================================= */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);

    doc.text(
        "Calculation Results",
        margin,
        y
    );

    y += 9;

    doc.setFontSize(10);


    addDetail(
        "Principal:",
        principal > 0
            ? pdfMoney(principal)
            : "INR 0.00"
    );

    addDetail(
        "Total Contributions:",
        totalContribution.replace("₹", "INR ")
    );

    addDetail(
        "Interest Earned:",
        interestAmount.replace("₹", "INR ")
    );

    addDetail(
        "Return Amount:",
        returnAmount.replace("₹", "INR ")
    );

    addDetail(
        "Total Amount:",
        totalAmount.replace("₹", "INR ")
    );

    addDetail(
        "Effective Annual Rate:",
        effectiveRate
    );


    y += 8;


    /* =================================
       YEAR-WISE GROWTH
    ================================= */

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);

    doc.text(
        "Year-wise Growth",
        margin,
        y
    );

    y += 8;


    const tableX = margin;

    const colWidths = [
        15,
        32,
        32,
        32,
        42,
        27
    ];

    const headers = [
        "Year",
        "Principal",
        "Contribution",
        "Interest",
        "Total Amount",
        "Return"
    ];


    function drawTableHeader() {

        let x = tableX;

        doc.setFont(
            "helvetica",
            "bold"
        );

        doc.setFontSize(7);

        headers.forEach(
            function(header, index) {

                doc.rect(
                    x,
                    y,
                    colWidths[index],
                    8
                );

                doc.text(
                    header,
                    x + 2,
                    y + 5
                );

                x += colWidths[index];

            }
        );

        y += 8;
    }


    drawTableHeader();


    /* =================================
       YEAR TABLE
    ================================= */

    const rows =
        document.querySelectorAll(
            "#yearTable tr"
        );


    doc.setFont(
        "helvetica",
        "normal"
    );

    doc.setFontSize(7);


    rows.forEach(function(row) {

        const cells =
            row.querySelectorAll("td");


        if (cells.length !== 6) {
            return;
        }


        /* New page */

        if (y > pageHeight - 25) {

            doc.addPage();

            y = 18;

            doc.setFont(
                "helvetica",
                "bold"
            );

            doc.setFontSize(13);

            doc.text(
                "Year-wise Growth",
                margin,
                y
            );

            y += 8;

            drawTableHeader();

            doc.setFont(
                "helvetica",
                "normal"
            );

            doc.setFontSize(7);
        }


        let x = tableX;


        for (
            let i = 0;
            i < cells.length;
            i++
        ) {

            let text =
                cells[i]
                    .textContent
                    .replace(/\s+/g, " ")
                    .trim();


            /*
             * Replace rupee symbol with INR
             */

            text = text.replace(
                /₹/g,
                "INR "
            );


            /*
             * Remove unwanted special
             * characters if any
             */

            text = text.replace(
                /[^\x20-\x7E]/g,
                ""
            );


            doc.rect(
                x,
                y,
                colWidths[i],
                7
            );


            doc.text(
                text,
                x + 2,
                y + 4.5,
                {
                    maxWidth:
                        colWidths[i] - 4
                }
            );


            x += colWidths[i];

        }


        y += 7;

    });


    /* =================================
       FOOTER
    ================================= */

    const pageCount =
        doc.internal.getNumberOfPages();


    for (
        let page = 1;
        page <= pageCount;
        page++
    ) {

        doc.setPage(page);

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(8);

        doc.text(
            "Generated by EasyCalculator.org",
            margin,
            pageHeight - 8
        );

        doc.text(
            "Page " +
            page +
            " of " +
            pageCount,
            pageWidth - 40,
            pageHeight - 8
        );

    }


    /* =================================
       DOWNLOAD
    ================================= */

    doc.save(
        "compound-interest-calculator.pdf"
    );
}







/* =========================
   INITIAL LOAD
========================= */
document.addEventListener(
    "DOMContentLoaded",
    function() {

        convertPrincipal();

        calculateCI();

    }
);
</script>





<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>







<!-- 

<script src="{{ '/assets/js/finance/compound-interest-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script> -->