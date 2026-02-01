   document.addEventListener('DOMContentLoaded', function () {
            const hexInput = document.getElementById('hexInput');
            const convertBtn = document.getElementById('convertBtn');
            const decimalResult = document.getElementById('decimalResult');
            const conversionSteps = document.getElementById('conversionSteps');
            const exampleBtns = document.querySelectorAll('.example-btn');

            // Function to convert hex to decimal
            function hexToDecimal(hexString) {
                // Remove any '0x' prefix if present
                hexString = hexString.replace(/^0x/, '');

                // Check if input is valid hexadecimal
                if (!/^[0-9A-Fa-f]+$/.test(hexString)) {
                    return { error: "Invalid hexadecimal value" };
                }

                let decimal = 0;
                const steps = [];
                const hex = hexString.toUpperCase();
                const length = hex.length;

                // Process each digit from right to left
                for (let i = 0; i < length; i++) {
                    const char = hex[length - 1 - i];
                    let digitValue;

                    // Convert hex digit to decimal value
                    if (char >= '0' && char <= '9') {
                        digitValue = parseInt(char);
                    } else {
                        digitValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
                    }

                    // Calculate positional value
                    const positionValue = digitValue * Math.pow(16, i);

                    // Add to steps
                    steps.push({
                        digit: char,
                        position: i,
                        digitValue: digitValue,
                        positionValue: positionValue,
                        calculation: `${digitValue} × 16<sup>${i}</sup> = ${positionValue}`
                    });

                    decimal += positionValue;
                }

                return { decimal, steps, hex };
            }

            // Function to update the display
            function updateDisplay(hexValue) {
                hexInput.value = hexValue;
                const result = hexToDecimal(hexValue);

                if (result.error) {
                    decimalResult.textContent = "Invalid input";
                    decimalResult.className = "text-center mb-0 text-danger";
                    conversionSteps.innerHTML = `<p class="mb-1 text-danger">${result.error}. Please enter valid hexadecimal digits (0-9, A-F).</p>`;
                    return;
                }

                // Update result
                decimalResult.textContent = result.decimal.toLocaleString();
                decimalResult.className = "text-center mb-0 text-success";

                // Update conversion steps
                let stepsHTML = `<p class="mb-2"><strong>${result.hex}</strong><sub>16</sub> = `;

                // Show the calculation formula
                const stepsReversed = [...result.steps].reverse();
                stepsHTML += stepsReversed.map(step => step.calculation.split('=')[0]).join(' + ') + `</p>`;

                stepsHTML += `<p class="mb-2">= ${stepsReversed.map(step => step.positionValue).join(' + ')}</p>`;
                stepsHTML += `<p class="mb-0"><strong>= ${result.decimal.toLocaleString()}</strong><sub>10</sub></p>`;

                // Detailed breakdown
                stepsHTML += `<hr class="my-2">`;
                stepsHTML += `<p class="mb-1"><small><strong>Digit-by-digit breakdown:</strong></small></p>`;

                stepsReversed.forEach((step, index) => {
                    const position = stepsReversed.length - 1 - index;
                    stepsHTML += `<p class="mb-1"><small>Position ${position}: ${step.digit} = ${step.digitValue} × 16<sup>${step.position}</sup> = ${step.positionValue}</small></p>`;
                });

                conversionSteps.innerHTML = stepsHTML;
            }

            // Event listener for convert button
            convertBtn.addEventListener('click', function () {
                updateDisplay(hexInput.value);
            });

            // Event listener for Enter key in input field
            hexInput.addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    updateDisplay(hexInput.value);
                }
            });

            // Event listeners for example buttons
            exampleBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    const hexValue = this.getAttribute('data-hex');
                    updateDisplay(hexValue);
                });
            });

            // Initialize with an example
            updateDisplay('1A');
        });