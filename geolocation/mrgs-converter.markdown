---
layout: default
title: MGRS Converter – MGRS to Lat Long & Lat Long to MGRS
permalink: /military-grid-reference-system-converter
description: "Convert MGRS to lat long or latitude and longitude to MGRS. Choose grid precision, find your current location, copy coordinates and view results on a map."
image: "/assets/images/og/mgrs-converter.jpg"
last_modified_at: 2026-09-18
---
<style>
#ec-mgrs{--ec-blue:#4361ee;color:#212529}#ec-mgrs .ec-intro{max-width:800px;margin:24px auto;text-align:center}#ec-mgrs .ec-panel{background:#fff;border:1px solid #e5e9f2;border-radius:16px;padding:22px;height:100%}#ec-mgrs .ec-tools{background:#f3f6fc;border-radius:20px;padding:20px}#ec-mgrs .form-control,#ec-mgrs .form-select{min-height:48px}#ec-mgrs .ec-result{background:#eef7f2;border:1px solid #b7ddc7;border-radius:16px;padding:22px}#ec-mgrs .ec-value{font-family:monospace;font-size:1.15rem;overflow-wrap:anywhere}#ec-mgrs .ec-map{height:560px;border-radius:14px;background:#edf0f5}#ec-mgrs article{max-width:960px;margin:36px auto}#ec-mgrs article h2{margin-top:30px;font-size:1.55rem}#ec-mgrs article h3{font-size:1.15rem}#ec-mgrs details{padding:16px;background:#f8f9fa;border-radius:10px;margin:10px 0}#ec-mgrs summary{font-weight:600;cursor:pointer}#ec-mgrs details p{margin:12px 0 0}#ec-mgrs [hidden]{display:none!important}@media(max-width:575px){#ec-mgrs .ec-tools{padding:12px}#ec-mgrs .ec-panel{padding:16px}}
</style>
<div id="ec-mgrs">
<nav aria-label="Breadcrumb" class="py-3"><a href="/">Home</a> / <a href="/geolocation-tools">Geolocation Tools</a> / <span aria-current="page">MGRS Converter</span></nav>
<!-- MGRS -->
<header class="ec-intro"><h1>MGRS Converter</h1><p class="lead">Convert MGRS to lat long or latitude and longitude to MGRS.</p><p class="text-muted">Choose grid precision, copy your coordinates or find a location on the map. Uses WGS84 coordinates between 80°S and 84°N.</p></header>
<div class="ec-tools"><div class="row g-3">
<div class="col-lg-6"><form id="ec-from-grid" class="ec-panel"><h2 class="h5 mb-3">MGRS to Lat Long</h2><label for="ec-grid" class="form-label">MGRS coordinate</label><input id="ec-grid" class="form-control" required maxlength="40" autocomplete="off" spellcheck="false" aria-describedby="ec-grid-help" placeholder="31U DQ 48252 11955"><p id="ec-grid-help" class="small text-muted mt-2">Include the zone and square letters. Spaces and lowercase letters are accepted.</p><button type="button" id="ec-grid-example" class="btn btn-sm btn-light mb-3">Use example: 31U DQ 48252 11955</button><button class="btn btn-primary w-100" type="submit">Convert MGRS to Lat Long</button></form></div>
<div class="col-lg-6"><form id="ec-from-ll" class="ec-panel"><h2 class="h5 mb-3">Lat Long to MGRS</h2><div class="row g-3"><div class="col-sm-6"><label for="ec-lat" class="form-label">Latitude (−80 to 84)</label><input id="ec-lat" class="form-control" type="number" min="-80" max="84" step="any" required placeholder="48.8584"></div><div class="col-sm-6"><label for="ec-lon" class="form-label">Longitude (−180 to 180)</label><input id="ec-lon" class="form-control" type="number" min="-180" max="180" step="any" required placeholder="2.2945"></div></div><label for="ec-precision" class="form-label mt-3">MGRS grid precision</label><select id="ec-precision" class="form-select"><option value="5">10 digits — 1 m grid</option><option value="4">8 digits — 10 m grid</option><option value="3">6 digits — 100 m grid</option><option value="2">4 digits — 1 km grid</option><option value="1">2 digits — 10 km grid</option></select><div class="my-3"><button type="button" id="ec-ll-example" class="btn btn-sm btn-light">Use Eiffel Tower example</button></div><button class="btn btn-success w-100" type="submit">Convert Lat Long to MGRS</button></form></div>
</div><div class="mt-3 d-flex flex-wrap gap-2"><button type="button" id="ec-locate" class="btn btn-outline-primary">Find My Current Location in MGRS</button><button type="button" id="ec-reset" class="btn btn-outline-secondary">Reset</button></div><p class="small text-muted mt-2 mb-0">Location access requires your permission. Grid precision does not indicate your device’s positioning accuracy. Polar UPS references are not supported by this tool.</p></div>
<p id="ec-status" class="mt-3" role="status" aria-live="polite"></p>
<section id="ec-result" class="ec-result my-3" hidden aria-labelledby="ec-result-heading"><h2 id="ec-result-heading" class="h5">Converted coordinates</h2><div class="row g-3"><div class="col-md-6"><div class="small">Latitude, Longitude (WGS84)</div><div id="ec-ll-result" class="ec-value"></div><button type="button" id="ec-copy-ll" class="btn btn-sm btn-light mt-2">Copy Lat Long</button></div><div class="col-md-6"><div class="small">MGRS</div><div id="ec-grid-result" class="ec-value"></div><button type="button" id="ec-copy-grid" class="btn btn-sm btn-light mt-2">Copy MGRS</button></div></div><p id="ec-result-note" class="small mt-3"></p><a id="ec-google" class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></section>
<section class="my-4" aria-labelledby="ec-map-heading"><h2 id="ec-map-heading" class="h5">MGRS Map: Click to Find Coordinates</h2><p class="small text-muted">Convert a coordinate to place a marker, or click the map to convert that point. The map is a basemap with a location marker, not an MGRS grid overlay.</p><div id="ec-map" class="ec-map" aria-label="Interactive coordinate map"></div><p id="ec-map-status" class="small text-muted"></p></section>
<noscript><p class="alert alert-warning">Enable JavaScript to use the converter and map. The instructions below remain available.</p></noscript>


