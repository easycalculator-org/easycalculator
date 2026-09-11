    
document.addEventListener("DOMContentLoaded", function () {

  const standardModeBtn =
    document.getElementById("standardModeBtn");

  const militaryModeBtn =
    document.getElementById("militaryModeBtn");

  const standardInputSection =
    document.getElementById("standardInputSection");

  const militaryInputSection =
    document.getElementById("militaryInputSection");

  const standardTime =
    document.getElementById("standardTime");

  const militaryTime =
    document.getElementById("militaryTime");

  const convertBtn =
    document.getElementById("convertBtn");

  const currentMilitaryBtn =
    document.getElementById("currentMilitaryBtn");

  const resultBox =
    document.getElementById("resultBox");

  const resultLabel =
    document.getElementById("resultLabel");

  const result =
    document.getElementById("result");

  const resultDescription =
    document.getElementById("resultDescription");

  const errorBox =
    document.getElementById("errorBox");

  const copyBtn =
    document.getElementById("copyBtn");


  let mode = "standard";


  /* ============================
     Helpers
  ============================ */

  function pad(number) {
    return String(number).padStart(2, "0");
  }


  function clearMessages() {

    errorBox.classList.add("d-none");
    resultBox.classList.add("d-none");

  }


  function showError(message) {

    resultBox.classList.add("d-none");

    errorBox.textContent = message;

    errorBox.classList.remove("d-none");

  }


  function showResult(label, value, description) {

    errorBox.classList.add("d-none");

    resultLabel.textContent = label;

    result.textContent = value;

    resultDescription.textContent =
      description;

    resultBox.classList.remove("d-none");

  }


  /* ============================
     Standard Mode
  ============================ */

  standardModeBtn.addEventListener(
    "click",
    function () {

      mode = "standard";

      standardInputSection.classList.remove(
        "d-none"
      );

      militaryInputSection.classList.add(
        "d-none"
      );

      standardModeBtn.classList.remove(
        "btn-outline-primary"
      );

      standardModeBtn.classList.add(
        "btn-primary"
      );

      militaryModeBtn.classList.remove(
        "btn-primary"
      );

      militaryModeBtn.classList.add(
        "btn-outline-primary"
      );

      convertBtn.textContent =
        "Convert to Military Time";

      clearMessages();

    }
  );


  /* ============================
     Military Mode
  ============================ */

  militaryModeBtn.addEventListener(
    "click",
    function () {

      mode = "military";

      standardInputSection.classList.add(
        "d-none"
      );

      militaryInputSection.classList.remove(
        "d-none"
      );

      militaryModeBtn.classList.remove(
        "btn-outline-primary"
      );

      militaryModeBtn.classList.add(
        "btn-primary"
      );

      standardModeBtn.classList.remove(
        "btn-primary"
      );

      standardModeBtn.classList.add(
        "btn-outline-primary"
      );

      convertBtn.textContent =
        "Convert to Standard Time";

      clearMessages();

      militaryTime.focus();

    }
  );


  /* ============================
     Standard → Military
  ============================ */

  function convertStandardToMilitary() {

    clearMessages();

    const value =
      standardTime.value;


    if (!value) {

      showError(
        "Please select a time first."
      );

      standardTime.focus();

      return;

    }


    const parts =
      value.split(":");


    let hours =
      parseInt(parts[0], 10);

    const minutes =
      parseInt(parts[1], 10);

    const seconds =
      parts[2]
        ? parseInt(parts[2], 10)
        : 0;


    /*
     * HTML time input uses 24-hour time.
     * So the value is already suitable
     * for military-time conversion.
     */

    const military =
      pad(hours) +
      pad(minutes);


    showResult(
      "Military Time",
      military,
      formatStandardTime(
        hours,
        minutes
      ) +
      " = " +
      military
    );

  }


  /* ============================
     Military → Standard
  ============================ */

  function convertMilitaryToStandard() {

    clearMessages();

    let value =
      militaryTime.value
        .trim()
        .replace(/:/g, "");


    if (!/^\d{4}$/.test(value)) {

      showError(
        "Please enter a valid 4-digit military time, such as 1430."
      );

      militaryTime.focus();

      return;

    }


    const hours =
      parseInt(
        value.substring(0, 2),
        10
      );

    const minutes =
      parseInt(
        value.substring(2, 4),
        10
      );


    if (
      hours > 23 ||
      minutes > 59
    ) {

      showError(
        "Invalid time. Hours must be 00–23 and minutes must be 00–59."
      );

      militaryTime.focus();

      return;

    }


    let standardHour =
      hours;

    let period =
      "AM";


    if (hours === 0) {

      standardHour = 12;
      period = "AM";

    } else if (hours === 12) {

      standardHour = 12;
      period = "PM";

    } else if (hours > 12) {

      standardHour =
        hours - 12;

      period = "PM";

    }


    const standard =
      standardHour +
      ":" +
      pad(minutes) +
      " " +
      period;


    showResult(
      "Standard Time",
      standard,
      value +
      " = " +
      standard
    );

  }


  /* ============================
     Convert Button
  ============================ */

  convertBtn.addEventListener(
    "click",
    function () {

      if (mode === "standard") {

        convertStandardToMilitary();

      } else {

        convertMilitaryToStandard();

      }

    }
  );


  /* ============================
     Current Military Time
  ============================ */

  currentMilitaryBtn.addEventListener(
    "click",
    function () {

      clearMessages();


      const now =
        new Date();


      const hours =
        now.getHours();

      const minutes =
        now.getMinutes();


      const military =
        pad(hours) +
        pad(minutes);


      const standard =
        formatStandardTime(
          hours,
          minutes
        );


      showResult(
        "Current Military Time",
        military,
        "Your current local time is " +
        standard
      );

    }
  );


  /* ============================
     Format Standard Time
  ============================ */

  function formatStandardTime(
    hours,
    minutes
  ) {

    let hour =
      hours % 12;

    if (hour === 0) {
      hour = 12;
    }


    const period =
      hours >= 12
        ? "PM"
        : "AM";


    return (
      hour +
      ":" +
      pad(minutes) +
      " " +
      period
    );

  }


  /* ============================
     Copy
  ============================ */

  copyBtn.addEventListener(
    "click",
    function () {

      navigator.clipboard
        .writeText(result.textContent)
        .then(function () {

          const original =
            copyBtn.innerHTML;

          copyBtn.innerHTML =
            "✓ Copied";

          setTimeout(
            function () {

              copyBtn.innerHTML =
                original;

            },
            1500
          );

        });

    }
  );


  /* ============================
     Military Input
  ============================ */

  militaryTime.addEventListener(
    "input",
    function () {

      /*
       * Only allow numbers.
       */
      this.value =
        this.value
          .replace(/\D/g, "")
          .substring(0, 4);

    }
  );


  /* ============================
     Enter Key
  ============================ */

  standardTime.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        convertBtn.click();
      }

    }
  );


  militaryTime.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        convertBtn.click();
      }

    }
  );

});