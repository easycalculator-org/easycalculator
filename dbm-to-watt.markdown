---
layout: default
title: dBm to Watts Converter | Formula, Examples & Table
permalink: /dbm-to-watt
description: "Convert dBm to Watts easily with our calculator. Explore dBm to Watts formula, tables, and charts at easycalculator for quick and accurate results."
image: "/assets/images/dbm-to-watt-converter-with-formula-and-example.jpg"
---

<div class="container mt-5">
  <h1 class="text-center mb-4">dBm to Watts and Watts to dBm Calculator</h1>
  <div class="row">
<!-- Input Form -->
<div class="col-lg-6 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
<form id="calculatorForm">
    <div class="mb-3">
  <label for="inputValue" class="form-label">Enter Value</label>
  <input type="number" id="inputValue" class="form-control" placeholder="Enter dBm or Watts" required>
    </div>
    <div class="mb-3">
  <label for="conversionType" class="form-label">Conversion Type</label>
  <select id="conversionType" class="form-select" required>
  <option value="dbm-to-watts">dBm to Watts</option>
  <option value="watts-to-dbm">Watts to dBm</option>
  </select>
    </div>
    <button type="button" class="btn btn-primary w-100" onclick="calculate()">Calculate</button>
</form>
</div>

<!-- Result Display -->
<div class="col-lg-6 d-flex align-items-center justify-content-center">
<div id="result" class="result-box w-100"></div>
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
   





  <h3>What is dBm to Watts conversion calculator?</h3>
  <p>dBm to Watts conversion calculator converts the power value in dBm to Watss dBm value. Watt (W) is a SI unit for measuring the power, and dBm stands for decibel-milliwatts, which is a decibel unit for measuring the power.</p>
  <h4>How to calculate power (in dBm) for the given watts?</h4>
  <p>The following formula is used to determine the power value (in dBm unit) for a given power level in Watt (W).</p>
  <p>dBm to Watts: <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>W</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><msup><mn>0</mn><mfrac><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>d</mi><mi>B</mi><mi>m</mi><mo stretchy="false">)</mo><mo>&minus;</mo><mn>30</mn></mrow><mn>10</mn></mfrac></msup></mrow><annotation encoding="application/x-tex">P(W) = 10^{\frac{P(dBm) - 30}{10}}</annotation></semantics></math></span></span></p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut"></span><span class="mord mathnormal">P</span><span class="mopen">(</span><span class="mord mathnormal">W</span><span class="mclose">)</span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span></span><span class="base"><span class="strut"></span><span class="mord">1</span><span class="mord">0<span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen nulldelimiter sizing reset-size3 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="pstrut"></span><span class="sizing reset-size3 size1 mtight">10</span><span class="pstrut"></span><span class="frac-line mtight"></span><span class="pstrut"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">P</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">d</span><span class="mord mathnormal mtight">B</span><span class="mord mathnormal mtight">m</span><span class="mclose mtight">)</span><span class="mbin mtight">&minus;</span>30</span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord"><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-s">Watts to dBm: <span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>d</mi><mi>B</mi><mi>m</mi><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn><mo>&sdot;</mo><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>10</mn></msub><mo stretchy="false">(</mo><mi>P</mi><mo stretchy="false">(</mo><mi>W</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>+</mo><mn>30</mn></mrow><annotation encoding="application/x-tex">P(dBm) = 10 \cdot \log_{10}(P(W)) + 30</annotation></semantics></math></span><span class="strut"></span><span class="mord mathnormal">P</span><span class="mopen">(</span><span class="mord mathnormal">d</span><span class="mord mathnormal">B</span><span class="mord mathnormal">m</span><span class="mclose">)</span><span class="mspace"></span><span class="mrel">=</span><span class="mspace"></span><span class="strut"></span>10<span class="mspace"></span><span class="mbin">&sdot;</span><span class="mspace"></span><span class="strut"></span><span class="mop">log<span class="pstrut"></span>10​</span><span class="mopen">(</span><span class="mord mathnormal">P</span><span class="mopen">(</span><span class="mord mathnormal">W</span><span class="mclose">))</span><span class="mspace"></span><span class="mbin">+</span><span class="mspace"></span><span class="strut"></span>30​</span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord"><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-s"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
  <p>dBm means decibel-milliwatts. It is a unit that measures signal strength or power level using a logarithmic scale based on 1 milliwatt. For example, 0 dBm equals 1 milliwatt. dBm is useful in fields like radio, microwave, audio, and fiber-optic communications to assess signal strength.  which can express both very large and very small values in a short form. <br>A 3dB increase in level is approximately equivalent to doubling the power. for example In radio comminication 43dBm equivalent to 20W and 46dBm equivalent to 40W.</p>
  <p>Signals with a power level below 1 mW have negative dBm values, while signals stronger than 1 mW have positive dBm values.</p>
  <p>The advantage of using dBm for signal strength is that it lets us represent both large and small power values with fewer numbers. For example, 5 mW is 7 dBm, and 100 kW is 80 dBm. Moreover, the decibel scale simplifies calculations, changing multiplication and division into addition and subtraction.</p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord"><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-s"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord"><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-s"></span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>
  <p><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="mord"><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist"><span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-s">​</span></span></span></span></span></span></span></span></span></span></span></span></span></span></p>

  <p>Convert dBm to Watt formula with example and most usefull values, for Example 1W in dBm is 33dBm, representing the output power of mobile phones.</p>
  <img src="/assets/images/dbm-to-watt-converter-with-formula-and-example.jpg" alt="Convert dBm to Watt formula with example and most usefull values" fetchpriority="high" loading="auto">

