
(function () {

  const voltageInput =
    document.getElementById("voltageInput");

  const currentInput =
    document.getElementById("currentInput");

  const resistanceInput =
    document.getElementById("resistanceInput");

  const powerInput =
    document.getElementById("powerInput");


  const voltageUnit =
    document.getElementById("voltageUnit");

  const currentUnit =
    document.getElementById("currentUnit");

  const resistanceUnit =
    document.getElementById("resistanceUnit");

  const powerUnit =
    document.getElementById("powerUnit");


  const calculateBtn =
    document.getElementById("calculateBtn");

  const resetBtn =
    document.getElementById("resetBtn");

  const downloadPdfBtn =
    document.getElementById("downloadPdfBtn");

  const errorBox =
    document.getElementById("errorBox");

  const resultSection =
    document.getElementById("resultSection");

  let lastResult = null;


  /* =========================
     UNIT CONVERSION
  ========================= */

  const voltageFactors = {
    "V": 1,
    "mV": 0.001,
    "kV": 1000,
    "µV": 0.000001
  };


  const currentFactors = {
    "A": 1,
    "mA": 0.001,
    "µA": 0.000001,
    "kA": 1000
  };


  const resistanceFactors = {
    "Ω": 1,
    "mΩ": 0.001,
    "kΩ": 1000,
    "MΩ": 1000000
  };


  const powerFactors = {
    "W": 1,
    "mW": 0.001,
    "kW": 1000
  };


  /* =========================
     FORMAT
  ========================= */

  function formatNumber(
    value,
    decimals = 6
  ) {

    return new Intl.NumberFormat(
      "en-US",
      {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals
      }
    ).format(value);

  }


  function formatVoltage(value) {

    const abs = Math.abs(value);

    if (abs >= 1000) {

      return (
        formatNumber(value / 1000, 4) +
        " kV"
      );

    }

    if (
      abs > 0 &&
      abs < 0.001
    ) {

      return (
        formatNumber(value * 1000000, 4) +
        " µV"
      );

    }

    if (abs < 1) {

      return (
        formatNumber(value * 1000, 4) +
        " mV"
      );

    }

    return (
      formatNumber(value, 4) +
      " V"
    );

  }


  function formatCurrent(value) {

    const abs = Math.abs(value);

    if (abs >= 1000) {

      return (
        formatNumber(value / 1000, 4) +
        " kA"
      );

    }

    if (
      abs > 0 &&
      abs < 0.001
    ) {

      return (
        formatNumber(value * 1000000, 4) +
        " µA"
      );

    }

    if (abs < 1) {

      return (
        formatNumber(value * 1000, 4) +
        " mA"
      );

    }

    return (
      formatNumber(value, 4) +
      " A"
    );

  }


  function formatResistance(value) {

    const abs = Math.abs(value);

    if (abs >= 1000000) {

      return (
        formatNumber(value / 1000000, 4) +
        " MΩ"
      );

    }

    if (abs >= 1000) {

      return (
        formatNumber(value / 1000, 4) +
        " kΩ"
      );

    }

    if (
      abs > 0 &&
      abs < 1
    ) {

      return (
        formatNumber(value * 1000, 4) +
        " mΩ"
      );

    }

    return (
      formatNumber(value, 4) +
      " Ω"
    );

  }


  function formatPower(value) {

    const abs = Math.abs(value);

    if (abs >= 1000) {

      return (
        formatNumber(value / 1000, 4) +
        " kW"
      );

    }

    if (
      abs > 0 &&
      abs < 0.001
    ) {

      return (
        formatNumber(value * 1000000, 4) +
        " µW"
      );

    }

    if (abs < 1) {

      return (
        formatNumber(value * 1000, 4) +
        " mW"
      );

    }

    return (
      formatNumber(value, 4) +
      " W"
    );

  }


  /* =========================
     GET VALUE IN BASE UNIT
  ========================= */

  function getInputValue(input, unitMap, unit) {

    if (
      input.value === "" ||
      input.value === null
    ) {
      return null;
    }

    const value =
      Number(input.value);

    if (
      !Number.isFinite(value) ||
      value < 0
    ) {
      throw new Error(
        "Please enter valid non-negative values."
      );
    }

    return value * unitMap[unit];

  }


  /* =========================
     ERROR
  ========================= */

  function showError(message) {

    errorBox.textContent =
      message;

    errorBox.classList.remove(
      "d-none"
    );

    resultSection.classList.add(
      "d-none"
    );

    downloadPdfBtn.disabled =
      true;

  }


  function clearError() {

    errorBox.textContent = "";

    errorBox.classList.add(
      "d-none"
    );

  }


  /* =========================
     STEP CREATOR
  ========================= */

  function addStep(title, equation) {

    const div =
      document.createElement("div");

    div.className =
      "step-box";

    div.innerHTML = `
      <div class="step-title">
        ${title}
      </div>

      <div class="step-equation">
        ${equation}
      </div>
    `;

    document
      .getElementById("calculationSteps")
      .appendChild(div);

  }


  /* =========================
     CALCULATE
  ========================= */

  function calculate() {

    clearError();

    try {

      const V =
        getInputValue(
          voltageInput,
          voltageFactors,
          voltageUnit.value
        );

      const I =
        getInputValue(
          currentInput,
          currentFactors,
          currentUnit.value
        );

      const R =
        getInputValue(
          resistanceInput,
          resistanceFactors,
          resistanceUnit.value
        );

      const P =
        getInputValue(
          powerInput,
          powerFactors,
          powerUnit.value
        );


      const values = {
        V: V,
        I: I,
        R: R,
        P: P
      };


      const known =
        Object.keys(values)
          .filter(
            key =>
              values[key] !== null
          );


      if (known.length !== 2) {

        throw new Error(
          "Please enter exactly two known values."
        );

      }


      /*
       * Prevent invalid zero divisions.
       */

      if (
        (known.includes("V") && V === 0) ||
        (known.includes("I") && I === 0) ||
        (known.includes("R") && R === 0) ||
        (known.includes("P") && P === 0)
      ) {

        /*
         * Zero can be mathematically valid in
         * some combinations, but not when used
         * as a divisor.
         */

      }


      let voltage;
      let current;
      let resistance;
      let power;
      let mainVariable;
      let mainFormula;


      /*
       * V + I
       */

      if (
        known.includes("V") &&
        known.includes("I")
      ) {

        voltage = V;
        current = I;

        if (current === 0) {

          throw new Error(
            "Current must be greater than zero to calculate resistance."
          );

        }

        resistance =
          voltage / current;

        power =
          voltage * current;

        mainVariable =
          "Resistance";

        mainFormula =
          "R = V / I";


      /*
       * V + R
       */

      } else if (
        known.includes("V") &&
        known.includes("R")
      ) {

        voltage = V;
        resistance = R;

        if (resistance === 0) {

          throw new Error(
            "Resistance must be greater than zero."
          );

        }

        current =
          voltage / resistance;

        power =
          voltage * current;

        mainVariable =
          "Current";

        mainFormula =
          "I = V / R";


      /*
       * V + P
       */

      } else if (
        known.includes("V") &&
        known.includes("P")
      ) {

        voltage = V;
        power = P;

        if (voltage === 0) {

          throw new Error(
            "Voltage must be greater than zero to calculate current."
          );

        }

        current =
          power / voltage;

        resistance =
          (voltage * voltage) /
          power;

        mainVariable =
          "Current";

        mainFormula =
          "I = P / V";


      /*
       * I + R
       */

      } else if (
        known.includes("I") &&
        known.includes("R")
      ) {

        current = I;
        resistance = R;

        voltage =
          current * resistance;

        power =
          current * current *
          resistance;

        mainVariable =
          "Voltage";

        mainFormula =
          "V = I × R";


      /*
       * I + P
       */

      } else if (
        known.includes("I") &&
        known.includes("P")
      ) {

        current = I;
        power = P;

        if (current === 0) {

          throw new Error(
            "Current must be greater than zero to calculate voltage."
          );

        }

        voltage =
          power / current;

        resistance =
          power /
          (current * current);

        mainVariable =
          "Voltage";

        mainFormula =
          "V = P / I";


      /*
       * R + P
       */

      } else if (
        known.includes("R") &&
        known.includes("P")
      ) {

        resistance = R;
        power = P;

        if (resistance === 0) {

          throw new Error(
            "Resistance must be greater than zero."
          );

        }

        current =
          Math.sqrt(
            power / resistance
          );

        voltage =
          Math.sqrt(
            power * resistance
          );

        mainVariable =
          "Voltage";

        mainFormula =
          "V = √(P × R)";

      }


      if (
        !Number.isFinite(voltage) ||
        !Number.isFinite(current) ||
        !Number.isFinite(resistance) ||
        !Number.isFinite(power)
      ) {

        throw new Error(
          "Unable to calculate the result. Please check your values."
        );

      }


      /*
       * Update main result
       */

      let mainValue;

      if (
        mainVariable === "Voltage"
      ) {

        mainValue =
          formatVoltage(voltage);

      } else if (
        mainVariable === "Current"
      ) {

        mainValue =
          formatCurrent(current);

      } else {

        mainValue =
          formatResistance(resistance);

      }


      document.getElementById(
        "mainResult"
      ).textContent =
        mainValue;


      document.getElementById(
        "mainFormula"
      ).textContent =
        mainFormula;


      /*
       * Result cards
       */

      document.getElementById(
        "voltageResult"
      ).textContent =
        formatVoltage(voltage);


      document.getElementById(
        "currentResult"
      ).textContent =
        formatCurrent(current);


      document.getElementById(
        "resistanceResult"
      ).textContent =
        formatResistance(resistance);


      document.getElementById(
        "powerResult"
      ).textContent =
        formatPower(power);


      /*
       * Steps
       */

      const steps =
        document.getElementById(
          "calculationSteps"
        );

      steps.innerHTML = "";


      /*
       * Generate calculation explanation
       */

      if (
        known.includes("V") &&
        known.includes("I")
      ) {

        addStep(
          "Step 1: Calculate Resistance",
          "R = V / I = " +
          formatVoltage(V) +
          " / " +
          formatCurrent(I) +
          " = " +
          formatResistance(resistance)
        );

        addStep(
          "Step 2: Calculate Power",
          "P = V × I = " +
          formatVoltage(V) +
          " × " +
          formatCurrent(I) +
          " = " +
          formatPower(power)
        );

      } else if (
        known.includes("V") &&
        known.includes("R")
      ) {

        addStep(
          "Step 1: Calculate Current",
          "I = V / R = " +
          formatVoltage(V) +
          " / " +
          formatResistance(R) +
          " = " +
          formatCurrent(current)
        );

        addStep(
          "Step 2: Calculate Power",
          "P = V × I = " +
          formatVoltage(V) +
          " × " +
          formatCurrent(current) +
          " = " +
          formatPower(power)
        );

      } else if (
        known.includes("V") &&
        known.includes("P")
      ) {

        addStep(
          "Step 1: Calculate Current",
          "I = P / V = " +
          formatPower(P) +
          " / " +
          formatVoltage(V) +
          " = " +
          formatCurrent(current)
        );

        addStep(
          "Step 2: Calculate Resistance",
          "R = V² / P = " +
          formatVoltage(V) +
          "² / " +
          formatPower(P) +
          " = " +
          formatResistance(resistance)
        );

      } else if (
        known.includes("I") &&
        known.includes("R")
      ) {

        addStep(
          "Step 1: Calculate Voltage",
          "V = I × R = " +
          formatCurrent(I) +
          " × " +
          formatResistance(R) +
          " = " +
          formatVoltage(voltage)
        );

        addStep(
          "Step 2: Calculate Power",
          "P = I² × R = " +
          formatCurrent(I) +
          "² × " +
          formatResistance(R) +
          " = " +
          formatPower(power)
        );

      } else if (
        known.includes("I") &&
        known.includes("P")
      ) {

        addStep(
          "Step 1: Calculate Voltage",
          "V = P / I = " +
          formatPower(P) +
          " / " +
          formatCurrent(I) +
          " = " +
          formatVoltage(voltage)
        );

        addStep(
          "Step 2: Calculate Resistance",
          "R = P / I² = " +
          formatPower(P) +
          " / " +
          formatCurrent(I) +
          "² = " +
          formatResistance(resistance)
        );

      } else if (
        known.includes("R") &&
        known.includes("P")
      ) {

        addStep(
          "Step 1: Calculate Voltage",
          "V = √(P × R) = √(" +
          formatPower(P) +
          " × " +
          formatResistance(R) +
          ") = " +
          formatVoltage(voltage)
        );

        addStep(
          "Step 2: Calculate Current",
          "I = √(P / R) = √(" +
          formatPower(P) +
          " / " +
          formatResistance(R) +
          ") = " +
          formatCurrent(current)
        );

      }


      /*
       * Save result
       */

      lastResult = {

        voltage: voltage,

        current: current,

        resistance: resistance,

        power: power,

        mainVariable:
          mainVariable,

        mainFormula:
          mainFormula,

        knownValues:
          known.join(" + ")

      };


      resultSection.classList.remove(
        "d-none"
      );

      downloadPdfBtn.disabled =
        false;


      resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } catch (error) {

      showError(
        error.message
      );

    }

  }


  /* =========================
     BUTTON EVENTS
  ========================= */

  calculateBtn.addEventListener(
    "click",
    calculate
  );


  [
    voltageInput,
    currentInput,
    resistanceInput,
    powerInput
  ].forEach(function (input) {

    input.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {
          calculate();
        }

      }
    );

  });


  resetBtn.addEventListener(
    "click",
    function () {

      voltageInput.value = "";
      currentInput.value = "";
      resistanceInput.value = "";
      powerInput.value = "";

      voltageUnit.value = "V";
      currentUnit.value = "A";
      resistanceUnit.value = "Ω";
      powerUnit.value = "W";

      clearError();

      resultSection.classList.add(
        "d-none"
      );

      downloadPdfBtn.disabled =
        true;

      lastResult = null;

    }
  );


  /* =========================
     PDF
  ========================= */

  downloadPdfBtn.addEventListener(
    "click",
    function () {

      if (!lastResult) {
        return;
      }


      const { jsPDF } =
        window.jspdf;

      const doc =
        new jsPDF();


      /*
       * Header
       */

      doc.setFontSize(20);

      doc.text(
        "Ohm's Law Calculator Report",
        14,
        20
      );


      doc.setFontSize(10);

      doc.text(
        "Generated by EasyCalculator.org",
        14,
        27
      );


      /*
       * Main Result
       */

      doc.setFontSize(12);

      doc.text(
        "Calculated " +
        lastResult.mainVariable,
        14,
        40
      );


      doc.setFontSize(22);

      let mainPdfValue;

      if (
        lastResult.mainVariable ===
        "Voltage"
      ) {

        mainPdfValue =
          formatVoltage(
            lastResult.voltage
          );

      } else if (
        lastResult.mainVariable ===
        "Current"
      ) {

        mainPdfValue =
          formatCurrent(
            lastResult.current
          );

      } else {

        mainPdfValue =
          formatResistance(
            lastResult.resistance
          );

      }


      doc.text(
        mainPdfValue,
        14,
        51
      );


      doc.setFontSize(10);

      doc.text(
        lastResult.mainFormula,
        14,
        59
      );


      /*
       * Results Table
       */

      doc.setFontSize(13);

      doc.text(
        "Calculation Results",
        14,
        73
      );


      doc.autoTable({

        startY: 79,

        head: [
          ["Quantity", "Value"]
        ],

        body: [

          [
            "Voltage",
            formatVoltage(
              lastResult.voltage
            )
          ],

          [
            "Current",
            formatCurrent(
              lastResult.current
            )
          ],

          [
            "Resistance",
            formatResistance(
              lastResult.resistance
            )
          ],

          [
            "Power",
            formatPower(
              lastResult.power
            )
          ]

        ],

        theme: "grid",

        styles: {
          fontSize: 9
        },

        headStyles: {
          fontStyle: "bold"
        }

      });


      /*
       * Formula Section
       */

      let y =
        doc.lastAutoTable.finalY + 15;


      if (y > 245) {

        doc.addPage();

        y = 20;

      }


      doc.setFontSize(13);

      doc.text(
        "Ohm's Law Formulas",
        14,
        y
      );


      doc.setFontSize(10);

      doc.text(
        "V = I × R",
        14,
        y + 10
      );

      doc.text(
        "I = V / R",
        14,
        y + 18
      );

      doc.text(
        "R = V / I",
        14,
        y + 26
      );

      doc.text(
        "P = V × I",
        14,
        y + 34
      );

      doc.text(
        "P = I² × R",
        14,
        y + 42
      );

      doc.text(
        "P = V² / R",
        14,
        y + 50
      );


      /*
       * Footer
       */

      doc.setFontSize(8);

      doc.text(
        "EasyCalculator.org",
        14,
        285
      );

      doc.text(
        "Ohm's Law Calculator",
        150,
        285
      );


      doc.save(
        "ohms-law-calculator-result.pdf"
      );

    }
  );


})();