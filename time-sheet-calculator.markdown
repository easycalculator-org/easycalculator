---
layout: default
title:  Time Sheet Calculator | Daily, Weekly Work Hours Tool
permalink: /time-sheet-calculator
description: "Calculate total work hours easily with our free time sheet calculator. Add breaks, overtime, auto-sum daily or weekly hours, and download PDF reports instantly."
image: "/assets/images/og/time-sheet-calculator.jpg"
last_modified_at: 2026-04-12
---
<style>.table-responsive{scrollbar-width:thin}.weekend-row{background-color:#fff3e0!important}.auto-time-btn{transition:all .2s}.auto-time-btn:hover{transform:scale(1.02)}.flatpickr-input{background-color:#fff!important;cursor:pointer!important}@media print{body *{visibility:hidden}#pdfExportArea,#pdfExportArea *{visibility:visible}#pdfExportArea{position:absolute;top:0;left:0;width:100%;padding:20px;background:#fff}.no-print,.btn,.no-print,.modal,.alert-info{display:none!important}.table{border-collapse:collapse;width:100%}.table th,.table td{border:1px solid #ddd;padding:8px}}.summary-card{transition:transform .2s}.summary-card:hover{transform:translateY(-3px)}.delete-btn{transition:all .2s}.delete-btn:hover{background-color:#dc3545!important;color:#fff!important;transform:scale(1.05)}.toast-message{position:fixed;bottom:20px;right:20px;z-index:9999;animation:slideIn .3s ease}@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}.pdf-header{text-align:center;margin-bottom:15px;padding-bottom:5px}.pdf-header h2{color:#1e3c72;margin-bottom:10px}.pdf-info{display:flex;justify-content:space-between;margin:15px 0;padding:10px;background:#f8f9fa;border-radius:5px;flex-wrap:wrap;gap:10px}.pdf-summary{display:flex;justify-content:space-around;margin:15px 0;padding:10px;background:#e9ecef;border-radius:5px;flex-wrap:wrap}.pdf-summary-item{text-align:center;padding:5px 7px}.pdf-summary-item strong{font-size:18px;color:#0d6efd}.break-input{background-color:#fff8e7!important}.fa-icon-fix{margin-right:5px} 
</style>

<div class="container py-4 py-md-5">
  <div class="card shadow-lg border-0 rounded-4" id="timesheetCard">
    <div class="bg-primary p-3 text-white rounded-top-4 py-3">
      <div class="d-flex flex-wrap align-items-center justify-content-between">
        <div>
          <h3 class="mb-0 fw-semibold">Timesheet Calculator</h3>
        </div>
        <div class="mt-2 mt-sm-0 d-flex gap-2">
          <button class="btn btn-warning btn-sm auto-time-btn" id="autoTimeBtn" type="button">
            <i class="fas fa-magic"></i> Auto Fill Time
          </button>
          <button class="btn btn-light btn-sm" id="downloadPDFBtn" type="button">
            <i class="fas fa-file-pdf text-danger"></i> Export PDF
          </button>
        </div>
      </div>
    </div>
    <div class="card-body p-3 p-md-4">
      <!-- Employee Details Row with Employee ID -->
      <div class="row g-3 mb-4">
        <div class="col-md-3">
          <label class="form-label fw-semibold"><i class="fas fa-user-badge"></i> Employee Name</label>
          <input type="text" id="employeeName" class="form-control" placeholder="Full name" value="Sarah Williams">
        </div>
        <div class="col-md-2">
          <label class="form-label fw-semibold">Employee ID</label>
          <input type="text" id="employeeId" class="form-control" placeholder="EMP-001" value="EMP-1001">
        </div>
        <div class="col-md-3">
          <label class="form-label fw-semibold"><i class="fas fa-calendar-alt"></i> Month / Period</label>
          <input type="text" id="monthPeriod" class="form-control" placeholder="e.g., April 2026" value="April 2026">
        </div>
        <div class="col-md-2">
          <label class="form-label fw-semibold"><i class="fas fa-calendar-plus"></i> Start Date</label>
          <input type="text" id="startDate" class="form-control" placeholder="Select start date">
        </div>
        <div class="col-md-2">
          <label class="form-label fw-semibold"><i class="fas fa-calendar-minus"></i> End Date</label>
          <input type="text" id="endDate" class="form-control" placeholder="Select end date">
        </div>
      </div>
     <!-- Top Time Summary Bar -->
<div class="row g-3 mb-4 no-print text-center text-md-start">

  <div class="col-6 col-md-4 col-lg text-center">
    <div class="bg-white border rounded p-2 h-100">
      <i class="fas fa-calendar-alt text-primary me-1"></i>
      <small class="text-muted d-block">Month</small>
      <strong id="currentMonthDisplay">—</strong>
    </div>
  </div>

  <div class="col-6 col-md-4 col-lg text-center">
    <div class="bg-white border rounded p-2 h-100">
      <i class="fas fa-calendar-check text-success me-1"></i>
      <small class="text-muted d-block">Period</small>
      <strong id="periodRangeDisplay">—</strong>
    </div>
  </div>

  <div class="col-6 col-md-4 col-lg text-center">
    <div class="bg-white border rounded p-2 h-100">
      <i class="fas fa-mug-hot text-warning me-1"></i>
      <small class="text-muted d-block">Break</small>
      <strong id="totalBreakDisplay">0 hrs</strong>
    </div>
  </div>

  <div class="col-6 col-md-6 col-lg text-center">
    <div class="bg-light border rounded p-2 h-100">
      <i class="fas fa-clock text-primary me-1"></i>
      <small class="text-muted d-block">Total Hours</small>
      <strong id="totalHours">0.00</strong>
    </div>
  </div>

  <div class="col-6 col-md-6 col-lg text-center">
    <div class="bg-light border rounded p-2 h-100">
      <i class="fas fa-check-circle text-success me-1"></i>
      <small class="text-muted d-block">Working Days</small>
      <strong id="totalDays">0</strong>
    </div>
  </div>

</div>
 <!-- Action Buttons -->
      <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 mt-2 no-print">
        <h5 class="mb-2 mb-md-0"> Daily Attendance Log</h5>
        <div class="d-flex gap-2 flex-wrap">
          <button class="btn btn-sm btn-primary" id="generateRangeBtn" type="button"><i class="fas fa-calendar-range"></i> Generate Dates</button>
          <button class="btn btn-sm btn-outline-secondary" id="addRowBtn" type="button"><i class="fas fa-plus-circle"></i> Add Day</button>
          <button class="btn btn-sm btn-outline-danger" id="resetTableBtn" type="button"><i class="fas fa-trash-alt"></i> Clear All</button>
        </div>
      </div>
      <!-- Timesheet Table with Break Time -->
      <div class="table-responsive">
        <table class="table table-bordered table-hover align-middle" id="timesheetTable">
          <thead class="table-dark">
            <tr class="text-center">
              <th style="width: 4%">#</th>
              <th style="width: 12%">Date</th>
              <th style="width: 8%">Day</th>
              <th style="width: 12%">In Time</th>
              <th style="width: 12%">Out Time</th>
              <th style="width: 10%">Break (hrs)</th>
              <th style="width: 12%">Net Hours</th>
              <th style="width: 10%">Action</th>
             </tr>
          </thead>
          <tbody id="tableBody">
            <tr>
              <td colspan="8" class="text-center text-muted py-4">
                <i class="fas fa-info-circle"></i> Set date range and click "Generate Dates"
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Summary Cards -->
  <div class="row mt-4">
  <div class="col-12">
    <div class="card border-0 shadow-sm p-3">
      <div class="d-flex flex-wrap justify-content-between align-items-center text-center text-md-start">
        <div><i class="fas fa-user-circle text-primary me-1"></i><strong id="summaryName">—</strong>
          <small class="text-muted ms-1">(ID: <span id="summaryEmpId">—</span>)</small>
        </div>
        <div><i class="fas fa-calendar-alt text-secondary me-1"></i><span class="text-muted">Month:</span>
          <strong id="summaryMonth">—</strong>
        </div>
      </div>
    </div>
  </div>     
      </div>
    </div>
  </div>
</div>

<!-- Hidden PDF Export Area -->
<div id="pdfExportArea" style="display: none; padding: 30px; background: white;">
  <div class="pdf-header">
    <h2>TIMESHEET REPORT</h2>
    <div class="pdf-info">
      <div><strong>Employee Name:</strong> <span id="pdfEmpName"></span></div>
      <div><strong>Employee ID:</strong> <span id="pdfEmpId"></span></div>
      <div><strong>Month/Period:</strong> <span id="pdfMonth"></span></div>
    </div>
    <div class="pdf-summary">
      <div class="pdf-summary-item">
        <div>Total Working Days</div>
        <strong id="pdfTotalDays">0</strong>
      </div>
      <div class="pdf-summary-item">
        <div>Total Working Hours</div>
        <strong id="pdfTotalHours">0.00</strong>
      </div>
      <div class="pdf-summary-item">
        <div>Total Break Time</div>
        <strong id="pdfTotalBreak">0.00</strong>
      </div>
      <div class="pdf-summary-item">
        <div>Date Range</div>
        <strong id="pdfDateRange">—</strong>
      </div>
    </div>
  </div>
  <table class="table table-bordered" style="width: 100%; border-collapse: collapse;">
    <thead style="background-color: #0d6efd; color: white;">
      <tr style="text-align: center;">
        <th style="padding: 10px; border: 1px solid #ddd;">#</th>
        <th style="padding: 10px; border: 1px solid #ddd;">Date</th>
        <th style="padding: 10px; border: 1px solid #ddd;">Day</th>
        <th style="padding: 10px; border: 1px solid #ddd;">In Time</th>
        <th style="padding: 10px; border: 1px solid #ddd;">Out Time</th>
        <th style="padding: 10px; border: 1px solid #ddd;">Break (hrs)</th>
        <th style="padding: 10px; border: 1px solid #ddd;">Net Hours</th>
      </tr>
    </thead>
    <tbody id="pdfTableBody">
    </tbody>
  </table>
</div>

<!-- Auto Time Modal -->
<div class="modal fade" id="autoTimeModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title"><i class="fas fa-clock"></i> Auto Fill Time Settings</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p class="text-muted mb-3">Set default values for ALL rows</p>
        <div class="mb-3">
          <label class="form-label fw-semibold"><i class="fas fa-sign-in-alt"></i> Default In Time</label>
          <input type="text" id="modalInTime" class="form-control" placeholder="09:00" value="09:00">
          <small class="text-muted">24-hour format (e.g., 09:00, 14:30)</small>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold"><i class="fas fa-sign-out-alt"></i> Default Out Time</label>
          <input type="text" id="modalOutTime" class="form-control" placeholder="17:30" value="17:30">
          <small class="text-muted">24-hour format (e.g., 17:30, 18:00)</small>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold"><i class="fas fa-mug-hot"></i> Default Break (hours)</label>
          <input type="number" id="modalBreak" class="form-control" placeholder="0.5" value="0.5" step="0.25">
          <small class="text-muted">Break duration in hours (0.5 = 30 min, 1.0 = 60 min)</small>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="overwriteExisting" checked>
          <label class="form-check-label" for="overwriteExisting">
            Overwrite existing values
          </label>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="applyAutoTimeBtn">
          <i class="fas fa-check-circle"></i> Apply to All Rows
        </button>
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

<!-- Section -->
<section class="mb-5">
<h2 class="pt-2">Time Sheet Calculator – Track Work Hours Easily</h2>
<p>A <strong>Time Sheet Calculator</strong> is a simple yet powerful tool used to calculate total working hours based on clock-in and clock-out times. Whether you are an employee, freelancer, or business owner, this tool helps you accurately track daily and weekly work hours, including breaks and overtime.</p>
<p>Our free online time sheet calculator is designed to make time tracking fast, accurate, and hassle-free.</p>


<div class="bg-light p-4 rounded mt-4">
 <h4 class="text-primary"><i class="fas fa-star me-2"></i>Key Features of Our Time Sheet Calculator </h4>
 <p>Our tool is not just a basic calculator—it comes with advanced features to make your work easier:</p>
<ul class="list-group list-group-flush">
 <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Custom Date & Day Entry</strong>: Enter your own date along with the day (e.g., 12-April Sunday). </li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>In-Time & Out-Time Tracking</strong>: Easily add login and logout time for accurate tracking.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Automatic Time Calculation</strong>: Instantly calculates total working hours based on inputs. </li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Break & Overtime Support</strong>: Include break time and calculate overtime effortlessly. </li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Daily & Weekly Timesheets</strong>: Track work hours for individual days or full weeks.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Employee Name Entry</strong>: Add employee or user name for personalized reports.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Download as PDF</strong>: Export complete timesheet as a professional PDF report.</li>
  <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i><strong>Mobile-Friendly Design</strong>: Fully responsive and works smoothly on all devices. </li>
  </ul>
</div>


 <!-- Example Table -->
 <br>
 <div class="card shadow-sm border-0 p-4">
   <div class="card-body">
      <h4 class="text-primary mb-3">Example Calculation </h4>
            <div class="table-responsive">
                <table class="table table-bordered text-center align-middle">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>Date</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Break</th>
                            <th>Total Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12 April</td>
                            <td>09:00 AM</td>
                            <td>06:00 PM</td>
                            <td>1 Hour</td>
                            <td class="fw-bold text-success">8 Hours</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 mb-0">Total time = 9 hours − 1 hour break = <strong>8 working hours</strong>. </p>
        </div>
    </div>


<!-- PDF Section -->
<br>
<div class="card shadow-sm border-0 mb-4">
  <div class="card-body">
    <h4 class="text-primary mb-3"><i class="fa-solid fa-file-pdf me-2"></i>Download PDF Report</h4>
      <p> You can easily download your timesheet as a professional PDF file. Just enter your details, calculate hours, and click the download button.  </p>
        <ul>
         <li>Save daily or weekly reports</li>
         <li>Share with employer or client</li>
         <li>Useful for payroll & billing</li>
        </ul>
       </div>
    </div>
</section>

















<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

<script src="{{ '/assets/js/time-sheet-calc.js' | relative_url }}"></script>
