let tvmChart = null;

function updateInputStates() {
    const calculationType = document.getElementById('calculationType').value;
    const inputs = document.querySelectorAll('.tvm-input');

    // Enable all inputs first
    inputs.forEach(input => {
        input.disabled = false;
    });

    // Disable the input that corresponds to the calculation type
    switch (calculationType) {
        case 'fv':
            document.getElementById('fv').disabled = true;
            break;
        case 'pv':
            document.getElementById('pv').disabled = true;
            break;
        case 'pmt':
            document.getElementById('pmt').disabled = true;
            break;
        case 'nper':
            document.getElementById('nper').disabled = true;
            break;
        case 'rate':
            document.getElementById('rate').disabled = true;
            break;
    }

    calculate();
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    const compounding = document.getElementById('compounding').value;
    let pv = parseFloat(document.getElementById('pv').value) || 0;
    let fv = parseFloat(document.getElementById('fv').value) || 0;
    let rate = parseFloat(document.getElementById('rate').value) || 0;
    let nper = parseFloat(document.getElementById('nper').value) || 0;
    let pmt = parseFloat(document.getElementById('pmt').value) || 0;
    const pmtType = document.getElementById('pmtType').value;

    let periodsPerYear = parseInt(compounding);
    let effectiveRate = rate / 100;
    let result = 0;
    let resultText = '';

    if (calculationType === 'fv') {
        result = calculateFV(pv, pmt, effectiveRate, nper, periodsPerYear, pmtType);
        resultText = `Future Value (FV): $${result.toFixed(2)}`;
        document.getElementById('fv').value = result.toFixed(2);
    } else if (calculationType === 'pv') {
        result = calculatePV(fv, pmt, effectiveRate, nper, periodsPerYear, pmtType);
        resultText = `Present Value (PV): $${result.toFixed(2)}`;
        document.getElementById('pv').value = result.toFixed(2);
    } else if (calculationType === 'pmt') {
        result = calculatePMT(pv, fv, effectiveRate, nper, periodsPerYear, pmtType);
        resultText = `Payment (PMT): $${result.toFixed(2)}`;
        document.getElementById('pmt').value = result.toFixed(2);
    } else if (calculationType === 'nper') {
        result = calculateNPER(pv, fv, pmt, effectiveRate, periodsPerYear, pmtType);
        resultText = `Number of Periods (NPER): ${result.toFixed(2)} years`;
        document.getElementById('nper').value = result.toFixed(2);
    } else if (calculationType === 'rate') {
        result = calculateRATE(pv, fv, pmt, nper, periodsPerYear, pmtType) * 100;
        resultText = `Interest Rate (RATE): ${result.toFixed(4)}%`;
        document.getElementById('rate').value = result.toFixed(4);
    }

    document.getElementById('result').innerHTML = `<strong>${resultText}</strong>`;
    document.getElementById('result').style.display = 'block';

    updateChart(pv, pmt, effectiveRate, nper, periodsPerYear, pmtType, calculationType);
}

function calculateFV(pv, pmt, rate, nper, periodsPerYear, pmtType) {
    if (periodsPerYear === 0) { // Continuous compounding
        return pv * Math.exp(rate * nper) +
            pmt * (Math.exp(rate * nper) - 1) / (Math.exp(rate) - 1) * (pmtType ? Math.exp(rate) : 1);
    }

    const periods = nper * periodsPerYear;
    const periodRate = rate / periodsPerYear;
    let fv = pv * Math.pow(1 + periodRate, periods);

    if (pmt !== 0) {
        if (pmtType) { // Annuity due
            fv += pmt * (Math.pow(1 + periodRate, periods) - 1) / periodRate * (1 + periodRate);
        } else { // Ordinary annuity
            fv += pmt * (Math.pow(1 + periodRate, periods) - 1) / periodRate;
        }
    }

    return fv;
}