<h3>dBm to Watt Conversion Table</h3>
<div class="table-container">
  <table class="table table-striped table-bordered text-center">
    <thead class="table-primary ">
<tr><th scope="col">dBm</th><th scope="col">Watts</th><th scope="col">Description</th></tr>
     </thead>
<tbody id="conversionTable">

<tr><td>-30 dBm</td><td>0.000001 W</td><td>Low power</td></tr>
<tr><td>-29 dBm</td><td>0.000001 W</td><td>Low power</td></tr>
<tr><td>-28 dBm</td><td>0.000002 W</td><td>Low power</td></tr>
<tr><td>-27 dBm</td><td>0.000002 W</td><td>Low power</td></tr>
<tr><td>-26 dBm</td><td>0.000003 W</td><td>Low power</td></tr>
<tr><td>-25 dBm</td><td>0.000003 W</td><td>Low power</td></tr>
<tr><td>-24 dBm</td><td>0.000004 W</td><td>Low power</td></tr>
<tr><td>-23 dBm</td><td>0.000005 W</td><td>Low power</td></tr>
<tr><td>-22 dBm</td><td>0.000006 W</td><td>Low power</td></tr>
<tr><td>-21 dBm</td><td>0.000008 W</td><td>Low power</td></tr>
<tr><td>-20 dBm</td><td>0.000010 W</td><td>Low power</td></tr>
<tr><td>-19 dBm</td><td>0.000013 W</td><td>Low power</td></tr>
<tr><td>-18 dBm</td><td>0.000016 W</td><td>Low power</td></tr>
<tr><td>-17 dBm</td><td>0.000020 W</td><td>Low power</td></tr>
<tr><td>-16 dBm</td><td>0.000025 W</td><td>Low power</td></tr>
<tr><td>-15 dBm</td><td>0.000032 W</td><td>Low power</td></tr>
<tr><td>-14 dBm</td><td>0.000040 W</td><td>Low power</td></tr>
<tr><td>-13 dBm</td><td>0.000050 W</td><td>Low power</td></tr>
<tr><td>-12 dBm</td><td>0.000063 W</td><td>Low power</td></tr>
<tr><td>-11 dBm</td><td>0.000079 W</td><td>Low power</td></tr>
<tr><td>-10 dBm</td><td>0.000100 W</td><td>Low power</td></tr>
<tr><td>-9 dBm</td><td>0.000126 W</td><td>Low power</td></tr>
<tr><td>-8 dBm</td><td>0.000158 W</td><td>Low power</td></tr>
<tr><td>-7 dBm</td><td>0.000200 W</td><td>Low power</td></tr>
<tr><td>-6 dBm</td><td>0.000251 W</td><td>Low power</td></tr>
<tr><td>-5 dBm</td><td>0.000316 W</td><td>Low power</td></tr>
<tr><td>-4 dBm</td><td>0.000398 W</td><td>Low power</td></tr>
<tr><td>-3 dBm</td><td>0.000501 W</td><td>Low power</td></tr>
<tr><td>-2 dBm</td><td>0.000631 W</td><td>Low power</td></tr>
<tr><td>-1 dBm</td><td>0.000794 W</td><td>Low power</td></tr>
<tr><td>0 dBm</td><td>0.001000 W</td><td>Medium power</td></tr>
<tr><td>1 dBm</td><td>0.001259 W</td><td>Medium power</td></tr>
<tr><td>2 dBm</td><td>0.001585 W</td><td>Medium power</td></tr>
<tr><td>3 dBm</td><td>0.001995 W</td><td>Medium power</td></tr>
<tr><td>4 dBm</td><td>0.002512 W</td><td>Medium power</td></tr>
<tr><td>5 dBm</td><td>0.003162 W</td><td>Medium power</td></tr>
<tr><td>6 dBm</td><td>0.003981 W</td><td>Medium power</td></tr>
<tr><td>7 dBm</td><td>0.005012 W</td><td>Medium power</td></tr>
<tr><td>8 dBm</td><td>0.006310 W</td><td>Medium power</td></tr>
<tr><td>9 dBm</td><td>0.007943 W</td><td>Medium power</td></tr>
<tr><td>10 dBm</td><td>0.010000 W</td><td>Medium power</td></tr>  
<tr><td>11 dBm</td><td>0.012589 W</td><td>Medium power</td></tr>
<tr><td>12 dBm</td><td>0.015849 W</td><td>Medium power</td></tr>
<tr><td>13 dBm</td><td>0.019953 W</td><td>Medium power</td></tr>
<tr><td>14 dBm</td><td>0.025119 W</td><td>Medium power</td></tr>
<tr><td>15 dBm</td><td>0.031623 W</td><td>Medium power</td></tr>
<tr><td>16 dBm</td><td>0.039811 W</td><td>Medium power</td></tr>
<tr><td>17 dBm</td><td>0.050119 W</td><td>Medium power</td></tr>
<tr><td>18 dBm</td><td>0.063096 W</td><td>Medium power</td></tr>
<tr><td>19 dBm</td><td>0.079433 W</td><td>Medium power</td></tr>
<tr><td>20 dBm</td><td>0.100000 W</td><td>Medium power</td></tr>
<tr><td>21 dBm</td><td>0.125893 W</td><td>Medium power</td></tr>
<tr><td>22 dBm</td><td>0.158489 W</td><td>Medium power</td></tr>
<tr><td>23 dBm</td><td>0.199526 W</td><td>Medium power</td></tr>
<tr><td>24 dBm</td><td>0.251189 W</td><td>Medium power</td></tr>
<tr><td>25 dBm</td><td>0.316228 W</td><td>Medium power</td></tr>
<tr><td>26 dBm</td><td>0.398107 W</td><td>Medium power</td></tr>
<tr><td>27 dBm</td><td>0.501187 W</td><td>Medium power</td></tr>
<tr><td>28 dBm</td><td>0.630957 W</td><td>Medium power</td></tr>
<tr><td>29 dBm</td><td>0.794328 W</td><td>Medium power</td></tr>
<tr><td>30 dBm</td><td>1.000000 W</td><td>Medium power</td></tr>
<tr><td>31 dBm</td><td>1.258925 W</td><td>Medium power</td></tr>
<tr><td>32 dBm</td><td>1.584893 W</td><td>Medium power</td></tr>
<tr><td>33 dBm</td><td>1.995262 W</td><td>Medium power</td></tr>
<tr><td>34 dBm</td><td>2.511886 W</td><td>Medium power</td></tr>
<tr><td>35 dBm</td><td>3.162278 W</td><td>Medium power</td></tr>
<tr><td>36 dBm</td><td>3.981072 W</td><td>Medium power</td></tr>
<tr><td>37 dBm</td><td>5.011872 W</td><td>Medium power</td></tr>
<tr><td>38 dBm</td><td>6.309573 W</td><td>Medium power</td></tr>
<tr><td>39 dBm</td><td>7.943282 W</td><td>Medium power</td></tr>
<tr><td>40 dBm</td><td>10.000000 W</td><td>Medium power</td></tr>
<tr><td>41 dBm</td><td>12.589254 W</td><td>Medium power</td></tr>
<tr><td>42 dBm</td><td>15.848932 W</td><td>Medium power</td></tr>
<tr><td>43 dBm</td><td>19.952623 W</td><td>Medium power</td></tr>
<tr><td>44 dBm</td><td>25.118864 W</td><td>Medium power</td></tr>
<tr><td>45 dBm</td><td>31.622777 W</td><td>Medium power</td></tr>
<tr><td>46 dBm</td><td>39.810717 W</td><td>Medium power</td></tr>
<tr><td>47 dBm</td><td>50.118723 W</td><td>Medium power</td></tr>
<tr><td>48 dBm</td><td>63.095734 W</td><td>Medium power</td></tr>
<tr><td>49 dBm</td><td>79.432823 W</td><td>Medium power</td></tr>
<tr><td>50 dBm</td><td>100.000000 W</td><td>Medium power</td></tr>
<tr><td>51 dBm</td><td>125.892541 W</td><td>Medium power</td></tr>
<tr><td>52 dBm</td><td>158.489319 W</td><td>Medium power</td></tr>
<tr><td>53 dBm</td><td>199.526231 W</td><td>Medium power</td></tr>
<tr><td>54 dBm</td><td>251.188643 W</td><td>Medium power</td></tr>
<tr><td>55 dBm</td><td>316.227766 W</td><td>Medium power</td></tr>
<tr><td>56 dBm</td><td>398.107171 W</td><td>Medium power</td></tr>
<tr><td>57 dBm</td><td>501.187234 W</td><td>Medium power</td></tr>
<tr><td>58 dBm</td><td>630.957344 W</td><td>Medium power</td></tr>
<tr><td>59 dBm</td><td>794.328235 W</td><td>Medium power</td></tr>
<tr><td>60 dBm</td><td>1000.000000 W</td><td>Medium power</td></tr>
<tr><td>61 dBm</td><td>1258.925412 W</td><td>High power</td></tr>
<tr><td>62 dBm</td><td>1584.893192 W</td><td>High power</td></tr>
<tr><td>63 dBm</td><td>1995.262315 W</td><td>High power</td></tr>
<tr><td>64 dBm</td><td>2511.886432 W</td><td>High power</td></tr>
<tr><td>65 dBm</td><td>3162.277660 W</td><td>High power</td></tr>
<tr><td>66 dBm</td><td>3981.071706 W</td><td>High power</td></tr>
<tr><td>67 dBm</td><td>5011.872336 W</td><td>High power</td></tr>
<tr><td>68 dBm</td><td>6309.573445 W</td><td>High power</td></tr>
<tr><td>69 dBm</td><td>7943.282347 W</td><td>High power</td></tr>
<tr><td>70 dBm</td><td>10000.000000 W</td><td>High power</td></tr>
<tr><td>71 dBm</td><td>12589.254118 W</td><td>High power</td></tr>
<tr><td>72 dBm</td><td>15848.931925 W</td><td>High power</td></tr>
<tr><td>73 dBm</td><td>19952.623150 W</td><td>High power</td></tr>
<tr><td>74 dBm</td><td>25118.864315 W</td><td>High power</td></tr>
<tr><td>75 dBm</td><td>31622.776602 W</td><td>High power</td></tr>
<tr><td>76 dBm</td><td>39810.717055 W</td><td>High power</td></tr>
<tr><td>77 dBm</td><td>50118.723363 W</td><td>High power</td></tr>
<tr><td>78 dBm</td><td>63095.734448 W</td><td>High power</td></tr>
<tr><td>79 dBm</td><td>79432.823472 W</td><td>High power</td></tr>
<tr><td>80 dBm</td><td>100000.000000 W</td><td>High power</td></tr>
<tr><td>81 dBm</td><td>125892.541179 W</td><td>High power</td></tr>
<tr><td>82 dBm</td><td>158489.319246 W</td><td>High power</td></tr>
<tr><td>83 dBm</td><td>199526.231497 W</td><td>High power</td></tr>
<tr><td>84 dBm</td><td>251188.643151 W</td><td>High power</td></tr>
<tr><td>85 dBm</td><td>316227.766017 W</td><td>High power</td></tr>
<tr><td>86 dBm</td><td>398107.170553 W</td><td>High power</td></tr>
<tr><td>87 dBm</td><td>501187.233627 W</td><td>High power</td></tr>
<tr><td>88 dBm</td><td>630957.344480 W</td><td>High power</td></tr>
<tr><td>89 dBm</td><td>794328.234724 W</td><td>High power</td></tr>
<tr><td>90 dBm</td><td>1000000.000000 W</td><td>High power</td></tr>
  </tbody>
  </table>
