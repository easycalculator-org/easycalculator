 const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);

    document.getElementById('processBtn').addEventListener('click', async function () {
        const latlongInput = document.getElementById('latlong').value.trim();
        const lines = latlongInput.split('\n').filter(Boolean);

        if (lines.length === 0) return alert('Please enter at least one latitude, longitude pair.');

        document.getElementById('progressContainer').style.display = "block";
        document.getElementById('progressBar').style.width = "0%";
        document.getElementById('progressBar').innerText = "0%";

        let results = "Latitude,Longitude,Full Address,City,State,Country\n";
        let displayResults = "<h4>Results:</h4>";

        map.eachLayer(layer => {
            if (layer instanceof L.Marker) map.removeLayer(layer);
        });

        let processed = 0;
        for (const line of lines.slice(0, 100)) {
            const parts = line.trim().split(/\s|,/).filter(Boolean);
            if (parts.length < 2) continue;

            const lat = parseFloat(parts[0]);
            const lng = parseFloat(parts[1]);
            if (isNaN(lat) || isNaN(lng)) continue;

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`, {
                    headers: { 'User-Agent': 'ReverseGeocodeTool/1.0 (yourdomain.com)' }
                });
                const data = await response.json();
                const fullAddress = data.display_name || "";
                const city = data.address.city || data.address.town || data.address.village || "";
                const state = data.address.state || "";
                const country = data.address.country || "";

                results += `${lat},${lng},"${fullAddress}","${city}","${state}","${country}"
`;
                displayResults += `<p><strong>${lat}, ${lng}:</strong> ${fullAddress} (City: ${city}, State: ${state}, Country: ${country})</p>`;
                L.marker([lat, lng]).addTo(map).bindPopup(`${fullAddress}`).openPopup();
            } catch (err) {
                console.error('Error fetching data for', lat, lng, err);
            }

            processed++;
            const percent = Math.round((processed / lines.length) * 100);
            document.getElementById('progressBar').style.width = percent + '%';
            document.getElementById('progressBar').innerText = percent + '%';
            document.getElementById('addressResult').innerHTML = displayResults;
        }

        document.getElementById('downloadBtn').style.display = "block";
        document.getElementById('downloadBtn').onclick = function () {
            const blob = new Blob([results], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'reverse_geocoding_results.csv';
            link.click();
        };
    });