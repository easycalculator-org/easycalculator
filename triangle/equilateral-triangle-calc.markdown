---
layout: default
title: Equilateral Triangle Calculator – Calculate Sides, Area & Height
permalink: /equilateral-triangle-calculator
description: "Calculate properties of an equilateral triangle including area, height, and perimeter. Enter one side length to get all triangle measurements instantly."
last_modified_at: 2026-03-11
--- 

<style>
.ec-eq{--eq-primary:#2459c4;max-width:1100px;margin:28px auto;padding:0 12px;color:#23324b}
.ec-eq *{box-sizing:border-box}.ec-eq [hidden]{display:none!important}
.ec-eq .eq-card{background:#fff;border:1px solid #dce5f1;border-radius:18px;overflow:hidden;box-shadow:0 8px 28px #1936530b}
.ec-eq .eq-head{padding:26px 20px;background:linear-gradient(125deg,#eef5ff,#f0fcf7)}
.ec-eq h1{font-size:clamp(1.65rem,4vw,2.2rem);font-weight:700}
.ec-eq .eq-body{padding:clamp(16px,3vw,28px)}
.ec-eq .eq-modes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.ec-eq .form-control,.ec-eq .form-select,.ec-eq .btn{min-height:44px}
.ec-eq .eq-stat{height:100%;padding:14px;background:#f2f7ff;border:1px solid #dce8fb;border-radius:12px}
.ec-eq .eq-value{font-size:1.35rem;font-weight:700;color:var(--eq-primary);overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
.ec-eq .eq-diagram{width:100%;height:auto;max-height:300px;background:#fbfdff;border-radius:12px}
.ec-eq .eq-formula{padding:16px;background:#f3f7fd;border-left:4px solid var(--eq-primary);border-radius:8px}
.ec-eq .eq-article{line-height:1.8}.ec-eq .eq-article h2{font-size:1.5rem;margin-top:30px}.ec-eq .eq-article h3{font-size:1.15rem;margin-top:20px}
.ec-eq .eq-steps{overflow-wrap:anywhere}
</style>
<div id="eq-app" class="ec-eq">
  <section class="eq-card" aria-labelledby="eq-title">
    <header class="eq-head text-center">
      <h1 id="eq-title">Equilateral Triangle Calculator</h1>
      <p class="text-muted mb-0">Enter one measurement to find the side length, area, height, perimeter, inradius and circumradius.</p>
    </header>
    <div class="eq-body">
      <div class="row g-4">
        <div class="col-lg-5">
          <p class="fw-semibold mb-2">Which measurement do you know?</p>
          <div class="eq-modes mb-3" role="group" aria-label="Known measurement">
            <button class="btn btn-primary" type="button" data-mode="side" aria-pressed="true">Side length</button>
            <button class="btn btn-outline-primary" type="button" data-mode="height" aria-pressed="false">Height</button>
            <button class="btn btn-outline-primary" type="button" data-mode="area" aria-pressed="false">Area</button>
            <button class="btn btn-outline-primary" type="button" data-mode="perimeter" aria-pressed="false">Perimeter</button>
          </div>
          <form id="eq-form">
            <label id="eq-input-label" for="eq-input" class="form-label fw-semibold">Side length (a)</label>
            <div class="input-group mb-3">
              <input id="eq-input" class="form-control" type="number" step="any" min="0" value="6" required aria-describedby="eq-input-help eq-input-unit">
              <span class="input-group-text" id="eq-input-unit">units</span>
            </div>
            <label for="eq-unit" class="form-label">Measurement unit</label>
            <select id="eq-unit" class="form-select">
              <option value="units">Generic units</option><option value="mm">Millimeters (mm)</option><option value="cm">Centimeters (cm)</option><option value="m">Meters (m)</option><option value="km">Kilometers (km)</option><option value="in">Inches (in)</option><option value="ft">Feet (ft)</option><option value="yd">Yards (yd)</option>
            </select>
            <p class="small text-muted mt-2" id="eq-input-help">Enter a number greater than zero. Changing the unit relabels your input; it does not convert the value.</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <button class="btn btn-primary flex-grow-1" type="submit">Calculate</button>
              <button class="btn btn-outline-secondary" type="button" id="eq-example">Example</button>
              <button class="btn btn-outline-secondary" type="reset">Reset</button>
            </div>
          </form>
          <div id="eq-error" class="alert alert-danger mt-3 mb-0" role="alert" hidden></div>
          <p class="small text-muted mt-3 mb-0">Results update as you type. Displayed values are rounded to 6 significant digits.</p>
        </div>
        <div class="col-lg-7">
          <div id="eq-result" aria-live="polite" aria-atomic="true" hidden>
            <h2 class="h5 mb-3">Triangle measurements</h2>
            <div class="row g-2">
              <div class="col-6"><div class="eq-stat"><div class="small">Side length (a)</div><div id="eq-side" class="eq-value"></div></div></div>
              <div class="col-6"><div class="eq-stat"><div class="small">Area (A)</div><div id="eq-area" class="eq-value"></div></div></div>
              <div class="col-6"><div class="eq-stat"><div class="small">Height (h)</div><div id="eq-height" class="eq-value"></div></div></div>
              <div class="col-6"><div class="eq-stat"><div class="small">Perimeter (P)</div><div id="eq-perimeter" class="eq-value"></div></div></div>
              <div class="col-6"><div class="eq-stat"><div class="small">Inradius (r)</div><div id="eq-inradius" class="eq-value"></div></div></div>
              <div class="col-6"><div class="eq-stat"><div class="small">Circumradius (R)</div><div id="eq-circumradius" class="eq-value"></div></div></div>
            </div>
            <p class="small mt-3 mb-0"><strong>Interior angles:</strong> 60°, 60°, 60°</p>
          </div>
        </div>
      </div>
      <div class="row g-4 mt-1" id="eq-details" hidden>
        <div class="col-md-6">
          <figure class="mb-0">
            <svg class="eq-diagram" viewBox="0 0 420 300" role="img" aria-labelledby="eq-svg-title eq-svg-desc">
              <title id="eq-svg-title">Equilateral triangle and its height</title>
              <desc id="eq-svg-desc">Three equal sides and three 60-degree angles. The height divides the triangle into two right triangles.</desc>
              <path d="M85 251.506 L335 251.506 L210 35 Z" fill="#21a58922" stroke="#168574" stroke-width="2.5"/>
              <path d="M210 35 V251.506" stroke="#2459c4" stroke-width="2" stroke-dasharray="6 4"/>
              <path d="M210 237.506 H224 V251.506" fill="none" stroke="#2459c4" stroke-width="1.5"/>
              <g stroke="#168574" stroke-width="2"><path d="M204 245.506 V257.506"/><path d="M142 139 L153 145"/><path d="M267 145 L278 139"/></g>
              <g fill="#23324b" font-size="16" text-anchor="middle"><text x="210" y="280">a</text><text x="132" y="139">a</text><text x="288" y="139">a</text><text x="230" y="150" fill="#2459c4">h</text><text x="115" y="239">60°</text><text x="305" y="239">60°</text><text x="210" y="77">60°</text></g>
            </svg>
            <figcaption class="small text-muted text-center mt-2" id="eq-caption"></figcaption>
          </figure>
        </div>
        <div class="col-md-6">
          <h2 class="h5">Calculation steps</h2>
          <ol class="small eq-steps ps-3" id="eq-steps"></ol>
        </div>
      </div>
      <noscript><p class="alert alert-warning mt-3">Enable JavaScript to use the calculator. Formulas and worked examples are available below.</p></noscript>
    </div>
  </section>

  <article class="eq-card eq-body eq-article mt-4">
    <h2 class="mt-0">What is an equilateral triangle?</h2>
    <p>An equilateral triangle has <strong>three equal sides</strong> and <strong>three equal interior angles of 60°</strong>. Knowing just one measurement—such as a side, height, perimeter or area—is enough to calculate all its other dimensions.</p>
    <p>Its height runs from a vertex to the midpoint of the opposite side. This line is also a median, perpendicular bisector and angle bisector. The centroid, incenter, circumcenter and orthocenter all coincide.</p>
    <h2>How to use the equilateral triangle calculator</h2>
    <ol><li>Select the measurement you know: side length, height, area or perimeter.</li><li>Enter a positive value and select its unit. For area, enter square units—for example, cm².</li><li>Read the calculated dimensions and calculation steps. Results update automatically, or you can select <strong>Calculate</strong>.</li></ol>
    <p>The unit selector labels the measurement you enter. For example, changing 6 cm to meters treats the input as 6 m; it does not convert 6 cm into 0.06 m.</p>
    <h2>Equilateral triangle formulas</h2>
    <p>Let a be the side length, h the height, A the area, P the perimeter, r the inradius and R the circumradius.</p>
    <div class="table-responsive"><table class="table table-bordered align-middle">
      <thead class="table-light"><tr><th scope="col">Measurement</th><th scope="col">Formula</th></tr></thead>
      <tbody><tr><td>Perimeter</td><td>P = 3a</td></tr><tr><td>Height</td><td>h = (√3 / 2)a</td></tr><tr><td>Area</td><td>A = (√3 / 4)a²</td></tr><tr><td>Inradius</td><td>r = a / (2√3) = h / 3</td></tr><tr><td>Circumradius</td><td>R = a / √3 = 2h / 3</td></tr><tr><td>Each interior angle</td><td>60°</td></tr></tbody>
    </table></div>
    <h3>Find the side length from another measurement</h3>
    <div class="eq-formula"><div><strong>From height:</strong> a = 2h / √3</div><div><strong>From area:</strong> a = √(4A / √3)</div><div><strong>From perimeter:</strong> a = P / 3</div></div>
    <h3>Why is the height a√3 / 2?</h3>
    <p>The altitude splits the triangle into two right triangles. Each has hypotenuse a and base a/2. Applying the Pythagorean theorem:</p>
    <div class="eq-formula">h² = a² − (a/2)² = 3a²/4<br><strong>h = a√3 / 2</strong></div>
    <p>Substituting this height into A = ½ × base × height gives A = (√3/4)a².</p>
    <h2>Worked example: side length of 6 cm</h2>
    <ol><li><strong>Perimeter:</strong> P = 3 × 6 = <strong>18 cm</strong>.</li><li><strong>Height:</strong> h = (√3/2) × 6 = 3√3 ≈ <strong>5.19615 cm</strong>.</li><li><strong>Area:</strong> A = (√3/4) × 6² = 9√3 ≈ <strong>15.5885 cm²</strong>.</li><li><strong>Inradius:</strong> r = 6/(2√3) = √3 ≈ <strong>1.73205 cm</strong>.</li><li><strong>Circumradius:</strong> R = 6/√3 = 2√3 ≈ <strong>3.4641 cm</strong>.</li></ol>
    <h3>Example: find the side from an area of 25 cm²</h3>
    <p>Use a = √(4A/√3). Substituting A = 25 gives a = √(100/√3) ≈ <strong>7.59836 cm</strong>. The perimeter is approximately <strong>22.7951 cm</strong> and the height is approximately <strong>6.58037 cm</strong>.</p>
    <h2>Quick reference table</h2>
    <p>Lengths below use the same unit; area uses that unit squared. Values are rounded to four decimal places.</p>
    <div class="table-responsive"><table class="table table-bordered align-middle">
      <thead class="table-light"><tr><th scope="col">Side</th><th scope="col">Height</th><th scope="col">Area</th><th scope="col">Perimeter</th></tr></thead>
      <tbody><tr><td>1</td><td>0.8660</td><td>0.4330</td><td>3</td></tr><tr><td>2</td><td>1.7321</td><td>1.7321</td><td>6</td></tr><tr><td>5</td><td>4.3301</td><td>10.8253</td><td>15</td></tr><tr><td>6</td><td>5.1962</td><td>15.5885</td><td>18</td></tr><tr><td>10</td><td>8.6603</td><td>43.3013</td><td>30</td></tr></tbody>
    </table></div>
    <h2>Frequently asked questions</h2>
    <h3>Are all angles of an equilateral triangle 60°?</h3><p>Yes. Its three angles are equal and sum to 180°, so each angle is 60°.</p>
    <h3>Is an equilateral triangle also isosceles?</h3><p>Yes, under the inclusive definition of isosceles as having at least two equal sides. An equilateral triangle has all three sides equal.</p>
    <h3>What is the difference between the inradius and circumradius?</h3><p>The inradius is the radius of the circle inside the triangle that touches all three sides. The circumradius is the radius of the circle through all three vertices. In an equilateral triangle, the circumradius is twice the inradius.</p>
    <h3>Can I calculate the area from the height?</h3><p>Yes. The area is A = h²/√3. You can also choose Height in the calculator to find the area and other dimensions.</p>
    <h3>What happens when the side length doubles?</h3><p>The height, perimeter, inradius and circumradius double. The area becomes four times as large because it depends on the square of the side length.</p>
    <h3>Can an equilateral triangle have a right angle?</h3><p>No. All its angles are 60°, so every equilateral triangle is acute.</p>
  </article>
</div>
<script>
(function () {
  'use strict';
  const root = document.getElementById('eq-app');
  const el = id => root.querySelector('#eq-' + id);
  const sqrt3 = Math.sqrt(3);
  const fmt = value => Number(value.toPrecision(6)).toString();
  let mode = 'side', timer;
  const labels = { side: 'Side length (a)', height: 'Height (h)', area: 'Area (A)', perimeter: 'Perimeter (P)' };
  function solve(value, known) {
    if (!Number.isFinite(value) || value <= 0) throw new Error('Enter a finite number greater than zero.');
    let side;
    switch (known) {
      case 'side': side = value; break;
      case 'height': side = value * (2 / sqrt3); break;
      case 'area': side = Math.sqrt(value) * Math.sqrt(4 / sqrt3); break;
      case 'perimeter': side = value / 3; break;
      default: throw new Error('Choose a valid measurement.');
    }
    const result = { side, height: side * (sqrt3 / 2), area: (side * (sqrt3 / 4)) * side, perimeter: side * 3, inradius: side / (2 * sqrt3), circumradius: side / sqrt3 };
    if (!Object.values(result).every(number => Number.isFinite(number) && number > 0)) throw new Error('This value is outside the supported numerical range. Use a different measurement unit and rescale the input.');
    return result;
  }
  function unit(area) {
    const selected = el('unit').value;
    return selected === 'units' ? (area ? 'square units' : 'units') : selected + (area ? '²' : '');
  }
  function syncLabels() {
    el('input-label').textContent = labels[mode];
    el('input-unit').textContent = unit(mode === 'area');
  }
  function hideResults() { el('result').hidden = true; el('details').hidden = true; }
  function calculate() {
    clearTimeout(timer);
    el('error').hidden = true;
    try {
      const value = el('input').valueAsNumber, r = solve(value, mode);
      Object.entries(r).forEach(([id, number]) => { el(id).textContent = fmt(number) + ' ' + unit(id === 'area'); });
      el('caption').textContent = 'a ≈ ' + fmt(r.side) + ' ' + unit(false) + '; h ≈ ' + fmt(r.height) + ' ' + unit(false) + '. Diagram scales to fit.';
      const first = {
        side: 'Given side: a = ' + fmt(value) + ' ' + unit(false),
        height: 'a = 2h / √3 = 2 × ' + fmt(value) + ' / √3 ≈ ' + fmt(r.side) + ' ' + unit(false),
        area: 'a = √(4A / √3) = √(4 × ' + fmt(value) + ' / √3) ≈ ' + fmt(r.side) + ' ' + unit(false),
        perimeter: 'a = P / 3 = ' + fmt(value) + ' / 3 ≈ ' + fmt(r.side) + ' ' + unit(false)
      }[mode];
      const steps = [first,
        'h = (√3 / 2) × ' + fmt(r.side) + ' ≈ ' + fmt(r.height) + ' ' + unit(false),
        'A = (√3 / 4) × ' + fmt(r.side) + '² ≈ ' + fmt(r.area) + ' ' + unit(true),
        'P = 3 × ' + fmt(r.side) + ' ≈ ' + fmt(r.perimeter) + ' ' + unit(false),
        'r = a / (2√3) ≈ ' + fmt(r.inradius) + ' ' + unit(false),
        'R = a / √3 ≈ ' + fmt(r.circumradius) + ' ' + unit(false)];
      el('steps').replaceChildren();
      steps.forEach(text => { const li = document.createElement('li'); li.textContent = text; el('steps').append(li); });
      el('result').hidden = false; el('details').hidden = false;
    } catch (error) {
      hideResults(); el('error').textContent = error.message; el('error').hidden = false;
    }
  }
  function setMode(next) {
    mode = next;
    root.querySelectorAll('[data-mode]').forEach(button => {
      const active = button.dataset.mode === mode;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('btn-primary', active); button.classList.toggle('btn-outline-primary', !active);
    });
    syncLabels(); calculate();
  }
  root.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  el('form').addEventListener('submit', event => { event.preventDefault(); calculate(); });
  el('input').addEventListener('input', () => {
    clearTimeout(timer); hideResults(); el('error').hidden = true;
    if (el('input').value !== '') timer = setTimeout(calculate, 250);
  });
  el('unit').addEventListener('change', () => { syncLabels(); calculate(); });
  el('example').addEventListener('click', () => {
    el('unit').value = 'cm';
    el('input').value = { side: 6, height: 3 * sqrt3, area: 9 * sqrt3, perimeter: 18 }[mode];
    syncLabels(); calculate();
  });
  el('form').addEventListener('reset', () => { clearTimeout(timer); setTimeout(() => setMode('side'), 0); });
  calculate();
})();
</script>