function calculatePV(fv, pmt, rate, nper, periodsPerYear, pmtType) {
    if (periodsPerYear === 0) { // Continuous compounding
        return fv / Math.exp(rate * nper) -
            pmt * (1 - Math.exp(-rate * nper)) / (Math.exp(rate) - 1) * (pmtType ? Math.exp(rate) : 1);
    }

    const periods = nper * periodsPerYear;
    const periodRate = rate / periodsPerYear;
    let pv = fv / Math.pow(1 + periodRate, periods);

    if (pmt !== 0) {
        if (pmtType) { // Annuity due
            pv -= pmt * (1 - Math.pow(1 + periodRate, -periods)) / periodRate * (1 + periodRate);
        } else { // Ordinary annuity
            pv -= pmt * (1 - Math.pow(1 + periodRate, -periods)) / periodRate;
        }
    }

    return pv;
}

function calculatePMT(pv, fv, rate, nper, periodsPerYear, pmtType) {
    if (periodsPerYear === 0) { // Continuous compounding
        const expRateNper = Math.exp(rate * nper);
        const denominator = (expRateNper - 1) / (Math.exp(rate) - 1) * (pmtType ? Math.exp(rate) : 1);
        return (fv - pv * expRateNper) / denominator;
    }

    const periods = nper * periodsPerYear;
    const periodRate = rate / periodsPerYear;
    const compoundingFactor = Math.pow(1 + periodRate, periods);

    if (pmtType) { // Annuity due
        return (fv - pv * compoundingFactor) * periodRate /
            ((compoundingFactor - 1) * (1 + periodRate));
    } else { // Ordinary annuity
        return (fv - pv * compoundingFactor) * periodRate /
            (compoundingFactor - 1);
    }
}

function calculateNPER(pv, fv, pmt, rate, periodsPerYear, pmtType) {
    if (periodsPerYear === 0) { // Continuous compounding
        const expRate = Math.exp(rate);
        const A = fv * (expRate - 1) + pmt * (pmtType ? expRate : 1);
        const B = pv * (expRate - 1) + pmt * (pmtType ? expRate : 1);
        return Math.log(A / B) / rate;
    }

    const periodRate = rate / periodsPerYear;
    let nper;

    if (pmt === 0) {
        nper = Math.log(fv / pv) / Math.log(1 + periodRate);
    } else {
        if (pmtType) { // Annuity due
            const adjustedPmt = pmt * (1 + periodRate);
            nper = Math.log((adjustedPmt - fv * periodRate) /
                (adjustedPmt + pv * periodRate)) /
                Math.log(1 + periodRate);
        } else { // Ordinary annuity
            nper = Math.log((pmt - fv * periodRate) /
                (pmt + pv * periodRate)) /
                Math.log(1 + periodRate);
        }
    }

    return nper / periodsPerYear;
}

