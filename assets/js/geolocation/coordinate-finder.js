 // ============================================================
  // ADVANCED COORDINATE FINDER
  // Features: Street Map, Satellite View, Current Location, Screenshot Download
  // Decimal + DMS with toggle, Click on map
  // ============================================================
  
  // Map variables
  let map;
  let currentTileLayer;
  let currentMarker = null;
  let currentLat = 40.7128;
  let currentLng = -74.0060;
  
  // Tile layer definitions
  const streetTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  });
  
  const satelliteTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
  });
  
  // DOM elements
  const latDecimalEl = document.getElementById('latDecimal');
  const lngDecimalEl = document.getElementById('lngDecimal');
  const latDMSEl = document.getElementById('latDMS');
  const lngDMSEl = document.getElementById('lngDMS');
  const formatToggle = document.getElementById('formatToggle');
  const toggleLabel = document.getElementById('toggleLabel');
  const decimalPanel = document.getElementById('decimalPanel');
  const dmsPanel = document.getElementById('dmsPanel');
  const locationInfoSpan = document.getElementById('locationInfo');
  const copyDecimalBtn = document.getElementById('copyDecimalBtn');
  const copyDMSBtn = document.getElementById('copyDMSBtn');
  const streetMapBtn = document.getElementById('streetMapBtn');
  const satelliteMapBtn = document.getElementById('satelliteMapBtn');
  const currentLocationBtn = document.getElementById('currentLocationBtn');
  const downloadMapBtn = document.getElementById('downloadMapBtn');
  
  // ========== Helper Functions ==========
  
  // Convert Decimal Degrees to DMS
  function decimalToDMS(decimal, isLatitude) {
    const direction = isLatitude 
      ? (decimal >= 0 ? 'N' : 'S') 
      : (decimal >= 0 ? 'E' : 'W');
    
    let absDecimal = Math.abs(decimal);
    const degrees = Math.floor(absDecimal);
    const minutesFull = (absDecimal - degrees) * 60;
    const minutes = Math.floor(minutesFull);
    const seconds = ((minutesFull - minutes) * 60).toFixed(2);
    
    const secondsFormatted = parseFloat(seconds).toFixed(2);
    return `${degrees}° ${minutes}' ${secondsFormatted}" ${direction}`;
  }
  
  // Format Decimal to 6 decimal places
  function formatDecimal(value) {
    if (value === undefined || value === null) return '—';
    return value.toFixed(6);
  }
  
  // Update all coordinate displays
  function updateAllDisplays(lat, lng) {
    latDecimalEl.textContent = formatDecimal(lat);
    lngDecimalEl.textContent = formatDecimal(lng);
    latDMSEl.textContent = decimalToDMS(lat, true);
    lngDMSEl.textContent = decimalToDMS(lng, false);
    locationInfoSpan.innerHTML = `${formatDecimal(lat)}°, ${formatDecimal(lng)}°`;
  }
  
  // Update marker and map view
  function updateMapMarker(lat, lng, updateMapView = true, zoomLevel = null) {
    if (isNaN(lat) || isNaN(lng)) return;
    
    currentLat = lat;
    currentLng = lng;
    
    updateAllDisplays(lat, lng);
    
    if (currentMarker) {
      currentMarker.setLatLng([lat, lng]);
    } else {
      currentMarker = L.marker([lat, lng]).addTo(map);
    }
    
    const decimalText = `${formatDecimal(lat)}, ${formatDecimal(lng)}`;
    const dmsText = `${decimalToDMS(lat, true)} ${decimalToDMS(lng, false)}`;
    currentMarker.bindPopup(`
      <div style="font-family: monospace; font-size: 12px;">
        <strong>📍 Coordinates</strong><br>
        <span class="text-primary">Decimal:</span> ${decimalText}<br>
        <span class="text-success">DMS:</span> ${dmsText}
      </div>
    `).openPopup();
    
    if (updateMapView) {
      const newZoom = zoomLevel !== null ? zoomLevel : Math.max(map.getZoom(), 13);
      map.setView([lat, lng], newZoom);
    } else {
      map.panTo([lat, lng]);
    }
  }
  
  // Reverse geocode for location name
  async function updateLocationName(lat, lng) {
    if (!lat || !lng) return;
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
      const response = await fetch(url, {
        headers: { 'User-Agent': 'AdvancedCoordinateFinder/1.0' }
      });
      const data = await response.json();
      if (data && data.display_name) {
        let shortName = data.display_name;
        if (shortName.length > 50) shortName = shortName.substring(0, 47) + '...';
        locationInfoSpan.innerHTML = `${formatDecimal(lat)}°, ${formatDecimal(lng)}° &nbsp;|&nbsp; 📍 ${shortName}`;
      } else {
        locationInfoSpan.innerHTML = `${formatDecimal(lat)}°, ${formatDecimal(lng)}°`;
      }
    } catch (err) {
      console.warn("Reverse geocode error:", err);
      locationInfoSpan.innerHTML = `${formatDecimal(lat)}°, ${formatDecimal(lng)}°`;
    }
  }
  
  // ========== Map Tile Switching ==========
  function switchToStreetMap() {
    map.removeLayer(currentTileLayer);
    currentTileLayer = streetTileLayer;
    currentTileLayer.addTo(map);
    streetMapBtn.classList.add('active');
    satelliteMapBtn.classList.remove('active');
  }
  
  function switchToSatelliteMap() {
    map.removeLayer(currentTileLayer);
    currentTileLayer = satelliteTileLayer;
    currentTileLayer.addTo(map);
    satelliteMapBtn.classList.add('active');
    streetMapBtn.classList.remove('active');
  }
  
  // ========== Current Location ==========
  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    
    const originalText = currentLocationBtn.innerHTML;
    currentLocationBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Getting...';
    currentLocationBtn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        updateMapMarker(lat, lng, true, 14);
        await updateLocationName(lat, lng);
        currentLocationBtn.innerHTML = originalText;
        currentLocationBtn.disabled = false;
      },
      (error) => {
        console.warn(error);
        let errorMsg = '';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMsg = 'Permission denied. Please allow location access.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMsg = 'Position unavailable.';
            break;
          case error.TIMEOUT:
            errorMsg = 'Request timed out.';
            break;
          default:
            errorMsg = 'Unknown error.';
        }
        alert(`Location error: ${errorMsg}`);
        currentLocationBtn.innerHTML = originalText;
        currentLocationBtn.disabled = false;
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }
  
  // ========== Download Map Screenshot ==========
  async function downloadMapScreenshot() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;
    
    // Show loading indicator on button
    const originalText = downloadMapBtn.innerHTML;
    downloadMapBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Capturing...';
    downloadMapBtn.disabled = true;
    
    try {
      // Store current popup open state and temporarily close if needed (optional)
      // Use html2canvas to capture the map container
      const canvas = await html2canvas(mapElement, {
        scale: 2, // Higher quality
        backgroundColor: '#c8e0f0',
        useCORS: true,
        logging: false
      });
      
      // Create download link
      const link = document.createElement('a');
      const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
      const filename = `map_${formatDecimal(currentLat)}_${formatDecimal(currentLng)}_${timestamp}.png`;
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
      // Optional: Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'alert alert-success alert-dismissible fade show position-fixed bottom-0 end-0 m-3';
      successMsg.style.zIndex = '9999';
      successMsg.innerHTML = `
        <i class="bi bi-check-circle-fill"></i> Map screenshot saved!
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      `;
      document.body.appendChild(successMsg);
      setTimeout(() => successMsg.remove(), 3000);
      
    } catch (err) {
      console.error('Screenshot error:', err);
      alert('Failed to capture screenshot. Please try again.');
    } finally {
      downloadMapBtn.innerHTML = originalText;
      downloadMapBtn.disabled = false;
    }
  }
  
  // ========== Copy Functions ==========
  copyDecimalBtn.addEventListener('click', async () => {
    if (currentLat && currentLng) {
      const decimalText = `${formatDecimal(currentLat)}, ${formatDecimal(currentLng)}`;
      try {
        await navigator.clipboard.writeText(decimalText);
        const originalText = copyDecimalBtn.innerHTML;
        copyDecimalBtn.innerHTML = '<i class="bi bi-check-lg"></i> Copied!';
        setTimeout(() => {
          copyDecimalBtn.innerHTML = originalText;
        }, 1500);
      } catch (err) {
        alert('Manual copy: ' + decimalText);
      }
    } else {
      alert('No coordinates to copy. Click on the map first.');
    }
  });
  
  copyDMSBtn.addEventListener('click', async () => {
    if (currentLat && currentLng) {
      const dmsText = `${decimalToDMS(currentLat, true)} ${decimalToDMS(currentLng, false)}`;
      try {
        await navigator.clipboard.writeText(dmsText);
        const originalText = copyDMSBtn.innerHTML;
        copyDMSBtn.innerHTML = '<i class="bi bi-check-lg"></i> Copied!';
        setTimeout(() => {
          copyDMSBtn.innerHTML = originalText;
        }, 1500);
      } catch (err) {
        alert('Manual copy: ' + dmsText);
      }
    } else {
      alert('No DMS coordinates to copy. Click on the map first.');
    }
  });
  
  // ========== Format Toggle ==========
  formatToggle.addEventListener('change', function() {
    if (formatToggle.checked) {
      decimalPanel.style.display = 'none';
      dmsPanel.style.display = 'flex';
      toggleLabel.innerHTML = '<i class="bi bi-123"></i> Show Decimal Degrees';
    } else {
      decimalPanel.style.display = 'flex';
      dmsPanel.style.display = 'none';
      toggleLabel.innerHTML = '<i class="bi bi-globe2"></i> Show DMS (Degrees/Minutes/Seconds)';
    }
  });
  
  // ========== Map Event: Click to get coordinates ==========
  map = L.map('map').setView([40.7128, -74.0060], 12);
  currentTileLayer = streetTileLayer;
  currentTileLayer.addTo(map);
  
  map.on('click', async function(e) {
    const { lat, lng } = e.latlng;
    updateMapMarker(lat, lng, false);
    await updateLocationName(lat, lng);
  });
  
  // ========== Button Event Listeners ==========
  streetMapBtn.addEventListener('click', switchToStreetMap);
  satelliteMapBtn.addEventListener('click', switchToSatelliteMap);
  currentLocationBtn.addEventListener('click', getCurrentLocation);
  downloadMapBtn.addEventListener('click', downloadMapScreenshot);
  
  // ========== Initialize with default coordinates ==========
  async function init() {
    updateMapMarker(40.7128, -74.0060, true, 12);
    await updateLocationName(40.7128, -74.0060);
    setTimeout(() => map.invalidateSize(), 200);
  }
  
  init();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (map) map.invalidateSize();
  });
  
  // Add Bootstrap alert close functionality (dynamic)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-close')) {
      e.target.closest('.alert')?.remove();
    }
  });
  
  console.log('Advanced Coordinate Finder Ready | Street + Satellite | Screenshot Download');