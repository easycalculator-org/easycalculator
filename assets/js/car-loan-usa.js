  document.addEventListener('DOMContentLoaded', function() {
            // Initialize tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Sync range sliders with number inputs
            const syncInputWithRange = (inputId, rangeId) => {
                const input = document.getElementById(inputId);
                const range = document.getElementById(rangeId);
                
                input.addEventListener('input', () => {
                    range.value = input.value;
                    calculateLoan();
                });
                
                range.addEventListener('input', () => {
                    input.value = range.value;
                    calculateLoan();
                });
            };
            
            syncInputWithRange('vehiclePrice', 'vehiclePriceRange');
            syncInputWithRange('downPayment', 'downPaymentRange');
            syncInputWithRange('interestRate', 'interestRateRange');
            syncInputWithRange('salesTax', 'salesTaxRange');
            
            // Listen for changes in loan term
            document.getElementById('loanTerm').addEventListener('change', calculateLoan);
            
            // Initialize chart
            const ctx = document.getElementById('paymentChart').getContext('2d');
            const paymentChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Principal', 'Interest', 'Tax'],
                    datasets: [{
                        data: [70, 20, 10],
                        backgroundColor: ['#3498db', '#e74c3c', '#2ecc71'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
            
            // Calculate loan function
            function calculateLoan() {
                const vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value);
                const downPayment = parseFloat(document.getElementById('downPayment').value);
                const loanTerm = parseInt(document.getElementById('loanTerm').value);
                const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
                const salesTax = parseFloat(document.getElementById('salesTax').value) / 100;
                
                // Calculate tax amount
                const taxAmount = vehiclePrice * salesTax;
                
                // Calculate loan amount (price - down payment + tax)
                const loanAmount = vehiclePrice - downPayment + taxAmount;
                
                // Calculate monthly payment using formula: P = (Pv * r) / (1 - (1 + r)^(-n))
                const monthlyRate = interestRate / 12;
                const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm));
                
                // Calculate totals
                const totalPayment = monthlyPayment * loanTerm;
                const totalInterest = totalPayment - loanAmount;
                const totalCost = vehiclePrice + taxAmount + totalInterest;
                
                // Calculate LTV ratio
                const ltvRatio = (loanAmount / vehiclePrice) * 100;
                
                // Update UI
                document.getElementById('monthlyPayment').textContent = '$' + monthlyPayment.toFixed(2);
                document.getElementById('totalLoan').textContent = '$' + loanAmount.toFixed(2);
                document.getElementById('totalInterest').textContent = '$' + totalInterest.toFixed(2);
                document.getElementById('totalCost').textContent = '$' + totalCost.toFixed(2);
                document.getElementById('paymentsCount').textContent = loanTerm;
                document.getElementById('ltvRatio').textContent = ltvRatio.toFixed(2) + '%';
                
                // Update chart
                const principalPercentage = (loanAmount / totalPayment * 100).toFixed(2);
                const interestPercentage = (totalInterest / totalPayment * 100).toFixed(2);
                const taxPercentage = (taxAmount / totalPayment * 100).toFixed(2);
                
                paymentChart.data.datasets[0].data = [principalPercentage, interestPercentage, taxPercentage];
                paymentChart.update();
            }
            
            // Initialize calculation
            calculateLoan();
            
            // Calculate button event
            document.getElementById('calculateBtn').addEventListener('click', calculateLoan);
        });