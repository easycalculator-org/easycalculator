 let marker;

    function convertMGRS() {
      const mgrs = document.getElementById("mgrsInput").value.trim();
      if (!mgrs) return alert("Please enter an MGRS coordinate.");

      try {
        const [lon, lat] = proj4.mgrs.toPoint(mgrs);
        if (!lat || !lon) throw new Error("Invalid MGRS");

        updateResult(lat, lon, mgrs);
        setMapMarker(lat, lon, mgrs);
      } catch (error) {
        alert("Invalid MGRS coordinate.");
      }
    }

    function convertLatLonToMGRS() {
      const lat = parseFloat(document.getElementById("latInput").value);
      const lon = parseFloat(document.getElementById("lonInput").value);
      if (isNaN(lat) || isNaN(lon)) return alert("Please enter valid Latitude and Longitude.");

      const mgrs = proj4.mgrs.forward([lon, lat]);
      updateResult(lat, lon, mgrs);
      setMapMarker(lat, lon, mgrs);
    }

    function updateResult(lat, lon, mgrs) {
      document.getElementById("latitude").textContent = lat.toFixed(8);
      document.getElementById("longitude").textContent = lon.toFixed(8);
      document.getElementById("mgrs").textContent = mgrs;
      document.getElementById("result").style.display = "block";
    }

    function setMapMarker(lat, lon, mgrs) {
      if (marker) map.removeLayer(marker);
      marker = L.marker([lat, lon]).addTo(map).bindPopup(`<b>MGRS:</b> ${mgrs}`).openPopup();
      map.setView([lat, lon], 16);
    }

    const map = L.map('map').setView([51.505, -0.09], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

    map.on('click', function(e) {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;
      const mgrs = proj4.mgrs.forward([lon, lat]);

      updateResult(lat, lon, mgrs);
      setMapMarker(lat, lon, mgrs);
    });