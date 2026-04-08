---
layout: default
title: EARFCN Calculator LTE – 4G Frequency Converter & Band Table
permalink: /earfcn-calculator
description: "Instantly convert LTE EARFCN to frequency using our free calculator. Includes LTE band list, formulas, and examples for RF engineers."
#image: "/assets/images/age-calc.png"
last_modified_at: 2026-02-28
---
 <style>
 .band-chip { background: #f2f5f9; border-radius: 40px; padding: 0.4rem 1rem; font-weight: 500; border: 1px solid #dee2e6; cursor: pointer; transition: 0.1s; margin: 0.2rem; display: inline-block; }
 .band-chip.active { background: #0d6efd; border-color: #0a58ca; color: white; box-shadow: 0 2px 8px rgba(13,110,253,0.3); }
 .band-chip:hover { background: #d3d9e2; }
 .converter-panel { background: white; border-radius: 1.2rem; padding: 1.8rem; box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03); border: 1px solid #e9ecf2; }
 .info-footer { background: #f2f5fa; border-radius: 60px; padding: 0.8rem 1.5rem; font-size: 0.9rem; border: 1px solid #dae1ec; }
</style>

 
<div class="container py-4">
 <!-- header -->
 <div class="d-flex align-items-center gap-3 mb-4"> <h1>LTE EARFCN Calculator</h1></div>
   <div class="mb-4">
      <span class="text-secondary me-2"><i class="fa-solid fa-tags"></i> FDD Band:</span>
     <div class="d-flex flex-wrap align-items-center">
      <span class="band-chip" data-band="5" data-dl-low="869" data-n-offset="2400" data-earfcn-min="2400" data-earfcn-max="2649">Band 5 (850)</span>
      <span class="band-chip" data-band="8" data-dl-low="925" data-n-offset="3450" data-earfcn-min="3450" data-earfcn-max="3799">Band 8 (900)</span>
      <span class="band-chip" data-band="20" data-dl-low="791" data-n-offset="6150" data-earfcn-min="6150" data-earfcn-max="6449">Band 20 (800)</span>
      <span class="band-chip" data-band="28" data-dl-low="758" data-n-offset="9210" data-earfcn-min="9210" data-earfcn-max="9659">Band 28 (700)</span>
      <span class="band-chip" data-band="71" data-dl-low="617" data-n-offset="68586" data-earfcn-min="68586" data-earfcn-max="68935">Band 71 (600)</span>
      <span class="band-chip" data-band="1" data-dl-low="2110" data-n-offset="0" data-earfcn-min="0" data-earfcn-max="599">Band 1 (2100)</span>
      <span class="band-chip" data-band="2" data-dl-low="1930" data-n-offset="600" data-earfcn-min="600" data-earfcn-max="1199">Band 2 (1900)</span>
      <span class="band-chip" data-band="3" data-dl-low="1805" data-n-offset="1200" data-earfcn-min="1200" data-earfcn-max="1949">Band 3 (1800)</span>
      <span class="band-chip" data-band="66" data-dl-low="2110" data-n-offset="66486" data-earfcn-min="66486" data-earfcn-max="67335">Band 4/66 (AWS)</span>
     </div>
    <br>

<span class="text-secondary me-2"><i class="fa-solid fa-tags"></i> TDD Band:</span>   
<div class="d-flex flex-wrap align-items-center">
   <span class="band-chip" data-band="38" data-dl-low="2570" data-n-offset="37750" data-earfcn-min="37750" data-earfcn-max="38249">Band 38 (2600 TDD)</span>
   <span class="band-chip" data-band="41" data-dl-low="2496" data-n-offset="39650" data-earfcn-min="39650" data-earfcn-max="41589">Band 41 (2500)</span>
   <span class="band-chip" data-band="42" data-dl-low="3400" data-n-offset="41590" data-earfcn-min="41590" data-earfcn-max="43589">Band 42/43 (3.5 GHz)</span>
   <span class="band-chip" data-band="48" data-dl-low="3550" data-n-offset="55240" data-earfcn-min="55240" data-earfcn-max="56739">Band 48 (CBRS)</span>
   <span class="band-chip" data-band="40" data-dl-low="2300" data-n-offset="38650" data-earfcn-min="38650" data-earfcn-max="39649">Band 40 (2300)</span>
   <span class="band-chip" data-band="7" data-dl-low="2620" data-n-offset="2750" data-earfcn-min="2750" data-earfcn-max="3449">Band 7 (2600)</span>
  </div>
 </div>

<!-- band -->
<div class="row g-3 align-items-end mb-4">  
  <div class="col-md-8">
    <div class="bg-white p-4 rounded-4 border d-flex flex-wrap gap-3 align-items-center justify-content-between">
      <span class="fs-5 fs-md-4">
        <strong id="selectedBandDisplay">Band 5 (850)</strong><span class="text-secondary mx-1">|</span><span id="dlFreqRange">869 – 894</span> MHz DL</span>
      <span class="bg-primary-subtle rounded-4 p-3 fs-5"> EARFCN <span id="earfcnRangeDisplay">2400 – 2649</span></span>
    </div>
  </div>
</div>

 <!-- toggle switch: which conversion to show? -->
<div class="d-flex justify-content-center gap-3 bg-white p-3 rounded-3 border mx-auto mb-4">
  <input type="radio" class="btn-check" name="converterChoice" id="radioFreqToEarfcn" autocomplete="off" checked>
  <label class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" for="radioFreqToEarfcn"> Frequency → EARFCN </label>
  <input type="radio" class="btn-check" name="converterChoice" id="radioEarfcnToFreq" autocomplete="off">
  <label class="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" for="radioEarfcnToFreq"> EARFCN → Frequency</label>
</div>

<!-- dynamic converter panel: only one visible at a time -->
<div class="converter-panel mb-4">
  <!-- FREQ → EARFCN panel  -->
   <div id="panelFreqToEarfcn" class="converter-panel-inner">
    <h5 class="mb-3">Downlink frequency → EARFCN</h5>
     <div class="row g-4 align-items-end">
       <div class="col-md-6">
          <label class="form-label fw-medium">Enter downlink frequency (MHz)</label>
          <input type="number" id="freqInput" class="form-control form-control-lg" placeholder="e.g. 881.5" step="0.1" value="881.5">
         </div>
      <div class="col-md-6"> <button id="calcFreqToEarfcn" class="btn btn-primary btn-lg px-4"> Compute EARFCN</button></div>
                <div class="col-12 mt-3">
                    <div class="bg-light p-4 rounded-4">
                        <span class="text-secondary">Computed EARFCN (downlink):</span>
                        <div class="d-flex align-items-baseline gap-3">
                            <span id="earfcnResult" class="fw-bold fs-1">2525</span>
                            <span class="text-muted">(NDL)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- EARFCN -->
<div id="panelEarfcnToFreq" class="converter-panel-inner" style="display: none;">
  <h5 class="mb-3">EARFCN → downlink frequency</h5>
   <div class="row g-4 align-items-end">
      <div class="col-md-6">
      <label class="form-label fw-medium">Enter EARFCN (downlink)</label>
      <input type="number" id="earfcnInput" class="form-control form-control-lg" placeholder="e.g. 2500" value="2500"></div>
        <div class="col-md-6"> <button id="calcEarfcnToFreq" class="btn btn-primary btn-lg px-4">Compute Frequency</button> </div>
          <div class="col-12 mt-3">
           <div class="bg-light p-4 rounded-4">
             <span class="text-secondary">Computed downlink frequency:</span>
                <div class="d-flex align-items-baseline gap-3"><span id="freqResult" class="fw-bold fs-1">879.0</span><span class="text-muted">MHz</span></div>
             </div>
            </div>
           </div>
        </div>
    </div>
 <!-- unified -->
 <div class="info-footer d-flex flex-wrap justify-content-between align-items-center mt-3">
  <span><strong>Band <span id="footBand">5</span></strong> DL low <span id="footDlLow">869</span> MHz · UL low ≈<span id="footUlLow">824</span> MHz</span>
   <span>EARFCN offset <span id="footOffset">2400</span> · range <span id="footRange">2400–2649</span></span>
    <span class="badge bg-light text-dark">ΔF = 0.1 MHz</span>
    </div>
</div>
<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->
<!-- What is EARFCN -->
 <section class="mb-5">
   <h2 class="fw-bold mb-3">What is EARFCN?</h2>
    <p> <strong>EARFCN (E-UTRA Absolute Radio Frequency Channel Number)</strong> is a unique number assigned to each LTE carrier frequency.  Instead of using raw frequency values, LTE networks identify channels using EARFCN numbers. </p>
     <div class="alert alert-info rounded-4">EARFCN is the channel number that represents a specific LTE frequency. </div>
        <ul class="mb-0">
          <li>Used in LTE (4G) networks</li>
          <li>Maps directly to uplink and downlink frequencies</li>
          <li>Defined by 3GPP specifications</li>
          <li>Widely used in planning and optimization</li>
        </ul>
      </section>
      <!-- Importance -->
<section class="mb-5">
  <h2>Why EARFCN is Important in LTE</h2>
  <p>EARFCN plays a critical role in radio network operations:</p>

  <ul class="mb-0">
    <li>Cell planning and frequency allocation</li>
    <li>Drive test log analysis</li>
    <li>Interference troubleshooting</li>
    <li>LTE optimization and KPI analysis</li>
  </ul>
</section>
      <!-- Formula -->
      <section class="mb-5">
        <h2 class="fw-bold mb-3">EARFCN Formula (LTE Frequency Calculation)</h2>
        <div class="card bg-light border-0 rounded-4 mb-3">
          <div class="card-body">
            <h5 class="fw-bold">Downlink Frequency</h5>
            <p class="mb-2"><code>F<sub>DL</sub> = F<sub>DL_low</sub> + 0.1 × (N<sub>DL</sub> − N<sub>Offs-DL</sub>)</code></p>
            <h5 class="fw-bold mt-3">Uplink Frequency</h5>
            <p class="mb-0"><code>F<sub>UL</sub> = F<sub>UL_low</sub> + 0.1 × (N<sub>UL</sub> − N<sub>Offs-UL</sub>)</code></p>
          </div>
        </div>
        <ul class="mb-0">
          <li>N<sub>DL</sub> = Downlink EARFCN</li>
          <li>N<sub>UL</sub> = Uplink EARFCN</li>
          <li>Frequency unit = MHz</li>
          <li>Channel spacing = 100 kHz</li>
        </ul>
      </section>
     
 <!-- Full LTE Band Table (Bootstrap Clean Version – All Major Rows) -->
<section class="container my-5">
  <div class="card shadow-sm border-0 rounded-4">
    <div class="card-body p-4">
     <h2 class="fw-bold mb-3">LTE Frequency Bands</h2>
      <p class="text-muted">Complete LTE operating bands based on 3GPP TS 36.101. Useful for EARFCN calculations, RF planning, and LTE optimization.</p>
      <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered align-middle text-center small">
          <thead class="table-dark">
            <tr>
              <th>Band</th>
              <th>Mode</th>
              <th>Freq (MHz)</th>
              <th>Name</th>
              <th>Uplink (MHz)</th>
              <th>Downlink (MHz)</th>
              <th>Spacing</th>
              <th>BW (MHz)</th>
              <th>Region / Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>FDD</td><td>2100</td><td>IMT</td><td>1920–1980</td><td>2110–2170</td><td>190</td><td>5,10,15,20</td><td>Global</td></tr>
            <tr><td>2</td><td>FDD</td><td>1900</td><td>PCS</td><td>1850–1910</td><td>1930–1990</td><td>80</td><td>1.4–20</td><td>North America</td></tr>
            <tr><td>3</td><td>FDD</td><td>1800</td><td>DCS</td><td>1710–1785</td><td>1805–1880</td><td>95</td><td>1.4–20</td><td>India, EU</td></tr>
            <tr><td>4</td><td>FDD</td><td>1700</td><td>AWS-1</td><td>1710–1755</td><td>2110–2155</td><td>400</td><td>1.4–20</td><td>Americas</td></tr>
            <tr><td>5</td><td>FDD</td><td>850</td><td>Cellular</td><td>824–849</td><td>869–894</td><td>45</td><td>1.4–10</td><td>Coverage band</td></tr>
            <tr><td>6</td><td>FDD</td><td>800</td><td>UMTS 800</td><td>830–840</td><td>875–885</td><td>45</td><td>5,10</td><td>Japan</td></tr>
            <tr><td>7</td><td>FDD</td><td>2600</td><td>IMT-E</td><td>2500–2570</td><td>2620–2690</td><td>120</td><td>5–20</td><td>Capacity band</td></tr>
            <tr><td>8</td><td>FDD</td><td>900</td><td>EGSM</td><td>880–915</td><td>925–960</td><td>45</td><td>1.4–10</td><td>India, Asia</td></tr>
            <tr><td>9</td><td>FDD</td><td>1800</td><td>UMTS 1700</td><td>1749.9–1784.9</td><td>1844.9–1879.9</td><td>95</td><td>5,10</td><td>Japan</td></tr>
            <tr><td>10</td><td>FDD</td><td>1700</td><td>AWS-Ext</td><td>1710–1770</td><td>2110–2170</td><td>400</td><td>5–20</td><td>Americas</td></tr>
            <tr><td>11</td><td>FDD</td><td>1500</td><td>PDC Lower</td><td>1427.9–1447.9</td><td>1475.9–1495.9</td><td>48</td><td>5,10</td><td>Japan</td></tr>
            <tr><td>12</td><td>FDD</td><td>700</td><td>Lower SMH</td><td>699–716</td><td>729–746</td><td>30</td><td>1.4–10</td><td>USA</td></tr>
            <tr><td>13</td><td>FDD</td><td>700</td><td>Upper SMH</td><td>777–787</td><td>746–756</td><td>-31</td><td>5,10</td><td>USA</td></tr>
            <tr><td>14</td><td>FDD</td><td>700</td><td>Upper SMH+</td><td>788–798</td><td>758–768</td><td>-30</td><td>5,10</td><td>Public safety</td></tr>
            <tr><td>17</td><td>FDD</td><td>700</td><td>Lower SMH</td><td>704–716</td><td>734–746</td><td>30</td><td>5,10</td><td>USA</td></tr>
            <tr><td>18</td><td>FDD</td><td>850</td><td>Lower 800</td><td>815–830</td><td>860–875</td><td>45</td><td>5–15</td><td>Japan</td></tr>
            <tr><td>19</td><td>FDD</td><td>850</td><td>Upper 800</td><td>830–845</td><td>875–890</td><td>45</td><td>5–15</td><td>Japan</td></tr>
            <tr><td>20</td><td>FDD</td><td>800</td><td>Digital Dividend</td><td>832–862</td><td>791–821</td><td>-41</td><td>5–20</td><td>Europe</td></tr>
            <tr><td>21</td><td>FDD</td><td>1500</td><td>PDC Upper</td><td>1447.9–1462.9</td><td>1495.9–1510.9</td><td>48</td><td>5–15</td><td>Japan</td></tr>
            <tr><td>22</td><td>FDD</td><td>3500</td><td>C-Band</td><td>3410–3500</td><td>3510–3600</td><td>100</td><td>5–20</td><td>Limited</td></tr>
            <tr><td>25</td><td>FDD</td><td>1900</td><td>Ext PCS</td><td>1850–1915</td><td>1930–1995</td><td>80</td><td>1.4–20</td><td>Americas</td></tr>
            <tr><td>26</td><td>FDD</td><td>850</td><td>Ext Cellular</td><td>814–849</td><td>859–894</td><td>45</td><td>1.4–15</td><td>Americas</td></tr>
            <tr><td>28</td><td>FDD</td><td>700</td><td>APT 700</td><td>703–748</td><td>758–803</td><td>55</td><td>3–20</td><td>India, APAC</td></tr>
            <tr><td>30</td><td>FDD</td><td>2300</td><td>WCS</td><td>2305–2315</td><td>2350–2360</td><td>45</td><td>5,10</td><td>USA</td></tr>
            <tr><td>31</td><td>FDD</td><td>450</td><td>NMT</td><td>452.5–457.5</td><td>462.5–467.5</td><td>10</td><td>1.4–5</td><td>EU</td></tr>
            <tr><td>33</td><td>TDD</td><td>1900</td><td>IMT</td><td colspan="2">1900–1920</td><td>—</td><td>5–20</td><td>TDD</td></tr>
            <tr><td>34</td><td>TDD</td><td>2000</td><td>IMT</td><td colspan="2">2010–2025</td><td>—</td><td>5–15</td><td>TDD</td></tr>
            <tr><td>38</td><td>TDD</td><td>2600</td><td>IMT-E</td><td colspan="2">2570–2620</td><td>—</td><td>5–20</td><td>India, China</td></tr>
            <tr><td>39</td><td>TDD</td><td>1900</td><td>DCS-IMT</td><td colspan="2">1880–1920</td><td>—</td><td>5–20</td><td>China</td></tr>
            <tr><td>40</td><td>TDD</td><td>2300</td><td>S-Band</td><td colspan="2">2300–2400</td><td>—</td><td>5–20</td><td>India (Jio/Airtel)</td></tr>
            <tr><td>41</td><td>TDD</td><td>2500</td><td>BRS</td><td colspan="2">2496–2690</td><td>—</td><td>5–20</td><td>USA, China</td></tr>
            <tr><td>42</td><td>TDD</td><td>3500</td><td>CBRS</td><td colspan="2">3400–3600</td><td>—</td><td>5–20</td><td>EU, Japan</td></tr>
            <tr><td>43</td><td>TDD</td><td>3700</td><td>C-Band</td><td colspan="2">3600–3800</td><td>—</td><td>5–20</td><td>Global</td></tr>
            <tr><td>44</td><td>TDD</td><td>700</td><td>APT</td><td colspan="2">703–803</td><td>—</td><td>3–20</td><td>APAC</td></tr>
            <tr><td>46</td><td>TDD</td><td>5200</td><td>LAA</td><td colspan="2">5150–5925</td><td>—</td><td>10,20</td><td>Unlicensed</td></tr>
            <tr><td>48</td><td>TDD</td><td>3500</td><td>CBRS</td><td colspan="2">3550–3700</td><td>—</td><td>5–20</td><td>USA</td></tr>
            <tr><td>52</td><td>TDD</td><td>3300</td><td>C-Band</td><td colspan="2">3300–3400</td><td>—</td><td>5–20</td><td>Global</td></tr>
            <tr><td>65</td><td>FDD</td><td>2100</td><td>Ext IMT</td><td>1920–2010</td><td>2110–2200</td><td>190</td><td>1.4–20</td><td>Americas</td></tr>
            <tr><td>66</td><td>FDD</td><td>1700</td><td>AWS-3</td><td>1710–1780</td><td>2110–2200</td><td>400</td><td>1.4–20</td><td>USA</td></tr>
            <tr><td>68</td><td>FDD</td><td>700</td><td>ME 700</td><td>698–728</td><td>753–783</td><td>55</td><td>5–15</td><td>MEA</td></tr>
            <tr><td>70</td><td>FDD</td><td>1700</td><td>AWS-Suppl</td><td>1695–1710</td><td>1995–2020</td><td>~300</td><td>5–20</td><td>USA</td></tr>
            <tr><td>71</td><td>FDD</td><td>600</td><td>Digital Dividend</td><td>663–698</td><td>617–652</td><td>-46</td><td>5–20</td><td>USA</td></tr>
            <tr><td>74</td><td>FDD</td><td>1500</td><td>L-Band</td><td>1427–1470</td><td>1475–1518</td><td>48</td><td>1.4–20</td><td>USA</td></tr>
            <tr><td>85</td><td>FDD</td><td>700</td><td>Ext Lower SMH</td><td>698–716</td><td>728–746</td><td>30</td><td>5,10</td><td>Americas</td></tr>
            <tr><td>87</td><td>FDD</td><td>410</td><td>PMR</td><td>410–415</td><td>420–425</td><td>10</td><td>1.4–5</td><td>APT</td></tr>
            <tr><td>88</td><td>FDD</td><td>410</td><td>PMR</td><td>412–417</td><td>422–427</td><td>10</td><td>1.4–5</td><td>EU</td></tr>
          </tbody>
        </table>
      </div>
 </div>
  </div>
</section>     
        {% include rf.html %}
</div>
<script src="{{ '/assets/js/erfcn-calc.js' | relative_url }}"></script> 

