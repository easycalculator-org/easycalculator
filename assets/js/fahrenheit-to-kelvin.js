function convertToKelvin() {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    let kelvin = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!fahrenheit) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${fahrenheit} °F = ${kelvin} K`;
    resultDiv.classList.remove("d-none");
  }