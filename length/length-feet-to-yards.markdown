---
layout: default
title: Feet to Yards Converter – Simple Feet to Yards Conversion
permalink: /length-converter/feet-to-yards
description: "Simple and fast feet to yards conversion tool. Easily switch between feet and yards for landscaping, sports, and construction."
---


<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Feet to Yards Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in feet">
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

        let result = inputValue / 3; // Convert feet to yards
        resultElement.innerText = result.toFixed(2) + " yards";
    }
</script>