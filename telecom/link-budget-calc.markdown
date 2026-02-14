---
layout: default
title: RF Link Budget Calculator | LTE, 5G, EIRP & Path Loss Formula
permalink: /rf-link-budget-calculator
description: "Calculate RF link budget including transmit power, antenna gain, cable loss and free space path loss. Accurate LTE & 5G link budget calculator with EIRP and received power formula."
#image: "/assets/images/age-calc.png"
last_modified_at: 2026-02-10
---
 <style>
  .card{background:#fff;border:1px solid #dde7f0;box-shadow:0 8px 20px #0028500a;border-radius:12px;margin-top:24px;color:#1e3b5a}.card-header{background:#0165E1;border-bottom:1px solid #d2e2f0;border-radius:12px 12px 0 0!important;padding:1rem 1.8rem;font-weight:600;letter-spacing:.5px;text-transform:uppercase;font-size:.95rem;color:#f0f1f3}.form-label{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#069;margin-bottom:.2rem}.input-group-text{background-color:#f0f7fc;border:1px solid #c2d6e6;color:#004b7a;font-weight:500}.form-control,.form-select{background-color:#fff;border:1px solid #c2d6e6;color:#0a3142;transition:all .2s}.form-control:focus,.form-select:focus{background-color:#fff;border-color:#39f;box-shadow:0 0 0 .25rem #0077cc26;color:#003153}.form-control::placeholder{color:#99b8cc}.badge-dbm{background:#e1f0fa;padding:6px 14px;border-radius:50px;font-size:.9rem;font-weight:600}.result-card{background:#f3faff;border-radius:20px;padding:24px 20px;border:1px solid #cde1f0;box-shadow:inset 0 1px 4px #003c6408}.progress-bar-custom{background:linear-gradient(90deg,#1c8ad9,#39acff);height:10px;border-radius:20px}.progress{background-color:#e3ecf2}.link-margin-badge{font-size:1.8rem;font-weight:700;font-family:'Courier New',monospace}.chart-container{position:relative;height:120px;width:100%}.unit-hz{font-size:.75rem;color:#4f758b}.btn-outline-accent{border:1px solid #99c2d9;color:#069}.btn-outline-accent:hover{background:#e6f0fa;border-color:#39c;color:#003f66}.formula-card{background:#fff;border-radius:20px;padding:1.8rem 1.5rem;margin-top:30px;box-shadow:0 6px 20px #003c6e0f;border:1px solid #cce0f0;color:#00375c}.variable-def{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.7rem 1.8rem;background:#f9fdff;padding:1.3rem 1.8rem;border-radius:18px;margin-top:.8rem;color:#0a3b5a;border:1px solid #cce0f0}.variable-item{display:flex;align-items:baseline;gap:8px}.var-symbol{font-weight:800;font-family:monospace;color:#06a;background:#e6f2ff;padding:.2rem .6rem;border-radius:30px;font-size:.9rem}.var-desc{font-size:.92rem;color:#1e4762}.text-secondary{color:#3c627a!important}    
 </style>
<div class="container py-4">
  <div class="d-flex align-items-center mt-3 mb-2"> <i class="fas fa-broadcast-tower fs-1 me-3 text-primary"></i><h1>RF Link Budget Calculator</h1> </div>
        <div class="row g-4">
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-header"><i class="fas fa-sliders-h"></i> Link parameters — transmitter → receiver</div>
                    <div class="card-body p-4">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-waveform"></i> Frequency (MHz)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-radio"></i></span>
                                    <input type="number" id="freq" class="form-control" value="3500" step="0.1" placeholder="MHz">
                                    <span class="input-group-text">MHz</span>
                                </div>
                                <div class="unit-hz mt-1">(3.5 GHz typical for 5G)</div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Distance (km)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-route"></i></span>
                                    <input type="number" id="distance" class="form-control" value="5.0" step="0.1" placeholder="km">
                                    <span class="input-group-text">km</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">TX power (dBm)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-arrow-up"></i></span>
                                    <input type="number" id="txPower" class="form-control" value="33.0" step="0.1" placeholder="dBm">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> TX antenna gain (dBi)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-antenna"></i></span>
                                    <input type="number" id="txGain" class="form-control" value="18.0" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> RX antenna gain (dBi)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-antenna"></i></span>
                                    <input type="number" id="rxGain" class="form-control" value="21.0" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> LNA gain / preamp (dB)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-plus-circle"></i></span>
                                    <input type="number" id="lnaGain" class="form-control" value="2.0" step="0.1" placeholder="dB">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label"> TX cable loss (dB)</label>
                                <input type="number" id="txCable" class="form-control" value="1.5" step="0.1">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label"> RX cable loss (dB)</label>
                                <input type="number" id="rxCable" class="form-control" value="1.2" step="0.1">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label"> Rain / atmos loss (dB)</label>
                                <input type="number" id="rainLoss" class="form-control" value="0.8" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Polarization mismatch (dB)</label>
                                <input type="number" id="polLoss" class="form-control" value="0.5" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Misc. losses (dB)</label>
                                <input type="number" id="miscLoss" class="form-control" value="0.0" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Noise figure (dB)</label>
                                <div class="input-group">
                                    <input type="number" id="nf" class="form-control" value="4.5" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Bandwidth (kHz)</label>
                                <div class="input-group">
                                    <input type="number" id="bw" class="form-control" value="20000" step="100" placeholder="kHz">
                                    <span class="input-group-text">kHz</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Required SNR (dB)</label>
                                <input type="number" id="snrReq" class="form-control" value="12.0" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"> Fade margin target (dB)</label>
                                <input type="number" id="fadeTarget" class="form-control" value="15.0" step="0.1">
                            </div>
                        </div> <!-- row -->
                        <div class="mt-3 fw-normal small"> Free-space path loss (ITU) · Rx power includes all gains/losses · Sensitivity = -174dBm/Hz + NF + 10log(BW) + SNR</div>
                    </div>
                </div>
            </div> <!-- col -->
<!-- right column:  margin -->
  <div class="col-lg-5">
     <div class="card h-100">
                    <div class="card-header"><i class="fas fa-chart-line"></i> Real‑time link budget & margin</div>
                    <div class="card-body d-flex flex-column">
                        <!-- main result card: Rx power & margin -->
                        <div class="result-card mb-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="fs-6 fw-semibold">RX POWER @ LNA OUTPUT</span>
                                <span class="badge-dbm"><span id="rxPowerVal" class="fw-bold fs-5">-74.3</span> dBm</span>
                            </div>
                            <div class="mt-3 d-flex justify-content-between align-items-baseline">
                                <span class="fs-6 fw-semibold">LINK MARGIN</span>
                                <span class="display-5 fw-bold text-success" id="marginVal">11.6</span>
                                <span class="fs-5 text-secondary">dB</span>
                            </div>
                            <!-- progress bar for margin relative to target fade margin -->
                            <div class="mt-2 small d-flex justify-content-between">
                                <span>Margin vs target:</span>
                                <span id="marginStatus" class="fw-semibold" style="color: #cc5c00;">-3.4 dB below target</span>
                            </div>
                            <div class="progress mt-1">
                                <div id="marginProgress" class="progress-bar progress-bar-custom" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <!-- small chart: path loss & receiver sensitivity visualization -->
                        <div class="chart-container mt-2 mb-2">
                            <canvas id="gainChart"></canvas>
                        </div>
                        <div class="row g-2 mt-1">
                            <div class="col-6">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info">
                                    <span class="d-block text-nowrap small text-uppercase text-primary">FS Path Loss</span>
                                    <span class="fs-5 fw-semibold" id="pathLossVal" >129.1</span> <small>dB</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" >
                                    <span class="d-block small text-uppercase text-primary">Rx Sensitivity</span>
                                    <span class="fs-5 fw-semibold" id="sensVal" >-98.2</span> <small >dBm</small>
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" >
                                    <span class="d-block small text-uppercase text-primary">EIRP</span>
                                    <span class="fs-5 fw-semibold" id="eirpVal" >49.5</span> <small>dBm</small>
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info">
                                    <span class="d-block small text-uppercase text-primary">Noise Power</span>
                                    <span class="fs-5 fw-semibold" id="noisePowVal" >-110.2</span> <small>dBm</small>
                                </div>
                            </div>
                        </div>
                        <!-- reset/default hint -->
                        <div class="mt-auto small text-secondary pt-3">
                            <i class="fas fa-arrows-rotate me-1"></i> All parameters update live — click <span class="badge bg-secondary text-white" id="resetDefaults">⟲ reset to 5G example</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- main row -->
        <!-- second row: more details or description -->
<div class="row mt-4">
  <div class="col-12">
   <div class="card">
     <div class="card-header"><i class="fas fa-list-ul"></i> Link budget breakdown</div>
       <div class="card-body px-4">
        <div class="row text-center d-flex justify-content-around">
          <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">TX power</span><br><span id="detailTxp" class="fw-bold">33.0 dBm</span></div>
               <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- TX cable</span><br><span id="detailTxc" class="fw-bold">1.5 dB</span></div>
               <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ TX ant</span><br><span id="detailTxg" class="fw-bold">18.0 dBi</span></div>
               <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- FSPL</span><br><span id="detailFspl" class="fw-bold">129.1 dB</span></div>
               <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- misc/rain</span><br><span id="detailMisc" class="fw-bold">1.3 dB</span></div>
               <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ RX ant</span><br><span id="detailRxg" class="fw-bold" >21.0 dBi</span></div>
                <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- RX cable</span><br><span id="detailRxc" class="fw-bold">1.2 dB</span></div>
                <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ LNA</span><br><span id="detailLna" class="fw-bold">2.0 dB</span></div>
                <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">= Rx power</span><br><span id="detailRx" class="fw-bold">-74.3 dBm</span></div>
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
      <!-- {% include reema_verify.html %} -->
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
<!-- Article-->
<h2>What Is Link Budget?</h2>
<p class="lead">A link budget is a systematic calculation of all gains and losses that a communication signal experiences from the transmitter to the receiver, used to determine the received signal power and ensure reliable communication with sufficient signal-to-noise ratio (SNR).</p>
<p>It accounts for transmitter power, antenna gains, cable losses, free-space path loss, atmospheric attenuation, and receiver characteristics. Engineers use the link budget to verify that the received signal exceeds the receiver sensitivity by an adequate <strong>link margin</strong>, ensuring stable performance under real-world conditions such as fading and interference.</p>
 <!-- Basic Definition -->
      <div class="card shadow-sm border-0 p-4">
        <div class="card-body">
          <h2 class="h4 fw-semibold mb-3">Basic Link Budget Equation</h2>
          <p>The simplified equation in logarithmic (dB) form:</p>
          <div class="bg-success-subtle p-3 rounded text-center fs-5">
            \[
            \text{Received Power (dBm)} = \text{Transmitted Power (dBm)} + \text{Gains (dB)} - \text{Losses (dB)}
            \]
          </div>
          <p class="mt-3">
            Because decibels are logarithmic units, adding gains and subtracting losses is equivalent to multiplying actual power ratios.
          </p>
        </div>
      </div>


<div class="p-4">
  <div class="fw-bold fs-2 mb-3 d-inline-block"><i class="fas fa-square-root-alt me-2"></i> RF Link Budget Formula</div>
<div class="text-center">
 <div class="d-inline-block mb-4 px-4 py-3 rounded-4 fw-semibold lh-lg bg-light fs-2"> P<sub>RX</sub> = P<sub>TX</sub> + G<sub>TX</sub> – L<sub>TX</sub> – L<sub>FS</sub> – L<sub>M</sub> + G<sub>RX</sub> – L<sub>RX</sub> </div>
  </div>
          
<div class="table-responsive mt-4">
            <table class="table table-bordered align-middle">
              <thead class="table-light">
                <tr>
                  <th>Parameter</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>P<sub>RX</sub></strong></td>
                  <td>Received Power (dBm)</td>
                </tr>
                <tr>
                  <td><strong>P<sub>TX</sub></strong></td>
                  <td>Transmitter Output Power (dBm)</td>
                </tr>
                <tr>
                  <td><strong>G<sub>TX</sub></strong></td>
                  <td>Transmitter Antenna Gain (dBi)</td>
                </tr>
                <tr>
                  <td><strong>L<sub>TX</sub></strong></td>
                  <td>Transmitter Cable/Connector Loss (dB)</td>
                </tr>
                <tr>
                  <td><strong>L<sub>FS</sub></strong></td>
                  <td>Free-Space Path Loss (dB)</td>
                </tr>
                <tr>
                  <td><strong>L<sub>M</sub></strong></td>
                  <td>Miscellaneous Losses (fade margin, polarization, rain)</td>
                </tr>
                <tr>
                  <td><strong>G<sub>RX</sub></strong></td>
                  <td>Receiver Antenna Gain (dBi)</td>
                </tr>
                <tr>
                  <td><strong>L<sub>RX</sub></strong></td>
                  <td>Receiver Cable/Connector Loss (dB)</td>
                </tr>
              </tbody>
            </table>
          </div>          
     


<!-- Free Space Path Loss -->
  <div class="row mb-5 p-4">
        <div class="card-body">
          <h2 class="h4 fw-semibold mb-3">Free Space Path Loss</h2>
          <p>The path loss is the loss due to propagation between the transmitting and receiving antennas and is usually the most significant contributor to the losses, and also the largest unknown. When transmitting through, it can be expressed in a dimensionless form by normalizing the distance to the wavelength:</p>
          <p>General wavelength-based form:</p>
          <div class="bg-light p-3 rounded text-center fs-5">
            \[
            L_{FS}(dB) = 20 \log_{10} \left( 4\pi \frac{d}{\lambda} \right)
            \]
          </div>
          <p class="mt-4">Engineering form (MHz & km):</p>
          <div class="bg-light p-3 rounded text-center fs-5">
            \[
            L_{FS}(dB) \approx 32.45 + 20\log_{10}(f_{MHz}) + 20\log_{10}(d_{km})
            \]
          </div>
        </div>
    </div>

  <!-- Link Margin -->
  <div class="row mb-5">
        <div class="card-body">
          <h2 class="h4 fw-semibold mb-3">Link Margin</h2>
          <div class="bg-light p-3 rounded text-center fs-5">
            \[
            \text{Link Margin} = P_{RX} - \text{Receiver Sensitivity}
            \]
          </div>
          <p class="mt-3">
            Link margin provides a safety buffer to ensure reliable communication under fading, atmospheric loss, and environmental variations.
          </p>
        </div>
  </div>

  <!-- Optical Link Budget -->
  <div class="row mb-5">
      <div class="card shadow-sm border-0">
        <div class="card-body">
          <h2 class="h4 fw-semibold mb-3">Optical Link Budget (Fiber Systems)</h2>
          <div class="bg-light p-3 rounded text-center fs-5"> \[  L_T = \alpha L + L_c + L_s \] </div>
          <ul class="mt-3">
            <li><strong>L<sub>T</sub></strong> – Total Loss</li>
            <li><strong>α</strong> – Fiber Attenuation (dB/km)</li>
            <li><strong>L</strong> – Fiber Length</li>
            <li><strong>L<sub>c</sub></strong> – Connector Loss</li>
            <li><strong>L<sub>s</sub></strong> – Splice Loss</li>
          </ul>
        </div>
      </div>
  </div>


<h2>Why Link Budget Is Important</h2>
<p>Link budget calculations are essential in:</p>
<ul>
<li>5G NR and LTE network planning</li>
<li>Microwave backhaul design</li>
<li> Satellite communication</li>
<li>WiFi coverage planning</li>
<li>Deep space communication</li>
<li>Fiber optic systems</li>
</ul>
<p>Without a proper link budget, networks may suffer from:</p>
<ul >
<li>Poor coverage</li>
<li>Frequent call drops</li>
<li>Low throughput</li>
<li>High packet loss</li>
<li>Unstable links in rain or fading conditions</li>
</ul>
<p >A well-designed link budget ensures predictable and stable performance.</p>

   </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<script src="{{ '/assets/js/link-budget.js' | relative_url }}"></script>
