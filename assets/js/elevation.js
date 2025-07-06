
    // Initialize Map
        const map = L.map('map').setView([30, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        let currentMarkers = [];
        let currentLocationMarker = null;
        const MAX_HISTORY = 5;

        // Current Location Function
        async function getCurrentLocation() {
            const loader = document.querySelector('#currentLocationInfo .loading-spinner');
            const infoDiv = document.getElementById('currentLocationInfo');
            
            if (!navigator.geolocation) {
                infoDiv.innerHTML = '<div class="text-danger">Geolocation not supported</div>';
                return;
            }

            loader.style.display = 'inline-block';
            infoDiv.innerHTML = '<div class="d-flex align-items-center">Loading...</div>';

            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    
                    // Add temporary marker
                    const tempMarker = L.marker([lat, lng], {
                        icon: L.divIcon({
                            className: 'elevation-marker',
                            html: '<div class="spinner-border text-primary"></div>'
                        })
                    }).addTo(map);

                    const elevation = await getElevation(lat, lng);
                    map.removeLayer(tempMarker);

                    // Update current location display
                    infoDiv.innerHTML = `
                        <div class="h4 text-dark">${elevation}m</div>
                        <div class="small">
                            <div>Latitude: ${lat.toFixed(4)}</div>
                            <div>Longitude: ${lng.toFixed(4)}</div>
                        </div>
                    `;

                    // Update map view
                    map.setView([lat, lng], 13);

                    // Update marker
                    if (currentLocationMarker) map.removeLayer(currentLocationMarker);
                    currentLocationMarker = L.marker([lat, lng], {
                        icon: L.divIcon({
                            className: 'elevation-marker',
                            html: `<div class= "bg-primary fw-semibold fs-3">${elevation}m</div>`
                        })
                    }).addTo(map);

                    // Add to recent
                    addRecentLocation({
                        lat: lat.toFixed(4),
                        lng: lng.toFixed(4),
                        elevation,
                        type: 'current'
                    });

                } catch (error) {
                    infoDiv.innerHTML = '<div class="text-danger">Error loading elevation</div>';
                } finally {
                    loader.style.display = 'none';
                }
            }, (error) => {
                infoDiv.innerHTML = `<div class="text-danger">Error: ${error.message}</div>`;
                loader.style.display = 'none';
            });
        }

        // Map Click Handler
        map.on('click', async (e) => {
            const { lat, lng } = e.latlng;
            
            // Add temporary marker
            const tempMarker = L.marker([lat, lng], {
                icon: L.divIcon({
                    className: 'elevation-marker',
                    html: '<div class="spinner-border text-primary"></div>'
                })
            }).addTo(map);

            try {
                const elevation = await getElevation(lat, lng);
                map.removeLayer(tempMarker);

                // Add permanent marker
                const marker = L.marker([lat, lng], {
                    icon: L.divIcon({
                        className: 'elevation-marker',
                        html: `<div class="bg-secondary text-dark fs-4">${elevation}m</div>`
                    })
                }).addTo(map);

                // Add to recent
                addRecentLocation({
                    lat: lat.toFixed(4),
                    lng: lng.toFixed(4),
                    elevation
                });

                // Manage markers
                currentMarkers.push(marker);
                if(currentMarkers.length > MAX_HISTORY) {
                    const oldMarker = currentMarkers.shift();
                    map.removeLayer(oldMarker);
                }

            } catch (error) {
                map.removeLayer(tempMarker);
                alert('Failed to get elevation data');
            }
        });

        // Recent Locations
        function addRecentLocation(location) {
            const container = document.getElementById('recentLocations');
            const entry = document.createElement('div');
            entry.className = 'd-flex justify-content-between align-items-center p-2 border-bottom';
            entry.innerHTML = `
                <div>
                    <strong class="${location.type === 'current' ? 'text-primary' : 'text-secondary'}">${location.elevation}m</strong>
                    <div class="text-muted small">${location.lat}, ${location.lng}</div>
                </div>
                <button class="btn btn-sm btn-link text-danger" onclick="this.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            `;
            container.prepend(entry);
            
            if(container.children.length > MAX_HISTORY) {
                container.lastElementChild.remove();
            }
        }

        // Elevation API
        async function getElevation(lat, lng) {
            try {
                const response = await fetch(
                    `https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`
                );
                const data = await response.json();
                return data.results[0].elevation.toFixed(1);
            } catch (error) {
                throw new Error('Elevation service unavailable');
            }
        }