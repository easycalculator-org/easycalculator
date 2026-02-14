  (function() {
    // ---- DOM elements ----
    const distVal = document.getElementById('distVal');
    const distUnit = document.getElementById('distUnit');
    const freqVal = document.getElementById('freqVal');
    const freqUnit = document.getElementById('freqUnit');
    const txGain = document.getElementById('txGain');
    const rxGain = document.getElementById('rxGain');
    const calcBtn = document.getElementById('calcFsplBtn');

    const fsplDisplay = document.getElementById('fsplDisplay');
    const rxPowerDisplay = document.getElementById('rxPowerDisplay');
    const distMetric = document.getElementById('distMetric');
    const freqMetric = document.getElementById('freqMetric');

    // constants
    const C = 299792458;  // m/s
    const TX_POWER_DBM = 0;  // fixed 0 dBm (1 mW)

    // conversion tables
    const distToMeter = {
      'km': 1e3,
      'm': 1.0,
      'mile': 1609.344,
      'nmi': 1852.0
    };
    const freqToHz = {
      'Hz': 1.0,
      'kHz': 1e3,
      'MHz': 1e6,
      'GHz': 1e9
    };

    // main calculation function
    function compute() {
      // get raw values
      let dNum = parseFloat(distVal.value);
      let fNum = parseFloat(freqVal.value);
      let txG = parseFloat(txGain.value) || 0;
      let rxG = parseFloat(rxGain.value) || 0;

      // basic sanitizing
      if (isNaN(dNum) || dNum <= 0) dNum = 1.0;
      if (isNaN(fNum) || fNum <= 0) fNum = 100.0;

      // convert to base units
      const dMeter = dNum * distToMeter[distUnit.value];
      const fHz = fNum * freqToHz[freqUnit.value];

      // FSPL formula (linear power ratio)
      const fourPiDF = 4 * Math.PI * dMeter * fHz;
      const ratio = fourPiDF / C;
      const fsplLinear = ratio * ratio;
      let fsplDB = 10 * Math.log10(fsplLinear);
      fsplDB = Math.round(fsplDB * 100) / 100;

      // received power (dBm) = TX power (0 dBm) + TX gain + RX gain - FSPL
      const rxPowerDBm = TX_POWER_DBM + txG + rxG - fsplDB;
      const rxPowerRounded = Math.round(rxPowerDBm * 100) / 100;

      // update displays
      fsplDisplay.innerText = fsplDB.toFixed(2);
      rxPowerDisplay.innerText = rxPowerRounded.toFixed(2);

      // update metric info
      distMetric.innerText = dMeter.toExponential(3) + ' m';
      freqMetric.innerText = fHz.toExponential(3) + ' Hz';
    }

    // attach event listeners
    calcBtn.addEventListener('click', compute);

    // also update on any change (real-time)
    const inputs = [distVal, distUnit, freqVal, freqUnit, txGain, rxGain];
    inputs.forEach(el => el.addEventListener('input', compute));
    inputs.forEach(el => el.addEventListener('change', compute));

    // initial computation
    compute();
  })();