        document.getElementById('endDate').valueAsDate = new Date();

        document.getElementById('calculateBtn').addEventListener('click', function () {
            const startDate = new Date(document.getElementById('startDate').value);
            const endDate = new Date(document.getElementById('endDate').value);

            if (!startDate || !endDate || startDate > endDate) {
                alert('Please select valid dates.');
                return;
            }

            const diffTime = endDate - startDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const diffWeeks = Math.floor(diffDays / 7);
            const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
            const diffYears = Math.floor(diffMonths / 12);

            const years = diffYears;
            const months = diffMonths % 12;
            const weeks = Math.floor(diffDays / 7);
            const days = diffDays % 7;

            const totalHours = diffDays * 24;
            const totalMinutes = totalHours * 60;

            // Display Results
            document.getElementById('result1').textContent = `Years: ${years}, Months: ${months}, Days: ${days}`;
            document.getElementById('result2').textContent = `Total Months: ${diffMonths}`;
            document.getElementById('result3').textContent = `Total Weeks: ${diffWeeks}`;
            document.getElementById('result4').textContent = `Total Days: ${diffDays}`;
            document.getElementById('result5').textContent = `Total Hours: ${totalHours}`;
            document.getElementById('result6').textContent = `Total Minutes: ${totalMinutes}`;

            document.getElementById('results').style.display = 'block';
        });
  