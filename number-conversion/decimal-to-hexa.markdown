---
layout: default
title: Decimal to Hexadecimal Converter (Base-10 to Base-16) | EasyCalculator
permalink: /decimal-to-hex
description: "Convert decimal (base-10) values to hexadecimal (base-16) instantly. Free Decimal to Hexadecimal calculator for programmers and students."
image: "/assets/images/decimal-to-hexa-conversion-table.jpg"
last_modified_at: 2026-02-07
---

<div class="row p-4">
    <h1 class="text-primary p-4">Decimal to Hexadecimal Converter</h1>
    <div class="col-md-6">
        <label for="decimalInput" class="form-label fw-bold">Decimal Input</label>
        <input type="text" class="form-control form-control-lg" id="decimalInput" placeholder="Enter decimal value (e.g., 10, 255, 1000)" maxlength="10">
        <div class="form-text">Valid decimal characters: 0-9 only</div>
        <div class="mb-4">
            <button id="convertBtn" class="btn btn-primary w-100 py-2 fw-bold">Convert to Hexadecimal</button>
        </div>
        <div class="mb-4">
            <label class="form-label fw-bold">Hexadecimal Result</label>
            <div class="bg-primary-subtle rounded-3 p-3">
                <h2 id="hexResult" class="text-center mb-0">0</h2>
            </div>
        </div>
        <!-- Quick Examples Section -->
        <div class="mt-4">
            <h5 class="border-bottom pb-2">Quick Examples</h5>
            <div class="row mt-3">
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="10">10 → A</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="255">255 → FF</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="16">16 → 10</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="1000">1000 → 3E8</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="mb-4 bg-light p-3 rounded">
            <label class="form-label fw-bold">Conversion Details</label>
            <div id="conversionSteps" class="p-3">
                <p class="mb-1"><small>Enter a decimal value to see the conversion steps here.</small></p>
            </div>
        </div>
    </div>
</div>






 <div class="mt-4">
  <h5>Other Conversions</h5>
  <div class="row text-center g-3">
  <!-- Decimal conversions -->
  <div class="col-6 col-md-3"><a href="decimal-to-binary" class="text-decoration-none text-dark"><div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Decimal to Binary</h6></div></a> </div>
  <div class="col-6 col-md-3"><a href="decimal-to-octal" class="text-decoration-none text-dark"><div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Decimal to Octal</h6></div> </a> </div>
  <div class="col-6 col-md-3"><a href="decimal-to-hex" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Decimal to Hexadecimal</h6></div> </a> </div>
  <!-- Binary conversions -->
  <div class="col-6 col-md-3"><a href="binary-to-decimal" class="text-decoration-none text-dark"><div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Binary to Decimal</h6></div></a> </div>
  <div class="col-6 col-md-3"><a href="binary-to-octal" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Binary to Octal</h6></div> </a></div>
  <div class="col-6 col-md-3"> <a href="binary-to-hex" class="text-decoration-none text-dark"><div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Binary to Hexadecimal</h6></div></a></div>
  <!-- Octal conversions -->
  <div class="col-6 col-md-3"><a href="octal-to-decimal" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Octal to Decimal</h6></div> </a></div>
  <div class="col-6 col-md-3"><a href="octal-to-binary" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Octal to Binary</h6></div></a></div>
  <div class="col-6 col-md-3"><a href="octal-to-hex" class="text-decoration-none text-dark"><div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Octal to Hexadecimal</h6></div> </a></div>
  <!-- Hexadecimal conversions -->
  <div class="col-6 col-md-3"><a href="hex-to-decimal" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Hexadecimal to Decimal</h6></div> </a> </div>
  <div class="col-6 col-md-3"><a href="hex-to-binary" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Hexadecimal to Binary</h6></div> </a></div>
  <div class="col-6 col-md-3"><a href="hex-to-octal" class="text-decoration-none text-dark"> <div class="p-3 border rounded hover-shadow"><h6 class="mb-0">Hexadecimal to Octal</h6></div> </a> </div>
</div>
</div>


