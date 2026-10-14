---
layout: default
title: "Endpoint Calculator – Find the Missing Endpoint"
permalink: /endpoint-calculator
description: "Find a missing endpoint using a midpoint and one known endpoint. Learn the endpoint formula with step-by-step examples and an interactive diagram."
image: "/assets/images/og/endpoint-calc.jpg"
last_modified_at: 2026-10-14
---
<style>
/* Only safeguards without Bootstrap equivalents. */
#ec-endpoint, #ec-endpoint * { text-shadow: none !important; }
#ec-endpoint svg text { stroke: none !important; filter: none !important; }
#ec-endpoint [hidden] { display: none !important; }
</style>

<section markdown="0" id="ec-endpoint" class="container py-4" aria-labelledby="ec-title">
<header class="mb-4">
<h1 id="ec-title" class="h2 mb-3">Endpoint Calculator</h1><p>Find the missing endpoint of a line segment. Enter one known endpoint and the midpoint to see the answer, calculation steps and an interactive diagram.</p>
</header>
<div class="row g-4">
<div class="col-lg-5"><div class="card border rounded p-3 p-md-4 h-100 shadow-none">
<h2 class="h5 mb-3">Enter the known coordinates</h2>
<form id="ec-form" novalidate>
<fieldset class="mb-3"><legend class="fs-6 fw-semibold mb-2"><span class="text-primary" aria-hidden="true">●</span>Point A · Known endpoint</legend><div class="row g-3">
<div class="col-6"><label class="form-label small" for="ec-x1">x₁ coordinate</label><input id="ec-x1" class="form-control form-control-lg" type="number" step="any" value="2" required></div>
<div class="col-6"><label class="form-label small" for="ec-y1">y₁ coordinate</label><input id="ec-y1" class="form-control form-control-lg" type="number" step="any" value="4" required></div></div></fieldset>
<fieldset class="mb-3"><legend class="fs-6 fw-semibold mb-2"><span class="text-success" aria-hidden="true">●</span>Point M · Midpoint</legend><div class="row g-3">
<div class="col-6"><label class="form-label small" for="ec-mx">mₓ coordinate</label><input id="ec-mx" class="form-control form-control-lg" type="number" step="any" value="5" required></div>
<div class="col-6"><label class="form-label small" for="ec-my">mᵧ coordinate</label><input id="ec-my" class="form-control form-control-lg" type="number" step="any" value="7" required></div></div></fieldset>
<div class="small text-muted">Try an example</div><div class="d-flex flex-wrap gap-2 mt-2 mb-3"><button class="btn btn-sm btn-outline-primary" type="button" data-values="2,4,5,7">Positive</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="-6,3,-1,-1">Negative</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="3,2,3,6">Vertical</button><button class="btn btn-sm btn-outline-primary" type="button" data-values="-4,2,1,2">Horizontal</button></div>
<div class="d-flex gap-2"><button class="btn btn-primary flex-grow-1" type="submit">Find endpoint</button><button class="btn btn-outline-secondary" type="reset">Reset</button></div>
<p id="ec-error" class="text-danger small mt-3 mb-0" role="alert" hidden></p>
</form>
<div id="ec-result" class="alert alert-primary mt-4 mb-0 text-break" role="status" aria-live="polite" aria-atomic="true"><div class="small text-muted">Missing endpoint · B(x₂, y₂)</div><div id="ec-answer" class="fs-3 fw-bold text-primary text-break"></div><div id="ec-steps" class="small mt-2 text-break"></div></div>
<p class="small text-muted mt-2 mb-0">Decimals and negative values accepted. Display rounded to 10 significant digits where needed.</p>
</div></div>
<div class="col-lg-7"><div class="card border rounded p-3 p-md-4 h-100 shadow-none"><div class="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-2"><h2 class="h5 mb-0">Visual explanation</h2><span class="small text-muted">A → M → B</span></div>
<p class="small text-muted">Continue from A through M by the same distance to reach B.</p>
<figure class="mb-0"><svg class="img-fluid w-100 d-block bg-light border rounded" id="ec-graph" viewBox="0 0 520 360" role="img" aria-labelledby="ec-svg-title ec-svg-desc"><title id="ec-svg-title">Missing endpoint coordinate diagram</title><desc id="ec-svg-desc">Known endpoint A, midpoint M and calculated endpoint B are shown on a coordinate grid.</desc><g id="ec-drawing"></g></svg>
<figcaption><div id="ec-legend" class="d-flex flex-wrap gap-3 small my-3 text-break"></div><p id="ec-caption" class="small text-muted mb-0">Equal scale on both axes. The view centers on the midpoint.</p></figcaption></figure>
<div class="bg-light border rounded p-3 mt-3 text-center text-break"><strong>Endpoint formula</strong><br>B = (2mₓ − x₁, 2mᵧ − y₁)</div>
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
      <span><i class="fas fa-calendar" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock" aria-hidden="true"></i>4 min read</span>
    </div>
  </div>
