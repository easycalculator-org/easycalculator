 document.addEventListener('DOMContentLoaded', function() {
            const resultContainer = document.getElementById('result-container');
            const spinner = document.getElementById('spinner');
            const errorMessage = document.getElementById('error-message');
            const locationAccess = document.getElementById('location-access');
            const zipcodeResult = document.getElementById('zipcode-result');
            const fullAddress = document.getElementById('full-address');
            const tryAgainBtn = document.getElementById('try-again-btn');
            const manualEntry = document.getElementById('manual-entry');
            const manualSubmit = document.getElementById('manual-submit');
            const manualAddress = document.getElementById('manual-address');
            const mapContainer = document.getElementById('map-container');
            
            let map = null;
            let marker = null;
            
            // Show spinner immediately
            spinner.style.display = 'block';
            
            // Function to show error message
            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
                spinner.style.display = 'none';
                manualEntry.style.display = 'block';
                resultContainer.style.display = 'none';
            }
            
            // Function to properly initialize map
            function initMap(lat, lon) {
                // Ensure map container is visible first
                mapContainer.style.display = 'block';
                
                // Remove existing map if it exists
                if (map) {
                    map.remove();
                    map = null;
                }
                
                // Small timeout to allow DOM to update
                setTimeout(() => {
                    try {
                        map = L.map('map', {
                            // These options help with display issues
                            preferCanvas: true,
                            zoomControl: true
                        }).setView([lat, lon], 15);
                        
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                            maxZoom: 19,
                            detectRetina: true
                        }).addTo(map);
                        
                        if (marker) {
                            marker.remove();
                        }
                        
                        marker = L.marker([lat, lon]).addTo(map)
                            .bindPopup("Your Location")
                            .openPopup();
                            
                        // Force map to invalidate size after being made visible
                        setTimeout(() => {
                            map.invalidateSize({
                                animate: false,
                                pan: false
                            });
                        }, 100);
                        
                    } catch (e) {
                        console.error("Map initialization error:", e);
                        showError("Failed to load map. Please try again.");
                    }
                }, 50);
            }
            
            // Rest of your existing JavaScript code remains the same...
            // [Previous getLocationDetails, processLocation, and event handlers]
            
            // Function to get zip code from coordinates
            async function getLocationDetails(lat, lon) {
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    
                    if (data.error) {
                        throw new Error(data.error);
                    }
                    
                    const address = data.address;
                    const zip = address.postcode;
                    const displayAddress = [
                        address.road || address.pedestrian,
                        address.city || address.town || address.village,
                        address.state,
                        address.country
                    ].filter(Boolean).join(', ');
                    
                    return { zip, displayAddress };
                } catch (error) {
                    console.error('Error fetching location details:', error);
                    throw new Error('Could not retrieve location details. Please try again.');
                }
            }
            
            // Function to process location
            async function processLocation(latitude, longitude) {
                try {
                    initMap(latitude, longitude);
                    const { zip, displayAddress } = await getLocationDetails(latitude, longitude);
                    
                    zipcodeResult.textContent = zip || 'Not available';
                    fullAddress.textContent = displayAddress || 'Address not available';
                    
                    spinner.style.display = 'none';
                    resultContainer.style.display = 'block';
                    manualEntry.style.display = 'none';
                    errorMessage.style.display = 'none';
                } catch (error) {
                    showError(error.message);
                }
            }
            
            // Automatically request location on page load
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        processLocation(
                            position.coords.latitude, 
                            position.coords.longitude
                        );
                    },
                    function(error) {
                        let errorMsg = '';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMsg = "You denied the request for geolocation.";
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMsg = "Location information is unavailable.";
                                break;
                            case error.TIMEOUT:
                                errorMsg = "The request to get location timed out.";
                                break;
                            case error.UNKNOWN_ERROR:
                                errorMsg = "An unknown error occurred.";
                                break;
                        }
                        showError(errorMsg);
                    },
                    { 
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    }
                );
            } else {
                showError("Geolocation is not supported by this browser.");
            }
            
            // Try again button
            tryAgainBtn.addEventListener('click', function() {
                resultContainer.style.display = 'none';
                spinner.style.display = 'block';
                errorMessage.style.display = 'none';
                
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function(position) {
                            processLocation(
                                position.coords.latitude, 
                                position.coords.longitude
                            );
                        },
                        function(error) {
                            showError("Could not refresh location. Please try again.");
                        }
                    );
                } else {
                    showError("Geolocation is not supported.");
                }
            });
            
            // Manual address submission
            manualSubmit.addEventListener('click', async function() {
                const address = manualAddress.value.trim();
                if (!address) {
                    showError("Please enter an address");
                    return;
                }
                
                spinner.style.display = 'block';
                errorMessage.style.display = 'none';
                resultContainer.style.display = 'none';
                
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&addressdetails=1`);
                    if (!response.ok) throw new Error('Network response was not ok');
                    const data = await response.json();
                    
                    if (data.length === 0) {
                        throw new Error("Address not found");
                    }
                    
                    const firstResult = data[0];
                    await processLocation(parseFloat(firstResult.lat), parseFloat(firstResult.lon));
                } catch (error) {
                    showError("Could not find the address. Please try a different one.");
                }
            });
        });