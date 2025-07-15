 // Card data from JSON
       let cardData = [];

fetch('/assets/credit.json')
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
        const cardForm = document.getElementById('cardForm');
        const cardNumberInput = document.getElementById('cardNumber');
        const cardHolderInput = document.getElementById('cardHolder');
        const cardExpiryInput = document.getElementById('cardExpiry');
        const cardCVVInput = document.getElementById('cardCVV');
        
        // Display elements
        const displayCardNumber = document.getElementById('displayCardNumber');
        const displayCardHolder = document.getElementById('displayCardHolder');
        const displayCardExpiry = document.getElementById('displayCardExpiry');
        const displayCardCVV = document.getElementById('displayCardCVV');
        
        // Result elements
        const cardTypeResult = document.getElementById('cardTypeResult');
        const cardStatus = document.getElementById('cardStatus');
        const lengthCheck = document.getElementById('lengthCheck');
        const numberCheck = document.getElementById('numberCheck');
        const binCheck = document.getElementById('binCheck');
        const validationProgress = document.getElementById('validationProgress');
        const historyContainer = document.getElementById('historyContainer');
        const cardDetailsSection = document.getElementById('cardDetailsSection');
        
        // Card details elements
        const issuerLogo = document.getElementById('issuerLogo');
        const issuerName = document.getElementById('issuerName');
        const cardCategory = document.getElementById('cardCategory');
        const countryLogo = document.getElementById('countryLogo');
        const countryName = document.getElementById('countryName');
        const cardType = document.getElementById('cardType');
        
        // Card flip functionality
        const creditCard = document.querySelector('.credit-card');
        const flipBtn = document.getElementById('flipBtn');
        const flipBackBtn = document.getElementById('flipBackBtn');
        
        flipBtn.addEventListener('click', () => {
            creditCard.classList.add('flipped');
        });
        
        flipBackBtn.addEventListener('click', () => {
            creditCard.classList.remove('flipped');
        });
        
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
            
            // Detect card type as user types
            detectCardType(value);
        });
        
        // Format expiry date input
        cardExpiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            
            e.target.value = value;
            displayCardExpiry.textContent = value || '••/••';
        });
        
        // Update card holder display
        cardHolderInput.addEventListener('input', function(e) {
            displayCardHolder.textContent = e.target.value || 'John Doe';
        });
        
        // Update CVV display
        cardCVVInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value;
            displayCardCVV.textContent = value || '•••';
        });
        
        // Detect card type based on BIN
        function detectCardType(cardNumber) {
            const bin = cardNumber.substring(0, 6);
            let detectedCard = null;
            
            // Find matching BIN in cardData
            for (const card of cardData) {
                if (card.bin === bin) {
                    detectedCard = card;
                    break;
                }
            }
            
            // Update card logo and styling
            const cardLogo = document.querySelector('.card-logo i');
            if (detectedCard) {
                // Update card brand logo
                const brand = detectedCard.card_brand.toLowerCase();
                if (brand.includes('visa')) {
                    cardLogo.className = 'fab fa-cc-visa';
                    cardLogo.style.color = 'var(--visa-blue)';
                } else if (brand.includes('master')) {
                    cardLogo.className = 'fab fa-cc-mastercard';
                    cardLogo.style.color = 'var(--mastercard-red)';
                } else if (brand.includes('amex')) {
                    cardLogo.className = 'fab fa-cc-amex';
                    cardLogo.style.color = 'var(--amex-blue)';
                } else {
                    cardLogo.className = 'fab fa-credit-card';
                    cardLogo.style.color = '#6c757d';
                }
                
                // Also update the back logo
                document.querySelector('.card-back .card-logo i').className = cardLogo.className;
            } else {
                cardLogo.className = 'fab fa-credit-card';
                cardLogo.style.color = '#6c757d';
                document.querySelector('.card-back .card-logo i').className = 'fab fa-credit-card';
            }
        }
        
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
            lengthCheck.innerHTML = '<i class="fas fa-times text-danger"></i>';
            numberCheck.innerHTML = '<i class="fas fa-times text-danger"></i>';
            binCheck.innerHTML = '<i class="fas fa-times text-danger"></i>';
            validationProgress.style.width = '0%';
            validationProgress.className = 'progress-bar';
            cardDetailsSection.style.display = 'none';
            
            // Validation checks
            let validLength = false;
            let validNumber = false;
            let validBin = false;
            
            // Check length
            if (cardNumber.length >= 13 && cardNumber.length <= 19) {
                validLength = true;
                lengthCheck.innerHTML = '<i class="fas fa-check text-success"></i>';
            }
            
            // Check number validity
            validNumber = validateCardNumber(cardNumber);
            if (validNumber) {
                numberCheck.innerHTML = '<i class="fas fa-check text-success"></i>';
            }
            
            // Check if BIN found
            if (cardDetails) {
                validBin = true;
                binCheck.innerHTML = '<i class="fas fa-check text-success"></i>';
                
                // Update card type display
                let iconClass = 'fab fa-credit-card';
                let brandName = cardDetails.card_brand;
                
                if (brandName.toLowerCase().includes('visa')) {
                    iconClass = 'fab fa-cc-visa';
                    cardTypeResult.className = 'card-type visa';
                } else if (brandName.toLowerCase().includes('master')) {
                    iconClass = 'fab fa-cc-mastercard';
                    cardTypeResult.className = 'card-type mastercard';
                } else if (brandName.toLowerCase().includes('amex')) {
                    iconClass = 'fab fa-cc-amex';
                    cardTypeResult.className = 'card-type amex';
                } else {
                    cardTypeResult.className = 'card-type';
                }
                
                cardTypeResult.innerHTML = `
                    <i class="${iconClass} card-icon"></i>
                    <span>${brandName}</span>
                `;
                
                // Show card details
                issuerLogo.src = cardDetails.issuer_name_logo || 'https://via.placeholder.com/50?text=Bank';
                issuerName.textContent = cardDetails.issuer_name;
                cardCategory.textContent = cardDetails.card_category;
                countryLogo.src = cardDetails.country_logo || 'https://via.placeholder.com/50?text=Flag';
                countryName.textContent = cardDetails.country_name;
                cardType.textContent = cardDetails.card_type;
                cardDetailsSection.style.display = 'block';
            } else {
                cardTypeResult.innerHTML = `
                    <i class="fab fa-credit-card card-icon"></i>
                    <span>Unknown</span>
                `;
                cardTypeResult.className = 'card-type';
            }
            
            // Update validation progress
            const validChecks = [validLength, validNumber, validBin].filter(Boolean).length;
            const progress = (validChecks / 3) * 100;
            validationProgress.style.width = `${progress}%`;
            
            // Update status
            if (validLength && validNumber && validBin) {
                cardStatus.textContent = 'Valid Card';
                cardStatus.className = 'text-success fw-bold';
                validationProgress.className = 'progress-bar bg-success';
            } else {
                cardStatus.textContent = 'Invalid Card';
                cardStatus.className = 'text-danger fw-bold';
                validationProgress.className = 'progress-bar bg-danger';
            }
            
            // Add to history
            addToHistory(cardNumber, validLength && validNumber && validBin);
            
            return validLength && validNumber && validBin;
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
                    <span class="badge ${isValid ? 'bg-success' : 'bg-danger'}">
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
        
        // Form submission handler
        cardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateCard();
        });
        
        // Initialize with sample valid card
        function initSampleCard() {
            const sampleCard = '1234567890123456';
            const formatted = sampleCard.replace(/(\d{4})(?=\d)/g, '$1 ');
            cardNumberInput.value = formatted;
            displayCardNumber.textContent = formatted;
            detectCardType(sampleCard);
        }
        
        // Initialize
        initSampleCard();