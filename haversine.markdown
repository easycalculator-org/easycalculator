---
layout: default
title: Haversine Distance Calculator – Accurate Air Distance Tool
permalink: /haversine-distance
description: "Calculate accurate great-circle distances between two latitude-longitude points using the Haversine formula. Ideal for aviation, geolocation, and mapping."
image: "/assets/images/haversine-distance-calculator-formula.jpg"
last_modified_at: 2026-02-03
---
 <style> 
  .formula {
            font-family: 'Courier New', Courier, monospace;
            background-color: #f8f9fa;
            padding: 1.5rem;
            border-radius: 10px;
            margin: 1.5rem 0;
            border: 1px solid #eee;
            font-size: 1.1rem;
            color: var(--secondary-color);
        }
         .calculator-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
        }
        .result-box {
            background-color: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .form-label {
            font-weight: 500;
        }
        </style>



 <div class="calculator-container">
    <h1 class="text-center mb-1">Haversine Distance Calculator</h1>
     <p class="text-muted text-center mb-4">Calculate the great-circle distance between two points on Earth</p>
        <form id="haversineForm">
            <div class="row mb-3">
                <div class="col-md-6">
                    <h5>Point A</h5>
                    <div class="mb-3">
                        <label for="lat1" class="form-label">Latitude</label>
                        <input type="number" class="form-control" id="lat1" step="any" placeholder="e.g. 40.7128" required>
                    </div>
                    <div class="mb-3">
                        <label for="lon1" class="form-label">Longitude</label>
                        <input type="number" class="form-control" id="lon1" step="any" placeholder="e.g. -74.0060" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5>Point B</h5>
                    <div class="mb-3">
                        <label for="lat2" class="form-label">Latitude</label>
                        <input type="number" class="form-control" id="lat2" step="any" placeholder="e.g. 34.0522" required>
                    </div>
                    <div class="mb-3">
                        <label for="lon2" class="form-label">Longitude</label>
                        <input type="number" class="form-control" id="lon2" step="any" placeholder="e.g. -118.2437" required>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="unit" class="form-label">Unit of Measurement</label>
                <select class="form-select" id="unit">
                    <option value="km">Kilometers</option>
                    <option value="m">Meters</option>
                    <option value="mi">Miles</option>
                    <option value="nmi">Nautical Miles</option>
                </select>
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Calculate Distance</button>
            </div>
        </form>
        <div id="result" class="result-box text-center" style="display: none;">
            <h4>Result</h4>
            <p>The distance between the two points is:</p>
            <p class="display-6" id="distanceResult">0 km</p>
        </div>
    </div>        

<!-- Article Content -->
<div class="article-container">
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
  <!-- What is Section1 -->
<section class="mb-5">
<h3>What is a Haversine Distance Calculator?</h3>
<p>The Haversine Distance Calculator helps determine the shortest distance over the Earth’s surface between two geographic points based on their latitude and longitude coordinates. This calculation assumes a spherical Earth and uses the Haversine formula—a well-known equation in navigation and mapping applications. <br> Whether you’re a developer, traveler, GIS analyst, or someone who needs to calculate geographic distances, this tool gives you quick and reliable results.</p>
<h3>How Does the Haversine Formula Work?</h3>
<p>The Haversine formula is based on spherical trigonometry and calculates the great-circle distance between two points on the surface of a sphere, making it perfect for geographical distance calculations.</p>

<h4 class="mt-4">The Haversine Formula:</h4>
                    <div class="formula">
                        <div class="mb-3">a = sin²(Δφ/2) + cos(φ₁) · cos(φ₂) · sin²(Δλ/2)</div>
                        <div class="mb-3">c = 2 · atan2(√a, √(1−a))</div>
                        <div>d = R · c</div>
                    </div>

<div class="bg-light p-4 rounded mt-4">
   <h4 class="text-primary"><i class="fas fa-star me-2"></i>Variables Explained:</h4>
    <ul class="list-group list-group-flush">
     <li class="list-group-item bg-light"><strong>φ₁, φ₂ </strong>: Latitudes of point 1 and point 2 (in radians)</li>
      <li class="list-group-item bg-light"><strong>λ₁, λ₂ </strong>: Longitudes of point 1 and point 2 (in radians)</li>
         <li class="list-group-item bg-light"><strong>φ </strong>: Difference between latitudes (φ₂ - φ₁)</li>
         <li class="list-group-item bg-light"><strong>Δλ</strong>: Difference between longitudes (λ₂ - λ₁)</li>
         <li class="list-group-item bg-light"><strong>R</strong>: Earth's radius (6,371 km or 3,959 miles)</li>
         <li class="list-group-item bg-light"><strong>d</strong>:  Distance between the two points</li>
        </ul>
     </div>

<!-- Haversine Excel Section -->
<section class="container my-5">
  <div class="text-center mb-4">
   <h2 class="fw-bold">📊 Haversine Distance in Excel</h2>
   <p class="text-muted"> Calculate the great-circle distance between two latitude and longitude  points directly in Microsoft Excel using the formula below.</p>
  </div>

  <div class="row justify-content-center g-4">
    <!-- Excel Formula Card -->
    <div class="col-lg-8">
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title fw-bold mb-3"> 🧮 Excel Formula (Kilometers) </h5>
          <!-- Formula Box -->
          <div class="position-relative">
            <button class="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2"  onclick="copyHaversineFormula(this)" title="Copy formula"> 📋 </button>
 <pre class="bg-light p-3 rounded small mb-0"><code id="haversineFormula">=6371*ACOS(
COS(RADIANS(A2))*COS(RADIANS(C2))*
COS(RADIANS(D2)-RADIANS(B2))+
SIN(RADIANS(A2))*SIN(RADIANS(C2))
)</code></pre> </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Example Table -->
  <div class="card shadow-sm border-0 mt-5">
    <div class="card-body">
      <h5 class="fw-bold mb-3">📌 Example Coordinates</h5>
      <div class="table-responsive">
        <table class="table table-bordered table-striped align-middle text-center">
          <thead class="table-light">
            <tr>
              <th>Latitude-1</th>
              <th>Longitude-1</th>
              <th>Latitude-2</th>
              <th>Longitude-2</th>
              <th>Distance in Kilometer</th>
              <th>Distance in Mile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>28.6139</td>
              <td>77.2090</td>
              <td>19.0760</td>
              <td>72.8777</td>
              <td>1148.09</td>
              <td>713.39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Download Button -->
  <div class="text-center mt-4">
    <a href="/assets/files/havershine-formula.xlsx" class="btn btn-primary btn-lg"> Download Sample Excel File</a>
    <p class="small text-muted mt-2 mb-0">Includes ready-to-use Haversine Excel formula and example data.</p>
  </div>

</section>




 <!-- FAQ Section -->
<section class="mb-5 pt-4">
        <h2 class="mb-4">FAQ on Haversine Distance Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the Haversine formula used for?</div>
            <p class="mb-0">The Haversine formula is used to calculate the shortest path (great-circle distance) between two points on a sphere, such as Earth. It's ideal for geographic coordinate calculations.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">2. Is the Haversine distance the same as driving distance?</div>
            <p class="mb-0">No. Haversine calculates the straight-line distance between two points on the Earth's surface. Driving distance may be longer due to road routes, terrain, and traffic.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">3. What is the accuracy of the Haversine formula? </div>
            <p class="mb-0">For most applications, the Haversine formula provides accurate results within a small margin of error. However, for high-precision needs (e.g., aviation, military), ellipsoidal models like Vincenty's may be preferred.</p>
          </div>
        </div>
      </section>


<div class="highlight-box">
  <h5><i class="fas fa-lightbulb text-warning me-2"></i> Did you know</h5><p class="mb-0">📏 The term "Haversine" comes from "half versed sine", a trigonometric function used in spherical geometry and navigation since the 19th century. <br>🗺️ The Haversine formula is widely used in GPS devices, geofencing applications, and fitness tracking apps like Strava or Runkeeper.</p>
   </div>
</section>
<script>
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
 </script>