---
layout: default
title: Latitude Longitude Converter | Convert Decimal to DMS Easily and Fast
permalink: /latitude-longitude-converter
description: "Quickly convert latitude and longitude between decimal degrees and DMS (degrees, minutes, seconds) formats. Use our Lat Long Converter easy, user-friendly and powerful tool."
---

<style>
  .converter-container {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        #map {
            height: 60vh;
            border-radius: 10px;
        }
        .input-group-text {
            min-width: 100px;
        }
        .error {
            border: 2px solid #ff4444 !important;
        }
    </style>
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
 <div class="row p-4">
            <div class="col-md-6">
                <div class="converter-container p-4 mb-4">
           <h3 class="mb-4 text-center">Geo Coordinate Converter</h3>
                    
  <!-- Decimal to DMS -->
 <div class="mb-4">
                        <h5>Decimal to Degrees/Minutes/Seconds</h5>
                        <div class="input-group mb-2">
                            <span class="input-group-text">Latitude</span>
                            <input type="number" step="any" id="decLat" class="form-control" placeholder="Decimal Latitude">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">Longitude</span>
                            <input type="number" step="any" id="decLon" class="form-control" placeholder="Decimal Longitude">
                        </div>
                        <button onclick="convertDecimalToDMS()" class="btn btn-primary w-100">Convert to DMS</button>
                    </div>

  <!-- DMS to Decimal -->
   <div class="mb-4">
                        <h5>Degrees/Minutes/Seconds to Decimal</h5>
                        <div class="row mb-2">
                            <div class="col-3">
                                <input type="number" id="latDeg" class="form-control" placeholder="Deg">
                            </div>
                            <div class="col-3">
                                <input type="number" id="latMin" class="form-control" placeholder="Min">
                            </div>
                            <div class="col-3">
                                <input type="number" id="latSec" class="form-control" placeholder="Sec">
                            </div>
                            <div class="col-3">
                                <select id="latDir" class="form-select">
                                    <option>N</option>
                                    <option>S</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-3">
                                <input type="number" id="lonDeg" class="form-control" placeholder="Deg">
                            </div>
                            <div class="col-3">
                                <input type="number" id="lonMin" class="form-control" placeholder="Min">
                            </div>
                            <div class="col-3">
                                <input type="number" id="lonSec" class="form-control" placeholder="Sec">
                            </div>
                            <div class="col-3">
                                <select id="lonDir" class="form-select">
                                    <option>E</option>
                                    <option>W</option>
                                </select>
                            </div>
                        </div>
                        <button onclick="convertDMSToDecimal()" class="btn btn-success w-100">Convert to Decimal</button>
                    </div>

   <!-- Results -->
 <div id="results" class="alert alert-info"></div>
                </div>
            </div>
            
  <div class="col-md-6">
                <div id="map"></div>
            </div>
        </div>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="{{ '/assets/js/lat-long-converter.js' | relative_url }}"></script>