<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>8 min read</span>
    </div>
  </div>
<!-- Article-->
 <h2>What is MGRS?</h2>
 <p>The <strong>Military Grid Reference System (MGRS)</strong>is a standard coordinate system used by NATO military forces to find and share locations anywhere on Earth. It is based on the <strong><a href="/utm-zone-map" title="Universal Transverse Mercator (UTM)">Universal Transverse Mercator (UTM)</a></strong>and <strong>Universal Polar Stereographic (UPS)</strong> systems and divides the world into numbered zones and lettered latitude bands.</p>
 <p>MGRS was designed to make location reporting fast and easy for soldiers and marines. Instead of using long UTM coordinates, MGRS converts them into a shorter and more readable format while still maintaining high accuracy.</p><h2>How the MGRS System Works</h2><p>The MGRS coordinate starts with a <strong>Grid Zone Designator (GZD)</strong>. The Earth is divided into:</p><ul><li><strong>60 vertical longitudinal zones</strong></li><li ><strong>Latitude bands usually 8&deg; high</strong></li><li ><strong >Band X is 12&deg; high</strong></li></ul><p>The latitude bands are labeled from <strong >C (80&deg; South)</strong>to <strong >X (84&deg; North)</strong>. The letters <strong >I</strong>and <strong>O</strong>are not used to avoid confusion with numbers.</p><div class="p-4"><h3>100,000-Meter Grid Squares</h3><p>Each grid zone is further divided into <strong >100,000-meter squares</strong>. Every square is identified using <strong>two letters</strong>:</p><ul><li ><p >The <strong >first letter</strong>shows the easting direction (west &rarr; east)</p></li><li ><p>The <strong >second letter</strong>shows the northing direction (south &rarr; north)</p></li></ul><p>These letters replace some digits of UTM coordinates, making MGRS coordinates shorter and easier to use in the field.</p><img src="/assets/images/mgrs-grid-zone-designations-map.png" alt="Grid Zone Designations of the MGRS coordinate system showing global UTM zones" title="MGRS Grid Zone Designations World Map" loading="lazy" decoding="async" width="100%" height="600" class="img-fluid p-4"></div><div class="row justify-content-center"><div class="col-lg-10">
 <!-- How to Convert MGRS to Lat-long-->
 <h2>How to Convert MGRS to Latitude and Longitude</h2><ol><li>Enter a full MGRS reference, including its grid zone and two square letters.</li><li>Select <strong>Convert MGRS to Lat Long</strong>.</li><li>Copy the decimal-degree coordinates or open the location in Google Maps.</li></ol><p>For example, <code>31U DQ 48252 11955</code> identifies a 1 m grid near the Eiffel Tower in Paris, approximately <strong>48.8584° N, 2.2945° E</strong>. This converter returns the approximate centre of the supplied grid cell. A short reference describes a larger area, so its centre is not necessarily the original measurement point.</p>
