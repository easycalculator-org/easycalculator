 // Initialize the map
 const map = L.map('map').setView([0, 0], 2);

 // Add a tile layer to the map (OpenStreetMap tiles)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);
 
 // Function to update the map and details based on IP geolocation
 function updateLocation(ip, lat, lng, city, region, country) {
     map.setView([lat, lng], 13);
     L.marker([lat, lng]).addTo(map)
         .bindPopup(`<strong>IP Address:</strong> ${ip}<br><strong>City:</strong> ${city}<br><strong>Region:</strong> ${region}<br><strong>Country:</strong> ${country}`)
         .openPopup();
     document.getElementById('ip').innerText = ip;
     document.getElementById('city').innerText = city;
     document.getElementById('region').innerText = region;
     document.getElementById('country').innerText = country;
     document.getElementById('latitude').innerText = lat;
     document.getElementById('longitude').innerText = lng;
 }
 
 // Get the user's IP address and location using an IP geolocation API
 fetch('https://ipapi.co/json/')
     .then(response => response.json())
     .then(data => {
         const ip = data.ip;
         const lat = data.latitude;
         const lng = data.longitude;
         const city = data.city;
         const region = data.region;
         const country = data.country_name;
         updateLocation(ip, lat, lng, city, region, country);
     })
     .catch(error => {
         console.error('Error fetching IP geolocation:', error);
         alert('Unable to retrieve location data.');
     });


      // Get references to the copy button and the content div
    const copyButton = document.getElementById('copy-button');
    const copyContent = document.getElementById('copy-content');
    const statusMessage = document.getElementById('status-message');

    // Function to copy content of the div
    copyButton.addEventListener('click', function() {
        // Create a temporary textarea element to copy text from the div
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = copyContent.innerText; // Get the content of the div
        document.body.appendChild(tempTextArea); // Append it to the body
        tempTextArea.select(); // Select the text
        document.execCommand('copy'); // Copy to clipboard
        document.body.removeChild(tempTextArea); // Remove the temporary textarea

        // Show a success message
        statusMessage.classList.remove('d-none'); // Show the message
        setTimeout(() => {
            statusMessage.classList.add('d-none'); // Hide after 3 seconds
        }, 3000);
    });
 
    // for geolocation
   

    // Function to get user's location
    function getLocation() {
        // Check if Geolocation is supported
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            document.getElementById('error-message').innerText = "Geolocation is not supported by this browser.";
        }
    }

    // Function to show user's position
    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

       


        // Get address from coordinates
        getAddressFromCoordinates(latitude, longitude);
    }

    // Function to show map and add marker
   

    // Function to get address from coordinates using Nominatim
    function getAddressFromCoordinates(latitude, longitude) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.address) {
                    const address = data.display_name;
                    document.getElementById('address').innerText = address;
                } else {
                    document.getElementById('address').innerText = "Unable to retrieve address.";
                }
            })
            .catch(error => {
                document.getElementById('address').innerText = "Error fetching address.";
                console.error('Error:', error);
            });
    }

    // Function to handle errors
    function showError(error) {
        let errorMessage = '';
        switch (error.code) {
            case error.PERMISSION_DENIED:
                errorMessage = "You denied the request for Geolocation.";
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
        document.getElementById('error-message').innerText = errorMessage;
    }