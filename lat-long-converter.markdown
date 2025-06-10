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
       <span class="input-group-text">Latitude</span><input type="number" step="any" id="decLat" class="form-control" placeholder="Decimal Latitude">
     </div>
       <div class="input-group mb-3">
         <span class="input-group-text">Longitude</span><input type="number" step="any" id="decLon" class="form-control" placeholder="Decimal Longitude">
         </div>
          <button onclick="convertDecimalToDMS()" class="btn btn-primary w-100">Convert to DMS</button>
        </div>

<!-- DMS to Decimal -->
   <div class="mb-4">
      <h5>Degrees/Minutes/Seconds to Decimal</h5>
        <div class="row mb-2">
         <div class="col-3"><input type="number" id="latDeg" class="form-control" placeholder="Deg"></div>
         <div class="col-3"><input type="number" id="latMin" class="form-control" placeholder="Min"></div>
         <div class="col-3"><input type="number" id="latSec" class="form-control" placeholder="Sec"></div>
         <div class="col-3"><select id="latDir" class="form-select"><option>N</option><option>S</option></select></div>
        </div>
          <div class="row mb-3">
             <div class="col-3"><input type="number" id="lonDeg" class="form-control" placeholder="Deg"></div>
              <div class="col-3"> <input type="number" id="lonMin" class="form-control" placeholder="Min"></div>
              <div class="col-3"><input type="number" id="lonSec" class="form-control" placeholder="Sec"></div>
              <div class="col-3"><select id="lonDir" class="form-select"><option>E</option><option>W</option></select></div>
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

<!-- Article -->

<div class="col-lg-10">
                    <article>
                        <!-- What is Converter Section -->
                        <section class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-primary text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-question-circle fa-lg"></i>
                                </div>
                                <h1 class="h4 mb-0">Latitude and Longitude Converter</h1>
                            </div>
                            <p class="lead">A latitude and longitude converter is a tool that helps you translate geographical coordinates from one format to another.</p>
                            <p>Whether you're a traveler, developer, geographer, or surveyor, converting between coordinate formats like decimal degrees (DD) and degrees, minutes, seconds (DMS) is a crucial task. Our Latitude Longitude Converter helps you effortlessly switch between these formats, locate addresses, and even convert map coordinates to lat long.</p>
                            
 <div class="card border-primary mb-3">
                                <div class="card-header bg-primary text-white">
                                    <i class="fas fa-sync-alt me-2"></i>Common Conversions
                                </div>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <i class="fas fa-arrow-right text-primary me-2"></i>
                                            Decimal degrees (DD) to Degrees, Minutes, Seconds (DMS)
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fas fa-arrow-right text-primary me-2"></i>
                                            DMS to decimal degrees
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fas fa-arrow-right text-primary me-2"></i>
                                            Latitude and longitude to address
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fas fa-arrow-right text-primary me-2"></i>
                                            X Y map coordinates to latitude and longitude
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
<p>This is essential for GPS tracking, GIS (Geographic Information Systems), mapping applications, and even real estate or delivery logistics.</p>
                        </section>








 <!-- Conversion Sections -->
 <section class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-success text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-exchange-alt fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Convert Decimal Degrees to Degrees Minutes Seconds (DMS)</h2>
                            </div>
                            <p>GPS devices and apps often use decimal degrees, but traditional navigation formats use degrees, minutes, seconds. For example:</p>
                            <div class="row mb-4">
                                <div class="col-md-6 mb-3 mb-md-0">
                                    <div class="card h-100">
                                        <div class="card-header bg-secondary text-white">
                                            <i class="fas fa-map-marked-alt me-2"></i> Decimal Degrees
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">40.748817, -73.985428</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100">
                                        <div class="card-header bg-success text-white">
                                            <i class="fas fa-map-pin me-2"></i> DMS Format
                                        </div>
                                        <div class="card-body">
                                            <p class="card-text">40° 44' 55.74" N, 73° 59' 7.54" W</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>With our tool, you can easily convert decimal degrees to degrees minutes seconds in one click. This is especially helpful if you're referencing traditional maps, aviation coordinates, or nautical charts.</p>
                        </section>