<h2>How to Convert Lat Long to MGRS</h2><p>Enter latitude first and longitude second in decimal degrees. Use negative numbers for south and west. Select the grid precision, then choose <strong>Convert Lat Long to MGRS</strong>. For example, enter <code>48.8584</code> and <code>2.2945</code> to locate the Eiffel Tower area.</p><p>For your current position, select <strong>Find My Current Location in MGRS</strong> and allow browser location access. The result shows the accuracy estimate supplied by your device when available.</p>
 <section class="mb-5"><h2 class="fw-bold mb-3">MGRS Coordinate Structure </h2><p class="text-muted">An MGRS coordinate is made up of three main parts: the Grid Zone Designator, the 100,000-meter square identifier, and the numerical location. </p><div class="bg-light border rounded-3 p-3 mb-4 text-center"><div class="small text-muted mb-2">Example MGRS Coordinate</div><div class="fs-3 fw-bold font-monospace"><span class="text-primary">4Q</span><span class="text-success">FJ</span><span class="text-dark">12345678</span></div></div><div class="row g-3"><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-primary me-2">4Q</span>Grid Zone Designator </h3><p class="small text-muted mb-2">Identifies the general area of the Earth. </p><ul class="small mb-0 ps-3"><li>Zone: 1–60</li><li>Latitude band: C–X</li><li>Each zone is 6° wide</li><li>I and O are not used</li></ul></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-success me-2">FJ</span>100 km Square </h3><p class="small text-muted mb-2">Identifies a 100 km × 100 km grid square. </p><ul class="small mb-0 ps-3"><li>Uses two letters</li><li>Unique within a grid zone</li><li>Helps narrow the location</li></ul></div></div><div class="col-md-4"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold mb-2"><span class="badge bg-dark me-2">12345678</span>Numerical Location </h3><p class="small text-muted mb-2">Gives the position inside the 100 km square. </p><ul class="small mb-0 ps-3"><li>First half=easting</li><li>Second half=northing</li><li>More digits=greater precision</li></ul></div></div></div></section><section class="mb-5"><h2 class="fw-bold mb-3">Earth's MGRS Grid </h2><p class="text-muted">MGRS divides the Earth into zones and latitude bands to create a consistent grid for identifying locations. </p><div class="row g-3"><div class="col-md-6"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold"><i class="fas fa-arrows-left-right text-primary me-2"></i>Longitudinal Zones </h3><ul class="small text-muted mb-0 ps-4"><li>60 zones numbered 1–60</li><li>Each zone is 6° wide</li><li>Zone 1 starts at 180°W</li><li>Zone 60 ends at 180°E</li></ul></div></div><div class="col-md-6"><div class="border rounded-3 p-3 h-100"><h3 class="h6 fw-bold"><i class="fas fa-arrows-up-down text-success me-2"></i>Latitude Bands </h3><ul class="small text-muted mb-0 ps-4"><li>20 bands labeled C–X</li><li>Most bands are 8° high</li><li>Band X is 12° high</li><li>I and O are skipped</li></ul></div></div></div><figure class="mt-4 mb-0 text-center"><img src="/assets/images/mgrs-grid-system-world-map.png" alt="World map showing MGRS grid zones and latitude bands" title="MGRS Grid System World Map" loading="lazy" decoding="async" class="img-fluid rounded-3 border"><figcaption class="small text-muted mt-2">Simplified view of the global MGRS grid system. </figcaption></figure></section>

