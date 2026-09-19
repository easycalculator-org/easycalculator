---
layout: default
title: EIRP Calculator – Effective Isotropic Radiated Power (dBm & Watts)
permalink: /eirp-calculator
description: "Calculate EIRP instantly with our free online EIRP Calculator. Convert transmitter power, antenna gain, and cable loss into EIRP values in dBm"
image: "/assets/images/og/eirp-calculator.jpg"
last_modified_at: 2026-09-13
---
<style>
#ec-eirp{--eirp-blue:#2455cf;max-width:1100px;margin:auto;color:#243248}#ec-eirp .eirp-card{border:1px solid #dce5f2;border-radius:20px;background:#fff;box-shadow:0 8px 28px #2239620c}#ec-eirp .eirp-result{background:#eef4ff;border:1px solid #cfddfa;border-radius:16px}#ec-eirp .eirp-value{font-size:clamp(1.65rem,4vw,2.4rem);font-weight:700;color:var(--eirp-blue);overflow-wrap:anywhere}#ec-eirp .eirp-formula{background:#f5f7fb;padding:1rem;border-radius:8px;overflow-wrap:anywhere}#ec-eirp h2{font-size:1.5rem;margin-top:2rem}#ec-eirp h3{font-size:1.1rem}#ec-eirp .eirp-unit{max-width:105px}#ec-eirp input:focus,#ec-eirp select:focus,#ec-eirp button:focus-visible{outline:2px solid #2455cf;outline-offset:2px}#ec-eirp article{line-height:1.8}#ec-eirp details{padding:1rem;border:1px solid #dce5f2;border-radius:12px;margin-bottom:.75rem}#ec-eirp summary{font-weight:600;cursor:pointer}#ec-eirp details p{margin:.75rem 0 0}
</style>
<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">EIRP Calculator - Effective Isotropic Radiated Power </li>
  </ol>
</div>
<div id="ec-eirp">
<header class="mb-4"><h1>EIRP Calculator</h1><p class="text-secondary mb-0">Calculate effective isotropic radiated power in dBm and watts from transmitter power, antenna gain and feed losses. Compare EIRP with ERP and see each calculation step.</p></header>
<section class="eirp-card p-3 p-md-4" aria-label="EIRP calculation tool">
<form id="eirp-form" novalidate>
<div class="row g-4">
<div class="col-md-6"><label for="eirp-power" class="form-label fw-semibold">Transmitter power</label><div class="input-group"><input id="eirp-power" class="form-control" type="number" step="any" value="30" required aria-describedby="eirp-power-help"><select id="eirp-power-unit" class="form-select eirp-unit" aria-label="Transmitter power unit"><option>dBm</option><option>dBW</option><option>W</option><option>mW</option></select></div><div id="eirp-power-help" class="form-text">Power at the transmitter output, before the losses below. 30 dBm = 1 W.</div></div>
<div class="col-md-6"><label for="eirp-gain" class="form-label fw-semibold">Antenna gain</label><div class="input-group"><input id="eirp-gain" class="form-control" type="number" step="any" value="6" required aria-describedby="eirp-gain-help"><select id="eirp-gain-unit" class="form-select eirp-unit" aria-label="Antenna gain unit"><option>dBi</option><option>dBd</option></select></div><div id="eirp-gain-help" class="form-text">Use gain for your operating frequency. dBi = dBd + 2.15.</div></div>
<div class="col-md-6"><label for="eirp-cable" class="form-label fw-semibold">Cable / feeder loss (dB)</label><input id="eirp-cable" class="form-control" type="number" min="0" step="any" value="2" required><div class="form-text">Enter a positive loss or zero.</div></div>
<div class="col-md-6"><label for="eirp-other" class="form-label fw-semibold">Other feed losses (dB, optional)</label><input id="eirp-other" class="form-control" type="number" min="0" step="any" value="0"><div class="form-text">Connectors, splitters or filters; blank means zero. Exclude propagation loss.</div></div>
</div>
<div class="d-flex flex-wrap gap-2 mt-4"><button type="submit" class="btn btn-primary px-4">Calculate EIRP</button><button type="reset" class="btn btn-outline-secondary">Reset</button></div>
<p id="eirp-error" class="text-danger mt-3 mb-0" role="alert" hidden></p>
</form>
<noscript><p class="alert alert-info mt-3">Enable JavaScript to calculate your own values. The default example is 30 + 6 − 2 = 34 dBm, or about 2.51 W.</p></noscript>
<div id="eirp-results" class="eirp-result p-3 p-md-4 mt-4" role="status" aria-live="polite" aria-atomic="true">
<div class="row g-3"><div class="col-sm-6"><div class="small fw-semibold">EIRP (dBm)</div><div id="eirp-dbm" class="eirp-value">34 dBm</div></div><div class="col-sm-6"><div class="small fw-semibold">EIRP (watts)</div><div id="eirp-watts" class="eirp-value">2.51189 W</div></div></div>
<p id="eirp-erp" class="mt-3 mb-2">ERP: 31.85 dBm · 1.53109 W</p><p id="eirp-steps" class="mb-0 small">30 dBm + 6 dBi − 2 dB − 0 dB = 34 dBm</p>
</div>
</section>

<!-- Article Content -->
<div class="article-container">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include bahadur.html %}
   </div>
  <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
    <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
    <span><i class="fas fa-clock me-1" aria-hidden="true"></i>{% include reading-time.html %}</span>
   </div>
 </div>
