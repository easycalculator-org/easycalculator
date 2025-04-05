---
layout: default
title: CM to MM Converter – Convert Centimeters to Millimeters Instantly
permalink: /length-converter/cm-to-mm
description: "Instantly convert centimeters to millimeters with our quick and accurate online tool. Perfect for precise measurements and calculations!"
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">CM to MM Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in cm">
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

        let result = inputValue * 10; // Convert cm to mm
        resultElement.innerText = result.toFixed(2) + " mm";
    }
</script>