 
function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";
  return Number(value.toFixed(4)).toString();
}

function convertPercentageToDecimal() {

  const percentageValue =
    parseFloat(document.getElementById("percentageValue").value);

  const errorBox =
    document.getElementById("percentageDecimalError");

  const resultBox =
    document.getElementById("percentageDecimalResult");

  // Reset
  errorBox.classList.add("d-none");
  resultBox.classList.add("d-none");

  // Validation
  if (!Number.isFinite(percentageValue)) {
    errorBox.textContent =
      "Please enter a percentage.";
    errorBox.classList.remove("d-none");
    return;
  }

  // Convert percentage to decimal
  const decimalValue = percentageValue / 100;

  // Display result
  document.getElementById("decimalValue").textContent =
    formatNumber(decimalValue);

  document.getElementById("resultPercentage").textContent =
    formatNumber(percentageValue) + "%";

  document.getElementById("resultDecimal").textContent =
    formatNumber(decimalValue);

  // Calculation
  document.getElementById("percentageDecimalCalculation").innerHTML = `
    ${formatNumber(percentageValue)} ÷ 100
    =
    <strong>${formatNumber(decimalValue)}</strong>
  `;

  // Steps
  document.getElementById("percentageDecimalSteps").innerHTML = `
    <li class="mb-2">
      Start with the percentage:
      <strong>${formatNumber(percentageValue)}%</strong>
    </li>

    <li class="mb-2">
      Divide the percentage by 100:
      <strong>
        ${formatNumber(percentageValue)} ÷ 100
      </strong>
    </li>

    <li>
      The decimal value is:
      <strong>${formatNumber(decimalValue)}</strong>
    </li>
  `;

  resultBox.classList.remove("d-none");
}

// Enter key support
document
  .getElementById("percentageValue")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      convertPercentageToDecimal();
    }
  });