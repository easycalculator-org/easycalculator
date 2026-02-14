---
layout: default
title: Free Space Path Loss Calculator (FSPL) – Formula & dB Calculation
permalink: /free-space-path-loss-calculator
description: "Calculate Free Space Path Loss (FSPL) in dB using frequency and distance. Use our free FSPL calculator with formula, example, and RF planning guide for telecom and wireless networks."
image: "/assets/images/free-space-path-loss-calculator.jpg"
last_modified_at: 2026-02-10
---
 <style>
    .fspl-big-number {
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.2;
    }
    .rx-badge {
      background-color: #e7f1ff;
      border-radius: 50px;
      padding: 0.5rem 1.2rem;
      font-size: 1.4rem;
    }
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

<script src="{{ '/assets/js/free-spac-calc.js' | relative_url }}"></script>