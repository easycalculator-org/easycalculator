---
layout: default
title: "VLSM Calculator – Subnet Masks & IP Address Allocation"
permalink: /vlsm-calculator
description: "Use this free VLSM calculator to allocate IPv4 subnets by host requirements. Find subnet masks, usable IP ranges, broadcast addresses, and remaining space."
last_modified_at: 2026-09-18
---
<style>
#ec-vlsm{max-width:1100px;margin:32px auto;color:#172b25}
#ec-vlsm .vlsm-card{background:linear-gradient(135deg,#f0fdf4,#fff 65%);border:1px solid #d5eade;border-radius:18px;padding:clamp(18px,4vw,32px);box-shadow:0 8px 28px #173f2510}
#ec-vlsm .vlsm-panel{background:#fff;border:1px solid #e1e9e4;border-radius:12px;padding:20px}
#ec-vlsm .form-control:focus{border-color:#198754;box-shadow:0 0 0 .2rem #19875420}
#ec-vlsm .vlsm-stat{background:#f0f8f3;border-radius:10px;padding:14px;height:100%}
#ec-vlsm .vlsm-stat strong{display:block;font-size:1.35rem;color:#146c43;overflow-wrap:anywhere}
#ec-vlsm table{font-size:.9rem}
#ec-vlsm th{white-space:nowrap}
#ec-vlsm td{vertical-align:middle}
#ec-vlsm .vlsm-ip{white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Consolas,monospace}
#ec-vlsm [hidden]{display:none!important}
@media print{#ec-vlsm .vlsm-controls,#ec-vlsm .vlsm-actions{display:none!important}#ec-vlsm{max-width:none;margin:0}#ec-vlsm .vlsm-card{border:0;box-shadow:none;padding:0}#ec-vlsm .table-responsive{overflow:visible}#ec-vlsm table{font-size:9pt}}
</style>
<main id="ec-vlsm" class="container">
<div class="vlsm-card">
<header class="text-center mb-4">
<span class="badge text-bg-success mb-2">IPv4 NETWORK PLANNING</span>
<h1 class="h2 fw-bold">VLSM Calculator</h1>
<p class="text-secondary mb-0">Allocate different subnet sizes based on the hosts each network needs.</p>
</header>
<form id="vlsm-form" class="vlsm-controls">
<div class="vlsm-panel mb-3">
<label for="vlsm-network" class="form-label fw-semibold">Parent IPv4 network / CIDR</label>
<input id="vlsm-network" class="form-control form-control-lg" type="text" value="192.168.1.0/24" placeholder="e.g. 192.168.1.0/24" autocomplete="off" spellcheck="false" required aria-describedby="vlsm-network-help">
<div id="vlsm-network-help" class="form-text">Enter a prefix from /0 to /30. An IP with host bits set is normalized to its network address.</div>
</div>
<div class="vlsm-panel mb-3">
<div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
<h2 class="h5 mb-0">Subnet requirements</h2>
<button id="vlsm-add" type="button" class="btn btn-outline-success btn-sm">+ Add subnet</button>
</div>
<div id="vlsm-rows" class="d-grid gap-2"></div>
<p class="small text-secondary mt-3 mb-0">Hosts means usable addresses, including any gateway you need. Each subnet reserves one network and one broadcast address. Minimum allocation: /30 (2 usable hosts). /31 point-to-point links and /32 routes are not included.</p>
</div>
<div class="d-flex flex-wrap gap-2">
<button class="btn btn-success px-4" type="submit">Calculate VLSM</button>
<button class="btn btn-outline-secondary" type="button" id="vlsm-reset">Reset example</button>
</div>
</form>
<div id="vlsm-error" class="alert alert-danger mt-3 mb-0" role="alert" hidden></div>
<p id="vlsm-status" class="small text-secondary mt-3 mb-0" role="status" aria-live="polite"></p>
<section id="vlsm-results" class="mt-4" aria-labelledby="vlsm-results-title" hidden>
<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
<h2 id="vlsm-results-title" class="h4 mb-0">Subnet allocation</h2>
<div class="d-flex gap-2 vlsm-actions">
<button id="vlsm-csv" class="btn btn-outline-success btn-sm" type="button">Download CSV</button>
<button id="vlsm-print" class="btn btn-outline-secondary btn-sm" type="button">Print / Save PDF</button>
</div>
</div>
<p id="vlsm-parent" class="small text-secondary"></p>
<div class="row g-2 mb-3">
<div class="col-6 col-lg-3"><div class="vlsm-stat"><span class="small">Requested hosts</span><strong id="vlsm-requested"></strong></div></div>
<div class="col-6 col-lg-3"><div class="vlsm-stat"><span class="small">Allocated addresses</span><strong id="vlsm-allocated"></strong></div></div>
<div class="col-6 col-lg-3"><div class="vlsm-stat"><span class="small">Usable capacity</span><strong id="vlsm-capacity"></strong></div></div>
<div class="col-6 col-lg-3"><div class="vlsm-stat"><span class="small">Unallocated addresses</span><strong id="vlsm-free"></strong></div></div>
</div>
<div class="table-responsive bg-white rounded border">
<table class="table table-hover mb-0">
<caption class="px-3">Largest subnets are allocated first. Spare hosts = usable capacity minus requested hosts.</caption>
<thead class="table-success"><tr><th scope="col">Subnet</th><th scope="col">Hosts needed</th><th scope="col">Network / CIDR</th><th scope="col">Subnet mask</th><th scope="col">First usable</th><th scope="col">Last usable</th><th scope="col">Broadcast</th><th scope="col">Usable hosts</th><th scope="col">Spare hosts</th></tr></thead>
<tbody id="vlsm-output"></tbody>
</table>
</div>
<p id="vlsm-remaining" class="small mt-3 mb-0"></p>
</section>
</div>
<section class="mt-4 px-2">
<h2 class="h4">How the VLSM calculation works</h2>
<p>Variable Length Subnet Masking divides a parent network into subnets of different sizes. This calculator sorts your requirements from largest to smallest and assigns each subnet the smallest power-of-two block that fits its hosts plus the network and broadcast addresses.</p>
<p class="mb-0">For example, 50 hosts need a block of 64 addresses: a <strong>/26</strong> subnet with <strong>62 usable hosts</strong>. Unallocated addresses remain outside the assigned subnets; spare hosts are unused usable addresses inside them.</p>
</section>
</main>
<script>
(() => {
'use strict';
const root = document.getElementById('ec-vlsm');
const $ = id => root.querySelector('#vlsm-' + id);
const MAX = 2 ** 32;
let rowId = 0;
let exportRows = [];
const format = n => n.toLocaleString('en-US');

// Arithmetic avoids signed 32-bit overflow, including for /0 networks.
function ipToNumber(text) {
  const parts = text.split('.');
  if (parts.length !== 4 || parts.some(p => !/^(0|[1-9]\d{0,2})$/.test(p) || Number(p) > 255)) {
    throw new Error('Enter a valid IPv4 address using four octets from 0 to 255, without leading zeros.');
  }
  return parts.reduce((value, p) => value * 256 + Number(p), 0);
}
function numberToIp(value) {
  return [24, 16, 8, 0].map(bits => Math.floor(value / 2 ** bits) % 256).join('.');
}
function allocate(cidr, requirements) {
  const match = cidr.trim().match(/^([^/]+)\/(0|[1-9]|[12]\d|30)$/);
  if (!match) throw new Error('Enter a valid IPv4 network with a CIDR prefix from /0 to /30, such as 192.168.1.0/24.');
  const ip = ipToNumber(match[1]);
  const prefix = Number(match[2]);
  const size = 2 ** (32 - prefix);
  const start = Math.floor(ip / size) * size;
  const end = start + size;
  if (!requirements.length) throw new Error('Add at least one subnet.');
  const sorted = requirements.map((r, index) => {
    if (!Number.isSafeInteger(r.hosts) || r.hosts < 1 || r.hosts > MAX - 2) throw new Error('Each host count must be a whole number from 1 to 4,294,967,294.');
    let block = 4;
    while (block - 2 < r.hosts) block *= 2;
    return {...r, index, block};
  }).sort((a, b) => b.block - a.block || a.index - b.index);
  const required = sorted.reduce((sum, r) => sum + r.block, 0);
  if (required > size) throw new Error('Insufficient address space: these subnets require ' + format(required) + ' addresses, but /' + prefix + ' contains ' + format(size) + '. Use a larger parent network or reduce the host requirements.');
  let cursor = start;
  const rows = sorted.map(r => {
    const network = Math.ceil(cursor / r.block) * r.block;
    if (network + r.block > end) throw new Error('The requested subnet blocks do not fit inside this parent network.');
    cursor = network + r.block;
    const subnetPrefix = 32 - Math.log2(r.block);
    return {name:r.name, hosts:r.hosts, cidr:numberToIp(network) + '/' + subnetPrefix,
      mask:numberToIp(MAX - r.block), first:numberToIp(network + 1),
      last:numberToIp(cursor - 2), broadcast:numberToIp(cursor - 1),
      usable:r.block - 2, spare:r.block - 2 - r.hosts};
  });
  return {rows, ip, start, end, prefix, size, required, cursor};
}
function invalidate() {
  $('results').hidden = true;
  $('error').hidden = true;
  $('status').textContent = 'Inputs changed. Select Calculate VLSM to update the allocation.';
  exportRows = [];
}
function addRow(name = '', hosts = '') {
  if ($('rows').children.length >= 100) return;
  const id = ++rowId;
  const row = document.createElement('div');
  row.className = 'row g-2 align-items-end';
  row.innerHTML = '<div class="col-6 col-md-7"><label class="form-label small" for="vlsm-name-' + id + '">Subnet name</label><input class="form-control" id="vlsm-name-' + id + '" data-name maxlength="80" placeholder="e.g. Office LAN"></div>' +
    '<div class="col-4 col-md-3"><label class="form-label small" for="vlsm-hosts-' + id + '">Required hosts</label><input class="form-control" id="vlsm-hosts-' + id + '" data-hosts type="number" min="1" max="4294967294" step="1" inputmode="numeric" required></div>' +
    '<div class="col-2"><button type="button" class="btn btn-outline-danger w-100" aria-label="Remove subnet row ' + id + '">&times;</button></div>';
  row.querySelector('[data-name]').value = name;
  row.querySelector('[data-hosts]').value = hosts;
  row.querySelector('button').addEventListener('click', () => {
    row.remove(); updateButtons(); invalidate(); $('add').focus();
  });
  $('rows').append(row);
  updateButtons();
  return row;
}
function updateButtons() {
  $('add').disabled = $('rows').children.length >= 100;
  $('rows').querySelectorAll('button').forEach(b => b.disabled = $('rows').children.length === 1);
}
function calculate() {
  $('error').hidden = true;
  $('results').hidden = true;
  exportRows = [];
  try {
    const requirements = [...$('rows').children].map((row, index) => ({
      name:row.querySelector('[data-name]').value.trim() || 'Subnet ' + (index + 1),
      hosts:Number(row.querySelector('[data-hosts]').value)
    }));
    const result = allocate($('network').value, requirements);
    const output = document.createDocumentFragment();
    result.rows.forEach(r => {
      const tr = document.createElement('tr');
      [r.name, format(r.hosts), r.cidr, r.mask, r.first, r.last, r.broadcast, format(r.usable), format(r.spare)].forEach((value, i) => {
        const cell = document.createElement(i === 0 ? 'th' : 'td');
        if (i === 0) cell.scope = 'row';
        if (i >= 2 && i <= 6) cell.className = 'vlsm-ip';
        cell.textContent = value;
        tr.append(cell);
      });
      output.append(tr);
    });
    $('output').replaceChildren(output);
    $('parent').textContent = 'Parent: ' + numberToIp(result.start) + '/' + result.prefix + ' · Range: ' + numberToIp(result.start) + ' – ' + numberToIp(result.end - 1) + (result.ip !== result.start ? ' · Input normalized to the network address.' : '');
    $('requested').textContent = format(requirements.reduce((s, r) => s + r.hosts, 0));
    $('allocated').textContent = format(result.required);
    $('capacity').textContent = format(result.rows.reduce((s, r) => s + r.usable, 0));
    $('free').textContent = format(result.size - result.required);
    $('remaining').textContent = result.cursor < result.end ? 'Unallocated address range: ' + numberToIp(result.cursor) + ' – ' + numberToIp(result.end - 1) + '. This range may span multiple CIDR blocks.' : 'All parent-network addresses have been allocated.';
    exportRows = result.rows;
    $('results').hidden = false;
    $('status').textContent = result.rows.length + ' subnets allocated successfully.';
  } catch (error) {
    $('error').textContent = error.message;
    $('error').hidden = false;
    $('status').textContent = '';
  }
}
function resetExample() {
  $('network').value = '192.168.1.0/24';
  $('rows').replaceChildren();
  [['Office LAN',100],['Engineering',50],['Guest Wi-Fi',25],['Management',10]].forEach(r => addRow(...r));
  calculate();
}
$('form').addEventListener('submit', e => {e.preventDefault(); calculate();});
$('form').addEventListener('input', invalidate);
$('add').addEventListener('click', () => {const row = addRow(); invalidate(); if (row) row.querySelector('input').focus();});
$('reset').addEventListener('click', resetExample);
$('print').addEventListener('click', () => window.print());
$('csv').addEventListener('click', () => {
  if (!exportRows.length) return;
  const header = ['Subnet','Required hosts','Network / CIDR','Subnet mask','First usable','Last usable','Broadcast','Usable hosts','Spare hosts'];
  const rows = exportRows.map(r => [r.name,r.hosts,r.cidr,r.mask,r.first,r.last,r.broadcast,r.usable,r.spare]);
  // Quote every field and neutralize spreadsheet formulas in user-provided names.
  const escape = value => {
    let text = String(value);
    if (/^[\s]*[=+@-]|^[\t\r\n]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  };
  const csv = [header,...rows].map(r => r.map(escape).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], {type:'text/csv;charset=utf-8;'}));
  const link = document.createElement('a');
  link.href = url; link.download = 'vlsm-subnet-allocation.csv';
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
resetExample();
})();
</script>