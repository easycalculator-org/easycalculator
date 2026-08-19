 document.addEventListener('DOMContentLoaded', function() {
            // Get DOM elements
            const initialValueInput = document.getElementById('initialValue');
            const initialValueSlider = document.getElementById('initialValueSlider');
            const initialValueDisplay = document.getElementById('initialValueDisplay');
            
            const finalValueInput = document.getElementById('finalValue');
            const finalValueSlider = document.getElementById('finalValueSlider');
            const finalValueDisplay = document.getElementById('finalValueDisplay');
            
            const yearsInput = document.getElementById('years');
            const yearsSlider = document.getElementById('yearsSlider');
            const yearsDisplay = document.getElementById('yearsDisplay');
            
            const cagrForm = document.getElementById('cagrForm');
            const resultSection = document.getElementById('resultSection');
            const cagrResult = document.getElementById('cagrResult');
            const investmentSummary = document.getElementById('investmentSummary');
            const growthTableBody = document.getElementById('growthTableBody');
            
            let growthChart = null;
            
            // Initialize slider values
            initialValueSlider.value = 10000;
            initialValueInput.value = 10000;
            initialValueDisplay.textContent = '$10,000';
            
            finalValueSlider.value = 20000;
            finalValueInput.value = 20000;
            finalValueDisplay.textContent = '$20,000';
            
            yearsSlider.value = 5;
            yearsInput.value = 5;
            yearsDisplay.textContent = '5 years';
            
            // Sync inputs and sliders
            initialValueInput.addEventListener('input', function() {
                initialValueSlider.value = this.value;
                initialValueDisplay.textContent = '$' + Number(this.value).toLocaleString();
            });
            
            initialValueSlider.addEventListener('input', function() {
                initialValueInput.value = this.value;
                initialValueDisplay.textContent = '$' + Number(this.value).toLocaleString();
            });
            
            finalValueInput.addEventListener('input', function() {
                finalValueSlider.value = this.value;
                finalValueDisplay.textContent = '$' + Number(this.value).toLocaleString();
            });
            
            finalValueSlider.addEventListener('input', function() {
                finalValueInput.value = this.value;
                finalValueDisplay.textContent = '$' + Number(this.value).toLocaleString();
            });
            
            yearsInput.addEventListener('input', function() {
                yearsSlider.value = this.value;
                yearsDisplay.textContent = this.value + (this.value == 1 ? ' year' : ' years');
            });
            
            yearsSlider.addEventListener('input', function() {
                yearsInput.value = this.value;
                yearsDisplay.textContent = this.value + (this.value == 1 ? ' year' : ' years');
            });
            
            // Calculate CAGR on form submission
            cagrForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const initialValue = parseFloat(initialValueInput.value);
                const finalValue = parseFloat(finalValueInput.value);
                const years = parseFloat(yearsInput.value);
                
                if (initialValue <= 0 || finalValue <= 0 || years <= 0) {
                    alert('Please enter valid positive values for all fields.');
                    return;
                }
                
                if (initialValue >= finalValue) {
                    alert('Final value must be greater than initial value for positive growth.');
                    return;
                }
                
                // Calculate CAGR
                const cagr = Math.pow(finalValue / initialValue, 1 / years) - 1;
                const cagrPercent = (cagr * 100).toFixed(2);
                
                // Display result
                cagrResult.textContent = cagrPercent + '%';
                investmentSummary.textContent = `Your investment grew from $${initialValue.toLocaleString()} to $${finalValue.toLocaleString()} over ${years} ${years === 1 ? 'year' : 'years'}`;
                
                // Generate yearly growth data
                generateYearlyGrowthData(initialValue, finalValue, years, cagr);
                
                // Create growth chart
                createGrowthChart(initialValue, finalValue, years, cagr);
                
                // Show result section with animation
                resultSection.style.display = 'block';
                resultSection.scrollIntoView({ behavior: 'smooth' });
            });
            
            // Function to generate yearly growth data
            function generateYearlyGrowthData(initialValue, finalValue, years, cagr) {
                growthTableBody.innerHTML = '';
                let currentValue = initialValue;
                
                for (let year = 1; year <= years; year++) {
                    const startingValue = currentValue;
                    const yearlyGrowth = startingValue * cagr;
                    currentValue = startingValue + yearlyGrowth;
                    const growthPercent = (yearlyGrowth / startingValue) * 100;
                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${year}</td>
                        <td>$${startingValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${currentValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${yearlyGrowth.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>${growthPercent.toFixed(2)}%</td>
                    `;
                    
                    growthTableBody.appendChild(row);
                }
            }
            
            // Function to create growth chart
            function createGrowthChart(initialValue, finalValue, years, cagr) {
                const ctx = document.getElementById('growthChart').getContext('2d');
                
                // Destroy previous chart if it exists
                if (growthChart) {
                    growthChart.destroy();
                }
                
                // Generate data points for each year
                const labels = ['Year 0'];
                const data = [initialValue];
                
                let currentValue = initialValue;
                for (let year = 1; year <= years; year++) {
                    labels.push(`Year ${year}`);
                    currentValue = currentValue * (1 + cagr);
                    data.push(currentValue);
                }
                
                // Create new chart
                growthChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Investment Value',
                            data: data,
                            backgroundColor: 'rgba(106, 17, 203, 0.2)',
                            borderColor: 'rgba(106, 17, 203, 1)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(106, 17, 203, 1)',
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            fill: true,
                            tension: 0.3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Investment Growth Over Time',
                                font: {
                                    size: 16
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        return `Value: $${context.raw.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                ticks: {
                                    callback: function(value) {
                                        return '$' + value.toLocaleString();
                                    }
                                },
                                title: {
                                    display: true,
                                    text: 'Investment Value'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Year'
                                }
                            }
                        }
                    }
                });
            }
        });


        document.getElementById("resetCagr").addEventListener("click", function () {

    // Reset form
    document.getElementById("cagrForm").reset();

    // Reset sliders
    document.getElementById("initialValueSlider").value = 0;
    document.getElementById("finalValueSlider").value = 0;
    document.getElementById("yearsSlider").value = 1;

    // Reset slider labels
    document.getElementById("initialValueDisplay").textContent = "₹0";
    document.getElementById("finalValueDisplay").textContent = "₹0";
    document.getElementById("yearsDisplay").textContent = "1 year";

    // Hide result
    document.getElementById("resultSection").style.display = "none";

    // Clear yearly table
    document.getElementById("growthTableBody").innerHTML = "";

    // Reset result metrics if available
    const initialResult = document.getElementById("resultInitialValue");
    const finalResult = document.getElementById("resultFinalValue");
    const growthResult = document.getElementById("resultGrowth");

    if (initialResult) initialResult.textContent = "₹0";
    if (finalResult) finalResult.textContent = "₹0";
    if (growthResult) growthResult.textContent = "0%";

    // Reset CAGR
    document.getElementById("cagrResult").textContent = "0.00%";

    document.getElementById("investmentSummary").textContent =
        "Your investment grew from ₹0 to ₹0 over 0 years.";

    // Destroy existing chart if your JS exposes it globally
    if (typeof growthChart !== "undefined" && growthChart) {
        try {
            growthChart.destroy();
        } catch (e) {}
    }

});


