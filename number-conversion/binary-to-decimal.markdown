---
layout: default
title: Binary to Decimal Converter | EasyCalculator
permalink: /binary-to-decimal
description: "Convert binary numbers to decimal (base-10) instantly using our Binary to Decimal calculator. Fast, accurate, and mobile-friendly."
image: "/assets/images/binary-to-decimal-conversion-table.jpg"
last_modified_at: 2026-02-08
---

<div class="row p-4">
    <h1 class="text-primary p-4">Binary to Decimal Converter</h1>
    <div class="col-md-6">
        <label for="binaryInput" class="form-label fw-bold">Binary Input</label>
        <input type="text" class="form-control form-control-lg" id="binaryInput" placeholder="Enter binary value (e.g., 1010, 1101, 1111)" maxlength="16">
        <div class="form-text">Valid binary characters: 0 and 1 only</div>
        <div class="mb-4">
            <button id="convertBtn" class="btn btn-primary w-100 py-2 fw-bold">Convert to Decimal</button>
        </div>
        <div class="mb-4">
            <label class="form-label fw-bold">Decimal Result</label>
            <div class="bg-primary-subtle rounded-3 p-3">
                <h2 id="decimalResult" class="text-center mb-0">0</h2>
            </div>
        </div>
 <!-- Quick Examples Section -->
 <div class="mt-4">
     <h5 class="border-bottom pb-2">Quick Examples</h5>
      <div class="row mt-3">
          <div class="col-6 col-md-3 mb-2">  <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-binary="1010">1010 → 10</button> </div>
          <div class="col-6 col-md-3 mb-2"> <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-binary="1111">1111 → 15</button> </div>
          <div class="col-6 col-md-3 mb-2"> <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-binary="10000">10000 → 16</button></div>
          <div class="col-6 col-md-3 mb-2">  <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-binary="101010">101010 → 42</button> </div>
        </div>
       </div>
    </div>
    <div class="col-md-6">
        <div class="mb-4 bg-light p-3 rounded">
            <label class="form-label fw-bold">Conversion Details</label>
            <div id="conversionSteps" class="p-3"> <p class="mb-1"><small>Enter a binary value to see the conversion steps here.</small></p> </div>
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
   <!-- Article-->
    <!-- Binary Reference Table -->
        <!-- <div class="bg-light p-3 rounded">
            <h5 class="fw-bold mb-3">Binary Position Values</h5>
            <div class="table-responsive text-center">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Position</th>
                            <th>Power of 2</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1st (rightmost)</td><td>2⁰</td><td>1</td></tr>
                        <tr><td>2nd</td><td>2¹</td><td>2</td></tr>
                        <tr><td>3rd</td><td>2²</td><td>4</td></tr>
                        <tr><td>4th</td><td>2³</td><td>8</td></tr>
                        <tr><td>5th</td><td>2⁴</td><td>16</td></tr>
                        <tr><td>6th</td><td>2⁵</td><td>32</td></tr>
                        <tr><td>7th</td><td>2⁶</td><td>64</td></tr>
                        <tr><td>8th</td><td>2⁷</td><td>128</td></tr>
                    </tbody>
                </table>
            </div>
        </div> -->

<h2 class="mb-3">Binary to Decimal Converter</h2>

  <p class="lead">
    A <strong>Binary to Decimal Converter</strong> helps convert binary numbers (base-2)
    into decimal numbers (base-10), which are commonly used in everyday calculations.
  </p>

  <!-- Featured Snippet Box -->
  <div class="p-4 bg-light border-start border-4 border-primary mb-4">
    <strong>Binary to Decimal Conversion Formula:</strong><br>
    Multiply each binary digit by its corresponding power of 2 and add all the values
    to get the decimal number.
  </div>

  <h3>What Is the Binary Number System?</h3>
  <p>
    The binary number system is a <strong>base-2</strong> number system used by computers.
    It uses only two digits: <strong>0 and 1</strong>.
    In digital systems, 1 represents ON and 0 represents OFF.
  </p>

  <h3>What Is the Decimal Number System?</h3>
  <p>
    The decimal number system is the number system we use in daily life.
    It is based on <strong>10 digits (0 to 9)</strong>.
  </p>

  <h3>How to Convert Binary to Decimal</h3>
  <ol>
    <li>Write the binary number</li>
    <li>Assign powers of 2 to each digit from right to left</li>
    <li>Multiply each binary digit by its power of 2</li>
    <li>Add all the values</li>
    <li>The final sum is the decimal number</li>
  </ol>

  <h3>Example: Convert 11001 (Binary) to Decimal</h3>

  <div class="table-responsive col-md-7 mb-4">
    <table class="table table-bordered text-center">
      <thead class="table-light">
        <tr>
          <th>Binary Digit</th>
          <th>Power of 2</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>2⁴</td><td>16</td></tr>
        <tr><td>1</td><td>2³</td><td>8</td></tr>
        <tr><td>0</td><td>2²</td><td>0</td></tr>
        <tr><td>0</td><td>2¹</td><td>0</td></tr>
        <tr><td>1</td><td>2⁰</td><td>1</td></tr>
      </tbody>
    </table>
  </div>

  <p><strong>11001₂ = 25₁₀</strong></p>
 <h4>Example: Convert Binary to (Decimal) and Table</h4>
<img  src="/assets/images/binary-to-decimal-conversion-table.jpg" alt="Binary to decimal conversion example showing step by step calculation using powers of 2 with a binary to decimal table" class="img-fluid p-4" loading="lazy">

 <h3>Binary to Decimal Conversion Table</h3>
  <div class="table-responsive col-md-7">
    <table class="table table-striped table-bordered text-center">
      <thead class="table-dark">
        <tr>
          <th>Binary</th>
          <th>Decimal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>1</td></tr>
        <tr><td>10</td><td>2</td></tr>
        <tr><td>11</td><td>3</td></tr>
        <tr><td>100</td><td>4</td></tr>
        <tr><td>101</td><td>5</td></tr>
        <tr><td>110</td><td>6</td></tr>
        <tr><td>111</td><td>7</td></tr>
        <tr><td>1000</td><td>8</td></tr>
        <tr><td>1001</td><td>9</td></tr>
        <tr><td>1010</td><td>10</td></tr>
        <tr><td>10000</td><td>16</td></tr>
      </tbody>
    </table>
  </div>
<section class="mb-5 p-4">
  <h2 class="mb-4">FAQ on Binary to Decimal Converter</h2>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">1. What is binary to decimal conversion?</div>
      <p class="mb-0">
        Binary to decimal conversion is the process of converting a base-2 number
        into a base-10 number using powers of 2.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">2. Why do computers use binary numbers?</div>
      <p class="mb-0">
        Computers use binary numbers because electronic circuits can easily represent
        two states: ON (1) and OFF (0).
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">3. What is the easiest way to convert binary to decimal?</div>
      <p class="mb-0">
        The easiest way is multiplying each binary digit by its corresponding power
        of 2 and then adding all the values.
      </p>
    </div>
  </div>
</section>



</div>

 <script src="{{ '/assets/js/number-conversion/binary-to-decimal.js' | relative_url }}"></script>
 <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is binary to decimal conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Binary to decimal conversion is the process of converting a base-2 number into a base-10 number using powers of 2."
      }
    },
    {
      "@type": "Question",
      "name": "Why do computers use binary numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Computers use binary numbers because electronic circuits can easily represent two states: ON (1) and OFF (0)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the easiest way to convert binary to decimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The easiest way is to multiply each binary digit by its corresponding power of 2 and add all the values."
      }
    }
  ]
}
</script>
