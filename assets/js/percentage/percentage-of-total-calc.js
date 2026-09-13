 
function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";
  return Number(value.toFixed(4)).toString();
}

function calculatePercentageOfTotal() {
  const partValue =
    parseFloat(document.getElementById("partValue").value);
  const totalValue =
    parseFloat(document.getElementById("totalValue").value);
  const errorBox =
    document.getElementById("percentageTotalError");
  const resultBox =
    document.getElementById("percentageTotalResult");
  // Reset
  errorBox.classList.add("d-none");
  resultBox.classList.add("d-none");
  // Validation
  if (!Number.isFinite(partValue) || !Number.isFinite(totalValue)) {
    errorBox.textContent =
      "Please enter both the part value and total value.";
    errorBox.classList.remove("d-none");
    return;
  }
  if (totalValue === 0) {
    errorBox.textContent =
      "Total value cannot be zero.";
    errorBox.classList.remove("d-none");
    return;
  }
  // Calculate
  const percentage =
    (partValue / totalValue) * 100;
  // Display result
  document.getElementById("percentageOfTotal").textContent =
    formatNumber(percentage);
  document.getElementById("resultPart").textContent =
    formatNumber(partValue);
  document.getElementById("resultTotal").textContent =
    formatNumber(totalValue);
  // Calculation
  document.getElementById("percentageTotalCalculation").innerHTML = `
    (${formatNumber(partValue)} ÷ ${formatNumber(totalValue)}) × 100
    =
    <strong>${formatNumber(percentage)}%</strong>
  `;
  // Steps
  document.getElementById("percentageTotalSteps").innerHTML = `
    <li class="mb-2">
      Divide the part value by the total value:
      <strong>
        ${formatNumber(partValue)} ÷ ${formatNumber(totalValue)}
      </strong>
    </li>

    <li>
      Multiply the result by 100:
      <strong>${formatNumber(percentage)}%</strong>
    </li>
  `;
  resultBox.classList.remove("d-none");
}

// Enter key support
document
  .getElementById("partValue")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      calculatePercentageOfTotal();
    }
  });
document
  .getElementById("totalValue")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      calculatePercentageOfTotal();
    }
  });