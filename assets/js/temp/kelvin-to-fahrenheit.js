function convertToFahrenheit() {
    let kelvin = document.getElementById("kelvinInput").value;
    let fahrenheit = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!kelvin) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${kelvin} K = ${fahrenheit} °F`;
    resultDiv.classList.remove("d-none");
  }

  function setKelvin(value){
  document.getElementById('kelvinInput').value = value;
  convertToFahrenheit();
}