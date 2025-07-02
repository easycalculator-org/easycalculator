// Stopwatch functionality
let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const exportBtn = document.getElementById('exportBtn');
const lapsTable = document.getElementById('lapsTable');
const fullscreenBtn = document.getElementById('fullscreenBtn');

function formatTime(ms) {
    let date = new Date(ms);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}
// Start Timer
function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;

        startBtn.disabled = true;
        lapBtn.disabled = false;
        stopBtn.disabled = false;
        resetBtn.disabled = true;
        exportBtn.disabled = true;
    }
}
//stop timer
function stopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;

        startBtn.disabled = false;
        lapBtn.disabled = true;
        stopBtn.disabled = true;
        resetBtn.disabled = false;
        exportBtn.disabled = false;
    }
}
// reset timer
function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    lapCount = 0;
    updateDisplay();
    lapsTable.innerHTML = '';

    exportBtn.disabled = true;
}

function recordLap() {
    if (isRunning) {
        lapCount++;
        const row = document.createElement('tr');
        row.innerHTML = `
             <td>${lapCount}</td>
             <td>${formatTime(elapsedTime)}</td>
             <td>${formatTime(elapsedTime)}</td>
         `;
        lapsTable.prepend(row);
    }
}
//export button
function exportLaps() {
    if (lapCount === 0) return;

    let csvContent = "Lap Number,Lap Time,Total Time\n";
    const rows = lapsTable.querySelectorAll('tr');

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        csvContent += `${cells[0].textContent},${cells[1].textContent},${cells[2].textContent}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `stopwatch_laps_${new Date().toISOString().slice(0, 10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
//fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        }
    }
}
// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
exportBtn.addEventListener('click', exportLaps);
fullscreenBtn.addEventListener('click', toggleFullscreen);