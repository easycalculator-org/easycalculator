---
layout: default
title: Distance Calculator on Map – Measure Distance & Area Online
permalink: /geolocation-tools/distance-calculator-on-map
description: "Free Distance Calculator on Map to measure distance, routes, and land area online using satellite and street maps. Draw lines or polygons for accurate geodesic calculations."
image: "/assets/images/og/distance-calculator-on-map.jpg"
last_modified_at: 2026-05-29
---
<style>
*{box-sizing:border-box}.card-glass{border-radius:30px;background:#ffffffeb;backdrop-filter:blur(16px);overflow:hidden;border:1px solid #ffffffb3;box-shadow:0 10px 40px #0f172a14 0 2px 10px #0f172a0a}.toolbar-header{background:linear-gradient(135deg,#0f172a 0%,#111827 45%,#1e293b 100%);color:#fff;padding:18px 26px}.map-wrapper{position:relative}#map{height:82vh;min-height:700px;width:100%;background:#cbdde6}#map::after{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(to bottom,#0000000a,transparent 20%,transparent 80%,#0000000a)}.results-panel{background:#fffffff2;border-radius:26px;height:100%;display:flex;flex-direction:column;backdrop-filter:blur(12px);border:1px solid #ffffffb3;box-shadow:0 8px 30px #0f172a14;position:sticky;top:12px}.section-title{font-weight:700;font-size:1rem;margin-bottom:14px;border-left:4px solid #2563eb;padding-left:12px}.mode-selector{background:#f1f5f9;border-radius:60px;padding:5px;display:flex;gap:8px}.mode-btn{border-radius:40px;padding:10px 22px;font-weight:600;border:none;background:transparent;transition:.25s ease;color:#334155;font-size:.92rem}.mode-btn.active{background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;box-shadow:0 8px 18px #2563eb47}.shape-card{background:#fff;border-radius:18px;padding:14px 16px;margin-bottom:12px;border:1px solid #e5e7eb;transition:all .22s ease;box-shadow:0 2px 8px #0f172a0a}.shape-card:hover{transform:translateY(-2px);box-shadow:0 10px 25px #0f172a14;border-color:#bfdbfe}.unit-badge{background:#eff6ff;color:#1d4ed8;padding:5px 12px;border-radius:30px;font-size:.75rem;font-weight:600}.delete-shape{background:none;border:none;color:#94a3b8;transition:.2s}.delete-shape:hover{color:#dc2626;transform:scale(1.1)}.clear-all{border-radius:40px;background:#fff;border:none;font-weight:600}.clear-all:hover{background:#fee2e2}.map-bottom-bar{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);z-index:999;display:flex;gap:12px;flex-wrap:wrap;justify-content:center}.info-tip{background:#ffffffeb;backdrop-filter:blur(10px);padding:10px 16px;border-radius:40px;box-shadow:0 5px 18px #00000014;font-size:.8rem;font-weight:500}.total-box{background:#eff6ff;border-radius:20px}.leaflet-top.leaflet-left{margin-top:18px;margin-left:18px}.leaflet-control-draw{border-radius:18px!important;overflow:hidden;border:none!important;box-shadow:0 10px 30px #0000001f!important}.leaflet-bar a{width:42px!important;height:42px!important;line-height:42px!important}@media(max-width:768px){#map{height:72vh;min-height:500px}.mode-selector{width:100%}.mode-btn{flex:1;font-size:.8rem;padding:10px 8px}.map-bottom-bar{width:95%}}
</style>

<!-- Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js"></script>

<div aria-label="breadcrumb" class="p-2">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">Distance Calculator on Map</li>
  </ol>
</div>



<div class="container-fluid px-2 px-lg-3 py-3">
<div class="card-glass">

<!-- HEADER -->
<div class="toolbar-header d-flex flex-wrap justify-content-between align-items-center">

<div>
<h4 class="mb-1 fw-bold"><i class="fas fa-ruler-combined me-2"></i>Distance Calculator on Map</h4>
<div class="small opacity-75">Measure distance and area accurately using satellite and street maps</div>
</div>

<div class="d-flex gap-2 mt-2 mt-lg-0">
<button id="fullscreenMapBtn" class="btn btn-light btn-sm rounded-pill px-3"><i class="fas fa-expand me-1"></i>Fullscreen</button>
<button id="globalClearBtn" class="btn clear-all btn-sm px-3"><i class="fas fa-trash me-1"></i>Clear</button>
</div>

</div>

<div class="row g-0">

<!-- MAP -->

<div class="col-lg-9">
<div class="map-wrapper">
<div id="map"></div>

<!-- FLOATING INFO -->
<div class="map-bottom-bar">
<div class="info-tip"><i class="fas fa-info-circle text-primary"></i>Double click to finish drawing</div>

<div class="info-tip"><i class="fas fa-layer-group"></i>OSM + Satellite Maps</div>

<div class="info-tip"><i class="fas fa-ruler-combined"></i>Geodesic Precision</div>
</div>
</div>
</div>

<!-- RIGHT -->

<div class="col-lg-3 p-3 bg-light-subtle">
<div class="results-panel p-3">

<!-- MODES -->

<div class="mb-4">
<div class="d-flex justify-content-between align-items-center mb-2">

<div class="fw-bold"><i class="fas fa-pen-ruler me-1"></i>Mode</div>

</div>

<div class="mode-selector">

<button id="lineModeBtn" class="mode-btn active"><i class="fas fa-ruler-horizontal"></i>Distance</button>
<button id="polygonModeBtn" class="mode-btn"><i class="fas fa-draw-polygon"></i>Area</button>

</div>

</div>

<!-- UNIT -->

<div class="mb-4">

<label class="small fw-semibold text-secondary mb-2">Distance Unit</label>

<select id="distanceUnitSelect" class="form-select rounded-pill">
<option value="meters">Meters</option>
<option value="kilometers">Kilometers</option>
<option value="feet" selected>Feet</option>
<option value="miles">Miles</option>
</select>

</div>

<!-- DISTANCE -->

<div class="section-title">📏 Distance Measurements</div>

<div id="linesListContainer" style="max-height:260px;overflow-y:auto;">
<div class="text-muted text-center py-4 small">No lines drawn</div>
</div>

<!-- AREA -->

<div class="section-title mt-3">📐 Area Measurements</div>

<div id="polygonsListContainer" style="max-height:240px;overflow-y:auto;">
<div class="text-muted text-center py-4 small">No polygons drawn</div>
</div>

<!-- TOTAL -->
<div id="totalAreaSummary" class="total-box p-3 mt-3 d-none">
<div class="fw-semibold mb-2"><i class="fas fa-chart-pie me-1"></i>Total Area</div>

<div class="row text-center">
<div class="col-6 border-end">
<div class="small text-secondary">Square Meter</div>

<div class="fw-bold fs-5"><span id="totalSqmVal">0</span></div>
</div>

<div class="col-6">
<div class="small text-secondary">Square Feet</div>
<div class="fw-bold fs-5"><span id="totalSqftVal">0</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script src="{{ '/assets/js/geolocation/distance-calc-map.js' | relative_url }}"></script>



