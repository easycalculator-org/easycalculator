
  
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

            text = text.replace(
                /₹/g,
                "INR "
            );


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

    doc.save(
        "compound-interest-calculator.pdf"
    );
}

document.addEventListener(
    "DOMContentLoaded",
    function() {

        convertPrincipal();

        calculateCI();

    }
);