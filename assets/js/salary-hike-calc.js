(function () {
  'use strict';
  const root = document.getElementById('ec-salary-hike');
  if (!root) return;
  const $ = id => root.querySelector('#sh-' + id);
  const periods = [{name:'Annual',factor:1},{name:'Monthly',factor:12},{name:'Half-monthly',factor:24},{name:'Every two weeks',factor:26},{name:'Weekly',factor:52}];
  let mode = 'compare', result = null;
  function invalidate() {
    result = null; $('output').hidden = true; $('breakdown').hidden = true; $('empty').hidden = false;
    $('download').disabled = true; $('pdf-status').textContent = 'Calculate a result to enable your PDF report.';
    $('error').hidden = true;
  }
  function setMode(next) {
    mode = next;
    $('mode-compare').setAttribute('aria-pressed', String(mode === 'compare'));
    $('mode-percent').setAttribute('aria-pressed', String(mode === 'percent'));
    $('new-field').hidden = mode !== 'compare'; $('rate-field').hidden = mode !== 'percent';
    $('new').disabled = mode !== 'compare'; $('new').required = mode === 'compare';
    $('rate').disabled = mode !== 'percent'; $('rate').required = mode === 'percent'; invalidate();
  }
  function format(n) {
    const currency = $('currency').value;
    return new Intl.NumberFormat($('format').value, currency ? {style:'currency',currency:currency,currencyDisplay:'code',minimumFractionDigits:2,maximumFractionDigits:2} : {minimumFractionDigits:2,maximumFractionDigits:2}).format(n === 0 ? 0 : n);
  }
  function percentage(n) { return new Intl.NumberFormat($('format').value,{maximumFractionDigits:4}).format(Math.abs(n)); }
  function calculate() {
    invalidate();
    const active = [ $('current'), mode === 'compare' ? $('new') : $('rate') ];
    const bad = active.find(input => !input.checkValidity() || !Number.isFinite(input.valueAsNumber));
    if (bad) {
      $('error').textContent = bad === $('current') ? 'Enter a current salary from 0.01 to 1,000,000,000,000.' : mode === 'compare' ? 'Enter a new salary from 0 to 1,000,000,000,000.' : 'Enter a hike from -100% to 100,000%.';
      $('error').hidden = false; bad.focus(); return;
    }
    const current = $('current').valueAsNumber;
    const next = mode === 'compare' ? $('new').valueAsNumber : current * (1 + $('rate').valueAsNumber / 100);
    if (!Number.isFinite(next) || next > 1e12) { $('error').textContent = 'The revised salary is too large. Use a value at or below 1,000,000,000,000.'; $('error').hidden = false; return; }
    const change = next - current, factor = Number($('period').value);
    result = {current:current,next:next,change:change,rate:mode === 'percent' ? $('rate').valueAsNumber : change/current*100,factor:factor,currency:$('currency').value,mode:mode};
    $('result-label').textContent = 'New salary — per ' + $('period').selectedOptions[0].text.toLowerCase();
    $('total').textContent = format(next); $('old').textContent = format(current);
    $('difference').textContent = format(change); $('annual').textContent = format(change*factor);
    $('badge').textContent = result.rate === 0 ? 'No change (0%)' : percentage(result.rate) + '% ' + (result.rate < 0 ? 'decrease' : 'increase');
    $('badge').classList.toggle('sh-negative',result.rate < 0);
    $('rows').replaceChildren();
    periods.forEach(p => {
      const tr = document.createElement('tr'), th = document.createElement('th'); th.scope = 'row'; th.textContent = p.name; tr.appendChild(th);
      [current,next,change].forEach(n => { const td = document.createElement('td'); td.textContent = format(n*factor/p.factor); tr.appendChild(td); }); $('rows').appendChild(tr);
    });
    $('empty').hidden = true; $('output').hidden = false; $('breakdown').hidden = false;
    $('download').disabled = false; $('pdf-status').textContent = 'Your report is ready. Calculations and PDF generation run in your browser.';
  }
  $('mode-compare').addEventListener('click',() => setMode('compare'));
  $('mode-percent').addEventListener('click',() => setMode('percent'));
  $('form').addEventListener('submit',event => { event.preventDefault(); calculate(); });
  $('form').addEventListener('input',invalidate); $('form').addEventListener('change',invalidate);
  $('form').addEventListener('reset',() => { setMode('compare'); });
  $('example').addEventListener('click',() => { $('current').value = '80000'; $('new').value = '100000'; $('rate').value = '25'; $('period').value = '1'; calculate(); });
  // Lightweight ASCII PDF: currency codes avoid missing currency glyphs in standard PDF fonts.
  // All text is ASCII, so string offsets equal byte offsets in the PDF cross-reference table.
  function makePDF(lines) {
    const escapePDF = text => text.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
    let stream = 'BT\n/F1 18 Tf\n50 790 Td\n(' + escapePDF(lines[0]) + ') Tj\n/F1 10 Tf\n';
    lines.slice(1).forEach(line => { stream += '0 -20 Td\n(' + escapePDF(line) + ') Tj\n'; }); stream += 'ET';
    const objects = ['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R] /Count 1 >>','<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>','<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>','<< /Length ' + stream.length + ' >>\nstream\n' + stream + '\nendstream'];
    let pdf = '%PDF-1.4\n', offsets = [0];
    objects.forEach((obj,i) => { offsets.push(pdf.length); pdf += (i+1) + ' 0 obj\n' + obj + '\nendobj\n'; });
    const xref = pdf.length; pdf += 'xref\n0 6\n0000000000 65535 f \n';
    offsets.slice(1).forEach(offset => { pdf += String(offset).padStart(10,'0') + ' 00000 n \n'; });
    pdf += 'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF';
    return new Blob([pdf],{type:'application/pdf'});
  }
  $('download').addEventListener('click',() => {
    if (!result) return;
    try {
      const r = result, money = n => (r.currency ? r.currency + ' ' : '') + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
      const lines = ['Salary Hike Report','EasyCalculator.org | ' + new Date().toISOString().slice(0,10),'',
        'Mode: ' + (r.mode === 'compare' ? 'Current and new salary' : 'Current salary and hike percentage'),
        'Input period: ' + $('period').selectedOptions[0].text,
        'Currency: ' + (r.currency || 'Unspecified (same currency for all amounts)'),
        'Current salary: ' + money(r.current),'New salary: ' + money(r.next),
        'Salary change: ' + money(r.change),'Percentage change: ' + Number(r.rate.toFixed(4)) + '%','',
        'SALARY BREAKDOWN'];
      periods.forEach(p => { lines.push(p.name + ' | Current: ' + money(r.current*r.factor/p.factor)); lines.push('New: ' + money(r.next*r.factor/p.factor) + ' | Change: ' + money(r.change*r.factor/p.factor)); });
      lines.push('','FORMULAS','Hike (%) = (New - Current) / Current x 100','New salary = Current x (1 + Hike / 100)','',
        'Assumes 12 months, 24 half-months, 26 two-week periods or 52 weeks per year.',
        'Annual change assumes the revised rate applies for a full year.',
        'No currency conversion, taxes, deductions or variable bonuses are calculated.',
        'Amounts rounded to 2 decimals. PDF numbers use international formatting.',
        'https://easycalculator.org/salary-hike-calculator');
      const url = URL.createObjectURL(makePDF(lines)), link = document.createElement('a');
      link.href = url; link.download = 'salary-hike-report.pdf'; document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url),10000);
      $('pdf-status').textContent = 'PDF download requested. Check your browser downloads.';
    } catch (error) { $('pdf-status').textContent = 'The PDF could not be created. Please calculate again and retry.'; }
  });
}());