    (function() {
            'use strict';

            // ─── DOM refs ───
            const mapEl = document.getElementById('map');
            const emptyState = document.getElementById('emptyState');
            const fileInput = document.getElementById('fileInput');
            const dropZone = document.getElementById('dropZone');
            const fileName = document.getElementById('fileName');
            const btnZoomIn = document.getElementById('btnZoomIn');
            const btnZoomOut = document.getElementById('btnZoomOut');
            const btnFitBounds = document.getElementById('btnFitBounds');
            const btnDownloadPng = document.getElementById('btnDownloadPng');
            const btnClearTrack = document.getElementById('btnClearTrack');
            const statDistance = document.getElementById('statDistance');
            const statElevation = document.getElementById('statElevation');
            const statTime = document.getElementById('statTime');
            const statPoints = document.getElementById('statPoints');

            // ─── Map ───
            const map = L.map(mapEl, {
                center: [48.8566, 2.3522],
                zoom: 13,
                zoomControl: false,
                attributionControl: true,
            });
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }).addTo(map);

            // ─── State ───
            let geoJsonLayer = null;
            let isTrackLoaded = false;
            let rawGeoJson = null; // store for stats

            // ─── Helpers ───

            function showToast(message, type = 'success') {
                const container = document.getElementById('toastContainer');
                const icon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';
                const html = `
                    <div class="toast-custom toast-${type} show" role="alert">
                        <div class="toast-body">
                            <i class="bi ${icon}"></i>
                            <span>${message}</span>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
                const toastEl = container.lastElementChild;
                setTimeout(() => {
                    toastEl.classList.remove('show');
                    setTimeout(() => toastEl.remove(), 400);
                }, 4000);
            }

            function formatDistance(meters) {
                if (!meters || isNaN(meters)) return '—';
                if (meters < 1000) return meters.toFixed(0) + ' m';
                return (meters / 1000).toFixed(2) + ' km';
            }

            function formatElevation(m) {
                if (!m || isNaN(m)) return '—';
                return m.toFixed(0) + ' m';
            }

            function formatTime(seconds) {
                if (!seconds || isNaN(seconds) || seconds < 0) return '—';
                const hrs = Math.floor(seconds / 3600);
                const mins = Math.floor((seconds % 3600) / 60);
                const secs = Math.floor(seconds % 60);
                if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
                return `${mins}m ${secs}s`;
            }

            function resetStats() {
                statDistance.textContent = '—';
                statElevation.textContent = '—';
                statTime.textContent = '—';
                statPoints.textContent = '—';
            }

            // ─── Compute stats from GeoJSON ───

            function computeStats(geojson) {
                let totalDist = 0;
                let totalElevGain = 0;
                let totalElevLoss = 0;
                let pointCount = 0;
                let hasElevation = false;

                function processCoords(coords) {
                    if (!coords || coords.length === 0) return;
                    // coords is array of [lng, lat, alt?]
                    for (let i = 0; i < coords.length; i++) {
                        const c = coords[i];
                        if (c.length >= 3 && c[2] !== undefined && !isNaN(c[2])) {
                            hasElevation = true;
                        }
                    }
                    // distance
                    for (let i = 1; i < coords.length; i++) {
                        const a = coords[i - 1];
                        const b = coords[i];
                        if (a && b && a.length >= 2 && b.length >= 2) {
                            const lat1 = a[1],
                                lng1 = a[0];
                            const lat2 = b[1],
                                lng2 = b[0];
                            const R = 6371000;
                            const dLat = (lat2 - lat1) * Math.PI / 180;
                            const dLng = (lng2 - lng1) * Math.PI / 180;
                            const lat1r = lat1 * Math.PI / 180;
                            const lat2r = lat2 * Math.PI / 180;
                            const a1 = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                Math.cos(lat1r) * Math.cos(lat2r) *
                                Math.sin(dLng / 2) * Math.sin(dLng / 2);
                            const c1 = 2 * Math.atan2(Math.sqrt(a1), Math.sqrt(1 - a1));
                            totalDist += R * c1;

                            // elevation gain/loss
                            if (hasElevation) {
                                const alt1 = a[2] || 0;
                                const alt2 = b[2] || 0;
                                const diff = alt2 - alt1;
                                if (diff > 0) totalElevGain += diff;
                                else totalElevLoss += Math.abs(diff);
                            }
                        }
                    }
                    pointCount += coords.length;
                }

                function traverse(geom) {
                    if (!geom) return;
                    if (geom.type === 'LineString') {
                        processCoords(geom.coordinates);
                    } else if (geom.type === 'MultiLineString') {
                        geom.coordinates.forEach(line => processCoords(line));
                    } else if (geom.type === 'Polygon') {
                        geom.coordinates.forEach(ring => processCoords(ring));
                    } else if (geom.type === 'MultiPolygon') {
                        geom.coordinates.forEach(poly => poly.forEach(ring => processCoords(ring)));
                    } else if (geom.type === 'GeometryCollection') {
                        geom.geometries.forEach(g => traverse(g));
                    } else if (geom.type === 'Point' || geom.type === 'MultiPoint') {
                        // not counted for distance, but count points
                        if (geom.type === 'Point') pointCount++;
                        else if (geom.type === 'MultiPoint') pointCount += geom.coordinates.length;
                    }
                }

                if (geojson.type === 'FeatureCollection') {
                    geojson.features.forEach(feature => {
                        if (feature.geometry) traverse(feature.geometry);
                    });
                } else if (geojson.type === 'Feature') {
                    traverse(geojson.geometry);
                } else {
                    traverse(geojson);
                }

                return {
                    distance: totalDist,
                    elevationGain: totalElevGain,
                    elevationLoss: totalElevLoss,
                    pointCount: pointCount,
                    hasElev: hasElevation
                };
            }

            function updateStatsFromGeoJSON(geojson) {
                if (!geojson) {
                    resetStats();
                    return;
                }
                const stats = computeStats(geojson);
                statDistance.textContent = formatDistance(stats.distance);
                statElevation.textContent = stats.hasElev ? formatElevation(stats.elevationGain) : '—';
                statTime.textContent = '—'; // KML time not handled
                statPoints.textContent = stats.pointCount || '—';
            }

            // ─── Load KML ───

            function loadKML(file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    try {
                        const kmlText = e.target.result;
                        // Parse using DOMParser
                        const parser = new DOMParser();
                        const kmlDoc = parser.parseFromString(kmlText, 'text/xml');
                        const geojson = togeojson.kml(kmlDoc);

                        if (!geojson || (geojson.type === 'FeatureCollection' && geojson.features.length === 0)) {
                            showToast('KML contains no features.', 'error');
                            return;
                        }

                        // Remove old layer
                        if (geoJsonLayer) {
                            map.removeLayer(geoJsonLayer);
                            geoJsonLayer = null;
                        }

                        // Style
                        const style = {
                            color: '#2c7be5',
                            weight: 4,
                            opacity: 0.8,
                            fillColor: '#2c7be5',
                            fillOpacity: 0.2,
                        };

                        geoJsonLayer = L.geoJSON(geojson, {
                            style: style,
                            pointToLayer: function(feature, latlng) {
                                return L.circleMarker(latlng, {
                                    radius: 6,
                                    fillColor: '#2c7be5',
                                    color: '#fff',
                                    weight: 2,
                                    opacity: 1,
                                    fillOpacity: 0.9
                                });
                            },
                            onEachFeature: function(feature, layer) {
                                if (feature.properties && feature.properties.name) {
                                    layer.bindPopup(feature.properties.name);
                                }
                            }
                        }).addTo(map);

                        rawGeoJson = geojson;
                        isTrackLoaded = true;
                        emptyState.style.display = 'none';

                        // Fit bounds
                        try {
                            const bounds = geoJsonLayer.getBounds();
                            if (bounds.isValid()) {
                                map.fitBounds(bounds, { padding: [50, 50] });
                            }
                        } catch (_) { /* ignore */ }

                        updateStatsFromGeoJSON(geojson);
                        showToast('KML loaded successfully!', 'success');

                    } catch (err) {
                        console.error('KML error:', err);
                        showToast('Failed to parse KML: ' + err.message, 'error');
                        resetStats();
                        emptyState.style.display = 'flex';
                        isTrackLoaded = false;
                    }
                };
                reader.onerror = function() {
                    showToast('Failed to read file.', 'error');
                };
                reader.readAsText(file);
            }

            // ─── Clear ───

            function clearTrack() {
                if (geoJsonLayer) {
                    map.removeLayer(geoJsonLayer);
                    geoJsonLayer = null;
                }
                rawGeoJson = null;
                isTrackLoaded = false;
                emptyState.style.display = 'flex';
                resetStats();
                map.setView([48.8566, 2.3522], 13);
                showToast('Track cleared.', 'success');
            }

            // ─── Download PNG ───

            async function downloadPng() {
                if (!isTrackLoaded || !geoJsonLayer) {
                    showToast('Please load a KML track first.', 'error');
                    return;
                }
                const container = document.getElementById('map-container');
                const originalOverflow = container.style.overflow;
                container.style.overflow = 'hidden';
                try {
                    const emptyWasVisible = emptyState.style.display !== 'none';
                    if (emptyWasVisible) emptyState.style.display = 'none';
                    const canvas = await html2canvas(container, {
                        scale: 2,
                        useCORS: true,
                        backgroundColor: '#e8ecf1',
                        logging: false,
                        allowTaint: false,
                    });
                    if (emptyWasVisible) emptyState.style.display = 'flex';
                    container.style.overflow = originalOverflow;
                    const link = document.createElement('a');
                    link.download = 'kml-map.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    showToast('PNG downloaded!', 'success');
                } catch (err) {
                    container.style.overflow = originalOverflow;
                    showToast('PNG capture failed: ' + err.message, 'error');
                }
            }

            // ─── File handling ───

            function handleFile(file) {
                if (!file) return;
                const ext = file.name.split('.').pop().toLowerCase();
                if (ext !== 'kml') {
                    showToast('Please select a .kml file.', 'error');
                    return;
                }
                fileName.textContent = '📄 ' + file.name;
                fileName.style.display = 'block';
                dropZone.querySelector('.text-muted').style.display = 'none';
                loadKML(file);
            }

            // ─── Events ───

            dropZone.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', function(e) {
                if (this.files && this.files.length > 0) {
                    handleFile(this.files[0]);
                }
                this.value = '';
            });

            dropZone.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.classList.add('dragover');
            });
            dropZone.addEventListener('dragleave', function(e) {
                e.preventDefault();
                this.classList.remove('dragover');
            });
            dropZone.addEventListener('drop', function(e) {
                e.preventDefault();
                this.classList.remove('dragover');
                const files = e.dataTransfer.files;
                if (files && files.length > 0) {
                    handleFile(files[0]);
                }
            });

            btnZoomIn.addEventListener('click', () => map.zoomIn());
            btnZoomOut.addEventListener('click', () => map.zoomOut());
            btnFitBounds.addEventListener('click', function() {
                if (geoJsonLayer && isTrackLoaded) {
                    try {
                        const bounds = geoJsonLayer.getBounds();
                        if (bounds.isValid()) {
                            map.fitBounds(bounds, { padding: [50, 50] });
                        } else {
                            showToast('No valid bounds.', 'error');
                        }
                    } catch (_) {
                        showToast('No track to fit.', 'error');
                    }
                } else {
                    showToast('Please load a KML first.', 'error');
                }
            });

            btnDownloadPng.addEventListener('click', downloadPng);
            btnClearTrack.addEventListener('click', clearTrack);

            // Keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && e.key === 'o') {
                    e.preventDefault();
                    fileInput.click();
                }
                if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                    e.preventDefault();
                    downloadPng();
                }
            });

            // ─── Init ───
            resetStats();
            emptyState.style.display = 'flex';
            setTimeout(() => map.invalidateSize(), 100);

            console.log('🗺️ KML Viewer ready — upload a .kml file to begin.');
            console.log('💡 Keyboard: Ctrl+O = upload, Ctrl+Shift+D = download PNG');

        })();