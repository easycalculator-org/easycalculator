 document.addEventListener('DOMContentLoaded', function() {
        const octalInput = document.getElementById('octalInput');
        const convertBtn = document.getElementById('convertBtn');
        const decimalResult = document.getElementById('decimalResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Function to convert octal to decimal
        function octalToDecimal(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            // Check if input is valid octal
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value. Only digits 0-7 are allowed." };
            }
            
            let decimal = 0;
            const steps = [];
            const length = octalString.length;
            
            // Process each digit from right to left
            for (let i = 0; i < length; i++) {
                const digit = parseInt(octalString[length - 1 - i]);
                
                // Calculate positional value
                const positionValue = digit * Math.pow(8, i);
                
                // Add to steps
                steps.push({
                    digit: digit,
                    position: i,
                    positionValue: positionValue,
                    calculation: `${digit} × 8<sup>${i}</sup> = ${positionValue}`
                });
                
                decimal += positionValue;
            }
            
            return { decimal, steps, octal: octalString };
        }
        
        // Function to convert octal to decimal via binary method
        function octalToDecimalViaBinary(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value" };
            }
            
            // Octal to binary mapping
            const octalToBinaryMap = {
                '0': '000', '1': '001', '2': '010', '3': '011',
                '4': '100', '5': '101', '6': '110', '7': '111'
            };
            
            // Convert octal to binary first
            let binary = '';
            const binarySteps = [];
            
            for (let i = 0; i < octalString.length; i++) {
                const octalDigit = octalString[i];
                const binaryGroup = octalToBinaryMap[octalDigit];
                
                binarySteps.push({
                    octalDigit: octalDigit,
                    binary: binaryGroup,
                    decimalValue: parseInt(octalDigit, 8),
                    operation: `${octalDigit}<sub>8</sub> = ${binaryGroup}<sub>2</sub> = ${parseInt(octalDigit, 8)}<sub>10</sub>`
                });
                
                binary += binaryGroup;
            }
            
            // Convert binary to decimal
            let decimal = 0;
            const binaryToDecimalSteps = [];
            const binaryLength = binary.length;
            
            for (let i = 0; i < binaryLength; i++) {
                const bit = parseInt(binary[binaryLength - 1 - i]);
                
                if (bit === 1) {
                    const positionValue = Math.pow(2, i);
                    
                    binaryToDecimalSteps.push({
                        position: i,
                        positionValue: positionValue,
                        calculation: `1 × 2<sup>${i}</sup> = ${positionValue}`
                    });
                    
                    decimal += positionValue;
                }
            }
            
            return { 
                decimal, 
                binarySteps, 
                binaryToDecimalSteps, 
                binary, 
                octal: octalString 
            };
        }
        
        // Main conversion function
        function octalToDecimalConversion(octalString) {
            // Get both methods for demonstration
            const directResult = octalToDecimal(octalString);
            
            if (directResult.error) {
                return { error: directResult.error };
            }
            
            const binaryResult = octalToDecimalViaBinary(octalString);
            
            return { 
                decimal: directResult.decimal, 
                directSteps: directResult.steps,
                binarySteps: binaryResult.binarySteps,
                binaryToDecimalSteps: binaryResult.binaryToDecimalSteps,
                binary: binaryResult.binary,
                octal: directResult.octal 
            };
        }
        
        // Function to update the display
        function updateDisplay(octalValue) {
            octalInput.value = octalValue;
            const result = octalToDecimalConversion(octalValue);
            
            if (result.error) {
                decimalResult.textContent = "Invalid input";
                decimalResult.className = "text-center mb-0 text-danger";
                conversionSteps.innerHTML = `<p class="mb-1 text-danger">${result.error}</p>`;
                return;
            }
            
            // Update result
            decimalResult.textContent = result.decimal.toLocaleString();
            decimalResult.className = "text-center mb-0 text-success";
            
            // Update conversion steps
            let stepsHTML = `<p class="mb-2"><strong>${result.octal}</strong><sub>8</sub> = <strong>${result.decimal.toLocaleString()}</strong><sub>10</sub></p>`;
            
            // Method 1: Direct conversion using powers of 8
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Direct Conversion using Powers of 8</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Sum of (digit × 8<sup>position</sup>):</small></p>`;
            
            // Show the calculation formula
            const stepsReversed = [...result.directSteps].reverse();
            stepsHTML += `<p class="mb-2">${result.octal}<sub>8</sub> = ${stepsReversed.map(step => step.calculation.split('=')[0]).join(' + ')}</p>`;
            
            stepsHTML += `<p class="mb-2">= ${stepsReversed.map(step => step.positionValue).join(' + ')}</p>`;
            stepsHTML += `<p class="mb-0">= <strong>${result.decimal.toLocaleString()}</strong><sub>10</sub></p>`;
            
            // Detailed breakdown
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Position-by-position calculation:</strong></small></p>`;
            
            stepsReversed.forEach((step, index) => {
                const position = stepsReversed.length - 1 - index;
                stepsHTML += `<p class="mb-1"><small>Position ${position}: ${step.digit} × 8<sup>${step.position}</sup> = ${step.positionValue}</small></p>`;
            });
            
            // Method 2: Via Binary method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Octal → Binary → Decimal</strong></small></p>`;
            
            // Step 1: Octal to Binary
            stepsHTML += `<p class="mb-1"><small><strong>Step 1: Convert Octal to Binary</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Each octal digit = 3 binary bits:</small></p>`;
            
            result.binarySteps.forEach((step, index) => {
                stepsHTML += `<p class="mb-1"><small>Digit ${index + 1}: ${step.operation}</small></p>`;
            });
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Combined binary: ${result.binary}</small></p>`;
            
            // Step 2: Binary to Decimal
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Step 2: Convert Binary to Decimal</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Sum of powers of 2 for each '1' bit:</small></p>`;
            
            if (result.binaryToDecimalSteps.length > 0) {
                // Show calculation for binary to decimal
                const binaryCalc = result.binaryToDecimalSteps.map(step => step.calculation.split('=')[0]).join(' + ');
                const binaryValues = result.binaryToDecimalSteps.map(step => step.positionValue).join(' + ');
                
                stepsHTML += `<p class="mb-1"><small>${result.binary}<sub>2</sub> = ${binaryCalc}</small></p>`;
                stepsHTML += `<p class="mb-1"><small>= ${binaryValues}</small></p>`;
                stepsHTML += `<p class="mb-1"><small>= ${result.decimal.toLocaleString()}<sub>10</sub></small></p>`;
            } else {
                stepsHTML += `<p class="mb-1"><small>${result.binary}<sub>2</sub> = 0<sub>10</sub></small></p>`;
            }
            
            // Binary breakdown
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary digit breakdown:</strong></small></p>`;
            
            const binaryString = result.binary;
            let positionValue = 1;
            let binaryBreakdown = [];
            
            // Process from right to left (LSB to MSB)
            for (let i = binaryString.length - 1; i >= 0; i--) {
                const bit = binaryString[i];
                if (bit === '1') {
                    binaryBreakdown.push(`${positionValue} (2<sup>${binaryString.length - 1 - i}</sup>)`);
                }
                positionValue *= 2;
            }
            
            if (binaryBreakdown.length > 0) {
                stepsHTML += `<p class="mb-1"><small>${result.decimal} = ${binaryBreakdown.join(' + ')}</small></p>`;
            }
            
            // Verification (Decimal → Octal)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Verification (Decimal → Octal):</strong></small></p>`;
            
            let verificationDecimal = result.decimal;
            let verificationOctal = '';
            const verificationSteps = [];
            
            if (verificationDecimal === 0) {
                verificationOctal = '0';
                verificationSteps.push('0 ÷ 8 = 0 remainder 0');
            } else {
                while (verificationDecimal > 0) {
                    const quotient = Math.floor(verificationDecimal / 8);
                    const remainder = verificationDecimal % 8;
                    verificationOctal = remainder + verificationOctal;
                    
                    verificationSteps.push(`${verificationDecimal} ÷ 8 = ${quotient} remainder ${remainder}`);
                    verificationDecimal = quotient;
                }
            }
            
            stepsHTML += `<p class="mb-1"><small>${result.decimal}<sub>10</sub> = ${verificationOctal}<sub>8</sub> = ${result.octal}<sub>8</sub> ✓</small></p>`;
            
            // Comparison with other bases
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Comparison with other number systems:</strong></small></p>`;
            
            // Convert to other bases
            const hexValue = result.decimal.toString(16).toUpperCase();
            
            stepsHTML += `<div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Octal</th>
                            <th>Decimal</th>
                            <th>Binary</th>
                            <th>Hexadecimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${result.octal}<sub>8</sub></td>
                            <td>${result.decimal.toLocaleString()}<sub>10</sub></td>
                            <td>${result.binary}<sub>2</sub></td>
                            <td>${hexValue}<sub>16</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
            
            // Quick reference for octal digits
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Octal digit values:</strong></small></p>`;
            
            const octalDigits = result.octal.split('');
            stepsHTML += `<p class="mb-1"><small>`;
            octalDigits.forEach((digit, index) => {
                const position = octalDigits.length - 1 - index;
                const value = parseInt(digit) * Math.pow(8, position);
                stepsHTML += `Digit ${index + 1} (${digit}): ${digit} × 8<sup>${position}</sup> = ${value}<br>`;
            });
            stepsHTML += `</small></p>`;
            
            conversionSteps.innerHTML = stepsHTML;
        }
        
        // Event listener for convert button
        convertBtn.addEventListener('click', function() {
            updateDisplay(octalInput.value);
        });
        
        // Event listener for Enter key in input field
        octalInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                updateDisplay(octalInput.value);
            }
        });
        
        // Event listeners for example buttons
        exampleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const octalValue = this.getAttribute('data-octal');
                updateDisplay(octalValue);
            });
        });
        
        // Initialize with an example
        updateDisplay('144');
    });