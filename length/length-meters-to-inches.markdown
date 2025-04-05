---
layout: default
title: Meters to Inches Converter – Convert Meters to Inches Online
permalink: /length-converter/meters-to-inches
description: "Easily convert meters to inches with our fast and precise conversion tool. Great for home improvement, design, and engineering."
---


<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Meters to Inches Converter</h2>
        <div class="mb-3">
            <input type="number" id="inputValue" class="form-control shadow" placeholder="Enter value in meters">
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

        let result = inputValue * 39.3701; // Convert meters to inches
        resultElement.innerText = result.toFixed(2) + " inches";
    }
</script>