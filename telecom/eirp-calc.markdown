---
layout: default
title: EIRP Calculator – Effective Isotropic Radiated Power (dBm & Watts)
permalink: /eirp-calculator
description: "Calculate EIRP instantly with our free online EIRP Calculator. Convert transmitter power, antenna gain, and cable loss into EIRP values in dBm"
image: "/assets/images/og/eirp-calculator.jpg"
last_modified_at: 2026-09-09
---
<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">EIRP Calculator - Effective Isotropic Radiated Power </li>
  </ol>
</div>

<div class="card border shadow-sm rounded-4">
<div class="card-body p-4 ">
<div class="d-flex align-items-center gap-3 mb-2">
<div class="text-primary fs-3"><i class="fas fa-broadcast-tower"></i></div>
<div>
<h2 class="h4 fw-bold mb-1">RF EIRP Calculator</h2>
<p class="text-secondary small mb-0">Calculate Effective Isotropic Radiated Power </p>
</div>
<span class="badge bg-primary rounded-pill ms-auto">dBm / W </span>
</div>
<hr class="my-4">
<div class="row g-4">
<div class="col-md-6"><label for="txPower" class="form-label fw-semibold"><i class="fas fa-bolt text-primary me-2"></i>Transmitter Power </label>
<div class="input-group input-group-lg"><span class="input-group-text bg-light"><i class="fas fa-wave-square"></i></span>
<input type="number" id="txPower" class="form-control" step="any" value="30.0" placeholder="Enter value" ><select id="txUnit" class="form-select" style="max-width: 100px;" ><option value="dBm" selected>dBm</option><option value="W">W</option><option value="mW">mW</option></select></div><div class="form-text">Example: 30 dBm=1 W </div></div><div class="col-md-6"><label for="antGain" class="form-label fw-semibold"><i class="fas fa-satellite-dish text-primary me-2"></i>Antenna Gain </label><div class="input-group input-group-lg"><span class="input-group-text bg-light"><i class="fas fa-broadcast-tower"></i></span><input type="number" id="antGain" class="form-control" step="any" value="6.0" placeholder="Enter gain" ><span class="input-group-text bg-light">dBi </span></div><div class="form-text">Antenna gain relative to an isotropic radiator </div></div><div class="col-md-6"><label for="cableLoss" class="form-label fw-semibold"><i class="fas fa-plug text-primary me-2"></i>Cable / Feeder Loss </label><div class="input-group input-group-lg"><span class="input-group-text bg-light"><i class="fas fa-minus-circle"></i></span><input type="number" id="cableLoss" class="form-control" step="any" value="2.0" placeholder="Enter loss" ><span class="input-group-text bg-light">dB </span></div><div class="form-text">Enter insertion loss as a positive value </div></div><div class="col-md-6"><label for="extraLoss" class="form-label fw-semibold"><i class="fas fa-sliders-h text-primary me-2"></i>Other Losses <span class="text-secondary fw-normal">(Optional)</span></label><div class="input-group input-group-lg"><span class="input-group-text bg-light"><i class="fas fa-minus-circle"></i></span><input type="number" id="extraLoss" class="form-control" step="any" value="0.0" placeholder="Enter loss" ><span class="input-group-text bg-light">dB </span></div><div class="form-text">Additional system or miscellaneous losses </div></div></div><div class="bg-light border rounded-4 p-4 mt-5"><div class="row align-items-center g-3"><div class="col-md-6"><div class="text-secondary small mb-1"><i class="fas fa-bullseye me-2"></i>Calculated EIRP </div><div class="d-flex align-items-baseline gap-2"><span id="eirpDisplay" class="display-6 fw-bold text-primary" >38.00 </span><span id="eirpUnit" class="fs-5 text-secondary" >dBm </span></div><div class="small text-secondary mt-2">EIRP (linear): <strong id="eirpWatt" class="text-dark">6.31 W </strong></div></div>
<div class="col-md-6">
<div class="d-flex flex-wrap justify-content-md-end gap-2">
<button id="resetBtn" class="btn btn-outline-secondary rounded-pill px-4" type="button" ><i class="fas fa-undo-alt me-1"></i>Reset </button>
<button id="convertToWattBtn" class="btn btn-primary rounded-pill px-4" type="button" ><i class="fas fa-exchange-alt me-1"></i>Show Watt </button>
</div>
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
      {% include bahadur.html %}
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
<li>Other system losses</li>
</ul>
<p>EIRP tells us how strong the signal effectively radiates into space.</p>

 <!-- Formula Section -->
