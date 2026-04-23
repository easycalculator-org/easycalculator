  (function() {
            // Get DOM elements
            const numberInput = document.getElementById('numberInput');
            const checkBtn = document.getElementById('checkBtn');
            const resetBtn = document.getElementById('resetBtn');
            const resultArea = document.getElementById('resultArea');

            // Helper: Efficient primality test (handles edge cases and large numbers)
            function isPrime(num) {
                // Validate: only integers, and prime definition: natural numbers > 1
                if (!Number.isInteger(num) || typeof num !== 'number' || isNaN(num)) return false;
                // Prime numbers must be > 1
                if (num <= 1) return false;
                // 2 and 3 are prime
                if (num === 2 || num === 3) return true;
                // Eliminate even numbers and multiples of 3
                if (num % 2 === 0 || num % 3 === 0) return false;
                
                // Check divisibility using 6k ± 1 pattern up to sqrt(num)
                let limit = Math.floor(Math.sqrt(num));
                // Start from 5, increment by 6 (6k - 1 and 6k + 1)
                for (let i = 5; i <= limit; i += 6) {
                    if (num % i === 0 || num % (i + 2) === 0) {
                        return false;
                    }
                }
                return true;
            }

            // Function that renders result in modern badge style with icons and color
            function displayResult(number, primeStatus, errorFlag = false, errorMsg = '') {
                // Clear previous content
                resultArea.innerHTML = '';
                
                if (errorFlag) {
                    // Error state: invalid input (e.g., non-integer, NaN, or empty)
                    resultArea.innerHTML = `
                        <div class="alert alert-danger d-flex align-items-center justify-content-center gap-2 py-2 px-3 rounded-pill" role="alert" style="border-radius: 3rem !important;">
                            <i class="fas fa-exclamation-triangle"></i>
                            <span class="fw-medium">${errorMsg}</span>
                        </div>
                    `;
                    return;
                }
                
                // Safe number formatting: add commas for readability
                const formattedNum = Number(number).toLocaleString('en-US');
                
                if (primeStatus === true) {
                    // Prime Result with success color and prime badge
                    resultArea.innerHTML = `
                        <div class="result-badge bg-success text-white d-inline-flex align-items-center gap-2 shadow-sm px-4 py-3" style="border-radius: 3rem;">
                            <i class="fas fa-crown fs-5"></i>
                            <span class="fw-bold">${formattedNum} is a PRIME number!</span>
                            <i class="fas fa-check-circle fs-5"></i>
                        </div>
                        <div class="mt-3 small text-success-emphasis bg-success bg-opacity-10 rounded-pill px-3 py-1 d-inline-block">
                            <i class="fas fa-brain me-1"></i> Only divisible by 1 and itself
                        </div>
                    `;
                } else if (primeStatus === false && Number.isInteger(number) && number > 1) {
                    // Composite case (non-prime but >1)
                    // Find first divisor to show extra insight (optional educational)
                    let divisor = null;
                    const n = number;
                    if (n % 2 === 0 && n > 2) divisor = 2;
                    else if (n % 3 === 0 && n > 3) divisor = 3;
                    else {
                        let limit = Math.floor(Math.sqrt(n));
                        for (let i = 5; i <= limit; i += 6) {
                            if (n % i === 0) { divisor = i; break; }
                            if (n % (i + 2) === 0) { divisor = i + 2; break; }
                        }
                    }
                    const divisorMessage = divisor ? ` (divisible by ${divisor})` : '';
                    resultArea.innerHTML = `
                        <div class="result-badge bg-secondary bg-opacity-25 text-dark border d-inline-flex align-items-center gap-2 px-4 py-3" style="border-radius: 3rem; background:#f1f3f5;">
                            <i class="fas fa-times-circle text-danger fs-5"></i>
                            <span class="fw-semibold">${formattedNum} is NOT prime</span>
                            <span class="small text-muted ms-1">${divisorMessage}</span>
                        </div>
                        <div class="mt-3 small text-secondary">
                            <i class="fas fa-chart-line me-1"></i> Composite number — has more than two divisors.
                        </div>
                    `;
                } else if (number === 1) {
                    // specific handling for 1
                    resultArea.innerHTML = `
                        <div class="result-badge bg-warning bg-opacity-25 text-dark border-warning d-inline-flex align-items-center gap-2 px-4 py-3" style="border-radius: 3rem;">
                            <i class="fas fa-question-circle text-warning"></i>
                            <span class="fw-semibold">1 is neither prime nor composite</span>
                        </div>
                        <div class="mt-2 small text-muted">By definition, primes must be greater than 1.</div>
                    `;
                } else if (number <= 0) {
                    resultArea.innerHTML = `
                        <div class="result-badge bg-info bg-opacity-15 text-info-emphasis d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill border-info">
                            <i class="fas fa-info-circle"></i>
                            <span>${formattedNum} is not a positive integer > 0. Prime numbers are positive natural numbers > 1.</span>
                        </div>
                    `;
                } else {
                    // fallback for any other edge (like float that got converted etc)
                    resultArea.innerHTML = `
                        <div class="alert alert-warning rounded-pill small">
                            <i class="fas fa-sync-alt"></i> Please enter a valid integer.
                        </div>
                    `;
                }
            }
            
            // Core validation and check logic
            function performCheck() {
                let rawValue = numberInput.value.trim();
                
                // reset any previous error style on input
                numberInput.classList.remove('is-invalid');
                
                // Empty input?
                if (rawValue === "") {
                    numberInput.classList.add('is-invalid');
                    displayResult(null, null, true, "Please enter a number before checking.");
                    return;
                }
                
                // Convert to number (supports scientific? but we parse integer strictly)
                // Use Number() but then ensure it's integer without decimal part.
                let num = Number(rawValue);
                
                // check for NaN or non-numeric
                if (isNaN(num)) {
                    numberInput.classList.add('is-invalid');
                    displayResult(null, null, true, "Invalid input: please enter a valid integer (e.g., 17, 103).");
                    return;
                }
                
                // verify that the input is integer (no decimal fraction)
                if (!Number.isInteger(num)) {
                    // But if user enters "5.0", JS sees int? Actually 5.0 is integer. But we also need to prohibit "5.7"
                    if (rawValue.includes('.') && !Number.isInteger(num)) {
                        numberInput.classList.add('is-invalid');
                        displayResult(null, null, true, "Prime numbers are defined for integers. Please enter a whole number.");
                        return;
                    } else if (!Number.isInteger(num)) {
                        numberInput.classList.add('is-invalid');
                        displayResult(null, null, true, "Only whole numbers are allowed. Decimals are not supported.");
                        return;
                    }
                }
                
                if (num > 1e12) {
                    // optional performance hint, but algorithm will still work but might take several ms for huge numbers.
                    // We keep check but show subtle indicator
                    console.log("Large Number check may be slightly slower, but algorithm is efficient.");
                }
                
                // Remove invalid class if any
                numberInput.classList.remove('is-invalid');
                
                // Determine primality using robust isPrime function
                let primeResult = isPrime(num);
                
                // Display final results (with extra handling for 1, negatives inside displayResult)
                if (num === 1) {
                    displayResult(1, null, false); // specific case for one
                } else if (num <= 0) {
                    displayResult(num, false, false); // show info for zero or negative
                } else {
                    displayResult(num, primeResult, false);
                }
            }
            
            // Reset function: clear input, reset result area to initial friendly state
            function resetChecker() {
                numberInput.value = '';
                numberInput.classList.remove('is-invalid');
                // reset to elegant idle state
                resultArea.innerHTML = `
                    <div class="result-badge bg-light text-dark border d-inline-flex align-items-center gap-2 px-4 py-2">
                        <i class="fas fa-lightbulb text-warning"></i> 
                        <span>Ready — enter a number</span>
                    </div>
                `;
                // optional: set focus back to input
                numberInput.focus();
            }
            
            // Add event listeners
            checkBtn.addEventListener('click', performCheck);
            resetBtn.addEventListener('click', resetChecker);
            
            // Additional: allow "Enter" key on input field to trigger check (better UX)
            numberInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    performCheck();
                }
            });
            

            // Minimal initial check after DOM ready to showcase demo behaviour with value 19.
            window.addEventListener('DOMContentLoaded', function() {
                // small timeout to ensure rendering, but immediate check works.
                // Since default value is "19" (prime) we show prime result without user action
                performCheck();
            });
            
            // Add a secondary check if the user tries to enter floating numbers with many decimals.
            numberInput.addEventListener('blur', function() {
                let val = numberInput.value.trim();
                if (val !== "") {
                    let num = Number(val);
                    if (!isNaN(num) && !Number.isInteger(num) && val.includes('.')) {
                        numberInput.classList.add('is-invalid');
                        // show error only if they leave field? But not overwriting result; but this is a gentle highlight.
                        // But we don't reset result, only field hint.
                    } else {
                        numberInput.classList.remove('is-invalid');
                    }
                } else {
                    numberInput.classList.remove('is-invalid');
                }
            });
 })();