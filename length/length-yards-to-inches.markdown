---
layout: default
title: Yards to Inches Converter – Accurate Yards to Inches Conversion
permalink: /length-converter/yards-to-inches
description: "Convert yards to inches quickly and accurately with our online tool. Ideal for sewing, sports fields, and measurements."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Yards to Inches Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in yards">
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

        let result = inputValue * 36; // Convert yards to inches
        resultElement.innerText = result.toFixed(2) + " inches";
    }
</script>