---
layout: default
title: Right Triangle Calculator – Find Sides, Angles & Area
permalink: /right-triangle-calculator
description: "Calculate the missing side, hypotenuse, angles, area, and perimeter of a right triangle. Enter any two known sides to solve the triangle using the Pythagorean theorem."
last_modified_at: 2026-09-10
---

<div aria-label="breadcrumb" class="p-3"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">Home</a></li><li class="breadcrumb-item"><a href="/triangle-calculators">Triangle Calculator</a></li><li class="breadcrumb-item active" aria-current="page">Right Triangle Calculator</li></ol></div>
<div class="my-4"><div class="card shadow-sm border-0"><div class="card-body p-4">
<h1 class="h3 fw-bold mb-2">Right Triangle Calculator</h1>
<p class="text-muted mb-4">Calculate the missing side, hypotenuse, area, perimeter, and angles of a right triangle.</p>
<div class="row g-3">
<div class="col-md-4"><label for="sideA" class="form-label fw-semibold">Side a</label><div class="input-group"><input type="number" id="sideA" class="form-control" placeholder="e.g. 3" min="0" step="any" inputmode="decimal"><span class="input-group-text">units</span></div><small class="text-muted">Leg of the triangle</small></div>
<div class="col-md-4"><label for="sideB" class="form-label fw-semibold">Side b</label><div class="input-group"><input type="number" id="sideB" class="form-control" placeholder="e.g. 4" min="0" step="any" inputmode="decimal"><span class="input-group-text">units</span></div><small class="text-muted">Leg of the triangle</small></div>
<div class="col-md-4"><label for="sideC" class="form-label fw-semibold">Hypotenuse c</label><div class="input-group"><input type="number" id="sideC" class="form-control" placeholder="e.g. 5" min="0" step="any" inputmode="decimal"><span class="input-group-text">units</span></div><small class="text-muted">Longest side</small></div>
</div>
<div class="d-flex flex-wrap gap-2 mt-4"><button type="button" id="calculateBtn" class="btn btn-primary px-4">Calculate</button><button type="button" id="resetBtn" class="btn btn-outline-secondary px-4">Reset</button></div>
<div id="errorMessage" class="alert alert-danger mt-4" style="display:none" role="alert"></div>
<div id="resultSection" class="mt-4" style="display:none">
<div class="alert alert-success"><div class="fw-bold mb-1">Calculation Result</div><div id="resultSummary"></div></div>
<div class="row g-3">
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Side a</div><div id="resultA" class="fs-4 fw-bold"></div></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Side b</div><div id="resultB" class="fs-4 fw-bold"></div></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Hypotenuse c</div><div id="resultC" class="fs-4 fw-bold"></div></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Area</div><div id="resultArea" class="fs-4 fw-bold"></div><small class="text-muted">square units</small></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Perimeter</div><div id="resultPerimeter" class="fs-4 fw-bold"></div><small class="text-muted">units</small></div></div>
<div class="col-md-4"><div class="border rounded p-3 h-100"><div class="text-muted small">Right Angle</div><div class="fs-4 fw-bold">90°</div></div></div>
<div class="col-md-6"><div class="border rounded p-3 h-100"><div class="text-muted small">Angle A</div><div id="resultAngleA" class="fs-4 fw-bold"></div></div></div>
<div class="col-md-6"><div class="border rounded p-3 h-100"><div class="text-muted small">Angle B</div><div id="resultAngleB" class="fs-4 fw-bold"></div></div></div>
</div>
<div class="mt-4 p-3 bg-light rounded"><h2 class="h6 fw-bold">Pythagorean Theorem</h2><div class="fs-5 mb-2">a² + b² = c²</div><div id="calculationSteps" class="text-muted"></div></div>
</div>
<div class="mt-4"><h2 class="h6 fw-bold">Quick Examples</h2><div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-outline-primary quick-example" data-a="3" data-b="4">3-4-5 Triangle</button><button type="button" class="btn btn-sm btn-outline-primary quick-example" data-a="5" data-b="12">5-12-13 Triangle</button><button type="button" class="btn btn-sm btn-outline-primary quick-example" data-a="8" data-b="15">8-15-17 Triangle</button></div></div>
</div></div></div>
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
 <!-- Article -->
<article>

<h2>What Is a Right Triangle?</h2>
<p>A <strong>right triangle</strong> is a triangle with one angle that is exactly <strong>90°</strong>. The two sides that make the 90° angle are called the <strong>legs</strong>. The longest side is called the <strong>hypotenuse</strong>.</p>

<div class="p-3 bg-light rounded mb-3">
<strong>Remember:</strong> The hypotenuse is always opposite the 90° angle.
</div>

<h2>How to Use This Calculator</h2>
<p>Finding the missing side of a right triangle is easy:</p>
<ol>
<li>Enter any <strong>two known sides</strong>.</li>
<li>Click the <strong>Calculate</strong> button.</li>
<li>The calculator finds the missing side and other useful measurements.</li>
</ol>

<h2>Pythagorean Theorem</h2>
<p>The <strong>Pythagorean theorem</strong> helps us find a missing side of a right triangle.</p>

<div class="text-center p-3 bg-light rounded mb-3">
<strong class="fs-5">a² + b² = c²</strong>
</div>

<p>Here, <strong>a</strong> and <strong>b</strong> are the two shorter sides, while <strong>c</strong> is the hypotenuse.</p>

