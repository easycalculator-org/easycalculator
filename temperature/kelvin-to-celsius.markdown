---
layout: default
title: Kelvin to Celsius Calculator - Convert K to °C Easily
permalink: /kelvin-to-celsius/
description: "Convert Kelvin to Celsius quickly and accurately with our easy-to-use calculator! Perfect for science, weather, and school projects. Get results instantly!"
---
<div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white text-center">
          <h4>Kelvin to Celsius Calculator</h4>
        </div>
        <div class="card-body">
          <form id="converter-form">
            <div class="mb-3">
              <label for="kelvinInput" class="form-label">Kelvin</label>
              <input type="number" class="form-control" id="kelvinInput" placeholder="Enter temperature in Kelvin">
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
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-celsius">Fahrenheit to Celsius</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-kelvin">Celsius to Kelvin</a>
  </div>
 
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/fahrenheit-to-kelvin">Fahrenheit to Kelvin</a>
  </div>
  <div class="col-auto">
    <a class="btn btn-light shadow-sm" href="/celsius-to-fahrenheit">Celsius to Fahrenheit</a>
  </div>
</div>

  <script src="{{ '/assets/js/temp.js' | relative_url }}"></script>