 (function() {
        const vswrInput = document.getElementById('vswrInput');
        const gammaEl = document.getElementById('gammaVal');
        const returnLossEl = document.getElementById('returnLossVal');
        const reflPowerEl = document.getElementById('reflPowerVal');
        const throughPowerEl = document.getElementById('throughPowerVal');
        const mismatchLossEl = document.getElementById('mismatchLossVal');

        function compute(vswr) {
            if (vswr < 1) vswr = 1;
            const gamma = (vswr - 1) / (vswr + 1);
            const reflected = gamma * gamma * 100;
            const through = 100 - reflected;
            let returnLoss = gamma > 0 ? -20 * Math.log10(gamma) : Infinity;
            let mismatch = (through > 0) ? -10 * Math.log10(through / 100) : Infinity;

            gammaEl.innerText = gamma.toFixed(5);
            reflPowerEl.innerText = reflected.toFixed(2);
            throughPowerEl.innerText = through.toFixed(2);
            returnLossEl.innerText = (gamma === 0) ? '∞' : returnLoss.toFixed(2);
            mismatchLossEl.innerText = (through <= 0) ? '∞' : mismatch.toFixed(2);
            if (vswr === 1) mismatchLossEl.innerText = '0.00';
        }

        function update() {
            let val = parseFloat(vswrInput.value);
            if (isNaN(val) || val < 1) {
                vswrInput.value = 1;
                val = 1;
            }
            compute(val);
        }

        vswrInput.addEventListener('input', update);
        vswrInput.addEventListener('blur', function() {
            let v = parseFloat(vswrInput.value);
            if (isNaN(v) || v < 1) vswrInput.value = 1;
            update();
        });

        document.querySelectorAll('.btn-outline-primary ').forEach(btn => {
            btn.addEventListener('click', e => {
                vswrInput.value = e.target.innerText;
                update();
            });
        });

        // initial 2.1 -> match keywords: 0.35484, 12.59, 87.41, 9dB, 0.58dB
        vswrInput.value = '2.1';
        update();
    })();