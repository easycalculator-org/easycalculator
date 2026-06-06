---
layout: default
title: Fahrenheit to Celsius Calculator (°F → °C) + Formula, Chart & Example
permalink: /fahrenheit-to-celsius
description: "Easily convert Fahrenheit to Celsius with our simple online tool! Get quick and accurate temperature conversions in just a few clicks."
last_modified_at: 2026-05-05
---

<style>
.converter-section{background:#f5f7fb}.converter-wrap{max-width:1050px;display:grid;grid-template-columns:1fr 420px;gap:50px;align-items:center}.converter-content h1{font-size:52px;font-weight:800;line-height:1.1;color:#111827;margin-bottom:22px}.converter-desc{font-size:18px;line-height:1.8;color:#4b5563;margin-bottom:30px}.converter-tag{display:inline-block;background:#dbeafe;color:#2563eb;padding:8px 16px;border-radius:50px;font-size:14px;font-weight:600;margin-bottom:24px}.formula-mini{background:#fff;padding:18px 24px;border-radius:18px;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 10px 30px #0000000f;border:1px solid #eef2ff}.formula-text{font-size:28px;font-weight:800;color:#2563eb;letter-spacing:.5px}.converter-box{background:#fff;border-radius:28px;padding:35px;box-shadow:0 10px 25px #0000000d 0 20px 48px #0000000f}.input-label{display:block;font-size:15px;font-weight:600;margin-bottom:14px;color:#111827}.custom-input-group{display:flex;align-items:center;border:2px solid #e5e7eb;border-radius:18px;overflow:hidden;margin-bottom:24px;transition:.3s}.custom-input-group:focus-within{border-color:#2563eb;box-shadow:0 0 0 5px #2563eb1f}.custom-input-group input{flex:1;border:none;outline:none;padding:22px;font-size:26px;font-weight:700;color:#111827;background:#fff}.custom-input-group span{background:#2563eb;color:#fff;padding:22px 24px;font-weight:700;font-size:20px}.convert-btn{width:100%;border:none;background:#2563eb;color:#fff;font-size:17px;font-weight:700;padding:18px;border-radius:18px;transition:.3s}.convert-btn:hover{background:#1d4ed8;transform:translateY(-2px)}.result-area{margin-top:24px;background:#eff6ff;border:2px solid #bfdbfe;padding:24px;border-radius:20px;text-align:center;font-size:34px;font-weight:800;color:#1e3a8a}.quick-values{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}.quick-values button{border:none;background:#f3f4f6;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:600;transition:.3s}.quick-values button:hover{background:#dbeafe;color:#2563eb}@media(max-width:991px){.converter-wrap{grid-template-columns:1fr;gap:30px}.converter-content{text-align:center}.converter-content h1{font-size:38px}}@media(max-width:576px){.converter-box{padding:24px}.converter-content h1{font-size:32px}.custom-input-group input{font-size:22px;padding:18px}.result-area{font-size:26px}}
</style>


<section class="converter-section py-5">
<div class="converter-wrap mx-auto">
<div class="converter-content">
<span class="converter-tag"> Fahrenheit → Celsius</span>
 <h1>Fahrenheit to Celsius Converter </h1>
  <p class="converter-desc"> Instantly convert Fahrenheit (°F) to Celsius (°C) using the accurate temperature conversion formula.  Useful for weather reports, cooking, science, travel, engineering, and daily temperature calculations. </p>
  <div class="formula-mini"><span class="formula-text">°C = (°F − 32) × 5/9</span></div>
 </div>
 <!-- Converter Box -->
 <div class="converter-box">
 <label class="input-label">Enter Fahrenheit Value </label>
  <div class="custom-input-group"><input  type="number" id="fahrenheitInput" placeholder="Example: 98.6" ><span>°F</span></div>
  <button type="button" class="convert-btn" onclick="convertToCelsius()" >Convert Temperature</button>
   <div class="result-area d-none" id="result" ></div>
     <!-- Quick Examples -->
     <div class="quick-values">
      <button onclick="setFahrenheit(32)">32°F</button>
      <button onclick="setFahrenheit(98.6)">98.6°F</button>
      <button onclick="setFahrenheit(212)">212°F </button>
     </div>
      </div>
    </div>
</section>


<hr>

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/kelvin-to-fahrenheit">Kelvin to Fahrenheit</a>
  </div>
 
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-kelvin">Celsius to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/kelvin-to-celsius">Kelvin to Celsius</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-kelvin">Fahrenheit to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-fahrenheit">Celsius to Fahrenheit</a>
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
      <!-- What is Section1 -->
 <section class="mb-5">
   <h2>🌡️ Fahrenheit to Celsius Converter</h2>
     <p>The Fahrenheit to Celsius Converter is an essential tool that allows you to quickly convert temperatures from the imperial Fahrenheit scale to the metric Celsius scale. Whether you're tracking the weather, cooking, or studying science, this conversion helps make sense of temperature in a globally understood format.</p>
      <h3 class="p-3">✅ What is Fahrenheit to Celsius Conversion? </h3>
      <p>The Fahrenheit (°F) scale is commonly used in the United States, while the Celsius (°C) scale is used in most other countries and in science.<br>To convert Fahrenheit to Celsius, use this formula: <code>Celsius = (Fahrenheit - 32) × 5/9</code></p>
      <div class="highlight-box">
         <h5><i class="fas fa-lightbulb text-warning me-2"></i>Example: Let’s convert 98.6°F (average human body temperature) to Celsius:</h5>
          <p class="mb-0"> Celsius = (98.6 - 32) × 5/9   ≈ 37°C <br>So, 98.6°F is approximately equal to 37°C.</p>
        </div>
      </section>
  <!-- FAQ Section -->
      <section class="mb-5">
        <h2 class="mb-4">FAQ on Fahrenheit to Celsius Converter</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. How do I convert Fahrenheit to Celsius manually?</div>
            <p class="mb-0"> Use this formula: (°F - 32) × 5/9. Example: (68 - 32) × 5/9 = 20°C. </p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">2. What is the freezing point of water in Fahrenheit and Celsius?</div>
            <p class="mb-0">Water freezes at 32°F or 0°C.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">3. Is 100°F a fever in Celsius?</div>
            <p class="mb-0">Yes. 100°F is approximately 37.78°C, which is considered a mild fever.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">4. What is the easiest way to convert Fahrenheit to Celsius on the go?</div>
            <p class="mb-0">Use an online Fahrenheit to Celsius Converter on your smartphone or browser.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">5. What is room temperature in Fahrenheit and Celsius?</div>
            <p class="mb-0">Room temperature is typically around 20°C to 22°C, which equals 68°F to 72°F. </p>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <h5 class="d-flex align-items-center"><i class="fas fa-info-circle me-3 text-primary"></i>Did You Know? </h5>
          <p class="mb-0"> The Fahrenheit scale was developed in 1724 by Daniel Gabriel Fahrenheit, while Celsius came later in 1742 by Anders Celsius. The Celsius scale is now the standard in scientific research and used globally—except in the U.S., where Fahrenheit is still the norm! </p>
        </div>
      </div>
    </div>

  <script src="{{ '/assets/js/temp/fahrenheit-to-celsius.js' | relative_url }}"></script>