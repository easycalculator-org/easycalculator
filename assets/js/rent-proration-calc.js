
let startDate, endDate;

// Flatpickr (allow past + future)
flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    showMonths: 2,
    allowInput: true,

    onChange: function(selectedDates){
        if(selectedDates.length === 2){
            startDate = selectedDates[0];
            endDate = selectedDates[1];
            calc();
        }
    }
});

function calc(){

let rent = parseFloat(document.getElementById("rent").value);

// validation
if(!rent || rent <= 0 || !startDate || !endDate){
    document.getElementById("daily").innerText = "-";
    document.getElementById("total").innerText = "-";
    return;
}

// days in month (auto)
let daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth()+1, 0).getDate();

// occupied days
let diff = (endDate - startDate) / (1000*60*60*24) + 1;

// calculation
let daily = rent / daysInMonth;
let total = daily * diff;

// output
document.getElementById("daily").innerText = daily.toFixed(2);
document.getElementById("total").innerText = total.toFixed(2);
document.getElementById("daysUsed").innerText = diff + " days selected";

}

// auto update
document.getElementById("rent").addEventListener("input", calc);
