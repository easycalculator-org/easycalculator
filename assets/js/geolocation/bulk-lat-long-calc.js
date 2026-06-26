
  (function() {
    "use strict";

    // ----- state -----
    let csvData = [];
    let headers = [];
    let computedRows = [];
    let mapInstance = null;
    let markerLayer = null;

    // DOM refs
    const fileInput = document.getElementById('fileInput');
    const dropZone = document.getElementById('fileDropZone');
    const colSelector = document.getElementById('columnSelector');
    const lat1Sel = document.getElementById('lat1Select');
    const lng1Sel = document.getElementById('lng1Select');
    const lat2Sel = document.getElementById('lat2Select');
    const lng2Sel = document.getElementById('lng2Select');
    const computeBtn = document.getElementById('computeBtn');
    const resultArea = document.getElementById('resultArea');
    const rowCountDisplay = document.getElementById('rowCountDisplay');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewHead = document.getElementById('previewHead');
    const previewBody = document.getElementById('previewBody');
    const markerCount = document.getElementById('markerCount');

    // ----- map init -----
    function initMap() {
      if (!mapInstance) {
        mapInstance = L.map('mapContainer', { zoomControl: true }).setView([20, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap'
        }).addTo(mapInstance);
        markerLayer = L.layerGroup().addTo(mapInstance);
      }
      return mapInstance;
    }

    function clearMarkers() {
      if (markerLayer) markerLayer.clearLayers();
      markerCount.textContent = '0 markers';
    }

    function updateMapMarkers() {
      clearMarkers();
      if (!mapInstance) initMap();
      const sample = computedRows.slice(0, 5);
      let added = 0;
      sample.forEach(row => {
        const lat1 = parseFloat(row._lat1), lng1 = parseFloat(row._lng1);
        const lat2 = parseFloat(row._lat2), lng2 = parseFloat(row._lng2);
        if (!isNaN(lat1) && !isNaN(lng1) && !isNaN(lat2) && !isNaN(lng2)) {
          L.circleMarker([lat1, lng1], { radius: 6, color: '#198754', fillColor: '#198754', fillOpacity: 0.9 })
            .addTo(markerLayer)
            .bindPopup(`A: ${lat1.toFixed(4)}, ${lng1.toFixed(4)}`);
          L.circleMarker([lat2, lng2], { radius: 6, color: '#dc3545', fillColor: '#dc3545', fillOpacity: 0.9 })
            .addTo(markerLayer)
            .bindPopup(`B: ${lat2.toFixed(4)}, ${lng2.toFixed(4)}`);
          L.polyline([[lat1, lng1], [lat2, lng2]], { color: '#2a5f9e', weight: 2.5, opacity: 0.6 })
            .addTo(markerLayer)
            .bindPopup(`dist: ${row.distance_km.toFixed(2)} km`);
          added++;
        }
      });
      markerCount.textContent = `${added} markers (pairs)`;
      if (sample.length > 0 && mapInstance) {
        const first = sample[0];
        if (!isNaN(first._lat1) && !isNaN(first._lng1) && !isNaN(first._lat2) && !isNaN(first._lng2)) {
          mapInstance.fitBounds([[first._lat1, first._lng1], [first._lat2, first._lng2]], { padding: [40, 40] });
        }
      }
    }

    // ----- haversine (km) -----
    function haversineDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const toRad = deg => deg * Math.PI / 180;
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
      return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    }

    // ----- compute -----
    function computeDistances() {
      const lat1Col = lat1Sel.value, lng1Col = lng1Sel.value;
      const lat2Col = lat2Sel.value, lng2Col = lng2Sel.value;
      if (!lat1Col || !lng1Col || !lat2Col || !lng2Col) {
        alert('Please select all four coordinate columns.');
        return;
      }

      computedRows = [];
      let valid = 0;
      csvData.forEach(row => {
        const lat1 = parseFloat(row[lat1Col]), lng1 = parseFloat(row[lng1Col]);
        const lat2 = parseFloat(row[lat2Col]), lng2 = parseFloat(row[lng2Col]);
        let dist = null;
        if (!isNaN(lat1) && !isNaN(lng1) && !isNaN(lat2) && !isNaN(lng2)) {
          dist = haversineDistance(lat1, lng1, lat2, lng2);
          valid++;
        }
        const newRow = { ...row, distance_km: dist };
        newRow._lat1 = lat1; newRow._lng1 = lng1; newRow._lat2 = lat2; newRow._lng2 = lng2;
        computedRows.push(newRow);
      });

      if (valid === 0) {
        alert('No valid numeric coordinates found. Check column selections.');
        return;
      }

      resultArea.classList.remove('d-none');
      rowCountDisplay.textContent = valid;
      renderPreviewTable();
      updateMapMarkers();
    }

    function renderPreviewTable() {
      const extra = 'distance_km';
      const displayHeaders = [...headers, extra];
      previewHead.innerHTML = displayHeaders.map(h => `<th>${h}</th>`).join('');
      const sample = computedRows.slice(0, 5);
      previewBody.innerHTML = sample.map(row => {
        return `<tr>${displayHeaders.map(h => {
          let val = row[h];
          if (h === extra && val !== null && val !== undefined) val = val.toFixed(3);
          else if (val === null || val === undefined) val = '';
          return `<td>${val}</td>`;
        }).join('')}</tr>`;
      }).join('');
    }

    // ----- download CSV -----
    function downloadResultCSV() {
      if (computedRows.length === 0) {
        alert('Compute distances first.');
        return;
      }
      const extra = 'distance_km';
      const cols = [...headers, extra];
      let csv = cols.join(',') + '\n';
      computedRows.forEach(row => {
        csv += cols.map(h => {
          let val = row[h];
          if (h === extra && val !== null && val !== undefined) val = val.toFixed(6);
          else if (val === null || val === undefined) val = '';
          if (typeof val === 'string' && (val.includes(',') || val.includes('"') || val.includes('\n'))) {
            val = `"${val.replace(/"/g, '""')}"`;
          }
          return val;
        }).join(',') + '\n';
      });
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'distance_output.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    }

    // ----- parse file (CSV or Excel) -----
    function parseFile(file) {
      const reader = new FileReader();
      const fileExt = file.name.split('.').pop().toLowerCase();

      if (fileExt === 'csv') {
        reader.onload = function(e) {
          const text = e.target.result;
          const result = parseCSV(text);
          if (result.headers.length === 0 || result.data.length === 0) {
            alert('Invalid CSV. Please ensure header row exists.');
            return;
          }
          setData(result.headers, result.data);
        };
        reader.readAsText(file);
      } else if (['xlsx', 'xls'].includes(fileExt)) {
        reader.onload = function(e) {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const json = XLSX.utils.sheet_to_json(firstSheet, { defval: '' });
            if (json.length === 0) {
              alert('Excel file is empty or has no header row.');
              return;
            }
            const headers = Object.keys(json[0]);
            setData(headers, json);
          } catch (err) {
            alert('Error reading Excel file: ' + err.message);
          }
        };
        reader.readAsArrayBuffer(file);
      } else {
        alert('Unsupported file type. Please upload .csv, .xlsx, or .xls');
      }
    }

    function parseCSV(text) {
      const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
      if (lines.length === 0) return { headers: [], data: [] };
      const headerLine = lines[0];
      const headers = headerLine.split(',').map(s => s.trim());
      const data = [];
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(s => s.trim());
        if (values.length !== headers.length) continue;
        const row = {};
        headers.forEach((h, idx) => { row[h] = values[idx] || ''; });
        data.push(row);
      }
      return { headers, data };
    }

    function setData(headersArray, dataArray) {
      csvData = dataArray;
      headers = headersArray;
      populateSelects(headers);
      colSelector.classList.remove('d-none');
      resultArea.classList.add('d-none');
      computedRows = [];
      clearMarkers();
      autoSelectColumns(headers);
    }

    function populateSelects(headersArray) {
      [lat1Sel, lng1Sel, lat2Sel, lng2Sel].forEach(sel => {
        const cur = sel.value;
        sel.innerHTML = headersArray.map(h => `<option value="${h}">${h}</option>`).join('');
        if (cur && headersArray.includes(cur)) sel.value = cur;
      });
    }

    function autoSelectColumns(headersArray) {
      const lower = headersArray.map(h => h.toLowerCase());
      const find = (kw) => { const idx = lower.findIndex(h => h.includes(kw)); return idx !== -1 ? headersArray[idx] : ''; };
      let lat1 = find('lat'), lng1 = find('lon');
      let lat2 = find('lat'), lng2 = find('lon');
      if (!lat1) lat1 = headersArray.find(h => /lat/i.test(h)) || '';
      if (!lng1) lng1 = headersArray.find(h => /lon|long/i.test(h)) || '';
      if (lat1 && lng1) {
        const otherLat = headersArray.find(h => /lat/i.test(h) && h !== lat1);
        const otherLng = headersArray.find(h => /lon|long/i.test(h) && h !== lng1);
        lat2 = otherLat || lat1;
        lng2 = otherLng || lng1;
      }
      if (lat1) lat1Sel.value = lat1;
      if (lng1) lng1Sel.value = lng1;
      if (lat2) lat2Sel.value = lat2;
      if (lng2) lng2Sel.value = lng2;
    }

    // ----- events -----
    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.style.borderColor = '#1a4a8b'; });
    dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = '#cfddee'; });
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.style.borderColor = '#cfddee';
      if (e.dataTransfer.files.length) parseFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', () => { if (fileInput.files.length) parseFile(fileInput.files[0]); });

    computeBtn.addEventListener('click', computeDistances);
    downloadBtn.addEventListener('click', downloadResultCSV);

    window.addEventListener('load', () => { initMap(); });
  })();