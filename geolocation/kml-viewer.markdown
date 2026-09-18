---
layout: default
title: KML Viewer – Open KML Files on Map & Satellite Online
permalink: /kml-viewer
description: "Open KML files online with map and satellite views. Explore placemarks, lines, polygons and folders, inspect attributes, and export KML, GeoJSON or CSV."
image: "/assets/images/og/kml-viewer.jpg"
last_modified_at: 2026-09-18
---

<link href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css" rel="stylesheet" />
<style>
#ec-kml{--kv-blue:#2563eb;--kv-ink:#172b4d;--kv-muted:#52657d;color:var(--kv-ink);font-family:inherit;margin:24px auto;max-width:1600px}#ec-kml *{box-sizing:border-box}#ec-kml button,#ec-kml select,#ec-kml input{font:inherit}#ec-kml button,#ec-kml select{border:1px solid #cbd5e1;border-radius:9px;background:#fff;color:var(--kv-ink);padding:9px 13px;min-height:42px;cursor:pointer}#ec-kml button:hover{background:#eff6ff;border-color:#2563eb}#ec-kml button:disabled{opacity:.45;cursor:not-allowed}#ec-kml :focus-visible{outline:3px solid #f59e0b;outline-offset:3px}#ec-kml .kv-primary{background:#2563eb;color:white;border-color:#2563eb}#ec-kml .kv-primary:hover{background:#1d4ed8}#ec-kml .kv-hero{background:linear-gradient(120deg,#eff6ff,#f0fdfa);border:1px solid #dbeafe;border-radius:18px;padding:26px;margin-bottom:18px}#ec-kml h1{font-size:clamp(1.8rem,3vw,2.6rem);margin:0 0 8px}#ec-kml h2{font-size:1.1rem;margin:0 0 12px}#ec-kml p{margin:8px 0}#ec-kml .kv-muted{color:var(--kv-muted);font-size:.88rem}#ec-kml .kv-badge{display:inline-block;padding:5px 10px;background:white;border:1px solid #dbeafe;border-radius:20px;font-size:.78rem;margin:8px 5px 0 0}#ec-kml .kv-upload{border:2px dashed #93b4eb;border-radius:14px;background:#f8fbff;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}#ec-kml .kv-upload.kv-drag{background:#dbeafe;border-color:#2563eb}#ec-kml .kv-toolbar{display:flex;flex-wrap:wrap;gap:9px;align-items:center;padding:12px;background:#fff;border:1px solid #dde5ef;border-radius:14px 14px 0 0}#ec-kml .kv-toolbar label{display:flex;align-items:center;gap:6px;font-size:.85rem;margin:0}#ec-kml .kv-spacer{flex:1}#ec-kml .kv-map-shell{position:relative;background:#e9eef5;border:1px solid #dbe3ee;border-top:0;border-radius:0 0 14px 14px;overflow:hidden}#ec-kml #kv-map{height:clamp(600px,76vh,900px);width:100%;z-index:1}#ec-kml .kv-map-shell:fullscreen{width:100vw;height:100vh;border-radius:0}#ec-kml .kv-map-shell:fullscreen #kv-map{height:100vh}#ec-kml:has(.kv-expanded){transform:none;position:static;width:auto}#ec-kml .kv-map-shell.kv-expanded{position:fixed;inset:0;z-index:10000;border-radius:0}#ec-kml .kv-map-shell.kv-expanded #kv-map{height:100dvh}#ec-kml .kv-map-tools{position:absolute;top:12px;right:12px;z-index:500;display:flex;gap:6px;flex-wrap:wrap;max-width:calc(100% - 65px)}#ec-kml .kv-map-tools button,#ec-kml .kv-map-tools select{box-shadow:0 2px 8px #0002}#ec-kml .kv-coords{position:absolute;bottom:28px;left:10px;z-index:500;background:#fffffff0;border-radius:7px;padding:5px 9px;font-size:12px;pointer-events:none}#ec-kml .kv-status{padding:9px 2px;min-height:38px;color:#345477;font-size:.9rem}#ec-kml .kv-status.kv-error{color:#b42318}#ec-kml .kv-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0}#ec-kml .kv-stat{background:#fff;border:1px solid #e0e7ef;border-radius:12px;padding:15px}#ec-kml .kv-stat strong{display:block;font-size:1.35rem;line-height:1.5}#ec-kml .kv-stat span{font-size:.8rem;color:var(--kv-muted)}#ec-kml .kv-panels{display:grid;grid-template-columns:minmax(240px,1fr) minmax(0,2fr);gap:14px}#ec-kml .kv-panel{border:1px solid #e0e7ef;border-radius:14px;background:white;padding:18px;min-width:0}#ec-kml #kv-files{max-height:350px;overflow:auto}#ec-kml .kv-file{display:flex;gap:8px;align-items:center;border-bottom:1px solid #edf1f6;padding:10px 0}#ec-kml .kv-file label{flex:1;min-width:0;overflow-wrap:anywhere;margin:0}#ec-kml .kv-file small{display:block;color:var(--kv-muted)}#ec-kml .kv-file input[type=color]{width:30px;height:32px;padding:0;border:0;background:none;flex-shrink:0}#ec-kml .kv-file button{padding:4px 8px;font-size:.8rem}#ec-kml #kv-profile{display:block;width:100%;height:210px;touch-action:pan-y}#ec-kml .kv-playback{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px}#ec-kml #kv-scrub{flex:1;min-width:110px}#ec-kml .kv-table-wrap{max-height:330px;overflow:auto;margin-top:12px}#ec-kml table{width:100%;border-collapse:collapse;font-size:.85rem}#ec-kml th,#ec-kml td{text-align:left;padding:9px;border-bottom:1px solid #e2e8f0;white-space:nowrap}#ec-kml th{background:#f1f5f9;position:sticky;top:0}#ec-kml .kv-detail{background:#f8fafc;padding:10px;border-radius:8px;min-height:42px;font-size:.85rem}#ec-kml .kv-exports{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#ec-kml .kv-marker{background:#2563eb;border:2px solid white;color:white;border-radius:50%;text-align:center;font-weight:bold;line-height:22px;box-shadow:0 1px 5px #0006}#ec-kml input[type=checkbox]{width:17px;height:17px;accent-color:#2563eb}#ec-kml .leaflet-control-attribution{font-size:10px}#ec-kml .kv-method{margin:12px 0;font-size:.83rem;color:var(--kv-muted)}@media(min-width:1200px){#ec-kml{width:min(1560px,calc(100vw - 48px));position:relative;left:50%;transform:translateX(-50%)}}@media(max-width:767px){#ec-kml #kv-map{height:65vh;min-height:430px;max-height:700px}#ec-kml .kv-stats{grid-template-columns:repeat(2,1fr)}#ec-kml .kv-panels{grid-template-columns:1fr}#ec-kml .kv-hero{padding:19px}#ec-kml .kv-toolbar{gap:8px}#ec-kml .kv-map-tools{max-width:calc(100% - 65px)}#ec-kml .kv-map-tools button,#ec-kml .kv-map-tools select{font-size:12px;padding:6px 8px}#ec-kml .kv-stat strong{font-size:1.15rem}}@media print{#ec-kml .kv-upload,#ec-kml .kv-toolbar,#ec-kml .kv-exports,#ec-kml .kv-map-tools{display:none}#ec-kml{transform:none;left:auto;width:100%}}
#ec-kml #kv-files{max-height:420px;overflow:auto}#ec-kml #kv-detail{max-height:420px;overflow:auto;overflow-wrap:anywhere}#ec-kml #kv-detail h3{font-size:1.1rem}#ec-kml #kv-detail dl{display:grid;grid-template-columns:minmax(90px,1fr) minmax(0,2fr);gap:7px 12px;margin:12px 0}#ec-kml #kv-detail dt{font-weight:600}#ec-kml #kv-detail dd{margin:0}#ec-kml summary{cursor:pointer;padding:8px 0}#ec-kml .kv-file{flex-wrap:wrap}#ec-kml .kv-file label{min-width:90px}</style>
<div id="ec-kml">
<nav aria-label="Breadcrumb"><p class="kv-muted"><a href="/">Home</a> / <a href="/geolocation-tools">Geolocation Tools</a> / KML Viewer</p></nav>
<header class="kv-hero"><h1>KML Viewer</h1><p>Open KML files on a large interactive map. Explore placemarks, routes and boundaries, inspect attributes, and export your geographic data.</p><span class="kv-badge">Map &amp; satellite</span><span class="kv-badge">Points, lines &amp; polygons</span><span class="kv-badge">Folders &amp; styles</span><span class="kv-badge">Local file processing</span></header>
<div class="kv-upload" id="kv-drop"><div><strong>Drop your KML files here</strong><p class="kv-muted">Up to 10 files • 10 MB per file • 100,000 coordinates and 5,000 geometry parts in total.</p></div><div><input id="kv-input" type="file" accept=".kml,application/vnd.google-earth.kml+xml" multiple hidden><button type="button" class="kv-primary" id="kv-upload">Open KML files</button> <button type="button" id="kv-demo">Try demo</button></div></div>
<p class="kv-muted">File contents stay in your browser. External map providers receive your IP address and requested map areas. Remote KML links and images are not fetched.</p>
<div id="kv-status" class="kv-status" role="status" aria-live="polite">Open a KML file or try the demo.</div>
<div class="kv-toolbar"><label><input type="checkbox" id="kv-points" checked> Points</label><label><input type="checkbox" id="kv-lines" checked> Lines</label><label><input type="checkbox" id="kv-polygons" checked> Polygons</label><label><input type="checkbox" id="kv-styles" checked> KML styles</label><label><input type="checkbox" id="kv-labels"> Labels</label><span class="kv-spacer"></span><label>Units <select id="kv-units"><option value="metric">km / km²</option><option value="imperial">mi / mi²</option></select></label><button type="button" id="kv-clear">Clear all</button></div>
<div class="kv-map-shell" id="kv-map-shell"><div id="kv-map" aria-label="Interactive KML map"></div><div class="kv-map-tools"><select id="kv-basemap" aria-label="Map background"><option value="street">Map</option><option value="satellite">Satellite</option></select><button type="button" id="kv-fit">Fit features</button><button type="button" id="kv-locate">My location</button><button type="button" id="kv-fullscreen">Full screen</button></div><div class="kv-coords" id="kv-coords">Click the map to inspect coordinates</div></div>
<div class="kv-stats" id="kv-stats"></div>
<p class="kv-method">Statistics reflect visible geometry parts. Length and polygon area are spherical estimates, not surveying measurements. Polygon holes are subtracted; overlapping polygons are counted separately. Altitudes are preserved as supplied; the map is a 2D view.</p>
<div class="kv-panels"><section class="kv-panel"><h2>Files &amp; folders</h2><p class="kv-muted">Toggle folders or individual features. Turn off “KML styles” to use each file’s color.</p><div id="kv-files"></div></section><section class="kv-panel"><h2>Feature inspector</h2><div id="kv-detail" class="kv-detail">Click a feature on the map or select View in the table below.</div></section></div>
<section class="kv-panel" style="margin-top:14px"><div class="kv-toolbar" style="border:0;padding:0"><h2>Feature explorer</h2><span class="kv-spacer"></span><label>Search <input id="kv-search" type="search" placeholder="Name or folder" style="max-width:190px;padding:8px;border:1px solid #cbd5e1;border-radius:8px"></label></div><p class="kv-muted">Search filters the table only. Use the checkboxes to change the map and exports.</p><div class="kv-table-wrap"><table><thead><tr><th>Show</th><th>Name</th><th>Geometry</th><th>Folder</th><th>Coordinates</th><th>Map</th></tr></thead><tbody id="kv-table"></tbody></table></div><p class="kv-muted" id="kv-page-info"></p><button type="button" id="kv-prev">Previous</button> <button type="button" id="kv-next">Next</button></section>
<div class="kv-exports"><button type="button" id="kv-export-kml">Download KML</button><button type="button" id="kv-export-json">Export GeoJSON</button><button type="button" id="kv-export-csv">Export coordinates CSV</button><button type="button" id="kv-export-png">Geometry PNG</button></div>
<p class="kv-muted">Exports include visible geometry parts. KML export preserves names, plain-text descriptions, folders, basic styles, altitude modes and attributes. MultiGeometry is split into separate placemarks; gx:Track becomes a line. Tours, overlays, models, time animation and vendor extensions are not preserved. PNG contains geometry only, without background imagery.</p>
<details class="kv-panel" style="margin-top:14px"><summary><strong>Supported KML features and limits</strong></summary><p>Supported: Point, LineString, Polygon with inner holes, MultiGeometry, Folder, Document, local Style / normal StyleMap, ExtendedData, and gx:Track / gx:MultiTrack as lines. Original visibility flags are applied when loading.</p><p>NetworkLink, GroundOverlay, ScreenOverlay, PhotoOverlay, Model, Tour, external style files and external icons are not rendered. Unsupported elements are reported after import. Self-intersecting polygons and areas spanning more than a hemisphere can give unreliable area results. KMZ and GeoJSON imports belong in their separate viewers.</p></details>
<noscript><p>Enable JavaScript to use the KML viewer.</p></noscript>
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
<h1>KML Viewer: View KML Files Online</h1>
<p class="lead">A <strong>KML Viewer</strong> is a simple online tool that lets you open and view KML files on an interactive map. It is useful for checking locations, routes, boundaries, markers, and other geographic information.</p>
<p class="mb-0">Instead of opening a KML file as raw XML text, you can use a KML Viewer to see the geographic information visually on a map.</p> 

<!-- What is KML -->
<section class="card border-0 shadow-sm mb-4">
<div class="card-body p-4 p-md-5">
<h2 class="mb-3">What Is KML?</h2>
<p>KML stands for <strong>Keyhole Markup Language</strong>. It is an XML-based file format used to store and display geographic information.</p>
<p>KML files are commonly used with mapping applications and can contain different types of geographic information, including: </p>
<div class="row g-3"><div class="col-md-6"><div class="p-3 bg-light rounded"><strong>Locations</strong><p class="mb-0">Points and markers representing specific places. </p></div></div><div class="col-md-6"><div class="p-3 bg-light rounded"><strong>Routes</strong><p class="mb-0">Paths, roads, and other line-based geographic features. </p></div></div><div class="col-md-6"><div class="p-3 bg-light rounded"><strong>Boundaries</strong><p class="mb-0">Areas, zones, property boundaries, and regions. </p></div></div><div class="col-md-6"><div class="p-3 bg-light rounded"><strong>Places and Descriptions</strong><p class="mb-0">Names, labels, descriptions, and other map information. </p></div></div></div><p class="mt-4 mb-0">KML files normally use the <code>.kml</code>file extension. </p></div>
</section>

 <!-- What is KML Viewer -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">What Is a KML Viewer?</h2><p>A KML Viewer displays the geographic information stored inside a KML file on an interactive map. </p><p class="mb-0">For example, if your KML file contains several locations, the viewer can display them as markers. If it contains a route, you can see the route drawn on the map. This is much easier than trying to understand XML and geographic coordinates manually. </p></div></section>

<!-- How to Use -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-4">How to Use a KML Viewer</h2><div class="mb-4"><h3 class="h5 text-primary">1. Open the KML Viewer</h3><p>Open the KML Viewer in your web browser. You do not need complicated GIS software for basic viewing. </p></div><div class="mb-4"><h3 class="h5 text-primary">2. Upload Your KML File</h3><p>Select your <code>.kml</code>file and upload it to the viewer. </p></div><div class="mb-4"><h3 class="h5 text-primary">3. View the Data on the Map</h3><p>The tool reads the geographic information from the KML file and displays it on an interactive map. </p></div><div><h3 class="h5 text-primary">4. Explore Your Data</h3><p class="mb-0">Zoom in, zoom out, move around the map, and inspect the locations, routes, or boundaries contained in your KML file. </p></div></div></section>

<!-- Why Use -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-4">Why Use a KML Viewer?</h2><p>A KML Viewer is useful when you want to quickly check a KML file without installing professional mapping or GIS software. </p><ul class="mb-0"><li class="mb-2">Check GPS locations.</li><li class="mb-2">View routes and paths.</li><li class="mb-2">Check geographic boundaries.</li><li class="mb-2">View property and land areas.</li><li class="mb-2">Inspect survey data.</li><li class="mb-2">Check telecom site locations.</li><li class="mb-2">View network coverage areas.</li><li class="mb-2">Review geographic points.</li><li class="mb-2">Check data exported from mapping software.</li><li>Test KML files before using them in another application.</li></ul></div></section>


 <!-- KML Features -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-4">What Can a KML File Contain?</h2><h3 class="h5 text-primary">Placemarks</h3><p>A placemark represents a specific location on the map. It can be used for a building, tower, airport, shop, or other point. </p><h3 class="h5 text-primary mt-4">Paths</h3><p>Paths are used to show lines or routes between locations. For example, a KML file can contain a road route, walking route, network route, or survey path. </p><h3 class="h5 text-primary mt-4">Polygons</h3><p>Polygons are used to show areas and boundaries. They can represent land parcels, buildings, districts, coverage areas, or service zones. </p><h3 class="h5 text-primary mt-4">Folders</h3><p class="mb-0">KML can organize multiple geographic features into folders. This can make large KML files easier to manage. </p></div></section>


<!-- KML Example -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML Example</h2><p>A simple KML file can contain a placemark like this: </p><pre class="bg-light p-3 rounded overflow-auto"><code>&lt;Placemark&gt; &lt;name&gt;Example Location&lt;/name&gt; &lt;Point&gt; &lt;coordinates&gt;77.5946,12.9716,0&lt;/coordinates&gt; &lt;/Point&gt; &lt;/Placemark&gt;</code></pre><p class="mb-0">The coordinates represent the location of the point. A KML Viewer reads this information and places the marker at the corresponding location on the map. </p></div></section>

 <!-- Coordinates -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML Coordinates</h2><p>KML coordinates normally use the following order: </p><div class="alert alert-info"><strong>Longitude, Latitude, Altitude</strong></div><p>For example:</p><pre class="bg-light p-3 rounded"><code>77.5946,12.9716,0</code></pre><div class="row g-3 mt-2"><div class="col-md-4"><div class="p-3 bg-light rounded"><strong>77.5946</strong><p class="mb-0">Longitude</p></div></div><div class="col-md-4"><div class="p-3 bg-light rounded"><strong>12.9716</strong><p class="mb-0">Latitude</p></div></div><div class="col-md-4"><div class="p-3 bg-light rounded"><strong>0</strong><p class="mb-0">Altitude</p></div></div></div><p class="mt-4 mb-0">Altitude can be used when the KML data contains height information. </p></div></section>


 <!-- GIS -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML Viewer for GIS Data</h2><p>KML is commonly used for sharing geographic information between mapping applications. A KML Viewer provides a quick way to inspect GIS-related data such as points, lines, boundaries, and areas. </p><p>It can be useful when checking data exported from GIS software, mapping applications, GPS devices, or other geographic tools. </p><p class="mb-0">For advanced GIS analysis and editing, professional GIS software may still be more suitable. However, for simply viewing a KML file, an online viewer can be much faster. </p></div></section>
         
<!-- Developers -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML Viewer for Developers</h2><p>Developers may use KML when working with mapping applications or geographic data. A KML Viewer can help check whether the generated data is displayed correctly. </p><ul class="mb-0"><li class="mb-2">Check whether locations are displayed correctly.</li><li class="mb-2">Verify geographic coordinates.</li><li class="mb-2">Check whether routes appear in the correct place.</li><li class="mb-2">Verify polygon shapes.</li><li class="mb-2">Check multiple geographic features.</li><li>Inspect KML data before adding it to an application.</li></ul></div></section>

 <!-- Google Earth -->
 <section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">Can I View a KML File Without Google Earth?</h2><p>Yes. You do not always need Google Earth or professional GIS software to inspect a KML file. </p><p class="mb-0">An online KML Viewer can display the geographic information directly in your web browser. This is especially useful when you only need to quickly check the contents of a KML file. </p></div></section>

<!-- KML vs GIS -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML Viewer vs. GIS Software</h2><p>A KML Viewer is mainly designed for quickly viewing and checking KML data. </p><p>Professional GIS software provides additional features such as: </p><ul><li class="mb-2">Geographic analysis</li><li class="mb-2">Data editing</li><li class="mb-2">Layer management</li><li class="mb-2">Data conversion</li><li class="mb-2">Spatial calculations</li><li>Advanced map creation</li></ul><div class="alert alert-success mb-0"><strong>Simple answer:</strong>If your main goal is simply to view a KML file on a map, an online KML Viewer can be a convenient option. </div></div></section>

 <!-- KML vs KMZ -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-3">KML vs. KMZ</h2><p>KML and KMZ are closely related geographic file formats. </p><div class="table-responsive"><table class="table table-bordered table-striped align-middle"><thead class="table-light"><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><strong>KML</strong></td><td>An XML-based geographic file used to store and display geographic information. </td></tr><tr><td><strong>KMZ</strong></td><td>A compressed version of KML that can also contain related files such as images. </td></tr></tbody></table></div><p class="mb-0">If a tool supports KMZ files, you may be able to view both KML and KMZ geographic data using the same application. </p></div></section>
