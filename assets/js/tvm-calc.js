 // TVM Calculation Functions
        function calculatePV() {
            const fv = parseFloat(document.getElementById('fv').value) || 0;
            const rate = parseFloat(document.getElementById('rate').value) / 100 || 0;
            const nper = parseFloat(document.getElementById('nper').value) || 0;
            const pmt = parseFloat(document.getElementById('pmt').value) || 0;
            const paymentType = document.getElementById('paymentType').value;
            
            let pv;
            if (rate === 0) {
                pv = -fv - (pmt * nper);
            } else {
                const pvFactor = Math.pow(1 + rate, -nper);
                const annuityFactor = (1 - pvFactor) / rate;
                const pmtFactor = (paymentType === 'beginning') ? (1 + rate) : 1;
                
                pv = (-fv * pvFactor) - (pmt * pmtFactor * annuityFactor);
            }
            
            document.getElementById('resultPV').textContent = pv.toFixed(2);
            document.getElementById('pv').value = pv.toFixed(2);
        }
        
        function calculateFV() {
            const pv = parseFloat(document.getElementById('pv').value) || 0;
            const rate = parseFloat(document.getElementById('rate').value) / 100 || 0;
            const nper = parseFloat(document.getElementById('nper').value) || 0;
            const pmt = parseFloat(document.getElementById('pmt').value) || 0;
            const paymentType = document.getElementById('paymentType').value;
            
            let fv;
            if (rate === 0) {
                fv = -pv - (pmt * nper);
            } else {
                const fvFactor = Math.pow(1 + rate, nper);
                const annuityFactor = (fvFactor - 1) / rate;
                const pmtFactor = (paymentType === 'beginning') ? (1 + rate) : 1;
                
                fv = (-pv * fvFactor) - (pmt * pmtFactor * annuityFactor);
            }
            
            document.getElementById('resultFV').textContent = fv.toFixed(2);
            document.getElementById('fv').value = fv.toFixed(2);
        }
        
        function calculateRate() {
            // Using Newton-Raphson method for approximation
            const pv = parseFloat(document.getElementById('pv').value) || 0;
            const fv = parseFloat(document.getElementById('fv').value) || 0;
            const nper = parseFloat(document.getElementById('nper').value) || 0;
            const pmt = parseFloat(document.getElementById('pmt').value) || 0;
            const paymentType = document.getElementById('paymentType').value;
            
            if (nper <= 0) {
                alert('Number of periods must be greater than zero');
                return;
            }
            
            const pmtFactor = (paymentType === 'beginning') ? 1 : 0;
            let rate = 0.1; // Initial guess
            let prevRate = 0;
            let iterations = 0;
            const maxIterations = 100;
            const tolerance = 0.00001;
            
            function tvmFunc(r) {
                const term = Math.pow(1 + r, nper);
                return pv * term + pmt * (1 + r * pmtFactor) * ((term - 1) / r) + fv;
            }
            
            function tvmDerivative(r) {
                const term1 = Math.pow(1 + r, nper);
                const term2 = nper * pv * Math.pow(1 + r, nper - 1);
                const term3 = pmt * (1 + r * pmtFactor) * nper * Math.pow(1 + r, nper - 1) / r;
                const term4 = pmt * (1 + r * pmtFactor) * (Math.pow(1 + r, nper) - 1) / (r * r);
                const term5 = pmt * pmtFactor * (Math.pow(1 + r, nper) - 1) / r;
                
                return term2 + term3 - term4 + term5;
            }
            
            while (Math.abs(rate - prevRate) > tolerance && iterations < maxIterations) {
                prevRate = rate;
                rate = rate - tvmFunc(rate) / tvmDerivative(rate);
                iterations++;
            }
            
            if (isNaN(rate) || !isFinite(rate)) {
                rate = (Math.pow(-fv / pv, 1 / nper) - 1);
            }
            
            const ratePercent = (rate * 100).toFixed(4);
            document.getElementById('resultRate').textContent = ratePercent + '%';
            document.getElementById('rate').value = ratePercent;
        }
        
        function calculateNper() {
            const pv = parseFloat(document.getElementById('pv').value) || 0;
            const fv = parseFloat(document.getElementById('fv').value) || 0;
            const rate = parseFloat(document.getElementById('rate').value) / 100 || 0;
            const pmt = parseFloat(document.getElementById('pmt').value) || 0;
            const paymentType = document.getElementById('paymentType').value;
            
            if (rate === 0) {
                const nper = Math.abs((fv + pv) / pmt);
                document.getElementById('resultNper').textContent = nper.toFixed(0);
                document.getElementById('nper').value = nper.toFixed(0);
                return;
            }
            
            const pmtFactor = (paymentType === 'beginning') ? (1 + rate) : 1;
            const adjustedPmt = pmt * pmtFactor;
            
            // Calculate number of periods using logarithms
            let nper;
            if (pmt === 0) {
                nper = Math.log(fv / pv) / Math.log(1 + rate);
            } else {
                const numerator = Math.log(1 + (rate * (fv + pv)) / adjustedPmt);
                const denominator = Math.log(1 + rate);
                nper = numerator / denominator;
            }
            
            document.getElementById('resultNper').textContent = Math.ceil(nper).toFixed(0);
            document.getElementById('nper').value = Math.ceil(nper).toFixed(0);
        }
        
        // Event Listeners
        document.getElementById('calcPV').addEventListener('click', calculatePV);
        document.getElementById('calcFV').addEventListener('click', calculateFV);
        document.getElementById('calcRate').addEventListener('click', calculateRate);
        document.getElementById('calcNper').addEventListener('click', calculateNper);
        
        document.getElementById('resetBtn').addEventListener('click', function() {
            document.getElementById('pv').value = '';
            document.getElementById('fv').value = '';
            document.getElementById('rate').value = '';
            document.getElementById('nper').value = '';
            document.getElementById('pmt').value = '';
            document.getElementById('paymentType').value = 'end';
            
            document.getElementById('resultPV').textContent = '0.00';
            document.getElementById('resultFV').textContent = '0.00';
            document.getElementById('resultRate').textContent = '0.00%';
            document.getElementById('resultNper').textContent = '0';
        });