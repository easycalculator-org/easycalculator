function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheitInput").value;
    let celsius = ((fahrenheit - 32) * 5/9).toFixed(2);
    let resultDiv = document.getElementById("result");

    if (!fahrenheit) {
      resultDiv.classList.add("d-none");
      return;
    }

    resultDiv.innerText = `${fahrenheit} °F = ${celsius} °C`;
    resultDiv.classList.remove("d-none");
  }