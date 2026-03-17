---
layout: default
title: Salary Hike Calculator – Calculate Salary Increase & Percentage
permalink: /salary-hike-calculator
description: "Calculate your new salary after a hike using our free Salary Hike Calculator. Enter your current salary and hike percentage to instantly find your salary increase and updated pay."
last_modified_at: 2026-03-16
---

<div class="row justify-content-center">
 <div class="col-12 col-md-9">
  <div class="card shadow-lg border-0 rounded-4">
    <div class="card-header bg-white border-0 rounded-top-4 pt-4 pb-2 px-4"> <h1>Salary hike calculator</h1></div>
          <div class="card-body px-4 pt-0 pb-4">
            <!-- mode toggle cards -->
            <div class="row g-3 mb-4">
              <div class="col-sm-6">
                <div class="p-3 border rounded-3 bg-white" id="optionNewSalaryCard" style="cursor:pointer; border-width:2px !important;">
                  <div class="d-flex align-items-center">
                    <span class="badge bg-primary bg-opacity-10 text-primary rounded-circle me-2 p-2">💰</span>
                    <span class="fw-medium">current + new salary</span>
                  </div>
                  <small class="text-secondary d-block mt-1">enter both annual figures</small>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 border rounded-3 bg-white" id="optionPercentCard" style="cursor:pointer; border-width:2px !important;">
                  <div class="d-flex align-items-center">
                    <span class="badge bg-success bg-opacity-10 text-success rounded-circle me-2 p-2">📈</span>
                    <span class="fw-medium">current + hike %</span>
                  </div>
                  <small class="text-secondary d-block mt-1">enter salary & percentage</small>
                </div>
              </div>
            </div>
            <!-- active mode badge -->
            <div class="mb-3 d-flex justify-content-between align-items-center"><span class="fw-medium text-secondary-emphasis small"></span><span id="activeModeBadge"></span></div>
            <!-- CURRENT -->
            <div class="mb-4">
              <label class="form-label fw-medium text-secondary">📅 current annual salary</label>
              <input type="number" id="currentSalary" class="form-control form-control-lg" placeholder="e.g., 80000" value="" step="1000" min="0">
              <div class="form-text text-secondary">enter amount (any currency / unit)</div>
              <div class="mt-2 small fst-italic text-secondary" id="currentInWords"></div>
            </div>
            <!-- NEW  -->
            <div id="newSalaryFieldGroup" class="mb-4">
              <label class="form-label fw-medium text-secondary">🎯 new annual salary</label>
              <input type="number" id="newSalaryInput" class="form-control" placeholder="e.g., 100000" value="" step="1000" min="0">
              <div class="form-text text-secondary">you can type any value — it stays as entered</div>
              <div class="mt-2 small fst-italic text-secondary" id="newInWords"></div>
            </div>
            <!-- PERCENTAGE-->
            <div id="percentFieldGroup" class="mb-4 d-none">
              <label class="form-label fw-medium text-secondary">📊 hike percentage (%)</label>
              <div class="row g-2 align-items-center">
                <div class="col-9">
                  <input type="range" id="hikePercentSlider" class="form-range" min="0" max="100" step="0.5" value="25">
                </div>
                <div class="col-3">
                  <input type="number" id="hikePercentNumber" class="form-control" value="25" step="0.5" min="0" max="100">
                </div>
              </div>
              <div class="form-text text-secondary">new salary updates automatically</div>
            </div>
            <!-- reset button -->
            <div class="d-flex justify-content-end mb-3">
              <button class="btn btn-outline-secondary btn-sm rounded-pill px-4" type="button" id="resetBtn">↻ reset to empty</button>
            </div>
            <hr class="opacity-25 my-3">
            <!-- RESULTS -->
            <div class="row g-4">
              <div class="col-sm-6">
                <div class="p-3 bg-light bg-opacity-60 rounded-3 border-start border-4 border-primary">
                  <span class="text-secondary small text-uppercase fw-medium">new annual</span>
                  <div class="h2 fw-bold text-primary mb-0" id="resultNewAnnual">0</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 bg-light bg-opacity-60 rounded-3 border-start border-4 border-success">
                  <span class="text-secondary small text-uppercase fw-medium">hike</span>
                  <div class="h3 fw-semibold text-success mb-0" id="resultHikePercent">0%</div>
                  <span class="text-secondary small" id="resultHikeAmount">(0 increase)</span>
                </div>
              </div>
            </div>
            <!-- MONTHLY-->
            <div class="row mt-4 g-3">
              <div class="col-6">
                <div class="p-3 bg-white border rounded-3 text-center">
                  <span class="text-secondary small text-uppercase">current monthly</span>
                  <div class="h4 fw-semibold mt-1" id="monthlyCurrent">0</div>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 bg-white border rounded-3 text-center">
                  <span class="text-secondary small text-uppercase">new monthly</span>
                  <div class="h4 fw-semibold mt-1" id="monthlyNew">0</div>
                </div>
              </div>
            </div>
            <!-- EXTRA DETAIL ROW -->
            <div class="row mt-3 small text-secondary border-top pt-3 text-center">
              <div class="col">
                <span class="fw-medium">Current Annual: </span><span class="font-monospace" id="displayCurrent">0</span>
              </div>
              <div class="col">
                <span class="fw-medium">Hike Amount: </span><span class="font-monospace" id="displayHikeAmount">0</span>
              </div>
              <div class="col">
                <span class="fw-medium">Revised Annual: </span><span class="font-monospace" id="displayRevised">0</span>
              </div>
            </div>
      </div>
    </div> 

<script src="{{ '/assets/js/salary-hike-calc.js' | relative_url }}"></script>