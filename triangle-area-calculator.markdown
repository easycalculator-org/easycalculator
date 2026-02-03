---
layout: default
title: Triangle Area Calculator | find the area of a triangle
permalink: /triangle-area-calculator
description: "Easily calculate the area of a triangle with our Triangle Area Calculator. Use base-height, Heron's formula, or coordinates for accurate results. Fast and user-friendly."
image: "/assets/images/area-of-triangle-formula-base-height.jpg"
last_modified_at: 2026-02-03
---
<style>
.input-section{background-color:#f8f9fa;padding:25px}.result-section{background-color:#e9ecef;padding:25px}h2{color:#0d6efd;margin-bottom:20px;font-size:1.5rem}.triangle-diagram{width:100%;max-width:200px;margin:15px auto;display:block}.input-values,.result-title{margin-bottom:15px}.input-group-text{min-width:80px}.result-card{background:#fff;border-radius:8px;padding:20px;box-shadow:0 2px 5px rgba(0,0,0,.1)}.calculation,.input-values{padding:10px;background:#f8f9fa;border-radius:5px}.result-title{color:#0d6efd;font-weight:600}.input-value{margin-bottom:5px}.calculation{font-size:1.1rem;margin:10px 0}.final-result{background:#d4edda;padding:15px;border-radius:8px;text-align:center;margin-top:15px;font-weight:600;font-size:1.2rem}.btn-calculate{background-color:#0d6efd;border:none;padding:8px 20px}.nav-tabs .nav-link{font-size:.9rem;padding:8px 15px}    
</style>
<div class="container">
  <div class="row calculator-container pt-4">
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
                        
<div class="input-values"> <div class="result-title">Measurements</div> <div id="inputValues"></div>  </div>  
<div class="calculation"> <div class="result-title">Calculation</div><div id="calculationSteps"></div> </div>                      
 <div class="final-result">  Triangle Area: <span id="finalResult"></span> square units  </div>
 </div> </div>
    <div id="emptyResult">  <div class="alert alert-info"> <p>Select a calculation method, enter your values, and click "Calculate Area" to see results.</p> </div>
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
  <h1>Triangle Calculator – Calculate Area, Perimeter & Angles Online</h1>
   <p>A <strong >Triangle Calculator</strong> is a free online tool that helps you calculate the <strong >area, perimeter, and angles of a triangle</strong> using different known values. Whether you know the <strong >base and height</strong>, <strong>three sides</strong>, or <strong>two sides with an included angle</strong>, this calculator gives instant and accurate results.</p>
<p>At <strong>easycalculator.org</strong>, our Triangle Calculator is designed for <strong>students, teachers, engineers, and exam aspirants</strong> who want fast and error-free triangle calculations.</p>
<!-- What is Triangle -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold mb-3">What Is a Triangle?</h2>
      <p>A <strong>triangle</strong> is a geometric shape with <strong>three sides, three angles, and three vertices</strong>. The sum of all interior angles of a triangle is always <strong>180°</strong>.</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">📐 Used in mathematics and geometry</li>
        <li class="list-group-item">🏗️ Important in construction and architecture</li>
        <li class="list-group-item">⚙️ Common in engineering and design</li>
        <li class="list-group-item">📘 Frequently asked in school and competitive exams</li>
      </ul>
    </section>
    <!-- Calculation Methods -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold mb-4">Triangle Calculation Methods</h2>
      <!-- Base & Height -->
      <div class="card mb-4 border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 fw-semibold text-primary">1. Using Base & Height</h3>
          <p>  This method is used when the <strong>base</strong> and <strong>height</strong> of the triangle are known.</p>
          <div class="bg-light rounded p-3 mb-3">
            <strong>Formula:</strong> Area = ½ × Base × Height
          </div>
          <p class="mb-1"><strong>Example:</strong></p>
          <p class="mb-0">  Base = 10 cm, Height = 6 cm <br> <strong>Area = 30 cm²</strong> </p>
        </div>
      </div>
      <!-- Three Sides -->
      <div class="card mb-4 border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 fw-semibold text-primary">2. Using Three Sides (Heron’s Formula)</h3>
          <p>  When all three sides of a triangle are known, the calculator uses <strong>Heron’s Formula</strong>. </p>
          <div class="bg-light rounded p-3 mb-3">
            <p class="mb-1"><strong>s = (a + b + c) / 2</strong></p>
            <p class="mb-0"><strong>Area = √[ s(s − a)(s − b)(s − c) ]</strong></p>
          </div>
          <p> This method is ideal for <strong>scalene triangles</strong> where height is not available. </p>
        </div>
      </div>
      <!-- Two Sides & Angle -->
      <div class="card border-0 shadow-sm">
        <div class="card-body">
          <h3 class="h5 fw-semibold text-primary">3. Using Two Sides & Included Angle</h3>
          <p> This method is used when <strong>two sides</strong> and the<strong>included angle</strong> between them are known.</p>
          <div class="bg-light rounded p-3 mb-3">
            <strong>Formula:</strong> Area = ½ × a × b × sin(C)
          </div>
          <p> Commonly used in <strong>trigonometry</strong> and<strong>engineering calculations</strong>. </p>
        </div>
      </div>
    </section>
    <!-- Benefits -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold mb-3">Why Use Our Triangle Calculator?</h2>
      <div class="row g-3">
        <div class="col-md-6">✅ Instant & accurate calculations</div>
        <div class="col-md-6">✅ Mobile & desktop friendly</div>
        <div class="col-md-6">✅ No registration required</div>
        <div class="col-md-6">✅ Suitable for students & professionals</div>
      </div>
    </section>
    <!-- FAQs -->
    <section class="mb-5">
      <h2 class="h4 fw-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
      <div class="mb-3">
        <strong>What is a Triangle Calculator?</strong>
        <p class="mb-0">It is an online tool that calculates the area, perimeter, and angles of a triangle using given sides or angles. </p>
      </div>
      <div class="mb-3">
        <strong>Which formulas are used?</strong>
        <p class="mb-0"> Base–Height formula, Heron’s formula, and trigonometric sine formula. </p>
      </div>
      <div class="mb-3">
        <strong>Is this calculator accurate?</strong>
        <p class="mb-0">  Yes, it uses standard mathematical formulas to deliver precise results. </p>
      </div>
    </section>
</div>

 <script src="{{ '/assets/js/triangle-area.js' | relative_url }}"></script>