---
layout: default
title: MPH to KMPH Speed Converter | Convert Miles Per Hour to Kilometers Per Hour
permalink: /mph-to-kmph
description: "Easily convert miles per hour (mph) to kilometers per hour (km/h) with our simple speed converter. Includes a conversion formula, examples, and a quick reference chart."
image: "/assets/images/mph-to-kmph.jpg"
---
<style>
 .converter-card{ max-width:520px;  margin:auto;  border-radius:18px; box-shadow:0 12px 32px rgba(0,0,0,0.08); }
.result-box{ background:#eef4ff;  border-radius:14px; font-size:1.3rem; font-weight:600; }
</style>

<div class="container py-5">
 <div class="card converter-card p-4">
   <h2 class="text-center mb-2">🚗 MPH to KMPH Converter</h2>
    <div class="mb-3">
            <label class="form-label fw-semibold">Speed in MPH</label>
            <input type="number" id="mph" class="form-control form-control-lg" placeholder="Enter speed in mph">
        </div>
        <div class="d-grid gap-2 my-3">
            <button class="btn btn-primary btn-lg" onclick="convertMPHtoKMPH()"> Convert to KMPH </button>
            <button class="btn btn-outline-secondary" onclick="resetFields()">  Reset </button>
        </div>
        <div id="result" class="result-box text-center p-3 d-none"></div>
    </div>
</div>

<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>



<!-- Section -->
<section class="mb-5">
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
  function convertMPHtoKMPH(){
    let mph = document.getElementById("mph").value;
    let resultBox = document.getElementById("result");

    if(mph === "" || mph <= 0){
        resultBox.innerHTML = "Please enter a valid speed in MPH.";
        resultBox.classList.remove("d-none");
        return;
    }

    let kmph = (mph * 1.60934).toFixed(2);
    resultBox.innerHTML = `${mph} mph = ${kmph} km/h`;
    resultBox.classList.remove("d-none");
}

function resetFields(){
    document.getElementById("mph").value = "";
    document.getElementById("result").classList.add("d-none");
}
</script>

<script type="text/javascript" async src="https://polyfill.io/v3/polyfill.min.js?features=es6"> </script>
<script type="text/javascript" async  id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>  
