---
layout: default
title: Hexadecimal to Binary Converter (Hex to Bin) | EasyCalculator
permalink: /hex-to-binary
description: "Easily convert hexadecimal (base-16) numbers to binary (base-2) with our Hex to Binary calculator. Free, accurate, and works on all devices."
image: "/assets/images/hexa-to-binary-conversion-table.jpg"
last_modified_at: 2026-02-03
---

<div class="row p-4">
    <h1 class="text-primary p-4">Hexadecimal to Binary Converter</h1>
    <div class="col-md-6">
        <label for="hexInput" class="form-label fw-bold">Hexadecimal Input</label>
        <input type="text" class="form-control form-control-lg" id="hexInput" placeholder="Enter hexadecimal value (e.g., 1A, FF, 3E8)" maxlength="10">
        <div class="form-text">Valid hexadecimal characters: 0-9, A-F (case insensitive)</div>
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
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-hex="A">A → 1010</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-hex="FF">FF → 11111111</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-hex="10">10 → 10000</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-hex="3E8">3E8 → 1111101000</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="mb-4 bg-light p-3 rounded">
            <label class="form-label fw-bold">Conversion Details</label>
            <div id="conversionSteps" class="p-3">
                <p class="mb-1"><small>Enter a hexadecimal value to see the conversion steps here.</small></p>
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
   <!-- Article-->
    <!-- Hex-Binary Reference Table -->
        <div class="bg-light p-3 rounded">
            <h5 class="fw-bold mb-3">Hex to Binary Reference</h5>
            <div class="table-responsive">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Hex</th>
                            <th>Binary</th>
                            <th>Decimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>0</td><td>0000</td><td>0</td></tr>
                        <tr><td>1</td><td>0001</td><td>1</td></tr>
                        <tr><td>2</td><td>0010</td><td>2</td></tr>
                        <tr><td>3</td><td>0011</td><td>3</td></tr>
                        <tr><td>4</td><td>0100</td><td>4</td></tr>
                        <tr><td>5</td><td>0101</td><td>5</td></tr>
                        <tr><td>6</td><td>0110</td><td>6</td></tr>
                        <tr><td>7</td><td>0111</td><td>7</td></tr>
                        <tr><td>8</td><td>1000</td><td>8</td></tr>
                        <tr><td>9</td><td>1001</td><td>9</td></tr>
                        <tr><td>A</td><td>1010</td><td>10</td></tr>
                        <tr><td>B</td><td>1011</td><td>11</td></tr>
                        <tr><td>C</td><td>1100</td><td>12</td></tr>
                        <tr><td>D</td><td>1101</td><td>13</td></tr>
                        <tr><td>E</td><td>1110</td><td>14</td></tr>
                        <tr><td>F</td><td>1111</td><td>15</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>

 <script src="{{ '/assets/js/number-conversion/hexa-to-binary.js' | relative_url }}"></script>