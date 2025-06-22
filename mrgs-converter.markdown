---
layout: default
title: Military Grid Reference System (MGRS) Converter | Convert MGRS Easily
permalink: /military-grid-reference-system-converter
description: "Easily convert Military Grid Reference System (MGRS) coordinates to latitude and longitude or vice versa with our powerful and easy online MGRS converter tool."
---
 <div class="container my-5">
    <h1 class="text-center mb-4">MGRS Coordinate Converter</h1>
    <div class="row g-4">
      <!-- MGRS to Lat/Long Card -->
      <div class="col-12 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-3">MGRS → Latitude & Longitude</h5>
            <div class="mb-3">
              <label for="mgrsInput" class="form-label">Enter MGRS Coordinate</label>
              <input type="text" class="form-control" id="mgrsInput" placeholder="e.g. 45RTJ5188250831" />
            </div>
            <button class="btn btn-primary w-100" onclick="convertMGRS()">Convert to Lat/Lon</button>
          </div>
        </div>
      </div>

  <!-- Lat/Long to MGRS Card -->
 <div class="col-12 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title mb-3">Latitude & Longitude → MGRS</h5>
            <div class="mb-3">
              <label for="latInput" class="form-label">Enter Latitude</label>
              <input type="number" step="any" class="form-control" id="latInput" placeholder="Latitude" />
            </div>
            <div class="mb-3">
              <label for="lonInput" class="form-label">Enter Longitude</label>
              <input type="number" step="any" class="form-control" id="lonInput" placeholder="Longitude" />
            </div>
            <button class="btn btn-success w-100" onclick="convertLatLonToMGRS()">Convert to MGRS</button>
          </div>
        </div>
      </div>
    </div>

 <div id="result" class="alert alert-info mt-4" style="display: none;">
      <h5 class="mb-3">Converted Coordinates:</h5>
      <p><strong>Latitude:</strong> <span id="latitude"></span></p>
      <p><strong>Longitude:</strong> <span id="longitude"></span></p>
      <p><strong>MGRS:</strong> <span id="mgrs"></span></p>
    </div>

 <div id="map" class="mt-4 rounded shadow-sm" style="height: 420px;"></div>
  </div>

  

  <script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.5/proj4.js"></script>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="{{ '/assets/js/mrgs.js' | relative_url }}"></script>