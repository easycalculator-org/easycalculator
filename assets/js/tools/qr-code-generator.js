
const qrCanvas =
document.getElementById("qrCanvas");

const qrInput =
document.getElementById("qrTextInput");

const previewText =
document.getElementById("previewText");

const previewBox =
document.getElementById("previewBox");

let selectedFrame = "classic";

/* ALERT */

function showAlert(message,type="success"){

  document.getElementById("alertPlaceholder")
  .innerHTML =
  `<div class="alert alert-${type}">
    ${message}
  </div>`;

  setTimeout(()=>{
    document.getElementById("alertPlaceholder")
    .innerHTML="";
  },3000);

}

/* GENERATE QR */

async function generateQR(){

  const text = qrInput.value.trim();

  if(!text){
    showAlert("Please enter content.","danger");
    return;
  }

  previewText.textContent = text;

  try{

    await QRCode.toCanvas(qrCanvas,text,{
      width:1200,
      margin:3,
      errorCorrectionLevel:"H",
      color:{
        dark:"#111827",
        light:"#ffffff"
      }
    });

    showAlert("HD QR Code generated!");

  }catch(error){

    showAlert("Failed to generate QR.","danger");

  }

}

/* BUTTONS */

document.getElementById("generateBtn")
.addEventListener("click",generateQR);

document.getElementById("copyBtn")
.addEventListener("click",async()=>{

  await navigator.clipboard
  .writeText(qrInput.value);

  showAlert("Copied!");

});

document.getElementById("exampleBtn")
.addEventListener("click",()=>{

  qrInput.value =
  "https://easycalculator.org/";

  generateQR();

});

/* ENTER */

qrInput.addEventListener("keypress",
function(e){

  if(e.key==="Enter"){
    generateQR();
  }

});

/* QUICK EXAMPLES */

document.querySelectorAll(".example-card")
.forEach(card=>{

  card.addEventListener("click",function(){

    qrInput.value =
    this.getAttribute("data-value");

    generateQR();

  });

});

/* FRAME LOGIC */

document.querySelectorAll(".frame-card")
.forEach(card=>{

  card.addEventListener("click",function(){

    document.querySelectorAll(".frame-card")
    .forEach(btn=>btn.classList.remove("active"));

    this.classList.add("active");

    selectedFrame =
    this.getAttribute("data-frame");

    applyFrameStyle();

  });

});

function applyFrameStyle(){

  previewBox.style.background="#fff";
  previewBox.style.border="1px solid #edf2ff";
  previewBox.style.boxShadow=
  "0 15px 40px rgba(37,99,235,.08)";

  if(selectedFrame==="classic"){

    previewBox.style.background="#fff";

  }

  if(selectedFrame==="neon"){

    previewBox.style.background="#020617";

    previewBox.style.border=
    "2px solid #38bdf8";

    previewBox.style.boxShadow=
    "0 0 35px rgba(56,189,248,.35)";

  }

  if(selectedFrame==="gradient"){

    previewBox.style.background=
    "linear-gradient(135deg,#2563eb,#7c3aed)";

    previewBox.style.border="none";

  }

  if(selectedFrame==="dark"){

    previewBox.style.background="#111827";

    previewBox.style.border=
    "1px solid #374151";

  }

}

/* DOWNLOAD */

document.getElementById("downloadBtn")
.addEventListener("click",()=>{

  const text = qrInput.value.trim();

  const exportCanvas =
  document.createElement("canvas");

  const ctx =
  exportCanvas.getContext("2d");

  exportCanvas.width=1600;
  exportCanvas.height=1850;

  /* BACKGROUND */

  if(selectedFrame==="gradient"){

    const gradient =
    ctx.createLinearGradient(0,0,1600,1600);

    gradient.addColorStop(0,"#2563eb");
    gradient.addColorStop(1,"#7c3aed");

    ctx.fillStyle=gradient;

  }else if(selectedFrame==="dark"){

    ctx.fillStyle="#111827";

  }else if(selectedFrame==="neon"){

    ctx.fillStyle="#020617";

  }else{

    ctx.fillStyle="#f8fbff";

  }

  ctx.fillRect(0,0,1600,1850);

  /* FRAME */

  ctx.fillStyle="#ffffff";

  roundRect(ctx,60,60,1480,1730,60);

  ctx.fill();

  /* QR */

  ctx.drawImage(
    qrCanvas,
    200,
    180,
    1200,
    1200
  );

 /* TITLE */

ctx.fillStyle = "#2563eb";
ctx.font = "700 42px Inter";
ctx.textAlign = "center";

ctx.fillText(
  "Scan QR Code",
  exportCanvas.width / 2,
  1480
);

/* URL - CENTER WRAP */

ctx.fillStyle = "#334155";
ctx.font = "500 28px monospace";
ctx.textAlign = "center";

const maxWidth = 1200;
const lineHeight = 42;
const centerX = exportCanvas.width / 2;

let words = text.split(" ");
let line = "";
let lineY = 1540;

for (let n = 0; n < words.length; n++) {

  let testLine = line + words[n] + " ";
  let testWidth = ctx.measureText(testLine).width;

  if (testWidth > maxWidth && n > 0) {

    ctx.fillText(
      line,
      centerX,
      lineY
    );

    line = words[n] + " ";
    lineY += lineHeight;

  } else {

    line = testLine;

  }

}

/* LAST LINE */

ctx.fillText(
  line,
  centerX,
  lineY
);

/* RESET */

ctx.textAlign = "start";

  /* FOOTER */
/* Center Footer Text */

ctx.fillStyle = "#040c18";
ctx.font = "550 22px Inter";
ctx.textAlign = "center";

ctx.fillText(
  "QR code generated with Easy Calculator",
  exportCanvas.width / 2,
  1730
);

/* Reset align if needed later */
ctx.textAlign = "start";

  const link =
  document.createElement("a");

  link.download="qr-code.png";

  link.href=
  exportCanvas.toDataURL("image/png",1);

  link.click();

  showAlert(
    "Downloaded with frame and text!"
  );

});

/* ROUND RECT */

function roundRect(
ctx,x,y,width,height,radius
){

  ctx.beginPath();

  ctx.moveTo(x+radius,y);

  ctx.lineTo(x+width-radius,y);

  ctx.quadraticCurveTo(
    x+width,y,
    x+width,y+radius
  );

  ctx.lineTo(
    x+width,
    y+height-radius
  );

  ctx.quadraticCurveTo(
    x+width,y+height,
    x+width-radius,y+height
  );

  ctx.lineTo(
    x+radius,
    y+height
  );

  ctx.quadraticCurveTo(
    x,y+height,
    x,y+height-radius
  );

  ctx.lineTo(x,y+radius);

  ctx.quadraticCurveTo(
    x,y,
    x+radius,y
  );

  ctx.closePath();

}

/* WRAP TEXT */

function wrapText(
ctx,text,x,y,maxWidth,lineHeight
){

  const words=text.split(" ");
  let line="";

  for(let n=0;n<words.length;n++){

    const testLine=
    line+words[n]+" ";

    const testWidth=
    ctx.measureText(testLine).width;

    if(testWidth>maxWidth&&n>0){

      ctx.fillText(line,x,y);

      line=words[n]+" ";

      y+=lineHeight;

    }else{

      line=testLine;

    }

  }

  ctx.fillText(line,x,y);

}

/* INIT */

generateQR();