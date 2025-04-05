---
layout: default
title: KM to CM Converter – Convert Kilometers to Centimeters Instantly
permalink: /length-converter/km-to-cm
description: "Instantly convert kilometers to centimeters with our easy tool. Get fast, accurate results for mapping, science, and engineering."
--- 



<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Kilometers to Centimeters Converter</h2>
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

        let result = inputValue * 100000; // Convert kilometers to centimeters
        resultElement.innerText = result.toFixed(2) + " cm";
    }
</script>