---
layout: default
title: Free Annuity Calculator – Estimate Payments, FV & PV Instantly
permalink: /annuity-calculator
description: "Use our free annuity calculator to estimate payments, FV, and PV in seconds. Perfect for retirement, SIP, and financial planning."
#image: "/assets/images/cagr-calculator.png"
last_modified_at: 2026-04-22
---

<div class="row justify-content-center">
  <div class="col-lg-10">
    <div class="card border-0 shadow-sm overflow-hidden">
      <div class="card-body p-0">
        <div class="row g-0">
          <!-- LEFT: Calculator -->
          <div class="col-lg-8 p-4 p-md-5">

            <h1 class="h3 fw-bold mb-2">
              Annuity Calculator – Calculate PV, FV &amp; Payments
            </h1>

            <p class="text-muted mb-4">
              Calculate the present value (PV), future value (FV), or required
              payment (PMT) of an annuity using your payment, interest rate,
              and number of periods.
            </p>

            <!-- Calculate Buttons -->
            <div class="mb-4">
              <label class="form-label fw-semibold mb-2">
                What do you want to calculate?
              </label>

              <div class="row g-2" id="annuityModeButtons">

                <div class="col-12 col-md-4">
                  <button type="button"
                          class="btn btn-primary w-100 mode-btn active"
                          data-mode="fv">
                    <strong>Future Value</strong>
                    <small class="d-block opacity-75">FV</small>
                  </button>
                </div>

                <div class="col-12 col-md-4">
                  <button type="button"
                          class="btn btn-outline-primary w-100 mode-btn"
                          data-mode="pv">
                    <strong>Present Value</strong>
                    <small class="d-block opacity-75">PV</small>
                  </button>
                </div>

                <div class="col-12 col-md-4">
                  <button type="button"
                          class="btn btn-outline-primary w-100 mode-btn"
                          data-mode="pmt">
                    <strong>Payment</strong>
                    <small class="d-block opacity-75">PMT</small>
                  </button>
                </div>

              </div>
            </div>

            <!-- Annuity Type -->
            <div class="mb-4">
              <label class="form-label fw-semibold mb-2">
                Annuity Type
              </label>

              <div class="row g-2" id="annuityTypeButtons">

                <div class="col-12 col-md-6">
                  <button type="button"
                          class="btn btn-outline-secondary w-100 type-btn active"
                          data-type="ordinary">
                    <strong>Ordinary Annuity</strong>
                    <small class="d-block text-muted">
                      Payment at end of each period
                    </small>
                  </button>
                </div>

                <div class="col-12 col-md-6">
                  <button type="button"
                          class="btn btn-outline-secondary w-100 type-btn"
                          data-type="due">
                    <strong>Annuity Due</strong>
                    <small class="d-block text-muted">
                      Payment at beginning of each period
                    </small>
                  </button>
                </div>

              </div>
            </div>

            <!-- Inputs -->
            <div class="row g-3">

              <div class="col-md-6">
                <label for="annuityCurrency" class="form-label fw-semibold">
                  Currency
                </label>

                <select id="annuityCurrency" class="form-select">
                  <option value="USD">USD – US Dollar</option>
                  <option value="INR">INR – Indian Rupee</option>
                  <option value="EUR">EUR – Euro</option>
                  <option value="GBP">GBP – British Pound</option>
                  <option value="CAD">CAD – Canadian Dollar</option>
                  <option value="AUD">AUD – Australian Dollar</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="payment" class="form-label fw-semibold">
                  Payment per Period
                </label>

                <div class="input-group">
                  <span class="input-group-text currency-symbol">$</span>
                  <input type="number"
                         id="payment"
                         class="form-control"
                         value="500"
                         min="0"
                         step="0.01"
                         placeholder="500">
                </div>
              </div>

              <div class="col-md-6">
                <label for="rate" class="form-label fw-semibold">
                  Interest Rate per Period
                </label>

                <div class="input-group">
                  <input type="number"
                         id="rate"
                         class="form-control"
                         value="5"
                         min="0"
                         step="0.01"
                         placeholder="5">
                  <span class="input-group-text">%</span>
                </div>
              </div>

              <div class="col-md-6">
                <label for="periods" class="form-label fw-semibold">
                  Number of Periods
                </label>

                <input type="number"
                       id="periods"
                       class="form-control"
                       value="20"
                       min="1"
                       step="1"
                       placeholder="20">
              </div>

              <!-- Target FV -->
              <div class="col-md-6 d-none" id="targetValueGroup">

                <label for="targetValue"
                       class="form-label fw-semibold">
                  Target Future Value
                </label>

                <div class="input-group">
                  <span class="input-group-text currency-symbol">$</span>

                  <input type="number"
                         id="targetValue"
                         class="form-control"
                         value="100000"
                         min="0"
                         step="0.01"
                         placeholder="100000">
                </div>

                <div class="form-text">
                  The future value you want to reach.
                </div>

              </div>

            </div>

            <!-- Buttons -->
            <div class="d-flex flex-wrap gap-2 mt-4">

              <button type="button"
                      id="calculateAnnuity"
                      class="btn btn-primary px-4">
                Calculate
              </button>

              <button type="button"
                      id="resetAnnuity"
                      class="btn btn-outline-secondary px-4">
                Reset
              </button>

            </div>

            <!-- Error -->
            <div id="annuityError"
                 class="alert alert-danger mt-4 d-none"
                 role="alert">
            </div>

            <!-- Results -->
            <div id="annuityResult" class="mt-4 d-none">

              <div class="alert alert-success mb-3">
                <div class="small text-muted mb-1">
                  Calculated Result
                </div>

                <div id="mainResult"
                     class="fs-2 fw-bold">
                  $0.00
                </div>
              </div>

              <div class="row g-3">

                <div class="col-md-4">
                  <div class="border rounded p-3 h-100">
                    <div class="small text-muted">
                      Present Value (PV)
                    </div>

                    <div id="pvResult"
                         class="fs-5 fw-bold mt-1">
                      $0.00
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="border rounded p-3 h-100">
                    <div class="small text-muted">
                      Future Value (FV)
                    </div>

                    <div id="fvResult"
                         class="fs-5 fw-bold mt-1">
                      $0.00
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="border rounded p-3 h-100">
                    <div class="small text-muted">
                      Payment (PMT)
                    </div>

                    <div id="pmtResult"
                         class="fs-5 fw-bold mt-1">
                      $0.00
                    </div>
                  </div>
                </div>

              </div>

              <div class="mt-3 p-3 bg-light rounded">

                <div class="row g-3">

                  <div class="col-md-6">
                    <strong>Total Payments:</strong>
                    <span id="totalPayments">$0.00</span>
                  </div>

                  <div class="col-md-6">
                    <strong>Interest / Growth:</strong>
                    <span id="interestResult">$0.00</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <!-- RIGHT SIDE PANEL -->
          <div class="col-lg-4 bg-light border-start p-4 p-md-5">

            <h2 class="h5 fw-bold mb-3">
              Annuity Calculator
            </h2>

            <p class="small text-muted">
              Use this calculator to understand the value of a series of
              equal payments made over time.
            </p>

            <div class="border rounded bg-white p-3 mb-3">

              <div class="small text-muted mb-1">
                Future Value
              </div>

              <div class="fw-semibold">
                FV
              </div>

              <div class="small text-muted mt-2">
                Value of the annuity at the end of the investment period.
              </div>

            </div>

            <div class="border rounded bg-white p-3 mb-3">

              <div class="small text-muted mb-1">
                Present Value
              </div>

              <div class="fw-semibold">
                PV
              </div>

              <div class="small text-muted mt-2">
                Current value of future annuity payments.
              </div>

            </div>

            <div class="border rounded bg-white p-3 mb-3">

              <div class="small text-muted mb-1">
                Payment
              </div>

              <div class="fw-semibold">
                PMT
              </div>

              <div class="small text-muted mt-2">
                Periodic amount required to reach a target future value.
              </div>

            </div>

            <div class="border rounded bg-white p-3">

              <div class="small text-muted mb-1">
                Tip
              </div>

              <div class="small">
                For monthly payments, use the monthly interest rate and
                the total number of monthly periods.
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  </div>
</div>


