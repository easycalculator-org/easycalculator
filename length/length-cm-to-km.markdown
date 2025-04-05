---
layout: default
title: CM to KM Converter – Convert CM to KM Easily
permalink: /length-converter/cm-to-km
description: "Easily convert centimeters to kilometers with our accurate and quick online tool. Great for large-scale calculations and mapping."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">CM to KM Converter</h2>
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

        let result = inputValue / 100000; // Convert cm to km
        resultElement.innerText = result.toFixed(5) + " km";
    }
</script>