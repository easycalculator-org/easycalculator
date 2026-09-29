---
layout: default
title: Number to Words Converter – Convert Numbers to Words Online
permalink: /number-to-word-converter
description: "Convert numbers to words online in English. Choose Indian (Lakh and Crore) or International (Million and Billion) format, then copy the result instantly."
image: "/assets/images/number-to-words.jpg"
last_modified_at: 2026-09-29
---
<!-- Converter Tool -->
<style>
.number-word-card{max-width:1050px;margin:0 auto;border:1px solid #e9ecef;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 12px 35px #00000012}.number-word-header{padding:28px 30px 22px;text-align:center;background:linear-gradient(180deg,#f8faff 0%,#fff 100%);border-bottom:1px solid #eef1f5}.number-word-header h1{margin:0;font-size:clamp(1.6rem,3vw,2.15rem);font-weight:700;color:#1f2937}.number-word-header h1 i{color:#2563eb;margin-right:8px}.number-word-header p{max-width:700px;margin:10px auto 0;color:#6b7280;font-size:.98rem}.number-word-body{padding:30px}.number-input-label{display:block;margin-bottom:8px;font-size:.9rem;font-weight:600;color:#374151}.number-word-input,.number-word-select{min-height:56px;border:1px solid #d9dee7;border-radius:10px;font-size:1rem;box-shadow:none;transition:all .2s ease}.number-word-input:focus,.number-word-select:focus{border-color:#2563eb;box-shadow:0 0 0 3px #2563eb1a}.number-word-btn{min-height:56px;border-radius:10px;font-weight:600;border:none;background:#2563eb;transition:all .2s ease}.number-word-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 15px #2563eb33}.number-word-result{margin-top:25px;padding:20px 22px;border:1px solid #dbeafe;border-radius:12px;background:#f8fbff}.number-word-result-label{display:block;margin-bottom:7px;color:#64748b;font-size:.82rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em}.number-word-result-content{display:flex;align-items:center;justify-content:space-between;gap:18px}.number-word-result-text{margin:0;color:#172033;font-size:1.08rem;line-height:1.65;font-weight:600;overflow-wrap:anywhere}.number-word-copy{flex-shrink:0;min-width:82px;border-radius:8px;font-weight:500}.number-word-example{margin-top:14px;color:#6b7280;font-size:.88rem}@media (max-width: 767.98px){.number-word-body{padding:20px}.number-word-header{padding:24px 18px 20px}.number-word-result-content{align-items:flex-start;flex-direction:column}.number-word-copy{width:100%}}
.nwc-content{max-width:1180px;margin:0 auto;color:#263449;line-height:1.72}
.nwc-content *{box-sizing:border-box}
.nwc-content h2{margin:2.2rem 0 .8rem;color:#17345c;font-size:clamp(1.35rem,2.5vw,1.8rem);line-height:1.3}
.nwc-content h3{margin:0 0 .45rem;color:#17345c;font-size:1.05rem}
.nwc-content p{margin:0 0 1rem}
.nwc-content .nwc-intro{padding:1.1rem 1.25rem;background:#f3f7ff;border:1px solid #dce7f8;border-left:4px solid #2864dc;border-radius:12px}
.nwc-content .nwc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:1rem 0}
.nwc-content .nwc-card{height:100%;padding:1rem 1.1rem;background:#fff;border:1px solid #e2e8f0;border-radius:14px;box-shadow:0 4px 16px rgba(20,45,85,.045)}
.nwc-content .nwc-table-wrap{overflow-x:auto;margin:1rem 0 1.4rem;border:1px solid #e2e8f0;border-radius:12px}
.nwc-content table{width:100%;min-width:520px;margin:0;border-collapse:collapse;background:#fff}
.nwc-content th,.nwc-content td{padding:.75rem .9rem;text-align:left;vertical-align:top;border-bottom:1px solid #e8edf4}
.nwc-content th{background:#f3f7ff;color:#17345c;font-weight:700}
.nwc-content tr:last-child td{border-bottom:0}
.nwc-content .nwc-number{font-variant-numeric:tabular-nums;white-space:nowrap;font-weight:600}
.nwc-content .nwc-note{padding:.9rem 1rem;background:#fff8e8;border:1px solid #f4dfaa;border-radius:12px}
.nwc-content .nwc-faq{display:grid;gap:12px;margin:1rem 0}
.nwc-content .nwc-faq-item{padding:1rem 1.1rem;border:1px solid #e2e8f0;border-radius:12px;background:#fff}
.nwc-content .nwc-faq-item p:last-child{margin-bottom:0}
@media(max-width:640px){.nwc-content .nwc-grid{grid-template-columns:1fr}.nwc-content th,.nwc-content td{padding:.65rem .7rem}}
</style>

<section class="py-4 py-lg-5"><div class="number-word-card"><div class="number-word-header"><h1>Number to Words Converter</h1><p>Convert numbers into words instantly using Indian or International numbering formats.</p></div><div class="number-word-body"><div class="row g-3"><div class="col-lg-6"><label for="numberInput" class="number-input-label">Enter Number </label><input type="text" class="form-control number-word-input" id="numberInput" placeholder="e.g., 12345.67" value="12345.67" autocomplete="off"></div><div class="col-lg-3 col-md-6"><label for="numberSystem" class="number-input-label">Number System</label><select class="form-select number-word-select" id="numberSystem"><option value="us">International</option><option value="indian">Indian (Lakh/Crore)</option></select></div><div class="col-lg-3 col-md-6"><label class="number-input-label d-none d-md-block">&nbsp; </label><button type="button" id="convertBtn" class="btn btn-primary number-word-btn w-100"><i class="fa-solid fa-arrow-right-long me-2"></i>Convert</button></div></div><div class="number-word-result"><span class="number-word-result-label">Result</span><div class="number-word-result-content"><p class="number-word-result-text" id="resultText">Twelve Thousand Three Hundred Forty-Five and Sixty-Seven Cents</p><button type="button" class="btn btn-outline-primary number-word-copy" onclick="copyResultText()" title="Copy result"><i class="fa-regular fa-copy me-1"></i>Copy</button></div><div class="number-word-example">Example: 12,345.67 → Twelve Thousand Three Hundred Forty-Five and Sixty-Seven Cents</div></div></div></div></section>
<div class="nwc-content shadow-sm p-4" aria-label="Number to words converter guide">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include bahadur.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>3 min read</span>
    </div>
  </div>
<h2>What is a number to words converter?</h2>
  <p>A number to words converter changes digits into their written form. For example, <strong>12,345</strong> becomes <strong>Twelve Thousand Three Hundred Forty-Five</strong>. People use a number to word converter to read large numbers, prepare notes and documents, and help students practise number names.</p>
  <p>Choose the numbering system that matches your use: Indian format groups large values as lakh and crore; International format uses million and billion. The words can differ even when the value is the same.</p>
   <h2>How to convert numbers to words</h2>
  <div class="nwc-grid">
    <div class="nwc-card"><h3>1. Enter the number</h3><p class="mb-0">Type a whole number or decimal, such as <span class="nwc-number">125500</span> or <span class="nwc-number">12345.67</span>.</p></div>
    <div class="nwc-card"><h3>2. Choose a format</h3><p class="mb-0">Select Indian (Lakh/Crore) or International (Million/Billion), depending on how you want to read the number.</p></div>
    <div class="nwc-card"><h3>3. Convert and check</h3><p class="mb-0">Select <strong>Convert</strong>, then check the result against the digits you entered.</p></div>
    <div class="nwc-card"><h3>4. Copy the words</h3><p class="mb-0">Use <strong>Copy</strong> to place the displayed result on your clipboard.</p></div>
  </div>
<h2>Indian and International number formats</h2>
  <p>The Indian and International systems name the same values differently after one thousand. This comparison shows where the formats change.</p>
  <div class="nwc-table-wrap">
    <table>
      <thead><tr><th scope="col">Value</th><th scope="col">Indian format</th><th scope="col">International format</th></tr></thead>
      <tbody>
        <tr><td class="nwc-number">1,000</td><td>One Thousand</td><td>One Thousand</td></tr>
        <tr><td class="nwc-number">1,00,000 / 100,000</td><td>One Lakh</td><td>One Hundred Thousand</td></tr>
        <tr><td class="nwc-number">10,00,000 / 1,000,000</td><td>Ten Lakh</td><td>One Million</td></tr>
        <tr><td class="nwc-number">1,00,00,000 / 10,000,000</td><td>One Crore</td><td>Ten Million</td></tr>
        <tr><td class="nwc-number">10,00,00,000 / 100,000,000</td><td>Ten Crore</td><td>One Hundred Million</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Number to words examples</h2>
  <div class="nwc-table-wrap">
    <table>
      <thead><tr><th scope="col">Number</th><th scope="col">Indian format</th><th scope="col">International format</th></tr></thead>
      <tbody>
        <tr><td class="nwc-number">123</td><td>One Hundred Twenty-Three</td><td>One Hundred Twenty-Three</td></tr>
        <tr><td class="nwc-number">12,345</td><td>Twelve Thousand Three Hundred Forty-Five</td><td>Twelve Thousand Three Hundred Forty-Five</td></tr>
        <tr><td class="nwc-number">1,25,500 / 125,500</td><td>One Lakh Twenty-Five Thousand Five Hundred</td><td>One Hundred Twenty-Five Thousand Five Hundred</td></tr>
        <tr><td class="nwc-number">1,23,45,678 / 12,345,678</td><td>One Crore Twenty-Three Lakh Forty-Five Thousand Six Hundred Seventy-Eight</td><td>Twelve Million Three Hundred Forty-Five Thousand Six Hundred Seventy-Eight</td></tr>
      </tbody>
    </table>
  </div>
  <h2>How are decimal numbers written?</h2>
  <p>For the current converter, decimal digits are shown with the word <strong>cents</strong>. For example, <span class="nwc-number">12,345.67</span> appears as <strong>Twelve Thousand Three Hundred Forty-Five and Sixty-Seven Cents</strong>. If you are writing a measurement or a formal currency amount, confirm that this wording matches the format you need before using it.</p>
  <p class="nwc-note"><strong>For rupee or cheque wording:</strong> the current selector chooses Indian or International number grouping; it does not select a currency. Do not treat the result as certified cheque text or as a rupees-and-paise amount unless the calculator is updated to provide that mode.</p>

<section class="card shadow-sm mb-5 border-0"><div class="card-body p-4 p-md-5"><h2 class="mb-4 pb-2 border-bottom border-2 border-primary">Number Names 1 to 50</h2><p>Learning number names from 1 to 50 is useful for students, teachers, parents, and anyone learning how numbers are written in English. </p><p>Our number names reference provides quick examples of common numbers and their written forms. </p><div class="text-center mt-4"><img src="/assets/images/number-to-word-1-to-50.jpg" alt="Number names from 1 to 50 in words" class="img-fluid rounded shadow-sm" loading="lazy"></div></div></section>

  
  <h2>FAQ Number to word converter</h2>
  <div class="nwc-faq">
    <section class="nwc-faq-item"><h3>How do I write a number in words?</h3><p>Enter the digits in the converter, choose Indian or International format, and select Convert. Review the result before copying it.</p></section>
    <section class="nwc-faq-item"><h3>How do you write 1,00,000 in words?</h3><p>In Indian format, 1,00,000 is <strong>One Lakh</strong>. The same value in International format is 100,000, or <strong>One Hundred Thousand</strong>.</p></section>
    <section class="nwc-faq-item"><h3>How do you write one crore in words?</h3><p>One crore is written as <strong>One Crore</strong> in Indian format. It equals 10,000,000 in International format, which is <strong>Ten Million</strong>.</p></section>
    <section class="nwc-faq-item"><h3>Is “number to word” different from “number to words”?</h3><p>Both phrases usually mean converting a number into its written form. This number to words converter does that in English and lets you choose Indian or International grouping.</p></section>
    <section class="nwc-faq-item"><h3>Can I convert a decimal number to words?</h3><p>Yes. The current converter reads the decimal portion using “cents.” Check the result carefully if you need a measurement, rupees and paise, or another currency format.</p></section>
    <section class="nwc-faq-item"><h3>Is this number to word converter free?</h3><p>Yes. You can convert numbers and copy the result without creating an account.</p></section>
  </div>
</div>

<script src="{{ '/assets/js/num-to-word.js' | relative_url }}"></script>
