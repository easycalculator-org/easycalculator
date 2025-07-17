 // Card data from JSON
       let cardData = [];

fetch('/assets/json/credit.json')
  .then(response => response.json())
  .then(data => {
    cardData = data;
    // Optional: re-run initial sample detection once data is loaded
    initSampleCard();
  })
  .catch(error => {
    console.error('Error loading card data:', error);
  });

// DOM Elements
        const cardNumberInput = document.getElementById('cardNumber');
        const displayCardNumber = document.getElementById('displayCardNumber');
        const validateBtn = document.getElementById('validateBtn');
        const cardBrand = document.getElementById('cardBrand');
        const cardTypeEl = document.getElementById('cardType');
        const cardBrandLogo = document.getElementById('cardBrandLogo');
        const resultBrandLogo = document.getElementById('resultBrandLogo');
        const issuerLogo = document.getElementById('issuerLogo');
        const issuerName = document.getElementById('issuerName');
        const cardCategory = document.getElementById('cardCategory');
        const countryFlag = document.getElementById('countryFlag');
        const countryName = document.getElementById('countryName');
        const lengthCheck = document.getElementById('lengthCheck');
        const numberCheck = document.getElementById('numberCheck');
        const binCheck = document.getElementById('binCheck');
        const validationProgress = document.getElementById('validationProgress');
        const progressPercent = document.getElementById('progressPercent');
        const cardStatus = document.getElementById('cardStatus');
        const historyContainer = document.getElementById('historyContainer');

        // Format card number input
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            let formatted = '';
            
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) formatted += ' ';
                formatted += value[i];
            }
            
            e.target.value = formatted;
            displayCardNumber.textContent = formatted || '•••• •••• •••• ••••';
        });

        // Validate card using Luhn algorithm
        function validateCardNumber(cardNumber) {
            const num = cardNumber.replace(/\D/g, '');
            if (!num) return false;
            
            let sum = 0;
            let shouldDouble = false;
            
            for (let i = num.length - 1; i >= 0; i--) {
                let digit = parseInt(num.charAt(i));
                
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }
                
                sum += digit;
                shouldDouble = !shouldDouble;
            }
            
            return (sum % 10) === 0;
        }

        // Find card details by BIN
        function findCardByBin(cardNumber) {
            const bin = cardNumber.substring(0, 6);
            for (const card of cardData) {
                if (card.bin === bin) {
                    return card;
                }
            }
            return null;
        }

        // Validate the entire card
        function validateCard() {
            const cardNumber = cardNumberInput.value.replace(/\D/g, '');
            const cardDetails = findCardByBin(cardNumber);
            
            // Reset validation UI
            lengthCheck.innerHTML = '<i class="fas fa-times-circle text-danger"></i>';
            numberCheck.innerHTML = '<i class="fas fa-times-circle text-danger"></i>';
            binCheck.innerHTML = '<i class="fas fa-times-circle text-danger"></i>';
            validationProgress.style.width = '0%';
            progressPercent.textContent = '0%';
            cardStatus.textContent = 'Validating...';
            cardStatus.className = 'fw-bold fs-5 text-primary';
            
            // Validation checks
            let validLength = false;
            let validNumber = false;
            let validBin = false;
            
            // Check length
            if (cardNumber.length >= 13 && cardNumber.length <= 19) {
                validLength = true;
                lengthCheck.innerHTML = '<i class="fas fa-check-circle text-success"></i>';
            }
            
            // Check number validity
            validNumber = validateCardNumber(cardNumber);
            if (validNumber) {
                numberCheck.innerHTML = '<i class="fas fa-check-circle text-success"></i>';
            }
            
            // Check if BIN found
            if (cardDetails) {
                validBin = true;
                binCheck.innerHTML = '<i class="fas fa-check-circle text-success"></i>';
                
                // Update card brand display
                cardBrand.textContent = cardDetails.card_brand;
                cardTypeEl.textContent = cardDetails.card_type;
                
                // Update card brand logos
                if (cardDetails.card_brand_logo) {
                    cardBrandLogo.innerHTML = `<img src="${cardDetails.card_brand_logo}" alt="${cardDetails.card_brand}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-credit-card text-white\' style=\'font-size:2.5rem;\'></i>'">`;
                    resultBrandLogo.innerHTML = `<img src="${cardDetails.card_brand_logo}" alt="${cardDetails.card_brand}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-credit-card\'></i>'">`;
                } else {
                    cardBrandLogo.innerHTML = `<i class="fas fa-credit-card text-white" style="font-size: 2.5rem;"></i>`;
                    resultBrandLogo.innerHTML = `<i class="fas fa-credit-card"></i>`;
                }
                
                // Handle issuer information
                if (cardDetails.issuer_name.includes("not assigned")) {
                    issuerLogo.innerHTML = '<div class="not-assigned"><i class="fas fa-ban me-2"></i>Not Assigned</div>';
                    issuerName.textContent = "Not assigned to any bank";
                } else {
                    if (cardDetails.issuer_name_logo) {
                        issuerLogo.innerHTML = `<img src="${cardDetails.issuer_name_logo}" alt="${cardDetails.issuer_name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-university\'></i>'">`;
                    } else {
                        issuerLogo.innerHTML = '<i class="fas fa-university"></i>';
                    }
                    issuerName.textContent = cardDetails.issuer_name;
                }
                
                cardCategory.textContent = cardDetails.card_category;
                
                // Update country info
                if (cardDetails.country_logo) {
                    countryFlag.innerHTML = `<img src="${cardDetails.country_logo}" alt="${cardDetails.country_name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-flag\'></i>'">`;
                } else {
                    countryFlag.innerHTML = '<i class="fas fa-flag"></i>';
                }
                countryName.textContent = cardDetails.country_name;
            } else {
                // Reset card details
                cardBrand.textContent = "Card Brand";
                cardTypeEl.textContent = "Card Type";
                cardBrandLogo.innerHTML = '<i class="fas fa-credit-card text-white" style="font-size: 2.5rem;"></i>';
                resultBrandLogo.innerHTML = '<i class="fas fa-credit-card"></i>';
                issuerLogo.innerHTML = '<i class="fas fa-university"></i>';
                issuerName.textContent = "Bank Name";
                cardCategory.textContent = "Card Category";
                countryFlag.innerHTML = '<i class="fas fa-flag"></i>';
                countryName.textContent = "Country Name";
            }
            
            // Update validation progress
            const validChecks = [validLength, validNumber, validBin].filter(Boolean).length;
            const progress = (validChecks / 3) * 100;
            validationProgress.style.width = `${progress}%`;
            progressPercent.textContent = `${Math.round(progress)}%`;
            
            // Update status
            if (validLength && validNumber && validBin) {
                cardStatus.textContent = 'Valid Card';
                cardStatus.className = 'fw-bold fs-5 text-success';
                validationProgress.className = 'progress-bar bg-success';
            } else {
                cardStatus.textContent = 'Invalid Card';
                cardStatus.className = 'fw-bold fs-5 text-danger';
                validationProgress.className = 'progress-bar bg-danger';
            }
            
            // Add to history
            addToHistory(cardNumber, validLength && validNumber && validBin);
        }

        // Add validation to history
        function addToHistory(cardNumber, isValid) {
            // Create history item
            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${isValid ? 'bg-success bg-opacity-10' : 'bg-danger bg-opacity-10'}`;
            
            // Format card number for display
            let formattedNum = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
            if (formattedNum.length > 19) {
                formattedNum = formattedNum.substring(0, 19) + '...';
            }
            
            historyItem.innerHTML = `
                <div>
                    <span class="history-card-number">${formattedNum}</span>
                    <div class="small text-muted">${new Date().toLocaleString()}</div>
                </div>
                <div>
                    <span class="badge ${isValid ? 'bg-success' : 'bg-danger'} rounded-pill p-2">
                        ${isValid ? 'Valid' : 'Invalid'}
                    </span>
                </div>
            `;
            
            // Remove placeholder if exists
            if (historyContainer.querySelector('.text-center')) {
                historyContainer.innerHTML = '';
            }
            
            // Add to top of history
            historyContainer.prepend(historyItem);
            
            // Limit history to 10 items
            if (historyContainer.children.length > 10) {
                historyContainer.removeChild(historyContainer.lastChild);
            }
        }

        // Validate button handler
        validateBtn.addEventListener('click', function() {
            if (cardNumberInput.value.trim() === '') {
                alert('Please enter a card number');
                return;
            }
            validateCard();
        });

        // Initialize with sample valid card
        function initSampleCard() {
            const sampleCard = '3645661234567890';
            const formatted = sampleCard.replace(/(\d{4})(?=\d)/g, '$1 ');
            cardNumberInput.value = formatted;
            displayCardNumber.textContent = formatted;
        }

        // Initialize
        initSampleCard();