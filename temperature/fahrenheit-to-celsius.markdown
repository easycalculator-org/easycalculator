---
layout: default
title: Fahrenheit to Celsius Converter - Convert °F to °C Easily
permalink: /fahrenheit-to-celsius/
description: "Easily convert Fahrenheit to Celsius with our simple online tool! Get quick and accurate temperature conversions in just a few clicks."
---

<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white text-center">
          <h4>Fahrenheit to Celsius Converter</h4>
        </div>
        <div class="card-body">
          <form id="converter-form">
            <div class="mb-3">
              <label for="fahrenheitInput" class="form-label">Fahrenheit</label>
              <input type="number" class="form-control" id="fahrenheitInput" placeholder="Enter temperature in °F">
            </div>
            <div class="mb-3 text-center">
              <button type="button" class="btn btn-primary" onclick="convertToCelsius()">Convert</button>
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
    <a class="btn btn-light shadow-sm" href="/celsius-to-kelvin">Celsius to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/kelvin-to-celsius">Kelvin to Celsius</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-kelvin">Fahrenheit to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-fahrenheit">Celsius to Fahrenheit</a>
  </div>
</div>

  <script src="{{ '/assets/js/fahrenheit-to-celsius.js' | relative_url }}"></script>