---
layout: default
title: World Clock Map – Live Local Time Around the World"
permalink: /world-clock-map
description: "Explore a large interactive world clock map. Check live local time, UTC offsets and dates, compare cities, and switch between 12-hour and 24-hour clocks."
image: "/assets/images/World_Time_Zones_Map.svg"
last_modified_at: 2026-09-22
---
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">
<style>
.ec-world{--wc-ink:#172b4d;--wc-muted:#52647b;--wc-blue:#2359bc;--wc-line:#dce5f0;color:var(--wc-ink);max-width:1440px;margin:20px auto 36px;line-height:1.6}
.ec-world *{box-sizing:border-box}.ec-world [hidden]{display:none!important}.ec-world button,.ec-world input,.ec-world select{font:inherit}.ec-world button{cursor:pointer}.ec-world button:disabled{cursor:wait;opacity:.65}.ec-world :focus-visible{outline:3px solid #e39a15;outline-offset:3px}
.ec-world .wc-heading{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:14px}.ec-world h1{font-size:clamp(1.65rem,3vw,2.25rem);line-height:1.2;margin:0 0 6px;font-weight:750}.ec-world .wc-heading p{color:var(--wc-muted);margin:0}.ec-world .wc-live{white-space:nowrap;font-size:.8rem;background:#e7f5ed;color:#216244;border-radius:30px;padding:5px 12px}
.ec-world .wc-tool{border:1px solid var(--wc-line);border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 8px 28px #173e6d0a}.ec-world .wc-toolbar{display:flex;flex-wrap:wrap;align-items:end;gap:10px;padding:14px;background:#f7faff}.ec-world .wc-search{flex:1 1 270px;display:flex;align-items:end;gap:8px}.ec-world .wc-field{flex:1;min-width:0}.ec-world label{display:block;font-size:.78rem;font-weight:700;margin-bottom:3px}.ec-world input,.ec-world select{width:100%;border:1px solid #bccbdd;border-radius:9px;min-height:42px;padding:8px 10px;background:#fff;color:var(--wc-ink)}.ec-world .wc-btn{border:1px solid #cbd7e7;background:#fff;color:var(--wc-ink);border-radius:9px;min-height:42px;padding:8px 13px;font-size:.88rem;font-weight:650}.ec-world .wc-btn:hover{background:#eef4ff;border-color:#7c9fcc}.ec-world .wc-primary{background:var(--wc-blue);border-color:var(--wc-blue);color:white}.ec-world .wc-primary:hover{background:#194794;color:white}.ec-world .wc-format{width:102px}
.ec-world .wc-summary{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:18px;padding:15px 18px;border-top:1px solid var(--wc-line);border-bottom:1px solid var(--wc-line)}.ec-world .wc-selected{display:flex;gap:16px;align-items:center;min-width:0}.ec-world .wc-place{font-weight:750;font-size:1rem;overflow-wrap:anywhere}.ec-world .wc-time{display:block;font-size:clamp(1.75rem,3.6vw,2.65rem);font-weight:750;line-height:1.2;letter-spacing:-.5px;font-variant-numeric:tabular-nums}.ec-world .wc-meta{font-size:.8rem;color:var(--wc-muted);overflow-wrap:anywhere}.ec-world .wc-reference{border-left:1px solid var(--wc-line);padding-left:18px;display:flex;flex-direction:column;justify-content:center}.ec-world .wc-reference strong{font-variant-numeric:tabular-nums}.ec-world .wc-diff{color:var(--wc-blue);font-size:.85rem;font-weight:700}
.ec-world .wc-dial{position:relative;width:78px;height:78px;flex:0 0 78px;border:3px solid #d4e1f2;border-radius:50%;background:repeating-conic-gradient(from -1deg,#aec2db 0deg 2deg,transparent 2deg 30deg);box-shadow:inset 0 0 0 5px white}.ec-world .wc-dial:before{content:"";position:absolute;inset:9px;background:white;border-radius:50%}.ec-world .wc-hand{position:absolute;bottom:50%;left:50%;width:3px;background:#203a62;transform-origin:50% 100%;border-radius:3px}.ec-world .wc-hour{height:20px}.ec-world .wc-minute{height:27px;width:2px}.ec-world .wc-second{height:28px;width:1px;background:#d34747}.ec-world .wc-dial:after{content:"";position:absolute;left:calc(50% - 3px);top:calc(50% - 3px);width:6px;height:6px;background:#2359bc;border-radius:50%}
.ec-world .wc-map-shell{position:relative}.ec-world #wc-map{height:clamp(480px,65vh,740px);width:100%;background:#e8eff4;z-index:0}.ec-world .wc-map-actions{position:absolute;right:12px;top:12px;z-index:500;display:flex;gap:6px}.ec-world .wc-map-actions .wc-btn{box-shadow:0 2px 8px #16355220}.ec-world .wc-map-shell.wc-expanded{position:fixed;inset:0;z-index:10000;background:white}.ec-world .wc-expanded #wc-map{height:100dvh}.ec-world .wc-map-clock{display:none;position:absolute;left:12px;bottom:30px;z-index:500;background:white;padding:8px 14px;border-radius:10px;box-shadow:0 2px 8px #16355220;max-width:calc(100% - 24px)}.ec-world .wc-expanded .wc-map-clock{display:block}.ec-world .wc-map-clock strong{display:block;font-size:1.4rem;font-variant-numeric:tabular-nums}.ec-world .wc-status{min-height:38px;margin:0;padding:8px 14px;font-size:.8rem;color:var(--wc-muted);background:#f7faff}.ec-world .wc-status[data-error="true"]{color:#a02c28;background:#fff0ed}
.ec-world .wc-city-strip{display:flex;gap:8px;overflow-x:auto;padding:12px 14px;border-top:1px solid var(--wc-line)}.ec-world .wc-city{flex:1 0 132px;text-align:left;border:1px solid var(--wc-line);border-radius:10px;background:#fff;padding:9px 12px;color:var(--wc-ink)}.ec-world .wc-city:hover{background:#f2f7ff}.ec-world .wc-city strong{display:block;font-size:1.1rem;font-variant-numeric:tabular-nums}.ec-world .wc-city span{font-size:.8rem}.ec-world .wc-city small{display:block;font-size:.72rem;color:var(--wc-muted)}
.ec-world .wc-article{max-width:auto;margin:32px auto 0}.ec-world .wc-byline{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--wc-line);padding-bottom:16px;margin-bottom:24px}.ec-world .wc-authors{display:flex;flex-wrap:wrap;gap:12px}.ec-world .wc-article h2{font-size:1.5rem;margin:28px 0 12px}.ec-world .wc-article h3{font-size:1.12rem;margin:20px 0 8px}.ec-world .wc-article p{margin:0 0 14px}.ec-world .wc-article li{margin-bottom:7px}.ec-world .wc-note{background:#eff5ff;padding:16px 18px;border-radius:0 10px 10px 0;margin:18px 0}.ec-world .wc-table-wrap{overflow:auto}.ec-world table{border-collapse:collapse;width:100%;font-size:.92rem}.ec-world th,.ec-world td{padding:11px 14px;border-bottom:1px solid var(--wc-line);text-align:left}.ec-world th{background:#eff4fa}.ec-world details{border:1px solid var(--wc-line);border-radius:10px;padding:13px 16px;margin-bottom:10px}.ec-world summary{font-weight:700;cursor:pointer}.ec-world details p{margin:12px 0 0!important}.ec-world .wc-links{display:flex;flex-wrap:wrap;gap:8px}.ec-world .wc-links a{padding:7px 12px;border:1px solid var(--wc-line);border-radius:8px;text-decoration:none}
@media(min-width:1200px){main.container:has(.ec-world){max-width:1480px}}
@media(max-width:600px){.ec-world{margin-top:14px}.ec-world .wc-heading{align-items:start}.ec-world .wc-live{display:none}.ec-world .wc-toolbar{gap:8px;padding:10px}.ec-world .wc-search{flex-basis:100%}.ec-world .wc-summary{grid-template-columns:1fr;padding:12px;gap:10px}.ec-world .wc-reference{border-left:0;border-top:1px solid var(--wc-line);padding:8px 0 0}.ec-world .wc-dial{width:68px;height:68px;flex-basis:68px}.ec-world #wc-map{height:480px;height:60svh;min-height:380px}.ec-world .wc-map-actions{right:8px;top:8px}.ec-world .wc-map-actions .wc-btn{font-size:.78rem;padding:7px 9px}.ec-world .wc-time{font-size:2rem}.ec-world .wc-city{flex-basis:130px}}
</style>

<div class="ec-world" id="wc-root">
  <header class="wc-heading"><div><h1>World Clock Map</h1><p>Explore the map. Check local time. Compare cities at a glance.</p></div><span class="wc-live">● Live clocks</span></header>
  <section class="wc-tool" aria-label="Interactive world clock">
    <div class="wc-toolbar">
      <form class="wc-search" id="wc-search-form"><div class="wc-field"><label for="wc-city-input">Find a listed city</label><input id="wc-city-input" list="wc-cities" placeholder="Try New Delhi, London or New York" autocomplete="off"><datalist id="wc-cities"></datalist></div><button class="wc-btn wc-primary" type="submit">Show time</button></form>
      <button class="wc-btn" id="wc-location" type="button">My location</button>
      <div class="wc-format"><label for="wc-format">Time format</label><select id="wc-format"><option value="24">24-hour</option><option value="12">12-hour</option></select></div>
    </div>
    <div class="wc-summary">
      <div class="wc-selected"><div class="wc-dial" aria-hidden="true"><span class="wc-hand wc-hour" id="wc-hour"></span><span class="wc-hand wc-minute" id="wc-minute"></span><span class="wc-hand wc-second" id="wc-second"></span></div><div><div class="wc-place" id="wc-place">Your device time zone</div><time class="wc-time" id="wc-time">--:--:--</time><div class="wc-meta" id="wc-date">Loading clock…</div><div class="wc-meta" id="wc-zone"></div></div></div>
      <div class="wc-reference"><div class="wc-meta">Your device time <strong id="wc-local">--:--:--</strong></div><div class="wc-meta">UTC <strong id="wc-utc">--:--:--</strong></div><div class="wc-diff" id="wc-difference"></div></div>
    </div>
    <div class="wc-map-shell" id="wc-map-shell"><div id="wc-map" aria-label="World map. Select a point to find its time zone."></div><div class="wc-map-actions"><button class="wc-btn" id="wc-reset" type="button">World view</button><button class="wc-btn" id="wc-expand" type="button" aria-expanded="false">Expand map</button></div><div class="wc-map-clock"><span id="wc-expanded-place"></span><strong id="wc-expanded-time"></strong></div></div>
    <p class="wc-status" id="wc-status" role="status" aria-live="polite">Select a city or click the map to check its local time.</p>
    <div class="wc-city-strip" id="wc-shortcuts" aria-label="Popular city clocks"></div>
  </section>
  <noscript><p>Enable JavaScript to use the live clocks and interactive map. The guide below explains how world time works.</p></noscript>
<!-- Article -->

 <article class="wc-article article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
  <div class="d-flex align-items-center gap-3 flex-wrap">
    {% include naren_create.html %}
    {% include reema_verify.html %}
   </div>
  <div class="text-muted small d-flex flex-wrap align-items-center gap-3 mt-3 mt-md-0">
   <span><i class="fas fa-calendar me-1" aria-hidden="true"></i>Last Updated: {{ page.last_modified_at | date: "%d-%b-%Y" }}</span>
   <span><i class="fas fa-clock me-1" aria-hidden="true"></i>8 min read</span>
  </div>
 </div>
 <h2>Check the current time around the world</h2>
 <p>This world clock map helps you see the local time and date in different places. Select a listed city or click a point on the map to view its live digital clock, analog clock, time zone and current UTC offset. You can also compare the selected place with the time zone set on your device.</p>
 <p>Use the large map when planning a call, following an international event or checking whether it is morning or evening for someone overseas. The city clocks below the map let you compare several places without switching between pages.</p>
 <div class="bg-light p-4 rounded">
 <h2>How to use the world clock map</h2>
 <ol><li><strong>Choose a place.</strong> Type a city from the suggestions and select “Show time”, use a city shortcut, or click the map. Search covers the listed cities; use the map for other places.</li><li><strong>Read the result.</strong> The panel above the map shows the local time, calendar date, time zone and UTC offset. A map click shows coordinates, rather than an unverified city name.</li><li><strong>Compare with your time.</strong> Read how far the selected place is ahead of or behind your device’s time zone, including whether its calendar date is different.</li><li><strong>Adjust the view.</strong> Switch between 12-hour and 24-hour time. Expand the map for more space, or choose “World view” to zoom back out. Press Escape to close the expanded view.</li></ol>
 <p>“My location” asks your browser for permission to use your location. You can continue using city search and map selection if you prefer not to share it.</p>
 </div>
 <h2>What is a time zone?</h2>
 <p>A time zone is an area that follows a particular set of local clock rules. Because Earth rotates, different places experience daylight at different times. Time zones help communities use a shared local time for work, school and daily activities.</p>
 <p>Time zone borders are not neat, equally spaced lines. They often follow national or regional boundaries. A large country can have several time zones, so selecting a city is more useful than assuming that an entire country has one time.</p>
 <h2>What does UTC offset mean?</h2>
 <p>Coordinated Universal Time, or UTC, is the reference used to describe local time. A positive offset means the local clock is ahead of UTC. A negative offset means it is behind UTC. Some offsets include 30 or 45 minutes.</p>
 <div class="wc-note"><strong>Local time = UTC time + the location’s UTC offset</strong><br>Example: with an offset of UTC+05:30, 12:00 UTC becomes 17:30, or 5:30 PM, on the same date.</div>
 <div class="wc-table-wrap"><table><caption>Worked examples using 12:00 UTC and the stated offsets</caption><thead><tr><th scope="col">UTC offset</th><th scope="col">Calculation</th><th scope="col">Local time</th></tr></thead><tbody><tr><td>UTC−05:00</td><td>12:00 − 5 hours</td><td>07:00 (7:00 AM)</td></tr><tr><td>UTC+00:00</td><td>No change</td><td>12:00 (12:00 PM)</td></tr><tr><td>UTC+05:30</td><td>12:00 + 5 hours 30 minutes</td><td>17:30 (5:30 PM)</td></tr><tr><td>UTC+05:45</td><td>12:00 + 5 hours 45 minutes</td><td>17:45 (5:45 PM)</td></tr><tr><td>UTC+09:00</td><td>12:00 + 9 hours</td><td>21:00 (9:00 PM)</td></tr></tbody></table></div>
 <h2>How to calculate the time difference between two places</h2>
 <p>Subtract the first place’s UTC offset from the second place’s offset. For example, if place A uses UTC+01:00 and place B uses UTC+05:30, place B is 4 hours 30 minutes ahead. When it is 09:00 in A, it is 13:30 in B.</p>
 <p>Always use offsets for the same date. The live comparison on this page applies to the current moment. For a specific appointment, use the <a href="/time-zone-converter">time zone converter</a> and check the meeting date.</p>
 <h2>Why daylight saving time can change the difference</h2>
 <p>Some regions move their clocks during part of the year, commonly by one hour. This is called daylight saving time, or DST. Other regions keep the same offset all year. Different regions may change their clocks on different dates.</p>
 <p>A named time zone, such as <code>America/New_York</code>, represents a set of rules, while an offset such as UTC−05:00 describes the difference at a particular moment. The clocks use your browser’s time zone rules to apply the current offset. Keep your browser and operating system updated so recent rule changes can be reflected.</p>
 <h2>Why can the date be different?</h2>
 <p>Adding or subtracting a time difference can cross midnight. If it is 22:00 on Monday at UTC and another location uses UTC+05:30, that location’s time is 03:30 on Tuesday. This is why the calendar date matters as much as the hour when arranging international calls.</p>
 <h2>How the clocks work</h2>
 <p>The page reads the current time from your device and formats that same instant for each selected time zone. It refreshes the displays every second while the page is active. It does not obtain an independent time signal, so an incorrect device clock can produce incorrect results.</p>
 <p>City shortcuts use assigned time zone identifiers. Map selections look up the time zone from geographic boundary data. The map is a geographic world clock, not a coloured map of time zone borders. Lookup data and browser rules can become outdated, and disputed or boundary locations may need extra checking. At sea, a geographic time zone may differ from a ship’s chosen onboard time.</p>
 <p>Read more about time zone rules at the <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer">IANA Time Zone Database</a>. The map uses <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>, with geographic time zone lookup provided by <a href="https://github.com/kevmo314/browser-geo-tz" target="_blank" rel="noopener noreferrer">browser-geo-tz</a>.</p>
 <section class="p-4"><h2 class="mb-4">FAQ on World Clock Map</h2><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">What is a world clock map?</div><p class="mb-0">A world clock map combines a geographic map with local clocks. Select a city or map location to see its current time, date, time zone and UTC offset.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Does the world clock adjust for daylight saving time?</div><p class="mb-0">Yes. The clocks apply the current daylight saving rules available in your browser for the selected time zone. Update your browser and operating system to receive newer time zone rules.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Why is the displayed time different from my actual local time?</div><p class="mb-0">The local comparison uses your device’s clock and configured time zone. Check both settings if the result looks wrong. Selecting “My location” finds the time zone at your geographic location but does not correct your device clock.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Can I switch between 12-hour and 24-hour time?</div><p class="mb-0">Yes. Use the time-format selector above the map. It changes the selected clock, your device clock, UTC clock and the popular city clocks together.</p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body "><div class="fw-bold text-primary">Can I use this map to plan a future meeting?</div><p class="mb-0">This map shows the current time. Use the time zone converter for a future meeting and check the date because daylight saving changes may alter the time difference.</p></div></div></section>
<h2>Related time tools</h2><nav class="wc-links" aria-label="Related time tools"><a href="/time-zone-converter">Time zone converter</a><a href="/ist-to-utc">IST to UTC</a><a href="/utc-to-ist">UTC to IST</a><a href="/military-time-converter">Military time converter</a><a href="/epoch">Epoch converter</a></nav>
  </article>


<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" defer></script>
<script src="{{ '/assets/js/world-clock-map.js' | relative_url }}"></script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a world clock map?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A world clock map combines a geographic map with local clocks. Select a city or map location to see its current time, date, time zone and UTC offset."
      }
    },
    {
      "@type": "Question",
      "name": "Does the world clock adjust for daylight saving time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The clocks apply the current daylight saving rules available in your browser for the selected time zone. Update your browser and operating system to receive newer time zone rules."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the displayed time different from my actual local time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The local comparison uses your device’s clock and configured time zone. Check both settings if the result looks wrong. Selecting “My location” finds the time zone at your geographic location but does not correct your device clock."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch between 12-hour and 24-hour time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Use the time-format selector above the map. It changes the selected clock, your device clock, UTC clock and the popular city clocks together."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this map to plan a future meeting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This map shows the current time. Use the time zone converter for a future meeting and check the date because daylight saving changes may alter the time difference."
      }
    },
    {
      "@type": "Question",
      "name": "Why does a map selection show coordinates instead of a city?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A point on the map may be outside a city. The tool displays the selected coordinates and its time zone without guessing a city name. Use a listed city when you want a named city result."
      }
    }
  ]
}
</script>
