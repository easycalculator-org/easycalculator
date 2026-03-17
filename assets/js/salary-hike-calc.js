
    (function() {
      // ----- DOM elements -----
      const currentInput = document.getElementById('currentSalary');
      const optionNewCard = document.getElementById('optionNewSalaryCard');
      const optionPercentCard = document.getElementById('optionPercentCard');
      const activeBadge = document.getElementById('activeModeBadge');
      const newSalaryGroup = document.getElementById('newSalaryFieldGroup');
      const percentGroup = document.getElementById('percentFieldGroup');
      const newSalaryInput = document.getElementById('newSalaryInput');
      const percentSlider = document.getElementById('hikePercentSlider');
      const percentNumber = document.getElementById('hikePercentNumber');

      // result spans
      const resultNewAnnual = document.getElementById('resultNewAnnual');
      const resultHikePercent = document.getElementById('resultHikePercent');
      const resultHikeAmount = document.getElementById('resultHikeAmount');
      const displayCurrent = document.getElementById('displayCurrent');
      const displayHikeAmount = document.getElementById('displayHikeAmount');
      const displayRevised = document.getElementById('displayRevised');
      const monthlyCurrent = document.getElementById('monthlyCurrent');
      const monthlyNew = document.getElementById('monthlyNew');
      
      // number in words spans
      const currentInWords = document.getElementById('currentInWords');
      const newInWords = document.getElementById('newInWords');

      const resetBtn = document.getElementById('resetBtn');

      // ----- state -----
      let activeMode = 'newSalary';   // 'newSalary' or 'percent'

      // ----- number to words function (supports up to millions) -----
      function numberToWords(num) {
        if (num === undefined || num === null || isNaN(num) || num === '') return '';
        num = parseFloat(num);
        if (num < 0) return 'negative ' + numberToWords(-num);
        if (num === 0) return 'zero';
        
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                      'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
        function convertLessThanThousand(n) {
          if (n === 0) return '';
          if (n < 20) return ones[n];
          if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? ' ' + ones[n%10] : '');
          return ones[Math.floor(n/100)] + ' hundred' + (n%100 ? ' ' + convertLessThanThousand(n%100) : '');
        }
        
        let result = '';
        if (num >= 1000000) {
          result += convertLessThanThousand(Math.floor(num / 1000000)) + ' million';
          num %= 1000000;
          if (num > 0) result += ' ';
        }
        if (num >= 1000) {
          result += convertLessThanThousand(Math.floor(num / 1000)) + ' thousand';
          num %= 1000;
          if (num > 0) result += ' ';
        }
        if (num > 0) {
          result += convertLessThanThousand(num);
        }
        return result.trim();
      }

      // helper: format with commas
      function formatNumber(amount) {
        if (isNaN(amount) || amount === null) return '0';
        return Math.round(amount).toLocaleString('en-US');
      }

      // --- update displays based on current inputs ---
      function refreshCalculator() {
        // get current salary (allow blank/empty)
        let current = parseFloat(currentInput.value);
        if (isNaN(current) || current < 0) current = 0;
        if (current > 1e9) current = 1e9;
        // don't set input value here - keep as user typed, only sanitize on blur
        // we'll use current for calculations, but not overwrite field

        let hikeAmount = 0;
        let newAnnual = 0;
        let effectivePercent = 0;

        if (activeMode === 'newSalary') {
          // MODE A: new salary from input
          let newSal = parseFloat(newSalaryInput.value);
          if (isNaN(newSal) || newSal < 0) newSal = 0;
          if (newSal > 1e9) newSal = 1e9;

          newAnnual = newSal;
          hikeAmount = newAnnual - current;
          
          if (current > 0) {
            effectivePercent = (hikeAmount / current) * 100;
          } else {
            effectivePercent = (hikeAmount > 0) ? 999.9 : (hikeAmount < 0 ? -999.9 : 0);
          }

          // sync percent fields (display only)
          let displayPerc = effectivePercent;
          if (displayPerc > 100) displayPerc = 100;
          if (displayPerc < 0) displayPerc = 0;
          percentSlider.value = displayPerc;
          percentNumber.value = effectivePercent.toFixed(1);

        } else { 
          // MODE B: percent mode
          let percent = parseFloat(percentSlider.value);
          if (isNaN(percent) || percent < 0) percent = 0;
          if (percent > 100) percent = 100;
          percentSlider.value = percent;
          percentNumber.value = percent;

          hikeAmount = current * (percent / 100);
          hikeAmount = Math.round(hikeAmount);
          newAnnual = current + hikeAmount;
          effectivePercent = percent;

          // update newSalaryInput field (in percent mode we control it)
          newSalaryInput.value = newAnnual;
        }

        hikeAmount = Math.round(hikeAmount);
        newAnnual = Math.round(newAnnual);

        // --- update displays ---
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

        // monthly
        let currentMonthly = current / 12;
        let newMonthly = newAnnual / 12;
        monthlyCurrent.textContent = formatNumber(currentMonthly);
        monthlyNew.textContent = formatNumber(newMonthly);

        // number to words
        let currentVal = parseFloat(currentInput.value);
        let newVal = parseFloat(newSalaryInput.value);
        
        if (!isNaN(currentVal) && currentVal > 0) {
          currentInWords.textContent = '▪ ' + numberToWords(currentVal) + (currentVal === 1 ? '' : '');
        } else {
          currentInWords.textContent = '';
        }
        
        if (!isNaN(newVal) && newVal > 0) {
          newInWords.textContent = '▪ ' + numberToWords(newVal);
        } else {
          newInWords.textContent = '';
        }

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
        // Don't sanitize on input, just refresh display
        refreshCalculator();
      });

      newSalaryInput.addEventListener('input', function() {
        if (activeMode !== 'newSalary') return;
        refreshCalculator();
      });

      // Sanitize on blur only
      currentInput.addEventListener('blur', function() {
        let val = parseFloat(currentInput.value);
        if (isNaN(val) || val < 0) {
          currentInput.value = '';
        } else {
          if (val > 1e9) val = 1e9;
          currentInput.value = Math.round(val);
        }
        refreshCalculator();
      });

      newSalaryInput.addEventListener('blur', function() {
        if (activeMode !== 'newSalary') return;
        let val = parseFloat(newSalaryInput.value);
        if (isNaN(val) || val < 0) {
          newSalaryInput.value = '';
        } else {
          if (val > 1e9) val = 1e9;
          newSalaryInput.value = Math.round(val);
        }
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
        currentInput.value = '';
        newSalaryInput.value = '';
        percentSlider.value = 25;
        percentNumber.value = 25;
        setMode('newSalary');
      });

      // initialise with blank fields
      setMode('newSalary');
      refreshCalculator();
    })();