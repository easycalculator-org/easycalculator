---
layout: default
title: Miles to Yards Converter – Fast Miles to Yards Conversion
permalink: /length-converter/miles-to-yards
description: "Convert miles to yards in seconds with our accurate online tool. Great for sports, road distances, and measurement needs."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Miles to Yards Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in miles">
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

        let result = inputValue * 1760; // Convert miles to yards
        resultElement.innerText = result.toFixed(2) + " yards";
    }
</script>