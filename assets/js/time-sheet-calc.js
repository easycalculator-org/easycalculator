
  // Data store
  let dailyRecords = [];
  let autoTimeModalInstance = null;

  // DOM elements
  const employeeNameInput = document.getElementById('employeeName');
  const employeeIdInput = document.getElementById('employeeId');
  const monthPeriodInput = document.getElementById('monthPeriod');
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  const tableBody = document.getElementById('tableBody');
  const generateRangeBtn = document.getElementById('generateRangeBtn');
  const addRowBtn = document.getElementById('addRowBtn');
  const resetTableBtn = document.getElementById('resetTableBtn');
  const downloadPDFBtn = document.getElementById('downloadPDFBtn');
  const autoTimeBtn = document.getElementById('autoTimeBtn');
  const applyAutoTimeBtn = document.getElementById('applyAutoTimeBtn');
  const summaryNameSpan = document.getElementById('summaryName');
  const summaryEmpIdSpan = document.getElementById('summaryEmpId');
  const summaryMonthSpan = document.getElementById('summaryMonth');
  const totalDaysSpan = document.getElementById('totalDays');
  const totalHoursSpan = document.getElementById('totalHours');
  const totalBreakDisplay = document.getElementById('totalBreakDisplay');
  const currentMonthDisplay = document.getElementById('currentMonthDisplay');
  const periodRangeDisplay = document.getElementById('periodRangeDisplay');
  const lastUpdateTimeSpan = document.getElementById('lastUpdateTime');

  if (typeof bootstrap !== 'undefined') {
    const modalElement = document.getElementById('autoTimeModal');
    if (modalElement) autoTimeModalInstance = new bootstrap.Modal(modalElement);
  }

  function initFlatpickr() {
    if (typeof flatpickr !== 'undefined') {
      flatpickr(startDateInput, { dateFormat: "Y-m-d", allowInput: true, onChange: () => updateSummary() });
      flatpickr(endDateInput, { dateFormat: "Y-m-d", allowInput: true, onChange: () => updateSummary() });
    }
  }

  function getWeekdayName(dateStr) {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '—';
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekdays[date.getDay()];
  }

  function getShortWeekday(dateStr) {
    if (!dateStr) return '—';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '—';
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return weekdays[date.getDay()];
  }

  function isWeekend(dateStr) {
    if (!dateStr) return false;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return false;
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  function parseTimeToMinutes(timeStr) {
    if (!timeStr || typeof timeStr !== 'string' || timeStr.trim() === "") return null;
    const trimmed = timeStr.trim();
    const parts = trimmed.split(':');
    if (parts.length !== 2) return null;
    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);
    if (isNaN(hours) || isNaN(minutes)) return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
    return (hours * 60) + minutes;
  }

  function calculateGrossHours(inTimeStr, outTimeStr) {
    const inMinutes = parseTimeToMinutes(inTimeStr);
    const outMinutes = parseTimeToMinutes(outTimeStr);
    if (inMinutes === null || outMinutes === null) return 0;
    let diff = outMinutes - inMinutes;
    if (diff < 0) diff += 24 * 60;
    if (diff <= 0) return 0;
    return Math.round((diff / 60) * 100) / 100;
  }

  function calculateNetHours(grossHours, breakHours) {
    let net = grossHours - (breakHours || 0);
    return net > 0 ? Math.round(net * 100) / 100 : 0;
  }

  function updateRowHours(rowIndex) {
    if (!dailyRecords[rowIndex]) return 0;
    const inTime = dailyRecords[rowIndex].inTime || '';
    const outTime = dailyRecords[rowIndex].outTime || '';
    const breakTime = dailyRecords[rowIndex].breakTime || 0;
    const grossHours = calculateGrossHours(inTime, outTime);
    const netHours = calculateNetHours(grossHours, breakTime);
    dailyRecords[rowIndex].grossHours = grossHours;
    dailyRecords[rowIndex].hours = netHours;
    return netHours;
  }

  function recalcAllRowsHours() {
    for (let i = 0; i < dailyRecords.length; i++) {
      const inTime = dailyRecords[i].inTime || '';
      const outTime = dailyRecords[i].outTime || '';
      const breakTime = dailyRecords[i].breakTime || 0;
      const grossHours = calculateGrossHours(inTime, outTime);
      dailyRecords[i].grossHours = grossHours;
      dailyRecords[i].hours = calculateNetHours(grossHours, breakTime);
    }
  }

  function getTotals() {
    let workingDays = 0;
    let totalHours = 0;
    let totalBreak = 0;
    for (const rec of dailyRecords) {
      if (rec.hours > 0) {
        workingDays++;
        totalHours += rec.hours;
      }
      totalBreak += rec.breakTime || 0;
    }
    totalHours = Math.round(totalHours * 100) / 100;
    totalBreak = Math.round(totalBreak * 100) / 100;
    return { days: workingDays, hours: totalHours, break: totalBreak };
  }

  function updateSummary() {
    const { days, hours, break: totalBreak } = getTotals();
    totalDaysSpan.innerText = days;
    totalHoursSpan.innerText = hours.toFixed(2);
    totalBreakDisplay.innerText = totalBreak.toFixed(2) + ' hrs';
    
    const empName = employeeNameInput.value.trim() || '—';
    const empId = employeeIdInput.value.trim() || '—';
    const monthVal = monthPeriodInput.value.trim() || '—';
    summaryNameSpan.innerText = empName;
    summaryEmpIdSpan.innerText = empId;
    summaryMonthSpan.innerText = monthVal;
    
    currentMonthDisplay.innerText = monthVal;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    periodRangeDisplay.innerText = (startDate && endDate) ? `${startDate} to ${endDate}` : 'Not set';
    lastUpdateTimeSpan.innerText = new Date().toLocaleString();
  }

  function renderTable() {
    if (!tableBody) return;
    
    if (dailyRecords.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="8" class="text-center text-muted py-5"><i class="fas fa-calendar-times"></i><br>No entries. Set date range and click "Generate Dates"</td></tr>`;
      updateSummary();
      return;
    }

    tableBody.innerHTML = '';
    
    dailyRecords.forEach((record, idx) => {
      const row = document.createElement('tr');
      const isWeekendDay = isWeekend(record.dateStr);
      if (isWeekendDay) row.classList.add('weekend-row');
      
      const serialCell = document.createElement('td');
      serialCell.className = 'text-center fw-bold';
      serialCell.innerText = idx + 1;
      row.appendChild(serialCell);
      
      const dateCell = document.createElement('td');
      const dateInput = document.createElement('input');
      dateInput.type = 'text';
      dateInput.className = 'form-control form-control-sm date-input';
      dateInput.value = record.dateStr || '';
      dateCell.appendChild(dateInput);
      row.appendChild(dateCell);
      
      const dayCell = document.createElement('td');
      dayCell.className = 'text-center fw-semibold';
      const weekday = getShortWeekday(record.dateStr);
      dayCell.innerHTML = isWeekendDay ? `<span class="badge bg-warning text-dark">${weekday}</span>` : `<span class="badge bg-secondary bg-opacity-25 text-dark">${weekday}</span>`;
      row.appendChild(dayCell);
      
      const inTimeCell = document.createElement('td');
      const inTimeInput = document.createElement('input');
      inTimeInput.type = 'text';
      inTimeInput.placeholder = '09:00';
      inTimeInput.className = 'form-control form-control-sm';
      inTimeInput.value = record.inTime || '';
      inTimeInput.addEventListener('input', (e) => {
        dailyRecords[idx].inTime = e.target.value;
        updateRowHours(idx);
        renderTable();
      });
      inTimeCell.appendChild(inTimeInput);
      row.appendChild(inTimeCell);
      
      const outTimeCell = document.createElement('td');
      const outTimeInput = document.createElement('input');
      outTimeInput.type = 'text';
      outTimeInput.placeholder = '17:30';
      outTimeInput.className = 'form-control form-control-sm';
      outTimeInput.value = record.outTime || '';
      outTimeInput.addEventListener('input', (e) => {
        dailyRecords[idx].outTime = e.target.value;
        updateRowHours(idx);
        renderTable();
      });
      outTimeCell.appendChild(outTimeInput);
      row.appendChild(outTimeCell);
      
      const breakCell = document.createElement('td');
      const breakInput = document.createElement('input');
      breakInput.type = 'number';
      breakInput.placeholder = '0.5';
      breakInput.className = 'form-control form-control-sm break-input';
      breakInput.value = record.breakTime || 0;
      breakInput.step = '0.25';
      breakInput.addEventListener('input', (e) => {
        dailyRecords[idx].breakTime = parseFloat(e.target.value) || 0;
        updateRowHours(idx);
        renderTable();
      });
      breakCell.appendChild(breakInput);
      row.appendChild(breakCell);
      
      const hoursCell = document.createElement('td');
      hoursCell.className = 'text-center fw-bold hours-value';
      const displayHours = (record.hours && !isNaN(record.hours)) ? record.hours : 0;
      hoursCell.innerText = displayHours.toFixed(2);
      row.appendChild(hoursCell);
      
      const actionCell = document.createElement('td');
      actionCell.className = 'text-center';
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-sm btn-outline-danger delete-btn';
      deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
      deleteBtn.addEventListener('click', () => {
        dailyRecords.splice(idx, 1);
        renderTable();
      });
      actionCell.appendChild(deleteBtn);
      row.appendChild(actionCell);
      
      tableBody.appendChild(row);
      
      if (typeof flatpickr !== 'undefined') {
        flatpickr(dateInput, {
          dateFormat: "Y-m-d",
          allowInput: true,
          onChange: (selectedDates, dateStr) => {
            dailyRecords[idx].dateStr = dateStr;
            renderTable();
          }
        });
      }
    });
    
    updateSummary();
  }

  function exportToPDF() {
    const empName = employeeNameInput.value.trim() || 'Not Specified';
    const empId = employeeIdInput.value.trim() || 'Not Specified';
    const monthVal = monthPeriodInput.value.trim() || 'Not Specified';
    const { days, hours, break: totalBreak } = getTotals();
    const startDate = startDateInput.value || '—';
    const endDate = endDateInput.value || '—';
    
    document.getElementById('pdfEmpName').innerText = empName;
    document.getElementById('pdfEmpId').innerText = empId;
    document.getElementById('pdfMonth').innerText = monthVal;
    document.getElementById('pdfTotalDays').innerText = days;
    document.getElementById('pdfTotalHours').innerText = hours.toFixed(2);
    document.getElementById('pdfTotalBreak').innerText = totalBreak.toFixed(2);
    document.getElementById('pdfDateRange').innerText = `${startDate} to ${endDate}`;
    
    const pdfTableBody = document.getElementById('pdfTableBody');
    pdfTableBody.innerHTML = '';
    
    if (dailyRecords.length === 0) {
      pdfTableBody.innerHTML = '<tr><td colspan="7" class="text-center">No data available</td></tr>';
    } else {
      dailyRecords.forEach((record, idx) => {
        if (record.hours > 0) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td style="padding: 4px; border: 1px solid #ddd; text-align: center;">${idx + 1}</td>
            <td style="padding: 4px; border: 1px solid #ddd;">${record.dateStr || '—'}</td>
            <td style="padding: 4px; border: 1px solid #ddd;">${getWeekdayName(record.dateStr)}</td>
            <td style="padding: 4px; border: 1px solid #ddd; text-align: center;">${record.inTime || '—'}</td>
            <td style="padding: 4px; border: 1px solid #ddd; text-align: center;">${record.outTime || '—'}</td>
            <td style="padding: 4px; border: 1px solid #ddd; text-align: center;">${(record.breakTime || 0).toFixed(2)}</td>
            <td style="padding: 4px; border: 1px solid #ddd; text-align: center; font-weight: bold;">${record.hours.toFixed(2)}</td>
          `;
          pdfTableBody.appendChild(row);
        }
      });
    }
    
    const pdfArea = document.getElementById('pdfExportArea');
    pdfArea.style.display = 'block';
    
    html2pdf().set({
      margin: [0.2, 0.2, 0.2, 0.2],
      filename: `Timesheet_${empName}_${empId}_${monthVal.replace(/\s/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(pdfArea).save().then(() => {
      pdfArea.style.display = 'none';
    });
  }

  function autoFillTimes() {
    const defaultInTime = document.getElementById('modalInTime').value.trim();
    const defaultOutTime = document.getElementById('modalOutTime').value.trim();
    const defaultBreak = parseFloat(document.getElementById('modalBreak').value) || 0;
    const overwrite = document.getElementById('overwriteExisting').checked;
    
    if (!defaultInTime || !defaultOutTime) {
      alert('Please enter both In Time and Out Time');
      return;
    }
    
    const testIn = parseTimeToMinutes(defaultInTime);
    const testOut = parseTimeToMinutes(defaultOutTime);
    if (testIn === null || testOut === null) {
      alert('Invalid time format! Please use HH:MM format');
      return;
    }
    
    if (dailyRecords.length === 0) {
      alert('No rows to fill! Please generate dates first.');
      return;
    }
    
    let filledCount = 0;
    for (let i = 0; i < dailyRecords.length; i++) {
      if (overwrite || (!dailyRecords[i].inTime && !dailyRecords[i].outTime)) {
        dailyRecords[i].inTime = defaultInTime;
        dailyRecords[i].outTime = defaultOutTime;
        dailyRecords[i].breakTime = defaultBreak;
        filledCount++;
      }
    }
    
    recalcAllRowsHours();
    renderTable();
    showToast(`✓ Auto-filled ${filledCount} row(s) with ${defaultInTime} - ${defaultOutTime}, Break: ${defaultBreak} hrs`);
    if (autoTimeModalInstance) autoTimeModalInstance.hide();
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'alert alert-success toast-message shadow-lg';
    toast.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; min-width: 250px;';
    toast.innerHTML = `<i class="fas fa-check-circle me-2"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function generateRowsFromRange() {
    const startRaw = startDateInput.value;
    const endRaw = endDateInput.value;
    
    if (!startRaw || !endRaw) {
      alert('⚠️ Please select both Start Date and End Date');
      return false;
    }
    
    const start = new Date(startRaw);
    const end = new Date(endRaw);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
      alert('Invalid date range');
      return false;
    }
    
    const existingDates = new Set(dailyRecords.map(rec => rec.dateStr));
    const newRecords = [];
    const currentDate = new Date(start);
    
    while (currentDate <= end) {
      const dateStr = currentDate.toISOString().split('T')[0];
      if (!existingDates.has(dateStr)) {
        newRecords.push({
          dateStr: dateStr,
          inTime: '',
          outTime: '',
          breakTime: 0,
          grossHours: 0,
          hours: 0
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    if (newRecords.length === 0) {
      alert('All dates in this range are already added');
      return true;
    }
    
    dailyRecords.push(...newRecords);
    dailyRecords.sort((a, b) => (a.dateStr || '').localeCompare(b.dateStr || ''));
    renderTable();
    showToast(`✓ Added ${newRecords.length} new date(s)`);
    return true;
  }

  function addBlankRow() {
    const today = new Date();
    let defaultDate = today.toISOString().split('T')[0];
    let counter = 0;
    while (dailyRecords.some(rec => rec.dateStr === defaultDate) && counter < 10) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + counter + 1);
      defaultDate = nextDay.toISOString().split('T')[0];
      counter++;
    }
    
    dailyRecords.push({
      dateStr: defaultDate,
      inTime: '',
      outTime: '',
      breakTime: 0,
      grossHours: 0,
      hours: 0
    });
    dailyRecords.sort((a, b) => (a.dateStr || '').localeCompare(b.dateStr || ''));
    renderTable();
    showToast('✓ Added new day');
  }

  function resetAll() {
    if (confirm('⚠️ Delete ALL timesheet entries? This cannot be undone.')) {
      dailyRecords = [];
      renderTable();
      showToast('✓ All entries cleared');
    }
  }

  function setDefaultDateRange() {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    startDateInput.value = firstDay.toISOString().split('T')[0];
    endDateInput.value = lastDay.toISOString().split('T')[0];
  }

  function loadSampleData() {
    setDefaultDateRange();
    const start = new Date(startDateInput.value);
    const end = new Date(endDateInput.value);
    const records = [];
    const current = new Date(start);
    
    while (current <= end) {
      records.push({
        dateStr: current.toISOString().split('T')[0],
        inTime: '',
        outTime: '',
        breakTime: 0,
        grossHours: 0,
        hours: 0
      });
      current.setDate(current.getDate() + 1);
    }
    dailyRecords = records;
    
    for (let i = 0; i < Math.min(dailyRecords.length, 5); i++) {
      const weekday = new Date(dailyRecords[i].dateStr).getDay();
      if (weekday !== 0 && weekday !== 6) {
        dailyRecords[i].inTime = '09:00';
        dailyRecords[i].outTime = '17:30';
        dailyRecords[i].breakTime = 0.5;
        dailyRecords[i].grossHours = calculateGrossHours('09:00', '17:30');
        dailyRecords[i].hours = calculateNetHours(8.5, 0.5);
      }
    }
    renderTable();
  }

  generateRangeBtn.addEventListener('click', generateRowsFromRange);
  addRowBtn.addEventListener('click', addBlankRow);
  resetTableBtn.addEventListener('click', resetAll);
  downloadPDFBtn.addEventListener('click', exportToPDF);
  autoTimeBtn.addEventListener('click', () => { if (autoTimeModalInstance) autoTimeModalInstance.show(); });
  applyAutoTimeBtn.addEventListener('click', autoFillTimes);
  employeeNameInput.addEventListener('input', updateSummary);
  employeeIdInput.addEventListener('input', updateSummary);
  monthPeriodInput.addEventListener('input', updateSummary);
  startDateInput.addEventListener('change', updateSummary);
  endDateInput.addEventListener('change', updateSummary);
  
  initFlatpickr();
  loadSampleData();