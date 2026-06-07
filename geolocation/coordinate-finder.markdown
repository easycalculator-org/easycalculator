---
layout: default
title: Coordinate Finder – Find Latitude and Longitude Coordinates Online
permalink: /coordinate-finder
description: "Find exact GPS coordinates (latitude and longitude) for any location on the map. Search places, click anywhere on the map, and instantly get coordinates with easy copy and share options."
image: "/assets/images/og/coordinate-finder.jpg"
last_modified_at: 2026-05-28
---

<!-- Leaflet CSS & JS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
 <style>
    /* Minimal CSS for map and UI */
    #map {
      height: 650px;
      width: 100%;
      border-radius: 0.5rem;
      background: #c8e0f0;
    }
    .coord-card {
      transition: all 0.1s ease;
    }
    .coord-value {
      font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
      font-size: 1rem;
      word-break: break-word;
    }
    .dms-value {
      font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
      font-size: 0.9rem;
    }
    .toggle-switch-lg .form-check-input {
      width: 3rem;
      height: 1.5rem;
      cursor: pointer;
    }
    .toggle-switch-lg .form-check-input:checked {
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
    .map-type-btn.active {
      background-color: #0d6efd !important;
      color: white !important;
      border-color: #0d6efd !important;
    }
    .btn-download {
      background: linear-gradient(135deg, #28a745, #20c997);
      border: none;
      color: white;
    }
    .btn-download:hover {
      background: linear-gradient(135deg, #218838, #1aa179);
      color: white;
    }
  </style>

<div aria-label="breadcrumb" class="mb-3 p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">Coordinate Finder </li>
  </ol>
</div>
<!-- Main Card -->
<div class="card shadow border-0 rounded-4 overflow-hidden">
    <div class="card-header bg-white border-bottom py-3 px-4">
            <div>
              <h1>Coordinate Finder</h1>
            </div>
          </div>
<div class="card-body p-4"> 
 <!-- Map Type Toggle Buttons -->
    <div class="row g-2 mb-4">
      <div class="col-12">
        <div class="d-flex gap-2 flex-wrap justify-content-center justify-content-md-start">
          <button class="btn btn-outline-primary map-type-btn active" id="streetMapBtn">Street Map</button>
          <button class="btn btn-outline-primary map-type-btn" id="satelliteMapBtn">Satellite View</button>
          <button class="btn btn-success" id="currentLocationBtn">My Current Location</button>
          <button class="btn btn-download" id="downloadMapBtn">Download Map Screenshot</button>
        </div>
       </div>
     </div>
<!-- Coordinate Format Toggle -->
<div class="row g-3 mb-4">
            <div class="col-12">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
                <div class="d-flex align-items-center gap-2"><span class="fw-semibold">Coordinate Format:</span></div>
                <div class="form-check form-switch toggle-switch-lg">
                  <input class="form-check-input" type="checkbox" id="formatToggle" role="switch">
                  <label class="form-check-label fw-medium" for="formatToggle" id="toggleLabel"> Show DMS (Degrees/Minutes/Seconds)</label>
                </div>
              </div>
            </div>
          </div>
<!-- Decimal Degrees Panel -->
<div id="decimalPanel" class="row g-3 mb-4">
            <div class="col-md-6">
              <div class="card bg-light border-0 shadow-sm h-100 coord-card">
                <div class="card-body">
                  <div class="d-flex align-items-center gap-2 mb-2"><span class="text-uppercase small fw-bold text-secondary">Latitude (Decimal)</span></div>
                  <div class="coord-value fs-3 fw-semibold" id="latDecimal">—</div>
                  <small class="text-muted">WGS84 • 6 decimal places • -90 to 90</small>
                </div>
              </div>
            </div>
<div class="col-md-6">
              <div class="card bg-light border-0 shadow-sm h-100 coord-card">
                <div class="card-body">
                  <div class="d-flex align-items-center gap-2 mb-2"><span class="text-uppercase small fw-bold text-secondary">Longitude (Decimal)</span> </div>
                  <div class="coord-value fs-3 fw-semibold" id="lngDecimal">—</div>
                  <small class="text-muted">WGS84 • 6 decimal places • -180 to 180</small>
                </div>
              </div>
            </div>
          </div>
          
<!-- DMS Panel (hidden by default) -->
 <div id="dmsPanel" class="row g-3 mb-4" style="display: none;">
    <div class="col-md-6">
     <div class="card bg-light border-0 shadow-sm h-100 coord-card">
       <div class="card-body">
       <div class="d-flex align-items-center gap-2 mb-2"><span class="text-uppercase small fw-bold text-secondary">Latitude (DMS)</span></div>
       <div class="dms-value fs-5 fw-semibold" id="latDMS">—</div><small class="text-muted">Degrees ° Minutes ' Seconds "</small></div>
       </div>
      </div>
       <div class="col-md-6">
        <div class="card bg-light border-0 shadow-sm h-100 coord-card">
         <div class="card-body">
          <div class="d-flex align-items-center gap-2 mb-2"><span class="text-uppercase small fw-bold text-secondary">Longitude (DMS)</span></div>
          <div class="dms-value fs-5 fw-semibold" id="lngDMS">—</div> <small class="text-muted">Degrees ° Minutes ' Seconds "</small></div>
         </div>
        </div>
       </div>
          
<!-- Map Container -->
<div class="mb-3" id="mapContainer">
  <div id="map"></div>
  <div class="mt-2 text-center"><small class="text-muted">Click anywhere on the map to get coordinates</small> </div>
 </div>
          
<!-- Current Location Info & Copy Buttons -->
<div class="row g-3 mt-2">
<div class="col-md-7">
 <div class="alert alert-secondary py-2 px-3 mb-0 small" role="alert"><strong>📍 Selected Point:</strong> <span id="locationInfo" class="fw-semibold">Click on map</span></div>
</div>
<div class="col-md-5">
  <div class="d-flex gap-2">
   <button class="btn btn-outline-primary flex-grow-1" id="copyDecimalBtn"><i class="fa-regular fa-clipboard"></i> Copy Decimal</button>
    <button class="btn btn-outline-success flex-grow-1" id="copyDMSBtn"> <i class="fa-regular fa-clipboard"></i> Copy DMS</button>
   </div>
   </div>
   </div>
  </div>
 </div>


<script src="{{ '/assets/js/geolocation/coordinate-finder.js' | relative_url }}"></script>

