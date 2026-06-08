---
layout: default
title:  Map Radius Calculator – Draw Radius Circles on a Map
permalink: /map-radius
description: "Draw a radius on a map and instantly calculate area, circumference, and distance. Use satellite or street maps, customize circle size, and download map images."
image: "/assets/images/og/map-radius-calculator.jpg"
last_modified_at: 2026-05-16
---
<style>
body{background:#ffff}#map{height:700px}.card{border:none}
</style>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css">

<div aria-label="breadcrumb" class="p-2">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">Map Radius</li>
  </ol>
</div>
<div class="card shadow-sm">
    <div class="card-body">
        <div class="d-flex flex-wrap gap-2 align-items-center mb-3">
            <h4 class="mb-0 me-3">Map Radius Calculator</h4>
            <input id="search"
                   class="form-control"
                   placeholder="Search location"
                   style="max-width:300px;">
            <button class="btn btn-primary" onclick="searchLocation()">Search</button>
            <button class="btn btn-success" onclick="getLocation()">Current Location</button>
            <input type="color" id="color"  value="#0d6efd" class="form-control form-control-color">
            <button id="downloadPNG" class="btn btn-dark">Download Image</button>
        </div>
        <div id="map"></div>
    </div>
</div>
<div class="row mt-3 g-3">
    <div class="col-md-4">
        <div class="card bg-primary text-white">
            <div class="card-body">
                <h6>Total Circles</h6>
                <h3 id="tc">0</h3>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card bg-success text-white">
            <div class="card-body">
                <h6>Total Area km²</h6>
                <h3 id="ta">0</h3>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card bg-danger text-white">
            <div class="card-body">
                <h6>Total Radius km</h6>
                <h3 id="tr">0</h3>
            </div>
        </div>
    </div>
</div>
<div class="card mt-3">
    <div class="card-body">
        <table class="table table-bordered mb-0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Radius</th>
                    <th>Area</th>
                    <th>Circumference</th>
                </tr>
            </thead>
            <tbody id="tbl"></tbody>
        </table>
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
<!-- Article-->
<h1>Map Radius Calculator – Draw Radius Circles on a Map</h1>
 <p>A Map Radius Calculator is a tool that allows you to draw a circle around any location on a map and measure the distance from the center point to the edge of the circle. It is useful for visualizing coverage areas, delivery zones, travel distances, service regions, emergency response areas, and property boundaries.</p>
 <p>Whether you are a business owner planning delivery routes, a real estate professional analyzing neighborhoods, or simply trying to find locations within a certain distance, a map radius tool provides a quick and accurate solution.</p>

 <div class="card shadow-sm border-0 mb-4">
  <div class="card-body">
   <h2 class="h3 mb-3">What Is a Map Radius?</h2>
   <p>A map radius is the distance from a central point to the outer edge of a circle drawn on a map. The radius can be measured in kilometers, miles, meters, or feet.</p>
   <ul>
    <li>A 5 km radius shows all locations within 5 kilometers of the selected point.</li>
    <li>A 10-mile radius highlights all places located within 10 miles.</li>
    <li>A 50 km radius can be used to visualize a service coverage area.</li>
   </ul>
  </div>
 </div>

<div class="card shadow-sm border-0 mb-4">
 <div class="card-body">
  <h2 class="h3 mb-3">How to Use the Map Radius Calculator</h2>
    <ol>
     <li>Search for a location or use your current location.</li>
     <li>Click on the map to create a circle.</li>
     <li>Enter the desired radius distance.</li>
     <li>Adjust the circle color if needed.</li>
     <li>View the radius, area, and circumference instantly.</li>
     <li>Download the map image for reports or sharing.</li>
    </ol>
   </div>
  </div>

<div class="card shadow-sm border-0 mb-4">
   <div class="card-body">
    <h2 class="h3 mb-3">Radius Area Formula</h2>
     <div class="alert alert-primary text-center fs-4">  Area = π × r²</div>
     <p>Where:</p>
      <ul>
       <li><strong>A</strong> = Area</li>
       <li><strong>r</strong> = Radius</li>
       <li><strong>π</strong> ≈ 3.14159</li>
       </ul>
        <h3 class="h5 mt-4">Example</h3>
        <p>If the radius is 10 km:</p>
        <div class="bg-light p-3 rounded">Area = π × 10²<br>   Area = 314.16 km² </div>
        <p class="mt-3">This means a circle with a radius of 10 kilometers covers approximately 314 square kilometers.</p>
       </div>
   </div>
   <div class="card shadow-sm border-0 mb-4">
       <div class="card-body">
        <h2 class="h3 mb-3">Circumference Formula</h2>
        <div class="alert alert-success text-center fs-4">Circumference = 2 × π × r</div>
        <h3 class="h5 mt-4">Example</h3>
         <p>For a radius of 10 km:</p>
         <div class="bg-light p-3 rounded">Circumference = 2 × π × 10<br> Circumference = 62.83 km </div>
           <p class="mt-3">The circle boundary is approximately 62.83 kilometers long. </p>
        </div>
    </div>
<div class="card shadow-sm border-0 mb-4">
  <div class="card-body">
    <h2 class="h3 mb-4">Practical Examples</h2>
      <div class="row g-4">
       <div class="col-md-4">
       <div class="card h-100 border-primary">
        <div class="card-body">
         <h3 class="h5">Food Delivery Service</h3>
          <p>A restaurant wants to deliver food within a 5 km radius.</p>
          <p>Area Covered:</p>
          <p>A = π × 5² = 78.54 km²</p>
         </div>
        </div>
       </div>
     <div class="col-md-4">
      <div class="card h-100 border-success">
       <div class="card-body">
         <h3 class="h5">Emergency Services</h3>
         <p>An ambulance station wants to analyze areas reachable within 15 km.</p>
         <p>Area Covered: </p>
         <p>A = π × 15² = 706.86 km² </p>
        </div>
        </div>
        </div>
</div>



<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script src="{{ '/assets/js/geolocation/map-radius.js' | relative_url }}"></script>

