function convertToCelsius() {
    let kelvin = document.getElementById("kelvinInput").value;
    let celsius = (kelvin - 273.15).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!kelvin) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${kelvin} K = ${celsius} °C`;
    resultDiv.classList.remove("d-none");
  }