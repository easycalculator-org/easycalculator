 (function() {
     const C = 299792458;   // speed of light m/s
            // elements
       const wavelengthInput = document.getElementById('wavelengthInput');
       const lengthUnitSelect = document.getElementById('lengthUnitSelect');
       const frequencySpan = document.getElementById('frequencyValue');
       const freqUnitSpan = document.getElementById('freqUnitDisplay');
       const freqNote = document.getElementById('frequencyUnitNote');
            // conversion factors
        const toMetres = {
           'm': 1,
           'cm': 0.01,
           'mm': 0.001,
           'um': 1e-6,
           'nm': 1e-9,
           'km': 1000
         };

            function formatFrequencyWithUnit(freqHz) {
                if (freqHz <= 0 || isNaN(freqHz)) {
                    return { value: '—', unit: 'Hz', note: 'enter a positive wavelength' };
                }
                // decide unit prefix: Hz, kHz, MHz, GHz, THz (optional)
                if (freqHz >= 1e12) {
                    let val = freqHz / 1e12;
                    // limit decimal places
                    let str = val.toPrecision(5);
                    return { value: str, unit: 'THz', note: 'result in terahertz (THz)' };
                } else if (freqHz >= 1e9) {
                    let val = freqHz / 1e9;
                    let str = val.toPrecision(5);
                    return { value: str, unit: 'GHz', note: 'result in gigahertz (GHz)' };
                } else if (freqHz >= 1e6) {
                    let val = freqHz / 1e6;
                    let str = val.toPrecision(5);
                    return { value: str, unit: 'MHz', note: 'result in megahertz (MHz)' };
                } else if (freqHz >= 1e3) {
                    let val = freqHz / 1e3;
                    let str = val.toPrecision(5);
                    return { value: str, unit: 'kHz', note: 'result in kilohertz (kHz)' };
                } else {
                    let str = freqHz.toPrecision(5);
                    return { value: str, unit: 'Hz', note: 'result in hertz (Hz)' };
                }
            }

            function updateFrequency() {
                // get wavelength 
                let rawValue = parseFloat(wavelengthInput.value);
                if (isNaN(rawValue) || rawValue <= 0) {
                    frequencySpan.textContent = '—';
                    freqUnitSpan.textContent = 'Hz';
                    freqNote.textContent = 'enter a positive wavelength';
                    return;
                }
                const unit = lengthUnitSelect.value;
                const factor = toMetres[unit];
                const wavelengthMetres = rawValue * factor;
                const freqHz = C / wavelengthMetres;
                const formatted = formatFrequencyWithUnit(freqHz);
                frequencySpan.textContent = formatted.value;
                freqUnitSpan.textContent = formatted.unit;
                freqNote.textContent = formatted.note;
            }
            wavelengthInput.addEventListener('input', updateFrequency);
            lengthUnitSelect.addEventListener('change', updateFrequency);

            wavelengthInput.addEventListener('blur', function() {
                let val = parseFloat(wavelengthInput.value);
                if (val <= 0 || isNaN(val)) {
                    wavelengthInput.value = 1.0;  
                    updateFrequency();
                }
            });
            updateFrequency();
        })();