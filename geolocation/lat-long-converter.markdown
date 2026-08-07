---
layout: default
title: Latitude Longitude Converter | Convert Decimal to DMS Easily and Fast
permalink: /latitude-longitude-converter
description: "Quickly convert latitude and longitude between decimal degrees and DMS (degrees, minutes, seconds) formats. Use our Lat Long Converter easy and powerful tool."
image: "/assets/images/og/lat-long-converter.jpg"
last_modified_at: 2026-07-08
---

<style>
.converter-container { background: #ffffffe6; border-radius: 15px;  }
.map-card { height: 100%; min-height: 520px; overflow: hidden; }
#map { height: 100%; min-height: 470px; }
.input-group-text { min-width: 100px; }
.result-card { display: none; margin: 1.5rem 0 0; border: 2px solid #0d6efd; border-radius: 12px; background: #f4f8ff; box-shadow: 0 8px 20px rgba(13, 110, 253, .12); overflow: hidden; }
.result-card.is-visible { display: block; }
.result-card__header { padding: .8rem 1rem; color: #fff; background: #0d6efd; font-weight: 700; }
.result-card__body { padding: 1rem; }
.result-value { display: block; margin-top: .25rem; font-size: 1.05rem; font-weight: 600; color: #173a6b; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
.result-card--danger { border-color: #dc3545; background: #fff5f5; }
.result-card--danger .result-card__header { background: #dc3545; }
.result-card--danger .result-value { color: #842029; }
.coordinate-pin { width: 34px; height: 34px; display: grid; place-items: center; border: 3px solid #fff; border-radius: 50% 50% 50% 0; background: #0d6efd; box-shadow: 0 4px 10px rgba(0, 57, 139, .35); transform: rotate(-45deg); }
.coordinate-pin::after { width: 8px; height: 8px; content: ""; border-radius: 50%; background: #fff; transform: rotate(45deg); }
.coordinate-popup .leaflet-popup-content-wrapper { border-radius: 10px; box-shadow: 0 8px 24px rgba(0, 0, 0, .18); }
.coordinate-popup .leaflet-popup-content { min-width: 210px; margin: 14px 16px; font-family: inherit; }
.map-coordinate-value { margin: 0; color: #1f2937; font-size: .95rem; font-variant-numeric: tabular-nums; }
.map-coordinate-value + .map-coordinate-value { margin-top: 4px; }
.result-summary { overflow: hidden; border: 1px solid #cfe2ff; background: #fff; }
.result-summary__header { display: flex; gap: .8rem; align-items: center; padding: 1rem 1.15rem; color: #fff; background: linear-gradient(135deg, #0d6efd, #0a58ca); }
.result-summary__icon { display: grid; flex: 0 0 2.3rem; width: 2.3rem; height: 2.3rem; place-items: center; border-radius: 50%; color: #0d6efd; background: #fff; }
.result-summary__header h2 { font-weight: 700; }
.result-summary__header p { color: rgba(255, 255, 255, .85); font-size: .84rem; }
.result-summary .card-body > h5 { display: none; }
.result-summary .row { --bs-gutter-y: .75rem; }
.format-panel { height: 100%; overflow: hidden; border: 1px solid #dbe7f5; border-radius: .7rem; background: #fff; }
.format-panel__title { display: flex; align-items: center; justify-content: space-between; padding: .65rem .85rem; color: #124d9a; background: #eff6ff; font-size: .84rem; font-weight: 800; }
.format-panel__tag { padding: .15rem .4rem; border-radius: .25rem; color: #fff; background: #0d6efd; font-size: .68rem; letter-spacing: .05em; }
.format-panel--dms .format-panel__title { color: #086b57; background: #ecfdf5; }
.format-panel--dms .format-panel__tag { background: #198754; }
.coordinate-pair { display: grid; grid-template-columns: 78px minmax(0, 1fr); gap: .55rem; align-items: baseline; padding: .55rem .85rem; }
.coordinate-pair + .coordinate-pair { border-top: 1px solid #edf2f7; }
.coordinate-pair__label { color: #60758b; font-size: .76rem; font-weight: 700; text-transform: uppercase; }
.coordinate-pair__value { color: #172c45; font-size: 1rem; font-weight: 700; font-variant-numeric: tabular-nums; overflow-wrap: anywhere; }
@media (max-width: 991.98px) { .map-card, #map { min-height: 380px; } }
</style>

<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
  <li class="breadcrumb-item active" aria-current="page">Latitude Longitude Converter</li>
 </ol>
</div>


<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
 <div class="row p-4">
  <div class="col-lg-6">
   <div class="converter-container p-4 mb-4 shadow">
   <h3 class="mb-4 text-center">Latitude Longitude Converter</h3>
                    
  <!-- Decimal to DMS -->
<div class="mb-4">
 <h5>Decimal to Degrees/Minutes/Seconds</h5>
 <div class="input-group mb-2"><span class="input-group-text">Latitude</span><input type="number" step="any" id="decLat" class="form-control" placeholder="Decimal Latitude"></div>
  <div class="input-group mb-3"><span class="input-group-text">Longitude</span><input type="number" step="any" id="decLon" class="form-control" placeholder="Decimal Longitude"></div>
    <button onclick="convertDecimalToDMS()" class="btn btn-primary w-100">Convert to DMS</button>
   </div>

<!-- DMS to Decimal -->
 <div class="mb-4">
  <h5>Degrees/Minutes/Seconds to Decimal</h5>
   <div class="row mb-2">
   <div class="col-3"><input type="number" id="latDeg" class="form-control" placeholder="Deg"></div>
   <div class="col-3"><input type="number" id="latMin" class="form-control" placeholder="Min"></div>
   <div class="col-3"><input type="number" id="latSec" class="form-control" placeholder="Sec"></div>
   <div class="col-3"><select id="latDir" class="form-select"><option>N</option><option>S</option></select></div>
  </div>
   <div class="row mb-3">
    <div class="col-3"><input type="number" id="lonDeg" class="form-control" placeholder="Deg"></div>
    <div class="col-3"> <input type="number" id="lonMin" class="form-control" placeholder="Min"></div>
    <div class="col-3"><input type="number" id="lonSec" class="form-control" placeholder="Sec"></div>
    <div class="col-3"><select id="lonDir" class="form-select"><option>E</option><option>W</option></select></div>
   </div>
   <button onclick="convertDMSToDecimal()" class="btn btn-success w-100">Convert to Decimal</button>
  </div>

 <!-- Results -->
 <div id="results" class="result-card" role="status" aria-live="polite"></div>
 </div>

<!-- <div class="card border-0 shadow mb-3 bg-light"> -->
<div id="coordinateSummary" class="card border-0 shadow-sm mb-3 result-summary" aria-labelledby="coordinateSummaryTitle">


<div class="result-summary__header">
<span class="result-summary__icon"><i class="fa-solid fa-location-dot"></i></span>
<div><h2 id="coordinateSummaryTitle" class="h5 mb-1">Selected coordinate result</h2><p class="mb-0">Pick a point on the map or convert a coordinate to see both formats.</p></div>
</div>


<div class="card-body  ">
<h5>📍 Result</h5>
<div class="row g-3">
<div class="col-md-6"><section class="format-panel" aria-label="Decimal degrees result"><div class="format-panel__title"><span>Decimal degrees</span><span class="format-panel__tag">DD</span></div><div class="coordinate-pair"><span class="coordinate-pair__label">Latitude</span><output id="decimalLatitude" class="coordinate-pair__value">Waiting for coordinates</output></div><div class="coordinate-pair"><span class="coordinate-pair__label">Longitude</span><output id="decimalLongitude" class="coordinate-pair__value">Waiting for coordinates</output></div></section></div>
<div class="col-md-6"><section class="format-panel format-panel--dms" aria-label="Degrees minutes seconds result"><div class="format-panel__title"><span>Degrees / minutes / seconds</span><span class="format-panel__tag">DMS</span></div><div class="coordinate-pair"><span class="coordinate-pair__label">Latitude</span><output id="dmsLatitude" class="coordinate-pair__value">Waiting for coordinates</output></div><div class="coordinate-pair"><span class="coordinate-pair__label">Longitude</span><output id="dmsLongitude" class="coordinate-pair__value">Waiting for coordinates</output></div></section></div>
</div>
</div>
</div>

</div>

 <div class="col-lg-6">
 <div class="card border-0 shadow-sm map-card mb-4">
  <div class="card-header bg-white border-0 pt-3 px-3">
   <span class="float-end small text-muted">
    <button class="btn btn-outline-primary" onclick="getCurrentLocation()"><i class="bi bi-geo-alt-fill"></i>Use My Location</button>
    <button class="btn btn-outline-danger" onclick="clearAll()"><i class="bi bi-trash"></i>Clear</button></span></div>
    <div id="map" aria-label="Interactive map for selecting latitude and longitude">
    </div>
   </div>
  </div>
  </div>

<!-- Article -->

<article class="article-container mt-4">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">{% include naren_create.html %}{% include reema_verify.html %}</div>
  <div class="text-muted small mt-3 mt-md-0"><i class="fas fa-calendar me-1"></i>Last updated: {{ site.time | date: "%d %B %Y" }}</div>
 </div>

 <header class="mb-5">
  <span class="badge text-bg-primary mb-2">Coordinate conversion tool</span>
  <h1 class="display-6 fw-bold">Latitude and Longitude Converter</h1>
  <p class="lead mb-0">Convert map coordinates between decimal degrees (DD) and degrees, minutes, seconds (DMS), then see the same point on the map.</p>
 </header>

 <section class="mb-5" aria-labelledby="what-are-coordinates">
  <h2 id="what-are-coordinates" class="h3">What are latitude and longitude?</h2>
  <p>Latitude and longitude identify a precise point on Earth. Latitude tells you how far north or south a point is from the Equator. Longitude tells you how far east or west it is from the Prime Meridian.</p>
  <div class="table-responsive">
   <table class="table table-bordered align-middle mb-0">
    <thead class="table-light"><tr><th scope="col">Coordinate</th><th scope="col">Range</th><th scope="col">Direction</th></tr></thead>
    <tbody>
     <tr><th scope="row">Latitude</th><td>-90 to 90</td><td>North (N) or South (S)</td></tr>
     <tr><th scope="row">Longitude</th><td>-180 to 180</td><td>East (E) or West (W)</td></tr>
    </tbody>
   </table>
  </div>
 </section>

 <section class="mb-5" aria-labelledby="coordinate-formats">
  <h2 id="coordinate-formats" class="h3">Decimal degrees vs. DMS</h2>
  <p>Both formats describe the same location. Decimal degrees are common in GPS apps, maps, and software. DMS is often used in navigation, surveying, and printed maps.</p>
  <div class="row g-4">
   <div class="col-md-6"><div class="card h-100 border-primary"><div class="card-header bg-primary text-white fw-semibold">Decimal degrees (DD)</div><div class="card-body"><p class="mb-1 text-muted small">Example</p><p class="fs-5 fw-semibold mb-0">40.748817, -73.985428</p></div></div></div>
   <div class="col-md-6"><div class="card h-100 border-success"><div class="card-header bg-success text-white fw-semibold">Degrees, minutes, seconds (DMS)</div><div class="card-body"><p class="mb-1 text-muted small">Same point</p><p class="fs-5 fw-semibold mb-0">40° 44' 55.74&quot; N, 73° 59' 7.54&quot; W</p></div></div></div>
  </div>
 </section>

 <section class="mb-5" aria-labelledby="how-to-use">
  <h2 id="how-to-use" class="h3">How to use the converter</h2>
  <ol class="list-group list-group-numbered">
   <li class="list-group-item"><strong>Enter decimal coordinates</strong> or fill in degrees, minutes, seconds, and direction.</li>
   <li class="list-group-item"><strong>Select Convert.</strong> The matching coordinate format appears in the result panel.</li>
   <li class="list-group-item"><strong>Check the map.</strong> The pin moves to the selected location; you can also click the map to choose a point.</li>
  </ol>
 </section>

 <section class="mb-5" aria-labelledby="conversion-formula">
  <h2 id="conversion-formula" class="h3">How the conversion works</h2>
  <p>To convert DMS to decimal degrees, add degrees to minutes divided by 60 and seconds divided by 3,600. Use a negative value for South latitude or West longitude.</p>
  <div class="alert alert-light border mb-0"><strong>Formula:</strong> Decimal degrees = degrees + (minutes ÷ 60) + (seconds ÷ 3,600)</div>
 </section>

 <section class="mb-5" aria-labelledby="common-uses">
  <h2 id="common-uses" class="h3">When a latitude and longitude converter is useful</h2>
  <div class="row g-3">
   <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h5">Travel and navigation</h3><p class="mb-0">Paste GPS coordinates into a map or compare a location from a guidebook.</p></div></div></div>
   <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h5">GIS and surveying</h3><p class="mb-0">Prepare field coordinates in the format required by a mapping or survey workflow.</p></div></div></div>
   <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h5">Development and data</h3><p class="mb-0">Convert coordinates for location-based apps, APIs, datasets, and geospatial analysis.</p></div></div></div>
  </div>
 </section>



<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Latitude Longitude Converter</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">1. How do I convert decimal degrees to degrees, minutes, and seconds (DMS)?</div>
        <p>To convert decimal degrees to DMS:</p>
         <ol><li>Multiply the decimal part by 60 to get minutes</li><li>Multiply the decimal of the minutes by 60 to get seconds</li></ol>
         <p>Or simply use our coordinate converter to do it instantly and accurately without manual calculations.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">2. Can I convert latitude and longitude to a street address?</div>
         <p class="mb-0">Yes! Using reverse geocoding, you can convert latitude and longitude to address. Our tool makes it easy to find the physical address of any set of coordinates.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">3. What is the difference between DMS and decimal degrees?</div>
        <p class="mb-0">DMS stands for Degrees, Minutes, Seconds, a traditional format used in navigation. Decimal degrees (DD) is a modern format used in most GPS and mapping applications. Both represent the same location but in different formats.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">4. Can I convert X Y coordinates from a map to lat long?</div>
        <p class="mb-0">Yes. Our converter supports transforming cartesian map coordinates to geographic ones. This means you can convert X Y coordinates to lat long, which is essential for GIS, CAD, and mapping tools.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">5. Is your GPS coordinates converter free to use?</div>
        <p class="mb-0">Absolutely! Our GPS coordinates converter is 100% free to use, user-friendly, and mobile-optimized. You can convert any coordinate format without limits or registrations.</p>
       </div>
     </div>
   </section>
  <!-- Did You Know? -->
</article>


<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="{{ '/assets/js/geolocation/lat-long-converter.js' | relative_url }}"></script>
