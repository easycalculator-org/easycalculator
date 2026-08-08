---
layout: default
title: KML Viewer | View KML Files Online on Interactive Map
permalink: /kml-viewer
description: "View KML files online with our free kml Viewer. Display GPS tracks, routes, and waypoints on an interactive map, inspect coordinates, elevation, distance, and export data instantly."
image: "/assets/images/og/kml-viewer.jpg"
last_modified_at: 2026-07-08
---

<link href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css" rel="stylesheet" />

<style>
.drop-zone{border:2px dashed #d0d7de;border-radius:12px;padding:2rem 1.5rem;text-align:center;cursor:pointer;transition:all .3s;background:#fafbfc}.drop-zone:hover,.drop-zone.dragover{border-color:#2c7be5;background:#f0f7ff}.drop-zone i{font-size:3rem;color:#8b9aab}#map-container{position:relative;border-radius:16px;overflow:hidden;background:#e8ecf1}#map{width:100%;height:520px;background:#e8ecf1}.map-controls{position:absolute;top:16px;right:16px;z-index:1000;display:flex;flex-direction:column;gap:8px}.map-controls .btn-map{background:#ffffffeb;backdrop-filter:blur(4px);border:none;border-radius:10px;width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;color:#2c3e50;box-shadow:0 2px 10px #0000001a;transition:all .2s}.map-controls .btn-map:hover{background:#fff;transform:scale(1.04)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#8b9aab}.empty-state i{font-size:3.5rem;color:#c8d0d8;margin-bottom:.75rem}.stat-divider{width:1px;background:#e9edf2;margin:0 .5rem}.toast-container{position:fixed;top:80px;right:20px;z-index:9999}.toast-custom{background:#fff;border-radius:12px;border:none;box-shadow:0 8px 32px #0000001f;padding:.75rem 1.25rem;min-width:240px}.toast-custom .toast-body{display:flex;align-items:center;gap:10px;font-size:.9rem;color:#1a2a3a}.toast-custom .toast-body i{font-size:1.3rem}.toast-custom.toast-success .toast-body i{color:#28a745}.toast-custom.toast-error .toast-body i{color:#dc3545}@media (max-width: 768px){#map{height:360px}.drop-zone{padding:1.5rem 1rem}.drop-zone i{font-size:2.2rem}.map-controls .btn-map{width:38px;height:38px;font-size:1rem}}@media (max-width: 576px){#map{height:280px}.stat-divider{display:none}}
</style>
<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
  <li class="breadcrumb-item active" aria-current="page">KML Viewer</li>
 </ol>
</div>
<!-- Upload Card -->
<div class="card border-0 shadow-sm p-3 p-md-4 rounded-4">
<div class="drop-zone" id="dropZone"><i class="fa-solid fa-cloud-arrow-up"></i>
 <div class="text-muted small"><strong class="text-dark">Click to upload</strong> or drag &amp; drop a <strong>.kml</strong> file</div>
 <div class="file-name text-dark fw-medium mt-1" id="fileName" style="display:none;"></div>
 <input type="file" id="fileInput" accept=".kml,application/vnd.google-earth.kml+xml" style="display:none;" />
 </div>
 </div>
<!-- Map + Info -->
<div class="row g-3">
 <div class="col-12">
  <div id="map-container" class="shadow-sm">
    <div id="map"></div>
  <!-- Map controls -->
<div class="map-controls">
  <button class="btn-map" id="btnZoomIn" title="Zoom in"><i class="fa-solid fa-plus"></i></button>
  <button class="btn-map" id="btnZoomOut" title="Zoom out"><i class="fa-solid fa-minus"></i></button>
  <button class="btn-map" id="btnFitBounds" title="Fit track"><i class="fa-solid fa-vector-square"></i></button>
 </div>
<!-- Empty state -->
<div class="empty-state" id="emptyState"><i class="fa-solid fa-location-dot"></i><p class="mb-0">Upload a KML file to see your placemarks or paths</p></div>
 </div>
 </div>
 </div>
<!-- Info Panel -->
<div class="row g-3 mt-2">
   <div class="col-12">
                <div class="card border-0 shadow-sm rounded-4 p-3 p-md-4">
                    <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <!-- Stats -->
                        <div class="d-flex flex-wrap align-items-center gap-2 gap-md-4" id="statsContainer">
                            <div class="text-center">
                                <div class="fs-5 fw-bold" id="statDistance">—</div>
                                <div class="text-uppercase small text-secondary fw-semibold">Distance</div>
                            </div>
                            <div class="stat-divider"></div>
                            <div class="text-center">
                                <div class="fs-5 fw-bold" id="statElevation">—</div>
                                <div class="text-uppercase small text-secondary fw-semibold">Elevation Δ</div>
                            </div>
                            <div class="stat-divider"></div>
                            <div class="text-center">
                                <div class="fs-5 fw-bold" id="statTime">—</div>
                                <div class="text-uppercase small text-secondary fw-semibold">Time</div>
                            </div>
                            <div class="stat-divider"></div>
                            <div class="text-center">
                                <div class="fs-5 fw-bold" id="statPoints">—</div>
                                <div class="text-uppercase small text-secondary fw-semibold">Features</div>
                            </div>
                        </div>
                        <!-- Actions -->
   <div class="d-flex flex-wrap gap-2">
    <button class="btn btn-primary rounded-pill px-4" id="btnDownloadPng"><i class="fa-solid fa-download me-1"></i>Download PNG</button>
    <button class="btn btn-outline-secondary rounded-pill px-4" id="btnClearTrack"><i class="fa-solid fa-circle-xmark me-1"></i>Clear</button>
    </div>
   </div>
    </div>
     </div>
    </div>
 <div class="toast-container" id="toastContainer"></div>



<script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@mapbox/togeojson@0.2.0/dist/togeojson.umd.min.js"></script>
<script src="https://unpkg.com/@tmcw/togeojson@6.0.0/dist/togeojson.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>  
<script src="{{ '/assets/js/geolocation/kml-viewer.js' | relative_url }}"></script>