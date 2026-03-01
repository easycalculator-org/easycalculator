 (function() {
            // ----- 2G band definitions (return center frequency) -----
            const BANDS = {
                '850': {
                    name: 'GSM 850',
                    // ARFCN 128–251
                    valid: function(n) {
                        return Number.isInteger(n) && n >= 128 && n <= 251;
                    },
                    // returns center frequencies (uplink, downlink) in MHz
                    getCenter: function(n) {
                        let ulCenter = 824.1 + 0.2 * (n - 128);
                        let dlCenter = 869.1 + 0.2 * (n - 128);
                        return { dlCenter, ulCenter };
                    }
                },
                '900P': {
                    name: '900P (P-GSM)',
                    valid: function(n) {
                        return Number.isInteger(n) && n >= 1 && n <= 124;
                    },
                    getCenter: function(n) {
                        let ulCenter = 890.1 + 0.2 * (n - 1);
                        let dlCenter = 935.1 + 0.2 * (n - 1);
                        return { dlCenter, ulCenter };
                    }
                },
                '900E': {
                    name: '900E (E-GSM)',
                    valid: function(n) {
                        if (!Number.isInteger(n)) return false;
                        return (n >= 0 && n <= 124) || (n >= 975 && n <= 1023);
                    },
                    getCenter: function(n) {
                        let ulCenter;
                        if (n >= 0 && n <= 124) {
                            ulCenter = 890.0 + 0.2 * n;
                        } else { // 975..1023
                            ulCenter = 890.1 + 0.2 * (n - 1024);
                        }
                        let dlCenter = ulCenter + 45.0;
                        return { dlCenter, ulCenter };
                    }
                },
                '1800': {
                    name: '1800 (DCS)',
                    valid: function(n) {
                        return Number.isInteger(n) && n >= 512 && n <= 885;
                    },
                    getCenter: function(n) {
                        let ulCenter = 1710.1 + 0.2 * (n - 512);
                        let dlCenter = ulCenter + 95.0;
                        return { dlCenter, ulCenter };
                    }
                },
                '1900': {
                    name: '1900 (PCS)',
                    valid: function(n) {
                        return Number.isInteger(n) && n >= 512 && n <= 810;
                    },
                    getCenter: function(n) {
                        let ulCenter = 1850.1 + 0.2 * (n - 512);
                        let dlCenter = ulCenter + 80.0;
                        return { dlCenter, ulCenter };
                    }
                }
            };

            // current selected band (default 900P to show classic example: ARFCN 1)
            let currentBand = '900P';

            // DOM elements
            const arfcnInput = document.getElementById('arfcnInput');
            const dlResultDiv = document.getElementById('dlResult');
            const ulResultDiv = document.getElementById('ulResult');
            const bandHintSpan = document.querySelector('#bandHint span:last-child'); // second span

            const bandBtns = document.querySelectorAll('.band-btn');

            // Helper: format number to two decimals (always .XX)
            function fmt(num) {
                return num.toFixed(2);
            }

            // update display with range (lower–upper) and center frequency (200 kHz channel)
            function updateDisplay() {
                let rawArfcn = arfcnInput.value.trim();
                if (rawArfcn === '') {
                    dlResultDiv.innerHTML = `<span class="text-dark">—</span><br><span class="text-secondary">enter ARFCN</span>`;
                    ulResultDiv.innerHTML = `<span class="text-dark">—</span><br><span class="text-secondary">enter ARFCN</span>`;
                    bandHintSpan.innerText = `Band: ${BANDS[currentBand].name} — type a channel`;
                    return;
                }

                const arfcn = Number(rawArfcn);
                if (!Number.isInteger(arfcn)) {
                    dlResultDiv.innerHTML = `<span class="text-dark">invalid</span><br><span class="text-secondary">must be integer</span>`;
                    ulResultDiv.innerHTML = `<span class="text-dark">—</span><br><span class="text-secondary">—</span>`;
                    bandHintSpan.innerText = `Band: ${BANDS[currentBand].name} · ARFCN must be whole number`;
                    return;
                }

                const band = BANDS[currentBand];
                const valid = band.valid(arfcn);

                if (!valid) {
                    // show out of range with hint
                    dlResultDiv.innerHTML = `<span class="text-dark">out of range</span><br><span class="text-secondary">invalid ARFCN</span>`;
                    ulResultDiv.innerHTML = `<span class="text-dark">—</span><br><span class="text-secondary">—</span>`;

                    let rangeMsg = '';
                    if (currentBand === '850') rangeMsg = 'valid ARFCN 128–251';
                    else if (currentBand === '900P') rangeMsg = 'valid ARFCN 1–124';
                    else if (currentBand === '900E') rangeMsg = 'valid ARFCN 0–124, 975–1023';
                    else if (currentBand === '1800') rangeMsg = 'valid ARFCN 512–885';
                    else if (currentBand === '1900') rangeMsg = 'valid ARFCN 512–810';
                    bandHintSpan.innerText = `Band: ${band.name} · ${rangeMsg}`;
                    return;
                }

                // valid -> get center frequencies
                const { dlCenter, ulCenter } = band.getCenter(arfcn);

                // 200 kHz channel = ±100 kHz around center → half = 0.1 MHz
                const half = 0.1; // 100 kHz = 0.1 MHz

                const dlLow = dlCenter - half;
                const dlHigh = dlCenter + half;
                const ulLow = ulCenter - half;
                const ulHigh = ulCenter + half;

                // format with two decimals always
                const dlRange = `${fmt(dlLow)} – ${fmt(dlHigh)} MHz`;
                const dlCenterStr = `center ${fmt(dlCenter)} MHz`;
                const ulRange = `${fmt(ulLow)} – ${fmt(ulHigh)} MHz`;
                const ulCenterStr = `center ${fmt(ulCenter)} MHz`;

                // update downlink card
                dlResultDiv.innerHTML = `<span class="text-dark">${dlRange}</span><br><span class="text-secondary">${dlCenterStr}</span>`;
                // update uplink card
                ulResultDiv.innerHTML = `<span class="text-dark">${ulRange}</span><br><span class="text-secondary">${ulCenterStr}</span>`;

                // update hint with band and ARFCN info
                bandHintSpan.innerText = `Band: ${band.name} · ARFCN ${arfcn} · 200 kHz channel raster`;
            }

            // event: band button click
            bandBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    const band = this.getAttribute('data-band');
                    if (!band) return;

                    // update active button style
                    bandBtns.forEach(b => {
                        b.classList.remove('btn-primary', 'active');
                        b.classList.add('btn-outline-primary');
                    });
                    this.classList.remove('btn-outline-primary');
                    this.classList.add('btn-primary', 'active');

                    // set current band
                    currentBand = band;

                    // update hint with band range (temporary until updateDisplay sets final)
                    let rangeMsg = '';
                    if (band === '850') rangeMsg = 'ARFCN 128–251';
                    else if (band === '900P') rangeMsg = 'ARFCN 1–124';
                    else if (band === '900E') rangeMsg = 'ARFCN 0–124, 975–1023';
                    else if (band === '1800') rangeMsg = 'ARFCN 512–885';
                    else if (band === '1900') rangeMsg = 'ARFCN 512–810';
                    bandHintSpan.innerText = `Band: ${BANDS[band].name} · ${rangeMsg}`;

                    // recalc with current arfcn
                    updateDisplay();
                });
            });

            // input event on ARFCN field
            arfcnInput.addEventListener('input', updateDisplay);

            // initialise: set default to 900P (button active)
            const defaultBtn = Array.from(bandBtns).find(btn => btn.getAttribute('data-band') === '900P');
            if (defaultBtn) {
                defaultBtn.classList.remove('btn-outline-primary');
                defaultBtn.classList.add('btn-primary', 'active');
            } else {
                document.querySelector('[data-band="850"]')?.classList.add('btn-primary');
            }

            // set initial hint for 900P and default ARFCN=1 (example: DL 935.00–935.20, center 935.10)
            bandHintSpan.innerText = 'Band: 900P (P-GSM) · ARFCN 1–124';
            // force initial display
            updateDisplay();
        })();