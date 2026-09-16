---
layout: default
title: Weight Calculator - Weight Conversion Calculator
permalink: /weight-calculator
description: "Free Weight Calculator to convert kilograms, pounds, grams, ounces, and stone. Easily calculate and convert common weight units with accurate formulas and results."
#image: "/assets/images/og/weight-calculator.jpg"
last_modified_at: 2026-09-16
---
<div class="row justify-content-center"><div class="col-12 col-md-9"><div class="card border-0 shadow-sm rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h1 class="fw-bold mb-2">Weight Calculator</h1><p class="text-muted mb-0">Convert between kilograms, pounds, grams, ounces, and stone quickly and accurately. </p></div><div class="row justify-content-center"><div class="col-md-9"><div class="mb-3"><label for="weightValue" class="form-label fw-semibold">Enter Weight </label><input type="number" id="weightValue" class="form-control form-control-lg" placeholder="Enter a value" step="any" min="0" inputmode="decimal" aria-label="Weight value" ></div><div class="mb-3"><label for="fromUnit" class="form-label fw-semibold">From </label><select id="fromUnit" class="form-select form-select-lg" ><option value="kg">Kilograms (kg)</option><option value="lb">Pounds (lb)</option><option value="g">Grams (g)</option><option value="oz">Ounces (oz)</option><option value="st">Stone (st)</option></select></div><div class="mb-3"><label for="toUnit" class="form-label fw-semibold">To </label><select id="toUnit" class="form-select form-select-lg" ><option value="lb">Pounds (lb)</option><option value="kg">Kilograms (kg)</option><option value="g">Grams (g)</option><option value="oz">Ounces (oz)</option><option value="st">Stone (st)</option></select></div></div></div><div class="d-grid mt-4"><button type="button" class="btn btn-primary btn-lg rounded-3" onclick="calculateWeight()" >Convert Weight </button></div><div id="weightError" class="alert alert-danger mt-4 d-none" role="alert" ></div><div id="weightResult" class="mt-4 d-none"><div class="bg-light rounded-4 p-4 text-center"><div class="text-muted small mb-2">Converted Weight </div><div id="convertedWeight" class="display-5 fw-bold text-primary" >0 </div><div id="convertedUnit" class="text-muted mt-2" >kg </div></div><div class="mt-4"><h5 class="fw-bold mb-3">Calculation </h5><div id="weightCalculation" class="bg-light rounded-3 p-3" ></div></div></div></div></div></div></div>


<!-- Weight Conversion Links -->
<div class="row justify-content-center mt-4"><div class="col-12"><div class="card border-0 shadow-sm rounded-4"><div class="card-body p-4 p-md-5"><div class="text-center mb-4"><h2 class="fw-bold mb-2">Weight Conversion Calculators </h2><p class="text-muted mb-0">Convert between kilograms, pounds, grams, ounces, and stone with our free weight conversion calculators. </p></div><div class="row g-3"><div class="col-12 col-sm-6 col-lg-3"><a href="/kg-to-lbs" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Kg to Lbs </div><div class="small text-muted mt-1">Kilograms to Pounds </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/lbs-to-kg" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Lbs to Kg </div><div class="small text-muted mt-1">Pounds to Kilograms </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/kg-to-ounces" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Kg to Ounces </div><div class="small text-muted mt-1">Kilograms to Ounces </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/ounces-to-kg" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Ounces to Kg </div><div class="small text-muted mt-1">Ounces to Kilograms </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/kg-to-stone" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Kg to Stone </div><div class="small text-muted mt-1">Kilograms to Stone </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/stone-to-kg" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Stone to Kg </div><div class="small text-muted mt-1">Stone to Kilograms </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/pounds-to-grams" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Pounds to Grams </div><div class="small text-muted mt-1">Pounds to Grams </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/grams-to-pounds" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Grams to Pounds </div><div class="small text-muted mt-1">Grams to Pounds </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/pounds-to-ounces" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Pounds to Ounces </div><div class="small text-muted mt-1">Pounds to Ounces </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/ounces-to-pounds" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Ounces to Pounds </div><div class="small text-muted mt-1">Ounces to Pounds </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/pounds-to-stone" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Pounds to Stone </div><div class="small text-muted mt-1">Pounds to Stone </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/stone-to-pounds" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Stone to Pounds </div><div class="small text-muted mt-1">Stone to Pounds </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/ounces-to-stone" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Ounces to Stone </div><div class="small text-muted mt-1">Ounces to Stone </div></div></a></div><div class="col-12 col-sm-6 col-lg-3"><a href="/stone-to-ounces" class="text-decoration-none" ><div class="bg-light rounded-4 p-3 h-100 text-center"><div class="fw-semibold text-dark">Stone to Ounces </div><div class="small text-muted mt-1">Stone to Ounces </div></div></a></div></div></div></div></div></div>


<!-- JavaScript -->

<script>
function formatNumber(value) {

  if (!Number.isFinite(value)) {
    return "0";
  }

  return Number(value.toFixed(4)).toString();
}


