    document.addEventListener('DOMContentLoaded', function() {
        const binaryInput = document.getElementById('binaryInput');
        const convertBtn = document.getElementById('convertBtn');
        const decimalResult = document.getElementById('decimalResult');
        const conversionSteps = document.getElementById('conversionSteps');
        const exampleBtns = document.querySelectorAll('.example-btn');
        
        // Function to convert binary to decimal
        function binaryToDecimal(binaryString) {
            // Remove any spaces if present
            binaryString = binaryString.replace(/\s/g, '');
            
            // Check if input is valid binary
            if (!/^[01]+$/.test(binaryString)) {
                return { error: "Invalid binary value. Only 0 and 1 are allowed." };
            }
            
            let decimal = 0;
            const steps = [];
            const length = binaryString.length;
            
            // Process each digit from right to left
            for (let i = 0; i < length; i++) {
                const digit = parseInt(binaryString[length - 1 - i]);
                
                // If digit is 1, calculate its value
                if (digit === 1) {
                    const positionValue = Math.pow(2, i);
                    
                    steps.push({
                        digit: digit,
                        position: i,
                        positionValue: positionValue,
                        calculation: `1 × 2<sup>${i}</sup> = ${positionValue}`
                    });
                    
                    decimal += positionValue;
                } else {
                    // For digit 0, we can still show it in steps (optional)
                    steps.push({
                        digit: digit,
                        position: i,
                        positionValue: 0,
                        calculation: `0 × 2<sup>${i}</sup> = 0`
                    });
                }
            }
            
            return { decimal, steps, binary: binaryString };
        }
        
        // Function to update the display
        function updateDisplay(binaryValue) {
            binaryInput.value = binaryValue;
            const result = binaryToDecimal(binaryValue);
            
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
            let stepsHTML = `<p class="mb-2"><strong>${result.binary}</strong><sub>2</sub> = `;
            
            // Filter only the steps where digit is 1
            const nonZeroSteps = result.steps.filter(step => step.digit === 1).reverse();
            
            if (nonZeroSteps.length > 0) {
                // Show the calculation formula for digits that are 1
                stepsHTML += nonZeroSteps.map(step => step.calculation.split('=')[0]).join(' + ') + `</p>`;
                stepsHTML += `<p class="mb-2">= ${nonZeroSteps.map(step => step.positionValue).join(' + ')}</p>`;
            } else {
                // All digits are 0
                stepsHTML += `0 (all digits are 0)</p>`;
            }
            
            stepsHTML += `<p class="mb-0"><strong>= ${result.decimal.toLocaleString()}</strong><sub>10</sub></p>`;
            
            // Detailed breakdown
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-1"><small><strong>Position-by-position calculation:</strong></small></p>`;
            
            // Show steps from left to right (reverse order)
            const stepsReversed = [...result.steps].reverse();
            stepsReversed.forEach((step, index) => {
                const position = stepsReversed.length - 1 - index;
                stepsHTML += `<p class="mb-1"><small>Position ${position}: ${step.digit} × 2<sup>${step.position}</sup> = ${step.positionValue}</small></p>`;
            });
            
            // Total calculation summary
            stepsHTML += `<hr class="my-2">`;
            stepsHTML += `<p class="mb-0"><small><strong>Total: ${result.decimal.toLocaleString()}</strong></small></p>`;
            
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