<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
     {% include bahadur.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
  
<h2 class="mb-3">Decimal to Hexadecimal Converter</h2>
<p class="lead">A <strong>Decimal to Hexadecimal Converter</strong> helps convert decimal numbers (base-10)into hexadecimal numbers (base-16), commonly used in programming, memory addressing, and web color codes. </p>

<div class="p-4 bg-light border-start border-4 border-primary mb-4"> <strong>Decimal to Hexadecimal Conversion Formula:</strong><br> Divide the decimal number by 16 repeatedly, note the remainders, convert values above 9 into letters (A–F), and read the result from bottom to top. </div>

<h3>What Is the Decimal Number System?</h3>
<p>The decimal number system is the number system we use in daily life. It is based on <strong>10 digits (0 to 9)</strong>.</p>
`
<h3>What Is the Hexadecimal Number System?</h3>
<p> The hexadecimal number system is a <strong>base-16</strong> number system. It uses digits <strong>0–9</strong> and letters <strong>A–F</strong>.</p>

  <div class="table-responsive col-md-6 mb-4">
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th>Decimal</th>
          <th>Hexadecimal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>10</td><td>A</td></tr>
        <tr><td>11</td><td>B</td></tr>
        <tr><td>12</td><td>C</td></tr>
        <tr><td>13</td><td>D</td></tr>
        <tr><td>14</td><td>E</td></tr>
        <tr><td>15</td><td>F</td></tr>
      </tbody>
    </table>
  </div>

  <h3>How to Convert Decimal to Hexadecimal</h3>
  <ol>
    <li>Divide the decimal number by 16</li>
    <li>Write the remainder</li>
    <li>Convert remainders greater than 9 into A–F</li>
    <li>Repeat until the quotient becomes 0</li>
    <li>Read the result from bottom to top</li>
  </ol>
  <h3>Example: Convert 25 (Decimal) to Hexadecimal</h3>
  <img src="/assets/images/decimal-to-hexa-conversion-table.jpg" alt="Decimal to hexadecimal conversion example showing step by step division of 25 into hexadecimal 19 with a decimal to hexadecimal conversion table"  loading="lazy"  width="800" height="600"  class="img-fluid p-4" />
  <h3>Decimal to Hexadecimal Conversion Table</h3>
  <div class="table-responsive col-md-7">
    <table class="table table-striped table-bordered text-center">
      <thead class="table-dark">
        <tr>
          <th>Decimal</th>
          <th>Hexadecimal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>1</td></tr>
        <tr><td>2</td><td>2</td></tr>
        <tr><td>3</td><td>3</td></tr>
        <tr><td>4</td><td>4</td></tr>
        <tr><td>5</td><td>5</td></tr>
        <tr><td>10</td><td>A</td></tr>
        <tr><td>15</td><td>F</td></tr>
        <tr><td>16</td><td>10</td></tr>
        <tr><td>20</td><td>14</td></tr>
        <tr><td>50</td><td>32</td></tr>
        <tr><td>100</td><td>64</td></tr>
        <tr><td>255</td><td>FF</td></tr>
      </tbody>
    </table>
  </div>
<section class="mb-5 p-4">
 <h2 class="mb-4">FAQ on Decimal to Hexadecimal Converter</h2>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">1. What is decimal to hexadecimal conversion?</div>
      <p class="mb-0">It is the process of converting a decimal (base-10) number into a hexadecimal (base-16) number using digits 0–9 and letters A–F. </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">2. Why is hexadecimal used in computers?</div>
      <p class="mb-0">Hexadecimal is compact, easy to read, and closely matches binary representation, making it ideal for programming and memory addressing. </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">3. What is the easiest way to convert decimal to hexadecimal?</div>
      <p class="mb-0">The easiest way is dividing the decimal number by 16 repeatedly and converting remainders above 9 into letters A–F.</p>
    </div>
  </div>
</section>

</div>

 <script src="{{ '/assets/js/number-conversion/decimal-to-hexa.js' | relative_url }}"></script>
 <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is decimal to hexadecimal conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Decimal to hexadecimal conversion is the process of converting a base-10 number into a base-16 number using digits 0–9 and letters A–F."
      }
    },
    {
      "@type": "Question",
      "name": "Why is hexadecimal used in computers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hexadecimal is compact, easy to read, and closely maps to binary, making it ideal for programming and memory representation."
      }
    },
    {
      "@type": "Question",
      "name": "What is the easiest way to convert decimal to hexadecimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Divide the decimal number by 16 repeatedly and convert remainders above 9 into letters A–F."
      }
    }
  ]
}
</script>
