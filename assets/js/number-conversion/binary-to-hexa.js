document.addEventListener('DOMContentLoaded', function() {
        const binaryInput = document.getElementById('binaryInput');
        const convertBtn = document.getElementById('convertBtn');
        const hexResult = document.getElementById('hexResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Binary to hex conversion mapping
        const binaryToHexMap = {
            '0000': '0', '0001': '1', '0010': '2', '0011': '3',
            '0100': '4', '0101': '5', '0110': '6', '0111': '7',
            '1000': '8', '1001': '9', '1010': 'A', '1011': 'B',
            '1100': 'C', '1101': 'D', '1110': 'E', '1111': 'F'
        };
        
        // Function to convert binary to hexadecimal
        function binaryToHexadecimal(binaryString) {
            // Remove any spaces if present
            binaryString = binaryString.replace(/\s/g, '');
            
            // Check if input is valid binary
            if (!/^[01]+$/.test(binaryString)) {
                return { error: "Invalid binary value. Only 0 and 1 are allowed." };
            }
            
            // Pad with leading zeros to make length multiple of 4
            const paddedLength = Math.ceil(binaryString.length / 4) * 4;
            const paddedBinary = binaryString.padStart(paddedLength, '0');
            
            let hexResult = '';
            const steps = [];
            
            // Process in groups of 4 bits
            for (let i = 0; i < paddedBinary.length; i += 4) {
                const nibble = paddedBinary.substr(i, 4);
                const hexDigit = binaryToHexMap[nibble];
                
                steps.push({
                    nibble: nibble,
                    position: i / 4,
                    hexDigit: hexDigit,
                    decimalValue: parseInt(nibble, 2),
                    originalBinary: binaryString,
                    paddedBinary: paddedBinary,
                    isPadded: i < (paddedLength - binaryString.length)
                });
                
                hexResult += hexDigit;
            }
            
            // Remove leading zeros from hex result
            hexResult = hexResult.replace(/^0+/, '') || '0';
            
            return { hex: hexResult, steps, binary: binaryString };
        }
        
        // Function to update the display
        function updateDisplay(binaryValue) {
            binaryInput.value = binaryValue;
            const result = binaryToHexadecimal(binaryValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.binary}</strong><sub>2</sub> = `;
            
            // Show the grouping process
            if (result.steps.length > 1) {
                stepsHTML += `(grouped as ${result.steps.length} nibbles of 4 bits each)</p>`;
                stepsHTML += `<p class="mb-1">Grouped binary: ${result.steps[0].paddedBinary}</p>`;
            }
            
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Step-by-step conversion:</strong></small></p>`;
            
            // Show each nibble conversion
            result.steps.forEach((step, index) => {
                const isPaddedNote = step.isPadded ? ' <span class="text-muted">(added padding)</span>' : '';
                stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.nibble} → ${step.hexDigit}<sub>16</sub> = ${step.decimalValue}<sub>10</sub>${isPaddedNote}</small></p>`;
            });
            
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-0"><strong>Final result: ${result.hex}<sub>16</sub></strong></p>`;
            stepsHTML += `<p class="mb-0 mt-2"><small>In decimal: ${parseInt(result.binary, 2).toLocaleString()}<sub>10</sub></small></p>`;
            
            // Alternative method: Binary → Decimal → Hex
            stepsHTML += `<hr class="my-2">`;
            const decimalValue = parseInt(result.binary, 2);
            stepsHTML += `<p class="mb-1"><small><strong>Alternative method (Binary → Decimal → Hex):</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.binary}<sub>2</sub> = ${decimalValue}<sub>10</sub></small></p>`;
            stepsHTML += `<p class="mb-0"><small>${decimalValue}<sub>10</sub> = ${result.hex}<sub>16</sub></small></p>`;
            
            conversionSteps.innerHTML = stepsHTML;
        }
        
        // Event listener for convert button
        convertBtn.addEventListener('click', function() {
            updateDisplay(binaryInput.value);
        });
        
        // Event listener for Enter key in input field
        binaryInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                updateDisplay(binaryInput.value);
            }
        });
        
        // Event listeners for example buttons
        exampleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const binaryValue = this.getAttribute('data-binary');
                updateDisplay(binaryValue);
            });
        });
        
        // Initialize with an example
        updateDisplay('1010');
    });