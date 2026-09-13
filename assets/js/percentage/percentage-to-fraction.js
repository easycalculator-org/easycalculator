  
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function decimalToFraction(decimal) {

  if (decimal === 0) {
    return {
      numerator: 0,
      denominator: 1
    };
  }

  const sign = decimal < 0 ? -1 : 1;
  decimal = Math.abs(decimal);

  /*
   * Convert the decimal to an integer fraction.
   * JavaScript floating-point values are rounded to
   * a maximum of 10 decimal places for a practical result.
   */
  const decimalString = decimal.toFixed(10).replace(/0+$/, "");

  const decimalPlaces =
    decimalString.includes(".")
      ? decimalString.split(".")[1].length
      : 0;

  const denominator = Math.pow(10, decimalPlaces);
  const numerator = Math.round(decimal * denominator);

  const divisor = gcd(numerator, denominator);

  return {
    numerator: sign * (numerator / divisor),
    denominator: denominator / divisor
  };
}

function fractionHTML(numerator, denominator) {

  if (denominator === 1) {
    return numerator.toString();
  }

  return `
    <span class="d-inline-flex flex-column align-items-center"
          style="line-height:1;">
      <span class="px-2 pb-1 border-bottom border-2">
        ${numerator}
      </span>
      <span class="px-2 pt-1">
        ${denominator}
      </span>
    </span>
  `;
}

function convertPercentageToFraction() {

  const percentage =
    parseFloat(document.getElementById("percentageValue").value);

  const errorBox =
    document.getElementById("percentageFractionError");

  const resultBox =
    document.getElementById("percentageFractionResult");

  // Reset
  errorBox.classList.add("d-none");
  resultBox.classList.add("d-none");

  // Validation
  if (!Number.isFinite(percentage)) {
    errorBox.textContent =
      "Please enter a percentage.";
    errorBox.classList.remove("d-none");
    return;
  }

  // Convert percentage to fraction
  // Percentage / 100
  const decimalValue = percentage / 100;

  const fraction = decimalToFraction(decimalValue);

  const numerator = fraction.numerator;
  const denominator = fraction.denominator;

  const fractionText =
    denominator === 1
      ? numerator.toString()
      : numerator + "/" + denominator;

  const fractionDisplay =
    fractionHTML(numerator, denominator);

  // Display result
  document.getElementById("fractionValue").innerHTML =
    fractionDisplay;

  document.getElementById("resultPercentage").textContent =
    Number(percentage.toFixed(4)).toString() + "%";

  document.getElementById("resultFraction").innerHTML =
    fractionDisplay;

  // Calculation
  document.getElementById("percentageFractionCalculation").innerHTML = `
    ${Number(percentage.toFixed(4)).toString()}%
    =
    ${Number(percentage.toFixed(4)).toString()} ÷ 100
    =
    <strong>${fractionText}</strong>
  `;

  // Steps
  document.getElementById("percentageFractionSteps").innerHTML = `
    <li class="mb-2">
      Remove the percent sign and place the percentage over 100:
      <strong>
        ${Number(percentage.toFixed(4)).toString()} / 100
      </strong>
    </li>

    <li class="mb-2">
      Simplify the fraction by dividing the numerator and denominator
      by their greatest common divisor.
    </li>

    <li>
      The simplified fraction is:
      <strong>${fractionText}</strong>
    </li>
  `;

  resultBox.classList.remove("d-none");
}

// Enter key support
document
  .getElementById("percentageValue")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      convertPercentageToFraction();
    }
  });