  document.addEventListener('DOMContentLoaded', function() {
        const binaryInput = document.getElementById('binaryInput');
        const convertBtn = document.getElementById('convertBtn');
        const octalResult = document.getElementById('octalResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Binary to octal conversion mapping
        const binaryToOctalMap = {
            '000': '0', '001': '1', '010': '2', '011': '3',
            '100': '4', '101': '5', '110': '6', '111': '7'
        };
        
        // Function to convert binary to octal
        function binaryToOctal(binaryString) {
            // Remove any spaces if present
            binaryString = binaryString.replace(/\s/g, '');
            
            // Check if input is valid binary
            if (!/^[01]+$/.test(binaryString)) {
                return { error: "Invalid binary value. Only 0 and 1 are allowed." };
            }
            
            // Pad with leading zeros to make length multiple of 3
            const paddedLength = Math.ceil(binaryString.length / 3) * 3;
            const paddedBinary = binaryString.padStart(paddedLength, '0');
            
            let octalResult = '';
            const steps = [];
            
            // Process in groups of 3 bits
            for (let i = 0; i < paddedBinary.length; i += 3) {
                const group = paddedBinary.substr(i, 3);
                const octalDigit = binaryToOctalMap[group];
                
                steps.push({
                    group: group,
                    position: i / 3,
                    octalDigit: octalDigit,
                    decimalValue: parseInt(group, 2),
                    originalBinary: binaryString,
                    paddedBinary: paddedBinary,
                    isPadded: i < (paddedLength - binaryString.length)
                });
                
                octalResult += octalDigit;
            }
            
            // Remove leading zeros from octal result
            octalResult = octalResult.replace(/^0+/, '') || '0';
            
            return { octal: octalResult, steps, binary: binaryString };
        }
        
        // Function to update the display
        function updateDisplay(binaryValue) {
            binaryInput.value = binaryValue;
            const result = binaryToOctal(binaryValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.binary}</strong><sub>2</sub> = `;
            
            // Show the grouping process
            if (result.steps.length > 1) {
                stepsHTML += `(grouped as ${result.steps.length} groups of 3 bits each)</p>`;
                stepsHTML += `<p class="mb-1">Grouped binary: ${result.steps[0].paddedBinary}</p>`;
            }
            
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Step-by-step conversion:</strong></small></p>`;
            
            // Show each group conversion
            result.steps.forEach((step, index) => {
                const isPaddedNote = step.isPadded ? ' <span class="text-muted">(added padding)</span>' : '';
                stepsHTML += `<p class="mb-1"><small>Group ${index + 1}: ${step.group} → ${step.octalDigit}<sub>8</sub> = ${step.decimalValue}<sub>10</sub>${isPaddedNote}</small></p>`;
            });
            
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-0"><strong>Final result: ${result.octal}<sub>8</sub></strong></p>`;
            stepsHTML += `<p class="mb-0 mt-2"><small>In decimal: ${parseInt(result.binary, 2).toLocaleString()}<sub>10</sub></small></p>`;
            
            // Alternative method: Binary → Decimal → Octal
            stepsHTML += `<hr class="my-2">`;
            const decimalValue = parseInt(result.binary, 2);
            stepsHTML += `<p class="mb-1"><small><strong>Alternative method (Binary → Decimal → Octal):</strong></small></p>`;
            stepsHTML += `<p class="mb-1"><small>${result.binary}<sub>2</sub> = ${decimalValue}<sub>10</sub></small></p>`;
            stepsHTML += `<p class="mb-0"><small>${decimalValue}<sub>10</sub> = ${result.octal}<sub>8</sub></small></p>`;
            
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