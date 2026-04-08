---
layout: default
title: Free Space Path Loss Calculator (FSPL) – Formula & dB Calculation
permalink: /free-space-path-loss-calculator
description: "Calculate Free Space Path Loss (FSPL) in dB using frequency and distance. Use our free FSPL calculator with formula, example, and RF planning guide for telecom and wireless networks."
image: "/assets/images/og/free-space-path-loss-calculator.svg"
last_modified_at: 2026-03-20
---
<style> 
.fspl-big-number {font-size: 3rem; font-weight: 600; line-height: 1.2; }
.rx-badge {background-color: #e7f1ff; border-radius: 50px; padding: 0.5rem 1.2rem; font-size: 1.4rem;}
.article-container img {max-width: 100%; height: auto; border-radius: 14px;}
.article-container figure { background: #f8fafc;  padding: 12px;  border-radius: 16px;}
</style>
 <div class="row justify-content-center">
   <div class="col-lg-8 col-xl-7">
      <div class="card shadow border-0 rounded-4">
        <div class="card-header bg-transparent border-bottom"><h1>Free Space Path Loss Calculator</h1> </div>
        <div class="card-body p-4 p-xl-5">
 <!-- two column input: distance and frequency -->
  <div class="row g-4">
            <div class="col-md-6">
              <label class="form-label fw-semibold"><i class="fa-solid fa-route"></i> Distance</label>
              <div class="input-group">
                <input type="number" id="distVal" class="form-control form-control-lg" step="any" value="5">
                <select id="distUnit" class="form-select" style="max-width: 110px;">
                  <option value="km" selected>km</option>
                  <option value="m">m</option>
                  <option value="mile">mile</option>
                  <option value="nmi">NM</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold"><i class="fa-solid fa-wave-square"></i> Frequency</label>
              <div class="input-group">
                <input type="number" id="freqVal" class="form-control form-control-lg" step="any" value="2400">
                <select id="freqUnit" class="form-select" style="max-width: 110px;">
                  <option value="MHz" selected>MHz</option>
                  <option value="GHz">GHz</option>
                  <option value="kHz">kHz</option>
                  <option value="Hz">Hz</option>
                </select>
              </div>
            </div>
          </div>
 <!-- antenna gains row -->
 <div class="row mt-2 g-4">
            <div class="col-md-6">
              <label class="form-label fw-semibold"><i class="fa-regular fa-circle-up"></i>TX antenna gain (dBi)</label>
              <input type="number" id="txGain" class="form-control form-control-lg" step="any" value="2.0">
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold"><i class="fa-regular fa-circle-down"></i> RX antenna gain (dBi)</label>
              <input type="number" id="rxGain" class="form-control form-control-lg" step="any" value="2.0">
            </div>
          </div>
          <div class="d-grid mt-4">
            <button class="btn btn-primary btn-lg" id="calcFsplBtn">Calculate FSPL</button>
          </div>
  <!-- results part: FSPL and receive power panel -->
          <div class="row mt-2 g-4">
            <div class="col-md-6">
              <div class="p-3 bg-light rounded-3 border text-center h-100 d-flex flex-column justify-content-center">
                <span class="text-secondary small text-uppercase">free‑space path loss</span>
                <span class="fspl-big-number" id="fsplDisplay">—</span>
                <span class="badge bg-primary mt-2 mx-auto">dB</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class=" p-3 bg-primary-subtle rounded-3 border text-center h-100 d-flex flex-column justify-content-center">
                <span class="text-secondary small text-uppercase">received power (0 dBm Tx)</span>
                <span class="fspl-big-number" id="rxPowerDisplay">—</span>
                <span class="badge bg-success mt-2 mx-auto">dBm</span>
              </div>
            </div>
          </div>
          <br>
 <!-- fspl formula -->
          <div class="alert alert-light bg-opacity-50 small d-flex align-items-center py-2 mb-4 border" role="alert">
            <i class="bi bi-antenna me-2 fs-5"></i> <span>FSPL (dB) = 20·log₁₀(km) + 20·log₁₀(MHz) + 32.44.<br> <strong>Rx power</strong> (dBm) = Tx power (fixed 0 dBm) + TX gain + RX gain – FSPL.</span>
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
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
<!-- Article-->
<section class="mt-5">

<h2>What is Free Space Path Loss (FSPL)?</h2>
<p>Free Space Path Loss (FSPL) represents the reduction in signal strength as a radio wave travels through free space without obstacles. It is a fundamental concept in RF engineering, microwave communication, satellite links, LTE, and 5G network planning.</p>

<p>FSPL depends only on two variables:</p>

<ul><li><strong>Distance between transmitter and receiver</strong></li><li><strong>Operating frequency</strong></li></ul>

<p>As distance or frequency increases, the signal attenuation increases logarithmically.</p>

<hr>

<h2>FSPL Formula (Free Space Path Loss Equation)</h2>
<p>The standard FSPL formula in decibels (dB) is:</p>
<div class="alert alert-info fs-5"><strong>FSPL (dB) = 20 log₁₀(d) + 20 log₁₀(f) + 32.44</strong></div>

<figure class="text-center my-4">
  <img src="/assets/images/free-space-path-loss-calculator.svg"  alt="Free Space Path Loss diagram showing transmitter receiver distance frequency and signal attenuation" 
    class="img-fluid rounded-4 shadow"  loading="lazy"  width="800" height="450" />
  <figcaption class="text-muted small mt-2">FSPL depends on distance and frequency — higher values increase signal attenuation.</figcaption>
</figure>




<ul>
<li><strong>d</strong> = distance in kilometers (km)</li>
<li><strong>f</strong> = frequency in megahertz (MHz)</li>
<li><strong>32.44</strong> = constant for km and MHz units</li>
</ul>

<p>If distance is used in meters or frequency in GHz, the constant value changes accordingly.</p>

<hr>
<h2>Should Distance Be in km or m for FSPL?</h2>
<p>In the standard engineering formula, distance must be entered in <strong>kilometers (km)</strong> and frequency in <strong>MHz</strong>.  
If you use meters or GHz, you must adjust the constant value in the formula.</p>

<p>For example:</p>
<ul><li>Distance in meters → constant becomes 147.55</li><li>Frequency in GHz → adjust formula accordingly</li></ul>
<p>Your calculator automatically converts units internally to ensure accurate results.</p>

<hr>

<h2>FSPL Example Calculation</h2>
<p>Let’s calculate the path loss for:</p>
<ul><li>Distance = 5 km</li><li>Frequency = 2400 MHz</li></ul>

<p>Applying the formula:</p>
<div class="alert alert-light border">FSPL ≈ 20 log₁₀(5) + 20 log₁₀(2400) + 32.44  <br><strong>FSPL ≈ 114 dB</strong></div>
<p>If transmitter power is 0 dBm and both antennas have 2 dBi gain:</p>
<p>Received Power = 0 + 2 + 2 − 114 ≈ <strong>−110 dBm</strong></p>
<hr>
<h2>Why FSPL is Important in RF and Wireless Communication</h2>
<ul>
<li>Microwave link budget planning</li>
<li>LTE and 5G network design</li>
<li>Satellite communication systems</li>
<li>WiFi coverage analysis</li>
<li>RF propagation modeling</li>
</ul>
<p>Engineers use FSPL calculations to estimate signal coverage, optimize antenna placement, and predict received signal strength.</p>
<hr>

<h2>FSPL vs Link Budget</h2>
<p>FSPL represents only the free-space attenuation component.  A complete link budget also includes:</p>
<ul>
<li>Transmitter power (dBm)</li>
<li>Antenna gains (dBi)</li>
<li>Cable losses</li>
<li>Connector losses</li>
<li>Fade margin</li>
</ul>

<!-- FAQ Section -->
 <section class="mb-5 pt-4">
        <h2 class="mb-4">FAQ on Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What is FSPL?</div>
            <p class="mb-0">FSPL (Free Space Path Loss) is the signal attenuation that occurs when a radio wave propagates through free space without obstacles.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">2. How do you calculate FSPL?</div>
            <p class="mb-0">FSPL is calculated using:  <strong>20 log₁₀(d) + 20 log₁₀(f) + 32.44</strong>  where distance is in km and frequency in MHz.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3.Does FSPL depend on antenna gain?</div>
            <p class="mb-0">No. FSPL depends only on distance and frequency. Antenna gains are included separately in link budget calculations.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 4. Is FSPL higher at higher frequencies?</div>
            <p class="mb-0">Yes. Path loss increases as frequency increases.</p>
          </div>
        </div>

             {% include rf.html %}
      </section>





<script src="{{ '/assets/js/free-spac-calc.js' | relative_url }}"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Free Space Path Loss (FSPL)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free Space Path Loss (FSPL) is the reduction in signal strength that occurs when a radio wave propagates through free space. It depends only on distance and frequency."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FSPL is calculated using the formula: FSPL (dB) = 20 log10(d) + 20 log10(f) + 32.44, where distance is in kilometers and frequency is in MHz."
      }
    },
    {
      "@type": "Question",
      "name": "Should distance be in km or meters for FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the standard formula, distance should be in kilometers and frequency in MHz. If using meters or GHz, the constant value in the equation changes."
      }
    },
    {
      "@type": "Question",
      "name": "Does antenna gain affect FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FSPL depends only on distance and frequency. Antenna gain is included separately in link budget calculations."
      }
    }
  ]
}
</script>


<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [{
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://easycalculator.org/"
 },{
   "@type": "ListItem",
   "position": 2,
   "name": "Free Space Path Loss Calculator",
   "item": "https://easycalculator.org/free-space-path-loss-calculator"
 }]
}
</script>