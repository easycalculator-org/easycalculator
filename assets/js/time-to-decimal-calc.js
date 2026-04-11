// DOM Elements
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const totalMinutesSpan = document.getElementById('totalMinutesDisplay');
const totalSecondsSpan = document.getElementById('totalSecondsDisplay');
const decimalHoursSpan = document.getElementById('decimalHoursDisplay');
const timeHMSpan = document.getElementById('timeHMSDisplay');

// Helper: get numeric values (default 0)
function getTimeValues() {
  let h = parseFloat(hoursInput.value);
  let m = parseFloat(minutesInput.value);
  let s = parseFloat(secondsInput.value);
  if (isNaN(h)) h = 0;
  if (isNaN(m)) m = 0;
  if (isNaN(s)) s = 0;
  return { hours: h, minutes: m, seconds: s };
}

// Core update function: total minutes, total seconds, decimal hours, HH:MM:SS
function updateAllCalculations() {
  let { hours, minutes, seconds } = getTimeValues();
  
  // Total minutes = hours*60 + minutes + seconds/60
  let totalMinutes = (hours * 60) + minutes + (seconds / 60);
  // Total seconds = hours*3600 + minutes*60 + seconds
  let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  // Decimal hours
  let decimalHours = hours + (minutes / 60) + (seconds / 3600);
  
  // Format HH:MM:SS (with integer parts for display)
  let intH = Math.floor(Math.abs(hours));
  let intM = Math.floor(Math.abs(minutes));
  let intS = Math.floor(Math.abs(seconds));
  let sign = (hours < 0 || minutes < 0 || seconds < 0) ? '-' : '';
  let timeString = `${sign}${String(intH).padStart(2,'0')}:${String(intM).padStart(2,'0')}:${String(intS).padStart(2,'0')}`;
  
  // Update UI
  totalMinutesSpan.innerText = totalMinutes.toFixed(4);
  totalSecondsSpan.innerText = totalSeconds.toFixed(2);
  decimalHoursSpan.innerText = decimalHours.toFixed(6);
  timeHMSpan.innerText = timeString;
}

// Event listeners for live update
function bindLiveUpdates() {
  hoursInput.addEventListener('input', updateAllCalculations);
  minutesInput.addEventListener('input', updateAllCalculations);
  secondsInput.addEventListener('input', updateAllCalculations);
}

// Reset time fields to zero
function resetTimeFields() {
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  updateAllCalculations();
}

// TAB 2: Seconds to Time converter
const secondsToConvertInput = document.getElementById('secondsToConvert');
const convertedTimeSpan = document.getElementById('convertedTimeDisplay');
const convHoursSpan = document.getElementById('convHours');
const convMinsSpan = document.getElementById('convMins');
const convSecsSpan = document.getElementById('convSecs');

function updateSecondsToTime() {
  let totalSec = parseFloat(secondsToConvertInput.value);
  if (isNaN(totalSec)) totalSec = 0;
  
  let isNegative = totalSec < 0;
  let absSec = Math.abs(totalSec);
  let hours = Math.floor(absSec / 3600);
  let minutes = Math.floor((absSec % 3600) / 60);
  let seconds = Math.floor(absSec % 60);
  
  if (isNegative) {
    convertedTimeSpan.innerText = `-${hours}h ${minutes}m ${seconds}s`;
    convHoursSpan.innerText = `-${hours}`;
    convMinsSpan.innerText = minutes;
    convSecsSpan.innerText = seconds;
  } else {
    convertedTimeSpan.innerText = `${hours}h ${minutes}m ${seconds}s`;
    convHoursSpan.innerText = hours;
    convMinsSpan.innerText = minutes;
    convSecsSpan.innerText = seconds;
  }
}

secondsToConvertInput.addEventListener('input', updateSecondsToTime);

// ========== ANALOG CLOCK DRAWING FUNCTION (Canvas) ==========
const canvas = document.getElementById('analogClockCanvas');
const ctx = canvas.getContext('2d');

