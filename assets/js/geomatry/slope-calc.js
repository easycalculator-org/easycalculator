
let chart;

function initChart(){

const ctx=document.getElementById("graph");

chart=new Chart(ctx,{
type:'scatter',
data:{
datasets:[
{
label:"Point A",
data:[],
backgroundColor:"#0d6efd",
pointRadius:7
},
{
label:"Point B",
data:[],
backgroundColor:"#dc3545",
pointRadius:7
},
{
label:"Line",
data:[],
type:'line',
borderColor:"#222",
borderDash:[6,4],
pointRadius:0
},
{
label:"Triangle",
data:[],
type:'line',
borderColor:"#198754",
borderDash:[4,4],
pointRadius:0
}
]
},
options:{
plugins:{legend:{display:false}},
scales:{
x:{type:'linear'},
y:{}
}
}
});

}

function calculateSlope(){

let x1=parseFloat(document.getElementById("x1").value)||0;
let y1=parseFloat(document.getElementById("y1").value)||0;
let x2=parseFloat(document.getElementById("x2").value)||0;
let y2=parseFloat(document.getElementById("y2").value)||0;

let run=x2-x1;
let rise=y2-y1;

document.getElementById("run").innerText=run;
document.getElementById("rise").innerText=rise;

let slope;

if(run===0){

slope="∞";

document.getElementById("equation").innerText="x = "+x1;

}else{

slope=(rise/run).toFixed(4);

document.getElementById("equation").innerText=
`y − ${y1} = ${slope}(x − ${x1})`;

}

document.getElementById("slopeResult").innerText=slope;

document.getElementById("steps").innerHTML=`
Step 1: Substitute values<br>
m = (${y2} − ${y1}) / (${x2} − ${x1})<br><br>

Step 2: Calculate differences<br>
m = (${rise}) / (${run})<br><br>

Step 3: Final slope<br>
m = ${slope}
`;

updateGraph(x1,y1,x2,y2);

}

function updateGraph(x1,y1,x2,y2){

let run=x2-x1;
let rise=y2-y1;

chart.data.datasets[0].data=[{x:x1,y:y1}];
chart.data.datasets[1].data=[{x:x2,y:y2}];

if(run!==0){

let m=rise/run;
let b=y1-m*x1;

chart.data.datasets[2].data=[
{x:x1-5,y:m*(x1-5)+b},
{x:x2+5,y:m*(x2+5)+b}
];

}

chart.data.datasets[3].data=[
{x:x1,y:y1},
{x:x2,y:y1},
{x:x2,y:y2}
];

chart.update();

}

function resetCalc(){

document.getElementById("x1").value=0;
document.getElementById("y1").value=0;
document.getElementById("x2").value=2;
document.getElementById("y2").value=2;

calculateSlope();

}

initChart();
calculateSlope();
