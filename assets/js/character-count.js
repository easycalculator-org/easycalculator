(() => {
  'use strict';
  const root = document.getElementById('ec-character-counter');
  if (!root) return;
  const el = id => root.querySelector('#cc-' + id);
  const editor = el('text');
  const nf = new Intl.NumberFormat(document.documentElement.lang || 'en');
  let wordSegmenter;
  try { if (Intl.Segmenter) wordSegmenter = new Intl.Segmenter(undefined, {granularity:'word'}); } catch (_) {}
  let previousAction = null;
  let frame = 0;
  let stats = {characters:0, compact:0};
  let detailedText = null;
  const duration = seconds => seconds < 60 ? seconds + ' sec' : Math.floor(seconds / 60) + ' min' + (seconds % 60 ? ' ' + seconds % 60 + ' sec' : '');
  const put = (id, value) => { el(id).textContent = typeof value === 'number' ? nf.format(value) : value; };
  const wordsOf = text => {
    if (!wordSegmenter) return text.match(/[\p{L}\p{N}\p{M}]+(?:['’][\p{L}\p{N}\p{M}]+)*/gu) || [];
    const words = [];
    for (const item of wordSegmenter.segment(text)) if (item.isWordLike) words.push(item.segment);
    return words;
  };
  function analyze(text) {
    text = text.replace(/\r\n?/g, '\n');
    let characters = 0, compact = 0;
    for (const char of text) { characters++; if (!/\s/u.test(char)) compact++; }
    return {characters, compact, words:wordsOf(text), text};
  }
  function updateGoal() {
    const input = el('limit');
    const value = input.value;
    const limit = Number(value);
    const invalid = input.validity.badInput || (value !== '' && (!Number.isInteger(limit) || limit < 1 || limit > 1000000000));
    input.setAttribute('aria-invalid', String(invalid));
    el('limit-error').hidden = !invalid;
    el('goal').classList.remove('over');
    el('progress').hidden = value === '' || invalid;
    if (invalid) { put('remaining', 'Check your character limit'); return; }
    if (value === '') { put('remaining', 'No limit set'); return; }
    const used = el('mode').value === 'all' ? stats.characters : stats.compact;
    const remaining = limit - used;
    el('progress').max = limit;
    el('progress').value = Math.min(used, limit);
    el('goal').classList.toggle('over', remaining < 0);
    put('remaining', nf.format(Math.abs(remaining)) + (remaining < 0 ? ' characters over limit' : remaining === 0 ? ' characters remaining — limit reached' : ' characters remaining'));
  }
  function updateDetails() {
    if (!el('details').open || detailedText === stats.text) return;
    detailedText = stats.text;
    const text = stats.text;
    const words = stats.words;
    const unique = new Set(words.map(word => word.normalize('NFC').toLocaleLowerCase())).size;
    put('spaces', (text.match(/ /g) || []).length);
    put('sentences', text.split(/[.!?。！？]+/u).filter(part => /[\p{L}\p{N}]/u.test(part)).length);
    put('paragraphs', text.trim() ? text.trim().split(/\n[\t ]*\n(?:[\t ]*\n)*/).length : 0);
    put('lines', (text.match(/\n/g) || []).length);
    put('letters-total', (text.match(/\p{L}/gu) || []).length);
    put('unique', unique);
    put('ratio', words.length ? (100 * unique / words.length).toFixed(1) + '%' : '0%');
    put('speaking', duration(Math.ceil(words.length / 130 * 60)));
    const counts = Array(26).fill(0);
    for (const ch of text.toLowerCase()) { const i = ch.charCodeAt(0) - 97; if (i >= 0 && i < 26) counts[i]++; }
    el('frequency').replaceChildren(...counts.map((count, i) => {
      const cell = document.createElement('span'); cell.className = 'cc-letter';
      const letter = document.createElement('b'); letter.textContent = String.fromCharCode(65 + i);
      cell.append(letter, document.createTextNode(nf.format(count))); return cell;
    }));
  }
  function update() {
    stats = analyze(editor.value);
    put('chars', stats.characters); put('no-spaces', stats.compact); put('words', stats.words.length);
    put('reading', duration(Math.ceil(stats.words.length / 200 * 60)));
    ['copy','download','trim','clear'].forEach(id => { el(id).disabled = editor.value.length === 0; });
    el('undo').disabled = previousAction === null;
    updateGoal(); updateDetails();
  }
  function applyAction(text, message) {
    previousAction = editor.value; editor.value = text; update(); put('status', message); editor.focus();
  }
  editor.addEventListener('input', () => {
    put('status', ''); cancelAnimationFrame(frame); frame = requestAnimationFrame(update);
  });
  el('limit').addEventListener('input', updateGoal);
  el('mode').addEventListener('change', updateGoal);
  el('details').addEventListener('toggle', updateDetails);
  el('clear').addEventListener('click', () => applyAction('', 'Text cleared. Use Undo action to restore it.'));
  el('trim').addEventListener('click', () => {
    const trimmed = editor.value.split('\n').map(line => line.replace(/[\t ]+/g, ' ').trim()).join('\n').trim();
    if (trimmed === editor.value) { put('status', 'No extra spaces to remove.'); return; }
    applyAction(trimmed, 'Extra spaces removed. Use Undo action to restore them.');
  });
  el('undo').addEventListener('click', () => {
    if (previousAction === null) return;
    editor.value = previousAction; previousAction = null; update(); put('status', 'Previous text restored.'); editor.focus();
  });
  el('copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(editor.value); put('status', 'Text copied.'); }
    catch (_) { editor.focus(); editor.select(); put('status', 'Text selected. Use Ctrl+C, Command+C or your device’s Copy command.'); }
  });
  el('download').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob([editor.value], {type:'text/plain;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = 'my-text.txt';
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    put('status', 'Text file prepared for download.');
  });
  update();
})();