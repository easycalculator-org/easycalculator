 // ---------- Pomodoro timer ----------
  const FOCUS_TIME = 25 * 60;      // 25 min
  const SHORT_BREAK = 5 * 60;      // 5 min
  const LONG_BREAK = 15 * 60;      // 15 min

  let currentState = "focus";      // 'focus', 'shortBreak', 'longBreak'
  let timeLeft = FOCUS_TIME;       
  let timerInterval = null;
  let isRunning = false;
  let completedCycles = 0;         

  // DOM elements (main UI)
  const timerDisplayEl = document.getElementById("timerDisplay");
  const phaseLabelEl = document.getElementById("phaseLabel");
  const cycleCountEl = document.getElementById("cycleCount");
  const statusMsgEl = document.getElementById("statusMessage");
  const progressRing = document.getElementById("progressRing");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const focusModeBtn = document.getElementById("focusModeBtn");
  const shortBreakBtn = document.getElementById("shortBreakBtn");
  const longBreakBtn = document.getElementById("longBreakBtn");
  
  // Mini floating timer elements
  const floatingTimerDiv = document.getElementById("floatingMiniTimer");
  const miniTimeLabel = document.getElementById("miniTimeLabel");
  const miniPhaseIcon = document.getElementById("miniPhaseIcon");

  // Helper: get total time for current state (in seconds)
  function getTotalTimeForCurrentState() {
    if (currentState === "focus") return FOCUS_TIME;
    if (currentState === "shortBreak") return SHORT_BREAK;
    return LONG_BREAK;
  }

  // Update main display, progress ring AND sync mini timer label & icon
  function updateDisplayAndMini() {
    // format main timer
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerDisplayEl.innerText = formatted;
    
    // update floating mini timer content (always sync pending time)
    if (miniTimeLabel) miniTimeLabel.innerText = formatted;
    
    // update mini phase icon: show emoji based on state
    if (miniPhaseIcon) {
      if (currentState === "focus") miniPhaseIcon.innerHTML = ' 📖';
      else if (currentState === "shortBreak") miniPhaseIcon.innerHTML = ' ☕';
      else miniPhaseIcon.innerHTML = ' 🌙';
    }
    
    // update ring progress
    let totalTime = getTotalTimeForCurrentState();
    let progressFraction = (totalTime - timeLeft) / totalTime;
    let circumference = 552.92;
    let dashOffset = circumference * (1 - Math.min(Math.max(progressFraction, 0), 1));
    progressRing.style.strokeDashoffset = dashOffset;
  }

  // update phase label, status message, cycle counter and ring color
  function updatePhaseMetadata() {
    if (currentState === "focus") {
      phaseLabelEl.innerHTML = '<i class="bi bi-book-half"></i> Focus · Study session';
      statusMsgEl.innerHTML = '📖 Stay concentrated! Pomodoro in progress';
      progressRing.setAttribute("stroke", "#5b8c5a");
    } else if (currentState === "shortBreak") {
      phaseLabelEl.innerHTML = '<i class="bi bi-emoji-smile"></i> Short break · relax';
      statusMsgEl.innerHTML = '☕ Stretch, breathe, grab water';
      progressRing.setAttribute("stroke", "#d9a13b");
    } else {
      phaseLabelEl.innerHTML = '<i class="bi bi-stars"></i> Long break · recharge';
      statusMsgEl.innerHTML = '🌿 Well deserved rest, clear your mind';
      progressRing.setAttribute("stroke", "#6b8c9e");
    }
    cycleCountEl.innerText = completedCycles;
  }

  // stop ticking interval safely
  function stopTimerInterval() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // start the countdown interval (requires isRunning = true)
  function startTimerInterval() {
    if (timerInterval) stopTimerInterval();
    timerInterval = setInterval(() => {
      if (!isRunning) return;
      if (timeLeft <= 0) {
        // session complete
        handleSessionComplete();
      } else {
        timeLeft--;
        updateDisplayAndMini();
        // Additionally, if floating timer is visible, we already updated label
        // and we also update the mini timer pulse effect if needed.
        applyFloatingPulseEffect();
      }
    }, 1000);
  }

  // apply gentle 
  function applyFloatingPulseEffect() {
    if (!floatingTimerDiv) return;
    if (isRunning && document.hidden) {
      if (!floatingTimerDiv.classList.contains("pulse-bg")) {
        floatingTimerDiv.classList.add("pulse-bg");
      }
    } else {
      if (floatingTimerDiv.classList.contains("pulse-bg")) {
        floatingTimerDiv.classList.remove("pulse-bg");
      }
    }
  }

  // session complete handler (transition between focus/breaks)
  function handleSessionComplete() {
    stopTimerInterval();
    isRunning = false;
    
    let sessionName = (currentState === "focus") ? "Focus session" : (currentState === "shortBreak" ? "Short break" : "Long break");
    
    // show status update
    statusMsgEl.innerHTML = `✨ ${sessionName} completed! ✨`;
    
    // Handle cycles: only increment when a focus session finishes
    if (currentState === "focus") {
      completedCycles++;
      cycleCountEl.innerText = completedCycles;
      // after focus, automatically switch to short break (timer stops, not auto-start)
      setNewTimerStateWithoutAutoStart("shortBreak", SHORT_BREAK);
      statusMsgEl.innerHTML = "🎉 Great work! Take a short break 🍃 (press Start)";
    } 
    else if (currentState === "shortBreak") {
      // after short break -> back to focus
      setNewTimerStateWithoutAutoStart("focus", FOCUS_TIME);
      statusMsgEl.innerHTML = "⏳ Break ended. Ready to focus again? Press Start.";
    } 
    else if (currentState === "longBreak") {
      // after long break -> focus
      setNewTimerStateWithoutAutoStart("focus", FOCUS_TIME);
      statusMsgEl.innerHTML = "🌙 Long break finished! Ready for new study round.";
    }
    
    updateDisplayAndMini();
    updatePhaseMetadata();

    // request notification if permitted
    if (Notification.permission === "granted") {
      new Notification("Focus Flow Timer", { body: `${sessionName} complete! Time to ${currentState === "focus" ? "study" : "rest"}.`, silent: false });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
    // update floating timer visibility status (still shows correct remaining)
    updateFloatingTimerVisibility();
    applyFloatingPulseEffect();
  }

  // change state and time without starting timer (preserve isRunning = false)
  function setNewTimerStateWithoutAutoStart(newState, newTimeSeconds) {
    stopTimerInterval();
    currentState = newState;
    timeLeft = newTimeSeconds;
    isRunning = false;
    updateDisplayAndMini();
    updatePhaseMetadata();
    // reset ring progress to full
    let total = getTotalTimeForCurrentState();
    let circumference = 552.92;
    let dashOffset = circumference; // full circle
    progressRing.style.strokeDashoffset = dashOffset;
  }

  // manual mode switch (study / short break / long break)
  function setMode(mode) {
    if (timerInterval) stopTimerInterval();
    isRunning = false;
    if (mode === "focus") {
      currentState = "focus";
      timeLeft = FOCUS_TIME;
    } else if (mode === "shortBreak") {
      currentState = "shortBreak";
      timeLeft = SHORT_BREAK;
    } else if (mode === "longBreak") {
      currentState = "longBreak";
      timeLeft = LONG_BREAK;
    }
    updateDisplayAndMini();
    updatePhaseMetadata();
    // reset progress ring to full (dashoffset full)
    let total = getTotalTimeForCurrentState();
    let circumference = 552.92;
    progressRing.style.strokeDashoffset = circumference;
    statusMsgEl.innerHTML = `Mode: ${currentState === "focus" ? "Study (25 min)" : (currentState === "shortBreak" ? "Short Break (5 min)" : "Long Break (15 min)")}. Press Start.`;
    updateFloatingTimerVisibility();
  }

  // start timer
  function startTimer() {
    if (isRunning) return;
    if (timeLeft <= 0) {
      // edge: reset to default duration for current mode
      timeLeft = getTotalTimeForCurrentState();
      updateDisplayAndMini();
    }
    isRunning = true;
    startTimerInterval();
    statusMsgEl.innerHTML = (currentState === "focus") ? "🔔 Focusing ... keep going!" : "⌛ Break in progress ... relax!";
    applyFloatingPulseEffect();
    updateFloatingTimerVisibility(); // refresh mini timer style
  }

  function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    stopTimerInterval();
    statusMsgEl.innerHTML = "⏸ Timer paused. Press Start to continue.";
    applyFloatingPulseEffect();
  }

  function resetTimer() {
    stopTimerInterval();
    isRunning = false;
    let defaultDuration = getTotalTimeForCurrentState();
    timeLeft = defaultDuration;
    updateDisplayAndMini();
    updatePhaseMetadata();
    let circumference = 552.92;
    progressRing.style.strokeDashoffset = circumference;
    statusMsgEl.innerHTML = "Timer reset · ready to focus";
    applyFloatingPulseEffect();
    updateFloatingTimerVisibility();
  }

  

