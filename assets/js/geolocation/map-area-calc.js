 // ------------------- INIT MAP -------------------
  const map = L.map('map').setView([40.7128, -74.0060], 13); // NYC view

  // Base layers
  const streetLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  });

  const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
  });

  streetLayer.addTo(map);
  let currentLayer = 'street';

  // Global references
  let drawnPolygon = null;            
  let polygonLabel = null;            
  let drawControl = null;
  let editFeatureGroup = null;        
  let currentAreaSqMeters = 0;
  
  // Text markers storage
  let textMarkersArray = [];   

  // Unit conversion factors 
  const unitConvert = {
    sq_yard: (sqm) => sqm * 1.19599004630108,
    sq_feet: (sqm) => sqm * 10.76391041671,
    sq_meter: (sqm) => sqm,
    sq_km: (sqm) => sqm / 1_000_000,
    sq_mile: (sqm) => sqm / 2_589_988.110336
  };
  const unitSymbols = {
    sq_yard: 'yd²', sq_feet: 'ft²', sq_meter: 'm²', sq_km: 'km²', sq_mile: 'mi²'
  };

  // Helper: compute spherical area in square meters
  function computeAreaSquareMeters(latlngs) {
    if (!latlngs || latlngs.length < 3) return 0;
    let total = 0;
    const R = 6371000;
    const n = latlngs.length;
    for (let i = 0; i < n; i++) {
      const j = (i + 1) % n;
      const p1 = latlngs[i];
      const p2 = latlngs[j];
      const lat1 = p1.lat * Math.PI / 180;
      const lat2 = p2.lat * Math.PI / 180;
      const lon1 = p1.lng * Math.PI / 180;
      const lon2 = p2.lng * Math.PI / 180;
      total += (lon2 - lon1) * (2 + Math.sin(lat1) + Math.sin(lat2));
    }
    return Math.abs(total * R * R / 2);
  }

  function updateAreaDisplay() {
    const unit = document.getElementById('unitSelector').value;
    const converted = unitConvert[unit](currentAreaSqMeters);
    document.getElementById('areaDisplayValue').innerText =  converted.toFixed(2);
    document.getElementById('areaUnitLabel').innerHTML = unitSymbols[unit];
  }

  function recalcPolygonArea() {
    if (drawnPolygon && drawnPolygon.getLatLngs && drawnPolygon.getLatLngs().length) {
      const latlngs = drawnPolygon.getLatLngs()[0];
      if (latlngs && latlngs.length >= 3) {
        currentAreaSqMeters = computeAreaSquareMeters(latlngs);
      } else currentAreaSqMeters = 0;
    } else currentAreaSqMeters = 0;
    updateAreaDisplay();
  }

  // Update polygon label 
  function updatePolygonLabel() {
    if (polygonLabel) map.removeLayer(polygonLabel);
    if (drawnPolygon && drawnPolygon.getLatLngs && drawnPolygon.getLatLngs().length) {
      const latlngs = drawnPolygon.getLatLngs()[0];
      if (latlngs && latlngs.length) {
        let latSum = 0, lngSum = 0;
        latlngs.forEach(latlng => { latSum += latlng.lat; lngSum += latlng.lng; });
        const center = L.latLng(latSum / latlngs.length, lngSum / latlngs.length);
        const nameText = document.getElementById('areaNameInput').value.trim();
        const displayName = nameText ? nameText : "Area";
polygonLabel = L.marker(center, {
    draggable: true,
    icon: L.divIcon({
        className: 'polygon-name-label',
        iconSize: [180, 60],
        iconAnchor: [90, 30],
        html: `
        <div style="  background:#111827ee;  color:#fff; padding:10px 16px; border-radius:12px; font-size:14px;   font-weight:600;  box-shadow:0 4px 12px rgba(0,0,0,.25);  white-space:nowrap;  text-align:center;    min-width:160px;  ">
        <div>${displayName}</div>
            <div style=" font-size:12px;  margin-top:4px; color:#d1d5db;   ">
                ${document.getElementById('areaDisplayValue').innerText}
                ${document.getElementById('areaUnitLabel').innerText}
            </div>
        </div>`
    })
}).addTo(map);
        polygonLabel.bindTooltip(displayName, { permanent: false, direction: 'top' });
      }
    }
  }

  // Apply selected color to polygon
  function applyPolygonColor() {
    if (!drawnPolygon) {
      alert("Please draw a polygon first.");
      return;
    }
    const colorHex = document.getElementById('polyColorPicker').value;
    document.getElementById('colorPreviewCircle').style.backgroundColor = colorHex;
    drawnPolygon.setStyle({
      color: colorHex,
      fillColor: colorHex,
      weight: 4,
      fillOpacity: 0.45,
      opacity: 0.85
    });
  }

  // Clear polygon
  function clearEverything() {
    if (drawnPolygon) {
      map.removeLayer(drawnPolygon);
      drawnPolygon = null;
    }
    if (polygonLabel) {
      map.removeLayer(polygonLabel);
      polygonLabel = null;
    }
    if (editFeatureGroup) editFeatureGroup.clearLayers();
    currentAreaSqMeters = 0;
    updateAreaDisplay();
    document.getElementById('areaNameInput').value = '';
  }

  // Setup Leaflet 
  function setupDrawControl() {
    if (drawControl) map.removeControl(drawControl);
    editFeatureGroup = new L.FeatureGroup();
    map.addLayer(editFeatureGroup);
    drawControl = new L.Control.Draw({
      position: 'topleft',
      edit: { featureGroup: editFeatureGroup, poly: { allowIntersection: false } },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: false,
          shapeOptions: { color: '#3b82f6', weight: 4, fillColor: '#3b82f6', fillOpacity: 0.4 },
          repeatMode: false
        },
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false
      }
    });
    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, (e) => {
      const layer = e.layer;
      if (drawnPolygon) {
        map.removeLayer(drawnPolygon);
        if (polygonLabel) map.removeLayer(polygonLabel);
      }
      drawnPolygon = layer;
      editFeatureGroup.clearLayers();
      editFeatureGroup.addLayer(drawnPolygon);
      map.addLayer(drawnPolygon);
      recalcPolygonArea();
      updatePolygonLabel();
      
      drawnPolygon.on('edit', () => { recalcPolygonArea(); updatePolygonLabel(); });
      drawnPolygon.on('editable:vertex:dragend', () => { recalcPolygonArea(); updatePolygonLabel(); });
    });

    map.on(L.Draw.Event.EDITED, (e) => {
      e.layers.eachLayer(layer => {
        if (layer === drawnPolygon) { recalcPolygonArea(); updatePolygonLabel(); }
      });
    });
  }

  // ---------- TEXT MARKER ---------
  let textModeActive = false;
  function enableTextMode() {
    textModeActive = true;
    map.getContainer().style.cursor = 'crosshair';
    const toastDiv = document.createElement('div');
    toastDiv.id = 'textModeToast';
    toastDiv.innerText = '✏️ Text mode active — click map to add note';
    toastDiv.style.position = 'absolute';
    toastDiv.style.bottom = '30px';
    toastDiv.style.left = '20px';
    toastDiv.style.backgroundColor = '#1e293b';
    toastDiv.style.color = 'white';
    toastDiv.style.padding = '8px 16px';
    toastDiv.style.borderRadius = '40px';
    toastDiv.style.fontSize = '12px';
    toastDiv.style.zIndex = '10000';
    toastDiv.style.fontWeight = '500';
    toastDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    map.getContainer().appendChild(toastDiv);
    setTimeout(() => toastDiv.remove(), 2800);
  }
  function disableTextMode() {
    textModeActive = false;
    map.getContainer().style.cursor = '';
  }

  function addTextMarker(latlng, initialText = null) {
    let noteText = initialText;
    if (noteText === null) {
      noteText = prompt("📝 Enter your note for this location:", "Observation point");
    }
    if (!noteText || noteText.trim() === "") return;
    const finalNote = noteText.trim();
    const markerIcon = L.divIcon({
      className: 'custom-note-icon',
      html: `<div style="background:#ffffffdd; backdrop-filter:blur(4px); border-left: 4px solid #2563eb; padding: 4px 12px; border-radius: 30px; font-weight:500; font-size:12px; box-shadow:0 2px 8px rgba(0,0,0,0.1);"><i class="fa-solid fa-thumbtack"></i> ${finalNote.substring(0, 35)}</div>`,
      iconSize: [130, 30],
      popupAnchor: [0, -12]
    });
    const marker = L.marker(latlng, { draggable: true, icon: markerIcon }).addTo(map);
    marker.bindPopup(`
      <div class="text-center" style="min-width:160px;">
        <strong><i class="bi bi-chat-dots"></i> Map Note</strong><br>
        <span class="small">${finalNote}</span><br>
        <button class="btn btn-sm btn-outline-primary mt-2 editNoteBtn">✏️ Edit</button>
        <button class="btn btn-sm btn-outline-danger mt-2 ms-1 deleteNoteBtn">🗑 Delete</button>
      </div>
    `);
    const markerObj = { marker, noteText: finalNote, latlng };
    textMarkersArray.push(markerObj);
    
    marker.on('popupopen', (e) => {
      const popupEl = e.popup.getElement();
      const editBtn = popupEl.querySelector('.editNoteBtn');
      const deleteBtn = popupEl.querySelector('.deleteNoteBtn');
      if (editBtn) {
        editBtn.onclick = () => {
          const newNote = prompt("Edit your note:", finalNote);
          if (newNote && newNote.trim()) {
            markerObj.noteText = newNote.trim();
            marker.setIcon(L.divIcon({
              className: 'custom-note-icon',
              html: `<div style="background:#ffffffdd; backdrop-filter:blur(4px); border-left: 4px solid #2563eb; padding: 4px 12px; border-radius: 30px; font-weight:500; font-size:12px;"><i class="fa-solid fa-thumbtack"></i> ${newNote.trim().substring(0, 35)}</div>`,
              iconSize: [130, 30],
              popupAnchor: [0, -12]
            }));
            marker.setPopupContent(`
              <div class="text-center">
                <strong><i class="bi bi-chat-dots"></i> Map Note</strong><br>
                <span class="small">${newNote.trim()}</span><br>
                <button class="btn btn-sm btn-outline-primary mt-2 editNoteBtn">✏️ Edit</button>
                <button class="btn btn-sm btn-outline-danger mt-2 ms-1 deleteNoteBtn">🗑 Delete</button>
              </div>
            `);
          }
          marker.closePopup();
        };
      }
      if (deleteBtn) {
        deleteBtn.onclick = () => {
          map.removeLayer(marker);
          const idx = textMarkersArray.findIndex(m => m.marker === marker);
          if (idx !== -1) textMarkersArray.splice(idx, 1);
          updateTextMarkersList();
          marker.closePopup();
        };
      }
    });
    updateTextMarkersList();
  }

  function updateTextMarkersList() {
    const container = document.getElementById('textMarkerList');
    if (textMarkersArray.length === 0) {
      container.innerHTML = '<div class="text-center py-2 text-secondary"><i class="fa-solid fa-comment-dots"></i> No text notes</div>';
      return;
    }
    let html = '';
    textMarkersArray.forEach((item, idx) => {
      const short = item.noteText.length > 35 ? item.noteText.slice(0, 32) + '...' : item.noteText;
      html += `<div class="marker-item d-flex justify-content-between align-items-center">
        <span><i class="fa-solid fa-location-dot text-primary me-1"></i> ${short}</span>
        <button class="btn btn-sm btn-link text-danger p-0 remove-marker-btn" data-idx="${idx}"><i class="bi bi-x-circle"></i></button>
      </div>`;
    });
    container.innerHTML = html;
    document.querySelectorAll('.remove-marker-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        if (!isNaN(idx) && textMarkersArray[idx]) {
          map.removeLayer(textMarkersArray[idx].marker);
          textMarkersArray.splice(idx, 1);
          updateTextMarkersList();
        }
      });
    });
  }

  // Map click for text mode
  map.on('click', (e) => {
    if (textModeActive) {
      addTextMarker(e.latlng);
      disableTextMode();
    }
  });

  // ---------- LAYER TOGGLE  ----------
  function setActiveLayerButton(activeBtnId) {
    document.getElementById('streetViewBtn').classList.remove('layer-active');
    document.getElementById('satelliteViewBtn').classList.remove('layer-active');
    document.getElementById(activeBtnId).classList.add('layer-active');
  }
  document.getElementById('streetViewBtn').addEventListener('click', () => {
    if (currentLayer === 'satellite') {
      map.removeLayer(satelliteLayer);
      map.addLayer(streetLayer);
      currentLayer = 'street';
      setActiveLayerButton('streetViewBtn');
    }
  });
  document.getElementById('satelliteViewBtn').addEventListener('click', () => {
    if (currentLayer === 'street') {
      map.removeLayer(streetLayer);
      map.addLayer(satelliteLayer);
      currentLayer = 'satellite';
      setActiveLayerButton('satelliteViewBtn');
    }
  });

  // UI Event bindings
  document.getElementById('clearAllBtn').addEventListener('click', clearEverything);
  document.getElementById('downloadMapBtn').addEventListener('click', async () => {
    const mapDiv = document.getElementById('map');
    const btn = document.getElementById('downloadMapBtn');
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-hourglass-half"></i> Rendering...';
    btn.disabled = true;
    try {
      const canvas = await html2canvas(mapDiv, { scale: 2, backgroundColor: '#ffffff', useCORS: true });
      const link = document.createElement('a');
      link.download = `map_area_${new Date().toISOString().slice(0,19)}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (err) { alert("Screenshot error: " + err); }
    btn.innerHTML = originalHtml;
    btn.disabled = false;
  });
  document.getElementById('applyColorBtn').addEventListener('click', applyPolygonColor);
  document.getElementById('setAreaNameBtn').addEventListener('click', () => {
    if (!drawnPolygon) { alert("Draw a polygon first."); return; }
    updatePolygonLabel();
  });
  document.getElementById('enableTextModeBtn').addEventListener('click', enableTextMode);
  document.getElementById('cancelTextModeBtn').addEventListener('click', disableTextMode);
  document.getElementById('unitSelector').addEventListener('change', () => updateAreaDisplay());
  
  // Sync color preview with picker
  const colorPicker = document.getElementById('polyColorPicker');
  const colorPreview = document.getElementById('colorPreviewCircle');
  colorPicker.addEventListener('input', (e) => {
    colorPreview.style.backgroundColor = e.target.value;
  });

  // Initialize app
  setupDrawControl();
  updateAreaDisplay();
  map.invalidateSize();


document.getElementById('currentLocationBtn').addEventListener('click', () => {

    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            map.flyTo(
                [
                    position.coords.latitude,
                    position.coords.longitude
                ],
                17,
                {
                    animate: true,
                    duration: 1.5
                }
            );

        },

        function(error) {
            alert('Unable to get your location.');
        },

        {
            enableHighAccuracy: true,
            timeout: 10000
        }

    );

});