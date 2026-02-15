---
layout: default
title: Frequency to Wavelength Calculator (Hz, MHz, GHz)
permalink: /frequency-to-wavelength-calculator
description: "Calculate wavelength from frequency instantly using our free Frequency to Wavelength Calculator. Supports Hz, kHz, MHz, GHz with accurate RF formula."
#image: "/assets/images/dbm-to-watt-converter-with-formula-and-example.jpg"
last_modified_at: 2026-02-15
---
<div class="row pt-4 justify-content-center">
 <div class="col-md-8 card shadow border-0 rounded-4 ">
  <div class="card-body p-4 p-md-5">
    <h2 class="card-title text-center mb-4 fw-semibold text-secondary">frequency → wavelength</h2>
<!-- frequency input row -->
 <div class="row g-3 align-items-end mb-4">
     <div class="col-md-7">
          <label for="freqInput" class="form-label fw-medium">frequency value</label>
          <input type="number" id="freqInput" class="form-control form-control-lg" value="100" step="any" placeholder="e.g. 100">
        </div>
      <div class="col-md-5">
         <label for="unitSelect" class="form-label fw-medium">unit</label>
         <select id="unitSelect" class="form-select form-select-lg">
             <option value="Hz" selected>Hertz (Hz)</option>
             <option value="kHz">kilohertz (kHz)</option>
             <option value="MHz">megahertz (MHz)</option>
             <option value="GHz">gigahertz (GHz)</option>
           </select>
        </div>
       </div>
 <!-- result -->
<div class="row g-2 align-items-center mb-4">
                    <div class="col-12">
                        <div class="bg-dark text-white p-4 rounded-4 d-flex justify-content-between align-items-center">
                            <span class="fs-5 fw-light">wavelength λ</span>
                            <span id="wavelengthValue" class="display-6 fw-semibold font-monospace">2.9979</span>
                            <span class="fs-5 text-secondary">m</span>
                        </div>
                        <!-- metres -->
                        <div class="form-text text-end mt-1">result in metres (m)</div>
                    </div>
                </div>
 <div class="alert alert-info border-0 bg-info bg-opacity-10 d-flex align-items-center gap-2 p-3 rounded-3" role="alert">  <span class="small"><strong>c</strong> = 299 792 458 m/s  (exact)</span></div>
                <p class="text-muted text-center small mb-0">λ = c / f  —  frequency in hertz</p>
            </div>
        </div>
         </div>



 <script src="{{ '/assets/js/freq-to-wave.js' | relative_url }}"></script>  