  document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('investmentForm');
            const summaryAlert = document.getElementById('summaryAlert');
            const yearlyTable = document.getElementById('yearlyTable').querySelector('tbody');
            const monthlyTable = document.getElementById('monthlyTable').querySelector('tbody');
            const yearDropdownMenu = document.getElementById('yearDropdownMenu');
            const showAllMonthsBtn = document.getElementById('showAllMonths');
            const startDateInput = document.getElementById('startDate');
            let growthChart = null;
            
            // Set default start date to current month
            const today = new Date();
            const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
            const currentYear = today.getFullYear();
            startDateInput.value = `${currentYear}-${currentMonth}-01`;
            
            // Store all monthly data for the show all functionality
            let allMonthlyData = [];
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                calculateInvestment();
            });
            
            showAllMonthsBtn.addEventListener('click', function() {
                displayMonthlyData(allMonthlyData);
            });
            
            function calculateInvestment() {
                // Get input values
                const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
                const annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
                const years = parseInt(document.getElementById('years').value);
                const compoundingFrequency = parseInt(document.getElementById('compounding').value);
                const startDate = new Date(document.getElementById('startDate').value);
                
                // Validate start date
                if (isNaN(startDate.getTime())) {
                    alert('Please select a valid start date');
                    return;
                }
                
                // Calculate periodic interest rate
                const periodicRate = annualReturn / compoundingFrequency;
                const totalPeriods = years * compoundingFrequency;
                
                // Calculate final amount using compound interest formula
                const finalAmount = initialInvestment * Math.pow(1 + periodicRate, totalPeriods);
                const totalInterest = finalAmount - initialInvestment;
                
                // Display summary
                summaryAlert.classList.remove('d-none');
                summaryAlert.innerHTML = `
                    <strong>Investment Projection Summary:</strong><br>
                    Starting from ${formatDate(startDate)}, your initial investment of $${initialInvestment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} 
                    growing at ${(annualReturn*100).toFixed(2)}% annually with ${getCompoundingFrequencyName(compoundingFrequency)} compounding 
                    will be worth <strong>$${finalAmount.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong> 
                    in ${years} years (${formatDate(addYears(startDate, years))}).<br>
                    Your total interest earned will be <strong>$${totalInterest.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>.
                `;
                
                // Calculate and display yearly growth
                const yearlyData = calculateYearlyGrowth(initialInvestment, annualReturn, years, compoundingFrequency, startDate);
                displayYearlyData(yearlyData);
                
                // Calculate and display monthly growth
                allMonthlyData = calculateMonthlyGrowth(initialInvestment, annualReturn, years, compoundingFrequency, startDate);
                updateYearDropdown(years);
                displayMonthlyData(allMonthlyData.filter(month => month.year === 1)); // Show first year by default
                
                // Create chart
                createGrowthChart(yearlyData);
            }
            
            function calculateYearlyGrowth(initialInvestment, annualReturn, years, compoundingFrequency, startDate) {
                const data = [];
                let balance = initialInvestment;
                let cumulativeInterest = 0;
                
                for (let year = 1; year <= years; year++) {
                    const periodStartDate = addYears(startDate, year - 1);
                    const periodEndDate = addYears(startDate, year);
                    const startingBalance = balance;
                    
                    // Calculate the balance at the end of the year
                    for (let period = 1; period <= compoundingFrequency; period++) {
                        const interest = balance * (annualReturn / compoundingFrequency);
                        balance += interest;
                        cumulativeInterest += interest;
                    }
                    
                    data.push({
                        year,
                        period: `${formatDate(periodStartDate)} to ${formatDate(periodEndDate)}`,
                        startingBalance,
                        interestEarned: balance - startingBalance,
                        endingBalance: balance,
                        cumulativeInterest,
                        date: periodEndDate
                    });
                }
                
                return data;
            }
            
            function calculateMonthlyGrowth(initialInvestment, annualReturn, years, compoundingFrequency, startDate) {
                const monthlyRate = annualReturn / 12;
                const data = [];
                let balance = initialInvestment;
                let currentYear = 1;
                let monthCount = 0;
                let currentDate = new Date(startDate);
                
                for (let year = 1; year <= years; year++) {
                    for (let month = 1; month <= 12; month++) {
                        const periodDate = new Date(currentDate);
                        const startingBalance = balance;
                        const interest = balance * monthlyRate;
                        balance += interest;
                        
                        data.push({
                            year,
                            month: monthCount + 1,
                            date: periodDate,
                            dateString: formatDate(periodDate),
                            startingBalance,
                            interestEarned: interest,
                            endingBalance: balance
                        });
                        
                        // Move to next month
                        currentDate.setMonth(currentDate.getMonth() + 1);
                        monthCount++;
                    }
                }
                
                return data;
            }
            
            function displayYearlyData(data) {
                yearlyTable.innerHTML = '';
                
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.year}</td>
                        <td>${row.period}</td>
                        <td>$${row.startingBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${row.interestEarned.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${row.endingBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${row.cumulativeInterest.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    `;
                    yearlyTable.appendChild(tr);
                });
            }
            
            function displayMonthlyData(data) {
                monthlyTable.innerHTML = '';
                
                data.forEach(row => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${row.dateString}</td>
                        <td>$${row.startingBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${row.interestEarned.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        <td>$${row.endingBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    `;
                    monthlyTable.appendChild(tr);
                });
            }
            
            function updateYearDropdown(years) {
                yearDropdownMenu.innerHTML = '';
                
                for (let year = 1; year <= years; year++) {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.classList.add('dropdown-item');
                    a.href = '#';
                    a.textContent = `Year ${year}`;
                    a.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.getElementById('yearDropdown').textContent = `Year ${year}`;
                        displayMonthlyData(allMonthlyData.filter(month => month.year === year));
                    });
                    li.appendChild(a);
                    yearDropdownMenu.appendChild(li);
                }
            }
            
            function createGrowthChart(yearlyData) {
                const ctx = document.getElementById('growthChart').getContext('2d');
                
                // Destroy previous chart if it exists
                if (growthChart) {
                    growthChart.destroy();
                }
                
                const labels = yearlyData.map(row => `Year ${row.year} (${formatDateShort(row.date)})`);
                const balanceData = yearlyData.map(row => row.endingBalance);
                const interestData = yearlyData.map(row => row.cumulativeInterest);
                
                growthChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Total Value',
                                data: balanceData,
                                borderColor: 'rgb(75, 192, 192)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                tension: 0.1,
                                fill: true
                            },
                            {
                                label: 'Cumulative Interest',
                                data: interestData,
                                borderColor: 'rgb(54, 162, 235)',
                                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                tension: 0.1,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Investment Growth Projection'
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        label += '$' + context.raw.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
                                        return label;
                                    }
                                }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: false,
                                ticks: {
                                    callback: function(value) {
                                        return '$' + value.toLocaleString('en-US');
                                    }
                                }
                            }
                        }
                    }
                });
            }
            
            // Helper functions
            function formatDate(date) {
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            }
            
            function formatDateShort(date) {
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
            }
            
            function addYears(date, years) {
                const result = new Date(date);
                result.setFullYear(result.getFullYear() + years);
                return result;
            }
            
            function getCompoundingFrequencyName(frequency) {
                switch(frequency) {
                    case 12: return 'monthly';
                    case 4: return 'quarterly';
                    case 2: return 'semi-annually';
                    case 1: return 'annually';
                    default: return `${frequency} times per year`;
                }
            }
            
            // Calculate on page load with default values
            calculateInvestment();
        });