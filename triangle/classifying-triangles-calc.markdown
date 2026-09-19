---
layout: default
title: Classifying Triangles Calculator – Identify Triangle Type
permalink: /classifying-triangles-calculator
description: "Use the Classifying Triangles Calculator to determine whether a triangle is equilateral, isosceles, or scalene and classify it by angles."
last_modified_at: 2026-03-11
---

<style>
.ec-tri{--tri-primary:#2459c4;max-width:1100px;margin:28px auto;padding:0 12px;color:#23324b}
.ec-tri *{box-sizing:border-box}.ec-tri [hidden]{display:none!important}
.ec-tri .tri-card{background:#fff;border:1px solid #dce5f1;border-radius:18px;overflow:hidden;box-shadow:0 8px 28px #1936530b}
.ec-tri .tri-head{padding:26px 20px;background:linear-gradient(125deg,#eef5ff,#f0fcf7)}
.ec-tri h1{font-size:clamp(1.65rem,4vw,2.2rem);font-weight:700}
.ec-tri .tri-body{padding:clamp(16px,3vw,28px)}
.ec-tri .tri-modes{display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap}.ec-tri .tri-modes button{flex:1 1 140px}
.ec-tri .form-control,.ec-tri .btn{min-height:44px}
.ec-tri .tri-stat{height:100%;padding:16px;background:#f2f7ff;border:1px solid #dce8fb;border-radius:12px}
.ec-tri .tri-type{font-size:1.45rem;font-weight:700;color:var(--tri-primary)}
.ec-tri .tri-diagram{width:100%;height:auto;max-height:285px;background:#fbfdff;border-radius:12px}
.ec-tri .tri-formula{padding:16px;background:#f3f7fd;border-left:4px solid var(--tri-primary);border-radius:8px}
.ec-tri .tri-article{line-height:1.8}.ec-tri .tri-article h2{font-size:1.5rem;margin-top:30px}.ec-tri .tri-article h3{font-size:1.15rem;margin-top:20px}
.ec-tri .tri-number{overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
</style>
<div id="tri-app" class="ec-tri">
  <section class="tri-card" aria-labelledby="tri-title">
    <header class="tri-head text-center">
      <h1 id="tri-title">Classifying Triangles Calculator</h1>
      <p class="text-muted mb-0">Identify a triangle by its sides and angles: equilateral, isosceles or scalene, and acute, right or obtuse.</p>
    </header>
    <div class="tri-body">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="tri-modes" role="group" aria-label="Choose input method">
            <button id="tri-side-mode" class="btn btn-primary" type="button" aria-pressed="true">Side lengths</button>
            <button id="tri-angle-mode" class="btn btn-outline-primary" type="button" aria-pressed="false">Angles</button>
          </div>
          <form id="tri-form">
            <fieldset id="tri-sides">
              <legend class="fs-6 fw-semibold">Enter three side lengths</legend>
              <p class="small text-muted">Use the same unit for all sides. Side a is opposite angle A, b opposite B, and c opposite C.</p>
              <div class="row g-3">
                <div class="col-4"><label class="form-label" for="tri-a">Side a</label><input id="tri-a" class="form-control" type="number" step="any" min="0" value="3" required></div>
                <div class="col-4"><label class="form-label" for="tri-b">Side b</label><input id="tri-b" class="form-control" type="number" step="any" min="0" value="4" required></div>
                <div class="col-4"><label class="form-label" for="tri-c">Side c</label><input id="tri-c" class="form-control" type="number" step="any" min="0" value="5" required></div>
              </div>
            </fieldset>
            <fieldset id="tri-angles" hidden disabled>
              <legend class="fs-6 fw-semibold">Enter three interior angles</legend>
              <p class="small text-muted">Each angle must be greater than 0° and less than 180°. Together they must total 180°.</p>
              <div class="row g-3">
                <div class="col-4"><label class="form-label" for="tri-A">Angle A (°)</label><input id="tri-A" class="form-control" type="number" step="any" min="0" max="180" value="60" required></div>
                <div class="col-4"><label class="form-label" for="tri-B">Angle B (°)</label><input id="tri-B" class="form-control" type="number" step="any" min="0" max="180" value="60" required></div>
                <div class="col-4"><label class="form-label" for="tri-C">Angle C (°)</label><input id="tri-C" class="form-control" type="number" step="any" min="0" max="180" value="60" required></div>
              </div>
            </fieldset>
            <div class="d-flex flex-wrap gap-2 mt-4">
              <button class="btn btn-primary flex-grow-1" type="submit">Classify triangle</button>
              <button class="btn btn-outline-secondary" type="reset">Reset</button>
            </div>
          </form>
          <div class="mt-3"><span class="small fw-semibold d-block mb-2">Try an example</span>
            <div class="d-flex gap-2 flex-wrap" id="tri-examples">
              <button class="btn btn-sm btn-outline-primary" type="button" data-example="equilateral">Equilateral</button>
              <button class="btn btn-sm btn-outline-primary" type="button" data-example="right">Right</button>
              <button class="btn btn-sm btn-outline-primary" type="button" data-example="obtuse">Obtuse</button>
            </div>
          </div>
          <div id="tri-error" class="alert alert-danger mt-3 mb-0" role="alert" hidden></div>
          <p class="small text-muted mt-3 mb-0">Displayed values use up to 6 significant digits. Classification uses unrounded values with a small numerical tolerance.</p>
        </div>
        <div class="col-lg-6">
          <div id="tri-result" aria-live="polite" aria-atomic="true" hidden>
            <h2 class="h5">Triangle classification</h2>
            <div class="row g-2 mt-1">
              <div class="col-6"><div class="tri-stat"><div class="small">By sides</div><div class="tri-type" id="tri-side-type"></div></div></div>
              <div class="col-6"><div class="tri-stat"><div class="small">By angles</div><div class="tri-type" id="tri-angle-type"></div></div></div>
            </div>
            <p class="fw-semibold mt-3 mb-2" id="tri-summary"></p>
            <p class="small mb-2" id="tri-side-reason"></p>
            <p class="small mb-3" id="tri-angle-reason"></p>
            <div class="table-responsive"><table class="table table-sm mb-2"><caption class="visually-hidden">Calculated interior angles</caption><thead><tr><th scope="col">Angle A</th><th scope="col">Angle B</th><th scope="col">Angle C</th></tr></thead><tbody><tr><td id="tri-out-A"></td><td id="tri-out-B"></td><td id="tri-out-C"></td></tr></tbody></table></div>
            <p id="tri-measurements" class="small tri-number mb-2"></p>
            <p id="tri-calculation" class="small tri-number text-muted mb-0"></p>
          </div>
        </div>
      </div>
      <figure class="mt-4 mb-0" id="tri-figure" hidden>
        <svg class="tri-diagram" viewBox="0 0 480 280" role="img" aria-labelledby="tri-svg-title tri-svg-desc">
          <title id="tri-svg-title">Triangle diagram</title><desc id="tri-svg-desc">Vertices A, B and C correspond to the input sides and angles.</desc>
          <path id="tri-shape" fill="#21a58922" stroke="#168574" stroke-width="2.5"/>
          <g id="tri-vertices" fill="#23324b" font-size="16"></g>
        </svg>
        <figcaption class="small text-muted text-center mt-2">Diagram scales to fit. Angle inputs determine the shape, not the actual size.</figcaption>
      </figure>
      <noscript><p class="alert alert-warning mt-3">Enable JavaScript to calculate. The classification rules and examples below can also be used manually.</p></noscript>
    </div>
  </section>

  <article class="tri-card tri-body tri-article mt-4">
    <h2 class="mt-0">How to classify a triangle</h2>
    <p>A triangle can be classified in two ways: by the lengths of its sides and by the sizes of its interior angles. For example, a triangle with sides 3, 4 and 5 is both <strong>scalene</strong> and <strong>right</strong>.</p>
    <p>Select an input method, enter three side lengths or three angles, and click <strong>Classify triangle</strong>. The calculator checks whether the inputs form a valid triangle, identifies both types, and shows a matching diagram.</p>
    <h2>Types of triangles by sides</h2>
    <div class="table-responsive"><table class="table table-bordered align-middle">
      <thead class="table-light"><tr><th scope="col">Type</th><th scope="col">Rule</th><th scope="col">Example sides</th></tr></thead>
      <tbody><tr><td>Equilateral</td><td>All three sides are equal.</td><td>5, 5, 5</td></tr><tr><td>Isosceles</td><td>At least two sides are equal.</td><td>5, 5, 6</td></tr><tr><td>Scalene</td><td>All three sides are different.</td><td>3, 4, 5</td></tr></tbody>
    </table></div>
    <p>Under the inclusive definition, an equilateral triangle is also isosceles. This calculator reports <strong>equilateral</strong> when all three sides are equal and uses <strong>isosceles</strong> when exactly two are equal.</p>
    <h2>Types of triangles by angles</h2>
    <div class="table-responsive"><table class="table table-bordered align-middle">
      <thead class="table-light"><tr><th scope="col">Type</th><th scope="col">Rule</th><th scope="col">Example angles</th></tr></thead>
      <tbody><tr><td>Acute</td><td>All three angles are less than 90°.</td><td>60°, 60°, 60°</td></tr><tr><td>Right</td><td>One angle equals 90°.</td><td>30°, 60°, 90°</td></tr><tr><td>Obtuse</td><td>One angle is greater than 90°.</td><td>30°, 40°, 110°</td></tr></tbody>
    </table></div>
    <h2>Formulas for classifying triangles</h2>
    <h3>1. Check the triangle inequality</h3>
    <p>All sides must be positive. After sorting them as x ≤ y ≤ z, a valid triangle satisfies:</p>
    <div class="tri-formula"><strong>x + y &gt; z</strong></div>
    <p>If x + y = z, the triangle is flat. If x + y &lt; z, the sides cannot meet to form a triangle.</p>
    <h3>2. Compare the squared side lengths</h3>
    <p>With z as the longest side:</p>
    <div class="tri-formula">
      <div><strong>x² + y² &gt; z² → Acute triangle</strong></div>
      <div><strong>x² + y² = z² → Right triangle</strong></div>
      <div><strong>x² + y² &lt; z² → Obtuse triangle</strong></div>
    </div>
    <h3>3. Calculate the interior angles</h3>
    <p>The cosine rule gives each angle from the three side lengths:</p>
    <div class="tri-formula">
      <div>A = cos⁻¹[(b² + c² − a²) / (2bc)]</div>
      <div>B = cos⁻¹[(a² + c² − b²) / (2ac)]</div>
      <div>C = cos⁻¹[(a² + b² − c²) / (2ab)]</div>
    </div>
    <p>Angles are expressed in degrees. In a valid planar triangle, <strong>A + B + C = 180°</strong>. Equal angles have equal opposite sides, so angle inputs also identify the side classification.</p>
    <h3>4. Find perimeter and area from sides</h3>
    <div class="tri-formula"><div>Perimeter P = a + b + c</div><div>Semiperimeter s = (a + b + c) / 2</div><div>Area Δ = √[s(s − a)(s − b)(s − c)]</div></div>
    <p>Perimeter uses the input length unit; area uses that unit squared. Angles alone do not determine perimeter or area because similar triangles can have different sizes.</p>
    <h2>Worked example: classify sides 3, 4 and 5</h2>
    <ol>
      <li><strong>Check validity:</strong> 3 + 4 &gt; 5, so the sides form a triangle.</li>
      <li><strong>Compare the sides:</strong> all three lengths differ, so it is scalene.</li>
      <li><strong>Compare squares:</strong> 3² + 4² = 9 + 16 = 25 = 5², so it is right.</li>
      <li><strong>Final answer:</strong> a scalene right triangle. Its angles are approximately 36.8699°, 53.1301° and 90°.</li>
    </ol>
    <p>Its perimeter is 12 units and its area is 6 square units.</p>
    <h3>Example: classify angles 40°, 40° and 100°</h3>
    <p>The angles total 180°, so they form a valid triangle. Two equal angles mean two equal opposite sides. The 100° angle is greater than 90°. Therefore, this is an <strong>isosceles obtuse triangle</strong>.</p>
    <h2>Frequently asked questions</h2>
    <h3>Can a triangle be both isosceles and right?</h3><p>Yes. A 45°–45°–90° triangle has two equal sides and one right angle.</p>
    <h3>Is an equilateral triangle always acute?</h3><p>Yes. Each interior angle of an equilateral triangle is 60°, which is less than 90°.</p>
    <h3>Can a scalene triangle be acute, right or obtuse?</h3><p>Yes. Scalene describes unequal side lengths. Depending on its angles, a scalene triangle can be acute, right or obtuse.</p>
    <h3>Why are my side lengths invalid?</h3><p>Each side must be positive, and the sum of the two shorter sides must exceed the longest side. For example, 2, 3 and 6 cannot form a triangle.</p>
    <h3>Can I classify a triangle using only its angles?</h3><p>Yes. The largest angle determines whether it is acute, right or obtuse. Equal angles identify equal opposite sides. Angles alone cannot determine the triangle’s actual side lengths or area.</p>
    <p class="small text-muted">Numerical note: equality comparisons use a relative tolerance of 10⁻⁹ for sides and 10⁻⁷ degrees for angles. Angle totals within 10⁻⁷ degrees of 180° are normalized to 180°. Extremely flat triangles are rejected when reliable calculation is not possible.</p>
  </article>
</div>
<script>
(function () {
  'use strict';
  const root = document.getElementById('tri-app');
  const el = id => root.querySelector('#tri-' + id);
  let mode = 'sides';
  const fmt = value => Number(value.toPrecision(6)).toString();
  const closeSide = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(a, b);
  const closeAngle = (a, b) => Math.abs(a - b) <= 1e-7;
  function classify(values, inputMode) {
    if (!values.every(Number.isFinite) || values.some(value => value <= 0)) throw new Error('Enter a finite number greater than zero in every field.');
    let sides, angles, area = null, perimeter = null;
    if (inputMode === 'sides') {
      const scale = Math.max(...values);
      sides = values.map(value => value / scale);
      const [x, y, z] = [...sides].sort((a, b) => b - a);
      if (z <= x - y) throw new Error('Invalid triangle: the two shorter sides must add up to more than the longest side.');
      // Stable Heron formula using normalized sides.
      const delta = Math.sqrt((x + (y + z)) * (z - (x - y)) * (z + (x - y)) * (x + (y - z))) / 4;
      if (!(delta > 1e-12)) throw new Error('This triangle is too close to flat for a reliable calculation.');
      angles = sides.map((a, i) => {
        const b = sides[(i + 1) % 3], c = sides[(i + 2) % 3];
        return Math.atan2(4 * delta, b * b + c * c - a * a) * 180 / Math.PI;
      });
      area = delta * scale * scale;
      perimeter = values.reduce((sum, value) => sum + value, 0);
    } else {
      if (values.some(value => value >= 180)) throw new Error('Every angle must be less than 180°.');
      const total = values.reduce((sum, value) => sum + value, 0);
      if (Math.abs(total - 180) > 1e-7) throw new Error('The angles must total 180°. Your total is ' + fmt(total) + '°.');
      angles = values.map(value => value * 180 / total);
      if (Math.min(...angles) < 1e-7) throw new Error('This triangle is too close to flat for a reliable calculation.');
      sides = angles.map(value => Math.sin(value * Math.PI / 180));
      const scale = Math.max(...sides);
      sides = sides.map(value => value / scale);
    }
    const comparisons = inputMode === 'sides' ? sides : angles;
    const equal = inputMode === 'sides' ? closeSide : closeAngle;
    const pairs = [equal(comparisons[0], comparisons[1]), equal(comparisons[1], comparisons[2]), equal(comparisons[0], comparisons[2])];
    const sideType = pairs.every(Boolean) ? 'Equilateral' : pairs.some(Boolean) ? 'Isosceles' : 'Scalene';
    const largestAngle = Math.max(...angles);
    const angleType = closeAngle(largestAngle, 90) ? 'Right' : largestAngle > 90 ? 'Obtuse' : 'Acute';
    return { sides, angles, sideType, angleType, area, perimeter, largestAngle };
  }
  function draw(result) {
    const [, b, c] = result.sides;
    const radians = result.angles[0] * Math.PI / 180;
    const points = [[0, 0], [c, 0], [b * Math.cos(radians), b * Math.sin(radians)]];
    const xs = points.map(point => point[0]), ys = points.map(point => point[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), maxY = Math.max(...ys);
    const factor = Math.min(380 / (maxX - minX), 190 / maxY);
    const left = (480 - (maxX - minX) * factor) / 2;
    const bottom = (280 + maxY * factor) / 2;
    const vertices = points.map(([x, y]) => [left + (x - minX) * factor, bottom - y * factor]);
    el('shape').setAttribute('d', 'M' + vertices.map(point => point.join(',')).join(' L') + ' Z');
    el('vertices').replaceChildren();
    vertices.forEach(([x, y], i) => {
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.setAttribute('r', '4');
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', x); label.setAttribute('y', y + (i === 2 ? -14 : 25));
      label.setAttribute('text-anchor', 'middle'); label.textContent = 'ABC'[i];
      el('vertices').append(dot, label);
    });
    el('svg-desc').textContent = result.sideType + ' ' + result.angleType.toLowerCase() + ' triangle with vertices A, B and C.';
  }
  function calculate() {
    el('error').hidden = true;
    try {
      const ids = mode === 'sides' ? ['a', 'b', 'c'] : ['A', 'B', 'C'];
      const values = ids.map(id => el(id).valueAsNumber);
      const r = classify(values, mode);
      el('side-type').textContent = r.sideType;
      el('angle-type').textContent = r.angleType;
      el('summary').textContent = r.sideType + ' ' + r.angleType.toLowerCase() + ' triangle';
      el('side-reason').textContent = r.sideType === 'Equilateral' ? 'All three sides are equal (within numerical tolerance).' : r.sideType === 'Isosceles' ? 'Two sides are equal (within numerical tolerance).' : 'All three side lengths are different.';
      el('angle-reason').textContent = r.angleType === 'Right' ? 'The largest angle is 90° (within numerical tolerance).' : r.angleType === 'Acute' ? 'All three angles are less than 90°.' : 'The largest angle is greater than 90°.';
      r.angles.forEach((angle, i) => { el('out-' + 'ABC'[i]).textContent = fmt(angle) + '°'; });
      const measure = value => Number.isFinite(value) && value > 0 ? fmt(value) : 'outside supported numeric range';
      el('measurements').textContent = mode === 'sides' ? 'Perimeter: ' + measure(r.perimeter) + ' units • Area: ' + measure(r.area) + ' square units' : 'Side ratio a : b : c ≈ ' + r.sides.map(fmt).join(' : ') + ' (longest side = 1).';
      el('calculation').textContent = mode === 'sides' ? 'Angles calculated from the side lengths. Largest angle ≈ ' + fmt(r.largestAngle) + '°.' : 'Equal angles have equal opposite sides. Actual perimeter and area require a side length.';
      draw(r);
      el('result').hidden = false; el('figure').hidden = false;
    } catch (error) {
      el('result').hidden = true; el('figure').hidden = true;
      el('error').textContent = error.message; el('error').hidden = false;
    }
  }
  function setMode(next) {
    mode = next;
    const isSide = mode === 'sides';
    el('sides').hidden = !isSide; el('sides').disabled = !isSide;
    el('angles').hidden = isSide; el('angles').disabled = isSide;
    [['side-mode', isSide], ['angle-mode', !isSide]].forEach(([id, active]) => {
      el(id).setAttribute('aria-pressed', String(active));
      el(id).classList.toggle('btn-primary', active); el(id).classList.toggle('btn-outline-primary', !active);
    });
    calculate();
  }
  el('form').addEventListener('submit', event => { event.preventDefault(); calculate(); });
  el('form').addEventListener('input', () => { el('result').hidden = true; el('figure').hidden = true; el('error').hidden = true; });
  el('form').addEventListener('reset', () => { setTimeout(calculate, 0); });
  el('side-mode').addEventListener('click', () => setMode('sides'));
  el('angle-mode').addEventListener('click', () => setMode('angles'));
  el('examples').addEventListener('click', event => {
    const button = event.target.closest('[data-example]');
    if (!button) return;
    const examples = mode === 'sides' ? { equilateral: [5, 5, 5], right: [3, 4, 5], obtuse: [5, 5, 8] } : { equilateral: [60, 60, 60], right: [45, 45, 90], obtuse: [40, 40, 100] };
    const ids = mode === 'sides' ? ['a', 'b', 'c'] : ['A', 'B', 'C'];
    examples[button.dataset.example].forEach((value, i) => { el(ids[i]).value = value; });
    calculate();
  });
  calculate();
})();
</script>
