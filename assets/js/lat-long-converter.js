  // Initialize map
        let map = L.map('map').setView([0, 0], 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        let marker = L.marker([0, 0]).addTo(map);

        function updateMap(lat, lon) {
            if(isNaN(lat) || isNaN(lon)) return;
            map.setView([lat, lon], 15);
            marker.setLatLng([lat, lon]).update();
        }

        // Conversion functions
        function convertDecimalToDMS() {
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            const results = document.getElementById('results');
            results.innerHTML = '';
            
            try {
                const latInput = document.getElementById('decLat');
                const lonInput = document.getElementById('decLon');
                const lat = parseFloat(latInput.value);
                const lon = parseFloat(lonInput.value);
                
                // Validate inputs
                if(isNaN(lat)) {
                    latInput.classList.add('error');
                    throw new Error('Invalid Latitude value');
                }
                if(isNaN(lon)) {
                    lonInput.classList.add('error');
                    throw new Error('Invalid Longitude value');
                }
                if(lat < -90 || lat > 90) {
                    latInput.classList.add('error');
                    throw new Error('Latitude must be between -90 and 90');
                }
                if(lon < -180 || lon > 180) {
                    lonInput.classList.add('error');
                    throw new Error('Longitude must be between -180 and 180');
                }

                const latDMS = convertSingleDecimalToDMS(lat, true);
                const lonDMS = convertSingleDecimalToDMS(lon, false);
                
                results.innerHTML = `
                    <strong>DMS Format:</strong><br>
                    Latitude: ${latDMS}<br>
                    Longitude: ${lonDMS}
                `;
                
                updateMap(lat, lon);
            } catch (error) {
                results.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
            }
        }

        function convertDMSToDecimal() {
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            const results = document.getElementById('results');
            results.innerHTML = '';
            
            try {
                const getValue = (id) => {
                    const el = document.getElementById(id);
                    const value = parseFloat(el.value);
                    if(isNaN(value)) {
                        el.classList.add('error');
                        throw new Error(`Invalid value in ${id}`);
                    }
                    return value;
                };

                const latDeg = getValue('latDeg');
                const latMin = getValue('latMin');
                const latSec = getValue('latSec');
                const latDir = document.getElementById('latDir').value;
                
                const lonDeg = getValue('lonDeg');
                const lonMin = getValue('lonMin');
                const lonSec = getValue('lonSec');
                const lonDir = document.getElementById('lonDir').value;

                // Validate DMS values
                const validateDMS = (deg, min, sec, type) => {
                    if(type === 'lat' && deg > 90) throw new Error('Latitude degrees cannot exceed 90');
                    if(type === 'lon' && deg > 180) throw new Error('Longitude degrees cannot exceed 180');
                    if(min < 0 || min >= 60) throw new Error('Minutes must be between 0-59');
                    if(sec < 0 || sec >= 60) throw new Error('Seconds must be between 0-59');
                };

                validateDMS(latDeg, latMin, latSec, 'lat');
                validateDMS(lonDeg, lonMin, lonSec, 'lon');

                const lat = convertSingleDMSToDecimal(latDeg, latMin, latSec, latDir);
                const lon = convertSingleDMSToDecimal(lonDeg, lonMin, lonSec, lonDir);
                
                results.innerHTML = `
                    <strong>Decimal Format:</strong><br>
                    Latitude: ${lat.toFixed(6)}<br>
                    Longitude: ${lon.toFixed(6)}
                `;
                
                updateMap(lat, lon);
            } catch (error) {
                results.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
            }
        }

        function convertSingleDecimalToDMS(decimal, isLat) {
            const dir = isLat ? 
                (decimal >= 0 ? 'N' : 'S') : 
                (decimal >= 0 ? 'E' : 'W');
            
            decimal = Math.abs(decimal);
            const deg = Math.floor(decimal);
            const minFloat = (decimal - deg) * 60;
            const min = Math.floor(minFloat);
            const sec = (minFloat - min) * 60;
            
            return `${deg}° ${min}' ${sec.toFixed(2)}" ${dir}`;
        }

        function convertSingleDMSToDecimal(deg, min, sec, dir) {
            let decimal = deg + (min / 60) + (sec / 3600);
            if (dir === 'S' || dir === 'W') decimal = -decimal;
            return decimal;
        }