<div class="card border-0 p-4 mb-5 bg-light">
<h2>Example Conversion</h2><div class="card-body"><div class="row g-3"><div class="col-md-6"><div class="bg-light p-3 rounded-2"><h3 class="h6 fw-bold">Input (MGRS)</h3><code class="d-block p-2 bg-white rounded mb-2">31U DQ 48252 11955</code><p class="small mb-0">1-meter precision coordinate</p></div></div><div class="col-md-6"><div class="bg-light p-3 rounded-2"><h3 class="h6 fw-bold">Output (Lat/Long)</h3><code class="d-block p-2 bg-white rounded mb-2">approximately 48.858405, 2.294507</code><p class="small mb-0">WGS84 datum</p></div></div></div><div class="alert alert-info mt-3"><i class="fas fa-info-circle me-2"></i>This example shows how an MGRS coordinate can be converted to latitude and longitude.</div></div></div><section class="mb-5"><h2 class="fw-bold mb-3"><i class="fas fa-bullseye text-primary me-2"></i>Why Use an MGRS Converter? </h2><p class="text-muted mb-4">An MGRS converter makes it easy to convert between MGRS coordinates and latitude and longitude for mapping, navigation, and location-based tasks. </p><div class="row g-3"><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fa-solid fa-person-military-pointing text-primary fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Military Operations</h3><p class="small text-muted mb-0">Useful for tactical maps, mission planning, and navigation. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-truck-medical text-success fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Disaster Response</h3><p class="small text-muted mb-0">Helps identify and share locations quickly during emergencies. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-map-marked-alt text-info fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">GIS & Mapping</h3><p class="small text-muted mb-0">Makes it easier to work with coordinates in mapping applications. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-hiking text-warning fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Outdoor Activities</h3><p class="small text-muted mb-0">Useful for navigation when exploring remote or unfamiliar areas. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-ruler-combined text-danger fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Surveying</h3><p class="small text-muted mb-0">Helps professionals work with grid coordinates and geographic locations. </p></div></div></div></div><div class="col-md-6 col-lg-4"><div class="p-3 border rounded-3 h-100"><div class="d-flex align-items-start"><i class="fas fa-satellite-dish text-secondary fs-4 me-3"></i><div><h3 class="h6 fw-bold mb-1">Drone Operations</h3><p class="small text-muted mb-0">Helps convert geographic coordinates for UAV mapping and navigation. </p></div></div></div></div></div></section>
<div class="p-4">
<h2>MGRS, UTM and GPS: What Is the Difference?</h2><p>GPS is a satellite positioning system. Latitude/longitude, UTM and MGRS are ways to express a location. UTM uses a zone with numerical easting and northing; MGRS adds grid-square letters and shorter paired digits. Most UTM zones are 6° wide, with special zone arrangements in Norway and Svalbard.</p><p>MGRS also has a polar form based on UPS. This particular converter supports the UTM portion from 80°S to 84°N and WGS84 coordinates only. It does not transform older map datums or supply altitude.</p></div>

