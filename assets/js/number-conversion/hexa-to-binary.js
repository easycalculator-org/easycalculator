document.addEventListener('DOMContentLoaded', function() {
        const hexInput = document.getElementById('hexInput');
        const convertBtn = document.getElementById('convertBtn');
        const binaryResult = document.getElementById('binaryResult');
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
        
        // Function to convert hex to binary via direct mapping
        function hexToBinaryDirect(hexString) {
            // Remove any '0x' prefix if present and spaces
            hexString = hexString.replace(/^0x/, '').replace(/\s/g, '').toUpperCase();
            
            // Check if input is valid hexadecimal
            if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
                return { error: "Invalid hexadecimal value. Only 0-9, A-F are allowed." };
            }
            
            let binary = '';
            const steps = [];
            
            // Process each hex digit
            for (let i = 0; i < hexString.length; i++) {
                const hexDigit = hexString[i].toUpperCase();
                const binaryNibble = hexToBinaryMap[hexDigit];
                
                steps.push({
                    hexDigit: hexDigit,
                    position: i,
                    binary: binaryNibble,
                    decimalValue: parseInt(hexDigit, 16),
                    operation: `${hexDigit}<sub>16</sub> = ${binaryNibble}<sub>2</sub> = ${parseInt(hexDigit, 16)}<sub>10</sub>`
                });
                
                binary += binaryNibble;
            }
            
            // Remove leading zeros (optional - we can keep them to show grouping)
            // binary = binary.replace(/^0+/, '') || '0';
            
            return { binary, steps, hex: hexString };
        }
        
        // Function to convert hex to binary via decimal method
        function hexToBinaryViaDecimal(hexString) {
            // Remove any '0x' prefix if present and spaces
            hexString = hexString.replace(/^0x/, '').replace(/\s/g, '').toUpperCase();
            
            if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
                return { error: "Invalid hexadecimal value" };
            }
            
            // Convert hex to decimal first
            const decimalValue = parseInt(hexString, 16);
            
            // Convert decimal to binary
            let binary = '';
            let temp = decimalValue;
            const steps = [];
            
            if (decimalValue === 0) {
                return { binary: '0', steps: [], hex: hexString, decimal: 0 };
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
            
            return { binary, steps, hex: hexString, decimal: decimalValue };
        }
        
        // Main conversion function
        function hexToBinary(hexString) {
            // Get both methods for demonstration
            const directResult = hexToBinaryDirect(hexString);
            
            if (directResult.error) {
                return { error: directResult.error };
            }
            
            const decimalResult = hexToBinaryViaDecimal(hexString);
            
            return { 
                binary: directResult.binary, 
                directSteps: directResult.steps,
                decimalSteps: decimalResult.steps,
                hex: directResult.hex,
                decimal: decimalResult.decimal 
            };
        }
        
        // Function to update the display
        function updateDisplay(hexValue) {
            hexInput.value = hexValue;
            const result = hexToBinary(hexValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.hex}</strong><sub>16</sub> = <strong>${result.binary}</strong><sub>2</sub></p>`;
            
            // Method 1: Direct conversion (hex digit to 4-bit binary)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Method 1: Direct Digit-by-Digit Conversion</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>Each hex digit represents 4 binary bits:</small></p>`;
            
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
            stepsHTML += `<p class="mb-1"><small><strong>Method 2: Hexadecimal → Decimal → Binary</strong></small></p>`;
            
            if (result.decimalSteps.length > 0) {
                stepsHTML += `<p class="mb-1"><small>Step 1: Convert to Decimal: ${result.hex}<sub>16</sub> = ${result.decimal}<sub>10</sub></small></p>`;
                stepsHTML += `<p class="mb-1"><small>Step 2: Convert Decimal to Binary using division by 2:</small></p>`;
                
                if (result.decimalSteps.length > 0) {
                    result.decimalSteps.forEach((step, index) => {
                        stepsHTML += `<p class="mb-1"><small>${step.operation}</small></p>`;
                    });
                    
                    // Show binary digits in reverse order
                    stepsHTML += `<p class="mb-1 mt-2"><small>Binary digits (read upwards): `;
                    const binaryDigits = result.decimalSteps.map(step => step.bit).reverse();
                    stepsHTML += binaryDigits.join(' ← ') + `</small></p>`;
                }
            } else if (result.decimal === 0) {
                stepsHTML += `<p class="mb-1"><small>${result.hex}<sub>16</sub> = 0<sub>10</sub> = 0<sub>2</sub></small></p>`;
            }
            
            // Group binary into 4-bit nibbles (for readability)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Binary Grouping (4-bit nibbles):</strong></small></p>`;
            
            let binaryString = result.binary;
            // Pad binary to multiple of 4 for better grouping
            const paddedLength = Math.ceil(binaryString.length / 4) * 4;
            const paddedBinary = binaryString.padStart(paddedLength, '0');
            
            const nibbles = [];
            for (let i = 0; i < paddedBinary.length; i += 4) {
                nibbles.push(paddedBinary.substr(i, 4));
            }
            
            stepsHTML += `<p class="mb-1"><small>${nibbles.join(' ')}</small></p>`;
            
            // Show reverse conversion (verification)
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Verification (Binary → Hex):</strong></small></p>`;
            
            // Group binary into 4-bit chunks and convert back to hex
            const verificationHex = nibbles.map(nibble => {
                const decimal = parseInt(nibble, 2);
                return decimal.toString(16).toUpperCase();
            }).join('');
            
            const cleanHex = verificationHex.replace(/^0+/, '') || '0';
            stepsHTML += `<p class="mb-1"><small>${nibbles.join(' ')}<sub>2</sub> = ${cleanHex}<sub>16</sub> = ${result.hex}<sub>16</sub> ✓</small></p>`;
            
            // Decimal value for reference
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Decimal Value:</strong> ${result.decimal}<sub>10</sub></small></p>`;
            
            // Octal value for reference
            const octalValue = result.decimal.toString(8);
            stepsHTML += `<p class="mb-1"><small><strong>Octal Value:</strong> ${octalValue}<sub>8</sub></small></p>`;
            
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
        updateDisplay('A');
    });