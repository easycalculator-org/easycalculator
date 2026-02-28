 (function() {
      // ------------------------------------------------------------
      // helper functions
      const toRad = (deg) => deg * Math.PI / 180;
      const toDeg = (rad) => rad * 180 / Math.PI;

      function parseLatLon(value) {
        const num = parseFloat(value);
        return isNaN(num) ? null : num;
      }

      // azimuth + distance (haversine)
      function computeAzimuthDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const φ1 = toRad(lat1), φ2 = toRad(lat2);
        const Δφ = toRad(lat2 - lat1);
        const Δλ = toRad(lon2 - lon1);

        const a = Math.sin(Δφ/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin(Δλ/2)**2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c;

        const y = Math.sin(Δλ) * Math.cos(φ2);
        const x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
        let azimuth = toDeg(Math.atan2(y, x));
        azimuth = (azimuth + 360) % 360;
        return { azimuth, distance };
      }

      // ------------------------------------------------------------
      // map initialization (default view ~center of US)
      const map = L.map('map').setView([39.8283, -98.5795], 4);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      let markerA = null, markerB = null, line = null, angleMarker = null;

      function updateMapVisuals() {
        const latA = parseLatLon(document.getElementById('latA').value);
        const lonA = parseLatLon(document.getElementById('lonA').value);
        const latB = parseLatLon(document.getElementById('latB').value);
        const lonB = parseLatLon(document.getElementById('lonB').value);

        document.getElementById('mapALabel').innerText = (latA!==null && lonA!==null) ? latA.toFixed(4)+', '+lonA.toFixed(4) : '—';
        document.getElementById('mapBLabel').innerText = (latB!==null && lonB!==null) ? latB.toFixed(4)+', '+lonB.toFixed(4) : '—';

        if (markerA) map.removeLayer(markerA);
        if (markerB) map.removeLayer(markerB);
        if (line) map.removeLayer(line);
        if (angleMarker) map.removeLayer(angleMarker);

        if (latA === null || lonA === null || latB === null || lonB === null) {
          document.getElementById('mapAzimuthLabel').innerText = '—';
          return;
        }

        markerA = L.marker([latA, lonA], {icon: L.divIcon({className: 'bg-primary rounded-circle p-2', html: '<span style="color:white; font-weight:bold;">A</span>'})}).addTo(map);
        markerB = L.marker([latB, lonB], {icon: L.divIcon({className: 'bg-success rounded-circle p-2', html: '<span style="color:white; font-weight:bold;">B</span>'})}).addTo(map);
        line = L.polyline([[latA, lonA], [latB, lonB]], {color: 'darkblue', weight: 4, opacity: 0.7}).addTo(map);

        let azimuthText = '0°';
        if (latA === latB && lonA === lonB) {
          azimuthText = '0°';
        } else {
          const { azimuth } = computeAzimuthDistance(latA, lonA, latB, lonB);
          azimuthText = azimuth.toFixed(1) + '°';
          angleMarker = L.circleMarker([latA, lonA], {
            radius: 10, color: '#ffaa00', weight: 2, fillColor: '#ffaa00', fillOpacity: 0.3
          }).bindTooltip(`azimuth: ${azimuth.toFixed(1)}°`, {permanent: false, direction: 'top'}).addTo(map);
        }
        document.getElementById('mapAzimuthLabel').innerText = azimuthText;

        if (latA !== latB || lonA !== lonB) {
          map.fitBounds([[latA, lonA], [latB, lonB]], {padding: [40,40]});
        } else {
          map.setView([latA, lonA], 8);
        }
      }

      // ---------- compass drawing (N,E,S,W + azimuth hand) ----------
      function drawCompass(azimuth) {
        const canvas = document.getElementById('compassCanvas');
        const ctx = canvas.getContext('2d');
        const w = canvas.width, h = canvas.height;
        const centerX = w/2, centerY = h/2;
        const radius = Math.min(w,h)*0.4;  // 0.4 * 280 ≈ 112px

        ctx.clearRect(0,0,w,h);

        // draw very light gray circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = '#f1f3f5';
        ctx.fill();

        // draw cardinal ticks (N,E,S,W)
        ctx.font = 'bold 16px sans-serif';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // North (0°)
        ctx.fillText('N', centerX, centerY - radius + 16);
        // East (90°)
        ctx.fillText('E', centerX + radius - 16, centerY);
        // South (180°)
        ctx.fillText('S', centerX, centerY + radius - 16);
        // West (270°)
        ctx.fillText('W', centerX - radius + 16, centerY);

        // draw small ticks for intercardinal directions (optional)
        ctx.font = '12px sans-serif';
        ctx.fillStyle = '#888';
        ctx.fillText('NE', centerX + radius*0.5*Math.SQRT2 - 12, centerY - radius*0.5*Math.SQRT2 + 8);
        ctx.fillText('SE', centerX + radius*0.5*Math.SQRT2 - 12, centerY + radius*0.5*Math.SQRT2 - 8);
        ctx.fillText('SW', centerX - radius*0.5*Math.SQRT2 + 12, centerY + radius*0.5*Math.SQRT2 - 8);
        ctx.fillText('NW', centerX - radius*0.5*Math.SQRT2 + 12, centerY - radius*0.5*Math.SQRT2 + 8);

        // draw the azimuth hand (if valid)
        if (azimuth !== null && !isNaN(azimuth)) {
          // convert azimuth: 0° = north (pointing up), clockwise
          const angleRad = (azimuth - 90) * Math.PI / 180; // because canvas 0° = east, we subtract 90 to make 0° = north

          const handLength = radius * 0.7;
          const tipX = centerX + handLength * Math.cos(angleRad);
          const tipY = centerY + handLength * Math.sin(angleRad);

          // draw line from center to tip
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(tipX, tipY);
          ctx.strokeStyle = '#d63384'; // pinkish red
          ctx.lineWidth = 4;
          ctx.stroke();

          // draw arrow head
          ctx.beginPath();
          ctx.fillStyle = '#d63384';
          const arrowSize = 12;
          const backAngle = angleRad + Math.PI; // opposite direction
          const leftAngle = angleRad + Math.PI/8;
          const rightAngle = angleRad - Math.PI/8;
          const arrowX = tipX;
          const arrowY = tipY;
          const leftX = arrowX + arrowSize * Math.cos(leftAngle);
          const leftY = arrowY + arrowSize * Math.sin(leftAngle);
          const rightX = arrowX + arrowSize * Math.cos(rightAngle);
          const rightY = arrowY + arrowSize * Math.sin(rightAngle);
          ctx.beginPath();
          ctx.moveTo(arrowX, arrowY);
          ctx.lineTo(leftX, leftY);
          ctx.lineTo(rightX, rightY);
          ctx.closePath();
          ctx.fill();

          // draw center dot
          ctx.beginPath();
          ctx.arc(centerX, centerY, 6, 0, 2*Math.PI);
          ctx.fillStyle = '#212529';
          ctx.fill();
        } else {
          // no valid azimuth – draw faint line?
          ctx.font = '14px sans-serif';
          ctx.fillStyle = '#aaa';
          ctx.fillText('enter coordinates', centerX, centerY+30);
        }
      }

      // ------------------------------------------------------------
      function updateResultsAndDiagram() {
        const latA = parseLatLon(document.getElementById('latA').value);
        const lonA = parseLatLon(document.getElementById('lonA').value);
        const latB = parseLatLon(document.getElementById('latB').value);
        const lonB = parseLatLon(document.getElementById('lonB').value);

        const azimuthEl = document.getElementById('azimuthResult');
        const distanceEl = document.getElementById('distanceResult');

        if (latA === null || lonA === null || latB === null || lonB === null) {
          azimuthEl.innerText = '--.--°';
          distanceEl.innerText = '---- km';
          drawCompass(null);
          return;
        }

        let azimuth, distance;
        if (latA === latB && lonA === lonB) {
          azimuth = 0; distance = 0;
        } else {
          const res = computeAzimuthDistance(latA, lonA, latB, lonB);
          azimuth = res.azimuth; distance = res.distance;
        }

        azimuthEl.innerText = azimuth.toFixed(2) + '°';
        let distStr = distance < 0.01 ? distance.toFixed(4)+' km' : (distance < 100 ? distance.toFixed(3)+' km' : distance.toFixed(1)+' km');
        distanceEl.innerText = distStr;

        // draw compass with current azimuth
        drawCompass(azimuth);
      }

      // sync everything
      function syncAll() {
        updateMapVisuals();
        updateResultsAndDiagram();
      }

      // swap A<->B
      function swapPoints() {
        const latA = document.getElementById('latA');
        const lonA = document.getElementById('lonA');
        const latB = document.getElementById('latB');
        const lonB = document.getElementById('lonB');
        [latA.value, latB.value] = [latB.value, latA.value];
        [lonA.value, lonB.value] = [lonB.value, lonA.value];
        syncAll();
      }

      // set point from map click
      let pendingPoint = 'A';
      document.getElementById('setAMap').addEventListener('click', () => {
        pendingPoint = 'A';
        map.getContainer().style.cursor = 'crosshair';
        map.once('click', (e) => {
          document.getElementById('latA').value = e.latlng.lat.toFixed(6);
          document.getElementById('lonA').value = e.latlng.lng.toFixed(6);
          map.getContainer().style.cursor = '';
          syncAll();
        });
      });
      document.getElementById('setBMap').addEventListener('click', () => {
        pendingPoint = 'B';
        map.getContainer().style.cursor = 'crosshair';
        map.once('click', (e) => {
          document.getElementById('latB').value = e.latlng.lat.toFixed(6);
          document.getElementById('lonB').value = e.latlng.lng.toFixed(6);
          map.getContainer().style.cursor = '';
          syncAll();
        });
      });

      // event listeners
      window.addEventListener('load', () => {
        syncAll(); // blank start -> diagram shows placeholder

        document.getElementById('calcBtn').addEventListener('click', syncAll);
        document.getElementById('swapBtn').addEventListener('click', swapPoints);

        ['latA','lonA','latB','lonB'].forEach(id => {
          document.getElementById(id).addEventListener('input', syncAll);
        });
      });
    })();

    window.MathJax = {
  tex: { inlineMath: [['\\(','\\)'], ['$', '$']] }
};