---
layout: default
title: "Exam Percentage Calculator"
permalink: /exam-percentage-calculator
description: "Use our free Exam Percentage Calculator to calculate your exam percentage, marks obtained, total marks, and percentage score instantly. Includes the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---

 <div class="py-4">
 <div class="card border-0 shadow-sm rounded-4 mb-4">
 <div class="card-body p-4">
 <h1>Exam Percentage Calculator</h1>
 <p class="text-muted mb-4">Calculate your total marks, percentage, average marks, and grade. Add as many subjects as you need. </p>
 <div class="row g-3 mb-4"><div class="col-md-6"><label for="studentName" class="form-label fw-semibold">Student Name <span class="text-muted fw-normal">(Optional)</span></label><input type="text" id="studentName" class="form-control" placeholder="Enter student name"></div><div class="col-md-6"><label for="examName" class="form-label fw-semibold">Exam Name <span class="text-muted fw-normal">(Optional)</span></label><input type="text" id="examName" class="form-control" placeholder="Example: Final Examination"></div></div><div class="d-flex justify-content-between align-items-center mb-3"><div><h2 class="h5 fw-bold mb-1">Subjects & Marks</h2><small class="text-muted">Enter marks obtained and maximum marks for each subject. </small></div><button type="button" id="addSubjectBtn" class="btn btn-primary"><span class="fs-5 me-1">+</span>Add Subject </button></div>
 <div class="table-responsive">
 <table class="table align-middle" id="subjectsTable"><thead class="table-light"><tr><th style="min-width:180px;">Subject</th><th style="min-width:140px;">Marks Obtained</th><th style="min-width:140px;">Maximum Marks</th><th style="min-width:100px;">Percentage</th><th style="width:60px;"></th></tr></thead><tbody id="subjectsBody"><tr class="subject-row"><td><input type="text" class="form-control subject-name" placeholder="Example: Mathematics"></td><td><input type="number" class="form-control obtained-marks" placeholder="80" min="0" step="any"></td><td><input type="number" class="form-control maximum-marks" placeholder="100" min="1" step="any"></td><td><span class="subject-percentage text-muted">—</span></td><td><button type="button" class="btn btn-outline-danger btn-sm remove-subject" aria-label="Remove subject">× </button></td></tr><tr class="subject-row"><td><input type="text" class="form-control subject-name" placeholder="Example: Science"></td><td><input type="number" class="form-control obtained-marks" placeholder="85" min="0" step="any"></td><td><input type="number" class="form-control maximum-marks" placeholder="100" min="1" step="any"></td><td><span class="subject-percentage text-muted">—</span></td><td><button type="button" class="btn btn-outline-danger btn-sm remove-subject" aria-label="Remove subject">× </button></td></tr><tr class="subject-row"><td><input type="text" class="form-control subject-name" placeholder="Example: English"></td><td><input type="number" class="form-control obtained-marks" placeholder="75" min="0" step="any"></td><td><input type="number" class="form-control maximum-marks" placeholder="100" min="1" step="any"></td><td><span class="subject-percentage text-muted">—</span></td><td><button type="button" class="btn btn-outline-danger btn-sm remove-subject" aria-label="Remove subject">× </button></td></tr></tbody>
 </table>
 </div>
 <div class="d-flex flex-wrap gap-2 mt-4"><button type="button" id="calculateBtn" class="btn btn-primary btn-lg px-4">Calculate Result </button><button type="button" id="resetBtn" class="btn btn-outline-secondary btn-lg px-4">Reset </button></div><div id="errorMessage" class="alert alert-danger mt-4 d-none" role="alert"></div></div></div><div id="resultSection" class="d-none"><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4"><div><h2 class="h4 fw-bold mb-1">Exam Result</h2><p id="resultExamName" class="text-muted mb-0">Examination Result </p></div><button type="button" id="downloadPdfBtn" class="btn btn-outline-primary">↓ Download PDF </button></div><div id="studentResultInfo" class="mb-4 d-none"><div class="bg-light rounded-3 p-3"><strong>Student:</strong><span id="resultStudentName"></span></div></div><div class="row g-3 mb-4"><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Total Obtained </small><div id="totalObtained" class="h4 fw-bold mb-0">0 </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Maximum Marks </small><div id="totalMaximum" class="h4 fw-bold mb-0">0 </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Percentage </small><div id="finalPercentage" class="h4 fw-bold text-primary mb-0">0% </div></div></div><div class="col-6 col-lg-3"><div class="border rounded-3 p-3 h-100"><small class="text-muted d-block">Grade </small><div id="finalGrade" class="h4 fw-bold text-success mb-0">— </div></div></div></div>
 <div class="table-responsive"><table class="table table-bordered align-middle"><thead class="table-light"><tr><th>#</th><th>Subject</th><th>Marks Obtained</th><th>Maximum Marks</th><th>Percentage</th></tr></thead><tbody id="resultTableBody"></tbody><tfoot class="table-light"><tr><th colspan="2">Total</th><th id="resultTableObtained">0</th><th id="resultTableMaximum">0</th><th id="resultTablePercentage">0%</th></tr></tfoot></table></div><div id="performanceMessage" class="alert alert-success mt-4 mb-0"></div></div></div><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4">
 <h2 class="h5 fw-bold mb-3">How Your Exam Percentage Is Calculated </h2>
 <div class="bg-light border rounded-3 p-3"><div class="fs-5">Percentage=<strong>(Total Marks Obtained ÷ Total Maximum Marks) × 100 </strong></div></div>
 <p class="mt-3 mb-0 text-muted">For example, if you score 425 marks out of 500: </p><p class="fw-semibold mt-2 mb-0">(425 ÷ 500) × 100=85% </p>
 </div>
 </div>
 </div>



  <!-- ============================================
       ARTICLE
  ============================================= -->
