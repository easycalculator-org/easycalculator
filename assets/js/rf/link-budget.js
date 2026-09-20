(() => {
  'use strict';
  const root = document.getElementById('ec-link-budget');
  if (!root) return;
  const $ = id => root.querySelector('#lb-' + id);
  const form = $('form');
  let latest = null, announceTimer;
  const fixed = value => (Math.abs(value) < 0.005 ? 0 : value).toFixed(2);
  const units = {freq:'',distance:'',txPower:'dBm',txGain:'dBi',txCable:'dB',rxGain:'dBi',rxCable:'dB',rainLoss:'dB',polLoss:'dB',miscLoss:'dB',nf:'dB',snrReq:'dB',bw:'',fadeTarget:'dB',lnaGain:'dB',manualLoss:'dB',manualSens:'dBm'};
  function modes() {
    const manualPath = $('pathMode').value === 'manual';
    const manualSens = $('sensMode').value === 'manual';
    $('path-fields').hidden = !manualPath;
    $('manualLoss').disabled = !manualPath;
    for (const id of ['freq','freqUnit','distance','distanceUnit']) $(id).disabled = manualPath;
    $('estimate-fields').hidden = manualSens;
    $('sensitivity-fields').hidden = !manualSens;
    for (const id of ['nf','snrReq','bw','bwUnit']) $(id).disabled = manualSens;
    $('manualSens').disabled = !manualSens;
  }
  function model(v) {
    const path = v.pathMode === 'manual' ? v.manualLoss : 32.45 + 20*Math.log10(v.freq*v.freqUnit) + 20*Math.log10(v.distance*v.distanceUnit);
    const eirp = v.txPower + v.txGain - v.txCable;
    const extra = v.rainLoss + v.polLoss + v.miscLoss;
    const rx = eirp - path - extra + v.rxGain - v.rxCable;
    const noise = v.sensMode === 'manual' ? null : -174 + 10*Math.log10(v.bw*v.bwUnit) + v.nf;
    const sensitivity = v.sensMode === 'manual' ? v.manualSens : noise + v.snrReq;
    const margin = rx - sensitivity;
    return {path,eirp,extra,rx,noise,sensitivity,margin,headroom:margin-v.fadeTarget,lna:rx+v.lnaGain};
  }
  function invalid(message, focus) {
    latest = null;
    $('download').disabled = true;
    $('error').textContent = message;
    $('error').hidden = false;
    for (const id of ['rx','margin','eirp','path','sensitivity','noise','headroom','lna']) $(id).textContent = '—';
    $('status').textContent = 'Check the highlighted inputs.';
    $('status').dataset.state = 'bad';
    $('breakdown').replaceChildren();
    clearTimeout(announceTimer);
    if (focus) focus.focus();
  }
  function calculate(shouldFocus = false) {
    modes();
    const values = {}, errors = [];
    for (const input of form.querySelectorAll('input[type=number]')) {
      input.removeAttribute('aria-invalid');
      if (input.disabled) continue;
      const n = input.valueAsNumber;
      if (!Number.isFinite(n) || !input.validity.valid) {
        input.setAttribute('aria-invalid','true'); errors.push(input);
      } else values[input.name] = n;
    }
    for (const select of form.querySelectorAll('select')) {
      if (!select.disabled) values[select.name] = select.name.endsWith('Unit') ? Number(select.value) : select.value;
    }
    if (errors.length) {
      const first = errors[0], label = form.querySelector('label[for="'+first.id+'"]').textContent;
      const rule = first.hasAttribute('min') ? ' Enter a value of at least '+first.min+'.' : ' Enter a finite number.';
      invalid('Check '+label+'.'+rule, shouldFocus ? first : null); return;
    }
    const r = model(values);
    if (Object.values(r).some(n => n !== null && !Number.isFinite(n))) {
      invalid('The entered values are outside the supported numeric range. Use smaller values.'); return;
    }
    if (values.pathMode === 'free' && r.path < 0) {
      $('distance').setAttribute('aria-invalid','true');
      invalid('This distance is too small for the free-space model at the selected frequency. Use a far-field distance or enter an appropriate modeled loss.', shouldFocus ? $('distance') : null); return;
    }
    latest = {values,results:r};
    $('error').hidden = true;
    $('download').disabled = false;
    $('rx').textContent = fixed(r.rx); $('margin').textContent = fixed(r.margin);
    for (const [id,unit] of [['eirp','dBm'],['path','dB'],['sensitivity','dBm'],['headroom','dB'],['lna','dBm']]) $(id).textContent = fixed(r[id])+' '+unit;
    $('noise').textContent = r.noise === null ? 'Not calculated' : fixed(r.noise)+' dBm';
    const state = r.margin < -1e-9 ? 'bad' : r.headroom < -1e-9 ? 'warn' : 'good';
    const status = state === 'bad' ? 'Below sensitivity by '+fixed(-r.margin)+' dB' : state === 'warn' ? 'Above sensitivity; '+fixed(-r.headroom)+' dB short of reserve' : 'Meets reserve · '+fixed(r.headroom)+' dB headroom';
    $('status').dataset.state = state; $('status').textContent = status;
    $('model-note').textContent = values.pathMode === 'manual' ? 'Entered path loss; additional losses are subtracted separately. Frequency and distance are not used.' : 'Free-space model; terrain, obstructions and interference are not modeled automatically.';
    const stages = [['TX output power',values.txPower,'dBm'],['TX feeder loss',-values.txCable,'dB'],['TX antenna gain',values.txGain,'dB'],['Path loss',-r.path,'dB'],['Rain / atmosphere',-values.rainLoss,'dB'],['Polarization loss',-values.polLoss,'dB'],['Other path losses',-values.miscLoss,'dB'],['RX antenna gain',values.rxGain,'dB'],['RX feeder loss',-values.rxCable,'dB']];
    let running = 0;
    const frag = document.createDocumentFragment();
    stages.forEach(([name,n,unit],i) => {
      running += n;
      const row = document.createElement('tr');
      for (const text of [name,(i>0&&n>0?'+':'')+fixed(n)+' '+unit,fixed(running)+' dBm']) { const cell = document.createElement('td'); cell.textContent = text; row.appendChild(cell); }
      frag.appendChild(row);
    });
    $('breakdown').replaceChildren(frag);
    clearTimeout(announceTimer);
    announceTimer = setTimeout(() => { $('announcement').textContent = 'Received power '+fixed(r.rx)+' dBm. Link margin '+fixed(r.margin)+' dB. '+status; },400);
  }
  form.addEventListener('input', () => calculate());
  form.addEventListener('change', () => calculate());
  form.addEventListener('submit', event => { event.preventDefault(); calculate(true); });
  $('reset').addEventListener('click', () => {form.reset(); calculate();});
  $('download').addEventListener('click', () => {
    if (!latest) return;
    const {values:v,results:r} = latest;
    const rows = [['RF Link Budget Calculator'],['Source','https://easycalculator.org/rf-link-budget-calculator'],['Parameter','Value','Unit'],['Path loss method',v.pathMode],['Sensitivity method',v.sensMode]];
    for (const [key,unit] of Object.entries(units)) {
      if (!(key in v)) continue;
      const label = form.querySelector('label[for="lb-'+key+'"]').textContent;
      const actualUnit = key === 'freq' ? (v.freqUnit===1?'MHz':'GHz') : key === 'distance' ? ({'1':'km','0.001':'m','1.609344':'mi'}[String(v.distanceUnit)]) : key === 'bw' ? ({'1000000':'MHz','1000':'kHz','1':'Hz'}[String(v.bwUnit)]) : unit;
      rows.push([label,String(v[key]),actualUnit]);
    }
    rows.push(['Results','Value','Unit']);
    for (const [key,label,unit] of [['eirp','EIRP','dBm'],['path','Path loss','dB'],['rx','Received power at input','dBm'],['noise','Input-referred noise','dBm'],['sensitivity','Receiver sensitivity','dBm'],['margin','Link margin','dB'],['headroom','Headroom after reserve','dB'],['lna','Signal at LNA output','dBm']]) rows.push([label,r[key]===null?'Not calculated':fixed(r[key]),unit]);
    rows.push(['Reference point','Receiver input after RX feeder and before optional LNA'],['Assumptions','Thermal-noise estimate near 290 K; selected path loss plus separate extra losses; no automatic interference or availability model']);
    const csv = '\uFEFF'+rows.map(row => row.map(s => '"'+String(s).replace(/"/g,'""')+'"').join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));
    const a = document.createElement('a'); a.href=url; a.download='rf-link-budget-results.csv'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  calculate();
})();