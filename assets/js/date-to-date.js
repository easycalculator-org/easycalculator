
document.addEventListener('DOMContentLoaded', function () {
    const startDatePicker = flatpickr("#startDate", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        defaultDate: "2026-01-01",
        maxDate: "today"
    });
    const endDatePicker = flatpickr("#endDate", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        defaultDate: "today"
    });
    calculateDateDifference();
    document.getElementById('calculateBtn')
        .addEventListener('click', calculateDateDifference);
    document.getElementById('startDate')
        .addEventListener('change', calculateDateDifference);

    document.getElementById('endDate')
        .addEventListener('change', calculateDateDifference);
    function calculateDateDifference() {

        const startDateStr = document.getElementById('startDate').value;
        const endDateStr = document.getElementById('endDate').value;

        if (!startDateStr || !endDateStr) {
            document.getElementById('fullResult').textContent =
                'Please select both dates.';
            return;
        }

        const startDate = new Date(startDateStr);
        const endDate = new Date(endDateStr);

        // Validate dates
        if (isNaN(startDate.getTime())) {
            document.getElementById('fullResult').textContent =
                'Invalid start date. Please select a valid date.';
            return;
        }

        if (isNaN(endDate.getTime())) {
            document.getElementById('fullResult').textContent =
                'Invalid end date. Please select a valid date.';
            return;
        }
        let swapped = false;

        if (startDate > endDate) {
            [startDate, endDate] = [endDate, startDate];

            startDatePicker.setDate(startDate);
            endDatePicker.setDate(endDate);

            swapped = true;
        }


        const timeDiff = endDate.getTime() - startDate.getTime();

        const days = Math.floor(
            timeDiff / (1000 * 60 * 60 * 24)
        );


        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;


        let months =
            (endDate.getFullYear() - startDate.getFullYear()) * 12;

        months += endDate.getMonth() - startDate.getMonth();

        if (endDate.getDate() < startDate.getDate()) {
            months--;
        }

        const tempDate = new Date(startDate);

        tempDate.setMonth(
            startDate.getMonth() + months
        );

        if (tempDate > endDate) {
            months--;

            tempDate.setMonth(
                startDate.getMonth() + months
            );
        }

        const remainingDaysAfterMonths = Math.floor(
            (endDate.getTime() - tempDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );


        const businessDays = calculateBusinessDays(
            startDate,
            endDate
        );

        const weekendDays = days - businessDays;

        document.getElementById('daysResult').textContent = days;
        document.getElementById('weeksResult').textContent = weeks;
        document.getElementById('monthsResult').textContent = months;

        const businessDaysElement =
            document.getElementById('businessDaysResult');

        const weekendDaysElement =
            document.getElementById('weekendDaysResult');

        if (businessDaysElement) {
            businessDaysElement.textContent = businessDays;
        }

        if (weekendDaysElement) {
            weekendDaysElement.textContent = weekendDays;
        }

        let resultText = '';

        if (swapped) {
            resultText += `
                <div class="alert alert-warning mb-3">
                    Note: Your dates were swapped because the
                    start date was after the end date.
                </div>
            `;
        }

        resultText += `
            From <strong>${formatDate(startDate)}</strong>
            to <strong>${formatDate(endDate)}</strong> is:
            <span class="text-primary fw-bold">
                ${days} day${days !== 1 ? 's' : ''}
            </span>
        `;

        // Weeks
        if (weeks > 0) {

            resultText += `
                (which is
                <span class="text-primary fw-bold">
                    ${weeks} week${weeks !== 1 ? 's' : ''}
                </span>
            `;

            if (remainingDays > 0) {
                resultText += `
                    and
                    <span class="text-primary fw-bold">
                        ${remainingDays}
                        day${remainingDays !== 1 ? 's' : ''}
                    </span>
                `;
            }

            resultText += `)`;
        }

        // Months
        if (months > 0) {

            resultText += `,
                or
                <span class="text-primary fw-bold">
                    ${months}
                    month${months !== 1 ? 's' : ''}
                </span>
            `;

            if (remainingDaysAfterMonths > 0) {
                resultText += `
                    and
                    <span class="text-primary fw-bold">
                        ${remainingDaysAfterMonths}
                        day${remainingDaysAfterMonths !== 1 ? 's' : ''}
                    </span>
                `;
            }
        }

        // Business days
        resultText += `
            <div class="mt-3">
                <strong>Business Days:</strong>
                <span class="text-success fw-bold">
                    ${businessDays}
                </span>
            </div>

            <div>
                <strong>Weekend Days:</strong>
                <span class="text-secondary fw-bold">
                    ${weekendDays}
                </span>
            </div>
        `;

        document.getElementById('fullResult').innerHTML =
            resultText;
    }


    function calculateBusinessDays(startDate, endDate) {
        let businessDays = 0;
        const currentDate = new Date(startDate);
        while (currentDate < endDate) {

            const dayOfWeek = currentDate.getDay();

            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                businessDays++;
            }

            currentDate.setDate(
                currentDate.getDate() + 1
            );
        }

        return businessDays;
    }

    function formatDate(date) {

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return date.toLocaleDateString(
            'en-US',
            options
        );
    }

});
