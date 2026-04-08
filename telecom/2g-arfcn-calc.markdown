---
layout: default
title: ARFCN Calculator – GSM ARFCN to Frequency Converter
permalink: /arfcn-calculator
description: "Convert GSM ARFCN to uplink and downlink frequency instantly using our free ARFCN Calculator. Supports GSM 900, 1800, 850 & 1900 bands for RF engineers"
#image: "/assets/images/age-calc.png"
last_modified_at: 2026-02-28
---
<style>
.freq-card {background-color: #f8f9fa; border-radius: 0.5rem; }
.badge-200khz {font-size: 0.7rem; background-color: #e9ecef; color: #1e293b; padding: 0.25rem 0.65rem; border-radius: 20px; display: inline-block;}
</style>
<div class="row justify-content-center py-4">
   <div class="col-lg-9">
     <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
<!-- Header -->
 <div class="card-header bg-primary bg-gradient text-white py-3"> <h1> ARFCN Calculator </h1> </div>
  <div class="card-body p-4">
   <!-- Band -->
   <label class="form-label fw-semibold mb-2">Select GSM Band</label>
    <div class="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="GSM band selection">
     <button type="button" class="btn btn-outline-primary band-btn active" data-band="850">GSM 850</button>
     <button type="button" class="btn btn-outline-primary band-btn" data-band="900P">GSM 900 Primary</button>
     <button type="button" class="btn btn-outline-primary band-btn" data-band="900E">GSM 900 Extended</button>
     <button type="button" class="btn btn-outline-primary band-btn" data-band="1800">DCS 1800</button>
     <button type="button" class="btn btn-outline-primary band-btn" data-band="1900">PCS 1900</button>
    </div>
<!-- ARFCN input -->
 <div class="mb-4">
   <label for="arfcnInput" class="form-label fw-semibold"> Enter ARFCN (Channel Number) </label>
    <input type="number" class="form-control form-control-lg"  id="arfcnInput" placeholder="Example: 1, 128, 512, 975"  value="1" inputmode="numeric">
     <div class="form-text">Channel spacing: <strong>200 kHz</strong></div>
    </div>
 <!-- Results -->
  <div class="row g-4">
    <div class="col-md-6">
     <div class="freq-card p-3 h-100 rounded-3 bg-light">
        <div class="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
          <span class="fw-semibold">Downlink Frequncy</span>
          <span class="badge bg-success-subtle text-success border">200 kHz</span>
        </div>
                <div id="dlResult" class="fs-5" style="line-height:1.6">
                  <span class="text-dark">—</span><br>
                  <span class="text-secondary small">center —</span>
                </div>
              </div>
            </div>
            <!-- Uplink -->
            <div class="col-md-6">
              <div class="freq-card p-3 h-100 rounded-3  bg-light">
                <div class="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
                  <span class="fw-semibold">Uplink Frequncy </span>
                  <span class="badge bg-primary-subtle text-primary border">200 kHz</span>
                </div>
                <div id="ulResult" class="fs-5" style="line-height:1.6">
                  <span class="text-dark">—</span><br>
                  <span class="text-secondary small">center —</span>
                </div>
              </div>
            </div>
          </div>
<!-- Hint -->
<div class="pt-4">
 <div id="bandHint" class="bg-light rounded-4 p-4 d-flex align-items-center gap-2">
    <i class="fa-solid fa-circle-info"></i><span>Select a GSM band and enter ARFCN to view frequency range (200 kHz span).</span> </div>
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
 <h2 class="mt-4">What is ARFCN?</h2>
  <p><strong>ARFCN (Absolute Radio Frequency Channel Number)</strong> is a unique number assigned  to each radio channel in GSM systems. Instead of using raw frequency values, GSM networks use  ARFCN numbers to simplify channel allocation and planning.</p>
  <strong>Key Points:</strong>
        <ul class="mb-0 mt-2">
          <li>ARFCN uniquely identifies a GSM carrier frequency</li>
          <li>Used in frequency planning and optimization</li>
          <li>Maps to specific uplink and downlink frequency pairs</li>
          <li>Essential for drive testing and RF troubleshooting</li>
        </ul>
<!-- How ARFCN Works -->
 <h2 class="mt-4">How ARFCN Works in GSM</h2>
   <p> In GSM, each channel contains an uplink frequency (Mobile Station to BTS) and a downlink  frequency (BTS to Mobile Station). The standard GSM channel spacing is  <strong>200 kHz</strong>.</p>

<div class="alert alert-info"> <strong>Basic GSM ARFCN Formula</strong><br>Uplink Frequency (MHz) = Base Frequency + (ARFCN × 0.2)<br>Downlink Frequency (MHz) = Uplink Frequency + Duplex Spacing</div>

 <!-- GSM Bands -->
<h2 class="mt-5">GSM Frequency Bands and ARFCN Ranges</h2>
 <p>GSM operates in multiple bands worldwide. The most important GSM band types are listed below. </p>

 <!-- GSM 900 -->
  <h3 class="mt-4">GSM 900 Band</h3>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uplink</td><td>890 – 915 MHz</td></tr>
            <tr><td>Downlink</td><td>935 – 960 MHz</td></tr>
            <tr><td>Duplex spacing</td><td>45 MHz</td></tr>
            <tr><td>ARFCN range</td><td>1 – 124</td></tr>
            <tr><td>Channel spacing</td><td>200 kHz</td></tr>
            <tr><td>Formula (GSM 900):</td><td>Uplink = 890 + (ARFCN × 0.2)<br> Downlink = Uplink + 45</td></tr>
          </tbody>
        </table>
      </div>
      <!-- EGSM -->
      <h3 class="mt-4">Extended GSM (E-GSM 900)</h3>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uplink</td><td>880 – 915 MHz</td></tr>
            <tr><td>Downlink</td><td>925 – 960 MHz</td></tr>
            <tr><td>Duplex spacing</td><td>45 MHz</td></tr>
            <tr><td>ARFCN range</td><td>0 - 124 and 975 – 1023</td></tr>
          </tbody>
        </table>
      </div>
<!-- GSM 1800 -->
      <h3 class="mt-4">GSM 1800 (DCS 1800)</h3>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uplink</td><td>1710 – 1785 MHz</td></tr>
            <tr><td>Downlink</td><td>1805 – 1880 MHz</td></tr>
            <tr><td>Duplex spacing</td><td>95 MHz</td></tr>
            <tr><td>ARFCN range</td><td>512 – 885</td></tr>
            <tr><td>Channel spacing</td><td>200 kHz</td></tr>
            <tr><td>Formula (GSM 1800):</td><td>Uplink = 1710 + ((ARFCN − 512) × 0.2)<br>Downlink = Uplink + 95</td></tr>
          </tbody>
        </table>
      </div>
 <!-- GSM 850 -->
      <h3 class="mt-4">GSM 850 Band</h3>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uplink</td><td>824 – 849 MHz</td></tr>
            <tr><td>Downlink</td><td>869 – 894 MHz</td></tr>
            <tr><td>Duplex spacing</td><td>45 MHz</td></tr>
            <tr><td>ARFCN range</td><td>128 – 251</td></tr>
          </tbody>
        </table>
      </div>
 <!-- GSM 1900 -->
      <h3 class="mt-4">GSM 1900 (PCS 1900)</h3>
      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Uplink</td><td>1850 – 1910 MHz</td></tr>
            <tr><td>Downlink</td><td>1930 – 1990 MHz</td></tr>
            <tr><td>Duplex spacing</td><td>80 MHz</td></tr>
            <tr><td>ARFCN range</td><td>512 – 810</td></tr>
          </tbody>
        </table>
      </div>
<!-- Importance -->
<h2 class="mt-5">Why ARFCN is Important in RF Engineering</h2>
      <ul>
        <li>Frequency planning</li>
        <li>Interference analysis</li>
        <li>Drive test log analysis</li>
        <li>Neighbor planning</li>
        <li>Network optimization</li>
        <li>Spectrum management</li>
      </ul>



<!-- FAQ Section -->
 <section class="mb-5 pt-4">
        <h2 class="mb-4">FAQ on ARFCN Calculator</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What does ARFCN stand for?</div>
            <p class="mb-0">ARFCN stands for <strong>Absolute Radio Frequency Channel Number</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. What is GSM channel spacing?</div>
            <p class="mb-0">In GSM, the channel spacing is <strong>200 kHz (0.2 MHz)</strong>.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. Is ARFCN used in LTE and 5G?</div>
            <p class="mb-0">Yes. LTE uses <strong>EARFCN</strong> and 5G uses <strong>NR-ARFCN</strong>.</p>
          </div>
        </div>
      </section>

      {% include rf.html %}
 
<script src="{{ '/assets/js/arfcn-calc.js' | relative_url }}"></script> 