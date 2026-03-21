  document.getElementById('haversineForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Get input values
            const lat1 = parseFloat(document.getElementById('lat1').value);
            const lon1 = parseFloat(document.getElementById('lon1').value);
            const lat2 = parseFloat(document.getElementById('lat2').value);
            const lon2 = parseFloat(document.getElementById('lon2').value);
            const unit = document.getElementById('unit').value;
            // Calculate distance
            const distance = haversineDistance(lat1, lon1, lat2, lon2, unit);
            // Display result
            document.getElementById('distanceResult').textContent = distance + ' ' + getUnitName(unit);
            document.getElementById('result').style.display = 'block';
        });
        function haversineDistance(lat1, lon1, lat2, lon2, unit) {
            // Earth radius in kilometers
            const R = 6371;
            // Convert degrees to radians
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            let distance = R * c;
            // Convert to selected unit
            switch(unit) {
                case 'm':
                    distance *= 1000;
                    break;
                case 'mi':
                    distance *= 0.621371;
                    break;
                case 'nmi':
                    distance *= 0.539957;
                    break;
                // km is default
            }
            // Round to 2 decimal places
            return Math.round(distance * 100) / 100;
        }
        function getUnitName(unit) {
            switch(unit) {
                case 'km': return 'km';
                case 'm': return 'meters';
                case 'mi': return 'miles';
                case 'nmi': return 'nautical miles';
                default: return '';
            }
        }
     function copyHaversineFormula(btn) {
  const text = document.getElementById("haversineFormula").innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerText = "✅";
    setTimeout(() => {
      btn.innerText = "📋";
    }, 1500);
  });
}