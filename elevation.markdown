---
layout: default
title: My Current Elevation and Elevation Map - Find Altitude Easily
permalink: /current-elevation
description: "Quickly find your current elevation and explore an accurate elevation map. Use our app to check your altitude instantly for any location worldwide."
---
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome@6.4.0/css/all.min.css">
<style>
   :root{--primary:#6366f1;--secondary:#10b981;--glass:rgba(255, 255, 255, 0.9)}#map{height:75vh;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,.1);border:3px solid rgba(255,255,255,.5);z-index:1}.glass-panel{background:var(--glass);backdrop-filter:blur(12px);border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.1);border:1px solid rgba(255,255,255,.3);padding:1.5rem}.control-btn{background:var(--primary);color:#fff;transition:.3s;padding:12px 20px;border-radius:12px;display:flex;align-items:center;gap:8px}.control-btn:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(99,102,241,.3)}.elevation-marker{font-weight:600;padding:6px 12px;border-radius:20px;box-shadow:0 4px 6px rgba(0,0,0,.1)}.recent-list{max-height:300px;overflow-y:auto}.loading-spinner{animation:3s linear infinite spin}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gradient-text{background:linear-gradient(45deg,var(--primary),var(--secondary));-webkit-background-clip:text;background-clip:text;color:transparent}
 </style>

 <!-- Header -->
 <div class="text-center mb-2"> <h1 class="gradient-text display-4 fw-bold mb-3">My Current Elevation and Elevation Map</h1></div>

 <!-- Main Content -->
 <div class="row g-4">
     <!-- Map Section -->
      <div class="col-lg-8">
         <div id="map" class="glass-panel"></div>
        </div>

<!-- Controls Section -->
 <div class="col-lg-4">
 <!-- Current Location Button -->
 <button class="btn w-100 control-btn mb-4" onclick="getCurrentLocation()"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#74C0FC" d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>Find My Elevation</button>

 <!-- Current Location Card -->
  <div class="glass-panel mb-4">
    <h5 class="d-flex align-items-center gap-2 text-primary"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><path fill="#B197FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>Current Location </h5>
                    <div id="currentLocationInfo" class="mt-3 text-muted">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-sync loading-spinner" style="display: none;"></i>
                            <span>Click the button above</span>
                        </div>
                    </div>
                </div>

  <!-- Recent Locations Card -->
 <div class="glass-panel">
  <h5 class="d-flex align-items-center gap-2 text-secondary"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg>Recent Locations </h5>
      <div id="recentLocations" class="recent-list mt-3"></div>
                </div>
            </div>
        </div>

 <!-- Scripts -->
 
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
 <script src="{{ '/assets/js/elevation.js' | relative_url }}"></script>  