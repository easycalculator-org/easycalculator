document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("inputValue");
  const resultBox = document.getElementById("liveResult");
  const conversionType = document.getElementById("conversionType");

  function formatNumber(num) {
    if (!isFinite(num)) return "Invalid";
    if (num >= 1) return num.toFixed(4);
    if (num >= 0.001) return num.toFixed(6);
    return num.toExponential(2);
  }

  function convert(value, type) {
    if (type === "dbm-to-watts") {
      let watts = Math.pow(10, (value - 30) / 10);
      return `${value} dBm = ${formatNumber(watts)} Watt`;
    } else {
      if (value <= 0) return "Value must be > 0";
      let dbm = 10 * Math.log10(value) + 30;
      return `${value} Watt = ${dbm.toFixed(2)} dBm`;
    }
  }

  function animateResult() {
    resultBox.style.transform = "scale(1.05)";
    setTimeout(() => resultBox.style.transform = "scale(1)", 120);
  }

  function updateResult() {
    let val = parseFloat(input.value);

    if (isNaN(val)) {
      resultBox.innerHTML = "Enter value";
      return;
    }

    let type = conversionType.value;
    resultBox.innerHTML = convert(val, type);
    animateResult();
  }

  // Live typing
  input.addEventListener("input", updateResult);

  // Toggle
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", function () {

      document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const type = this.getAttribute("data-value");
      conversionType.value = type;

      input.placeholder = type === "dbm-to-watts"
        ? "Enter dBm value (e.g. 30)"
        : "Enter Watt value (e.g. 1)";

      updateResult();
    });
  });

});