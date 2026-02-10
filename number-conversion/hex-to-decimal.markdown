---
layout: default
title: Hexadecimal to Decimal Converter (Hex to Dec) | EasyCalculator
permalink: /hex-to-decimal
description: "Easily convert Hexadecimal to Decimal online. Supports large hex values with step-by-step explanation. Fast, free, and accurate calculator."
image: "/assets/images/hexa-to-decimal-conversion-table.jpg"
last_modified_at: 2026-02-08
---

<div class="row p-4">
   <h1 class="text-primary p-4">Hexadecimal to Decimal Converter</h1>
     <div class="col-md-6">
        <label for="hexInput" class="form-label fw-bold">Hexadecimal Input</label>
          <input type="text" class="form-control form-control-lg" id="hexInput"  placeholder="Enter hexadecimal value (e.g., 1A, FF, 3E8)" maxlength="10">
             <div class="form-text"> Valid hexadecimal characters: 0-9, A-F (case insensitive) </div>
                <div class="mb-4"> <button id="convertBtn" class="btn btn-primary w-100 py-2 fw-bold"> Convert to  Decimal </button> </div>
                    <div class="mb-4">
                        <label class="form-label fw-bold">Decimal Result</label>
                        <div class="bg-primary-subtle rounded-3 p-3"><h2 id="decimalResult" class="text-center mb-0 ">0</h2> </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-4 bg-light p-3 rounded">
                        <label class="form-label fw-bold">Conversion Details</label>
                        <div id="conversionSteps" class=" p-3"> <p class="mb-1"><small>Enter a hexadecimal value to see the conversion steps here.</small> </p> </div>
                    </div>
                </div>
            </div>


<!-- Quick Examples Section  -->
<div class="bg-light rounded-3 p-3 mt-4">
  <div class="d-flex flex-wrap gap-3 justify-content-start">
      <h5>Quick Examples of hex to Decimal</h5>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="A">A → 10</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="FF">FF → 255</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="BB">BB → 187</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="1F4">1F4 → 500</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="3E8">3E8 → 1000</button>
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
   <!-- Article-->
   <h2 class="mb-3">Hexadecimal to Decimal Converter</h2>

  <p class="lead">
    A <strong>Hexadecimal to Decimal Converter</strong> helps convert hexadecimal numbers
    (base-16) into decimal numbers (base-10). This conversion is widely used in
    computer programming, digital electronics, and number-system studies.
  </p>

  <!-- Featured Snippet Box -->
  <div class="p-4 bg-light border-start border-4 border-primary mb-4">
    <strong>Hexadecimal to Decimal Conversion Formula:</strong><br>
    Multiply each hexadecimal digit by its corresponding power of 16 and add all
    the values to get the decimal number.
  </div>

  <h3>What Is the Hexadecimal Number System?</h3>
  <p>
    The hexadecimal number system is a <strong>base-16</strong> number system.
    It uses digits <strong>0–9</strong> and letters <strong>A–F</strong>,
    where A = 10, B = 11, C = 12, D = 13, E = 14, and F = 15.
  </p>

  <h3>What Is the Decimal Number System?</h3>
  <p>
    The decimal number system is the number system we use in everyday life.
    It is based on <strong>10 digits (0 to 9)</strong>.
  </p>

  <h3>How to Convert Hexadecimal to Decimal</h3>
  <ol>
    <li>Write the hexadecimal number</li>
    <li>Assign powers of 16 from right to left (16⁰, 16¹, 16², …)</li>
    <li>Replace letters A–F with their decimal values (10–15)</li>
    <li>Multiply each digit by its power of 16</li>
    <li>Add all the values to get the decimal number</li>
  </ol>

<img   src="/assets/images/hexa-to-decimal-conversion-table.jpg"   alt="Hexadecimal to decimal conversion example showing step by step calculation using powers of 16 with a hex to decimal conversion table"   class="img-fluid p-4"   loading="lazy">

  <h3>Example: Convert 3A (Hexadecimal) to Decimal</h3>

  <div class="table-responsive col-md-7 mb-4">
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th>Hex Digit</th>
          <th>Decimal Value</th>
          <th>Power of 16</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>3</td><td>3</td><td>16¹</td><td>48</td></tr>
        <tr><td>A</td><td>10</td><td>16⁰</td><td>10</td></tr>
      </tbody>
    </table>
  </div>

  <p><strong>3A₁₆ = 58₁₀</strong></p>

  <h3>Hexadecimal to Decimal Conversion Table</h3>

  <div class="table-responsive col-md-7">
    <table class="table table-striped table-bordered text-center">
      <thead class="table-dark">
        <tr>
          <th>Hexadecimal</th>
          <th>Decimal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>1</td></tr>
        <tr><td>7</td><td>7</td></tr>
        <tr><td>9</td><td>9</td></tr>
        <tr><td>A</td><td>10</td></tr>
        <tr><td>F</td><td>15</td></tr>
        <tr><td>10</td><td>16</td></tr>
        <tr><td>1A</td><td>26</td></tr>
        <tr><td>3B</td><td>59</td></tr>
        <tr><td>64</td><td>100</td></tr>
        <tr><td>FF</td><td>255</td></tr>
      </tbody>
    </table>
  </div>
  <section class="mb-5 p-4">
  <h2 class="mb-4">FAQ on Hexadecimal to Decimal Converter</h2>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">1. What is hexadecimal to decimal conversion?</div>
      <p class="mb-0">
        Hexadecimal to decimal conversion is the process of converting a base-16 number
        into a base-10 number using powers of 16.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">2. Why are powers of 16 used in hexadecimal conversion?</div>
      <p class="mb-0">
        Powers of 16 are used because the hexadecimal number system is base-16,
        and each digit represents a power of 16.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">3. What is the easiest way to convert hexadecimal to decimal?</div>
      <p class="mb-0">
        The easiest way is replacing hexadecimal letters with their decimal values,
        multiplying each digit by its power of 16, and adding all the results.
      </p>
    </div>
  </div>
</section>

</div>

 <script src="{{ '/assets/js/number-conversion/hexa-to-decimal.js' | relative_url }}"></script>
 <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is hexadecimal to decimal conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hexadecimal to decimal conversion is the process of converting a base-16 number into a base-10 number using powers of 16."
      }
    },
    {
      "@type": "Question",
      "name": "Why are powers of 16 used in hexadecimal conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Powers of 16 are used because hexadecimal is a base-16 number system and each digit represents a power of 16."
      }
    },
    {
      "@type": "Question",
      "name": "What is the easiest way to convert hexadecimal to decimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The easiest way is replacing hexadecimal letters with their decimal values, multiplying each digit by its power of 16, and adding the results."
      }
    }
  ]
}
</script>
