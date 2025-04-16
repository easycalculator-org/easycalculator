---
layout: default
title: MPH to KMPH Speed Converter | Convert Miles Per Hour to Kilometers Per Hour
permalink: /mph-to-kmph
description: "Easily convert miles per hour (mph) to kilometers per hour (km/h) with our simple speed converter. Includes a conversion formula, examples, and a quick reference chart."
---

<div class="container d-flex justify-content-center align-items-center full-height">
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="card shadow-lg">
            <div class="card-body">
                <h4 class="card-title text-center mb-4">MPH to KM/H Converter</h4>
                <form id="converterForm">
 <!-- KM/H to MPH -->
<div class="mb-3">
<label for="kmInput" class="form-label">Speed in MPH</label>
<input type="number" class="form-control" id="kmInput" placeholder="Enter speed in km/h">
</div>
<div class="mb-3">
<label for="mileOutput" class="form-label">Speed in KM/H</label>
<input type="text" class="form-control" id="mileOutput" readonly>
</div>
<button type="button" class="btn btn-primary w-100 mb-3" onclick="convertToMPH()">Convert</button>
</form>
</div>
</div>
</div>
</div>


<h1>MPH to KMPH Speed Converter</h1>
<p>Miles per hour (mph) and kilometers per hour (km/h) are commonly used speed units worldwide. While mph is widely used in the United States and the United Kingdom, km/h is the standard measurement in most other countries. Converting between these units is essential for drivers, athletes, and travelers.</p>

<h3>How to Convert MPH to KMPH</h3>
<p>To convert miles per hour (mph) to kilometers per hour (km/h), use the following formula:</p>
<!-- Formula -->
<p class="display-4"> $$ \text{mph} = \text{km/h} \times 0.621371 $$  </p>



<h4>Example Conversions</h4>
<ul>
<li><strong>60 mph to km/h:</strong> 60 × 1.60934 = <strong>96.56 km/h</strong></li>
<li><strong>100 mph to km/h:</strong> 100 × 1.60934 = <strong>160.93 km/h</strong></li>
<li><strong>150 mph to km/h:</strong> 150 × 1.60934 = <strong>241.40 km/h</strong></li>
</ul>

<h3>MPH to KMPH Conversion Chart</h3>
<div class="table-responsive">
<table class="table table-bordered table-striped text-center">
<thead class="table-primary"><tr><th>MPH</th><th>KMPH</th></tr></thead>
            <tbody>
                <tr><td>10</td><td>16.09</td></tr>
                <tr><td>20</td><td>32.19</td></tr>
                <tr><td>30</td><td>48.28</td></tr>
                <tr><td>40</td><td>64.37</td></tr>
                <tr><td>50</td><td>80.47</td></tr>
                <tr><td>60</td><td>96.56</td></tr>
                <tr><td>70</td><td>112.65</td></tr>
                <tr><td>80</td><td>128.75</td></tr>
                <tr><td>90</td><td>144.84</td></tr>
                <tr><td>100</td><td>160.93</td></tr>
                <tr><td>120</td><td>193.12</td></tr>
                <tr><td>150</td><td>241.40</td></tr>
                <tr><td>200</td><td>321.87</td></tr>
                <tr><td>250</td><td>402.34</td></tr>
                <tr><td>300</td><td>482.80</td></tr>
            </tbody>
        </table>
    </div>

<h3>Where is MPH to KMPH Conversion Used?</h3>
<ul>
<li><strong>Driving and Speed Limits:</strong> Travelers renting a car abroad need to understand local speed limits.</li>
<li><strong>Motorsports:</strong> Racing competitions often use different speed metrics, requiring conversions.</li>
<li><strong>Fitness and Sports:</strong> Runners, cyclists, and athletes may need to convert speed units.</li>
<li><strong>Aviation and Marine Navigation:</strong> Some speed indicators use mph while others use km/h, making conversion essential.</li>
</ul>

<hr>
<a href="/kmp-to-mph" class="btn btn-success w-30">Convert Mph to KM/H</a>















<script>
    function convertToMPH() {
        let kmh = document.getElementById("kmInput").value;
        let mph = kmh * 0.621371;
        document.getElementById("mileOutput").value = mph.toFixed(2);
    }

    function convertToKMPH() {
        let mph = document.getElementById("mphInput").value;
        let kmh = mph / 0.621371;
        document.getElementById("kmOutput").value = kmh.toFixed(2);
    }
</script>

<script type="text/javascript" async src="https://polyfill.io/v3/polyfill.min.js?features=es6"> </script>
<script type="text/javascript" async  id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>  
