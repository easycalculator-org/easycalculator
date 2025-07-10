  // Initialize chart
        const ctx = document.getElementById('sipChart').getContext('2d');
        let sipChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Invested Amount', 'Estimated Returns'],
                datasets: [{
                    data: [0, 0],
                    backgroundColor: ['#1877F2', '#1af294'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            boxWidth: 12,
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ₹' + formatNumber(context.raw.toFixed(0));
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });

        // Function to setup event listeners
        function setupEventListeners() {
            // Link range sliders with number inputs
            document.getElementById('monthlyInvestmentRange').addEventListener('input', function() {
                document.getElementById('monthlyInvestment').value = this.value;
                calculateSIP();
            });
            document.getElementById('monthlyInvestment').addEventListener('input', function() {
                document.getElementById('monthlyInvestmentRange').value = this.value;
                calculateSIP();
            });

            document.getElementById('investmentPeriodRange').addEventListener('input', function() {
                document.getElementById('investmentPeriod').value = this.value;
                calculateSIP();
            });
            document.getElementById('investmentPeriod').addEventListener('input', function() {
                document.getElementById('investmentPeriodRange').value = this.value;
                calculateSIP();
            });

            document.getElementById('expectedReturnRange').addEventListener('input', function() {
                document.getElementById('expectedReturn').value = this.value;
                calculateSIP();
            });
            document.getElementById('expectedReturn').addEventListener('input', function() {
                document.getElementById('expectedReturnRange').value = this.value;
                calculateSIP();
            });

            document.getElementById('inflationRateRange').addEventListener('input', function() {
                document.getElementById('inflationRate').value = this.value;
                calculateSIP();
            });
            document.getElementById('inflationRate').addEventListener('input', function() {
                document.getElementById('inflationRateRange').value = this.value;
                calculateSIP();
            });

            // Toggle step-up percentage input
            document.getElementById('stepUpSIP').addEventListener('change', function() {
                document.getElementById('stepUpContainer').style.display = this.checked ? 'block' : 'none';
                calculateSIP();
            });

            // Step-up percentage change
            document.getElementById('stepUpPercentage').addEventListener('input', calculateSIP);
        }

        // Initialize calculator
        window.onload = function() {
            setupEventListeners();
            calculateSIP();
        };

        function calculateSIP() {
            const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value) || 0;
            const investmentPeriod = parseInt(document.getElementById('investmentPeriod').value) || 0;
            const expectedReturn = parseFloat(document.getElementById('expectedReturn').value) || 0;
            const inflationRate = parseFloat(document.getElementById('inflationRate').value) || 0;
            const stepUpEnabled = document.getElementById('stepUpSIP').checked;
            const stepUpPercentage = stepUpEnabled ? (parseFloat(document.getElementById('stepUpPercentage').value) || 0) : 0;
            let totalInvested = 0;
            let totalValue = 0;
            let yearlyData = [];
            let currentMonthlyInvestment = monthlyInvestment;
            let cumulativeInvestment = 0;
            let portfolioValue = 0;

            // Convert annual rate to monthly rate
            const monthlyRate = expectedReturn / 100 / 12;
            const months = investmentPeriod * 12;

            // Calculate year by year with monthly compounding
            for (let year = 1; year <= investmentPeriod; year++) {
                let yearlyInvestment = 0;
                
                // Calculate monthly investments for this year
                for (let month = 1; month <= 12; month++) {
                    yearlyInvestment += currentMonthlyInvestment;
                    cumulativeInvestment += currentMonthlyInvestment;
                    
                    // Compound the existing portfolio value
                    portfolioValue *= (1 + monthlyRate);
                    // Add the new investment
                    portfolioValue += currentMonthlyInvestment;
                }
                
                // Calculate inflation adjusted value
                const inflationAdjustedValue = portfolioValue / Math.pow(1 + inflationRate/100, year);
                
                // Store yearly data
                yearlyData.push({
                    year: year,
                    yearlyInvestment: yearlyInvestment,
                    cumulativeInvestment: cumulativeInvestment,
                    yearEndValue: portfolioValue,
                    inflationAdjusted: inflationAdjustedValue
                });
                
                // Apply step-up for next year
                if (stepUpEnabled) {
                    currentMonthlyInvestment *= (1 + stepUpPercentage/100);
                }
            }

            totalInvested = cumulativeInvestment;
            totalValue = portfolioValue;
            
            // Update summary
            document.getElementById('investedAmount').textContent = '₹' + formatNumber(totalInvested.toFixed(0));
            document.getElementById('estimatedReturns').textContent = '₹' + formatNumber((totalValue - totalInvested).toFixed(0));
            document.getElementById('totalValue').textContent = '₹' + formatNumber(totalValue.toFixed(0));
            document.getElementById('inflationAdjustedValue').textContent = '₹' + formatNumber((totalValue / Math.pow(1 + inflationRate/100, investmentPeriod)).toFixed(0));

            // Update chart
            sipChart.data.datasets[0].data = [totalInvested, totalValue - totalInvested];
            sipChart.update();

            // Update yearly breakdown table
            let tableBody = document.getElementById('yearlyTableBody');
            tableBody.innerHTML = '';
            yearlyData.forEach(data => {
                let row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.year}</td>
                    <td>₹${formatNumber(data.yearlyInvestment.toFixed(0))}</td>
                    <td>₹${formatNumber(data.cumulativeInvestment.toFixed(0))}</td>
                    <td>₹${formatNumber(data.yearEndValue.toFixed(0))}</td>
                    <td>₹${formatNumber(data.inflationAdjusted.toFixed(0))}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        function resetCalculator() {
            document.getElementById('monthlyInvestment').value = 10000;
            document.getElementById('monthlyInvestmentRange').value = 10000;
            document.getElementById('investmentPeriod').value = 10;
            document.getElementById('investmentPeriodRange').value = 10;
            document.getElementById('expectedReturn').value = 12;
            document.getElementById('expectedReturnRange').value = 12;
            document.getElementById('inflationRate').value = 6;
            document.getElementById('inflationRateRange').value = 6;
            document.getElementById('stepUpSIP').checked = true;
            document.getElementById('stepUpPercentage').value = 10;
            document.getElementById('stepUpContainer').style.display = 'block';
            
            calculateSIP();
        }
        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }