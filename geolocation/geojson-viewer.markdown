---
layout: default
title: GeoJSON Viewer – Online Map, Satellite & Feature Inspector
permalink: /geojson-viewer
description: "View GeoJSON files online on map and satellite layers. Explore points, lines, polygons and properties. Paste JSON and export GeoJSON, KML or CSV"
image: "/assets/images/og/geojson-viewer.jpg"
last_modified_at: 2026-09-18
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css">
<style>
#ec-geojson{--gj-blue:#2563eb;--gj-ink:#172b4d;--gj-muted:#52657d;color:var(--gj-ink);font-family:inherit;margin:24px auto;max-width:1600px}#ec-geojson *{box-sizing:border-box}#ec-geojson button,#ec-geojson select,#ec-geojson input{font:inherit}#ec-geojson button,#ec-geojson select{border:1px solid #cbd5e1;border-radius:9px;background:#fff;color:var(--gj-ink);padding:9px 13px;min-height:42px;cursor:pointer}#ec-geojson button:hover{background:#eff6ff;border-color:#2563eb}#ec-geojson button:disabled{opacity:.45;cursor:not-allowed}#ec-geojson :focus-visible{outline:3px solid #f59e0b;outline-offset:3px}#ec-geojson .gj-primary{background:#2563eb;color:white;border-color:#2563eb}#ec-geojson .gj-primary:hover{background:#1d4ed8}#ec-geojson .gj-hero{background:linear-gradient(120deg,#eff6ff,#f0fdfa);border:1px solid #dbeafe;border-radius:18px;padding:26px;margin-bottom:18px}#ec-geojson h1{font-size:clamp(1.8rem,3vw,2.6rem);margin:0 0 8px}#ec-geojson h2{font-size:1.1rem;margin:0 0 12px}#ec-geojson p{margin:8px 0}#ec-geojson .gj-muted{color:var(--gj-muted);font-size:.88rem}#ec-geojson .gj-badge{display:inline-block;padding:5px 10px;background:white;border:1px solid #dbeafe;border-radius:20px;font-size:.78rem;margin:8px 5px 0 0}#ec-geojson .gj-upload{border:2px dashed #93b4eb;border-radius:14px;background:#f8fbff;padding:18px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}#ec-geojson .gj-upload.gj-drag{background:#dbeafe;border-color:#2563eb}#ec-geojson .gj-toolbar{display:flex;flex-wrap:wrap;gap:9px;align-items:center;padding:12px;background:#fff;border:1px solid #dde5ef;border-radius:14px 14px 0 0}#ec-geojson .gj-toolbar label{display:flex;align-items:center;gap:6px;font-size:.85rem;margin:0}#ec-geojson .gj-spacer{flex:1}#ec-geojson .gj-map-shell{position:relative;background:#e9eef5;border:1px solid #dbe3ee;border-top:0;border-radius:0 0 14px 14px;overflow:hidden}#ec-geojson #gj-map{height:clamp(600px,76vh,900px);width:100%;z-index:1}#ec-geojson .gj-map-shell:fullscreen{width:100vw;height:100vh;border-radius:0}#ec-geojson .gj-map-shell:fullscreen #gj-map{height:100vh}#ec-geojson:has(.gj-expanded){transform:none;position:static;width:auto}#ec-geojson .gj-map-shell.gj-expanded{position:fixed;inset:0;z-index:10000;border-radius:0}#ec-geojson .gj-map-shell.gj-expanded #gj-map{height:100dvh}#ec-geojson .gj-map-tools{position:absolute;top:12px;right:12px;z-index:500;display:flex;gap:6px;flex-wrap:wrap;max-width:calc(100% - 65px)}#ec-geojson .gj-map-tools button,#ec-geojson .gj-map-tools select{box-shadow:0 2px 8px #0002}#ec-geojson .gj-coords{position:absolute;bottom:28px;left:10px;z-index:500;background:#fffffff0;border-radius:7px;padding:5px 9px;font-size:12px;pointer-events:none}#ec-geojson .gj-status{padding:9px 2px;min-height:38px;color:#345477;font-size:.9rem}#ec-geojson .gj-status.gj-error{color:#b42318}#ec-geojson .gj-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0}#ec-geojson .gj-stat{background:#fff;border:1px solid #e0e7ef;border-radius:12px;padding:15px}#ec-geojson .gj-stat strong{display:block;font-size:1.35rem;line-height:1.5}#ec-geojson .gj-stat span{font-size:.8rem;color:var(--gj-muted)}#ec-geojson .gj-panels{display:grid;grid-template-columns:minmax(240px,1fr) minmax(0,2fr);gap:14px}#ec-geojson .gj-panel{border:1px solid #e0e7ef;border-radius:14px;background:white;padding:18px;min-width:0}#ec-geojson #gj-files{max-height:350px;overflow:auto}#ec-geojson .gj-file{display:flex;gap:8px;align-items:center;border-bottom:1px solid #edf1f6;padding:10px 0}#ec-geojson .gj-file label{flex:1;min-width:0;overflow-wrap:anywhere;margin:0}#ec-geojson .gj-file small{display:block;color:var(--gj-muted)}#ec-geojson .gj-file input[type=color]{width:30px;height:32px;padding:0;border:0;background:none;flex-shrink:0}#ec-geojson .gj-file button{padding:4px 8px;font-size:.8rem}#ec-geojson #gj-profile{display:block;width:100%;height:210px;touch-action:pan-y}#ec-geojson .gj-playback{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px}#ec-geojson #gj-scrub{flex:1;min-width:110px}#ec-geojson .gj-table-wrap{max-height:330px;overflow:auto;margin-top:12px}#ec-geojson table{width:100%;border-collapse:collapse;font-size:.85rem}#ec-geojson th,#ec-geojson td{text-align:left;padding:9px;border-bottom:1px solid #e2e8f0;white-space:nowrap}#ec-geojson th{background:#f1f5f9;position:sticky;top:0}#ec-geojson .gj-detail{background:#f8fafc;padding:10px;border-radius:8px;min-height:42px;font-size:.85rem}#ec-geojson .gj-exports{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px}#ec-geojson .gj-marker{background:#2563eb;border:2px solid white;color:white;border-radius:50%;text-align:center;font-weight:bold;line-height:22px;box-shadow:0 1px 5px #0006}#ec-geojson input[type=checkbox]{width:17px;height:17px;accent-color:#2563eb}#ec-geojson .leaflet-control-attribution{font-size:10px}#ec-geojson .gj-method{margin:12px 0;font-size:.83rem;color:var(--gj-muted)}@media(min-width:1200px){#ec-geojson{width:min(1560px,calc(100vw - 48px));position:relative;left:50%;transform:translateX(-50%)}}@media(max-width:767px){#ec-geojson #gj-map{height:65vh;min-height:430px;max-height:700px}#ec-geojson .gj-stats{grid-template-columns:repeat(2,1fr)}#ec-geojson .gj-panels{grid-template-columns:1fr}#ec-geojson .gj-hero{padding:19px}#ec-geojson .gj-toolbar{gap:8px}#ec-geojson .gj-map-tools{max-width:calc(100% - 65px)}#ec-geojson .gj-map-tools button,#ec-geojson .gj-map-tools select{font-size:12px;padding:6px 8px}#ec-geojson .gj-stat strong{font-size:1.15rem}}@media print{#ec-geojson .gj-upload,#ec-geojson .gj-toolbar,#ec-geojson .gj-exports,#ec-geojson .gj-map-tools{display:none}#ec-geojson{transform:none;left:auto;width:100%}}
#ec-geojson #gj-files{max-height:420px;overflow:auto}#ec-geojson #gj-detail{max-height:420px;overflow:auto;overflow-wrap:anywhere}#ec-geojson #gj-detail h3{font-size:1.1rem}#ec-geojson #gj-detail dl{display:grid;grid-template-columns:minmax(90px,1fr) minmax(0,2fr);gap:7px 12px;margin:12px 0}#ec-geojson #gj-detail dt{font-weight:600}#ec-geojson #gj-detail dd{margin:0}#ec-geojson summary{cursor:pointer;padding:8px 0}#ec-geojson .gj-file{flex-wrap:wrap}#ec-geojson .gj-file label{min-width:90px}</style>
<div id="ec-geojson">
<nav aria-label="Breadcrumb"><p class="gj-muted"><a href="/">Home</a> / <a href="/geolocation-tools">Geolocation Tools</a> / GeoJSON Viewer</p></nav>
<header class="gj-hero"><h1>GeoJSON Viewer</h1><p>Open GeoJSON files on a large interactive map. Explore points, lines and polygons, inspect properties, and export your geographic data.</p><span class="gj-badge">Map &amp; satellite</span><span class="gj-badge">Points, lines &amp; polygons</span><span class="gj-badge">Properties &amp; styles</span><span class="gj-badge">Local file processing</span></header>
<div class="gj-upload" id="gj-drop"><div><strong>Drop your GeoJSON files here</strong><p class="gj-muted">Up to 10 files • 10 MB per file • 100,000 coordinates and 5,000 geometry parts in total.</p></div><div><input id="gj-input" type="file" accept=".geojson,.json,application/geo+json,application/json" multiple hidden><button type="button" class="gj-primary" id="gj-upload">Open GeoJSON files</button> <button type="button" id="gj-demo">Try demo</button></div></div>
<p class="gj-muted">File contents stay in your browser. External map providers receive your IP address and requested map areas. Data URLs and images referenced in properties are not fetched.</p>
<details class="gj-panel" style="margin-bottom:12px"><summary><strong>Paste GeoJSON instead</strong></summary><label for="gj-paste">GeoJSON text</label><textarea id="gj-paste" rows="8" spellcheck="false" placeholder='{"type":"Point","coordinates":[77.391,28.535]}' style="width:100%;display:block;border:1px solid #cbd5e1;border-radius:10px;padding:12px;font-family:monospace;margin:8px 0;resize:vertical"></textarea><button type="button" id="gj-paste-load" class="gj-primary">Load pasted GeoJSON</button> <button type="button" id="gj-paste-format">Format JSON</button></details>
<div id="gj-status" class="gj-status" role="status" aria-live="polite">Open a GeoJSON file, paste JSON, or try the demo.</div>
<div class="gj-toolbar"><label><input type="checkbox" id="gj-points" checked> Points</label><label><input type="checkbox" id="gj-lines" checked> Lines</label><label><input type="checkbox" id="gj-polygons" checked> Polygons</label><label><input type="checkbox" id="gj-styles" checked> Property colors</label><label><input type="checkbox" id="gj-labels"> Labels</label><span class="gj-spacer"></span><label>Units <select id="gj-units"><option value="metric">km / km²</option><option value="imperial">mi / mi²</option></select></label><button type="button" id="gj-clear">Clear all</button></div>
<div class="gj-map-shell" id="gj-map-shell"><div id="gj-map" aria-label="Interactive KML map"></div><div class="gj-map-tools"><select id="gj-basemap" aria-label="Map background"><option value="street">Map</option><option value="satellite">Satellite</option></select><button type="button" id="gj-fit">Fit features</button><button type="button" id="gj-locate">My location</button><button type="button" id="gj-fullscreen">Full screen</button></div><div class="gj-coords" id="gj-coords">Click the map to inspect coordinates</div></div>
<div class="gj-stats" id="gj-stats"></div>
<p class="gj-method">Statistics reflect visible geometry parts. Length and polygon area are spherical estimates, not surveying measurements. Polygon holes are subtracted; overlapping polygons are counted separately. Altitudes are preserved as supplied; the map is a 2D view.</p>
<div class="gj-panels"><section class="gj-panel"><h2>Loaded files</h2><p class="gj-muted">Toggle files or individual geometry parts. Turn off “Property colors” to use each file’s color.</p><div id="gj-files"></div></section><section class="gj-panel"><h2>Feature inspector</h2><div id="gj-detail" class="gj-detail">Click a feature on the map or select View in the table below.</div></section></div>
<section class="gj-panel" style="margin-top:14px"><div class="gj-toolbar" style="border:0;padding:0"><h2>Feature explorer</h2><span class="gj-spacer"></span><label>Search <input id="gj-search" type="search" placeholder="Name, type or file" style="max-width:190px;padding:8px;border:1px solid #cbd5e1;border-radius:8px"></label></div><p class="gj-muted">Search filters the table only. Use the checkboxes to change the map and exports.</p><div class="gj-table-wrap"><table><thead><tr><th>Show</th><th>Name</th><th>Geometry</th><th>Source type</th><th>Coordinates</th><th>Map</th></tr></thead><tbody id="gj-table"></tbody></table></div><p class="gj-muted" id="gj-page-info"></p><button type="button" id="gj-prev">Previous</button> <button type="button" id="gj-next">Next</button></section>
<div class="gj-exports"><button type="button" id="gj-export-json" class="gj-primary">Download GeoJSON</button><button type="button" id="gj-export-kml">Export KML</button><button type="button" id="gj-export-csv">Export coordinates CSV</button><button type="button" id="gj-export-png">Geometry PNG</button></div>
<p class="gj-muted">Exports include visible geometry parts. GeoJSON export keeps original properties and IDs on each visible part, including nested property values. Multipart geometries and GeometryCollections become individual Point, LineString or Polygon features. Null and empty geometries, bounding boxes and foreign members are omitted. KML export uses separate placemarks and serializes complex properties as text. PNG contains geometry only, without background imagery.</p>
<details class="gj-panel" style="margin-top:14px"><summary><strong>Supported GeoJSON and limits</strong></summary><p>Import a FeatureCollection, one Feature, or a geometry object. Supported geometry types: Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon and GeometryCollection. Polygon holes are retained.</p><p>Use WGS84 coordinates ordered as longitude, latitude, optional altitude. Legacy CRS declarations and projected coordinates are rejected. Polygon rings must be closed. Positions must have two or three numeric values. Null and empty geometries have no map representation.</p><p>The viewer checks structure and coordinate ranges, not complete RFC compliance or polygon topology. Self-intersections and areas larger than a hemisphere can produce unreliable measurements. Dateline-crossing shapes should be split at the antimeridian before import. Input styling recognizes six-digit hex stroke, fill and marker-color properties, plus numeric stroke-width, stroke-opacity and fill-opacity.</p></details>
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
 <h1>GeoJSON Viewer: View GeoJSON Files Online</h1>
  <p class="lead">A GeoJSON Viewer is a simple online tool that lets you open and view GeoJSON files directly on an interactive map. It is useful for checking locations, boundaries, routes, points, and other geographic data without installing complicated GIS software.</p>
  <p>You can upload a GeoJSON file or paste GeoJSON data into a viewer and see the geographic features on a map. This makes it much easier to understand your data than reading raw JSON code.</p>
