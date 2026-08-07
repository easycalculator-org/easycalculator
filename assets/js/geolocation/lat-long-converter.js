const defaultCoordinates = [39.002006, -76.810226];
const map = L.map("map").setView(defaultCoordinates, 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
}).addTo(map);

const coordinatePin = L.divIcon({
    className: "",
    html: '<div class="coordinate-pin" aria-hidden="true"></div>',
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
});
const marker = L.marker(defaultCoordinates, {
    icon: coordinatePin,
    keyboard: true,
    title: "Selected coordinates"
}).addTo(map);

function decimalToDMS(decimal, isLatitude) {
    const direction = isLatitude ? (decimal >= 0 ? "N" : "S") : (decimal >= 0 ? "E" : "W");
    const absolute = Math.abs(decimal);
    const degrees = Math.floor(absolute);
    const minutesFloat = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesFloat);
    const seconds = ((minutesFloat - minutes) * 60).toFixed(2);
    return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
}

function dmsToDecimal(degrees, minutes, seconds, direction) {
    const decimal = degrees + (minutes / 60) + (seconds / 3600);
    return direction === "S" || direction === "W" ? -decimal : decimal;
}

function isValidDMS(degrees, minutes, seconds, maxDegrees) {
    return degrees >= 0 && degrees <= maxDegrees && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60;
}

function showResult(message, type) {
    const results = document.getElementById("results");
    results.className = `result-card result-card--${type} is-visible`;
    results.innerHTML = message;
}

function updateCoordinateSummary(lat, lon) {
    document.getElementById("decimalLatitude").textContent = lat.toFixed(6);
    document.getElementById("decimalLongitude").textContent = lon.toFixed(6);
    document.getElementById("dmsLatitude").textContent = decimalToDMS(lat, true);
    document.getElementById("dmsLongitude").textContent = decimalToDMS(lon, false);
}

function coordinatePopupContent(lat, lon) {
    return `
        <div class="map-coordinate-title">Selected coordinates</div>
        <p class="map-coordinate-value"><strong>Latitude:</strong> ${lat.toFixed(6)}</p>
        <p class="map-coordinate-value"><strong>Longitude:</strong> ${lon.toFixed(6)}</p>`;
}

function updateMap(lat, lon) {
    marker.setLatLng([lat, lon]);
    marker.bindPopup(coordinatePopupContent(lat, lon), {
        className: "coordinate-popup",
        closeButton: false,
        autoClose: false,
        closeOnClick: false
    }).openPopup();
    map.flyTo([lat, lon], 15, { animate: true, duration: 1 });
    updateCoordinateSummary(lat, lon);
}

function convertDecimalToDMS() {
    const lat = parseFloat(document.getElementById("decLat").value);
    const lon = parseFloat(document.getElementById("decLon").value);

    if (Number.isNaN(lat) || Number.isNaN(lon)) {
        showResult("Please enter both a valid latitude and longitude.", "danger");
        return;
    }
    if (lat < -90 || lat > 90) {
        showResult("Latitude must be between -90 and 90.", "danger");
        return;
    }
    if (lon < -180 || lon > 180) {
        showResult("Longitude must be between -180 and 180.", "danger");
        return;
    }

    showResult(`
        <div class="result-card__header"><i class="fa-solid fa-circle-check me-2"></i>Conversion result</div>
        <div class="result-card__body row g-3">
            <div class="col-sm-6"><span class="text-uppercase small text-muted fw-semibold">Decimal coordinates</span><span class="result-value">${lat.toFixed(6)}, ${lon.toFixed(6)}</span></div>
            <div class="col-sm-6"><span class="text-uppercase small text-muted fw-semibold">DMS coordinates</span><span class="result-value">${decimalToDMS(lat, true)}<br>${decimalToDMS(lon, false)}</span></div>
        </div>`, "info");
    updateMap(lat, lon);
}

function convertDMSToDecimal() {
    const latDeg = parseFloat(document.getElementById("latDeg").value);
    const latMin = parseFloat(document.getElementById("latMin").value);
    const latSec = parseFloat(document.getElementById("latSec").value);
    const lonDeg = parseFloat(document.getElementById("lonDeg").value);
    const lonMin = parseFloat(document.getElementById("lonMin").value);
    const lonSec = parseFloat(document.getElementById("lonSec").value);

    if ([latDeg, latMin, latSec, lonDeg, lonMin, lonSec].some(Number.isNaN)) {
        showResult("Please enter complete DMS values.", "danger");
        return;
    }
    if (!isValidDMS(latDeg, latMin, latSec, 90) || !isValidDMS(lonDeg, lonMin, lonSec, 180)) {
        showResult("Degrees are outside the valid range, or minutes and seconds must be less than 60.", "danger");
        return;
    }

    const lat = dmsToDecimal(latDeg, latMin, latSec, document.getElementById("latDir").value);
    const lon = dmsToDecimal(lonDeg, lonMin, lonSec, document.getElementById("lonDir").value);
    document.getElementById("decLat").value = lat.toFixed(6);
    document.getElementById("decLon").value = lon.toFixed(6);
    convertDecimalToDMS();
}

function getCurrentLocation() {
    if (!navigator.geolocation) {
        showResult("Geolocation is not supported by this browser.", "danger");
        return;
    }
    navigator.geolocation.getCurrentPosition(
        (position) => {
            document.getElementById("decLat").value = position.coords.latitude.toFixed(6);
            document.getElementById("decLon").value = position.coords.longitude.toFixed(6);
            convertDecimalToDMS();
        },
        (error) => showResult(`Unable to get your location: ${error.message}`, "danger"),
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function clearAll() {
    document.querySelectorAll("input").forEach((input) => { input.value = ""; });
    const results = document.getElementById("results");
    results.textContent = "";
    results.className = "result-card";
    document.getElementById("decimalLatitude").textContent = "Waiting for coordinates";
    document.getElementById("decimalLongitude").textContent = "Waiting for coordinates";
    document.getElementById("dmsLatitude").textContent = "Waiting for coordinates";
    document.getElementById("dmsLongitude").textContent = "Waiting for coordinates";
    marker.setLatLng(defaultCoordinates);
    marker.closePopup();
    map.flyTo(defaultCoordinates, 5, { animate: true, duration: 1 });
}

map.on("click", (event) => {
    document.getElementById("decLat").value = event.latlng.lat.toFixed(6);
    document.getElementById("decLon").value = event.latlng.lng.toFixed(6);
    convertDecimalToDMS();
});

function convertWhenCoordinatePairIsComplete() {
    if (document.getElementById("decLat").value !== "" && document.getElementById("decLon").value !== "") {
        convertDecimalToDMS();
    }
}

document.getElementById("decLat").addEventListener("input", convertWhenCoordinatePairIsComplete);
document.getElementById("decLon").addEventListener("input", convertWhenCoordinatePairIsComplete);