<!-- Article-->
<h2>What is EIRP?</h2>
<p><strong>EIRP (effective isotropic radiated power)</strong>, also called equivalent isotropically radiated power, is the power an ideal isotropic antenna would need to produce the same power density as your antenna in a specified direction. Antenna specifications usually give maximum gain, so the result normally represents EIRP in the main beam.</p>
<p>EIRP is not the total power radiated in all directions. A directional antenna concentrates radiation; it does not create additional transmitter power. This is why a 1 W transmitter can have an EIRP greater than 1 W.</p>
<h2>EIRP formula</h2>
<p class="eirp-formula"><strong>EIRP (dBm) = P<sub>TX</sub> (dBm) + G (dBi) − L<sub>cable</sub> (dB) − L<sub>other</sub> (dB)</strong></p>
<p>Use transmitter power measured before the listed feed losses. If your power is already measured at the antenna input, do not subtract those same losses again.</p>
<ul><li>Power conversion: <strong>P (dBm) = 10 log<sub>10</sub>(P in watts) + 30</strong>.</li><li>Linear EIRP: <strong>EIRP (W) = 10<sup>(EIRP in dBm − 30) / 10</sup></strong>.</li><li>Equivalent linear formula: <strong>EIRP (W) = P<sub>TX</sub> (W) × 10<sup>(G − L<sub>cable</sub> − L<sub>other</sub>) / 10</sup></strong>, using gain in dBi and losses in dB.</li><li>Gain conversion: <strong>G (dBi) ≈ G (dBd) + 2.15</strong>.</li></ul>


<div class="my-5 text-center">
<img src="/assets/images/eirp-calculator.svg" alt="EIRP formula diagram showing transmitter power, antenna gain, cable loss, other losses and EIRP result" class="img-fluid rounded shadow">
</div>
<h2>How to use this EIRP calculator</h2>
<ol><li>Enter transmitter output power and select dBm, dBW, W or mW.</li><li>Enter antenna gain and choose dBi or dBd according to the antenna datasheet.</li><li>Enter cable loss and any additional feed losses as nonnegative dB values.</li><li>Select <strong>Calculate EIRP</strong> to see EIRP, ERP and the calculation steps. Changing inputs clears the previous result until you calculate again.</li></ol>
<p>Negative dBm values are valid: −10 dBm is 0.1 mW. Watts and milliwatts must be greater than zero. Changing a unit selects how the entered number is interpreted; it does not convert the input number.</p>
<h2 id="eirp-examples">EIRP calculation examples</h2>
<p>For a 30 dBm transmitter, 6 dBi antenna and 2 dB cable loss, with no other losses:</p>
<p class="eirp-formula"><strong>EIRP = 30 + 6 − 2 − 0 = 34 dBm<br>EIRP = 10<sup>(34 − 30) / 10</sup> ≈ 2.512 W</strong></p>
<div class="table-responsive"><table class="table table-bordered align-middle"><caption>Illustrative link inputs, not recommended operating powers or regulatory limits.</caption><thead class="table-light"><tr><th scope="col">TX power</th><th scope="col">Gain</th><th scope="col">Total feed loss</th><th scope="col">EIRP (dBm)</th><th scope="col">EIRP (W)</th></tr></thead><tbody><tr><td>20 dBm</td><td>5 dBi</td><td>1 dB</td><td>24</td><td>0.2512</td></tr><tr><td>30 dBm</td><td>6 dBi</td><td>2 dB</td><td>34</td><td>2.5119</td></tr><tr><td>40 dBm</td><td>17 dBi</td><td>3 dB</td><td>54</td><td>251.1886</td></tr><tr><td>1 W (30 dBm)</td><td>3 dBd (5.15 dBi)</td><td>1 dB</td><td>34.15</td><td>2.6002</td></tr></tbody></table></div>
<h2 id="eirp-vs-erp">EIRP vs ERP: what is the difference?</h2>
<p>EIRP uses an isotropic antenna as its reference. ERP (effective radiated power) uses a half-wave dipole. For the same system, EIRP is approximately 2.15 dB higher than ERP.</p>
<p class="eirp-formula"><strong>ERP (dBm) = EIRP (dBm) − 2.15<br>ERP (W) = EIRP (W) ÷ 10<sup>2.15 / 10</sup></strong></p>
<p>For the default example, 34 dBm EIRP corresponds to 31.85 dBm ERP, or about 1.531 W. Do not subtract 2.15 directly from a value in watts.</p>

<!-- FAQ Section -->
<section class="p-3"><h2 class="mb-4">FAQ on EIRP Calculator</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is a good EIRP value?</div><p class="mb-0">A good EIRP depends on the application. For Wi-Fi, it is usually below regulatory limits, while telecom networks use higher values for better coverage.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is EIRP in dBm?</div><p class="mb-0">EIRP in dBm represents the effective radiated power in logarithmic scale, combining transmitter power, antenna gain, and losses.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do you calculate EIRP?</div><p class="mb-0">EIRP=Transmitter Power (dBm) + Antenna Gain (dBi) − Cable Loss (dB) − Other Losses (dB).</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Why is antenna gain added in EIRP?</div><p class="mb-0">Antenna gain focuses energy in a direction, increasing effective radiated power compared to an isotropic antenna.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is difference between ERP and EIRP?</div><p class="mb-0">EIRP is referenced to an isotropic antenna, while ERP is referenced to a dipole antenna (ERP is ~2.15 dB lower than EIRP).</p></div></div></section>
 <!-- Did You Know? -->
 {% include rf.html %}
</div>

<script src="{{ '/assets/js/rf/eirp-calculator.js' | relative_url }}"></script>


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

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://easycalculator.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "RF calculators",
      "item": "https://easycalculator.org/rf-calculator"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "EIRP calculator",
      "item": "https://easycalculator.org/eirp-calculator"
    }
  ]
}
</script>