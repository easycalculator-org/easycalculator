
    (function() {
      if (typeof ChartDataLabels !== 'undefined') {
        Chart.register(ChartDataLabels);
      }

      const defaultState = {
        title: 'Market Share Report',
        chartType: 'pie',
        donutHole: 45,
        bgColor: '#ffffff',
        textColor: '#000000',
        dataLabelColor: '#000000',
        titleFontSize: 28,
        labelFontSize: 14,
        percentFontSize: 18,
        sliceGap: 3,
        legendPosition: 'bottom',
        insideContent: 'percentage',   // percentage / value / none
        outsideContent: 'labelValue',  // label / labelValue / labelPercent
        hideBelow: 3,                 // hide labels on slices smaller than this %
        palette: 'modern',
        liveUpdate: true,
        data: [
          { label: 'Alpha', value: 35, color: '#10b981' },
          { label: 'Beta', value: 25, color: '#f59e0b' },
          { label: 'Gamma', value: 20, color: '#ef4444' },
          { label: 'Delta', value: 12, color: '#8b5cf6' },
          { label: 'Others', value: 8, color: '#06b6d4' }
        ]
      };

      const palettes = {
        modern: ['#10b981','#f59e0b','#ef4444','#8b5cf6','#06b6d4','#ec4899','#14b8a6','#84cc16','#2563eb','#f97316'],
        pastel: ['#fecdd3','#fde68a','#a7f3d0','#c4b5fd','#a5f3fc','#fbcfe8','#e9d5ff','#d9f99d','#bfdbfe','#fed7aa'],
        earthy: ['#8b5a2b','#5d4037','#7b8d6f','#a1887f','#6d4c41','#8d6e63','#4e6b4e','#7b6b5b','#5e4b3c','#6b5b4f'],
        vibrant: ['#ff006e','#8338ec','#ffbe0b','#fb5607','#3a86ff','#00bbf9','#fee440','#9b5de5','#f15bb5','#ff5c8a'],
        mono: ['#1e293b','#334155','#475569','#64748b','#94a3b8','#cbd5e1','#e2e8f0','#f1f5f9','#f8fafc','#0f172a']
      };

      let chartInstance = null;
      let currentState = JSON.parse(JSON.stringify(defaultState));

      const getEl = id => document.getElementById(id);
      const showToast = msg => {
        const toast = document.createElement('div');
        toast.className = 'toast align-items-center text-bg-dark border-0 position-fixed bottom-0 start-50 translate-middle-x mb-3';
        toast.style.zIndex = 9999;
        toast.innerHTML = `<div class="d-flex"><div class="toast-body">${msg}</div></div>`;
        document.body.appendChild(toast);
        new bootstrap.Toast(toast).show();
        setTimeout(() => toast.remove(), 3000);
      };

      function saveState() {
        try { localStorage.setItem('pieManySlices', JSON.stringify(currentState)); } catch (e) {}
      }
      function loadState() {
        try {
          const saved = localStorage.getItem('pieManySlices');
          if (saved) currentState = { ...defaultState, ...JSON.parse(saved) };
          else currentState = JSON.parse(JSON.stringify(defaultState));
        } catch (e) { currentState = JSON.parse(JSON.stringify(defaultState)); }
      }

      function getSidebarHTML() {
        const s = currentState;
        return `
        <div class="d-flex flex-column gap-3">
          <div class="section-title">⚙️ Chart Settings</div>
          <input type="text" class="form-control form-control-sm" id="chartTitle" value="${s.title}">
          <div class="row g-2">
            <div class="col-6">
              <label class="form-label small mb-1">Type</label>
              <select class="form-select form-select-sm" id="chartType">
                <option value="pie" ${s.chartType==='pie'?'selected':''}>Pie</option>
                <option value="doughnut" ${s.chartType==='doughnut'?'selected':''}>Doughnut</option>
              </select>
            </div>
            <div class="col-6" id="donutHoleGroup" style="display:${s.chartType==='doughnut'?'block':'none'}">
              <label class="form-label small mb-1">Donut Hole</label>
              <input type="number" class="form-control form-control-sm" id="donutHole" value="${s.donutHole}" min="0" max="90">
            </div>
          </div>
          <div class="row g-2">
            <div class="col-6"><label class="form-label small mb-1">Background</label><input type="color" class="form-control form-control-sm" id="bgColor" value="${s.bgColor}"></div>
            <div class="col-6"><label class="form-label small mb-1">Text Color</label><input type="color" class="form-control form-control-sm" id="textColor" value="${s.textColor}"></div>
          </div>
          <div class="row g-2">
            <div class="col-6"><label class="form-label small mb-1">Inside Label Color</label><input type="color" class="form-control form-control-sm" id="dataLabelColor" value="${s.dataLabelColor}"></div>
            <div class="col-6"><label class="form-label small mb-1">Legend</label>
              <select class="form-select form-select-sm" id="legendPosition">
                <option value="none" ${s.legendPosition==='none'?'selected':''}>None</option>
                <option value="top" ${s.legendPosition==='top'?'selected':''}>Top</option>
                <option value="bottom" ${s.legendPosition==='bottom'?'selected':''}>Bottom</option>
              </select>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-6"><label class="form-label small mb-1">Inside Content</label>
              <select class="form-select form-select-sm" id="insideContent">
                <option value="percentage" ${s.insideContent==='percentage'?'selected':''}>Percentage</option>
                <option value="value" ${s.insideContent==='value'?'selected':''}>Value</option>
                <option value="none" ${s.insideContent==='none'?'selected':''}>None</option>
              </select>
            </div>
            <div class="col-6"><label class="form-label small mb-1">Outside Content</label>
              <select class="form-select form-select-sm" id="outsideContent">
                <option value="label" ${s.outsideContent==='label'?'selected':''}>Label only</option>
                <option value="labelValue" ${s.outsideContent==='labelValue'?'selected':''}>Label + Value</option>
                <option value="labelPercent" ${s.outsideContent==='labelPercent'?'selected':''}>Label + Percentage</option>
              </select>
            </div>
          </div>
          <div class="row g-2">
            <div class="col-6"><label class="form-label small mb-1">Title Size</label><input type="number" class="form-control form-control-sm" id="titleFontSize" value="${s.titleFontSize}"></div>
            <div class="col-6"><label class="form-label small mb-1">Label Size</label><input type="number" class="form-control form-control-sm" id="labelFontSize" value="${s.labelFontSize}"></div>
          </div>
          <div class="row g-2">
            <div class="col-6"><label class="form-label small mb-1">Inside Font Size</label><input type="number" class="form-control form-control-sm" id="percentFontSize" value="${s.percentFontSize}"></div>
            <div class="col-6"><label class="form-label small mb-1">Slice Gap</label><input type="number" class="form-control form-control-sm" id="sliceGap" value="${s.sliceGap}" min="0" max="15"></div>
          </div>
          <div class="row g-2">
            <div class="col-6">
              <label class="form-label small mb-1">Hide labels below %</label>
              <input type="number" class="form-control form-control-sm" id="hideBelow" value="${s.hideBelow}" min="0" max="20" step="0.5">
            </div>
          </div>
          <div>
            <label class="form-label small mb-1">Color Palette</label>
            <select class="form-select form-select-sm" id="paletteSelect">
              <option value="modern" ${s.palette==='modern'?'selected':''}>Modern</option>
              <option value="pastel" ${s.palette==='pastel'?'selected':''}>Pastel</option>
              <option value="earthy" ${s.palette==='earthy'?'selected':''}>Earthy</option>
              <option value="vibrant" ${s.palette==='vibrant'?'selected':''}>Vibrant</option>
              <option value="mono" ${s.palette==='mono'?'selected':''}>Monochrome</option>
            </select>
          </div>
          <hr>
          <div class="section-title">📁 Data Import</div>
          <div class="border rounded-3 p-3 bg-light text-center small">
            <strong>Upload CSV</strong>
            <p class="text-muted mb-2">Format: Name, Value</p>
            <input type="file" class="form-control form-control-sm" id="csvFile" accept=".csv">
            <div class="form-check mt-2">
              <input class="form-check-input" type="checkbox" id="headerCheck">
              <label class="form-check-label small">First row as header</label>
            </div>
          </div>
          <textarea class="form-control form-control-sm" id="pasteData" rows="3" placeholder="Paste Excel data..."></textarea>
          <button class="btn btn-primary btn-sm w-100" id="importPasteBtn">📥 Import from Paste</button>
          <hr>
          <div class="section-title">📋 Data Table</div>
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-outline-secondary btn-sm" id="addRowBtn">➕ Add</button>
            <button class="btn btn-outline-secondary btn-sm" id="deleteRowBtn">🗑️ Delete Last</button>
            <button class="btn btn-outline-danger btn-sm" id="clearTableBtn">Clear</button>
            <button class="btn btn-outline-info btn-sm" id="randomDataBtn">🎲 Random</button>
          </div>
          <div class="table-wrapper">
            <table class="table table-sm table-bordered mb-0" id="dataTable">
              <thead><tr><th>Label</th><th>Value</th><th>Color</th></tr></thead>
              <tbody></tbody>
            </table>
          </div>
          <hr>
          <div class="d-flex flex-column gap-2">
            <button class="btn btn-success btn-sm w-100" id="downloadPngBtn">🖼️ Download PNG</button>
            <button class="btn btn-outline-dark btn-sm w-100" id="downloadSvgBtn">📐 Download SVG</button>
            <button class="btn btn-outline-danger btn-sm w-100" id="resetDefaultsBtn">↩️ Reset All</button>
          </div>
        </div>`;
      }

      function renderSidebar() {
        document.getElementById('sidebarContentDesktop').innerHTML = getSidebarHTML();
        document.getElementById('sidebarContentMobile').innerHTML = getSidebarHTML();
        populateTableFromState();
      }

      function populateTableFromState() {
        const tbody = document.querySelector('#dataTable tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        currentState.data.forEach(item => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td contenteditable="true">${item.label}</td>
            <td contenteditable="true">${item.value}</td>
            <td><input type="color" class="color-picker" value="${item.color}"></td>`;
          tbody.appendChild(tr);
        });
      }

      function updateStateFromUI() {
        currentState.title = getEl('chartTitle')?.value?.trim() || 'Chart';
        currentState.chartType = getEl('chartType')?.value || 'pie';
        currentState.donutHole = parseInt(getEl('donutHole')?.value) || 0;
        currentState.bgColor = getEl('bgColor')?.value || '#ffffff';
        currentState.textColor = getEl('textColor')?.value || '#000000';
        currentState.dataLabelColor = getEl('dataLabelColor')?.value || '#000000';
        currentState.titleFontSize = parseInt(getEl('titleFontSize')?.value) || 20;
        currentState.labelFontSize = parseInt(getEl('labelFontSize')?.value) || 12;
        currentState.percentFontSize = parseInt(getEl('percentFontSize')?.value) || 12;
        currentState.sliceGap = parseInt(getEl('sliceGap')?.value) || 0;
        currentState.legendPosition = getEl('legendPosition')?.value || 'bottom';
        currentState.insideContent = getEl('insideContent')?.value || 'percentage';
        currentState.outsideContent = getEl('outsideContent')?.value || 'labelValue';
        currentState.hideBelow = parseFloat(getEl('hideBelow')?.value) || 0;
        currentState.palette = getEl('paletteSelect')?.value || 'modern';
        currentState.liveUpdate = getEl('liveToggle')?.checked ?? true;

        const rows = document.querySelectorAll('#dataTable tbody tr');
        const data = [];
        rows.forEach(row => {
          const label = row.cells[0]?.innerText.trim();
          const value = parseFloat(row.cells[1]?.innerText.trim());
          const color = row.cells[2]?.querySelector('input')?.value;
          if (label && !isNaN(value) && value > 0) data.push({ label, value, color });
        });
        if (data.length === 0) data.push({ label: 'Sample', value: 100, color: '#2563eb' });
        currentState.data = data;
        saveState();
      }

      function generateChart() {
        updateStateFromUI();
        const { data, chartType, donutHole, bgColor, textColor, dataLabelColor,
                titleFontSize, labelFontSize, percentFontSize, sliceGap, legendPosition,
                insideContent, outsideContent, hideBelow } = currentState;

        const labels = data.map(d => d.label);
        const values = data.map(d => d.value);
        const colors = data.map(d => d.color);
        const combined = labels.map((l, i) => ({ label: l, value: values[i], color: colors[i] }));
        combined.sort((a, b) => b.value - a.value);
        const sortedLabels = combined.map(c => c.label);
        const sortedValues = combined.map(c => c.value);
        const sortedColors = combined.map(c => c.color);

        getEl('chartWrapper').style.background = bgColor;
        if (chartInstance) chartInstance.destroy();

        const ctx = getEl('chartCanvas').getContext('2d');
        const cutout = chartType === 'doughnut' ? `${donutHole}%` : '0%';

        chartInstance = new Chart(ctx, {
          type: chartType,
          data: {
            labels: sortedLabels,
            datasets: [{
              data: sortedValues,
              backgroundColor: sortedColors,
              borderColor: '#ffffff',
              borderWidth: 4,
              hoverOffset: 15,
              borderRadius: 8,
              spacing: sliceGap,
              cutout: cutout
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: { top: 20, bottom: 20, left: 10, right: 10 }  // minimal padding
            },
            plugins: {
              title: {
                display: true,
                text: currentState.title,
                color: textColor,
                font: { size: titleFontSize, weight: '800', family: 'Inter' },
                padding: { bottom: 15 }
              },
              legend: {
                display: legendPosition !== 'none',
                position: legendPosition === 'top' ? 'top' : 'bottom',
                labels: {
                  color: textColor,
                  font: { size: labelFontSize, family: 'Inter', weight: '600' },
                  padding: 8
                }
              },
              tooltip: { enabled: false },
              datalabels: {
                display: true,
                clip: false,
                labels: [
                  // ----- INSIDE label near the border -----
                  {
                    display: insideContent !== 'none',
                    anchor: 'end',
                    align: 'start',
                    offset: -4,
                    color: dataLabelColor,
                    font: (ctx) => {
                      const val = ctx.dataset.data[ctx.dataIndex];
                      const total = ctx.dataset.data.reduce((a,b)=>a+b,0);
                      const pct = (val/total)*100;
                      // Dynamic sizing: smaller slices get smaller fonts
                      if (pct > 20) return { size: percentFontSize, weight: '900', family: 'Inter' };
                      if (pct > 10) return { size: percentFontSize - 2, weight: '800', family: 'Inter' };
                      return { size: Math.max(percentFontSize - 4, 10), weight: '700', family: 'Inter' };
                    },
                    formatter: (value, ctx) => {
                      const total = ctx.chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
                      const pct = ((value/total)*100);
                      if (pct < hideBelow) return '';   // hide tiny slices
                      if (insideContent === 'value') return value;
                      return pct.toFixed(1) + '%';
                    }
                  },
                  // ----- OUTSIDE label (auto hide & dynamic sizing) -----
                  {
                    display: true,
                    anchor: 'end',
                    align: 'end',
                    offset: 6,
                    color: '#000000',
                    font: (ctx) => {
                      const val = ctx.dataset.data[ctx.dataIndex];
                      const total = ctx.dataset.data.reduce((a,b)=>a+b,0);
                      const pct = (val/total)*100;
                      if (pct > 15) return { size: labelFontSize, weight: '700', family: 'Inter' };
                      if (pct > 8) return { size: labelFontSize - 2, weight: '600', family: 'Inter' };
                      return { size: Math.max(labelFontSize - 4, 10), weight: '600', family: 'Inter' };
                    },
                    formatter: (value, ctx) => {
                      const label = ctx.chart.data.labels[ctx.dataIndex];
                      const total = ctx.chart.data.datasets[0].data.reduce((a,b)=>a+b,0);
                      const pct = (value/total)*100;
                      if (pct < hideBelow) return '';   // hide very small slices
                      if (outsideContent === 'labelValue') return `${label}: ${value}`;
                      if (outsideContent === 'labelPercent') return `${label}: ${pct.toFixed(1)}%`;
                      return label;
                    }
                  }
                ]
              }
            }
          }
        });
      }

      const debouncedGenerate = (fn, delay) => {
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => fn(...args), delay);
        };
      };
      const debouncedGenerateChart = debouncedGenerate(generateChart, 250);

      function handleDataChange() {
        if (currentState.liveUpdate) debouncedGenerateChart();
      }

      document.body.addEventListener('input', (e) => {
        if (e.target.closest('#sidebarContentDesktop, #sidebarContentMobile')) {
          updateStateFromUI(); saveState();
          const donutGroup = getEl('donutHoleGroup');
          if (donutGroup) donutGroup.style.display = getEl('chartType')?.value === 'doughnut' ? 'block' : 'none';
          if (currentState.liveUpdate) debouncedGenerateChart();
        }
        if (e.target.closest('#dataTable') && (e.target.classList.contains('color-picker') || e.target.hasAttribute('contenteditable'))) {
          handleDataChange();
        }
      });
      document.body.addEventListener('change', (e) => {
        if (e.target.closest('#sidebarContentDesktop, #sidebarContentMobile') && !e.target.id.startsWith('csvFile')) {
          updateStateFromUI(); saveState();
          if (currentState.liveUpdate) debouncedGenerateChart();
        }
        if (e.target.id === 'liveToggle') {
          updateStateFromUI(); saveState();
          getEl('liveIndicator').textContent = currentState.liveUpdate ? '🟢 Live Preview' : '⚪ Manual';
          getEl('liveIndicator').className = `live-badge ${currentState.liveUpdate ? 'bg-success' : 'bg-secondary'} text-white`;
          if (currentState.liveUpdate) generateChart();
        }
        if (e.target.closest('#dataTable') && e.target.classList.contains('color-picker')) handleDataChange();
        if (e.target.id === 'paletteSelect') {
          currentState.palette = e.target.value;
          const palette = palettes[currentState.palette];
          document.querySelectorAll('#dataTable tbody tr').forEach((row, idx) => {
            const input = row.cells[2]?.querySelector('input');
            if (input) input.value = palette[idx % palette.length];
          });
          handleDataChange();
        }
      });

      document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        if (btn.id === 'importPasteBtn') importPaste();
        else if (btn.id === 'addRowBtn') addRow();
        else if (btn.id === 'deleteRowBtn') deleteRow();
        else if (btn.id === 'clearTableBtn') clearTable();
        else if (btn.id === 'randomDataBtn') randomData();
        else if (btn.id === 'downloadPngBtn') downloadPNG();
        else if (btn.id === 'downloadSvgBtn') downloadSVG();
        else if (btn.id === 'resetDefaultsBtn') resetDefaults();
      });

      document.body.addEventListener('change', (e) => {
        if (e.target.id === 'csvFile') {
          const file = e.target.files[0];
          if (!file) return;
          Papa.parse(file, {
            complete: (results) => {
              importCSV(results.data, getEl('headerCheck')?.checked);
              showToast('CSV imported');
            },
            error: () => showToast('Error parsing CSV')
          });
        }
      });

      function importCSV(rows, skipHeader = false) {
        const tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = '';
        const palette = palettes[currentState.palette] || palettes.modern;
        let startIdx = 0;
        if (skipHeader && rows.length > 1 && isNaN(parseFloat(rows[0][1]))) startIdx = 1;
        for (let i = startIdx; i < rows.length; i++) {
          const row = rows[i];
          if (row.length >= 2 && row[0] && !isNaN(parseFloat(row[1]))) {
            addRow(row[0].trim(), parseFloat(row[1]), palette[(i - startIdx) % palette.length], false);
          }
        }
        if (tbody.rows.length === 0) addRow('Sample', 100, '#2563eb', false);
        handleDataChange();
      }

      function importPaste() {
        const raw = getEl('pasteData')?.value.trim();
        if (!raw) { showToast('Paste data first'); return; }
        const lines = raw.split('\n');
        const rows = lines.map(line => line.split(/\t|,/).map(s => s.trim()));
        importCSV(rows, getEl('headerCheck')?.checked);
        showToast('Data imported');
      }

      function addRow(label = 'New', value = 10, color = '#2563eb', triggerChange = true) {
        const tbody = document.querySelector('#dataTable tbody');
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td contenteditable="true">${label}</td>
          <td contenteditable="true">${value}</td>
          <td><input type="color" class="color-picker" value="${color}"></td>`;
        tbody.appendChild(tr);
        if (triggerChange) handleDataChange();
      }

      function deleteRow() {
        const tbody = document.querySelector('#dataTable tbody');
        if (tbody.rows.length > 1) { tbody.deleteRow(tbody.rows.length - 1); handleDataChange(); }
        else showToast('Need at least one row');
      }

      function clearTable() {
        document.querySelector('#dataTable tbody').innerHTML = '';
        addRow('Sample', 100, '#2563eb', true);
      }

      function randomData() {
        const palette = palettes[currentState.palette] || palettes.modern;
        const tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = '';
        const count = Math.floor(Math.random() * 5) + 4;
        const items = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'];
        for (let i = 0; i < count; i++) {
          addRow(items[i] || `Item ${i+1}`, Math.floor(Math.random()*40)+5, palette[i % palette.length], false);
        }
        handleDataChange();
      }

      function downloadPNG() {
        if (!chartInstance) { showToast('Generate chart first'); return; }
        const a = document.createElement('a');
        a.download = 'pie-chart.png';
        a.href = getEl('chartCanvas').toDataURL('image/png');
        a.click();
      }

      function downloadSVG() {
        if (!chartInstance) { showToast('Generate chart first'); return; }
        updateStateFromUI();
        const { data, bgColor, textColor, title, titleFontSize } = currentState;
        const total = data.reduce((sum,d) => sum + d.value, 0);
        const cx = 500, cy = 500, r = 380;
        let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><rect width="1000" height="1000" fill="${bgColor}"/><text x="500" y="70" text-anchor="middle" font-family="Inter" font-weight="800" font-size="${titleFontSize}" fill="${textColor}">${title}</text>`;
        let angle = 0;
        data.forEach(item => {
          const slice = (item.value/total)*2*Math.PI;
          const x1 = cx + r*Math.cos(angle), y1 = cy + r*Math.sin(angle);
          const x2 = cx + r*Math.cos(angle+slice), y2 = cy + r*Math.sin(angle+slice);
          svg += `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${slice>Math.PI?1:0} 1 ${x2},${y2} Z" fill="${item.color}" stroke="#fff" stroke-width="4"/>`;
          const mid = angle + slice/2;
          const lx = cx + r*0.6*Math.cos(mid), ly = cy + r*0.6*Math.sin(mid);
          const pct = ((item.value/total)*100).toFixed(1);
          svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-family="Inter" font-weight="700" font-size="20" fill="#000000">${pct}%</text>`;
          angle += slice;
        });
        svg += '</svg>';
        const blob = new Blob([svg], {type:'image/svg+xml'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'pie-chart.svg'; a.click();
        URL.revokeObjectURL(url);
      }

      function resetDefaults() {
        if (confirm('Reset all settings and data?')) {
          currentState = JSON.parse(JSON.stringify(defaultState));
          renderSidebar();
          generateChart();
          showToast('Reset to defaults');
        }
      }

      function init() {
        loadState();
        renderSidebar();
        generateChart();
        getEl('liveIndicator').textContent = currentState.liveUpdate ? '🟢 Live Preview' : '⚪ Manual';
        getEl('liveIndicator').className = `live-badge ${currentState.liveUpdate ? 'bg-success' : 'bg-secondary'} text-white`;
      }

      window.addEventListener('resize', () => { if (chartInstance) chartInstance.resize(); });
      init();
    })();