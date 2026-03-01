---
layout: default
title: EARFCN Calculator LTE – 4G Frequency Converter & Band Table
permalink: /earfcn-calculator
description: "Instantly convert LTE EARFCN to frequency using our free calculator. Includes LTE band list, formulas, and examples for RF engineers."
#image: "/assets/images/age-calc.png"
last_modified_at: 2026-02-28
---

  <style>
    .band-chip { background: #f2f5f9; border-radius: 40px; padding: 0.4rem 1rem; font-weight: 500; border: 1px solid #dee2e6; cursor: pointer; transition: 0.1s; margin: 0.2rem; display: inline-block; }
    .band-chip.active { background: #0d6efd; border-color: #0a58ca; color: white; box-shadow: 0 2px 8px rgba(13,110,253,0.3); }
    .band-chip:hover { background: #d3d9e2; }
    .result-box { background: #f8fafd; border-radius: 1.5rem; padding: 1.5rem; border: 1px solid #dee7f0; }
    .earfcn-highlight { font-size: 2.2rem; font-weight: 700; line-height: 1.2; }
    .bw-selector .btn-outline-secondary { border-color: #cbd5e1; }
    .bw-selector .btn-check:checked + .btn-outline-secondary { background: #1e2f4f; color: white; border-color: #1e2f4f; }
    .converter-panel { background: white; border-radius: 1.2rem; padding: 1.8rem; box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03); border: 1px solid #e9ecf2; }
    .info-footer { background: #f2f5fa; border-radius: 60px; padding: 0.8rem 1.5rem; font-size: 0.9rem; border: 1px solid #dae1ec; }
    </style>

 
<div class="container py-4">
 <!-- header -->
 <div class="d-flex align-items-center gap-3 mb-4"> <h1>LTE EARFCN Calculator</h1></div>
   <div class="mb-4">
      <span class="text-secondary me-2"><i class="fa-solid fa-tags"></i> FDD Band:</span>
     <div class="d-flex flex-wrap align-items-center">
      <span class="band-chip" data-band="5" data-dl-low="869" data-n-offset="2400" data-earfcn-min="2400" data-earfcn-max="2649">Band 5 (850)</span>
      <span class="band-chip" data-band="8" data-dl-low="925" data-n-offset="3450" data-earfcn-min="3450" data-earfcn-max="3799">Band 8 (900)</span>
      <span class="band-chip" data-band="20" data-dl-low="791" data-n-offset="6150" data-earfcn-min="6150" data-earfcn-max="6449">Band 20 (800)</span>
      <span class="band-chip" data-band="28" data-dl-low="758" data-n-offset="9210" data-earfcn-min="9210" data-earfcn-max="9659">Band 28 (700)</span>
      <span class="band-chip" data-band="71" data-dl-low="617" data-n-offset="68586" data-earfcn-min="68586" data-earfcn-max="68935">Band 71 (600)</span>
      <span class="band-chip" data-band="1" data-dl-low="2110" data-n-offset="0" data-earfcn-min="0" data-earfcn-max="599">Band 1 (2100)</span>
      <span class="band-chip" data-band="2" data-dl-low="1930" data-n-offset="600" data-earfcn-min="600" data-earfcn-max="1199">Band 2 (1900)</span>
      <span class="band-chip" data-band="3" data-dl-low="1805" data-n-offset="1200" data-earfcn-min="1200" data-earfcn-max="1949">Band 3 (1800)</span>
      <span class="band-chip" data-band="66" data-dl-low="2110" data-n-offset="66486" data-earfcn-min="66486" data-earfcn-max="67335">Band 4/66 (AWS)</span>
     </div>
    <br>

 <span class="text-secondary me-2"><i class="bi bi-tags"></i> TDD Band:</span>   
<div class="d-flex flex-wrap align-items-center">
           <span class="band-chip" data-band="38" data-dl-low="2570" data-n-offset="37750" data-earfcn-min="37750" data-earfcn-max="38249">Band 38 (2600 TDD)</span>
            <span class="band-chip" data-band="41" data-dl-low="2496" data-n-offset="39650" data-earfcn-min="39650" data-earfcn-max="41589">Band 41 (2500)</span>
            <span class="band-chip" data-band="42" data-dl-low="3400" data-n-offset="41590" data-earfcn-min="41590" data-earfcn-max="43589">Band 42/43 (3.5 GHz)</span>
            <span class="band-chip" data-band="48" data-dl-low="3550" data-n-offset="55240" data-earfcn-min="55240" data-earfcn-max="56739">Band 48 (CBRS)</span>
            <span class="band-chip" data-band="40" data-dl-low="2300" data-n-offset="38650" data-earfcn-min="38650" data-earfcn-max="39649">Band 40 (2300)</span>
            <span class="band-chip" data-band="7" data-dl-low="2620" data-n-offset="2750" data-earfcn-min="2750" data-earfcn-max="3449">Band 7 (2600)</span>
      </div>
    </div>

<!-- band -->
<div class="row g-3 align-items-end mb-4">  
  <div class="col-md-8">
    <div class="bg-white p-4 rounded-4 border d-flex flex-wrap gap-3 align-items-center justify-content-between">
      <span class="fs-5 fs-md-4">
        <strong id="selectedBandDisplay">Band 5 (850)</strong><span class="text-secondary mx-1">|</span><span id="dlFreqRange">869 – 894</span> MHz DL</span>
      <span class="bg-primary-subtle rounded-4 p-3 fs-5"> EARFCN <span id="earfcnRangeDisplay">2400 – 2649</span></span>
    </div>
  </div>
</div>

 <!-- toggle switch: which conversion to show? -->
<div class="d-flex justify-content-center gap-3 bg-white p-3 rounded-3 border mx-auto mb-4">
  <input type="radio" class="btn-check" name="converterChoice" id="radioFreqToEarfcn" autocomplete="off" checked>
  <label class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" for="radioFreqToEarfcn"><i class="bi bi-arrow-right me-1"></i> Frequency → EARFCN </label>
  <input type="radio" class="btn-check" name="converterChoice" id="radioEarfcnToFreq" autocomplete="off">
  <label class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" for="radioEarfcnToFreq"><i class="bi bi-arrow-left me-1"></i> EARFCN → Frequency</label>
</div>



<!-- dynamic converter panel: only one visible at a time -->
<div class="converter-panel mb-4">
  <!-- FREQ → EARFCN panel  -->
   <div id="panelFreqToEarfcn" class="converter-panel-inner">
    <h5 class="mb-3"><i class="bi bi-arrow-right-circle-fill me-2 text-primary"></i>Downlink frequency → EARFCN</h5>
     <div class="row g-4 align-items-end">
       <div class="col-md-6">
          <label class="form-label fw-medium">Enter downlink frequency (MHz)</label>
          <input type="number" id="freqInput" class="form-control form-control-lg" placeholder="e.g. 881.5" step="0.1" value="881.5">
         </div>
      <div class="col-md-6"> <button id="calcFreqToEarfcn" class="btn btn-primary btn-lg px-4"><i class="bi bi-calculator"></i> Compute EARFCN</button></div>
                <div class="col-12 mt-3">
                    <div class="bg-light p-4 rounded-4">
                        <span class="text-secondary">Computed EARFCN (downlink):</span>
                        <div class="d-flex align-items-baseline gap-3">
                            <span id="earfcnResult" class="fw-bold fs-1">2525</span>
                            <span class="text-muted">(NDL)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- EARFCN -->
  <div id="panelEarfcnToFreq" class="converter-panel-inner" style="display: none;">
      <h5 class="mb-3"><i class="bi bi-arrow-left-circle-fill me-2 text-primary"></i>EARFCN → downlink frequency</h5>
        <div class="row g-4 align-items-end">
          <div class="col-md-6">
             <label class="form-label fw-medium">Enter EARFCN (downlink)</label>
             <input type="number" id="earfcnInput" class="form-control form-control-lg" placeholder="e.g. 2500" value="2500">
           </div>
        <div class="col-md-6"> <button id="calcEarfcnToFreq" class="btn btn-primary btn-lg px-4"><i class="bi bi-calculator"></i> Compute Frequency</button> </div>
          <div class="col-12 mt-3">
           <div class="bg-light p-4 rounded-4">
             <span class="text-secondary">Computed downlink frequency:</span>
                <div class="d-flex align-items-baseline gap-3">
                 <span id="freqResult" class="fw-bold fs-1">879.0</span>
                  <span class="text-muted">MHz</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <!-- unified -->
  <div class="info-footer d-flex flex-wrap justify-content-between align-items-center mt-3">
        <span><i class="bi bi-broadcast me-1"></i> <strong>Band <span id="footBand">5</span></strong> DL low <span id="footDlLow">869</span> MHz · UL low ≈<span id="footUlLow">824</span> MHz</span>
        <span><i class="bi bi-symmetry-vertical"></i> EARFCN offset <span id="footOffset">2400</span> · range <span id="footRange">2400–2649</span></span>
        <span class="badge bg-light text-dark">ΔF = 0.1 MHz</span>
    </div>
</div>

<script src="{{ '/assets/js/erfcn-calc.js' | relative_url }}"></script> 
