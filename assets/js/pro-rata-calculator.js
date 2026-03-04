 (function() {
      // DOM elements
      const totalInput = document.getElementById('totalAmount');
      const periodType = document.getElementById('periodType');
      const customFullGroup = document.getElementById('customFullPeriodGroup');
      const customFullInput = document.getElementById('customFullDays');
      const actualInput = document.getElementById('actualDays');
      const calculateBtn = document.getElementById('calculateBtn');
      const resetBtn = document.getElementById('resetBtn');

      // result spans
      const proRataSpan = document.getElementById('proRataAmount');
      const dailyRateSpan = document.getElementById('dailyRate');
      const percentageSpan = document.getElementById('percentageUsed');
      const remainingSpan = document.getElementById('remainingAmount');
      const daysRemainingSpan = document.getElementById('daysRemaining');

      // ---- helper: get full period length in days based on selection ----
      function getFullPeriodDays() {
        const type = periodType.value;
        if (type === 'custom') {
          let val = parseFloat(customFullInput.value);
          return (isNaN(val) || val <= 0) ? 1 : val;   
        }
        if (type === 'day') return 1;
        if (type === 'week') return 7;
        if (type === 'month') return 30;     
        if (type === 'year') return 365;
        return 1; // fallback
      }

      // ---- toggle custom field visibility ----
      function toggleCustomField() {
        if (periodType.value === 'custom') {
          customFullGroup.style.display = 'block';
        } else {
          customFullGroup.style.display = 'none';
        }
      }

      // ---- calculation & display (matches image layout) ----
      function updateResults() {
        // total amount
        let total = parseFloat(totalInput.value);
        if (isNaN(total) || total < 0) total = 0;

        // full period days
        const fullDays = getFullPeriodDays();

        // actual days
        let actual = parseFloat(actualInput.value);
        if (isNaN(actual) || actual < 0) actual = 0;

        // avoid division by zero: if fullDays = 0 (shouldn't happen), treat as 1
        const safeFull = (fullDays > 0) ? fullDays : 1;

        // daily rate
        const dailyRate = total / safeFull;

        // pro rata amount
        const proRata = dailyRate * actual;

        // percentage used
        const perc = (actual / safeFull) * 100;

        // remaining amount
        const remaining = total - proRata;

        // days remaining
        const daysRem = Math.max(0, safeFull - actual);

        // format as currency (USD)
        const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
        // daily rate formatted
        const dailyFormatted = formatter.format(dailyRate);
        const proRataFormatted = formatter.format(proRata);
        const remainingFormatted = formatter.format(remaining);

        // percentage with two decimals
        const percFormatted = perc.toFixed(2) + '%';

        // days remaining (as number + 'days' string)
        const daysRemText = daysRem + ' day' + (daysRem !== 1 ? 's' : '');

        // push to spans
        proRataSpan.textContent = proRataFormatted;
        dailyRateSpan.textContent = dailyFormatted;
        percentageSpan.textContent = percFormatted;
        remainingSpan.textContent = remainingFormatted;
        daysRemainingSpan.textContent = daysRemText;
      }

      // ---- reset to default (as in image: 1000, custom 500, actual 25) ----
      function resetToDefault() {
        totalInput.value = '1000';
        periodType.value = 'custom';
        customFullInput.value = '500';
        actualInput.value = '25';
        toggleCustomField();
        updateResults();
      }

      // ---- event listeners ----
      periodType.addEventListener('change', function() {
        toggleCustomField();
        updateResults();       
      });

      calculateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        updateResults();
      });

      resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        resetToDefault();
      });

           
      // Redefine period change:
      periodType.removeEventListener('change', toggleCustomField); 
      // Better detach all and reattach cleanly.
      
    })();

    // Second pass: 
    (function() {
      const totalInput = document.getElementById('totalAmount');
      const periodType = document.getElementById('periodType');
      const customFullGroup = document.getElementById('customFullPeriodGroup');
      const customFullInput = document.getElementById('customFullDays');
      const actualInput = document.getElementById('actualDays');
      const calculateBtn = document.getElementById('calculateBtn');
      const resetBtn = document.getElementById('resetBtn');

      const proRataSpan = document.getElementById('proRataAmount');
      const dailyRateSpan = document.getElementById('dailyRate');
      const percentageSpan = document.getElementById('percentageUsed');
      const remainingSpan = document.getElementById('remainingAmount');
      const daysRemainingSpan = document.getElementById('daysRemaining');

      function getFullPeriodDays() {
        const type = periodType.value;
        if (type === 'custom') {
          let val = parseFloat(customFullInput.value);
          return (isNaN(val) || val <= 0) ? 1 : val;
        }
        if (type === 'day') return 1;
        if (type === 'week') return 7;
        if (type === 'month') return 30;
        if (type === 'year') return 365;
        return 1;
      }

      function toggleCustomField() {
        customFullGroup.style.display = (periodType.value === 'custom') ? 'block' : 'none';
      }

      function calculate() {
        let total = parseFloat(totalInput.value);
        if (isNaN(total) || total < 0) total = 0;

        const fullDays = getFullPeriodDays();
        let actual = parseFloat(actualInput.value);
        if (isNaN(actual) || actual < 0) actual = 0;

        const safeFull = (fullDays > 0) ? fullDays : 1;
        const dailyRate = total / safeFull;
        const proRata = dailyRate * actual;
        const perc = (actual / safeFull) * 100;
        const remaining = total - proRata;
        const daysRem = Math.max(0, safeFull - actual);

        // formatting
        const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
        proRataSpan.textContent = currency.format(proRata);
        dailyRateSpan.textContent = currency.format(dailyRate);
        percentageSpan.textContent = perc.toFixed(2) + '%';
        remainingSpan.textContent = currency.format(remaining);
        daysRemainingSpan.textContent = daysRem + ' day' + (daysRem !== 1 ? 's' : '');
      }

      function resetDefaults() {
        totalInput.value = '1000';
        periodType.value = 'custom';
        customFullInput.value = '500';
        actualInput.value = '25';
        toggleCustomField();
        calculate(); // show default results
      }

      // initial toggle
      toggleCustomField();
      // initial calculate (to display default 50.00 etc)
      calculate();

      // event listeners (only calculate and reset)
      calculateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        calculate();
      });

      resetBtn.addEventListener('click', function(e) {
        e.preventDefault();
        resetDefaults();
      });

      // period change only toggles custom field, does NOT recalc (image style)
      periodType.addEventListener('change', function() {
        toggleCustomField();
      });
    })();