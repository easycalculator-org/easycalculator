 document.addEventListener('DOMContentLoaded', function() {
        const decimalInput = document.getElementById('decimalInput');
        const convertBtn = document.getElementById('convertBtn');
        const binaryResult = document.getElementById('binaryResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Function to convert decimal to binary using division method
        function decimalToBinaryDivision(decimalNumber) {
            const steps = [];
            let remainder = decimalNumber;
            let binary = '';
            
            if (decimalNumber === 0) {
                steps.push({
                    quotient: 0,
                    remainder: 0,
                    binaryDigit: '0',
                    operation: '0 ÷ 2 = 0 remainder 0'
                });
                return { binary: '0', steps };
            }
            
            while (remainder > 0) {
                const quotient = Math.floor(remainder / 2);
                const bit = remainder % 2;
                binary = bit + binary; // Build binary string from right to left
                
                steps.push({
                    quotient: quotient,
                    remainder: remainder,
                    binaryDigit: bit,
                    operation: `${remainder} ÷ 2 = ${quotient} remainder ${bit}`
                });
                
                remainder = quotient;
            }
            
            return { binary, steps };
        }
        
        // Function to convert decimal to binary using subtraction method
        function decimalToBinarySubtraction(decimalNumber) {
            if (decimalNumber === 0) return { binary: '0', steps: [] };
            
            const powersOfTwo = [];
            let power = 1;
            while (power <= decimalNumber) {
                powersOfTwo.push(power);
                power *= 2;
            }
            
            powersOfTwo.reverse(); // Start from highest power
            
            const steps = [];
            let remainder = decimalNumber;
            let binary = '';
            
            for (const powerValue of powersOfTwo) {
                if (powerValue <= remainder) {
                    remainder -= powerValue;
                    binary += '1';
                    steps.push({
                        power: powerValue,
                        remainderBefore: remainder + powerValue,
                        remainderAfter: remainder,
                        binaryDigit: '1',
                        operation: `${remainder + powerValue} - ${powerValue} = ${remainder}`
                    });
                } else {
                    binary += '0';
                    steps.push({
                        power: powerValue,
                        remainderBefore: remainder,
                        remainderAfter: remainder,
                        binaryDigit: '0',
                        operation: `${powerValue} > ${remainder}, so digit is 0`
                    });
                }
            }
            
            // Remove leading zeros
            binary = binary.replace(/^0+/, '') || '0';
            
            return { binary, steps };
        }
        
        // Main conversion function
        function decimalToBinary(decimalString) {
            // Remove any spaces if present
            decimalString = decimalString.trim();
            
            // Check if input is valid decimal number
            if (!/^\d+$/.test(decimalString)) {
                return { error: "Invalid decimal value. Only numbers 0-9 are allowed." };
            }
            
            const decimalNumber = parseInt(decimalString, 10);
            
            // Check for valid range
            if (decimalNumber > 65535) {
                return { error: "Number too large. Please enter a number up to 65535." };
            }
            
            // Get both methods for demonstration
            const divisionResult = decimalToBinaryDivision(decimalNumber);
            const subtractionResult = decimalToBinarySubtraction(decimalNumber);
            
            return { 
                binary: divisionResult.binary, 
                divisionSteps: divisionResult.steps,
                subtractionSteps: subtractionResult.steps,
                decimal: decimalNumber 
            };
        }
        
        // Function to update the display
        function updateDisplay(decimalValue) {
            decimalInput.value = decimalValue;
            const result = decimalToBinary(decimalValue);
            
            if (result.error) {
                binaryResult.textContent = "Invalid input";
                binaryResult.className = "text-center mb-0 text-danger";
                conversionSteps.innerHTML = `<p class="mb-1 text-danger">${result.error}</p>`;
                return;
            }
            
            // Update result
            binaryResult.textContent = result.binary;
            binaryResult.className = "text-center mb-0 text-success";
            
            // Update conversion steps
            let stepsHTML = `<p class="mb-2"><strong>${result.decimal}</strong><sub>10</sub> = <strong>${result.binary}</strong><sub>2</sub></p>`;
            
            // Method 1: Division by 2 method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Division by 2</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Continuously divide by 2 and record remainders (read remainders from bottom to top):</small></p>`;
            
            if (result.divisionSteps.length > 0) {
                // Show division steps
                result.divisionSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show binary digits in reverse order (as they're obtained)
                stepsHTML += `<p class="mb-1 mt-2"><small>Binary digits (read upwards): `;
                const binaryDigits = result.divisionSteps.map(step => step.binaryDigit).reverse();
                stepsHTML += binaryDigits.join(' ← ') + `</small></p>`;
            } else {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 2 = 0 remainder 0</small></p>`;
            }
            
            // Method 2: Subtraction method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Subtraction of Powers of 2</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Find the largest power of 2 that fits, subtract, and continue:</small></p>`;
            
            if (result.subtractionSteps.length > 0) {
                result.subtractionSteps.forEach((step, index) => {
                    const powerLabel = `2<sup>${Math.log2(step.power)}</sup>`;
                    stepsHTML += `<p class="mb-1"><small>${powerLabel} = ${step.power}: ${step.operation}</small></p>`;
                });
                
                // Show binary representation
                stepsHTML += `<p class="mb-1 mt-2"><small>Binary digits: ${result.subtractionSteps.map(step => step.binaryDigit).join('')}</small></p>`;
            }
            
            // Binary breakdown
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary breakdown:</strong></small></p>`;
            
            const binaryString = result.binary;
            let breakdownHTML = '';
            let positionValue = 1;
            let total = 0;
            
            // Process from right to left (LSB to MSB)
            for (let i = binaryString.length - 1; i >= 0; i--) {
                const bit = binaryString[i];
                if (bit === '1') {
                    total += positionValue;
                    breakdownHTML += `<p class="mb-1"><small>${positionValue} (2<sup>${binaryString.length - 1 - i}</sup>)</small></p>`;
                }
                positionValue *= 2;
            }
            
            if (breakdownHTML) {
                stepsHTML += `<p class="mb-1"><small>${result.decimal} = ${breakdownHTML.replace(/<p class="mb-1"><small>/g, '').replace(/<\/small><\/p>/g, ' + ').slice(0, -3)}</small></p>`;
            }
            
            conversionSteps.innerHTML = stepsHTML;
        }
        
        // Event listener for convert button
        convertBtn.addEventListener('click', function() {
            updateDisplay(decimalInput.value);
        });
        
        // Event listener for Enter key in input field
        decimalInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                updateDisplay(decimalInput.value);
            }
        });
        
        // Event listeners for example buttons
        exampleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const decimalValue = this.getAttribute('data-decimal');
                updateDisplay(decimalValue);
            });
        });
        
        // Initialize with an example
        updateDisplay('10');
    });