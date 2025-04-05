---
layout: default
title: Length Converter | Easily Convert Between Different Units of Measurement
permalink: /length-converter/
description: "Easily convert measurements with our Length Converter. Switch between units instantly and get accurate results in just a few clicks!"
---
<style>
 .conversion-box:hover {
            background-color:rgb(152, 196, 243) !important; /* Bootstrap primary color */
            color: white !important;
  }
</style>
<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Length Converter</h2>
 <div class="mb-3">
            <input type="number" id="inputValue" class="form-control" placeholder="Enter value">
        </div>
<div class="mb-3">
            <select id="conversionType" class="form-select">
                <option value="cmToInches">CM to Inches</option>
                <option value="inchesToCm">Inches to CM</option>
                <option value="mmToInches">MM to Inches</option>
                <option value="inchesToMm">Inches to MM</option>
                <option value="metersToFeet">Meters to Feet</option>
                <option value="feetToMeters">Feet to Meters</option>
                <option value="kmToMiles">KM to Miles</option>
                <option value="milesToKm">Miles to KM</option>
                <option value="cmToFeet">CM to Feet</option>
                <option value="feetToCm">Feet to CM</option>
                <option value="inchesToFeet">Inches to Feet</option>
                <option value="feetToInches">Feet to Inches</option>
                <option value="metersToYards">Meters to Yards</option>
                <option value="yardsToMeters">Yards to Meters</option>
                <option value="mmToCm">MM to CM</option>
                <option value="cmToMm">CM to MM</option>
                <option value="cmToKm">CM to KM</option>
                <option value="kmToCm">KM to CM</option>
                <option value="mmToFeet">MM to Feet</option>
                <option value="feetToMm">Feet to MM</option>
                <option value="metersToMiles">Meters to Miles</option>
                <option value="milesToMeters">Miles to Meters</option>
                <option value="feetToMiles">Feet to Miles</option>
                <option value="milesToFeet">Miles to Feet</option>
                <option value="yardsToFeet">Yards to Feet</option>
                <option value="feetToYards">Feet to Yards</option>
                <option value="inchesToMeters">Inches to Meters</option>
                <option value="metersToInches">Meters to Inches</option>
                <option value="kmToMm">KM to MM</option>
                <option value="mmToKm">MM to KM</option>
                <option value="inchesToYards">Inches to Yards</option>
                <option value="yardsToInches">Yards to Inches</option>
                <option value="yardsToMiles">Yards to Miles</option>
                <option value="milesToYards">Miles to Yards</option>
            </select>
        </div>

<button class="btn btn-primary btn-shadow w-100" onclick="convert()">Convert</button>
<div class="mt-3">
            <h4>Result: <span id="result">-</span></h4>
        </div>
    </div>
</div>

<!-- length convert -->
<div class="row g-3 fw-semibold">
        <script>
            const conversions = [
                "CM to Inches", "Inches to CM", "MM to Inches", "Inches to MM",
                "Meters to Feet", "Feet to Meters", "KM to Miles", "Miles to KM",
                "CM to Feet", "Feet to CM", "Inches to Feet", "Feet to Inches",
                "Meters to Yards", "Yards to Meters", "MM to CM", "CM to MM",
                "CM to KM", "KM to CM", "MM to Feet", "Feet to MM",
                "Meters to Miles", "Miles to Meters", "Feet to Miles", "Miles to Feet",
                "Yards to Feet", "Feet to Yards", "Inches to Meters", "Meters to Inches",
                "KM to MM", "MM to KM", "Inches to Yards", "Yards to Inches",
                "Yards to Miles", "Miles to Yards"
            ];
            conversions.forEach(conversion => {
                let url = conversion.toLowerCase().replace(/ /g, "-"); // Convert to lowercase and replace spaces with '-'
                document.write(`
                    <div class="col-md-4 col-lg-2">
                        <a href="/length-converter/${url}" class="text-dark text-decoration-none">
                            <div class="p-3 bg-light text-center rounded shadow transition conversion-box">
                                ${conversion}
                            </div>
                        </a>
                    </div>
                `);
            });
 </script>
</div>

<!-- Article part -->
<h1 class="pt-4">What is a Length Converter?</h1>
<p>A length converter is a tool that allows users to convert one unit of length into another. This helps in different applications where specific measurement systems are required, such as metric and imperial systems. </p>

<h2>Common Length Conversion Units</h2>
<h3>Metric System:</h3>
<ul><li>Millimeter (mm)</li><li>Centimeter (cm)</li><li>Meter (m)</li><li>Kilometer (km)</li></ul>
    
<h3>Imperial & US Customary System:</h3>
<ul><li>Inch (in)</li><li>Foot (ft)</li><li>Yard (yd)</li><li>Mile (mi)</li></ul>