function updateFloatingTimerVisibility() {
  if (!floatingTimerDiv) return;

  const shouldShow = document.hidden || !document.hasFocus();

  if (shouldShow) {
    floatingTimerDiv.classList.add("show");
  } else {
    floatingTimerDiv.classList.remove("show");
    floatingTimerDiv.classList.remove("pulse-bg");
  }
}

  
  // visibility change listener (tab switch, minimize, etc.)
  document.addEventListener("visibilitychange", () => {
    updateFloatingTimerVisibility();
    // if timer is running and page becomes hidden, make sure we also sync content
    if (document.hidden) {
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      miniTimeLabel.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      if (miniPhaseIcon) {
        if (currentState === "focus") miniPhaseIcon.innerHTML = ' 📘';
        else if (currentState === "shortBreak") miniPhaseIcon.innerHTML = ' ☕';
        else miniPhaseIcon.innerHTML = ' 🌿';
      }
      applyFloatingPulseEffect();
    } else {
      // when tab becomes active again, ensure floating hidden and remove pulse
      if (floatingTimerDiv) floatingTimerDiv.classList.remove("pulse-bg");
    }
  });
  
  // also on window blur (extra safe)
  window.addEventListener("blur", () => {
    if (document.hidden) updateFloatingTimerVisibility();
  });
  window.addEventListener("focus", () => {
    updateFloatingTimerVisibility();
    if (floatingTimerDiv) floatingTimerDiv.classList.remove("pulse-bg");
  });
  
  // initial call to set ring and sync
  function init() {
    currentState = "focus";
    timeLeft = FOCUS_TIME;
    completedCycles = 0;
    isRunning = false;
    updateDisplayAndMini();
    updatePhaseMetadata();
    const circumference = 552.92;
    progressRing.style.strokeDashoffset = circumference;
    cycleCountEl.innerText = "0";
    statusMsgEl.innerHTML = "📘 Ready for Pomodoro. Start studying!";
    // ensure mini timer hidden initially
    floatingTimerDiv.classList.remove("show", "pulse-bg");
    // preload 
  }
  
  // attach event listeners
  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
  focusModeBtn.addEventListener("click", () => setMode("focus"));
  shortBreakBtn.addEventListener("click", () => setMode("shortBreak"));
  longBreakBtn.addEventListener("click", () => setMode("longBreak"));
  
  // call init
  init();