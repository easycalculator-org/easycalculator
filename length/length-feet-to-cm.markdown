---
layout: default
title: Feet to CM Converter – Easily Convert Feet to Centimeters
permalink: /length-converter/feet-to-cm
description: "Easily convert feet to centimeters with our fast and reliable converter. Get instant results for height, measurements, and more!"
---


<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Feet to CM Converter</h2>
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

        let result = inputValue * 30.48; // Convert feet to cm
        resultElement.innerText = result.toFixed(2) + " cm";
    }
</script>