<div class="card border-0 shadow-sm mt-5 p-4 bg-light text-center">
<h2 class="fw-bold mb-3"><i class="fas fa-download text-primary me-2"></i>Download MGRS Boundary Files </h2>
<p class="text-muted mb-4">Download global MGRS grid boundaries in multiple GIS formats: GeoJSON, KML, and Shapefile.</p>
<div class="d-flex flex-wrap justify-content-center gap-3"><a href="/assets/files/mgrs/mgrs-geojson-boundary.zip" class="btn btn-primary btn-lg px-4 shadow-sm" download>GeoJSON (~82MB) </a><a href="/assets/files/mgrs/mgrs-kml-boundary.zip" class="btn btn-success btn-lg px-4 shadow-sm" download>KML (~63MB)</a><a href="/assets/files/mgrs/mgrs-shapefile-boundary.zip" class="btn btn-warning btn-lg px-4 shadow-sm" download>Shapefile (~56MB)</a></div>
</div>
<!-- FAQ -->
<section class="pt-4"><h2 class="mb-4">FAQ on MGRS Converter</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is an MGRS converter?</div><p class="mb-0">An MGRS converter changes Military Grid Reference System coordinates into latitude and longitude coordinates, or converts latitude and longitude into an MGRS coordinate.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do I convert MGRS to latitude and longitude?</div><p class="mb-0">Enter the MGRS coordinate into the MGRS to Latitude and Longitude converter and select Convert. The tool returns the corresponding latitude and longitude.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do I convert latitude and longitude to MGRS?</div><p class="mb-0">Enter the latitude and longitude values into the Latitude and Longitude to MGRS converter and select Convert to MGRS.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What’s the difference between MGRS and UTM?</div><p class="mb-0">MGRS is a more readable version of UTM with added letters to represent 100,000-meter squares, simplifying map reading for military use.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What level of precision does MGRS offer?</div><p class="mb-0">MGRS can be as precise as 1 meter. The longer the coordinate, the higher the precision.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Is MGRS used outside of the military?</div><p class="mb-0">Yes, it’s widely used in emergency services, GIS software, and land surveying because of its accuracy and universal format.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">Which countries use MGRS?</div><p class="mb-0">MGRS is used by <strong>NATO member countries</strong>, including the United States, United Kingdom, Canada, Germany, France, Italy, and many allied nations. It is also widely used by emergency responders, search and rescue teams, humanitarian organizations, surveyors, and GIS professionals worldwide for accurate location reporting and navigation.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">Can I convert MGRS offline?</div><p class="mb-0">Yes. MGRS coordinates can be converted offline using compatible GIS software, GPS devices, military mapping applications, or desktop tools. However, our online MGRS Converter provides a fast, free, and convenient way to convert between MGRS and latitude/longitude without installing any software.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">How do you read an MGRS coordinate?</div><p class="mb-0">An MGRS coordinate is read from left to right. It begins with the <strong>Grid Zone Designator (GZD)</strong>, followed by the <strong>100,000-meter grid square identifier</strong>, and finally the <strong>easting and northing values</strong>. For example, in <code>33TWN8567932516</code>, <strong>33T</strong>is the grid zone, <strong>WN</strong>identifies the 100 km square, and the remaining digits specify the exact location within that square. More digits indicate higher precision, with Ten numerical digits identify a 1 m grid square. Actual positional accuracy depends on the source coordinates and positioning device. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><div class="fw-bold text-primary">What is the difference between MGRS and GPS?</div><p class="mb-0"><strong>MGRS</strong>and <strong>GPS</strong>are not the same. GPS provides a location using latitude and longitude coordinates, while MGRS is a grid-based coordinate system built on the WGS84 datum and commonly used by military organizations, emergency responders, and GIS professionals. GPS devices can display coordinates in MGRS format, making navigation easier in tactical and field operations. </p></div></div></section><div class="card border-0 bg-light mb-2"><div class="card-body"><h5 class="d-flex align-items-center"><i class="fas fa-info-circle me-3 text-primary"></i>Did You Know? </h5><p class="mb-2">1. MGRS can pinpoint a location on Earth with precision up to 1 meter, making it one of the most accurate and efficient coordinate systems used in global military and emergency operations. </p></div></div>
{% include geolocation.html %} 
<p class="small p-4">References: <a href="https://maptools.com/tutorials/mgrs/quick_guide">MapTools MGRS guide</a>, <a href="https://github.com/proj4js/mgrs">Proj4js MGRS conversion library</a>.</p></div>



<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<script src="https://cdn.jsdelivr.net/npm/mgrs@1.0.0/dist/mgrs.js"></script>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
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
