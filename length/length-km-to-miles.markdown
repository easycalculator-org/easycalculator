---
layout: default
title: KM to Miles Converter – Quick Kilometers to Miles Conversion
permalink: /length-converter/km-to-miles
description: "Convert kilometers to miles with ease using our quick and accurate online converter. Great for travel, running, and distance calculations."
---



<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Kilometers to Miles Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in kilometers">
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

        let result = inputValue * 0.621371; // Convert kilometers to miles
        resultElement.innerText = result.toFixed(4) + " miles";
    }
</script>