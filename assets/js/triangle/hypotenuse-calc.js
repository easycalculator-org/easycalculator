(function(){

const aInput = document.getElementById('sideA');
const bInput = document.getElementById('sideB');
const result = document.getElementById('resultDisplay');

// MAIN CALC
function calculate(){

let a = Math.abs(parseFloat(aInput.value)) || 0;
let b = Math.abs(parseFloat(bInput.value)) || 0;

let c = Math.sqrt(a*a + b*b);

result.textContent = c.toFixed(4).replace(/\.?0+$/,'');

updateTriangle(a,b,c);
}

// TRIANGLE DRAW
function updateTriangle(a,b,c){

const maxSize = 130;
const scale = maxSize / Math.max(a,b,1);

const x = a * scale;
const y = b * scale;

const offsetX = 30;
const offsetY = 170;

// triangle points
const p1 = `${offsetX},${offsetY}`;
const p2 = `${offsetX},${offsetY - y}`;
const p3 = `${offsetX + x},${offsetY}`;

document.getElementById("triangleShape")
.setAttribute("points", `${p1} ${p2} ${p3}`);

// labels
const labelA = document.getElementById("labelA");
labelA.setAttribute("x", offsetX - 25);
labelA.setAttribute("y", offsetY - y/2);
labelA.textContent = "a = " + a;

const labelB = document.getElementById("labelB");
labelB.setAttribute("x", offsetX + x/2);
labelB.setAttribute("y", offsetY + 15);
labelB.textContent = "b = " + b;

const labelC = document.getElementById("labelC");
labelC.setAttribute("x", offsetX + x/2);
labelC.setAttribute("y", offsetY - y/2);
labelC.textContent = "c = " + c.toFixed(2);
}

// EVENTS
document.getElementById('calcBtn').onclick = calculate;

document.getElementById('clearBtn').onclick = function(){
aInput.value = 0;
bInput.value = 0;
calculate();
};

[aInput,bInput].forEach(el=>{
el.addEventListener('input', calculate);
});

// INIT
calculate();

})();