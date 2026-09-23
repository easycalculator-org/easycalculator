---
layout: default
title: Epoch Time Converter | Convert Unix Timestamps to Human-readable Dates
permalink: /epoch
description: "Epoch Time Converter lets you convert Unix timestamps to date and time instantly. Supports UTC and local time for accurate time calculations."
image: "/assets/images/og/epoch-time.jpg"
last_modified_at: 2026-09-23
---
<style>
.ec-epoch{--ep-blue:#2454bc;--ep-ink:#172b4d;--ep-muted:#52647c;--ep-line:#dbe5f0;max-width:1180px;margin:24px auto 40px;padding:0 16px;color:var(--ep-ink);line-height:1.65}
.ec-epoch *{box-sizing:border-box}.ec-epoch [hidden]{display:none!important}
.ec-epoch h1{font-size:clamp(1.7rem,4vw,2.35rem);letter-spacing:-.035em;margin:0 0 8px;font-weight:750}.ec-epoch h2{font-size:1.4rem;line-height:1.35;margin:0 0 14px}.ec-epoch h3{font-size:1.08rem;margin:22px 0 8px}.ec-epoch p{margin:0 0 16px}.ec-epoch a{color:var(--ep-blue);text-underline-offset:3px}.ec-epoch .ep-kicker{color:var(--ep-blue);font-size:.75rem;font-weight:750;letter-spacing:.12em;text-transform:uppercase;margin-bottom:8px}
.ec-epoch .ep-live{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;background:#102d55;color:#fff;border-radius:16px;padding:20px 24px;margin:22px 0}.ec-epoch .ep-live-label{color:#c2d6f3;font-size:.8rem}.ec-epoch .ep-live-value{font:700 clamp(1.8rem,5vw,2.35rem)/1.3 ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums;letter-spacing:.015em}.ec-epoch .ep-live-date{color:#d1def1;font-size:.85rem}.ec-epoch .ep-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:#65e4b5;margin-right:7px}
.ec-epoch .ep-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.ec-epoch .ep-card{border:1px solid var(--ep-line);border-radius:16px;background:#fff;overflow:hidden;box-shadow:0 5px 20px #172b4d06}.ec-epoch .ep-card-head{padding:20px 22px 0}.ec-epoch .ep-card-head h2{font-size:1.2rem;margin:0 0 4px}.ec-epoch .ep-card-head p{color:var(--ep-muted);font-size:.88rem;margin:0}.ec-epoch form{padding:18px 22px 22px}.ec-epoch label{display:block;font-size:.86rem;font-weight:650;margin-bottom:6px}.ec-epoch input,.ec-epoch select{width:100%;min-width:0;border:1px solid #a9b9ce;border-radius:8px;padding:10px 12px;font:inherit;font-size:1rem;background:#fff;color:var(--ep-ink);min-height:46px}.ec-epoch input:focus,.ec-epoch select:focus{outline:3px solid #bbd3ff;outline-offset:1px;border-color:var(--ep-blue)}.ec-epoch button:focus-visible,.ec-epoch a:focus-visible,.ec-epoch summary:focus-visible{outline:3px solid #5488df;outline-offset:3px}.ec-epoch .ep-field{margin-bottom:14px}.ec-epoch .ep-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}.ec-epoch .ep-hint{font-size:.79rem;color:var(--ep-muted);margin:6px 0 0}.ec-epoch .ep-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.ec-epoch button{cursor:pointer;border:1px solid #b7c8df;border-radius:8px;background:#fff;color:var(--ep-ink);padding:9px 14px;font:inherit;font-size:.87rem;font-weight:650;min-height:42px}.ec-epoch button:hover{background:#edf3fb}.ec-epoch .ep-primary{background:var(--ep-blue);border-color:var(--ep-blue);color:#fff}.ec-epoch .ep-primary:hover{background:#193f91}.ec-epoch .ep-live button{background:#254871;color:#fff;border-color:#4c6d96}.ec-epoch .ep-live button:hover{background:#315983}.ec-epoch .ep-error{color:#a32132;font-size:.88rem;margin:12px 0 0}.ec-epoch .ep-result{background:#f1f6fd;border-top:1px solid var(--ep-line);padding:18px 22px}.ec-epoch .ep-result h3{font-size:.76rem;color:var(--ep-blue);text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px}.ec-epoch .ep-result dl{margin:0}.ec-epoch .ep-result dt{font-size:.76rem;color:var(--ep-muted);font-weight:500}.ec-epoch .ep-result dd{font-size:.94rem;font-weight:650;margin:0 0 12px;overflow-wrap:anywhere}.ec-epoch .ep-result dd:last-child{margin:0}.ec-epoch .ep-mono{font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-variant-numeric:tabular-nums}.ec-epoch .ep-note{font-size:.81rem;color:var(--ep-muted);margin:14px 0 0}.ec-epoch .ep-status{min-height:1.6em;font-size:.85rem;color:#215c42;margin:8px 0}.ec-epoch .ep-nav{display:flex;gap:10px 22px;flex-wrap:wrap;font-size:.86rem;padding:16px 0;border-bottom:1px solid var(--ep-line);margin-bottom:28px}.ec-epoch .ep-article{max-width:900px;margin:0 auto}.ec-epoch .ep-meta{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding-bottom:18px;margin-bottom:26px;border-bottom:1px solid var(--ep-line);font-size:.83rem;color:var(--ep-muted)}.ec-epoch .ep-authors{display:flex;gap:14px;flex-wrap:wrap}.ec-epoch article section{margin:0 0 32px;scroll-margin-top:24px}.ec-epoch .ep-formula{background:#f1f6fd;padding:16px 20px;border-radius:0 10px 10px 0;margin:18px 0}.ec-epoch .ep-scroll{overflow-x:auto}.ec-epoch table{border-collapse:collapse;width:100%;font-size:.9rem}.ec-epoch th,.ec-epoch td{padding:12px;text-align:left;border-bottom:1px solid var(--ep-line)}.ec-epoch th{background:#edf3fb}.ec-epoch td code{white-space:nowrap}.ec-epoch pre{background:#102d55;color:#edf4ff;padding:16px;border-radius:10px;overflow-x:auto;font-size:.88rem}.ec-epoch details{border:1px solid var(--ep-line);border-radius:10px;margin:10px 0;padding:14px 18px}.ec-epoch summary{cursor:pointer;font-weight:650}.ec-epoch details p{margin:12px 0 0}.ec-epoch .ep-related{display:flex;flex-wrap:wrap;gap:10px}.ec-epoch .ep-related a{padding:8px 14px;background:#f1f6fd;border-radius:8px;font-size:.88rem}
@media(max-width:720px){.ec-epoch{margin-top:18px;padding:0 12px}.ec-epoch .ep-grid{grid-template-columns:1fr}.ec-epoch .ep-live{padding:18px;gap:12px}.ec-epoch .ep-card-head{padding:18px 18px 0}.ec-epoch form,.ec-epoch .ep-result{padding:18px}.ec-epoch .ep-fields{grid-template-columns:1fr}.ec-epoch .ep-actions .ep-primary{flex:1}.ec-epoch th,.ec-epoch td{padding:10px}}
</style>
<div class="ec-epoch" id="ec-epoch">
  <header><h1>Epoch Time Converter</h1><p class="ep-intro">Convert a Unix timestamp to a readable date, or a date to epoch time. See UTC and your local time together, with support for seconds and milliseconds.</p></header>
  <section class="ep-live" aria-label="Current Unix timestamp">
    <div><div class="ep-live-label"><span class="ep-dot" aria-hidden="true"></span>Current epoch time · seconds</div><div class="ep-live-value" id="ep-live-seconds">—</div><div class="ep-live-date" id="ep-live-date">Live clock uses your device time</div></div>
    <div class="ep-actions"><button type="button" id="ep-copy-now">Copy timestamp</button><button type="button" id="ep-use-now">Use current time</button></div>
  </section>
  <noscript><p>This converter requires JavaScript. Enable it to use the live clock and conversion tools. Formulas and examples are available below.</p></noscript>
  <div class="ep-grid">
    <section class="ep-card" aria-labelledby="ep-from-heading">
      <div class="ep-card-head"><h2 id="ep-from-heading">Timestamp to date</h2><p>Paste a timestamp and choose its unit.</p></div>
      <form id="ep-from-form" novalidate>
        <div class="ep-field"><label for="ep-input">Unix timestamp</label><input id="ep-input" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" value="1704067200" aria-describedby="ep-input-hint ep-from-error"><p id="ep-input-hint" class="ep-hint">Supports zero, negative values and up to 3 decimal places in seconds.</p></div>
        <div class="ep-field"><label for="ep-unit">Timestamp unit</label><select id="ep-unit"><option value="seconds">Seconds (s)</option><option value="milliseconds">Milliseconds (ms)</option></select><p class="ep-hint">Modern timestamps are usually 10 digits in seconds or 13 in milliseconds. Confirm the unit with your source.</p></div>
        <div class="ep-actions"><button class="ep-primary" type="submit">Convert to date</button><button type="button" id="ep-example">Try example</button></div>
        <p class="ep-error" id="ep-from-error" role="alert" hidden></p>
      </form>
      <div class="ep-result" id="ep-from-result" hidden><h3>Converted date &amp; time</h3><dl><dt>UTC</dt><dd id="ep-utc"></dd><dt>Local time · <span id="ep-local-zone"></span></dt><dd id="ep-local"></dd><dt>ISO 8601 (UTC)</dt><dd id="ep-iso" class="ep-mono"></dd></dl><div class="ep-actions"><button type="button" data-copy="ep-iso">Copy ISO date</button><button type="button" data-copy="ep-utc">Copy UTC</button></div></div>
    </section>
    <section class="ep-card" aria-labelledby="ep-to-heading">
      <div class="ep-card-head"><h2 id="ep-to-heading">Date to timestamp</h2><p>Select a date, time and how to interpret it.</p></div>
      <form id="ep-to-form" novalidate>
        <div class="ep-fields"><div class="ep-field"><label for="ep-date">Date</label><input type="date" id="ep-date" min="0001-01-01" max="9999-12-31" required></div><div class="ep-field"><label for="ep-time">Time (with seconds)</label><input type="time" id="ep-time" step="0.001" required></div></div>
        <div class="ep-field"><label for="ep-zone">Input time zone</label><select id="ep-zone"><option value="utc">UTC</option><option value="local">Your local time</option></select><p class="ep-hint" id="ep-zone-hint">UTC has no daylight saving time.</p></div>
        <div class="ep-actions"><button class="ep-primary" type="submit">Convert to timestamp</button><button type="button" id="ep-date-now">Use now</button></div>
        <p class="ep-error" id="ep-to-error" role="alert" hidden></p>
      </form>
      <div class="ep-result" id="ep-to-result" hidden><h3>Unix timestamp</h3><dl><dt>Seconds (s)</dt><dd id="ep-seconds" class="ep-mono"></dd><dt>Milliseconds (ms)</dt><dd id="ep-milliseconds" class="ep-mono"></dd><dt>Equivalent UTC date</dt><dd id="ep-date-utc"></dd></dl><div class="ep-actions"><button type="button" data-copy="ep-seconds">Copy seconds</button><button type="button" data-copy="ep-milliseconds">Copy milliseconds</button></div></div>
    </section>
  </div>
 <p class="ep-note">Conversions run in your browser. The live clock follows your device clock; it is not a server time check. Local dates use your device’s time zone rules.</p>
  <p class="ep-status" id="ep-status" role="status" aria-live="polite"></p>
<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>5 min read</span>
    </div>
  </div>
<nav class="ep-nav" aria-label="On this page"><a href="#ep-about">What is epoch time?</a><a href="#ep-how">How to convert</a><a href="#ep-examples">Examples</a><a href="#ep-code">Code examples</a><a href="#ep-faq">FAQs</a></nav>
<section id="ep-about"><h2>What is epoch time?</h2><p>Epoch time, also called a Unix timestamp, is a number that represents a moment in time. For Unix time, counting starts at <strong>January 1, 1970, at 00:00:00 UTC</strong>. That starting point is called the Unix epoch.</p><p>Think of it as a counter: timestamp <code>0</code> is the starting moment, <code>60</code> is one minute later, and <code>86400</code> is one day later. Negative values represent moments before 1970.</p><p>Unix time conventionally counts seconds and does not count leap seconds separately. Some systems store the same moment in milliseconds instead. JavaScript dates, for example, use milliseconds. One second equals 1,000 milliseconds.</p><p>Developers use timestamps in APIs, databases, application logs and event records. A single number makes it easier to store and compare moments without relying on a country’s date format.</p></section>
<section id="ep-how"><h2>How to use the epoch time converter</h2><h3>Convert a Unix timestamp to a date</h3><ol><li>Paste the number into <strong>Unix timestamp</strong>.</li><li>Select <strong>Seconds</strong> or <strong>Milliseconds</strong> to match the source data.</li><li>Choose <strong>Convert to date</strong>.</li><li>Read the UTC date, local date and ISO 8601 result. Use a copy button to reuse the result.</li></ol><p>For example, enter <code>1704067200</code> and select seconds. The result is <strong>January 1, 2024, at 00:00:00 UTC</strong>.</p><h3>Convert a date to a Unix timestamp</h3><ol><li>Choose the date and enter a time, including seconds if needed.</li><li>Select whether the entered time is in <strong>UTC</strong> or <strong>your local time zone</strong>.</li><li>Choose <strong>Convert to timestamp</strong> to see seconds and milliseconds.</li></ol><p><strong>Use current time</strong> fills both converters with the same moment. The live counter continues running, while your conversion results stay fixed until you convert again.</p></section>
<section><h2>Epoch time formula: seconds and milliseconds</h2><div class="ep-formula"><strong>Milliseconds = seconds × 1,000</strong><br><strong>Seconds = milliseconds ÷ 1,000</strong></div><p>For example, <code>1704067200 × 1000 = 1704067200000</code>. These two numbers describe the same instant, using different units. If the timestamp includes a partial second, the seconds result can contain a decimal: <code>1500 ms = 1.5 s</code>.</p><p>To convert a date to epoch time, calculate the elapsed time from the Unix epoch to that date in UTC. Use a date library or this converter for calendar calculations, because month lengths, leap years and local daylight saving changes make manual calculations error-prone.</p></section>
<section id="ep-examples"><h2>Unix timestamp examples</h2><p>All dates in this table are UTC. Your local display may show a different time or calendar date.</p><div class="ep-scroll"><table><caption>Verified epoch values in seconds and milliseconds</caption><thead><tr><th scope="col">UTC date and time</th><th scope="col">Seconds</th><th scope="col">Milliseconds</th></tr></thead><tbody><tr><td>1969-12-31 23:59:59</td><td><code>-1</code></td><td><code>-1000</code></td></tr><tr><td>1970-01-01 00:00:00</td><td><code>0</code></td><td><code>0</code></td></tr><tr><td>1970-01-02 00:00:00</td><td><code>86400</code></td><td><code>86400000</code></td></tr><tr><td>2000-01-01 00:00:00</td><td><code>946684800</code></td><td><code>946684800000</code></td></tr><tr><td>2024-01-01 00:00:00</td><td><code>1704067200</code></td><td><code>1704067200000</code></td></tr><tr><td>2025-01-01 00:00:00</td><td><code>1735689600</code></td><td><code>1735689600000</code></td></tr></tbody></table></div></section>
<section><h2>UTC, local time and daylight saving time</h2><p>A timestamp identifies an instant; a time zone controls how that instant appears on a clock. For example, <code>1704067200</code> is January 1, 2024, at 00:00 UTC and 05:30 in India Standard Time. The timestamp itself does not change.</p><p>When converting a date back to a timestamp, the input time zone matters. Midnight UTC and midnight in your local zone usually represent different moments. This converter defaults to UTC so that the interpretation is explicit.</p><p>In locations with daylight saving time, some local clock times occur twice when clocks move back. This tool uses the earlier occurrence. Times skipped when clocks move forward are rejected. Use UTC when you need to identify a particular instant without this ambiguity.</p></section>
<section id="ep-code"><h2>Unix timestamp code examples</h2><h3>JavaScript</h3><pre><code>// Current Unix time in whole seconds
Math.floor(Date.now() / 1000);
// Convert seconds to an ISO date in UTC
new Date(1704067200 * 1000).toISOString();
// "2024-01-01T00:00:00.000Z"
// Convert a UTC date to seconds
Date.parse("2024-01-01T00:00:00Z") / 1000;
// 1704067200</code></pre><h3>Python</h3><pre><code>from datetime import datetime, timezone
# Convert seconds to a timezone-aware UTC date
datetime.fromtimestamp(1704067200, tz=timezone.utc)
# Convert a UTC date to seconds
int(datetime(2024, 1, 1, tzinfo=timezone.utc).timestamp())
# 1704067200</code></pre><p>The <code>Z</code> in an ISO date means UTC. Supplying an explicit time zone helps avoid unexpected results on computers in different locations.</p></section>
<section><h2>Common timestamp conversion mistakes</h2><ul><li><strong>Wrong unit:</strong> interpreting milliseconds as seconds can produce a date thousands of years away. Check the source’s unit instead of relying only on digit count.</li><li><strong>Wrong time zone:</strong> a local date and its UTC equivalent can fall on different days.</li><li><strong>Extra characters:</strong> paste only the number, without commas, quotes or labels.</li><li><strong>Lost precision:</strong> this converter supports millisecond precision. Microsecond and nanosecond units are not supported; convert them to milliseconds first.</li><li><strong>Incorrect device time:</strong> the live timestamp can be inaccurate if your device clock is wrong.</li></ul></section>
<!-- FAQ Section -->
<section class="p-4"><h2 class="mb-4">FAQ on Epoch Time Converter</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Are epoch time and Unix time the same?</div><p class="mb-0">In this converter, both mean time measured from January 1, 1970, at 00:00:00 UTC. More generally, an epoch is a reference starting point, and other computing systems can use different epochs.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Is a Unix timestamp in seconds or milliseconds?</div><p class="mb-0">Unix timestamps conventionally use seconds, but many applications store milliseconds. Modern values are often 10 digits in seconds or 13 digits in milliseconds. Digit count is only a clue; confirm the unit with the source.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Does a Unix timestamp have a time zone?</div><p class="mb-0">A Unix timestamp represents an instant relative to the UTC epoch. It does not store a local time zone. The same timestamp can be displayed in UTC, India Standard Time or another zone.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Can epoch time be negative or zero?</div><p class="mb-0">Yes. Zero represents January 1, 1970, at 00:00:00 UTC. Negative timestamps represent earlier moments; for example, -1 second is December 31, 1969, at 23:59:59 UTC.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Does Unix time include leap seconds?</div><p class="mb-0">Unix time does not count leap seconds separately. It treats a normal calendar day as 86,400 seconds, so it is not a continuous count of every elapsed physical second across leap-second events.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is the Year 2038 problem?</div><p class="mb-0">A signed 32-bit Unix seconds field reaches its maximum value, 2147483647, on January 19, 2038, at 03:14:07 UTC. Systems using that representation need a wider or otherwise suitable time format to represent later dates. This converter is not limited to signed 32-bit seconds.</p></div></div></section><section><h2>Related time tools</h2><div class="ep-related"><a href="/time-zone-converter">Time Zone Converter</a><a href="/world-clock-map">World Clock Map</a><a href="/utc-to-ist">UTC to IST</a><a href="/ist-to-utc">IST to UTC</a></div></section><section><h2>Technical references</h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">MDN: JavaScript Date and timestamps</a></li><li><a href="https://docs.python.org/3/library/datetime.html">Python documentation: datetime</a></li></ul></section></div>

<script src="{{ '/assets/js/epoch-time.js' | relative_url }}"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are epoch time and Unix time the same?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In this converter, both mean time measured from January 1, 1970, at 00:00:00 UTC. More generally, an epoch is a reference starting point, and other computing systems can use different epochs."
      }
    },
    {
      "@type": "Question",
      "name": "Is a Unix timestamp in seconds or milliseconds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unix timestamps conventionally use seconds, but many applications store milliseconds. Modern values are often 10 digits in seconds or 13 digits in milliseconds. Digit count is only a clue; confirm the unit with the source."
      }
    },
    {
      "@type": "Question",
      "name": "Does a Unix timestamp have a time zone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Unix timestamp represents an instant relative to the UTC epoch. It does not store a local time zone. The same timestamp can be displayed in UTC, India Standard Time or another zone."
      }
    },
    {
      "@type": "Question",
      "name": "Can epoch time be negative or zero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Zero represents January 1, 1970, at 00:00:00 UTC. Negative timestamps represent earlier moments; for example, -1 second is December 31, 1969, at 23:59:59 UTC."
      }
    },
    {
      "@type": "Question",
      "name": "Does Unix time include leap seconds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unix time does not count leap seconds separately. It treats a normal calendar day as 86,400 seconds, so it is not a continuous count of every elapsed physical second across leap-second events."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Year 2038 problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A signed 32-bit Unix seconds field reaches its maximum value, 2147483647, on January 19, 2038, at 03:14:07 UTC. Systems using that representation need a wider or otherwise suitable time format to represent later dates. This converter is not limited to signed 32-bit seconds."
      }
    }
  ]
}
</script>

