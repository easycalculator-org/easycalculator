---
layout: default
title: Kelvin to Celsius Calculator (K → °C) + Formula, Chart & Example
permalink: /kelvin-to-celsius
description: "Convert Kelvin to Celsius quickly and accurately with our easy-to-use calculator! Perfect for science, weather, and school projects. Get results instantly!"
image: "/assets/images/kelvin-to-celsius.jpg"
last_modified_at: 2026-05-11
---

<style>
.converter-section{background:#f5f7fb}.converter-wrap{max-width:1050px;display:grid;grid-template-columns:1fr 420px;gap:50px;align-items:center}.converter-content h1{font-size:52px;font-weight:800;line-height:1.1;color:#111827;margin-bottom:22px}.converter-desc{font-size:18px;line-height:1.8;color:#4b5563;margin-bottom:30px}.converter-tag{display:inline-block;background:#dbeafe;color:#2563eb;padding:8px 16px;border-radius:50px;font-size:14px;font-weight:600;margin-bottom:24px}.formula-mini{background:#fff;padding:18px 22px;border-radius:18px;display:inline-block;box-shadow:0 10px 30px #0000000f}.converter-box{background:#fff;border-radius:28px;padding:35px;box-shadow:0 10px 25px #0000000d 0 20px 48px #0000000f}.input-label{display:block;font-size:15px;font-weight:600;margin-bottom:14px;color:#111827}.custom-input-group{display:flex;align-items:center;border:2px solid #e5e7eb;border-radius:18px;overflow:hidden;margin-bottom:24px;transition:.3s}.custom-input-group:focus-within{border-color:#2563eb;box-shadow:0 0 0 5px #2563eb1f}.custom-input-group input{flex:1;border:none;outline:none;padding:22px;font-size:26px;font-weight:700;color:#111827;background:#fff}.custom-input-group span{background:#2563eb;color:#fff;padding:22px 24px;font-weight:700;font-size:20px}.convert-btn{width:100%;border:none;background:#2563eb;color:#fff;font-size:17px;font-weight:700;padding:18px;border-radius:18px;transition:.3s}.convert-btn:hover{background:#1d4ed8;transform:translateY(-2px)}.result-area{margin-top:24px;background:#eff6ff;border:2px solid #bfdbfe;padding:24px;border-radius:20px;text-align:center;font-size:34px;font-weight:800;color:#1e3a8a}.quick-values{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap}.quick-values button{border:none;background:#f3f4f6;padding:10px 16px;border-radius:12px;font-size:14px;font-weight:600;transition:.3s}.quick-values button:hover{background:#dbeafe;color:#2563eb}@media(max-width:991px){.converter-wrap{grid-template-columns:1fr;gap:30px}.converter-content{text-align:center}.converter-content h1{font-size:38px}}@media(max-width:576px){.converter-box{padding:24px}.converter-content h1{font-size:32px}.custom-input-group input{font-size:22px;padding:18px}.result-area{font-size:26px}}
</style>


<section class="converter-section py-5">
 <div class="converter-wrap mx-auto">
   <!-- Left Content -->
  <div class="converter-content">
  <span class="converter-tag">Kelvin → Celsius </span>
   <h1>Kelvin to Celsius Converter </h1>
    <p class="converter-desc"> Instantly convert Kelvin (K) to Celsius (°C) using the accurate scientific conversion formula. Perfect for physics, chemistry, weather science, and engineering calculations.</p>
     <div class="formula-mini">
       <span class="formula-text">°C = K − 273.15</span>
      </div>
     </div>
    <!-- Converter Box -->
    <div class="converter-box">
     <label class="input-label">Enter Kelvin Value</label>
      <div class="custom-input-group"><input  type="number" id="kelvinInput"  placeholder="Example: 300" ><span>K</span></div>
        <button type="button" class="convert-btn" onclick="convertToCelsius()">Convert Temperature</button>
        <div class="result-area d-none" id="result" ></div>
        <!-- Quick Examples -->
        <div class="quick-values">
          <button onclick="setKelvin(273.15)">273.15 K </button>
          <button onclick="setKelvin(300)">300 K </button>
          <button onclick="setKelvin(373.15)">373.15 K </button>
        </div>
      </div>
    </div>
</section>







<hr>
<div class="row justify-content-center">
  <div class="col-auto"><a class="btn btn-light shadow-sm" href="/kelvin-to-fahrenheit">Kelvin to Fahrenheit</a></div>
  <div class="col-auto"><a class="btn btn-light shadow-sm" href="/fahrenheit-to-celsius">Fahrenheit to Celsius</a></div>
  <div class="col-auto"><a class="btn btn-light shadow-sm" href="/celsius-to-kelvin">Celsius to Kelvin</a></div>
  <div class="col-auto"><a class="btn btn-light shadow-sm" href="/fahrenheit-to-kelvin">Fahrenheit to Kelvin</a></div>
  <div class="col-auto"><a class="btn btn-light shadow-sm" href="/celsius-to-fahrenheit">Celsius to Fahrenheit</a></div>
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
<h2>What is Kelvin to Celsius Calculator?</h2>
 <p>A Kelvin to Celsius Calculator is an online temperature conversion that quickly converts temperatures from Kelvin (K) to Celsius (°C) using the formula: °C = K - 273.15. It is commonly used by students, scientists, and engineers to interpret scientific data in a more familiar temperature scale. This converter is accurate, user-friendly, and ideal for physics, chemistry, and everyday use. </p>
      
<hr class="my-5">
 <h2>🔁 How to Convert Kelvin to Celsius</h2>
  <p><strong>Formula:</strong> <code>Celsius (°C) = Kelvin (K) - 273.15</code></p>
  <p><strong>Example:</strong> 300 K → 300 - 273.15 = <strong>26.85°C</strong></p>

<hr class="my-5">
 <div class="bg-light p-4 rounded mt-4">
  <h4 class="text-primary"><i class="fas fa-star me-2"></i>Features of the Kelvin to Celsius Calculator</h4>
   <ul class="list-group list-group-flush">
    <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Instant Conversion</strong> – Get results in real-time.</li>
    <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Precise Results</strong> – Accurate up to two decimals.</li>
    <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Science-Ready</strong> – Built for labs and academics.</li>
   <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Responsive Design</strong> – Use on mobile, tablet, or desktop.</li>
 </ul>
</div>
<div class="pt-4">
 <h2>Kelvin to Celsius Conversion Chart</h2>
 <div class="table-responsive">
 <table class="table table-bordered">
 <thead class="table-light"><tr><th>Kelvin (K)</th><th>Celsius (°C)</th></tr></thead>
<tbody>
<tr><td>100 K</td><td>-173.15°C</td></tr>
<tr><td>200 K</td><td>-73.15°C</td></tr>
<tr><td>250 K</td><td>-23.15°C</td></tr>
<tr><td>273.15 K</td><td>0°C</td></tr>
<tr><td>298.15 K</td><td>25°C</td></tr>
<tr><td>310.15 K</td><td>37°C</td></tr>
<tr><td>373.15 K</td><td>100°C</td></tr>
</tbody>
</table>
</div>
</div>

<div class="pt-4">
<h2> Why Use Kelvin?</h2>
 <p>The Kelvin scale is the <strong>SI unit of temperature</strong>, commonly used in physics and chemistry. It starts from <strong>absolute zero (0 K)</strong>, where atomic movement stops. Unlike Celsius, Kelvin values never go negative.</p>
</div>
  <div class="table-responsive mt-3">
    <table class="table table-bordered">
      <thead class="table-light"><tr><th>Kelvin (K)</th><th>Celsius (°C)</th></tr>
      </thead>
      <tbody>
        <tr><td>0 K</td><td>-273.15°C</td></tr>
        <tr><td>50 K</td><td>-223.15°C</td></tr>
        <tr><td>77 K</td><td>-196.15°C</td></tr>
        <tr><td>273.15 K</td><td>0°C</td></tr>        
        <tr><td>373.15 K</td><td>100°C</td></tr>
        <tr><td>500 K</td><td>226.85°C</td></tr>
      </tbody>
    </table>
  </div>

<hr class="my-5">
<div class="info-card my-5">
  <h3 class="mb-4"><i class="fas fa-flask science-icon me-2"></i>Common Use Cases</h3>
  <div class="row g-4">
    <div class="col-md-6">
      <div class="d-flex align-items-start p-3 bg-light rounded shadow-sm h-100">
        <i class="fas fa-meteor science-icon me-3 fs-4 text-primary"></i><span>Astrophysics & Space Science</span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex align-items-start p-3 bg-light rounded shadow-sm h-100">
        <i class="fas fa-vial science-icon me-3 fs-4 text-success"></i><span>Chemistry Laboratory Reports</span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex align-items-start p-3 bg-light rounded shadow-sm h-100">
        <i class="fas fa-atom science-icon me-3 fs-4 text-danger"></i><span>Physics & Thermodynamics Calculations</span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex align-items-start p-3 bg-light rounded shadow-sm h-100">
        <i class="fas fa-graduation-cap science-icon me-3 fs-4 text-warning"></i><span>School and College Science Projects</span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="d-flex align-items-start p-3 bg-light rounded shadow-sm h-100">
        <i class="fas fa-book science-icon me-3 fs-4 text-info"></i><span>Scientific Publications & Research Papers</span>
      </div>
    </div>

  </div>
</div>

  <hr class="my-5">
  <h2>🛠️ How to Use the Calculator</h2>
  <ol>
    <li>Enter the temperature in Kelvin.</li>
    <li>Click or tab out – Celsius value appears instantly.</li>
    <li>Use the result for reports, projects, or experiments.</li>
  </ol>
</section>
<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Kelvin to Celsius Calculator</h2>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
       <div class="fw-bold text-primary"> 1. How do I convert Kelvin to Celsius? </div>
         <p class="mb-0"> To convert Kelvin to Celsius, simply subtract 273.15 from the Kelvin value. <br> Formula: Celsius = Kelvin - 273.15. <br>For example, 300 K is 26.85°C. </p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. What is 0 Kelvin in Celsius? </div>
            <p class="mb-0">Zero Kelvin is equal to -273.15°C and is known as absolute zero — the lowest possible temperature where all atomic motion stops.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. Why do we subtract 273.15 when converting Kelvin to Celsius? </div>
            <p class="mb-0">Kelvin and Celsius scales are offset by 273.15 degrees. While Celsius starts at the freezing point of water (0°C), the Kelvin scale starts from absolute zero. So, you subtract 273.15 to get the Celsius equivalent.</p>
          </div>
        </div>
      </section>
      <!-- Did You Know? -->
      <div class="card border-0 bg-light mb-2">
        <div class="card-body">
          <h5 class="d-flex align-items-center"><i class="fas fa-info-circle me-3 text-primary"></i>Did You Know? </h5>
          <p class="mb-0"> Did you know that 0 Kelvin is called absolute zero, the coldest temperature theoretically possible? At this point, all molecular motion stops completely. </p>
          <p class="mb-0"> Did you know that the Kelvin scale is used in space science because it starts at absolute zero, making it ideal for extreme environments?</p>
        </div>
      </div>
    </div>
  <script src="{{ '/assets/js/temp/kelvin-to-celsius.js' | relative_url }}"></script>

  <script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "How do I convert Kelvin to Celsius?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Subtract 273.15 from the Kelvin value. Formula: °C = K − 273.15."
   }
  },
  {
   "@type": "Question",
   "name": "What is 0 Kelvin in Celsius?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "0 Kelvin equals −273.15°C, known as absolute zero."
   }
  }
 ]
}
</script>