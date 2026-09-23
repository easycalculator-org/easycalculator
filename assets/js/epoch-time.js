(function () {
  'use strict';
  const root = document.getElementById('ec-epoch');
  if (!root) return;
  const el = id => root.querySelector('#' + id);
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'device local time';
  el('ep-local-zone').textContent = zone;
  el('ep-zone').options[1].textContent = 'Local — ' + zone;
  const pad = (n, width = 2) => String(n).padStart(width, '0');
  function readable(date, utc) {
    const prefix = utc ? 'getUTC' : 'get';
    const p = name => date[prefix + name]();
    let suffix = 'UTC';
    if (!utc) {
      const offset = -date.getTimezoneOffset();
      suffix = 'UTC' + (offset < 0 ? '−' : '+') + pad(Math.floor(Math.abs(offset) / 60)) + ':' + pad(Math.abs(offset) % 60);
    }
    return pad(p('FullYear'), 4) + '-' + pad(p('Month') + 1) + '-' + pad(p('Date')) + ' ' + pad(p('Hours')) + ':' + pad(p('Minutes')) + ':' + pad(p('Seconds')) + '.' + pad(p('Milliseconds'), 3) + ' ' + suffix;
  }
  function parseTimestamp(raw, unit) {
    const value = raw.trim();
    if (!/^[+-]?\d+(?:\.\d{1,3})?$/.test(value)) throw new Error('Enter a number without commas or extra characters. Seconds support up to 3 decimal places.');
    if (unit === 'milliseconds' && value.includes('.')) throw new Error('Enter whole milliseconds, or select seconds for a decimal timestamp.');
    const negative = value.startsWith('-');
    const unsigned = value.replace(/^[+-]/, '');
    const parts = unsigned.split('.');
    let ms = unit === 'seconds' ? BigInt(parts[0]) * 1000n + BigInt((parts[1] || '').padEnd(3, '0')) : BigInt(parts[0]);
    if (negative) ms = -ms;
    // Four-digit calendar years keep date input, ISO output and display consistent.
    if (ms < -62135596800000n || ms > 253402300799999n) throw new Error('Choose the correct unit and a date from year 0001 through 9999.');
    return new Date(Number(ms));
  }
  function error(kind, message) {
    el('ep-' + kind + '-result').hidden = true;
    const target = el('ep-' + kind + '-error');
    target.textContent = message; target.hidden = false;
  }
  function convertFrom(announce = true) {
    try {
      const date = parseTimestamp(el('ep-input').value, el('ep-unit').value);
      el('ep-utc').textContent = readable(date, true);
      el('ep-local').textContent = readable(date, false);
      el('ep-iso').textContent = date.toISOString();
      el('ep-from-error').hidden = true; el('ep-from-result').hidden = false;
      el('ep-input').removeAttribute('aria-invalid');
      if (announce) el('ep-status').textContent = 'Timestamp converted. UTC: ' + readable(date, true);
    } catch (e) { error('from', e.message); el('ep-input').setAttribute('aria-invalid', 'true'); }
  }
  function parseCalendar(dateText, timeText, local) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText) || !/^\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?$/.test(timeText)) throw new Error('Enter a valid date and time.');
    const [y, m, d] = dateText.split('-').map(Number);
    const [h, minute, secText = '0'] = timeText.split(':');
    const [s, fraction = ''] = secText.split('.');
    const values = [y, m - 1, d, Number(h), Number(minute), Number(s), Number(fraction.padEnd(3, '0'))];
    if (y < 1 || y > 9999) throw new Error('Choose a year from 0001 through 9999.');
    // Parse the complete wall time in one operation to retain native DST disambiguation.
    const normalized = dateText + 'T' + pad(Number(h)) + ':' + pad(Number(minute)) + ':' + pad(Number(s)) + '.' + fraction.padEnd(3, '0');
    const result = new Date(normalized + (local ? '' : 'Z'));
    const prefix = local ? 'get' : 'getUTC';
    const actual = ['FullYear','Month','Date','Hours','Minutes','Seconds','Milliseconds'].map(k => result[prefix + k]());
    if (actual.some((v, i) => v !== values[i])) throw new Error('This date or time is invalid, or the local time is skipped by daylight saving. Check the inputs or use UTC.');
    parseTimestamp(String(result.getTime()), 'milliseconds');
    return result;
  }
  function convertTo(announce = true) {
    try {
      const date = parseCalendar(el('ep-date').value, el('ep-time').value, el('ep-zone').value === 'local');
      el('ep-seconds').textContent = String(date.getTime() / 1000);
      el('ep-milliseconds').textContent = String(date.getTime());
      el('ep-date-utc').textContent = readable(date, true);
      el('ep-to-error').hidden = true; el('ep-to-result').hidden = false;
      if (announce) el('ep-status').textContent = 'Date converted: ' + el('ep-seconds').textContent + ' seconds.';
    } catch (e) { error('to', e.message); }
  }
  function fillDate(date) {
    const text = readable(date, el('ep-zone').value === 'utc');
    el('ep-date').value = text.slice(0, 10); el('ep-time').value = text.slice(11, 23);
  }
  function useNow() {
    const date = new Date();
    el('ep-unit').value = 'milliseconds'; el('ep-input').value = String(date.getTime());
    fillDate(date); convertFrom(false); convertTo(false);
    el('ep-status').textContent = 'Both converters now show the same current instant.';
  }
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      el('ep-status').textContent = 'Copied: ' + text;
    } catch (_) {
      el('ep-status').textContent = 'Clipboard is unavailable. Select the displayed result and copy it manually.';
    }
  }
  el('ep-from-form').addEventListener('submit', e => { e.preventDefault(); convertFrom(); });
  el('ep-to-form').addEventListener('submit', e => { e.preventDefault(); convertTo(); });
  el('ep-input').addEventListener('input', () => { el('ep-from-result').hidden = true; el('ep-from-error').hidden = true; el('ep-input').removeAttribute('aria-invalid'); el('ep-status').textContent = ''; });
  el('ep-unit').addEventListener('change', () => convertFrom());
  ['ep-date', 'ep-time'].forEach(id => el(id).addEventListener('input', () => { el('ep-to-result').hidden = true; el('ep-to-error').hidden = true; el('ep-status').textContent = ''; }));
  el('ep-zone').addEventListener('change', () => {
    el('ep-zone-hint').textContent = el('ep-zone').value === 'utc' ? 'UTC has no daylight saving time.' : 'Uses ' + zone + '. Repeated DST times use the earlier occurrence; skipped times are rejected.';
    convertTo();
  });
  el('ep-example').addEventListener('click', () => { el('ep-input').value = '1704067200'; el('ep-unit').value = 'seconds'; convertFrom(); });
  el('ep-use-now').addEventListener('click', useNow);
  el('ep-date-now').addEventListener('click', () => { fillDate(new Date()); convertTo(); });
  el('ep-copy-now').addEventListener('click', () => copyText(el('ep-live-seconds').textContent));
  root.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copyText(el(button.dataset.copy).textContent)));
  function tick() {
    const now = new Date();
    el('ep-live-seconds').textContent = String(Math.floor(now.getTime() / 1000));
    el('ep-live-date').textContent = readable(now, true).replace(/\.\d{3}/, '') + ' · device clock';
  }
  tick(); setInterval(tick, 1000);
  convertFrom(false); fillDate(new Date()); convertTo(false);
})();