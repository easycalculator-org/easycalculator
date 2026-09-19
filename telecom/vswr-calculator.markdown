---
layout: default
title: VSWR Calculator - Formula, Return Loss & Reflection Coefficient
permalink: /vswr-calculator
description: "Use our free VSWR Calculator to calculate Voltage Standing Wave Ratio from VSWR, return loss, or reflection coefficient. Get reflected power, mismatch loss, formulas, and RF examples."
image: "/assets/images/vswr-calculation-infographic.jpg"
last_modified_at: 2026-09-20
---

<style>
#ec-vswr{--ec-blue:#2355ce;--ec-ink:#172b4d;--ec-muted:#52627a;color:var(--ec-ink);max-width:1120px;margin:0 auto;padding:20px 12px;font-family:inherit;line-height:1.65}
#ec-vswr *{box-sizing:border-box}#ec-vswr [hidden]{display:none!important}#ec-vswr a{color:var(--ec-blue)}#ec-vswr h1{font-size:clamp(1.8rem,4vw,2.6rem);line-height:1.2;margin:12px 0}#ec-vswr h2{font-size:1.5rem;line-height:1.35;margin:0 0 16px}#ec-vswr h3{font-size:1.1rem}#ec-vswr p{margin:0 0 16px}#ec-vswr .ec-muted{color:var(--ec-muted)}#ec-vswr .ec-hero{padding:12px 0 24px;max-width:850px}#ec-vswr .ec-eyebrow{text-transform:uppercase;font-weight:700;letter-spacing:.1em;font-size:.75rem;color:var(--ec-blue)}#ec-vswr .ec-crumbs{font-size:.85rem;margin-bottom:16px}#ec-vswr .ec-shell{border:1px solid #dce4f0;border-radius:22px;background:#fff;box-shadow:0 12px 36px #172b4d0d;overflow:hidden}#ec-vswr .ec-workspace{display:grid;grid-template-columns:1fr 1.15fr}#ec-vswr .ec-inputs{padding:28px}#ec-vswr .ec-results{background:#f1f6ff;padding:28px;border-left:1px solid #dce4f0}#ec-vswr .ec-modes{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}#ec-vswr button{font:inherit;cursor:pointer}#ec-vswr .ec-mode,#ec-vswr .ec-preset,#ec-vswr .ec-btn{border:1px solid #b9c8df;border-radius:9px;background:#fff;color:#203d67;padding:9px 13px;min-height:44px;font-weight:600}#ec-vswr .ec-mode[aria-pressed=true],#ec-vswr .ec-primary{background:var(--ec-blue);border-color:var(--ec-blue);color:#fff}#ec-vswr :focus-visible{outline:3px solid #bf6b00;outline-offset:3px}#ec-vswr label{display:block;font-weight:600;margin-bottom:7px}#ec-vswr input{width:100%;min-height:48px;border:1px solid #9dacc3;border-radius:9px;padding:10px 12px;font:inherit;background:white;color:var(--ec-ink)}#ec-vswr input[aria-invalid=true]{border-color:#ad2532}#ec-vswr .ec-field{margin:0 0 18px}#ec-vswr .ec-help{font-size:.83rem;color:var(--ec-muted);margin:6px 0 0}#ec-vswr .ec-actions,#ec-vswr .ec-presets{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}#ec-vswr .ec-error{color:#9b202d;background:#fff0f1;padding:12px;border-radius:8px}#ec-vswr .ec-big{font-size:2.7rem;font-weight:750;line-height:1.25;margin:8px 0 20px;overflow-wrap:anywhere}#ec-vswr .ec-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0 0 18px}#ec-vswr .ec-stat{background:#fff;border:1px solid #dbe5f5;border-radius:12px;padding:14px;min-width:0}#ec-vswr dt{font-size:.78rem;color:#52627a}#ec-vswr dd{font-size:1.35rem;font-weight:700;line-height:1.5;margin:4px 0 0;overflow-wrap:anywhere}#ec-vswr .ec-bar{height:12px;border-radius:20px;background:#ad3549;overflow:hidden;margin-bottom:8px}#ec-vswr .ec-bar span{display:block;height:100%;background:#16786f;width:100%}#ec-vswr .ec-note{padding:18px 28px;border-top:1px solid #dce4f0;font-size:.85rem;background:#fbfcfe}#ec-vswr .ec-links{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}#ec-vswr article{max-width:940px;margin:38px auto 0}#ec-vswr article section{margin:32px 0}#ec-vswr .ec-byline{display:flex;gap:12px;flex-wrap:wrap;border-bottom:1px solid #dce4f0;padding-bottom:16px;font-size:.85rem}#ec-vswr .ec-callout{padding:20px;background:#f1f6ff;border-radius:8px}#ec-vswr .ec-table-wrap{overflow-x:auto}#ec-vswr table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums;font-size:.9rem}#ec-vswr caption{text-align:left;color:#52627a;padding:8px 0;caption-side:bottom}#ec-vswr th,#ec-vswr td{padding:11px 14px;border-bottom:1px solid #dce4f0;text-align:left;white-space:nowrap}#ec-vswr th{background:#eef3fb}#ec-vswr .ec-formula{font-family:ui-monospace,monospace;background:#f3f5f8;border-radius:8px;padding:12px;overflow-wrap:anywhere}#ec-vswr details{border:1px solid #dce4f0;border-radius:10px;padding:16px;margin:10px 0}#ec-vswr summary{cursor:pointer;font-weight:650}#ec-vswr details p{margin:12px 0 0}#ec-vswr .ec-two{display:grid;grid-template-columns:1fr 1fr;gap:20px}#ec-vswr button:disabled{opacity:.5;cursor:not-allowed}
@media(max-width:760px){#ec-vswr .ec-workspace,#ec-vswr .ec-two{grid-template-columns:1fr}#ec-vswr .ec-results{border-left:0;border-top:1px solid #dce4f0}#ec-vswr .ec-inputs,#ec-vswr .ec-results{padding:20px}#ec-vswr .ec-note{padding:16px 20px}}
@media print{#ec-vswr .ec-inputs,#ec-vswr .ec-actions,#ec-vswr .ec-links{display:none}#ec-vswr .ec-workspace{display:block}#ec-vswr .ec-shell{box-shadow:none}#ec-vswr details{break-inside:avoid}}
</style>
 <div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">VSWR Calculator </li>
  </ol>
</div>
<!-- calc -->

<div id="ec-vswr">
<header class="ec-hero">
<h1>VSWR Calculator</h1>
<p class="ec-muted">Convert VSWR, return loss, S11 and reflection coefficient. Calculate reflected power, accepted power and mismatch loss, or find SWR from forward and reflected power.</p>
</header>
<section class="ec-shell" aria-label="VSWR conversion calculator">
<div class="ec-workspace"><div class="ec-inputs"><h2>Choose your input</h2>
<div class="ec-modes" role="group" aria-label="Calculation input type">
<button type="button" class="ec-mode" data-mode="vswr" aria-pressed="true">VSWR</button>
<button type="button" class="ec-mode" data-mode="rl" aria-pressed="false">Return loss</button>
<button type="button" class="ec-mode" data-mode="s11" aria-pressed="false">S11 (dB)</button>
<button type="button" class="ec-mode" data-mode="gamma" aria-pressed="false">Reflection |Γ|</button>
<button type="button" class="ec-mode" data-mode="power" aria-pressed="false">Power (W)</button>
<button type="button" class="ec-mode" data-mode="voltage" aria-pressed="false">Vmax / Vmin</button>
</div>
<form id="ec-vswr-form" novalidate>
<div class="ec-field"><label for="ec-input-a" id="ec-label-a">VSWR (ratio to 1)</label><input id="ec-input-a" type="number" inputmode="decimal" step="any" min="1" value="1.5" required aria-describedby="ec-input-help ec-error"><p id="ec-input-help" class="ec-help">Enter a value of 1 or greater. For 1.5:1, enter 1.5.</p></div>
<div class="ec-field" id="ec-second" hidden><label for="ec-input-b" id="ec-label-b">Reflected power (W)</label><input id="ec-input-b" type="number" inputmode="decimal" step="any" min="0" value="4" disabled aria-describedby="ec-error"></div>
<div class="ec-actions"><button class="ec-btn ec-primary" type="submit">Calculate</button><button class="ec-btn" type="button" id="ec-reset">Reset</button></div>
<p class="ec-error" id="ec-error" role="alert" hidden></p>
</form>
<div class="ec-presets" role="group" aria-label="VSWR examples"><button type="button" class="ec-preset" data-vswr="1">1:1</button><button type="button" class="ec-preset" data-vswr="1.5">1.5:1</button><button type="button" class="ec-preset" data-vswr="2">2:1</button><button type="button" class="ec-preset" data-vswr="3">3:1</button></div>
<p class="ec-help">Example buttons switch to VSWR input. Results use full precision internally and are rounded for display.</p>
</div>
<div class="ec-results" aria-live="polite" aria-atomic="true"><div id="ec-result-content" hidden><span class="ec-eyebrow">Calculated result</span><div class="ec-big" id="ec-out-vswr">—</div><dl class="ec-stats">
<div class="ec-stat"><dt>Return loss</dt><dd id="ec-out-rl">—</dd></div><div class="ec-stat"><dt>Reflection magnitude |Γ|</dt><dd id="ec-out-gamma">—</dd></div>
<div class="ec-stat"><dt>Reflected power</dt><dd id="ec-out-reflected">—</dd></div><div class="ec-stat"><dt>Accepted power</dt><dd id="ec-out-accepted">—</dd></div>
<div class="ec-stat"><dt>Mismatch loss</dt><dd id="ec-out-ml">—</dd></div><div class="ec-stat"><dt>S11 magnitude in dB</dt><dd id="ec-out-s11">—</dd></div></dl>
<div class="ec-bar" aria-hidden="true"><span id="ec-power-bar"></span></div><p class="ec-help" id="ec-power-text"></p><p id="ec-interpretation" class="ec-help"></p><p id="ec-worked" class="ec-formula"></p>
</div><p id="ec-empty">Enter values and select Calculate to see your results.</p><div class="ec-actions"><button class="ec-btn" type="button" id="ec-download" disabled>Download results CSV</button></div></div></div>
<div class="ec-note">Model: passive load, real reference impedance, and forward/reflected measurements at the same reference plane. Accepted power is the portion not reflected at that plane; it is <strong>not antenna radiation efficiency</strong> and excludes downstream cable and dissipative losses.</div>
</section>

<!-- Article -->
<div class="article-container">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
   <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include bahadur.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>7 min read</span>
    </div>
  </div>
 <!-- Article-->
<section><h2>What is VSWR?</h2><p><strong>VSWR stands for Voltage Standing Wave Ratio.</strong> It is the ratio of the maximum to the minimum voltage amplitude in a standing wave on a transmission line. Reflections from an impedance mismatch create these voltage peaks and valleys. SWR is often used as shorthand for VSWR in antenna work.</p><p>A VSWR of <strong>1:1</strong> means no reflection at the measurement plane. A higher VSWR means more reflected power. It does not by itself describe antenna gain, radiation efficiency or coverage.</p>
<figure class="my-4 text-center"><img src="/assets/images/vswr-calculation-infographic.jpg" alt="Illustrative VSWR signal example" class="img-fluid d-block mx-auto rounded" style="max-width:100%;height:auto;" loading="lazy" decoding="async" ><figcaption class="small text-muted mt-2">Illustrative VSWR signal example. </figcaption></figure>
</section>
<section><h2>How to use this VSWR calculator</h2><ol><li>Select the quantity you know: VSWR, return loss, S11, reflection magnitude, power or standing-wave voltages.</li><li>Enter your value. Use positive dB for return loss and zero or negative dB for S11.</li><li>Select <strong>Calculate</strong> to see all conversions. For power mode, enter forward and reflected power in watts at the same measurement plane.</li><li>Use the example buttons or download the calculated results as CSV.</li></ol></section>
<section id="vswr-formula"><h2>VSWR formula and related equations</h2><p>Let ρ = |Γ| be the magnitude of the voltage reflection coefficient. For a passive load with a real reference impedance, 0 ≤ ρ ≤ 1.</p>
<div class="ec-table-wrap"><table><thead><tr><th scope="col">Quantity</th><th scope="col">Formula</th></tr></thead><tbody>
<tr><td>VSWR from reflection coefficient</td><td>VSWR = (1 + ρ) / (1 − ρ)</td></tr><tr><td>Reflection magnitude from VSWR</td><td>ρ = (VSWR − 1) / (VSWR + 1)</td></tr><tr><td>Return loss in dB</td><td>RL = −20 log₁₀(ρ)</td></tr><tr><td>Return loss to reflection magnitude</td><td>ρ = 10<sup>−RL/20</sup></td></tr><tr><td>S11 magnitude in dB</td><td>S11(dB) = 20 log₁₀(ρ) = −RL</td></tr><tr><td>Reflected power percentage</td><td>100 × ρ²</td></tr><tr><td>Accepted power percentage</td><td>100 × (1 − ρ²)</td></tr><tr><td>Mismatch loss in dB</td><td>ML = −10 log₁₀(1 − ρ²)</td></tr><tr><td>Standing-wave voltage ratio</td><td>VSWR = Vmax / Vmin</td></tr><tr><td>Reflection magnitude from power</td><td>ρ = √(Pr / Pf)</td></tr></tbody></table></div>
<p>Pf is forward power and Pr is reflected power. Use the same units and measurement plane for both. Vmax and Vmin are the standing-wave maximum and minimum amplitudes, not the incident and reflected wave amplitudes.</p>
<h3>VSWR from impedance</h3><p class="ec-formula">Γ = (ZL − Z0) / (ZL + Z0)</p><p>ZL is the load impedance and Z0 is the real characteristic impedance of the line. For a complex load, calculate the complex Γ and use its magnitude in the VSWR formula. VSWR alone cannot determine a unique load impedance because reflection phase is unknown.</p></section>
<section><h2>Return loss to VSWR calculator</h2><p>Choose <strong>Return loss</strong> above to convert a positive return-loss value in dB into VSWR. For example, 10 dB return loss gives ρ ≈ 0.31623 and VSWR ≈ <strong>1.925:1</strong>. Exactly 10% of incident power is reflected.</p><p class="ec-formula">VSWR = (1 + 10<sup>−RL/20</sup>) / (1 − 10<sup>−RL/20</sup>)</p><p>Lower VSWR and higher positive return loss both indicate a better impedance match. Return loss is not the same as insertion loss or mismatch loss.</p></section>
<section id="vswr-chart"><h2>VSWR to return loss conversion chart</h2><p>Use this table to compare common VSWR values with return loss, reflected power and mismatch loss.</p><div class="ec-table-wrap"><table><caption>Values rounded to two decimal places; ∞ denotes an ideal mathematical limit.</caption><thead><tr><th scope="col">VSWR</th><th scope="col">Return loss (dB)</th><th scope="col">Reflected (%)</th><th scope="col">Mismatch loss (dB)</th></tr></thead><tbody><tr><th scope="row">1:1</th><td>∞</td><td>0.00</td><td>-0.00</td></tr>
<tr><th scope="row">1.1:1</th><td>26.44</td><td>0.23</td><td>0.01</td></tr>
<tr><th scope="row">1.15:1</th><td>23.13</td><td>0.49</td><td>0.02</td></tr>
<tr><th scope="row">1.2:1</th><td>20.83</td><td>0.83</td><td>0.04</td></tr>
<tr><th scope="row">1.3:1</th><td>17.69</td><td>1.70</td><td>0.07</td></tr>
<tr><th scope="row">1.4:1</th><td>15.56</td><td>2.78</td><td>0.12</td></tr>
<tr><th scope="row">1.5:1</th><td>13.98</td><td>4.00</td><td>0.18</td></tr>
<tr><th scope="row">1.7:1</th><td>11.73</td><td>6.72</td><td>0.30</td></tr>
<tr><th scope="row">2:1</th><td>9.54</td><td>11.11</td><td>0.51</td></tr>
<tr><th scope="row">2.5:1</th><td>7.36</td><td>18.37</td><td>0.88</td></tr>
<tr><th scope="row">3:1</th><td>6.02</td><td>25.00</td><td>1.25</td></tr>
<tr><th scope="row">3.5:1</th><td>5.11</td><td>30.86</td><td>1.60</td></tr>
<tr><th scope="row">4:1</th><td>4.44</td><td>36.00</td><td>1.94</td></tr>
<tr><th scope="row">5:1</th><td>3.52</td><td>44.44</td><td>2.55</td></tr>
<tr><th scope="row">10:1</th><td>1.74</td><td>66.94</td><td>4.81</td></tr></tbody></table></div></section>
<section id="vswr-examples"><h2>VSWR calculation examples</h2><div class="ec-two"><div><h3>1. VSWR 1.5:1</h3><p>ρ = (1.5 − 1) / (1.5 + 1) = 0.2. Reflected power is 0.2² × 100 = <strong>4%</strong>; return loss is <strong>13.98 dB</strong>. With 100 W forward power, 4 W is reflected and 96 W is accepted at that plane.</p></div><div><h3>2. VSWR 2:1 in dB</h3><p>A 2:1 VSWR gives ρ = 1/3, return loss <strong>9.54 dB</strong> and S11 <strong>−9.54 dB</strong>. Mismatch loss is <strong>0.51 dB</strong>. Specify which dB quantity you mean because these values describe different things.</p></div><div><h3>3. Forward and reflected power</h3><p>For Pf = 100 W and Pr = 25 W, ρ = √(25/100) = 0.5. VSWR = 1.5/0.5 = <strong>3:1</strong>. Accepted power is 75 W, and mismatch loss is about 1.25 dB.</p></div><div><h3>4. Maximum and minimum voltage</h3><p>If Vmax = 5 V and Vmin = 2 V, VSWR = 5/2 = <strong>2.5:1</strong>. Return loss is approximately 7.36 dB and reflected power is 18.37%.</p></div></div><p class="ec-callout"><strong>Common percentage checks:</strong> 1.4:1 reflects 2.78%, 1.7:1 reflects 6.72%, 4:1 reflects 36%, and 5:1 reflects 44.44%. Square the reflection magnitude to calculate the power fraction.</p></section>
<section><h2>What is a good VSWR?</h2><p>A perfect match is 1:1. A 1.5:1 match reflects 4% of incident power, while 2:1 reflects 11.11%. Whether either value is acceptable depends on the antenna specification, operating frequency, transmitter limits and project acceptance criteria. There is no universal pass/fail threshold for every RF system.</p><p>A low VSWR does not prove that an antenna radiates efficiently. A matched dummy load can have low VSWR while turning accepted RF power into heat. Lossy feeder cable can also make the input match appear better than the match at the antenna.</p><h3>Causes of high VSWR and practical checks</h3><p>Possible causes include damaged feeders, loose or poorly fitted connectors, water ingress, the wrong antenna band, and nearby objects changing antenna impedance. Check the specified operating band and component impedance, inspect connections, and measure across the operating band with calibrated equipment at a documented reference plane. Follow the equipment's RF shutdown and test procedures.</p></section>
<!-- FAQ Section -->
<section class="p-3 p-md-4" aria-labelledby="vswr-faq-heading"><h2 class="mb-4">Frequently Asked Questions About VSWR</h2><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">What is the full form of VSWR?</h3><p class="mb-0">VSWR stands for Voltage Standing Wave Ratio. In antenna work, SWR often refers to the same voltage standing-wave ratio.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">How do I convert return loss to VSWR?</h3><p class="mb-0">Calculate ρ=10<sup>−RL/20</sup>, then VSWR=(1 + ρ) / (1 − ρ), where RL is return loss in dB. A return loss of 10 dB corresponds to approximately <strong>1.925:1 VSWR</strong>.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">What is 1.5:1 VSWR in return loss?</h3><p class="mb-0">A VSWR of 1.5:1 corresponds to <strong>13.98 dB return loss</strong>, a reflection coefficient magnitude of 0.2 and 4% reflected power.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">What is 2:1 VSWR in dB?</h3><p class="mb-0">A 2:1 VSWR corresponds to <strong>9.54 dB return loss</strong>, −9.54 dB S<sub>11</sub>magnitude and 0.51 dB mismatch loss. VSWR itself is a ratio.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">Can VSWR be less than 1?</h3><p class="mb-0">For the passive-load model used here, VSWR cannot be less than 1. Write a VSWR of 1.5 as <strong>1.5:1</strong>, not 1:1.5.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">What happens at VSWR 1:1 or total reflection?</h3><p class="mb-0">At 1:1, reflected power is zero and return loss is ideally infinite. At total reflection, |Γ|=1, reflected power is 100%, return loss is 0 dB and VSWR tends to infinity.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">Is accepted power the same as antenna efficiency?</h3><p class="mb-0">No. Accepted power is incident power minus reflected power at the reference plane. Antenna radiation efficiency is the fraction of accepted power that is radiated. It depends on dissipative losses and cannot be calculated from VSWR alone.</p></div></div><div class="card mb-0 border-0 bg-light"><div class="card-body"><h3 class="h6 fw-bold text-primary mb-2">Can I calculate VSWR from S11?</h3><p class="mb-0">Yes. For S<sub>11</sub>magnitude expressed in dB, use |Γ|=10<sup>S<sub>11</sub>(dB)/20</sup>, then VSWR=(1 + |Γ|) / (1 − |Γ|). Enter zero or negative S<sub>11</sub>dB values for this passive-load model.</p></div></div></section>

 {% include rf.html %}
 </div>


<script src="{{ '/assets/js/rf/vswr-calc.js' | relative_url }}"></script>

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
      "name": "VSWR Calculator",
      "item": "https://easycalculator.org/vswr-calculator"
    }
  ]
}
</script>