<section class="my-5">
<div class="card shadow-sm border-0 rounded-4">
  <div class="card-body text-center p-4">
    <h2 class="fw-bold text-primary mb-4">EIRP Formula</h2>
     <!-- dBm Formula -->
      <div class="mb-4"><p class="fs-5">$$    \text{EIRP (dBm)} = \text{Tx Power (dBm)} + \text{Antenna Gain (dBi)} - \text{Cable Loss (dB)} - Other Losses (dB)  $$  </p></div>
      <div><p class="fs-5">$$ \text{EIRP (W)} = 10^{\frac{\text{EIRP(dBm)} - 30}{10}}    $$  </p></div>
     </div>
    </div>
</section>
<div class="my-5 text-center">
<img src="/assets/images/eirp-calculator.svg" alt="EIRP formula diagram showing transmitter power, antenna gain, cable loss, other losses and EIRP result" class="img-fluid rounded shadow">
</div>
<p class="visually-hidden">EIRP (dBm) = Tx Power (dBm) + Antenna Gain (dBi) - Cable Loss (dB)</p>

<div class="pt-4">
<h2>How to Use EIRP Calculator</h2>
<ol>
<li>Enter <strong>Transmitter Power</strong> (in dBm, W, or mW)</li>
<li>Enter <strong>Antenna Gain</strong> (in dBi)</li>
<li>Enter <strong>Cable Loss</strong> (in dB)</li>
<li>Add optional <strong>extra losses</strong> if needed</li>
<li>Click calculate to get <strong>EIRP in dBm and Watts</strong></li>
</ol>
</div>
<div class="p-4 bg-light rounded-4">
<h2>EIRP Calculation Example</h2>
<p>Let’s calculate EIRP with real values:</p>
<ul>
<li>Transmitter Power = <strong>30 dBm</strong></li>
<li>Antenna Gain = <strong>6 dBi</strong></li>
<li>Cable Loss = <strong>2 dB</strong></li>
</ul>
<p><strong>EIRP = 30 + 6 - 2 = 34 dBm</strong></p>
<p>Convert to watts:</p>
<p><strong>EIRP ≈ 2.51 Watts</strong></p>
</div>
<div class="p-4">
<h2>What is EIRP in Telecom?</h2>
<p><strong>Effective Isotropic Radiated Power (EIRP)</strong> is the total power radiated by an antenna in a specific direction, compared to an ideal isotropic radiator.</p>

<p>It is a key parameter used in:</p>
<ul>
<li>5G and LTE network planning</li>
<li>Wi-Fi signal strength analysis</li>
<li>Satellite communication systems</li>
<li>RF link budget calculations</li>
</ul>
</div>
<!-- FAQ Section -->
<section class="p-3">
 <h2 class="mb-4">FAQ on EIRP Calculator</h2>
  <div class="card mb-3 border-0 bg-light">
   <div class="card-body ">
    <div class="fw-bold text-primary">What is a good EIRP value?</div>
     <p class="mb-0">A good EIRP depends on the application. For Wi-Fi, it is usually below regulatory limits, while telecom networks use higher values for better coverage.</p>
    </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
      <div class="fw-bold text-primary">What is EIRP in dBm?</div>
      <p class="mb-0">EIRP in dBm represents the effective radiated power in logarithmic scale, combining transmitter power, antenna gain, and losses.</p>
      </div>
      </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">How do you calculate EIRP?</div>
            <p class="mb-0">EIRP = Transmitter Power (dBm) + Antenna Gain (dBi) − Cable Loss (dB) − Other Losses (dB).</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">Why is antenna gain added in EIRP?</div>
            <p class="mb-0">Antenna gain focuses energy in a direction, increasing effective radiated power compared to an isotropic antenna.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">What is difference between ERP and EIRP?</div>
            <p class="mb-0">EIRP is referenced to an isotropic antenna, while ERP is referenced to a dipole antenna (ERP is ~2.15 dB lower than EIRP).</p>
          </div>
        </div>
</section>
      <!-- Did You Know? -->
           {% include rf.html %}
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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good EIRP value?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good EIRP depends on the application and applicable regulations. For Wi-Fi, EIRP should remain within the permitted regulatory limits, while telecom networks may use higher EIRP values for wider coverage."
      }
    },
    {
      "@type": "Question",
      "name": "What is EIRP in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EIRP in dBm represents Effective Isotropic Radiated Power on a logarithmic scale. It combines transmitter power, antenna gain, cable loss, and other system losses."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate EIRP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EIRP (dBm) = Transmitter Power (dBm) + Antenna Gain (dBi) − Cable Loss (dB) − Other Losses (dB)."
      }
    },
    {
      "@type": "Question",
      "name": "Why is antenna gain added in EIRP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antenna gain focuses RF energy in a particular direction, increasing the effective radiated power compared with an isotropic antenna."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between ERP and EIRP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EIRP is referenced to an ideal isotropic antenna, while ERP is referenced to a half-wave dipole antenna. ERP is approximately 2.15 dB lower than EIRP for the same system."
      }
    }
  ]
}
</script>