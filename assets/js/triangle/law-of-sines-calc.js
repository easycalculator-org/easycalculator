
const sideA=document.getElementById("sideA")
const sideB=document.getElementById("sideB")
const sideC=document.getElementById("sideC")

const angleA=document.getElementById("angleA")
const angleB=document.getElementById("angleB")
const angleC=document.getElementById("angleC")

const triPoly=document.getElementById("triPoly")

const pA=document.getElementById("pA")
const pB=document.getElementById("pB")
const pC=document.getElementById("pC")

const angleAText=document.getElementById("angleAText")
const angleBText=document.getElementById("angleBText")
const angleCText=document.getElementById("angleCText")

const sideAText=document.getElementById("sideAText")
const sideBText=document.getElementById("sideBText")
const sideCText=document.getElementById("sideCText")

function toRad(x){return x*Math.PI/180}
function toDeg(x){return x*180/Math.PI}

function solve(){

let a=parseFloat(sideA.value)
let b=parseFloat(sideB.value)
let A=parseFloat(angleA.value)
let B=parseFloat(angleB.value)

if(!a||!b||!A){
alert("Please enter Side a, Angle A, and Side b.")
return
}

let sinA=Math.sin(toRad(A))

if(!B){

let sinB=b*sinA/a

if(sinB>1){
alert("Triangle cannot exist with these values.")
return
}

B=toDeg(Math.asin(sinB))
angleB.value=B.toFixed(2)

}

let C=180-A-B
angleC.value=C.toFixed(2)

let c=a*Math.sin(toRad(C))/sinA
sideC.value=c.toFixed(3)

drawTriangle(a,b,c,A,B,C)

}

function drawTriangle(a,b,c,A,B,C){

let maxSide=Math.max(a,b,c)

let base=260

let scale=base/maxSide

let Ax=40
let Ay=220

let Bx=Ax+c*scale
let By=Ay

let a_px=a*scale
let b_px=b*scale

let d=c*scale

let p=(a_px*a_px + d*d - b_px*b_px)/(2*d)

let h=Math.sqrt(Math.max(0,a_px*a_px-p*p))

let Cx=Ax+p
let Cy=Ay-h

if(Cy<20){
let shift=20-Cy
Ay+=shift
By+=shift
Cy+=shift
}

triPoly.setAttribute("points",
`${Ax},${Ay} ${Bx},${By} ${Cx},${Cy}`)

pA.setAttribute("cx",Ax)
pA.setAttribute("cy",Ay)

pB.setAttribute("cx",Bx)
pB.setAttribute("cy",By)

pC.setAttribute("cx",Cx)
pC.setAttribute("cy",Cy)

angleAText.setAttribute("x",Ax-15)
angleAText.setAttribute("y",Ay-10)
angleAText.textContent=`A ${A.toFixed(1)}°`

angleBText.setAttribute("x",Bx+5)
angleBText.setAttribute("y",By-10)
angleBText.textContent=`B ${B.toFixed(1)}°`

angleCText.setAttribute("x",Cx-10)
angleCText.setAttribute("y",Cy-10)
angleCText.textContent=`C ${C.toFixed(1)}°`

sideAText.setAttribute("x",(Bx+Cx)/2)
sideAText.setAttribute("y",(By+Cy)/2)
sideAText.textContent="a"

sideBText.setAttribute("x",(Ax+Cx)/2)
sideBText.setAttribute("y",(Ay+Cy)/2)
sideBText.textContent="b"

sideCText.setAttribute("x",(Ax+Bx)/2)
sideCText.setAttribute("y",Ay+15)
sideCText.textContent="c"

}

document.getElementById("calcBtn").onclick=solve

document.getElementById("resetBtn").onclick=function(){

// clear inputs
sideA.value=""
sideB.value=""
sideC.value=""

angleA.value=""
angleB.value=""
angleC.value=""

// clear triangle
triPoly.setAttribute("points","")

// hide points
pA.setAttribute("cx",0)
pA.setAttribute("cy",0)

pB.setAttribute("cx",0)
pB.setAttribute("cy",0)

pC.setAttribute("cx",0)
pC.setAttribute("cy",0)

// clear angle labels
angleAText.textContent=""
angleBText.textContent=""
angleCText.textContent=""

// clear side labels
sideAText.textContent=""
sideBText.textContent=""
sideCText.textContent=""

}


window.MathJax = {
  tex: {
    inlineMath: [['\\(','\\)']],
    displayMath: [['\\[','\\]']]
  },
  chtml: {
    scale: 0.85
  }
};
