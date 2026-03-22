
function calculate() {
  let type = document.getElementById("type").value;
  let val = parseFloat(document.getElementById("value").value);

  if (!val || val <= 0) {
    alert("Enter valid number");
    return;
  }

  let sqrt2 = Math.sqrt(2);
  let leg, hyp;

  if (type === "leg") {
    leg = val;
    hyp = val * sqrt2;
  } else {
    hyp = val;
    leg = val / sqrt2;
  }

  leg = parseFloat(leg.toFixed(3));
  hyp = parseFloat(hyp.toFixed(3));

  // update text
  document.getElementById("leg").innerText = leg;
  document.getElementById("hyp").innerText = hyp;

  // update SVG
  document.getElementById("valA").textContent = "a=" + leg;
  document.getElementById("valB").textContent = "b=" + leg;
  document.getElementById("valC").textContent = "c=" + hyp;
}