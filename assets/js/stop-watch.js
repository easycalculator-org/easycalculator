let stopwatchInterval;
let elapsedTime = 0;
let running = false;
let lapCount = 0;

function toggleStartPause() {
    if (running) {
        stopStopwatch();
        document.getElementById("startPauseBtn").innerText = "Start";
    } else {
        startStopwatch();
        document.getElementById("startPauseBtn").innerText = "Pause";
    }
}

function startStopwatch() {
    if (!running) {
        running = true;
        const startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateStopwatch();
        }, 10);
    }
}

function stopStopwatch() {
    running = false;
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    running = false;
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    lapCount = 0;
    updateStopwatch();
    document.getElementById("splitTable").innerHTML = "<tr><th>Lap</th><th>Time</th></tr>";
    document.getElementById("startPauseBtn").innerText = "Start";
}

function splitTime() {
    if (running) {
        lapCount++;
        const formattedTime = formatTime(elapsedTime);
        
        let table = document.getElementById("splitTable");
        let row = table.insertRow();
        row.insertCell(0).innerText = lapCount;
        row.insertCell(1).innerText = formattedTime;
    }
}

function updateStopwatch() {
    document.getElementById('hours').innerText = formatTimePart(Math.floor(elapsedTime / 3600000));
    document.getElementById('minutes').innerText = formatTimePart(Math.floor((elapsedTime % 3600000) / 60000));
    document.getElementById('seconds').innerText = formatTimePart(Math.floor((elapsedTime % 60000) / 1000));
    document.getElementById('centiseconds').innerText = formatTimePart(Math.floor((elapsedTime % 1000) / 10));
}

function formatTimePart(value) {
    return String(value).padStart(2, '0');
}

function formatTime(ms) {
    const h = formatTimePart(Math.floor(ms / 3600000));
    const m = formatTimePart(Math.floor((ms % 3600000) / 60000));
    const s = formatTimePart(Math.floor((ms % 60000) / 1000));
    const cs = formatTimePart(Math.floor((ms % 1000) / 10));
    return `${h}:${m}:${s}.${cs}`;
}

function exportCSV() {
    let csvContent = "Lap,Time\n";
    const rows = document.querySelectorAll("#splitTable tr");
    rows.forEach((row, index) => {
        if (index > 0) {
            let cols = row.querySelectorAll("td");
            if (cols.length > 0) {
                csvContent += cols[0].innerText + "," + cols[1].innerText + "\n";
            }
        }
    });
    let blob = new Blob([csvContent], { type: "text/csv" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "stopwatch_times.csv";
    a.click();
}