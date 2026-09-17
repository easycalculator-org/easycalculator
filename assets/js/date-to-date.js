/* Date-only calculations use UTC. Local time is used only to choose Today. */
(function () {
  'use strict';
  const DAY = 86400000;

  function utcDate(year, month, day) {
    const date = new Date(0);
    date.setUTCFullYear(year, month, day);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  function parseDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    const [, y, m, d] = match.map(Number);
    if (y < 1 || y > 9999 || m < 1 || m > 12 || d < 1 || d > 31) return null;
    const date = utcDate(y, m - 1, d);
    return date.getUTCFullYear() === y && date.getUTCMonth() === m - 1 &&
      date.getUTCDate() === d ? date : null;
  }

  function isoDate(date) {
    return [String(date.getUTCFullYear()).padStart(4, '0'),
      String(date.getUTCMonth() + 1).padStart(2, '0'),
      String(date.getUTCDate()).padStart(2, '0')].join('-');
  }

  // Add months from the original date, clamping to the target month's last day.
  function addMonths(date, count) {
    const first = utcDate(date.getUTCFullYear(), date.getUTCMonth() + count, 1);
    const last = utcDate(first.getUTCFullYear(), first.getUTCMonth() + 1, 0);
    return utcDate(first.getUTCFullYear(), first.getUTCMonth(),
      Math.min(date.getUTCDate(), last.getUTCDate()));
  }

  function businessDays(start, days) {
    let count = Math.floor(days / 7) * 5;
    // Whole weeks contain five weekdays; inspect only the remaining 0–6 days.
    for (let i = 0; i < days % 7; i++) {
      const weekday = (start.getUTCDay() + i) % 7;
      if (weekday !== 0 && weekday !== 6) count++;
    }
    return count;
  }

  function calculate(startValue, endValue, inclusive = false) {
    let start = parseDate(startValue);
    let end = parseDate(endValue);
    if (!start || !end) throw new Error('Enter two valid dates with years between 0001 and 9999.');
    const swapped = start > end;
    if (swapped) [start, end] = [end, start];
    const boundary = new Date(end.getTime() + (inclusive ? DAY : 0));
    const days = Math.round((boundary - start) / DAY);
    let months = (boundary.getUTCFullYear() - start.getUTCFullYear()) * 12 +
      boundary.getUTCMonth() - start.getUTCMonth();
    if (addMonths(start, months) > boundary) months--;
    const monthDays = Math.round((boundary - addMonths(start, months)) / DAY);
    const working = businessDays(start, days);
    return { start, end, swapped, days, weeks: Math.floor(days / 7),
      weekDays: days % 7, months, monthDays, business: working, weekend: days - working };
  }

  function init() {
    const root = document.getElementById('ec-date-calculator');
    if (!root || root.dataset.initialized) return;
    root.dataset.initialized = 'true';
    const el = id => root.querySelector('#' + id);
    const startInput = el('startDate');
    const endInput = el('endDate');
    const inclusive = el('includeEndDate');
    const resultIds = ['daysResult', 'weeksResult', 'monthsResult',
      'businessDaysResult', 'weekendDaysResult'];
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
    });
    const number = new Intl.NumberFormat('en-US');
    const unit = (n, name) => number.format(n) + ' ' + name + (n === 1 ? '' : 's');

    function today() {
      const now = new Date();
      return isoDate(utcDate(now.getFullYear(), now.getMonth(), now.getDate()));
    }

    function update() {
      const invalid = [startInput, endInput].filter(input => !parseDate(input.value));
      for (const input of [startInput, endInput]) {
        input.setAttribute('aria-invalid', String(invalid.includes(input)));
      }
      if (invalid.length) {
        resultIds.forEach(id => { el(id).textContent = '—'; });
        el('dayLabel').textContent = 'total days';
        el('fullResult').textContent = 'Choose two valid dates to see your result.';
        el('dateError').textContent = 'Enter a valid ' +
          (invalid.length === 2 ? 'start and end date' : invalid[0] === startInput ? 'start date' : 'end date') +
          ' with a year between 0001 and 9999.';
        el('dateError').hidden = false;
        return false;
      }
      el('dateError').hidden = true;
      el('dateError').textContent = '';
      const result = calculate(startInput.value, endInput.value, inclusive.checked);
      // Keep the user's input order visible; explain the normalized result below.
      el('daysResult').textContent = number.format(result.days);
      el('dayLabel').textContent = result.days === 1 ? 'total day' : 'total days';
      el('weeksResult').textContent = unit(result.weeks, 'week') + ', ' + unit(result.weekDays, 'day');
      el('monthsResult').textContent = unit(result.months, 'month') + ', ' + unit(result.monthDays, 'day');
      el('businessDaysResult').textContent = number.format(result.business);
      el('weekendDaysResult').textContent = number.format(result.weekend);
      el('fullResult').textContent = (result.swapped ? 'Dates reordered for this result. ' : '') +
        formatter.format(result.start) + ' to ' + formatter.format(result.end) + ': ' +
        unit(result.days, 'day') + '. ' +
        (inclusive.checked ? 'Both dates included.' : 'Start date included; end date excluded.');
      return true;
    }

    function reset() {
      const current = today();
      startInput.value = current.slice(0, 4) + '-01-01';
      endInput.value = current;
      inclusive.checked = false;
      update();
    }

    el('dateDifferenceForm').addEventListener('submit', event => {
      event.preventDefault();
      if (!update()) [startInput, endInput].find(input => !parseDate(input.value)).focus();
    });
    [startInput, endInput].forEach(input => input.addEventListener('input', update));
    inclusive.addEventListener('change', update);
    el('startToday').addEventListener('click', () => { startInput.value = today(); update(); });
    el('endToday').addEventListener('click', () => { endInput.value = today(); update(); });
    el('swapDates').addEventListener('click', () => {
      [startInput.value, endInput.value] = [endInput.value, startInput.value];
      update();
    });
    el('resetDates').addEventListener('click', reset);
    reset();
  }

  // Allows the same calculation functions to be checked with Node.js.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate, parseDate, addMonths, businessDays };
  }
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
  }
})();
