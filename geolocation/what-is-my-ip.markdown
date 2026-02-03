---
layout: default
title: What Is My IP Address – Instant IP Lookup & Location Info
permalink: /what-is-my-ip
description: "Find your public IP address instantly along with location details like country, city, ISP, latitude, and longitude. Fast, accurate, and free IP lookup tool."
last_modified_at: 2026-02-03
---
<link href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" rel="stylesheet">
<style>
#map {
      height: 500px;
      width: 100%;
      border-radius: 12px;
    }
    .card {
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .list-group-item strong {
      width: 100px;
      display: inline-block;
    }
  </style>
  <div class="container mt-4">
  <div class="row g-4">
    <!-- Left side: IP details -->
    <div class="col-md-6">
      <div class="card p-3 mb-3">
        <h5>IPv4 Address</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>IP:</strong> <span id="ipv4">Loading...</span></li>
          <li class="list-group-item"><strong>City:</strong> <span id="city4">-</span></li>
          <li class="list-group-item"><strong>Region:</strong> <span id="region4">-</span></li>
          <li class="list-group-item"><strong>Country:</strong> <span id="country4">-</span></li>
          <li class="list-group-item"><strong>ISP:</strong> <span id="org4">-</span></li>
        </ul>
      </div>
      <div class="card p-3">
        <h5>IPv6 Address</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>IP:</strong> <span id="ipv6">Loading...</span></li>
          <li class="list-group-item"><strong>City:</strong> <span id="city6">-</span></li>
          <li class="list-group-item"><strong>Region:</strong> <span id="region6">-</span></li>
          <li class="list-group-item"><strong>Country:</strong> <span id="country6">-</span></li>
          <li class="list-group-item"><strong>ISP:</strong> <span id="org6">-</span></li>
        </ul>
      </div>
    </div>
    <!-- Right side: Map -->
    <div class="col-md-6">
      <div id="map"></div>
    </div>
  </div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="{{ '/assets/js/whis-is-my-ip.js' | relative_url }}"></script>
