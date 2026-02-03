  document.addEventListener('DOMContentLoaded', function() {
        const decimalInput = document.getElementById('decimalInput');
        const convertBtn = document.getElementById('convertBtn');
        const hexResult = document.getElementById('hexResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Hex digits for conversion
        const hexDigits = "0123456789ABCDEF";
        
        // Function to convert decimal to hex using division method
        function decimalToHexDivision(decimalNumber) {
            const steps = [];
            let remainder = decimalNumber;
            let hex = '';
            
            if (decimalNumber === 0) {
                steps.push({
                    quotient: 0,
                    remainder: 0,
                    hexDigit: '0',
                    operation: '0 ÷ 16 = 0 remainder 0'
                });
                return { hex: '0', steps };
            }
            
            while (remainder > 0) {
                const quotient = Math.floor(remainder / 16);
                const digitValue = remainder % 16;
                const hexDigit = hexDigits[digitValue];
                hex = hexDigit + hex; // Build hex string from right to left
                
                steps.push({
                    quotient: quotient,
                    remainder: remainder,
                    digitValue: digitValue,
                    hexDigit: hexDigit,
                    operation: `${remainder} ÷ 16 = ${quotient} remainder ${digitValue} (${hexDigit})`
                });
                
                remainder = quotient;
            }
            
            return { hex, steps };
        }
        
        // Function to convert decimal to hex via binary method
        function decimalToHexViaBinary(decimalNumber) {
            if (decimalNumber === 0) return { hex: '0', binary: '0', steps: [] };
            
            // Convert to binary first
            let binary = '';
            let temp = decimalNumber;
            while (temp > 0) {
                binary = (temp % 2) + binary;
                temp = Math.floor(temp / 2);
            }
            
            // Pad binary to multiple of 4
            const paddedLength = Math.ceil(binary.length / 4) * 4;
            const paddedBinary = binary.padStart(paddedLength, '0');
            
            // Convert binary groups to hex
            let hex = '';
            const steps = [];
            
            for (let i = 0; i < paddedBinary.length; i += 4) {
                const nibble = paddedBinary.substr(i, 4);
                const decimalValue = parseInt(nibble, 2);
                const hexDigit = hexDigits[decimalValue];
                
                steps.push({
                    nibble: nibble,
                    decimalValue: decimalValue,
                    hexDigit: hexDigit,
                    operation: `${nibble}<sub>2</sub> = ${decimalValue}<sub>10</sub> = ${hexDigit}<sub>16</sub>`
                });
                
                hex += hexDigit;
            }
            
            // Remove leading zeros
            hex = hex.replace(/^0+/, '') || '0';
            
            return { hex, binary, paddedBinary, steps };
        }
        
        // Main conversion function
        function decimalToHex(decimalString) {
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
            const divisionResult = decimalToHexDivision(decimalNumber);
            const binaryResult = decimalToHexViaBinary(decimalNumber);
            
            return { 
                hex: divisionResult.hex, 
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
            const result = decimalToHex(decimalValue);
            
            if (result.error) {
                hexResult.textContent = "Invalid input";
                hexResult.className = "text-center mb-0 text-danger";
                conversionSteps.innerHTML = `<p class="mb-1 text-danger">${result.error}</p>`;
                return;
            }
            
            // Update result
            hexResult.textContent = result.hex;
            hexResult.className = "text-center mb-0 text-success";
            
            // Update conversion steps
            let stepsHTML = `<p class="mb-2"><strong>${result.decimal}</strong><sub>10</sub> = <strong>${result.hex}</strong><sub>16</sub></p>`;
            
            // Method 1: Division by 16 method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Division by 16</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Continuously divide by 16 and record remainders (read remainders from bottom to top):</small></p>`;
            
            if (result.divisionSteps.length > 0) {
                // Show division steps
                result.divisionSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show hex digits in reverse order (as they're obtained)
                stepsHTML += `<p class="mb-1 mt-2"><small>Hex digits (read upwards): `;
                const hexDigits = result.divisionSteps.map(step => step.hexDigit).reverse();
                stepsHTML += hexDigits.join(' ← ') + `</small></p>`;
            } else {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 16 = 0 remainder 0</small></p>`;
            }
            
            // Method 2: Via Binary method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Decimal → Binary → Hexadecimal</strong></small></p>`;
            
            if (result.binarySteps.length > 0) {
                stepsHTML += `<p class="mb-1"><small>Step 1: Convert to Binary: ${result.decimal}<sub>10</sub> = ${result.binary}<sub>2</sub></small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 2: Pad binary to groups of 4 bits: ${result.paddedBinary}</small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 3: Convert each 4-bit group to hex:</small></p>`;
                
                result.binarySteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.operation}</small></p>`;
                });
                
                stepsHTML += `<p class="mb-1"><small>Result: ${result.hex}<sub>16</sub></small></p>`;
            }
            
            // Breakdown of hex value
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Hexadecimal breakdown:</strong></small></p>`;
            
            const hexString = result.hex;
            let positionValue = 1;
            let total = 0;
            
            // Process from right to left (least significant to most)
            for (let i = hexString.length - 1; i >= 0; i--) {
                const hexChar = hexString[i];
                const digitValue = hexDigits.indexOf(hexChar);
                const power = hexString.length - 1 - i;
                const value = digitValue * Math.pow(16, power);
                total += value;
                
                stepsHTML += `<p class="mb-1"><small>${hexChar} × 16<sup>${power}</sup> = ${digitValue} × ${Math.pow(16, power)} = ${value}</small></p>`;
            }
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Verification: ${total}<sub>10</sub> = ${result.decimal}<sub>10</sub> ✓</small></p>`;
            
            // Show hex to decimal conversion (reverse)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Reverse conversion (Hex → Decimal):</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.hex}<sub>16</sub> = `;
            
            const reverseCalc = [];
            for (let i = 0; i < hexString.length; i++) {
                const hexChar = hexString[i];
                const digitValue = hexDigits.indexOf(hexChar);
                const power = hexString.length - 1 - i;
                reverseCalc.push(`${digitValue} × 16<sup>${power}</sup>`);
            }
            
            stepsHTML += reverseCalc.join(' + ') + ` = ${result.decimal}<sub>10</sub></small></p>`;
            
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
        updateDisplay('255');
    });