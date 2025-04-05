---
layout: default
title: Yards to Meters Converter – Convert Yards to Meters Easily
permalink: /length-converter/yards-to-meters
description: "Get fast and precise yards to meters conversion with our simple online tool. Great for athletics, surveying, and more."
---

<div class="container p-4">
    <div class="card shadow-lg p-4 col-12 col-sm-8 col-md-6">
        <h2 class="text-center mb-4">Yards to Meters Converter</h2>
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

        let result = inputValue * 0.9144; // Convert yards to meters
        resultElement.innerText = result.toFixed(4) + " meters";
    }
</script>