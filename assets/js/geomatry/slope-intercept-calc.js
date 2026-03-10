
let chart;

function calculate(){

let x1=parseFloat(document.getElementById("x1").value);
let y1=parseFloat(document.getElementById("y1").value);
let x2=parseFloat(document.getElementById("x2").value);
let y2=parseFloat(document.getElementById("y2").value);

if(x1==x2){
alert("Vertical line detected");
return;
}

let dx=x2-x1;
let dy=y2-y1;

let m=dy/dx;
let b=y1-m*x1;

let grade=m*100;
let angle=Math.atan(m)*(180/Math.PI);
let distance=Math.sqrt(dx*dx+dy*dy);

document.getElementById("dx").innerText=dx.toFixed(2);
document.getElementById("dy").innerText=dy.toFixed(2);
document.getElementById("grade").innerText=grade.toFixed(2)+" %";
document.getElementById("angle").innerText=angle.toFixed(2)+"°";
document.getElementById("distance").innerText=distance.toFixed(2);

document.getElementById("slope").innerText=m.toFixed(3);
document.getElementById("intercept").innerText=b.toFixed(3);

document.getElementById("stepX1").innerText=x1;
document.getElementById("stepY1").innerText=y1;
document.getElementById("stepX2").innerText=x2;
document.getElementById("stepY2").innerText=y2;
document.getElementById("stepSlope").innerText=m.toFixed(3);
document.getElementById("stepIntercept").innerText=b.toFixed(3);

drawGraph(m,b,x1,y1,x2,y2);

}

function drawGraph(m,b,x1,y1,x2,y2){

let minX=Math.min(x1,x2)-5;
let maxX=Math.max(x1,x2)+5;

let lineData=[];

for(let x=minX;x<=maxX;x+=0.5){
lineData.push({x:x,y:m*x+b});
}

if(chart) chart.destroy();

chart=new Chart(document.getElementById("graph"),{

type:"scatter",

data:{
datasets:[
{
data:lineData,
showLine:true,
borderColor:"#0d6efd",
borderWidth:3,
pointRadius:0
},
{
data:[
{x:x1,y:y1},
{x:x2,y:y2}
],
backgroundColor:"#dc3545",
pointRadius:6
}
]
},

options:{
plugins:{legend:{display:false}},
scales:{
x:{type:"linear",position:"bottom"},
y:{type:"linear"}
}
}

});

}

function setExample(x1,y1,x2,y2){

document.getElementById("x1").value=x1;
document.getElementById("y1").value=y1;
document.getElementById("x2").value=x2;
document.getElementById("y2").value=y2;

calculate();

}

function copyEq(){

let eq="y = "+document.getElementById("slope").innerText+"x + "+document.getElementById("intercept").innerText;

navigator.clipboard.writeText(eq);

alert("Equation copied!");

}

document.querySelectorAll("#x1,#y1,#x2,#y2")
.forEach(el => el.addEventListener("input", calculate));

calculate();