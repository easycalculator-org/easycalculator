    (function() {
            // DOM elements
            const txPowerInput = document.getElementById('txPower');
            const txUnitSelect = document.getElementById('txUnit');
            const antGainInput = document.getElementById('antGain');
            const cableLossInput = document.getElementById('cableLoss');
            const extraLossInput = document.getElementById('extraLoss');
            const eirpDisplaySpan = document.getElementById('eirpDisplay');
            const eirpUnitSpan = document.getElementById('eirpUnit');
            const eirpWattSpan = document.getElementById('eirpWatt');
            const resetBtn = document.getElementById('resetBtn');
            const convertToWattBtn = document.getElementById('convertToWattBtn');

            // helper: convert any power value to dBm based on selected unit
            function convertToDBm(value, unit) {
                if (unit === 'dBm') return value;           // already dBm
                if (unit === 'W') return 30 + 10 * Math.log10(value);    // 1 W = 30 dBm
                if (unit === 'mW') return 10 * Math.log10(value);        // 1 mW = 0 dBm
                return value; // fallback (should never happen)
            }

            // main calculation & UI update
            function updateEIRP() {
                // read values (fallback to 0 if empty or invalid)
                let txVal = parseFloat(txPowerInput.value);
                if (isNaN(txVal)) txVal = 0;

                let antVal = parseFloat(antGainInput.value);
                if (isNaN(antVal)) antVal = 0;

                let cableVal = parseFloat(cableLossInput.value);
                if (isNaN(cableVal)) cableVal = 0;

                let extraVal = parseFloat(extraLossInput.value);
                if (isNaN(extraVal)) extraVal = 0;

                const unit = txUnitSelect.value;

                // step 1: convert transmitter power to dBm
                const txDBm = convertToDBm(txVal, unit);

                // step 2: total loss (cable + extra)
                const totalLossDB = cableVal + extraVal;   // both in dB

                // step 3: EIRP in dBm
                const eirpDBm = txDBm + antVal - totalLossDB;

                // format to two decimals
                let eirpFormatted = eirpDBm.toFixed(2);
                eirpDisplaySpan.textContent = eirpFormatted;

                // update unit indicator (always dBm for main display)
                eirpUnitSpan.textContent = 'dBm';

                // step 4: compute EIRP in Watts (linear)
                // formula: Watts = 10^( (EIRP_dBm - 30)/10 )
                const eirpWatts = Math.pow(10, (eirpDBm - 30) / 10);
                let wattStr = eirpWatts.toFixed(3);
                // if > 1000 W, maybe show kW? but keep watts with 3 decimals, no big deal
                if (eirpWatts >= 1000) {
                    wattStr = (eirpWatts / 1000).toFixed(3) + ' kW';
                } else if (eirpWatts < 0.001) {
                    wattStr = (eirpWatts * 1000000).toFixed(2) + ' µW';
                } else if (eirpWatts < 1) {
                    wattStr = (eirpWatts * 1000).toFixed(2) + ' mW';
                } else {
                    wattStr = eirpWatts.toFixed(3) + ' W';
                }
                eirpWattSpan.textContent = wattStr;
            }

            // reset to default example values
            function resetToDefaults() {
                txPowerInput.value = '30.0';
                txUnitSelect.value = 'dBm';
                antGainInput.value = '6.0';
                cableLossInput.value = '2.0';
                extraLossInput.value = '0.0';
                updateEIRP();
            }

            // toggle the main display to show Watts (converted from current EIRP dBm)
            function showEIRPInWatt() {
                // read current eirp from display (avoid recalc)
                let currentEirpDbm = parseFloat(eirpDisplaySpan.textContent);
                if (isNaN(currentEirpDbm)) currentEirpDbm = 0;

                // linear Watts
                const watts = Math.pow(10, (currentEirpDbm - 30) / 10);

                // format nicely
                let displayWatts;
                if (watts >= 1000) {
                    displayWatts = (watts / 1000).toFixed(3) + ' kW';
                } else if (watts >= 1) {
                    displayWatts = watts.toFixed(3) + ' W';
                } else if (watts >= 0.001) {
                    displayWatts = (watts * 1000).toFixed(2) + ' mW';
                } else {
                    displayWatts = (watts * 1e6).toFixed(2) + ' µW';
                }

                // briefly show as alert-like (can also update main display but we keep dBm primary)
                // better: change the result badge temporarily? But we have dedicated watt line.
                // For this button we show a nice toast-less alternative: update a small tooltip or flash effect
                // Let's just update the watt line instantly and also show a temporary message.
                eirpWattSpan.textContent = displayWatts;

                // also blink the watt line to indicate conversion
                eirpWattSpan.style.transition = 'background 0.2s';
                eirpWattSpan.style.backgroundColor = '#cfe2ff';
                setTimeout(() => {
                    eirpWattSpan.style.backgroundColor = 'transparent';
                }, 300);

                // additionally, we can update the main unit? but better keep consistency.
                // maybe show a small note: but not needed.
            }

            // attach event listeners
            [txPowerInput, antGainInput, cableLossInput, extraLossInput, txUnitSelect].forEach(el => {
                el.addEventListener('input', updateEIRP);
                el.addEventListener('change', updateEIRP); // for select in particular
            });

            // also any 'input' on number fields, but we use 'input' already.

            resetBtn.addEventListener('click', resetToDefaults);
            convertToWattBtn.addEventListener('click', showEIRPInWatt);

            // initial update
            updateEIRP();

            // extra: ensure that negative loss is allowed but user can use positive numbers, we don't restrict.
            // small UX: if somebody enters negative cable loss, formula works, but we can warn via background? no need.
        })();