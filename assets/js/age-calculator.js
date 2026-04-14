
document.addEventListener("DOMContentLoaded", function () {

  let startDate = null;
  let endDate = new Date();

  const mainBox = document.getElementById("mainResult");
  const resultBox = document.getElementById("resultsWrapper");

  function calculate() {
    if (!startDate || !endDate) return;

    if (startDate > endDate) {
      mainBox.classList.add("d-none");
      resultBox.classList.add("d-none");
      return;
    }

    const diff = endDate - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    const hours = days * 24;
    const minutes = hours * 60;

    // Weekdays
    let weekdays = 0;
    let temp = new Date(startDate);

    while (temp <= endDate) {
      const day = temp.getDay();
      if (day !== 0 && day !== 6) weekdays++;
      temp.setDate(temp.getDate() + 1);
    }

    // MAIN RESULT
    document.getElementById("result1").innerHTML =
      `${years} Years ${months % 12} Months ${days % 30} Days`;

    document.getElementById("result2").innerHTML = weeks;
    document.getElementById("result3").innerHTML = days;
    document.getElementById("result4").innerHTML = months;
    document.getElementById("result5").innerHTML = hours.toLocaleString();
    document.getElementById("result6").innerHTML = minutes.toLocaleString();
    document.getElementById("result7").innerHTML = weekdays;

    mainBox.classList.remove("d-none");
    resultBox.classList.remove("d-none");
  }

  flatpickr("#startDate", {
    dateFormat: "Y-m-d",
    maxDate: "today",
    onChange: function (selectedDates) {
      startDate = selectedDates[0];
      calculate();
    }
  });

  flatpickr("#endDate", {
    dateFormat: "Y-m-d",
    defaultDate: "today",
    maxDate: "today",
    onChange: function (selectedDates) {
      endDate = selectedDates[0];
      calculate();
    }
  });

});
