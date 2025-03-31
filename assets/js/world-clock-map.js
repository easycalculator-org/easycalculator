// Initialize the map
var map = L.map('map').setView([20, 0], 2);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Function to fetch and display time
function fetchTime(lat, lng) {
    const apiKey = "NKF8Y13V8FVT"; // Replace with your TimeZoneDB API key
    const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${lat}&lng=${lng}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK") {
                const timeString = data.formatted; // 2025-03-23 15:30:45
                const dateObj = new Date(timeString.replace(" ", "T")); // Convert to Date object
                
                const hours = dateObj.getHours();
                const minutes = dateObj.getMinutes();
                const seconds = dateObj.getSeconds();
                
                updateClock(hours, minutes, seconds);
                
                document.getElementById("time-display").innerHTML = `
<div class="d-flex justify-content-between flex-wrap text-center fs-5 font-monospace">
   <strong>Timezone: ${data.zoneName} </strong>
    <strong>Location: ${data.cityName}, ${data.countryName} </strong>
    <strong>Current Time: ${formatTime(hours, minutes, seconds)}</strong>
    <strong>Date:${dateObj.toDateString()} </strong> 
</div>`;
                
                document.getElementById("digital-clock").innerText = formatTime(hours, minutes, seconds);
                document.getElementById("date-display").innerText = dateObj.toDateString();
            } else {
                document.getElementById("time-display").innerText = "Time data unavailable.";
            }
        })
        .catch(error => {
            console.error("Error fetching time data:", error);
            document.getElementById("time-display").innerText = "Error fetching time.";
        });
}

// Format time in 24-hour format
function formatTime(h, m, s) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Function to update analog clock
function updateClock(hours, minutes, seconds) {
    const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360° / 12 = 30° per hour
    const minuteDeg = minutes * 6; // 360° / 60 = 6° per minute
    const secondDeg = seconds * 6; // 360° / 60 = 6° per second

    document.getElementById("hour-hand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("second-hand").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Handle map clicks
map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    fetchTime(lat, lng);
});

