// Age Calculator 
// Set default end date to today
document.getElementById('endDate').valueAsDate = new Date();
document.getElementById('calculateBtn').addEventListener('click', function () {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    if (!startDate || !endDate || startDate > endDate) {
        alert('Please select valid dates.');
        return;
    }

    // Clone dates to avoid modifying originals
    let start = new Date(startDate);
    let end = new Date(endDate);

    // Calculate years
    let years = end.getFullYear() - start.getFullYear();
    if (
        end.getMonth() < start.getMonth() ||
        (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())
    ) {
        years--;
    }

    // Calculate months
    let months = end.getMonth() - start.getMonth();
    if (months < 0) months += 12;
    if (end.getDate() < start.getDate()) months--;

    // Adjust start date to add full years and months
    let adjustedStart = new Date(start.getFullYear() + years, start.getMonth() + months, start.getDate());
    if (adjustedStart > end) adjustedStart.setDate(adjustedStart.getDate() - 1); // fix edge case

    // Calculate remaining days
    const diffTime = end - adjustedStart;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Total calculations
    const totalDiffTime = end - start;
    const totalDays = Math.floor(totalDiffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalMonths = years * 12 + months;

    // Display results
    document.getElementById('result1').textContent = `Years: ${years}, Months: ${months}, Days: ${days}`;
    document.getElementById('result2').textContent = `Total Months: ${totalMonths}`;
    document.getElementById('result3').textContent = `Total Weeks: ${totalWeeks}`;
    document.getElementById('result4').textContent = `Total Days: ${totalDays}`;
    document.getElementById('result5').textContent = `Total Hours: ${totalHours}`;
    document.getElementById('result6').textContent = `Total Minutes: ${totalMinutes}`;

    document.getElementById('results').style.display = 'block';
});
