const principalInput = document.getElementById('principal');
const interestInput = document.getElementById('interest');
const yearsInput = document.getElementById('years');
const yearDisplay = document.getElementById('yearDisplay');
const principalWords = document.getElementById('principalWords');
const monthlyEMI = document.getElementById('monthlyEMI');
const totalInterest = document.getElementById('totalInterest');
const totalPayment = document.getElementById('totalPayment');
const amortizationSchedule = document.getElementById('amortizationSchedule');
const breakdownChartCtx = document.getElementById('breakdownChart').getContext('2d');

let chart;

function updateCalculator() {
    const principal = parseFloat(principalInput.value) || 0;
    const annualRate = parseFloat(interestInput.value) || 0;
    const years = parseInt(yearsInput.value, 10) || 1;
    const months = years * 12;
    const monthlyRate = annualRate / 100 / 12;

    // EMI Calculation
    const emi = principal * monthlyRate * (Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterestPayable = totalPayable - principal;

    // Update Display
    monthlyEMI.textContent = emi.toFixed(2);
    totalInterest.textContent = totalInterestPayable.toFixed(2);
    totalPayment.textContent = totalPayable.toFixed(2);
    yearDisplay.textContent = `${years} years`;
    principalWords.textContent = `(${convertToWords(principal)} only)`;

    // Update Pie Chart
    updatePieChart(principal, totalInterestPayable);

    // Generate Amortization Schedule
    generateAmortizationSchedule(principal, monthlyRate, emi, months);
}

function updatePieChart(principal, interest) {
    if (chart) chart.destroy();

    chart = new Chart(breakdownChartCtx, {
        type: 'pie',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: ['#007bff', '#ffc107']
            }]
        }
    });
}

function generateAmortizationSchedule(principal, rate, emi, months) {
    amortizationSchedule.innerHTML = '';
    let balance = principal;

    for (let i = 1; i <= months; i++) {
        const interest = balance * rate;
        const principalPaid = emi - interest;
        balance -= principalPaid;

        if (i % 12 === 0 || i === months) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${Math.ceil(i / 12)}</td>
                <td>${principalPaid.toFixed(2)}</td>
                <td>${interest.toFixed(2)}</td>
                <td>${Math.max(balance, 0).toFixed(2)}</td>
            `;
            amortizationSchedule.appendChild(row);
        }
    }
}

function convertToWords(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

    if (num === 0) return "Zero";

    let word = "";
    let place = 0;

    while (num > 0) {
        let chunk = num % 1000;
        if (chunk) {
            let chunkWord = "";
            if (chunk % 100 < 20 && chunk % 100 > 10) {
                chunkWord = teens[chunk % 10 - 1] + " ";
            } else {
                chunkWord = tens[Math.floor(chunk % 100 / 10)] + " " + ones[chunk % 10] + " ";
            }
            chunkWord = (chunk > 99 ? ones[Math.floor(chunk / 100)] + " Hundred " : "") + chunkWord;
            word = chunkWord + thousands[place] + " " + word;
        }
        num = Math.floor(num / 1000);
        place++;
    }

    return word.trim();
}

// Event Listeners
principalInput.addEventListener('input', updateCalculator);
interestInput.addEventListener('input', updateCalculator);
yearsInput.addEventListener('input', updateCalculator);

// Initialize
updateCalculator();