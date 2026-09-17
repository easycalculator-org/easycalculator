(() => {
  'use strict';
  const root = document.getElementById('ec-lcm');
  const get = id => root.querySelector('#ec-lcm-' + id);
  const form = get('form');
  const inputs = Array.from({length: 5}, (_, i) => get('num' + (i + 1)));
  const format = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const gcd = (a, b) => {
    while (b !== 0n) [a, b] = [b, a % b];
    return a;
  };
  // The input limit keeps trial division quick. LCM arithmetic uses BigInt.
  function factorize(value) {
    let n = Number(value);
    const factors = new Map();
    for (let p = 2; p * p <= n; p = p === 2 ? 3 : p + 2) {
      let exponent = 0;
      while (n % p === 0) { n /= p; exponent++; }
      if (exponent) factors.set(p, exponent);
    }
    if (n > 1) factors.set(n, 1);
    return factors;
  }
  function factorText(factors) {
    return [...factors].sort((a,b) => a[0]-b[0])
      .map(([p,e]) => e === 1 ? String(p) : `${p}^${e}`).join(' × ') || '1';
  }
  function clearError(input, index) {
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    get('error' + (index + 1)).textContent = '';
  }
  function calculate(event) {
    if (event) event.preventDefault();
    get('result').hidden = true;
    const numbers = [];
    let firstInvalid = null;
    inputs.forEach((input, index) => {
      clearError(input, index);
      const raw = input.value.trim();
      let error = '';
      if (!raw) {
        if (index < 2) error = 'Please enter this number.';
      } else if (!/^[0-9]+$/.test(raw)) {
        error = 'Use whole numbers only, without signs, commas or decimals.';
      } else if (raw.length > 10 || BigInt(raw) < 1n || BigInt(raw) > 1000000000n) {
        error = 'Enter a number from 1 to 1,000,000,000.';
      } else {
        numbers.push(BigInt(raw));
      }
      if (error) {
        input.classList.add('is-invalid');
        input.setAttribute('aria-invalid', 'true');
        get('error' + (index + 1)).textContent = error;
        if (!firstInvalid) firstInvalid = input;
      }
    });
    if (firstInvalid) {
      get('status').textContent = 'Please correct the highlighted inputs.';
      firstInvalid.focus();
      return;
    }
    let answer = numbers[0];
    get('steps').replaceChildren();
    numbers.slice(1).forEach(next => {
      const common = gcd(answer, next);
      const previous = answer;
      answer = (answer / common) * next;
      const li = document.createElement('li');
      li.textContent = `GCD(${format(previous)}, ${format(next)}) = ${format(common)}. LCM = (${format(previous)} ÷ ${format(common)}) × ${format(next)} = ${format(answer)}.`;
      get('steps').append(li);
    });
    get('value').textContent = format(answer);
    get('inputs').textContent = numbers.map(format).join(', ');
    get('gcd').textContent = format(numbers.reduce((a,b) => gcd(a,b)));
    get('factors').replaceChildren();
    const highestPowers = new Map();
    numbers.forEach(number => {
      const factors = factorize(number);
      factors.forEach((exponent, prime) => highestPowers.set(prime, Math.max(exponent, highestPowers.get(prime) || 0)));
      const row = document.createElement('tr');
      const label = document.createElement('th');
      label.scope = 'row';
      label.textContent = format(number);
      const cell = document.createElement('td');
      cell.textContent = number === 1n ? '1 has no prime factors' : factorText(factors);
      row.append(label, cell);
      get('factors').append(row);
    });
    get('prime-result').textContent = `LCM = ${factorText(highestPowers)} = ${format(answer)}`;
    get('result').hidden = false;
    get('status').textContent = `Least common multiple: ${format(answer)}.`;
  }
  form.addEventListener('submit', calculate);
  inputs.forEach((input, index) => input.addEventListener('input', () => {
    clearError(input, index);
    get('result').hidden = true;
    get('status').textContent = '';
  }));
  get('example').addEventListener('click', () => {
    inputs.forEach((input, index) => { input.value = ['12', '18', '24', '', ''][index]; });
    calculate();
  });
  form.addEventListener('reset', () => {
    inputs.forEach(clearError);
    get('result').hidden = true;
    get('status').textContent = '';
    inputs[0].focus();
  });
})();