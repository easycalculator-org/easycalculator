 // DOM Elements
        const epochInput = document.getElementById('epochInput');
        const dateInput = document.getElementById('dateInput');
        const timeInput = document.getElementById('timeInput');
        const humanResult = document.getElementById('humanResult');
        const epochResult = document.getElementById('epochResult');
        const epochTimeDisplay = document.getElementById('epoch-time');
        const convertEpochBtn = document.getElementById('convertEpochBtn');
        const convertHumanBtn = document.getElementById('convertHumanBtn');
        const copyEpochBtn = document.getElementById('copyEpochBtn');
        const useCurrentBtn = document.getElementById('useCurrentBtn');
        
        // Format date to readable string
        function formatDate(date) {
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            };
            return date.toLocaleString('en-US', options);
        }
        
        // Convert epoch to human date
        function convertEpochToHuman() {
            const epochValue = parseInt(epochInput.value);
            
            if (isNaN(epochValue)) {
                humanResult.textContent = "Please enter a valid Unix timestamp";
                humanResult.style.color = "#dc3545";
                return;
            }
            
            // Check if timestamp is in milliseconds (13 digits)
            const timestamp = epochValue.toString().length === 13 ? epochValue : epochValue * 1000;
            const date = new Date(timestamp);
            
            if (isNaN(date.getTime())) {
                humanResult.textContent = "Invalid timestamp. Please try again.";
                humanResult.style.color = "#dc3545";
                return;
            }
            
            humanResult.textContent = formatDate(date) + " (Local Time)";
            humanResult.style.color = "#000";
        }
        
        // Convert human date to epoch
        function convertHumanToEpoch() {
            const dateString = dateInput.value + 'T' + timeInput.value;
            const date = new Date(dateString);
            
            if (isNaN(date.getTime())) {
                epochResult.textContent = "Invalid date/time. Please try again.";
                epochResult.style.color = "#dc3545";
                return;
            }
            
            // Get timestamp in seconds
            const epoch = Math.floor(date.getTime() / 1000);
            epochResult.textContent = epoch;
            epochResult.style.color = "#000";
        }
        
        // Update the epoch time every second
        function updateEpochTime() {
            const epochTime = Math.floor(Date.now() / 1000);
            epochTimeDisplay.textContent = epochTime;
        }
        
        // Copy current epoch time to clipboard
        function copyEpochTime() {
            const epochTime = Math.floor(Date.now() / 1000);
            navigator.clipboard.writeText(epochTime);
            
            // Show feedback
            const originalText = copyEpochBtn.innerHTML;
            copyEpochBtn.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
            setTimeout(() => {
                copyEpochBtn.innerHTML = originalText;
            }, 2000);
        }
        
        // Use current time for conversion
        function useCurrentTime() {
            const now = new Date();
            
            // Set date input
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            dateInput.value = `${year}-${month}-${day}`;
            
            // Set time input
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeInput.value = `${hours}:${minutes}`;
            
            // Convert to epoch
            convertHumanToEpoch();
        }
        
        // Initialize with current time
        function initializeWithCurrentTime() {
            const now = new Date();
            
            // Set date input
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            dateInput.value = `${year}-${month}-${day}`;
            
            // Set time input
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeInput.value = `${hours}:${minutes}`;
            
            // Convert to epoch
            convertHumanToEpoch();
        }
        
        // Event Listeners
        convertEpochBtn.addEventListener('click', convertEpochToHuman);
        convertHumanBtn.addEventListener('click', convertHumanToEpoch);
        copyEpochBtn.addEventListener('click', copyEpochTime);
        useCurrentBtn.addEventListener('click', useCurrentTime);
        
        // Initial update
        updateEpochTime();
        initializeWithCurrentTime();
        
        // Update every second
        setInterval(updateEpochTime, 1000);
        
        // Also convert when pressing Enter in epoch input
        epochInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                convertEpochToHuman();
            }
        });