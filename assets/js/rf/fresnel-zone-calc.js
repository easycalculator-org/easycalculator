
        (function() {
            // Unit conversion helpers
            function toMeters(value, unit) {
                let v = parseFloat(value);
                if (isNaN(v)) return 0;
                if (unit === 'km') return v * 1000;
                if (unit === 'mi') return v * 1609.344;
                return v;
            }

            function toHz(value, unit) {
                let v = parseFloat(value);
                if (isNaN(v)) return 0;
                if (unit === 'kHz') return v * 1e3;
                if (unit === 'MHz') return v * 1e6;
                if (unit === 'GHz') return v * 1e9;
                return v;
            }

            function formatMeters(m) {
                if (m >= 1000) return (m / 1000).toFixed(2) + ' km';
                if (m >= 0.1) return m.toFixed(2) + ' m';
                return m.toFixed(3) + ' m';
            }

            function formatFrequency(freqHz) {
                if (freqHz >= 1e9) return (freqHz / 1e9).toFixed(3) + ' GHz';
                if (freqHz >= 1e6) return (freqHz / 1e6).toFixed(2) + ' MHz';
                if (freqHz >= 1e3) return (freqHz / 1e3).toFixed(2) + ' kHz';
                return freqHz.toFixed(0) + ' Hz';
            }

            function computeFresnelRadius(d1_m, d_m, freq_hz, n) {
                if (d_m <= 0 || freq_hz <= 0 || d1_m <= 0) return 0;
                let d2_m = d_m - d1_m;
                if (d2_m <= 0) return 0;
                const c = 299792458;
                let lambda = c / freq_hz;
                let radiusSq = (n * lambda * d1_m * d2_m) / d_m;
                if (radiusSq < 0) return 0;
                return Math.sqrt(radiusSq);
            }

            function updateCalculation() {
                // Get values
                let distanceVal = document.getElementById('distance').value;
                let distanceUnit = document.getElementById('distanceUnit').value;
                let freqVal = document.getElementById('frequency').value;
                let freqUnit = document.getElementById('freqUnit').value;
                let zoneOrder = parseInt(document.getElementById('zoneOrder').value);
                let obsVal = document.getElementById('obsDistance').value;
                let obsUnit = document.getElementById('obsUnit').value;

                // Validate
                if (!distanceVal || parseFloat(distanceVal) <= 0) {
                    showResultError('Please enter a valid positive distance.');
                    return;
                }
                if (!freqVal || parseFloat(freqVal) <= 0) {
                    showResultError('Please enter a valid positive frequency.');
                    return;
                }

                let totalMeters = toMeters(distanceVal, distanceUnit);
                let freqHz = toHz(freqVal, freqUnit);

                if (totalMeters <= 0) {
                    showResultError('Distance must be greater than zero.');
                    return;
                }
                if (freqHz <= 0) {
                    showResultError('Frequency must be greater than zero.');
                    return;
                }

                let hasObstacle = obsVal !== null && obsVal !== '' && !isNaN(parseFloat(obsVal));
                let d1_m, d2_m, radius;

                if (hasObstacle) {
                    let obstacleMeters = toMeters(obsVal, obsUnit);
                    if (obstacleMeters <= 0) {
                        showResultError('Obstacle distance must be positive.');
                        return;
                    }
                    if (obstacleMeters >= totalMeters) {
                        showResultError('Obstacle distance must be less than total link distance.');
                        return;
                    }
                    d1_m = obstacleMeters;
                    d2_m = totalMeters - d1_m;
                    radius = computeFresnelRadius(d1_m, totalMeters, freqHz, zoneOrder);
                } else {
                    // Midpoint calculation
                    d1_m = totalMeters / 2;
                    d2_m = totalMeters / 2;
                    radius = computeFresnelRadius(d1_m, totalMeters, freqHz, zoneOrder);
                }

                if (radius === 0 || isNaN(radius)) {
                    showResultError('Calculation failed. Check your inputs.');
                    return;
                }

                let clearanceNeeded = radius * 0.6;
                let zoneName = getZoneName(zoneOrder);
                let freqDisplay = formatFrequency(freqHz);
                let totalDistanceDisplay = formatMeters(totalMeters);
                let d1Display = formatMeters(d1_m);
                let d2Display = formatMeters(d2_m);

                let resultHtml = `
                    <div>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <h6 class="fw-semibold mb-2">📊 Link Parameters</h6>
                                <table class="table table-sm table-borderless small mb-0 shadow-sm p-2 bg-light rounded">
                                    <tr><td>Total Distance:</td><td>${totalDistanceDisplay}</td></tr>
                                    <tr><td>Frequency:</td><td>${freqDisplay}</td></tr>
                                    <tr><td>Fresnel Zone:</td><td>n = ${zoneOrder} (${zoneName})</td></tr>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <h6 class="fw-semibold mb-2">📍 Fresnel Radius</h6>
                                <table class="table table-sm table-borderless small">
                                    <tr><td class="ps-0">d₁ (TX to point):</td><td>${d1Display}</td></tr>
                                    <tr><td class="ps-0">d₂ (point to RX):</td><td>${d2Display}</td></tr>
                                    <tr><td class="ps-0 fw-bold">Fresnel Radius R${zoneOrder}:</td><td class="fw-bold text-primary fs-5">${radius.toFixed(3)} m</td></tr>
                                </table>
                            </div>
                        </div>
                        <hr class="my-2">
                        <div class="mt-2">
                            <div class="d-flex justify-content-between small mb-1">
                                <span>✅ Required clearance (60% of R):</span>
                                <strong>${clearanceNeeded.toFixed(3)} m</strong>
                            </div>
                            <div class="progress" style="height: 6px;">
                                <div class="progress-bar bg-success" style="width: 60%;" role="progressbar"></div>
                            </div>
                            <p class="small text-secondary mt-2 mb-0">For reliable line-of-sight, ensure no obstacles penetrate within ${clearanceNeeded.toFixed(2)} m of the direct path. Obstructions inside the Fresnel zone cause signal attenuation.</p>
                        </div>
                    </div>
                `;
                document.getElementById('resultsContainer').innerHTML = resultHtml;
            }

            function getZoneName(n) {
                const zones = {1: 'Critical zone', 2: 'Secondary', 3: 'Tertiary', 4: 'Fourth zone'};
                return zones[n] || `${n}th zone`;
            }

            function showResultError(message) {
                document.getElementById('resultsContainer').innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <strong>⚠️ Error:</strong> ${message}
                    </div>
                `;
            }

            function resetForm() {
                document.getElementById('distance').value = '5';
                document.getElementById('distanceUnit').value = 'm';
                document.getElementById('frequency').value = '5800';
                document.getElementById('freqUnit').value = 'MHz';
                document.getElementById('zoneOrder').value = '1';
                document.getElementById('obsDistance').value = '';
                document.getElementById('obsUnit').value = 'm';
                updateCalculation();
            }

            // Event listeners
            document.getElementById('calculateBtn').addEventListener('click', updateCalculation);
            document.getElementById('resetBtn').addEventListener('click', resetForm);
            
            // Initialize on load
            window.addEventListener('DOMContentLoaded', () => {
                updateCalculation();
            });
        })();