<h2>Length Conversion Chart</h2>
   <div class="table-responsive text-center">
        <table class="table table-bordered">
            <thead class="table-primary">
                <tr>
                    <th>From / To</th>
                    <th>Millimeter (mm)</th>
                    <th>Centimeter (cm)</th>
                    <th>Meter (m)</th>
                    <th>Kilometer (km)</th>
                    <th>Inch (in)</th>
                    <th>Foot (ft)</th>
                    <th>Yard (yd)</th>
                    <th>Mile (mi)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1 mm</td><td>1</td><td>0.1</td><td>0.001</td><td>0.000001</td><td>0.03937</td><td>0.00328</td><td>0.00109</td><td>0.00000062</td></tr>
                <tr><td>1 cm</td><td>10</td><td>1</td><td>0.01</td><td>0.00001</td><td>0.3937</td><td>0.0328</td><td>0.01094</td><td>0.0000062</td></tr>
                <tr><td>1 m</td><td>1000</td><td>100</td><td>1</td><td>0.001</td><td>39.37</td><td>3.2808</td><td>1.094</td><td>0.000621</td></tr>
                <tr><td>1 km</td><td>1,000,000</td><td>100,000</td><td>1000</td><td>1</td><td>39,370</td><td>3280.84</td><td>1093.61</td><td>0.621371</td></tr>
            </tbody>
        </table>
    </div>
<img class="img-fluid" alt="Length Measurement Conversion Chart – Metric" src="/assets/images/length-conversion-1.jpg" fetchpriority="high" loading="auto" style="object-fit: contain;" />
<h2>Length Conversion Formulas</h2>
<ul>
<li>Millimeters to Centimeters: \( cm = \frac{mm}{10} \)</li>
<li>Centimeters to Meters: \( m = \frac{cm}{100} \)</li>
<li>Meters to Kilometers: \( km = \frac{m}{1000} \)</li>
<li>Inches to Centimeters: \( cm = in \times 2.54 \)</li>
<li>Feet to Meters: \( m = ft \times 0.3048 \)</li>
<li>Yards to Meters: \( m = yd \times 0.9144 \)</li>
<li>Miles to Kilometers: \( km = mi \times 1.60934 \)</li>
</ul>

<h2>Examples of Length Conversions</h2>
<h3>Example 1: Convert 50 Inches to Centimeters</h3>
<p>Using the formula: \( cm = in \times 2.54 \)</p>
<p>\( 50 \times 2.54 = 127 \)</p>
<p><strong>Result:</strong> 50 inches = 127 cm</p>

<h3>Example 2: Convert 5 Kilometers to Miles</h3>
<p>Using the formula: \( mi = km \times 0.621371 \)</p>
<p>\( 5 \times 0.621371 = 3.11 \)</p>
<p><strong>Result:</strong> 5 km = 3.11 miles</p>

<h3>Example 3: Convert 100 Meters to Feet</h3>
<p>Using the formula: \( ft = m \times 3.2808 \)</p>
<p>\( 100 \times 3.2808 = 328.08 \)</p>
<p><strong>Result:</strong> 100 meters = 328.08 feet</p>

<h2>Why Use a Length Converter?</h2>
<ul>
<li><strong>Accuracy</strong> – Manual conversions can lead to errors; a length converter ensures precision.</li>
<li><strong>Time-Saving</strong> – Quick and effortless conversion between units.</li>
<li><strong>Convenience</strong> – Used in various industries, including travel, construction, and academia.</li>
</ul>

<h4>FAQ</h4>
<p><strong>Can I convert between metric and imperial units? </strong> <br>
Yes, you can! A length converter makes it simple to convert measurements from metric units, like meters and centimeters, to imperial units, such as feet and inches.</p>
<p><strong>What units can I convert using a length converter? </strong><br>
Common units for length conversion include meters, kilometers, feet, inches, yards, centimeters, and miles.</p>

<!-- Article Part close -->
<script>
        function convert() {
            let value = parseFloat(document.getElementById("inputValue").value);
            let type = document.getElementById("conversionType").value;
            let result = 0;

            const conversions = {
                cmToInches: value => value / 2.54,
                inchesToCm: value => value * 2.54,
                mmToInches: value => value / 25.4,
                inchesToMm: value => value * 25.4,
                metersToFeet: value => value * 3.28084,
                feetToMeters: value => value / 3.28084,
                kmToMiles: value => value * 0.621371,
                milesToKm: value => value / 0.621371,
                cmToFeet: value => value / 30.48,
                feetToCm: value => value * 30.48,
                inchesToFeet: value => value / 12,
                feetToInches: value => value * 12,
                metersToYards: value => value * 1.09361,
                yardsToMeters: value => value / 1.09361,
                mmToCm: value => value / 10,
                cmToMm: value => value * 10,
                cmToKm: value => value / 100000,
                kmToCm: value => value * 100000,
                mmToFeet: value => value / 304.8,
                feetToMm: value => value * 304.8,
                metersToMiles: value => value / 1609.34,
                milesToMeters: value => value * 1609.34,
                feetToMiles: value => value / 5280,
                milesToFeet: value => value * 5280,
                yardsToFeet: value => value * 3,
                feetToYards: value => value / 3,
                inchesToMeters: value => value / 39.37,
                metersToInches: value => value * 39.37,
                kmToMm: value => value * 1000000,
                mmToKm: value => value / 1000000,
                inchesToYards: value => value / 36,
                yardsToInches: value => value * 36,
                yardsToMiles: value => value / 1760,
                milesToYards: value => value * 1760
            };

            if (!isNaN(value) && conversions[type]) {
                result = conversions[type](value).toFixed(4);
            } else {
                result = "Invalid input";
            }

            document.getElementById("result").textContent = result;
        }
</script>

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
