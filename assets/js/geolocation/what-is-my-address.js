 const latSpan = document.getElementById('lat');
    const lonSpan = document.getElementById('lon');
    const citySpan = document.getElementById('city');
    const countrySpan = document.getElementById('country');
    const addressSpan = document.getElementById('address');
    const loading = document.getElementById('loading');
    const info = document.getElementById('info');
    const error = document.getElementById('error');

    function showError(message) {
      loading.classList.add("d-none");
      error.textContent = message;
      error.classList.remove("d-none");
    }

    function initMap(lat, lon) {
      const map = L.map('map').setView([lat, lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      L.marker([lat, lon]).addTo(map)
        .bindPopup("You're here").openPopup();
    }

    function fetchAddress(lat, lon) {
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
        .then(res => res.json())
        .then(data => {
          latSpan.textContent = lat.toFixed(6);
          lonSpan.textContent = lon.toFixed(6);
         citySpan.textContent = data.address.city || data.address.town || data.address.village || 'N/A';
document.getElementById('zipcode').textContent = data.address.postcode || 'N/A';
countrySpan.textContent = data.address.country || 'N/A';
          addressSpan.textContent = data.display_name || 'Address not found';

          loading.classList.add("d-none");
          info.classList.remove("d-none");
        })
        .catch(() => showError("Failed to retrieve address information."));
    }

    window.onload = function () {
      if (!navigator.geolocation) {
        showError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        initMap(lat, lon);
        fetchAddress(lat, lon);
      }, () => {
        showError("Could not retrieve your location. Please enable location services.");
      });
    };