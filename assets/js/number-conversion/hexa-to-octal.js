 document.addEventListener('DOMContentLoaded', function() {
        const hexInput = document.getElementById('hexInput');
        const convertBtn = document.getElementById('convertBtn');
        const octalResult = document.getElementById('octalResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Hex to binary mapping
        const hexToBinaryMap = {
            '0': '0000', '1': '0001', '2': '0010', '3': '0011',
            '4': '0100', '5': '0101', '6': '0110', '7': '0111',
            '8': '1000', '9': '1001', 'A': '1010', 'B': '1011',
            'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111',
            'a': '1010', 'b': '1011', 'c': '1100', 'd': '1101',
            'e': '1110', 'f': '1111'
        };
        
        // Binary to octal mapping
        const binaryToOctalMap = {
            '000': '0', '001': '1', '010': '2', '011': '3',
            '100': '4', '101': '5', '110': '6', '111': '7'
        };
        
        // Function to convert hex to octal via binary method
        function hexToOctalViaBinary(hexString) {
            // Remove any '0x' prefix if present and spaces
            hexString = hexString.replace(/^0x/, '').replace(/\s/g, '').toUpperCase();
            
            // Check if input is valid hexadecimal
            if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
                return { error: "Invalid hexadecimal value. Only 0-9, A-F are allowed." };
            }
            
            // Step 1: Convert hex to binary
            let binary = '';
            const hexSteps = [];
            
            for (let i = 0; i < hexString.length; i++) {
                const hexDigit = hexString[i].toUpperCase();
                const binaryNibble = hexToBinaryMap[hexDigit];
                
                hexSteps.push({
                    hexDigit: hexDigit,
                    binary: binaryNibble,
                    decimalValue: parseInt(hexDigit, 16),
                    hexStep: `${hexDigit}<sub>16</sub> = ${binaryNibble}<sub>2</sub>`
                });
                
                binary += binaryNibble;
            }
            
            // Step 2: Convert binary to octal
            // Pad binary to multiple of 3 for octal grouping
            const paddedLength = Math.ceil(binary.length / 3) * 3;
            const paddedBinary = binary.padStart(paddedLength, '0');
            
            let octal = '';
            const octalSteps = [];
            
            // Process in groups of 3 bits
            for (let i = 0; i < paddedBinary.length; i += 3) {
                const group = paddedBinary.substr(i, 3);
                const octalDigit = binaryToOctalMap[group];
                
                octalSteps.push({
                    binaryGroup: group,
                    octalDigit: octalDigit,
                    decimalValue: parseInt(group, 2),
                    octalStep: `${group}<sub>2</sub> = ${octalDigit}<sub>8</sub>`
                });
                
                octal += octalDigit;
            }
            
            // Remove leading zeros from octal result
            octal = octal.replace(/^0+/, '') || '0';
            
            return { 
                octal, 
                hexSteps, 
                octalSteps, 
                binary, 
                paddedBinary, 
                hex: hexString,
                decimal: parseInt(hexString, 16)
            };
        }
        
        // Function to convert hex to octal via decimal method
        function hexToOctalViaDecimal(hexString) {
            // Remove any '0x' prefix if present and spaces
            hexString = hexString.replace(/^0x/, '').replace(/\s/g, '').toUpperCase();
            
            if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
                return { error: "Invalid hexadecimal value" };
            }
            
            // Convert hex to decimal
            const decimalValue = parseInt(hexString, 16);
            
            // Convert decimal to octal
            const steps = [];
            let remainder = decimalValue;
            let octal = '';
            
            if (decimalValue === 0) {
                return { octal: '0', steps: [], decimal: 0 };
            }
            
            while (remainder > 0) {
                const quotient = Math.floor(remainder / 8);
                const digitValue = remainder % 8;
                octal = digitValue + octal;
                
                steps.push({
                    quotient: quotient,
                    remainder: remainder,
                    digitValue: digitValue,
                    operation: `${remainder} ÷ 8 = ${quotient} remainder ${digitValue}`
                });
                
                remainder = quotient;
            }
            
            return { octal, steps, decimal: decimalValue };
        }
        
        // Main conversion function
        function hexToOctal(hexString) {
            // Get both methods for demonstration
            const binaryResult = hexToOctalViaBinary(hexString);
            
            if (binaryResult.error) {
                return { error: binaryResult.error };
            }
            
            const decimalResult = hexToOctalViaDecimal(hexString);
            
            return { 
                octal: binaryResult.octal, 
                hexSteps: binaryResult.hexSteps,
                octalSteps: binaryResult.octalSteps,
                decimalSteps: decimalResult.steps,
                binary: binaryResult.binary,
                paddedBinary: binaryResult.paddedBinary,
                hex: binaryResult.hex,
                decimal: binaryResult.decimal 
            };
        }
        
        // Function to update the display
        function updateDisplay(hexValue) {
            hexInput.value = hexValue;
            const result = hexToOctal(hexValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.hex}</strong><sub>16</sub> = <strong>${result.octal}</strong><sub>8</sub></p>`;
            
            // Method 1: Via Binary (recommended method)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Hexadecimal → Binary → Octal</strong></small></p>`;
            
            // Step 1: Hex to Binary
            stepsHTML += `<p class="mb-1"><small><strong>Step 1: Convert Hex to Binary</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Each hex digit = 4 binary bits:</small></p>`;
            
            result.hexSteps.forEach((step, index) => {
                stepsHTML += `<p class="mb-1"><small>${step.hexStep} = ${step.decimalValue}<sub>10</sub></small></p>`;
            });
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Combined binary: ${result.binary}</small></p>`;
            
            // Step 2: Binary to Octal
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Step 2: Convert Binary to Octal</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Pad binary to groups of 3 bits: ${result.paddedBinary}</small></p>`;
            stepsHTML += `<p class="mb-1"><small>Convert each 3-bit group to octal:</small></p>`;
            
            result.octalSteps.forEach((step, index) => {
                stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.octalStep} = ${step.decimalValue}<sub>10</sub></small></p>`;
            });
            
            stepsHTML += `<p class="mb-1 mt-2"><small>Combined octal: ${result.octal}<sub>8</sub></small></p>`;
            
            // Method 2: Via Decimal
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Hexadecimal → Decimal → Octal</strong></small></p>`;
            
            stepsHTML += `<p class="mb-1"><small><strong>Step 1: Convert Hex to Decimal:</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.hex}<sub>16</sub> = ${result.decimal}<sub>10</sub></small></p>`;
            
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Step 2: Convert Decimal to Octal using division by 8:</strong></small></p>`;
            
            if (result.decimalSteps.length > 0) {
                result.decimalSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show octal digits in reverse order
                stepsHTML += `<p class="mb-1 mt-2"><small>Octal digits (read upwards): `;
                const octalDigits = result.decimalSteps.map(step => step.digitValue).reverse();
                stepsHTML += octalDigits.join(' ← ') + `</small></p>`;
            } else if (result.decimal === 0) {
                stepsHTML += `<p class="mb-1"><small>0 ÷ 8 = 0 remainder 0</small></p>`;
            }
            
            // Binary grouping for reference
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary Representation:</strong></small></p>`;
            
            // Show binary with 4-bit and 3-bit grouping
            const hexBinaryGroups = result.hexSteps.map(step => step.binary).join(' ');
            stepsHTML += `<p class="mb-1"><small>Hex grouping (4-bit): ${hexBinaryGroups}</small></p>`;
            
            // Show 3-bit groups for octal
            const octalBinaryGroups = [];
            for (let i = 0; i < result.paddedBinary.length; i += 3) {
                octalBinaryGroups.push(result.paddedBinary.substr(i, 3));
            }
            stepsHTML += `<p class="mb-1"><small>Octal grouping (3-bit): ${octalBinaryGroups.join(' ')}</small></p>`;
            
            // Verification (Octal → Hex)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Verification (Octal → Hex):</strong></small></p>`;
            
            // Convert octal back to decimal, then to hex
            const verificationDecimal = parseInt(result.octal, 8);
            const verificationHex = verificationDecimal.toString(16).toUpperCase();
            stepsHTML += `<p class="mb-1"><small>${result.octal}<sub>8</sub> = ${verificationDecimal}<sub>10</sub> = ${verificationHex}<sub>16</sub> = ${result.hex}<sub>16</sub> ✓</small></p>`;
            
            // Comparison table
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Comparison across number systems:</strong></small></p>`;
            
            stepsHTML += `<div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Hexadecimal</th>
                            <th>Decimal</th>
                            <th>Octal</th>
                            <th>Binary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${result.hex}<sub>16</sub></td>
                            <td>${result.decimal}<sub>10</sub></td>
                            <td>${result.octal}<sub>8</sub></td>
                            <td>${result.binary}<sub>2</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
            
            conversionSteps.innerHTML = stepsHTML;
        }
        
        // Event listener for convert button
        convertBtn.addEventListener('click', function() {
            updateDisplay(hexInput.value);
        });
        
        // Event listener for Enter key in input field
        hexInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                updateDisplay(hexInput.value);
            }
        });
        
        // Event listeners for example buttons
        exampleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const hexValue = this.getAttribute('data-hex');
                updateDisplay(hexValue);
            });
        });
        
        // Initialize with an example
        updateDisplay('FF');
    });