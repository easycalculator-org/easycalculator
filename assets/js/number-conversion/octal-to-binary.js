 document.addEventListener('DOMContentLoaded', function() {
        const octalInput = document.getElementById('octalInput');
        const convertBtn = document.getElementById('convertBtn');
        const binaryResult = document.getElementById('binaryResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Octal to binary mapping
        const octalToBinaryMap = {
            '0': '000', '1': '001', '2': '010', '3': '011',
            '4': '100', '5': '101', '6': '110', '7': '111'
        };
        
        // Function to convert octal to binary via direct mapping
        function octalToBinaryDirect(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            // Check if input is valid octal
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value. Only digits 0-7 are allowed." };
            }
            
            let binary = '';
            const steps = [];
            
            // Process each octal digit
            for (let i = 0; i < octalString.length; i++) {
                const octalDigit = octalString[i];
                const binaryGroup = octalToBinaryMap[octalDigit];
                
                steps.push({
                    octalDigit: octalDigit,
                    position: i,
                    binary: binaryGroup,
                    decimalValue: parseInt(octalDigit, 8),
                    operation: `${octalDigit}<sub>8</sub> = ${binaryGroup}<sub>2</sub> = ${parseInt(octalDigit, 8)}<sub>10</sub>`
                });
                
                binary += binaryGroup;
            }
            
            // Remove leading zeros (optional)
            binary = binary.replace(/^0+/, '') || '0';
            
            return { binary, steps, octal: octalString };
        }
        
        // Function to convert octal to binary via decimal method
        function octalToBinaryViaDecimal(octalString) {
            // Remove any spaces if present
            octalString = octalString.replace(/\s/g, '');
            
            if (!/^[0-7]+$/.test(octalString)) {
                return { error: "Invalid octal value" };
            }
            
            // Convert octal to decimal first
            const decimalValue = parseInt(octalString, 8);
            
            // Convert decimal to binary
            let binary = '';
            let temp = decimalValue;
            const steps = [];
            
            if (decimalValue === 0) {
                return { binary: '0', steps: [], octal: octalString, decimal: 0 };
            }
            
            while (temp > 0) {
                const bit = temp % 2;
                binary = bit + binary;
                
                steps.push({
                    quotient: Math.floor(temp / 2),
                    remainder: temp,
                    bit: bit,
                    operation: `${temp} ÷ 2 = ${Math.floor(temp / 2)} remainder ${bit}`
                });
                
                temp = Math.floor(temp / 2);
            }
            
            return { binary, steps, octal: octalString, decimal: decimalValue };
        }
        
        // Main conversion function
        function octalToBinary(octalString) {
            // Get both methods for demonstration
            const directResult = octalToBinaryDirect(octalString);
            
            if (directResult.error) {
                return { error: directResult.error };
            }
            
            const decimalResult = octalToBinaryViaDecimal(octalString);
            
            return { 
                binary: directResult.binary, 
                directSteps: directResult.steps,
                decimalSteps: decimalResult.steps,
                octal: directResult.octal,
                decimal: decimalResult.decimal 
            };
        }
        
        // Function to update the display
        function updateDisplay(octalValue) {
            octalInput.value = octalValue;
            const result = octalToBinary(octalValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.octal}</strong><sub>8</sub> = <strong>${result.binary}</strong><sub>2</sub></p>`;
            
            // Method 1: Direct conversion (octal digit to 3-bit binary)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Direct Digit-by-Digit Conversion</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Each octal digit represents 3 binary bits:</small></p>`;
            
            if (result.directSteps.length > 0) {
                // Show direct conversion steps
                result.directSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>Digit ${index + 1}: ${step.operation}</small></p>`;
                });
                
                // Show combined result
                stepsHTML += `<p class="mb-1 mt-2"><small>Combined binary: ${result.directSteps.map(step => step.binary).join(' ')}</small></p>`;
            }
            
            // Method 2: Via Decimal method
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Octal → Decimal → Binary</strong></small></p>`;
            
            if (result.decimalSteps.length > 0) {
                stepsHTML += `<p class="mb-1"><small>Step 1: Convert to Decimal: ${result.octal}<sub>8</sub> = ${result.decimal}<sub>10</sub></small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 2: Convert Decimal to Binary using division by 2:</small></p>`;
                
                result.decimalSteps.forEach((step, index) => {
                    stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                });
                
                // Show binary digits in reverse order
                stepsHTML += `<p class="mb-1 mt-2"><small>Binary digits (read upwards): `;
                const binaryDigits = result.decimalSteps.map(step => step.bit).reverse();
                stepsHTML += binaryDigits.join(' ← ') + `</small></p>`;
            } else if (result.decimal === 0) {
                stepsHTML += `<p class="mb-1"><small>${result.octal}<sub>8</sub> = 0<sub>10</sub> = 0<sub>2</sub></small></p>`;
            }
            
            // Group binary into 3-bit groups (for readability)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary Grouping (3-bit groups for octal):</strong></small></p>`;
            
            let binaryString = result.binary;
            // Pad binary to multiple of 3 for better grouping
            const paddedLength = Math.ceil(binaryString.length / 3) * 3;
            const paddedBinary = binaryString.padStart(paddedLength, '0');
            
            const groups = [];
            for (let i = 0; i < paddedBinary.length; i += 3) {
                groups.push(paddedBinary.substr(i, 3));
            }
            
            stepsHTML += `<p class="mb-1"><small>${groups.join(' ')}</small></p>`;
            
            // Show reverse conversion (verification)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Verification (Binary → Octal):</strong></small></p>`;
            
            // Group binary into 3-bit chunks and convert back to octal
            const verificationOctal = groups.map(group => {
                const decimal = parseInt(group, 2);
                return decimal.toString(8);
            }).join('');
            
            const cleanOctal = verificationOctal.replace(/^0+/, '') || '0';
            stepsHTML += `<p class="mb-1"><small>${groups.join(' ')}<sub>2</sub> = ${cleanOctal}<sub>8</sub> = ${result.octal}<sub>8</sub> ✓</small></p>`;
            
            // Show relationship with other bases
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Relationship with other number systems:</strong></small></p>`;
            
            // Decimal value
            stepsHTML += `<p class="mb-1"><small>Decimal: ${result.decimal}<sub>10</sub></small></p>`;
            
            // Hexadecimal value
            const hexValue = result.decimal.toString(16).toUpperCase();
            stepsHTML += `<p class="mb-1"><small>Hexadecimal: ${hexValue}<sub>16</sub></small></p>`;
            
            // Binary in 4-bit groups for hex comparison
            stepsHTML += `<p class="mb-1 mt-2"><small><strong>Binary in 4-bit groups (for hex comparison):</strong></small></p>`;
            
            // Pad binary to multiple of 4 for hex grouping
            const hexPaddedLength = Math.ceil(binaryString.length / 4) * 4;
            const hexPaddedBinary = binaryString.padStart(hexPaddedLength, '0');
            
            const hexGroups = [];
            for (let i = 0; i < hexPaddedBinary.length; i += 4) {
                hexGroups.push(hexPaddedBinary.substr(i, 4));
            }
            
            stepsHTML += `<p class="mb-1"><small>${hexGroups.join(' ')}</small></p>`;
            
            // Show hex conversion from binary groups
            const hexFromBinary = hexGroups.map(group => {
                const decimal = parseInt(group, 2);
                return decimal.toString(16).toUpperCase();
            }).join('');
            
            const cleanHex = hexFromBinary.replace(/^0+/, '') || '0';
            stepsHTML += `<p class="mb-1"><small>${hexGroups.join(' ')}<sub>2</sub> = ${cleanHex}<sub>16</sub></small></p>`;
            
            // Quick conversion table
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Quick Conversion Table:</strong></small></p>`;
            
            stepsHTML += `<div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Octal</th>
                            <th>Binary (3-bit)</th>
                            <th>Decimal</th>
                            <th>Binary (4-bit)</th>
                            <th>Hex</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${result.octal}<sub>8</sub></td>
                            <td>${groups.join(' ')}<sub>2</sub></td>
                            <td>${result.decimal}<sub>10</sub></td>
                            <td>${hexGroups.join(' ')}<sub>2</sub></td>
                            <td>${cleanHex}<sub>16</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
            
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
        updateDisplay('12');
    });