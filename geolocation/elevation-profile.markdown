---
layout: default
title: Elevation Profile Calculator – Create Route Elevation Charts Online
permalink: /elevation-profile
description: "Generate an elevation profile for any route on a map. View elevation gain, elevation loss, distance, terrain analysis, and interactive elevation charts for hiking, cycling, running, and driving routes."
#image: "/assets/images/elevation-vs-altitude-diagram.png"
last_modified_at: 2026-08-23
---
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@turf/turf@6.5.0/turf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
<style>
 .map-container{min-height:700px}.toolbar{background:#2c3e2f;color:#fff;padding:10px 20px;display:flex;flex-wrap:wrap;align-items:center;gap:15px;box-shadow:0 2px 8px #0000004d;z-index:10}.toolbar h2{font-size:1.2rem;margin:0}.toolbar button{background:#ff8c42;border:none;color:#fff;padding:6px 14px;border-radius:30px;cursor:pointer;font-weight:700}.toolbar button.demo-btn{background:#3a6ea5}.toolbar button.clear-btn{background:#5a626e}.status-msg{font-size:.8rem;background:#000a;padding:4px 12px;border-radius:20px}.map-container{flex:1;display:flex;flex-direction:column;background:#263238}#map{height:500px;width:100%}.profile-panel{background:#0f1a1f;padding:12px 18px;border-top-left-radius:20px;border-top-right-radius:20px}.profile-header{display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:10px;gap:8px}.stats{display:flex;gap:20px;font-size:.8rem;background:#1e2a32;padding:5px 12px;border-radius:30px;color:#eee}.stats span{color:#ffb347;font-weight:700}.chart-wrapper{height:210px;width:100%;margin-top:5px}canvas{background:#0a1114;border-radius:16px;width:100%!important;height:100%!important}.elevation-hover-info{font-size:.75rem;background:#000c;padding:4px 12px;border-radius:20px;color:#fa6}.footnote{font-size:.7rem;text-align:center;margin-top:6px;color:#aaa}
</style>

<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
  <li class="breadcrumb-item active" aria-current="page">Elevation Profile Calculator</li>
 </ol>
</div>


<div class="toolbar">
    <h2>⛰️ Elevation Pro · Satellite + Guaranteed Chart</h2>
    <button id="demoBtn" class="demo-btn">🎯 Draw Demo Line (Mock Profile)</button>
    <button id="downloadBtn" disabled>📥 Download CSV</button>
    <button id="clearBtn" class="clear-btn">🗑️ Clear</button>
    <div id="statusMsg" class="status-msg">✅ Ready | Draw a line or click Demo</div>
</div>
<div class="map-container">
 <div id="map"></div>
 <div class="profile-panel">
  <div class="profile-header">
            <div class="stats">
                <span>📏 Dist: <span id="distanceVal">0</span> km</span>
                <span>⬆️ Gain: <span id="gainVal">0</span> m</span>
                <span>⬇️ Loss: <span id="lossVal">0</span> m</span>
                <span>🏔️ Max: <span id="maxElevVal">—</span> m</span>
                <span>📍 Min: <span id="minElevVal">—</span> m</span>
            </div>
            <div id="hoverElevDisplay" class="elevation-hover-info">🖱️ Hover chart → Elevation</div>
        </div>
 <div class="chart-wrapper">
      <canvas id="elevChart"></canvas>
    </div>
   <div class="footnote">💡 Hover chart → shows point on map | Mock data ensures chart visible | Real elevation from OpenTopoData + fallback</div>
 </div>
</div>
<script src="{{ '/assets/js/geolocation/elevation-profile.js' | relative_url }}"></script>


