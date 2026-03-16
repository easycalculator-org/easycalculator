 (function() {
      // ----- DOM elements -----
      const currentInput = document.getElementById('currentSalary');

      // mode cards
      const optionNewCard = document.getElementById('optionNewSalaryCard');
      const optionPercentCard = document.getElementById('optionPercentCard');
      const activeBadge = document.getElementById('activeModeBadge');

      // dynamic field groups
      const newSalaryGroup = document.getElementById('newSalaryFieldGroup');
      const percentGroup = document.getElementById('percentFieldGroup');

      // new salary input (mode A)
      const newSalaryInput = document.getElementById('newSalaryInput');

      // percent controls (mode B)
      const percentSlider = document.getElementById('hikePercentSlider');
      const percentNumber = document.getElementById('hikePercentNumber');

      // result spans (annual)
      const resultNewAnnual = document.getElementById('resultNewAnnual');
      const resultHikePercent = document.getElementById('resultHikePercent');
      const resultHikeAmount = document.getElementById('resultHikeAmount');
      const displayCurrent = document.getElementById('displayCurrent');
      const displayHikeAmount = document.getElementById('displayHikeAmount');
      const displayRevised = document.getElementById('displayRevised');

      // monthly spans
      const monthlyCurrent = document.getElementById('monthlyCurrent');
      const monthlyNew = document.getElementById('monthlyNew');

      const resetBtn = document.getElementById('resetBtn');

      // ----- state -----
      let activeMode = 'newSalary';   // 'newSalary' or 'percent'

      // helper: format number with commas (no currency symbol)
      function formatNumber(amount) {
        return Math.round(amount).toLocaleString('en-US');
      }

      // update all displays
      function refreshCalculator() {
        // get current salary (annual)
        let current = parseFloat(currentInput.value);
        if (isNaN(current) || current < 0) current = 0;
        if (current > 1e9) current = 1e9;
        currentInput.value = Math.round(current);

        let hikeAmount = 0;
        let newAnnual = 0;
        let effectivePercent = 0;

        if (activeMode === 'newSalary') {
          // mode A: new salary given
          let newSal = parseFloat(newSalaryInput.value);
          if (isNaN(newSal) || newSal < 0) newSal = 0;
          if (newSal > 1e9) newSal = 1e9;
          newSalaryInput.value = Math.round(newSal);

          newAnnual = newSal;
          hikeAmount = newAnnual - current;
          if (hikeAmount < 0) hikeAmount = 0;   // no negative hike
          newAnnual = current + hikeAmount;      // reflect adjusted
          newSalaryInput.value = newAnnual;

          if (current > 0) {
            effectivePercent = (hikeAmount / current) * 100;
          } else {
            effectivePercent = (hikeAmount > 0) ? 999.9 : 0;
          }

          // sync percent fields (display only)
          percentSlider.value = effectivePercent > 100 ? 100 : Math.min(100, effectivePercent);
          percentNumber.value = effectivePercent.toFixed(1);

        } else { 
          // mode B: percent mode
          let percent = parseFloat(percentSlider.value);
          if (isNaN(percent) || percent < 0) percent = 0;
          if (percent > 100) percent = 100;
          percentSlider.value = percent;
          percentNumber.value = percent;

          hikeAmount = current * (percent / 100);
          hikeAmount = Math.round(hikeAmount);
          newAnnual = current + hikeAmount;
          effectivePercent = percent;

          newSalaryInput.value = newAnnual;
        }

        hikeAmount = Math.round(hikeAmount);
        newAnnual = Math.round(newAnnual);

        // --- update annual displays ---
        resultNewAnnual.textContent = formatNumber(newAnnual);
        if (current > 0 || hikeAmount === 0) {
          resultHikePercent.textContent = (effectivePercent > 0 ? '+' : '') + effectivePercent.toFixed(1) + '%';
        } else if (current === 0 && hikeAmount > 0) {
          resultHikePercent.textContent = '∞ (from 0)';
        } else {
          resultHikePercent.textContent = '0%';
        }

        resultHikeAmount.textContent = `(${formatNumber(hikeAmount)} increase)`;

        // bottom row annual
        displayCurrent.textContent = formatNumber(current);
        displayHikeAmount.textContent = formatNumber(hikeAmount);
        displayRevised.textContent = formatNumber(newAnnual);

        // --- monthly (annual / 12) ---
        let currentMonthly = current / 12;
        let newMonthly = newAnnual / 12;
        monthlyCurrent.textContent = formatNumber(currentMonthly);
        monthlyNew.textContent = formatNumber(newMonthly);

        // update badge
        activeBadge.textContent = (activeMode === 'newSalary') ? 'new salary mode' : 'percentage hike mode';

        // card active borders
        if (activeMode === 'newSalary') {
          optionNewCard.classList.add('border-primary', 'bg-primary', 'bg-opacity-10');
          optionNewCard.classList.remove('border-secondary');
          optionPercentCard.classList.add('border-secondary', 'bg-white');
          optionPercentCard.classList.remove('border-primary', 'bg-success', 'bg-opacity-10', 'border-success');
        } else {
          optionPercentCard.classList.add('border-success', 'bg-success', 'bg-opacity-10');
          optionPercentCard.classList.remove('border-secondary');
          optionNewCard.classList.add('border-secondary', 'bg-white');
          optionNewCard.classList.remove('border-primary', 'bg-primary', 'bg-opacity-10', 'border-success');
        }
      }

      // ---- switch mode ----
      function setMode(mode) {
        activeMode = mode;
        if (mode === 'newSalary') {
          newSalaryGroup.classList.remove('d-none');
          percentGroup.classList.add('d-none');
        } else {
          newSalaryGroup.classList.add('d-none');
          percentGroup.classList.remove('d-none');
        }
        refreshCalculator();
      }

      // ---- event listeners ----
      currentInput.addEventListener('input', function() {
        let val = parseFloat(currentInput.value);
        if (isNaN(val) || val < 0) val = 0;
        currentInput.value = Math.round(val);
        refreshCalculator();
      });

      newSalaryInput.addEventListener('input', function() {
        if (activeMode !== 'newSalary') return;
        let val = parseFloat(newSalaryInput.value);
        if (isNaN(val) || val < 0) val = 0;
        newSalaryInput.value = Math.round(val);
        refreshCalculator();
      });

      percentSlider.addEventListener('input', function() {
        if (activeMode !== 'percent') setMode('percent');
        percentNumber.value = percentSlider.value;
        refreshCalculator();
      });

      percentNumber.addEventListener('input', function() {
        if (activeMode !== 'percent') setMode('percent');
        let p = parseFloat(percentNumber.value);
        if (isNaN(p) || p < 0) p = 0;
        if (p > 100) p = 100;
        percentNumber.value = p;
        percentSlider.value = p;
        refreshCalculator();
      });

      optionNewCard.addEventListener('click', function() {
        setMode('newSalary');
      });

      optionPercentCard.addEventListener('click', function() {
        setMode('percent');
      });

      resetBtn.addEventListener('click', function() {
        currentInput.value = 80000;
        newSalaryInput.value = 100000;
        percentSlider.value = 25;
        percentNumber.value = 25;
        refreshCalculator();
      });

      currentInput.addEventListener('blur', function() {
        let v = parseFloat(currentInput.value);
        if (isNaN(v) || v < 0) v = 0;
        currentInput.value = Math.round(v);
        refreshCalculator();
      });

      newSalaryInput.addEventListener('blur', function() {
        if (activeMode !== 'newSalary') return;
        let v = parseFloat(newSalaryInput.value);
        if (isNaN(v) || v < 0) v = 0;
        newSalaryInput.value = Math.round(v);
        refreshCalculator();
      });

      // initialise
      setMode('newSalary');
      refreshCalculator();
    })();