function calculateWeight() {

  const value = parseFloat(
    document.getElementById("weightValue").value
  );

  const fromUnit =
    document.getElementById("fromUnit").value;

  const toUnit =
    document.getElementById("toUnit").value;

  const errorBox =
    document.getElementById("weightError");

  const resultBox =
    document.getElementById("weightResult");


  errorBox.classList.add("d-none");
  resultBox.classList.add("d-none");


  // Validation
  if (!Number.isFinite(value)) {

    errorBox.textContent =
      "Please enter a valid weight value.";

    errorBox.classList.remove("d-none");

    return;
  }


  if (value < 0) {

    errorBox.textContent =
      "Weight cannot be negative.";

    errorBox.classList.remove("d-none");

    return;
  }


  // Convert everything through kilograms
  const toKg = {

    kg: 1,

    lb: 0.45359237,

    g: 0.001,

    oz: 0.028349523125,

    st: 6.35029318

  };


  const fromKg = value * toKg[fromUnit];


  const result =
    fromKg / toKg[toUnit];


  const formattedValue =
    formatNumber(value);

  const formattedResult =
    formatNumber(result);


  const unitNames = {

    kg: "kg",

    lb: "lb",

    g: "g",

    oz: "oz",

    st: "st"

  };


  const fromName =
    unitNames[fromUnit];

  const toName =
    unitNames[toUnit];


  // Main result
  document.getElementById("convertedWeight")
    .textContent = formattedResult;


  document.getElementById("convertedUnit")
    .textContent = toName;


  // Calculation
  document.getElementById("weightCalculation")
    .innerHTML =
      `${formattedValue} ${fromName} = <strong>${formattedResult} ${toName}</strong>`;


  resultBox.classList.remove("d-none");
}


// Enter key support
document
  .getElementById("weightValue")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      calculateWeight();
    }

  });

</script>








<script src="{{ '/assets/js/weight/kg-to-lbs.js' | relative_url }}"></script>

<!-- Kg to Lbs Calculator
Kg to Pounds Calculator  Done
Lbs to Kg Calculator Done
Kilograms to Ounces Calculator Done
Ounces to Kg Calculator Done
Kilograms to Stone Calculator Done
Stone to Kg Calculator Done
Grams to Lbs Calculator Done
Lbs to Grams Calculator Done
Grams to Pounds Calculator Done
Pounds to Grams Calculator Done
Grams to Ounces Calculator Done
Ounces to Grams Calculator Done
Pounds to Ounces Calculator Done
Lbs to Ounces Calculator  Done
Ounces to Stone Calculator Done
Stone to Ounces Calculator Done
Pounds to Stone Calculator Done
Stone to Pounds Calculator Done


Kg to Grams Calculator 
Grams to Kg Calculator


Grams to Stone Calculator 
Stone to Grams Calculator


Grams to Milligrams Calculator
Milligrams to Grams Calculator
Grams to Micrograms Calculator
Micrograms to Grams Calculator
Pound & Ounce Conversions


Milligram / Microgram
Milligrams to Kg Calculator
Kg to Milligrams Calculator
Milligrams to Pounds Calculator
Pounds to Milligrams Calculator
Milligrams to Ounces Calculator
Ounces to Milligrams Calculator
Micrograms to Milligrams Calculator
Milligrams to Micrograms Calculator
Micrograms to Kg Calculator
Kg to Micrograms Calculator
Ton / Tonne Conversions
Tons to Kg Calculator
Kg to Tons Calculator
Kg to Ton Calculator
Metric Tons to Kg Calculator
Kg to Metric Tons Calculator
Metric Tons to Pounds Calculator
Pounds to Metric Tons Calculator
Metric Tons to Ounces Calculator
Ounces to Metric Tons Calculator
Metric Tons to Grams Calculator
Grams to Metric Tons Calculator
US Tons to Kg Calculator
Kg to US Tons Calculator
US Tons to Pounds Calculator
Pounds to US Tons Calculator
UK Tons to Kg Calculator
Kg to UK Tons Calculator
UK Tons to Pounds Calculator
Pounds to UK Tons Calculator
Stone & British Units
Stone to Pounds Calculator
Pounds to Stone Calculator
Stone to Kg Calculator
Kg to Stone Calculator
Stone to Grams Calculator
Grams to Stone Calculator
Stone to Ounces Calculator
Ounces to Stone Calculator
Other Weight Units
Carat to Gram Calculator
Grams to Carats Calculator
Carat to Kg Calculator
Kg to Carats Calculator
Troy Ounce to Gram Calculator
Grams to Troy Ounce Calculator
Troy Ounce to Kg Calculator
Kg to Troy Ounce Calculator
Pennyweight to Gram Calculator
Grams to Pennyweight Calculator
Pennyweight to Ounce Calculator
Ounce to Pennyweight Calculator
Grain to Gram Calculator
Grams to Grain Calculator
Grain to Ounce Calculator
Ounce to Grain Calculator
Dram to Gram Calculator
Grams to Dram Calculator -->