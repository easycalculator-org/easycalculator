 (function() {
        // get band chips
        const bandChips = document.querySelectorAll('.band-chip');
        let activeChip = null;

        // DOM elements (frequent)
        const selectedBandDisplay = document.getElementById('selectedBandDisplay');
        const dlFreqRangeSpan = document.getElementById('dlFreqRange');
        const earfcnRangeSpan = document.getElementById('earfcnRangeDisplay');
        const footBand = document.getElementById('footBand');
        const footDlLow = document.getElementById('footDlLow');
        const footUlLow = document.getElementById('footUlLow');
        const footOffset = document.getElementById('footOffset');
        const footRange = document.getElementById('footRange');

        // input / result fields
        const freqInput = document.getElementById('freqInput');
        const earfcnResultSpan = document.getElementById('earfcnResult');
        const earfcnInput = document.getElementById('earfcnInput');
        const freqResultSpan = document.getElementById('freqResult');

        // panels
        const panelFreq = document.getElementById('panelFreqToEarfcn');
        const panelEarfcn = document.getElementById('panelEarfcnToFreq');
        const radioFreq = document.getElementById('radioFreqToEarfcn');
        const radioEarfcn = document.getElementById('radioEarfcnToFreq');

        // buttons
        const btnFreqCalc = document.getElementById('calcFreqToEarfcn');
        const btnEarfcnCalc = document.getElementById('calcEarfcnToFreq');

        // ---- helper get active band dataset ----
        function getActiveBandData() {
            if (!activeChip) {
                activeChip = document.querySelector('.band-chip');
                if (activeChip) activeChip.classList.add('active');
            }
            return {
                band: activeChip.dataset.band,
                dlLow: parseFloat(activeChip.dataset.dlLow),
                nOffset: parseInt(activeChip.dataset.nOffset),
                earfcnMin: parseInt(activeChip.dataset.earfcnMin),
                earfcnMax: parseInt(activeChip.dataset.earfcnMax),
                text: activeChip.textContent.trim()
            };
        }

        // update all band info (ranges, footer)
        function refreshBandInfo() {
            const d = getActiveBandData();
            if (!d) return;

            selectedBandDisplay.innerText = d.text;
            // DL range approx = low + (maxEarfcn-minEarfcn)*0.1
            const dlHigh = (d.dlLow + (d.earfcnMax - d.earfcnMin) * 0.1).toFixed(1);
            dlFreqRangeSpan.innerText = d.dlLow + ' – ' + dlHigh;
            earfcnRangeSpan.innerText = d.earfcnMin + ' – ' + d.earfcnMax;

            footBand.innerText = d.band;
            footDlLow.innerText = d.dlLow;
            // ul low guess (approximate)
            const ulMap = { '5':'824','8':'880','20':'832','28':'703','71':'663','1':'1920','2':'1850','3':'1710','66':'1710','40':'2300','7':'2500','38':'2570','41':'2496','42':'3400','48':'3550' };
            footUlLow.innerText = ulMap[d.band] || '—';
            footOffset.innerText = d.nOffset;
            footRange.innerText = d.earfcnMin + '–' + d.earfcnMax;
        }

        // set active band chip
        function setActiveBand(chip) {
            if (activeChip) activeChip.classList.remove('active');
            chip.classList.add('active');
            activeChip = chip;
            refreshBandInfo();

            // after band change, recalc visible converter (to keep numbers coherent)
            if (radioFreq.checked) {
                computeFreqToEarfcn();
            } else {
                computeEarfcnToFreq();
            }
        }

        // ---- conversion functions ----
        function computeFreqToEarfcn() {
            const d = getActiveBandData();
            if (!d) return;
            const freq = parseFloat(freqInput.value);
            if (isNaN(freq)) { earfcnResultSpan.innerText = '?'; return; }
            // N = 10*(freq - F_low) + Noffs
            const earfcn = Math.round(10 * (freq - d.dlLow) + d.nOffset);
            earfcnResultSpan.innerText = earfcn >= 0 ? earfcn : 'err';
        }

        function computeEarfcnToFreq() {
            const d = getActiveBandData();
            if (!d) return;
            const earfcnVal = parseFloat(earfcnInput.value);
            if (isNaN(earfcnVal)) { freqResultSpan.innerText = '?'; return; }
            // F = (earfcn - Noffs)/10 + F_low
            const freq = (earfcnVal - d.nOffset) * 0.1 + d.dlLow;
            freqResultSpan.innerText = (freq >= 0) ? freq.toFixed(2) : 'err';
        }

        // ---- toggle panels based on radio ----
        function toggleConverter() {
            if (radioFreq.checked) {
                panelFreq.style.display = 'block';
                panelEarfcn.style.display = 'none';
                // compute once to show default
                computeFreqToEarfcn();
            } else {
                panelFreq.style.display = 'none';
                panelEarfcn.style.display = 'block';
                computeEarfcnToFreq();
            }
        }

        // ---- attach event listeners ----
        bandChips.forEach(chip => {
            chip.addEventListener('click', function() {
                setActiveBand(this);
            });
        });

        radioFreq.addEventListener('change', toggleConverter);
        radioEarfcn.addEventListener('change', toggleConverter);

        btnFreqCalc.addEventListener('click', computeFreqToEarfcn);
        btnEarfcnCalc.addEventListener('click', computeEarfcnToFreq);

        // enter key on inputs
        freqInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') computeFreqToEarfcn(); });
        earfcnInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') computeEarfcnToFreq(); });

        // bandwidth radios: purely UI, no calculation impact. keep default 5MHz checked
        document.getElementById('bw5').checked = true;

        // initialise with band 5
        if (bandChips.length) {
            setActiveBand(bandChips[0]);  // band5
            // set example values
            freqInput.value = '881.5';
            earfcnInput.value = '2500';
            // show correct panel & compute
            toggleConverter();   // freq->earfcn default
        }
    })();