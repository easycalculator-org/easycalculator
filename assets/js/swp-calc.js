  // Initialize Flatpickr
        flatpickr("#startDate", {
            defaultDate: "today",
            dateFormat: "Y-m-d",
            minDate: "today"
        });
        
        // Format currency
        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        }
        
        // Format percentage
        function formatPercent(value) {
            return value.toFixed(2) + '%';
        }
        
        // View switching functionality
        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.view-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all view contents
                document.querySelectorAll('.view-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show the selected view content
                const viewId = this.getAttribute('data-view') + 'View';
                document.getElementById(viewId).classList.add('active');
            });
        });
        
        // Calculate SWP
        document.getElementById('calculateBtn').addEventListener('click', function() {
            // Get input values
            const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
            const withdrawalAmount = parseFloat(document.getElementById('withdrawalAmount').value);
            const expectedReturn = parseFloat(document.getElementById('expectedReturn').value) / 100;
            const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;
            const investmentPeriod = parseInt(document.getElementById('investmentPeriod').value);
            const adjustForInflation = document.getElementById('adjustForInflation').checked;
            
            // Validate inputs
            if (isNaN(initialInvestment) || isNaN(withdrawalAmount) || isNaN(expectedReturn) || 
                isNaN(inflationRate) || isNaN(investmentPeriod)) {
                alert('Please enter valid numbers in all fields.');
                return;
            }
            
            // Calculate monthly values
            const monthlyReturn = Math.pow(1 + expectedReturn, 1/12) - 1;
            const monthlyInflation = Math.pow(1 + inflationRate, 1/12) - 1;
            
            let balance = initialInvestment;
            let monthlyWithdrawal = withdrawalAmount;
            let totalWithdrawal = 0;
            let totalReturns = 0;
            let months = 0;
            let yearlyData = [];
            let yearlyWithdrawal = 0;
            let yearlyReturn = 0;
            let yearStartBalance = initialInvestment;
            let firstYearWithdrawal = 0;
            
            const maxMonths = investmentPeriod * 12;
            const monthlyBalances = [initialInvestment];
            const monthlyWithdrawals = [0];
            const cumulativeWithdrawals = [0];
            
            for (let month = 1; month <= maxMonths; month++) {
                if (balance <= 0) break;
                
                // Calculate returns for the month
                const monthlyEarnings = balance * monthlyReturn;
                balance += monthlyEarnings;
                totalReturns += monthlyEarnings;
                
                // Withdrawal for the month
                let currentWithdrawal = Math.min(monthlyWithdrawal, balance);
                balance -= currentWithdrawal;
                totalWithdrawal += currentWithdrawal;
                
                // Record first year's withdrawal for growth calculation
                if (month <= 12) {
                    firstYearWithdrawal += currentWithdrawal;
                }
                
                // Accumulate yearly data
                yearlyWithdrawal += currentWithdrawal;
                yearlyReturn += monthlyEarnings;
                
                // Adjust withdrawal for inflation if enabled
                if (adjustForInflation) {
                    monthlyWithdrawal *= (1 + monthlyInflation);
                }
                
                // Record data for chart
                monthlyBalances.push(balance);
                monthlyWithdrawals.push(currentWithdrawal);
                cumulativeWithdrawals.push(totalWithdrawal);
                
                // Check if we've completed a year
                if (month % 12 === 0 || month === maxMonths) {
                    const year = Math.ceil(month / 12);
                    const withdrawalGrowth = firstYearWithdrawal > 0 ? 
                        ((yearlyWithdrawal / firstYearWithdrawal - 1) * 100) : 0;
                    
                    yearlyData.push({
                        year: year,
                        startBalance: yearStartBalance,
                        withdrawal: yearlyWithdrawal,
                        returns: yearlyReturn,
                        endBalance: balance,
                        withdrawalGrowth: withdrawalGrowth
                    });
                    
                    // Reset yearly accumulators
                    yearStartBalance = balance;
                    yearlyWithdrawal = 0;
                    yearlyReturn = 0;
                }
                
                months = month;
            }
            
            // Calculate duration
            const years = Math.floor(months / 12);
            const remainingMonths = months % 12;
            
            // Update summary view
            document.getElementById('durationYears').textContent = years;
            document.getElementById('durationMonths').textContent = remainingMonths;
            document.getElementById('summaryInitial').textContent = formatCurrency(initialInvestment);
            document.getElementById('summaryTotalWithdrawal').textContent = formatCurrency(totalWithdrawal);
            document.getElementById('summaryFinalCorpus').textContent = formatCurrency(Math.max(0, balance));
            document.getElementById('summaryTotalReturns').textContent = formatCurrency(totalReturns);
            document.getElementById('summaryMonthlyWithdrawal').textContent = formatCurrency(withdrawalAmount);
            document.getElementById('summaryReturnRate').textContent = formatPercent(expectedReturn * 100);
            document.getElementById('summaryInflationRate').textContent = formatPercent(inflationRate * 100);
            document.getElementById('summaryInflationAdjusted').textContent = adjustForInflation ? 'Yes' : 'No';
            
            // Update key insights
            updateKeyInsights(years, remainingMonths, totalWithdrawal, initialInvestment, balance, adjustForInflation);
            
            // Update chart
            updateChart(monthlyBalances, monthlyWithdrawals, cumulativeWithdrawals, months);
            
            // Update yearly breakdown table
            updateYearlyTable(yearlyData);
            
            // Show results section
            document.getElementById('resultsSection').style.display = 'block';
        });
        
        // Update key insights
        function updateKeyInsights(years, months, totalWithdrawal, initialInvestment, finalCorpus, inflationAdjusted) {
            const insightsContainer = document.getElementById('keyInsights');
            insightsContainer.innerHTML = '';
            
            const insights = [
                {
                    icon: 'fa-calendar',
                    text: `Your investment will provide regular income for <strong>${years} years and ${months} months</strong>.`
                },
                {
                    icon: 'fa-money-bill-wave',
                    text: `You will withdraw a total of <strong>${formatCurrency(totalWithdrawal)}</strong>, which is <strong>${formatPercent((totalWithdrawal/initialInvestment - 1) * 100)}</strong> more than your initial investment.`
                },
                {
                    icon: 'fa-piggy-bank',
                    text: `At the end of the period, you will have <strong>${formatCurrency(finalCorpus)}</strong> remaining in your corpus.`
                }
            ];
            
            if (inflationAdjusted) {
                insights.push({
                    icon: 'fa-chart-line',
                    text: 'Your withdrawals are adjusted for inflation, maintaining your purchasing power over time.'
                });
            } else {
                insights.push({
                    icon: 'fa-exclamation-triangle',
                    text: 'Your withdrawals are not adjusted for inflation, which may reduce your purchasing power over time.'
                });
            }
            
            insights.forEach(insight => {
                const insightElement = document.createElement('div');
                insightElement.className = 'd-flex align-items-start mb-3';
                insightElement.innerHTML = `
                    <i class="fas ${insight.icon} me-3 mt-1 text-primary"></i>
                    <span>${insight.text}</span>
                `;
                insightsContainer.appendChild(insightElement);
            });
        }
        
        // Update the chart
        function updateChart(balances, withdrawals, cumulativeWithdrawals, months) {
            const ctx = document.getElementById('swpChart').getContext('2d');
            
            // Destroy existing chart if it exists
            if (window.swpChartInstance) {
                window.swpChartInstance.destroy();
            }
            
            // Create labels for x-axis (months)
            const labels = [];
            for (let i = 0; i <= months; i++) {
                if (i % 12 === 0 || i === months) {
                    labels.push(`Year ${Math.floor(i/12)}`);
                } else {
                    labels.push('');
                }
            }
            
            // Create the chart
            window.swpChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Investment Balance',
                            data: balances,
                            borderColor: '#4361ee',
                            backgroundColor: 'rgba(67, 97, 238, 0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2
                        },
                        {
                            label: 'Monthly Withdrawal',
                            data: withdrawals,
                            borderColor: '#4cc9f0',
                            backgroundColor: 'rgba(76, 201, 240, 0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2
                        },
                        {
                            label: 'Cumulative Withdrawals',
                            data: cumulativeWithdrawals,
                            borderColor: '#3a0ca3',
                            backgroundColor: 'rgba(58, 12, 163, 0.1)',
                            fill: true,
                            tension: 0.4,
                            borderWidth: 2
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'SWP Projection Over Time',
                            font: {
                                size: 16
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    label += formatCurrency(context.parsed.y);
                                    return label;
                                }
                            }
                        },
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Amount ($)'
                            },
                            ticks: {
                                callback: function(value) {
                                    if (value >= 1000000) {
                                        return '$' + (value / 1000000).toFixed(1) + 'M';
                                    } else if (value >= 1000) {
                                        return '$' + (value / 1000).toFixed(0) + 'K';
                                    }
                                    return '$' + value;
                                }
                            }
                        }
                    }
                }
            });
            
            // Add event listeners for chart controls
            document.getElementById('exportChart').addEventListener('click', function() {
                const imageLink = document.createElement('a');
                imageLink.download = 'SWP-Chart.png';
                imageLink.href = document.getElementById('swpChart').toDataURL();
                imageLink.click();
            });
            
            document.getElementById('toggleLogScale').addEventListener('click', function() {
                if (window.swpChartInstance.options.scales.y.type === 'linear') {
                    window.swpChartInstance.options.scales.y.type = 'logarithmic';
                } else {
                    window.swpChartInstance.options.scales.y.type = 'linear';
                }
                window.swpChartInstance.update();
            });
        }
        
        // Update yearly breakdown table
        function updateYearlyTable(yearlyData) {
            const tableBody = document.getElementById('yearlyTableBody');
            tableBody.innerHTML = '';
            
            yearlyData.forEach(data => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.year}</td>
                    <td>${formatCurrency(data.startBalance)}</td>
                    <td>${formatCurrency(data.withdrawal)}</td>
                    <td>${formatCurrency(data.returns)}</td>
                    <td>${formatCurrency(data.endBalance)}</td>
                    <td>${formatPercent(data.withdrawalGrowth)}</td>
                `;
                tableBody.appendChild(row);
            });
            
            // Update table info
            document.getElementById('tableInfo').textContent = `Showing ${yearlyData.length} years`;
            
            // Add event listener for export button
            document.getElementById('exportTable').addEventListener('click', function() {
                let csvContent = "Year,Beginning Balance,Annual Withdrawal,Annual Returns,Ending Balance,Withdrawal Growth\n";
                
                yearlyData.forEach(data => {
                    csvContent += `${data.year},${data.startBalance},${data.withdrawal},${data.returns},${data.endBalance},${data.withdrawalGrowth}\n`;
                });
                
                const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
                const link = document.createElement('a');
                link.setAttribute('href', encodedUri);
                link.setAttribute('download', 'SWP-Yearly-Data.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
        
        // Initialize the chart with empty data
        window.onload = function() {
            const ctx = document.getElementById('swpChart').getContext('2d');
            window.swpChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: []
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        };