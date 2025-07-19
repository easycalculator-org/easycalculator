---
layout: default
title: Police Map
permalink: /1#
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<style>
  html, body, #map {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  // Initialize map
  var map = L.map('map').setView([20.5937, 78.9629], 5);
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  // ✅ Load local geojson file from /assets
fetch('https://corsproxy.io/?https://raw.githubusercontent.com/datta07/INDIAN-SHAPEFILES/master/INDIA/INDIA_POLICE_STATIONS.geojson')
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
          if (feature.properties && feature.properties.ps) {
            layer.bindPopup("<b>Police Station:</b> " + feature.properties.ps);
          }
        }
      }).addTo(map);
    })
    .catch(err => console.error("Failed to load GeoJSON:", err));
</script>