<!-- 
  <div class="article-container">

    <h2 class="h4 fw-bold mb-3">
      What Is an Exam Percentage Calculator?
    </h2>

    <p>
      An exam percentage calculator helps students find their overall
      percentage from marks scored in multiple subjects. Instead of
      calculating each subject manually, you can enter all your subjects
      and marks in one place.
    </p>

    <p>
      The calculator adds your marks together, adds the maximum marks,
      and then calculates your final exam percentage.
    </p>


    <h2 class="h4 fw-bold mt-4 mb-3">
      How to Calculate Exam Percentage
    </h2>

    <p>
      The basic formula is:
    </p>

    <div class="bg-light border rounded-3 p-3 text-center mb-3">

      <strong class="fs-5">
        Percentage =
        (Total Marks Obtained ÷ Total Maximum Marks) × 100
      </strong>

    </div>


    <h3 class="h5 fw-bold mt-4">
      Example
    </h3>

    <p>
      Suppose your marks are:
    </p>

    <ul>
      <li>Mathematics: 85 out of 100</li>
      <li>Science: 90 out of 100</li>
      <li>English: 80 out of 100</li>
      <li>Social Studies: 75 out of 100</li>
      <li>Computer: 90 out of 100</li>
    </ul>

    <p>
      Your total marks are <strong>420 out of 500</strong>.
    </p>

    <p>
      Therefore:
    </p>

    <div class="bg-light border rounded-3 p-3">

      <strong>
        (420 ÷ 500) × 100 = 84%
      </strong>

    </div>

    <p class="mt-3">
      Your overall exam percentage is therefore
      <strong>84%</strong>.
    </p>


    <h2 class="h4 fw-bold mt-4 mb-3">
      How to Use This Calculator
    </h2>

    <ol>
      <li>Enter the student's name if you want it on the result.</li>
      <li>Enter the exam name.</li>
      <li>Enter each subject name.</li>
      <li>Enter marks obtained.</li>
      <li>Enter the maximum marks for that subject.</li>
      <li>Click <strong>+ Add Subject</strong> to add more subjects.</li>
      <li>Click <strong>Calculate Result</strong>.</li>
      <li>Review the total marks, percentage, and grade.</li>
      <li>Click <strong>Download PDF</strong> to save the result.</li>
    </ol>

  </div>

</div> -->



<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="{{ '/assets/js/percentage/exam-percentage-calc.js' | relative_url }}"></script>

