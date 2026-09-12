(function () {
  "use strict";
  const input = document.getElementById("dbmValueInput");
  const mainResult = document.getElementById("dbmWattMainResult");
  const otherResult = document.getElementById("dbmWattOtherResults");
  const copyButton = document.getElementById("dbmWattCopyBtn");
  if (!input || !mainResult || !otherResult) {
    return;
  }
  function formatValue(value) {
    if (!Number.isFinite(value)) {
      return "—";
    }
    if (value === 0) {
      return "0";
    }
    if (Math.abs(value) >= 1000) {
      return value.toLocaleString(undefined, {
        maximumFractionDigits: 6
      });
    }
    if (Math.abs(value) < 0.000001) {
      return value.toExponential(6);
    }
    if (Math.abs(value) < 0.001) {
      return value.toFixed(9).replace(/0+$/, "").replace(/\.$/, "");
    }
    return value.toLocaleString(undefined, {
      maximumFractionDigits: 6
    });
  }
  function calculateDbmToWatt() {
    const dbm = Number(input.value);
    if (!Number.isFinite(dbm)) {
      mainResult.textContent = "—";
      otherResult.textContent =
        "Enter a valid dBm value.";
      return;
    }
    const watts =
      Math.pow(10, (dbm - 30) / 10);
    const milliwatts =
      watts * 1000;
    const microwatts =
      watts * 1000000;
    const nanowatts =
      watts * 1000000000;
    mainResult.textContent =
      formatValue(watts) + " W";
    otherResult.textContent =
      formatValue(milliwatts) + " mW = " +
      formatValue(microwatts) + " µW = " +
      formatValue(nanowatts) + " nW";
  }
  /* Live calculation */
  input.addEventListener(
    "input",
    calculateDbmToWatt
  );
  /* Quick buttons */
  const quickButtons =
    document.querySelectorAll(".dbm-quick-btn");
  quickButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      input.value =
        button.getAttribute("data-dbm");
      calculateDbmToWatt();
    });
  });
  /* Copy result */
  if (copyButton) {
    copyButton.addEventListener("click", function () {
      const result =
        mainResult.textContent;
      if (result === "—") {
        return;
      }
      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        navigator.clipboard.writeText(result)
          .then(function () {
            const oldContent =
              copyButton.innerHTML;
            copyButton.innerHTML =
              '<i class="fa-solid fa-check me-1"></i>Copied';
            setTimeout(function () {
              copyButton.innerHTML =
                oldContent;
            }, 1500);
          });
      }
    });
  }
  /* Initial calculation */
  calculateDbmToWatt();
})();