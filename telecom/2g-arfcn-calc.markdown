---
layout: default
title: ARFCN Calculator – GSM ARFCN to Frequency Converter
permalink: /arfcn-calculator
description: "Convert GSM ARFCN to uplink and downlink frequency instantly using our free ARFCN Calculator. Supports GSM 900, 1800, 850 & 1900 bands for RF engineers"
image: "/assets/images/og/arfcn-calculator-example.jpg"
last_modified_at: 2026-09-27
---

<style>
.ec-arfcn{--a-blue:#2454bc;--a-ink:#172b4d;--a-muted:#607089;--a-line:#dce5f0;max-width:1140px;margin:20px auto 40px;padding:0 14px;color:var(--a-ink);line-height:1.6}
.ec-arfcn *{box-sizing:border-box}.ec-arfcn [hidden]{display:none!important}
.ec-arfcn .af-shell{overflow:hidden;background:#fff;border:1px solid var(--a-line);border-radius:18px;box-shadow:0 8px 28px rgba(28,55,98,.08)}
.ec-arfcn .af-head{padding:20px 22px 16px;background:linear-gradient(120deg,#f1f6ff,#fff)}
.ec-arfcn .af-kicker{margin:0 0 4px;color:var(--a-blue);font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.ec-arfcn h1{margin:0;color:#142849;font-size:clamp(1.45rem,3.4vw,2rem);line-height:1.2}
.ec-arfcn .af-intro{max-width:760px;margin:8px 0 0;color:var(--a-muted);font-size:.96rem}
.ec-arfcn .af-body{padding:18px 22px 22px}
.ec-arfcn .af-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;align-items:stretch}
.ec-arfcn .af-field{min-width:0;padding:13px 14px;border:1px solid #e0e8f3;border-radius:13px;background:#f8faff}
.ec-arfcn .af-field .af-label{margin:0 0 7px;line-height:1.35}
.ec-arfcn .af-field .af-hint{min-height:2.2em;margin:6px 0 0;font-size:.79rem;line-height:1.4}
.ec-arfcn .af-label{display:block;margin:0 0 6px;font-size:.9rem;font-weight:700}
.ec-arfcn .af-select,.ec-arfcn .af-input{width:100%;min-height:46px;padding:10px 12px;border:1px solid #cbd7e6;border-radius:10px;background:#fff;color:var(--a-ink);font:inherit}
.ec-arfcn .af-select:focus,.ec-arfcn .af-input:focus{outline:3px solid rgba(36,84,188,.15);border-color:var(--a-blue)}
.ec-arfcn .af-modes{display:flex;gap:7px;margin:0 0 14px;padding:4px;border:1px solid var(--a-line);border-radius:11px;background:#f7f9fc;width:max-content;max-width:100%}
.ec-arfcn .af-mode{border:0;border-radius:8px;padding:8px 12px;background:transparent;color:#53647b;font:inherit;font-size:.88rem;font-weight:700;cursor:pointer}
.ec-arfcn .af-mode[aria-pressed="true"]{background:#fff;color:var(--a-blue);box-shadow:0 1px 5px #1d35571c}
.ec-arfcn .af-hint{color:var(--a-muted);font-size:.82rem}
.ec-arfcn .af-error{margin:12px 0 0;padding:10px 12px;border:1px solid #f3c7c7;border-radius:9px;background:#fff5f5;color:#9e2626;font-size:.9rem}
.ec-arfcn .af-results{margin-top:14px}
.ec-arfcn .af-placeholder{padding:15px;border:1px dashed #cbd7e6;border-radius:12px;background:#f9fbfe;color:var(--a-muted);text-align:center}
.ec-arfcn .af-result-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px}
.ec-arfcn .af-result-title{margin:0;font-size:1rem;font-weight:700}
.ec-arfcn .af-band-tag{display:inline-block;padding:3px 9px;border-radius:999px;background:#eaf1ff;color:#244fa3;font-size:.78rem;font-weight:700}
.ec-arfcn .af-result-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.ec-arfcn .af-result-card{padding:13px 14px;border:1px solid var(--a-line);border-radius:12px;background:#fff}
.ec-arfcn .af-result-card small{display:block;color:var(--a-muted);font-size:.8rem}
.ec-arfcn .af-result-card strong{display:block;margin-top:2px;color:#17366e;font-size:clamp(1.2rem,3.6vw,1.55rem);line-height:1.25}
.ec-arfcn .af-result-card span{color:var(--a-muted);font-size:.8rem}
.ec-arfcn .af-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}
.ec-arfcn .af-copy{padding:8px 12px;border:1px solid #cbd7e6;border-radius:9px;background:#fff;color:var(--a-blue);font:inherit;font-size:.86rem;font-weight:700;cursor:pointer}
.ec-arfcn .af-copy:hover{background:#f3f7ff}
.ec-arfcn .af-quick{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin-top:14px;color:var(--a-muted);font-size:.82rem}
.ec-arfcn .af-chip{padding:5px 9px;border:1px solid var(--a-line);border-radius:999px;background:#fff;color:#334b6d;font:inherit;font-size:.8rem;cursor:pointer}
.ec-arfcn .af-chip:hover{border-color:#9eb5df;background:#f5f8ff}
.ec-arfcn .af-note{margin:12px 0 0;color:var(--a-muted);font-size:.82rem}
.ec-arfcn .article-container{max-width:auto;margin:26px auto 0;line-height:1.75}
.ec-arfcn .article-container h2{margin:26px 0 9px;color:#17366e;font-size:1.35rem}
.ec-arfcn .article-container h3{margin:20px 0 7px;color:#203d6c;font-size:1.08rem}
.ec-arfcn .article-container p,.ec-arfcn .article-container li{color:#394b63}
.ec-arfcn .af-table-wrap{overflow-x:auto}
.ec-arfcn .af-table{width:100%;border-collapse:collapse;font-size:.92rem}
.ec-arfcn .af-table th,.ec-arfcn .af-table td{padding:9px 10px;border:1px solid var(--a-line);text-align:left;white-space:nowrap}
.ec-arfcn .af-table th{background:#f2f6fc;color:#203d6c}
@media(max-width:640px){.ec-arfcn{padding:0 10px}.ec-arfcn .af-head{padding:17px 16px 14px}.ec-arfcn .af-body{padding:15px 16px 18px}.ec-arfcn .af-controls{grid-template-columns:1fr;gap:10px}.ec-arfcn .af-field{padding:11px 12px}.ec-arfcn .af-field .af-hint{min-height:0}.ec-arfcn .af-result-grid{gap:8px}.ec-arfcn .af-result-card{padding:11px}.ec-arfcn .af-result-top{align-items:flex-start;flex-direction:column;gap:6px}.ec-arfcn .af-modes{width:100%}.ec-arfcn .af-mode{flex:1;padding:8px 6px}}
</style>
<div class="ec-arfcn"><section class="af-shell" aria-labelledby="af-title"><div class="af-head"><p class="af-kicker">2G GSM RF tool</p><h1 id="af-title">GSM ARFCN Calculator</h1><p class="af-intro">Convert a GSM channel number to its uplink and downlink frequencies, or enter a frequency to find its ARFCN.</p></div><div class="af-body"><div class="af-modes" role="group" aria-label="Conversion direction"><button type="button" class="af-mode" id="af-mode-channel" aria-pressed="true">ARFCN → Frequency</button><button type="button" class="af-mode" id="af-mode-frequency" aria-pressed="false">Frequency → ARFCN</button></div><div class="af-controls"><div class="af-field"><label class="af-label" for="af-band">GSM band</label><select class="af-select" id="af-band"><option value="gsm850">GSM 850</option><option value="pgsm900">GSM 900 (Primary)</option><option value="egsm900">GSM 900 (Extended)</option><option value="dcs1800">DCS 1800</option><option value="pcs1900">PCS 1900</option></select></div><div class="af-field" id="af-channel-field"><label class="af-label" for="af-channel">ARFCN (channel number)</label><input class="af-input" id="af-channel" type="number" inputmode="numeric" step="1" placeholder="Example: 128" autocomplete="off"><p class="af-hint" id="af-channel-hint">Valid range: 128–251 · Channel spacing: 200 kHz</p></div><div class="af-field" id="af-frequency-field" hidden><label class="af-label" for="af-frequency">Carrier frequency (MHz)</label><input class="af-input" id="af-frequency" type="number" inputmode="decimal" step="0.01" placeholder="Example: 824.2" autocomplete="off"><p class="af-hint">Enter a GSM channel center frequency. Channel spacing is 200 kHz.</p></div></div><div id="af-error" class="af-error" role="alert" hidden></div><div class="af-results" id="af-results" aria-live="polite"><div class="af-placeholder">Choose a GSM band and enter an ARFCN to see the frequency pair.</div></div><div class="af-quick" aria-label="Example channels"><span>Try:</span><button type="button" class="af-chip" data-band="gsm850" data-channel="128">GSM 850 · 128</button><button type="button" class="af-chip" data-band="pgsm900" data-channel="1">GSM 900 · 1</button><button type="button" class="af-chip" data-band="dcs1800" data-channel="512">DCS · 512</button><button type="button" class="af-chip" data-band="pcs1900" data-channel="512">PCS · 512</button></div><p class="af-note">The 200 kHz spacing is the GSM channel raster. The displayed frequencies are carrier center frequencies.</p></div></section>

  <article class="article-container">
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
    <h2>What is an ARFCN?</h2>
    <p>ARFCN means <strong>Absolute Radio Frequency Channel Number</strong>. In a 2G GSM network, it identifies a radio channel. Select the matching GSM band because the same channel number can mean different frequencies in different bands. For example, ARFCN 512 belongs to both DCS 1800 and PCS 1900, but the frequencies are different.</p>
    <h2>How to use this GSM ARFCN calculator</h2>
    <ol>
      <li>Select the GSM band used by the network or measurement.</li>
      <li>Choose <strong>ARFCN → Frequency</strong> and enter a whole channel number, or choose <strong>Frequency → ARFCN</strong> and enter a channel center frequency in MHz.</li>
      <li>Read the uplink and downlink pair. The result also shows the duplex spacing and the selected ARFCN.</li>
    </ol>
    <h2>GSM bands and valid ARFCN ranges</h2>
    <div class="af-table-wrap">
      <table class="af-table">
        <thead><tr><th>GSM band</th><th>ARFCN range</th><th>Uplink (MHz)</th><th>Downlink (MHz)</th><th>Duplex spacing</th></tr></thead>
        <tbody>
          <tr><td>GSM 850</td><td>128–251</td><td>824.2–848.8</td><td>869.2–893.8</td><td>45 MHz</td></tr>
          <tr><td>GSM 900 Primary (P-GSM)</td><td>1–124</td><td>890.2–914.8</td><td>935.2–959.8</td><td>45 MHz</td></tr>
          <tr><td>GSM 900 Extended (E-GSM)</td><td>0–124 and 975–1023</td><td>880.2–914.8*</td><td>925.2–959.8*</td><td>45 MHz</td></tr>
          <tr><td>DCS 1800</td><td>512–885</td><td>1710.2–1784.8</td><td>1805.2–1879.8</td><td>95 MHz</td></tr>
          <tr><td>PCS 1900</td><td>512–810</td><td>1850.2–1909.8</td><td>1930.2–1989.8</td><td>80 MHz</td></tr>
        </tbody>
      </table>
    </div>
    <p><small>*E-GSM uses two channel-number blocks. The low-frequency extension is ARFCN 975–1023; ARFCN 0–124 overlaps the P-GSM 900 channel block.</small></p>
    <h2>GSM ARFCN frequency formulas</h2>
    <p>GSM channel spacing is <strong>200 kHz (0.2 MHz)</strong>. For a selected band, the uplink carrier frequency is calculated from that band’s ARFCN formula. The downlink carrier is the uplink plus the band’s duplex spacing.</p>
    <ul>
      <li><strong>GSM 850:</strong> Uplink = 824.2 + 0.2 × (ARFCN − 128); downlink = uplink + 45 MHz.</li>
      <li><strong>P-GSM 900:</strong> Uplink = 890 + 0.2 × ARFCN; downlink = uplink + 45 MHz.</li>
      <li><strong>E-GSM 900:</strong> for ARFCN 0–124, uplink = 890 + 0.2 × ARFCN; for 975–1023, uplink = 890 + 0.2 × (ARFCN − 1024); downlink = uplink + 45 MHz.</li>
      <li><strong>DCS 1800:</strong> Uplink = 1710.2 + 0.2 × (ARFCN − 512); downlink = uplink + 95 MHz.</li>
      <li><strong>PCS 1900:</strong> Uplink = 1850.2 + 0.2 × (ARFCN − 512); downlink = uplink + 80 MHz.</li>
    </ul>
    <h2>Example: GSM 850 ARFCN 128</h2>
    <p>For GSM 850 channel 128, the uplink is 824.2 + 0.2 × (128 − 128) = <strong>824.2 MHz</strong>. Add the 45 MHz duplex spacing to get a downlink of <strong>869.2 MHz</strong>.</p>
<!-- FAQ Section -->
<section class="mb-5 pt-4">
  <h2 class="mb-4">FAQ on ARFCN Calculator</h2>
   <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
    <div class="fw-bold text-primary">1. What does ARFCN stand for?</div>
     <p class="mb-0">ARFCN stands for <strong>Absolute Radio Frequency Channel Number</strong>. It is the channel number used to identify a GSM radio carrier.</p>
    </div>
    </div>
  <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
     <div class="fw-bold text-primary">2. What is GSM channel spacing?</div>
     <p class="mb-0">In GSM, the channel spacing is <strong>200 kHz (0.2 MHz)</strong>.</p>
    </div>
   </div>
   <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
    <div class="fw-bold text-primary">3. Is ARFCN used in LTE and 5G?</div>
     <p class="mb-0">Yes. LTE uses <strong>EARFCN</strong> and 5G uses <strong>NR-ARFCN</strong>.</p>
    </div>
   </div>
   <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
    <div class="fw-bold text-primary">4. How many channels in GSM900?</div>
     <p class="mb-0">Standard GSM 900 supports <strong>124 radio channels</strong> using ARFCN range <strong>1 to 124</strong>. Each GSM channel uses <strong>200 kHz</strong> spacing. Extended GSM (E-GSM 900) provides additional channels using ARFCN range <strong>975–1023</strong>.</p>
    </div>
   </div>
    <div class="card mb-3 border-0 bg-light">
    <div class="card-body ">
     <div class="fw-bold text-primary">5. What is GSM channel number?</div>
      <p class="mb-0">
      A <strong>GSM channel number</strong> is called an <strong>ARFCN (Absolute Radio Frequency Channel Number)</strong>. It is a unique number assigned to each GSM radio frequency channel used for communication between the mobile station and base station. Instead of using raw frequency values, GSM networks use ARFCN numbers for frequency planning, channel allocation, and RF optimization.</p>
     </div>
    </div>
   </section>
   {% include rf.html %}
</article>
      
 
<script src="{{ '/assets/js/rf/arfcn-calc.js' | relative_url }}"></script> 
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [

    {
      "@type": "Question",
      "name": "What does ARFCN stand for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ARFCN stands for Absolute Radio Frequency Channel Number.  It is the channel number used to identify a GSM radio carrier"
      }
    },

    {
      "@type": "Question",
      "name": "What is GSM channel spacing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In GSM, the channel spacing is 200 kHz (0.2 MHz)."
      }
    },

    {
      "@type": "Question",
      "name": "Is ARFCN used in LTE and 5G?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. LTE uses EARFCN and 5G uses NR-ARFCN."
      }
    },

    {
      "@type": "Question",
      "name": "How many channels in GSM900?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard GSM 900 supports 124 radio channels using ARFCN range 1 to 124. Each GSM channel uses 200 kHz spacing. Extended GSM (E-GSM 900) provides additional channels using ARFCN range 975–1023."
      }
    },

    {
      "@type": "Question",
      "name": "What is GSM channel number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A GSM channel number is called ARFCN (Absolute Radio Frequency Channel Number). It is a unique number assigned to each GSM radio frequency channel used for communication between the mobile station and base station. GSM networks use ARFCN numbers for frequency planning, channel allocation, and RF optimization."
      }
    }

  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [

    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://easycalculator.org/"
    },

    {
      "@type": "ListItem",
      "position": 2,
      "name": "RF Calculator",
      "item": "https://easycalculator.org/rf-calculator"
    },

    {
      "@type": "ListItem",
      "position": 3,
      "name": "ARFCN Calculator",
      "item": "https://easycalculator.org/arfcn-calculator"
    }

  ]
}
</script>