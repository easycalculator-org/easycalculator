
(function () {

  const methodButtons = document.querySelectorAll(".method-btn");

  const monthsFields = document.getElementById("monthsFields");
  const daysFields = document.getElementById("daysFields");

  const holidayAllowance =
    document.getElementById("holidayAllowance");

  const monthsWorked =
    document.getElementById("monthsWorked");

  const daysWorked =
    document.getElementById("daysWorked");

  const totalYearDays =
    document.getElementById("totalYearDays");

  const calculateBtn =
    document.getElementById("calculateBtn");

  const resultBox =
    document.getElementById("resultBox");

  const errorMessage =
    document.getElementById("errorMessage");

  const resultHoliday =
    document.getElementById("resultHoliday");

  const calculationText =
    document.getElementById("calculationText");

  const summaryAllowance =
    document.getElementById("summaryAllowance");

  const summaryWorked =
    document.getElementById("summaryWorked");

  let currentMethod = "months";


  function formatNumber(value) {
    if (!Number.isFinite(value)) return "0";

    return Number(value.toFixed(4)).toString();
  }


  // Switch calculation method
  methodButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      currentMethod = button.dataset.method;

      methodButtons.forEach(function (btn) {
        btn.classList.remove("btn-primary", "active");
        btn.classList.add("btn-outline-primary");
      });

      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary", "active");

      if (currentMethod === "months") {

        monthsFields.classList.remove("d-none");
        daysFields.classList.add("d-none");

      } else {

        monthsFields.classList.add("d-none");
        daysFields.classList.remove("d-none");

      }

      resultBox.classList.add("d-none");
      errorMessage.classList.add("d-none");

    });

  });


  function showError(message) {

    errorMessage.textContent = message;
    errorMessage.classList.remove("d-none");
    resultBox.classList.add("d-none");

  }


  function calculateHoliday() {

    errorMessage.classList.add("d-none");

    const allowance = parseFloat(holidayAllowance.value);

    if (!Number.isFinite(allowance) || allowance <= 0) {
      showError("Please enter a valid full holiday allowance.");
      return;
    }


    let result = 0;
    let workedText = "";


    // Months calculation
    if (currentMethod === "months") {

      const months = parseFloat(monthsWorked.value);

      if (!Number.isFinite(months) || months < 0 || months > 12) {
        showError("Months worked must be between 0 and 12.");
        return;
      }

      result = allowance * (months / 12);

      workedText = formatNumber(months) + " months";

      calculationText.innerHTML =
        formatNumber(allowance) +
        " × (" +
        formatNumber(months) +
        " ÷ 12) = " +
        "<strong>" +
        formatNumber(result) +
        " days</strong>";

    }


    // Days calculation
    else {

      const worked = parseFloat(daysWorked.value);
      const totalDays = parseFloat(totalYearDays.value);

      if (!Number.isFinite(worked) || worked < 0) {
        showError("Please enter a valid number of days worked.");
        return;
      }

      if (!Number.isFinite(totalDays) || totalDays <= 0) {
        showError("Please enter a valid total number of days.");
        return;
      }

      if (worked > totalDays) {
        showError("Days worked cannot be greater than the total days in the holiday year.");
        return;
      }

      result = allowance * (worked / totalDays);

      workedText =
        formatNumber(worked) +
        " of " +
        formatNumber(totalDays) +
        " days";

      calculationText.innerHTML =
        formatNumber(allowance) +
        " × (" +
        formatNumber(worked) +
        " ÷ " +
        formatNumber(totalDays) +
        ") = " +
        "<strong>" +
        formatNumber(result) +
        " days</strong>";

    }


    resultHoliday.textContent = formatNumber(result);
    summaryAllowance.textContent = formatNumber(allowance);
    summaryWorked.textContent = workedText;

    resultBox.classList.remove("d-none");

  }


  calculateBtn.addEventListener("click", calculateHoliday);


  // Enter key support
  document.querySelectorAll("input").forEach(function (input) {

    input.addEventListener("keydown", function (event) {

      if (event.key === "Enter") {
        calculateHoliday();
      }

    });

  });

})();
