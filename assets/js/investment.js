const form = document.getElementById('calculatorForm');
    const resultElement = document.getElementById('result');
    const resultsSection = document.getElementById('resultsSection');
    const breakdownElement = document.getElementById('yearlyBreakdown');
    const chartCanvas = document.getElementById('investmentChart');
    let investmentChart;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100;
        const years = parseInt(document.getElementById('years').value);

        // Calculate future value
        const futureValue = principal * Math.pow(1 + rate, years);
        resultElement.textContent = `$${futureValue.toFixed(2)}`;

        // Prepare data for table and chart
        const labels = [];
        const principalData = [];
        let breakdownHTML = '';

        for (let year = 1; year <= years; year++) {
            const principalValue = principal * Math.pow(1 + rate, year);
            const growth = principalValue - principal;

            labels.push(`Year ${year}`);
            principalData.push(principalValue.toFixed(2));

            // Populate breakdown table
            breakdownHTML += `<tr>
                                <td>Year ${year}</td>
                                <td>$${principalValue.toFixed(2)}</td>
                                <td>$${growth.toFixed(2)}</td>
                              </tr>`;
        }

        breakdownElement.innerHTML = breakdownHTML;

        // Update chart
        if (investmentChart) {
            investmentChart.destroy();
        }

        investmentChart = new Chart(chartCanvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Principal Value ($)',
                    data: principalData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Show results section
        resultsSection.style.display = 'block';
    });


    document.getElementById("years").addEventListener("input", function () {
        let ageInput = document.getElementById("years");
        let errorMessage = document.getElementById("error-message");

        if (ageInput.value > 100) {
            errorMessage.style.display = "block";  // Show error message
            ageInput.value = 100;  // Set value to 100 to prevent higher input
        } else {
            errorMessage.style.display = "none"; // Hide error message
        }
    });