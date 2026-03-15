  
(function () {

const inputA = document.getElementById('legA');
const inputB = document.getElementById('legB');

const cSpan = document.getElementById('cValue');
const perimeterSpan = document.getElementById('perimeter');
const areaSpan = document.getElementById('area');

const angleRightSpan = document.getElementById('angleRight');
const angleASpan = document.getElementById('angleA');
const angleBSpan = document.getElementById('angleB');
const angleSumSpan = document.getElementById('angleSum');

const ctx = document.getElementById('triangleChart').getContext('2d');

let triangleChart;

/* ----------- CUSTOM PLUGIN FOR ANGLES ----------- */

const triangleLabels = {
id: 'triangleLabels',

afterDatasetsDraw(chart, args, pluginOptions) {

const {ctx, scales:{x,y}} = chart;

ctx.save();

const a = pluginOptions.a;
const b = pluginOptions.b;
const c = pluginOptions.c;

const angleX = pluginOptions.angleX;
const angleY = pluginOptions.angleY;

function px(xVal,yVal){
return {
x: x.getPixelForValue(xVal),
y: y.getPixelForValue(yVal)
};
}

const O = px(0,0);
const A = px(a,0);
const B = px(0,b);

/* ---- side labels ---- */

ctx.font = "14px sans-serif";
ctx.fillStyle = "#333";

ctx.fillText("a", (O.x+A.x)/2, O.y+18);
ctx.fillText("b", O.x-18, (O.y+B.y)/2);
ctx.fillText("c", (A.x+B.x)/2, (A.y+B.y)/2);

/* ---- vertex labels ---- */

ctx.fillText("O", O.x-12, O.y+15);
ctx.fillText("A", A.x+6, A.y+15);
ctx.fillText("B", B.x-14, B.y-6);

/* ---- right angle square ---- */

ctx.beginPath();
ctx.rect(O.x+6,O.y-22,14,14);
ctx.strokeStyle="#000";
ctx.stroke();

/* ---- angle text ---- */

ctx.fillStyle="blue";
ctx.fillText(angleX.toFixed(1)+"°",A.x-50,A.y-8);

ctx.fillStyle="red";
ctx.fillText(angleY.toFixed(1)+"°",B.x+6,B.y+25);

ctx.fillStyle="green";
ctx.fillText("90°",O.x+22,O.y-6);

ctx.restore();
}
};

/* ----------- UPDATE FUNCTION ----------- */

function updatePythagoras(){

let a=parseFloat(inputA.value);
let b=parseFloat(inputB.value);

if(isNaN(a)||a<=0)a=3;
if(isNaN(b)||b<=0)b=4;

const c=Math.sqrt(a*a+b*b);
const perimeter=a+b+c;
const area=(a*b)/2;

const angleX=Math.atan(b/a)*180/Math.PI;
const angleY=Math.atan(a/b)*180/Math.PI;
const angleO=90;

cSpan.textContent=c.toFixed(3);
perimeterSpan.textContent=perimeter.toFixed(3);
areaSpan.textContent=area.toFixed(3);

angleRightSpan.textContent=angleO.toFixed(2)+"°";
angleASpan.textContent=angleX.toFixed(2)+"°";
angleBSpan.textContent=angleY.toFixed(2)+"°";
angleSumSpan.textContent=(angleO+angleX+angleY).toFixed(2)+"°";

/* dynamic scaling so triangle fits */

const max=Math.max(a,b)*1.2;

const points=[
{x:0,y:0},
{x:a,y:0},
{x:0,y:b},
{x:0,y:0}
];

if(triangleChart){

triangleChart.options.scales.x.max=max;
triangleChart.options.scales.y.max=max;

triangleChart.data.datasets[0].data=points;

triangleChart.options.plugins.triangleLabels={
a,b,c,angleX,angleY
};

triangleChart.update();

}else{

triangleChart=new Chart(ctx,{
type:'scatter',
data:{
datasets:[{
data:points,
showLine:true,
borderWidth:3,
pointRadius:5
}]
},
options:{
responsive:true,
aspectRatio:1,
scales:{
x:{
type:'linear',
min:0,
max:max,
title:{display:true,text:'x'}
},
y:{
type:'linear',
min:0,
max:max,
title:{display:true,text:'y'}
}
},
plugins:{
legend:{display:false},
tooltip:{enabled:false},
triangleLabels:{a,b,c,angleX,angleY}
}
},
plugins:[triangleLabels]
});
}
}

inputA.addEventListener('input',updatePythagoras);
inputB.addEventListener('input',updatePythagoras);

updatePythagoras();

})();