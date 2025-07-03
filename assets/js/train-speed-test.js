document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    const speedValue = document.getElementById('speed-value');
    const speedUnit = document.getElementById('speed-unit');
    const needle = document.getElementById('needle');
    const maxSpeedElement = document.getElementById('max-speed');
    const maxSpeedUnitElement = document.querySelector('.max-speed-unit');
    const unitButtons = document.querySelectorAll('.btn-unit');
    const gpsStatus = document.getElementById('gps-status');
    const coordinatesElement = document.getElementById('coordinates');

    let currentSpeed = 0;
    let maxSpeed = 0;
    let currentUnit = 'kmh';
    let watchId = null;
    let isRunning = false;
    let lastPosition = null;
    let lastTimestamp = null;

    // Unit conversion factors
    const units = {
        kmh: { label: 'km/h', max: 200, conversion: 1 },
        mph: { label: 'mph', max: 120, conversion: 0.621371 },
        ms: { label: 'm/s', max: 60, conversion: 0.277778 }
    };

    // Handle unit selection
    unitButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            unitButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Update current unit
            currentUnit = this.dataset.unit;

            // Update speed unit display
            speedUnit.textContent = units[currentUnit].label;
            maxSpeedUnitElement.textContent = units[currentUnit].label;

            // Update max speed display with converted value
            if (maxSpeed > 0) {
                const convertedMaxSpeed = convertSpeed(maxSpeed, 'kmh', currentUnit);
                maxSpeedElement.textContent = convertedMaxSpeed.toFixed(1);
            }

            // Update speed display with converted value
            if (currentSpeed > 0) {
                const convertedSpeed = convertSpeed(currentSpeed, 'kmh', currentUnit);
                speedValue.textContent = convertedSpeed.toFixed(1);
                updateNeedlePosition(convertedSpeed, units[currentUnit].max);
            }

            // Update speedometer labels
            updateSpeedometerLabels();
        });
    });

    // Start/Stop button functionality
    startBtn.addEventListener('click', function () {
        if (isRunning) {
            stopGPSTracking();
            this.innerHTML = '<i class="fas fa-location-arrow"></i> Start GPS Speed Test';
            gpsStatus.innerHTML = '<i class="fas fa-circle"></i> GPS Not Active';
            gpsStatus.className = 'gps-status gps-inactive';
        } else {
            startGPSTracking();
            this.innerHTML = '<i class="fas fa-stop"></i> Stop GPS Tracking';
        }
        isRunning = !isRunning;
    });

    function startGPSTracking() {
        if (navigator.geolocation) {
            gpsStatus.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Acquiring GPS Signal...';
            gpsStatus.className = 'gps-status gps-active';

            watchId = navigator.geolocation.watchPosition(
                position => {
                    // GPS signal acquired
                    gpsStatus.innerHTML = '<i class="fas fa-circle"></i> GPS Active';
                    gpsStatus.className = 'gps-status gps-active';

                    const newPosition = position.coords;
                    const newTimestamp = position.timestamp;

                    // Update coordinates display
                    coordinatesElement.textContent =
                        `Latitude: ${newPosition.latitude.toFixed(6)}, Longitude: ${newPosition.longitude.toFixed(6)}`;

                    // Calculate speed if we have previous position
                    if (lastPosition && lastTimestamp) {
                        const timeDiff = (newTimestamp - lastTimestamp) / 1000; // in seconds
                        if (timeDiff > 0) {
                            // Calculate distance between coordinates (in meters)
                            const distance = calculateDistance(
                                lastPosition.latitude,
                                lastPosition.longitude,
                                newPosition.latitude,
                                newPosition.longitude
                            );

                            // Speed in m/s
                            const speedMs = distance / timeDiff;

                            // Convert to km/h for storage (we'll convert to other units when displaying)
                            currentSpeed = speedMs * 3.6;

                            // Update max speed
                            if (currentSpeed > maxSpeed) {
                                maxSpeed = currentSpeed;
                                const convertedMaxSpeed = convertSpeed(maxSpeed, 'kmh', currentUnit);
                                maxSpeedElement.textContent = convertedMaxSpeed.toFixed(1);
                            }

                            // Convert speed to current unit
                            const displaySpeed = convertSpeed(currentSpeed, 'kmh', currentUnit);

                            // Update displays
                            speedValue.textContent = displaySpeed.toFixed(1);
                            updateNeedlePosition(displaySpeed, units[currentUnit].max);
                        }
                    }

                    // Store current position for next calculation
                    lastPosition = newPosition;
                    lastTimestamp = newTimestamp;
                },
                error => {
                    // Handle errors
                    let errorMessage;
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            errorMessage = "User denied the request for Geolocation.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            errorMessage = "Location information is unavailable.";
                            break;
                        case error.TIMEOUT:
                            errorMessage = "The request to get user location timed out.";
                            break;
                        case error.UNKNOWN_ERROR:
                            errorMessage = "An unknown error occurred.";
                            break;
                    }

                    gpsStatus.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${errorMessage}`;
                    gpsStatus.className = 'gps-status gps-inactive';

                    // Reset values
                    currentSpeed = 0;
                    speedValue.textContent = '0';
                    updateNeedlePosition(0, units[currentUnit].max);
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 5000
                }
            );
        } else {
            gpsStatus.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Geolocation is not supported by this browser.';
            gpsStatus.className = 'gps-status gps-inactive';
        }
    }

    function stopGPSTracking() {
        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            watchId = null;
        }

        // Smoothly reset speed display
        const decelerateInterval = setInterval(() => {
            currentSpeed = Math.max(0, currentSpeed - 5);
            const displaySpeed = convertSpeed(currentSpeed, 'kmh', currentUnit);

            speedValue.textContent = displaySpeed.toFixed(1);
            updateNeedlePosition(displaySpeed, units[currentUnit].max);

            if (currentSpeed <= 0) {
                clearInterval(decelerateInterval);
            }
        }, 100);
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
        // Haversine formula to calculate distance between two coordinates
        const R = 6371e3; // Earth radius in meters
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
        // Convert to km/h first
        let kmhSpeed;
        if (fromUnit === 'kmh') kmhSpeed = speed;
        else if (fromUnit === 'mph') kmhSpeed = speed / 0.621371;
        else if (fromUnit === 'ms') kmhSpeed = speed / 0.277778;

        // Convert to target unit
        if (toUnit === 'kmh') return kmhSpeed;
        else if (toUnit === 'mph') return kmhSpeed * 0.621371;
        else if (toUnit === 'ms') return kmhSpeed * 0.277778;
    }

    function updateNeedlePosition(speed, maxSpeed) {
        // Calculate angle (-90deg to 90deg for 0 to maxSpeed)
        const angle = (speed / maxSpeed) * 180 - 90;
        needle.style.transform = `translateX(-50%) rotate(${Math.min(angle, 90)}deg)`;
    }

    function updateSpeedometerLabels() {
        // Hide all labels first
        document.querySelectorAll('.kmh-label, .mph-label, .ms-label').forEach(label => {
            label.style.display = 'none';
        });

        // Show labels for current unit
        document.querySelectorAll(`.${currentUnit}-label`).forEach(label => {
            label.style.display = 'block';
        });
    }
});