<!-- Who Can Use -->
<section class="card border-0 shadow-sm mb-4"><div class="card-body p-4 p-md-5"><h2 class="mb-4">Who Can Use a KML Viewer?</h2><div class="row g-3"><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">GIS Professionals </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">RF Planning Engineers </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Telecom Engineers </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Surveyors </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Developers </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Students </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Researchers </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">GPS Users </div></div><div class="col-6 col-md-4"><div class="p-3 bg-light rounded text-center">Data Analysts </div></div></div></div></section>
           

<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Kml Viewer</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">What is a KML Viewer?</div>
       <p class="mb-0">A KML Viewer is an online tool that displays geographic information from a KML file on an interactive map.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">What is a KML file?</div>
         <p class="mb-0">KML stands for Keyhole Markup Language. It is an XML-based format used to store and display geographic information.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">Can I view a KML file online?</div>
        <p class="mb-0">Yes. An online KML Viewer can display geographic features from a KML file directly in your web browser.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Do I need Google Earth to open a KML file?</div>
        <p class="mb-0">No. Google Earth is one option for viewing KML files, but an online KML Viewer can also be used to inspect KML data.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">What coordinate order does KML use?</div>
        <p class="mb-0">KML normally uses longitude, latitude, and altitude. For example, 77.5946,12.9716,0 represents longitude, latitude, and altitude respectively.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can KML contain polygons?</div>
        <p class="mb-0">Yes. KML supports polygons and can be used to display boundaries, zones, land parcels, and coverage areas.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can KML contain routes?</div>
        <p class="mb-0">Yes. KML can contain line features that can be used to display routes, paths, roads, and other linear geographic information.</p>
       </div>
     </div>
   </section>
      <!-- Did You Know? -->
</div>




<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/@mapbox/togeojson@0.2.0/dist/togeojson.umd.min.js"></script>
<script src="https://unpkg.com/@tmcw/togeojson@6.0.0/dist/togeojson.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>   -->
<script src="{{ '/assets/js/geolocation/kml-viewer.js' | relative_url }}"></script>