<!-- What is GeoJSON -->
  <section class="card border-0 shadow-sm mb-4">
   <div class="card-body p-4 p-md-5">
   <h2 class="mb-3">What Is GeoJSON?</h2>
   <p>GeoJSON is a popular format used to store geographic information in a simple JSON-based structure. It is commonly used by mapping applications, websites, APIs, GIS software, and developers.</p>
 <p> A GeoJSON file can contain different types of geographic features, including points, lines, polygons, and collections of multiple features.</p>
                    <div class="row g-3 mt-3">
                        <div class="col-md-6">
                            <div class="p-3 bg-light rounded">
                                <strong>Point</strong>
                                <p class="mb-0">
                                    Used for locations such as towers, airports, shops,
                                    cities, or other specific places.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 bg-light rounded">
                                <strong>LineString</strong>
                                <p class="mb-0">
                                    Used for roads, routes, paths, or other linear features.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 bg-light rounded">
                                <strong>Polygon</strong>
                                <p class="mb-0">
                                    Used to represent an area, boundary, zone, or region.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 bg-light rounded">
                                <strong>FeatureCollection</strong>
                                <p class="mb-0">
                                    Used when a GeoJSON file contains multiple geographic
                                    features.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<!-- What is Viewer -->
 <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-3">What Is a GeoJSON Viewer?</h2>
                    <p>
                        A GeoJSON Viewer displays the geographic information contained
                        in a GeoJSON file on an interactive map.
                    </p>
                    <p>
                        Instead of looking at longitude, latitude, and JSON code,
                        you can see the actual points, lines, and areas visually on
                        a map.
                    </p>
                    <p>
                        For example, if your GeoJSON file contains a polygon representing
                        a service area, the viewer can draw that area on the map so you
                        can quickly check its location and shape.
                    </p>
                </div>
            </section>
            <!-- How to Use -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-4">How to Use a GeoJSON Viewer</h2>
                    <div class="mb-4">
                        <h3 class="h5 text-primary">1. Open the GeoJSON Viewer</h3>
                        <p>
                            Open the GeoJSON Viewer in your web browser. No complicated
                            GIS software is required for basic viewing.
                        </p>
                    </div>
                    <div class="mb-4">
                        <h3 class="h5 text-primary">2. Upload or Paste GeoJSON Data</h3>
                        <p>
                            Upload your <code>.geojson</code> or compatible JSON file,
                            or paste your GeoJSON data into the viewer if the tool
                            supports it.
                        </p>
                    </div>
                    <div class="mb-4">
                        <h3 class="h5 text-primary">3. View the Data on the Map</h3>
                        <p>
                            The viewer reads the coordinates and geographic features
                            and displays them on the map.
                        </p>
                    </div>
                    <div>
                        <h3 class="h5 text-primary">4. Explore the Map</h3>
                        <p class="mb-0">
                            Zoom in, zoom out, move around the map, and inspect your
                            geographic features.
                        </p>
                    </div>
                </div>
            </section>
            <!-- Benefits -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-4">Why Use a GeoJSON Viewer?</h2>
                    <p>
                        A GeoJSON Viewer is useful when you want to quickly check
                        geographic data without opening professional GIS software.
                    </p>
                    <ul class="mb-0">
                        <li class="mb-2">Check whether coordinates are correct.</li>
                        <li class="mb-2">View property or land boundaries.</li>
                        <li class="mb-2">Inspect GPS data.</li>
                        <li class="mb-2">Check routes and paths.</li>
                        <li class="mb-2">View city or administrative boundaries.</li>
                        <li class="mb-2">Review telecom coverage areas.</li>
                        <li class="mb-2">Inspect GIS data.</li>
                        <li class="mb-2">Test GeoJSON generated by an application or API.</li>
                    </ul>
                </div>
            </section>
            <!-- Coordinates -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-3">GeoJSON Coordinates: Longitude and Latitude</h2>
                    <p>
                        One important thing to remember when working with GeoJSON is
                        the order of coordinates.
                    </p>
                    <div class="alert alert-info">
                        <strong>GeoJSON normally uses:</strong>
                        Longitude, Latitude
                    </div>
                    <p>
                        For example:
                    </p>
                    <pre class="bg-light p-3 rounded"><code>[77.5946, 12.9716]</code></pre>
                    <p class="mb-0">
                        In this example, <strong>77.5946</strong> is the longitude and
                        <strong>12.9716</strong> is the latitude. Using the wrong
                        coordinate order can place your feature in the wrong location.
                    </p>
                </div>
            </section>
            <!-- Point Example -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-3">GeoJSON Point Example</h2>
                    <p>
                        A simple GeoJSON point can represent a single geographic
                        location.
                    </p>
                    <pre class="bg-light p-3 rounded overflow-auto"><code>{
  "type": "Point",
  "coordinates": [77.5946, 12.9716]
}</code></pre>
                    <p class="mb-0">
                        When this data is loaded into a GeoJSON Viewer, the point
                        can be displayed on the map at its geographic location.
                    </p>
                </div>
            </section>
            <!-- Polygon -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">
                    <h2 class="mb-3">Viewing GeoJSON Polygons</h2>
                    <p>
                        GeoJSON can also represent an area using a polygon. Polygons
                        are useful for displaying boundaries and geographic zones.
                    </p>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card h-100 border">
                                <div class="card-body">
                                    <h3 class="h5">Common Examples</h3>
                                    <ul class="mb-0">
                                        <li>Property boundaries</li>
                                        <li>Districts</li>
                                        <li>Service areas</li>
                                        <li>Coverage zones</li>
                                        <li>Land parcels</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card h-100 border">
                                <div class="card-body">
                                    <h3 class="h5">Why Use a Viewer?</h3>
                                    <p class="mb-0">
                                        A viewer draws the polygon on an interactive map,
                                        making it easier to understand the size, shape,
                                        and location of the area.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- GIS -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-3">GeoJSON Viewer for GIS Data</h2>

                    <p>
                        GIS professionals and students often work with geographic
                        information from different sources. A GeoJSON Viewer provides
                        a quick way to inspect this information on a map.
                    </p>

                    <p>
                        It can be useful when working with data exported from GIS
                        applications, mapping APIs, GPS applications, or custom software.
                    </p>

                    <p class="mb-0">
                        For advanced GIS analysis, professional GIS software may still
                        be required. However, for quickly checking a GeoJSON file,
                        an online viewer can save time.
                    </p>

                </div>
            </section>

            <!-- Developers -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-3">GeoJSON Viewer for Developers</h2>

                    <p>
                        Developers often use GeoJSON with JavaScript mapping libraries
                        and web mapping applications. A viewer can help check whether
                        the generated data is displayed correctly.
                    </p>

                    <ul>
                        <li class="mb-2">Check whether coordinates are valid.</li>
                        <li class="mb-2">Confirm features appear in the correct location.</li>
                        <li class="mb-2">Check polygon shapes and boundaries.</li>
                        <li class="mb-2">Verify routes and lines.</li>
                        <li class="mb-2">Check multiple features in a FeatureCollection.</li>
                        <li>Inspect GeoJSON before using it in a web application.</li>
                    </ul>

                </div>
            </section>

            <!-- GeoJSON vs JSON -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-3">Is GeoJSON the Same as JSON?</h2>

                    <p>
                        GeoJSON is based on JSON, but it is specifically designed
                        for geographic data.
                    </p>

                    <p class="mb-0">
                        Regular JSON can store many types of structured information,
                        while GeoJSON follows a defined structure for geographic
                        features such as points, lines, and polygons.
                    </p>

                </div>
            </section>

            <!-- Installation -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-3">Does a GeoJSON Viewer Require Installation?</h2>

                    <p class="mb-0">
                        An online GeoJSON Viewer normally does not require any software
                        installation. You can open it in a modern web browser and load
                        your GeoJSON data directly.
                    </p>

                </div>
            </section>

          

            <!-- Viewer vs GIS -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-3">GeoJSON Viewer vs. GIS Software</h2>

                    <p>
                        A GeoJSON Viewer is mainly designed for quick viewing and
                        checking of geographic data.
                    </p>

                    <p>
                        Professional GIS software provides advanced features such
                        as editing, spatial analysis, data conversion, layer management,
                        and detailed mapping tools.
                    </p>

                    <div class="alert alert-success mb-0">
                        <strong>Simple answer:</strong>
                        If you only want to see what a GeoJSON file looks like on a map,
                        an online GeoJSON Viewer is usually the faster option.
                    </div>

                </div>
            </section>

            <!-- Who Can Use -->
            <section class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4 p-md-5">

                    <h2 class="mb-4">Who Can Use a GeoJSON Viewer?</h2>

                    <div class="row g-3">
                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                GIS Professionals
                            </div>
                        </div>

                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                Developers
                            </div>
                        </div>

                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                Surveyors
                            </div>
                        </div>

                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                RF Engineers
                            </div>
                        </div>

                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                Students
                            </div>
                        </div>

                        <div class="col-6 col-md-4">
                            <div class="p-3 bg-light rounded text-center">
                                Data Analysts
                            </div>
                        </div>
                    </div>

                </div>
            </section>
<!-- FAQ -->

<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on GeoJSON Viewer</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">What is a GeoJSON Viewer?</div>
       <p class="mb-0">A GeoJSON Viewer is an online tool that displays geographic data from a GeoJSON file on an interactive map. It helps you view points, lines, polygons, and other geographic features.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">Can I view a GeoJSON file without GIS software?</div>
         <p class="mb-0">Yes. An online GeoJSON Viewer can display a GeoJSON file directly in your web browser without requiring professional GIS software.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">What files can a GeoJSON Viewer open?</div>
        <p class="mb-0">Most GeoJSON viewers are designed to work with .geojson files and JSON files that contain valid GeoJSON data.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">What coordinate order does GeoJSON use?</div>
        <p class="mb-0">GeoJSON normally uses longitude first and latitude second. For example, [77.5946, 12.9716] represents longitude 77.5946 and latitude 12.9716.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">Can GeoJSON contain polygons?</div>
        <p class="mb-0">Yes. GeoJSON supports polygons and multi-polygons. They can be used to represent boundaries, zones, land areas, service areas, and other geographic regions.</p>
       </div>
     </div>
   </section>
      <!-- Did You Know? -->

</div>


<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/geolocation/geojson-viewer.js' | relative_url }}"></script>