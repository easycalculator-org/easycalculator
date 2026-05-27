---
layout: default
title: Free PDF Unlocker Online - Remove PDF Password Without Upload
permalink: /tools/pdf-unlock
description: "Remove PDF password instantly using secure browser-based decryption. No server upload required. Free PDF unlocker with download and print options."
image: "/assets/images/og/pdf-unlock.jpg"
last_modified_at: 2026-05-27
---

<style>
.main-card{max-width:950px;margin:auto;border:none;border-radius:30px;overflow:hidden;background:#fff;box-shadow:0 25px 60px #00000014}
.card-header{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:40px 20px;text-align:center}.header-icon{font-size:70px;margin-bottom:15px}.card-header h1{font-weight:800;font-size:2.4rem;margin-bottom:10px}.card-header p{opacity:.92;margin:0}.card-body{padding:35px}.upload-box{border:2px dashed #cbd5e1;border-radius:24px;padding:45px 20px;text-align:center;cursor:pointer;background:#f8fafc;transition:.3s ease}.upload-box:hover{border-color:#2563eb;background:#eff6ff;transform:translateY(-2px)}.upload-icon{font-size:75px;color:#2563eb}.form-label{font-weight:700;margin-bottom:10px}.input-group-lg .form-control{padding:15px;border-radius:14px 0 0 14px}.input-group-lg .btn{border-radius:0 14px 14px 0}.btn-unlock{padding:15px;border-radius:16px;font-size:1.05rem;font-weight:700}.preview-frame{border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;background:#fff}embed{width:100%;height:650px;border:none}.success-card{background:#ecfdf5;border:1px solid #10b981;border-radius:20px;padding:20px}.download-btn{border-radius:14px;padding:12px 20px;font-weight:700}.alert{border-radius:16px}.feature-box{background:#f8fafc;border-radius:18px;padding:20px;text-align:center;height:100%}.feature-box i{font-size:36px;color:#2563eb}.feature-box h6{margin-top:12px;font-weight:700}.floating-download{position:fixed;bottom:20px;right:20px;z-index:999;border-radius:50px;padding:15px 24px;font-weight:700;box-shadow:0 10px 25px #0003}.download-btn-pulse{animation:pulse 1.5s infinite}@keyframes pulse{0%{box-shadow:0 0 0 0 #10b98166}70%{box-shadow:0 0 0 15px #10b98100}100%{box-shadow:0 0 0 0 #10b98100}}canvas{width:100%;border-radius:16px}#viewerArea{display:none;margin-top:20px}@media(max-width:768px){.card-header{padding:35px 20px}.card-header h1{font-size:1.8rem}.card-body{padding:20px}embed{height:420px}.floating-download{left:15px;right:15px;width:calc(100% - 30px);text-align:center}} 
</style>
<!-- breadcrumb -->
<div aria-label="breadcrumb" class="p-3">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/tools">Tools</a></li>
    <li class="breadcrumb-item active" aria-current="page">PDF Unlock</li>
  </ol>
</div>
 <div class="main-card">
  <!-- Header -->
  <div class="card-header">  
   <h1><i class="fas fa-file-shield header-icon"></i> PDF Unlocker Pro</h1>
   <p>Unlock password protected PDF files securely in your browser.<br> No upload required. 100% private.</p>
  </div>
  <div class="card-body">
   <!-- Upload -->
<div class="upload-box mb-4" id="uploadBox">
 <input  type="file" id="pdfFile" accept=".pdf,application/pdf" class="d-none" >
  <i class="fas fa-cloud-upload-alt upload-icon"></i>
  <h4 class="fw-bold mt-3">Drop PDF Here</h4>
   <p class="text-muted"> or click to browse PDF file</p>
  <div id="fileInfo" class="d-none mt-4">
  <div class="alert alert-primary mb-0"><i class="fas fa-file-pdf me-1"></i><span id="fileName"></span><small class="d-block mt-1" id="fileSize"></small></div>
  </div>
  </div>
 <!-- Password -->
  <div class="mb-4">
   <label class="form-label"><i class="fas fa-key me-1"></i> PDF Password</label>
    <div class="input-group input-group-lg">
     <input type="password" class="form-control" id="password" placeholder="Enter PDF password" >       
     <button class="btn btn-outline-secondary"  type="button"  id="togglePassword"><i class="fas fa-eye"></i></button>
    </div>
   </div>
 <!-- Unlock Button -->
 <div class="d-grid gap-3 mb-4">
  <button  class="btn btn-primary btn-lg btn-unlock" id="unlockBtn">
   <span id="spinner" class="spinner-border spinner-border-sm me-2 d-none" ></span><i class="fas fa-unlock me-1"></i> Unlock & Download PDF</button>
   </div>
 <!-- Success Area -->
<div id="successArea" class="d-none">
 <div class="success-card mb-4">
  <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
  <div>
  <h5 class="text-success fw-bold mb-1"><i class="fas fa-circle-check me-1"></i>PDF Successfully Unlocked</h5>
  <small class="text-muted"> Your PDF is ready for preview, download and print</small>
 </div>
  <div class="d-flex gap-2 flex-wrap">
  <a href="#" id="downloadBtn" class="btn btn-success btn-lg download-btn download-btn-pulse"  download="unlocked.pdf" ><i class="fas fa-download me-1"></i>Download PDF</a>
  <button class="btn btn-dark btn-lg download-btn" id="printBtn"  type="button"> <i class="fas fa-print me-1"></i> Print PDF</button>
   </div>
  </div>
 </div>
 <!-- Preview -->
  <div class="preview-frame">
  <embed  id="pdfPreview" type="application/pdf">
  </div>
  </div>
<!-- Viewer -->
<div id="viewerArea">
 <div class="d-flex justify-content-between align-items-center mb-3">
  <button class="btn btn-outline-primary" id="prevPage"> <i class="fas fa-chevron-left"></i></button>
   <div>Page <span id="currentPage">1</span>  / <span id="totalPages">1</span></div>
    <button class="btn btn-outline-primary" id="nextPage"><i class="fas fa-chevron-right"></i></button>
    </div>
     <canvas id="pdfCanvas"></canvas>
    </div>
   <!-- Message -->
   <div id="messageBox" class="mt-4"></div>
   </div>
 </div>

<!-- Floating Download -->
<a  href="#"  id="floatingDownload" class="btn btn-success floating-download d-none"  download="unlocked.pdf"><i class="fas fa-download me-1"></i>Download PDF</a>
<!-- Floating Print -->
<button  id="floatingPrint"  class="btn btn-dark floating-download d-none"  style="bottom:85px;"><i class="fas fa-print me-1"></i>Print PDF</button>

<!-- PDF -->

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="{{ '/assets/js/tools/pdf-unlock.js' | relative_url }}"></script>