<section class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-info text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-location-arrow fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Convert Latitude and Longitude to Decimal Degrees</h2>
                            </div>
                            <p>If you're working with old maps or have GPS data in DMS format, you'll need to convert latitude and longitude to decimal degrees to use it in modern tools like Google Maps, GPS systems, or coding applications. Our converter ensures this transformation is both quick and accurate.</p>
                        </section>
<section class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-warning text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-home fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Convert Latitude and Longitude to Address (Reverse Geocoding)</h2>
                            </div>
                            <p>Ever wondered what place a certain GPS coordinate points to? Our tool can also convert latitude and longitude to address using reverse geocoding. This is ideal for:</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="list-group mb-3">
                                        <li class="list-group-item">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            Finding the address of a GPS location
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            Pinpointing delivery or pickup locations
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            Verifying address data from field reports
                                        </li>
                                        <li class="list-group-item">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            Location-based research
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p class="mt-3">Simply input your lat/long values and get the complete postal address instantly.</p>
                        </section>
<section class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-danger text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-map-marked fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Convert X Y Coordinates to Lat Long</h2>
                            </div>
                            <p>Many maps or GIS platforms use projected coordinate systems (like UTM or other cartesian systems), which show locations as X and Y values. With our converter, you can easily convert X Y coordinates to lat long, allowing better integration with GPS systems, Google Maps, and other location-based services.</p>
                            <p>This is particularly useful for:</p>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card border-danger h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-ruler-combined text-danger fa-2x mb-3"></i>
                                            <h5 class="card-title">Surveyors and Engineers</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card border-danger h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-chart-line text-danger fa-2x mb-3"></i>
                                            <h5 class="card-title">Geographic Data Scientists</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card border-danger h-100">
                                        <div class="card-body text-center">
                                            <i class="fas fa-laptop-code text-danger fa-2x mb-3"></i>
                                            <h5 class="card-title">CAD/GIS Software Users</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
<section id="benefits" class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-primary text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-star fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Benefits of Using Our Latitude Longitude Converter</h2>
                            </div>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-body">
                                            <div class="d-flex p-2 ">
                                                <div>
                                                    <h5 class="card-title">Web-based and mobile-friendly</h5>
                                                    <p class="card-text">Access our converter from any device with an internet connection.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-body">
                                            <div class="d-flex p-2 ">
                                                <div>
                                                    <h5 class="card-title">Instant conversion with high accuracy</h5>
                                                    <p class="card-text">Get precise results in seconds with our advanced algorithms.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-body">
                                            <div class="d-flex p-2">
                                                <div>
                                                    <h5 class="card-title">No need to remember complex formulas</h5>
                                                    <p class="card-text">We handle all the complex calculations behind the scenes.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100 border-0 shadow">
                                        <div class="card-body">
                                            <div class="d-flex p-2">
                                                <div>
                                                    <h5 class="card-title">Suitable for personal, academic, and professional use</h5>
                                                    <p class="card-text">From students to GIS professionals, everyone can benefit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
<section id="usage" class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-success text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-play-circle fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">How to Use the Tool</h2>
                            </div>
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="card h-100">
                                        <div class="card-header bg-primary text-white">
                                            <i class="fas fa-sync-alt me-2"></i> Basic Conversion
                                        </div>
                                        <div class="card-body">
                                            <ol class="list-group list-group-numbered">
                                                <li class="list-group-item border-0">Enter coordinates in decimal or DMS format</li>
                                                <li class="list-group-item border-0">Select conversion type (e.g., Decimal → DMS)</li>
                                                <li class="list-group-item border-0">Click "Convert"</li>
                                                <li class="list-group-item border-0">Instantly view the result in your desired format</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card h-100">
                                        <div class="card-header bg-warning text-white">
                                            <i class="fas fa-map-marker-alt me-2"></i> Reverse Geocoding
                                        </div>
                                        <div class="card-body">
                                            <ol class="list-group list-group-numbered">
                                                <li class="list-group-item border-0">Paste latitude and longitude</li>
                                                <li class="list-group-item border-0">Click "Get Address"</li>
                                                <li class="list-group-item border-0">Receive the closest known address</li>
                                                <li class="list-group-item border-0">View additional location details</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>




