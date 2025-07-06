async function getAirports() {
  const response = await fetch('/assets/json/airports.json');
  return await response.json();
}

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = deg => deg * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

document.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.getCurrentPosition(showNearestAirports, handleGeoError);
});

async function showNearestAirports(position) {
  const userLat = position.coords.latitude;
  const userLon = position.coords.longitude;
  const airports = await getAirports();

  const nearest = airports
    .map(ap => {
      const lat = parseFloat(ap.latitude_deg);
      const lon = parseFloat(ap.longitude_deg);
      const distance = haversine(userLat, userLon, lat, lon);
      return { ...ap, distance, lat, lon };
    })
    .filter(ap => !isNaN(ap.lat) && !isNaN(ap.lon))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10);

  const map = L.map('map').setView([userLat, userLon], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([userLat, userLon]).addTo(map)
    .bindPopup("<b>You are here</b>").openPopup();

  let html = `<h3 class="mb-4">Top 10 Nearest Airports</h3>`;
  nearest.forEach(ap => {
    L.marker([ap.lat, ap.lon]).addTo(map)
      .bindPopup(`<strong>${ap.name}</strong><br>${ap.municipality || ''}<br>${ap.distance.toFixed(1)} km`);

    html += `
      <div class="card mb-3 card-airport p-3 shadow-sm">
        <h5>${ap.name} <small class="text-muted">(${ap.ident})</small></h5>
        <p class="mb-1"><strong>Location:</strong> ${ap.municipality || 'N/A'}, ${ap.iso_country}</p>
        <p class="mb-1"><strong>Distance:</strong> ${ap.distance.toFixed(2)} km</p>
        <p class="mb-1"><strong>Type:</strong> ${ap.type}</p>
        ${ap.home_link ? `<p><a href="${ap.home_link}" target="_blank">Visit Airport Website</a></p>` : ''}
      </div>
    `;
  });

  document.getElementById('result').innerHTML = html;
}

function handleGeoError(err) {
  document.getElementById('result').innerHTML = `
    <div class="alert alert-danger">
      Location access denied or unavailable. Please enable location services to find the nearest airport to you.
    </div>
  `;
}
