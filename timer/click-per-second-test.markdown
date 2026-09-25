---
layout: default
title: Click Per Second Test – Free CPS Test Online
permalink: /click-per-second-test
description: "Test your clicking speed with a free click per second test. Choose a duration, click as fast as you can, and see your CPS score and recent results."
image: "/assets/images/og/click-per-second-test.jpg"
last_modified_at: 2026-09-25
---

<style>
#cps-tool{--cps-blue:#2458d3;--cps-ink:#18243a;--cps-muted:#65738a;max-width:980px;margin:24px auto 40px;padding:0 16px;color:var(--cps-ink);line-height:1.55}
#cps-tool *{box-sizing:border-box}
#cps-tool [hidden]{display:none!important}
#cps-tool .cps-shell{background:#fff;border:1px solid #e2e8f2;border-radius:20px;box-shadow:0 12px 34px rgba(28,53,94,.08);overflow:hidden}
#cps-tool .cps-head{padding:22px 24px 14px;text-align:center}
#cps-tool h1{font-size:clamp(1.55rem,3vw,2.1rem);font-weight:750;letter-spacing:-.03em;margin:0 0 5px}
#cps-tool .cps-subtitle{color:var(--cps-muted);margin:0;font-size:.98rem}
#cps-tool .cps-controls{padding:0 24px 16px;display:flex;align-items:center;justify-content:center;gap:9px;flex-wrap:wrap}
#cps-tool .cps-control-label{font-size:.9rem;font-weight:700;margin-right:3px}
#cps-tool .cps-duration{border:1px solid #d8e0ed;background:#fff;border-radius:999px;color:#33435d;font-weight:700;padding:7px 13px;min-width:48px;cursor:pointer}
#cps-tool .cps-duration:hover{border-color:var(--cps-blue);color:var(--cps-blue)}
#cps-tool .cps-duration[aria-pressed="true"]{background:var(--cps-blue);border-color:var(--cps-blue);color:#fff}
#cps-tool .cps-custom{display:flex;align-items:center;gap:6px;color:var(--cps-muted);font-size:.88rem;margin-left:4px}
#cps-tool .cps-custom input{width:74px;border:1px solid #d8e0ed;border-radius:9px;padding:7px 9px;font:inherit;color:var(--cps-ink)}
#cps-tool .cps-actions{display:flex;justify-content:center;padding:0 24px 17px}
#cps-tool .cps-start{border:0;border-radius:11px;background:var(--cps-blue);color:white;font-weight:750;font-size:1rem;padding:11px 25px;min-width:180px;cursor:pointer;box-shadow:0 5px 12px rgba(36,88,211,.2)}
#cps-tool .cps-start:hover{background:#1748bb}
#cps-tool button:focus-visible,#cps-tool input:focus-visible,#cps-tool .cps-target:focus-visible{outline:3px solid #95b7ff;outline-offset:2px}
#cps-tool .cps-target{display:flex;width:calc(100% - 48px);min-height:150px;margin:0 24px 18px;padding:18px;align-items:center;justify-content:center;text-align:center;border:2px dashed #b9c9e6;border-radius:16px;background:linear-gradient(135deg,#f2f7ff,#f8faff);color:#25477e;cursor:pointer;user-select:none;touch-action:manipulation;transition:background .15s,border-color .15s,transform .08s}
#cps-tool .cps-target:hover{border-color:#7196e2;background:#edf4ff}
#cps-tool .cps-target:active{transform:scale(.995)}
#cps-tool .cps-target.is-running{border-style:solid;border-color:var(--cps-blue);background:#edf4ff}
#cps-tool .cps-target.is-done{border-style:solid;border-color:#9dcbb0;background:#f0faf3;color:#236342;cursor:default}
#cps-tool .cps-target-main{font-size:clamp(1.15rem,3vw,1.55rem);font-weight:800;display:block}
#cps-tool .cps-target-help{display:block;color:var(--cps-muted);font-size:.92rem;margin-top:4px}
#cps-tool .cps-live{font-variant-numeric:tabular-nums}
#cps-tool .cps-live strong{font-size:1.45em;color:var(--cps-blue)}
#cps-tool .cps-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 24px 22px}
#cps-tool .cps-stat{border:1px solid #e4eaf3;border-radius:12px;background:#fff;padding:11px 12px;text-align:center}
#cps-tool .cps-stat-label{display:block;font-size:.77rem;color:var(--cps-muted);font-weight:650}
#cps-tool .cps-stat-value{display:block;font-size:1.28rem;font-weight:800;font-variant-numeric:tabular-nums;margin-top:1px}
#cps-tool .cps-bottom{border-top:1px solid #edf0f5;padding:17px 24px 20px}
#cps-tool .cps-history-title{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}
#cps-tool .cps-history-title h2{font-size:1.05rem;margin:0;font-weight:750}
#cps-tool .cps-clear{border:0;background:transparent;color:#52637d;text-decoration:underline;cursor:pointer;font:inherit;font-size:.83rem;padding:4px}
#cps-tool .cps-table-wrap{overflow-x:auto}
#cps-tool table{width:100%;border-collapse:collapse;font-size:.86rem;min-width:460px}
#cps-tool th,#cps-tool td{padding:8px 9px;border-bottom:1px solid #edf0f5;text-align:left;white-space:nowrap}
#cps-tool th{font-size:.76rem;color:#63718a;font-weight:700}
#cps-tool td:nth-child(2),#cps-tool td:nth-child(3){font-variant-numeric:tabular-nums}
#cps-tool .cps-empty{color:var(--cps-muted);text-align:center;padding:14px 6px;font-size:.9rem}
#cps-tool .cps-note{font-size:.83rem;color:var(--cps-muted);text-align:center;margin:0;padding:0 18px 18px}
#cps-tool .cps-article{margin:27px 2px 0;color:#344158;line-height:1.75}
#cps-tool .cps-article h2{font-size:1.35rem;line-height:1.3;color:var(--cps-ink);margin:24px 0 8px}
#cps-tool .cps-article h3{font-size:1.08rem;color:var(--cps-ink);margin:18px 0 5px}
#cps-tool .cps-article p{margin:8px 0}
#cps-tool .cps-article ul{padding-left:22px}
#cps-tool .cps-faq{padding:12px 14px;border:1px solid #e5eaf2;border-radius:11px;margin:9px 0;background:#fff}
#cps-tool .cps-faq h3{margin:0 0 4px;font-size:1rem}
#cps-tool .cps-faq p{margin:0}
@media(max-width:600px){#cps-tool{padding:0 10px;margin:16px auto 30px}#cps-tool .cps-head{padding:19px 15px 12px}#cps-tool .cps-controls{padding:0 13px 15px;gap:7px}#cps-tool .cps-control-label{width:100%;text-align:center;margin:0 0 2px}#cps-tool .cps-duration{padding:7px 10px;min-width:43px}#cps-tool .cps-custom{width:100%;justify-content:center;margin:3px 0 0}#cps-tool .cps-actions{padding:0 14px 14px}#cps-tool .cps-target{width:calc(100% - 28px);margin:0 14px 14px;min-height:132px}#cps-tool .cps-stats{padding:0 14px 17px;gap:7px}#cps-tool .cps-stat{padding:9px 5px}#cps-tool .cps-stat-label{font-size:.7rem}#cps-tool .cps-stat-value{font-size:1.12rem}#cps-tool .cps-bottom{padding:14px}#cps-tool .cps-article{margin-top:22px}}
@media(prefers-reduced-motion:reduce){#cps-tool *{scroll-behavior:auto!important;transition:none!important}}
</style>

<div id="cps-tool">
  <main class="cps-shell" aria-labelledby="cps-title">
    <header class="cps-head">
      <h1 id="cps-title">Click Per Second Test</h1>
      <p class="cps-subtitle">Choose a time, then see how many times you can click each second.</p>
    </header>
    <div class="cps-controls" role="group" aria-label="Choose test duration">
      <span class="cps-control-label">Test duration</span>
      <button class="cps-duration" type="button" data-seconds="1" aria-pressed="false">1 sec</button>
      <button class="cps-duration" type="button" data-seconds="5" aria-pressed="true">5 sec</button>
      <button class="cps-duration" type="button" data-seconds="10" aria-pressed="false">10 sec</button>
      <button class="cps-duration" type="button" data-seconds="30" aria-pressed="false">30 sec</button>
      <button class="cps-duration" type="button" data-seconds="60" aria-pressed="false">60 sec</button>
      <label class="cps-custom" for="cps-custom-seconds">Custom
        <input id="cps-custom-seconds" type="number" min="1" max="120" step="1" value="5" inputmode="numeric" aria-label="Custom duration in seconds">
        <span>sec</span>
      </label>
    </div>
    <div class="cps-actions">
      <button class="cps-start" id="cps-start" type="button">Start test</button>
    </div>
    <button class="cps-target" id="cps-target" type="button" aria-live="polite" aria-label="Click here to begin your test">
      <span><span class="cps-target-main" id="cps-target-main">Ready when you are</span><span class="cps-target-help" id="cps-target-help">Press Start test, then click this area as fast as you can.</span></span>
    </button>
    <div class="cps-stats" aria-label="Your click test results">
      <div class="cps-stat"><span class="cps-stat-label">Time left</span><span class="cps-stat-value" id="cps-time">5.0 s</span></div>
      <div class="cps-stat"><span class="cps-stat-label">Clicks</span><span class="cps-stat-value" id="cps-clicks">0</span></div>
      <div class="cps-stat"><span class="cps-stat-label">Current CPS</span><span class="cps-stat-value" id="cps-score">0.00</span></div>
    </div>
    <section class="cps-bottom" aria-labelledby="cps-history-heading">
      <div class="cps-history-title">
        <h2 id="cps-history-heading">Recent results</h2>
        <button class="cps-clear" id="cps-clear" type="button">Clear saved results</button>
      </div>
      <div class="cps-table-wrap">
        <table>
          <thead><tr><th scope="col">#</th><th scope="col">Duration</th><th scope="col">Clicks</th><th scope="col">CPS</th><th scope="col">Date</th></tr></thead>
          <tbody id="cps-history"></tbody>
        </table>
        <div class="cps-empty" id="cps-empty">Your latest 10 test results will appear here.</div>
      </div>
    </section>
    <p class="cps-note">Your results are saved in this browser on this device. No account is needed.</p>
  </main>
 </div>

<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
      <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
      <span><i class="fas fa-clock me-1" aria-hidden="true"></i>2 min read</span>
    </div>
  </div>
<!-- Article-->
    <h2>What is a click per second test?</h2>
    <p>A click per second test, often called a CPS test or click speed test, measures how many times you can click in a set time. Choose a duration, start the test, and click the large test area until the timer ends. Your score is shown as clicks per second.</p>
    <h2>How to use this CPS test</h2>
    <ol>
      <li>Choose a test length, such as 5 or 10 seconds. You can also enter a custom time from 1 to 120 seconds.</li>
      <li>Select <strong>Start test</strong>.</li>
      <li>Click or tap the test area as quickly as you comfortably can while the timer is running.</li>
      <li>When time is up, check your CPS score and compare it with your recent results.</li>
    </ol>
    <p>On a phone or tablet, tap the test area. On a computer, use your mouse or trackpad. The test works with keyboard controls too: focus the test area and press Enter or Space to click.</p>
    <h2>How is CPS calculated?</h2>
    <p>The calculator divides your total clicks by the test duration:</p>
    <p><strong>CPS = total clicks ÷ time in seconds</strong></p>
    <p>For example, if you click 35 times in 5 seconds, your score is 35 ÷ 5 = <strong>7 clicks per second</strong>. A higher score means more clicks during that test. Your result can change with the device, mouse, touch screen, and clicking style you use.</p>
    <h2>Tips for a fair, comfortable test</h2>
    <ul>
      <li>Keep your hand relaxed and use a comfortable position.</li>
      <li>Use the same device and clicking method when comparing scores.</li>
      <li>Try a few short rounds and take a break if your hand feels tired.</li>
      <li>Do not worry about a particular target score; this is a simple practice and entertainment test.</li>
    </ul>
    <h2>Frequently asked questions</h2>
    <section class="cps-faq"><h3>What does CPS mean?</h3><p>CPS means clicks per second. It is the number of clicks divided by the number of seconds in the test.</p></section>
    <section class="cps-faq"><h3>What is a good CPS score?</h3><p>There is no single score that is best for everyone. Scores depend on your device, input method, and practice, so use your own results to track changes over time.</p></section>
    <section class="cps-faq"><h3>Can I take the test on a phone?</h3><p>Yes. Choose a duration, start the test, and tap the large test area until time runs out.</p></section>
    <section class="cps-faq"><h3>Are my results saved?</h3><p>Your latest results are stored in your browser on this device. They are not synced between devices, and clearing browser storage may remove them.</p></section>
</div>

<script src="{{ '/assets/js/timer/click-per-second-test.js' | relative_url }}"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What does CPS mean?","acceptedAnswer":{"@type":"Answer","text":"CPS means clicks per second. It is the number of clicks divided by the number of seconds in the test."}},
    {"@type":"Question","name":"What is a good CPS score?","acceptedAnswer":{"@type":"Answer","text":"There is no single score that is best for everyone. Scores depend on your device, input method, and practice, so use your own results to track changes over time."}},
    {"@type":"Question","name":"Can I take the test on a phone?","acceptedAnswer":{"@type":"Answer","text":"Yes. Choose a duration, start the test, and tap the large test area until time runs out."}},
    {"@type":"Question","name":"Are my results saved?","acceptedAnswer":{"@type":"Answer","text":"Your latest results are stored in your browser on this device. They are not synced between devices, and clearing browser storage may remove them."}}
  ]
}
</script>

