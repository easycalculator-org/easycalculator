
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


function getCompoundingLabel() {
  let custom = document.getElementById("customCompound").value;
  let select = document.getElementById("compound");

  if (custom && custom > 0) {
    return custom + " times/year";
  }

  let text = select.options[select.selectedIndex].text;
  return text; // Yearly / Monthly / Daily
}
async function downloadPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let P = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;
  let total = document.getElementById("totalAmount").innerText;
  let interest = document.getElementById("interestAmount").innerText;
  let compounding = getCompoundingLabel();

  if (!total || total === "—") {
    alert("Please calculate first");
    return;
  }

  const pageWidth = doc.internal.pageSize.getWidth();

  // ===== HEADER =====
  doc.setFillColor(41, 128, 185);
  doc.rect(0, 0, pageWidth, 20, "F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(16);
  doc.text("Compound Interest Report", pageWidth/2, 13, { align: "center" });

  doc.setTextColor(0);

  // ===== SUMMARY =====
  doc.setFillColor(236,240,241);
  doc.roundedRect(10, 30, 190, 35, 3, 3, "F");

  doc.setFont("helvetica","bold");
  doc.text("Summary", 15, 38);

  doc.setFont("helvetica","normal");
  doc.text(`Total Value: ${total}`, 15, 48);
  doc.text(`Interest Earned: ${interest}`, 15, 56);

  // ===== INPUTS =====
  doc.setFont("helvetica","bold");
  doc.text("Investment Details", 10, 80);

  doc.rect(10, 85, 190, 40);

  doc.setFont("helvetica","normal");
  doc.text(`Principal: ${P}`, 15, 95);
  doc.text(`Rate: ${rate}%`, 15, 103);
  doc.text(`Time: ${time} years`, 15, 111);

  // 🔥 NEW: Compounding type
  doc.text(`Compounding: ${compounding}`, 15, 119);

  // ===== CHART =====
  try {
    let chartCanvas = document.getElementById("chart");
    let chartImage = chartCanvas.toDataURL("image/png");

    doc.addImage(chartImage, "PNG", 40, 130, 120, 55);
  } catch(e){}

  // ===== TABLE =====
  doc.setFont("helvetica","bold");
  doc.text("Year-wise Growth", 10, 195);

  let y = 205;

  doc.setFillColor(52,152,219);
  doc.rect(10, y-6, 190, 8, "F");

  doc.setTextColor(255);
  doc.text("Year", 20, y);
  doc.text("Amount", 120, y);

  doc.setTextColor(0);
  y += 10;

  let rows = document.querySelectorAll("#yearTable tr");

  rows.forEach((row, index) => {
    let cols = row.querySelectorAll("td");

    if (cols.length === 2) {

      if(index % 2 === 0){
        doc.setFillColor(245,245,245);
        doc.rect(10, y-6, 190, 8, "F");
      }

      doc.text(cols[0].innerText, 20, y);
      doc.text(cols[1].innerText, 120, y);

      y += 8;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    }
  });

  // ===== FOOTER =====
  doc.setFontSize(9);
  doc.setTextColor(100);

  doc.textWithLink(
    "Visit: easycalculator.org/compound-interest-calculator",
    pageWidth/2,
    285,
    { align: "center", url: "http://easycalculator.org/compound-interest-calculator" }
  );

  doc.text("Generated by EasyCalculator", pageWidth/2, 292, { align: "center" });

  doc.save("compound-interest-report.pdf");
}