<!-- Article-->
<h2 id="ec-guide-title">Endpoint calculator: find the missing coordinates</h2>
<p>This <strong>endpoint calculator</strong> finds the other end of a line segment when you know one endpoint and its midpoint. Enter the coordinates of A and M to calculate B. The result includes the <strong>endpoint formula</strong>, substitution steps and a diagram showing how the three points connect.</p>
<h2>What is an endpoint?</h2>
<p>An endpoint is a point at either end of a line segment. A segment has two endpoints, usually called A and B. Its midpoint, M, lies halfway between them, so the distances AM and MB are equal.</p>
<p>For example, if A is at 2 and the midpoint is at 5 on a number line, B must be at 8. You move 3 units from 2 to 5, then another 3 units from 5 to 8.</p>
<h2>What is the endpoint formula?</h2>
<p>Given the known endpoint <strong>A(x₁, y₁)</strong> and midpoint <strong>M(mₓ, mᵧ)</strong>, the missing endpoint is:</p>
<div class="ec-formula-box"><p><strong>B(x₂, y₂) = (2mₓ − x₁, 2mᵧ − y₁)</strong></p><p>x₂ = 2mₓ − x₁<br>y₂ = 2mᵧ − y₁</p></div>
<p>Double each midpoint coordinate, then subtract the matching coordinate of the known endpoint. Keep the x-coordinates together and the y-coordinates together.</p>
<h2>How to use the endpoint calculator</h2>
<ol><li>Enter x₁ and y₁ for the <strong>known endpoint A</strong>.</li><li>Enter mₓ and mᵧ for the <strong>midpoint M</strong>.</li><li>Select <strong>Find endpoint</strong> to calculate B(x₂, y₂).</li><li>Read the substitution steps and use the SVG diagram to see A, M and B.</li></ol>
<p>Try the example buttons for positive, negative, vertical and horizontal cases. Reset returns to A(2, 4) and M(5, 7). Enter fractions as decimal values. Displayed results are rounded to 10 significant digits where needed; calculations use the entered numeric values.</p>
<h2>How to find the missing endpoint: worked examples</h2>
<div class="ec-example"><h3 class="mt-0">Example 1: Positive coordinates</h3><p>Known endpoint: <strong>A(2, 4)</strong>. Midpoint: <strong>M(5, 7)</strong>.</p><ol><li>x₂ = 2 × 5 − 2 = <strong>8</strong>.</li><li>y₂ = 2 × 7 − 4 = <strong>10</strong>.</li><li>The missing endpoint is <strong>B(8, 10)</strong>.</li></ol><p class="mb-0">Check the answer: ((2 + 8) / 2, (4 + 10) / 2) = (5, 7), which matches the given midpoint.</p></div>
<div class="ec-example"><h3 class="mt-0">Example 2: Negative coordinates</h3><p>Known endpoint: <strong>A(−6, 3)</strong>. Midpoint: <strong>M(−1, −1)</strong>.</p><p>x₂ = 2 × (−1) − (−6) = −2 + 6 = 4<br>y₂ = 2 × (−1) − 3 = −5</p><p class="mb-0">The missing endpoint is <strong>B(4, −5)</strong>. Subtracting a negative value changes that subtraction to addition.</p></div>
<div class="ec-example"><h3 class="mt-0">Example 3: Decimal coordinates</h3><p>Known endpoint: <strong>A(1.5, −2)</strong>. Midpoint: <strong>M(3.25, 0.5)</strong>.</p><p>x₂ = 2 × 3.25 − 1.5 = 5<br>y₂ = 2 × 0.5 − (−2) = 3</p><p class="mb-0">The missing endpoint is <strong>B(5, 3)</strong>.</p></div>
<h2>Endpoint examples at a glance</h2>
<div class="table-responsive"><table class="table table-bordered table-striped"><caption>Find B from known endpoint A and midpoint M.</caption><thead class="table-light"><tr><th scope="col">Case</th><th scope="col">Known A</th><th scope="col">Midpoint M</th><th scope="col">Missing B</th></tr></thead><tbody><tr><td>Sloping</td><td>(2, 4)</td><td>(5, 7)</td><td>(8, 10)</td></tr><tr><td>Negative</td><td>(−6, 3)</td><td>(−1, −1)</td><td>(4, −5)</td></tr><tr><td>Vertical</td><td>(3, 2)</td><td>(3, 6)</td><td>(3, 10)</td></tr><tr><td>Horizontal</td><td>(−4, 2)</td><td>(1, 2)</td><td>(6, 2)</td></tr><tr><td>Same point</td><td>(2, 3)</td><td>(2, 3)</td><td>(2, 3)</td></tr></tbody></table></div>
<h2>How the endpoint formula comes from the midpoint formula</h2>
<p>The midpoint equation for x is <strong>mₓ = (x₁ + x₂) / 2</strong>. Multiply both sides by 2 to get 2mₓ = x₁ + x₂. Subtract x₁ from both sides to get <strong>x₂ = 2mₓ − x₁</strong>. Follow the same steps for y to obtain y₂ = 2mᵧ − y₁.</p>
<p>Another way to understand this is to continue the movement from A to M once more. The horizontal change is mₓ − x₁ and the vertical change is mᵧ − y₁. Adding those changes to M gives B.</p>
<h2>Missing endpoint on a number line</h2>
<p>For a known endpoint a and midpoint m, use <strong>b = 2m − a</strong>. If a = −4 and m = 3, then b = 2 × 3 − (−4) = <strong>10</strong>. The midpoint 3 is 7 units from both −4 and 10.</p>
<h2>Common mistakes to avoid</h2>
<ul><li><strong>Entering two endpoints:</strong> this tool needs one endpoint and a midpoint. If you know both endpoints, use the <a href="{{ '/midpoint-calculator' | relative_url }}">Midpoint Calculator</a>.</li><li><strong>Doubling the wrong value:</strong> double the midpoint coordinate, then subtract the known endpoint coordinate.</li><li><strong>Mixing x and y:</strong> calculate each coordinate separately.</li><li><strong>Ignoring a negative sign:</strong> write negative values in parentheses to make subtraction clearer.</li></ul>
<!-- FAQ Section -->
<section class="p-4">
  <h2 class="mb-4">FAQ on Endpoint Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">How do you find an endpoint with a midpoint?</div>
       <p class="mb-0">Double each midpoint coordinate and subtract the corresponding coordinate of the known endpoint. If A(x₁, y₁) is known and M(mₓ, mᵧ) is the midpoint, then B = (2mₓ − x₁, 2mᵧ − y₁).</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">What is the endpoint formula?</div>
         <p class="mb-0">The endpoint formula is x₂ = 2mₓ − x₁ and y₂ = 2mᵧ − y₁, where A(x₁, y₁) is the known endpoint and M(mₓ, mᵧ) is the midpoint.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">Can the missing endpoint have negative or decimal coordinates?</div>
        <p class="mb-0">Yes. The endpoint formula works with negative numbers and decimals. For example, A(−6, 3) and M(−1, −1) give B(4, −5). Enter fractions as decimal values in this calculator.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">How can I check my endpoint answer?</div>
        <p class="mb-0">Average the known endpoint and the calculated endpoint. Their midpoint should match the midpoint you entered: M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2).</p>
       </div>
     </div>
    </section>
      <!-- Did You Know? -->
