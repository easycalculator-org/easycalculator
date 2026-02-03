---
layout: default
title: Decimal to Binary Converter (Base-10 to Base-2) | EasyCalculator
permalink: /decimal-to-binary
description: "Convert decimal (base-10) numbers to binary (base-2) instantly with our fast and accurate Decimal to Binary calculator. Free & mobile-friendly."
# image: "/assets/images/age-calc-open-graph.png"
last_modified_at: 2026-02-03
---

<div class="row p-4">
    <h1 class="text-primary p-4">Decimal to Binary Converter</h1>
    <div class="col-md-6">
        <label for="decimalInput" class="form-label fw-bold">Decimal Input</label>
        <input type="text" class="form-control form-control-lg" id="decimalInput" placeholder="Enter decimal value (e.g., 10, 255, 1000)" maxlength="10">
        <div class="form-text">Valid decimal characters: 0-9 only</div>
        <div class="mb-4">
            <button id="convertBtn" class="btn btn-primary w-100 py-2 fw-bold">Convert to Binary</button>
        </div>
        <div class="mb-4">
            <label class="form-label fw-bold">Binary Result</label>
            <div class="bg-primary-subtle rounded-3 p-3">
                <h2 id="binaryResult" class="text-center mb-0">0</h2>
            </div>
        </div>
 <!-- Quick Examples Section -->
        <div class="mt-4">
            <h5 class="border-bottom pb-2">Quick Examples</h5>
            <div class="row mt-3">
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="10">10 → 1010</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="15">15 → 1111</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="16">16 → 10000</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-decimal="42">42 → 101010</button>
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

<!-- Quick Examples Section  -->
<!-- <div class="bg-light rounded-3 p-3 mt-4">
  <div class="d-flex flex-wrap gap-3 justify-content-start">
      <h5>Quick Examples of hex to Decimal</h5>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="A">A → 10</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="FF">FF → 255</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="BB">BB → 187</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="1F4">1F4 → 500</button>
    <button class="btn btn-outline-primary btn-sm example-btn" data-hex="3E8">3E8 → 1000</button>
  </div>
</div> -->




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
   <!-- Binary Position Values Table -->
        <div class="bg-light p-3 rounded">
            <h5 class="fw-bold mb-3">Binary Position Values</h5>
            <div class="table-responsive">
                <table class="table table-sm table-bordered text-center">
                    <thead class="table-primary">
                        <tr>
                            <th>Position</th>
                            <th>Power of 2</th>
                            <th>Value</th>
                            <th>Binary Digit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1st (rightmost)</td><td>2⁰</td><td>1</td><td>2⁰ place</td></tr>
                        <tr><td>2nd</td><td>2¹</td><td>2</td><td>2¹ place</td></tr>
                        <tr><td>3rd</td><td>2²</td><td>4</td><td>2² place</td></tr>
                        <tr><td>4th</td><td>2³</td><td>8</td><td>2³ place</td></tr>
                        <tr><td>5th</td><td>2⁴</td><td>16</td><td>2⁴ place</td></tr>
                        <tr><td>6th</td><td>2⁵</td><td>32</td><td>2⁵ place</td></tr>
                        <tr><td>7th</td><td>2⁶</td><td>64</td><td>2⁶ place</td></tr>
                        <tr><td>8th</td><td>2⁷</td><td>128</td><td>2⁷ place</td></tr>
                    </tbody>
                </table>
            </div>
        </div> 
</div>

 <script src="{{ '/assets/js/number-conversion/decimal-to-binary.js' | relative_url }}"></script>