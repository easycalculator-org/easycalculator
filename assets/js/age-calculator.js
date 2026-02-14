document.addEventListener("DOMContentLoaded", function() {
    flatpickr(".flatpickr", { dateFormat: "Y-m-d" });
    document.getElementById('endDate').flatpickr().setDate(new Date());

    document.getElementById('calculateBtn').addEventListener('click', function () {
      const startDate = new Date(document.getElementById('startDate').value);
      const endDate = new Date(document.getElementById('endDate').value);

      if (!startDate || !endDate || startDate > endDate) {
        alert('Please select valid dates.');
        return;
      }

      // Make copies of the dates to avoid modifying the originals
      let start = new Date(startDate);
      let end = new Date(endDate);
      
      // Calculate years
      let years = end.getFullYear() - start.getFullYear();
      
      // Adjust years if end date is before the anniversary
      if (end.getMonth() < start.getMonth() || 
          (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
        years--;
      }
      
      // Calculate months
      let months = end.getMonth() - start.getMonth();
      if (months < 0) months += 12;
      
      // Adjust months if day of month hasn't been reached
      if (end.getDate() < start.getDate()) {
        months--;
        if (months < 0) months += 12;
      }
      
      // Calculate days
      let tempDate = new Date(start);
      tempDate.setFullYear(tempDate.getFullYear() + years);
      tempDate.setMonth(tempDate.getMonth() + months);
      
      // Calculate the difference in days
      const days = Math.floor((end - tempDate) / (1000 * 60 * 60 * 24));

      // Calculate total values using the original dates
      const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(totalDays / 7);
      const totalMonths = years * 12 + months;

      // Calculate weekdays (Monday to Friday)
      let weekdays = 0;
      let currentDate = new Date(startDate);
      
      // Set time to noon to avoid timezone issues
      currentDate.setHours(12, 0, 0, 0);
      let endDateTime = new Date(endDate);
      endDateTime.setHours(12, 0, 0, 0);
      
      // Loop through each day and count weekdays (1 = Monday, 5 = Friday)
      while (currentDate <= endDateTime) {
        const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
          weekdays++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Display results
      document.getElementById('result1').textContent = `Years: ${years}, Months: ${months}, Days: ${days}`;
      document.getElementById('result2').textContent = `Total Weeks: ${totalWeeks}`;
      document.getElementById('result3').textContent = `Total Days: ${totalDays}`;
      document.getElementById('result4').textContent = `Total Months: ${totalMonths}`;
      document.getElementById('result5').textContent = `Total Hours: ${totalDays * 24}`;
      document.getElementById('result6').textContent = `Total Minutes: ${totalDays * 24 * 60}`;
      
      // Add the new result for weekdays - you'll need an element with id="result7" in your HTML
      document.getElementById('result7').textContent = `Weekdays (Mon-Fri): ${weekdays}`;

      document.getElementById('results').classList.add('show');
    });
  });