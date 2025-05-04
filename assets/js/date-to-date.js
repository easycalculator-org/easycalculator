
 // Initialize Flatpickr on the date inputs with full Day, Month, and Year format
flatpickr("#startDate", {
      dateFormat: "l, j F Y",  // Format: Day, Date Month Year
    });

    flatpickr("#endDate", {
      dateFormat: "l, j F Y",  // Format: Day, Date Month Year
    });

 function calculateDays() {
      const start = new Date(document.getElementById('startDate').value);
      const end = new Date(document.getElementById('endDate').value);

      if (isNaN(start) || isNaN(end)) {
        document.getElementById('result').textContent = 'Please select both dates.';
        return;
      }

      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Calculate Weeks and Months
      const diffWeeks = Math.floor(diffDays / 7);
      const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

      // Display results
 document.getElementById('result').innerHTML = 
        `<p>There are <strong>${diffDays}</strong> day(s) between the selected dates.</p>
         <p>That is approximately <strong>${diffWeeks}</strong> week(s).</p>
         <p>Or <strong>${diffMonths}</strong> month(s).</p>`;
    }