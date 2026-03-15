
const solveMode=document.getElementById("solveMode")
const sideInputs=document.getElementById("sideInputs")
const heightInputs=document.getElementById("heightInputs")

solveMode.addEventListener("change",()=>{

if(solveMode.value==="side"){

sideInputs.style.display="block"
heightInputs.style.display="none"

}else{

sideInputs.style.display="none"
heightInputs.style.display="block"

}

})


function round(v){
return Math.round(v*1000)/1000
}


function drawTriangle(b,h){

const maxWidth=200
const maxHeight=170

const scale=Math.min(maxWidth/b,maxHeight/h)

const base=b*scale
const height=h*scale

const center=200

const x1=center-base/2
const x2=center+base/2

const yBase=250
const yTop=250-height

const points=`${x1},${yBase} ${x2},${yBase} ${center},${yTop}`

document.getElementById("triangleShape").setAttribute("points",points)

document.getElementById("heightLine").setAttribute("y2",yTop)

}


function calculate(){

document.getElementById("explanationBox").style.display="block";

let b,a,h

if(solveMode.value==="side"){

b=parseFloat(baseInput.value)
a=parseFloat(sideInput.value)

if(a<=b/2){

alert("Equal side must be greater than half the base")

return

}

h=Math.sqrt(a*a-(b/2)*(b/2))

}else{

b=parseFloat(baseHeightInput.value)
h=parseFloat(heightInput.value)

a=Math.sqrt((b/2)*(b/2)+h*h)

}

let area=(b*h)/2
let perimeter=2*a+b

let baseAngle=Math.acos((b/2)/a)*(180/Math.PI)
let vertex=180-2*baseAngle


resHeight.innerText=round(h)
resArea.innerText=round(area)
resPerimeter.innerText=round(perimeter)
resVertex.innerText=round(vertex)+"°"
resBaseAngle.innerText=round(baseAngle)+"°"

drawTriangle(b,h)

explanationText.innerHTML=`

<b>Given</b>

<ul>
<li>Base (b) = ${round(b)}</li>
<li>Equal side (a) = ${round(a)}</li>
</ul>
<div class="row gap-3 mt-3">
<div class="col-4 bg-light p-3 rounded text-center gap-3">
<b>Step 1: Height</b>
<p>h = √(a² − (b/2)²)</p>
<p>h = √(${round(a)}² − (${round(b)}/2)²)</p>
<p><b>h = ${round(h)}</b></p>
</div>

<div class="col-3 bg-light p-3 rounded text-center">
<b>Step 2: Area</b>
<p>Area = (b × h) / 2</p>
<p>Area = (${round(b)} × ${round(h)}) / 2</p>
<p><b>${round(area)}</b></p>


</div>
<div class="col-4 bg-light p-3 rounded text-center">
<b>Step 3: Perimeter</b>
<p>P = 2a + b</p>
<p>P = 2(${round(a)}) + ${round(b)}</p>
<p><b>${round(perimeter)}</b></p>


</div>
</div>

`

}


function resetCalculator(){

baseInput.value=6
sideInput.value=5
baseHeightInput.value=6
heightInput.value=4

resHeight.innerText="—"
resArea.innerText="—"
resPerimeter.innerText="—"
resVertex.innerText="—"
resBaseAngle.innerText="—"

document.getElementById("explanationBox").style.display="none";

drawTriangle(6,4)

}

