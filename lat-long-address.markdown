---
layout: default
title: Latitude and Longitude to Address Converter – Reverse Geocoding Tool
permalink: /latitude-longitude-to-address
description: "Convert GPS coordinates to a full address instantly with our free reverse geocoding tool. Fast, accurate, and easy to use."
---
<style>
        #map { height: 400px; width: 100%; margin-top: 15px; }
        #progressContainer { display: none; }
        textarea { width: 100%; height: 200px; resize: none; font-family: monospace; }
 </style>

<div class="container mt-5">
  <div class="card p-4 shadow-lg">
        <h2 class="mb-4 text-center">🌐 Reverse Geocoding Tool</h2>
        <div class="mb-3">
            <label for="latlong" class="form-label">📍 Paste Latitude, Longitude (Up to 100):</label>
            <textarea class="form-control" id="latlong" placeholder="Paste Latitude, Longitude pairs (e.g., 28.6139, 77.2090) each on a new line"></textarea>
        </div>
        <div class="d-flex justify-content-between">
            <button class="btn btn-primary" id="processBtn">🚀 Process</button>
            <button class="btn btn-success" id="downloadBtn" style="display:none;">⬇️ Download Results</button>
        </div>

 <div class="mt-3" id="progressContainer">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%" id="progressBar">0%</div>
            </div>
        </div>

 <div id="map" class="mt-3"></div>
        <div id="addressResult" class="mt-3"></div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css">
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
<script src="{{ '/assets/js/lat-long-address.js' | relative_url }}"></script>