</div>
<article aria-labelledby="ec-guide-title">

<script src="{{ '/assets/js/app/endpoint-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://easycalculator.org/endpoint-calculator#article",
      "headline": "Endpoint Calculator – Find the Missing Endpoint",
      "description": "Find a missing endpoint from a midpoint and one known endpoint, with the endpoint formula and worked examples.",
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
      "dateModified": "2026-10-14",
      "mainEntityOfPage": "https://easycalculator.org/endpoint-calculator",
      "publisher": {
        "@type": "Organization",
        "name": "EasyCalculator.org",
        "url": "https://easycalculator.org/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://easycalculator.org/endpoint-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you find an endpoint with a midpoint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Double each midpoint coordinate and subtract the corresponding coordinate of the known endpoint. If A(x₁, y₁) is known and M(mₓ, mᵧ) is the midpoint, then B = (2mₓ − x₁, 2mᵧ − y₁)."
          }
        },
        {
          "@type": "Question",
          "name": "What is the endpoint formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The endpoint formula is x₂ = 2mₓ − x₁ and y₂ = 2mᵧ − y₁, where A(x₁, y₁) is the known endpoint and M(mₓ, mᵧ) is the midpoint."
          }
        },
        {
          "@type": "Question",
          "name": "Can I find an endpoint using only the midpoint?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A midpoint alone does not determine a unique pair of endpoints. This calculator also needs one known endpoint."
          }
        },
        {
          "@type": "Question",
          "name": "Can the missing endpoint have negative or decimal coordinates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The endpoint formula works with negative numbers and decimals. For example, A(−6, 3) and M(−1, −1) give B(4, −5). Enter fractions as decimal values in this calculator."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use either endpoint as the known point?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Enter whichever endpoint you know as A. The calculator returns the other endpoint as B; the letters are labels."
          }
        },
        {
          "@type": "Question",
          "name": "What if the known endpoint and midpoint are the same?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The other endpoint is also that same point. All three points coincide, and the line segment has zero length."
          }
        },
        {
          "@type": "Question",
          "name": "How can I check my endpoint answer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Average the known endpoint and the calculated endpoint. Their midpoint should match the midpoint you entered: M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)."
          }
        },
        {
          "@type": "Question",
          "name": "Does this calculator work with latitude and longitude?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This calculator uses a flat coordinate plane. Geographic coordinates require methods that account for Earth’s curvature and longitude wrapping."
          }
        }
      ]
    }
  ]
}
</script>
