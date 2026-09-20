(() => {
  'use strict';
  const root = document.getElementById('ec-hcf');
  if (!root) return;
  const el = name => root.querySelector('#ec-hcf-' + name);
  const fields = [1, 2, 3, 4, 5].map(i => el('num' + i));
  const fmt = n => n.toLocaleString('en-US');
  const gcd = (a, b) => { while (b) [a, b] = [b, a % b]; return a; };
  function factors(n) {
    const out = new Map();
    for (let p = 2; p * p <= n; p += p === 2 ? 1 : 2) {
      while (n % p === 0) { out.set(p, (out.get(p) || 0) + 1); n /= p; }
    }
    if (n > 1) out.set(n, (out.get(n) || 0) + 1);
    return out;
  }
  const factorText = map => [...map].map(([p, e]) => e === 1 ? fmt(p) : fmt(p) + '^' + e).join(' × ') || '1 (no prime factors)';
  function clearErrors() {
    fields.forEach((field, i) => {
      field.classList.remove('is-invalid'); field.removeAttribute('aria-invalid');
      el('error' + (i + 1)).textContent = '';
    });
  }
  function calculate() {
    clearErrors();
    const numbers = [];
    let firstInvalid = null;
    fields.forEach((field, i) => {
      const value = field.value.trim();
      if (!value && i > 1) return;
      if (!/^\d+$/.test(value) || Number(value) < 1 || Number(value) > 1000000000) {
        field.classList.add('is-invalid'); field.setAttribute('aria-invalid', 'true');
        el('error' + (i + 1)).textContent = 'Enter a whole number from 1 to 1,000,000,000.';
        if (!firstInvalid) firstInvalid = field;
      } else numbers.push(Number(value));
    });
    if (firstInvalid) {
      el('result').hidden = true;
      el('status').textContent = 'Check the highlighted number fields.';
      firstInvalid.focus(); return;
    }
    let hcf = numbers[0], lcm = BigInt(numbers[0]);
    el('steps').replaceChildren();
    numbers.slice(1).forEach(n => {
      const previous = hcf;
      let a = Math.max(hcf, n), b = Math.min(hcf, n);
      const equations = [];
      while (b) {
        const remainder = a % b;
        equations.push(`${fmt(a)} = ${fmt(b)} × ${fmt(Math.floor(a / b))} + ${fmt(remainder)}`);
        [a, b] = [b, remainder];
      }
      hcf = a;
      const li = document.createElement('li');
      const heading = document.createElement('strong');
      heading.textContent = `HCF(${fmt(previous)}, ${fmt(n)}) = ${fmt(hcf)}`;
      li.append(heading);
      equations.forEach(equation => { const line = document.createElement('div'); line.textContent = equation; li.append(line); });
      el('steps').append(li);
      const bigN = BigInt(n);
      lcm = (lcm / gcd(lcm, bigN)) * bigN;
    });
    el('value').textContent = fmt(hcf);
    el('inputs').textContent = numbers.map(fmt).join(', ');
    el('lcm').textContent = fmt(lcm);
    el('factors').replaceChildren();
    numbers.forEach(n => {
      const row = document.createElement('tr');
      [fmt(n), factorText(factors(n))].forEach(value => { const cell = document.createElement('td'); cell.textContent = value; row.append(cell); });
      el('factors').append(row);
    });
    el('prime-result').textContent = hcf === 1 ? 'No prime factor is shared by all the inputs. HCF = 1.' : `HCF = ${factorText(factors(hcf))} = ${fmt(hcf)}`;
    el('result').hidden = false;
    el('status').textContent = `Highest common factor: ${fmt(hcf)}.`;
    el('result').focus({preventScroll: true});
  }
  el('form').addEventListener('submit', event => { event.preventDefault(); calculate(); });
  el('example').addEventListener('click', () => { fields.forEach((field, i) => { field.value = [12, 18, 24, '', ''][i]; }); calculate(); });
  el('form').addEventListener('reset', () => { clearErrors(); el('result').hidden = true; el('status').textContent = 'Calculator cleared.'; fields[0].focus(); });
  fields.forEach(field => field.addEventListener('input', () => { clearErrors(); el('result').hidden = true; el('status').textContent = ''; }));
})();