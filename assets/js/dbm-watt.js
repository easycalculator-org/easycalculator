function convertDbmToWatts() {
    const dbm = parseFloat(document.getElementById("dbmInput").value);
    if (!isNaN(dbm)) {
        const watts = Math.pow(10, dbm / 10) / 1000;
        document.getElementById("wattsOutput").innerText = `${dbm} dBm = ${watts.toFixed(6)} Watts`;
    } else {
        document.getElementById("wattsOutput").innerText = "Please enter a valid dBm value.";
    }
}

// Convert Watts to dBm
function convertWattsToDbm() {
    const watts = parseFloat(document.getElementById("wattsInput").value);
    if (!isNaN(watts) && watts > 0) {
        const dbm = 10 * Math.log10(watts * 1000);
        document.getElementById("dbmOutput").innerText = `${watts} Watts = ${dbm.toFixed(2)} dBm`;
    } else {
        document.getElementById("dbmOutput").innerText = "Please enter a valid Watts value.";
    }
}

function calculate() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const conversionType = document.getElementById("conversionType").value;
    let result = '';
    
    if (conversionType === "dbm-to-watts") {
    result = (10 ** ((inputValue - 30) / 10)).toFixed(6) + " Watts";
    } else if (conversionType === "watts-to-dbm") {
    result = (10 * Math.log10(inputValue) + 30).toFixed(2) + " dBm";
    } else {
    result = "Invalid Conversion Type";
    }
    
    document.getElementById("result").innerText = result;
      }

      function calculate() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const conversionType = document.getElementById("conversionType").value;
  const resultDiv = document.getElementById("result");
  const resultCard = document.getElementById("resultCard");

  if (isNaN(inputValue)) {
    resultDiv.innerHTML = "Please enter a valid number.";
    resultCard.classList.remove("d-none");
    return;
  }

  let result;

  if (conversionType === "dbm-to-watts") {
    result = Math.pow(10, (inputValue - 30) / 10);
    resultDiv.innerHTML = inputValue + " dBm = " + result.toFixed(6) + " Watts";
  } 
  else {
    result = 10 * Math.log10(inputValue) + 30;
    resultDiv.innerHTML = inputValue + " Watts = " + result.toFixed(2) + " dBm";
  }

  // Show result smoothly
  resultCard.classList.remove("d-none");
}

function resetCalculator() {
  document.getElementById("resultCard").classList.add("d-none");
  document.getElementById("result").innerHTML = "";
}
