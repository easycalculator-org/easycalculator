---
layout: default
title: Pie Chart Maker Online Free – Create Custom Pie Charts
permalink: /tools/pie-chart
description: "Create pie charts online free with labels, percentages, colors, and live preview. Download pie charts as PNG or SVG instantly"
last_modified_at: 2026-05-24
---



<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"> -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>

  <style>
 
    .offcanvas { border-right: 1px solid #e2e8f0; }
    .chart-container {
      position: relative;
      width: 100%;
      height: 70vh;
      min-height: 350px;
      max-height: 800px;
      border-radius: 20px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      overflow: visible;   /* keep outside labels visible */
    }
    canvas { display: block; }
    .sidebar-inner {
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .section-title {
      font-weight: 700;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
    }
    .section-title::before {
      content: '';
      width: 4px;
      height: 18px;
      background: #2563eb;
      border-radius: 4px;
    }
    .table-wrapper {
      max-height: 300px;
      overflow: auto;
      border-radius: 14px;
      border: 1px solid #dee2e6;
    }
    .table th { font-size: 0.8rem; font-weight: 700; background: #f8f9fa; }
    .table td { vertical-align: middle; font-size: 0.85rem; }
    td[contenteditable="true"] {
      outline: none;
      border-radius: 6px;
      padding: 0.4rem 0.6rem;
    }
    td[contenteditable="true"]:focus {
      background: #e6f0ff;
      box-shadow: inset 0 0 0 2px #3b82f6;
    }
    .color-picker {
      width: 40px;
      height: 28px;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 6px;
    }
    .live-badge {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
    }
    .form-label.small { font-size: 0.75rem; margin-bottom: 2px; }
  </style>


  
  <div class="container-fluid py-3 px-3 px-md-4">
    <div class="row g-3">
      <div class="col-lg-4 d-none d-lg-block">
        <div class="sidebar-inner bg-white rounded-4 shadow-sm border" id="sidebarContentDesktop"></div>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarOffcanvas">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Chart Settings</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div class="offcanvas-body" id="sidebarContentMobile"></div>
      </div>
      <div class="col-lg-8">
        <div class="chart-container" id="chartWrapper">
          <canvas id="chartCanvas"></canvas>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2 px-2">
          <span id="liveIndicator" class="live-badge bg-success text-white">🟢 Live Preview</span>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="liveToggle" checked>
            <label class="form-check-label small" for="liveToggle">Auto-update</label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="{{ '/assets/js/tools/pie-chart.js' | relative_url }}"></script>