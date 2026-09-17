// Initialize jsPDF
        const { jsPDF } = window.jspdf;
        
        document.addEventListener('DOMContentLoaded', function() {
            // Set current timestamp
            const now = new Date();
            document.getElementById('timestamp').textContent = now.toLocaleString();
            
            // Add debt row
            document.getElementById('addDebt').addEventListener('click', function() {
                const tbody = document.querySelector('#debtsTable tbody');
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>
                        <input type="text" class="form-control form-control-sm debt-name" placeholder="Credit Card" required>
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control debt-balance" placeholder="5000" min="1" required>
                        </div>
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <input type="number" class="form-control debt-rate" placeholder="18.99" step="0.01" min="0" required>
                            <span class="input-group-text">%</span>
                        </div>
                    </td>
                    <td>
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control debt-payment" placeholder="100" min="1" required>
                        </div>
                    </td>
                    <td class="text-center align-middle">
                        <button class="btn btn-sm btn-outline-danger remove-debt">
                            <i class="fas fa-times"></i>
                        </button>
                    </td>
                `;
                tbody.appendChild(newRow);
                
                // Enable remove buttons if more than one row
                updateRemoveButtons();
            });
            
            // Remove debt row
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('remove-debt') || e.target.closest('.remove-debt')) {
                    const btn = e.target.classList.contains('remove-debt') ? e.target : e.target.closest('.remove-debt');
                    const row = btn.closest('tr');
                    row.remove();
                    updateRemoveButtons();
                }
            });
            
            // Update remove buttons state
            function updateRemoveButtons() {
                const removeButtons = document.querySelectorAll('.remove-debt');
                removeButtons.forEach(btn => {
                    btn.disabled = removeButtons.length <= 1;
                });
            }
            
            // Reset form
            document.getElementById('resetForm').addEventListener('click', function() {
                const tbody = document.querySelector('#debtsTable tbody');
                tbody.innerHTML = `
                    <tr>
                        <td>
                            <input type="text" class="form-control form-control-sm debt-name" placeholder="Credit Card" required>
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <span class="input-group-text">$</span>
                                <input type="number" class="form-control debt-balance" placeholder="5000" min="1" required>
                            </div>
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <input type="number" class="form-control debt-rate" placeholder="18.99" step="0.01" min="0" required>
                                <span class="input-group-text">%</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group input-group-sm">
                                <span class="input-group-text">$</span>
                                <input type="number" class="form-control debt-payment" placeholder="100" min="1" required>
                            </div>
                        </td>
                        <td class="text-center align-middle">
                            <button class="btn btn-sm btn-outline-danger remove-debt" disabled>
                                <i class="fas fa-times"></i>
                            </button>
                        </td>
                    </tr>
                `;
                document.getElementById('extraPayment').value = '200';
                document.getElementById('snowballOption').value = 'avalanche';
            });
            
            // Back to form button
            document.getElementById('backToForm').addEventListener('click', function() {
                document.getElementById('debtForm').classList.remove('d-none');
                document.getElementById('results').classList.add('d-none');
            });
            
            // Calculate button
            document.getElementById('calculate').addEventListener('click', function() {
                // Validate form
                const debts = getDebts();
                if (debts.length === 0) {
                    alert('Please add at least one debt');
                    return;
                }
                
                // Get extra payment and strategy
                const extraPayment = parseFloat(document.getElementById('extraPayment').value) || 0;
                const strategy = document.getElementById('snowballOption').value;
                
                // Calculate payoff
                const result = calculateDebtPayoff(debts, extraPayment, strategy);
                
                // Display results
                displayResults(result);
                
                // Show results section
                document.getElementById('debtForm').classList.add('d-none');
                document.getElementById('results').classList.remove('d-none');
            });
            
            // Export PDF button
            document.getElementById('exportPDF').addEventListener('click', function() {
                exportToPDF();
            });
            
            // Get debts from form
            function getDebts() {
                const debts = [];
                const rows = document.querySelectorAll('#debtsTable tbody tr');
                
                rows.forEach(row => {
                    const name = row.querySelector('.debt-name').value || 'Unnamed Debt';
                    const balance = parseFloat(row.querySelector('.debt-balance').value) || 0;
                    const rate = parseFloat(row.querySelector('.debt-rate').value) || 0;
                    const payment = parseFloat(row.querySelector('.debt-payment').value) || 0;
                    
                    if (balance > 0 && rate >= 0 && payment > 0) {
                        debts.push({
                            name,
                            balance,
                            rate,
                            payment,
                            remaining: balance,
                            totalInterest: 0,
                            totalPaid: 0
                        });
                    }
                });
                
                return debts;
            }
            
            // Calculate debt payoff
            function calculateDebtPayoff(debts, extraPayment, strategy) {
                // Clone debts array to avoid modifying original
                const workingDebts = JSON.parse(JSON.stringify(debts));
                let totalExtra = extraPayment;
                let month = 0;
                const schedule = [];
                let totalStartingBalance = workingDebts.reduce((sum, debt) => sum + debt.balance, 0);
                
                // Sort debts based on strategy
                const sortDebts = () => {
                    if (strategy === 'avalanche') {
                        workingDebts.sort((a, b) => b.rate - a.rate || b.balance - a.balance);
                    } else { // snowball
                        workingDebts.sort((a, b) => a.remaining - b.remaining);
                    }
                };
                
                // Main calculation loop
                while (workingDebts.some(debt => debt.remaining > 0)) {
                    month++;
                    sortDebts();
                    
                    // Track payments for this month
                    const monthPayments = [];
                    let remainingExtra = totalExtra;
                    
                    // Pay minimums first
                    workingDebts.forEach(debt => {
                        if (debt.remaining <= 0) return;
                        
                        const monthlyRate = debt.rate / 100 / 12;
                        const interest = debt.remaining * monthlyRate;
                        let payment = Math.min(debt.payment, debt.remaining + interest);
                        
                        // Apply extra payment to first debt
                        if (remainingExtra > 0 && workingDebts[0] === debt) {
                            payment += remainingExtra;
                            remainingExtra = 0;
                        }
                        
                        const principal = Math.min(debt.remaining, payment - interest);
                        const newRemaining = debt.remaining - principal;
                        
                        monthPayments.push({
                            name: debt.name,
                            payment: payment,
                            principal: principal,
                            interest: interest,
                            remaining: newRemaining
                        });
                        
                        // Update debt totals
                        debt.remaining = newRemaining;
                        debt.totalInterest += interest;
                        debt.totalPaid += payment;
                    });
                    
                    // Add to schedule
                    schedule.push({
                        month: month,
                        payments: monthPayments,
                        totalPayment: monthPayments.reduce((sum, p) => sum + p.payment, 0),
                        totalPrincipal: monthPayments.reduce((sum, p) => sum + p.principal, 0),
                        totalInterest: monthPayments.reduce((sum, p) => sum + p.interest, 0),
                        remainingDebts: workingDebts.filter(d => d.remaining > 0).length
                    });
                    
                    // Stop if we're not making progress (shouldn't happen with minimum payments)
                    if (month > 600) break; // 50-year safeguard
                }
                
                // Calculate totals
                const totalInterest = workingDebts.reduce((sum, debt) => sum + debt.totalInterest, 0);
                const totalPayments = workingDebts.reduce((sum, debt) => sum + debt.totalPaid, 0);
                
                return {
                    months: month,
                    totalInterest: totalInterest,
                    totalPayments: totalPayments,
                    schedule: schedule,
                    debts: workingDebts,
                    totalStartingBalance: totalStartingBalance,
                    extraPayment: extraPayment,
                    strategy: strategy
                };
            }
            
            // Display results
            function displayResults(result) {
                // Summary stats
                document.getElementById('timeToFree').textContent = 
                    result.months >= 12 ? 
                    `${Math.floor(result.months / 12)} years ${result.months % 12} months` : 
                    `${result.months} months`;
                
                document.getElementById('totalInterest').textContent = 
                    `$${result.totalInterest.toFixed(2)}`;
                
                document.getElementById('totalPayments').textContent = 
                    `$${result.totalPayments.toFixed(2)}`;
                
                // Payment schedule
                const scheduleBody = document.querySelector('#scheduleTable tbody');
                scheduleBody.innerHTML = '';
                
                // Show first 12 months and last month (or all if less than 24 months)
                const showAll = result.schedule.length <= 24;
                const monthsToShow = showAll ? 
                    result.schedule : 
                    [...result.schedule.slice(0, 12), ...result.schedule.slice(-1)];
                
                monthsToShow.forEach(month => {
                    month.payments.forEach((payment, i) => {
                        const row = document.createElement('tr');
                        if (i === 0) {
                            const monthCell = document.createElement('td');
                            monthCell.textContent = month.month;
                            monthCell.rowSpan = month.payments.length;
                            row.appendChild(monthCell);
                        }
                        
                        row.innerHTML += `
                            <td>${payment.name}</td>
                            <td>$${payment.payment.toFixed(2)}</td>
                            <td>$${payment.principal.toFixed(2)}</td>
                            <td>$${payment.interest.toFixed(2)}</td>
                            <td>$${payment.remaining.toFixed(2)}</td>
                        `;
                        
                        scheduleBody.appendChild(row);
                    });
                    
                    // Add ellipsis if we're not showing all months
                    if (!showAll && month === monthsToShow[monthsToShow.length - 2]) {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td colspan="6" class="text-center text-muted">
                                <i class="fas fa-ellipsis-h"></i>
                            </td>
                        `;
                        scheduleBody.appendChild(row);
                    }
                });
                
                // Quick wins table
                const quickWinsBody = document.querySelector('#quickWinsTable tbody');
                quickWinsBody.innerHTML = '';
                
                // Calculate quick wins (debts that could be paid off in <=6 months with small extra payments)
                const originalDebts = getDebts();
                const quickWins = originalDebts.map(debt => {
                    const monthlyRate = debt.rate / 100 / 12;
                    let months = 0;
                    let balance = debt.balance;
                    let extraNeeded = 0;
                    
                    while (balance > 0 && months < 6) {
                        const interest = balance * monthlyRate;
                        const minPayment = Math.min(debt.payment, balance + interest);
                        const principal = minPayment - interest;
                        balance -= principal;
                        months++;
                    }
                    
                    if (balance > 0) {
                        // Calculate extra needed to pay off in 6 months
                        balance = debt.balance;
                        months = 0;
                        let payment = debt.payment;
                        
                        while (balance > 0 && months < 6) {
                            const interest = balance * monthlyRate;
                            payment = Math.max(payment, (balance + interest) / (6 - months));
                            const principal = payment - interest;
                            balance -= principal;
                            months++;
                        }
                        
                        extraNeeded = payment - debt.payment;
                        months = 6;
                    }
                    
                    return {
                        name: debt.name,
                        balance: debt.balance,
                        months: balance <= 0 ? months : 6,
                        extraNeeded: extraNeeded > 0 ? extraNeeded.toFixed(2) : 0
                    };
                }).filter(win => win.months <= 6)
                  .sort((a, b) => a.months - b.months || a.extraNeeded - b.extraNeeded);
                
                // Display quick wins
                quickWins.forEach(win => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${win.name}</td>
                        <td>$${win.balance.toFixed(2)}</td>
                        <td>${win.months}</td>
                        <td>${win.extraNeeded > 0 ? `$${win.extraNeeded}/mo` : 'None needed'}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-success apply-extra" data-extra="${win.extraNeeded}">
                                <i class="fas fa-check me-1"></i>Apply Extra
                            </button>
                        </td>
                    `;
                    quickWinsBody.appendChild(row);
                });
                
                // Add event listeners to apply extra buttons
                document.querySelectorAll('.apply-extra').forEach(btn => {
                    btn.addEventListener('click', function() {
                        const extra = parseFloat(this.getAttribute('data-extra'));
                        if (!isNaN(extra) && extra > 0) {
                            document.getElementById('extraPayment').value = extra;
                            document.getElementById('calculate').click();
                        }
                    });
                });
                
                // Progress bar
                const progressBar = document.getElementById('progressBar');
                const percentPaid = ((result.totalStartingBalance - result.debts.reduce((sum, d) => sum + d.remaining, 0)) / result.totalStartingBalance * 100);
                progressBar.style.width = `${Math.min(100, percentPaid)}%`;
                progressBar.innerHTML = `<span class="fw-bold">${Math.round(percentPaid)}%</span>`;
                
                // Starting and current debt
                document.getElementById('startingDebt').textContent = 
                    `$${result.totalStartingBalance.toFixed(2)}`;
                
                const currentDebt = result.debts.reduce((sum, d) => sum + d.remaining, 0);
                document.getElementById('currentDebt').textContent = 
                    `$${currentDebt.toFixed(2)}`;
            }
            
            // Export to PDF
            function exportToPDF() {
                const doc = new jsPDF();
                const now = new Date();
                
                // Title
                doc.setFontSize(18);
                doc.setTextColor(0, 0, 128);
                doc.text('Debt Avalanche Calculator Results', 105, 15, { align: 'center' });
                
                // Date
                doc.setFontSize(10);
                doc.setTextColor(100);
                doc.text(`Generated on: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`, 105, 22, { align: 'center' });
                
                // Summary section
                doc.setFontSize(14);
                doc.setTextColor(0);
                doc.text('Summary', 14, 30);
                
                doc.setFontSize(12);
                doc.text(`Time to Debt Free: ${document.getElementById('timeToFree').textContent}`, 14, 38);
                doc.text(`Total Interest: ${document.getElementById('totalInterest').textContent}`, 14, 45);
                doc.text(`Total Payments: ${document.getElementById('totalPayments').textContent}`, 14, 52);
                doc.text(`Starting Debt: ${document.getElementById('startingDebt').textContent}`, 14, 59);
                doc.text(`Current Debt: ${document.getElementById('currentDebt').textContent}`, 14, 66);
                
                // Quick wins section
                doc.setFontSize(14);
                doc.text('Quick Wins - Debts You Can Close Fast', 14, 80);
                
                const quickWinsData = [];
                document.querySelectorAll('#quickWinsTable tbody tr').forEach(row => {
                    const cells = row.querySelectorAll('td');
                    quickWinsData.push([
                        cells[0].textContent,
                        cells[1].textContent,
                        cells[2].textContent,
                        cells[3].textContent
                    ]);
                });
                
                doc.autoTable({
                    startY: 85,
                    head: [['Debt Name', 'Balance', 'Months', 'Extra Needed']],
                    body: quickWinsData,
                    theme: 'grid',
                    headStyles: { fillColor: [0, 0, 128] }
                });
                
                // Payment schedule section
                doc.setFontSize(14);
                doc.text('Payment Schedule (First 12 Months)', 14, doc.autoTable.previous.finalY + 15);
                
                const scheduleData = [];
                document.querySelectorAll('#scheduleTable tbody tr').forEach(row => {
                    // Skip ellipsis row
                    if (row.querySelector('.fa-ellipsis-h')) return;
                    
                    const cells = row.querySelectorAll('td');
                    if (cells.length === 6) {
                        scheduleData.push([
                            cells[0].textContent,
                            cells[1].textContent,
                            cells[2].textContent,
                            cells[3].textContent,
                            cells[4].textContent,
                            cells[5].textContent
                        ]);
                    }
                });
                
                doc.autoTable({
                    startY: doc.autoTable.previous.finalY + 20,
                    head: [['Month', 'Debt', 'Payment', 'Principal', 'Interest', 'Remaining']],
                    body: scheduleData,
                    theme: 'grid',
                    headStyles: { fillColor: [0, 0, 128] },
                    pageBreak: 'avoid',
                    margin: { top: 10 }
                });
                
                // Footer
                const pageCount = doc.internal.getNumberOfPages();
                for(let i = 1; i <= pageCount; i++) {
                    doc.setPage(i);
                    doc.setFontSize(10);
                    doc.setTextColor(100);
                    doc.text(`Page ${i} of ${pageCount}`, 105, 287, { align: 'center' });
                }
                
                // Save the PDF
                doc.save(`Debt_Avalanche_Plan_${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}.pdf`);
            }
        });