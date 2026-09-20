(function () {
  'use strict';
  // UTC is used as a calendar arithmetic container, not as the user's birth time zone.
  const DAY = 86400000;
  function makeDate(year, month, day) {
    const value = new Date(0);
    value.setUTCHours(0, 0, 0, 0);
    value.setUTCFullYear(year, month, day);
    return value;
  }
  function parseDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    const year = Number(match[1]), month = Number(match[2]) - 1, day = Number(match[3]);
    if (year < 1 || year > 9998 || month < 0 || month > 11 || day < 1 || day > 31) return null;
    const result = makeDate(year, month, day);
    return result.getUTCFullYear() === year && result.getUTCMonth() === month && result.getUTCDate() === day ? result : null;
  }
  function addMonths(date, months) {
    const index = date.getUTCFullYear() * 12 + date.getUTCMonth() + months;
    const year = Math.floor(index / 12), month = index % 12;
    const lastDay = makeDate(year, month + 1, 0).getUTCDate();
    return makeDate(year, month, Math.min(date.getUTCDate(), lastDay));
  }
  function calculateAge(birth, target) {
    if (target < birth) throw new RangeError('Target date must be on or after birth date.');
    let months = (target.getUTCFullYear() - birth.getUTCFullYear()) * 12 + target.getUTCMonth() - birth.getUTCMonth();
    if (addMonths(birth, months) > target) months--;
    const anchor = addMonths(birth, months);
    return {years: Math.floor(months / 12), months: months % 12, days: Math.round((target - anchor) / DAY), totalMonths: months, totalDays: Math.round((target - birth) / DAY)};
  }
  function nextBirthday(birth, target) {
    let year = target.getUTCFullYear();
    let date = addMonths(birth, (year - birth.getUTCFullYear()) * 12);
    if (date < target) { year++; date = addMonths(birth, (year - birth.getUTCFullYear()) * 12); }
    return {date: date, age: year - birth.getUTCFullYear(), days: Math.round((date - target) / DAY)};
  }
  // UI
  const root = document.getElementById('ec-age-calculator');
  if (!root) return;
  const $ = id => root.querySelector('#' + id);
  const form = $('age-form'), dob = $('age-dob'), target = $('age-target');
  const result = $('age-result'), error = $('age-error');
  const numbers = new Intl.NumberFormat('en-US');
  const dates = new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'});
  const weekdays = new Intl.DateTimeFormat('en-GB', {weekday: 'long', timeZone: 'UTC'});
  function todayValue() {
    const now = new Date();
    return String(now.getFullYear()).padStart(4, '0') + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  }
  function clearOutput() {
    result.hidden = true; error.hidden = true; error.textContent = '';
    dob.removeAttribute('aria-invalid'); target.removeAttribute('aria-invalid');
  }
  function fail(message, field) {
    result.hidden = true; error.textContent = message; error.hidden = false;
    field.setAttribute('aria-invalid', 'true'); field.focus();
  }
  function unit(value, label) { return numbers.format(value) + ' ' + label + (value === 1 ? '' : 's'); }
  function run() {
    clearOutput();
    const birth = parseDate(dob.value), end = parseDate(target.value), today = parseDate(todayValue());
    dob.max = todayValue();
    if (!birth) return fail('Enter a valid date of birth with a year from 1 to 9998.', dob);
    if (birth > today) return fail('Your date of birth cannot be in the future.', dob);
    if (!end) return fail('Enter a valid target date with a year from 1 to 9998.', target);
    if (end < birth) return fail('The target date must be on or after your date of birth.', target);
    const age = calculateAge(birth, end), birthday = nextBirthday(birth, end);
    $('age-on-label').textContent = dates.format(end);
    $('age-answer').textContent = unit(age.years, 'year') + ' · ' + unit(age.months, 'month') + ' · ' + unit(age.days, 'day');
    $('age-born-label').textContent = 'Born on ' + weekdays.format(birth) + ', ' + dates.format(birth) + '.';
    $('age-days').textContent = numbers.format(age.totalDays);
    $('age-weeks').textContent = numbers.format(Math.floor(age.totalDays / 7));
    $('age-months').textContent = numbers.format(age.totalMonths);
    $('age-time').textContent = unit(age.totalDays * 24, 'hour') + ' · ' + unit(age.totalDays * 1440, 'minute');
    $('age-next').textContent = birthday.days === 0
      ? (birthday.age === 0 ? 'The selected date is your date of birth.' : 'Birthday on the selected date: ' + unit(birthday.age, 'year') + ' old.')
      : 'Next birthday after the selected date: ' + dates.format(birthday.date) + ' — in ' + unit(birthday.days, 'day') + ' (turning ' + numbers.format(birthday.age) + ').';
    result.hidden = false;
  }
  dob.max = todayValue(); target.value = todayValue();
  form.addEventListener('submit', function (event) { event.preventDefault(); run(); });
  [dob, target].forEach(function (input) { input.addEventListener('input', clearOutput); input.addEventListener('change', clearOutput); });
  $('age-today').addEventListener('click', function () { target.value = todayValue(); run(); });
  form.addEventListener('reset', function (event) {
    event.preventDefault(); dob.value = ''; target.value = todayValue(); dob.max = todayValue(); clearOutput();
    result.querySelectorAll('details').forEach(function (detail) { detail.open = false; }); dob.focus();
  });
})();