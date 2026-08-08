  (function() {
      'use strict';

      //DOM references 
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
      const statFeatures = document.getElementById('statFeatures');
      const statLength = document.getElementById('statLength');
      const statArea = document.getElementById('statArea');
      const statCoords = document.getElementById('statCoords');
      const featureTableBody = document.getElementById('featureTableBody');
      const featureCountBadge = document.getElementById('featureCountBadge');
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
      let geoJsonLayer = null;
      let isLoaded = false;
      let rawGeoJson = null;
      let featureData = []; // store for table
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

      function formatLength(meters) {
        if (!meters || isNaN(meters)) return '—';
        if (meters < 1000) return meters.toFixed(1) + ' m';
        return (meters / 1000).toFixed(2) + ' km';
      }

      function formatArea(sqMeters) {
        if (!sqMeters || isNaN(sqMeters)) return '—';
        if (sqMeters < 10000) return sqMeters.toFixed(1) + ' m²';
        return (sqMeters / 1000000).toFixed(2) + ' km²';
      }
      function resetStats() {
        statFeatures.textContent = '—';
        statLength.textContent = '—';
        statArea.textContent = '—';
        statCoords.textContent = '—';
        featureTableBody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">No features loaded</td></tr>';
        featureCountBadge.textContent = '0';
      }
      function computeStats(geojson) {
        let totalLength = 0;
        let totalArea = 0;
        let coordCount = 0;
        let featureCount = 0;
        function processCoords(coords, geomType) {
          if (!coords || coords.length === 0) return;
          if (geomType === 'LineString' || geomType === 'MultiLineString') {
            let pts = [];
            if (geomType === 'LineString') pts = coords;
            else if (geomType === 'MultiLineString') {
              coords.forEach(line => {
                totalLength += calculateLength(line);
              });
              return;
            }
            if (pts.length >= 2) {
              totalLength += calculateLength(pts);
            }
          } else if (geomType === 'Polygon' || geomType === 'MultiPolygon') {
            let rings = [];
            if (geomType === 'Polygon') rings = coords;
            else if (geomType === 'MultiPolygon') {
              coords.forEach(poly => {
                poly.forEach(ring => {
                  totalArea += calculateArea(ring);
                });
              });
              return;
            }
            if (rings.length > 0) {
              totalArea += calculateArea(rings[0]); 
            }
          }
          function countCoords(c) {
            if (Array.isArray(c) && c.length > 0 && Array.isArray(c[0]) && typeof c[0][0] === 'number') {
              coordCount += c.length;
            } else if (Array.isArray(c)) {
              c.forEach(item => countCoords(item));
            }
          }
          countCoords(coords);
        }
        function calculateLength(coords) {
          let len = 0;
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
              len += R * c1;
            }
          }
          return len;
        }
        function calculateArea(ring) {
          if (!ring || ring.length < 3) return 0;
          let area = 0;
          for (let i = 0; i < ring.length - 1; i++) {
            const p1 = ring[i];
            const p2 = ring[i + 1];
            if (p1 && p2 && p1.length >= 2 && p2.length >= 2) {
              area += (p2[0] - p1[0]) * (p1[1] + p2[1]);
            }
          }
          area = Math.abs(area) / 2;
          const avgLat = (ring.reduce((s, p) => s + p[1], 0) / ring.length) * Math.PI / 180;
          const scale = 111320 * Math.cos(avgLat); 
          const areaM2 = area * (111320 * 111320); 
          return areaM2 * Math.cos(avgLat); 
        }

        function traverse(geom) {
          if (!geom) return;
          if (geom.type === 'LineString') {
            processCoords(geom.coordinates, 'LineString');
          } else if (geom.type === 'MultiLineString') {
            processCoords(geom.coordinates, 'MultiLineString');
          } else if (geom.type === 'Polygon') {
            processCoords(geom.coordinates, 'Polygon');
          } else if (geom.type === 'MultiPolygon') {
            processCoords(geom.coordinates, 'MultiPolygon');
          } else if (geom.type === 'GeometryCollection') {
            geom.geometries.forEach(g => traverse(g));
          } else if (geom.type === 'Point' || geom.type === 'MultiPoint') {
            // count coordinates
            if (geom.type === 'Point') coordCount += 1;
            else if (geom.type === 'MultiPoint') coordCount += geom.coordinates.length;
          }
        }
        let features = [];
        if (geojson.type === 'FeatureCollection') {
          featureCount = geojson.features.length;
          geojson.features.forEach((f, idx) => {
            features.push({ index: idx, properties: f.properties || {}, geometry: f.geometry });
            if (f.geometry) traverse(f.geometry);
          });
        } else if (geojson.type === 'Feature') {
          featureCount = 1;
          features.push({ index: 0, properties: geojson.properties || {}, geometry: geojson.geometry });
          if (geojson.geometry) traverse(geojson.geometry);
        } else {
          featureCount = 1;
          features.push({ index: 0, properties: {}, geometry: geojson });
          traverse(geojson);
        }
        return {
          featureCount,
          totalLength,
          totalArea,
          coordCount,
          features
        };
      }
      function updateStatsAndTable(geojson) {
        if (!geojson) {
          resetStats();
          return;
        }
        const stats = computeStats(geojson);
        statFeatures.textContent = stats.featureCount;
        statLength.textContent = formatLength(stats.totalLength);
        statArea.textContent = formatArea(stats.totalArea);
        statCoords.textContent = stats.coordCount;
        featureData = stats.features;
        featureCountBadge.textContent = stats.featureCount;
        if (stats.featureCount === 0) {
          featureTableBody.innerHTML = '<tr><td colspan="3" class="text-center text-muted">No features</td></tr>';
          return;
        }
        let rows = '';
        stats.features.forEach((f, idx) => {
          const props = f.properties || {};
          const propStr = Object.keys(props).map(k => `${k}: ${props[k]}`).join(', ') || '—';
          const geomType = f.geometry ? f.geometry.type : '—';
          rows += `<tr class="feature-row" data-index="${idx}">
                  <td>${idx + 1}</td>
                  <td><span class="small">${propStr}</span></td>
                  <td><span class="badge bg-secondary">${geomType}</span></td>
                </tr>`;
        });
        featureTableBody.innerHTML = rows;
        document.querySelectorAll('.feature-row').forEach(row => {
          row.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            const feature = featureData[idx];
            if (feature && feature.geometry) {
              const tempLayer = L.geoJSON(feature.geometry);
              const bounds = tempLayer.getBounds();
              if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [40, 40] });
                document.querySelectorAll('.feature-row').forEach(r => r.classList.remove('active'));
                this.classList.add('active');
              } else {
                const coords = feature.geometry.coordinates;
                if (coords && coords.length >= 2) {
                  map.setView([coords[1], coords[0]], 15);
                }
              }
            }
          });
        });
      }
      function loadGeoJSON(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          try {
            const jsonText = e.target.result;
            const geojson = JSON.parse(jsonText);
            console.log('✅ GeoJSON parsed:', geojson);
            if (!geojson.type || (geojson.type !== 'Feature' && geojson.type !== 'FeatureCollection' && !geojson
                .geometry)) {
              throw new Error('Invalid GeoJSON: missing type or geometry.');
            }

            // Remove old layer
            if (geoJsonLayer) {
              map.removeLayer(geoJsonLayer);
              geoJsonLayer = null;
            }
            const defaultStyle = {
              color: '#2c7be5',
              weight: 3,
              opacity: 0.8,
              fillColor: '#2c7be5',
              fillOpacity: 0.2,
            };
            geoJsonLayer = L.geoJSON(geojson, {
              style: function(feature) {
                // if feature has a 'color' property, use it
                if (feature.properties && feature.properties.color) {
                  return { color: feature.properties.color, weight: 3, opacity: 0.8, fillColor: feature.properties
                      .color, fillOpacity: 0.2 };
                }
                return defaultStyle;
              },
              pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 6,
                  fillColor: feature.properties && feature.properties.color ? feature.properties.color :
                    '#2c7be5',
                  color: '#fff',
                  weight: 2,
                  opacity: 1,
                  fillOpacity: 0.9
                });
              },
              onEachFeature: function(feature, layer) {
                if (feature.properties) {
                  const props = feature.properties;
                  let popupContent = '';
                  for (const [key, val] of Object.entries(props)) {
                    popupContent += `<strong>${key}</strong>: ${val}<br/>`;
                  }
                  if (popupContent) {
                    layer.bindPopup(popupContent);
                  }
                }
              }
            }).addTo(map);
            rawGeoJson = geojson;
            isLoaded = true;
            emptyState.style.display = 'none';
            try {
              const bounds = geoJsonLayer.getBounds();
              if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [50, 50] });
              } else {
                // single point
                const center = geoJsonLayer.getBounds().getCenter();
                if (center.lat && center.lng) {
                  map.setView([center.lat, center.lng], 14);
                }
              }
            } catch (_) {
              let firstCoord = null;
              const getFirst = (geom) => {
                if (geom.type === 'Point') return geom.coordinates;
                if (geom.type === 'LineString' || geom.type === 'Polygon') return geom.coordinates[0];
                if (geom.type === 'MultiPoint' || geom.type === 'MultiLineString' || geom.type === 'MultiPolygon')
                  return geom.coordinates[0] && geom.coordinates[0][0];
                return null;
              };
              if (geojson.type === 'Feature' && geojson.geometry) {
                firstCoord = getFirst(geojson.geometry);
              } else if (geojson.type === 'FeatureCollection' && geojson.features.length > 0) {
                firstCoord = getFirst(geojson.features[0].geometry);
              }
              if (firstCoord && firstCoord.length >= 2) {
                map.setView([firstCoord[1], firstCoord[0]], 14);
              }
            }

            updateStatsAndTable(geojson);
            showToast(`GeoJSON loaded: ${featureData.length} features`, 'success');

          } catch (err) {
            console.error('❌ GeoJSON load error:', err);
            showToast('Error loading GeoJSON: ' + err.message, 'error');
            resetStats();
            emptyState.style.display = 'flex';
            isLoaded = false;
          }
        };
        reader.onerror = function() {
          showToast('Failed to read file.', 'error');
        };
        reader.readAsText(file);
      }
      function clearTrack() {
        if (geoJsonLayer) {
          map.removeLayer(geoJsonLayer);
          geoJsonLayer = null;
        }
        rawGeoJson = null;
        isLoaded = false;
        emptyState.style.display = 'flex';
        resetStats();
        map.setView([48.8566, 2.3522], 13);
        showToast('Cleared.', 'success');
      }
      async function downloadPng() {
        if (!isLoaded || !geoJsonLayer) {
          showToast('Please load a GeoJSON file first.', 'error');
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
          link.download = 'geojson-map.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
          showToast('PNG downloaded!', 'success');
        } catch (err) {
          container.style.overflow = originalOverflow;
          showToast('PNG capture failed: ' + err.message, 'error');
        }
      }
      function handleFile(file) {
        if (!file) return;
        const ext = file.name.split('.').pop().toLowerCase();
        if (!['geojson', 'json'].includes(ext)) {
          showToast('Please select a .geojson or .json file.', 'error');
          return;
        }
        fileName.textContent = '📄 ' + file.name;
        fileName.style.display = 'block';
        dropZone.querySelector('.text-muted').style.display = 'none';
        loadGeoJSON(file);
      }
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
        if (geoJsonLayer && isLoaded) {
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
          showToast('Please load a GeoJSON first.', 'error');
        }
      });
      btnDownloadPng.addEventListener('click', downloadPng);
      btnClearTrack.addEventListener('click', clearTrack);
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
      resetStats();
      emptyState.style.display = 'flex';
      setTimeout(() => map.invalidateSize(), 100);
      console.log('🗺️ GeoJSON Viewer ready — upload a .geojson file to begin.');
      console.log('💡 Keyboard: Ctrl+O = upload, Ctrl+Shift+D = download PNG');

    })();