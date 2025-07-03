document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const speedValue = document.getElementById('speed-value');
    const speedUnit = document.getElementById('speed-unit');
    const maxSpeedElement = document.getElementById('max-speed');
    const maxSpeedUnitElement = document.getElementById('max-speed-unit');
    const unitButtons = document.querySelectorAll('.btn-unit');
    const gpsStatus = document.getElementById('gps-status');

    let currentSpeed = 0;
    let maxSpeed = 0;
    let currentUnit = 'kmh';
    let watchId = null;
    let isRunning = true; // Start automatically
    let lastPosition = null;
    let lastTimestamp = null;

    // Show the stop button since we're starting automatically
    startBtn.style.display = 'block';

    const units = {
        kmh: { label: 'km/h', max: 200, conversion: 1 },
        mph: { label: 'mph', max: 120, conversion: 0.621371 },
        ms: { label: 'm/s', max: 60, conversion: 0.277778 }
    };

    unitButtons.forEach(button => {
        button.addEventListener('click', function () {
            unitButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentUnit = this.dataset.unit;

            speedUnit.textContent = units[currentUnit].label;
            maxSpeedUnitElement.textContent = units[currentUnit].label;

            if (maxSpeed > 0) {
                const convertedMaxSpeed = convertSpeed(maxSpeed, 'kmh', currentUnit);
                maxSpeedElement.textContent = convertedMaxSpeed.toFixed(1);
            }

            if (currentSpeed > 0) {
                const convertedSpeed = convertSpeed(currentSpeed, 'kmh', currentUnit);
                speedValue.textContent = convertedSpeed.toFixed(1);
            }
        });
    });

    startBtn.addEventListener('click', function () {
        if (isRunning) {
            stopGPSTracking();
            this.innerHTML = '<i class="fas fa-location-arrow"></i> Start GPS Speed Test';
            gpsStatus.innerHTML = '<i class="fas fa-circle"></i> GPS Not Active';
            gpsStatus.className = 'gps-status gps-inactive';
            isRunning = false;
        } else {
            startGPSTracking();
            this.innerHTML = '<i class="fas fa-stop"></i> Stop GPS Tracking';
            isRunning = true;
        }
    });

    // Start GPS automatically when page loads
    startGPSTracking();

    function startGPSTracking() {
        if (navigator.geolocation) {
            gpsStatus.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Acquiring GPS Signal...';
            gpsStatus.className = 'gps-status gps-active';

            watchId = navigator.geolocation.watchPosition(
                position => {
                    gpsStatus.innerHTML = '<i class="fas fa-circle pulse"></i> GPS Active';
                    gpsStatus.className = 'gps-status gps-active';

                    const newPosition = position.coords;
                    const newTimestamp = position.timestamp || Date.now();

                    if (lastPosition && lastTimestamp) {
                        const timeDiff = (newTimestamp - lastTimestamp) / 1000;
                        if (timeDiff > 0) {
                            const distance = calculateDistance(
                                lastPosition.latitude,
                                lastPosition.longitude,
                                newPosition.latitude,
                                newPosition.longitude
                            );

                            const speedMs = distance / timeDiff;
                            currentSpeed = speedMs * 3.6;

                            if (currentSpeed > maxSpeed) {
                                maxSpeed = currentSpeed;
                                maxSpeedElement.textContent = convertSpeed(maxSpeed, 'kmh', currentUnit).toFixed(1);
                            }

                            const displaySpeed = convertSpeed(currentSpeed, 'kmh', currentUnit);
                            speedValue.textContent = displaySpeed.toFixed(1);
                        }
                    }

                    lastPosition = newPosition;
                    lastTimestamp = newTimestamp;
                },
                error => {
                    let errorMessage;
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "<i class='fas fa-ban'></i> Location permission denied";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "<i class='fas fa-exclamation-triangle'></i> Location unavailable";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "<i class='fas fa-clock'></i> GPS signal timeout";
                            break;
                        default:
                            errorMessage = "<i class='fas fa-times'></i> GPS error";
                    }

                    gpsStatus.innerHTML = errorMessage;
                    gpsStatus.className = 'gps-status gps-inactive';
                    resetSpeedDisplay();

                    // Show start button if GPS fails
                    startBtn.style.display = 'block';
                    startBtn.innerHTML = '<i class="fas fa-location-arrow"></i> Start GPS Speed Test';
                    isRunning = false;
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000
                }
            );
        } else {
            gpsStatus.innerHTML = "<i class='fas fa-times-circle'></i> GPS not supported";
            gpsStatus.className = 'gps-status gps-inactive';

            // Hide start button if GPS not supported
            startBtn.style.display = 'none';
        }
    }
    function stopGPSTracking() {
        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
        resetSpeedDisplay();
    }
    function resetSpeedDisplay() {
        currentSpeed = 0;
        speedValue.textContent = '0';
    }
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3;
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c;
    }
    function convertSpeed(speed, fromUnit, toUnit) {
        let kmhSpeed;
        if (fromUnit === 'kmh') kmhSpeed = speed;
        else if (fromUnit === 'mph') kmhSpeed = speed / 0.621371;
        else if (fromUnit === 'ms') kmhSpeed = speed / 0.277778;

        if (toUnit === 'kmh') return kmhSpeed;
        else if (toUnit === 'mph') return kmhSpeed * 0.621371;
        else if (toUnit === 'ms') return kmhSpeed * 0.277778;
    }
});