  document.addEventListener('DOMContentLoaded', function() {
        const octalInput = document.getElementById('octalInput');
        const convertBtn = document.getElementById('convertBtn');
        const hexResult = document.getElementById('hexResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Octal to binary mapping
        const octalToBinaryMap = {
            '0': '000', '1': '001', '2': '010', '3': '011',
            '4': '100', '5': '101', '6': '110', '7': '111'
        };
        
        // Binary to hex mapping
        const binaryToHexMap = {
            '0000': '0', '0001': '1', '0010': '2', '0011': '3',
            '0100': '4', '0101': '5', '0110': '6', '0111': '7',
            '1000': '8', '1001': '9', '1010': 'A', '1011': 'B',
            '1100': 'C', '1101': 'D', '1110': 'E', '1111': 'F'
        };
        
        // Hex digits for conversion
        const hexDigits = "0123456789ABCDEF";
        
        // Function to convert octal to hex via binary method
        function octalToHexViaBinary(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            // Check if input is valid octal
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value. Only digits 0-7 are allowed." };
            }
            
            // Step 1: Convert octal to binary
            let binary = '';
            const octalSteps = [];
            
            for (let i = 0; i < octalString.length; i++) {
                const octalDigit = octalString[i];
                const binaryGroup = octalToBinaryMap[octalDigit];
                
                octalSteps.push({
                    octalDigit: octalDigit,
                    binary: binaryGroup,
                    decimalValue: parseInt(octalDigit, 8),
                    operation: `${octalDigit}<sub>8</sub> = ${binaryGroup}<sub>2</sub> = ${parseInt(octalDigit, 8)}<sub>10</sub>`
                });
                
                binary += binaryGroup;
            }
            
            // Step 2: Convert binary to hex
            // Pad binary to multiple of 4 for hex grouping
            const paddedLength = Math.ceil(binary.length / 4) * 4;
            const paddedBinary = binary.padStart(paddedLength, '0');
            
            let hex = '';
            const hexSteps = [];
            
            // Process in groups of 4 bits
            for (let i = 0; i < paddedBinary.length; i += 4) {
                const nibble = paddedBinary.substr(i, 4);
                const hexDigit = binaryToHexMap[nibble];
                
                hexSteps.push({
                    binaryGroup: nibble,
                    hexDigit: hexDigit,
                    decimalValue: parseInt(nibble, 2),
                    operation: `${nibble}<sub>2</sub> = ${hexDigit}<sub>16</sub> = ${parseInt(nibble, 2)}<sub>10</sub>`
                });
                
                hex += hexDigit;
            }
            
            // Remove leading zeros from hex result
            hex = hex.replace(/^0+/, '') || '0';
            
            return { 
                hex, 
                octalSteps, 
                hexSteps, 
                binary, 
                paddedBinary, 
                octal: octalString,
                decimal: parseInt(octalString, 8)
            };
        }
        
        // Function to convert octal to hex via decimal method
        function octalToHexViaDecimal(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value" };
            }
            
            // Convert octal to decimal
            const decimalValue = parseInt(octalString, 8);
            
            // Convert decimal to hex
            const steps = [];
            let remainder = decimalValue;
            let hex = '';
            
            if (decimalValue === 0) {
                return { hex: '0', steps: [], decimal: 0 };
            }
            
            while (remainder > 0) {
                const quotient = Math.floor(remainder / 16);
                const digitValue = remainder % 16;
                const hexDigit = hexDigits[digitValue];
                hex = hexDigit + hex;
                
                steps.push({
                    quotient: quotient,
                    remainder: remainder,
                    digitValue: digitValue,
                    hexDigit: hexDigit,
                    operation: `${remainder} ÷ 16 = ${quotient} remainder ${digitValue} (${hexDigit})`
                });
                
                remainder = quotient;
            }
            
            return { hex, steps, decimal: decimalValue };
        }
        
        // Main conversion function
        function octalToHex(octalString) {
            // Get both methods for demonstration
            const binaryResult = octalToHexViaBinary(octalString);
            
            if (binaryResult.error) {
                return { error: binaryResult.error };
            }
            
            const decimalResult = octalToHexViaDecimal(octalString);
            
            return { 
                hex: binaryResult.hex, 
                octalSteps: binaryResult.octalSteps,
                hexSteps: binaryResult.hexSteps,
                decimalSteps: decimalResult.steps,
                binary: binaryResult.binary,
                paddedBinary: binaryResult.paddedBinary,
                octal: binaryResult.octal,
                decimal: binaryResult.decimal 
            };
        }
        
        // Function to update the display
        function updateDisplay(octalValue) {
            octalInput.value = octalValue;
            const result = octalToHex(octalValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.octal}</strong><sub>8</sub> = <strong>${result.hex}</strong><sub>16</sub></p>`;
            
            // Method 1: Via Binary (recommended method)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Octal → Binary → Hexadecimal</strong></small></p>`;
            
            // Step 1: Octal to Binary
            stepsHTML += `<p class="mb-1"><small><strong>Step 1: Convert Octal to Binary</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Each octal digit = 3 binary bits:</small></p>`;
            
            result.octalSteps.forEach((step, index) => {
                stepsHTML += `<p class="mb-1"><small>Digit ${index + 1}: ${step.operation}</small></p>`;
            });
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Combined binary: ${result.binary}</small></p>`;
            
            // Step 2: Binary to Hexadecimal
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Step 2: Convert Binary to Hexadecimal</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Pad binary to groups of 4 bits: ${result.paddedBinary}</small></p>`;
            stepsHTML += `<p class="mb-1"><small>Convert each 4-bit group to hex:</small></p>`;
            
            result.hexSteps.forEach((step, index) => {
                stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.operation}</small></p>`;
            });
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Combined hex: ${result.hex}<sub>16</sub></small></p>`;
            
            // Method 2: Via Decimal
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Octal → Decimal → Hexadecimal</strong></small></p>`;
            
            stepsHTML += `<p class="mb-1"><small><strong>Step 1: Convert Octal to Decimal:</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.octal}<sub>8</sub> = ${result.decimal}<sub>10</sub></small></p>`;
            
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Step 2: Convert Decimal to Hex using division by 16:</strong></small></p>`;
            
            if (result.decimalSteps.length > 0) {
                result.decimalSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show hex digits in reverse order
                stepsHTML += `<p class="mb-1 mt-2"><small>Hex digits (read upwards): `;
                const hexDigits = result.decimalSteps.map(step => step.hexDigit).reverse();
                stepsHTML += hexDigits.join(' ← ') + `</small></p>`;
            } else if (result.decimal === 0) {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 16 = 0 remainder 0</small></p>`;
            }
            
            // Binary grouping comparison
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary Grouping Comparison:</strong></small></p>`;
            
            // Show binary with 3-bit groups (octal)
            const octalBinaryGroups = result.octalSteps.map(step => step.binary).join(' ');
            stepsHTML += `<p class="mb-1"><small>Octal grouping (3-bit): ${octalBinaryGroups}</small></p>`;
            
            // Show binary with 4-bit groups (hex)
            const hexBinaryGroups = [];
            for (let i = 0; i < result.paddedBinary.length; i += 4) {
                hexBinaryGroups.push(result.paddedBinary.substr(i, 4));
            }
            stepsHTML += `<p class="mb-1"><small>Hex grouping (4-bit): ${hexBinaryGroups.join(' ')}</small></p>`;
            
            // Verification (Hex → Octal)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Verification (Hexadecimal → Octal):</strong></small></p>`;
            
            // Convert hex back to decimal, then to octal
            const verificationDecimal = parseInt(result.hex, 16);
            const verificationOctal = verificationDecimal.toString(8);
            stepsHTML += `<p class="mb-1"><small>${result.hex}<sub>16</sub> = ${verificationDecimal}<sub>10</sub> = ${verificationOctal}<sub>8</sub> = ${result.octal}<sub>8</sub> ✓</small></p>`;
            
            // Complete conversion table
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Complete Conversion Summary:</strong></small></p>`;
            
            stepsHTML += `<div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Octal</th>
                            <th>Binary (3-bit)</th>
                            <th>Binary (4-bit)</th>
                            <th>Hexadecimal</th>
                            <th>Decimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${result.octal}<sub>8</sub></td>
                            <td>${octalBinaryGroups}<sub>2</sub></td>
                            <td>${hexBinaryGroups.join(' ')}<sub>2</sub></td>
                            <td>${result.hex}<sub>16</sub></td>
                            <td>${result.decimal}<sub>10</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
            
            // Step-by-step breakdown with place values
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Octal to Decimal Breakdown:</strong></small></p>`;
            
            const octalDigits = result.octal.split('');
            let octalBreakdown = '';
            
            // Process from right to left
            for (let i = 0; i < octalDigits.length; i++) {
                const digit = parseInt(octalDigits[octalDigits.length - 1 - i]);
                const positionValue = digit * Math.pow(8, i);
                octalBreakdown += `<p class="mb-1"><small>Position ${i}: ${digit} × 8<sup>${i}</sup> = ${positionValue}</small></p>`;
            }
            
            stepsHTML += octalBreakdown;
            stepsHTML += `<p class="mb-1"><small>Total: ${result.decimal}<sub>10</sub></small></p>`;
            
            // Decimal to Hex breakdown
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Decimal to Hex Breakdown:</strong></small></p>`;
            
            let tempDecimal = result.decimal;
            if (tempDecimal === 0) {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 16 = 0 remainder 0 → 0<sub>16</sub></small></p>`;
            } else {
                while (tempDecimal > 0) {
                    const quotient = Math.floor(tempDecimal / 16);
                    const remainder = tempDecimal % 16;
                    const hexDigit = hexDigits[remainder];
                    stepsHTML += `<p class="mb-1"><small>${tempDecimal} ÷ 16 = ${quotient} remainder ${remainder} (${hexDigit})</small></p>`;
                    tempDecimal = quotient;
                }
            }
            
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