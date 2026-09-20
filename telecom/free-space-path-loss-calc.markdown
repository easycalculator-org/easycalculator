---
layout: default
title: Free Space Path Loss Calculator (FSPL) | Formula & Example
permalink: /free-space-path-loss-calculator
description: "Calculate Free Space Path Loss (FSPL) in dB using frequency and distance. Includes formula, example, and RF planning guide for telecom networks."
image: "/assets/images/og/free-space-path-loss-calculator.jpg"
last_modified_at: 2026-09-20
---
<style>
.ec-fspl{--fp-blue:#2454bc;--fp-ink:#172b4d;--fp-muted:#53647b;max-width:1080px;margin:24px auto 40px;padding:0 16px;color:var(--fp-ink);line-height:1.65}
.ec-fspl *{box-sizing:border-box}.ec-fspl [hidden]{display:none!important}.ec-fspl a{color:#214faf}.ec-fspl h1{font-size:clamp(1.7rem,4vw,2.3rem);line-height:1.2;margin:6px 0 12px}.ec-fspl h2{font-size:1.5rem;line-height:1.3;margin:0 0 16px}.ec-fspl h3{font-size:1.1rem;line-height:1.4}.ec-fspl p{margin:0 0 16px}.ec-fspl .fp-muted{color:var(--fp-muted)}
.ec-fspl .fp-crumbs{font-size:.875rem;margin-bottom:18px}.ec-fspl .fp-panel{background:linear-gradient(135deg,#eef5ff,#fff);border:1px solid #d9e5f5;border-radius:22px;padding:clamp(18px,3vw,30px);box-shadow:0 12px 32px #16345d0a}.ec-fspl .fp-kicker{color:var(--fp-blue);font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.ec-fspl .fp-layout{display:grid;grid-template-columns:1.15fr 1fr;gap:24px;margin-top:24px}.ec-fspl .fp-fields{display:grid;grid-template-columns:1fr 1fr;gap:18px}.ec-fspl label{display:block;font-weight:600;margin-bottom:7px}.ec-fspl .fp-input-group{display:flex;gap:8px}.ec-fspl input,.ec-fspl select{font:inherit;color:var(--fp-ink);background:#fff;border:1px solid #aabbd1;border-radius:9px;padding:10px;min-width:0;width:100%;height:48px}.ec-fspl select{width:95px;flex-shrink:0}.ec-fspl input:focus-visible,.ec-fspl select:focus-visible,.ec-fspl button:focus-visible,.ec-fspl summary:focus-visible,.ec-fspl a:focus-visible{outline:3px solid #eaaa23;outline-offset:3px}.ec-fspl button{font:inherit;cursor:pointer;min-height:44px;border-radius:9px;padding:9px 16px;font-weight:600;border:1px solid #b7c8df;background:#fff;color:#214faf}.ec-fspl button:hover{background:#edf3ff}.ec-fspl .fp-primary{background:var(--fp-blue);border-color:var(--fp-blue);color:#fff}.ec-fspl .fp-primary:hover{background:#193d8e}.ec-fspl button:disabled{opacity:.5;cursor:default}.ec-fspl .fp-actions,.ec-fspl .fp-presets{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.ec-fspl .fp-presets button{font-size:.8rem;padding:6px 10px}.ec-fspl .fp-presets span{width:100%;font-size:.85rem;color:var(--fp-muted)}
.ec-fspl details{border:1px solid #d9e5f5;border-radius:12px;padding:14px 16px;background:#fff;margin-top:20px}.ec-fspl summary{font-weight:600;cursor:pointer}.ec-fspl details .fp-fields{margin-top:16px}.ec-fspl .fp-result{background:#fff;border:1px solid #d9e5f5;border-radius:16px;padding:22px;align-self:start}.ec-fspl .fp-value{display:block;font-size:clamp(2.4rem,6vw,3.4rem);font-weight:700;letter-spacing:-.04em;color:#173f95;line-height:1.25;margin:6px 0}.ec-fspl .fp-value small{font-size:1.1rem;letter-spacing:0}.ec-fspl .fp-secondary{border-top:1px solid #e1e8f2;margin-top:20px;padding-top:16px}.ec-fspl .fp-secondary strong{display:block;font-size:1.6rem}.ec-fspl .fp-step{font-size:.85rem;background:#f3f6fb;padding:12px;border-radius:8px;overflow-wrap:anywhere}.ec-fspl .fp-error{color:#9b2222;background:#fff1f1;padding:12px;border-radius:8px;margin-top:16px}.ec-fspl .fp-note{font-size:.875rem;background:#fff7e4;border-left:3px solid #c78a12;padding:12px;margin-top:16px}.ec-fspl .fp-article{margin-top:32px}.ec-fspl .fp-meta{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;border-bottom:1px solid #d9e5f5;padding-bottom:20px;margin-bottom:24px;font-size:.85rem}.ec-fspl .fp-authors{display:flex;gap:16px;flex-wrap:wrap}.ec-fspl .fp-toc{display:flex;gap:10px 20px;flex-wrap:wrap;margin:20px 0 30px}.ec-fspl section{scroll-margin-top:24px}.ec-fspl .fp-article section{margin-bottom:36px}.ec-fspl .fp-formula{padding:18px;background:#edf4ff;border:1px solid #d9e5f5;border-radius:12px;margin:16px 0;overflow-wrap:anywhere}.ec-fspl .fp-scroll{overflow-x:auto;border:1px solid #d9e5f5;border-radius:12px;margin:16px 0}.ec-fspl table{border-collapse:collapse;width:100%;font-size:.9rem;white-space:nowrap}.ec-fspl caption{text-align:left;color:var(--fp-muted);padding:12px;caption-side:top}.ec-fspl th,.ec-fspl td{padding:12px 14px;text-align:right;border-bottom:1px solid #e1e8f2}.ec-fspl th:first-child,.ec-fspl td:first-child{text-align:left}.ec-fspl thead{background:#edf4ff}.ec-fspl tbody tr:nth-child(even){background:#f8faff}.ec-fspl .fp-image{max-width:800px;width:100%;height:auto;display:block;margin:auto}.ec-fspl figcaption{text-align:center;font-size:.85rem;color:var(--fp-muted);margin-top:10px}.ec-fspl .fp-faq{padding:18px;background:#f6f8fc;border-radius:12px;margin-bottom:12px}.ec-fspl .fp-faq p{margin-bottom:0}.ec-fspl .fp-related{display:flex;gap:10px;flex-wrap:wrap}.ec-fspl .fp-related a{padding:10px 14px;border:1px solid #d9e5f5;border-radius:10px}
@media(max-width:760px){.ec-fspl .fp-layout{grid-template-columns:1fr}.ec-fspl .fp-fields{gap:14px}.ec-fspl .fp-input-group{gap:4px}.ec-fspl select{width:78px}.ec-fspl .fp-panel{padding:18px}}@media(max-width:420px){.ec-fspl .fp-fields{grid-template-columns:1fr}.ec-fspl .fp-actions button{flex:1}.ec-fspl .fp-value{font-size:2.7rem}}
</style>
<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
  <li class="breadcrumb-item active" aria-current="page">Free Space Path Loss Calculator</li>
 </ol>
</div>

<div class="ec-fspl" id="fspl-calculator">
<div class="fp-panel">
<div class="fp-kicker">RF planning • Free-space propagation</div>
<h1>Free Space Path Loss (FSPL) Calculator</h1>
<p class="fp-muted">Calculate ideal radio path loss from distance and frequency. Add transmitter power, antenna gains and system losses to estimate received power.</p>
<div class="fp-layout">
<form id="fp-form" novalidate>
<div class="fp-fields">
<div><label for="fp-distance">Distance</label><div class="fp-input-group"><input id="fp-distance" type="number" step="any" value="5" inputmode="decimal" required><select id="fp-distance-unit" aria-label="Distance unit"><option value="1000">km</option><option value="1">m</option><option value="1609.344">mi</option><option value="1852">nmi</option><option value="0.3048">ft</option></select></div></div>
<div><label for="fp-frequency">Frequency</label><div class="fp-input-group"><input id="fp-frequency" type="number" step="any" value="2400" inputmode="decimal" required><select id="fp-frequency-unit" aria-label="Frequency unit"><option value="1000000">MHz</option><option value="1000000000">GHz</option><option value="1000">kHz</option><option value="1">Hz</option></select></div></div>
</div>
<div class="fp-presets"><span>Try an example (distance and frequency only)</span><button type="button" data-distance="0.1" data-frequency="2400">Wi-Fi · 100 m</button><button type="button" data-distance="1" data-frequency="900">900 MHz · 1 km</button><button type="button" data-distance="5" data-frequency="3500">3.5 GHz · 5 km</button></div>
<details><summary>Received power settings</summary><p class="fp-muted" style="margin-top:10px;font-size:.85rem">These settings affect received power only. Defaults: 0 dBm TX, 2 dBi gain at each antenna and no additional losses.</p><div class="fp-fields">
<div><label for="fp-tx">TX power (dBm)</label><input id="fp-tx" type="number" step="any" value="0" required></div>
<div><label for="fp-loss">Other losses (dB)</label><input id="fp-loss" type="number" step="any" min="0" value="0" required></div>
<div><label for="fp-tx-gain">TX antenna gain (dBi)</label><input id="fp-tx-gain" type="number" step="any" value="2" required></div>
<div><label for="fp-rx-gain">RX antenna gain (dBi)</label><input id="fp-rx-gain" type="number" step="any" value="2" required></div>
</div><p class="fp-muted" style="margin-top:12px;font-size:.85rem">Other losses are the combined cable, connector and additional losses you choose to include. Enter conducted TX power, not EIRP, to avoid counting TX gain twice.</p></details>
<div class="fp-actions"><button type="submit" class="fp-primary">Calculate FSPL</button><button type="reset">Reset</button></div>
<div id="fp-error" class="fp-error" role="alert" hidden></div>
<noscript><p class="fp-note">Enable JavaScript to use the calculator. The formulas and reference table below remain available.</p></noscript>
</form>
<div class="fp-result">
<div aria-live="polite" aria-atomic="true">
<div class="fp-kicker">Free space path loss</div><output class="fp-value" id="fp-fspl">—</output><p class="fp-muted" id="fp-context">Enter distance and frequency to calculate.</p>
<div class="fp-step" id="fp-steps">FSPL = 20 log₁₀(4πdf/c)</div>
<div class="fp-secondary"><span class="fp-muted">Estimated received power</span><strong id="fp-rx">—</strong><span class="fp-muted" style="font-size:.85rem" id="fp-rx-steps">TX power + TX gain + RX gain − FSPL − other losses</span></div>
</div>
<div id="fp-warning" class="fp-note" hidden></div>
<button id="fp-download" type="button" style="margin-top:18px" disabled>Download results (CSV)</button>
<p class="fp-muted" style="font-size:.8rem;margin-top:14px;margin-bottom:0">Ideal free-space, far-field estimate. This result does not establish coverage or link reliability.</p>
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
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>8 min read</span>
    </div>
  </div>

<nav class="fp-toc" aria-label="On this page"><a href="#fspl-formula">Formula &amp; units</a><a href="#fspl-example">Worked example</a><a href="#fspl-table">Reference table</a><a href="#fspl-limits">Model limitations</a><a href="#fspl-faq">FAQs</a></nav>
<section id="fspl-intro"><h2>What is free space path loss?</h2><p>Free space path loss (FSPL), also called free space loss (FSL), describes the reduction in received power between ideal isotropic antennas as radio waves spread through unobstructed space. It is a baseline for Wi-Fi, cellular, microwave and satellite link calculations. It does not include antenna gains or environmental losses.</p><p>This free space path loss calculator converts your distance and frequency units automatically. Select a preset or enter positive values, then choose <strong>Calculate FSPL</strong>. Open <strong>Received power settings</strong> to account for transmitter power, both antenna gains and additional losses.</p></section>
<section id="fspl-formula"><h2>Free space path loss formula and equation</h2><div class="fp-formula"><strong>FSPL (dB) = 20 log₁₀(4πdf/c)</strong><br>d = distance in meters; f = frequency in Hz; c = 299,792,458 m/s.</div><p>For the units most often used in telecom planning:</p><div class="fp-formula"><strong>FSPL (dB) ≈ 20 log₁₀(d in km) + 20 log₁₀(f in MHz) + 32.45</strong></div><p>The commonly used constant <strong>32.44</strong> is a slightly different approximation. This calculator uses the exact speed of light throughout, giving a km/MHz constant of about 32.4478. Small differences of around 0.01 dB from rounded formulas are expected.</p>
<h3>FSPL formula constants for meters, kilometers, MHz and GHz</h3><p>In the equation <strong>20 log₁₀(d) + 20 log₁₀(f) + K</strong>, select the constant for <em>both</em> units:</p><div class="fp-scroll" tabindex="0" role="region" aria-label="Formula units table"><table><thead><tr><th scope="col">Distance</th><th scope="col">Frequency</th><th scope="col">K (dB)</th></tr></thead><tbody><tr><td>km</td><td>MHz</td><td>+32.45</td></tr><tr><td>km</td><td>GHz</td><td>+92.45</td></tr><tr><td>m</td><td>MHz</td><td>−27.55</td></tr><tr><td>m</td><td>GHz</td><td>+32.45</td></tr><tr><td>m</td><td>Hz</td><td>−147.55</td></tr></tbody></table></div><p>For example, 1 km at 2400 MHz is the same input as 1000 m at 2.4 GHz. Using a km/MHz constant with meters introduces a 60 dB error.</p>
<figure><img class="fp-image" src="/assets/images/free-space-path-loss-calculator.svg" alt="Free space path loss diagram showing transmitter, receiver, distance and frequency" width="800" height="450" loading="lazy" decoding="async"><figcaption>Distance and frequency determine FSPL; antenna gains are handled separately.</figcaption></figure>
<h3>Linear free space loss and wavelength</h3><p>The linear power-loss ratio is <strong>L = (4πd/λ)²</strong>, where wavelength <strong>λ = c/f</strong>. Convert this ratio to decibels using <strong>FSPL = 10 log₁₀(L)</strong>. Use the <a href="/frequency-to-wavelength-calculator">frequency to wavelength calculator</a> to convert between frequency and wavelength.</p></section>
<section id="fspl-example"><h2>FSPL example: 2.4 GHz over 5 km</h2><p>For a 5 km free-space path at 2400 MHz:</p><div class="fp-formula">FSPL ≈ 20 log₁₀(5) + 20 log₁₀(2400) + 32.4478<br>= 13.9794 + 67.6042 + 32.4478<br><strong>FSPL ≈ 114.03 dB</strong></div><p>With 0 dBm transmitter power, 2 dBi TX gain, 2 dBi RX gain and no additional losses:</p><div class="fp-formula">Received power = 0 + 2 + 2 − 114.03 − 0<br><strong>Received power ≈ −110.03 dBm</strong></div><p>Increasing transmitter power to 20 dBm raises received power to approximately −90.03 dBm. The FSPL remains 114.03 dB because the frequency and distance have not changed.</p></section>
<section id="fspl-table"><h2>Free space path loss reference table</h2><p>Compare common RF frequencies at distances from 100 m to 20 km. Values use the same formula as the calculator and exclude antenna gains and other losses.</p><div class="fp-scroll" tabindex="0" role="region" aria-label="Free space path loss reference table"><table><caption>FSPL in dB, rounded to two decimal places. Scroll horizontally on small screens.</caption><thead><tr><th scope="col">Distance</th><th scope="col">700 MHz</th><th scope="col">900 MHz</th><th scope="col">1800 MHz</th><th scope="col">2100 MHz</th><th scope="col">2400 MHz</th><th scope="col">2500 MHz</th><th scope="col">3500 MHz</th><th scope="col">5000 MHz</th></tr></thead><tbody><tr><th scope="row">100 m</th><td>69.35</td><td>71.53</td><td>77.55</td><td>78.89</td><td>80.05</td><td>80.41</td><td>83.33</td><td>86.43</td></tr><tr><th scope="row">200 m</th><td>75.37</td><td>77.55</td><td>83.57</td><td>84.91</td><td>86.07</td><td>86.43</td><td>89.35</td><td>92.45</td></tr><tr><th scope="row">500 m</th><td>83.33</td><td>85.51</td><td>91.53</td><td>92.87</td><td>94.03</td><td>94.39</td><td>97.31</td><td>100.41</td></tr><tr><th scope="row">1 km</th><td>89.35</td><td>91.53</td><td>97.55</td><td>98.89</td><td>100.05</td><td>100.41</td><td>103.33</td><td>106.43</td></tr><tr><th scope="row">5 km</th><td>103.33</td><td>105.51</td><td>111.53</td><td>112.87</td><td>114.03</td><td>114.39</td><td>117.31</td><td>120.41</td></tr><tr><th scope="row">10 km</th><td>109.35</td><td>111.53</td><td>117.55</td><td>118.89</td><td>120.05</td><td>120.41</td><td>123.33</td><td>126.43</td></tr><tr><th scope="row">20 km</th><td>115.37</td><td>117.55</td><td>123.57</td><td>124.91</td><td>126.07</td><td>126.43</td><td>129.35</td><td>132.45</td></tr></tbody></table></div></section>
<section id="fspl-frequency"><h2>How distance and frequency affect path loss</h2><p>Doubling distance adds approximately <strong>6.02 dB</strong> of FSPL. Increasing distance tenfold adds 20 dB. Loss therefore does not increase by a fixed number of dB per kilometer.</p><p>Doubling frequency also adds about 6.02 dB when antenna gains in dBi stay the same. At 100 m, free-space loss is approximately 80.05 dB at 2.4 GHz and 86.43 dB at 5 GHz. The difference is 6.38 dB.</p><p>This frequency comparison assumes fixed antenna gains. Antennas with a fixed physical aperture can have higher gain at higher frequencies, so the FSPL number alone does not determine which complete radio system performs better.</p></section>
<section id="fspl-limits"><h2>FSPL vs. a complete RF link budget</h2><p>FSPL is one loss term in a link budget. Estimate received power with:</p><div class="fp-formula"><strong>Pᵣ (dBm) = Pₜ (dBm) + Gₜ (dBi) + Gᵣ (dBi) − FSPL (dB) − L (dB)</strong></div><p>Here, L is the total of additional losses you enter. Compare received power with receiver sensitivity and include a suitable fade margin before judging a link. Use the <a href="/rf-link-budget-calculator">RF link budget calculator</a> for that next step, or the <a href="/eirp-calculator">EIRP calculator</a> to account for transmit antenna gain and feeder loss.</p><h3>When this model is useful—and when it is insufficient</h3><ul><li><strong>Wi-Fi:</strong> a useful outdoor baseline; indoor walls and reflections require additional modeling.</li><li><strong>4G and 5G:</strong> a starting comparison across bands, not a standalone prediction of site coverage.</li><li><strong>Microwave:</strong> check line of sight, Fresnel clearance, rain and fading as well as FSPL.</li><li><strong>Satellite:</strong> use the slant distance to the satellite and consider atmospheric and other system losses.</li></ul><p>The free-space link equation assumes far-field propagation. For an electrically large antenna, a common far-field criterion is <strong>d ≥ 2D²/λ</strong>, with D the largest antenna dimension. Antenna dimensions and geometry are needed to assess validity; this tool cannot confirm it from distance and frequency alone.</p><p>Reference: <a href="https://www.itu.int/rec/R-REC-P.525/en" rel="noopener">ITU-R P.525 — Calculation of free-space attenuation</a>.</p></section>
<section id="fspl-faq"><h2>FSPL calculator FAQs</h2><div class="fp-faq"><h3>What is free space path loss (FSPL)?</h3><p>FSPL is the ratio of transmitted power to received power between ideal isotropic antennas in free space. It depends on distance and frequency and is normally expressed in dB. It is also called free space loss or FSL.</p></div><div class="fp-faq"><h3>What is the FSPL formula for km and MHz?</h3><p>FSPL (dB) ≈ 20 log10(distance in km) + 20 log10(frequency in MHz) + 32.45. The calculator uses the speed of light, 299,792,458 m/s, rather than a rounded constant.</p></div><div class="fp-faq"><h3>How do I calculate FSPL in meters?</h3><p>For distance in meters and frequency in MHz, use a constant of −27.55 dB. For meters and GHz, use +32.45 dB. For meters and Hz, use −147.55 dB. Always match both units to the constant.</p></div><div class="fp-faq"><h3>Does antenna gain change free space path loss?</h3><p>No. Antenna gains change received power, not FSPL. Received power equals transmit power plus transmit and receive antenna gains, minus FSPL and other system losses.</p></div><div class="fp-faq"><h3>What happens when distance or frequency doubles?</h3><p>Doubling distance increases FSPL by approximately 6.02 dB. Doubling frequency also increases FSPL by approximately 6.02 dB when antenna gains in dBi are held constant.</p></div><div class="fp-faq"><h3>What is the free space path loss at 2.4 GHz over 1 km?</h3><p>At 2.4 GHz over 1 km, FSPL is approximately 100.05 dB. At 5 km it is approximately 114.03 dB, using the exact speed of light.</p></div><div class="fp-faq"><h3>Can this calculator predict indoor Wi-Fi or cellular coverage?</h3><p>FSPL provides an ideal free-space baseline. It does not model walls, terrain, diffraction, reflections, foliage, interference or fading. Real coverage planning requires an appropriate propagation model and measured site data.</p></div><div class="fp-faq"><h3>Can I use the FSPL equation in the antenna near field?</h3><p>The free-space link equation assumes far-field propagation. A common far-field distance criterion for electrically large antennas is 2D²/λ, where D is the largest antenna dimension and λ is wavelength. Distance and frequency alone cannot establish far-field validity for every antenna.</p></div></section>
{% include rf.html %}
</div>

<script src="{{ '/assets/js/rf/free-spac-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://easycalculator.org/free-space-path-loss-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is free space path loss (FSPL)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FSPL is the ratio of transmitted power to received power between ideal isotropic antennas in free space. It depends on distance and frequency and is normally expressed in dB. It is also called free space loss or FSL."
          }
        },
        {
          "@type": "Question",
          "name": "What is the FSPL formula for km and MHz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FSPL (dB) ≈ 20 log10(distance in km) + 20 log10(frequency in MHz) + 32.45. The calculator uses the speed of light, 299,792,458 m/s, rather than a rounded constant."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate FSPL in meters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For distance in meters and frequency in MHz, use a constant of −27.55 dB. For meters and GHz, use +32.45 dB. For meters and Hz, use −147.55 dB. Always match both units to the constant."
          }
        },
        {
          "@type": "Question",
          "name": "Does antenna gain change free space path loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Antenna gains change received power, not FSPL. Received power equals transmit power plus transmit and receive antenna gains, minus FSPL and other system losses."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when distance or frequency doubles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Doubling distance increases FSPL by approximately 6.02 dB. Doubling frequency also increases FSPL by approximately 6.02 dB when antenna gains in dBi are held constant."
          }
        },
        {
          "@type": "Question",
          "name": "What is the free space path loss at 2.4 GHz over 1 km?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At 2.4 GHz over 1 km, FSPL is approximately 100.05 dB. At 5 km it is approximately 114.03 dB, using the exact speed of light."
          }
        },
        {
          "@type": "Question",
          "name": "Can this calculator predict indoor Wi-Fi or cellular coverage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FSPL provides an ideal free-space baseline. It does not model walls, terrain, diffraction, reflections, foliage, interference or fading. Real coverage planning requires an appropriate propagation model and measured site data."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the FSPL equation in the antenna near field?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The free-space link equation assumes far-field propagation. A common far-field distance criterion for electrically large antennas is 2D²/λ, where D is the largest antenna dimension and λ is wavelength. Distance and frequency alone cannot establish far-field validity for every antenna."
          }
        }
      ]
    },
    {
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
          "name": "RF Calculators",
          "item": "https://easycalculator.org/rf-calculator"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "FSPL Calculator",
          "item": "https://easycalculator.org/free-space-path-loss-calculator"
        }
      ]
    }
  ]
}
</script>
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
 {
 "@type":"ListItem",
 "position":1,
 "name":"Home",
 "item":"https://easycalculator.org"
 },
 {
 "@type":"ListItem",
 "position":2,
 "name":"RF Calculators",
 "item":"https://easycalculator.org/rf-calculator"
 },
 {
 "@type":"ListItem",
 "position":3,
 "name":"FSPL Calculator"
 }
 ]
}
</script>