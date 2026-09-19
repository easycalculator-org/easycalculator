---
layout: default
title: Watt to dBm Calculator - Convert W to dBm | Table & formula
permalink: /watt-to-dbm
description: "Convert Watts to dBm instantly with our Watt to dBm Converter. Convert W, mW, µW, and nW to dBm with accurate formulas, examples, and conversion values."
image: "/assets/images/og/watt-to-dbm-example.jpg"
last_modified_at: 2026-09-18
---

<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/rf-calculator">RF Calculator</a></li>
    <li class="breadcrumb-item active" aria-current="page">Watt to dBm Converter</li>
  </ol>
</div>
<div class="mt-3 mb-4">
<div class="text-center mb-3"><h1 class="h2 mb-1">Watt to dBm Calculator</h1><p class="text-muted mb-0">Convert Watts to dBm instantly and accurately. </p></div><div class="row justify-content-center"><div class="col-lg-8"><div class="card border-0 shadow-sm rounded-4"><div class="card-body p-3 p-md-4"><div class="mb-3"><label for="wattInput" class="form-label fw-semibold mb-1">Power </label><div class="input-group input-group-lg"><input type="number" id="wattInput" class="form-control" value="1" step="any" min="0" inputmode="decimal" placeholder="Enter power" ><select id="wattUnit" class="form-select" style="max-width:145px;" ><option value="W">Watt (W)</option><option value="mW">Milliwatt (mW)</option><option value="uW">Microwatt (µW)</option><option value="nW">Nanowatt (nW)</option></select></div></div><div class="mb-3"><div class="small text-muted mb-2">Common values </div><div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="0.001" data-unit="W">1 mW</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="0.01" data-unit="W">10 mW</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="0.1" data-unit="W">100 mW</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="1" data-unit="W">1 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="10" data-unit="W">10 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="20" data-unit="W">20 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="40" data-unit="W">40 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="60" data-unit="W">60 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="80" data-unit="W">80 W</button><button type="button" class="btn btn-outline-secondary btn-sm quick-watt" data-value="100" data-unit="W">100 W</button></div></div><div class="bg-light rounded-4 p-3 text-center"><div class="small text-muted mb-1">Equivalent Power </div><div id="dbmResult" class="h2 fw-bold text-primary mb-1" >30 dBm </div><div id="powerResult" class="small text-muted" >1 W=1000 mW </div></div><div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3"><div class="small"><span class="fw-semibold">Formula:</span>dBm=10 × log<sub>10</sub>(W) + 30 </div><button type="button" id="copyDbmResult" class="btn btn-outline-primary btn-sm rounded-pill px-3" ><i class="fa-regular fa-copy me-1"></i>Copy </button></div><div class="text-center mt-3 pt-2 border-top small"><span class="text-muted">Need the reverse conversion? </span><a href="/dbm-to-watt" class="fw-semibold text-decoration-none" >dBm to Watt → </a></div></div></div></div></div></div>

<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%m-%Y" }}</span>
      <span> <i class="fas fa-clock me-1" aria-hidden="true"></i>  5 min read </span>
    </div>
  </div>
  <!-- Article -->
