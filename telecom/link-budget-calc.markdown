---
layout: default
title: RF Link Budget Calculator | LTE, 5G, EIRP & Path Loss Formula
permalink: /rf-link-budget-calculator
description: "DescriCalculate RF link budget including transmit power, antenna gain, cable loss and free space path loss. Accurate LTE & 5G link budget calculator with EIRP and received power formula."
#image: "/assets/images/age-calc.png"
last_modified_at: 2026-02-10
---
 <style>
       .card {
            background: white;
            border: 1px solid #dde7f0;
            box-shadow: 0 8px 20px rgba(0,40,80,0.04);
            border-radius: 12px;
            margin-top: 24px;
            color: #1e3b5a;
        }
        .card-header {
            background: #0165E1 ;
            border-bottom: 1px solid #d2e2f0;
            border-radius: 12px 12px 0 0 !important;
            padding: 1rem 1.8rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-size: 0.95rem;
            color: #f0f1f3;
        }
     
        .form-label {
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            color: #006699;
            margin-bottom: 0.2rem;
        }
        .input-group-text {
            background-color: #f0f7fc;
            border: 1px solid #c2d6e6;
            color: #004b7a;
            font-weight: 500;
        }
        .form-control, .form-select {
            background-color: white;
            border: 1px solid #c2d6e6;
            color: #0a3142;
            transition: all 0.2s;
        }
        .form-control:focus, .form-select:focus {
            background-color: white;
            border-color: #3399ff;
            box-shadow: 0 0 0 0.25rem rgba(0, 119, 204, 0.15);
            color: #003153;
        }
        .form-control::placeholder {
            color: #99b8cc;
        }
        .badge-dbm {
            background: #e1f0fa;
            padding: 6px 14px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 600;
            border-left: 4px solid #0077be;
            color: #003e6e;
        }
        .result-card {
            background: #f3faff;
            border-radius: 20px;
            padding: 24px 20px;
            border: 1px solid #cde1f0;
            box-shadow: inset 0 1px 4px rgba(0,60,100,0.03);
        }
        .progress-bar-custom {
            background: linear-gradient(90deg, #1c8ad9, #39acff);
            height: 10px;
            border-radius: 20px;
        }
        .progress {
            background-color: #e3ecf2;
        }
        .link-margin-badge {
            font-size: 1.8rem;
            font-weight: 700;
            font-family: 'Courier New', monospace;
        }
        .chart-container {
            position: relative;
            height: 120px;
            width: 100%;
        }
        .unit-hz {
            font-size: 0.75rem;
            color: #4f758b;
        }
        .btn-outline-accent {
            border: 1px solid #99c2d9;
            color: #006699;
        }
        .btn-outline-accent:hover {
            background: #e6f0fa;
            border-color: #3399cc;
            color: #003f66;
        }
       

        /* ---------- WHITE BACKGROUND FORMULA SECTION (ELEGANT) ---------- */
        .formula-card {
            background: white;
            border-radius: 20px;
            padding: 1.8rem 1.5rem;
            margin-top: 30px;
            box-shadow: 0 6px 20px rgba(0,60,110,0.06);
            border: 1px solid #cce0f0;
            color: #00375c;
        }
        
        .variable-def {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 0.7rem 1.8rem;
            background: #f9fdff;
            padding: 1.3rem 1.8rem;
            border-radius: 18px;
            margin-top: 0.8rem;
            color: #0a3b5a;
            border: 1px solid #cce0f0;
        }
        .variable-item {
            display: flex;
            align-items: baseline;
            gap: 8px;
        }
        .var-symbol {
            font-weight: 800;
            font-family: monospace;
            color: #0066aa;
            background: #e6f2ff;
            padding: 0.2rem 0.6rem;
            border-radius: 30px;
            font-size: 0.9rem;
        }
        .var-desc {
            font-size: 0.92rem;
            color: #1e4762;
        }
        /* dark text for all details */
        .text-secondary {
            color: #3c627a !important;
        }
     
    </style>
<div class="container py-4">
        <!-- header / title - fresh white -->
        <div class="d-flex align-items-center mt-3 mb-2"> <i class="fas fa-broadcast-tower fs-1 me-3 text-primary"></i><h1 class="display-6 fw-bold">RF Link Budget</h1> </div>
        <!-- main row: input panel + results -->
        <div class="row g-4">
            <!-- left column: input parameters (advanced) -->
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-header"><i class="fas fa-sliders-h"></i> Link parameters — transmitter → receiver</div>
                    <div class="card-body p-4">
                        <div class="row g-3">
                            <!-- Frequency, Distance row -->
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
                                <label class="form-label"><i class="fas fa-arrows-alt-h"></i> Distance (km)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-route"></i></span>
                                    <input type="number" id="distance" class="form-control" value="5.0" step="0.1" placeholder="km">
                                    <span class="input-group-text">km</span>
                                </div>
                            </div>
                            <!-- TX power, TX gain, RX gain, LNA -->
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-rocket"></i> TX power (dBm)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-arrow-up"></i></span>
                                    <input type="number" id="txPower" class="form-control" value="33.0" step="0.1" placeholder="dBm">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-wifi"></i> TX antenna gain (dBi)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-antenna"></i></span>
                                    <input type="number" id="txGain" class="form-control" value="18.0" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-satellite"></i> RX antenna gain (dBi)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-antenna"></i></span>
                                    <input type="number" id="rxGain" class="form-control" value="21.0" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-microchip"></i> LNA gain / preamp (dB)</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-plus-circle"></i></span>
                                    <input type="number" id="lnaGain" class="form-control" value="2.0" step="0.1" placeholder="dB">
                                </div>
                            </div>
                            <!-- losses: connector, cable, misc, rain, polarization -->
                            <div class="col-md-4">
                                <label class="form-label"><i class="fas fa-plug"></i> TX cable loss (dB)</label>
                                <input type="number" id="txCable" class="form-control" value="1.5" step="0.1">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label"><i class="fas fa-plug"></i> RX cable loss (dB)</label>
                                <input type="number" id="rxCable" class="form-control" value="1.2" step="0.1">
                            </div>
                            <div class="col-md-4">
                                <label class="form-label"><i class="fas fa-tint"></i> Rain / atmos loss (dB)</label>
                                <input type="number" id="rainLoss" class="form-control" value="0.8" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-adjust"></i> Polarization mismatch (dB)</label>
                                <input type="number" id="polLoss" class="form-control" value="0.5" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-cubes"></i> Misc. losses (dB)</label>
                                <input type="number" id="miscLoss" class="form-control" value="0.0" step="0.1">
                            </div>
                            <!-- Receiver sensitivity / Noise Figure -->
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-thermometer-half"></i> Noise figure (dB)</label>
                                <div class="input-group">
                                    <input type="number" id="nf" class="form-control" value="4.5" step="0.1">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-signal"></i> Bandwidth (kHz)</label>
                                <div class="input-group">
                                    <input type="number" id="bw" class="form-control" value="20000" step="100" placeholder="kHz">
                                    <span class="input-group-text">kHz</span>
                                </div>
                            </div>
                            <!-- Required SNR / threshold -->
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-bullseye"></i> Required SNR (dB)</label>
                                <input type="number" id="snrReq" class="form-control" value="12.0" step="0.1">
                            </div>
                            <div class="col-md-6">
                                <label class="form-label"><i class="fas fa-shield-alt"></i> Fade margin target (dB)</label>
                                <input type="number" id="fadeTarget" class="form-control" value="15.0" step="0.1">
                            </div>
                        </div> <!-- row -->
                        <!-- advanced note -->
                        <div class="mt-3 text-primary-emphasis small" style="color: #2a6291;">
                            <i class="fas fa-calculator"></i> Free-space path loss (ITU) · Rx power includes all gains/losses · Sensitivity = -174dBm/Hz + NF + 10log(BW) + SNR
                        </div>
                    </div>
                </div>
            </div> <!-- col -->
            <!-- right column: LIVE results, chart & margin -->
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
                                <span class="display-5 fw-bold" id="marginVal" style="color: #006600;">11.6</span>
                                <span class="fs-5 text-secondary">dB</span>
                            </div>
                            <!-- progress bar for margin relative to target fade margin -->
                            <div class="mt-2 small d-flex justify-content-between">
                                <span>Margin vs target:</span>
                                <span id="marginStatus" class="fw-semibold" style="color: #cc5c00;">-3.4 dB below target</span>
                            </div>
                            <div class="progress mt-1" style="height: 12px; background-color: #e0ecf2;">
                                <div id="marginProgress" class="progress-bar progress-bar-custom" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <!-- small chart: path loss & receiver sensitivity visualization -->
                        <div class="chart-container mt-2 mb-2">
                            <canvas id="gainChart"></canvas>
                        </div>
                        <!-- additional key metrics in mini cards -->
                        <div class="row g-2 mt-1">
                            <div class="col-6">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" style="background: #f0f9ff !important;">
                                    <span class="d-block text-nowrap small text-uppercase text-primary">FS Path Loss</span>
                                    <span class="fs-5 fw-semibold" id="pathLossVal" >129.1</span> <small style="color: #3b6e8f;">dB</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" style="background: #f0f9ff !important;">
                                    <span class="d-block small text-uppercase text-primary">Rx Sensitivity</span>
                                    <span class="fs-5 fw-semibold" id="sensVal" >-98.2</span> <small style="color: #3b6e8f;">dBm</small>
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" style="background: #f0f9ff !important;">
                                    <span class="d-block small text-uppercase text-primary">EIRP</span>
                                    <span class="fs-5 fw-semibold" id="eirpVal" >49.5</span> <small style="color: #3b6e8f;">dBm</small>
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="p-2 bg-light bg-opacity-75 rounded-4 border border-info" style="background: #f0f9ff !important;">
                                    <span class="d-block small text-uppercase text-primary">Noise Power</span>
                                    <span class="fs-5 fw-semibold" id="noisePowVal" >-110.2</span> <small style="color: #3b6e8f;">dBm</small>
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
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">TX power</span><br><span id="detailTxp" class="fw-bold" style="color: #0059b3;">33.0 dBm</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- TX cable</span><br><span id="detailTxc" class="fw-bold" style="color: #0059b3;">1.5 dB</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ TX ant</span><br><span id="detailTxg" class="fw-bold" style="color: #0059b3;">18.0 dBi</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- FSPL</span><br><span id="detailFspl" class="fw-bold" style="color: #0059b3;">129.1 dB</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- misc/rain</span><br><span id="detailMisc" class="fw-bold" style="color: #0059b3;">1.3 dB</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ RX ant</span><br><span id="detailRxg" class="fw-bold" style="color: #0059b3;">21.0 dBi</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">- RX cable</span><br><span id="detailRxc" class="fw-bold" style="color: #0059b3;">1.2 dB</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">+ LNA</span><br><span id="detailLna" class="fw-bold" style="color: #0059b3;">2.0 dB</span></div>
                            <div class="col-md-2 col-4 mb-2"><span class="small text-secondary">= Rx power</span><br><span id="detailRx" class="fw-bold" style="color: #006bb3;">-74.3 dBm</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- ========== ELEGANT WHITE FORMULA EXACTLY FROM IMAGE ========== -->
<div class="formula-card">
  <div class="fw-bold fs-5 mb-3 d-inline-block"><i class="fas fa-square-root-alt me-2"></i> RF Link Budget Formula</div>
 <!-- Centered large equation -->
<div class="text-center">
 <div class="d-inline-block mb-4 px-4 py-3 rounded-4 fw-semibold lh-lg bg-light fs-2"> P<sub>RX</sub> = P<sub>TX</sub> + G<sub>TX</sub> – L<sub>TX</sub> – L<sub>FS</sub> – L<sub>M</sub> + G<sub>RX</sub> – L<sub>RX</sub> </div>
  </div>
 <!-- Variable definitions with clean white background, matching image -->
            <div class="variable-def">
                <div class="variable-item"><span class="var-symbol">P<sub>RX</sub></span> <span class="var-desc">Received Power (dBm)</span></div>
                <div class="variable-item"><span class="var-symbol">P<sub>TX</sub></span> <span class="var-desc">Transmitter Power Output (dBm)</span></div>
                <div class="variable-item"><span class="var-symbol">G<sub>TX</sub></span> <span class="var-desc">Transmitter Antenna Gain (dBi)</span></div>
                <div class="variable-item"><span class="var-symbol">L<sub>TX</sub></span> <span class="var-desc">Losses from Transmitter (cable, connectors etc.) (dB)</span></div>
                <div class="variable-item"><span class="var-symbol">L<sub>FS</sub></span> <span class="var-desc">Free-Space Loss (dB)</span></div>
                <div class="variable-item"><span class="var-symbol">L<sub>M</sub></span> <span class="var-desc">Misc. Losses (fade margin, polarization misalignment etc.) (dB)</span></div>
                <div class="variable-item"><span class="var-symbol">G<sub>RX</sub></span> <span class="var-desc">Receiver Antenna Gain (dBi)</span></div>
                <div class="variable-item"><span class="var-symbol">L<sub>RX</sub></span> <span class="var-desc">Losses from Receiver (cable, connectors etc.) (dB)</span></div>
            </div>
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script src="{{ '/assets/js/link-budget.js' | relative_url }}"></script>
