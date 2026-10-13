---
layout: default
title: "Midpoint Calculator – Midpoint Formula & Equation"
permalink: /midpoint-calculator
description: "Find the midpoint between two points with our Midpoint Calculator. Learn the midpoint formula and equation for midpoint with simple step-by-step examples."
image: "/assets/images/og/midpoint-calculator.jpg"
last_modified_at: 2026-10-13
---
<style>
#ec-midpoint{--ec-blue:#185adb;--ec-ink:#172b4d;--ec-muted:#53657d;color:var(--ec-ink);font-family:system-ui,-apple-system,sans-serif;max-width:1140px;margin:auto;padding:24px 12px}
#ec-midpoint .ec-panel{background:#fff;border:1px solid #dee6ef;border-radius:18px;padding:24px;height:100%}
#ec-midpoint .ec-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.12em;color:var(--ec-blue);text-transform:uppercase}
#ec-midpoint h2{font-size:1.3rem;font-weight:700}#ec-midpoint h3{font-size:1.05rem;font-weight:700}
#ec-midpoint .ec-fields{display:flex;row-gap:12px}#ec-midpoint fieldset{border:0;padding:0;margin:0 0 18px;min-width:0}#ec-midpoint legend{font-size:.95rem;font-weight:650;margin-bottom:8px}
#ec-midpoint label{font-size:.85rem;margin-bottom:5px}#ec-midpoint input{min-height:46px;border-radius:9px}
#ec-midpoint .ec-dot{display:inline-block;width:9px;height:9px;border-radius:50%;margin-right:6px}
#ec-midpoint .ec-examples{display:flex;gap:7px;flex-wrap:wrap;margin:8px 0 20px}#ec-midpoint .ec-examples button{font-size:.8rem;border:1px solid #d7e2f0;background:#f5f8fc;color:#284363;border-radius:20px;padding:6px 11px}
#ec-midpoint button:focus-visible,#ec-midpoint summary:focus-visible{outline:3px solid #83afff;outline-offset:3px}
#ec-midpoint .ec-result{background:#eff5ff;border:1px solid #cbdfff;border-radius:12px;padding:16px;margin-top:20px}
#ec-midpoint .ec-answer{font-size:1.65rem;font-weight:700;color:#164cba;overflow-wrap:anywhere}
#ec-midpoint .ec-steps{font-size:.9rem;margin-top:10px;overflow-wrap:anywhere}#ec-midpoint .ec-steps p{margin:4px 0}
#ec-midpoint .ec-muted{color:var(--ec-muted);font-size:.85rem}#ec-midpoint svg{width:100%;height:auto;display:block;background:#fbfcfe;border:1px solid #e5ebf2;border-radius:12px}
#ec-midpoint .ec-legend{display:flex;gap:8px 18px;flex-wrap:wrap;font-size:.85rem;margin:12px 0;overflow-wrap:anywhere}
#ec-midpoint .ec-formula{text-align:center;border-radius:10px;background:#f3f6fa;padding:12px;font-size:1rem;margin-top:14px}
#ec-midpoint article{max-width:880px;margin:36px auto 8px;line-height:1.75}#ec-midpoint article h2{margin-top:28px}#ec-midpoint article h3{margin-top:20px}
#ec-midpoint details{border-bottom:1px solid #e1e7ef;padding:12px 0}#ec-midpoint summary{font-weight:600;cursor:pointer}#ec-midpoint details p{margin:10px 0 0}
#ec-midpoint [hidden]{display:none!important}
@media(max-width:575px){#ec-midpoint .ec-panel{padding:17px}#ec-midpoint{padding-top:16px}}
#ec-midpoint,#ec-midpoint *{text-shadow:none!important}
#ec-midpoint .ec-panel,#ec-midpoint .btn,#ec-midpoint input{box-shadow:none!important}
#ec-midpoint svg text{stroke:none!important;filter:none!important;font-family:system-ui,-apple-system,sans-serif}
#ec-midpoint input:focus-visible{outline:3px solid #b8d2ff;outline-offset:2px}
#ec-midpoint .ec-byline{font-size:.875rem;color:#53657d;margin-top:12px}
#ec-midpoint article{max-width:960px;color:#24364b;font-size:1rem;line-height:1.8}
#ec-midpoint article h2{font-size:1.45rem;line-height:1.35;color:#172b4d}
#ec-midpoint article h3{font-size:1.13rem;line-height:1.45}
#ec-midpoint .ec-formula-box{background:#f4f7fb;border-radius:2px;padding:18px;margin:18px 0;overflow-wrap:anywhere}
#ec-midpoint .ec-formula-box p:last-child{margin-bottom:0}
#ec-midpoint .ec-example{border:1px solid #dfe6ef;border-radius:12px;padding:20px;margin:16px 0;background:#fff}
#ec-midpoint .table th,#ec-midpoint .table td{padding:12px;vertical-align:middle}
#ec-midpoint .ec-faq{border:1px solid #dfe6ef;border-radius:10px;padding:16px 18px;margin-bottom:12px}
#ec-midpoint .ec-faq h3{margin:0 0 8px}#ec-midpoint .ec-faq p{margin:0}
</style>

<section id="ec-midpoint" >
<h1>Midpoint Calculator</h1>
<p>Find the point halfway between two coordinates. Enter your endpoints to see the midpoint, calculation steps and a visual explanation.</p>
<div class="row g-4">
<div class="col-lg-5"><div class="ec-panel card border">
<h2 class="mb-3">Enter two endpoints</h2>
<form id="ec-form" novalidate>
<fieldset><legend><span class="ec-dot" style="background:#2563eb"></span>Point A · First endpoint</legend><div class="ec-fields row">
<div class="col-6"><label class="form-label" for="ec-x1">x₁ coordinate</label><input id="ec-x1" class="form-control" type="number" step="any" value="2" required></div>
<div class="col-6"><label class="form-label" for="ec-y1">y₁ coordinate</label><input id="ec-y1" class="form-control" type="number" step="any" value="4" required></div></div></fieldset>
<fieldset><legend><span class="ec-dot" style="background:#7c3aed"></span>Point B · Second endpoint</legend><div class="ec-fields row">
<div class="col-6"><label class="form-label" for="ec-x2">x₂ coordinate</label><input id="ec-x2" class="form-control" type="number" step="any" value="8" required></div>
<div class="col-6"><label class="form-label" for="ec-y2">y₂ coordinate</label><input id="ec-y2" class="form-control" type="number" step="any" value="10" required></div></div></fieldset>
<div class="ec-muted">Try an example</div><div class="ec-examples"><button class="btn btn-sm btn-outline-primary" type="button" data-values="2,4,8,10">Positive</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="-6,3,4,-5">Negative</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="3,2,3,10">Vertical</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="-4,2,6,2">Horizontal</button></div>
<div class="d-flex gap-2"><button class="btn btn-primary flex-grow-1" type="submit">Calculate midpoint</button><button class="btn btn-outline-secondary" type="reset">Reset</button></div>
<p id="ec-error" class="text-danger small mt-3 mb-0" role="alert" hidden></p>
</form>
<div id="ec-result" class="ec-result" role="status" aria-live="polite" aria-atomic="true"><div class="ec-muted">Midpoint · M(x, y)</div><div id="ec-answer" class="ec-answer"></div><div id="ec-steps" class="ec-steps"></div></div>
<p class="ec-muted mt-2 mb-0">Decimals and negative values accepted. Display rounded to 10 significant digits where needed.</p>
</div></div>
<div class="col-lg-7"><div class="ec-panel card border"><div class="d-flex justify-content-between align-items-center mb-2"><h2 class="mb-0">Visual explanation</h2><span class="ec-muted">A → M → B</span></div>
<p class="ec-muted">M divides the line segment into two equal halves.</p>
<figure class="mb-0"><svg id="ec-graph" viewBox="0 0 520 360" role="img" aria-labelledby="ec-svg-title ec-svg-desc"><title id="ec-svg-title">Midpoint coordinate diagram</title><desc id="ec-svg-desc">The calculated midpoint and endpoints are shown on a coordinate grid.</desc><g id="ec-drawing"></g></svg>
<figcaption><div id="ec-legend" class="ec-legend"></div><p id="ec-caption" class="ec-muted mb-0">Equal scale on both axes. The view centers on the midpoint.</p></figcaption></figure>
<div class="ec-formula"><strong>Midpoint formula</strong><br>M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)</div>
</div></div></div>
<noscript><p class="alert alert-warning mt-3">Enable JavaScript to use the calculator and interactive diagram.</p></noscript>