</div>

<!-- FAQ Section -->
<section class="mb-5">
        <h2 class="pt-2">FAQ</h2>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary">1. What does a negative dBm value indicate?</div>
            <p class="mb-0">A negative dBm value indicates that the signal power is less than 1 milliwatt (1 mW). For example, −10 dBm equals 0.1 mW and −30 dBm equals 0.001 mW. Negative dBm values are common in low-power signals such as received wireless or RF signals.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 2. Why is dBm used instead of Watts?</div>
            <p class="mb-0">dBm is used because it expresses power on a logarithmic scale, making it easier to represent both very small and very large power levels. A 3 dB increase approximately doubles the power, simplifying signal strength comparison and RF calculations.</p>
          </div>
        </div>
        <div class="card mb-3 border-0 bg-light">
          <div class="card-body ">
            <div class="fw-bold text-primary"> 3. What is 0 dBm equal to in Watts?</div>
            <p class="mb-0">0 dBm is equal to 1 milliwatt (0.001 W). It is the reference point for dBm measurements and is commonly used as a baseline in RF and communication systems.</p>
          </div>
        </div>
      </section>
<div class="highlight mt-4"><p><strong>Source:</strong> Wikipedia, 3GPP, ETSI and IEEE</p></div>
</div>

</div>

<script src="{{ '/assets/js/dbm-watt.js' | relative_url }}"></script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a negative dBm value indicate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A negative dBm value indicates that the signal power is less than 1 milliwatt (1 mW). For example, −10 dBm equals 0.1 mW and −30 dBm equals 0.001 mW. Negative dBm values are common in low-power signals such as received wireless or RF signals."
      }
    },
    {
      "@type": "Question",
      "name": "Why is dBm used instead of Watts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "dBm is used because it expresses power on a logarithmic scale, making it easier to represent both very small and very large power levels. A 3 dB increase approximately doubles the power, simplifying signal strength comparison and RF calculations."
      }
    },
    {
      "@type": "Question",
      "name": "What is 0 dBm equal to in Watts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "0 dBm is equal to 1 milliwatt (0.001 W). It is the reference point for dBm measurements and is commonly used as a baseline in RF and communication systems."
      }
    }
  ]
}
</script>