<h2>Watt to dBm Conversion: Formula, Examples &amp; Table</h2>
<p><strong>Watt to dBm</strong> conversion changes an absolute power value in Watts (W) into decibel-milliwatts (dBm). Use this free <strong>Watt to dBm Calculator</strong> to convert power values in Watts, milliwatts (mW), microwatts (µW), and nanowatts (nW) to dBm quickly and accurately. </p>
<p>Watt is the SI unit of power, while dBm is a logarithmic unit referenced to 1 milliwatt. dBm is widely used for expressing RF and communication power levels in wireless networks, radio systems, Wi-Fi, LTE, 5G, microwave links, and fiber-optic communication. </p>
<h3>How to Convert Watts to dBm</h3>
<p>To convert power from Watts to dBm, use the following formula: </p>
<div class="bg-light p-3 rounded text-center my-3"><strong>P(dBm)=10 × log<sub>10</sub>(P(W)) + 30 </strong></div><p>Where: </p>
<ul><li><strong>P(dBm)</strong>=power level in dBm</li><li><strong>P(W)</strong>=power in Watts</li><li><strong>log<sub>10</sub></strong>=base-10 logarithm</li></ul><p>The <strong>+30</strong> in the formula comes from the relationship between Watts and milliwatts. Since <strong>1 W=1,000 mW</strong>, and 1,000=10<sup>3</sup>, converting 1 Watt to dBm gives: </p>
<div class="bg-light p-3 rounded text-center my-3"><strong>10 × log<sub>10</sub>(1,000)=30 dBm </strong></div><p>Therefore, <strong>1 Watt=30 dBm</strong>. </p>
<p class="small text-muted"><strong>Input requirement:</strong> Power must be greater than zero. P(W) in the formula is the numerical power value in watts. Zero watts has no finite dBm value (the limit is −∞ dBm); negative watts cannot be converted using this real-valued logarithmic formula.</p>
<h3>How to Convert Milliwatts to dBm</h3>
<p>If your power value is already given in milliwatts, the conversion is simpler because dBm is referenced directly to 1 mW: </p>
<div class="bg-light p-3 rounded text-center my-3"><strong>P(dBm)=10 × log<sub>10</sub>(P(mW)) </strong></div><p>For example: </p>
<div class="bg-light p-3 rounded mb-3"><strong>10 mW:</strong> 10 × log<sub>10</sub>(10)=<strong>10 dBm</strong></div><div class="bg-light p-3 rounded"><strong>100 mW:</strong> 10 × log<sub>10</sub>(100)=<strong>20 dBm</strong></div><h3>Examples of Watt to dBm Conversion</h3>
<p>Here are some common examples showing how to convert power in Watts to dBm. </p>
<div class="card border-0 shadow-sm mb-4"><div class="card-body"><h4 class="h5 text-primary">Example 1: Convert 1 Watt to dBm</h4><p>Use the Watt to dBm formula: </p>
<div class="bg-light p-3 rounded mb-3"><strong>P(dBm)=10 × log<sub>10</sub>(1) + 30 </strong></div><p>Since log<sub>10</sub>(1)=0: </p>
<p class="mb-0"><strong>1 W=30 dBm</strong></p>
</div></div><div class="card border-0 shadow-sm mb-4"><div class="card-body"><h4 class="h5 text-primary">Example 2: Convert 5 Watts to dBm</h4><p>Substitute 5 W into the formula: </p>
<div class="bg-light p-3 rounded mb-3"><strong>P(dBm)=10 × log<sub>10</sub>(5) + 30 </strong></div><p>log<sub>10</sub>(5) ≈ 0.699 </p>
<p>=10 × 0.699 + 30 </p>
<p class="mb-0">Therefore, <strong>5 W ≈ 36.99 dBm</strong>, or approximately <strong>37 dBm</strong>. </p>
</div></div><div class="card border-0 shadow-sm mb-4"><div class="card-body"><h4 class="h5 text-primary">Example 3: Convert 10 Watts to dBm</h4><p>Using the formula: </p>
<div class="bg-light p-3 rounded mb-3"><strong>P(dBm)=10 × log<sub>10</sub>(10) + 30 </strong></div><p>=10 + 30 </p>
<p class="mb-0">Therefore, <strong>10 W=40 dBm</strong>. </p>
</div></div>
<div class="row g-4 align-items-center mb-4">
<div class="col-xl-5"><div class="card border-0 shadow-sm"><div class="card-body"><h4 class="h5 text-primary">Example 4: Convert 20 Watts to dBm</h4><p>Substitute 20 W into the formula: </p>
<div class="bg-light p-3 rounded mb-3"><strong>P(dBm)=10 × log<sub>10</sub>(20) + 30 </strong></div><p>log<sub>10</sub>(20) ≈ 1.30103 </p>
<p>=10 × 1.30103 + 30 </p>
<p class="mb-0">Therefore, <strong>20 W ≈ 43.01 dBm</strong>. </p>
</div></div></div>
<div class="col-xl-7"><figure class="mb-0"><img  src="/assets/images/watt-to-dbm-formula.svg" alt="Watts to dBm conversion formula with a worked example: 20 W equals approximately 43.01 dBm" width="1200"
  height="720"  class="img-fluid w-100 rounded"  loading="lazy"  decoding="async"><figcaption class="small text-muted text-center mt-2">Worked example: 20 W converts to approximately 43.01 dBm.</figcaption></figure></div>
</div>
<div class="card border-0 shadow-sm mb-4"><div class="card-body"><h4 class="h5 text-primary">Example 5: Convert 40 Watts to dBm</h4><p>Using the formula: </p>
<div class="bg-light p-3 rounded mb-3"><strong>P(dBm)=10 × log<sub>10</sub>(40) + 30 </strong></div><p>log<sub>10</sub>(40) ≈ 1.602 </p>
<p>=10 × 1.602 + 30 </p>
<p class="mb-0">Therefore, <strong>40 W ≈ 46.02 dBm</strong>. </p>
</div></div>

