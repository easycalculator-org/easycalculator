---
layout: default
title: CM to Inches Converter – Quick Centimeters to Inches Conversion
permalink: /length-converter/cm-to-inches
description: "Convert centimeters to inches instantly with our simple and accurate tool. Perfect for international sizing and measurements."
---
 <style>
         .converter-card {
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-radius: 10px;
            border: none;
        }
        .result-card {
            background: linear-gradient(135deg, #e3f2fd, #bbdefb);
        }
        .section-title {
            position: relative;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .section-title:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 4px;
            background: #0d6efd;
            border-radius: 2px;
        }
        .popular-conversion {
            transition: all 0.3s ease;
        }
        .popular-conversion:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .conversion-example {
            border-left: 3px solid #0d6efd;
            background-color: #f8f9fa;
        }
        .faq-item {
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        .feature-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #e3f2fd;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            flex-shrink: 0;
        }
        .icon-primary {
            color: #0d6efd;
        }
        .btn-convert {
            background: linear-gradient(135deg, #0d6efd, #0b5ed7);
            border: none;
            transition: all 0.3s ease;
        }
        .btn-convert:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
        }
    </style>
<!-- Main Content -->
<div class="container py-5">
        <div class="row g-4">
            <!-- Converter Section - Left Column -->
            <div class="col-lg-4">
                <div class="converter-card card">
                    <div class="card-header bg-primary text-white">
                        <h3 class="mb-0"><i class="fas fa-calculator me-2"></i>Conversion Tool</h3>
                    </div>
                    <div class="card-body">
                        <div class="mb-4">
                            <label for="cmInput" class="form-label fw-bold"><i class="fas fa-ruler-vertical me-1"></i> Enter Centimeters:</label>
                            <div class="input-group">
                                <input type="number" class="form-control form-control-lg" id="cmInput" placeholder="Enter cm" step="0.01" min="0">
                                <span class="input-group-text bg-light">cm</span>
                            </div>
                        </div>
                        <button id="convertBtn" class="btn btn-convert btn-lg w-100 mb-4">
                            <i class="fas fa-sync-alt me-2"></i>Convert to Inches
                        </button>
                        <div class="card result-card">
                            <div class="card-header bg-info text-white">
                                <i class="fas fa-chart-bar me-2"></i>Conversion Results
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label fw-bold"><i class="fas fa-ruler me-1"></i> Inches:</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="inchesResult" readonly>
                                        <span class="input-group-text bg-light">in</span>
                                    </div>
                                </div>
                                <div>
                                    <label class="form-label fw-bold"><i class="fas fa-ruler-combined me-1"></i> Feet:</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="feetResult" readonly>
                                        <span class="input-group-text bg-light">ft</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h5 class="mb-3"><i class="fas fa-bolt me-2"></i>Quick Conversions</h5>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action popular-conversion" data-cm="10">
                                    <div class="d-flex justify-content-between">
                                        <span>10 cm</span>
                                        <span class="fw-bold">3.937 in</span>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action popular-conversion" data-cm="20">
                                    <div class="d-flex justify-content-between">
                                        <span>20 cm</span>
                                        <span class="fw-bold">7.874 in</span>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action popular-conversion" data-cm="30">
                                    <div class="d-flex justify-content-between">
                                        <span>30 cm</span>
                                        <span class="fw-bold">11.811 in</span>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action popular-conversion" data-cm="50">
                                    <div class="d-flex justify-content-between">
                                        <span>50 cm</span>
                                        <span class="fw-bold">19.685 in</span>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action popular-conversion" data-cm="100">
                                    <div class="d-flex justify-content-between">
                                        <span>100 cm</span>
                                        <span class="fw-bold">39.37 in</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Article Content - Right Column -->
            <div class="col-lg-8">
                <div class="converter-card card">
                    <div class="card-body">
                        <!-- Introduction -->
                        <section class="mb-5">
                            <h1 class="section-title"><i class="fas fa-tachometer-alt me-2 icon-primary"></i>CM to Inches Converter</h1>
                            <p class="lead">Looking to convert centimeters to inches instantly? Our CM to Inches Converter is a fast, reliable, and easy-to-use tool that helps you convert any length from centimeters to inches or even to feet in just a few seconds.</p>
                            <div class="row mt-4">
                                <div class="col-md-4 mb-3">
                                    <div class="d-flex">
                                        <div class="feature-icon">
                                            <i class="fas fa-bolt text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h5>Instant Results</h5>
                                            <p class="mb-0">Get conversions in milliseconds</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="d-flex">
                                        <div class="feature-icon">
                                            <i class="fas fa-check-circle text-success fs-4"></i>
                                        </div>
                                        <div>
                                            <h5>100% Accurate</h5>
                                            <p class="mb-0">Precise calculations every time</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="d-flex">
                                        <div class="feature-icon">
                                            <i class="fas fa-lock text-info fs-4"></i>
                                        </div>
                                        <div>
                                            <h5>No Data Stored</h5>
                                            <p class="mb-0">Your conversions remain private</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Why Use -->
                        <section class="mb-5">
                            <h2 class="section-title"><i class="fas fa-question-circle me-2 icon-primary"></i>Why Use a CM to Inches Converter?</h2>
                            <p>Whether you're measuring your height, converting fabric lengths, or handling engineering or construction tasks, converting from cm to inches is a common need. Our CM to Inches Converter Online ensures 100% accuracy and saves you time.</p>
                        </section>
                        <!-- Conversion Examples -->
                        <section class="mb-5">
                            <h2 class="section-title"><i class="fas fa-list me-2 icon-primary"></i>CM to Inches to Feet Conversion</h2>
                            <p>Need to know how many inches or feet your measurement is? Here are some examples:</p>
                            <div class="row mt-4">
                                <div class="col-md-6 mb-3">
                                    <div class="p-3 conversion-example">
                                        <h5><i class="fas fa-arrow-right me-2"></i>10 cm to inches</h5>
                                        <p class="mb-1">3.937 inches ≈ 0.328 feet</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="p-3 conversion-example">
                                        <h5><i class="fas fa-arrow-right me-2"></i>15 cm to inches</h5>
                                        <p class="mb-1">5.905 inches ≈ 0.492 feet</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="p-3 conversion-example">
                                        <h5><i class="fas fa-arrow-right me-2"></i>20 cm to inches</h5>
                                        <p class="mb-1">7.874 inches ≈ 0.656 feet</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="p-3 conversion-example">
                                        <h5><i class="fas fa-arrow-right me-2"></i>40 cm to inches</h5>
                                        <p class="mb-1">15.748 inches ≈ 1.312 feet</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Height Conversion -->
                        <section class="mb-5">
                            <h2 class="section-title"><i class="fas fa-user me-2 icon-primary"></i>CM to Inches Converter for Height</h2>
                            <p>Trying to convert your height from cm to inches? This is especially helpful for people comparing height charts or using international sizing standards.</p>
                            <div class="alert alert-info mt-3">
                                <h5><i class="fas fa-info-circle me-2"></i>Example height conversions:</h5>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <p class="mb-1"><strong>5 cm:</strong> 1.969 inches</p>
                                    </div>
                                    <div class="col-md-4">
                                        <p class="mb-1"><strong>3 cm:</strong> 1.181 inches</p>
                                    </div>
                                    <div class="col-md-4">
                                        <p class="mb-1"><strong>15 cm:</strong> 5.905 inches</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- How to Use -->
                        <section class="mb-5">
                            <h2 class="section-title"><i class="fas fa-cogs me-2 icon-primary"></i>How to Use Our Online Converter</h2>
                            <div class="row mt-4">
                                <div class="col-md-4 mb-4">
                                    <div class="text-center p-3">
                                        <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                                            <i class="fas fa-keyboard fs-2"></i>
                                        </div>
                                        <h5>Enter Centimeters</h5>
                                        <p class="mb-0">Type the value in centimeters in the input field</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="text-center p-3">
                                        <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                                            <i class="fas fa-exchange-alt fs-2"></i>
                                        </div>
                                        <h5>Click Convert</h5>
                                        <p class="mb-0">Press the convert button to get instant results</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="text-center p-3">
                                        <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                                            <i class="fas fa-chart-line fs-2"></i>
                                        </div>
                                        <h5>View Results</h5>
                                        <p class="mb-0">See the conversion in inches and feet</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Popular Conversions -->
                        <section class="mb-5">
                            <h2 class="section-title"><i class="fas fa-star me-2 icon-primary"></i>Popular Conversions</h2>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <div class="card popular-conversion">
                                        <div class="card-body text-center">
                                            <h3 class="text-primary">10 cm</h3>
                                            <p class="fs-5 mb-0">3.937 inches</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card popular-conversion">
                                        <div class="card-body text-center">
                                            <h3 class="text-primary">20 cm</h3>
                                            <p class="fs-5 mb-0">7.874 inches</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card popular-conversion">
                                        <div class="card-body text-center">
                                            <h3 class="text-primary">5 cm</h3>
                                            <p class="fs-5 mb-0">1.969 inches</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- FAQs -->
                        <section>
                            <h2 class="section-title"><i class="fas fa-question-circle me-2 icon-primary"></i>Frequently Asked Questions</h2>
                            <div class="accordion" id="faqAccordion">
                                <div class="accordion-item faq-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                                            <i class="fas fa-question me-2"></i>Q1. How many inches is 10 cm?
                                        </button>
                                    </h2>
                                    <div id="faqOne" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            10 centimeters is equal to 3.937 inches.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item faq-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                                            <i class="fas fa-question me-2"></i>Q2. How do you convert cm to inches manually?
                                        </button>
                                    </h2>
                                    <div id="faqTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            To convert cm to inches manually, multiply the centimeter value by 0.3937. For example, 15 cm × 0.3937 = 5.9055 inches.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item faq-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                                            <i class="fas fa-question me-2"></i>Q3. Can I use this converter for height?
                                        </button>
                                    </h2>
                                    <div id="faqThree" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            Yes! Our CM to Inches Converter is perfect for converting human height from centimeters to inches or feet.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item faq-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFour">
                                            <i class="fas fa-question me-2"></i>Q4. What is the formula for cm to inches?
                                        </button>
                                    </h2>
                                    <div id="faqFour" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            1 cm = 0.3937 inches. So, the formula is: inches = cm × 0.3937
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item faq-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqFive">
                                            <i class="fas fa-question me-2"></i>Q5. Is this converter free to use?
                                        </button>
                                    </h2>
                                    <div id="faqFive" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body">
                                            Yes, our converter is completely free and available online 24/7 for your convenience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>
        document.addEventListener('DOMContentLoaded', function() {
            // Get DOM elements
            const cmInput = document.getElementById('cmInput');
            const convertBtn = document.getElementById('convertBtn');
            const inchesResult = document.getElementById('inchesResult');
            const feetResult = document.getElementById('feetResult');
            const quickConversions = document.querySelectorAll('.popular-conversion');
            
            // Conversion function
            function convertCmToInches() {
                const cmValue = parseFloat(cmInput.value);
                
                if (isNaN(cmValue)) {
                    alert('Please enter a valid number for centimeters.');
                    return;
                }
                
                // Convert cm to inches (1 cm = 0.3937 inches)
                const inches = cmValue * 0.3937;
                const feet = inches / 12;
                
                // Display results with 3 decimal places
                inchesResult.value = inches.toFixed(3);
                feetResult.value = feet.toFixed(3);
            }
            
            // Event listeners
            convertBtn.addEventListener('click', convertCmToInches);
            
            cmInput.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    convertCmToInches();
                }
            });
            
            // Add event listeners to quick conversions
            quickConversions.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const cmValue = this.getAttribute('data-cm');
                    cmInput.value = cmValue;
                    convertCmToInches();
                });
            });
            
            // Initialize with a sample conversion
            cmInput.value = '10';
            convertCmToInches();
        });
    </script>