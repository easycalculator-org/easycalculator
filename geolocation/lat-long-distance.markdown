---
layout: default
title: Calculate Distance from Latitude and Longitude – Easy & Accurate Tool
permalink: /calculate-distance-from-latitude-longitude
description: "Use this free online tool to calculate the distance between two locations using latitude and longitude coordinates. Accurate, fast, and ideal for mapping, travel, or geolocation analysis."
last_modified_at: 2026-02-28
---
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<style>
#map,.card{box-shadow:0 4px 8px rgba(0,0,0,.1)}:root{--primary-color:#4361ee;--secondary-color:#3f37c9;--danger-color:#f72585;--success-color:#4cc9f0}#map{height:550px;width:100%;border-radius:10px}.card{border:none;border-radius:10px}.card-header{background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:#fff;border-radius:10px 10px 0 0!important}.btn-reset,.departure-marker{background-color:var(--danger-color)}.btn-reset{border-color:var(--danger-color)}.airplane-icon{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%234361ee"><path d="M22 16.21v-1.895L14 8V4a2 2 0 0 0-4 0v4l-8 6.315v1.895l8-2.526V18l-2 2v2l3.5-1 3.5 1v-2l-2-2v-4.316l8 2.526z"/></svg>');background-size:contain;width:40px;height:40px;transition:transform .3s}.arrival-marker,.departure-marker{width:24px;height:24px;border-radius:50%;display:flex;color:#fff;font-size:12px}.departure-marker{align-items:center;justify-content:center}.arrival-marker{background-color:var(--success-color);align-items:center;justify-content:center}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}.pulse{animation:2s infinite pulse}
</style>

<div class="d-flex justify-content-between align-items-center mb-4">
<h1 class="mb-0">Calculate Distance from Latitude and Longitude</h1>
 <!-- <button id="resetBtn" class="btn btn-reset text-white"><i class="fas fa-redo me-1"></i>Reset</button> -->
</div>
 <div class="row g-4">
   <div class="col-md-5">
    <div class="card">
       <div class="card-header"><h5 class="mb-0">Coordinates Input Points</h5></div>
          <div class="card-body">
             <form id="coordinatesForm">
               <div class="mb-3"><label for="startCoords" class="form-label">Point A (Lat, Long)</label><input type="text" class="form-control" id="startCoords"  placeholder="28.2563 85.2563 or 28.2563,85.2563" required></div>
                <div class="mb-3"><label for="endCoords" class="form-label">Point B (Lat, Long)</label><input type="text" class="form-control" id="endCoords"  placeholder="27.7172 85.3240 or 27.7172,85.3240" required> </div>
                <div class="d-flex flex-column gap-4">
                  <button type="submit" class="btn btn-primary w-100"><i class="fas fa-paper-plane me-1"></i>Calculate Distance </button>
                  <button id="resetBtn" class="btn btn-reset text-white w-100"><i class="fas fa-redo me-1"></i>Reset</button>
                </div>
               </form>
              </div>
                </div>
                <div class="card mt-4 d-none" id="flightInfo">
                    <div class="card-header">
                        <h5 class="mb-0">Information</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <div>Distance:</div>
                            <div class="fw-bold"><span id="distanceValue">0</span> km</div>
                        </div>
                        <!-- <div class="d-flex justify-content-between mb-2">
                            <div>Duration:</div>
                            <div class="fw-bold"><span id="durationValue">0</span> hours</div>
                        </div> -->
                        <div class="d-flex justify-content-between">
                            <div>Bearing:</div>
                            <div class="fw-bold"><span id="bearingValue">0</span>°</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div id="map"></div>
            </div>
        </div>
<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <div class="d-flex align-items-center">
           {% include naren_create.html %}
           {% include reema_verify.html %}
        </div>
         <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i>Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
      </div>
  <!-- What is Section1 -->
<section class="mb-5">

<h2 class="fw-bold">Calculate Distance from Latitude and Longitude</h2>

<p>
When you need to find the <strong>distance between 2 lat long points</strong>, using 
latitude and longitude coordinates is one of the most accurate methods available. 
Whether you're calculating the <strong>distance between geographic coordinates</strong> 
for travel, GIS mapping, logistics, or development purposes, this technique provides 
reliable real-world results.
</p>

<p>
In this guide, you'll learn how to calculate the <strong>distance between map coordinates</strong>, 
understand the formulas behind the calculation (including the Haversine formula), and use 
a simple online tool to get instant results.
</p>

<h3 class="fw-semibold mt-4">🌍 What Are Latitude and Longitude?</h3>

<p>
Latitude and longitude form the <strong>geographic coordinate system</strong> used to 
pinpoint any location on Earth accurately.
</p>

<ul class="mb-3">
  <li><strong>Latitude:</strong> Measures how far north or south a location is from the Equator (range: −90° to +90°).</li>
  <li><strong>Longitude:</strong> Measures how far east or west a location is from the Prime Meridian (range: −180° to +180°).</li>
</ul>

<p><strong>Example coordinates:</strong></p>

<ul>
  <li><strong>Location A (New York City):</strong> 40.7128, −74.0060</li>
  <li><strong>Location B (Los Angeles):</strong> 34.0522, −118.2437</li>
</ul>

<div class="highlight-box mt-4">
  <h5 class="mb-2">
    <i class="fas fa-lightbulb text-warning me-2"></i>
    Did You Know?
  </h5>
  <p class="mb-0">
    ✈️ The shortest path between two points on Earth is not a straight line on a flat map. 
    It follows a curved route called the <strong>great-circle distance</strong>, which is 
    what most aircraft use for efficient navigation.
  </p>
</div>







<!-- FAQ Section -->
 <section class="mb-5">
        <h2 class="mb-4">FAQ</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. How do you calculate the distance between 2 lat long coordinates?</div>
            <p class="mb-0">The distance between 2 latitude and longitude points is typically calculated using the <strong>Haversine formula</strong>, which accounts for the Earth's curvature. Simply input the coordinates into a distance calculator to get accurate results in kilometers or miles.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. What is the most accurate way to measure distance between geographic coordinates?</div>
            <p class="mb-0">The most accurate method to measure distance between geographic coordinates is the <strong>great-circle distance</strong> using the Haversine formula or Vincenty formula. These methods consider the Earth's spherical shape for precise calculations.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3.Why do developers calculate distance between geographic coordinates?</div>
            <p class="mb-0">Developers calculate distance between geographic coordinates for applications such as GPS tracking, delivery apps, ride-sharing, geofencing, mapping services, and location-based analytics.</p>
          </div>
        </div>
      </section>


</section>

<!-- Article  -->

<script src="{{ '/assets/js/lat-long-distance-calc.js' | relative_url }}"></script>
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- Turf.js for distance calculations -->
<script src="https://unpkg.com/@turf/turf@6/turf.min.js"></script>
    

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate the distance between 2 lat long coordinates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The distance between two latitude and longitude points is typically calculated using the Haversine formula, which accounts for the Earth's curvature. Enter the coordinates into a distance calculator to get accurate results in kilometers or miles."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most accurate way to measure distance between geographic coordinates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most accurate method to measure distance between geographic coordinates is the great-circle distance using the Haversine or Vincenty formula. These methods consider the Earth's spherical shape for precise calculations."
      }
    },
    {
      "@type": "Question",
      "name": "Why do developers calculate distance between geographic coordinates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Developers calculate distance between geographic coordinates for GPS tracking, delivery apps, ride-sharing platforms, geofencing, mapping services, and other location-based applications."
      }
    }
  ]
}
</script>



