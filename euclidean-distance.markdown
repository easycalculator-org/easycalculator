---
layout: default
title: Euclidean Distance Formula Calculator with Graph (Step-by-Step)
permalink: /euclidean-distance-calculator
description: "Calculate Euclidean distance between two points instantly with our interactive 2D graph. Enter coordinates, visualize the line, and get step-by-step results using the distance formula."
last_modified_at: 2026-04-02
---


<style>
*{font-family:'Inter',sans-serif}

.card-custom{
  background:rgba(255,255,255,0.7);
  backdrop-filter:blur(12px);
  border-radius:24px;
  border:1px solid rgba(255,255,255,0.4);
  box-shadow:0 20px 40px rgba(0,0,0,0.1);
}

.distance-badge{
  background:linear-gradient(135deg,#2563eb,#1e3a8a);
  color:#fff;
  border-radius:50px;
  padding:8px 18px;
  font-weight:600;
  animation:pulse 2s infinite;
}
@keyframes pulse{
  0%{box-shadow:0 0 0 0 rgba(37,99,235,.5)}
  70%{box-shadow:0 0 0 12px rgba(37,99,235,0)}
}

/* Inputs */
.coord-input{
  border-radius:14px;
  height:42px;
}
.coord-input:focus{
  transform:scale(1.05);
}

.btn-custom{
  border-radius:30px;
  font-weight:600;
}
.btn-custom:hover{
  transform:translateY(-2px);
}

/* Canvas */
canvas{
  background:linear-gradient(#fff,#f1f5f9);
  border-radius:20px;
  box-shadow:0 15px 30px rgba(0,0,0,0.1);
  cursor:crosshair;
}

.stat-box{
  background:#fff;
  border-radius:14px;
  padding:10px;
  box-shadow:0 5px 15px rgba(0,0,0,0.05);
}

@media(max-width:576px){
  .btn-custom{font-size:12px}
}
</style>


<div class="text-center mb-3">
<h2 class="fw-bold"> Euclidean Distance </h2>
</div>

<!-- Stats -->
<div class="row text-center mb-3">
<div class="col-4"><div class="stat-box"><small>ΔX</small><div id="dxVal">0</div></div></div>
<div class="col-4"><div class="stat-box"><small>ΔY</small><div id="dyVal">0</div></div></div>
<div class="col-4"><div class="stat-box"><small>Distance</small><div id="distTop" class="text-primary fw-bold">0</div></div></div>
</div>

<div class="card card-custom p-3">
<div class="row">

<!-- LEFT -->
<div class="col-md-5">

<div class="d-flex justify-content-between mb-3">
<h5>Coordinates</h5>
<div class="distance-badge"><span id="distanceValue">0</span></div>
</div>

<div class="mb-3">
<label>X1</label>
<input type="number" id="ax" class="form-control coord-input" value="2">
</div>

<div class="mb-3">
<label>Y1</label>
<input type="number" id="ay" class="form-control coord-input" value="3">
</div>

<div class="mb-3">
<label>X2</label>
<input type="number" id="bx" class="form-control coord-input" value="7">
</div>

<div class="mb-3">
<label>Y2</label>
<input type="number" id="by" class="form-control coord-input" value="5">
</div>

<div class="d-flex gap-2">
<button id="resetBtn" class="btn btn-outline-secondary btn-custom w-100">Reset</button>
<button id="swapBtn" class="btn btn-outline-secondary btn-custom w-100">Swap</button>
<button id="randomBtn" class="btn btn-outline-secondary btn-custom w-100">Random</button>
</div>

<div class="mt-3 text-primary fw-semibold">
💡 Click on graph to move Point B
</div>

</div>

<!-- RIGHT -->
<div class="col-md-7 text-center">
<canvas id="canvas" width="600" height="500"></canvas>
</div>

</div>
</div>


<script>
const ax=document.getElementById('ax');
const ay=document.getElementById('ay');
const bx=document.getElementById('bx');
const by=document.getElementById('by');

const distanceSpan=document.getElementById('distanceValue');
const dxVal=document.getElementById('dxVal');
const dyVal=document.getElementById('dyVal');
const distTop=document.getElementById('distTop');

const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');

let GRID_MIN_X, GRID_MAX_X, GRID_MIN_Y, GRID_MAX_Y;

/* AUTO SCALE */
function updateGrid(x1,y1,x2,y2){
  GRID_MIN_X = Math.floor(Math.min(x1,x2)) - 1;
  GRID_MAX_X = Math.ceil(Math.max(x1,x2)) + 1;

  GRID_MIN_Y = Math.floor(Math.min(y1,y2)) - 1;
  GRID_MAX_Y = Math.ceil(Math.max(y1,y2)) + 1;

  // fallback (important)
  if(GRID_MAX_X - GRID_MIN_X < 2){
    GRID_MAX_X += 1;
    GRID_MIN_X -= 1;
  }
  if(GRID_MAX_Y - GRID_MIN_Y < 2){
    GRID_MAX_Y += 1;
    GRID_MIN_Y -= 1;
  }
}

/* SCALE */
function getScale(){
  let scaleX = canvas.width / (GRID_MAX_X - GRID_MIN_X);
  let scaleY = canvas.height / (GRID_MAX_Y - GRID_MIN_Y);
  return Math.min(scaleX, scaleY);
}

/* Convert to canvas */
function toCanvas(x,y){
  let scale=getScale();
  return {
    x:(x-GRID_MIN_X)*scale,
    y:canvas.height-(y-GRID_MIN_Y)*scale
  };
}

/* Animate number */
function animate(end){
  distanceSpan.innerText=end.toFixed(2);
}

/* GRID */
function drawGrid(){
  let scale=getScale();

  ctx.strokeStyle="#e2e8f0";
  ctx.lineWidth=1;
  ctx.font="10px Arial";
  ctx.fillStyle="#334155";

  let rangeX = GRID_MAX_X - GRID_MIN_X;
  let step = Math.ceil(rangeX / 10);

  for(let x=GRID_MIN_X; x<=GRID_MAX_X; x+=step){
    let px=(x-GRID_MIN_X)*scale;

    ctx.beginPath();
    ctx.moveTo(px,0);
    ctx.lineTo(px,canvas.height);
    ctx.stroke();

    ctx.fillText(x,px+2,canvas.height-5);
  }

  for(let y=GRID_MIN_Y; y<=GRID_MAX_Y; y+=step){
    let py=canvas.height-(y-GRID_MIN_Y)*scale;

    ctx.beginPath();
    ctx.moveTo(0,py);
    ctx.lineTo(canvas.width,py);
    ctx.stroke();

    ctx.fillText(y,2,py-2);
  }

  // axes
  ctx.strokeStyle="#000";
  ctx.lineWidth=2;

  if(GRID_MIN_Y <= 0 && GRID_MAX_Y >= 0){
    let y0 = canvas.height-(0-GRID_MIN_Y)*scale;
    ctx.beginPath();
    ctx.moveTo(0,y0);
    ctx.lineTo(canvas.width,y0);
    ctx.stroke();
  }

  if(GRID_MIN_X <= 0 && GRID_MAX_X >= 0){
    let x0 = (0-GRID_MIN_X)*scale;
    ctx.beginPath();
    ctx.moveTo(x0,0);
    ctx.lineTo(x0,canvas.height);
    ctx.stroke();
  }
}

/* DRAW */
function draw(x1,y1,x2,y2){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawGrid();

  let p1=toCanvas(x1,y1);
  let p2=toCanvas(x2,y2);

  // line
  ctx.beginPath();
  ctx.moveTo(p1.x,p1.y);
  ctx.lineTo(p2.x,p2.y);
  ctx.strokeStyle="#2563eb";
  ctx.lineWidth=3;
  ctx.stroke();

  // distance
  let mx=(p1.x+p2.x)/2;
  let my=(p1.y+p2.y)/2;

  let dx=x2-x1;
  let dy=y2-y1;
  let d=Math.sqrt(dx*dx+dy*dy);

  ctx.fillStyle="#000";
  ctx.fillText("d="+d.toFixed(2),mx+5,my-5);

  // A
  ctx.beginPath();
  ctx.arc(p1.x,p1.y,6,0,Math.PI*2);
  ctx.fillStyle="red";
  ctx.fill();
  ctx.fillText("A",p1.x+8,p1.y-5);

  // B
  ctx.beginPath();
  ctx.arc(p2.x,p2.y,6,0,Math.PI*2);
  ctx.fillStyle="blue";
  ctx.fill();
  ctx.fillText("B",p2.x+8,p2.y-5);
}

/* CALC */
function calc(){
  let x1=parseFloat(ax.value);
  let y1=parseFloat(ay.value);
  let x2=parseFloat(bx.value);
  let y2=parseFloat(by.value);

  if(isNaN(x1)||isNaN(y1)||isNaN(x2)||isNaN(y2)) return;

  updateGrid(x1,y1,x2,y2); // 🔥 MUST

  let dx=x2-x1;
  let dy=y2-y1;
  let d=Math.sqrt(dx*dx+dy*dy);

  animate(d);

  dxVal.innerText=dx.toFixed(2);
  dyVal.innerText=dy.toFixed(2);
  distTop.innerText=d.toFixed(2);

  draw(x1,y1,x2,y2);
}

/* EVENTS */
[ax,ay,bx,by].forEach(i=>i.addEventListener('input',calc));

document.getElementById('resetBtn').onclick=()=>{
  ax.value=2; ay.value=3; bx.value=7; by.value=5; calc();
};

document.getElementById('swapBtn').onclick=()=>{
  let t=ax.value; ax.value=bx.value; bx.value=t;
  t=ay.value; ay.value=by.value; by.value=t;
  calc();
};

document.getElementById('randomBtn').onclick=()=>{
  ax.value=(Math.random()*50).toFixed(2);
  ay.value=(Math.random()*50).toFixed(2);
  bx.value=(Math.random()*50).toFixed(2);
  by.value=(Math.random()*50).toFixed(2);
  calc();
};

/* CLICK */
canvas.addEventListener('click',(e)=>{
  let rect=canvas.getBoundingClientRect();
  let scale=getScale();

  let x=(e.clientX-rect.left)/scale + GRID_MIN_X;
  let y=(canvas.height-(e.clientY-rect.top))/scale + GRID_MIN_Y;

  bx.value=x.toFixed(2);
  by.value=y.toFixed(2);
  calc();
});

/* INIT */
calc();
</script>

