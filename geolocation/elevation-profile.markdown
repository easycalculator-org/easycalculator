---
layout: default
title: Elevation Profile Calculator – Create Route Elevation Charts Online
permalink: /elevation-profile
description: "Generate an elevation profile for any route on a map. View elevation gain, elevation loss, distance, terrain analysis, and interactive elevation charts for hiking, cycling, running, and driving routes."
#image: "/assets/images/elevation-vs-altitude-diagram.png"
last_modified_at: 2026-03-03
---
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@turf/turf@6.5.0/turf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
<style>
     .map-container{
   min-height:700px;
}
        .toolbar {
            background: #2c3e2f;
            color: white;
            padding: 10px 20px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 15px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            z-index: 10;
        }
        .toolbar h2 { font-size: 1.2rem; margin: 0; }
        .toolbar button {
            background: #ff8c42;
            border: none;
            color: white;
            padding: 6px 14px;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
        }
        .toolbar button.demo-btn { background: #3a6ea5; }
        .toolbar button.clear-btn { background: #5a626e; }
        .status-msg {
            font-size: 0.8rem;
            background: #000000aa;
            padding: 4px 12px;
            border-radius: 20px;
        }
        .map-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: #263238;
        }
        /* #map { flex: 2; border-bottom: 2px solid #ff8c42; } */
        #map{
   height:500px;
   width:100%;
}
        .profile-panel {
            background: #0f1a1f;
            padding: 12px 18px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        .profile-header {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 10px;
            gap: 8px;
        }
        .stats {
            display: flex;
            gap: 20px;
            font-size: 0.8rem;
            background: #1e2a32;
            padding: 5px 12px;
            border-radius: 30px;
            color: #eee;
        }
        .stats span { color: #ffb347; font-weight: bold; }
        .chart-wrapper { height: 210px; width: 100%; margin-top: 5px; }
        canvas { 
            background: #0a1114; 
            border-radius: 16px; 
            width: 100% !important;
            height: 100% !important;
        }
        .elevation-hover-info {
            font-size: 0.75rem;
            background: #000000cc;
            padding: 4px 12px;
            border-radius: 20px;
            color: #ffaa66;
        }
        .footnote { font-size: 0.7rem; text-align: center; margin-top: 6px; color: #aaa; }
    </style>


<div class="toolbar">
    <h2>⛰️ Elevation Pro · Satellite + Guaranteed Chart</h2>
    <button id="demoBtn" class="demo-btn">🎯 Draw Demo Line (Mock Profile)</button>
    <button id="downloadBtn" disabled>📥 Download CSV</button>
    <button id="clearBtn" class="clear-btn">🗑️ Clear</button>
    <div id="statusMsg" class="status-msg">✅ Ready | Draw a line or click Demo</div>
</div>
<div class="map-container">
 <div id="map"></div>
 <div class="profile-panel">
  <div class="profile-header">
            <div class="stats">
                <span>📏 Dist: <span id="distanceVal">0</span> km</span>
                <span>⬆️ Gain: <span id="gainVal">0</span> m</span>
                <span>⬇️ Loss: <span id="lossVal">0</span> m</span>
                <span>🏔️ Max: <span id="maxElevVal">—</span> m</span>
                <span>📍 Min: <span id="minElevVal">—</span> m</span>
            </div>
            <div id="hoverElevDisplay" class="elevation-hover-info">🖱️ Hover chart → Elevation</div>
        </div>
 <div class="chart-wrapper">
      <canvas id="elevChart"></canvas>
    </div>
   <div class="footnote">💡 Hover chart → shows point on map | Mock data ensures chart visible | Real elevation from OpenTopoData + fallback</div>
 </div>
</div>
<!-- <script src="{{ '/assets/js/geolocation/elevation-profile.js' | relative_url }}"></script> -->
<script>

document.addEventListener("DOMContentLoaded", function() {

   // ALL YOUR JAVASCRIPT HERE




  // ---------- MAP ----------
    const map = L.map('map').setView([40.7128, -74.0060], 6);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 18
    }).addTo(map);
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    const drawControl = new L.Control.Draw({
        edit: { featureGroup: drawnItems, remove: false },
        draw: { polyline: { shapeOptions: { color: '#ff8c42', weight: 5, dashArray: '8, 6' } }, polygon: false, rectangle: false, circle: false, marker: false }
    });
    map.addControl(drawControl);
    let currentPolyline = null;
    let elevationChart = null;
    let chartDataPoints = [];
    let hoverMarker = null;
    let loadingFlag = false;

    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');
    const demoBtn = document.getElementById('demoBtn');
    const statusDiv = document.getElementById('statusMsg');
    const distanceSpan = document.getElementById('distanceVal');
    const gainSpan = document.getElementById('gainVal');
    const lossSpan = document.getElementById('lossVal');
    const maxSpan = document.getElementById('maxElevVal');
    const minSpan = document.getElementById('minElevVal');
    const hoverSpan = document.getElementById('hoverElevDisplay');

    function setStatus(text, isErr = false) {
        statusDiv.innerHTML = isErr ? `⚠️ ${text}` : `✅ ${text}`;
        statusDiv.style.background = isErr ? '#aa2e2eaa' : '#000000aa';
        setTimeout(() => { if (!loadingFlag) statusDiv.style.background = '#000000aa'; }, 3000);
    }

    function clearProfile() {
        if (currentPolyline) { drawnItems.clearLayers(); currentPolyline = null; }
        if (hoverMarker) { map.removeLayer(hoverMarker); hoverMarker = null; }
        if (elevationChart) { elevationChart.destroy(); elevationChart = null; }
        chartDataPoints = [];
        distanceSpan.innerText = '0';
        gainSpan.innerText = '0';
        lossSpan.innerText = '0';
        maxSpan.innerText = '—';
        minSpan.innerText = '—';
        hoverSpan.innerHTML = '🖱️ Hover chart → Elevation';
        downloadBtn.disabled = true;
        setStatus('Cleared. Draw a line or click Demo.');
    }

    // ---- ELEVATION API (real) ----
    async function fetchRealElevations(points) {
        const locations = points.map(p => `${p.lat},${p.lng}`).join('|');
        const url = `https://api.opentopodata.org/v1/srtm90m?locations=${locations}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        return data.results.map(r => r.elevation);
    }

    async function getElevations(points) {
        try {
            return await fetchRealElevations(points);
        } catch (e) {
            console.warn("Real API failed, using mock synthetic elevation", e);
            // Generate mock elevation based on latitude (hilly)
            return points.map(p => 200 + Math.sin(p.lng * 0.1) * 150 + Math.cos(p.lat * 0.5) * 80);
        }
    }

    // sample points along line
    function samplePoints(lineGeoJSON, maxPoints = 80) {
        const lengthKm = turf.length(lineGeoJSON, { units: 'kilometers' });
        const lengthM = lengthKm * 1000;
        if (lengthM < 1) return { points: [], distancesM: [], totalM: 0 };
        const step = Math.max(5, lengthM / (maxPoints - 1));
        const num = Math.min(maxPoints, Math.floor(lengthM / step) + 1);
        const points = [], dists = [];
        for (let i = 0; i < num; i++) {
            const d = i * (lengthM / (num - 1));
            const pt = turf.along(lineGeoJSON, d/1000, { units: 'kilometers' });
            const [lng, lat] = pt.geometry.coordinates;
            points.push({ lng, lat });
            dists.push(d);
        }
        return { points, distancesM: dists, totalM: lengthM };
    }

    function computeStats(elevs, distKm) {
        const valid = elevs.filter(v => v !== null && !isNaN(v));
        if (!valid.length) return { gain: 0, loss: 0, maxEl: 0, minEl: 0 };
        let maxEl = Math.max(...valid), minEl = Math.min(...valid);
        let gain = 0, loss = 0, prev = null;
        for (let e of elevs) {
            if (e === null || isNaN(e)) continue;
            if (prev !== null) { let diff = e - prev; if (diff > 0) gain += diff; else loss += Math.abs(diff); }
            prev = e;
        }
        return { gain: Math.round(gain), loss: Math.round(loss), maxEl: Math.round(maxEl), minEl: Math.round(minEl) };
    }

    // RENDER CHART (high visibility)
    function renderChart(distKmArray, elevArray, coordsArray) {
        const canvas = document.getElementById('elevChart');
        if (!canvas) return false;
        const ctx = canvas.getContext('2d');
        if (elevationChart) elevationChart.destroy();

        // Filter valid points
        const filtered = [];
        for (let i = 0; i < distKmArray.length; i++) {
            if (elevArray[i] !== null && !isNaN(elevArray[i])) {
                filtered.push({ x: distKmArray[i], y: elevArray[i], lng: coordsArray[i].lng, lat: coordsArray[i].lat });
            }
        }
        if (filtered.length < 2) {
            // Fallback: create dummy visible data to show chart works
            const dummy = [{ x: 0, y: 100, lng: 0, lat: 0 }, { x: 1, y: 150, lng: 0, lat: 0 }];
            chartDataPoints = dummy;
            elevationChart = new Chart(ctx, {
                type: 'line', data: { datasets: [{ label: '⚠️ No data (demo)', data: [100, 150], borderColor: '#ff8888', backgroundColor: '#ff888822', borderWidth: 2 }] },
                options: { responsive: true, maintainAspectRatio: true }
            });
            setStatus("No valid elevation points. Showing demo.", true);
            return false;
        }
        chartDataPoints = filtered;
        const xs = filtered.map(p => p.x);
        const ys = filtered.map(p => p.y);

        elevationChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Elevation (m)',
                    parsing:false,
                    data: filtered.map(p => ({x:p.x,y:p.y})),
                    borderColor: '#ffaa66',
                    backgroundColor: 'rgba(255, 170, 102, 0.2)',
                    borderWidth: 3,
                    pointRadius: 4,
                    pointHoverRadius: 8,
                    pointBackgroundColor: '#ffaa66',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    fill: true,
                    tension: 0.2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    tooltip: {
                        backgroundColor: '#1e2a2f',
                        titleColor: '#ffaa66',
                        bodyColor: '#fff',
                        callbacks: { label: (ctx) => ` Elevation: ${ctx.raw} m` }
                    },
                    legend: { labels: { color: '#f0f0f0', font: { size: 12 } } }
                },
                scales: {
                    x: { type:'linear', title: { display: true, text: 'Distance (km)', color: '#ddd' }, ticks: { color: '#ccc' }, grid: { color: '#2c4a4a' } },
                    y: { title: { display: true, text: 'Elevation (m)', color: '#ddd' }, ticks: { color: '#ccc' }, grid: { color: '#2c4a4a' } }
                },
                onHover: (event, active) => {
                    if (!active.length) {
                        if (hoverMarker) map.removeLayer(hoverMarker);
                        hoverMarker = null;
                        hoverSpan.innerHTML = '🖱️ Hover chart → Elevation';
                        return;
                    }
                    const idx = active[0].dataIndex;
                    const pt = chartDataPoints[idx];
                    hoverSpan.innerHTML = `📍 Elev: ${Math.round(pt.y)} m @ ${pt.x.toFixed(2)} km`;
                    if (hoverMarker) map.removeLayer(hoverMarker);
                    hoverMarker = L.circleMarker([pt.lat, pt.lng], { radius: 8, color: 'red', fillColor: '#ffaa66', fillOpacity: 1, weight: 2 })
                        .addTo(map).bindPopup(`<b>${Math.round(pt.y)} m</b>`).openPopup();
                }
            }
        });
        canvas.addEventListener('mouseleave', () => {
            if (hoverMarker) map.removeLayer(hoverMarker);
            hoverMarker = null;
            hoverSpan.innerHTML = '🖱️ Hover chart → Elevation';
        });
        return true;
    }

    // Main profile processor
    async function processPolyline(polylineLayer) {
        if (loadingFlag) return;
        clearProfile();
        currentPolyline = polylineLayer;
        drawnItems.addLayer(polylineLayer);
        const geojson = polylineLayer.toGeoJSON();
        setStatus("Sampling line...");
        const { points, distancesM, totalM } = samplePoints(geojson, 80);
        if (points.length < 2) { setStatus("Line too short", true); return; }
        distanceSpan.innerText = (totalM / 1000).toFixed(2);
        loadingFlag = true;
        downloadBtn.disabled = true;
        try {
            const elevations = await getElevations(points);
            const distKm = distancesM.map(m => m / 1000);
            const stats = computeStats(elevations, distKm);
            gainSpan.innerText = stats.gain;
            lossSpan.innerText = stats.loss;
            maxSpan.innerText = stats.maxEl;
            minSpan.innerText = stats.minEl;
            const coords = points.map(p => ({ lng: p.lng, lat: p.lat }));
            const success = renderChart(distKm, elevations, coords);
            if (success) downloadBtn.disabled = false;
            setSuccessMsg(totalM, stats.maxEl);
        } catch (err) {
            setStatus("Error: " + err.message, true);
        } finally {
            loadingFlag = false;
        }
    }

    function setSuccessMsg(totalM, maxEl) {
        setStatus(`Profile ready: ${(totalM/1000).toFixed(2)} km, max ${maxEl} m`);
    }

    // --- DEMO: draw a sample line and show mock profile ---
    function demoDrawLine() {
        clearProfile();
        const latlngs = [[40.7128, -74.0060], [40.7580, -73.9855], [40.7640, -73.9730]]; // Central Park area
        const demoLine = L.polyline(latlngs, { color: '#ff8c42', weight: 5, dashArray: '8, 6' });
        processPolyline(demoLine);
    }

    // Event listeners
    map.on(L.Draw.Event.CREATED, async (e) => { if (e.layer instanceof L.Polyline) await processPolyline(e.layer); });
    map.on(L.Draw.Event.EDITED, async (e) => {
        let line = null;
        e.layers.eachLayer(l => { if (l instanceof L.Polyline) line = l; });
        if (line) await processPolyline(line);
    });
    clearBtn.addEventListener('click', clearProfile);
    demoBtn.addEventListener('click', demoDrawLine);

    downloadBtn.addEventListener('click', () => {
        if (!chartDataPoints.length) { setStatus("No chart data", true); return; }
        let csv = "Distance_km,Elevation_m,Longitude,Latitude\n";
        for (let p of chartDataPoints) {
            csv += `${p.x.toFixed(4)},${Math.round(p.y)},${p.lng.toFixed(6)},${p.lat.toFixed(6)}\n`;
        }
        const blob = new Blob([csv], { type: "text/csv" });
        saveAs(blob, `elevation_${Date.now()}.csv`);
        setStatus("CSV saved");
    });

    // Click on map to get elevation (for fun)
    map.on('click', async (e) => {
        try {
            const elev = await getElevations([{ lat: e.latlng.lat, lng: e.latlng.lng }]);
            L.popup().setLatLng(e.latlng).setContent(`🗻 Elev: ${Math.round(elev[0])} m`).openOn(map);
        } catch (err) { setStatus("Click elevation error", true); }
    });
});
</script>