/* =========================================
   DOWNLOAD CAGR RESULT AS PDF
   ========================================= */

const downloadCagrPdf = document.getElementById('downloadCagrPdf');

if (downloadCagrPdf) {

    downloadCagrPdf.addEventListener('click', function () {

        if (typeof window.jspdf === 'undefined') {
            alert('PDF library is not loaded. Please try again.');
            return;
        }

        const { jsPDF } = window.jspdf;

        const initialValue = parseFloat(initialValueInput.value);
        const finalValue = parseFloat(finalValueInput.value);
        const years = parseFloat(yearsInput.value);

        if (
            !Number.isFinite(initialValue) ||
            !Number.isFinite(finalValue) ||
            !Number.isFinite(years) ||
            initialValue <= 0 ||
            finalValue <= 0 ||
            years <= 0
        ) {
            alert('Please calculate CAGR before downloading the PDF.');
            return;
        }

        const cagr = Math.pow(
            finalValue / initialValue,
            1 / years
        ) - 1;

        const cagrPercent = cagr * 100;

        const totalGrowth =
            ((finalValue - initialValue) / initialValue) * 100;

        const growthAmount =
            finalValue - initialValue;

        const formatCurrency = (value) => {
            return '₹' + value.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        };

        const formatPercent = (value) => {
            return value.toFixed(2) + '%';
        };

        const today = new Date();

        const dateString = today.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        const doc = new jsPDF();

        /* -----------------------------------------
           PDF PAGE
           ----------------------------------------- */

        const pageWidth = doc.internal.pageSize.getWidth();

        /* Header */

        doc.setFillColor(15, 39, 71);
        doc.rect(0, 0, pageWidth, 38, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);

        doc.text(
            'CAGR Calculator',
            20,
            17
        );

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);

        doc.text(
            'Compound Annual Growth Rate',
            20,
            27
        );

        /* Brand */

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);

        doc.text(
            'EasyCalculator.org',
            pageWidth - 20,
            17,
            { align: 'right' }
        );

        /* -----------------------------------------
           Calculation Result
           ----------------------------------------- */

        doc.setTextColor(40, 40, 40);

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);

        doc.text(
            'CAGR Result',
            20,
            55
        );

        /* CAGR Highlight */

        doc.setFillColor(240, 247, 255);
        doc.roundedRect(
            20,
            62,
            pageWidth - 40,
            32,
            4,
            4,
            'F'
        );

        doc.setTextColor(15, 39, 71);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(26);

        doc.text(
            formatPercent(cagrPercent),
            pageWidth / 2,
            83,
            { align: 'center' }
        );

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);

        doc.text(
            'Compound Annual Growth Rate',
            pageWidth / 2,
            91,
            { align: 'center' }
        );

        /* -----------------------------------------
           Investment Details
           ----------------------------------------- */

        doc.setTextColor(40, 40, 40);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);

        doc.text(
            'Investment Details',
            20,
            113
        );

        const details = [
            ['Initial Value', formatCurrency(initialValue)],
            ['Final Value', formatCurrency(finalValue)],
            [
                'Investment Period',
                years + (years === 1 ? ' Year' : ' Years')
            ],
            ['Total Growth', formatPercent(totalGrowth)],
            ['Growth Amount', formatCurrency(growthAmount)]
        ];

        let y = 125;

        details.forEach((item, index) => {

            if (index % 2 === 0) {
                doc.setFillColor(248, 250, 252);
                doc.rect(
                    20,
                    y - 6,
                    pageWidth - 40,
                    11,
                    'F'
                );
            }

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.setTextColor(71, 85, 105);

            doc.text(
                item[0],
                24,
                y
            );

            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 39, 71);

            doc.text(
                item[1],
                pageWidth - 24,
                y,
                { align: 'right' }
            );

            y += 12;
        });

        /* -----------------------------------------
           CAGR Formula
           ----------------------------------------- */

        y += 8;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(40, 40, 40);

        doc.text(
            'CAGR Formula',
            20,
            y
        );

        y += 10;

        doc.setFillColor(248, 250, 252);
        doc.roundedRect(
            20,
            y - 5,
            pageWidth - 40,
            22,
            3,
            3,
            'F'
        );

        doc.setFont('courier', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(51, 65, 85);

        doc.text(
            'CAGR = (Final Value / Initial Value)^(1 / Years) - 1',
            25,
            y + 8
        );

        /* -----------------------------------------
           Actual Calculation
           ----------------------------------------- */

        y += 34;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(40, 40, 40);

        doc.text(
            'Calculation',
            20,
            y
        );

        y += 10;

        doc.setFont('courier', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(71, 85, 105);

        doc.text(
            `(${formatCurrency(finalValue)} / ${formatCurrency(initialValue)})`,
            20,
            y
        );

        y += 7;

        doc.text(
            `^(1 / ${years}) - 1`,
            20,
            y
        );

        y += 10;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(15, 39, 71);

        doc.text(
            `CAGR = ${formatPercent(cagrPercent)}`,
            20,
            y
        );

        /* -----------------------------------------
           Summary
           ----------------------------------------- */

        y += 20;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(71, 85, 105);

        const summary =
            `The investment grew from ${formatCurrency(initialValue)} ` +
            `to ${formatCurrency(finalValue)} over ${years} ` +
            `${years === 1 ? 'year' : 'years'}, representing a ` +
            `compound annual growth rate of ${formatPercent(cagrPercent)}.`;

        const summaryLines = doc.splitTextToSize(
            summary,
            pageWidth - 40
        );

        doc.text(
            summaryLines,
            20,
            y
        );

        /* -----------------------------------------
           Footer
           ----------------------------------------- */

        const pageHeight =
            doc.internal.pageSize.getHeight();

        doc.setDrawColor(220, 226, 232);

        doc.line(
            20,
            pageHeight - 22,
            pageWidth - 20,
            pageHeight - 22
        );

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(100, 116, 139);

        doc.text(
            `Generated on ${dateString}`,
            20,
            pageHeight - 13
        );

        doc.text(
            'EasyCalculator.org',
            pageWidth - 20,
            pageHeight - 13,
            { align: 'right' }
        );

        /* -----------------------------------------
           Download
           ----------------------------------------- */

        const fileName =
            `CAGR-Calculator-${cagrPercent.toFixed(2)}-percent.pdf`;

        doc.save(fileName);
    });
}

