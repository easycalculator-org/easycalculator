
let chart;

// NUMBER TO WORDS (GLOBAL)
function numberToWords(num) {
  if (!num) return "";

  const units = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
  const teens = ["Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
  const tens = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];

  function convertHundreds(n){
    let str = "";
    if(n > 99){
      str += units[Math.floor(n/100)] + " Hundred ";
      n %= 100;
    }
    if(n > 19){
      str += tens[Math.floor(n/10)] + " ";
      n %= 10;
    } else if(n >= 10){
      str += teens[n-10] + " ";
      return str;
    }
    if(n > 0){
      str += units[n] + " ";
    }
    return str;
  }

  let result = "";
  if(num >= 1e9){
    result += convertHundreds(Math.floor(num/1e9)) + "Billion ";
    num %= 1e9;
  }
  if(num >= 1e6){
    result += convertHundreds(Math.floor(num/1e6)) + "Million ";
    num %= 1e6;
  }
  if(num >= 1e3){
    result += convertHundreds(Math.floor(num/1e3)) + "Thousand ";
    num %= 1e3;
  }
  if(num > 0){
    result += convertHundreds(num);
  }

  return result.trim();
}

// LIVE WORDS
function convertPrincipal(){
  let val = parseInt(document.getElementById("principal").value);
  document.getElementById("principalWords").innerText = numberToWords(val);
}

// CALCULATE
function calculateCI(){
  let P = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value)/100;
  let t = parseFloat(document.getElementById("time").value);
  let n = parseFloat(document.getElementById("customCompound").value) || parseFloat(document.getElementById("compound").value);

  if(!P || !r || !t){
    alert("Enter valid values");
    return;
  }

  let A = P * Math.pow((1 + r/n), n*t);
  let CI = A - P;

  document.getElementById("totalAmount").innerText = A.toFixed(2);
  document.getElementById("interestAmount").innerText = CI.toFixed(2);
  document.getElementById("totalWords").innerText = numberToWords(Math.round(A));

  // CHART
  if(chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
      labels: ['Principal', 'Interest'],
      datasets: [{ data: [P, CI] }]
    },
    options: {
      plugins: { legend: { position: 'bottom' } }
    }
  });

  // TABLE
  let table = "";
  for(let i=1;i<=t;i++){
    let val = P * Math.pow((1 + r/n), n*i);
    table += `<tr><td>${i}</td><td>${val.toFixed(2)}</td></tr>`;
  }
  document.getElementById("yearTable").innerHTML = table;
}



async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let P = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;
  let total = document.getElementById("totalAmount").innerText;
  let interest = document.getElementById("interestAmount").innerText;

  if (!total || total === "—") {
    alert("Please calculate first");
    return;
  }

  // ===== LOGO =====
  const logoUrl = "https://easycalculator.org/assets/images/logo.png";

  try {
    const img = await fetch(logoUrl)
      .then(res => res.blob())
      .then(blob => new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      }));

    doc.addImage(img, "PNG", 20, 10, 40, 15);
  } catch (e) {
    console.log("Logo load failed");
  }

  // ===== TITLE =====
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Compound Interest Report", 105, 25, null, null, "center");

  doc.setLineWidth(0.5);
  doc.line(20, 30, 190, 30);

  // ===== INPUT BOX =====
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Input Details", 20, 45);

  doc.rect(20, 50, 170, 30);

  doc.setFont("helvetica", "normal");
  doc.text(`Principal: ${P}`, 25, 60);
  doc.text(`Rate: ${rate}%`, 25, 68);
  doc.text(`Time: ${time} years`, 25, 76);

  // ===== RESULT BOX =====
  doc.setFont("helvetica", "bold");
  doc.text("Results", 20, 95);

  doc.rect(20, 100, 170, 30);

  doc.setFont("helvetica", "normal");
  doc.text(`Total Amount: ${total}`, 25, 110);
  doc.text(`Interest Earned: ${interest}`, 25, 118);

  // ===== CHART IMAGE =====
  try {
    let chartCanvas = document.getElementById("chart");
    let chartImage = chartCanvas.toDataURL("image/png");

    doc.addImage(chartImage, "PNG", 50, 140, 100, 60);
  } catch (e) {
    console.log("Chart not added");
  }

  // ===== TABLE =====
  doc.setFont("helvetica", "bold");
  doc.text("Year-wise Growth", 20, 210);

  let y = 220;
  doc.setFont("helvetica", "normal");

  let rows = document.querySelectorAll("#yearTable tr");

  rows.forEach((row) => {
    let cols = row.querySelectorAll("td");
    if (cols.length === 2) {
      doc.text(`Year ${cols[0].innerText}: ${cols[1].innerText}`, 20, y);
      y += 7;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    }
  });

  // ===== FOOTER + LINK =====
  doc.setTextColor(0, 102, 204);
  doc.textWithLink(
    "easycalculator.org/compound-interest-calculator",
    105,
    285,
    { url: "http://easycalculator.org/compound-interest-calculator", align: "center" }
  );

  doc.setTextColor(150);
  doc.setFontSize(9);
  doc.text("Generated by EasyCalculator", 105, 292, null, null, "center");

  // SAVE
  doc.save("compound-interest-report.pdf");
}

