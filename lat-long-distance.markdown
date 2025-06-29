---
layout: default
title: Calculate Distance from Latitude and Longitude – Easy & Accurate Tool
permalink: /calculate-distance-from-latitude-longitude
description: "Use this free online tool to calculate the distance between two locations using latitude and longitude coordinates. Accurate, fast, and ideal for mapping, travel, or geolocation analysis."
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
<h2>Calculate Distance from Latitude and Longitude</h2>
<p>When you're trying to find the distance between two places on Earth, using latitude and longitude coordinates is one of the most accurate ways to do it. Whether you're a traveler, developer, GIS expert, or student, knowing how to calculate distance from latitude and longitude is incredibly useful. <br>In this guide, we’ll explain how this works, different methods to calculate the distance, and introduce you to a simple online tool that makes it effortless.</p>
<h3>🌍 What Are Latitude and Longitude?</h3>
<p>Latitude and longitude are part of the geographic coordinate system that helps locate any point on Earth.</p>
<p>Latitude: Measures how far north or south a point is from the Equator (ranges from -90° to +90°).<br>
Longitude: Measures how far east or west a point is from the Prime Meridian (ranges from -180° to +180°).</p>
<p>Example: <br>Location A: Latitude: 40.7128, Longitude: -74.0060 (New York City) <br>Location B: Latitude: 34.0522, Longitude: -118.2437 (Los Angeles)</p>

<div class="highlight-box">
  <h5><i class="fas fa-lightbulb text-warning me-2"></i> Did you know</h5><p class="mb-0"> ✈️ The shortest path between two points on Earth is a curve, not a straight line. This is called a great-circle distance, and it's what airplanes usually follow.</p>
   </div>
</section>

<!-- Article  -->

<script src="{{ '/assets/js/lat-long-distance-calc.js' | relative_url }}"></script>
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- Turf.js for distance calculations -->
<script src="https://unpkg.com/@turf/turf@6/turf.min.js"></script>
    