/* =========================================
   DOWNLOAD CAGR PDF
   ========================================= */

document.addEventListener('DOMContentLoaded', function () {

    const downloadButton = document.getElementById('downloadCagrPdf');

    if (!downloadButton) {
        console.error('Download PDF button not found.');
        return;
    }

    downloadButton.addEventListener('click', function () {

        /* Check jsPDF */
        if (!window.jspdf || !window.jspdf.jsPDF) {
            alert('PDF library could not be loaded. Please refresh the page and try again.');
            console.error('jsPDF library not found.');
            return;
        }

        /* Get calculator values */
        const initialValue = parseFloat(
            document.getElementById('initialValue').value
        );

        const finalValue = parseFloat(
            document.getElementById('finalValue').value
        );

        const years = parseFloat(
            document.getElementById('years').value
        );

        /* Validate */
        if (
            !Number.isFinite(initialValue) ||
            !Number.isFinite(finalValue) ||
            !Number.isFinite(years) ||
            initialValue <= 0 ||
            finalValue <= 0 ||
            years <= 0
        ) {
            alert('Please calculate CAGR first.');
            return;
        }

        /* Calculate CAGR */
        const cagr =
            (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;

        const totalGrowth =
            ((finalValue - initialValue) / initialValue) * 100;

        const growthAmount =
            finalValue - initialValue;

        /* Currency formatter */
        function money(value) {
            return '₹' + value.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        /* Date */
        const today = new Date();

        const dateText = today.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });

        /* Create PDF */
        const { jsPDF } = window.jspdf;

        const pdf = new jsPDF();

        const pageWidth =
            pdf.internal.pageSize.getWidth();

        const pageHeight =
            pdf.internal.pageSize.getHeight();

        /* =====================================
           HEADER
           ===================================== */

        pdf.setFillColor(15, 39, 71);

        pdf.rect(
            0,
            0,
            pageWidth,
            38,
            'F'
        );

        pdf.setTextColor(255, 255, 255);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(20);

        pdf.text(
            'CAGR Calculator',
            20,
            17
        );

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);

        pdf.text(
            'Compound Annual Growth Rate',
            20,
            27
        );

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(10);

        pdf.text(
            'EasyCalculator.org',
            pageWidth - 20,
            17,
            {
                align: 'right'
            }
        );

        /* =====================================
           RESULT
           ===================================== */

        pdf.setTextColor(40, 40, 40);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);

        pdf.text(
            'CAGR Result',
            20,
            55
        );

        /* Result box */

        pdf.setFillColor(240, 247, 255);

        pdf.roundedRect(
            20,
            62,
            pageWidth - 40,
            32,
            4,
            4,
            'F'
        );

        pdf.setTextColor(15, 39, 71);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(26);

        pdf.text(
            cagr.toFixed(2) + '%',
            pageWidth / 2,
            82,
            {
                align: 'center'
            }
        );

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);

        pdf.text(
            'Compound Annual Growth Rate',
            pageWidth / 2,
            90,
            {
                align: 'center'
            }
        );

        /* =====================================
           INVESTMENT DETAILS
           ===================================== */

        pdf.setTextColor(40, 40, 40);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);

        pdf.text(
            'Investment Details',
            20,
            113
        );

        const details = [
            ['Initial Value', money(initialValue)],
            ['Final Value', money(finalValue)],
            [
                'Investment Period',
                years + (years === 1 ? ' Year' : ' Years')
            ],
            ['Growth Amount', money(growthAmount)],
            ['Total Growth', totalGrowth.toFixed(2) + '%']
        ];

        let y = 126;

        details.forEach(function (item, index) {

            if (index % 2 === 0) {
                pdf.setFillColor(248, 250, 252);

                pdf.rect(
                    20,
                    y - 7,
                    pageWidth - 40,
                    12,
                    'F'
                );
            }

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);

            pdf.setTextColor(71, 85, 105);

            pdf.text(
                item[0],
                24,
                y
            );

            pdf.setFont('helvetica', 'bold');

            pdf.setTextColor(15, 39, 71);

            pdf.text(
                item[1],
                pageWidth - 24,
                y,
                {
                    align: 'right'
                }
            );

            y += 13;
        });

        /* =====================================
           FORMULA
           ===================================== */

        y += 8;

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);

        pdf.setTextColor(40, 40, 40);

        pdf.text(
            'CAGR Formula',
            20,
            y
        );

        y += 10;

        pdf.setFillColor(248, 250, 252);

        pdf.roundedRect(
            20,
            y - 6,
            pageWidth - 40,
            22,
            3,
            3,
            'F'
        );

        pdf.setFont('courier', 'normal');
        pdf.setFontSize(9);

        pdf.setTextColor(51, 65, 85);

        pdf.text(
            'CAGR = (Final Value / Initial Value)^(1 / Years) - 1',
            25,
            y + 8
        );

        /* =====================================
           CALCULATION
           ===================================== */

        y += 35;

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);

        pdf.setTextColor(40, 40, 40);

        pdf.text(
            'Calculation',
            20,
            y
        );

        y += 10;

        pdf.setFont('courier', 'normal');
        pdf.setFontSize(9);

        pdf.setTextColor(71, 85, 105);

        pdf.text(
            `(${money(finalValue)} / ${money(initialValue)})^(1/${years}) - 1`,
            20,
            y
        );

        y += 10;

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);

        pdf.setTextColor(15, 39, 71);

        pdf.text(
            'CAGR = ' + cagr.toFixed(2) + '%',
            20,
            y
        );

        /* =====================================
           SUMMARY
           ===================================== */

        y += 20;

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);

        pdf.setTextColor(71, 85, 105);

        const summary =
            `The investment grew from ${money(initialValue)} ` +
            `to ${money(finalValue)} over ${years} ` +
            `${years === 1 ? 'year' : 'years'}, representing ` +
            `a compound annual growth rate of ${cagr.toFixed(2)}%.`;

        const summaryLines =
            pdf.splitTextToSize(
                summary,
                pageWidth - 40
            );

        pdf.text(
            summaryLines,
            20,
            y
        );

        /* =====================================
           FOOTER
           ===================================== */

        pdf.setDrawColor(220, 226, 232);

        pdf.line(
            20,
            pageHeight - 22,
            pageWidth - 20,
            pageHeight - 22
        );

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);

        pdf.setTextColor(100, 116, 139);

        pdf.text(
            'Generated on ' + dateText,
            20,
            pageHeight - 13
        );

        pdf.text(
            'EasyCalculator.org',
            pageWidth - 20,
            pageHeight - 13,
            {
                align: 'right'
            }
        );


        const filename =
            'CAGR-Calculator-' +
            cagr.toFixed(2) +
            '-percent.pdf';

        pdf.save(filename);

    });

});