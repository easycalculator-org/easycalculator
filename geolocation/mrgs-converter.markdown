---
layout: default
title: MGRS Converter – MGRS to Lat Long & Lat Long to MGRS
permalink: /military-grid-reference-system-converter
description: "Easily convert Military Grid Reference System (MGRS) coordinates to latitude and longitude or vice versa with our powerful and easy online MGRS converter tool."
image: "/assets/images/og/mgrs-converter.jpg"
last_modified_at: 2026-09-12
---
<style>
:root{--ec-primary:#4361ee;--ec-primary-dark:#3651d4;--ec-success:#198754;--ec-light:#f8f9fa;--ec-border:#e9ecef;--ec-text:#212529;--ec-muted:#6c757d}.mgrs-breadcrumb{background:#f8f9fa;border-radius:10px;padding:12px 16px}.mgrs-breadcrumb .breadcrumb{margin-bottom:0;font-size:14px}.mgrs-page-header{text-align:center;margin:28px auto 32px;max-width:760px}.mgrs-page-header h1{font-weight:700;color:var(--ec-text);margin-bottom:8px}.mgrs-page-header p{color:var(--ec-muted);margin-bottom:0;line-height:1.6}.mgrs-calculator{background:#f8f9fa;border:1px solid var(--ec-border);border-radius:18px;padding:24px}.mgrs-card{background:#fff;border:1px solid var(--ec-border);border-radius:14px;height:100%;overflow:hidden;transition:box-shadow .2s ease,transform .2s ease}.mgrs-card:hover{box-shadow:0 8px 24px #00000014;transform:translateY(-2px)}.mgrs-card-header{padding:16px 20px;font-weight:700;font-size:17px;color:#fff}.mgrs-header-blue{background:var(--ec-primary)}.mgrs-header-green{background:var(--ec-success)}.mgrs-card-body{padding:22px}.mgrs-card .form-label{font-size:14px;margin-bottom:7px}.mgrs-card .input-group-text{background:#f8f9fa;border-color:#dee2e6;min-width:46px;justify-content:center}.mgrs-card .form-control{height:50px;border-color:#dee2e6;font-size:15px}.mgrs-card .form-control:focus{border-color:var(--ec-primary);box-shadow:0 0 0 .2rem #4361ee1f}.mgrs-example{display:block;margin-top:9px;padding:7px 11px;background:#f1f4ff;color:#495057;border-radius:7px;font-size:13px}.mgrs-example strong{color:var(--ec-primary)}.mgrs-convert-btn{height:50px;border-radius:9px;font-weight:600;margin-top:20px}.mgrs-location-box{background:#fff;border:1px solid var(--ec-border);border-radius:14px;padding:18px;text-align:center}.mgrs-location-btn{border-radius:9px;font-weight:600;padding:10px 20px}.mgrs-location-help{font-size:13px;color:var(--ec-muted);margin-top:8px}.mgrs-result{background:#fff;border:1px solid var(--ec-border);border-radius:14px;overflow:hidden}.mgrs-result-header{background:#f8f9fa;border-bottom:1px solid var(--ec-border);padding:15px 20px;font-weight:700}.mgrs-result-body{padding:20px}.mgrs-result-item{display:flex;justify-content:space-between;align-items:center;gap:15px;padding:13px 0;border-bottom:1px solid #f0f0f0}.mgrs-result-item:last-child{border-bottom:0}.mgrs-result-label{color:var(--ec-muted);font-size:14px}.mgrs-result-value{font-family:"Courier New",monospace;font-weight:700;color:var(--ec-text);text-align:right;word-break:break-word}.mgrs-result-item-main{background:#f1f4ff;margin:12px -10px 0;padding:14px 10px;border-radius:8px;border-bottom:0}.mgrs-result-item-main .mgrs-result-value{color:var(--ec-primary);font-size:17px}.mgrs-map-wrapper{background:#fff;border:1px solid var(--ec-border);border-radius:14px;padding:8px;overflow:hidden}#map{height:500px;width:100%;border-radius:10px}.mgrs-map-header{padding:12px 8px 14px;font-weight:700;color:var(--ec-text)}@media (max-width: 767.98px){.mgrs-calculator{padding:14px;border-radius:14px}.mgrs-card-body{padding:18px}.mgrs-page-header{margin-top:20px}.mgrs-result-item{align-items:flex-start;flex-direction:column;gap:5px}.mgrs-result-value{text-align:left}#map{height:400px}}
</style>
<div class="my-3">
 <nav aria-label="breadcrumb" class="mgrs-breadcrumb">
  <ol class="breadcrumb">
   <li class="breadcrumb-item"><a href="/">Home</a></li>
   <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
   <li class="breadcrumb-item active" aria-current="page">MGRS Converter</li>
  </ol>
 </nav>
<!-- Page Header -->
 <div class="mgrs-page-header">
  <h1>MGRS Converter</h1>
  <p>Convert MGRS coordinates to latitude and longitude, or convert latitude and longitude to MGRS.</p>
 </div>
 <div class="mgrs-calculator"><div class="row g-4"><div class="col-lg-6"><div class="mgrs-card"><div class="mgrs-card-header mgrs-header-blue"><i class="fa-solid fa-crosshairs me-2"></i>MGRS → Latitude & Longitude </div><div class="mgrs-card-body"><label for="mgrsInput" class="form-label fw-semibold">MGRS Coordinate </label><div class="input-group"><span class="input-group-text"><i class="fa-solid fa-location-crosshairs text-primary"></i></span><input id="mgrsInput" type="text" class="form-control" placeholder="33TWN8567932516" autocomplete="off"></div><div class="mgrs-example">Example: <strong>33TWN8567932516</strong></div><button type="button" class="btn btn-primary w-100 mgrs-convert-btn" onclick="convertMGRS()"><i class="fa-solid fa-right-left me-2"></i>Convert to Latitude & Longitude </button></div></div></div><div class="col-lg-6"><div class="mgrs-card"><div class="mgrs-card-header mgrs-header-green"><i class="fa-solid fa-earth-americas me-2"></i>Latitude & Longitude → MGRS </div><div class="mgrs-card-body"><label for="latInput" class="form-label fw-semibold">Latitude </label><div class="input-group mb-3"><span class="input-group-text"><i class="fa-solid fa-location-dot text-success"></i></span><input id="latInput" type="number" step="any" class="form-control" placeholder="50.5123" autocomplete="off"></div><label for="lonInput" class="form-label fw-semibold">Longitude </label><div class="input-group"><span class="input-group-text"><i class="fa-solid fa-globe text-success"></i></span><input id="lonInput" type="number" step="any" class="form-control" placeholder="21.61104" autocomplete="off"></div><div class="mgrs-example">Example: <strong>50.5123, 21.61104</strong></div><button type="button" class="btn btn-success w-100 mgrs-convert-btn" onclick="convertLatLonToMGRS()"><i class="fa-solid fa-right-left me-2"></i>Convert to MGRS </button></div></div></div></div></div><div id="result" class="mgrs-result mt-4" style="display:none;"><div class="mgrs-result-header"><i class="fa-solid fa-circle-check text-success me-2"></i>Converted Coordinates </div><div class="mgrs-result-body"><div class="mgrs-result-item"><span class="mgrs-result-label">Latitude </span><span id="latitude" class="mgrs-result-value"></span></div><div class="mgrs-result-item"><span class="mgrs-result-label">Longitude </span><span id="longitude" class="mgrs-result-value"></span></div><div class="mgrs-result-item mgrs-result-item-main"><span class="mgrs-result-label">MGRS </span><span id="mgrs" class="mgrs-result-value"></span></div></div></div><div class="mgrs-location-box mt-4"><button type="button" class="btn btn-outline-primary mgrs-location-btn" onclick="showCurrentLocationMGRS(this)"><i class="fas fa-location-crosshairs me-2"></i>Use My Current Location </button><div class="mgrs-location-help">Allow location access to find your GPS position and convert it to MGRS. </div></div><div class="mgrs-map-wrapper mt-4"><div class="mgrs-map-header"><i class="fa-solid fa-map-location-dot text-primary me-2"></i>MGRS Map </div><div id="map"></div></div></div>
<!-- Article Part -->
<div class="article-container">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">
   {% include naren_create.html %}
   {% include reema_verify.html %}
  </div>
  <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
 </div>
 <h2>What is MGRS?</h2>
 <p>The <strong>Military Grid Reference System (MGRS)</strong>is a standard coordinate system used by NATO military forces to find and share locations anywhere on Earth. It is based on the <strong><a href="/utm-zone-map" title="Universal Transverse Mercator (UTM)">Universal Transverse Mercator (UTM)</a></strong>and <strong>Universal Polar Stereographic (UPS)</strong>systems and divides the world into numbered zones and lettered latitude bands.</p>
 <p>MGRS was designed to make location reporting fast and easy for soldiers and marines. Instead of using long UTM coordinates, MGRS converts them into a shorter and more readable format while still maintaining high accuracy.</p><h2>How the MGRS System Works</h2><p>The MGRS coordinate starts with a <strong>Grid Zone Designator (GZD)</strong>. The Earth is divided into:</p><ul><li><strong>60 vertical longitudinal zones</strong></li><li ><strong>Latitude bands usually 8&deg; high</strong></li><li ><strong >Band X is 12&deg; high</strong></li></ul><p>The latitude bands are labeled from <strong >C (80&deg; South)</strong>to <strong >X (84&deg; North)</strong>. The letters <strong >I</strong>and <strong>O</strong>are not used to avoid confusion with numbers.</p><div class="p-4"><h3>100,000-Meter Grid Squares</h3><p>Each grid zone is further divided into <strong >100,000-meter squares</strong>. Every square is identified using <strong>two letters</strong>:</p><ul><li ><p >The <strong >first letter</strong>shows the easting direction (west &rarr; east)</p></li><li ><p>The <strong >second letter</strong>shows the northing direction (south &rarr; north)</p></li></ul><p>These letters replace some digits of UTM coordinates, making MGRS coordinates shorter and easier to use in the field.</p><img src="/assets/images/mgrs-grid-zone-designations-map.png" alt="Grid Zone Designations of the MGRS coordinate system showing global UTM zones" title="MGRS Grid Zone Designations World Map" loading="lazy" decoding="async" width="100%" height="600" class="img-fluid p-4"></div><div class="row justify-content-center"><div class="col-lg-10"><section class="mb-5"><h2 class="fw-bold mb-3">MGRS Coordinate Structure </h2><p class="text-muted">An MGRS coordinate is made up of three main parts: the Grid Zone Designator, the 100,000-meter square identifier, and the numerical location. </p><div class="bg-light border rounded-3 p-3 mb-4 text-center"><div class="small text-muted mb-2">Example MGRS Coordinate</div><div class="fs-3 fw-bold font-monospace"><span class="text-primary">4Q</span><span class="text-success">FJ</span><span class="text-dark">12345678</span></div></div><div class="row g-3"><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-primary me-2">4Q</span>Grid Zone Designator </h3><p class="small text-muted mb-2">Identifies the general area of the Earth. </p><ul class="small mb-0 ps-3"><li>Zone: 1–60</li><li>Latitude band: C–X</li><li>Each zone is 6° wide</li><li>I and O are not used</li></ul></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-success me-2">FJ</span>100 km Square </h3><p class="small text-muted mb-2">Identifies a 100 km × 100 km grid square. </p><ul class="small mb-0 ps-3"><li>Uses two letters</li><li>Unique within a grid zone</li><li>Helps narrow the location</li></ul></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-dark me-2">12345678</span>Numerical Location </h3><p class="small text-muted mb-2">Gives the position inside the 100 km square. </p><ul class="small mb-0 ps-3"><li>First half=easting</li><li>Second half=northing</li><li>More digits=greater precision</li></ul></div></div></div></section><section class="mb-5"><h2 class="fw-bold mb-3">Earth's MGRS Grid </h2><p class="text-muted">MGRS divides the Earth into zones and latitude bands to create a consistent grid for identifying locations. </p><div class="row g-3"><div class="col-md-6"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold"><i class="fas fa-arrows-left-right text-primary me-2"></i>Longitudinal Zones </h3><ul class="small text-muted mb-0 ps-4"><li>60 zones numbered 1–60</li><li>Each zone is 6° wide</li><li>Zone 1 starts at 180°W</li><li>Zone 60 ends at 180°E</li></ul></div></div><div class="col-md-6"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold"><i class="fas fa-arrows-up-down text-success me-2"></i>Latitude Bands </h3><ul class="small text-muted mb-0 ps-4"><li>20 bands labeled C–X</li><li>Most bands are 8° high</li><li>Band X is 12° high</li><li>I and O are skipped</li></ul></div></div></div><figure class="mt-4 mb-0 text-center"><img src="/assets/images/mgrs-grid-system-world-map.png" alt="World map showing MGRS grid zones and latitude bands" title="MGRS Grid System World Map" loading="lazy" decoding="async" class="img-fluid rounded-3 border"><figcaption class="small text-muted mt-2">Simplified view of the global MGRS grid system. </figcaption></figure></section>

<div class="card border-0 p-4 mb-5 bg-light">
<h2>Example Conversion</h2><div class="card-body"><div class="row g-3"><div class="col-md-6"><div class="bg-light p-3 rounded-2"><h3 class="h6 fw-bold">Input (MGRS)</h3><code class="d-block p-2 bg-white rounded mb-2">33TWN8567932516</code><p class="small mb-0">1-meter precision coordinate</p></div></div><div class="col-md-6"><div class="bg-light p-3 rounded-2"><h3 class="h6 fw-bold">Output (Lat/Long)</h3><code class="d-block p-2 bg-white rounded mb-2">50.0567°N, 8.6821°E</code><p class="small mb-0">WGS84 datum</p></div></div></div><div class="alert alert-info mt-3"><i class="fas fa-info-circle me-2"></i>This example shows how an MGRS coordinate can be converted to latitude and longitude.</div></div></div><section class="mb-5"><h2 class="fw-bold mb-3"><i class="fas fa-bullseye text-primary me-2"></i>Why Use an MGRS Converter? </h2><p class="text-muted mb-4">An MGRS converter makes it easy to convert between MGRS coordinates and latitude and longitude for mapping, navigation, and location-based tasks. </p><div class="row g-3"><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fa-solid fa-person-military-pointing text-primary fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Military Operations</h3><p class="small text-muted mb-0">Useful for tactical maps, mission planning, and navigation. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-truck-medical text-success fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Disaster Response</h3><p class="small text-muted mb-0">Helps identify and share locations quickly during emergencies. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-map-marked-alt text-info fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">GIS & Mapping</h3><p class="small text-muted mb-0">Makes it easier to work with coordinates in mapping applications. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-hiking text-warning fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Outdoor Activities</h3><p class="small text-muted mb-0">Useful for navigation when exploring remote or unfamiliar areas. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-ruler-combined text-danger fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Surveying</h3><p class="small text-muted mb-0">Helps professionals work with grid coordinates and geographic locations. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-satellite-dish text-secondary fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Drone Operations</h3><p class="small text-muted mb-0">Helps convert geographic coordinates for UAV mapping and navigation. </p></div></div></div></div></div></section>
<div class="card border-0 shadow-sm mt-5 p-4 bg-light text-center">
<h2 class="fw-bold mb-3"><i class="fas fa-download text-primary me-2"></i>Download MGRS Boundary Files </h2>
<p class="text-muted mb-4">Download global MGRS grid boundaries in multiple GIS formats: GeoJSON, KML, and Shapefile.</p>
<div class="d-flex flex-wrap justify-content-center gap-3"><a href="/assets/files/mgrs/mgrs-geojson-boundary.zip" class="btn btn-primary btn-lg px-4 shadow-sm" download>GeoJSON (~82MB) </a><a href="/assets/files/mgrs/mgrs-kml-boundary.zip" class="btn btn-success btn-lg px-4 shadow-sm" download>KML (~63MB)</a><a href="/assets/files/mgrs/mgrs-shapefile-boundary.zip" class="btn btn-warning btn-lg px-4 shadow-sm" download>Shapefile (~56MB)</a></div>
</div>
<!-- FAQ -->
<section class="pt-4"><h2 class="mb-4">FAQ on MGRS Converter</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is an MGRS converter?</div><p class="mb-0">An MGRS converter changes Military Grid Reference System coordinates into latitude and longitude coordinates, or converts latitude and longitude into an MGRS coordinate.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do I convert MGRS to latitude and longitude?</div><p class="mb-0">Enter the MGRS coordinate into the MGRS to Latitude and Longitude converter and select Convert. The tool returns the corresponding latitude and longitude.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do I convert latitude and longitude to MGRS?</div><p class="mb-0">Enter the latitude and longitude values into the Latitude and Longitude to MGRS converter and select Convert to MGRS.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What’s the difference between MGRS and UTM?</div><p class="mb-0">MGRS is a more readable version of UTM with added letters to represent 100,000-meter squares, simplifying map reading for military use.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What level of precision does MGRS offer?</div><p class="mb-0">MGRS can be as precise as 1 meter. The longer the coordinate, the higher the precision.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Is MGRS used outside of the military?</div><p class="mb-0">Yes, it’s widely used in emergency services, GIS software, and land surveying because of its accuracy and universal format.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">Which countries use MGRS?</div><p class="mb-0">MGRS is used by <strong>NATO member countries</strong>, including the United States, United Kingdom, Canada, Germany, France, Italy, and many allied nations. It is also widely used by emergency responders, search and rescue teams, humanitarian organizations, surveyors, and GIS professionals worldwide for accurate location reporting and navigation.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">Can I convert MGRS offline?</div><p class="mb-0">Yes. MGRS coordinates can be converted offline using compatible GIS software, GPS devices, military mapping applications, or desktop tools. However, our online MGRS Converter provides a fast, free, and convenient way to convert between MGRS and latitude/longitude without installing any software.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">How do you read an MGRS coordinate?</div><p class="mb-0">An MGRS coordinate is read from left to right. It begins with the <strong>Grid Zone Designator (GZD)</strong>, followed by the <strong>100,000-meter grid square identifier</strong>, and finally the <strong>easting and northing values</strong>. For example, in <code>33TWN8567932516</code>, <strong>33T</strong>is the grid zone, <strong>WN</strong>identifies the 100 km square, and the remaining digits specify the exact location within that square. More digits indicate higher precision, with 10 digits providing approximately 1-meter accuracy. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">What is the difference between MGRS and GPS?</div><p class="mb-0"><strong>MGRS</strong>and <strong>GPS</strong>are not the same. GPS provides a location using latitude and longitude coordinates, while MGRS is a grid-based coordinate system built on the WGS84 datum and commonly used by military organizations, emergency responders, and GIS professionals. GPS devices can display coordinates in MGRS format, making navigation easier in tactical and field operations. </p></div></div></section><div class="card border-0 bg-light mb-2"><div class="card-body"><h5 class="d-flex align-items-center"><i class="fas fa-info-circle me-3 text-primary"></i>Did You Know? </h5><p class="mb-2">1. MGRS can pinpoint a location on Earth with precision up to 1 meter, making it one of the most accurate and efficient coordinate systems used in global military and emergency operations. </p></div></div>{% include geolocation.html %} </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.5/proj4.js"></script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="{{ '/assets/js/geolocation/mrgs.js' | relative_url }}"></script>
<!-- MGRS Converter Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://easycalculator.org/military-grid-reference-system-converter#app",
      "name": "MGRS Converter",
      "url": "https://easycalculator.org/military-grid-reference-system-converter",
      "description": "Free MGRS converter to convert Military Grid Reference System coordinates to latitude and longitude and convert latitude and longitude to MGRS.",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "Coordinate Converter",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "isAccessibleForFree": true,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Organization",
        "name": "EasyCalculator.org",
        "url": "https://easycalculator.org/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://easycalculator.org/military-grid-reference-system-converter#breadcrumb",
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
          "name": "MGRS Converter",
          "item": "https://easycalculator.org/military-grid-reference-system-converter"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://easycalculator.org/military-grid-reference-system-converter#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an MGRS converter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An MGRS converter changes Military Grid Reference System coordinates into latitude and longitude coordinates, or converts latitude and longitude into an MGRS coordinate."
          }
        },
        {
          "@type": "Question",
          "name": "How do I convert MGRS to latitude and longitude?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the MGRS coordinate into the MGRS to Latitude and Longitude converter and select Convert. The tool returns the corresponding latitude and longitude."
          }
        },
        {
          "@type": "Question",
          "name": "How do I convert latitude and longitude to MGRS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter the latitude and longitude values into the Latitude and Longitude to MGRS converter and select Convert to MGRS."
          }
        },
        {
          "@type": "Question",
          "name": "What does MGRS stand for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MGRS stands for Military Grid Reference System. It is a coordinate reference system used to identify locations on Earth."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is an MGRS coordinate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MGRS precision depends on the number of numerical digits. More digits identify a smaller grid square and therefore provide a more precise location reference."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between MGRS and UTM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UTM represents locations using numerical easting and northing coordinates within zones, while MGRS uses a compact combination of numbers and letters based on UTM and UPS."
          }
        }
      ]
    }
  ]
}
</script>
