---
layout: default
title: Frequency to Wavelength Calculator (Hz, MHz, GHz)
permalink: /frequency-to-wavelength-calculator
description: "Convert frequency to wavelength in meters, cm, mm and inches. Enter Hz, kHz, MHz or GHz and see full, half and quarter wavelengths with RF examples."
image: "/assets/images/og/frequency-to-wavelength-formula-example.jpg"
last_modified_at: 2026-09-20
---
<style>
.ec-wave{--fw-blue:#2454bc;--fw-ink:#182d49;--fw-muted:#53647b;max-width:auto;margin:24px auto 40px;padding:0 16px;color:var(--fw-ink);line-height:1.65}
.ec-wave *{box-sizing:border-box}.ec-wave [hidden]{display:none!important}.ec-wave h1{font-size:clamp(1.8rem,4vw,2.5rem);line-height:1.2;margin:10px 0 16px}.ec-wave h2{font-size:1.55rem;margin:0 0 16px}.ec-wave h3{font-size:1.1rem;margin:0 0 10px}.ec-wave a{color:#214fab;text-underline-offset:3px}.ec-wave p{margin:0 0 16px}.ec-wave .fw-muted{color:var(--fw-muted)}
.ec-wave .fw-panel{padding:clamp(18px,3vw,30px);border:1px solid #d7e4f4;border-radius:22px;background:linear-gradient(135deg,#eef5ff,#fff);box-shadow:0 10px 32px #142a4810}
.ec-wave .fw-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.ec-wave .fw-fields{display:grid;grid-template-columns:1.4fr 1fr;gap:12px}.ec-wave label{display:block;font-weight:600;margin-bottom:6px}.ec-wave input,.ec-wave select{width:100%;min-height:48px;border:1px solid #9daec4;border-radius:9px;background:#fff;color:var(--fw-ink);padding:10px;font:inherit;min-width:0}
.ec-wave button{font:inherit;cursor:pointer;border:1px solid #a6bad7;border-radius:9px;padding:9px 14px;min-height:44px;background:white;color:#214fab}.ec-wave button:disabled{opacity:.6;cursor:default}.ec-wave :is(a,button,input,select):focus-visible{outline:3px solid #b25d00;outline-offset:3px}.ec-wave .fw-primary{background:var(--fw-blue);border-color:var(--fw-blue);color:white;font-weight:600}
.ec-wave .fw-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.ec-wave .fw-presets{margin:18px 0}.ec-wave .fw-result{background:#132c50;color:#fff;border-radius:16px;padding:22px;overflow-wrap:anywhere}.ec-wave .fw-result h2{font-size:1rem;color:#d6e6ff;margin:0}.ec-wave .fw-big{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:700;line-height:1.3;margin:8px 0}.ec-wave .fw-result p{color:#e0ebfa;font-size:.9rem}.ec-wave .fw-result dl{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:18px 0 0}.ec-wave .fw-result dd{margin:0;font-weight:600}.ec-wave .fw-result dt{font-size:.85rem;font-weight:400;color:#d6e6ff}
.ec-wave .fw-error{color:#a21c2c;margin-top:12px}.ec-wave .fw-note{font-size:.9rem;margin:16px 0 0}.ec-wave article>section{margin-top:34px}.ec-wave .fw-meta{display:flex;gap:14px;flex-wrap:wrap;border-bottom:1px solid #dce3ec;padding:24px 0 16px;font-size:.9rem}.ec-wave .fw-box{padding:20px;border:1px solid #dce3ec;border-radius:12px;background:#f7f9fc}.ec-wave .fw-scroll{overflow-x:auto}.ec-wave table{width:100%;border-collapse:collapse;font-size:.95rem}.ec-wave th,.ec-wave td{padding:12px;text-align:left;border-bottom:1px solid #dce3ec;white-space:nowrap}.ec-wave th{background:#edf3fc}.ec-wave caption{caption-side:bottom;text-align:left;color:var(--fw-muted);padding:12px 0}.ec-wave details{border:1px solid #dce3ec;border-radius:10px;padding:14px 18px;margin:10px 0}.ec-wave summary{cursor:pointer;font-weight:600}.ec-wave details p{margin:12px 0 0}.ec-wave .fw-links{display:flex;gap:12px;flex-wrap:wrap}.ec-wave .fw-links a{padding:8px 12px;border:1px solid #dce3ec;border-radius:8px}
@media(max-width:700px){.ec-wave .fw-grid{grid-template-columns:1fr}.ec-wave .fw-fields{grid-template-columns:1.2fr 1fr}.ec-wave{padding:0 8px}.ec-wave .fw-result{padding:18px}}
</style>
<div class="ec-wave" id="frequency-calculator">
<nav aria-label="Breadcrumb" class="fw-muted"><a href="/">Home</a> / <a href="/rf-calculator">RF calculators</a> / Frequency to wavelength</nav>
<header><h1>Frequency to Wavelength Calculator</h1><p class="fw-muted">Convert Hz, kHz, MHz or GHz to wavelength in meters, centimeters, millimeters or inches. Get full, half and quarter wavelengths for electromagnetic waves in free space.</p></header>
<section class="fw-panel" aria-label="Frequency to wavelength converter">
<div class="fw-grid">
<form id="fw-form" novalidate>
<div class="fw-fields"><div><label for="fw-frequency">Frequency</label><input id="fw-frequency" type="number" value="900" step="any" min="0" required inputmode="decimal" aria-describedby="fw-error"></div><div><label for="fw-unit">Frequency unit</label><select id="fw-unit"><option value="1">Hz</option><option value="1000">kHz</option><option value="1000000" selected>MHz</option><option value="1000000000">GHz</option></select></div></div>
<div style="margin-top:16px"><label for="fw-output">Wavelength unit</label><select id="fw-output"><option value="1">Meters (m)</option><option value="100">Centimeters (cm)</option><option value="1000">Millimeters (mm)</option><option value="39.37007874015748">Inches (in)</option></select></div>
<div class="fw-actions"><button class="fw-primary" type="submit">Calculate wavelength</button><button type="reset">Reset</button><button id="fw-copy" type="button">Copy result</button></div>
<p id="fw-error" class="fw-error" role="alert" hidden></p><p id="fw-copy-status" role="status" class="fw-note"></p>
<div class="fw-presets"><span class="fw-muted">Try an RF frequency</span><div class="fw-actions"><button type="button" data-frequency="100" data-unit="1000000">100 MHz</button><button type="button" data-frequency="900" data-unit="1000000">900 MHz</button><button type="button" data-frequency="2.4" data-unit="1000000000">2.4 GHz</button><button type="button" data-frequency="3.5" data-unit="1000000000">3.5 GHz</button><button type="button" data-frequency="5" data-unit="1000000000">5 GHz</button></div></div>
<a href="/wavelength-to-frequency-calculator">Convert wavelength to frequency →</a>
</form>
<div class="fw-result" aria-live="polite" aria-atomic="true"><h2>Full wavelength · λ</h2><div id="fw-full" class="fw-big">0.333103 m</div><p id="fw-equivalents">33.3103 cm · 333.103 mm · 13.1143 in</p><dl><div><dt>Half wavelength · λ/2</dt><dd id="fw-half">0.166551 m</dd></div><div><dt>Quarter wavelength · λ/4</dt><dd id="fw-quarter">0.0832757 m</dd></div></dl><p id="fw-calculation" style="margin-top:20px">λ = 299,792,458 ÷ 900,000,000 ≈ 0.333103 m</p></div>
</div>
<p class="fw-note fw-muted">Uses c = 299,792,458 m/s, the exact speed of light in vacuum. Half and quarter wavelengths are theoretical electrical lengths; practical antenna dimensions depend on the design and surroundings.</p>
<noscript><p>Enable JavaScript to use the calculator. You can still use the formulas and frequency table below.</p></noscript>
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
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>4 min read</span>
    </div>
  </div>
<!-- Article-->
<h2>Frequency to Wavelength Calculator</h2>
<p class="lead">The frequency to wavelength calculator converts electromagnetic frequency (in Hz) into wavelength (in meters) using the formula <strong>λ = c / f</strong>, where c is the speed of light (3 × 10⁸ m/s). This calculation is essential in antenna design, RF planning, telecommunications, and wireless system engineering.</p>
<section><h2>How to convert frequency to wavelength</h2><ol><li>Enter a positive frequency and select Hz, kHz, MHz or GHz.</li><li>Choose your wavelength unit, then select Calculate wavelength.</li><li>Read the full wavelength and the theoretical half-wave and quarter-wave lengths.</li></ol><p>Frequency describes the number of cycles per second. Wavelength is the distance between corresponding points on consecutive cycles. At a fixed wave speed, doubling the frequency halves the wavelength.</p></section>
<section><h2>Frequency to wavelength formula</h2><div class="fw-box"><p><strong>λ = c / f</strong></p><p>λ is wavelength in meters, f is frequency in hertz, and c = 299,792,458 m/s in vacuum.</p><p><strong>MHz to meters:</strong> λ (m) = 299.792458 / f (MHz)<br><strong>GHz to centimeters:</strong> λ (cm) = 29.9792458 / f (GHz)<br><strong>GHz to millimeters:</strong> λ (mm) = 299.792458 / f (GHz)</p></div><p class="fw-note">For a quick estimate, use 300 / f (MHz) to get meters. The calculator uses the exact constant; displayed results are rounded to six significant figures. The exact constant is documented by <a href="https://physics.nist.gov/cgi-bin/cuu/Value?c">NIST</a>.</p></section>
<div class="p-4"><img src="/assets/images/frequency-to-wavelength-formula-example.svg" alt="Frequency to wavelength formula with a 900 MHz example showing a wavelength of 33.3103 cm" class="img-fluid rounded-3" width="1200" height="820" loading="lazy" decoding="async"></div>
<section><h2>Worked RF examples</h2><div class="fw-grid"><div class="fw-box"><h3>900 MHz to wavelength</h3><p>900 MHz = 900,000,000 Hz.</p><p>λ = 299,792,458 / 900,000,000 ≈ <strong>0.333103 m</strong>, or 33.3103 cm.</p><p>The theoretical quarter wavelength is approximately 8.32757 cm.</p></div><div class="fw-box"><h3>2.4 GHz to wavelength</h3><p>2.4 GHz = 2,400,000,000 Hz.</p><p>λ = 299,792,458 / 2,400,000,000 ≈ <strong>0.124914 m</strong>, or 12.4914 cm.</p><p>The theoretical quarter wavelength is approximately 3.12284 cm.</p></div></div></section>
<section class="pt-4"><h2>Frequency to wavelength conversion table</h2><div class="fw-scroll" tabindex="0" role="region" aria-label="Frequency and wavelength table"><table><caption>Free-space values calculated using c = 299,792,458 m/s; rounded to six significant figures.</caption><thead><tr><th scope="col">Frequency</th><th scope="col">Wavelength (m)</th><th scope="col">Wavelength (cm)</th><th scope="col">Quarter wave (cm)</th></tr></thead><tbody>
<tr><th scope="row">1 MHz</th><td>299.792</td><td>29979.2</td><td>7494.81</td></tr>
<tr><th scope="row">30 MHz</th><td>9.99308</td><td>999.308</td><td>249.827</td></tr>
<tr><th scope="row">100 MHz</th><td>2.99792</td><td>299.792</td><td>74.9481</td></tr>
<tr><th scope="row">150 MHz</th><td>1.99862</td><td>199.862</td><td>49.9654</td></tr>
<tr><th scope="row">433 MHz</th><td>0.692361</td><td>69.2361</td><td>17.309</td></tr>
<tr><th scope="row">700 MHz</th><td>0.428275</td><td>42.8275</td><td>10.7069</td></tr>
<tr><th scope="row">900 MHz</th><td>0.333103</td><td>33.3103</td><td>8.32757</td></tr>
<tr><th scope="row">1.8 GHz</th><td>0.166551</td><td>16.6551</td><td>4.16378</td></tr>
<tr><th scope="row">2.1 GHz</th><td>0.142758</td><td>14.2758</td><td>3.56896</td></tr>
<tr><th scope="row">2.4 GHz</th><td>0.124914</td><td>12.4914</td><td>3.12284</td></tr>
<tr><th scope="row">3.5 GHz</th><td>0.085655</td><td>8.5655</td><td>2.14137</td></tr>
<tr><th scope="row">5 GHz</th><td>0.0599585</td><td>5.99585</td><td>1.49896</td></tr>
<tr><th scope="row">5.8 GHz</th><td>0.0516884</td><td>5.16884</td><td>1.29221</td></tr>
</tbody></table></div></section>
<section><h2>Using wavelength in antenna and RF planning</h2><p>A theoretical half-wave dipole spans λ/2 in total, and a quarter-wave monopole uses a radiating element near λ/4. These values are starting points: conductor diameter, end effects, ground plane, insulation and nearby objects can change the resonant length. Wavelength alone does not guarantee impedance matching.</p><p>For propagation calculations, pair this converter with the <a href="/free-space-path-loss-calculator">free space path loss calculator</a>. Use the <a href="/rf-link-budget-calculator">RF link budget calculator</a> to include transmit power, gains and losses, and the <a href="/vswr-calculator">VSWR calculator</a> to investigate mismatch.</p></section><section><h2>Free space, cables and other media</h2><p>The general wave equation is <strong>λ = v / f</strong>, where v is the wave's phase speed in the medium. This tool uses the vacuum speed of light, a common approximation for radio waves in air.</p><p>In a cable with a specified velocity factor VF, the wavelength is λ = c × VF / f. For example, at 100 MHz and VF = 0.66, the cable wavelength is approximately 1.97863 m, compared with 2.99792 m in free space. Use the manufacturer's velocity factor for the cable and frequency in question. Sound requires the speed of sound in its medium and is outside this calculator's scope.</p></section>
<!-- FAQ Section -->
<section class="p-4"><h2 class="mb-4">FAQ on Frequency to wavelength Calculator</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">How do I convert MHz to wavelength in meters?</div><p class="mb-0">Divide 299.792458 by the frequency in MHz. For example, 100 MHz has a free-space wavelength of approximately 2.99792 meters.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is the wavelength of 1 GHz?</div><p class="mb-0">In free space, 1 GHz has a wavelength of 0.299792458 meters, or approximately 29.9792 centimeters.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is the wavelength of 2.4 GHz and 5 GHz?</div><p class="mb-0">In free space, 2.4 GHz corresponds to approximately 12.4914 cm, while 5 GHz corresponds to approximately 5.99585 cm.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Does higher frequency always mean shorter wavelength?</div><p class="mb-0">At a fixed wave speed, yes. Wavelength is inversely proportional to frequency. When comparing different media, use the appropriate phase speed for each medium.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Can I use the quarter wavelength as my antenna length?</div><p class="mb-0">Use it as a theoretical starting point. Practical antenna dimensions depend on the antenna geometry, materials, ground plane, end effects and surroundings; tune and verify the actual antenna.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Why does my result differ from 300 divided by MHz?</div><p class="mb-0">The shortcut uses an approximate speed of light of 300,000,000 m/s. This calculator uses 299,792,458 m/s, so its values are slightly smaller before rounding.</p></div></div></section>{% include rf.html %}
</div>




 <script src="{{ '/assets/js/rf/freq-to-wave.js' | relative_url }}"></script>  