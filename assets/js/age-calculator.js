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

      let start = new Date(startDate);
      let end = new Date(endDate);
      let years = end.getFullYear() - start.getFullYear();

      if (end < new Date(start.setFullYear(end.getFullYear()))) years--;

      let months = end.getMonth() - start.getMonth();
      if (months < 0) months += 12;

      const adjustedStart = new Date(start.getFullYear() + years, start.getMonth() + months, start.getDate());
      const days = Math.floor((end - adjustedStart) / (1000 * 60 * 60 * 24));

      const totalDays = Math.floor((end - startDate) / (1000 * 60 * 60 * 24));
      const totalWeeks = Math.floor(totalDays / 7);

      document.getElementById('result1').textContent = `Years: ${years}, Months: ${months}, Days: ${days}`;
      document.getElementById('result2').textContent = `Total Weeks: ${totalWeeks}`;
      document.getElementById('result3').textContent = `Total Days: ${totalDays}`;
      document.getElementById('result4').textContent = `Total Months: ${years * 12 + months}`;
      document.getElementById('result5').textContent = `Total Hours: ${totalDays * 24}`;
      document.getElementById('result6').textContent = `Total Minutes: ${totalDays * 24 * 60}`;

      document.getElementById('results').classList.add('show');
    });
  });