// Variables to store chart instances
let paymentChart, balanceChart;

document.addEventListener('DOMContentLoaded', function () {
    // Initialize form validation
    setupFormValidation();

    // Setup loan term range slider
    const loanTermRange = document.getElementById('loanTermRange');
    const loanTermValue = document.getElementById('loanTermValue');

    loanTermRange.addEventListener('input', function () {
        loanTermValue.textContent = this.value;
        // Optional: trigger calculation on slider change
        // if (document.getElementById('results').classList.contains('d-none') === false) {
        //     document.getElementById('mortgageForm').dispatchEvent(new Event('submit'));
        // }
    });

    // Setup event listeners
    document.getElementById('mortgageForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            calculateMortgage();
        }
    });

    // Toggle between full schedule and summary
    document.getElementById('showFullSchedule')?.addEventListener('click', showFullSchedule);
    document.getElementById('showSummary')?.addEventListener('click', showSummarySchedule);
});

function setupFormValidation() {
    // Add input event listeners for validation
    document.getElementById('homePrice').addEventListener('input', formatCurrencyInput);
    document.getElementById('downPayment').addEventListener('input', formatCurrencyInput);
    document.getElementById('propertyTax').addEventListener('input', formatCurrencyInput);
    document.getElementById('homeInsurance').addEventListener('input', formatCurrencyInput);
    document.getElementById('hoaFees').addEventListener('input', formatCurrencyInput);

    // Add blur validation for all fields
    const inputs = document.querySelectorAll('#mortgageForm input, #mortgageForm select');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });
    });
}

function formatCurrencyInput(e) {
    const input = e.target;
    let value = input.value.replace(/,/g, '');

    // Remove any non-numeric characters except decimal point
    value = value.replace(/[^0-9.]/g, '');

    // Format with commas
    if (value) {
        const parts = value.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        input.value = parts.length > 1 ? parts[0] + '.' + parts[1] : parts[0];
    }
}

function validateField(field) {
    const fieldId = field.id;
    const value = field.value;
    let isValid = true;

    switch (fieldId) {
        case 'homePrice':
            const homePrice = parseNumber(value);
            isValid = !isNaN(homePrice) && homePrice >= 500;
            if (!isValid) {
                showError(field, 'homePriceError', 'Please enter a valid home price ($500 minimum)');
            }
            break;

        case 'downPayment':
            const downPayment = parseNumber(value);
            const homePriceVal = parseNumber(document.getElementById('homePrice').value);
            const downPaymentType = document.getElementById('downPaymentType').value;

            let downPaymentAmount;
            if (downPaymentType === '%') {
                downPaymentAmount = homePriceVal * (downPayment / 100);
                isValid = !isNaN(downPayment) && downPayment >= 3 && downPayment <= 100;
                if (!isValid) {
                    showError(field, 'downPaymentError', 'Down payment must be between 3% and 100%');
                }
            } else {
                downPaymentAmount = downPayment;
                const minDownPayment = homePriceVal * 0.03;
                isValid = !isNaN(downPayment) && downPayment >= minDownPayment && downPayment <= homePriceVal;
                if (!isValid) {
                    showError(field, 'downPaymentError', `Down payment must be between $${formatNumber(minDownPayment)} and $${formatNumber(homePriceVal)}`);
                }
            }
            break;

        case 'interestRate':
            const interestRate = parseFloat(value);
            isValid = !isNaN(interestRate) && interestRate >= 0.1 && interestRate <= 20;
            if (!isValid) {
                showError(field, 'interestRateError', 'Please enter a rate between 0.1% and 20%');
            }
            break;

        case 'propertyTax':
        case 'homeInsurance':
        case 'hoaFees':
            const numValue = parseNumber(value);
            isValid = !isNaN(numValue) && numValue >= 0;
            if (!isValid) {
                showError(field, `${fieldId}Error`, 'Must be 0 or positive value');
            }
            break;

        case 'pmi':
            const pmi = parseFloat(value);
            isValid = !isNaN(pmi) && pmi >= 0 && pmi <= 2;
            if (!isValid) {
                showError(field, 'pmiError', 'Must be between 0% and 2%');
            }
            break;
    }

    if (isValid) {
        clearError(field, `${fieldId}Error`);
    }

    return isValid;
}

