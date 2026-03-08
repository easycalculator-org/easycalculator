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


<!-- Article Content -->
<div class="container my-5 article-container">

  <!-- Header Section -->
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-3 mt-md-0">
      <i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}
    </div>
  </div>

  <!-- Main Title -->
  <h1>Wavelength to Frequency Calculator</h1>
  <p class="lead">The wavelength to frequency calculator converts electromagnetic wavelength (in meters) into frequency (in Hz) using the formula <strong>f = c / λ</strong>, where c is the speed of light (3 × 10⁸ m/s). This conversion is essential in RF engineering, antenna design, telecommunications, and wireless communication systems.</p>

 
  <!-- Formula Section -->
  <div class="mt-5">
    <h2 class="h4 fw-bold">Formula Used</h2>
    <div class="bg-light p-3 rounded border">
      <div class="fs-5 fw-semibold text-center">f = c / λ</div>
      <hr>
      <p class="mb-1"><strong>f</strong> = Frequency (Hz)</p>
      <p class="mb-1"><strong>c</strong> = 3 × 10⁸ m/s (Speed of Light)</p>
      <p class="mb-0"><strong>λ</strong> = Wavelength (meters)</p>
    </div>
  </div>

 <!-- Example Section -->

  <div class="row pt-4">
    <h2 class="h4 fw-bold">Example Calculations</h2>
    <!-- Example 1 -->
    <div class="col-lg-6">
      <div class="card border-0 shadow-sm rounded-4 h-100">
        <div class="card-body p-4">
          <h3 class="h6 fw-semibold text-primary mb-3"> Example 1: λ = 2 meters</h3>
          <div class="bg-light p-3 rounded border mb-3">
            <div><strong>Formula:</strong> f = c / λ</div>
            <div>c = 3 × 10⁸ m/s</div>
          </div>
          <div class="alert alert-primary py-2"> f = 3 × 10⁸ / 2 </div>
          <div class="alert alert-success py-2 mb-0">f = 1.5 × 10⁸ Hz = <strong>150 MHz</strong> </div>
        </div>
      </div>
    </div>
    <!-- Example 2 -->
    <div class="col-lg-6">
      <div class="card border-0 shadow-sm rounded-4 h-100">
        <div class="card-body p-4">
          <h3 class="h6 fw-semibold text-primary mb-3">  Example 2: λ = 0.5 meters </h3>
          <div class="bg-light p-3 rounded border mb-3">
            <div><strong>Formula:</strong> f = c / λ</div>
            <div>c = 3 × 10⁸ m/s</div>
          </div>
          <div class="alert alert-primary py-2"> f = 3 × 10⁸ / 0.5</div>
          <div class="alert alert-success py-2 mb-0"> f = 6 × 10⁸ Hz = <strong>600 MHz</strong> </div>
        </div>
      </div>
    </div>
  </div>




  <!-- Chart Section -->
  <div class="mt-5">
    <h2 class="h4 fw-bold">Wavelength to Frequency Reference Chart</h2>
    <div class="table-responsive">
      <table class="table table-bordered table-striped align-middle text-center">
        <thead class="table-primary">
          <tr>
            <th>Wavelength (m)</th>
            <th>Frequency (Hz)</th>
            <th>Frequency (MHz)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>10</td><td>3 × 10⁷</td><td>30</td></tr>
          <tr><td>2</td><td>1.5 × 10⁸</td><td>150</td></tr>
          <tr><td>1</td><td>3 × 10⁸</td><td>300</td></tr>
          <tr><td>0.5</td><td>6 × 10⁸</td><td>600</td></tr>
          <tr><td>0.1</td><td>3 × 10⁹</td><td>3000</td></tr>
        </tbody>
      </table>
    </div>
  </div>

 <div class="my-5">
  <h2 class="mb-4">FAQ</h2>
 <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is the formula to convert wavelength to frequency?</div>
            <p class="mb-0">The formula is f = c / λ, where c = 3 × 10⁸ m/s.</p>
          </div>
        </div>

   <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">2. Why are wavelength and frequency inversely related?</div>
            <p class="mb-0">Because the speed of light is constant in free space. If wavelength increases, frequency must decrease to maintain the same propagation speed.</p>
          </div>
        </div>
 <div class="card mb-3 border-0 bg-light">
  <div class="card-body ">
    <div class="fw-bold text-primary">3.  Can this be used for radio waves?</div>
     <p class="mb-0">Yes. This formula applies to all electromagnetic waves including radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.</p>
     </div>
  </div>
</div>

</div>


 <script src="{{ '/assets/js/wave-to-freq.js' | relative_url }}"></script> 
 <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.7.0/math.min.js"></script>

 <script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [{
   "@type": "Question",
   "name": "What is the formula to convert wavelength to frequency?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "The formula is f = c / λ, where c = 3 × 10⁸ m/s."
   }
 },{
   "@type": "Question",
   "name": "Why are wavelength and frequency inversely related?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Because the speed of light is constant, increasing wavelength decreases frequency."
   }
 },{
   "@type": "Question",
   "name": "Can this be used for radio waves?",
   "acceptedAnswer": {
     "@type": "Answer",
     "text": "Yes. The formula applies to all electromagnetic waves."
   }
 }]
}
</script>