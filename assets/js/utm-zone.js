//utm zone map
const map = L.map('map').setView([20, 0], 2);

  // Add base map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Function to draw UTM grid background (UTM boundaries)
  function drawUTMGrid() {
    // Draw UTM vertical grid lines every 6 degrees of longitude
    for (let lng = -180; lng <= 180; lng += 6) {
      L.polyline([[90, lng], [-90, lng]], {
        color: 'rgba(0, 0, 0, 0.2)', // Light gray for background
        weight: 1,
        opacity: 0.5,
        dashArray: '3, 3', 
        zIndex: -1  
      }).addTo(map);
    }

    // Draw UTM horizontal grid lines every 8 degrees of latitude
    for (let lat = -80; lat <= 84; lat += 8) {
      L.polyline([[-80, -180], [84, 180]], {
        color: 'rgba(8, 8, 8, 0.2)', // Light gray for background
        weight: 1.5,
        opacity: 0.5,
        zIndex: -1  
      }).addTo(map);
    }
  }

  // Function to draw red UTM zone box and show detailed UTM info
  function drawUTMZoneBox(lat, lng) {
    const zoneNumber = Math.floor((lng + 180) / 6) + 1;
    const zoneStartLng = (zoneNumber - 1) * 6 - 180;
    const zoneEndLng = zoneStartLng + 6;

    // Set UTM row based on latitude (for simplicity, assumes a range of N/S rows)
    const zoneRow = lat >= 0 ? 'N' : 'S';

    // UTM coordinates (west/east values)
    const westValue = (zoneStartLng + 180).toFixed(0) + "E";
    const eastValue = (zoneEndLng + 180).toFixed(0) + "E";
    const centralMeridianValue = (zoneStartLng + 3).toFixed(0) + "E";

    // Bounds of the UTM zone
    const bounds = [
      [-80, zoneStartLng],
      [84, zoneEndLng]
    ];

    // Draw the red rectangle
    L.rectangle(bounds, {
      color: 'red',
      weight: 3,
      fillOpacity: 0.05
    }).addTo(map);

    // Show UTM info in a pop-up
    const popupContent = `
      <strong>Awesome UTM Zone: ${zoneNumber}</strong><br>
      Zone: ${zoneNumber}<br>
      Row: ${zoneRow}<br>
      West Value: ${westValue}<br>
      Central Meridian Value: ${centralMeridianValue}<br>
      East Value: ${eastValue}
    `;

    L.popup()
      .setLatLng([lat, lng])
      .setContent(popupContent)
      .openOn(map);
  }

  // Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      map.setView([lat, lng], 6);

      L.marker([lat, lng]).addTo(map)
        .bindPopup("Your Location")
        .openPopup();

      drawUTMZoneBox(lat, lng);  // Show the UTM box and details at the user's location
    }, function(err) {
      console.warn("Geolocation failed:", err.message);
    });
  } else {
    alert("Geolocation not supported.");
  }

  // Draw the UTM grid as background
  drawUTMGrid();

  function drawUTMGrid() {
  // Draw UTM vertical lines (zone boundaries every 6° longitude)
  for (let lng = -180; lng <= 180; lng += 6) {
    L.polyline([[90, lng], [-90, lng]], {
      color: '#808080',       
      weight: 1.5,           
      opacity: 0.9,
      dashArray: '5, 5',   
      pane: 'overlayPane'   
    }).addTo(map);
  }

  // Draw UTM horizontal lines (latitude bands every 8°)
  for (let lat = -80; lat <= 84; lat += 8) {
    L.polyline([[lat, -180], [lat, 180]], {
      color: '#808080',
      weight: 1.5,
      opacity: 0.9,
      dashArray: '5, 5',
      pane: 'overlayPane'
    }).addTo(map);
  }
}

function highlightClickedUTMZone(lat, lng) {
  // Remove previous clicked zone rectangle
  if (lastClickedZoneRect) {
    map.removeLayer(lastClickedZoneRect);
  }

  const zoneNumber = Math.floor((lng + 180) / 6) + 1;
  const zoneStartLng = (zoneNumber - 1) * 6 - 180;
  const zoneEndLng = zoneStartLng + 6;

  const zoneRow = lat >= 0 ? 'N' : 'S';
  const westValue = (zoneStartLng + 180).toFixed(0) + "E";
  const eastValue = (zoneEndLng + 180).toFixed(0) + "E";
  const centralMeridianValue = (zoneStartLng + 3).toFixed(0) + "E";

  const bounds = [
    [-80, zoneStartLng],
    [84, zoneEndLng]
  ];

  // Create and store the new rectangle
  lastClickedZoneRect = L.rectangle(bounds, {
    color: 'blue',
    weight: 2,
    fillOpacity: 0.2,
    fillColor: 'lightblue'
  }).addTo(map);

  // Popup showing UTM zone info
  const popupContent = `
    <strong>UTM Grid Zone: ${zoneNumber}</strong><br>
    Zone: ${zoneNumber}<br>
    Row: ${zoneRow}<br>
    West: ${westValue}<br>
    Central Meridian: ${centralMeridianValue}<br>
    East: ${eastValue}
  `;

  L.popup()
    .setLatLng([lat, lng])
    .setContent(popupContent)
    .openOn(map);
}

map.on('click', function (e) {
  const { lat, lng } = e.latlng;
  highlightClickedUTMZone(lat, lng);
});
  
 // remove previous click utm zone
let lastClickedZoneRect = null;