<h2>Example: A 3-4-5 Triangle</h2>
<p>Suppose a right triangle has two sides measuring <strong>3 units</strong> and <strong>4 units</strong>.</p>

<div class="p-3 border rounded mb-3">
<p class="mb-1"><strong>c² = 3² + 4²</strong></p>
<p class="mb-1"><strong>c² = 9 + 16</strong></p>
<p class="mb-0"><strong>c = 5 units</strong></p>
</div>

<p>So, the three sides are <strong>3, 4, and 5 units</strong>.</p>

<h2>Area of a Right Triangle</h2>
<p>To find the area, multiply the two legs and divide the answer by 2.</p>

<div class="text-center p-3 bg-light rounded mb-3">
<strong>Area = ½ × a × b</strong>
</div>

<p>For sides of 3 and 4 units:</p>
<p><strong>Area = ½ × 3 × 4 = 6 square units</strong></p>

<h2>Perimeter of a Right Triangle</h2>
<p>The <strong>perimeter</strong> is the distance around the triangle. Simply add all three sides.</p>

<div class="text-center p-3 bg-light rounded mb-3">
<strong>Perimeter = a + b + c</strong>
</div>

<p>For a 3-4-5 triangle, the perimeter is <strong>12 units</strong>.</p>

<h2>Quick Facts</h2>
<ul>
<li>A right triangle has one <strong>90° angle</strong>.</li>
<li>The hypotenuse is the <strong>longest side</strong>.</li>
<li>The hypotenuse is opposite the right angle.</li>
<li>The other two angles always add up to <strong>90°</strong>.</li>
<li>The Pythagorean theorem is <strong>a² + b² = c²</strong>.</li>
</ul>
</article>  
</div>



<script>
(function(){
const a=document.getElementById("sideA"),b=document.getElementById("sideB"),c=document.getElementById("sideC"),
calc=document.getElementById("calculateBtn"),reset=document.getElementById("resetBtn"),
error=document.getElementById("errorMessage"),result=document.getElementById("resultSection"),
summary=document.getElementById("resultSummary"),ra=document.getElementById("resultA"),rb=document.getElementById("resultB"),
rc=document.getElementById("resultC"),areaEl=document.getElementById("resultArea"),perim=document.getElementById("resultPerimeter"),
angleA=document.getElementById("resultAngleA"),angleB=document.getElementById("resultAngleB"),steps=document.getElementById("calculationSteps");

function fmt(n){return Number(n.toFixed(10)).toLocaleString("en-US",{maximumFractionDigits:6})}
function err(msg){error.textContent=msg;error.style.display="block";result.style.display="none"}
function clearErr(){error.textContent="";error.style.display="none"}

function calculate(){
clearErr();
let x=parseFloat(a.value),y=parseFloat(b.value),z=parseFloat(c.value);
const count=[x,y,z].filter(v=>Number.isFinite(v)&&v>0).length;

if(count!==2)return err("Please enter exactly two positive side lengths.");

if(Number.isFinite(x)&&Number.isFinite(y)&&!Number.isFinite(z)){
z=Math.hypot(x,y);c.value=fmt(z);
steps.innerHTML=`c = √(a² + b²)<br>c = √(${fmt(x)}² + ${fmt(y)}²)<br>c = ${fmt(z)}`;
summary.textContent="The hypotenuse was calculated from sides a and b.";
}
else if(Number.isFinite(x)&&!Number.isFinite(y)&&Number.isFinite(z)){
if(z<=x)return err("The hypotenuse must be longer than side a.");
const v=z*z-x*x;if(v<=0)return err("These values cannot form a valid right triangle.");
y=Math.sqrt(v);b.value=fmt(y);
steps.innerHTML=`b = √(c² − a²)<br>b = √(${fmt(z)}² − ${fmt(x)}²)<br>b = ${fmt(y)}`;
summary.textContent="The missing side b was calculated from a and c.";
}
else if(!Number.isFinite(x)&&Number.isFinite(y)&&Number.isFinite(z)){
if(z<=y)return err("The hypotenuse must be longer than side b.");
const v=z*z-y*y;if(v<=0)return err("These values cannot form a valid right triangle.");
x=Math.sqrt(v);a.value=fmt(x);
steps.innerHTML=`a = √(c² − b²)<br>a = √(${fmt(z)}² − ${fmt(y)}²)<br>a = ${fmt(x)}`;
summary.textContent="The missing side a was calculated from b and c.";
}
else return err("Please enter exactly two side lengths.");

if(z<=x||z<=y)return err("The hypotenuse must be the longest side.");
const ar=x*y/2,p=x+y+z,aa=Math.atan2(x,y)*180/Math.PI,ab=90-aa;
ra.textContent=fmt(x);rb.textContent=fmt(y);rc.textContent=fmt(z);
areaEl.textContent=fmt(ar);perim.textContent=fmt(p);
angleA.textContent=fmt(aa)+"°";angleB.textContent=fmt(ab)+"°";
result.style.display="block";
}
function resetCalc(){
a.value=b.value=c.value="";
clearErr();result.style.display="none";steps.innerHTML="";
}
calc.addEventListener("click",calculate);
reset.addEventListener("click",resetCalc);
document.querySelectorAll(".quick-example").forEach(btn=>{
btn.addEventListener("click",function(){
a.value=this.dataset.a;b.value=this.dataset.b;c.value="";
calculate();
});
});

[a,b,c].forEach(input=>{
input.addEventListener("keydown",e=>{
if(e.key==="Enter")calculate();
});
});
})();
</script>