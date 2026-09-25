  
(function(){
  'use strict';
  var root=document.getElementById('cps-tool');
  if(!root)return;
  var startBtn=root.querySelector('#cps-start');
  var target=root.querySelector('#cps-target');
  var targetMain=root.querySelector('#cps-target-main');
  var targetHelp=root.querySelector('#cps-target-help');
  var timeEl=root.querySelector('#cps-time');
  var clicksEl=root.querySelector('#cps-clicks');
  var scoreEl=root.querySelector('#cps-score');
  var custom=root.querySelector('#cps-custom-seconds');
  var durationBtns=[].slice.call(root.querySelectorAll('.cps-duration'));
  var historyBody=root.querySelector('#cps-history');
  var empty=root.querySelector('#cps-empty');
  var clearBtn=root.querySelector('#cps-clear');
  var storageKey='easycalculator-cps-results-v1';
  var selectedDuration=5, running=false, startedAt=0, timerId=null, clickCount=0;
  var state={history:[],totalClicks:0,totalTests:0};

  function readState(){
    try{
      var saved=JSON.parse(localStorage.getItem(storageKey)||'null');
      if(saved&&Array.isArray(saved.history)){state.history=saved.history.slice(0,10);state.totalClicks=Number(saved.totalClicks)||0;state.totalTests=Number(saved.totalTests)||0;}
    }catch(e){state={history:[],totalClicks:0,totalTests:0};}
  }
  function saveState(){try{localStorage.setItem(storageKey,JSON.stringify(state));}catch(e){}}
  function setDuration(value){
    selectedDuration=value;
    custom.value=String(value);
    durationBtns.forEach(function(btn){btn.setAttribute('aria-pressed',Number(btn.dataset.seconds)===value?'true':'false');});
    if(!running){timeEl.textContent=value.toFixed(1)+' s';clicksEl.textContent='0';scoreEl.textContent='0.00';}
  }
  function validCustom(){
    var value=Number(custom.value);
    if(!Number.isInteger(value)||value<1||value>120){custom.setCustomValidity('Enter a whole number from 1 to 120 seconds.');custom.reportValidity();return null;}
    custom.setCustomValidity('');return value;
  }
  durationBtns.forEach(function(btn){btn.addEventListener('click',function(){if(running)return;setDuration(Number(btn.dataset.seconds));});});
  custom.addEventListener('change',function(){if(running)return;var value=validCustom();if(value!==null)setDuration(value);});
  custom.addEventListener('input',function(){if(!running){durationBtns.forEach(function(btn){btn.setAttribute('aria-pressed','false');});}});

  function startTest(){
    if(running)return;
    var duration=validCustom();
    if(duration===null)return;
    setDuration(duration);clickCount=0;running=true;startedAt=performance.now();
    target.classList.add('is-running');target.classList.remove('is-done');
    targetMain.textContent='Click now!';targetHelp.textContent='Keep clicking until the timer reaches zero.';
    target.setAttribute('aria-label','Click as fast as you can. Test in progress.');
    startBtn.disabled=true;startBtn.textContent='Test in progress';
    tick();
  }
  function tick(){
    if(!running)return;
    var elapsed=(performance.now()-startedAt)/1000;
    var remaining=Math.max(0,selectedDuration-elapsed);
    var cps=elapsed>0?clickCount/elapsed:0;
    timeEl.textContent=remaining.toFixed(1)+' s';clicksEl.textContent=String(clickCount);scoreEl.textContent=cps.toFixed(2);
    if(remaining<=0){finishTest();return;}
    timerId=window.setTimeout(tick,50);
  }
  function finishTest(){
    running=false;if(timerId)window.clearTimeout(timerId);
    var score=clickCount/selectedDuration;
    timeEl.textContent='0.0 s';clicksEl.textContent=String(clickCount);scoreEl.textContent=score.toFixed(2);
    target.classList.remove('is-running');target.classList.add('is-done');
    targetMain.textContent='Time is up! Your score: '+score.toFixed(2)+' CPS';targetHelp.textContent='Choose a duration and start another test whenever you are ready.';
    target.setAttribute('aria-label','Test complete. Your score is '+score.toFixed(2)+' clicks per second.');
    startBtn.disabled=false;startBtn.textContent='Try again';
    var now=new Date();
    state.history.unshift({duration:selectedDuration,clicks:clickCount,cps:score,date:now.toISOString()});
    state.history=state.history.slice(0,10);state.totalClicks+=clickCount;state.totalTests+=1;saveState();renderHistory();
  }
  function registerClick(){if(!running)return;clickCount+=1;clicksEl.textContent=String(clickCount);var elapsed=Math.max((performance.now()-startedAt)/1000,.001);scoreEl.textContent=(clickCount/elapsed).toFixed(2);}
  startBtn.addEventListener('click',startTest);
  target.addEventListener('click',registerClick);
  clearBtn.addEventListener('click',function(){
    if(!state.history.length)return;
    if(!window.confirm('Clear the saved CPS test results on this device?'))return;
    state={history:[],totalClicks:0,totalTests:0};saveState();renderHistory();
  });
  function renderHistory(){
    historyBody.textContent='';empty.hidden=state.history.length>0;
    state.history.forEach(function(item,index){
      var tr=document.createElement('tr');
      [String(index+1),item.duration+' s',String(item.clicks),Number(item.cps).toFixed(2),new Date(item.date).toLocaleDateString()].forEach(function(value){var td=document.createElement('td');td.textContent=value;tr.appendChild(td);});
      historyBody.appendChild(tr);
    });
  }
  readState();renderHistory();setDuration(selectedDuration);
})();