<!-- FAQ Section -->
<section id="faq" class="mb-5">
                            <div class="d-flex align-items-center mb-4">
                                <div class="bg-info text-white p-2 rounded-circle me-3">
                                    <i class="fas fa-question-circle fa-lg"></i>
                                </div>
                                <h2 class="h4 mb-0">Frequently Asked Questions</h2>
                            </div>
                            <div class="accordion" id="faqAccordion">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                            <i class="fas fa-calculator me-2 text-primary"></i> How do I convert decimal degrees to degrees, minutes, and seconds (DMS)?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            <p>To convert decimal degrees to DMS:</p>
                                            <ol>
                                                <li>Multiply the decimal part by 60 to get minutes</li>
                                                <li>Multiply the decimal of the minutes by 60 to get seconds</li>
                                            </ol>
                                            <p>Or simply use our coordinate converter to do it instantly and accurately without manual calculations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                            <i class="fas fa-home me-2 text-primary"></i> Can I convert latitude and longitude to a street address?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            <p>Yes! Using reverse geocoding, you can convert latitude and longitude to address. Our tool makes it easy to find the physical address of any set of coordinates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                            <i class="fas fa-compare me-2 text-primary"></i> What is the difference between DMS and decimal degrees?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            <p>DMS stands for Degrees, Minutes, Seconds, a traditional format used in navigation. Decimal degrees (DD) is a modern format used in most GPS and mapping applications. Both represent the same location but in different formats.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                            <i class="fas fa-map me-2 text-primary"></i> Can I convert X Y coordinates from a map to lat long?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            <p>Yes. Our converter supports transforming cartesian map coordinates to geographic ones. This means you can convert X Y coordinates to lat long, which is essential for GIS, CAD, and mapping tools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                            <i class="fas fa-tag me-2 text-primary"></i> Is your GPS coordinates converter free to use?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            <p>Absolutely! Our GPS coordinates converter is 100% free to use, user-friendly, and mobile-optimized. You can convert any coordinate format without limits or registrations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
<!-- Link Section: Related Tools -->

 <hr>
<h2>Other Geolocation Tool</h2>
<div class="row g-4 ">      
 <div class="col-md-3 g-4 p-3"><a class="text-decoration-none" href="/utm-zone-map"><div class="calculator-box text-center"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="#63E6BE" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><h5>UTM Zone Map</h5></div> </a></div>

 <div class="col-md-3 g-4 p-3"><a class="text-decoration-none" href="/military-grid-reference-system-converter"><div class="calculator-box text-center"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#B197FC" d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg><h5>MGRS Converter</h5></div></a></div>
 <div class="col-md-3 g-4 p-3  "><a class="text-decoration-none" href="/current-elevation"><div class="calculator-box text-center"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path fill="#5f69ec" d="M560 160A80 80 0 1 0 560 0a80 80 0 1 0 0 160zM55.9 512l325.2 0 75 0 122.8 0c33.8 0 61.1-27.4 61.1-61.1c0-11.2-3.1-22.2-8.9-31.8l-132-216.3C495 196.1 487.8 192 480 192s-15 4.1-19.1 10.7l-48.2 79L286.8 81c-6.6-10.6-18.3-17-30.8-17s-24.1 6.4-30.8 17L8.6 426.4C3 435.3 0 445.6 0 456.1C0 487 25 512 55.9 512z"/></svg><h5>Current Elevation</h5></div></a></div>
 <div class="col-md-3 g-4 p-3"><a class="text-decoration-none" href="/latitude-longitude-to-address"><div class="calculator-box text-center"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512"><path fill="#38e5b1" d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3L576 152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6L416 503zM15.1 187.3C6 191 0 199.8 0 209.6L0 480.4c0 17 17.1 28.6 32.9 22.3L160 451.8l0-251.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77l0 194.4 192 54.9L384 255z"/></svg><h5>Lat/long to Address</h5></div></a> </div>

 </div>
 

 <!-- conversion-tool end-->   


<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="{{ '/assets/js/lat-long-converter.js' | relative_url }}"></script>
