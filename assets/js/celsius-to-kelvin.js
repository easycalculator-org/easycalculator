function convertToKelvin() {
    let celsius = document.getElementById("celsiusInput").value;
    let kelvin = (parseFloat(celsius) + 273.15).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!celsius) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${celsius} °C = ${kelvin} K`;
    resultDiv.classList.remove("d-none");
  }