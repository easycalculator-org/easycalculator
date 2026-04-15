---
layout: default
title:  Pomodoro Timer Online – 25 Minute Focus Timer with Breaks | EasyCalculator
permalink: /pomodoro-timer
description: "Start your Pomodoro Timer now! Stay focused with 25-minute work sessions and smart breaks. Free, easy, and perfect for study or work"
image: "/assets/images/og/pomodoro-timer.jpg"
last_modified_at: 2026-04-15
---

<style>
 .timer-card{background:#fffffff0;backdrop-filter:blur(2px);border-radius:2.5rem;border:1px solid #fffff0b3;box-shadow:0 20px 35px -12px #00000014 0 1px 2px #00000005;transition:all .2s ease}.display-time{font-size:5.5rem;font-weight:600;letter-spacing:2px;color:#1a1a1a;background:linear-gradient(145deg,#f8fafc,#eef2f7);border-radius:2rem;min-width:320px;text-align:center;padding:1rem 2rem;display:inline-block;box-shadow:0 10px 25px #0000000d inset 0 1px 0 #fff9;border:1px solid #e5e7eb}@media (min-width: 576px){.display-time{font-size:6rem}}.btn-soft{border-radius:60px;padding:.6rem 1.5rem;font-weight:500;transition:.2s;border:none}.btn-primary-soft{background-color:#eef2ff;color:#2c3e66;box-shadow:0 1px 2px #00000005}.btn-primary-soft:hover{background-color:#e0e7ff;color:#1f2b48;transform:scale(0.97)}.btn-success-soft{background-color:#e0f2e9;color:#166534}.btn-success-soft:hover{background-color:#cceae0;transform:scale(0.97)}.btn-warning-soft{background-color:#fff1e0;color:#b45309}.btn-warning-soft:hover{background-color:#ffe4cc;transform:scale(0.97)}.btn-outline-muted{background:transparent;border:1px solid #cbd5e1;color:#334155}.btn-outline-muted:hover{background:#f1f5f9;border-color:#94a3b8}.phase-badge{background:#eef2ff;border-radius:40px;padding:.35rem 1rem;font-size:.85rem;font-weight:500;color:#2c3e66;display:inline-flex;align-items:center;gap:.5rem}.progress-ring-container{width:220px;margin:0 auto}.ring-bg{stroke:#e2e8f0}.ring-fill{transition:stroke-dashoffset .2s linear}.session-counter{background:#ffffffd9;border-radius:60px;padding:.3rem 1rem;font-size:.9rem;color:#2d3e50;font-weight:500;backdrop-filter:blur(2px)}.floating-mini-timer{position:fixed;bottom:24px;right:24px;background:#1e293bf0;backdrop-filter:blur(12px);color:#fff;padding:10px 22px;border-radius:60px;font-size:1.2rem;font-weight:600;font-family:'Inter',monospace;letter-spacing:1px;z-index:9999;box-shadow:0 10px 25px -5px #0003 0 0 0 1px #ffffff26;transition:opacity .25s ease,transform .2s ease;pointer-events:none;opacity:0;visibility:hidden;transform:scale(0.95);white-space:nowrap;display:flex;align-items:center;gap:8px}.floating-mini-timer.show{opacity:1;visibility:visible;transform:scale(1)}.floating-mini-timer i{font-size:1.2rem;filter:drop-shadow(0 1px 1px #0003)}.floating-mini-timer.pulse-bg{animation:gentlePulse 1.8s infinite}@keyframes gentlePulse{0%{box-shadow:0 10px 25px -5px #0003 0 0 0 1px #ffffff26}50%{box-shadow:0 12px 28px -5px #3b82f64d 0 0 0 2px #ffffc84d}100%{box-shadow:0 10px 25px -5px #0003 0 0 0 1px #ffffff26}}button:focus-visible{outline:2px solid #84a7a1;outline-offset:2px}footer{font-size:.75rem}.status-text{background:#f1f5f9b3;border-radius:40px;padding:.2rem .9rem}
 </style>

  
<div class="container d-flex justify-content-center align-items-center" style="max-width: 720px;">
  <div class="timer-card shadow p-4 p-md-5 w-100">
    <!-- header  -->
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-3">
      <div class="phase-badge"><i class="fas fa-hourglass-half"></i><span id="phaseLabel">Focus session</span></div>
      <div class="session-counter"><i class="fa-solid fa-circle-check"></i>Completed cycles: <strong id="cycleCount">0</strong></div>
    </div>
    <!-- main timer  -->
    <div class="text-center my-3">
      <div class="display-time display-1 p-4 fw-semibold" id="timerDisplay"> 25:00 </div>
    </div>
    <!-- circular -->
    <div class="progress-ring-container text-center mb-4">

<svg width="200" height="200" viewBox="0 0 200 200" style="transform: rotate(-90deg);">

  <circle cx="100" cy="100" r="88" fill="none" stroke="#e2e8f0" stroke-width="8" class="ring-bg"></circle>
        <circle id="progressRing" cx="100" cy="100" r="88" fill="none" stroke="#5b8c5a" stroke-width="8" stroke-linecap="round"
          stroke-dasharray="552.92" stroke-dashoffset="0" class="ring-fill"></circle>
      </svg>
      <div class="mt-2 small text-muted status-text d-inline-flex px-3 py-1"><i class="fas fa-history me-1"></i><span id="statusMessage">Ready to focus 📚</span></div>
    </div>
    <!-- control buttons group -->
    <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
      <button id="startBtn" class="btn btn-success-soft btn-soft px-4"><i class="fas fa-play me-1"></i>Start </button>
      <button id="pauseBtn" class="btn btn-warning-soft btn-soft px-4"><i class="fas fa-pause me-1"></i> Pause </button>
      <button id="resetBtn" class="btn btn-outline-muted btn-soft px-4"> <i class="fas fa-sync-alt me-1"></i>Reset  </button>
    </div>
    <!-- session type selector (student friendly) -->
    <div class="d-flex justify-content-center gap-3 mt-2 mb-3 flex-wrap">
      <button id="focusModeBtn" class="btn btn-sm rounded-pill px-3" style="background:#eef2ff; color:#2c3e66;"><i class="fas fa-book"></i> Study (25 min) </button>
      <button id="shortBreakBtn" class="btn btn-sm rounded-pill px-3" style="background:#fef9e3; color:#8a6e3d;"><i class="fas fa-mug-hot"></i> Short break (5 min)</button>
      <button id="longBreakBtn" class="btn btn-sm rounded-pill px-3" style="background:#ffe6e6; color:#aa4a4a;"><i class="fa-solid fa-moon"></i> Long break (15 min) </button>
    </div>
    <hr class="my-3 opacity-25">
  </div>
</div>

<!-- ========== FLOATING ====== -->
<div id="floatingMiniTimer" class="floating-mini-timer">
  <i class="fa-solid fa-stopwatch"></i>
  <span id="miniTimeLabel">25:00</span>
  <span style="font-size:0.8rem; opacity:0.8;" id="miniPhaseIcon"></span>
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
   
</div>

<script src="{{ '/assets/js/pomodoro-timer.js' | relative_url }}"></script>

