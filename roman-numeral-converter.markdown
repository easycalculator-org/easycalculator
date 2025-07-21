---
layout: default
title: Roman Numeral Converter – Convert Numbers to Roman & Vice Versa
permalink: /roman-numeral-converter
description: "Easily convert numbers to Roman numerals and Roman numerals to numbers using our free Roman Numeral Converter tool. Instant results, accurate conversions, and user-friendly interface!"
# image: "/assets/images/pregnancy-calculator.jpg"
---
<style>
        :root {
            --primary-color: #6c63ff;
            --secondary-color: #4d44db;
            --light-color: #f8f9fa;
            --dark-color: #343a40;
        }
        
     
        .converter-card {
            border-radius: 15px;
            border: none;
            box-shadow: 0 10px 30px rgba(108, 99, 255, 0.2);
            transition: transform 0.3s ease;
        }
        
        .converter-card:hover {
            transform: translateY(-5px);
        }
        
        .card-header {
            border-radius: 15px 15px 0 0 !important;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        }
        
        .btn-convert {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            border: none;
            padding: 10px 25px;
            border-radius: 50px;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
        }
        
        .btn-convert:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(108, 99, 255, 0.4);
        }
        
        .result-box {
            background-color: rgba(108, 99, 255, 0.05);
            border-left: 4px solid var(--primary-color);
            border-radius: 8px;
        }
        
        .input-field {
            position: relative;
        }
        
        .input-field i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--primary-color);
        }
        
        .input-field input {
            padding-left: 45px;
            border-radius: 8px;
            border: 1px solid #dee2e6;
            height: 50px;
        }
        
        @media (max-width: 768px) {
            .converter-col {
                margin-bottom: 30px;
            }
        }
    </style>
<div class="container py-5">
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Roman Numeral Converter</h1>
            <p class="lead text-muted">Convert between numbers and Roman numerals with ease</p>
        </div>
        
        <div class="row justify-content-center">
            <!-- Number to Roman Converter -->
            <div class="col-lg-5 col-md-6 converter-col">
                <div class="card converter-card h-100">
                    <div class="card-header text-white">
                        <h3 class="card-title text-center mb-0 py-2">
                            <i class="fas fa-digital-tachograph me-2"></i>Number to Roman
                        </h3>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="mb-4">
                            <label for="numberInput" class="form-label fw-bold">Enter a number (1-3999)</label>
                            <div class="input-field mb-3">
                                <i class="fas fa-keyboard"></i>
                                <input type="number" class="form-control" id="numberInput" min="1" max="3999" placeholder="e.g. 42">
                            </div>
                        </div>
                        
                        <div class="text-center mt-auto">
                            <button class="btn btn-convert text-white w-100" onclick="convertToRoman()">
                                <i class="fas fa-exchange-alt me-2"></i>Convert
                            </button>
                        </div>
                        
                        <div class="mt-4 p-3 result-box">
                            <h5 class="d-flex align-items-center">
                                <i class="fas fa-history me-2"></i>Result:
                            </h5>
                            <div id="romanResult" class="fs-4 fw-bold text-primary"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Roman to Number Converter -->
            <div class="col-lg-5 col-md-6 converter-col">
                <div class="card converter-card h-100">
                    <div class="card-header text-white">
                        <h3 class="card-title text-center mb-0 py-2">
                            <i class="fas fa-font me-2"></i>Roman to Number
                        </h3>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="mb-4">
                            <label for="romanInput" class="form-label fw-bold">Enter a Roman numeral</label>
                            <div class="input-field mb-3">
                                <i class="fas fa-text-height"></i>
                                <input type="text" class="form-control text-uppercase" id="romanInput" placeholder="e.g. XIV">
                            </div>
                        </div>
                        
                        <div class="text-center mt-auto">
                            <button class="btn btn-convert text-white w-100" onclick="convertToNumber()">
                                <i class="fas fa-exchange-alt me-2"></i>Convert
                            </button>
                        </div>
                        
                        <div class="mt-4 p-3 result-box">
                            <h5 class="d-flex align-items-center">
                                <i class="fas fa-history me-2"></i>Result:
                            </h5>
                            <div id="numberResult" class="fs-4 fw-bold text-primary"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="{{ '/assets/js/roman.js' | relative_url }}"></script>