function drawAnalogClock(hours, minutes, seconds) {
  const size = 140;
  const radius = size / 2;
  canvas.width = size;
  canvas.height = size;
  
  // Clear & draw white background with subtle border
  ctx.beginPath();
  ctx.arc(radius, radius, radius - 2, 0, 2 * Math.PI);
  ctx.fillStyle = '#fef9e8';
  ctx.fill();
  ctx.strokeStyle = '#d4af37';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Draw hour markers
  for (let i = 1; i <= 12; i++) {
    let angle = (i * 30 - 90) * Math.PI / 180;
    let x1 = radius + (radius - 12) * Math.cos(angle);
    let y1 = radius + (radius - 12) * Math.sin(angle);
    let x2 = radius + (radius - 5) * Math.cos(angle);
    let y2 = radius + (radius - 5) * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#2c3e4e';
    ctx.stroke();
  }
  
  // Draw minute markers (60 small ticks)
  for (let i = 0; i < 60; i++) {
    let angle = (i * 6 - 90) * Math.PI / 180;
    let isMajor = (i % 5 === 0);
    let inner = isMajor ? radius - 12 : radius - 7;
    let outer = radius - 4;
    let x1 = radius + inner * Math.cos(angle);
    let y1 = radius + inner * Math.sin(angle);
    let x2 = radius + outer * Math.cos(angle);
    let y2 = radius + outer * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = isMajor ? 1.5 : 1;
    ctx.strokeStyle = '#5a6e7c';
    ctx.stroke();
  }
  
  // Draw numbers (1-12)
  ctx.font = `bold ${size * 0.08}px "Segoe UI", "Inter"`;
  ctx.fillStyle = '#1e2b3c';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 1; i <= 12; i++) {
    let angle = (i * 30 - 90) * Math.PI / 180;
    let numRadius = radius - 22;
    let x = radius + numRadius * Math.cos(angle);
    let y = radius + numRadius * Math.sin(angle);
    ctx.fillText(i.toString(), x, y);
  }
  
  // Draw Hour hand
  let hourAngle = ((hours % 12) * 30 + minutes * 0.5 + seconds * (0.5/60) - 90) * Math.PI / 180;
  let hourLen = radius - 38;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + hourLen * Math.cos(hourAngle), radius + hourLen * Math.sin(hourAngle));
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#1e4660';
  ctx.stroke();
  
  // Draw Minute hand
  let minuteAngle = (minutes * 6 + seconds * 0.1 - 90) * Math.PI / 180;
  let minuteLen = radius - 28;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + minuteLen * Math.cos(minuteAngle), radius + minuteLen * Math.sin(minuteAngle));
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#2c6e9e';
  ctx.stroke();
  
  // Draw Second hand (red)
  let secondAngle = (seconds * 6 - 90) * Math.PI / 180;
  let secondLen = radius - 18;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + secondLen * Math.cos(secondAngle), radius + secondLen * Math.sin(secondAngle));
  ctx.lineWidth = 1.8;
  ctx.strokeStyle = '#e34234';
  ctx.stroke();
  
  // Center dot
  ctx.beginPath();
  ctx.arc(radius, radius, 4, 0, 2 * Math.PI);
  ctx.fillStyle = '#d4af37';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(radius, radius, 2, 0, 2 * Math.PI);
  ctx.fillStyle = '#1e2b3c';
  ctx.fill();
}

// TAB 3: Live Clock + analog drawing + total minutes/seconds
const liveTimeSpan = document.getElementById('liveTimeDisplay');
const liveDecimalSpan = document.getElementById('liveDecimalDisplay');
const liveTotalMinutesSpan = document.getElementById('liveTotalMinutes');
const liveTotalSecondsSpan = document.getElementById('liveTotalSeconds');

function updateLiveClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  
  // Update digital display
  liveTimeSpan.innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  
  // Decimal hours
  let decimalHours = h + (m / 60) + (s / 3600);
  liveDecimalSpan.innerText = decimalHours.toFixed(6);
  
  // Total minutes from midnight
  let totalMinutes = (h * 60) + m + (s / 60);
  let totalSeconds = (h * 3600) + (m * 60) + s;
  
  liveTotalMinutesSpan.innerText = totalMinutes.toFixed(2);
  liveTotalSecondsSpan.innerText = totalSeconds;
  
  // Draw analog clock with current time
  drawAnalogClock(h, m, s);
}

// Copy all results (Tab 1 results + some live info)
function copyAllResults() {
  let { hours, minutes, seconds } = getTimeValues();
  let totalMinutes = totalMinutesSpan.innerText;
  let totalSeconds = totalSecondsSpan.innerText;
  let decimalHours = decimalHoursSpan.innerText;
  let timeHMS = timeHMSpan.innerText;
  
  // get current live time from analog tab (just for extra)
  const now = new Date();
  let liveTimeStr = now.toLocaleTimeString();
  
  let copyText = `📊 TIME CONVERSION RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━
Input: ${hours} hours, ${minutes} minutes, ${seconds} seconds
➤ Total Minutes: ${totalMinutes} min
➤ Total Seconds: ${totalSeconds} sec
➤ Decimal Hours: ${decimalHours}
➤ Time Format: ${timeHMS}
━━━━━━━━━━━━━━━━━━━━━━━━━
🕒 Live System Time: ${liveTimeStr}
✅ Converted by easycalculator.org`;
  
  navigator.clipboard.writeText(copyText).then(() => {
    const copyBtn = document.getElementById('copyAllResultsBtn');
    const originalHtml = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check me-2"></i>Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = originalHtml;
    }, 1500);
  }).catch(() => {
    alert('Press Ctrl+C to copy manually');
  });
}

// Event listeners for buttons
document.getElementById('convertNowBtn').addEventListener('click', () => {
  updateAllCalculations();
  const btn = document.getElementById('convertNowBtn');
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
});

document.getElementById('resetTimeBtn').addEventListener('click', resetTimeFields);
document.getElementById('copyAllResultsBtn').addEventListener('click', copyAllResults);

// Initialize live clock with interval (every second)
setInterval(updateLiveClock, 1000);

// Also initial draw for analog before first interval
updateLiveClock();

// Initialize seconds converter example
updateSecondsToTime();

// Bind live updates for time inputs
bindLiveUpdates();

// Initial calculation
updateAllCalculations();

// Ensure Bootstrap tabs work correctly
if (typeof bootstrap !== 'undefined') {
  // Bootstrap tabs are initialized automatically
}
