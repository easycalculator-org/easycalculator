---
layout: default
title: Wavelength to Frequency Calculator – Convert λ to Hz Online Instantly
permalink: /wavelength-to-frequency-calculator
description: "Convert wavelength (meters, cm, nm) to frequency (Hz, kHz, MHz, GHz) instantly using our free Wavelength to Frequency Calculator. Based on the speed of light formula, accurate and easy to use."
#image: "/assets/images/dbm-to-watt-converter-with-formula-and-example.jpg"
last_modified_at: 2026-02-15
---
<div class="row pt-4 justify-content-center">
 <div class="col-md-8 card shadow border-0 rounded-4 ">
     <div class="card-body p-4 p-md-5">
<h2 class="card-title text-center mb-4 fw-semibold text-secondary"> wavelength → frequency </h2>
 <!-- wavelength input row (identical structure) -->
    <div class="row g-3 align-items-end mb-4">
         <div class="col-md-7">
                        <label for="wavelengthInput" class="form-label fw-medium">wavelength value</label>
                        <input type="number" id="wavelengthInput" class="form-control form-control-lg" value="1" step="any" placeholder="e.g. 1">
                    </div>
                    <div class="col-md-5">
                        <label for="lengthUnitSelect" class="form-label fw-medium">length unit</label>
                        <select id="lengthUnitSelect" class="form-select form-select-lg">
                            <option value="m" selected>metres (m)</option>
                            <option value="cm">centimetres (cm)</option>
                            <option value="mm">millimetres (mm)</option>
                            <option value="um">micrometres (µm)</option>
                            <option value="nm">nanometres (nm)</option>
                            <option value="km">kilometres (km)</option>
                        </select>
                    </div>
                </div>
<!-- result -->
 <div class="row g-2 align-items-center mb-4">
    <div class="col-12">
         <div class="bg-dark text-white p-4 rounded-4 d-flex justify-content-between align-items-center flex-wrap">
             <span class="fs-5 fw-light">frequency f</span>
             <span id="frequencyValue" class="display-6 fw-semibold font-monospace">299.7925</span>
             <span id="freqUnitDisplay" class="fs-5 text-secondary">MHz</span>
          </div>
       <div class="form-text text-end mt-1" id="frequencyUnitNote">result in hertz (Hz) · metric prefix adapts</div>
      </div>
    </div>
 <!-- speed of light -->
  <div class="alert alert-info border-0 bg-info bg-opacity-10 d-flex align-items-center gap-2 p-3 rounded-3" role="alert">
   <span class="small"><strong>c</strong> = 299 792 458 m/s  (exact)</span>
  </div>
                <p class="text-muted text-center small mb-0">f = c / λ  —  wavelength in metres</p>
            </div>
        </div>
    </div>



 <script src="{{ '/assets/js/wave-to-freq.js' | relative_url }}"></script>  