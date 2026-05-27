pdfjsLib.GlobalWorkerOptions.workerSrc =
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

const fileInput = document.getElementById('pdfFile');
const uploadBox = document.getElementById('uploadBox');

const fileInfo = document.getElementById('fileInfo');
const fileName = document.getElementById('fileName');
const fileSize = document.getElementById('fileSize');

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

const unlockBtn = document.getElementById('unlockBtn');
const spinner = document.getElementById('spinner');

const successArea = document.getElementById('successArea');
const pdfPreview = document.getElementById('pdfPreview');

const downloadBtn = document.getElementById('downloadBtn');
const printBtn = document.getElementById('printBtn');

const floatingDownload = document.getElementById('floatingDownload');
const floatingPrint = document.getElementById('floatingPrint');

const messageBox = document.getElementById('messageBox');

let currentURL = null;
let currentPdfDoc = null;

// Upload Click
uploadBox.addEventListener('click', () => {
  fileInput.click();
});

// Drag Over
uploadBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadBox.style.borderColor = '#2563eb';
});

// Drag Leave
uploadBox.addEventListener('dragleave', () => {
  uploadBox.style.borderColor = '#cbd5e1';
});

// Drop
uploadBox.addEventListener('drop', (e) => {

  e.preventDefault();

  const file = e.dataTransfer.files[0];

  if(file){

    fileInput.files = e.dataTransfer.files;

    showFile(file);

  }

});

// File Change
fileInput.addEventListener('change', () => {

  if(fileInput.files[0]){

    showFile(fileInput.files[0]);

  }

});

// Show File
function showFile(file){

  fileInfo.classList.remove('d-none');

  fileName.textContent = file.name;

  fileSize.textContent =
    (file.size / 1024 / 1024).toFixed(2) + ' MB';

}

// Message
function showMessage(message,type='danger'){

  messageBox.innerHTML = `
    <div class="alert alert-${type}">
      ${message}
    </div>
  `;

}

// Toggle Password
togglePassword.addEventListener('click', () => {

  const type =
    passwordInput.type === 'password'
    ? 'text'
    : 'password';

  passwordInput.type = type;

  togglePassword.innerHTML =
    type === 'password'
    ? '<i class="bi bi-eye-fill"></i>'
    : '<i class="bi bi-eye-slash-fill"></i>';

});

// Unlock PDF
unlockBtn.addEventListener('click', async () => {

  const file = fileInput.files[0];
  const password = passwordInput.value;

  if(!file){

    showMessage(
      'Please select a PDF file.',
      'warning'
    );

    return;

  }

  if(!password){

    showMessage(
      'Please enter PDF password.',
      'warning'
    );

    return;

  }

  unlockBtn.disabled = true;
  spinner.classList.remove('d-none');

  successArea.classList.add('d-none');

  try{

    const arrayBuffer = await file.arrayBuffer();

    // FIRST TRY PDF-LIB
    try{

      const pdfDocument =
        await PDFLib.PDFDocument.load(
          arrayBuffer,
          {
            password
          }
        );

      const pdfBytes =
        await pdfDocument.save();

      const blob =
        new Blob(
          [pdfBytes],
          { type:'application/pdf' }
        );

      if(currentURL){

        URL.revokeObjectURL(currentURL);

      }

      currentURL =
        URL.createObjectURL(blob);

      const downloadName =
        file.name.replace(
          /\.pdf$/i,
          '_unlocked.pdf'
        );

      pdfPreview.src = currentURL;

      downloadBtn.href = currentURL;
      downloadBtn.download = downloadName;

      floatingDownload.href = currentURL;
      floatingDownload.download = downloadName;

      successArea.classList.remove('d-none');

      floatingDownload.classList.remove('d-none');
      floatingPrint.classList.remove('d-none');

      showMessage(
        'PDF unlocked successfully!',
        'success'
      );

    }
    catch(pdfLibError){

      console.log(
        'pdf-lib failed, using pdf.js fallback'
      );

      // FALLBACK PDFJS
      const loadingTask =
        pdfjsLib.getDocument({
          data:arrayBuffer,
          password:password
        });

      currentPdfDoc =
        await loadingTask.promise;

      successArea.classList.remove('d-none');

      floatingPrint.classList.remove('d-none');

      showMessage(`
        PDF opened successfully.<br><br>

        This file uses advanced encryption.<br>

        Use the PRINT button and choose:
        <strong>Save as PDF</strong>

        to create unlocked PDF.
      `,'info');

      // Preview first page
      const page =
        await currentPdfDoc.getPage(1);

      const viewport =
        page.getViewport({ scale:1.5 });

      const canvas =
        document.createElement('canvas');

      const context =
        canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext:context,
        viewport:viewport
      }).promise;

      pdfPreview.replaceWith(canvas);

    }

  }
  catch(error){

    console.error(error);

    showMessage(`
      Unable to open PDF.<br><br>

      Possible reasons:
      <ul class="mb-0 mt-2">
        <li>Wrong password</li>
        <li>Corrupted PDF</li>
        <li>Unsupported security</li>
      </ul>
    `,'danger');

  }
  finally{

    unlockBtn.disabled = false;

    spinner.classList.add('d-none');

  }

});

// Print
printBtn.addEventListener('click', async () => {

  // Standard unlocked PDF
  if(currentURL){

    const printWindow =
      window.open(currentURL);

    printWindow.onload = () => {

      printWindow.focus();

      setTimeout(() => {

        printWindow.print();

      },500);

    };

    return;

  }

  // PDFJS fallback
  if(currentPdfDoc){

    const printWindow =
      window.open('', '_blank');

    printWindow.document.write(`
      <html>
      <head>
        <title>Print PDF</title>
        <style>
          body{
            margin:0;
            text-align:center;
          }
          canvas{
            width:100%;
            margin-bottom:20px;
          }
        </style>
      </head>
      <body></body>
      </html>
    `);

    for(let i=1;i<=currentPdfDoc.numPages;i++){

      const page =
        await currentPdfDoc.getPage(i);

      const viewport =
        page.getViewport({ scale:2 });

      const canvas =
        document.createElement('canvas');

      const context =
        canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext:context,
        viewport:viewport
      }).promise;

      printWindow.document.body.appendChild(canvas);

    }

    setTimeout(() => {

      printWindow.focus();

      printWindow.print();

    },1000);

  }

});

// Floating Print
floatingPrint.addEventListener('click', () => {

  printBtn.click();

});