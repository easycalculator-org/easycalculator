 document.addEventListener('DOMContentLoaded', function() {
            // Initialize Flatpickr
            const startDatePicker = flatpickr("#startDate", {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                defaultDate: "2025-01-01",
                maxDate: "today"
            });
            
            const endDatePicker = flatpickr("#endDate", {
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                defaultDate: "today"
            });
            
            // Calculate initial dates
            calculateDateDifference();
            
            // Add event listener to the button
            document.getElementById('calculateBtn').addEventListener('click', calculateDateDifference);
            
            // Add event listeners to date inputs
            document.getElementById('startDate').addEventListener('change', calculateDateDifference);
            document.getElementById('endDate').addEventListener('change', calculateDateDifference);
            
            function calculateDateDifference() {
                const startDateStr = document.getElementById('startDate').value;
                const endDateStr = document.getElementById('endDate').value;
                
                if (!startDateStr || !endDateStr) {
                    document.getElementById('fullResult').textContent = 'Please select both dates.';
                    return;
                }
                
                const startDate = new Date(startDateStr);
                const endDate = new Date(endDateStr);
                
                // Check if dates are valid
                if (isNaN(startDate.getTime())) {
                    document.getElementById('fullResult').textContent = 'Invalid start date. Please select a valid date.';
                    return;
                }
                
                if (isNaN(endDate.getTime())) {
                    document.getElementById('fullResult').textContent = 'Invalid end date. Please select a valid date.';
                    return;
                }
                
                // Swap dates if start is after end
                let swapped = false;
                if (startDate > endDate) {
                    [startDate, endDate] = [endDate, startDate];
                    startDatePicker.setDate(startDate);
                    endDatePicker.setDate(endDate);
                    swapped = true;
                }
                
                // Calculate time difference in milliseconds
                const timeDiff = endDate.getTime() - startDate.getTime();
                
                // Calculate days
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                
                // Calculate weeks and remaining days
                const weeks = Math.floor(days / 7);
                const remainingDays = days % 7;
                
                // Calculate months
                let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
                months += endDate.getMonth() - startDate.getMonth();
                
                // Adjust for days
                if (endDate.getDate() < startDate.getDate()) {
                    months--;
                }
                
                // Calculate remaining days after months
                const tempDate = new Date(startDate);
                tempDate.setMonth(startDate.getMonth() + months);
                
                let remainingDaysAfterMonths = 0;
                if (tempDate > endDate) {
                    months--;
                    tempDate.setMonth(startDate.getMonth() + months);
                }
                
                remainingDaysAfterMonths = Math.floor((endDate - tempDate) / (1000 * 60 * 60 * 24));
                
                // Update the results
                document.getElementById('daysResult').textContent = days;
                document.getElementById('weeksResult').textContent = weeks;
                document.getElementById('monthsResult').textContent = months;
                
                // Create the full result text
                let resultText = '';
                
                if (swapped) {
                    resultText += '<div class="alert alert-warning mb-3">Note: Your dates were swapped because start date was after end date</div>';
                }
                
                resultText += `From <strong>${formatDate(startDate)}</strong> to <strong>${formatDate(endDate)}</strong> is: `;
                resultText += `<span class="text-primary fw-bold">${days} day${days !== 1 ? 's' : ''}</span>`;
                
                if (weeks > 0) {
                    resultText += ` (which is <span class="text-primary fw-bold">${weeks} week${weeks !== 1 ? 's' : ''}</span>`;
                    if (remainingDays > 0) {
                        resultText += ` and <span class="text-primary fw-bold">${remainingDays} day${remainingDays !== 1 ? 's' : ''}</span>`;
                    }
                    resultText += ')';
                }
                
                if (months > 0) {
                    resultText += `, or <span class="text-primary fw-bold">${months} month${months !== 1 ? 's' : ''}</span>`;
                    if (remainingDaysAfterMonths > 0) {
                        resultText += ` and <span class="text-primary fw-bold">${remainingDaysAfterMonths} day${remainingDaysAfterMonths !== 1 ? 's' : ''}</span>`;
                    }
                }
                
                document.getElementById('fullResult').innerHTML = resultText;
            }
            
            function formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return date.toLocaleDateString('en-US', options);
            }
        });