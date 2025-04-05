---
layout: default
title: MM to KM Converter – Convert Millimeters to Kilometers Online
permalink: /length-converter/mm-to-km
description: "Convert millimeters to kilometers accurately with our instant online tool. Perfect for scientific and large-scale measurement needs."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Millimeters to Kilometers Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in mm">
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

        let result = inputValue / 1000000; // Convert millimeters to kilometers
        resultElement.innerText = result.toFixed(6) + " km";
    }
</script>