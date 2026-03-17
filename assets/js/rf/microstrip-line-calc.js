


function calculate(){

let er=parseFloat(document.getElementById("er").value)
let h=parseFloat(document.getElementById("h").value)
let w=parseFloat(document.getElementById("w").value)
let freq=parseFloat(document.getElementById("freq").value)
let theta=parseFloat(document.getElementById("theta").value)

let u=w/h

let eps_eff=(er+1)/2 + (er-1)/2*(1/Math.sqrt(1+12/u))

let Z0

if(u<=1){
Z0=60/Math.sqrt(eps_eff)*Math.log(8/u+0.25*u)
}else{
Z0=120*Math.PI/(Math.sqrt(eps_eff)*(u+1.393+0.667*Math.log(u+1.444)))
}

let c=299792458

let lambda=(c/(freq*1e9))/Math.sqrt(eps_eff)*1000

let beta=2*Math.PI/lambda

let length=(theta*Math.PI/180)/beta

document.getElementById("Z0").innerHTML=Z0.toFixed(2)
document.getElementById("eps").innerHTML=eps_eff.toFixed(3)
document.getElementById("lambda").innerHTML=lambda.toFixed(2)
document.getElementById("length").innerHTML=length.toFixed(2)

}


window.MathJax = {
  tex: { inlineMath: [['\\(','\\)'], ['$', '$']] },
  svg: { fontCache: 'global' }
};