<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>3 min read</span>
    </div>
  </div>
<!-- Article-->
<h2>Midpoint formula: find the center between two points</h2>
<p>The <strong>midpoint formula</strong> finds the point halfway along a straight line segment. It is useful in coordinate geometry when you need to locate the center between two endpoints. This guide explains the <strong>equation for midpoint</strong> using simple steps, worked examples and a coordinate diagram.</p>
<div class="p-4 bg-light rounded">
<h2>What is a midpoint?</h2>
<p>A midpoint divides a line segment into two equal parts. If A and B are the endpoints and M is the midpoint, then <strong>AM = MB</strong>. For example, the midpoint between 2 and 8 on a number line is 5: it is 3 units away from both numbers.</p>
<p>On a coordinate plane, a point has an x-coordinate for its horizontal position and a y-coordinate for its vertical position. To find the midpoint, average each pair of coordinates separately.</p>
</div>
<div class="p-3">
<h2>What is the equation for midpoint?</h2>
<p>For endpoints <strong>A(x₁, y₁)</strong> and <strong>B(x₂, y₂)</strong>, use:</p>
<div class="ec-formula-box"><p class="mb-2"><strong>M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)</strong></p><p>x-coordinate of M = (x₁ + x₂) / 2<br>y-coordinate of M = (y₁ + y₂) / 2</p></div>
<p>Here, x₁ and y₁ belong to the first endpoint, while x₂ and y₂ belong to the second endpoint. M is the midpoint. Add x to x and y to y; do not mix the coordinates.</p>
</div>


