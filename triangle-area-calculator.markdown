---
layout: default
title: Triangle Area Calculator | find the area of a triangle
permalink: /triangle-area-calculator
description: "Easily calculate the area of a triangle with our Triangle Area Calculator. Use base-height, Heron's formula, or coordinates for accurate results. Fast and user-friendly."
---
<style>
.input-section{background-color:#f8f9fa;padding:25px}.result-section{background-color:#e9ecef;padding:25px}h2{color:#0d6efd;margin-bottom:20px;font-size:1.5rem}.triangle-diagram{width:100%;max-width:200px;margin:15px auto;display:block}.input-values,.result-title{margin-bottom:15px}.input-group-text{min-width:80px}.result-card{background:#fff;border-radius:8px;padding:20px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.calculation,.input-values{padding:10px;background:#f8f9fa;border-radius:5px}.result-title{color:#0d6efd;font-weight:600}.input-value{margin-bottom:5px}.calculation{font-size:1.1rem;margin:10px 0}.final-result{background:#d4edda;padding:15px;border-radius:8px;text-align:center;margin-top:15px;font-weight:600;font-size:1.2rem}.btn-calculate{background-color:#0d6efd;border:none;padding:8px 20px}.nav-tabs .nav-link{font-size:.9rem;padding:8px 15px}    
</style>
<div class="container">
   <div class="row calculator-container pt-4">
      <!-- Input Section -->
       <div class="col-md-6 input-section">
         <h2>Triangle Calculator</h2>
                
<ul class="nav nav-tabs" id="methodTabs" role="tablist">
   <li class="nav-item" role="presentation"><button class="nav-link active" id="base-height-tab" data-bs-toggle="tab" data-bs-target="#base-height" type="button" role="tab">Base & Height</button> </li>
   <li class="nav-item" role="presentation"><button class="nav-link" id="three-sides-tab" data-bs-toggle="tab" data-bs-target="#three-sides" type="button" role="tab">Three Sides</button></li>
   <li class="nav-item" role="presentation"><button class="nav-link" id="sas-tab" data-bs-toggle="tab" data-bs-target="#sas" type="button" role="tab">Two Sides & Angle</button></li>
     </ul>
                
<div class="tab-content" id="methodTabsContent">
                    <!-- Base & Height Method -->
                    <div class="tab-pane fade show active" id="base-height" role="tabpanel">
                        <div class="triangle-container">
                            <svg class="triangle-diagram" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                                <line x1="100" y1="30" x2="100" y2="130" stroke="#dc3545" stroke-width="2" stroke-dasharray="5,3"/>
                                <line x1="30" y1="135" x2="170" y2="135" stroke="#0d6efd" stroke-width="2"/>
                                <text x="100" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">Base</text>
                                <text x="110" y="80" fill="#dc3545" font-size="12">Height</text>
                            </svg>
                        </div>
                        
 <form id="baseHeightForm">
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Base</span>
                                    <input type="number" class="form-control" id="base" step="any" min="0" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Height</span>
                                    <input type="number" class="form-control" id="height" step="any" min="0" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-calculate">Calculate Area</button>
                        </form>
                    </div>
                    
 <!-- Three Sides Method -->
 <div class="tab-pane fade" id="three-sides" role="tabpanel">
                        <div class="triangle-container">
                            <svg class="triangle-diagram" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                                <text x="30" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">a</text>
                                <text x="170" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">b</text>
                                <text x="100" y="20" text-anchor="middle" fill="#0d6efd" font-size="12">c</text>
                            </svg>
                        </div>
                        
 <form id="threeSidesForm">
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Side a</span>
                                    <input type="number" class="form-control" id="sideA" step="any" min="0" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Side b</span>
                                    <input type="number" class="form-control" id="sideB" step="any" min="0" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Side c</span>
                                    <input type="number" class="form-control" id="sideC" step="any" min="0" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-calculate">Calculate Area</button>
                        </form>
                    </div>
                    
 <!-- SAS Method -->
   <div class="tab-pane fade" id="sas" role="tabpanel">
                        <div class="triangle-container">
                            <svg class="triangle-diagram" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                                <text x="30" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">a</text>
                                <text x="170" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">b</text>
                                <text x="70" y="100" fill="#dc3545" font-size="12">Angle</text>
                            </svg>
                        </div>
                        
 <form id="sasForm">
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Side a</span>
                                    <input type="number" class="form-control" id="sasSideA" step="any" min="0" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Side b</span>
                                    <input type="number" class="form-control" id="sasSideB" step="any" min="0" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text">Angle (°)</span>
                                    <input type="number" class="form-control" id="sasAngle" step="any" min="0" max="180" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-calculate">Calculate Area</button>
                        </form>
                    </div>
                </div>
            </div>
            
 <!-- Result Section -->
 <div class="col-md-6 result-section">
                <h2>Results</h2>
                <div id="resultContainer" class="d-none">
                    <div class="result-card">
                        <div class="result-title">Your Triangle</div>
                        <div id="diagramResult" class="triangle-container"></div>
                        
<div class="input-values">
                            <div class="result-title">Measurements</div>
                            <div id="inputValues"></div>
                        </div>
                        
  <div class="calculation">
                            <div class="result-title">Calculation</div>
                            <div id="calculationSteps"></div>
                        </div>
                        
  <div class="final-result">
                            Triangle Area: <span id="finalResult"></span> square units
                        </div>
                    </div>
                </div>
                <div id="emptyResult">
                    <div class="alert alert-info">
                        <p>Select a calculation method, enter your values, and click "Calculate Area" to see results.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

 <script src="{{ '/assets/js/triangle-area.js' | relative_url }}"></script>
