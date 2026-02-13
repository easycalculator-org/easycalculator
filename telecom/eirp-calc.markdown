---
layout: default
title: EIRP Calculator Online – Effective Isotropic Radiated Power (dBm & Watts)
permalink: /eirp-calculator
description: "Calculate Effective Isotropic Radiated Power (EIRP) instantly using our free online EIRP Calculator. Convert transmitter power, antenna gain, and cable loss into  EIRP values in dBm"
image: "/assets/images/eirp-calculator.jpg"
last_modified_at: 2026-02-03
---

 <style>
          .card-custom {
            border: none;
            border-radius: 2rem;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(8px);
            box-shadow: 0 30px 50px rgba(0,20,40,0.2), 0 10px 20px rgba(0,10,20,0.1);
        }
        .input-group-text {
            background-color: white;
            border-right: 0;
        }
        .form-control, .form-select {
            border-left: 0;
        }
        .form-control:focus, .form-select:focus {
            box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.15);
            border-color: #86b7fe;
        }
        .result-badge {
            font-size: 1.1rem;
            font-weight: 500;
            background: #1e2b3f;
            color: #c7e0ff;
            padding: 0.9rem 1.8rem;
            border-radius: 60px;
            letter-spacing: 0.3px;
        }
        .eirp-value {
            font-size: 2.2rem;
            font-weight: 700;
            color: #0d6efd;
            margin-left: 10px;
        }
        .unit-toggle {
            cursor: default;
            background-color: #f0f4fa;
        }
        .btn-primary-custom {
            background: #0d6efd;
            border: none;
            border-radius: 40px;
            padding: 12px 28px;
            font-weight: 600;
            transition: all 0.2s;
        }
        .btn-primary-custom:hover {
            background: #0b5ed7;
            transform: scale(1.02);
            box-shadow: 0 8px 18px rgba(13,110,253,0.3);
        }
      
    
         #eirpWatt {
            transition: background-color 0.2s ease, padding 0.1s;
            padding: 0.2rem 0.5rem;
            border-radius: 30px;
        }
    </style>
<div class="container py-4">
   <div class="card card-custom p-4 p-xl-5">
    <div class="card-body">
      <h2 class="mb-4 fw-light d-flex align-items-center gap-2"> <i class="fas fa-broadcast-tower fa-lg text-primary"></i> <span>RF EIRP Calculator</span> <span class="badge bg-primary rounded-pill fs-6 ms-2">dBm / W</span></h2>
        <p class="text-secondary-emphasis mb-4 small"><i class="fas fa-calculator me-1"></i> EIRP (dBm) = Tx power (dBm) + Antenna gain (dBi) – cable loss (dB) </p>
      <div class="row g-4">
                    <div class="col-md-6">
                        <label class="form-label fw-semibold"><i class="far fa-bolt me-1"></i>Transmitter power</label>
                        <div class="input-group">
                            <span class="input-group-text bg-white"><i class="fas fa-wave-square"></i></span>
                            <input type="number" id="txPower" class="form-control form-control-lg" step="any" value="30.0" placeholder="value">
                            <select id="txUnit" class="form-select form-select-lg" style="max-width: 90px;">
                                <option value="dBm" selected>dBm</option>
                                <option value="W">W</option>
                                <option value="mW">mW</option>
                            </select>
                        </div>
                        <small class="form-text ms-1">e.g., 30 dBm (1 W)</small>
                    </div>

  <!-- Antenna gain -->
 <div class="col-md-6">
        <label class="form-label fw-semibold"><i class="fas fa-satellite-dish me-1"></i>Antenna gain</label>
                        <div class="input-group">
                            <span class="input-group-text bg-white"><i class="fas fa-ruler"></i></span>
                            <input type="number" id="antGain" class="form-control form-control-lg" step="any" value="6.0" placeholder="dBi">
                            <span class="input-group-text unit-toggle">dBi</span>
                        </div>
                        <small class="form-text ms-1">dBi (isotropic)</small>
                    </div>

  <!-- Cable loss -->
  <div class="col-md-6">
                        <label class="form-label fw-semibold"><i class="fas fa-cable-car me-1"></i>Cable / feeder loss</label>
                        <div class="input-group">
                            <span class="input-group-text bg-white"><i class="fas fa-minus-circle"></i></span>
                            <input type="number" id="cableLoss" class="form-control form-control-lg" step="any" value="2.0" placeholder="dB">
                            <span class="input-group-text unit-toggle">dB</span>
                        </div>
                        <small class="form-text ms-1">insertion loss (positive dB)</small>
                    </div>
 <!-- Additional loss (optional) -->
                    <div class="col-md-6">
                        <label class="form-label fw-semibold"><i class="fas fa-cloud-rain me-1"></i>Other losses (optional)</label>
                        <div class="input-group">
                            <span class="input-group-text bg-white"><i class="fas fa-shield"></i></span>
                            <input type="number" id="extraLoss" class="form-control form-control-lg" step="any" value="0.0" placeholder="dB">
                            <span class="input-group-text unit-toggle">dB</span>
                        </div>
                        <small class="form-text ms-1">misc. loss / margin</small>
                    </div>
                </div>
                <!-- EIRP result display + reset button -->
