---
layout: default
title: Free QR Code Generator with HD Download | EasyCalculator
permalink: /tools/qr-code-generator
description: "Generate high-quality QR codes instantly for URLs, WiFi, Instagram, email, and more with Free QR Code Generator with HD Download"
image: "/assets/images/og/qr-code-generator-example.jpg"
last_modified_at: 2026-05-27
---
<style>
:root{--primary:#2563eb;--border:#e5e7eb;--text:#0f172a;--muted:#64748b}.qr-section{padding:6px 0}.qr-card{background:#fffffff2;border-radius:36px;border:1px solid #fffc;overflow:hidden;box-shadow:0 20px 50px #0f172a14;position:relative}.qr-card::before{content:"";position:absolute;width:240px;height:240px;border-radius:50%;background:linear-gradient(135deg,#2563eb26,transparent);top:-120px;right:-120px}.form-label{font-weight:700;margin-bottom:12px}.custom-input-group{position:relative}.custom-input-group .fa-link{position:absolute;left:20px;top:50%;transform:translateY(-50%);color:#2563eb;z-index:2}.custom-input{height:66px;border-radius:20px;border:1px solid #dbe4f0;padding-left:52px;padding-right:170px;font-weight:500;background:#fff}.custom-input:focus{border-color:#93c5fd;box-shadow:0 0 0 5px #2563eb1f}.generate-btn{position:absolute;right:8px;top:8px;height:50px;border:none;border-radius:14px;background:linear-gradient(135deg,#2563eb,#3b82f6);color:#fff;font-weight:700;padding:0 24px}.generate-btn:hover{background:linear-gradient(135deg,#1d4ed8,#2563eb)}.qr-preview-box{background:#fff;border-radius:32px;padding:26px;border:1px solid #edf2ff;max-width:430px;margin:auto;overflow:hidden;transition:.3s ease;box-shadow:0 15px 40px #2563eb14}.qr-inner-frame{background:#fff;border-radius:24px;padding:20px;border:1px solid #e8eefc}.qr-preview-box canvas{width:100%!important;height:auto!important;display:block;border-radius:18px;background:#fff}.qr-url-box{margin-top:18px;background:#f8fbff;border:1px solid #e5eefc;border-radius:18px;padding:12px 16px;word-break:break-word;font-size:.88rem;color:#334155;font-weight:600;line-height:1.6}.action-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.action-btn{height:54px;border-radius:16px;border:1px solid var(--border);background:#fff;font-weight:700}.action-btn:hover{border-color:#93c5fd;box-shadow:0 10px 25px #0000000d}.example-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.example-card{border:1px solid #e7eefb;background:#fff;border-radius:18px;padding:14px;display:flex;align-items:center;gap:14px;width:100%;text-align:left}.example-card:hover{border-color:#93c5fd;box-shadow:0 10px 25px #0000000d}.example-icon{width:54px;height:54px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0}.example-title{font-weight:700;font-size:.95rem}.example-desc{font-size:.8rem;color:#64748b}.insta-gradient{background:linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)}.frame-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.frame-card{border:1px solid #e5e7eb;background:#fff;border-radius:22px;padding:14px;cursor:pointer}.frame-card.active{border:2px solid #2563eb;background:#eff6ff}.frame-preview{height:90px;border-radius:18px;display:flex;align-items:center;justify-content:center;margin-bottom:12px}.mini-qr{width:48px;height:48px;background:linear-gradient(90deg,#000 50%,transparent 50%),linear-gradient(#000 50%,transparent 50%);background-size:10px 10px;background-color:#fff;border-radius:10px}.classic-preview{background:#fff;border:2px solid #e2e8f0}.neon-preview{background:#020617;border:2px solid #38bdf8}.gradient-preview{background:linear-gradient(135deg,#2563eb,#7c3aed)}.dark-preview{background:#111827;border:2px solid #374151}.frame-name{text-align:center;font-weight:700;font-size:.9rem}.alert{border:none;border-radius:18px}@media(max-width:768px){.custom-input{padding-right:20px}.generate-btn{position:relative;width:100%;right:auto;top:auto;margin-top:14px}.action-grid,.example-grid,.frame-grid{grid-template-columns:1fr}}
</style>





<section class="qr-section">
<div class="row justify-content-center">
<div class="col-lg-9 col-xl-8">
<!-- breadcrumb -->
<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/tools">Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">QR Code Generator</li>
  </ol>
</div>

<div class="qr-card">
<div class="p-4 p-md-5">

<!-- HEADER -->

<div class="text-center mb-2">
<h1>QR Code Generator</h1>
</div>

<!-- INPUT -->

<div class="mb-4">
<label class="form-label"><i class="fa-solid fa-pen-to-square me-2"></i> Enter Content</label>
<div class="custom-input-group">
 <i class="fa-solid fa-link"></i>
 <input type="text"   class="form-control custom-input"  id="qrTextInput"  value="https://easycalculator.org/"   placeholder="Enter URL, text, email or phone"  >
 <button class="generate-btn" id="generateBtn"><i class="fa-solid fa-bolt me-2"></i> Generate QR </button>
</div>
</div>

<!-- QR PREVIEW -->
<div class="text-center mb-5">
<div class="qr-preview-box" id="previewBox">
<div class="qr-inner-frame">
<canvas id="qrCanvas" width="1200" height="1200"></canvas>
</div>
<div class="qr-url-box"><i class="fa-solid fa-link text-primary me-2"></i><span id="previewText"> https://easycalculator.org/</span></div>
</div>
</div>

<!-- ACTIONS -->

<div class="action-grid mb-5">
<button class="action-btn" id="downloadBtn"><i class="fa-solid fa-download me-2 text-primary"></i>Download PNG</button>
<button class="action-btn" id="copyBtn"><i class="fa-solid fa-copy me-2 text-primary"></i>Copy Content</button>
<button class="action-btn" id="exampleBtn"><i class="fa-solid fa-wand-magic-sparkles me-2 text-primary"></i> Try Example</button>
</div>

<!-- EXAMPLES -->
<div class="mb-5">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h6 class="fw-bold mb-0"><i class="fa-solid fa-layer-group me-2 text-primary"></i>Quick Examples</h6>
    <small class="text-muted">Click any example</small>
  </div>

  <div class="row g-3">
   <div class="col-md-6">
   <button class="example-card" data-value="https://easycalculator.org/">
    <div class="d-flex align-items-center gap-3">
      <div class="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center p-3"> <i class="fa-solid fa-globe fs-5"></i></div>
      <div>
       <div class="fw-semibold">Website</div>
       <small class="text-muted">Business website</small>
      </div>
     </div>
    </button>
    </div>
  <div class="col-md-6">
    <button class="example-card" data-value="WIFI:T:WPA;S:MyWifiName;P:12345678;;">
      <div class="d-flex align-items-center gap-3">
        <div class="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center p-3"><i class="fa-solid fa-wifi fs-5"></i></div>
          <div>
            <div class="fw-semibold">WiFi QR</div>
            <small class="text-muted">Connect to WiFi</small>
          </div>
        </div>
      </button>
    </div>
    <div class="col-md-6">
      <button class="example-card" data-value="https://instagram.com/easycalculator">
        <div class="d-flex align-items-center gap-3">
          <div class="rounded-3 d-flex align-items-center justify-content-center p-3 ">
            <i class="fa-brands fa-instagram fs-5 fa-xl"></i>
          </div>
          <div>
            <div class="fw-semibold">Instagram</div>
            <small class="text-muted">Social profile QR</small>
          </div>
        </div>
      </button>
    </div>
    <div class="col-md-6">
  <button class="example-card" data-value="https://easycalculator.org/age-calculator">
        <div class="d-flex align-items-center gap-3">
          <div class="bg-info-subtle text-info rounded-3 d-flex align-items-center justify-content-center p-3">
            <i class="fa-solid fa-mobile-screen-button fs-5"></i>
          </div>
          <div>
            <div class="fw-semibold">Web App</div>
            <small class="text-muted">Progressive app</small>
          </div>
        </div>
      </button>
    </div>
  </div>
</div>

<!-- FRAME SELECTOR -->

<div class="mb-4">
<div class="d-flex justify-content-between align-items-center mb-3">
<h6 class="fw-bold mb-0"><i class="fa-solid fa-image me-2 text-primary"></i> QR Frames</h6>
<small class="text-muted"> Choose frame style</small>
</div>

<div class="frame-grid">
<button class="frame-card active" data-frame="classic">
<div class="frame-preview classic-preview">
 <div class="mini-qr"></div>
</div>
<div class="frame-name">  Classic</div>
</button>

<button class="frame-card" data-frame="neon">
<div class="frame-preview neon-preview">
  <div class="mini-qr"></div>
</div>
<div class="frame-name">  Neon</div>
</button>

<button class="frame-card" data-frame="gradient">
<div class="frame-preview gradient-preview">
  <div class="mini-qr"></div>
</div>
<div class="frame-name">  Gradient</div>
</button>

<button class="frame-card" data-frame="dark">
<div class="frame-preview dark-preview">
  <div class="mini-qr"></div>
</div>
<div class="frame-name">  Dark</div>
</button>

</div>

</div>

<div id="alertPlaceholder"></div>
</div>
</div>

</div>
</div>

</section>


<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js"></script>
<script src="{{ '/assets/js/tools/qr-code-generator.js' | relative_url }}"></script>
