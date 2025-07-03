document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const speedValue = document.getElementById('speed-value');
    const speedUnit = document.getElementById('speed-unit');
    const maxSpeedElement = document.getElementById('max-speed');
    const maxSpeedUnitElement = document.querySelector('.max-speed-unit');
    const unitButtons = document.querySelectorAll('.btn-unit');
    const gpsStatus = document.getElementById('gps-status');

    let currentSpeed = 0;
    let maxSpeed = 0;
    let currentUnit = 'kmh';
    let watchId = null;
    let isRunning = false;
    let lastPosition = null;
    let lastTimestamp = null;

    const units = {
        kmh: { label: 'km/h', conversion: 1 },
        mph: { label: 'mph', conversion: 0.621371 },
        ms: { label: 'm/s', conversion: 0.277778 }
    };

    unitButtons.forEach(button => {
        button.addEventListener('click', function () {
            unitButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentUnit = this.dataset.unit;
            speedUnit.textContent = units[currentUnit].label;
            maxSpeedUnitElement.textContent = units[currentUnit].label;

            if (maxSpeed > 0) {
                maxSpeedElement.textContent = convertSpeed(maxSpeed, 'kmh', currentUnit).toFixed(1);
            }
            if (currentSpeed > 0) {
                speedValue.textContent = convertSpeed(currentSpeed, 'kmh', currentUnit).toFixed(1);
            }
        });
    });

    startBtn.addEventListener('click', function () {
        if (isRunning) {
            stopGPSTracking();
            this.textContent = 'Start GPS Speed Test';
            gpsStatus.textContent = 'GPS Not Active';
            gpsStatus.className = 'gps-status gps-inactive';
        } else {
            startGPSTracking();
            this.textContent = 'Stop GPS Tracking';
        }
        isRunning = !isRunning;
    });

    function startGPSTracking() {
        if (navigator.geolocation) {
            gpsStatus.textContent = 'Acquiring GPS Signal...';
            gpsStatus.className = 'gps-status gps-active';

            watchId = navigator.geolocation.watchPosition(
                position => {
                    gpsStatus.textContent = 'GPS Active';
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

                            speedValue.textContent = convertSpeed(currentSpeed, 'kmh', currentUnit).toFixed(1);
                        }
                    }

                    lastPosition = newPosition;
                    lastTimestamp = newTimestamp;
                },
                error => {
                    let errorMessage;
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "Location permission denied";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location unavailable";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "GPS signal timeout";
                            break;
                        default:
                            errorMessage = "GPS error";
                    }

                    gpsStatus.textContent = errorMessage;
                    gpsStatus.className = 'gps-status gps-inactive';
                    speedValue.textContent = '0';
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000
                }
            );
        } else {
            gpsStatus.textContent = "GPS not supported";
            gpsStatus.className = 'gps-status gps-inactive';
        }
    }

    function stopGPSTracking() {
        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }
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