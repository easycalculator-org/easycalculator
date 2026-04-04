
// Toggle Mode
function setMode(mode){
let slider = document.getElementById("slider");

if(mode === 'rate'){
    document.getElementById("modeRate").style.display = "block";
    document.getElementById("modeDaily").style.display = "none";
    slider.style.left = "5px";

    document.getElementById("btnRate").classList.add("toggle-active");
    document.getElementById("btnDaily").classList.remove("toggle-active");
}
else{
    document.getElementById("modeRate").style.display = "none";
    document.getElementById("modeDaily").style.display = "block";
    slider.style.left = "50%";

    document.getElementById("btnDaily").classList.add("toggle-active");
    document.getElementById("btnRate").classList.remove("toggle-active");
}
}

// Calculate from Rate
function calcRate(){
let P = parseFloat(document.getElementById("principal1").value) || 0;
let R = parseFloat(document.getElementById("rate").value) || 0;

let daily = (P * R) / (100 * 365);

document.getElementById("dailyResult").innerText =  + daily.toFixed(2);
}

// Calculate from Daily
function calcDaily(){
let P = parseFloat(document.getElementById("principal2").value) || 0;
let daily = parseFloat(document.getElementById("dailyInput").value) || 0;

let rate = (daily * 365 * 100) / P;
let monthly = daily * 30;
let yearly = daily * 365;

document.getElementById("rateResult").innerText = rate.toFixed(2) + "%";
document.getElementById("monthlyResult").innerText =  + monthly.toFixed(2);
document.getElementById("yearlyResult").innerText =  + yearly.toFixed(2);
}