---
layout: default
title: BMI Calculator - Body Mass Index Calculator Online 2025 
permalink: /bmi-calculator
description: "Free BMI Calculator 2025 – Check your Body Mass Index online using height and weight. Find out if you are underweight, healthy, overweight, or obese instantly."
image: "/assets/images/bmi-calculator.png"
last_modified_at: 2026-02-03
---
<style>
        .calculator-container {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
            padding: 25px;
            text-align: center;
        }
        .calculator-body {
            padding: 30px;
        }
        .input-group {
            margin-bottom: 20px;
        }
        .input-group-text {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            color: white;
            border: none;
        }
        .form-control:focus {
            border-color: #6a11cb;
            box-shadow: 0 0 0 0.25rem rgba(106, 17, 203, 0.25);
        }
        .btn-calculate {
            background: linear-gradient(to right, #6a11cb, #2575fc);
            border: none;
            padding: 12px;
            font-weight: 600;
            width: 100%;
            margin-top: 10px;
        }
        .btn-calculate:hover {
            background: linear-gradient(to right, #5809b5, #1c64e0);
            transform: translateY(-2px);
            transition: all 0.3s;
        }
        .result-container {
            display: none;
            background: #f8f9fa;
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
        }
        .bmi-value {
            font-size: 3rem;
            font-weight: 700;
            margin: 10px 0;
        }
        .bmi-category {
            font-size: 1.5rem;
            font-weight: 600;
            padding: 5px 15px;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 15px;
        }
        .progress {
            height: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }
        .progress-bar {
            transition: width 1s ease-in-out;
        }
        .bmi-scale {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            font-size: 0.85rem;
            color: #6c757d;
        }
        .info-container {
            background: #e9ecef;
            border-radius: 15px;
            padding: 20px;
            margin-top: 30px;
        }
        .info-title {
            color: #6a11cb;
            font-weight: 600;
            margin-bottom: 15px;
        }
        .category-underweight { color: #ffc107; }
        .category-normal { color: #28a745; }
        .category-overweight { color: #fd7e14; }
        .category-obese { color: #dc3545; }
    </style>
   <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="calculator-container">
                    <div class="header">
                        <h1><i class="fa-solid fa-calculator"></i> BMI Calculator</h1>
                        <p class="mb-0">Calculate your Body Mass Index</p>
                    </div>
                    <div class="calculator-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fa-solid fa-ruler-combined"></i></span>
                                    <input type="number" class="form-control" id="height" placeholder="Height (cm)" min="50" max="250">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fa-solid fa-gauge"></i></span>
                                    <input type="number" class="form-control" id="weight" placeholder="Weight (kg)" min="10" max="300">
                                </div>
                            </div>
                        </div> 
                        <button class="btn btn-calculate btn-lg" id="calculateBtn"> Calculate BMI <i class="bi bi-arrow-right"></i> </button>
                        <div class="result-container" id="resultContainer">
                            <h3>Your BMI Result</h3>
                            <div class="bmi-value" id="bmiValue">--</div>
                            <div class="bmi-category" id="bmiCategory">--</div>
                            <div class="progress">
                                <div class="progress-bar" id="bmiProgress" role="progressbar" style="width: 0%;"></div>
                            </div>
                            <div class="bmi-scale">
                                <span>Underweight (<18.5)</span>
                                <span>Normal (18.5-24.9)</span>
                                <span>Overweight (25-29.9)</span>
                                <span>Obese (30+)</span>
                            </div>
                        </div>
                        <div class="info-container">
                            <h4 class="info-title"><i class="bi bi-info-circle"></i> About BMI</h4>
                            <p>Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
                            <div class="row text-center">
                                <div class="col-6 col-md-3">
                                    <div class="category-underweight"><i class="fa-solid fa-circle"></i> Underweight  </div>
                                    <small>BMI < 18.5</small>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="category-normal"><i class="fa-solid fa-circle"></i> Normal </div>
                                    <small>BMI 18.5 - 24.9</small>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="category-overweight"><i class="fa-solid fa-circle"></i> Overweight </div>
                                    <small>BMI 25 - 29.9</small>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="category-obese"><i class="fa-solid fa-circle"></i> Obese</div>
                                    <small>BMI ≥ 30</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
<script>
        document.addEventListener('DOMContentLoaded', function() {
            const calculateBtn = document.getElementById('calculateBtn');
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const resultContainer = document.getElementById('resultContainer');
            const bmiValue = document.getElementById('bmiValue');
            const bmiCategory = document.getElementById('bmiCategory');
            const bmiProgress = document.getElementById('bmiProgress');
            calculateBtn.addEventListener('click', function() {
                const height = parseFloat(heightInput.value) / 100; // convert cm to m
                const weight = parseFloat(weightInput.value);
                if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                    alert('Please enter valid height and weight values.');
                    return;
                }
                const bmi = weight / (height * height);
                const roundedBmi = bmi.toFixed(1);
                bmiValue.textContent = roundedBmi;
                let category = '';
                let categoryClass = '';
                let progressWidth = 0;
                let progressColor = '';
                if (bmi < 18.5) {
                    category = 'Underweight';
                    categoryClass = 'category-underweight';
                    progressWidth = (bmi / 18.5) * 25;
                    progressColor = '#ffc107';
                } else if (bmi >= 18.5 && bmi < 25) {
                    category = 'Normal Weight';
                    categoryClass = 'category-normal';
                    progressWidth = 25 + ((bmi - 18.5) / 6.5) * 25;
                    progressColor = '#28a745';
                } else if (bmi >= 25 && bmi < 30) {
                    category = 'Overweight';
                    categoryClass = 'category-overweight';
                    progressWidth = 50 + ((bmi - 25) / 5) * 25;
                    progressColor = '#fd7e14';
                } else {
                    category = 'Obese';
                    categoryClass = 'category-obese';
                    progressWidth = 75 + Math.min(25, ((bmi - 30) / 20) * 25);
                    progressColor = '#dc3545';
                }
                bmiCategory.textContent = category;
                bmiCategory.className = 'bmi-category ' + categoryClass;
                bmiProgress.style.width = progressWidth + '%';
                bmiProgress.style.backgroundColor = progressColor;
                resultContainer.style.display = 'block';
                // Smooth scroll to results
                resultContainer.scrollIntoView({ behavior: 'smooth' });
            });
        });
    </script>