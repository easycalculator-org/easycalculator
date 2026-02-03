 document.addEventListener('DOMContentLoaded', function() {
        const decimalInput = document.getElementById('decimalInput');
        const convertBtn = document.getElementById('convertBtn');
        const octalResult = document.getElementById('octalResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Function to convert decimal to octal using division method
        function decimalToOctalDivision(decimalNumber) {
            const steps = [];
            let remainder = decimalNumber;
            let octal = '';
            
            if (decimalNumber === 0) {
                steps.push({
                    quotient: 0,
                    remainder: 0,
                    octalDigit: '0',
                    operation: '0 ÷ 8 = 0 remainder 0'
                });
                return { octal: '0', steps };
            }
            
            while (remainder > 0) {
                const quotient = Math.floor(remainder / 8);
                const digitValue = remainder % 8;
                octal = digitValue + octal; // Build octal string from right to left
                
                steps.push({
                    quotient: quotient,
                    remainder: remainder,
                    digitValue: digitValue,
                    octalDigit: digitValue,
                    operation: `${remainder} ÷ 8 = ${quotient} remainder ${digitValue}`
                });
                
                remainder = quotient;
            }
            
            return { octal, steps };
        }
        
        // Function to convert decimal to octal via binary method
        function decimalToOctalViaBinary(decimalNumber) {
            if (decimalNumber === 0) return { octal: '0', binary: '0', steps: [] };
            
            // Convert to binary first
            let binary = '';
            let temp = decimalNumber;
            while (temp > 0) {
                binary = (temp % 2) + binary;
                temp = Math.floor(temp / 2);
            }
            
            // Pad binary to multiple of 3
            const paddedLength = Math.ceil(binary.length / 3) * 3;
            const paddedBinary = binary.padStart(paddedLength, '0');
            
            // Convert binary groups to octal
            let octal = '';
            const steps = [];
            
            for (let i = 0; i < paddedBinary.length; i += 3) {
                const group = paddedBinary.substr(i, 3);
                const decimalValue = parseInt(group, 2);
                const octalDigit = decimalValue;
                
                steps.push({
                    group: group,
                    decimalValue: decimalValue,
                    octalDigit: octalDigit,
                    operation: `${group}<sub>2</sub> = ${decimalValue}<sub>10</sub> = ${octalDigit}<sub>8</sub>`
                });
                
                octal += octalDigit;
            }
            
            // Remove leading zeros
            octal = octal.replace(/^0+/, '') || '0';
            
            return { octal, binary, paddedBinary, steps };
        }
        
        // Main conversion function
        function decimalToOctal(decimalString) {
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
            const divisionResult = decimalToOctalDivision(decimalNumber);
            const binaryResult = decimalToOctalViaBinary(decimalNumber);
            
            return { 
                octal: divisionResult.octal, 
                divisionSteps: divisionResult.steps,
                binarySteps: binaryResult.steps,
                binary: binaryResult.binary,
                paddedBinary: binaryResult.paddedBinary,
                decimal: decimalNumber 
            };
        }
        
        // Function to update the display
        function updateDisplay(decimalValue) {
            decimalInput.value = decimalValue;
            const result = decimalToOctal(decimalValue);
            
            if (result.error) {
                octalResult.textContent = "Invalid input";
                octalResult.className = "text-center mb-0 text-danger";
                conversionSteps.innerHTML = `<p class="mb-1 text-danger">${result.error}</p>`;
                return;
            }
            
            // Update result
            octalResult.textContent = result.octal;
            octalResult.className = "text-center mb-0 text-success";
            
            // Update conversion steps
            let stepsHTML = `<p class="mb-2"><strong>${result.decimal}</strong><sub>10</sub> = <strong>${result.octal}</strong><sub>8</sub></p>`;
            
            // Method 1: Division by 8 method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Division by 8</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Continuously divide by 8 and record remainders (read remainders from bottom to top):</small></p>`;
            
            if (result.divisionSteps.length > 0) {
                // Show division steps
                result.divisionSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show octal digits in reverse order (as they're obtained)
                stepsHTML += `<p class="mb-1 mt-2"><small>Octal digits (read upwards): `;
                const octalDigits = result.divisionSteps.map(step => step.octalDigit).reverse();
                stepsHTML += octalDigits.join(' ← ') + `</small></p>`;
            } else {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 8 = 0 remainder 0</small></p>`;
            }
            
            // Method 2: Via Binary method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Decimal → Binary → Octal</strong></small></p>`;
            
            if (result.binarySteps.length > 0) {
                stepsHTML += `<p class="mb-1"><small>Step 1: Convert to Binary: ${result.decimal}<sub>10</sub> = ${result.binary}<sub>2</sub></small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 2: Pad binary to groups of 3 bits: ${result.paddedBinary}</small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 3: Convert each 3-bit group to octal:</small></p>`;
                
                result.binarySteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.operation}</small></p>`;
                });
                
                stepsHTML += `<p class="mb-1"><small>Result: ${result.octal}<sub>8</sub></small></p>`;
            }
            
            // Breakdown of octal value
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Octal breakdown (place values):</strong></small></p>`;
            
            const octalString = result.octal;
            let positionValue = 1;
            let total = 0;
            
            // Process from right to left (least significant to most)
            for (let i = octalString.length - 1; i >= 0; i--) {
                const octalDigit = parseInt(octalString[i]);
                const power = octalString.length - 1 - i;
                const value = octalDigit * Math.pow(8, power);
                total += value;
                
                stepsHTML += `<p class="mb-1"><small>${octalDigit} × 8<sup>${power}</sup> = ${octalDigit} × ${Math.pow(8, power)} = ${value}</small></p>`;
            }
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Verification: ${total}<sub>10</sub> = ${result.decimal}<sub>10</sub> ✓</small></p>`;
            
            // Show octal to decimal conversion (reverse)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Reverse conversion (Octal → Decimal):</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.octal}<sub>8</sub> = `;
            
            const reverseCalc = [];
            for (let i = 0; i < octalString.length; i++) {
                const octalDigit = parseInt(octalString[i]);
                const power = octalString.length - 1 - i;
                reverseCalc.push(`${octalDigit} × 8<sup>${power}</sup>`);
            }
            
            stepsHTML += reverseCalc.join(' + ') + ` = ${result.decimal}<sub>10</sub></small></p>`;
            
            // Compare with other bases
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Comparison with other bases:</strong></small></p>`;
            
            // Convert to binary and hex for comparison
            const binaryValue = result.decimal.toString(2);
            const hexValue = result.decimal.toString(16).toUpperCase();
            
            stepsHTML += `<p class="mb-1"><small>Binary: ${binaryValue}<sub>2</sub></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Octal: ${result.octal}<sub>8</sub></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Decimal: ${result.decimal}<sub>10</sub></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Hexadecimal: ${hexValue}<sub>16</sub></small></p>`;
            
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
        updateDisplay('100');
    });