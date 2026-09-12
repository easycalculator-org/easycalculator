---
layout: default
title: "Percentage Error Calculator"
permalink: /percentage-error-calculator
description: "Use our free Percentage Error Calculator to calculate the percentage error between an experimental and accepted value. Get instant results with the formula, examples, and FAQs."
last_modified_at: 2026-09-11
---

<div class="row justify-content-center">
  <div class="col-12 col-md-9">

    <div class="card border-0 shadow-sm rounded-4">
      <div class="card-body p-4 p-md-5">

        <!-- Header -->
        <div class="text-center mb-4">
          <h1 class="fw-bold mb-2">Percentage Error Calculator</h1>
          <p class="text-muted mb-0">
            Calculate the percent error between an accepted value and an experimental value.
          </p>
        </div>

        <!-- Accepted Value -->
        <div class="mb-3">
          <label for="acceptedValue" class="form-label fw-semibold">
            Accepted Value
          </label>

          <div class="input-group input-group-lg">
            <input
              type="number"
              id="acceptedValue"
              class="form-control"
              placeholder="Example: 100"
              step="any"
            >
          </div>

          <div class="form-text">
            Enter the known, true, or accepted value.
          </div>
        </div>

        <!-- Experimental Value -->
        <div class="mb-4">
          <label for="experimentalValue" class="form-label fw-semibold">
            Experimental Value
          </label>

          <div class="input-group input-group-lg">
            <input
              type="number"
              id="experimentalValue"
              class="form-control"
              placeholder="Example: 95"
              step="any"
            >
          </div>

          <div class="form-text">
            Enter the measured or experimental value.
          </div>
        </div>

        <!-- Calculate Button -->
        <button
          type="button"
          id="calculateBtn"
          class="btn btn-primary btn-lg w-100 rounded-3 mb-3"
        >
          Calculate Percent Error
        </button>

        <!-- Error -->
        <div
          id="errorMessage"
          class="alert alert-danger d-none"
          role="alert"
        ></div>

        <!-- Result -->
        <div id="resultBox" class="d-none">

          <!-- Main Result -->
          <div class="bg-light rounded-4 p-4 text-center mb-4">

            <div class="text-muted mb-1">
              Percent Error
            </div>

            <div
              id="percentErrorResult"
              class="display-5 fw-bold text-primary"
            >
              <span id="percentError">0</span>%
            </div>

            <div class="small text-muted mt-2">
              Absolute difference from the accepted value
            </div>

          </div>

          <!-- Summary -->
          <div class="row g-3 mb-4">

            <div class="col-12 col-sm-6">
              <div class="bg-light rounded-3 p-3 h-100">

                <div class="small text-muted mb-1">
                  Accepted Value
                </div>

                <div class="fw-bold fs-5">
                  <span id="resultAcceptedValue">0</span>
                </div>

              </div>
            </div>

            <div class="col-12 col-sm-6">
              <div class="bg-light rounded-3 p-3 h-100">

                <div class="small text-muted mb-1">
                  Experimental Value
                </div>

                <div class="fw-bold fs-5">
                  <span id="resultExperimentalValue">0</span>
                </div>

              </div>
            </div>

          </div>

          <!-- Absolute Error -->
          <div class="bg-light rounded-3 p-3 mb-3">

            <div class="small text-muted mb-1">
              Absolute Error
            </div>

            <div class="fw-bold fs-5">
              <span id="absoluteError">0</span>
            </div>

          </div>

          <!-- Calculation -->
          <div class="border rounded-3 p-3 mb-3">

            <div class="fw-semibold mb-2">
              Calculation
            </div>

            <div
              id="calculationText"
              class="text-muted"
            ></div>

          </div>

          <!-- Formula -->
          <div class="bg-light rounded-3 p-3">

            <div class="small text-muted mb-1">
              Percent Error Formula
            </div>

            <div class="fw-semibold">
              Percent Error =
              |Experimental Value − Accepted Value|
              ÷ |Accepted Value| × 100
            </div>

          </div>

        </div>

        <!-- Note -->
        <div class="mt-4 pt-3 border-top">
          <p class="text-muted small mb-0">
            Percent error shows how far an experimental or measured value is
            from the accepted value. A smaller percent error means the measured
            value is closer to the accepted value.
          </p>
        </div>

      </div>
    </div>

  </div>
</div>


<script>
    
(function () {

  const acceptedValue =
    document.getElementById("acceptedValue");

  const experimentalValue =
    document.getElementById("experimentalValue");

  const calculateBtn =
    document.getElementById("calculateBtn");

  const errorMessage =
    document.getElementById("errorMessage");

  const resultBox =
    document.getElementById("resultBox");

  const percentErrorResult =
    document.getElementById("percentErrorResult");

  const percentError =
    document.getElementById("percentError");

  const resultAcceptedValue =
    document.getElementById("resultAcceptedValue");

  const resultExperimentalValue =
    document.getElementById("resultExperimentalValue");

  const absoluteError =
    document.getElementById("absoluteError");

  const calculationText =
    document.getElementById("calculationText");


  // Format numbers: maximum 4 decimal places
  function formatNumber(value) {

    if (!Number.isFinite(value)) {
      return "0";
    }

    return Number(value.toFixed(4)).toString();

  }


  // Show error
  function showError(message) {

    errorMessage.textContent = message;

    errorMessage.classList.remove("d-none");

    resultBox.classList.add("d-none");

  }


  // Calculate percent error
  function calculatePercentError() {

    errorMessage.classList.add("d-none");

    const accepted =
      parseFloat(acceptedValue.value);

    const experimental =
      parseFloat(experimentalValue.value);


    // Validate accepted value
    if (!Number.isFinite(accepted) || accepted === 0) {

      showError(
        "Please enter a valid accepted value other than 0."
      );

      return;

    }


    // Validate experimental value
    if (!Number.isFinite(experimental)) {

      showError(
        "Please enter a valid experimental value."
      );

      return;

    }


    // Calculate absolute error
    const difference =
      experimental - accepted;

    const error =
      Math.abs(difference);

    // Calculate percent error
    const percentage =
      (error / Math.abs(accepted)) * 100;


    // Display results
    percentError.textContent =
      formatNumber(percentage);

    resultAcceptedValue.textContent =
      formatNumber(accepted);

    resultExperimentalValue.textContent =
      formatNumber(experimental);

    absoluteError.textContent =
      formatNumber(error);


    // Keep percentage and % symbol together
    percentErrorResult.className =
      "display-5 fw-bold text-primary";


    // Calculation
    calculationText.innerHTML =
      "|" +
      formatNumber(experimental) +
      " − " +
      formatNumber(accepted) +
      "| ÷ |" +
      formatNumber(accepted) +
      "| × 100 = " +
      "<strong>" +
      formatNumber(percentage) +
      "%</strong>";


    // Show result
    resultBox.classList.remove("d-none");

  }


  // Calculate button
  calculateBtn.addEventListener(
    "click",
    calculatePercentError
  );


  // Enter key support
  [acceptedValue, experimentalValue].forEach(function (input) {

    input.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          calculatePercentError();
        }

      }
    );

  });


})();
</script>
