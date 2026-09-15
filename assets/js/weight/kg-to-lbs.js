   
function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";
  return Number(value.toFixed(4)).toString();
}

function calculateKgToLbs() {

  const kg =
    parseFloat(document.getElementById("kgValue").value);

  const errorBox =
    document.getElementById("kgLbsError");

  const resultBox =
    document.getElementById("kgLbsResult");

  // Reset
  errorBox.classList.add("d-none");
  resultBox.classList.add("d-none");

  // Validation
  if (!Number.isFinite(kg)) {
    errorBox.textContent =
      "Please enter a valid weight in kilograms.";

    errorBox.classList.remove("d-none");
    return;
  }

  if (kg < 0) {
    errorBox.textContent =
      "Kilograms cannot be negative.";

    errorBox.classList.remove("d-none");
    return;
  }

  // Kg to Lbs conversion
  const lbs = kg * 2.2046226218;

  const formattedKg = formatNumber(kg);
  const formattedLbs = formatNumber(lbs);

  // Result
  document.getElementById("lbsResult").textContent =
    formattedLbs;

  document.getElementById("resultKg").textContent =
    formattedKg + " kg";

  document.getElementById("resultLbs").textContent =
    formattedLbs + " lbs";

  // Calculation
  document.getElementById("kgLbsCalculation").innerHTML = `
    ${formattedKg} kg × 2.2046226218
    =
    <strong>${formattedLbs} lbs</strong>
  `;

  // Steps
  document.getElementById("kgLbsSteps").innerHTML = `
    <li class="mb-2">
      Start with:
      <strong>${formattedKg} kg</strong>
    </li>

    <li class="mb-2">
      Multiply the kilogram value by
      <strong>2.2046226218</strong>.
    </li>

    <li>
      Calculate:
      <strong>
        ${formattedKg} × 2.2046226218
        = ${formattedLbs} lbs
      </strong>
    </li>
  `;

  // Show result
  resultBox.classList.remove("d-none");
}

// Enter key support
document
  .getElementById("kgValue")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      calculateKgToLbs();
    }
  });