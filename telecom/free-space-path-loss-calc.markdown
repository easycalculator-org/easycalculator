---
layout: default
title: Free Space Path Loss Calculator (FSPL) | Formula & Example
permalink: /free-space-path-loss-calculator
description: "Calculate Free Space Path Loss (FSPL) in dB using frequency and distance. Includes formula, example, and RF planning guide for telecom networks."
image: "/assets/images/og/free-space-path-loss-calculator.jpg"
last_modified_at: 2026-06-24
---
<style> 
.fspl-big-number {font-size: 3rem; font-weight: 600; line-height: 1.2; }
.rx-badge {background-color: #e7f1ff; border-radius: 50px; padding: 0.5rem 1.2rem; font-size: 1.4rem;}
.article-container img {max-width: 100%; height: auto; border-radius: 14px;}
.article-container figure { background: #f8fafc;  padding: 12px;  border-radius: 16px;}
</style>

<div aria-label="breadcrumb" class="p-3">
 <ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
  <li class="breadcrumb-item active" aria-current="page">Free Space Path Loss Calculator</li>
 </ol>
</div>
<div class="row justify-content-center">
 <div class="col-lg-10 col-xl-10">
  <div class="card shadow border-0 rounded-4">
  <div class="card-header bg-transparent border-bottom">
  <h1>Free Space Path Loss Calculator</h1>
  </div>
  <div class="card-body p-4 p-xl-5">
 <!-- two column input: distance and frequency -->
  <div class="row g-4">
   <div class="col-md-6">
    <label class="form-label fw-semibold"><i class="fa-solid fa-route"></i> Distance</label>
     <div class="input-group">
     <input type="number" id="distVal" class="form-control form-control-lg" step="any" value="5">
      <select id="distUnit" class="form-select" style="max-width: 110px;">
      <option value="km" selected>km</option>
      <option value="m">m</option>
      <option value="mile">mile</option>
      <option value="nmi">NM</option>
      </select>
     </div>
    </div>
<div class="col-md-6">
 <label class="form-label fw-semibold"><i class="fa-solid fa-wave-square"></i> Frequency</label>
  <div class="input-group">
   <input type="number" id="freqVal" class="form-control form-control-lg" step="any" value="2400">
   <select id="freqUnit" class="form-select" style="max-width: 110px;">
   <option value="MHz" selected>MHz</option>
   <option value="GHz">GHz</option>
   <option value="kHz">kHz</option>
   <option value="Hz">Hz</option>
  </select>
 </div>
  </div>
  </div>
 <!-- antenna gains row -->
 <div class="row mt-2 g-4">
   <div class="col-md-6">
   <label class="form-label fw-semibold"><i class="fa-regular fa-circle-up"></i>TX antenna gain (dBi)</label>
              <input type="number" id="txGain" class="form-control form-control-lg" step="any" value="2.0">
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold"><i class="fa-regular fa-circle-down"></i> RX antenna gain (dBi)</label>
              <input type="number" id="rxGain" class="form-control form-control-lg" step="any" value="2.0">
            </div>
          </div>
          <div class="d-grid mt-4"><button class="btn btn-primary btn-lg" id="calcFsplBtn">Calculate FSPL</button></div>
  <!-- results part: FSPL and receive power panel -->
          <div class="row mt-2 g-4">
            <div class="col-md-6">
              <div class="p-3 bg-light rounded-3 border text-center h-100 d-flex flex-column justify-content-center">
                <span class="text-secondary small text-uppercase">free‑space path loss</span>
                <span class="fspl-big-number" id="fsplDisplay">—</span>
                <span class="badge bg-primary mt-2 mx-auto">dB</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class=" p-3 bg-primary-subtle rounded-3 border text-center h-100 d-flex flex-column justify-content-center">
                <span class="text-secondary small text-uppercase">received power (0 dBm Tx)</span>
                <span class="fspl-big-number" id="rxPowerDisplay">—</span>
                <span class="badge bg-success mt-2 mx-auto">dBm</span>
              </div>
            </div>
          </div>
          <br>
 <!-- fspl formula -->
<div class="alert alert-light border mb-4" role="alert">
 <p class="mb-2"> <strong>Quick Answer:</strong> Free Space Path Loss (FSPL) is calculated using:</p>
 <div class="fw-bold fs-5 text-primary mb-2"> FSPL (dB) = 20·log₁₀(d) + 20·log₁₀(f) + 32.44</div>
 <p class="mb-2"><strong>Rx Power (dBm)</strong> = Tx Power + TX Antenna Gain + RX Antenna Gain − FSPL </p>
 <p class="mb-0">Where <strong>d</strong> is the distance in kilometers (km) and <strong>f</strong> is the frequency in megahertz (MHz). FSPL increases as either distance or frequency increases.</p>
</div>
     </div> 
      </div> 
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
<!-- Article-->
<section class="mt-5">

<h2>What is Free Space Path Loss (FSPL)?</h2>
<p>Free Space Path Loss (FSPL) is one of the most important calculations in wireless communication. Whether you are designing a Wi-Fi network, planning a microwave backhaul link, deploying a 5G cell site, or analyzing a satellite connection, FSPL helps estimate how much signal power is lost as radio waves travel through space.</p>
<p>For example, a 2.4 GHz Wi-Fi signal transmitted over 5 km experiences approximately 114 dB of path loss before reaching the receiver. Understanding this loss allows RF engineers to calculate antenna requirements, link margins, and expected coverage areas.</p>


<p>FSPL depends only on two variables:</p>
<ul><li><strong>Distance between transmitter and receiver</strong></li><li><strong>Operating frequency</strong></li></ul>
<p>As distance or frequency increases, the signal attenuation increases logarithmically.</p>
<hr>

<h2>FSPL Formula (Free Space Path Loss Equation)</h2>
<p>The standard FSPL formula in decibels (dB) is:</p>
<div class="alert alert-info fs-5"><strong>FSPL (dB) = 20 log₁₀(d) + 20 log₁₀(f) + 32.44</strong></div>
<figure class="text-center my-4">
  <img src="/assets/images/free-space-path-loss-calculator.svg"  alt="Free Space Path Loss diagram showing transmitter receiver distance frequency and signal attenuation" 
    class="img-fluid rounded-4 shadow"  loading="lazy"  width="800" height="450" />
  <figcaption class="text-muted small mt-2">FSPL depends on distance and frequency — higher values increase signal attenuation.</figcaption>
</figure>




<ul>
<li><strong>d</strong> = distance in kilometers (km)</li>
<li><strong>f</strong> = frequency in megahertz (MHz)</li>
<li><strong>32.44</strong> = constant for km and MHz units</li>
</ul>

<p>If distance is used in meters or frequency in GHz, the constant value changes accordingly.</p>

<hr>
<h2>Should Distance Be in km or m for FSPL?</h2>
<p>In the standard engineering formula, distance must be entered in <strong>kilometers (km)</strong> and frequency in <strong>MHz</strong>. If you use meters or GHz, you must adjust the constant value in the formula.</p>

<p>For example:</p>
<ul><li>Distance in meters → constant becomes 147.55</li><li>Frequency in GHz → adjust formula accordingly</li></ul>
<p>Your calculator automatically converts units internally to ensure accurate results.</p>

<hr>

<h2>FSPL Example Calculation</h2>
<p>Let’s calculate the path loss for:</p>
<ul><li>Distance = 5 km</li><li>Frequency = 2400 MHz</li></ul>

<p>Applying the formula:</p>
<div class="alert alert-light border">FSPL ≈ 20 log₁₀(5) + 20 log₁₀(2400) + 32.44  <br><strong>FSPL ≈ 114 dB</strong></div>
<p>If transmitter power is 0 dBm and both antennas have 2 dBi gain:</p>
<p>Received Power = 0 + 2 + 2 − 114 ≈ <strong>−110 dBm</strong></p>
<hr>
<h2>Why FSPL is Important in RF and Wireless Communication</h2>
<ul>
<li>Microwave link budget planning</li>
<li>LTE and 5G network design</li>
<li>Satellite communication systems</li>
<li>WiFi coverage analysis</li>
<li>RF propagation modeling</li>
</ul>
<p>Engineers use FSPL calculations to estimate signal coverage, optimize antenna placement, and predict received signal strength.</p>


<div class="shadow-sm p-4">
<h2>Why Does Path Loss Increase With Frequency?</h2>
<p>Higher frequencies experience greater free-space path loss because the wavelength becomes shorter as frequency increases.</p>
<p>For example:</p>
<ul>
<li>900 MHz experiences less path loss than 1800 MHz.</li>
<li>1800 MHz experiences less path loss than 3500 MHz 5G.</li>
<li>2.4 GHz Wi-Fi generally travels farther than 5 GHz Wi-Fi at the same transmit power.</li>
</ul>
<p>This is one reason why low-band cellular frequencies provide wider coverage than high-band frequencies.</p>
</div>

<section class="my-5 shadow-sm p-4">
  <h2 class="mb-4">Free Space Path Loss (FSPL) Reference Table</h2>
  <p>The table below shows approximate Free Space Path Loss (FSPL) values for common wireless frequencies and transmission distances. Use it as a quick reference for Wi-Fi, LTE, 5G, microwave, and RF link planning.</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped table-hover align-middle">
      <thead class="table-primary">
        <tr>
          <th>Distance</th>
          <th>900 MHz</th>
          <th>1800 MHz</th>
          <th>2400 MHz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1 km</strong></td>
          <td>91.5 dB</td>
          <td>97.5 dB</td>
          <td>100.0 dB</td>
        </tr>
        <tr>
          <td><strong>5 km</strong></td>
          <td>105.5 dB</td>
          <td>111.5 dB</td>
          <td>114.0 dB</td>
        </tr>
        <tr>
          <td><strong>10 km</strong></td>
          <td>111.5 dB</td>
          <td>117.5 dB</td>
          <td>120.0 dB</td>
        </tr>
        <tr>
          <td><strong>20 km</strong></td>
          <td>117.5 dB</td>
          <td>123.5 dB</td>
          <td>126.0 dB</td>
        </tr>
      </tbody>
    </table>
  </div>
 <div class="alert alert-info mt-3"><strong>Note:</strong> FSPL increases with both distance and frequency. Higher-frequency signals such as 2.4 GHz experience greater path loss than lower-frequency signals like 900 MHz over the same distance.
  </div>
</section>
<section class="my-5">
  <h2 class="mb-4">FSPL vs Link Budget: What's the Difference?</h2>

  <p>
    Free Space Path Loss (FSPL) and Link Budget are closely related concepts in
    RF engineering, but they are not the same. FSPL represents only the signal
    attenuation that occurs as a radio wave travels through free space. A link
    budget is a complete calculation that determines whether a wireless
    communication link will work reliably.
  </p>

  <div class="table-responsive my-4">
    <table class="table table-bordered table-striped align-middle">
      <thead class="table-primary">
        <tr>
          <th>FSPL</th>
          <th>Link Budget</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calculates signal loss in free space.</td>
          <td>Calculates overall received signal strength.</td>
        </tr>
        <tr>
          <td>Depends on distance and frequency.</td>
          <td>Includes all gains and losses in the communication path.</td>
        </tr>
        <tr>
          <td>Expressed in dB.</td>
          <td>Expressed as received power and link margin.</td>
        </tr>
        <tr>
          <td>One component of a link budget.</td>
          <td>Complete RF system performance analysis.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="h5 mb-3">Components of a Complete RF Link Budget</h3>
  <div class="row g-3">
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <ul class="mb-0">
            <li><strong>Transmitter Power (dBm)</strong></li>
            <li><strong>Transmit Antenna Gain (dBi)</strong></li>
            <li><strong>Receive Antenna Gain (dBi)</strong></li>
            <li><strong>Free Space Path Loss (FSPL)</strong></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <ul class="mb-0">
            <li><strong>Cable Losses</strong></li>
            <li><strong>Connector Losses</strong></li>
            <li><strong>Atmospheric/Rain Losses</strong></li>
            <li><strong>Fade Margin</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-info mt-4">
    <strong>Example:</strong> A microwave link may have an FSPL of 120 dB, but
    engineers must also consider antenna gains, feeder losses, and fade margin
    before determining whether the received signal is strong enough for
    reliable communication.
  </div>
  <p class="mt-3 mb-0">
    In summary, <strong>FSPL is only one part of a link budget</strong>. While
    FSPL estimates signal attenuation due to distance and frequency, a complete
    link budget evaluates the overall performance and reliability of a wireless
    communication system.
  </p>
</section>

<section class="my-5">
  <h2 class="mb-4">Real-World Applications of Free Space Path Loss (FSPL)</h2>
  <p>Free Space Path Loss (FSPL) calculations are widely used in wireless communication systems to estimate signal attenuation and optimize network performance. Below are some of the most common applications.</p>
  <div class="row g-4 mt-2">
   <div class="col-md-6">
    <div class="card h-100 border-0 shadow-sm">
     <div class="card-body">
     <h3 class="h5 text-primary">📶 Wi-Fi Network Design</h3>
      <p class="mb-0">Network engineers use FSPL to estimate wireless coverage and verify whether Wi-Fi access points can provide adequate signal strength at different distances.</p>
       </div>
      </div>
    </div>
 <div class="col-md-6">
  <div class="card h-100 border-0 shadow-sm">
   <div class="card-body">
    <h3 class="h5 text-primary">📡 4G LTE & 5G Network Planning</h3>
     <p class="mb-0">Cellular operators calculate FSPL to predict coverage areas, optimize antenna placement and heights, and improve overall network performance.</p>
     </div>
     </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 text-primary">🔗 Microwave Backhaul Links</h3>
          <p class="mb-0">
            Point-to-point microwave systems rely on accurate FSPL calculations
            to determine antenna gain requirements, link reliability, and fade
            margins.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 text-primary">🛰️ Satellite Communication</h3>
          <p class="mb-0">
            Satellite links experience significant path loss because of the
            large distance between ground stations and satellites. FSPL is a
            fundamental part of satellite link budget calculations.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 text-primary">📊 RF Link Budget Analysis</h3>
          <p class="mb-0">
            FSPL is one of the most important components of an RF link budget.
            Engineers combine FSPL with transmitter power, antenna gains,
            cable losses, and fade margins to predict received signal strength
            and communication reliability.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-info mt-4">
    <strong>Key Takeaway:</strong> Whether you're designing a Wi-Fi network,
    planning a 5G deployment, establishing a microwave link, or analyzing a
    satellite connection, FSPL calculations help determine how much signal
    power is lost during transmission and what equipment is needed to maintain
    reliable communication.
  </div>
</section>


<!-- FAQ Section -->
<section class="mb-5 pt-4">
  <h2 class="mb-4">FAQ on Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
      <div class="fw-bold text-primary">1. What is FSPL?</div>
       <p class="mb-0">FSPL (Free Space Path Loss) is the signal attenuation that occurs when a radio wave propagates through free space without obstacles.</p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
     <div class="fw-bold text-primary">2. How do you calculate FSPL?</div>
     <p class="mb-0">FSPL is calculated using:  <strong>20 log₁₀(d) + 20 log₁₀(f) + 32.44</strong>  where distance is in km and frequency in MHz.</p>
    </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
      <div class="fw-bold text-primary"> 3.Does FSPL depend on antenna gain?</div>
       <p class="mb-0">No. FSPL depends only on distance and frequency. Antenna gains are included separately in link budget calculations.</p>
      </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
     <div class="fw-bold text-primary"> 4. Is FSPL higher at higher frequencies?</div>
      <p class="mb-0">Yes. Path loss increases as frequency increases.</p>
     </div>
   </div>
    {% include rf.html %}
  </section>


<script src="{{ '/assets/js/free-spac-calc.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Free Space Path Loss (FSPL)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free Space Path Loss (FSPL) is the reduction in signal strength that occurs when a radio wave propagates through free space. It depends only on distance and frequency."
      }
    },
    {
      "@type": "Question",
      "name": "How do you calculate FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FSPL is calculated using the formula: FSPL (dB) = 20 log10(d) + 20 log10(f) + 32.44, where distance is in kilometers and frequency is in MHz."
      }
    },
    {
      "@type": "Question",
      "name": "Should distance be in km or meters for FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the standard formula, distance should be in kilometers and frequency in MHz. If using meters or GHz, the constant value in the equation changes."
      }
    },
    {
      "@type": "Question",
      "name": "Does antenna gain affect FSPL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FSPL depends only on distance and frequency. Antenna gain is included separately in link budget calculations."
      }
    }
  ]
}
</script>
<script type="application/ld+json">
{
 "@context":"https://schema.org",
 "@type":"BreadcrumbList",
 "itemListElement":[
 {
 "@type":"ListItem",
 "position":1,
 "name":"Home",
 "item":"https://easycalculator.org"
 },
 {
 "@type":"ListItem",
 "position":2,
 "name":"RF Calculators",
 "item":"https://easycalculator.org/rf-calculator"
 },
 {
 "@type":"ListItem",
 "position":3,
 "name":"FSPL Calculator"
 }
 ]
}
</script>