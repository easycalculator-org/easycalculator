---
layout: default
title: Inches to CM Converter – Convert Inches to Centimeters Quickly
permalink: /length-converter/inches-to-cm
description: "Instantly convert inches to centimeters with our easy and accurate converter. Great for measurements, crafts, and more!"
---


<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Inches to CM Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in inches">
        </div>
        <button class="btn btn-primary btn-shadow w-100" onclick="convert()">Convert</button>
        <div class="mt-3">
            <h4>Result: <span id="result">-</span></h4>
        </div>
    </div>
</div>

<script>
    function convert() {
        let inputValue = document.getElementById("inputValue").value;
        let resultElement = document.getElementById("result");

        if (inputValue === "" || isNaN(inputValue)) {
            resultElement.innerText = "Please enter a valid number";
            return;
        }

        let result = inputValue * 2.54; // Convert inches to cm
        resultElement.innerText = result.toFixed(2) + " cm";
    }
</script>