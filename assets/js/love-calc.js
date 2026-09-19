(function () {
 'use strict';
 const byId = id => document.getElementById(id);
 const form = byId('lc-form'), first = byId('lc-first'), second = byId('lc-second');
 const error = byId('lc-error');
 let shareText = '';
 function clean(value) { return value.normalize('NFKC').trim().replace(/\s+/gu, ' '); }
 function loveScore(a, b) {
  const key = JSON.stringify([clean(a).toLowerCase(), clean(b).toLowerCase()].sort());
  let hash = 2166136261;
  for (const character of key) { hash ^= character.codePointAt(0); hash = Math.imul(hash, 16777619) >>> 0; }
  return hash % 101;
 }
 function clearResult() {
  shareText = '';
  byId('lc-pair').textContent = 'Your love percentage';
  byId('lc-score').textContent = '—%';
  byId('lc-message').textContent = 'Enter two names to start.';
  byId('lc-fill').style.width = '0%';
  byId('lc-share').hidden = true;
  byId('lc-whatsapp').removeAttribute('href');
  byId('lc-email').removeAttribute('href');
  byId('lc-copy-status').textContent = '';
  error.hidden = true;
  [first, second].forEach(input => input.removeAttribute('aria-invalid'));
 }
 form.addEventListener('input', clearResult);
 form.addEventListener('reset', () => { clearResult(); first.focus(); });
 form.addEventListener('submit', event => {
  event.preventDefault();
  clearResult();
  for (const input of [first, second]) {
   if (!clean(input.value) || input.value.length > 80) {
    error.textContent = 'Please enter both names, using up to 80 characters per name.';
    error.hidden = false; input.setAttribute('aria-invalid', 'true'); input.focus(); return;
   }
  }
  const a = clean(first.value), b = clean(second.value), score = loveScore(a, b);
  byId('lc-pair').textContent = a + ' + ' + b;
  byId('lc-score').textContent = score + '%';
  byId('lc-message').textContent = score >= 80 ? 'Big heart energy! ♥' : score >= 60 ? 'A little sparkle in this name game!' : score >= 40 ? 'An intriguing name-game match!' : 'Names are only the beginning!';
  byId('lc-fill').style.width = score + '%';
  shareText = a + ' + ' + b + ': ' + score + '% on the EasyCalculator love tester! Just for fun — names cannot measure love. https://easycalculator.org/love-calculator';
  byId('lc-whatsapp').href = 'https://wa.me/?text=' + encodeURIComponent(shareText);
  byId('lc-email').href = 'mailto:?subject=' + encodeURIComponent('Our love tester result') + '&body=' + encodeURIComponent(shareText);
  byId('lc-share').hidden = false;
 });
 byId('lc-copy').addEventListener('click', async () => {
  if (!shareText) return;
  const currentText = shareText;
  try {
   if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
   await navigator.clipboard.writeText(currentText);
   if (currentText === shareText) byId('lc-copy-status').textContent = 'Result copied!';
  } catch (_) {
   if (currentText === shareText) byId('lc-copy-status').textContent = 'Copy is unavailable in this browser. Use WhatsApp or Email instead.';
  }
 });
}());