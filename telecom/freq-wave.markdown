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


<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->

 <!-- Main Title -->

<h1>Frequency to Wavelength Calculator</h1>
<p class="lead">The frequency to wavelength calculator converts electromagnetic frequency (in Hz) into wavelength (in meters) using the formula <strong>λ = c / f</strong>, where c is the speed of light (3 × 10⁸ m/s). This calculation is essential in antenna design, RF planning, telecommunications, and wireless system engineering.</p>


<!-- Formula Section -->
<div class="mt-5">
  <h2 class="h4 fw-bold mb-3">Formula Used</h2>
  <div class="bg-light p-4 rounded-4 border shadow-sm">
    <div class="fs-5 fw-semibold text-center mb-3">λ = c / f</div>
    <hr>
    <p class="mb-2"><strong>λ</strong> = Wavelength (meters)</p>
    <p class="mb-2"><strong>c</strong> = 3 × 10⁸ m/s (Speed of Light)</p>
    <p class="mb-0"><strong>f</strong> = Frequency (Hz)</p>
  </div>
</div>
<!-- Example Section -->
<div class="mt-5">
  <h2 class="h4 fw-bold mb-4">Example Calculations</h2>
  <div class="row g-4">
    <!-- Example 1 -->
    <div class="col-lg-6">
      <div class="card border-0 shadow-sm rounded-4 h-100">
        <div class="card-body p-4">
          <h3 class="h6 fw-semibold text-primary mb-3">Example 1: f = 900 MHz</h3>
          <div class="bg-light p-3 rounded border mb-3">
            <div><strong>Formula:</strong> λ = c / f</div>
            <div>c = 3 × 10⁸ m/s</div>
          </div>
          <div class="alert alert-primary py-2">
            λ = 3 × 10⁸ / 9 × 10⁸
          </div>
          <div class="alert alert-success py-2 mb-0">
            λ = 0.33 meters (33 cm)
          </div>
        </div>
      </div>
    </div>
    <!-- Example 2 -->
    <div class="col-lg-6">
      <div class="card border-0 shadow-sm rounded-4 h-100">
        <div class="card-body p-4">
          <h3 class="h6 fw-semibold text-primary mb-3">Example 2: f = 2.4 GHz</h3>
          <div class="bg-light p-3 rounded border mb-3">
            <div><strong>Formula:</strong> λ = c / f</div>
            <div>c = 3 × 10⁸ m/s</div>
          </div>
          <div class="alert alert-primary py-2">
            λ = 3 × 10⁸ / 2.4 × 10⁹
          </div>
          <div class="alert alert-success py-2 mb-0">  λ = 0.125 meters (12.5 cm) </div>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- Reference Chart Section -->
<div class="mt-5">
  <h2 class="h4 fw-bold mb-3">Frequency to Wavelength Reference Chart</h2>
  <div class="table-responsive">
    <table class="table table-bordered table-striped align-middle text-center shadow-sm">
      <thead class="table-primary">
        <tr>
          <th>Frequency</th>
          <th>Frequency (Hz)</th>
          <th>Wavelength (m)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>30 MHz</td><td>3 × 10⁷</td><td>10</td></tr>
        <tr><td>150 MHz</td><td>1.5 × 10⁸</td><td>2</td></tr>
        <tr><td>300 MHz</td><td>3 × 10⁸</td><td>1</td></tr>
        <tr><td>600 MHz</td><td>6 × 10⁸</td><td>0.5</td></tr>
        <tr><td>3 GHz</td><td>3 × 10⁹</td><td>0.1</td></tr>
      </tbody>
    </table>
  </div>
</div>


<!-- FAQ Section -->
<div class="my-5">
  <h2 class="fw-bold mb-4">Frequently Asked Questions</h2>
  <div class="card border-0 shadow-sm mb-3 rounded-4">
    <div class="card-body">
      <h6 class="fw-semibold text-primary">  1. What is the formula to convert frequency to wavelength?</h6>
      <p class="mb-0"> The formula is <strong>λ = c / f</strong>, where c = 3 × 10⁸ m/s. </p>
    </div>
  </div>

  <div class="card border-0 shadow-sm mb-3 rounded-4">
    <div class="card-body">
      <h6 class="fw-semibold text-primary"> 2. Does higher frequency mean shorter wavelength? </h6>
      <p class="mb-0"> Yes. Frequency and wavelength are inversely proportional. Higher frequency always results in shorter wavelength.</p>
    </div>
  </div>

  <div class="card border-0 shadow-sm rounded-4">
    <div class="card-body">
      <h6 class="fw-semibold text-primary"> 3. Why is this important in antenna design? </h6>
      <p class="mb-0">  Antenna length is directly based on wavelength (λ/2 or λ/4). Accurate wavelength calculation ensures proper resonance and impedance matching.</p>
    </div>
  </div>
</div>
     {% include rf.html %}
</div>




 <script src="{{ '/assets/js/freq-to-wave.js' | relative_url }}"></script>  