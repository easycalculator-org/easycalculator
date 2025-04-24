
const editor = ace.edit("editor");
editor.session.setMode("ace/mode/json");
editor.setTheme("ace/theme/github");
editor.setOptions({ showPrintMargin: false, tabSize: 2, useSoftTabs: true });
let isPretty = false;

function validateJSON() {
  const resultDiv = document.getElementById("result");
  const jsonString = editor.getValue();
  editor.session.clearAnnotations();
  resultDiv.innerHTML = "";

  try {
    JSON.parse(jsonString);
    resultDiv.innerHTML = `<div class="alert alert-success">✅ Valid JSON</div>`;
  } catch (err) {
    const message = err.message;
    const lineMatch = message.match(/position (\d+)/);
    let line = 0;
    if (lineMatch) {
      const pos = parseInt(lineMatch[1]);
      line = editor.session.getDocument().indexToPosition(pos).row;
    }
    editor.session.setAnnotations([{ row: line, column: 0, text: message, type: "error" }]);
    resultDiv.innerHTML = `
      <div class="alert alert-danger">
        ❌ <strong>Invalid JSON on line ${line + 1}:</strong><br>${message}
      </div>
      <div class="suggestion">
        💡 Suggestion: Check for syntax issues, missing quotes, commas, or braces.
      </div>
    `;
  }
}

function toggleFormat() {
  try {
    const parsed = JSON.parse(editor.getValue());
    const formatToggle = document.getElementById("formatToggle");

    if (isPretty) {
      editor.setValue(JSON.stringify(parsed), -1);
      formatToggle.textContent = "Pretty";
    } else {
      editor.setValue(JSON.stringify(parsed, null, 2), -1);
      formatToggle.textContent = "Compress";
    }
    isPretty = !isPretty;
  } catch {
    alert("❌ Invalid JSON. Cannot format.");
  }
}

function clearEditor() {
  editor.setValue("", -1);
  document.getElementById("result").innerHTML = `<p class="text-muted">Editor cleared.</p>`;
  isPretty = false;
  document.getElementById("formatToggle").textContent = "Pretty";
}

function copyCode() {
  const text = editor.getValue();
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = "✅ Copied";
    setTimeout(() => btn.innerHTML = originalText, 1500);
  });
}