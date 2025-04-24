---
layout: default
title: Free Online JSON Validator & Formatter Tool
permalink: /jsonvalidator
description: "Validate and format your JSON instantly with our free online JSON Validator. Easy to use, fast, and perfect for developers."
---
<style>#editor{height:400px;border-radius:.375rem}.copy-btn{position:absolute;top:8px;right:8px;z-index:10}.ace_error-line{background-color:#f8d7da!important}.suggestion{font-style:italic;color:#6c757d}.btn-group .btn{margin-right:.5rem}  </style>
<h2 class="mb-4 text-center">🧪 JSON Validator & Formatter</h2>
<div class="card shadow-sm">
 <div class="card-body">
<!-- Editor Part JSON -->
<div id="editorWrapper" class="mb-3">
  <button class="btn btn-sm btn-secondary copy-btn" onclick="copyCode()">📋 Copy</button>
  <div id="editor">{ "name": "John", "age": 30 }</div>
 </div>

 <!-- Buttons for copy data-->
<div class="d-flex flex-wrap gap-2">
        <button class="btn btn-primary" onclick="validateJSON()">Validate</button>
        <button id="formatToggle" class="btn btn-success" onclick="toggleFormat()">Pretty</button>
        <button class="btn btn-danger" onclick="clearEditor()">Clear</button>
      </div>

 <!-- Validation Results -->
      <div id="result" class="mt-4"></div>

</div>
  </div>


<!-- Ace Editor -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.3/ace.js"></script>
<script src="{{ '/assets/js/json-validator.js' | relative_url }}"></script>