function calculateRATE(pv, fv, pmt, nper, periodsPerYear, pmtType) {
    // Use iterative approach (Newton-Raphson method) to approximate RATE
    let rate = 0.1; // Initial guess
    let prevRate = 0;
    let iterations = 0;
    const maxIterations = 100;
    const precision = 0.000001;

    while (Math.abs(rate - prevRate) > precision && iterations < maxIterations) {
        prevRate = rate;

        let fval, fderiv;
        if (periodsPerYear === 0) { // Continuous compounding
            const expRateNper = Math.exp(rate * nper);
            const denominator = (expRateNper - 1) / (Math.exp(rate) - 1) * (pmtType ? Math.exp(rate) : 1);
            fval = pv * expRateNper + pmt * denominator - fv;

            const term1 = pv * nper * expRateNper;
            const term2Numerator = pmt * (nper * expRateNper * (Math.exp(rate) - 1) - expRateNper + 1) * Math.exp(rate);
            const term2Denominator = Math.pow(Math.exp(rate) - 1, 2);
            const term2 = term2Numerator / term2Denominator * (pmtType ? Math.exp(rate) : 1);
            fderiv = term1 + term2;
        } else {
            const periods = nper * periodsPerYear;
            const periodRate = rate / periodsPerYear;
            const compoundingFactor = Math.pow(1 + periodRate, periods);

            if (pmtType) { // Annuity due
                fval = pv * compoundingFactor +
                    pmt * (compoundingFactor - 1) / periodRate * (1 + periodRate) -
                    fv;

                const term1 = pv * periods * compoundingFactor / (1 + periodRate);
                const term2Numerator = pmt * (periods * (1 + periodRate) * compoundingFactor -
                    (compoundingFactor - 1) * (1 + 2 * periodRate));
                const term2Denominator = periodsPerYear * periodRate * periodRate * (1 + periodRate);
                const term2 = term2Numerator / term2Denominator;
                fderiv = term1 + term2;
            } else { // Ordinary annuity
                fval = pv * compoundingFactor +
                    pmt * (compoundingFactor - 1) / periodRate -
                    fv;

                const term1 = pv * periods * compoundingFactor / (1 + periodRate);
                const term2Numerator = pmt * (periods * compoundingFactor - (compoundingFactor - 1) * (1 + periodRate));
                const term2Denominator = periodsPerYear * periodRate * periodRate;
                const term2 = term2Numerator / term2Denominator;
                fderiv = term1 + term2;
            }
        }

        rate = rate - fval / fderiv;
        iterations++;
    }

    return rate;
}
function updateChart(pv, pmt, rate, nper, periodsPerYear, pmtType, calculationType) {
    const ctx = document.getElementById('tvmChart').getContext('2d');
    const periods = Math.round(nper * periodsPerYear);

    // Destroy previous chart if it exists
    if (tvmChart) {
        tvmChart.destroy();
    }

    // Prepare data based on calculation type
    const labels = [];
    const data = [];

    let description = '';
    let yAxisLabel = 'Value ($)';

    switch (calculationType) {
        case 'fv':
            description = 'Future Value Growth Over Time';
            for (let i = 0; i <= periods; i++) {
                labels.push(i);
                const currentNper = i / periodsPerYear;
                data.push(calculateFV(pv, pmt, rate, currentNper, periodsPerYear, pmtType));
            }
            break;
        case 'pv':
            description = 'Present Value of Future Amount';
            yAxisLabel = 'Present Value ($)';
            // For PV, we'll show the discounting effect over time
            for (let i = 0; i <= periods; i++) {
                labels.push(i);
                const currentNper = i / periodsPerYear;
                data.push(calculatePV(fv, pmt, rate, currentNper, periodsPerYear, pmtType));
            }
            break;
        case 'pmt':
            description = 'Payment Impact on Balance';
            // For PMT, show the balance over time with payments
            let balance = pv;
            for (let i = 0; i <= periods; i++) {
                labels.push(i);
                if (i === 0) {
                    data.push(balance);
                } else {
                    const periodRate = periodsPerYear === 0 ? rate : rate / periodsPerYear;
                    let interest = periodsPerYear === 0 ? balance * (Math.exp(rate) - 1) : balance * periodRate;
                    let principal = pmt - interest;

                    if (pmtType && i === 1) {
                        principal = pmt / (1 + periodRate) - interest;
                    }

                    balance -= principal;
                    if (balance < 0.01) balance = 0;
                    data.push(balance);
                }
            }
            break;
        case 'nper':
            description = 'Time Required to Reach Goal';
            yAxisLabel = 'Years';
            // For NPER, show the time value relationship
            const maxYears = 50;
            for (let i = 0; i <= maxYears; i++) {
                labels.push(i);
                data.push(calculateFV(pv, pmt, rate, i, periodsPerYear, pmtType));
            }
            break;
        case 'rate':
            description = 'Growth at Different Interest Rates';
            yAxisLabel = 'Future Value ($)';
            // For RATE, show how different rates affect growth
            const maxRate = 20; // Up to 20%
            for (let i = 0; i <= maxRate; i++) {
                labels.push(i);
                data.push(calculateFV(pv, pmt, i / 100, nper, periodsPerYear, pmtType));
            }
            break;
    }
    // Create new chart
    tvmChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: description,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: description
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${yAxisLabel}: $${context.raw.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: calculationType === 'rate' ? 'Interest Rate (%)' :
                            calculationType === 'nper' ? 'Years' : 'Periods'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: yAxisLabel
                    },
                    beginAtZero: calculationType !== 'pv'
                }
            }
        }
    });
}
// Initialize with a calculation
window.onload = function () {
    updateInputStates();
    calculate();
};