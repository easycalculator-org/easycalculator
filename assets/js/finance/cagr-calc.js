document.addEventListener('DOMContentLoaded', () => {
(() => {
  'use strict';
  const root = document.getElementById('ec-cagr');
  if (!root) return;
  const $ = id => document.getElementById(id);
  const form = $('cg-form');
  const initialInput = $('cg-initial');
  const finalInput = $('cg-final');
  const yearsInput = $('cg-years');
  const currencyInput = $('cg-currency');
  const errorBox = $('cg-error');
  let chart = null;
  let latest = null;
  const symbols = {USD:'$',INR:'₹',EUR:'€',GBP:'£',CAD:'CA$',AUD:'A$'};
  function money(value) {
    const currency = currencyInput.value;
    try {
      return new Intl.NumberFormat(undefined, {style:'currency',currency,maximumFractionDigits:2}).format(value);
    } catch (_) {
      return (symbols[currency] || '$') + Number(value).toLocaleString(undefined,{maximumFractionDigits:2});
    }
  }
  function pdfMoney(value) {
    const amount = Number(value).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
    return `${currencyInput.value} ${amount}`;
  }
  function pct(value) {
    return `${value < 0 ? '−' : ''}${Math.abs(value).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}%`;
  }
  function fmtAxis(value) {
    const n = Number(value);
    if (Math.abs(n) >= 1e9) return `${(n/1e9).toFixed(1)}B`;
    if (Math.abs(n) >= 1e6) return `${(n/1e6).toFixed(1)}M`;
    if (Math.abs(n) >= 1e3) return `${(n/1e3).toFixed(1)}K`;
    return n.toLocaleString(undefined,{maximumFractionDigits:0});
  }
  function buildRows(initial, final, years, cagr) {
    const fullYears = Math.floor(years);
    const count = Math.max(1, Math.min(1000, fullYears + (years > fullYears ? 1 : 0)));
    const rows = [];
    let previous = initial;
    for (let year = 1; year <= count; year++) {
      const t = Math.min(year, years);
      const ending = year >= years ? final : initial * Math.pow(1 + cagr, t);
      const growth = ending - previous;
      const rate = previous === 0 ? 0 : growth / previous * 100;
      rows.push({year:t, start:previous, end:ending, growth, rate});
      previous = ending;
    }
    return rows;
  }
  function drawTable(rows) {
    const body = $('cg-table-body');
    body.replaceChildren();
    rows.forEach(row => {
      const tr = document.createElement('tr');
      [Number.isInteger(row.year) ? `Year ${row.year}` : `${row.year.toFixed(2)} years`, money(row.start), money(row.end), money(row.growth), pct(row.rate)].forEach((value, index) => {
        const td = document.createElement('td');
        td.textContent = value;
        if (index === 0) td.setAttribute('scope','row');
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
  }
  function drawChart(rows, initial, final) {
    const canvas = $('cg-chart');
    if (!window.Chart) {
      canvas.replaceWith(Object.assign(document.createElement('p'), {className:'cg-muted',textContent:'The chart library did not load. Your CAGR and table are still available.'}));
      return;
    }
    const labels = ['Start', ...rows.map((row, i) => Number.isInteger(row.year) ? `Year ${row.year}` : `${row.year.toFixed(2)} years`)];
    const values = [initial, ...rows.map(row => row.end)];
    if (chart) chart.destroy();
    chart = new Chart(canvas, {
      type:'line',
      data:{labels,datasets:[{label:'Illustrated value',data:values,borderColor:'#2563eb',backgroundColor:'rgba(37,99,235,.12)',borderWidth:3,pointRadius:3,pointHoverRadius:5,fill:true,tension:.25}]},
      options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:false},tooltip:{callbacks:{label:context=>`${context.dataset.label}: ${money(context.parsed.y)}`}}},scales:{x:{grid:{display:false},ticks:{maxTicksLimit:8}},y:{beginAtZero:false, ticks:{callback:fmtAxis},title:{display:true,text:`Value (${currencyInput.value})`}}}}
    });
  }
  function setError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
  }
  function calculate(showError = true) {
    errorBox.hidden = true;
    errorBox.textContent = '';
    const initial = Number(initialInput.value);
    const final = Number(finalInput.value);
    const years = Number(yearsInput.value);
    let message = '';
    if (initialInput.value.trim() === '' || !Number.isFinite(initial) || initial <= 0) message = 'Enter an initial value greater than zero.';
    else if (finalInput.value.trim() === '' || !Number.isFinite(final) || final < 0) message = 'Enter a final value of zero or more.';
    else if (yearsInput.value.trim() === '' || !Number.isFinite(years) || years <= 0 || years > 1000) message = 'Enter a period greater than zero and no more than 1,000 years.';
    if (message) {
      latest = null;
      $('cg-rate').textContent = '—';
      $('cg-summary-line').textContent = 'Correct the highlighted values to calculate CAGR.';
      $('cg-out-initial').textContent = '—'; $('cg-out-final').textContent = '—'; $('cg-out-growth').textContent = '—'; $('cg-out-return').textContent = '—';
      $('cg-table-body').replaceChildren();
      if (chart) {chart.destroy();chart=null;}
      if (showError) setError(message);
      return false;
    }
    const cagr = (Math.pow(final / initial, 1 / years) - 1) * 100;
    const growth = final - initial;
    const totalReturn = growth / initial * 100;
    const rows = buildRows(initial, final, years, cagr / 100);
    latest = {initial,final,years,cagr,growth,totalReturn,rows,currency:currencyInput.value,calculatedAt:new Date()};
    $('cg-rate').textContent = pct(cagr);
    $('cg-summary-line').textContent = `${money(initial)} grew to ${money(final)} over ${years.toLocaleString(undefined,{maximumFractionDigits:2})} ${years === 1 ? 'year' : 'years'} — an annualized rate of ${pct(cagr)}.`;
    $('cg-out-initial').textContent = money(initial);
    $('cg-out-final').textContent = money(final);
    $('cg-out-growth').textContent = money(growth);
    $('cg-out-return').textContent = pct(totalReturn);
    drawTable(rows);
    drawChart(rows,initial,final);
    return true;
  }
  function waitFor(test, timeout=10000) {
    return new Promise((resolve,reject)=>{
      const started=Date.now();
      const poll=()=>{if(test())return resolve();if(Date.now()-started>timeout)return reject(new Error('A PDF library could not be loaded. Check your internet connection and try again.'));setTimeout(poll,100);};
      poll();
    });
  }
  async function downloadPdf() {
    if (!latest) {setError('Calculate a valid result before downloading the PDF report.');return;}
    const button=$('cg-pdf');
    const oldLabel=button.textContent;
    button.disabled=true;button.textContent='Preparing PDF…';
    try {
      await waitFor(()=>window.jspdf && window.jspdf.jsPDF && window.Chart);
      const {jsPDF}=window.jspdf;
      const doc=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});
      const left=15, width=180;
      doc.setFillColor(16,42,76);doc.rect(0,0,210,31,'F');
      doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(18);doc.text('CAGR Calculator Report',left,15);
      doc.setFont('helvetica','normal');doc.setFontSize(9);doc.text('easycalculator.org',left,23);
      doc.setTextColor(31,48,70);doc.setFontSize(10);doc.text(`Generated: ${latest.calculatedAt.toLocaleDateString()}`,left,40);
      doc.setFont('helvetica','bold');doc.setFontSize(24);doc.setTextColor(37,99,235);doc.text(pct(latest.cagr),left,53);
      doc.setFontSize(10);doc.setTextColor(31,48,70);doc.setFont('helvetica','normal');doc.text('Compound annual growth rate',left,60);
      const summary=[['Initial value',pdfMoney(latest.initial)],['Final value',pdfMoney(latest.final)],['Investment period',`${latest.years.toLocaleString(undefined,{maximumFractionDigits:2})} years`],['Total growth',pdfMoney(latest.growth)],['Total return',pct(latest.totalReturn)]];
      doc.autoTable({startY:67,head:[['Result summary','Value']],body:summary,theme:'grid',styles:{fontSize:9,cellPadding:2.5,textColor:[31,48,70]},headStyles:{fillColor:[239,244,250],textColor:[16,42,76]},columnStyles:{0:{cellWidth:90},1:{cellWidth:90}}});
      let y=doc.lastAutoTable.finalY+9;
      doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(16,42,76);doc.text('Illustrated value by year',left,y);
      y+=4;
      const chartImage=$('cg-chart').toDataURL('image/png',1);
      doc.addImage(chartImage,'PNG',left,y,width,57);
      y+=63;
      doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(16,42,76);doc.text('CAGR formula',left,y);
      y+=6;doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor(31,48,70);
      doc.text('CAGR = (Final Value / Initial Value) ^ (1 / Number of Years) - 1',left,y);
      doc.text(`= (${latest.final} / ${latest.initial}) ^ (1 / ${latest.years}) - 1 = ${pct(latest.cagr)}`,left,y+5);
      if (!doc.autoTable) throw new Error('The PDF table extension did not load.');
      doc.autoTable({startY:y+10,head:[['Year','Starting value','Ending value','Annual growth','Growth rate']],body:latest.rows.map(r=>[Number.isInteger(r.year)?`Year ${r.year}`:`${r.year.toFixed(2)} years`,pdfMoney(r.start),pdfMoney(r.end),pdfMoney(r.growth),pct(r.rate)]),theme:'striped',styles:{fontSize:8,cellPadding:2.1,textColor:[31,48,70]},headStyles:{fillColor:[16,42,76]},columnStyles:{0:{halign:'left'}}});
      let pageCount=doc.internal.getNumberOfPages();
      for(let page=1;page<=pageCount;page++){doc.setPage(page);doc.setFont('helvetica','normal');doc.setFontSize(8);doc.setTextColor(100,116,139);doc.text('Illustrative CAGR path; actual annual returns may differ.',left,287);doc.text(`Page ${page} of ${pageCount}`,195,287,{align:'right'});}
      const date=new Date().toISOString().slice(0,10);
      doc.save(`cagr-report-${date}.pdf`);
    } catch (error) {
      setError(error && error.message ? error.message : 'The PDF could not be created. Please try again.');
    } finally {button.disabled=false;button.textContent=oldLabel;}
  }
  form.addEventListener('submit',event=>{event.preventDefault();calculate(true);});
  form.addEventListener('reset',()=>setTimeout(()=>{currencyInput.value='USD';calculate(false);},0));
  currencyInput.addEventListener('change',()=>{ $('cg-symbol-initial').textContent=symbols[currencyInput.value]||currencyInput.value; $('cg-symbol-final').textContent=symbols[currencyInput.value]||currencyInput.value; calculate(false); });
  $('cg-pdf').addEventListener('click',downloadPdf);
  [initialInput,finalInput,yearsInput].forEach(input=>input.addEventListener('input',()=>calculate(false)));
  calculate(false);
})();
});