(function(){
  'use strict';
  var bands={
    gsm850:{name:'GSM 850',ranges:[[128,251]],duplex:45,ul:function(n){return 824.2+0.2*(n-128);}},
    pgsm900:{name:'GSM 900 Primary (P-GSM)',ranges:[[1,124]],duplex:45,ul:function(n){return 890+0.2*n;}},
    egsm900:{name:'GSM 900 Extended (E-GSM)',ranges:[[0,124],[975,1023]],duplex:45,ul:function(n){return n>=975?890+0.2*(n-1024):890+0.2*n;}},
    dcs1800:{name:'DCS 1800',ranges:[[512,885]],duplex:95,ul:function(n){return 1710.2+0.2*(n-512);}},
    pcs1900:{name:'PCS 1900',ranges:[[512,810]],duplex:80,ul:function(n){return 1850.2+0.2*(n-512);}}
  };
  var bandEl=document.getElementById('af-band'),channelEl=document.getElementById('af-channel'),freqEl=document.getElementById('af-frequency');
  var channelField=document.getElementById('af-channel-field'),frequencyField=document.getElementById('af-frequency-field');
  var hintEl=document.getElementById('af-channel-hint'),errorEl=document.getElementById('af-error'),resultsEl=document.getElementById('af-results');
  var channelMode=document.getElementById('af-mode-channel'),frequencyMode=document.getElementById('af-mode-frequency'),mode='channel';
  var bandKeys=Object.keys(bands);
  function validRangeLabel(b){return b.ranges.map(function(r){return r[0]+'–'+r[1];}).join(' and ');}
  function isValidChannel(b,n){return b.ranges.some(function(r){return n>=r[0]&&n<=r[1];});}
  function fmt(x){return Number(x).toFixed(1);}
  function clear(){errorEl.hidden=true;errorEl.textContent='';resultsEl.innerHTML='<div class="af-placeholder">Choose a GSM band and enter an ARFCN to see the frequency pair.</div>';}
  function setError(message){errorEl.textContent=message;errorEl.hidden=false;resultsEl.innerHTML='';}
  function updateHint(){var b=bands[bandEl.value];hintEl.textContent='Valid range: '+validRangeLabel(b)+' · Channel spacing: 200 kHz';}
  function render(b,n,ul){var dl=ul+b.duplex;resultsEl.innerHTML='<div class="af-result-top"><p class="af-result-title">'+(mode==='channel'?'Frequency pair for ARFCN '+n:'Matching ARFCN: '+n)+'</p><span class="af-band-tag">'+b.name+'</span></div><div class="af-result-grid"><div class="af-result-card"><small>Uplink · Mobile → Base station</small><strong>'+fmt(ul)+' <span>MHz</span></strong><span>Carrier center frequency</span></div><div class="af-result-card"><small>Downlink · Base station → Mobile</small><strong>'+fmt(dl)+' <span>MHz</span></strong><span>Carrier center frequency</span></div></div><div class="af-actions"><button type="button" class="af-copy" id="af-copy">Copy result</button></div>';
    document.getElementById('af-copy').addEventListener('click',function(){var text='GSM ARFCN Calculator — '+b.name+' ARFCN '+n+' | Uplink: '+fmt(ul)+' MHz | Downlink: '+fmt(dl)+' MHz';if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(function(){this.textContent='Copied';}.bind(this)).catch(function(){this.textContent='Copy failed';});}else{this.textContent='Copy not supported';}});
  }
  function convert(){clear();var b=bands[bandEl.value];if(mode==='channel'){
      if(channelEl.value==='')return;var n=Number(channelEl.value);
      if(!Number.isInteger(n)){setError('Enter a whole-number ARFCN.');return;}
      if(!isValidChannel(b,n)){setError('ARFCN '+n+' is outside the valid '+b.name+' range. Valid channel numbers: '+validRangeLabel(b)+'.');return;}
      render(b,n,b.ul(n));
    }else{
      if(freqEl.value==='')return;var target=Number(freqEl.value);
      if(!Number.isFinite(target)||target<=0){setError('Enter a valid frequency greater than 0 MHz.');return;}
      var best=null;
      b.ranges.forEach(function(r){for(var n=r[0];n<=r[1];n++){var ul=b.ul(n),dl=ul+b.duplex;[[ul,'uplink'],[dl,'downlink']].forEach(function(pair){var delta=Math.abs(target-pair[0]);if(!best||delta<best.delta)best={n:n,ul:ul,delta:delta,direction:pair[1]};});}});
      if(!best||best.delta>0.001){setError('No exact GSM channel center was found in '+b.name+'. Check the band and enter a carrier center frequency on the 200 kHz channel raster.');return;}
      render(b,best.n,best.ul);
      var intro=resultsEl.querySelector('.af-result-title');intro.textContent='ARFCN '+best.n+' · '+best.direction+' frequency match';
    }
  }
  function setMode(next){mode=next;var channel=next==='channel';channelMode.setAttribute('aria-pressed',String(channel));frequencyMode.setAttribute('aria-pressed',String(!channel));channelField.hidden=!channel;frequencyField.hidden=channel;clear();if(channel)channelEl.focus();else freqEl.focus();}
  bandEl.addEventListener('change',function(){updateHint();convert();});channelEl.addEventListener('input',convert);freqEl.addEventListener('input',convert);
  channelMode.addEventListener('click',function(){setMode('channel');});frequencyMode.addEventListener('click',function(){setMode('frequency');});
  document.querySelectorAll('.ec-arfcn .af-chip').forEach(function(button){button.addEventListener('click',function(){bandEl.value=button.dataset.band;updateHint();setMode('channel');channelEl.value=button.dataset.channel;convert();});});
  updateHint();
})();