<h3>Watt to dBm Conversion Table</h3>
<p>Compare power in watts, milliwatts and dBm. Non-integer dBm values are rounded to two decimal places. </p>
<div class="table-responsive"><table class="table table-striped table-bordered text-center align-middle"><thead class="table-primary"><tr><th scope="col">Watts</th><th scope="col">Milliwatts</th><th scope="col">dBm</th></tr></thead><tbody><tr><td>0.000001 W</td><td>0.001 mW</td><td>−30 dBm</td></tr><tr><td>0.00001 W</td><td>0.01 mW</td><td>−20 dBm</td></tr><tr><td>0.0001 W</td><td>0.1 mW</td><td>−10 dBm</td></tr><tr><td>0.001 W</td><td>1 mW</td><td>0 dBm</td></tr><tr><td>0.01 W</td><td>10 mW</td><td>10 dBm</td></tr><tr><td>0.1 W</td><td>100 mW</td><td>20 dBm</td></tr><tr><td>1 W</td><td>1,000 mW</td><td>30 dBm</td></tr><tr><td>5 W</td><td>5,000 mW</td><td>36.99 dBm</td></tr><tr><td>10 W</td><td>10,000 mW</td><td>40 dBm</td></tr><tr><td>20 W</td><td>20,000 mW</td><td>43.01 dBm</td></tr><tr><td>40 W</td><td>40,000 mW</td><td>46.02 dBm</td></tr><tr><td>50 W</td><td>50,000 mW</td><td>46.99 dBm</td></tr><tr><td>100 W</td><td>100,000 mW</td><td>50 dBm</td></tr><tr><td>1,000 W</td><td>1,000,000 mW</td><td>60 dBm</td></tr></tbody></table>
</div><h3>Why Is dBm Used in RF Engineering?</h3>
<p>RF systems can involve power levels ranging from extremely small received signals to very high transmitter outputs. Using Watts for every value can result in inconveniently small or large numbers. </p>
<p>The logarithmic dBm scale provides a compact way to express absolute power. It is especially useful when working with transmitter output, receiver sensitivity, amplifier gain, cable loss, antenna systems, and RF link budgets. </p>
<p>Another advantage is that power gains and losses can be handled conveniently using decibel arithmetic. This is one reason dBm is commonly found in RF equipment specifications and communication-system measurements. </p>
<p>Use the <a href="/rf-link-budget-calculator">RF Link Budget Calculator</a> to combine transmitter power with gains and losses, or the <a href="/eirp-calculator">EIRP Calculator</a> to account for antenna gain and feeder losses. For the reverse conversion, use the <a href="/dbm-to-watt">dBm to Watt Calculator</a>.</p>
<h3>Where Is Watt to dBm Conversion Used?</h3>
<p>Watt to dBm conversion is useful when equipment specifications or measured power are given in Watts but RF calculations require dBm. Common applications include: </p>
<div class="row g-4"><div class="col-md-6 col-lg-4"><div class="card shadow-sm border-0 h-100"><div class="card-body"><h4 class="h5 text-primary">LTE &amp; 5G Networks</h4><p class="card-text">Transmitter specifications may be given in Watts, while RF planning and link-budget calculations commonly use dBm. For example, <strong>20 W ≈ 43.01 dBm</strong>. </p>
</div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm border-0 h-100"><div class="card-body"><h4 class="h5 text-primary">Wi-Fi &amp; Wireless Networks</h4><p class="card-text">Converting transmitter power from Watts to dBm helps compare power levels with antenna gain, cable losses, and receiver sensitivity. </p>
</div></div></div><div class="col-md-6 col-lg-4"><div class="card shadow-sm border-0 h-100"><div class="card-body"><h4 class="h5 text-primary">RF Transmitters</h4><p class="card-text">RF transmitters and power amplifiers may be rated in Watts, while system-level RF calculations use dBm. </p>
</div></div></div><div class="col-md-6 col-lg-6"><div class="card shadow-sm border-0 h-100"><div class="card-body"><h4 class="h5 text-primary">Microwave Communication</h4><p class="card-text">Microwave links use dBm for power budgets and measurements. Converting equipment output from Watts to dBm makes it easier to combine transmitter power, antenna gain, and path losses. </p>
</div></div></div><div class="col-md-6 col-lg-6"><div class="card shadow-sm border-0 h-100"><div class="card-body"><h4 class="h5 text-primary">Fiber-Optic Systems</h4><p class="card-text">Optical power is commonly expressed in dBm. Converting between Watts, milliwatts, and dBm is useful when comparing optical transmitter and receiver power levels. </p>
</div></div></div></div><div class="alert alert-info mt-4"><strong>Quick reference:</strong> 1 W=30 dBm, 5 W ≈ 36.99 dBm, 10 W=40 dBm, 20 W ≈ 43.01 dBm, 40 W ≈ 46.02 dBm, and 100 W=50 dBm. </div><h3>Watt, Milliwatt and dBm Relationship</h3>
<p>Watts and milliwatts are linear units of power, while dBm is logarithmic. The basic relationship between them is: </p>
<ul><li><strong>1 W=1,000 mW=30 dBm</strong></li><li><strong>0.1 W=100 mW=20 dBm</strong></li><li><strong>0.01 W=10 mW=10 dBm</strong></li><li><strong>0.001 W=1 mW=0 dBm</strong></li></ul><p>Every 10 dB increase corresponds to a 10× increase in power. Therefore, increasing from 30 dBm to 40 dBm increases power from 1 W to 10 W. Increasing from 40 dBm to 50 dBm increases power from 10 W to 100 W. </p>



