// Initialize jsPDF
const { jsPDF } = window.jspdf;
document.addEventListener('DOMContentLoaded', function () {
    let loanChart = null;
    let currentLoanData = null;
    // Get DOM elements
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const downloadPdfBtn = document.getElementById('downloadPdf');
    const shareResultsBtn = document.getElementById('shareResults');
    const loanForm = document.getElementById('loanForm');

    // Format numbers with commas and 2 decimal places
    function formatNumber(num) {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }
    // Calculate loan function
    function calculateLoan() {
        // Get input values
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
        let loanTerm = parseInt(document.getElementById('loanTerm').value);
        const termType = document.querySelector('input[name="termType"]:checked').value;

        // Validate inputs
        if (isNaN(loanAmount) || loanAmount <= 0) {
            alert("Please enter a valid loan amount");
            return;
        }
        if (isNaN(interestRate) || interestRate <= 0) {
            alert("Please enter a valid interest rate");
            return;
        }
        if (isNaN(loanTerm) || loanTerm <= 0) {
            alert("Please enter a valid loan term");
            return;
        }
        // Convert term to months if in years
        const numberOfPayments = termType === 'years' ? loanTerm * 12 : loanTerm;
        // Calculate monthly payment
        const monthlyRate = interestRate / 12;
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        // Calculate total values
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - loanAmount;
        // Store current loan data for PDF generation
        currentLoanData = {
            loanAmount,
            interestRate: interestRate * 100,
            term: loanTerm,
            termType,
            monthlyPayment,
            totalInterest,
            totalPayment,
            schedule: []
        };
        // Display results
        document.getElementById('monthlyPayment').textContent = formatNumber(monthlyPayment);
        document.getElementById('totalInterest').textContent = formatNumber(totalInterest);
        document.getElementById('totalPayment').textContent = formatNumber(totalPayment);
        // Generate payment schedule
        generatePaymentSchedule(loanAmount, monthlyRate, monthlyPayment, numberOfPayments);
        // Update chart
        updateChart(loanAmount, totalInterest);
        // Enable download and share buttons
        downloadPdfBtn.disabled = false;
        shareResultsBtn.disabled = false;
    }
    // Generate payment schedule
    function generatePaymentSchedule(loanAmount, monthlyRate, monthlyPayment, numberOfPayments) {
        let balance = loanAmount;
        let scheduleHTML = '';
        currentLoanData.schedule = [];
        for (let month = 1; month <= numberOfPayments; month++) {
            const interestPayment = balance * monthlyRate;
            const principalPayment = monthlyPayment - interestPayment;
            balance -= principalPayment;
            // Ensure balance doesn't go below zero due to rounding
            if (balance < 0) balance = 0;
            // Add to schedule array for PDF
            currentLoanData.schedule.push({
                month,
                payment: monthlyPayment,
                principal: principalPayment,
                interest: interestPayment,
                balance
            });
            // Add to HTML table
            scheduleHTML += `
                <tr>
                    <td>${month}</td>
                    <td>${formatNumber(monthlyPayment)}</td>
                    <td>${formatNumber(principalPayment)}</td>
                    <td>${formatNumber(interestPayment)}</td>
                    <td>${formatNumber(balance)}</td>
                </tr>
            `;
            // Stop if balance is zero (might happen due to rounding)
            if (balance <= 0) break;
        }
        document.getElementById('paymentSchedule').innerHTML = scheduleHTML;
    }

    // Update chart function
    function updateChart(principal, interest) {
        const ctx = document.getElementById('loanChart').getContext('2d');
        const chartPlaceholder = document.getElementById('chartPlaceholder');

        // Hide placeholder and show chart
        chartPlaceholder.style.display = 'none';
        document.getElementById('loanChart').style.display = 'block';

        // Destroy previous chart if it exists
        if (loanChart) {
            loanChart.destroy();
        }
        // Create chart
        loanChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Principal', 'Interest'],
                datasets: [{
                    data: [principal, interest],
                    backgroundColor: [
                        'rgba(13, 110, 253, 0.7)',
                        'rgba(108, 117, 125, 0.7)'
                    ],
                    borderColor: [
                        'rgba(13, 110, 253, 1)',
                        'rgba(108, 117, 125, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.raw || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${formatNumber(value)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Reset calculator function
    function resetCalculator() {
        // Reset form
        loanForm.reset();

        // Reset results
        document.getElementById('monthlyPayment').textContent = '0.00';
        document.getElementById('totalInterest').textContent = '0.00';
        document.getElementById('totalPayment').textContent = '0.00';

        // Reset payment schedule
        document.getElementById('paymentSchedule').innerHTML = `
            <tr>
                <td colspan="5" class="text-center text-muted">Enter loan details and click Calculate to see payment schedule</td>
            </tr>
        `;

        // Reset chart
        if (loanChart) {
            loanChart.destroy();
            loanChart = null;
        }
        document.getElementById('chartPlaceholder').style.display = 'flex';
        document.getElementById('loanChart').style.display = 'none';

        // Disable download and share buttons
        downloadPdfBtn.disabled = true;
        shareResultsBtn.disabled = true;

        // Clear current loan data
        currentLoanData = null;
    }

    // Toggle term input min value based on selection
    document.querySelectorAll('input[name="termType"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const termInput = document.getElementById('loanTerm');
            termInput.min = this.value === 'years' ? 1 : 1;
            termInput.value = this.value === 'years' ? 5 : 60;
        });
    });

    // PDF Download functionality
    downloadPdfBtn.addEventListener('click', function () {
        if (!currentLoanData) return;

        const doc = new jsPDF();

        // Add title

        doc.setFontSize(18);
        doc.text('Loan Calculator Results - EasyCalculator.org', 105, 15, { align: 'center' });

        // Add loan details
        doc.setFontSize(12);
        doc.text(`Loan Amount: ${formatNumber(currentLoanData.loanAmount)}`, 14, 30);
        doc.text(`Interest Rate: ${currentLoanData.interestRate.toFixed(2)}%`, 14, 38);
        doc.text(`Loan Term: ${currentLoanData.term} ${currentLoanData.termType}`, 14, 46);

        // Add summary
        doc.text(`Monthly Payment: ${formatNumber(currentLoanData.monthlyPayment)}`, 105, 30);
        doc.text(`Total Interest: ${formatNumber(currentLoanData.totalInterest)}`, 105, 38);
        doc.text(`Total Payment: ${formatNumber(currentLoanData.totalPayment)}`, 105, 46);

        // Add chart image (simplified as text in PDF)
        doc.setFontSize(14);
        doc.text('Loan Composition:', 14, 60);
        doc.text(`Principal: ${formatNumber(currentLoanData.loanAmount)}`, 20, 70);
        doc.text(`Interest: ${formatNumber(currentLoanData.totalInterest)}`, 20, 78);

        // Add payment schedule table
        doc.setFontSize(14);
        doc.text('Payment Schedule:', 14, 90);

        // Prepare table data (first 12 months and last 12 months)
        const tableData = [];
        const schedule = currentLoanData.schedule;
        const totalMonths = schedule.length;

        // Add first 12 months
        const first12 = schedule.slice(0, 12);
        first12.forEach(payment => {
            tableData.push([
                payment.month,
                formatNumber(payment.payment),
                formatNumber(payment.principal),
                formatNumber(payment.interest),
                formatNumber(payment.balance)
            ]);
        });

        // Add divider if needed
        if (totalMonths > 24) {
            tableData.push(['...', '...', '...', '...', '...']);
        }

        // Add last 12 months
        if (totalMonths > 12) {
            const last12 = schedule.slice(-12);
            last12.forEach(payment => {
                tableData.push([
                    payment.month,
                    formatNumber(payment.payment),
                    formatNumber(payment.principal),
                    formatNumber(payment.interest),
                    formatNumber(payment.balance)
                ]);
            });
        }

        // Add table (using jspdf-autotable)
        doc.autoTable({
            startY: 95,
            head: [['Month', 'Payment', 'Principal', 'Interest', 'Balance']],
            body: tableData,
            margin: { left: 14 },
            styles: { fontSize: 8 },
            headStyles: { fillColor: [13, 110, 253] }
        });

        // Save the PDF
        doc.save('Loan_Calculation_Results.pdf');
    });

    // Share functionality
    shareResultsBtn.addEventListener('click', function () {
        if (!currentLoanData) return;

        const shareData = {
            title: 'Loan Calculation Results',
            text: `Loan Details:
- Amount: ${formatNumber(currentLoanData.loanAmount)}
- Interest Rate: ${currentLoanData.interestRate.toFixed(2)}%
- Term: ${currentLoanData.term} ${currentLoanData.termType}
        
Monthly Payment: ${formatNumber(currentLoanData.monthlyPayment)}
Total Interest: ${formatNumber(currentLoanData.totalInterest)}
Total Payment: ${formatNumber(currentLoanData.totalPayment)}`,
            url: 'https://easycalculator.org/loan'
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Shared successfully'))
                .catch(err => console.log('Error sharing:', err));
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Web Share API not supported in your browser. Here are your results:\n\n' + shareData.text);
        }
    });

    // Event listeners
    calculateBtn.addEventListener('click', calculateLoan);
    resetBtn.addEventListener('click', resetCalculator);

    // Calculate on page load
    calculateLoan();
});