<div class="d-flex flex-wrap align-items-center justify-content-between mt-5 pt-2">
                    <div class="d-flex align-items-center mb-2 mb-sm-0">
                        <span class="result-badge"> <i class="fas fa-bullseye me-2"></i> EIRP  <span class="eirp-value" id="eirpDisplay">38.00</span>  <span id="eirpUnit" class="fs-5 fw-normal">dBm</span> </span>
                    </div>
                    <div class="btn-group shadow-sm gap-3" role="group">
                        <button id="resetBtn" class="btn btn-outline-secondary rounded-pill px-4" type="button">  <i class="fas fa-undo-alt me-1"></i> Reset </button>
                        <button id="convertToWattBtn" class="btn btn-outline-primary rounded-pill px-4" type="button">   <i class="fas fa-exchange-alt me-1"></i> show Watt  </button>
                    </div>
                </div>
 <div class="mt-3 text-end text-secondary" style="font-size:0.95rem"><span><i class="far fa-clock me-1"></i>EIRP (linear): </span> <strong id="eirpWatt" class="text-primary">6.31 W</strong></div>
  <hr class="my-4 opacity-50">
                <div class="small text-secondary d-flex justify-content-between align-items-center flex-wrap">
                    <span><i class="fas fa-info-circle me-1"></i> EIRP [dBm] = Ptx[dBm] + G[dBi] – L[dB]  (losses include cable + other)</span>
                    <span class="badge bg-light text-dark px-3 py-2 mt-2 mt-sm-0">  <i class="fas fa-calculator me-1"></i> 1 W = 30 dBm </span>
                </div>
            </div> 
        </div> 
    </div>
<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      <!-- {% include reema_verify.html %} -->
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->
  <h1>EIRP Calculator – Effective Isotropic Radiated Power</h1> 
  <p>The <strong>EIRP Calculator</strong> helps you determine the total radiated power of a transmitter system after considering antenna gain and transmission losses. EIRP (Effective Isotropic Radiated Power) is a critical parameter in RF planning, telecom network design, satellite communication, and wireless system analysis.</p>
<p>Whether you are working in LTE, 5G, microwave links, or Wi-Fi deployment, calculating EIRP ensures regulatory compliance and proper coverage planning.</p>
<h2> What is EIRP?</h2>
<p><strong>Effective Isotropic Radiated Power (EIRP)</strong> represents the total power radiated by an antenna in a specific direction compared to an ideal isotropic antenna.</p>
<p>It includes:</p>
<ul>
<li>Transmitter output power</li>
<li>Antenna gain</li>
<li>Cable/connector losses</li>
</ul>
<p>EIRP tells us how strong the signal effectively radiates into space.</p>

 <!-- Formula Section -->
<section class="my-5">
<div class="card shadow-sm border-0 rounded-4">
        <div class="card-body text-center p-4">
            <h2 class="fw-bold text-primary mb-4">EIRP Formula</h2>
            <!-- dBm Formula -->
            <div class="mb-4">
                <p class="fs-5">   $$    \text{EIRP (dBm)} = \text{Tx Power (dBm)} + \text{Antenna Gain (dBi)} - \text{Cable Loss (dB)}   $$  </p>
            </div>
            <div>
                <p class="fs-5">   $$ \text{EIRP (W)} = 10^{\frac{\text{EIRP(dBm)} - 30}{10}}    $$  </p>
            </div>
        </div>
    </div>
</section>
<div class="my-5 text-center">
<img src="/assets/images/eirp-calculator.jpg" alt="EIRP Calculator diagram showing transmitter power antenna gain and cable loss formula" class="img-fluid rounded shadow">
</div>
<p class="visually-hidden">
EIRP (dBm) = Tx Power (dBm) + Antenna Gain (dBi) - Cable Loss (dB)
</p>




</div>




<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<script src="{{ '/assets/js/eirp-calculator.js' | relative_url }}"></script>
<script>
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};
</script>