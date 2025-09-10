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