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