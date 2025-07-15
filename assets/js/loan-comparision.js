document.addEventListener('DOMContentLoaded', function() {
            // Toggle extra payment fields
            document.querySelectorAll('[id^="extraToggle"]').forEach(toggle => {
                const optionNum = toggle.id.replace('extraToggle', '');
                toggle.addEventListener('change', function() {
                    const extraDiv = toggle.closest('.loan-form').querySelector('.extra-payment-fields');
                    extraDiv.style.display = this.checked ? 'block' : 'none';
                });
            });

            // Calculate loan function
            function calculateLoan(calculator) {
                const form = calculator.querySelector('.loan-form');
                const results = calculator.querySelector('.results');
                
                const amount = parseFloat(form.querySelector('.loan-amount').value);
                const rate = parseFloat(form.querySelector('.interest-rate').value);
                const termYears = parseFloat(form.querySelector('.loan-term').value);
                const fees = parseFloat(form.querySelector('.fees').value) || 0;
                const paymentType = form.querySelector('.payment-type').value;
                const hasExtra = form.querySelector('[id^="extraToggle"]').checked;
                const extraAmount = hasExtra ? parseFloat(form.querySelector('.extra-amount').value) || 0 : 0;
                const extraStart = hasExtra ? parseFloat(form.querySelector('.extra-start').value) || 0 : 0;
                const extraEnd = hasExtra ? parseFloat(form.querySelector('.extra-end').value) || termYears*12 : termYears*12;
                
                // Convert term to months
                const termMonths = termYears * 12;
                const monthlyRate = rate / 100 / 12;
                
                let monthlyPayment, totalInterest, amortization = [];
                let totalExtra = 0;
                
                if (paymentType === 'interest-only') {
                    // Interest only calculation
                    monthlyPayment = amount * monthlyRate;
                    totalInterest = monthlyPayment * termMonths;
                    
                    // Create amortization schedule
                    for (let month = 1; month <= termMonths; month++) {
                        const principal = month === termMonths ? amount : 0;
                        amortization.push({
                            month,
                            payment: monthlyPayment + (month === termMonths ? amount : 0),
                            principal,
                            interest: monthlyPayment,
                            balance: month === termMonths ? 0 : amount,
                            extra: 0
                        });
                    }
                } else {
                    // Standard amortization
                    monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
                    totalInterest = (monthlyPayment * termMonths) - amount;
                    
                    // Create amortization schedule
                    let balance = amount;
                    for (let month = 1; month <= termMonths; month++) {
                        const interest = balance * monthlyRate;
                        let principal = monthlyPayment - interest;
                        let extra = 0;
                        
                        // Apply extra payments if applicable
                        if (hasExtra && month > extraStart && month <= extraEnd) {
                            extra = extraAmount;
                            principal += extra;
                            totalExtra += extra;
                        }
                        
                        // Adjust final payment if needed
                        if (month === termMonths && balance - principal < 0) {
                            principal = balance;
                        }
                        
                        balance -= principal;
                        if (balance < 0) balance = 0;
                        
                        amortization.push({
                            month,
                            payment: monthlyPayment + extra,
                            principal,
                            interest,
                            balance,
                            extra
                        });
                        
                        // Recalculate total interest based on actual payments
                        if (month === termMonths) {
                            totalInterest = amortization.reduce((sum, item) => sum + item.interest, 0);
                        }
                    }
                }
                
                // Calculate totals
                const totalCost = amount + totalInterest + fees + totalExtra;
                
                // Display results
                results.querySelector('.monthly-payment').textContent = '$' + monthlyPayment.toFixed(2);
                results.querySelector('.total-interest').textContent = '$' + totalInterest.toFixed(2);
                results.querySelector('.total-fees').textContent = '$' + fees.toFixed(2);
                results.querySelector('.total-extra').textContent = '$' + totalExtra.toFixed(2);
                results.querySelector('.total-cost').textContent = '$' + totalCost.toFixed(2);
                results.classList.remove('d-none');
                
                return {
                    option: calculator.querySelector('.card-header h3').textContent.trim(),
                    color: calculator.querySelector('.card-header').classList.contains('bg-primary') ? 'primary' :
                          calculator.querySelector('.card-header').classList.contains('bg-success') ? 'success' :
                          calculator.querySelector('.card-header').classList.contains('bg-info') ? 'info' : 'warning',
                    amount: amount,
                    rate: rate,
                    term: termYears,
                    monthlyPayment: monthlyPayment,
                    totalInterest: totalInterest,
                    fees: fees,
                    totalExtra: totalExtra,
                    totalCost: totalCost,
                    amortization: amortization
                };
            }
            
            // Update comparison table
            function updateComparison() {
                const calculators = document.querySelectorAll('.col-xl-3');
                const comparisonData = [];
                let bestOption = null;
                
                calculators.forEach(calculator => {
                    if (!calculator.querySelector('.results').classList.contains('d-none')) {
                        const data = calculateLoan(calculator);
                        comparisonData.push(data);
                        
                        if (!bestOption || data.totalCost < bestOption.totalCost) {
                            bestOption = data;
                        }
                    }
                });
                
                const comparisonTable = document.getElementById('comparisonTable');
                const bestOptionCard = document.getElementById('bestOptionCard');
                
                if (comparisonData.length === 0) {
                    comparisonTable.innerHTML = `
                        <tr>
                            <td colspan="10" class="text-center text-muted py-4">Calculate at least one loan to see comparison</td>
                        </tr>
                    `;
                    bestOptionCard.innerHTML = `
                        <div class="text-muted mb-3">
                            <i class="bi bi-graph-up" style="font-size: 2rem;"></i>
                            <p class="mt-2">Calculate loans to see the best option</p>
                        </div>
                    `;
                    return;
                }
                
                // Update comparison table
                comparisonTable.innerHTML = '';
                comparisonData.forEach(data => {
                    const isBest = data === bestOption;
                    const savings = data.totalCost - bestOption.totalCost;
                    
                    const row = document.createElement('tr');
                    if (isBest) row.classList.add('table-success');
                    
                    row.innerHTML = `
                        <td>
                            <span class="badge bg-${data.color}">${data.option}</span>
                            ${isBest ? '<span class="badge bg-success ms-1">Best</span>' : ''}
                        </td>
                        <td>$${data.amount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>${data.rate.toFixed(2)}%</td>
                        <td>${data.term} yrs</td>
                        <td>$${data.monthlyPayment.toFixed(2)}</td>
                        <td>$${data.totalInterest.toFixed(2)}</td>
                        <td>$${data.fees.toFixed(2)}</td>
                        <td>$${data.totalExtra.toFixed(2)}</td>
                        <td><strong>$${data.totalCost.toFixed(2)}</strong></td>
                        <td>${savings > 0 ? `<span class="text-danger">+$${savings.toFixed(2)}</span>` : '-'}</td>
                    `;
                    comparisonTable.appendChild(row);
                });
                
                // Update best option card
                bestOptionCard.innerHTML = `
                    <h4 class="text-${bestOption.color} mb-3">${bestOption.option}</h4>
                    <div class="d-flex justify-content-between mb-1">
                        <span>Monthly Payment:</span>
                        <strong>$${bestOption.monthlyPayment.toFixed(2)}</strong>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span>Total Savings:</span>
                        <strong class="text-success">$${(Math.max(...comparisonData.map(d => d.totalCost)) - bestOption.totalCost).toFixed(2)}</strong>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span>Total Cost:</span>
                        <strong>$${bestOption.totalCost.toFixed(2)}</strong>
                    </div>
                    <div class="mt-3">
                        <span class="badge bg-${bestOption.color}">${bestOption.rate.toFixed(2)}% Rate</span>
                        <span class="badge bg-secondary ms-1">${bestOption.term} Years</span>
                    </div>
                `;
                
                // Update amortization chart
                updateAmortizationChart(comparisonData);
            }
            
            // Update amortization chart
            function updateAmortizationChart(data) {
                const ctx = document.getElementById('amortizationChart').getContext('2d');
                
                // Destroy previous chart if exists
                if (window.amortizationChart) {
                    window.amortizationChart.destroy();
                }
                
                // Prepare datasets
                const datasets = data.map(loan => {
                    // Get yearly principal and interest
                    const yearlyData = [];
                    let yearPrincipal = 0;
                    let yearInterest = 0;
                    
                    loan.amortization.forEach((month, index) => {
                        yearPrincipal += month.principal;
                        yearInterest += month.interest;
                        
                        if ((index + 1) % 12 === 0 || index === loan.amortization.length - 1) {
                            yearlyData.push({
                                principal: yearPrincipal,
                                interest: yearInterest
                            });
                            yearPrincipal = 0;
                            yearInterest = 0;
                        }
                    });
                    
                    return {
                        label: loan.option,
                        data: yearlyData,
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue(`--bs-${loan.color}`),
                        borderColor: getComputedStyle(document.documentElement).getPropertyValue(`--bs-${loan.color}`),
                        borderWidth: 1,
                        parsing: {
                            yAxisKey: 'principal'
                        }
                    };
                });
                
                // Create chart
                window.amortizationChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        datasets: datasets
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                                title: {
                                    display: true,
                                    text: 'Year'
                                }
                            },
                            y: {
                                stacked: true,
                                title: {
                                    display: true,
                                    text: 'Amount ($)'
                                },
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: 'Yearly Principal Payments'
                            },
                            tooltip: {
                                callbacks: {
                                    afterBody: function(context) {
                                        const dataIndex = context[0].dataIndex;
                                        const datasetIndex = context[0].datasetIndex;
                                        const interest = data[datasetIndex].amortization
                                            .slice(dataIndex * 12, (dataIndex + 1) * 12)
                                            .reduce((sum, month) => sum + month.interest, 0);
                                        return `Interest: $${interest.toFixed(2)}`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
            // Add event listeners to all calculate buttons
            document.querySelectorAll('.calculate-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const calculator = this.closest('.col-xl-3');
                    calculateLoan(calculator);
                    updateComparison();
                });
            });
            // Add event listeners for Enter key
            document.querySelectorAll('.loan-form input').forEach(input => {
                input.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const calculator = this.closest('.col-xl-3');
                        calculateLoan(calculator);
                        updateComparison();
                    }
                });
            });
        });