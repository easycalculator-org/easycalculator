---
layout: default
title: Celsius to Fahrenheit Converter - Convert °C to °F Easily
permalink: /celsius-to-fahrenheit/
description: "Easily convert Celsius (°C) to Fahrenheit (°F) with this fast and precise calculator. Ideal for weather, cooking, and science needs. Enter your value and get instant results!"
---

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white text-center">
          <h4>Celsius to Fahrenheit Converter</h4>
        </div>
        <div class="card-body">
          <form id="converter-form">
            <div class="mb-3">
              <label for="celsiusInput" class="form-label">Celsius</label>
              <input type="number" class="form-control" id="celsiusInput" placeholder="Enter temperature in Celsius">
            </div>
            <div class="mb-3 text-center">
              <button type="button" class="btn btn-primary" onclick="convertToFahrenheit()">Convert</button>
            </div>
            <div class="alert alert-info d-none font-monospace fs-3" id="result"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


<hr>

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/kelvin-to-fahrenheit">Kelvin to Fahrenheit</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-celsius">Fahrenheit to Celsius</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-kelvin">Celsius to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/kelvin-to-celsius">Kelvin to Celsius</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-kelvin">Fahrenheit to Kelvin</a>
  </div>
</div>


<script src="{{ '/assets/js/celsius-to-fahrenheit.js' | relative_url }}"></script>