<h2>How to use the midpoint calculator</h2>
<ol><li>Enter the x₁ and y₁ coordinates of Point A.</li><li>Enter the x₂ and y₂ coordinates of Point B.</li><li>Select <strong>Calculate midpoint</strong> to see M(x, y) and the calculation steps.</li><li>Check the SVG diagram on the right, or below the inputs on smaller screens. M sits halfway between A and B.</li></ol>
<p>Use the example buttons to explore positive, negative, vertical and horizontal cases. <strong>Reset</strong> restores the original example. The calculator accepts decimals and negative numbers; enter fractions as decimal values. Long results are displayed to 10 significant digits where needed.</p>


<h2>How to find the midpoint: worked examples</h2>
<div class="ec-example"><h3 class="mt-0">Example 1: Positive coordinates</h3><p>Find the midpoint between <strong>A(2, 4)</strong> and <strong>B(8, 10)</strong>.</p><ol><li>Average the x-coordinates: (2 + 8) / 2 = <strong>5</strong>.</li><li>Average the y-coordinates: (4 + 10) / 2 = <strong>7</strong>.</li><li>Write the coordinate pair: <strong>M = (5, 7)</strong>.</li></ol><p class="mb-0">From A to M, move 3 units right and 3 units up. From M to B, move another 3 units right and 3 units up. The two halves are equal.</p></div>
<div class="ec-example"><h3 class="mt-0">Example 2: Negative coordinates</h3><p>For <strong>A(−6, 3)</strong> and <strong>B(4, −5)</strong>:</p><p>x = (−6 + 4) / 2 = −1<br>y = (3 + (−5)) / 2 = −1</p><p class="mb-0">The midpoint is <strong>M = (−1, −1)</strong>. Keep each negative sign when adding the coordinates.</p></div>
<div class="ec-example"><h3 class="mt-0">Example 3: Decimal result</h3><p>For <strong>A(0, 0)</strong> and <strong>B(3, 5)</strong>:</p><p class="mb-0">M = ((0 + 3) / 2, (0 + 5) / 2) = <strong>(1.5, 2.5)</strong>. A midpoint does not need to have whole-number coordinates.</p></div>



<h2>Midpoint examples at a glance</h2>
<div class="table-responsive"><table class="table table-bordered table-striped"><caption>Examples using the same midpoint formula for different line segments.</caption><thead class="table-light"><tr><th scope="col">Line segment</th><th scope="col">Point A</th><th scope="col">Point B</th><th scope="col">Midpoint M</th></tr></thead><tbody><tr><td>Sloping</td><td>(2, 4)</td><td>(8, 10)</td><td>(5, 7)</td></tr><tr><td>Vertical</td><td>(3, 2)</td><td>(3, 10)</td><td>(3, 6)</td></tr><tr><td>Horizontal</td><td>(−4, 2)</td><td>(6, 2)</td><td>(1, 2)</td></tr><tr><td>Same endpoints</td><td>(2, 3)</td><td>(2, 3)</td><td>(2, 3)</td></tr></tbody></table></div>
<p>For a vertical segment, the x-coordinate stays the same. For a horizontal segment, the y-coordinate stays the same. If both endpoints coincide, the midpoint is that same point.</p>


