function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function calculateHCF() {
    const input = document.getElementById("numbersInput").value;
    const resultDiv = document.getElementById("result");

    if (!input.trim()) {
      resultDiv.innerHTML = '<span class="text-danger">Please enter some numbers.</span>';
      return;
    }

    // Split numbers by either comma or space
    const numbers = input.split(/[,\s]+/).map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbers.length < 2) {
      resultDiv.innerHTML = '<span class="text-danger">Enter at least two valid numbers.</span>';
      return;
    }

    let hcf = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      hcf = gcd(hcf, numbers[i]);
    }

    resultDiv.innerHTML = `<strong>HCF:</strong> ${hcf}`;
  }