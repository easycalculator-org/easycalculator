---
layout: default
title: Octal to Hexadecimal Converter (Base-8 to Base-16) | EasyCalculator
permalink: /octal-to-hex
description: "Convert octal (base-8) values to hexadecimal (base-16) instantly using our free Octal to Hexadecimal calculator. Works on all devices."
# image: "/assets/images/age-calc-open-graph.png"
---


<div class="row p-4">
    <h1 class="text-primary p-4">Octal to Hexadecimal Converter</h1>
    <div class="col-md-6">
        <label for="octalInput" class="form-label fw-bold">Octal Input</label>
        <input type="text" class="form-control form-control-lg" id="octalInput" placeholder="Enter octal value (e.g., 12, 77, 144)" maxlength="12">
        <div class="form-text">Valid octal characters: 0-7 only</div>
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
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-octal="12">12 → A</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-octal="77">77 → 3F</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-octal="144">144 → 64</button>
                </div>
                <div class="col-6 col-md-3 mb-2">
                    <button class="btn btn-outline-primary btn-sm w-100 example-btn" data-octal="20">20 → 10</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="mb-4 bg-light p-3 rounded">
            <label class="form-label fw-bold">Conversion Details</label>
            <div id="conversionSteps" class="p-3">
                <p class="mb-1"><small>Enter an octal value to see the conversion steps here.</small></p>
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
   <!-- Octal-Hex Reference Table -->
        <div class="bg-light p-3 rounded">
            <h5 class="fw-bold mb-3">Octal to Hex Reference</h5>
            <div class="table-responsive text-center">
                <table class="table table-sm table-bordered">
                    <thead class="table-primary">
                        <tr>
                            <th>Octal</th>
                            <th>Binary</th>
                            <th>Hex</th>
                            <th>Decimal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>0</td><td>000</td><td>0</td><td>0</td></tr>
                        <tr><td>1</td><td>001</td><td>1</td><td>1</td></tr>
                        <tr><td>2</td><td>010</td><td>2</td><td>2</td></tr>
                        <tr><td>3</td><td>011</td><td>3</td><td>3</td></tr>
                        <tr><td>4</td><td>100</td><td>4</td><td>4</td></tr>
                        <tr><td>5</td><td>101</td><td>5</td><td>5</td></tr>
                        <tr><td>6</td><td>110</td><td>6</td><td>6</td></tr>
                        <tr><td>7</td><td>111</td><td>7</td><td>7</td></tr>
                        <tr><td>10</td><td>001 000</td><td>8</td><td>8</td></tr>
                        <tr><td>11</td><td>001 001</td><td>9</td><td>9</td></tr>
                        <tr><td>12</td><td>001 010</td><td>A</td><td>10</td></tr>
                        <tr><td>13</td><td>001 011</td><td>B</td><td>11</td></tr>
                        <tr><td>14</td><td>001 100</td><td>C</td><td>12</td></tr>
                        <tr><td>15</td><td>001 101</td><td>D</td><td>13</td></tr>
                        <tr><td>16</td><td>001 110</td><td>E</td><td>14</td></tr>
                        <tr><td>17</td><td>001 111</td><td>F</td><td>15</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>

 <script src="{{ '/assets/js/number-conversion/octal-to-hexa.js' | relative_url }}"></script>     