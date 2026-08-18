---
layout: default
title: Number to Words Converter – Convert Numbers to Words, Rupees & Indian Format
permalink: /number-to-word-converter
description: "Convert numbers to words instantly with our free Number to Words Converter. Supports Indian Lakh/Crore, International Million/Billion, Rupees, Paise, decimals and cheque amounts."
image: "/assets/images/number-to-words.jpg"
last_modified_at: 2026-08-18
---
<!-- Converter Tool -->
<style>
.number-word-card{max-width:1050px;margin:0 auto;border:1px solid #e9ecef;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 12px 35px #00000012}.number-word-header{padding:28px 30px 22px;text-align:center;background:linear-gradient(180deg,#f8faff 0%,#fff 100%);border-bottom:1px solid #eef1f5}.number-word-header h1{margin:0;font-size:clamp(1.6rem,3vw,2.15rem);font-weight:700;color:#1f2937}.number-word-header h1 i{color:#2563eb;margin-right:8px}.number-word-header p{max-width:700px;margin:10px auto 0;color:#6b7280;font-size:.98rem}.number-word-body{padding:30px}.number-input-label{display:block;margin-bottom:8px;font-size:.9rem;font-weight:600;color:#374151}.number-word-input,.number-word-select{min-height:56px;border:1px solid #d9dee7;border-radius:10px;font-size:1rem;box-shadow:none;transition:all .2s ease}.number-word-input:focus,.number-word-select:focus{border-color:#2563eb;box-shadow:0 0 0 3px #2563eb1a}.number-word-btn{min-height:56px;border-radius:10px;font-weight:600;border:none;background:#2563eb;transition:all .2s ease}.number-word-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 15px #2563eb33}.number-word-result{margin-top:25px;padding:20px 22px;border:1px solid #dbeafe;border-radius:12px;background:#f8fbff}.number-word-result-label{display:block;margin-bottom:7px;color:#64748b;font-size:.82rem;font-weight:600;text-transform:uppercase;letter-spacing:.05em}.number-word-result-content{display:flex;align-items:center;justify-content:space-between;gap:18px}.number-word-result-text{margin:0;color:#172033;font-size:1.08rem;line-height:1.65;font-weight:600;overflow-wrap:anywhere}.number-word-copy{flex-shrink:0;min-width:82px;border-radius:8px;font-weight:500}.number-word-example{margin-top:14px;color:#6b7280;font-size:.88rem}@media (max-width: 767.98px){.number-word-body{padding:20px}.number-word-header{padding:24px 18px 20px}.number-word-result-content{align-items:flex-start;flex-direction:column}.number-word-copy{width:100%}}
</style>

<section class="py-4 py-lg-5">
 <div class="number-word-card">
  <div class="number-word-header">
   <h1>Number to Words Converter</h1>
    <p>Convert numbers into words instantly using Indian or International numbering formats.</p>
    </div>
    <!-- Calculator -->
    <div class="number-word-body">
      <div class="row g-3">
       <div class="col-lg-6">
         <label for="numberInput" class="number-input-label">  Enter Number </label>
          <input type="text"  class="form-control number-word-input" id="numberInput"  placeholder="e.g., 12345.67"  value="12345.67" autocomplete="off">
          </div>
           <!-- Number System -->
                <div class="col-lg-3 col-md-6">
                    <label for="numberSystem" class="number-input-label">Number System</label>
                    <select class="form-select number-word-select" id="numberSystem">
                        <option value="us">International</option>
                        <option value="indian">Indian (Lakh/Crore)</option>
                    </select>
                </div>
                <!-- Button -->
                <div class="col-lg-3 col-md-6">
                    <label class="number-input-label d-none d-md-block"> &nbsp; </label>
                    <button type="button" id="convertBtn" class="btn btn-primary number-word-btn w-100"><i class="fa-solid fa-arrow-right-long me-2"></i> Convert</button>
                </div>
            </div>
            <!-- Result -->
            <div class="number-word-result">
                <span class="number-word-result-label">Result</span>
                <div class="number-word-result-content">
                    <p class="number-word-result-text" id="resultText">Twelve Thousand Three Hundred Forty-Five  and Sixty-Seven Cents</p>
                    <button  type="button" class="btn btn-outline-primary number-word-copy" onclick="copyResultText()" title="Copy result"><i class="fa-regular fa-copy me-1"></i>Copy</button>
                </div>
                <div class="number-word-example">Example: 12,345.67 → Twelve Thousand Three Hundred Forty-Five and Sixty-Seven Cents</div>
            </div>
        </div>
    </div>
</section>

<!-- Article Content -->
<div class="article-container">
 <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">
   {% include naren_create.html %}
   {% include bahadur.html %}
   </div>
   <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
 </div>
<!-- Article-->
<h2>What is a Number to Words Converter?</h2>
<p>A <strong>number to words converter</strong> is an online tool that converts numbers into their written form. For example, <strong>12,345</strong> becomes <strong>Twelve Thousand Three Hundred Forty-Five</strong>. It is useful for writing checks, invoices, applications, financial documents, and other situations where numbers need to be written in words.</p>
<p> EasyCalculator's number to words converter supports both <strong>Indian and International number formats</strong>. You can convert numbers using the <strong>Lakh and Crore</strong> system or the <strong>Million and Billion</strong> system, making it useful for users in India and around the world.</p>
<div class="alert alert-light border mt-4 mb-0"> <strong>Example:</strong> 1,25,500 →  <strong>One Lakh Twenty-Five Thousand Five Hundred</strong></div>

<!-- Indian Number System -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">
  <h2>Number to Words in Indian Format (Lakh and Crore)</h2>
    <p>The <strong>Indian numbering system</strong> uses terms such as <strong>Thousand, Lakh, and Crore</strong>. It is commonly used in India for banking, financial documents, invoices, salaries,  property transactions, accounting, and everyday calculations.</p>
    <p>For example, <strong>1,00,000</strong> is written as <strong>One Lakh</strong>, while <strong>10,00,000</strong> is written as <strong>Ten Lakh</strong> and <strong>1,00,00,000</strong> is written as <strong>One Crore</strong>.</p>
    <div class="table-responsive mt-4">
        <table class="table table-bordered table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Number</th>
                    <th>Indian Format</th>
                    <th>In Words</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1,000</td>
                    <td>1 Thousand</td>
                    <td>One Thousand</td>
                </tr>
                <tr>
                    <td>1,00,000</td>
                    <td>1 Lakh</td>
                    <td>One Lakh</td>
                </tr>
                <tr>
                    <td>10,00,000</td>
                    <td>10 Lakh</td>
                    <td>Ten Lakh</td>
                </tr>
                <tr>
                    <td>1,00,00,000</td>
                    <td>1 Crore</td>
                    <td>One Crore</td>
                </tr>
                <tr>
                    <td>10,00,00,000</td>
                    <td>10 Crore</td>
                    <td>Ten Crore</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</section>

<!-- Common Uses -->
<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">
  <h2>Where Is Number to Words Conversion Used?</h2>
   <p> Converting numbers into words is useful whenever a written amount or number is required instead of numerical digits.</p>
    <div class="row g-4 mt-2">
     <div class="col-md-4">
      <div class="card h-100 border-0 bg-light">
       <div class="card-body p-4">
        <div class="text-primary mb-3"> <i class="fas fa-file-invoice-dollar fa-2x"></i></div>
         <h3 class="h5">Checks and Payments</h3>
         <p class="mb-0"> Write payment amounts in words for checks and other  financial transactions.</p>
        </div>
      </div>
     </div>
  <div class="col-md-4">
   <div class="card h-100 border-0 bg-light">
    <div class="card-body p-4">
     <div class="text-primary mb-3"><i class="fas fa-file-invoice fa-2x"></i></div>
      <h3 class="h5">Invoices and Documents</h3>
      <p class="mb-0">Convert amounts into words for invoices, receipts  applications, and financial documents.</p>
     </div>
    </div>
    </div>
 <div class="col-md-4">
  <div class="card h-100 border-0 bg-light">
    <div class="card-body p-4">
     <div class="text-primary mb-3"><i class="fas fa-graduation-cap fa-2x"></i></div>
       <h3 class="h5">Education</h3>
       <p class="mb-0">Help students learn number names and understand  how numbers are written in words.</p>
      </div>
     </div>
    </div>
    </div>
</div>

</section>

<!-- How to Convert -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">
  <h2> How to Convert Numbers to Words</h2>
   <p>Using the converter is simple. Enter a number, select the required numbering system, and click <strong>Convert</strong>.</p>
    <ol>
    <li class="mb-2"><strong>Enter a number</strong> such as 12345 or 1,25,500.</li>
    <li class="mb-2"><strong>Select the number system</strong> such as Indian or  International.</li>
    <li class="mb-2"> <strong>Click Convert</strong> to generate the number in words.</li>
    <li class="mb-2"><strong>Review the result</strong> before using it in a document.</li>
   <li><strong>Copy the result</strong> using the Copy button.</li>
  </ol>
</div>
</section>
<!-- Examples -->
<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">
    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary"> Number to Words Examples</h2>

    <p>
        Here are some common examples of numbers converted into words.
    </p>

    <div class="row g-4 mt-2">

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <div class="fw-bold fs-4 text-primary mb-3">123</div>
                    <div>One Hundred Twenty-Three</div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <div class="fw-bold fs-4 text-primary mb-3">7,891.65</div>
                    <div>
                        Seven Thousand Eight Hundred Ninety-One
                        and Sixty-Five Cents
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <div class="fw-bold fs-4 text-primary mb-3">12,345,678</div>
                    <div>
                        Twelve Million Three Hundred Forty-Five Thousand
                        Six Hundred Seventy-Eight
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</section>

<!-- Important Number Examples -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">

    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary">
        Common Numbers in Words
    </h2>

    <div class="table-responsive">
        <table class="table table-bordered table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Number</th>
                    <th>In Words</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>Ten</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>One Hundred</td>
                </tr>
                <tr>
                    <td>1,000</td>
                    <td>One Thousand</td>
                </tr>
                <tr>
                    <td>10,000</td>
                    <td>Ten Thousand</td>
                </tr>
                <tr>
                    <td>1,00,000</td>
                    <td>One Lakh</td>
                </tr>
                <tr>
                    <td>10,00,000</td>
                    <td>Ten Lakh</td>
                </tr>
                <tr>
                    <td>1,00,00,000</td>
                    <td>One Crore</td>
                </tr>
                <tr>
                    <td>1,000,000</td>
                    <td>One Million</td>
                </tr>
                <tr>
                    <td>1,000,000,000</td>
                    <td>One Billion</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</section>

<!-- Number Names -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">

    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary">
        Number Names 1 to 50
    </h2>

    <p>
        Learning number names from 1 to 50 is useful for students,
        teachers, parents, and anyone learning how numbers are written
        in English.
    </p>

    <p>
        Our number names reference provides quick examples of common
        numbers and their written forms.
    </p>

    <div class="text-center mt-4">
        <img
            src="/assets/images/number-to-word-1-to-50.jpg"
            alt="Number names from 1 to 50 in words"
            class="img-fluid rounded shadow-sm"
            loading="lazy">
    </div>

</div>

</section>

<!-- Benefits -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">

    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary">
        Benefits of Using a Number to Words Converter
    </h2>

    <div class="row g-4">

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <h3 class="h5">Fast and Convenient</h3>
                    <p class="mb-0">
                        Convert numbers into words instantly instead of
                        manually writing long numbers.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <h3 class="h5">Reduces Manual Errors</h3>
                    <p class="mb-0">
                        Automatic conversion can help reduce mistakes when
                        writing large or complicated numbers.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card h-100 border-0 bg-light">
                <div class="card-body p-4">
                    <h3 class="h5">Multiple Number Formats</h3>
                    <p class="mb-0">
                        Convert numbers using Indian Lakh/Crore or
                        International Million/Billion formats.
                    </p>
                </div>
            </div>
        </div>

    </div>

</div>

</section>

<!-- Indian vs International -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">

    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary">
        Indian vs International Number System
    </h2>

    <p>
        The Indian and International numbering systems use different
        grouping conventions for large numbers. Understanding the
        difference is especially important when converting financial
        amounts.
    </p>

    <div class="table-responsive mt-4">
        <table class="table table-bordered table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Number</th>
                    <th>Indian System</th>
                    <th>International System</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1,00,000</td>
                    <td>One Lakh</td>
                    <td>One Hundred Thousand</td>
                </tr>
                <tr>
                    <td>10,00,000</td>
                    <td>Ten Lakh</td>
                    <td>One Million</td>
                </tr>
                <tr>
                    <td>1,00,00,000</td>
                    <td>One Crore</td>
                    <td>Ten Million</td>
                </tr>
                <tr>
                    <td>10,00,00,000</td>
                    <td>Ten Crore</td>
                    <td>One Hundred Million</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</section>

<!-- Reference Table -->

<section class="card shadow-sm mb-5 border-0"> <div class="card-body p-4 p-md-5">

    <h2 class="mb-4 pb-2 border-bottom border-2 border-primary">
        Number to Words Conversion Reference
    </h2>

    <p>
        Use this reference table to quickly understand how common numerical
        values are written in words.
    </p>

    <div class="table-responsive">
        <table class="table table-bordered table-hover align-middle">
            <thead class="table-light">
                <tr>
                    <th>Number</th>
                    <th>In Words</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>Zero</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Ten</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>One Hundred</td>
                </tr>
                <tr>
                    <td>1,000</td>
                    <td>One Thousand</td>
                </tr>
                <tr>
                    <td>10,000</td>
                    <td>Ten Thousand</td>
                </tr>
                <tr>
                    <td>100,000</td>
                    <td>One Hundred Thousand</td>
                </tr>
                <tr>
                    <td>1,000,000</td>
                    <td>One Million</td>
                </tr>
                <tr>
                    <td>10,000,000</td>
                    <td>Ten Million</td>
                </tr>
                <tr>
                    <td>100,000,000</td>
                    <td>One Hundred Million</td>
                </tr>
                <tr>
                    <td>1,000,000,000</td>
                    <td>One Billion</td>
                </tr>
                <tr>
                    <td>1,000,000,000,000</td>
                    <td>One Trillion</td>
                </tr>
            </tbody>
        </table>
    </div>

</div>

</section>

<!-- FAQ -->
<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Number to Words Converter</h2>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">
        1. How do I convert a number into words?
      </div>
      <p class="mb-0">
        Enter the number into the Number to Words Converter, select the
        required numbering system, and click the Convert button. The tool
        will instantly display the number in words.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">
        2. How do you write 1,00,000 in words?
      </div>
      <p class="mb-0">
        In the Indian numbering system, <strong>1,00,000</strong> is written
        as <strong>One Lakh</strong>. In the International numbering system,
        100,000 is written as <strong>One Hundred Thousand</strong>.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">
        3. How do you write 1 crore in words?
      </div>
      <p class="mb-0">
        <strong>1 crore</strong> is written as <strong>One Crore</strong>
        in the Indian numbering system. It is equal to
        <strong>10,000,000</strong> in the International numbering system,
        which is written as <strong>Ten Million</strong>.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">
        4. Can I convert decimal numbers into words?
      </div>
      <p class="mb-0">
        Yes. The Number to Words Converter can handle decimal values and
        convert the whole-number and decimal portions according to the
        selected numbering format.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">
        5. Is the Number to Words Converter free?
      </div>
      <p class="mb-0">
        Yes. EasyCalculator's Number to Words Converter is free to use.
        You can convert numbers into words instantly without registration.
      </p>
    </div>
  </div>

</section>
<!-- End FAQ Section -->

</div>






<script src="{{ '/assets/js/num-to-word.js' | relative_url }}"></script>
<!-- FAQ Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a number into words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter the number into the Number to Words Converter, select the required numbering system, and click the Convert button. The tool will instantly display the number in words."
      }
    },
    {
      "@type": "Question",
      "name": "How do you write 1,00,000 in words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the Indian numbering system, 1,00,000 is written as One Lakh. In the International numbering system, 100,000 is written as One Hundred Thousand."
      }
    },
    {
      "@type": "Question",
      "name": "How do you write 1 crore in words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 crore is written as One Crore in the Indian numbering system. It is equal to 10,000,000 in the International numbering system, which is written as Ten Million."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert decimal numbers into words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Number to Words Converter can handle decimal values and convert the whole-number and decimal portions according to the selected numbering format."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Number to Words Converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. EasyCalculator's Number to Words Converter is free to use. You can convert numbers into words instantly without registration."
      }
    }
  ]
}
</script>