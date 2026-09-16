---
layout: default
title: "Bearing Calculator – Bearing Between Two Coordinates"
permalink: /bearing-calculator
description: "Bearing Calculator to calculate initial bearing, final bearing, reverse bearing, compass direction, and distance between two latitude and longitude coordinates."
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="">
<style> .bearing-main-card{ background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border: 1px solid #d1e7dd; border-radius: 12px; padding: 14px 16px; position: relative; overflow: hidden;} .result-label{ font-size: 12px; color: #6c757d; font-weight: 600; margin-bottom: 2px;} .main-bearing-value{ font-size: 32px; line-height: 1.1; font-weight: 700; color: #198754; letter-spacing: -1px;}  .direction-badge{ display: inline-flex; align-items: center; gap: 5px; margin-top: 5px; padding: 3px 9px; border-radius: 20px; background: #e8f5ee; color: #198754; font-size: 12px; font-weight: 600;} .direction-arrow{ font-size: 14px; line-height: 1;}  .compass-icon{ width: 58px; height: 58px; border: 2px solid #198754; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #198754; font-size: 18px; font-weight: 700; position: relative; background: #ffffff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);} .compass-icon::before,
.compass-icon::after{ content: ""; position: absolute; background: #198754; opacity: 0.25;} .compass-icon::before{ width: 1px; height: 48px;} .compass-icon::after{ width: 48px; height: 1px;}  .result-box{ min-height: 58px; border: 1px solid #e5e7eb; border-radius: 9px; background: #ffffff; padding: 8px 9px; display: flex; align-items: center; gap: 9px; transition: border-color 0.15s ease, box-shadow 0.15s ease;} .result-box:hover{ border-color: #b7dfca; box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);}  .result-icon{ width: 30px; height: 30px; min-width: 30px; border-radius: 7px; background: #f0f7f3; color: #198754; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 700;}  .result-box-label{ font-size: 10px; line-height: 1.2; color: #6c757d; margin-bottom: 2px;} .result-box-value{ font-size: 15px; line-height: 1.2; font-weight: 700; color: #212529;} .bearing-map{ width: 100%; height: 470px; border-radius: 10px; overflow: hidden;} .bearing-map-info{ z-index: 1000;} .bearing-option{ min-height: 44px;} 
 @media (max-width: 991.98px){ .bearing-map{ height: 380px;}} @media (max-width: 575.98px){ .bearing-main-card{ padding: 12px 14px;} .main-bearing-value{ font-size: 28px;} .compass-icon{ width: 50px; height: 50px; font-size: 16px;} .compass-icon::before{ height: 40px;} .compass-icon::after{ width: 40px;} .result-box{ min-height: 54px; padding: 7px 8px;} .result-icon{ width: 27px; height: 27px; min-width: 27px; font-size: 13px;} .result-box-value{ font-size: 14px;} .bearing-map{ height: 350px;}}
</style>
<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
  <li class="breadcrumb-item active" aria-current="page">Bearing Calculator</li>
 </ol>
</div>
<div class="row justify-content-center">
<div class="card border-0 shadow-sm overflow-hidden"><div class="row g-0"><div class="col-lg-5"><div class="p-3 p-md-4"><p class="h3 fw-bold mb-1">Bearing Calculator </p><p class="text-muted small mb-3">Calculate bearing and distance between two coordinates. </p><div class="mb-3"><label class="form-label fw-semibold mb-2">Bearing </label><div class="row g-2"><div class="col-4"><button type="button" class="btn btn-primary w-100 bearing-type bearing-option active" data-type="initial">Initial </button></div><div class="col-4"><button type="button" class="btn btn-outline-primary w-100 bearing-type bearing-option" data-type="final">Final </button></div><div class="col-4"><button type="button" class="btn btn-outline-primary w-100 bearing-type bearing-option" data-type="both">Both </button></div></div></div><div class="border rounded p-3 mb-2"><div class="d-flex justify-content-between align-items-center mb-2"><span class="fw-semibold">Start Point </span><span class="badge text-bg-primary">A </span></div><div class="row g-2"><div class="col-6"><label for="lat1" class="form-label small mb-1">Latitude </label><input type="number" id="lat1" class="form-control" value="39.816192" min="-90" max="90" step="any" inputmode="decimal" placeholder="39.816192"></div><div class="col-6"><label for="lon1" class="form-label small mb-1">Longitude </label><input type="number" id="lon1" class="form-control" value="-75.289418" min="-180" max="180" step="any" inputmode="decimal" placeholder="-75.289418"></div></div></div><div class="text-center my-1"><button type="button" id="swapPoints" class="btn btn-sm btn-outline-secondary py-1">↕ Swap Points </button></div><div class="border rounded p-3 mb-2"><div class="d-flex justify-content-between align-items-center mb-2"><span class="fw-semibold">Destination </span><span class="badge text-bg-success">B </span></div><div class="row g-2"><div class="col-6"><label for="lat2" class="form-label small mb-1">Latitude </label><input type="number" id="lat2" class="form-control" value="39.716192" min="-90" max="90" step="any" inputmode="decimal" placeholder="39.716192"></div><div class="col-6"><label for="lon2" class="form-label small mb-1">Longitude </label><input type="number" id="lon2" class="form-control" value="-75.189418" min="-180" max="180" step="any" inputmode="decimal" placeholder="-75.189418"></div></div></div><div class="mb-3"><label class="form-label fw-semibold mb-2">Distance Unit </label><div class="d-flex gap-1"><button type="button" class="btn btn-sm btn-secondary flex-fill unit-btn active" data-unit="km">km </button><button type="button" class="btn btn-sm btn-outline-secondary flex-fill unit-btn" data-unit="miles">mi </button><button type="button" class="btn btn-sm btn-outline-secondary flex-fill unit-btn" data-unit="meters">m </button><button type="button" class="btn btn-sm btn-outline-secondary flex-fill unit-btn" data-unit="nautical">nmi </button></div></div><div class="d-flex gap-2"><button type="button" id="calculateBearing" class="btn btn-primary flex-grow-1">Calculate Bearing </button><button type="button" id="resetBearing" class="btn btn-outline-secondary">Reset </button></div><div id="bearingError" class="alert alert-danger py-2 mt-3 mb-0 d-none" role="alert"></div></div></div><div class="col-lg-7"><div id="bearingResult" class="mt-3 d-none"><div class="bearing-main-card mb-2"><div class="d-flex align-items-center justify-content-between"><div><div class="result-label"><span id="mainBearingLabel">Initial Bearing</span></div><div id="mainBearing" class="main-bearing-value">0° </div><div class="direction-badge"><span class="direction-arrow">↑</span><span id="mainDirection">North</span></div></div><div class="compass-icon"><span>N</span></div></div></div><div class="row g-2"><div class="col-6"><div class="result-box"><div class="result-icon">↗ </div><div><div class="result-box-label">Initial Bearing </div><div id="initialBearing" class="result-box-value">0° </div></div></div></div><div class="col-6"><div class="result-box"><div class="result-icon">↘ </div><div><div class="result-box-label">Final Bearing </div><div id="finalBearing" class="result-box-value">0° </div></div></div></div><div class="col-6"><div class="result-box"><div class="result-icon">↔ </div><div><div class="result-box-label">Distance </div><div id="distanceResult" class="result-box-value">0 km </div></div></div></div><div class="col-6"><div class="result-box"><div class="result-icon">↩ </div><div><div class="result-box-label">Reverse Bearing </div><div id="reverseBearing" class="result-box-value">0° </div></div></div></div></div></div><div class="position-relative"><div id="bearingMap" class="bearing-map"></div><div class="position-absolute top-0 start-0 m-2 bg-white rounded shadow-sm px-2 py-2 small bearing-map-info"><strong>A</strong>Start &nbsp;→&nbsp; <strong>B</strong>Destination <div class="text-muted">Drag markers or click the map </div></div><div class="position-absolute bottom-0 start-0 m-2 bearing-map-info"><div class="btn-group btn-group-sm shadow-sm"><button type="button" id="fitRoute" class="btn btn-light">Fit Route </button><button type="button" id="clearMap" class="btn btn-light">Clear </button></div></div></div></div></div></div></div>


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
 <h1>Bearing Calculator</h1> 
 <p> A <strong>Bearing Calculator</strong> calculates the direction or angle from one geographic coordinate to another using latitude and longitude. Enter the starting point and destination coordinates to calculate the <strong>initial bearing, final bearing, reverse bearing, compass direction, and distance</strong> between two locations. </p>
 <p> The bearing is measured clockwise from <strong>true north</strong>, from 0° to 360°. For example, 0° represents north, 90° represents east, 180° represents south, and 270° represents west. </p>
 <!-- What Is a Bearing --> 
 <h3>What Is a Bearing?</h3>
 <p>A bearing is a horizontal direction expressed as an angle measured clockwise from north. </p> 
 <div class="table-responsive mb-3"> <table class="table table-bordered table-sm align-middle"> <thead class="table-light"> <tr> <th>Bearing</th> <th>Direction</th> </tr> </thead> <tbody> <tr> <td>0°</td> <td>North</td> </tr> <tr> <td>45°</td> <td>Northeast</td> </tr> <tr> <td>90°</td> <td>East</td> </tr> <tr> <td>135°</td> <td>Southeast</td> </tr> <tr> <td>180°</td> <td>South</td> </tr> <tr> <td>225°</td> <td>Southwest</td> </tr> <tr> <td>270°</td> <td>West</td> </tr> <tr> <td>315°</td> <td>Northwest</td> </tr> <tr> <td>360°</td> <td>North</td> </tr> </tbody> </table> </div> <p> Bearings are commonly used in <strong>GPS navigation, surveying, aviation, marine navigation, mapping, GIS, hiking, and geographic calculations</strong>. </p>
 <!-- Bearing Between Coordinates --> <h3 class="h5 fw-bold mt-4 mb-2"> Bearing Between Two Coordinates </h3> <p> To calculate the bearing between two latitude and longitude coordinates, the calculator uses the starting coordinate and destination coordinate. </p> <p>For coordinates:</p> <ul> <li><strong>Starting latitude</strong> = φ₁</li> <li><strong>Starting longitude</strong> = λ₁</li> <li><strong>Destination latitude</strong> = φ₂</li> <li><strong>Destination longitude</strong> = λ₂</li> </ul> <p> The initial bearing can be calculated using the following formula: </p> <div class="alert alert-light border text-center mb-3"> <strong> θ = atan2(sin(Δλ) × cos(φ₂), cos(φ₁) × sin(φ₂) − sin(φ₁) × cos(φ₂) × cos(Δλ)) </strong> </div> <p>Where:</p> <ul> <li><strong>φ₁</strong> = starting latitude</li> <li><strong>φ₂</strong> = destination latitude</li> <li><strong>λ₁</strong> = starting longitude</li> <li><strong>λ₂</strong> = destination longitude</li> <li><strong>Δλ</strong> = difference in longitude</li> </ul> <p> The resulting angle is converted to a value between <strong>0° and 360°</strong>. </p>
<!-- Initial vs Final --> <h3 class="h5 fw-bold mt-4 mb-2"> Initial Bearing vs Final Bearing </h3> <p> For short distances, the initial and final bearings may appear similar. However, when traveling over the Earth's curved surface, the direction can change along the route. </p> <div class="row g-3 mb-3"> <div class="col-md-6"> <div class="border rounded p-3 h-100"> <h4 class="h6 fw-bold mb-2">Initial Bearing</h4> <p class="mb-0 small"> The direction from the starting point toward the destination. </p> </div> </div> <div class="col-md-6"> <div class="border rounded p-3 h-100"> <h4 class="h6 fw-bold mb-2">Final Bearing</h4> <p class="mb-0 small"> The direction of travel as the route approaches the destination. </p> </div> </div> </div> <p> This distinction is particularly useful for long-distance navigation and geographic calculations. </p>
<!-- How to Use --> 
<div class="bg-light p-4 rounded mt-4">
 <h4 class="text-primary"><i class="fas fa-star me-2"></i>How to Use the Bearing Calculator</h4>
 <ul class="list-group list-group-flush">
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Enter the latitude and longitude of the starting point.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Enter the latitude and longitude of the destination.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Select Initial, Final, or Both bearing options.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Select the required distance unit.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Click Calculate Bearing.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>View the bearing, compass direction, distance, and reverse bearing.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Use the interactive map to visually check the route between the two coordinates.</li>
 </ul>
 <p class="mt-3 mb-0">You can also drag the markers on the map to change the coordinates and recalculate the bearing.</p>
</div>
<!-- Bearing and Distance --> 
<h3 class="h5 fw-bold mt-4 mb-2"> Bearing and Distance </h3> <p> Bearing and distance are often used together in navigation. The <strong>bearing tells you which direction to travel</strong>, while the <strong>distance tells you how far the destination is</strong>. </p> <p> The calculator uses the coordinates to determine the distance between the two points and can display the result in: </p> <ul> <li>Kilometers (km)</li> <li>Miles (mi)</li> <li>Meters (m)</li> <li>Nautical miles (nmi)</li> </ul>  

<!-- Example -->
<h2 class="h5 fw-bold mt-4 mb-2">Bearing Calculator Example
</h2><p>Suppose the starting point is at latitude 39.816192 and longitude -75.289418, and the destination is at latitude 39.716192 and longitude -75.189418. Enter these coordinates into the calculator to calculate the bearing, compass direction, and distance between the two points.
</p><div class="table-responsive"><table class="table table-bordered table-sm align-middle"><thead class="table-light"><tr><th>Point</th><th>Latitude</th><th>Longitude</th></tr></thead><tbody><tr><td>Start A</td><td>39.816192</td><td>-75.289418</td></tr><tr><td>Destination B</td><td>39.716192</td><td>-75.189418</td></tr></tbody></table></div>


<!-- FAQ Section -->
<section class="p-4">
  <h2 class="mb-4">FAQ on Bearing Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">1. What is a bearing in navigation? </div>
       <p class="mb-0"> A bearing is a direction expressed as an angle measured clockwise from north. A bearing of 0° or 360° represents north, 90° represents east, 180° represents south, and 270° represents west.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">2. How do I calculate the bearing between two coordinates?</div>
         <p class="mb-0">Enter the latitude and longitude of the starting point and destination. The Bearing Calculator uses the coordinates to calculate the direction between them, including the initial bearing and, when selected, the final bearing.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">3. What is the difference between initial and final bearing?</div>
        <p class="mb-0">The <strong>initial bearing</strong> is the direction at the starting point toward the destination. The <strong>final bearing</strong> is the direction as the route approaches the destination. Because the Earth is curved, these values can differ, especially over longer distances.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">4. Can I calculate a GPS bearing using latitude and longitude?</div>
        <p class="mb-0">Yes. A GPS bearing can be calculated from two geographic coordinates. Enter the latitude and longitude of the starting and destination points to determine the bearing and compass direction.</p>
       </div>
     </div>
 <div class="card mb-3 border-0 bg-light">
  <div class="card-body ">
   <div class="fw-bold text-primary">5. What is the difference between bearing and distance?</div>
    <p class="mb-0"><strong>Bearing</strong> describes the direction from one point to another, while <strong>distance</strong> describes how far apart the two points are. Both measurements can be calculated from latitude and longitude coordinates and are commonly used together in navigation and mapping. </p>
   </div>
  </div>
</section>
  <!-- geolocation-->
{% include geolocation.html %} 
 </div> 
<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"  crossorigin=""></script>
<script src="{{ '/assets/js/geolocation/bearing-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://easycalculator.org/bearing-calculator#calculator",
  "name": "Bearing Calculator",
  "url": "https://easycalculator.org/bearing-calculator",
  "description": "Calculate initial bearing, final bearing, reverse bearing, compass direction, and distance between two latitude and longitude coordinates.",
  "applicationCategory": "UtilitiesApplication",
  "applicationSubCategory": "Geographic Calculator",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "isAccessibleForFree": true,
  "featureList": [
    "Initial bearing calculation",
    "Final bearing calculation",
    "Reverse bearing calculation",
    "Distance calculation",
    "Compass direction",
    "Interactive map",
    "Draggable coordinate markers"
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://easycalculator.org/bearing-calculator#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://easycalculator.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Geolocation Tools",
      "item": "https://easycalculator.org/geolocation-tools"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bearing Calculator",
      "item": "https://easycalculator.org/bearing-calculator"
    }
  ]
}
</script>