<!-- FAQ Section -->
<section class="py-4">
  <h3 class="mb-4">FAQ About Watt to dBm</h3>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">1. How do I convert Watts to dBm?</div>
       <p class="mb-0">Use the formula <strong>P(dBm) = 10 × log<sub>10</sub>(P(W)) + 30</strong>. For example, 1 W = 30 dBm and 10 W = 40 dBm. </p>
     </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">2. How much is 1 Watt in dBm?</div>
         <p class="mb-0"><strong>1 Watt = 30 dBm</strong>.</p>
       </div>
     </div>
    <div class="card mb-3 border-0 bg-light">
      <div class="card-body ">
        <div class="fw-bold text-primary">3. How much is 5 Watts in dBm?</div>
        <p class="mb-0"><strong>5 Watts ≈ 36.99 dBm</strong>, usually rounded to approximately <strong>37 dBm</strong>.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">4. How much is 10 Watts in dBm?</div>
        <p class="mb-0"><strong>10 Watts = 40 dBm</strong>.</p>
       </div>
     </div>
   <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">5. How much is 20 Watts in dBm?</div>
        <p class="mb-0"><strong>20 Watts ≈ 43.01 dBm</strong>.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">6. How much is 40 Watts in dBm?</div>
        <p class="mb-0"> <strong>40 Watts ≈ 46.02 dBm</strong>.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">7. How much is 100 Watts in dBm?</div>
        <p class="mb-0"><strong>100 Watts = 50 dBm</strong>.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">8. What is 1 milliwatt in dBm?</div>
        <p class="mb-0"><strong>1 mW = 0 dBm</strong>. This is the reference power level for the dBm scale.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
    <div class="fw-bold text-primary">9. Can dBm represent power below 1 mW?</div>
    <p class="mb-0">Yes. Power below 1 mW has a negative dBm value. For example, <strong>0.1 mW = −10 dBm</strong> and <strong>0.001 mW = −30 dBm</strong>.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">10. What is the difference between dB and dBm?</div>
        <p class="mb-0"><strong>dB</strong> represents a ratio or relative difference, while <strong>dBm</strong> represents an absolute power level referenced
        to 1 milliwatt.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">11. Is dBm the same as Watts?</div>
        <p class="mb-0"> No. Watts are a linear unit of power, while dBm is a logarithmic representation of power referenced to 1 mW. They can be converted 
        using the appropriate formula.</p>
       </div>
     </div>
     <div class="card mb-3 border-0 bg-light">
     <div class="card-body ">
       <div class="fw-bold text-primary">12. What is the formula for converting milliwatts to dBm?</div>
        <p class="mb-0"> Use  <strong>P(dBm) = 10 × log<sub>10</sub>(P(mW))</strong>. For example, 10 mW = 10 dBm and 100 mW = 20 dBm.</p>
       </div>
     </div>
   </section>
  
 
  {% include rf.html %}

</div>
<script src="{{ '/assets/js/rf/watt-to-dbm.js' | relative_url }}"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert Watts to dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the formula P(dBm) = 10 × log10(P(W)) + 30. For example, 1 W = 30 dBm and 10 W = 40 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 1 Watt in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 Watt is equal to 30 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 5 Watts in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "5 Watts is approximately 36.99 dBm, usually rounded to approximately 37 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 10 Watts in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 Watts is equal to 40 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 20 Watts in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "20 Watts is approximately 43.01 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 40 Watts in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "40 Watts is approximately 46.02 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "How much is 100 Watts in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100 Watts is equal to 50 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "What is 1 milliwatt in dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 milliwatt is equal to 0 dBm. This is the reference power level for the dBm scale."
      }
    },
    {
      "@type": "Question",
      "name": "Can dBm represent power below 1 mW?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Power below 1 mW has a negative dBm value. For example, 0.1 mW is −10 dBm and 0.001 mW is −30 dBm."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between dB and dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "dB represents a ratio or relative difference, while dBm represents an absolute power level referenced to 1 milliwatt."
      }
    },
    {
      "@type": "Question",
      "name": "Is dBm the same as Watts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Watts are a linear unit of power, while dBm is a logarithmic representation of power referenced to 1 mW. They can be converted using the appropriate formula."
      }
    },
    {
      "@type": "Question",
      "name": "What is the formula for converting milliwatts to dBm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use P(dBm) = 10 × log10(P(mW)). For example, 10 mW is 10 dBm and 100 mW is 20 dBm."
      }
    }
  ]
}
</script>
