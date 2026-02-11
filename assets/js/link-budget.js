 (function() {
            "use strict";

            // ---------- Chart initialization (gain structure) ----------
            const ctx = document.getElementById('gainChart').getContext('2d');
            let chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['EIRP', 'FSPL', 'Losses', 'Rx ant', 'Rx pow'],
                    datasets: [{
                        label: 'dBm / dB',
                        data: [0, 0, 0, 0, 0],
                        backgroundColor: [
                            '#3d9eff',
                            '#ff7e5f',
                            '#ffae70',
                            '#6ec8b2',
                            '#a0d683'
                        ],
                        borderRadius: 6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { backgroundColor: '#ffffff' }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: { color: 'rgba(0,80,120,0.08)' },
                            ticks: { color: '#1f4a64' }
                        },
                        x: {
                            ticks: { color: '#1f4a64' }
                        }
                    }
                }
            });

            // ---------- DOM references ----------
            const freqIn = document.getElementById('freq');
            const distIn = document.getElementById('distance');
            const txPwrIn = document.getElementById('txPower');
            const txGainIn = document.getElementById('txGain');
            const rxGainIn = document.getElementById('rxGain');
            const lnaGainIn = document.getElementById('lnaGain');
            const txCableIn = document.getElementById('txCable');
            const rxCableIn = document.getElementById('rxCable');
            const rainLossIn = document.getElementById('rainLoss');
            const polLossIn = document.getElementById('polLoss');
            const miscLossIn = document.getElementById('miscLoss');
            const nfIn = document.getElementById('nf');
            const bwIn = document.getElementById('bw');
            const snrReqIn = document.getElementById('snrReq');
            const fadeTargetIn = document.getElementById('fadeTarget');

            // result spans
            const rxPowerSpan = document.getElementById('rxPowerVal');
            const marginSpan = document.getElementById('marginVal');
            const marginStatus = document.getElementById('marginStatus');
            const marginProgress = document.getElementById('marginProgress');
            const pathLossSpan = document.getElementById('pathLossVal');
            const sensSpan = document.getElementById('sensVal');
            const eirpSpan = document.getElementById('eirpVal');
            const noisePowSpan = document.getElementById('noisePowVal');
            // detail row
            const detailTxp = document.getElementById('detailTxp');
            const detailTxc = document.getElementById('detailTxc');
            const detailTxg = document.getElementById('detailTxg');
            const detailFspl = document.getElementById('detailFspl');
            const detailMisc = document.getElementById('detailMisc');
            const detailRxg = document.getElementById('detailRxg');
            const detailRxc = document.getElementById('detailRxc');
            const detailLna = document.getElementById('detailLna');
            const detailRx = document.getElementById('detailRx');

            // reset button
            document.getElementById('resetDefaults').addEventListener('click', function() {
                freqIn.value = 3500;
                distIn.value = 5.0;
                txPwrIn.value = 33.0;
                txGainIn.value = 18.0;
                rxGainIn.value = 21.0;
                lnaGainIn.value = 2.0;
                txCableIn.value = 1.5;
                rxCableIn.value = 1.2;
                rainLossIn.value = 0.8;
                polLossIn.value = 0.5;
                miscLossIn.value = 0.0;
                nfIn.value = 4.5;
                bwIn.value = 20000;
                snrReqIn.value = 12.0;
                fadeTargetIn.value = 15.0;
                updateAll();
            });

            // ---------- universal update function ----------
            function updateAll() {
                // read values as floats
                const f_mhz = parseFloat(freqIn.value) || 3500;
                const d_km = parseFloat(distIn.value) || 5;
                const txPwr = parseFloat(txPwrIn.value) || 0;
                const txGain = parseFloat(txGainIn.value) || 0;
                const rxGain = parseFloat(rxGainIn.value) || 0;
                const lnaGain = parseFloat(lnaGainIn.value) || 0;
                const txCable = parseFloat(txCableIn.value) || 0;
                const rxCable = parseFloat(rxCableIn.value) || 0;
                const rainLoss = parseFloat(rainLossIn.value) || 0;
                const polLoss = parseFloat(polLossIn.value) || 0;
                const miscLoss = parseFloat(miscLossIn.value) || 0;
                const nf = parseFloat(nfIn.value) || 0;
                const bw_khz = parseFloat(bwIn.value) || 1;
                const snrReq = parseFloat(snrReqIn.value) || 0;
                const fadeTarget = parseFloat(fadeTargetIn.value) || 0;

                // ========== CALCULATIONS ==========
                // Free space path loss (ITU) : FSPL(dB) = 20*log10(d_km) + 20*log10(f_MHz) + 32.45
                const fspl = 20 * Math.log10(d_km) + 20 * Math.log10(f_mhz) + 32.45;
                const fsplRound = Math.round(fspl * 10) / 10;

                // total losses (excluding FSPL, but includes misc, rain, polarization, cable etc)
                const totalOtherLosses = txCable + rxCable + rainLoss + polLoss + miscLoss;
                
                // EIRP (dBm) = TX power - TX cable + TX antenna gain
                const eirp = txPwr - txCable + txGain;
                
                // RX power at LNA output (dBm):
                // EIRP - FSPL - other losses + RX antenna gain - RX cable + LNA gain
                const rxPower = eirp - fspl - totalOtherLosses + rxGain + lnaGain;
                
                // ----- sensitivity & noise -----
                const bw_hz = bw_khz * 1000;
                const noisePow = -174 + 10 * Math.log10(bw_hz) + nf;
                const sensitivity = noisePow + snrReq;   // dBm
                
                // link margin = Rx power - sensitivity
                const margin = rxPower - sensitivity;
                const marginRound = Math.round(margin * 10) / 10;
                
                // target exceedance
                const targetDiff = margin - fadeTarget;
                
                // ----- update UI -----
                rxPowerSpan.textContent = Math.round(rxPower * 10) / 10;
                marginSpan.textContent = marginRound;
                pathLossSpan.textContent = fsplRound;
                const sensRound = Math.round(sensitivity * 10) / 10;
                sensSpan.textContent = sensRound;
                eirpSpan.textContent = Math.round(eirp * 10) / 10;
                noisePowSpan.textContent = Math.round(noisePow * 10) / 10;
                
                // margin status
                if (targetDiff >= 0) {
                    marginStatus.innerHTML = `✅ ${(margin - fadeTarget).toFixed(1)} dB above target`;
                    marginStatus.style.color = '#006600';
                } else {
                    marginStatus.innerHTML = `⚠️ ${(margin - fadeTarget).toFixed(1)} dB below target`;
                    marginStatus.style.color = '#cc5c00';
                }
                // progress bar relative to target 
                let progressPercent = (margin / fadeTarget) * 100;
                if (progressPercent > 200) progressPercent = 200;
                if (progressPercent < 0) progressPercent = 0;
                marginProgress.style.width = (progressPercent/2) + '%';
                marginProgress.setAttribute('aria-valuenow', progressPercent);
                
                // detail row updates
                detailTxp.innerText = txPwr.toFixed(1) + ' dBm';
                detailTxc.innerText = txCable.toFixed(1) + ' dB';
                detailTxg.innerText = txGain.toFixed(1) + ' dBi';
                detailFspl.innerText = fsplRound + ' dB';
                const miscSum = (rainLoss + polLoss + miscLoss).toFixed(1);
                detailMisc.innerText = miscSum + ' dB';
                detailRxg.innerText = rxGain.toFixed(1) + ' dBi';
                detailRxc.innerText = rxCable.toFixed(1) + ' dB';
                detailLna.innerText = lnaGain.toFixed(1) + ' dB';
                detailRx.innerText = Math.round(rxPower * 10) / 10 + ' dBm';
                
                // update chart
                const chartEirp = Math.round(eirp);
                const chartFspl = -Math.round(fspl);
                const chartLosses = -Math.round(totalOtherLosses);
                const chartRxGain = Math.round(rxGain);
                const chartRxPow = Math.round(rxPower);
                
                chart.data.datasets[0].data = [chartEirp, chartFspl, chartLosses, chartRxGain, chartRxPow];
                chart.update();
            }

            const inputs = [
                freqIn, distIn, txPwrIn, txGainIn, rxGainIn, lnaGainIn,
                txCableIn, rxCableIn, rainLossIn, polLossIn, miscLossIn,
                nfIn, bwIn, snrReqIn, fadeTargetIn
            ];
            inputs.forEach(input => input.addEventListener('input', updateAll));
            
            updateAll();
        })();