<h2>Midpoint on a number line</h2>
<p>For two numbers a and b, the midpoint is <strong>(a + b) / 2</strong>. For example, the midpoint between −4 and 10 is (−4 + 10) / 2 = <strong>3</strong>. The number 3 is 7 units from each endpoint.</p>
<h2>How to find a missing endpoint</h2>
<p>If you know midpoint <strong>M(mₓ, mᵧ)</strong> and endpoint <strong>A(x₁, y₁)</strong>, rearrange the midpoint formula:</p>
<div class="ec-formula-box"><strong>x₂ = 2mₓ − x₁<br>y₂ = 2mᵧ − y₁</strong></div>
<p>For M(5, 7) and A(2, 4), x₂ = 2 × 5 − 2 = 8 and y₂ = 2 × 7 − 4 = 10. The missing endpoint is <strong>B(8, 10)</strong>. This is a manual method; the calculator above uses two known endpoints.</p>

<h2>Common mistakes to avoid</h2>
<ul><li><strong>Mixing x and y:</strong> average the x-coordinates together, then the y-coordinates.</li><li><strong>Forgetting to divide:</strong> divide each coordinate sum by 2.</li><li><strong>Losing negative signs:</strong> −6 + 4 is −2, not 10.</li><li><strong>Confusing midpoint and distance:</strong> a midpoint is a position; distance is the length between two points.</li></ul>
<!-- FAQ Section -->
<section class="p-4"><h2 class="mb-4">FAQ on Midpoint Calculator</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is the equation for midpoint?</div><p class="mb-0">The equation for midpoint is M=((x₁ + x₂) / 2, (y₁ + y₂) / 2). It averages the x-coordinates and y-coordinates of two endpoints to find the point halfway between them.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Why does the midpoint formula divide by 2?</div><p class="mb-0">The formula averages two values for each coordinate. Dividing their sum by 2 gives the value halfway between them.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Can a midpoint have decimals or negative coordinates?</div><p class="mb-0">Yes. A midpoint can have whole numbers, decimals, fractions or negative coordinates. For example, the midpoint between (0, 0) and (3, 5) is (1.5, 2.5).</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Does the order of the endpoints matter?</div><p class="mb-0">No. Swapping Point A and Point B gives the same midpoint because the coordinate sums stay the same.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What happens when both endpoints are the same?</div><p class="mb-0">The midpoint is that same point. For example, if A and B are both (2, 3), the midpoint is (2, 3) and the line segment has zero length.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Is the midpoint formula the same as the slope formula?</div><p class="mb-0">No. The midpoint formula finds the center of a line segment. The slope formula, (y₂ − y₁) / (x₂ − x₁), measures its steepness when x₂ − x₁ is not zero.</p></div></div></section></div></section>

<script src="{{ '/assets/js/app/midpoint-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://easycalculator.org/midpoint-calculator#article",
      "headline": "Midpoint Calculator – Midpoint Formula & Equation",
      "description": "Learn the midpoint formula and equation for midpoint with worked examples and an interactive calculator.",
      "author": [
        {
          "@type": "Person",
          "name": "Narendra"
        },
        {
          "@type": "Person",
          "name": "Reema"
        }
      ],
      "dateModified": "2026-10-13",
      "mainEntityOfPage": "https://easycalculator.org/midpoint-calculator",
      "publisher": {
        "@type": "Organization",
        "name": "EasyCalculator.org",
        "url": "https://easycalculator.org/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://easycalculator.org/midpoint-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the equation for midpoint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The equation for midpoint is M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2). It averages the x-coordinates and y-coordinates of two endpoints to find the point halfway between them."
          }
        },
        {
          "@type": "Question",
          "name": "Why does the midpoint formula divide by 2?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The formula averages two values for each coordinate. Dividing their sum by 2 gives the value halfway between them."
          }
        },
        {
          "@type": "Question",
          "name": "Can a midpoint have decimals or negative coordinates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A midpoint can have whole numbers, decimals, fractions or negative coordinates. For example, the midpoint between (0, 0) and (3, 5) is (1.5, 2.5)."
          }
        },
        {
          "@type": "Question",
          "name": "Does the order of the endpoints matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Swapping Point A and Point B gives the same midpoint because the coordinate sums stay the same."
          }
        },
        {
          "@type": "Question",
          "name": "What happens when both endpoints are the same?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The midpoint is that same point. For example, if A and B are both (2, 3), the midpoint is (2, 3) and the line segment has zero length."
          }
        },
        {
          "@type": "Question",
          "name": "Is the midpoint formula the same as the slope formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The midpoint formula finds the center of a line segment. The slope formula, (y₂ − y₁) / (x₂ − x₁), measures its steepness when x₂ − x₁ is not zero."
          }
        }
      ]
    }
  ]
}
</script>