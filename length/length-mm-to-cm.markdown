---
layout: default
title: MM to CM Converter – Convert Millimeters to Centimeters Instantly
permalink: /length-converter/mm-to-cm
description: "Quickly convert millimeters to centimeters with our precise and simple tool. Great for crafting, engineering, and precise measurements."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Millimeters to Centimeters Converter</h2>
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

        let result = inputValue / 10; // Convert millimeters to centimeters
        resultElement.innerText = result.toFixed(2) + " cm";
    }
</script>