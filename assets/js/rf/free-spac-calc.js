(() => {
  'use strict';
  const root = document.getElementById('fspl-calculator');
  const get = id => root.querySelector('#fp-' + id);
  const form = get('form');
  const c = 299792458;
  const constant = 20 * Math.log10(4 * Math.PI / c);
  let result = null;
  const format = n => Math.abs(n) >= 1e7 || (n !== 0 && Math.abs(n) < 0.0001) ? n.toExponential(4) : String(Number(n.toPrecision(8)));
  function clear() {
    result = null;
    get('fspl').textContent = '—'; get('rx').textContent = '—';
    get('context').textContent = 'Inputs changed. Select Calculate FSPL.';
    get('steps').textContent = 'FSPL = 20 log₁₀(4πdf/c)';
    get('rx-steps').textContent = 'TX power + TX gain + RX gain − FSPL − other losses';
    get('download').disabled = true; get('warning').hidden = true; get('error').hidden = true;
    form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
  }
  function read(id, label, rule = () => true, hint = 'Enter a finite number.') {
    const el = get(id); const n = el.valueAsNumber;
    if (el.value.trim() === '' || !Number.isFinite(n) || !rule(n)) {
      el.setAttribute('aria-invalid', 'true');
      el.setAttribute('aria-describedby', 'fp-error');
      const details = el.closest('details'); if (details) details.open = true;
      el.focus(); throw new Error(label + ': ' + hint);
    }
    el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); return n;
  }
  function calculate() {
    clear();
    try {
      const d = read('distance','Distance',n=>n>0,'Enter a number greater than zero.');
      const f = read('frequency','Frequency',n=>n>0,'Enter a number greater than zero.');
      const tx = read('tx','TX power'); const gt = read('tx-gain','TX antenna gain');
      const gr = read('rx-gain','RX antenna gain');
      const loss = read('loss','Other losses',n=>n>=0,'Enter zero or a positive number.');
      const meters = d * Number(get('distance-unit').value);
      const hz = f * Number(get('frequency-unit').value);
      if (!Number.isFinite(meters) || !Number.isFinite(hz) || meters<=0 || hz<=0) throw new Error('The converted distance or frequency is outside the supported numeric range.');
      const fspl = 20*Math.log10(meters) + 20*Math.log10(hz) + constant;
      const rx = tx + gt + gr - fspl - loss;
      if (!Number.isFinite(fspl) || !Number.isFinite(rx)) throw new Error('These values exceed the supported numeric range.');
      const du = get('distance-unit').selectedOptions[0].textContent;
      const fu = get('frequency-unit').selectedOptions[0].textContent;
      get('fspl').textContent = fspl.toFixed(2) + ' dB';
      get('rx').textContent = rx.toFixed(2) + ' dBm';
      get('context').textContent = format(d) + ' ' + du + ' at ' + format(f) + ' ' + fu;
      get('steps').textContent = '20 log₁₀(' + format(meters) + ' m) + 20 log₁₀(' + format(hz) + ' Hz) − 147.5522 = ' + fspl.toFixed(2) + ' dB';
      get('rx-steps').textContent = [tx,gt,gr].map(n=>'('+format(n)+')').join(' + ') + ' − ('+fspl.toFixed(2)+') − ('+format(loss)+') = '+rx.toFixed(2)+' dBm';
      if (meters < c/hz || fspl < 0) {
        get('warning').textContent = 'This separation is less than one wavelength or produces negative FSPL. Treat this as a mathematical result only; the far-field model may not apply. Check the antenna dimensions and geometry.';
        get('warning').hidden = false;
      }
      result = {d,du,f,fu,tx,gt,gr,loss,fspl,rx};
      get('download').disabled = false;
    } catch (error) { get('error').textContent = error.message; get('error').hidden = false; get('context').textContent = 'Check your inputs to calculate.'; }
  }
  form.addEventListener('submit', e => { e.preventDefault(); calculate(); });
  form.addEventListener('input', clear);
  form.addEventListener('change', clear);
  form.addEventListener('reset', () => { setTimeout(calculate, 0); });
  root.querySelectorAll('[data-frequency]').forEach(button => button.addEventListener('click', () => {
    get('distance').value = button.dataset.distance; get('distance-unit').value = '1000';
    get('frequency').value = button.dataset.frequency; get('frequency-unit').value = '1000000'; calculate();
  }));
  get('download').addEventListener('click', () => {
    if (!result) return;
    const r = result;
    const rows = [['Parameter','Value','Unit'],['Distance',r.d,r.du],['Frequency',r.f,r.fu],['TX power',r.tx,'dBm'],['TX antenna gain',r.gt,'dBi'],['RX antenna gain',r.gr,'dBi'],['Other losses',r.loss,'dB'],['FSPL',r.fspl.toFixed(6),'dB'],['Received power',r.rx.toFixed(6),'dBm'],['Model','Ideal free-space far-field estimate','']];
    const csv = rows.map(row=>row.join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
    const link = document.createElement('a'); link.href=url; link.download='fspl-results.csv';
    document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  calculate();
})();