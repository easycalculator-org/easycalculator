---
layout: default
title: Circumscribed Circle Calculator – Find Circumcircle of a Triangle
permalink: /circumscribed-circle-calculator
description: "Use the Circumscribed Circle Calculator to find the circumcircle radius and center of a triangle. Quickly compute the circle passing through all triangle vertices."
last_modified_at: 2026-03-11
---
<style>
.ec-circ{--cc-blue:#2459c4;max-width:1100px;margin:28px auto;padding:0 12px;color:#23324b}
.ec-circ *{box-sizing:border-box}.ec-circ [hidden]{display:none!important}
.ec-circ .cc-card{border:1px solid #dce5f1;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 8px 28px #1936530b}
.ec-circ .cc-head{padding:24px;background:linear-gradient(125deg,#eef5ff,#f2fcfa)}
.ec-circ h1{font-size:clamp(1.65rem,4vw,2.2rem);font-weight:700}
.ec-circ .cc-body{padding:clamp(16px,3vw,28px)}
.ec-circ .cc-value{font-size:1.5rem;font-weight:700;color:var(--cc-blue);overflow-wrap:anywhere}
.ec-circ .cc-stat{height:100%;background:#f3f7fd;border:1px solid #e0e9f6;border-radius:12px;padding:14px}
.ec-circ .cc-formula{background:#f3f7fd;padding:16px;border-radius:8px;overflow-wrap:anywhere}
.ec-circ .cc-mode{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}
.ec-circ .cc-mode button{flex:1 1 160px}
.ec-circ .cc-diagram{width:100%;height:auto;max-height:330px;display:block;background:#fbfdff;border-radius:12px}
.ec-circ .cc-article{line-height:1.8}.ec-circ .cc-article h2{font-size:1.5rem;margin-top:30px}.ec-circ .cc-article h3{font-size:1.15rem;margin-top:20px}
.ec-circ .form-control{min-height:46px}.ec-circ .btn{min-height:44px}
</style>
<div class="ec-circ" id="cc-app">
  <section class="cc-card" aria-labelledby="cc-title">
    <header class="cc-head text-center">
      <h1 id="cc-title">Circumscribed Circle Calculator</h1>
      <p class="mb-0 text-muted">Find the radius, diameter, area and center of the circle passing through all three vertices of a triangle.</p>
    </header>
    <div class="cc-body">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="cc-mode" role="group" aria-label="Input method">
            <button type="button" class="btn btn-primary" id="cc-side-mode" aria-pressed="true">Three side lengths</button>
            <button type="button" class="btn btn-outline-primary" id="cc-point-mode" aria-pressed="false">Vertex coordinates</button>
          </div>
          <form id="cc-form">
            <div id="cc-sides">
              <p class="small text-muted">Enter all side lengths in the same unit. Side a = BC, b = CA and c = AB.</p>
              <div class="row g-3">
                <div class="col-4"><label for="cc-a" class="form-label">Side a</label><input id="cc-a" class="form-control" type="number" step="any" min="0" value="3" required></div>
                <div class="col-4"><label for="cc-b" class="form-label">Side b</label><input id="cc-b" class="form-control" type="number" step="any" min="0" value="4" required></div>
                <div class="col-4"><label for="cc-c" class="form-label">Side c</label><input id="cc-c" class="form-control" type="number" step="any" min="0" value="5" required></div>
              </div>
            </div>
            <fieldset id="cc-points" hidden disabled>
              <legend class="fs-6">Triangle vertices on a Cartesian plane</legend>
              <p class="small text-muted">Use the same unit for both axes. These are planar coordinates, not latitude and longitude.</p>
              <div class="row g-2">
                <div class="col-6"><label for="cc-ax" class="form-label">A: x₁</label><input id="cc-ax" class="form-control" type="number" step="any" value="0" required></div>
                <div class="col-6"><label for="cc-ay" class="form-label">A: y₁</label><input id="cc-ay" class="form-control" type="number" step="any" value="0" required></div>
                <div class="col-6"><label for="cc-bx" class="form-label">B: x₂</label><input id="cc-bx" class="form-control" type="number" step="any" value="4" required></div>
                <div class="col-6"><label for="cc-by" class="form-label">B: y₂</label><input id="cc-by" class="form-control" type="number" step="any" value="0" required></div>
                <div class="col-6"><label for="cc-cx" class="form-label">C: x₃</label><input id="cc-cx" class="form-control" type="number" step="any" value="0" required></div>
                <div class="col-6"><label for="cc-cy" class="form-label">C: y₃</label><input id="cc-cy" class="form-control" type="number" step="any" value="3" required></div>
              </div>
            </fieldset>
            <div class="d-flex flex-wrap gap-2 mt-4">
              <button class="btn btn-primary flex-grow-1" type="submit">Calculate circumcircle</button>
              <button class="btn btn-outline-secondary" type="button" id="cc-example">Load example</button>
              <button class="btn btn-outline-secondary" type="reset">Reset</button>
            </div>
          </form>
          <div class="alert alert-danger mt-3 mb-0" id="cc-error" role="alert" hidden></div>
          <p class="small text-muted mt-3 mb-0">Results use your input unit; areas use that unit squared. Displayed values are rounded to 6 significant digits.</p>
        </div>
        <div class="col-lg-6">
          <div id="cc-result" aria-live="polite" aria-atomic="true">
            <h2 class="h5 mb-3">Circumcircle results</h2>
            <div class="row g-2">
              <div class="col-6"><div class="cc-stat"><div class="small">Circumradius R</div><div class="cc-value" id="cc-radius"></div></div></div>
              <div class="col-6"><div class="cc-stat"><div class="small">Diameter 2R</div><div class="cc-value" id="cc-diameter"></div></div></div>
              <div class="col-6"><div class="cc-stat"><div class="small">Circle area</div><div class="cc-value" id="cc-area"></div></div></div>
              <div class="col-6"><div class="cc-stat"><div class="small">Circumference</div><div class="cc-value" id="cc-perimeter"></div></div></div>
            </div>
            <p class="mt-3 mb-1"><strong>Circumcenter O:</strong> <span id="cc-center"></span></p>
            <p class="mb-1"><strong>Triangle area Δ:</strong> <span id="cc-triangle-area"></span></p>
            <p class="small text-muted" id="cc-note"></p>
            <p class="small" id="cc-equation"></p>
          </div>
        </div>
      </div>
      <figure class="mt-4 mb-0" id="cc-figure">
        <svg id="cc-svg" class="cc-diagram" viewBox="0 0 480 330" role="img" aria-labelledby="cc-svg-title cc-svg-desc">
          <title id="cc-svg-title">Triangle and its circumscribed circle</title>
          <desc id="cc-svg-desc">The circle passes through vertices A, B and C. O marks the circumcenter.</desc>
          <circle cx="240" cy="165" r="125" fill="#eef5ff" stroke="#2459c4" stroke-width="2"/>
          <path id="cc-triangle" fill="#22a69922" stroke="#168574" stroke-width="2"/>
          <path id="cc-radius-line" stroke="#74849c" stroke-dasharray="5 4"/>
          <circle cx="240" cy="165" r="4" fill="#2459c4"/><text x="249" y="156" fill="#2459c4">O</text>
          <g id="cc-vertices"></g>
        </svg>
        <figcaption class="text-center small text-muted mt-2">Circumcircle through A, B and C. The diagram automatically scales to fit.</figcaption>
      </figure>
      <noscript><p class="alert alert-warning mt-3">Enable JavaScript to use the calculator. Formulas and examples are available below.</p></noscript>
    </div>
  </section>

  <article class="cc-card cc-body cc-article mt-4">
    <h2 class="mt-0">What is a circumscribed circle?</h2>
    <p>A circumscribed circle, also called a <strong>circumcircle</strong>, passes through all three vertices of a triangle. Its center is the <strong>circumcenter</strong>, where the perpendicular bisectors of the triangle’s sides meet. Every triangle with three non-collinear vertices has exactly one circumcircle.</p>
    <h2>How to use this calculator</h2>
    <ol>
      <li>Select <strong>Three side lengths</strong> or <strong>Vertex coordinates</strong>.</li>
      <li>Enter three positive sides that form a triangle, or the x and y coordinates of three distinct, non-collinear points.</li>
      <li>Click <strong>Calculate circumcircle</strong> to see the radius, diameter, area, circumference and center.</li>
    </ol>
    <p>Side lengths determine the radius but do not specify the triangle’s position. In side mode, this calculator places A at (0, 0), B at (c, 0) and C above the x-axis. The reported center uses that placement. Use coordinate mode for the center of a triangle in your own coordinate system.</p>
    <h2>Circumscribed circle formula</h2>
    <p>For side lengths a, b and c, first find the semiperimeter s and triangle area Δ using Heron’s formula:</p>
    <div class="cc-formula">
      <div><strong>s = (a + b + c) / 2</strong></div>
      <div><strong>Δ = √[s(s − a)(s − b)(s − c)]</strong></div>
      <div><strong>Circumradius: R = abc / (4Δ)</strong></div>
    </div>
    <ul class="mt-3">
      <li><strong>Diameter:</strong> d = 2R</li>
      <li><strong>Circle area:</strong> A<sub>circle</sub> = πR²</li>
      <li><strong>Circumference:</strong> C<sub>circle</sub> = 2πR</li>
    </ul>
    <p>The side lengths must satisfy a + b &gt; c, a + c &gt; b and b + c &gt; a. Equality produces a flat triangle with zero area and no finite circumcircle.</p>
    <h3>Circumcenter from coordinates</h3>
    <p>For vertices A(x₁, y₁), B(x₂, y₂) and C(x₃, y₃), translate A to the origin. Define u = x₂ − x₁, v = y₂ − y₁, p = x₃ − x₁ and q = y₃ − y₁. Let K = 2(uq − vp).</p>
    <div class="cc-formula">
      <div>h = [q(u² + v²) − v(p² + q²)] / K</div>
      <div>k = [u(p² + q²) − p(u² + v²)] / K</div>
      <div><strong>Circumcenter O = (x₁ + h, y₁ + k)</strong></div>
      <div><strong>R = √(h² + k²)</strong></div>
    </div>
    <p>If K = 0, the points are collinear or repeated and there is no unique circumcircle. With center (Oₓ, Oᵧ), the circle equation is (x − Oₓ)² + (y − Oᵧ)² = R².</p>
    <h2>Worked example: 3–4–5 triangle</h2>
    <p>Take a triangle with sides a = 3 cm, b = 4 cm and c = 5 cm.</p>
    <ol>
      <li>Semiperimeter: s = (3 + 4 + 5) / 2 = <strong>6 cm</strong>.</li>
      <li>Triangle area: Δ = √[6 × 3 × 2 × 1] = <strong>6 cm²</strong>.</li>
      <li>Circumradius: R = (3 × 4 × 5) / (4 × 6) = <strong>2.5 cm</strong>.</li>
      <li>Diameter: 2 × 2.5 = <strong>5 cm</strong>.</li>
      <li>Circle area: π × 2.5² ≈ <strong>19.635 cm²</strong>.</li>
      <li>Circumference: 2π × 2.5 ≈ <strong>15.708 cm</strong>.</li>
    </ol>
    <p>Using the side-mode placement, A = (0, 0), B = (5, 0) and C = (3.2, 2.4). The circumcenter is <strong>O = (2.5, 0)</strong>, the midpoint of the hypotenuse.</p>
    <h3>Coordinate example</h3>
    <p>For A = (0, 0), B = (4, 0) and C = (0, 3), the circumcenter is <strong>(2, 1.5)</strong> and the radius is <strong>2.5 units</strong>. The equation is <strong>(x − 2)² + (y − 1.5)² = 6.25</strong>. Both examples describe 3–4–5 right triangles in different placements.</p>
    <h2>Where is the circumcenter?</h2>
    <div class="table-responsive"><table class="table table-bordered align-middle">
      <thead class="table-light"><tr><th scope="col">Triangle type</th><th scope="col">Circumcenter location</th></tr></thead>
      <tbody><tr><td>Acute triangle</td><td>Inside the triangle</td></tr><tr><td>Right triangle</td><td>At the midpoint of the hypotenuse</td></tr><tr><td>Obtuse triangle</td><td>Outside the triangle</td></tr><tr><td>Equilateral triangle</td><td>At the common center; R = a / √3</td></tr></tbody>
    </table></div>
    <h2>Frequently asked questions</h2>
    <h3>Is a circumcircle the same as an incircle?</h3><p>No. A circumcircle passes through the triangle’s vertices. An incircle lies inside the triangle and touches all three sides.</p>
    <h3>Can the circumcenter be outside the triangle?</h3><p>Yes. The circumcenter of an obtuse triangle lies outside the triangle.</p>
    <h3>What is the circumradius of a right triangle?</h3><p>It is half the hypotenuse. For a hypotenuse of 10 cm, the circumradius is 5 cm.</p>
    <h3>Can three points on a straight line form a circumcircle?</h3><p>No. Three distinct collinear points cannot lie on a finite circle. Enter three non-collinear points.</p>
    <h3>Can I find the center from only three side lengths?</h3><p>You can find the center relative to an assumed placement of the triangle. To find its center in an existing coordinate system, enter the vertex coordinates.</p>
  </article>
</div>
<script>
(function () {
  'use strict';
  const root = document.getElementById('cc-app');
  const el = id => root.querySelector('#cc-' + id);
  const form = el('form');
  let mode = 'sides';
  const fmt = n => Number(n.toPrecision(6)).toString();
  const read = id => {
    const input = el(id), value = input.valueAsNumber;
    if (!Number.isFinite(value)) throw new Error('Enter a finite number in every active field.');
    return value;
  };
  function solve() {
    let ax = 0, ay = 0, bx, by = 0, cx, cy;
    if (mode === 'sides') {
      const a = read('a'), b = read('b'), c = read('c');
      if (Math.min(a, b, c) <= 0) throw new Error('All side lengths must be greater than zero.');
      const scale = Math.max(a, b, c);
      const [x, y, z] = [a / scale, b / scale, c / scale].sort((m, n) => n - m);
      if (z <= x - y) throw new Error('These sides do not form a triangle. The two shorter sides must add up to more than the longest side.');
      // Stable rearrangement of Heron’s formula, normalized to reduce overflow.
      const area = Math.sqrt((x + (y + z)) * (z - (x - y)) * (z + (x - y)) * (x + (y - z))) / 4;
      const an = a / scale, bn = b / scale, cn = c / scale;
      bx = c;
      cx = ((bn - an) * (bn + an) + cn * cn) / (2 * cn) * scale;
      cy = 2 * area / cn * scale;
    } else {
      ax = read('ax'); ay = read('ay'); bx = read('bx'); by = read('by'); cx = read('cx'); cy = read('cy');
    }
    const scale = Math.max(Math.abs(bx - ax), Math.abs(by - ay), Math.abs(cx - ax), Math.abs(cy - ay));
    if (!(scale > 0) || !Number.isFinite(scale)) throw new Error('Use three distinct points with a smaller coordinate range.');
    const u = (bx - ax) / scale, v = (by - ay) / scale;
    const p = (cx - ax) / scale, q = (cy - ay) / scale;
    const cross = u * q - v * p;
    if (Math.abs(cross) <= 1e-12) throw new Error('The triangle is collinear or too close to flat for a reliable calculation.');
    const h = (q * (u * u + v * v) - v * (p * p + q * q)) / (2 * cross);
    const k = (u * (p * p + q * q) - p * (u * u + v * v)) / (2 * cross);
    const radius = Math.hypot(h, k) * scale;
    const ox = ax + h * scale, oy = ay + k * scale;
    const triangleArea = Math.abs(cross) * scale * scale / 2;
    const circleArea = Math.PI * radius * radius, circumference = 2 * Math.PI * radius;
    if (![radius, ox, oy, triangleArea, circleArea, circumference].every(Number.isFinite) || circleArea <= 0 || triangleArea <= 0) {
      throw new Error('These values exceed the supported numerical range. Rescale the inputs using another unit.');
    }
    return { radius, ox, oy, triangleArea, circleArea, circumference,
      // Normalized relative vertices avoid loss of precision in the diagram.
      vertices: [[-h, -k], [u - h, v - k], [p - h, q - k]].map(([x, y]) => [240 + x / Math.hypot(h, k) * 125, 165 - y / Math.hypot(h, k) * 125]) };
  }
  function calculate() {
    el('error').hidden = true;
    try {
      const r = solve();
      for (const [id, value] of Object.entries({ radius: r.radius, diameter: 2 * r.radius, area: r.circleArea, perimeter: r.circumference, 'triangle-area': r.triangleArea })) el(id).textContent = fmt(value);
      el('center').textContent = '(' + fmt(r.ox) + ', ' + fmt(r.oy) + ')';
      el('note').textContent = mode === 'sides' ? 'Center for A = (0, 0), B = (c, 0), with C above the x-axis.' : 'Center in your input coordinate system.';
      const term = (axis, n) => '(' + axis + (n < 0 ? ' + ' : ' − ') + fmt(Math.abs(n)) + ')²';
      el('equation').textContent = term('x', r.ox) + ' + ' + term('y', r.oy) + ' = ' + fmt(r.radius * r.radius);
      el('triangle').setAttribute('d', 'M' + r.vertices.map(point => point.join(',')).join(' L') + ' Z');
      el('radius-line').setAttribute('d', 'M240,165 L' + r.vertices[0].join(','));
      el('vertices').replaceChildren();
      r.vertices.forEach(([x, y], i) => {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', x); dot.setAttribute('cy', y); dot.setAttribute('r', '4'); dot.setAttribute('fill', '#168574');
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', x + (x - 240) / 125 * 15); label.setAttribute('y', y + (y - 165) / 125 * 15 + 5);
        label.setAttribute('text-anchor', 'middle'); label.setAttribute('fill', '#23324b'); label.textContent = 'ABC'[i];
        el('vertices').append(dot, label);
      });
      el('result').hidden = false; el('figure').hidden = false;
    } catch (error) {
      el('error').textContent = error.message; el('error').hidden = false;
      el('result').hidden = true; el('figure').hidden = true;
    }
  }
  function setMode(next) {
    mode = next;
    const sides = next === 'sides';
    el('sides').hidden = !sides;
    el('sides').querySelectorAll('input').forEach(input => { input.disabled = !sides; });
    el('points').hidden = sides; el('points').disabled = sides;
    [['side-mode', sides], ['point-mode', !sides]].forEach(([id, active]) => {
      el(id).setAttribute('aria-pressed', String(active));
      el(id).classList.toggle('btn-primary', active); el(id).classList.toggle('btn-outline-primary', !active);
    });
    calculate();
  }
  form.addEventListener('submit', event => { event.preventDefault(); calculate(); });
  form.addEventListener('input', () => { el('result').hidden = true; el('figure').hidden = true; el('error').hidden = true; });
  form.addEventListener('reset', () => { setTimeout(() => setMode(mode), 0); });
  el('side-mode').addEventListener('click', () => setMode('sides'));
  el('point-mode').addEventListener('click', () => setMode('points'));
  el('example').addEventListener('click', () => {
    const values = mode === 'sides' ? { a: 3, b: 4, c: 5 } : { ax: 0, ay: 0, bx: 4, by: 0, cx: 0, cy: 3 };
    Object.entries(values).forEach(([id, value]) => { el(id).value = value; });
    calculate();
  });
  calculate();
})();
</script>