---
layout: default
title: Free Azimuth Calculator | Find Azimuth Angle from Coordinates
permalink: /azimuth-calculator
description: "Calculate azimuth angle instantly with our free Azimuth Calculator. Learn what azimuth is, how to calculate azimuth from coordinates, and its uses in navigation, surveying, and RF engineering."
image: "/assets/images/azimuth-calculator.jpg"
last_modified_at: 2026-02-28
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
 #map { height: 400px; }
 #compassCanvas { width: 100%; height: auto; background: #f8f9fa; border-radius: 50%; display: block; margin: 0 auto; border: 1px solid #dee2e6; }
 .result-card{  background: linear-gradient(180deg,#ffffff 0%,#fbfdff 100%);  border: 1px solid rgba(0,0,0,0.04);}
 .compass-wrapper{  background:#ffffff;  border-radius:16px;  padding:14px;  display:inline-block;  box-shadow:0 6px 18px rgba(0,0,0,0.08);}
 .result-card{  transition: all .25s ease;}
 .result-card:hover{  transform: translateY(-2px);  box-shadow:0 12px 28px rgba(0,0,0,0.10);}
</style>
  <div class="col-12 col-xl-11">
     <div class="text-primary p-4">  <h1>Azimuth Calculator</h1>
       <div class="row g-4">
         <div class="col-12 col-md-5">
           <div class="row g-3">
 <!-- point A -->
       <div class="col-12">
       <div class="border rounded p-3 bg-white">
       <h3 class="h6 fw-bold mb-2"> Point A</h3>
        <div class="mb-2"> <input type="number" class="form-control" id="latA" step="any" placeholder="Enter Latitude e.g. 40.7128"> </div>
        <div class="mb-2"><input type="number" class="form-control" id="lonA" step="any" placeholder="Enter Longitude e.g. -74.0060"></div>
         <button class="btn btn-sm btn-outline-primary mt-1" id="setAMap">📍 set from map</button>
        </div>
       </div>
  <!-- point B -->
 <div class="col-12">
      <div class="border rounded p-3 bg-white">
        <h3 class="h6 fw-bold mb-2">Point B</h3>
          <div class="mb-2"><input type="number" class="form-control" id="latB" step="any" placeholder="Enter Latitude e.g. 34.0522"></div>
           <div class="mb-2"><input type="number" class="form-control" id="lonB" step="any" placeholder="Enter Longitude e.g. -118.2437"></div>
             <button class="btn btn-sm btn-outline-success mt-1" id="setBMap">📍 set from map</button>
             </div>
            </div>
     <!-- action buttons -->
    <div class="d-flex gap-2 mt-2">
    <button class="btn btn-primary flex-fill" id="calcBtn">Calculate</button> <button class="btn btn-outline-secondary" id="swapBtn">↔️ swap</button>
     </div>
    </div>
  </div>
 <!-- right: map -->
    <div class="col-12 col-md-7">
     <div class="border rounded p-2 bg-white">
     <div id="map" class="rounded"></div>
     <div class="d-flex justify-content-between align-items-center mt-4 small text-secondary">
        <span><span class="badge bg-primary">A</span> <span id="mapALabel">—</span></span>
        <span><span class="badge bg-success">B</span> <span id="mapBLabel">—</span></span>
        <span><span class="badge bg-dark">azimuth</span> <span id="mapAzimuthLabel">0°</span></span>
        </div>
      </div>
      </div>
     </div>


<!-- results -->
<br>
<div class="card border-0 shadow-sm rounded-4 result-card">
  <div class="card-body p-3 p-md-4">
    <div class="row align-items-center g-4">
      <!-- LEFT: Numbers -->
      <div class="col-12 col-md-5">
        <!-- Azimuth -->
        <div class="mb-4">
          <div class="small text-uppercase text-muted fw-semibold mb-1"> Azimuth (Bearing) </div>
          <div class="display-5 fw-bold text-primary" id="azimuthResult">  --.--° </div>
        </div>
        <!-- Distance -->
        <div>
          <div class="small text-uppercase text-muted fw-semibold mb-1">  Distance</div>
          <div class="fs-2 fw-bold text-primary" id="distanceResult"> ---- km </div>
        </div>
      </div>
      <!-- RIGHT: Compass -->
      <div class="col-12 col-md-7 text-center">
        <div class="compass-wrapper"> <canvas id="compassCanvas" width="280" height="280" style="max-width:260px;height:auto;"></canvas></div>
      </div>
    </div>
  </div>
</div>
 </div>

 <!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i>Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>

  <!-- Article -->
<section class="container my-4">
<h2 class="fw-bold">What is Azimuth?</h2>
<p class="lead"><strong>Azimuth</strong> is the horizontal angle measured clockwise from <strong>true north</strong> to a target direction, expressed from <strong>0° to 360°</strong>. It is widely used in navigation, surveying, GIS mapping, astronomy, and RF antenna alignment to determine precise directional heading between two geographic points.  </p>
 <h2 class="fw-bold mt-4">What is Azimuth Angle?</h2>
 <p>The <strong>azimuth angle</strong> is the numerical representation of  direction expressed in degrees from <strong>0° to 360°</strong>. The measurement always starts from north and increases clockwise, making it the standard directional reference in geolocation and RF engineering. </p>
    <h3 class="fw-semibold mt-3">Standard Azimuth Reference</h3>
    <ul>
      <li><strong>0°</strong> → North</li>
      <li><strong>90°</strong> → East</li>
      <li><strong>180°</strong> → South</li>
      <li><strong>270°</strong> → West</li>
    </ul>
    <p class="text-muted"> In azimuth measurement, the angle always increases<strong>clockwise from true north</strong>.</p>
  </section>

  <!-- Formula Section -->
 <section class="container my-5">
 <h2 class="fw-bold mb-3">Azimuth Angle Formula</h2>
  <p> The azimuth between two geographic coordinates can be calculated using  the following trigonometric formula: </p>
    <div class="p-3 bg-light rounded-3 text-center">
      \[
      \text{Azimuth} =
      \tan^{-1}
      \left(
      \frac{\sin(\Delta \lambda)\cos(\phi_2)}
      {\cos(\phi_1)\sin(\phi_2) -
      \sin(\phi_1)\cos(\phi_2)\cos(\Delta \lambda)}
      \right)
      \]
    </div>
    <ul class="mt-3 text-muted">
      <li><strong>φ₁</strong> = latitude of Point A</li>
      <li><strong>φ₂</strong> = latitude of Point B</li>
      <li><strong>Δλ</strong> = difference in longitude</li>
    </ul>
    <p class="mt-3"> Our <strong>Azimuth Calculator</strong> automatically performs this calculation to deliver fast and accurate directional results.</p>

  </section>

  <!-- Example -->
  <section class="container my-5">
    <h2 class="fw-bold mb-3">Example: Azimuth Calculation</h2>
    <p>Suppose you want to calculate the azimuth from Delhi to Mumbai using their geographic coordinates:</p>
    <div class="p-3 bg-light rounded-3">
      <p class="mb-1"><strong>Point A (Delhi):</strong> 28.6139° N, 77.2090° E </p>
      <p class="mb-1"><strong>Point B (Mumbai):</strong> 19.0760° N, 72.8777° E </p>
      <p class="mb-0"><strong>Result:</strong> Azimuth ≈ <strong>212°</strong>  (South-West direction)</p>
    </div>
  </section>
  <!-- Azimuth vs Bearing -->
  <section class="container my-5">
  <h2 class="fw-bold mb-3">Azimuth vs Bearing</h2>
 <p>Although <strong>azimuth</strong> and <strong>bearing</strong> both  describe direction, they use different measurement systems. Azimuth is measured clockwise from north in a full <strong>0°–360°</strong> circle, while bearing is typically expressed using quadrant notation.</p>
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <thead class="table-light">
          <tr>
            <th>Feature</th>
            <th>Azimuth</th>
            <th>Bearing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Angle Range</td>
            <td>0° to 360°</td>
            <td>0° to 90° per quadrant</td>
          </tr>
          <tr>
            <td>Reference</td>
            <td>Clockwise from North</td>
            <td>North or South toward East/West</td>
          </tr>
          <tr>
            <td>Common Use</td>
            <td>RF, GPS, GIS, astronomy</td>
            <td>Land surveying, navigation</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>225°</td>
            <td>S 45° W</td>
          </tr>
        </tbody>
      </table>
    </div>
<p class="text-muted mb-0">Most modern geolocation and RF planning tools prefer azimuth because it provides a continuous 360-degree directional reference. </p>
</section>

</div>   

<script src="{{ '/assets/js/azimuth-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
