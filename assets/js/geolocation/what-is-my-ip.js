 async function fetchIPGeo(ipUrl, ipSpanId, cityId, regionId, countryId, orgId) {
    try {
      const ipRes = await fetch(ipUrl);
      const ipData = await ipRes.json();
      const ip = ipData.ip || null;

      if (!ip) return null;

      document.getElementById(ipSpanId).textContent = ip;

      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geo = await geoRes.json();

      if (!geo || geo.error) {
        document.getElementById(cityId).textContent = 'Not available';
        document.getElementById(regionId).textContent = 'Not available';
        document.getElementById(countryId).textContent = 'Not available';
        document.getElementById(orgId).textContent = 'Not available';
        return { ip };
      }

      document.getElementById(cityId).textContent = geo.city || 'N/A';
      document.getElementById(regionId).textContent = geo.region || 'N/A';
      document.getElementById(countryId).textContent = geo.country_name || 'N/A';
      document.getElementById(orgId).textContent = geo.org || 'N/A';

      return { ip, ...geo };
    } catch (e) {
      console.error("Error:", e);
      return null;
    }
  }

  async function main() {
    const geo4 = await fetchIPGeo(
      'https://api.ipify.org?format=json',
      'ipv4', 'city4', 'region4', 'country4', 'org4'
    );

    const geo6 = await fetchIPGeo(
      'https://api64.ipify.org?format=json',
      'ipv6', 'city6', 'region6', 'country6', 'org6'
    );

    const lat = geo4?.latitude || geo6?.latitude || 20;
    const lon = geo4?.longitude || geo6?.longitude || 0;

    const map = L.map('map').setView([lat, lon], lat && lon ? 10 : 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    if (geo4?.latitude && geo4?.longitude) {
      L.marker([geo4.latitude, geo4.longitude])
        .addTo(map)
        .bindPopup(`<b>IPv4</b><br>${geo4.city}, ${geo4.country_name}`)
        .openPopup();
    }

    if (geo6?.latitude && geo6?.longitude) {
      L.marker([geo6.latitude, geo6.longitude], {
        icon: L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991119.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [0, -30],
        })
      }).addTo(map)
        .bindPopup(`<b>IPv6</b><br>${geo6.city || 'Unknown'}, ${geo6.country_name || ''}`);
    }
  }

  main();