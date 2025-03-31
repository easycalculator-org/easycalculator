const cities = [
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Dubai", timezone: "Asia/Dubai" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Paris", timezone: "Europe/Paris" },
    { name: "Beijing", timezone: "Asia/Shanghai" },
    { name: "Los Angeles", timezone: "America/Los_Angeles" },
    { name: "Moscow", timezone: "Europe/Moscow" },
    { name: "Mumbai", timezone: "Asia/Kolkata" }
];

function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function updateTime() {
    const currentTimeElement = document.getElementById("current-time");
    const now = new Date();
    const formattedDate = formatDate(now);
    const currentTime = now.toLocaleTimeString("en-US", { hour12: true });
    currentTimeElement.textContent = `Current Time: ${currentTime} | ${formattedDate}`;
    
    const container = document.getElementById("time-container");
    container.innerHTML = "";
    cities.forEach(city => {
        const cityDateTime = new Date(new Date().toLocaleString("en-US", { timeZone: city.timezone }));
        const cityTime = cityDateTime.toLocaleTimeString("en-US", { hour12: true });
        const cityDate = formatDate(cityDateTime);
        const cityDiv = document.createElement("div");
        cityDiv.className = "city";
        cityDiv.innerHTML = `<h3>${city.name}</h3><p>${cityTime}</p><p>${cityDate}</p>`;
        container.appendChild(cityDiv);
    });
}

updateTime();
setInterval(updateTime, 1000);
