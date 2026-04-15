---
layout: default
title: Free Azimuth Calculator | Find Azimuth Angle from Coordinates
permalink: /azimuth-calculator
description: "Calculate azimuth angle instantly with our free Azimuth Calculator. Find accurate direction between coordinates for navigation, surveying, and RF antenna alignment."
image: "/assets/images/azimuth-calculator.jpg"
last_modified_at: 2026-02-28
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<style>
 #map { height: 400px; }
 #compassCanvas { width: 100%; height: auto; background: #f8f9fa; border-radius: 50%; display: block; margin: 0 auto; border: 1px solid #dee2e6; }
 .result-card{  background: linear-gradient(180deg,#ffffff 0%,#fbfdff 100%);  border: 1px solid rgba(0,0,0,0.04);}
 .compass-wrapper{  background:#ffffff;  border-radius:16px;  padding:14px;  display:inline-block;  box-shadow:0 6px 18px rgba(0,0,0,0.08);}
 .result-card{  transition: all .25s ease;}
 .result-card:hover{  transform: translateY(-2px);  box-shadow:0 12px 28px rgba(0,0,0,0.10);}
</style>

<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/geolocation-tools">Geolocation Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">Azimuth Calculator</li>
  </ol>
</div>

 <div class="col-12 col-xl-11">
  <div class="text-primary">
   <h1>Azimuth Calculator – Calculate Azimuth Angle & Direction (0° to 360°)</h1>
    <div class="row g-4">
    <div class="col-12 col-md-5">
   <div class="row g-3">
 <!-- point A -->
       <div class="col-12">
       <div class="border rounded p-3 bg-white">
       <h3 class="h6 fw-bold mb-2"> Point A</h3>
        <div class="mb-2"> <input type="number" class="form-control" id="latA" step="any" placeholder="Enter Latitude e.g. 40.7128"> </div>
        <div class="mb-2"><input type="number" class="form-control" id="lonA" step="any" placeholder="Enter Longitude e.g. -74.0060"></div>
         <button class="btn btn-sm btn-outline-primary mt-1" id="setAMap">📍 set from map</button>
        </div>
       </div>
  <!-- point B -->
 <div class="col-12">
      <div class="border rounded p-3 bg-white">
        <h3 class="h6 fw-bold mb-2">Point B</h3>
          <div class="mb-2"><input type="number" class="form-control" id="latB" step="any" placeholder="Enter Latitude e.g. 34.0522"></div>
           <div class="mb-2"><input type="number" class="form-control" id="lonB" step="any" placeholder="Enter Longitude e.g. -118.2437"></div>
             <button class="btn btn-sm btn-outline-success mt-1" id="setBMap">📍 set from map</button>
             </div>
            </div>
     <!-- action buttons -->
    <div class="d-flex gap-2 mt-2">
    <button class="btn btn-primary flex-fill" id="calcBtn">Calculate</button> <button class="btn btn-outline-secondary" id="swapBtn">↔️ swap</button>
     </div>
    </div>
  </div>
 <!-- right: map -->
    <div class="col-12 col-md-7">
     <div class="border rounded p-2 bg-white">
     <div id="map" class="rounded"></div>
     <div class="d-flex justify-content-between align-items-center mt-4 small text-secondary">
        <span><span class="badge bg-primary">A</span> <span id="mapALabel">—</span></span>
        <span><span class="badge bg-success">B</span> <span id="mapBLabel">—</span></span>
        <span><span class="badge bg-dark">azimuth</span> <span id="mapAzimuthLabel">0°</span></span>
        </div>
      </div>
      </div>
     </div>


<!-- results -->
<br>
<div class="card border-0 shadow-sm rounded-4 result-card">
  <div class="card-body p-3 p-md-4">
    <div class="row align-items-center g-4">
      <!-- LEFT: Numbers -->
      <div class="col-12 col-md-5">
        <!-- Azimuth -->
        <div class="mb-4">
          <div class="small text-uppercase text-muted fw-semibold mb-1"> Azimuth (Bearing) </div>
          <div class="display-5 fw-bold text-primary" id="azimuthResult">  --.--° </div>
        </div>
        <!-- Distance -->
        <div>
          <div class="small text-uppercase text-muted fw-semibold mb-1">  Distance</div>
          <div class="fs-2 fw-bold text-primary" id="distanceResult"> ---- km </div>
        </div>
      </div>
      <!-- RIGHT: Compass -->
      <div class="col-12 col-md-7 text-center">
        <div class="compass-wrapper"> <canvas id="compassCanvas" width="280" height="280" style="max-width:260px;height:auto;"></canvas></div>
      </div>
    </div>
  </div>
</div>
 </div>

 <!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i>Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>

  <!-- Article -->
<section class="container my-4">
<h2 class="fw-bold">What is Azimuth?</h2>
<p class="lead"><strong>Azimuth</strong> is the horizontal angle measured clockwise from <strong>true north</strong> to a target direction, expressed from <strong>0° to 360°</strong>. It is widely used in navigation, surveying, GIS mapping, astronomy, and RF antenna alignment to determine precise directional heading between two geographic points.  </p>
 
 
 <div class="row align-items-center g-4">

  <!-- LEFT SIDE (SEO + CONTENT) -->
  <div class="col-md-6">

    <h2 class="fw-bold mb-3">What is Azimuth Angle?</h2>

    <p class="lead">
      The <strong>azimuth angle</strong> is a directional measurement expressed in degrees from 
      <strong>0° to 360°</strong>, used to define the position of an object relative to 
      <strong>True North</strong>.
    </p>

    <p>
      It is widely used in <strong>surveying, navigation, astronomy, and RF engineering</strong> 
      to determine precise direction. The angle is always measured 
      <strong class="text-primary">clockwise from North</strong>.
    </p>

    <!-- Highlight Box -->
    <div class="p-3 bg-light border rounded-3 mt-3">
      <h5 class="fw-semibold mb-2">📍 Standard Azimuth Reference</h5>
      <div class="d-flex flex-wrap gap-2">
        <span class="badge bg-dark">0° → North</span>
        <span class="badge bg-dark">90° → East</span>
        <span class="badge bg-dark">180° → South</span>
        <span class="badge bg-dark">270° → West</span>
      </div>
    </div>

    <!-- Info Note -->
    <p class="text-muted mt-3 small">
      💡 Unlike bearing, azimuth provides a full 360° directional system, making it more precise for technical applications.
    </p>

  </div>


  <!-- RIGHT SIDE (CALCULATOR / INTERACTIVE SVG) -->
  <div class="col-md-6">

    <div class="card shadow border-0 rounded-4">
      
      <div class="card-body text-center">

        <h4 class="fw-bold mb-3">Azimuth Angle Calculator</h4>

        <div class="bg-light p-3 rounded-3">

          <svg id="compass" width="100%" height="350" viewBox="0 0 400 400">

            <!-- Center -->
            <circle cx="200" cy="200" r="5" fill="#000"/>

            <!-- Directions -->
            <line x1="200" y1="200" x2="200" y2="40" stroke="#000"/>
            <line x1="200" y1="200" x2="360" y2="200" stroke="#000"/>
            <line x1="200" y1="200" x2="200" y2="360" stroke="#000"/>
            <line x1="200" y1="200" x2="40" y2="200" stroke="#000"/>

            <!-- Labels -->
            <text x="200" y="25" text-anchor="middle" font-size="14">0°</text>
            <text x="365" y="205" font-size="14">90°</text>
            <text x="200" y="385" text-anchor="middle" font-size="14">180°</text>
            <text x="30" y="205" font-size="14">270°</text>

            <!-- Draggable Line -->
            <line id="azLine" x1="200" y1="200" x2="200" y2="80"
                  stroke="#dc3545" stroke-width="3" stroke-linecap="round"/>

            <!-- Angle Arc -->
            <path id="arc" fill="none" stroke="#dc3545" stroke-width="2"/>

          </svg>

          <!-- Result Display -->
          <div class="mt-3">
            <div class="fs-5 fw-semibold">
              Angle: <span id="angle" class="text-danger">0</span>°
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

</div>





  </section>



  <!-- Formula Section -->
 <section class="container my-5">
 <h2 class="fw-bold mb-3">Azimuth Angle Formula</h2>
  <p> The azimuth between two geographic coordinates can be calculated using  the following trigonometric formula: </p>
    <div class="p-3 bg-light rounded-3 text-center">
      \[
      \text{Azimuth} =
      \tan^{-1}
      \left(
      \frac{\sin(\Delta \lambda)\cos(\phi_2)}
      {\cos(\phi_1)\sin(\phi_2) -
      \sin(\phi_1)\cos(\phi_2)\cos(\Delta \lambda)}
      \right)
      \]
    </div>
    <ul class="mt-3 text-muted">
      <li><strong>φ₁</strong> = latitude of Point A</li>
      <li><strong>φ₂</strong> = latitude of Point B</li>
      <li><strong>Δλ</strong> = difference in longitude</li>
    </ul>
    <p class="mt-3"> Our <strong>Azimuth Calculator</strong> automatically performs this calculation to deliver fast and accurate directional results.</p>

  </section>

  <!-- Example -->
  <section class="container my-5">
    <h2 class="fw-bold mb-3">Example: Azimuth Calculation</h2>
    <p>Suppose you want to calculate the azimuth from Delhi to Mumbai using their geographic coordinates:</p>
    <div class="p-3 bg-light rounded-3">
      <p class="mb-1"><strong>Point A (Delhi):</strong> 28.6139° N, 77.2090° E </p>
      <p class="mb-1"><strong>Point B (Mumbai):</strong> 19.0760° N, 72.8777° E </p>
      <p class="mb-0"><strong>Result:</strong> Azimuth ≈ <strong>212°</strong>  (South-West direction)</p>
    </div>
  </section>
  <!-- Azimuth vs Bearing -->
  <section class="container my-5">
  <h2 class="fw-bold mb-3">Azimuth vs Bearing</h2>
 <p>Although <strong>azimuth</strong> and <strong>bearing</strong> both  describe direction, they use different measurement systems. Azimuth is measured clockwise from north in a full <strong>0°–360°</strong> circle, while bearing is typically expressed using quadrant notation.</p>
    <div class="table-responsive">
      <table class="table table-bordered align-middle">
        <thead class="table-light">
          <tr>
            <th>Feature</th>
            <th>Azimuth</th>
            <th>Bearing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Angle Range</td>
            <td>0° to 360°</td>
            <td>0° to 90° per quadrant</td>
          </tr>
          <tr>
            <td>Reference</td>
            <td>Clockwise from North</td>
            <td>North or South toward East/West</td>
          </tr>
          <tr>
            <td>Common Use</td>
            <td>RF, GPS, GIS, astronomy</td>
            <td>Land surveying, navigation</td>
          </tr>
          <tr>
            <td>Example</td>
            <td>225°</td>
            <td>S 45° W</td>
          </tr>
        </tbody>
      </table>
    </div>
<p class="text-muted mb-0">Most modern geolocation and RF planning tools prefer azimuth because it provides a continuous 360-degree directional reference. </p>




<!-- FAQ Section -->
<section class="p-4">
  <h2 class="mb-4">FAQ on Azimuth Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">1. What is an azimuth angle?</div>
       <p class="mb-0">The <strong>azimuth angle</strong> is the horizontal angle measured clockwise from <strong>true north (0&deg;)</strong> to a target direction. It ranges from <strong>0&deg; to 360&deg;</strong> and is widely used in navigation, GIS, and RF antenna alignment.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary"> 2. How is azimuth calculated?</div>
         <p class="mb-0">Azimuth is calculated using the latitude and longitude of two points. The formula uses trigonometric functions like sine, cosine, and arctangent to determine the direction from Point A to Point B.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary"> 3. Does azimuth always measure clockwise?</div>
        <p class="mb-0">Yes. Azimuth is always measured clockwise from true north, which makes it a consistent 360° directional system.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary"> 4. What does 0°, 90°, 180°, and 270° mean in azimuth?</div>
        <p class="mb-0">0° → North | 90° → East | 180° → South | 270° → West</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary"> 5. Is azimuth 0 360?</div>
        <p class="mb-0">Yes — azimuth is measured from 0° to 360° clockwise from north, where 0° and 360° both represent north.</p>
       </div>
     </div>
   </section>
<!-- Did You Know? -->

{% include geolocation.html %}

</section>
<script src="{{ '/assets/js/azimuth-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an azimuth angle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The azimuth angle is the horizontal angle measured clockwise from true north (0°) to a target direction. It ranges from 0° to 360° and is widely used in navigation, GIS, and RF antenna alignment."
      }
    },
    {
      "@type": "Question",
      "name": "How is azimuth calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Azimuth is calculated using the latitude and longitude of two points. The formula uses trigonometric functions like sine, cosine, and arctangent to determine the direction from Point A to Point B."
      }
    },
    {
      "@type": "Question",
      "name": "Does azimuth always measure clockwise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, azimuth is always measured clockwise from true north, making it a consistent 360-degree directional system."
      }
    },
    {
      "@type": "Question",
      "name": "What does 0°, 90°, 180°, and 270° mean in azimuth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "0° represents North, 90° represents East, 180° represents South, and 270° represents West."
      }
    },
    {
      "@type": "Question",
      "name": "Is azimuth 0 360?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, azimuth is measured from 0° to 360° clockwise from north, where both 0° and 360° represent north."
      }
    }
  ]
}
</script>
