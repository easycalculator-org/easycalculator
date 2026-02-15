 (function() {
            // speed of light in m/s
            const C = 299792458;   // exact

            // DOM elements
            const freqInput = document.getElementById('freqInput');
            const unitSelect = document.getElementById('unitSelect');
            const wavelengthSpan = document.getElementById('wavelengthValue');

            // conversion factors to Hz
            const toHz = {
                'Hz': 1,
                'kHz': 1e3,
                'MHz': 1e6,
                'GHz': 1e9
            };

            function updateWavelength() {
                // get frequency value (use 0 if empty or invalid)
                let freqValue = parseFloat(freqInput.value);
                if (isNaN(freqValue) || freqValue <= 0) {
                    wavelengthSpan.textContent = '—';
                    return;
                }

                const unit = unitSelect.value;
                const freqHz = freqValue * toHz[unit];

                // wavelength in metres
                const wavelengthMetres = C / freqHz;

                // format nicely (avoid scientific for common ranges, but keep reasonable length)
                let displayValue;
                if (wavelengthMetres >= 1e9) {
                    displayValue = wavelengthMetres.toExponential(4);
                } else if (wavelengthMetres >= 1000) {
                    displayValue = wavelengthMetres.toFixed(2) + '';   // km range? but keep as metres
                } else if (wavelengthMetres >= 1) {
                    displayValue = wavelengthMetres.toFixed(4);
                } else if (wavelengthMetres >= 0.001) {
                    displayValue = wavelengthMetres.toFixed(6);
                } else if (wavelengthMetres > 0) {
                    displayValue = wavelengthMetres.toExponential(4);
                } else {
                    displayValue = '0';
                }
                // Use a more polished presentation: if it contains '.' and many decimals, we can trim.
                if (typeof displayValue === 'string' && displayValue.includes('.') && !displayValue.includes('e')) {
                    // remove trailing zeros after decimal, but keep at least one decimal if needed.
                    displayValue = displayValue.replace(/(\.\d*?[1-9])0+$/, '$1')
                                               .replace(/\.0+$/, '');   // if all zeros, remove decimal point
                }

                wavelengthSpan.textContent = displayValue;
            }

            freqInput.addEventListener('input', updateWavelength);
            unitSelect.addEventListener('change', updateWavelength);

            updateWavelength();
            freqInput.addEventListener('blur', function() {
                let val = parseFloat(freqInput.value);
                if (val <= 0) {
                    freqInput.value = 1;   
                    updateWavelength();
                }
            });

        })();