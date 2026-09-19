(function () {
  'use strict';
  const root = document.getElementById('dt-calculator');
  if (!root) return;
  const get = id => root.querySelector('#dt-' + id);
  const form = get('form');
  const sizes = {KB:1e3,MB:1e6,GB:1e9,TB:1e12,KiB:1024,MiB:1048576,GiB:1073741824,TiB:1099511627776};
  const speeds = {Kbps:1e3,Mbps:1e6,Gbps:1e9,'KB/s':8e3,'MB/s':8e6,'GB/s':8e9,'KiB/s':8192,'MiB/s':8388608};
  function number(value) {
    return value !== 0 && Math.abs(value) < 0.001 ? value.toExponential(3) : value.toLocaleString('en-US', {maximumFractionDigits:3});
  }
  function duration(seconds) {
    if (seconds < 1) return 'Less than 1 second';
    if (seconds > Number.MAX_SAFE_INTEGER) return number(seconds / 86400) + ' days';
    let rest = Math.round(seconds);
    const parts = [];
    for (const [unit, amount] of [['day',86400],['hr',3600],['min',60],['sec',1]]) {
      const count = Math.floor(rest / amount);
      rest %= amount;
      if (count) parts.push(count.toLocaleString('en-US') + ' ' + unit + (unit === 'day' && count !== 1 ? 's' : ''));
    }
    return parts.join(' ');
  }
  function clearResult() {
    for (const id of ['time','ideal','effective','rate']) get(id).textContent = '—';
    get('summary').textContent = 'Inputs changed. Select Calculate download time for an updated result.';
    get('compare').hidden = true;
    get('error').hidden = true;
  }
  function calculate() {
    clearResult();
    if (!form.reportValidity()) return;
    const size = get('size').valueAsNumber;
    const speed = get('speed').valueAsNumber;
    const efficiency = get('efficiency').valueAsNumber;
    const sizeUnit = get('size-unit').value;
    const speedUnit = get('speed-unit').value;
    const bits = size * sizes[sizeUnit] * 8;
    const bps = speed * speeds[speedUnit];
    const effective = bps * efficiency / 100;
    const seconds = bits / effective;
    if (![size,speed,efficiency,bits,bps,effective,seconds].every(Number.isFinite) || size <= 0 || speed <= 0 || efficiency < 1 || efficiency > 100 || seconds <= 0) {
      get('error').textContent = 'Enter a positive file size and speed, and an efficiency from 1% to 100%.';
      get('error').hidden = false;
      return;
    }
    get('time').textContent = duration(seconds);
    get('summary').textContent = number(size) + ' ' + sizeUnit + ' at ' + number(speed) + ' ' + speedUnit + ' with ' + number(efficiency) + '% efficiency.';
    get('ideal').textContent = duration(bits / bps);
    get('effective').textContent = number(effective / 1e6) + ' Mbps';
    get('rate').textContent = number(effective / 8e6) + ' MB/s';
    get('caption').textContent = 'For ' + number(size) + ' ' + sizeUnit + ' at ' + number(efficiency) + '% efficiency. Times rounded to the nearest second; installation excluded.';
    const fragment = document.createDocumentFragment();
    for (const mbps of [10,50,100,300,500,1000]) {
      const row = document.createElement('tr');
      const label = document.createElement('th');
      label.scope = 'row';
      label.textContent = mbps === 1000 ? '1 Gbps' : mbps + ' Mbps';
      const cell = document.createElement('td');
      cell.textContent = duration(bits / (mbps * 1e6 * efficiency / 100));
      row.append(label,cell);
      fragment.append(row);
    }
    get('comparison').replaceChildren(fragment);
    get('compare').hidden = false;
  }
  form.addEventListener('submit', event => {event.preventDefault();calculate();});
  form.addEventListener('input', clearResult);
  form.addEventListener('change', clearResult);
  form.addEventListener('reset', () => {window.setTimeout(calculate,0);});
  calculate();
})();