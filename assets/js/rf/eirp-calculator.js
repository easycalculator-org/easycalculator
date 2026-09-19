(function () {
  'use strict';
  const byId = id => document.getElementById(id);
  const form = byId('eirp-form');
  const results = byId('eirp-results');
  const error = byId('eirp-error');
  function number(id, label, optional) {
    const el = byId(id);
    el.removeAttribute('aria-invalid');
    if (optional && el.value.trim() === '' && !el.validity.badInput) return 0;
    const n = el.valueAsNumber;
    if (!Number.isFinite(n)) {
      el.setAttribute('aria-invalid', 'true');
      throw {message: 'Enter a finite number for ' + label + '.', element: el};
    }
    return n;
  }
  function reject(id, message) {
    const el = byId(id); el.setAttribute('aria-invalid', 'true');
    throw {message: message, element: el};
  }
  function fmt(n) {
    if (n !== 0 && (Math.abs(n) < 0.0001 || Math.abs(n) >= 1e9)) return n.toExponential(5);
    return Number(n.toFixed(5)).toString();
  }
  function calculate(focusError) {
    error.hidden = true;
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
    try {
      const power = number('eirp-power', 'transmitter power');
      const gain = number('eirp-gain', 'antenna gain');
      const cable = number('eirp-cable', 'cable loss');
      const other = number('eirp-other', 'other feed losses', true);
      const unit = byId('eirp-power-unit').value;
      if ((unit === 'W' || unit === 'mW') && power <= 0) reject('eirp-power', 'Power in watts or milliwatts must be greater than zero.');
      if (cable < 0) reject('eirp-cable', 'Cable loss must be zero or positive.');
      if (other < 0) reject('eirp-other', 'Other feed losses must be zero or positive.');
      const tx = unit === 'W' ? 10 * Math.log10(power) + 30 : unit === 'mW' ? 10 * Math.log10(power) : unit === 'dBW' ? power + 30 : power;
      const gainDBi = gain + (byId('eirp-gain-unit').value === 'dBd' ? 2.15 : 0);
      const dbm = tx + gainDBi - cable - other;
      const watts = Math.pow(10, (dbm - 30) / 10);
      const erp = dbm - 2.15;
      const erpWatts = Math.pow(10, (erp - 30) / 10);
      if (![dbm, watts, erp, erpWatts].every(Number.isFinite) || watts <= 0 || erpWatts <= 0) throw {message: 'These inputs exceed the numerical range of this calculator. Use practical RF values.'};
      byId('eirp-dbm').textContent = fmt(dbm) + ' dBm';
      byId('eirp-watts').textContent = fmt(watts) + ' W';
      byId('eirp-erp').textContent = 'ERP: ' + fmt(erp) + ' dBm · ' + fmt(erpWatts) + ' W';
      byId('eirp-steps').textContent = fmt(tx) + ' dBm + (' + fmt(gainDBi) + ' dBi) − ' + fmt(cable) + ' dB − ' + fmt(other) + ' dB = ' + fmt(dbm) + ' dBm';
      results.hidden = false;
    } catch (e) {
      results.hidden = true; error.textContent = e.message; error.hidden = false;
      if (focusError && e.element) e.element.focus();
    }
  }
  form.addEventListener('submit', e => {e.preventDefault(); calculate(true);});
  function clearResult() {results.hidden = true; error.hidden = true; form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));}
  form.addEventListener('input', clearResult);
  form.addEventListener('change', clearResult);
  form.addEventListener('reset', () => setTimeout(() => calculate(false), 0));
  calculate(false);
}());