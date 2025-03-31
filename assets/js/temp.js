function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const resultDiv = document.getElementById('result');

    if (celsiusInput === '') {
      resultDiv.classList.remove('d-none');
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    resultDiv.classList.remove('d-none');
    resultDiv.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
  }