<script>
(function () {

  const modeButtons =
    document.querySelectorAll(".mode-btn");

  const typeButtons =
    document.querySelectorAll(".type-btn");

  const paymentInput =
    document.getElementById("payment");

  const rateInput =
    document.getElementById("rate");

  const periodsInput =
    document.getElementById("periods");

  const targetInput =
    document.getElementById("targetValue");

  const targetGroup =
    document.getElementById("targetValueGroup");

  const currencySelect =
    document.getElementById("annuityCurrency");

  const currencySymbols =
    document.querySelectorAll(".currency-symbol");

  const resultBox =
    document.getElementById("annuityResult");

  const errorBox =
    document.getElementById("annuityError");

  const mainResult =
    document.getElementById("mainResult");

  const pvResult =
    document.getElementById("pvResult");

  const fvResult =
    document.getElementById("fvResult");

  const pmtResult =
    document.getElementById("pmtResult");

  const totalPayments =
    document.getElementById("totalPayments");

  const interestResult =
    document.getElementById("interestResult");

  let selectedMode = "fv";
  let selectedType = "ordinary";


  /* -----------------------------
     Currency
  ----------------------------- */

  const currencyMap = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    CAD: "C$",
    AUD: "A$"
  };


  function getCurrency() {
    return currencySelect.value;
  }


  function getCurrencySymbol() {
    return currencyMap[getCurrency()] || "$";
  }


  function money(value) {

    if (!Number.isFinite(value)) {
      return getCurrencySymbol() + "0.00";
    }

    return value.toLocaleString("en-US", {
      style: "currency",
      currency: getCurrency(),
      maximumFractionDigits: 2
    });

  }


  function updateCurrencySymbols() {

    const symbol = getCurrencySymbol();

    currencySymbols.forEach(function (el) {
      el.textContent = symbol;
    });

    if (!resultBox.classList.contains("d-none")) {
      calculate();
    }

  }


  /* -----------------------------
     Mode Buttons
  ----------------------------- */

  modeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      selectedMode =
        button.getAttribute("data-mode");

      modeButtons.forEach(function (btn) {

        btn.classList.remove("active", "btn-primary");
        btn.classList.add("btn-outline-primary");

      });

      button.classList.add("active", "btn-primary");
      button.classList.remove("btn-outline-primary");

      updateFields();

    });

  });


  /* -----------------------------
     Annuity Type Buttons
  ----------------------------- */

  typeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      selectedType =
        button.getAttribute("data-type");

      typeButtons.forEach(function (btn) {

        btn.classList.remove("active");
        btn.classList.remove("btn-secondary");
        btn.classList.add("btn-outline-secondary");

      });

      button.classList.add("active");
      button.classList.remove("btn-outline-secondary");
      button.classList.add("btn-secondary");

    });

  });


  /* -----------------------------
     Show / Hide Target
  ----------------------------- */

  function updateFields() {

    if (selectedMode === "pmt") {

      targetGroup.classList.remove("d-none");

    } else {

      targetGroup.classList.add("d-none");

    }

  }


  /* -----------------------------
     Calculate
  ----------------------------- */

  function calculate() {

    errorBox.classList.add("d-none");
    resultBox.classList.add("d-none");

    let payment =
      parseFloat(paymentInput.value);

    const rate =
      parseFloat(rateInput.value);

    const periods =
      parseInt(periodsInput.value, 10);

    const target =
      parseFloat(targetInput.value);


    /* Validation */

    if (!Number.isFinite(rate) || rate < 0) {

      showError(
        "Please enter a valid interest rate."
      );

      return;

    }


    if (!Number.isFinite(periods) || periods <= 0) {

      showError(
        "Please enter a valid number of periods."
      );

      return;

    }


    if (
      selectedMode !== "pmt" &&
      (!Number.isFinite(payment) || payment < 0)
    ) {

      showError(
        "Please enter a valid payment amount."
      );

      return;

    }


    if (
      selectedMode === "pmt" &&
      (!Number.isFinite(target) || target < 0)
    ) {

      showError(
        "Please enter a valid target future value."
      );

      return;

    }


    /*
      Rate is entered as percentage per period.

      Example:
      5% = 0.05
    */

    const r = rate / 100;

    const n = periods;

    let pv = 0;
    let fv = 0;


    /*
      Annuity due adjustment.

      Ordinary:
      Payment at END of period.

      Due:
      Payment at BEGINNING of period.

      Therefore:

      Due multiplier = (1 + r)
    */

    const dueMultiplier =
      selectedType === "due"
        ? (1 + r)
        : 1;


    /* -----------------------------
       Zero Interest
    ----------------------------- */

    if (r === 0) {

      if (selectedMode === "fv") {

        fv = payment * n;
        pv = payment * n;

      }

      else if (selectedMode === "pv") {

        pv = payment * n;
        fv = payment * n;

      }

      else if (selectedMode === "pmt") {

        payment = target / n;

        fv = target;
        pv = target;

      }

    }


    /* -----------------------------
       Non-zero Interest
    ----------------------------- */

    else {

      const fvFactor =
        (Math.pow(1 + r, n) - 1) / r;

      const pvFactor =
        (1 - Math.pow(1 + r, -n)) / r;


      if (selectedMode === "fv") {

        fv =
          payment *
          fvFactor *
          dueMultiplier;

        pv =
          payment *
          pvFactor *
          dueMultiplier;

      }


      else if (selectedMode === "pv") {

        pv =
          payment *
          pvFactor *
          dueMultiplier;

        fv =
          payment *
          fvFactor *
          dueMultiplier;

      }


      else if (selectedMode === "pmt") {

        /*
          Target is Future Value.
        */

        payment =
          target /
          (fvFactor * dueMultiplier);

        fv = target;

        pv =
          payment *
          pvFactor *
          dueMultiplier;

      }

    }


    /*
      Total amount paid
    */

    const total =
      payment * n;


    /*
      Interest / Growth

      For PV:
      Total Payments - Present Value

      For FV:
      Future Value - Total Payments
    */

    let growth = 0;

    if (selectedMode === "pv") {

      growth = total - pv;

    } else {

      growth = fv - total;

    }


    /* -----------------------------
       Display
    ----------------------------- */

    if (selectedMode === "fv") {

      mainResult.textContent = money(fv);

    }

    else if (selectedMode === "pv") {

      mainResult.textContent = money(pv);

    }

    else {

      mainResult.textContent = money(payment);

    }


    pvResult.textContent =
      money(pv);

    fvResult.textContent =
      money(fv);

    pmtResult.textContent =
      money(payment);

    totalPayments.textContent =
      money(total);

    interestResult.textContent =
      money(growth);


    resultBox.classList.remove("d-none");

  }


  /* -----------------------------
     Error
  ----------------------------- */

  function showError(message) {

    errorBox.textContent =
      message;

    errorBox.classList.remove("d-none");

  }


  /* -----------------------------
     Reset
  ----------------------------- */

  function resetCalculator() {

    selectedMode = "fv";
    selectedType = "ordinary";

    paymentInput.value = "500";
    rateInput.value = "5";
    periodsInput.value = "20";
    targetInput.value = "100000";

    currencySelect.value = "USD";


    modeButtons.forEach(function (btn) {

      btn.classList.remove(
        "active",
        "btn-primary"
      );

      btn.classList.add(
        "btn-outline-primary"
      );

    });


    document
      .querySelector('[data-mode="fv"]')
      .classList.add(
        "active",
        "btn-primary"
      );

    document
      .querySelector('[data-mode="fv"]')
      .classList.remove(
        "btn-outline-primary"
      );


    typeButtons.forEach(function (btn) {

      btn.classList.remove(
        "active",
        "btn-secondary"
      );

      btn.classList.add(
        "btn-outline-secondary"
      );

    });


    const ordinaryButton =
      document.querySelector(
        '[data-type="ordinary"]'
      );

    ordinaryButton.classList.add(
      "active",
      "btn-secondary"
    );

    ordinaryButton.classList.remove(
      "btn-outline-secondary"
    );


    resultBox.classList.add("d-none");
    errorBox.classList.add("d-none");

    updateFields();
    updateCurrencySymbols();

  }


  /* -----------------------------
     Events
  ----------------------------- */

  document
    .getElementById("calculateAnnuity")
    .addEventListener(
      "click",
      calculate
    );


  document
    .getElementById("resetAnnuity")
    .addEventListener(
      "click",
      resetCalculator
    );


  currencySelect.addEventListener(
    "change",
    updateCurrencySymbols
  );


  /*
    Allow Enter key to calculate
  */

  [
    paymentInput,
    rateInput,
    periodsInput,
    targetInput
  ].forEach(function (input) {

    input.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          calculate();
        }

      }
    );

  });


  /* Initialize */

  updateFields();
  updateCurrencySymbols();

})();
</script>