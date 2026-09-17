// Main application variables
let map;
let flightPath;
let airplaneMarker;
let departureMarker;
let arrivalMarker;
let animationInterval;
let currentPosition = 0;

// Initialize the map
function initMap() {
    // Clear existing map if it exists
    if (map && map.remove) {
        map.remove();
    }

    // Create new map
    map = L.map('map').setView([28.2563, 85.2563], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

// Parse coordinate string (handles multiple formats)
function parseCoordinateString(coordString) {
    // Remove any non-numeric characters except minus sign, comma, period, and space
    const cleaned = coordString.replace(/[^\d\.,\s-]/g, '');

    // Split by comma or space
    const parts = cleaned.split(/[, \t]+/).filter(part => part !== '');

    if (parts.length !== 2) return null;

    const lat = parseFloat(parts[0]);
    const lng = parseFloat(parts[1]);

    if (isNaN(lat) || isNaN(lng)) return null;
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) return null;

    return { lat, lng };
}

// Calculate bearing between two points
function calculateBearing(startLat, startLng, endLat, endLng) {
    const start = L.latLng(startLat, startLng);
    const end = L.latLng(endLat, endLng);

    const dLng = (end.lng - start.lng) * Math.PI / 180;
    const lat1 = start.lat * Math.PI / 180;
    const lat2 = end.lat * Math.PI / 180;

    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    let bearing = Math.atan2(y, x) * 180 / Math.PI;

    return (bearing + 360) % 360;
}

// Create airplane marker with proper bearing
function createAirplaneMarker(position, bearing) {
    return L.marker(position, {
        icon: L.divIcon({
            className: 'airplane-marker',
            html: `<div class="airplane-icon" style="transform: rotate(${bearing}deg)"></div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        }),
        zIndexOffset: 1000
    });
}

// Animate airplane along the flight path
function animateFlight(path, initialBearing) {
    const steps = path.length;
    let step = 0;

    // Clear any existing animation
    if (animationInterval) clearInterval(animationInterval);

    // Create airplane marker at start position
    airplaneMarker = createAirplaneMarker(path[0], initialBearing);
    airplaneMarker.addTo(map);

    // Animation interval
    animationInterval = setInterval(() => {
        if (step >= steps - 1) {
            clearInterval(animationInterval);
            return;
        }

        step++;
        currentPosition = step / steps;

        // Update airplane position
        const currentPos = path[step];
        airplaneMarker.setLatLng(currentPos);

        // Calculate current bearing
        let bearing;
        if (step < steps - 5) {
            const nextPos = path[step + 5];
            bearing = calculateBearing(currentPos[0], currentPos[1], nextPos[0], nextPos[1]);
        } else {
            bearing = initialBearing;
        }

        // Update airplane rotation
        airplaneMarker.setIcon(L.divIcon({
            className: 'airplane-marker',
            html: `<div class="airplane-icon" style="transform: rotate(${bearing}deg)"></div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        }));

    }, 50); // Update every 50ms for smooth animation
}

// Reset the application
function resetApplication() {
    // Clear map elements
    if (flightPath) map.removeLayer(flightPath);
    if (airplaneMarker) map.removeLayer(airplaneMarker);
    if (departureMarker) map.removeLayer(departureMarker);
    if (arrivalMarker) map.removeLayer(arrivalMarker);
    if (animationInterval) clearInterval(animationInterval);

    // Reset form
    document.getElementById('coordinatesForm').reset();

    // Hide flight info
    document.getElementById('flightInfo').classList.add('d-none');

    // Reset variables
    currentPosition = 0;

    // Reinitialize map to default view
    initMap();
}

// Handle form submission
document.getElementById("coordinatesForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Parse coordinates
    const startCoords = parseCoordinateString(document.getElementById("startCoords").value);
    const endCoords = parseCoordinateString(document.getElementById("endCoords").value);

    if (!startCoords || !endCoords) {
        alert("Please enter valid coordinates in one of these formats:\n\n" +
            "28.2563 85.2563 (space separated)\n" +
            "28.2563,85.2563 (comma separated)\n\n" +
            "Latitude must be between -90 and 90\n" +
            "Longitude must be between -180 and 180");
        return;
    }

    // Calculate flight stats
    const from = turf.point([startCoords.lng, startCoords.lat]);
    const to = turf.point([endCoords.lng, endCoords.lat]);

    const distance = turf.distance(from, to, { units: 'kilometers' }).toFixed(2);
    const bearing = Math.round(turf.bearing(from, to));
    //const duration = (distance / 850).toFixed(1); // Average speed 850 km/h

    // Update UI with flight info
    document.getElementById('distanceValue').textContent = distance;
    // document.getElementById('durationValue').textContent = duration;
    document.getElementById('bearingValue').textContent = bearing;
    document.getElementById('flightInfo').classList.remove('d-none');

    // Create flight path (great circle)
    const line = turf.greatCircle(
        [startCoords.lng, startCoords.lat],
        [endCoords.lng, endCoords.lat],
        { properties: { name: 'flight-path' }, npoints: 100 }
    );

    const path = line.geometry.coordinates.map(coord => [coord[1], coord[0]]); // Convert to Leaflet format

    // Draw flight path
    flightPath = L.polyline(path, {
        color: 'var(--primary-color)',
        weight: 3,
        opacity: 0.8,
        dashArray: '10, 5'
    }).addTo(map);

    // Add airport markers
    departureMarker = L.marker(path[0], {
        icon: L.divIcon({
            className: 'departure-marker',
            html: '<i class="fas fa-plane-departure"></i>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        })
    }).addTo(map).bindPopup(`Point-A: ${startCoords.lat.toFixed(4)}, ${startCoords.lng.toFixed(4)}`).openPopup();

    arrivalMarker = L.marker(path[path.length - 1], {
        icon: L.divIcon({
            className: 'arrival-marker',
            html: '<i class="fas fa-plane-arrival"></i>',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        })
    }).addTo(map).bindPopup(`Arrival: ${endCoords.lat.toFixed(4)}, ${endCoords.lng.toFixed(4)}`);

    // Fit map to show both points
    const bounds = L.latLngBounds(path);
    map.fitBounds(bounds, { padding: [50, 50] });

    // Animate the flight
    animateFlight(path, bearing);
});

// Handle reset button
document.getElementById("resetBtn").addEventListener("click", resetApplication);

// Initialize the map when the page loads
window.onload = initMap;