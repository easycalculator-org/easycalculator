function getVal(id){
  let v = document.getElementById(id).value;
  return v === "" ? NaN : parseFloat(v);
}

function calculate(){

  let a = getVal('sideA');
  let b = getVal('sideB');
  let c = getVal('sideC');

  let result = document.getElementById('result');
  let msg = document.getElementById('message');

  msg.innerHTML = "";
  result.innerHTML = "—";

  let filled = [a,b,c].filter(x => !isNaN(x)).length;

  // ✅ Rule: exactly 2 inputs
  if(filled !== 2){
    msg.innerHTML = "Enter exactly 2 values";
    updateTriangle(a,b,c);
    return;
  }

  // ✅ Validate only filled values
  if(
    (!isNaN(a) && a <= 0) ||
    (!isNaN(b) && b <= 0) ||
    (!isNaN(c) && c <= 0)
  ){
    msg.innerHTML = "Values must be positive";
    updateTriangle(a,b,c);
    return;
  }

  let res;

  if(isNaN(c)){
    res = Math.sqrt(a*a + b*b);
    c = res; // ✅ update for triangle
  }
  else if(isNaN(a)){
    if(c <= b){
      msg.innerHTML = "c must be largest";
      updateTriangle(a,b,c);
      return;
    }
    res = Math.sqrt(c*c - b*b);
    a = res;
  }
  else if(isNaN(b)){
    if(c <= a){
      msg.innerHTML = "c must be largest";
      updateTriangle(a,b,c);
      return;
    }
    res = Math.sqrt(c*c - a*a);
    b = res;
  }

  result.innerHTML = Number.isInteger(res) ? res : res.toFixed(4);

  // ✅ Update triangle AFTER correct calculation
  updateTriangle(a,b,c);
}


// ✅ Auto calculate
document.querySelectorAll("input").forEach(el=>{
  el.addEventListener("input", calculate);
});


// ✅ RESET FIXED (important)
function resetCalc(){
  document.getElementById('sideA').value="";
  document.getElementById('sideB').value="";
  document.getElementById('sideC').value="";
  document.getElementById('result').innerHTML="—";
  document.getElementById('message').innerHTML="";

  // 🔥 Reset triangle to default
  updateTriangle(NaN, NaN, NaN);
}


// ✅ IMPROVED TRIANGLE (better scaling)
function updateTriangle(a, b, c){

  const maxSize = 140;

  let A = (!isNaN(a)) ? a : 3;
  let B = (!isNaN(b)) ? b : 4;

  let scale = maxSize / Math.max(A,B);

  A *= scale;
  B *= scale;

  let p1 = [40,160];
  let p2 = [40 + A,160];
  let p3 = [40,160 - B];

  document.getElementById("triangleShape")
    .setAttribute("points", `${p1} ${p2} ${p3}`);

  // Hypotenuse line
  document.getElementById("hypLine")
    .setAttribute("x1", p2[0]);
  document.getElementById("hypLine")
    .setAttribute("y1", p2[1]);
  document.getElementById("hypLine")
    .setAttribute("x2", p3[0]);
  document.getElementById("hypLine")
    .setAttribute("y2", p3[1]);

  // Labels
  document.getElementById("labelA")
    .setAttribute("x", (p1[0]+p2[0])/2);
  document.getElementById("labelA")
    .setAttribute("y", p1[1]+15);
  document.getElementById("labelA").textContent =
    !isNaN(a) ? `a = ${a}` : "a";

  document.getElementById("labelB")
    .setAttribute("x", p1[0]-20);
  document.getElementById("labelB")
    .setAttribute("y", (p1[1]+p3[1])/2);
  document.getElementById("labelB").textContent =
    !isNaN(b) ? `b = ${b}` : "b";

  document.getElementById("labelC")
    .setAttribute("x", (p2[0]+p3[0])/2);
  document.getElementById("labelC")
    .setAttribute("y", (p2[1]+p3[1])/2);
  document.getElementById("labelC").textContent =
    !isNaN(c) ? `c = ${c.toFixed(2)}` : "c";
}


// ✅ Load default triangle on page load
window.addEventListener("load", ()=>{
  updateTriangle(NaN, NaN, NaN);
});