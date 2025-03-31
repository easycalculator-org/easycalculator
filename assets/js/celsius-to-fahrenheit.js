function convertToFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;
    let fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!celsius) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${celsius} °C = ${fahrenheit} °F`;
    resultDiv.classList.remove("d-none");
  }