function validateForm() {
    let isValid = true;
    const fieldsToValidate = [
        'homePrice', 'downPayment', 'interestRate',
        'propertyTax', 'homeInsurance', 'pmi', 'hoaFees'
    ];

    fieldsToValidate.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function showError(field, errorElementId, message) {
    field.classList.add('input-error');
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError(field, errorElementId) {
    field.classList.remove('input-error');
    const errorElement = document.getElementById(errorElementId);
    errorElement.style.display = 'none';
}

function calculateMortgage() {
    // Get and validate all input values
    const homePrice = parseNumber(document.getElementById('homePrice').value);
    const downPayment = parseNumber(document.getElementById('downPayment').value);
    const downPaymentType = document.getElementById('downPaymentType').value;
    const loanTerm = parseInt(document.getElementById('loanTermRange').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const propertyTax = parseNumber(document.getElementById('propertyTax').value) || 0;
    const homeInsurance = parseNumber(document.getElementById('homeInsurance').value) || 0;
    const pmi = parseFloat(document.getElementById('pmi').value) || 0;
    const hoaFees = parseNumber(document.getElementById('hoaFees').value) || 0;

    // Calculate down payment amount
    let downPaymentAmount;
    if (downPaymentType === '%') {
        downPaymentAmount = homePrice * (downPayment / 100);
    } else {
        downPaymentAmount = downPayment;
    }

    // Calculate loan amount
    const loanAmount = homePrice - downPaymentAmount;

    // Calculate loan term in months
    const loanTermMonths = loanTerm * 12;

    // Calculate monthly principal and interest
    let principalInterest = 0;
    if (interestRate > 0) {
        const x = Math.pow(1 + interestRate, loanTermMonths);
        principalInterest = (loanAmount * x * interestRate) / (x - 1);
    }

    // Calculate PMI (only if LTV > 80%)
    const ltv = (loanAmount / homePrice) * 100;
    let monthlyPmi = 0;
    if (ltv > 80) {
        monthlyPmi = (loanAmount * (pmi / 100)) / 12;
    }

    // Calculate monthly tax and insurance
    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;

    // Calculate total monthly payment
    const totalMonthly = principalInterest + monthlyPmi + monthlyTax + monthlyInsurance + hoaFees;

    // Calculate total interest and cost
    const totalInterest = (principalInterest * loanTermMonths) - loanAmount;
    const totalCost = homePrice + totalInterest + (monthlyPmi * loanTermMonths) + (propertyTax * loanTerm) + (homeInsurance * loanTerm) + (hoaFees * loanTermMonths);

    // Display results
    document.getElementById('displayHomePrice').textContent = formatNumber(homePrice);
    document.getElementById('downPaymentResult').textContent = formatNumber(downPaymentAmount);
    document.getElementById('loanAmount').textContent = formatNumber(loanAmount);
    document.getElementById('ltv').textContent = ltv.toFixed(1);
    document.getElementById('displayInterestRate').textContent = (interestRate * 12 * 100).toFixed(2);
    document.getElementById('displayLoanTerm').textContent = loanTerm;
    document.getElementById('principalInterest').textContent = formatNumber(principalInterest);
    document.getElementById('monthlyPmi').textContent = formatNumber(monthlyPmi);
    document.getElementById('monthlyTax').textContent = formatNumber(monthlyTax);
    document.getElementById('monthlyInsurance').textContent = formatNumber(monthlyInsurance);
    document.getElementById('hoaFeesResult').textContent = formatNumber(hoaFees);
    document.getElementById('totalMonthly').textContent = formatNumber(totalMonthly);
    document.getElementById('totalInterest').textContent = formatNumber(totalInterest);
    document.getElementById('totalCost').textContent = formatNumber(totalCost);

    // Update progress bar
    const downPaymentPercent = (downPaymentAmount / homePrice) * 100;
    document.getElementById('downPaymentProgress').style.width = `${downPaymentPercent}%`;
    document.getElementById('loanAmountProgress').style.width = `${100 - downPaymentPercent}%`;

    // Generate amortization schedule
    const schedule = generateAmortizationSchedule(
        loanAmount,
        interestRate,
        loanTermMonths,
        monthlyTax + monthlyInsurance + hoaFees
    );

    // Display amortization schedule
    displayAmortizationSchedule(schedule);

    // Create charts
    createCharts(schedule);

    // Show results
    document.getElementById('results').classList.remove('d-none');

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function generateAmortizationSchedule(principal, monthlyRate, termMonths, extraPayment) {
    let balance = principal;
    let schedule = [];
    let totalInterest = 0;
    let monthNumber = 1;
    let yearNumber = 1;

    // Calculate monthly payment (principal + interest only)
    const x = Math.pow(1 + monthlyRate, termMonths);
    const monthlyPIPayment = (principal * x * monthlyRate) / (x - 1);

    for (let month = 1; month <= termMonths; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPIPayment - interestPayment;
        totalInterest += interestPayment;

        // Handle final payment adjustment
        let payment = monthlyPIPayment;
        if (month === termMonths) {
            payment = balance + interestPayment;
        }

        balance -= principalPayment;
        if (balance < 0) balance = 0;

        schedule.push({
            year: yearNumber,
            month: monthNumber,
            payment: payment + extraPayment,
            principal: principalPayment,
            interest: interestPayment,
            extra: extraPayment,
            balance: balance,
            totalInterest: totalInterest
        });

        monthNumber++;
        if (monthNumber > 12) {
            monthNumber = 1;
            yearNumber++;
        }
    }

    return schedule;
}

function displayAmortizationSchedule(schedule) {
    const scheduleBody = document.getElementById('scheduleBody');
    const summaryFooter = document.getElementById('summaryFooter');
    scheduleBody.innerHTML = '';

    // Show first 12 months by default
    const displayMonths = schedule.slice(0, 12);

    displayMonths.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.month}</td>
            <td class="text-end">${formatCurrency(item.payment)}</td>
            <td class="text-end">${formatCurrency(item.principal)}</td>
            <td class="text-end">${formatCurrency(item.interest)}</td>
            <td class="text-end">${formatCurrency(item.extra)}</td>
            <td class="text-end">${formatCurrency(item.balance)}</td>
        `;
        scheduleBody.appendChild(row);
    });

    // Update summary
    if (schedule.length > 0) {
        // First year
        const firstYear = schedule.slice(0, 12);
        document.getElementById('firstYearPayment').textContent = formatCurrency(firstYear.reduce((sum, item) => sum + item.payment, 0));
        document.getElementById('firstYearPrincipal').textContent = formatCurrency(firstYear.reduce((sum, item) => sum + item.principal, 0));
        document.getElementById('firstYearInterest').textContent = formatCurrency(firstYear.reduce((sum, item) => sum + item.interest, 0));
        document.getElementById('firstYearTaxIns').textContent = formatCurrency(firstYear.reduce((sum, item) => sum + item.extra, 0));
        document.getElementById('firstYearBalance').textContent = formatCurrency(firstYear[firstYear.length - 1].balance);

        // Year 5 (months 49-60)
        if (schedule.length >= 60) {
            const year5 = schedule.slice(48, 60);
            document.getElementById('year5Payment').textContent = formatCurrency(year5.reduce((sum, item) => sum + item.payment, 0));
            document.getElementById('year5Principal').textContent = formatCurrency(year5.reduce((sum, item) => sum + item.principal, 0));
            document.getElementById('year5Interest').textContent = formatCurrency(year5.reduce((sum, item) => sum + item.interest, 0));
            document.getElementById('year5TaxIns').textContent = formatCurrency(year5.reduce((sum, item) => sum + item.extra, 0));
            document.getElementById('year5Balance').textContent = formatCurrency(year5[year5.length - 1].balance);
        }

        // Year 10 (months 109-120)
        if (schedule.length >= 120) {
            const year10 = schedule.slice(108, 120);
            document.getElementById('year10Payment').textContent = formatCurrency(year10.reduce((sum, item) => sum + item.payment, 0));
            document.getElementById('year10Principal').textContent = formatCurrency(year10.reduce((sum, item) => sum + item.principal, 0));
            document.getElementById('year10Interest').textContent = formatCurrency(year10.reduce((sum, item) => sum + item.interest, 0));
            document.getElementById('year10TaxIns').textContent = formatCurrency(year10.reduce((sum, item) => sum + item.extra, 0));
            document.getElementById('year10Balance').textContent = formatCurrency(year10[year10.length - 1].balance);
        }

        // Final year
        const finalYear = schedule.slice(-12);
        document.getElementById('finalYearPayment').textContent = formatCurrency(finalYear.reduce((sum, item) => sum + item.payment, 0));
        document.getElementById('finalYearPrincipal').textContent = formatCurrency(finalYear.reduce((sum, item) => sum + item.principal, 0));
        document.getElementById('finalYearInterest').textContent = formatCurrency(finalYear.reduce((sum, item) => sum + item.interest, 0));
        document.getElementById('finalYearTaxIns').textContent = formatCurrency(finalYear.reduce((sum, item) => sum + item.extra, 0));
        document.getElementById('finalYearBalance').textContent = formatCurrency(finalYear[finalYear.length - 1].balance);
    }
}

function showFullSchedule() {
    const scheduleBody = document.getElementById('scheduleBody');
    const summaryFooter = document.getElementById('summaryFooter');
    scheduleBody.innerHTML = '';

    // Get all schedule items (stored in a data attribute)
    const schedule = JSON.parse(document.getElementById('mortgageForm').getAttribute('data-schedule') || '[]');

    schedule.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.month}</td>
            <td class="text-end">${formatCurrency(item.payment)}</td>
            <td class="text-end">${formatCurrency(item.principal)}</td>
            <td class="text-end">${formatCurrency(item.interest)}</td>
            <td class="text-end">${formatCurrency(item.extra)}</td>
            <td class="text-end">${formatCurrency(item.balance)}</td>
        `;
        scheduleBody.appendChild(row);
    });

    summaryFooter.classList.add('d-none');
}

function showSummarySchedule() {
    const scheduleBody = document.getElementById('scheduleBody');
    const summaryFooter = document.getElementById('summaryFooter');
    scheduleBody.innerHTML = '';

    // Get all schedule items (stored in a data attribute)
    const schedule = JSON.parse(document.getElementById('mortgageForm').getAttribute('data-schedule') || '[]');

    // Show first 12 months
    const displayMonths = schedule.slice(0, 12);
    displayMonths.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.year}</td>
            <td>${item.month}</td>
            <td class="text-end">${formatCurrency(item.payment)}</td>
            <td class="text-end">${formatCurrency(item.principal)}</td>
            <td class="text-end">${formatCurrency(item.interest)}</td>
            <td class="text-end">${formatCurrency(item.extra)}</td>
            <td class="text-end">${formatCurrency(item.balance)}</td>
        `;
        scheduleBody.appendChild(row);
    });

    summaryFooter.classList.remove('d-none');
}

function createCharts(schedule) {
    const ctx1 = document.getElementById('paymentChart').getContext('2d');
    const ctx2 = document.getElementById('balanceChart').getContext('2d');

    // Destroy previous charts if they exist
    if (paymentChart) paymentChart.destroy();
    if (balanceChart) balanceChart.destroy();

    // Store schedule in form data attribute for later access
    document.getElementById('mortgageForm').setAttribute('data-schedule', JSON.stringify(schedule));

    // Prepare data for charts
    const years = [];
    const principalData = [];
    const interestData = [];
    const taxInsData = [];
    const balanceData = [];

    // Group by year
    let currentYear = 1;
    let yearPrincipal = 0;
    let yearInterest = 0;
    let yearTaxIns = 0;

    schedule.forEach((item, index) => {
        yearPrincipal += item.principal;
        yearInterest += item.interest;
        yearTaxIns += item.extra;

        if (item.month === 12 || index === schedule.length - 1) {
            years.push(`Year ${currentYear}`);
            principalData.push(yearPrincipal);
            interestData.push(yearInterest);
            taxInsData.push(yearTaxIns);
            balanceData.push(item.balance);

            currentYear++;
            yearPrincipal = 0;
            yearInterest = 0;
            yearTaxIns = 0;
        }
    });

    // Payment Breakdown Chart
    paymentChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest', 'Tax/Insurance'],
            datasets: [{
                data: [
                    schedule.reduce((sum, item) => sum + item.principal, 0),
                    schedule.reduce((sum, item) => sum + item.interest, 0),
                    schedule.reduce((sum, item) => sum + item.extra, 0)
                ],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(75, 192, 192, 0.8)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${formatCurrency(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // Loan Balance Chart
    balanceChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: 'Remaining Balance',
                data: balanceData,
                fill: true,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Balance: ${formatCurrency(context.raw)}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return formatCurrency(value, true);
                        }
                    }
                }
            }
        }
    });
}

function parseNumber(value) {
    if (typeof value === 'string') {
        return parseFloat(value.replace(/,/g, ''));
    }
    return value;
}

function formatNumber(num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(amount, compact = false) {
    if (isNaN(amount)) return '$0.00';

    if (compact && amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(1) + 'M';
    }
    if (compact && amount >= 1000) {
        return '$' + (amount / 1000).toFixed(0) + 'K';
    }
    return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}