---
layout: default
title: Haversine Distance Calculator – Accurate Air Distance Tool
permalink: /haversine-distance
description: "Calculate accurate great-circle distances between two latitude-longitude points using the Haversine formula. Ideal for aviation, geolocation, and mapping."
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
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div class="d-flex align-items-center">
          <div class="bg-light p-2 rounded-circle d-flex align-items-center justify-content-center me-3"> <i class="fas fa-user text-primary"></i>
          </div>
          <div>
            <h5 class="mb-0">Created by :- Narendra</h5>
          </div>
        </div>
        <div class="text-muted">
         <i class="fas fa-calendar me-1"></i>Last Updated: 29-06-2025
        </div>
      </div>
  <!-- What is Section1 -->
<section class="mb-5">
<h3>What is a Haversine Distance Calculator?</h3>
<p>The Haversine Distance Calculator helps determine the shortest distance over the Earth’s surface between two geographic points based on their latitude and longitude coordinates. This calculation assumes a spherical Earth and uses the Haversine formula—a well-known equation in navigation and mapping applications. <br> Whether you’re a developer, traveler, GIS analyst, or someone who needs to calculate geographic distances, this tool gives you quick and reliable results.</p>
<h3>🌍How Does the Haversine Formula Work?</h3>
<p>The Haversine formula is based on spherical trigonometry and calculates the great-circle distance between two points on the surface of a sphere, making it perfect for geographical distance calculations.</p>

<h4 class="mt-4">The Formula:</h4>
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

 <!-- FAQ Section -->
<section class="mb-5">
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
    </script>