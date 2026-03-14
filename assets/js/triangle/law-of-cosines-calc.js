
function getInput(id){
const v=document.getElementById(id).value;
return v===""?NaN:Number(v);

}

function setResult(msg){
document.getElementById("resultMessage").innerHTML=msg;

}

function computeSideC(){
const a=getInput("sideA");
const b=getInput("sideB");
const C=getInput("angleC");
if(isNaN(a)||isNaN(b)||isNaN(C)){

setResult("Please enter valid values");

return;

}

const rad=C*Math.PI/180;
const c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(rad));
document.getElementById("sideC").value=c.toFixed(5);

setResult("Side c = <b>"+c.toFixed(5)+"</b>");

drawTriangle(a,b,c);

}

function computeAngleC(){
const a=getInput("sideA");
const b=getInput("sideB");
const c=getInput("sideC");
if(isNaN(a)||isNaN(b)||isNaN(c)){

setResult("Please enter valid values");

return;

}

const cos=(a*a+b*b-c*c)/(2*a*b);
const C=Math.acos(cos)*180/Math.PI;
document.getElementById("angleC").value=C.toFixed(3);
setResult("Angle C = <b>"+C.toFixed(3)+"°</b>");

drawTriangle(a,b,c);

}

function drawTriangle(a,b,c){
if(a<=0 || b<=0 || c<=0) return;

const maxSide=Math.max(a,b,c);
const scale=120/maxSide;
const Cx=60;
const Cy=150;

const Bx=Cx+a*scale;
const By=Cy;

const cosC=(a*a+b*b-c*c)/(2*a*b);

if(cosC<-1 || cosC>1) return;
const Crad=Math.acos(cosC);
const Ax=Cx+b*scale*Math.cos(Crad);
const Ay=Cy-b*scale*Math.sin(Crad);

/* draw triangle */

document.getElementById("trianglePoly")
.setAttribute("points",`${Cx},${Cy} ${Bx},${By} ${Ax},${Ay}`);

/* markers */
markA.setAttribute("cx",Ax);
markA.setAttribute("cy",Ay);
markB.setAttribute("cx",Bx);
markB.setAttribute("cy",By);
markC.setAttribute("cx",Cx);
markC.setAttribute("cy",Cy);

/* labels */

labelA.setAttribute("x",Ax);
labelA.setAttribute("y",Ay);
labelB.setAttribute("x",Bx);
labelB.setAttribute("y",By);
labelC.setAttribute("x",Cx);
labelC.setAttribute("y",Cy);

}

function clearAll(){
sideA.value="";
sideB.value="";
sideC.value="";
angleC.value="";

setResult("Fields cleared");

}

function loadExample(){
sideA.value=8;
sideB.value=11;
angleC.value=60;
computeSideC();

}

document.getElementById("calcSideCBtn").onclick=computeSideC;
document.getElementById("calcAngleCBtn").onclick=computeAngleC;
document.getElementById("clearBtn").onclick=clearAll;
window.onload=function(){

loadExample();

};
