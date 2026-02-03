---
layout: default
title: Length Converter | Easily Convert Between Different Units of Measurement
permalink: /length-converter
description: "Easily convert measurements with our Length Converter. Switch between units instantly and get accurate results in just a few clicks!"
last_modified_at: 2026-02-03
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h1 class="text-center mb-4">Length Converter</h1>
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
                            <div class="d-block p-3 text-center rounded shadow-sm bg-light text-dark text-decoration-none">
                                ${conversion}
                            </div>
                        </a>
                    </div>
                `);
            });
 </script>
</div>

<!-- Article part -->
<br>
<section class="card mb-5 border-0 shadow">
            <div class="card-body p-4">
                <h2 class="card-title mb-4"><i class="bi bi-question-circle me-2 text-primary"></i>What is a Length Converter?</h2>
                <p class="card-text lead">A length converter is a tool that allows users to convert one unit of length into another. This helps in different applications where specific measurement systems are required, such as metric and imperial systems.</p>
            </div>
        </section>

 <!-- Units Section -->
<section class="mb-5">
<h2 class="mb-4 pb-2 border-bottom"><i class="bi bi-list-columns me-2 text-primary"></i>Common Length Conversion Units</h2>
  <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="card h-100 border-primary">
                        <div class="card-header bg-primary text-white">
                            <h3 class="h5 mb-0"><i class="bi bi-globe-europe-africa me-2"></i>Metric System</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Millimeter (mm)
                                <span class="badge bg-light text-dark">1/1000 m</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Centimeter (cm)
                                <span class="badge bg-light text-dark">1/100 m</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Meter (m)
                                <span class="badge bg-light text-dark">Base unit</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Kilometer (km)
                                <span class="badge bg-light text-dark">1000 m</span>
                            </li>
                        </ul>
                    </div>
                </div>
<div class="col-md-6 mb-4">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h3 class="h5 mb-0"><i class="bi bi-globe-americas me-2"></i>Imperial & US Customary System</h3>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Inch (in)
                                <span class="badge bg-light text-dark">1/12 ft</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Foot (ft)
                                <span class="badge bg-light text-dark">12 in</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Yard (yd)
                                <span class="badge bg-light text-dark">3 ft</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Mile (mi)
                                <span class="badge bg-light text-dark">1760 yd</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
</section>

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

<!-- Formulas and Examples -->
<div class="row">
            <!-- Formulas -->
            <div class="col-lg-6 mb-5">
                <div class="card h-100 border-success">
                    <div class="card-header bg-success text-white">
                        <h2 class="h4 mb-0"><i class="bi bi-calculator me-2"></i>Length Conversion Formulas</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <span class="fw-bold">Millimeters to Centimeters:</span><br>
                                cm = mm ÷ 10
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Centimeters to Meters:</span><br>
                                m = cm ÷ 100
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Meters to Kilometers:</span><br>
                                km = m ÷ 1000
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Inches to Centimeters:</span><br>
                                cm = in × 2.54
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Feet to Meters:</span><br>
                                m = ft × 0.3048
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Yards to Meters:</span><br>
                                m = yd × 0.9144
                            </li>
                            <li class="list-group-item">
                                <span class="fw-bold">Miles to Kilometers:</span><br>
                                km = mi × 1.60934
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Examples -->
            <div class="col-lg-6 mb-5">
                <div class="card h-100 border-info">
                    <div class="card-header bg-info text-white">
                        <h2 class="h4 mb-0"><i class="bi bi-journal-check me-2"></i>Examples of Length Conversions</h2>
                    </div>
                    <div class="card-body">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Example 1: Convert 50 Inches to Centimeters</h5>
                                <p class="card-text">Using the formula: cm = in × 2.54</p>
                                <p class="card-text">50 × 2.54 = 127 cm</p>
                                <p class="fw-bold text-success">Result: 50 inches = 127 cm</p>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Example 2: Convert 5 Kilometers to Miles</h5>
                                <p class="card-text">Using the formula: mi = km ÷ 1.60934</p>
                                <p class="card-text">5 ÷ 1.60934 ≈ 3.10686 mi</p>
                                <p class="fw-bold text-success">Result: 5 km ≈ 3.11 miles</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Example 3: Convert 100 Meters to Feet</h5>
                                <p class="card-text">Using the formula: ft = m ÷ 0.3048</p>
                                <p class="card-text">100 ÷ 0.3048 ≈ 328.084 ft</p>
                                <p class="fw-bold text-success">Result: 100 meters ≈ 328.08 feet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

 <!-- Why Use -->
 <section class="card mb-5 border-secondary">
            <div class="card-header bg-secondary text-white">
                <h2 class="h4 mb-0"><i class="bi bi-lightbulb me-2"></i>Why Use a Length Converter?</h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <div class="text-center p-3">
                            <i class="bi bi-check-circle-fill text-success display-4 mb-3"></i>
                            <h3 class="h5">Accuracy</h3>
                            <p>Manual conversions can lead to errors; a length converter ensures precision.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="text-center p-3">
                            <i class="bi bi-stopwatch-fill text-primary display-4 mb-3"></i>
                            <h3 class="h5">Time-Saving</h3>
                            <p>Quick and effortless conversion between units saves valuable time.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="text-center p-3">
                            <i class="bi bi-gear-fill text-info display-4 mb-3"></i>
                            <h3 class="h5">Convenience</h3>
                            <p>Used in various industries including travel, construction, and academia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<!-- FAQ -->
<section class="mb-5">
            <h2 class="mb-4 pb-2 border-bottom"><i class="bi bi-question-circle me-2 text-primary"></i>Frequently Asked Questions</h2>
            <div class="accordion" id="faqAccordion">
                <div class="accordion-item">
                    <h3 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Can I convert between metric and imperial units? </button>
                    </h3>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            Yes, you can! A length converter makes it simple to convert measurements from metric units, like meters and centimeters, to imperial units, such as feet and inches.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            What units can I convert using a length converter?
                        </button>
                    </h3>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div class="accordion-body"> Common units for length conversion include meters, kilometers, feet, inches, yards, centimeters, and miles. Most converters support all standard metric and imperial length units.  </div>
                    </div>
                </div>
            </div>
        </section>

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

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
