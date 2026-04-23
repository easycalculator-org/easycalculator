---
layout: default
title: What is a Prime Number? Definition, Examples & List
permalink: /prime-number
description: "Prime numbers explained with examples and list. Learn definition, properties, and difference between prime and composite numbers."
last_modified_at: 2026-04-24
---

<style>
.prime-card{border-radius:2rem;border:none;backdrop-filter:blur(2px);background:#fffffff5;box-shadow:0 25px 45px -12px #0003 0 2px 6px #00000005;transition:transform .2s ease}.prime-card:hover{transform:translateY(-4px)}.result-badge{font-size:1.35rem;font-weight:600;padding:.8rem 1.2rem;border-radius:2rem;letter-spacing:-.2px}.check-btn{border-radius:2.5rem;padding:.7rem 1.8rem;font-weight:600;background:#0d6efd;border:none;box-shadow:0 6px 14px #0d6efd40;transition:all .2s}.check-btn:hover{background:#0b5ed7;transform:scale(1.02);box-shadow:0 10px 18px #0d6efd59}.reset-btn{border-radius:2.5rem;padding:.7rem 1.8rem;font-weight:500;background:#f8f9fa;border:1px solid #dee2e6;color:#2c3e50;transition:.2s}.reset-btn:hover{background:#e9ecef;transform:scale(0.98)}.input-number{border-radius:2rem;padding:.8rem 1.2rem;font-size:1.1rem;border:1.5px solid #e2e8f0;transition:all .2s;background-color:#fff}.input-number:focus{border-color:#0d6efd;box-shadow:0 0 0 4px #0d6efd33;outline:none}.info-text{font-size:.9rem;background:#f1f3f9;border-radius:1.5rem;padding:.65rem 1rem}.prime-example{font-size:.85rem;color:#4b5565}.footnote{border-top:1px solid #e9edf2;font-size:.8rem;color:#6c757d}@media (max-width: 576px){body{padding:1rem .75rem}.result-badge{font-size:1.1rem}.check-btn,.reset-btn{width:100%;margin-bottom:.5rem}.button-group{flex-direction:column;gap:.6rem}}
</style>

<div class="container">
 <div class="row justify-content-center align-items-center g-4">
  <div class="col-lg-6 col-md-8 col-12">
  <!-- Main Card -->
 <div class="card prime-card p-4 p-md-5 shadow-lg">
  <div class="card-body text-center">
   <div class="mb-3">
    <span class="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex"><i class="fas fa-shield-alt fa-2x text-primary"></i></span>
   </div>
  <h2 class="fw-bold mb-1">Prime Number Checker</h2>
    <p class="text-muted mb-4">Instantly test whether a number is prime or composite</p>
      <div class="mb-4">
       <label for="numberInput" class="form-label fw-semibold text-secondary">Enter an integer</label>
        <input type="number" id="numberInput" class="form-control input-number text-center"  placeholder="e.g., 17, 29, 101" value="19">
          <div class="prime-example mt-2"><i class="fas fa-info-circle me-1"></i>Positive integers only · Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23...</div>
          </div>
   <!-- Action Buttons -->
   <div class="d-flex button-group justify-content-center gap-3 mb-4 flex-wrap">
     <button id="checkBtn" class="btn check-btn text-white px-4"><i class="fas fa-check-circle me-2"></i>Check Prime</button>
     <button id="resetBtn" class="btn reset-btn px-4"><i class="fas fa-undo-alt me-2"></i>Clear</button>
    </div>
   <!-- Dynamic Result Section -->
    <div id="resultArea" class="mt-2 mb-3">
      <div class="result-badge bg-light text-dark border d-inline-flex align-items-center gap-2 px-4 py-2">
        <i class="fas fa-lightbulb text-warning"></i> <span>Ready — enter a number</span>
        </div>
       </div>
  </div>
  </div>
  </div>
 </div>
 </div>


<!-- Article Content -->
<div class="article-container">
  <div class="d-flex flex-wrap justify-content-between align-items-center mb-3 pb-3 border-bottom">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      {% include naren_create.html %}
      {% include reema_verify.html %}
    </div>
    <div class="text-muted small d-flex align-items-center gap-2 mt-4 mt-md-0"><i class="fas fa-calendar"></i> Last Updated: {{ site.time | date: "%d-%m-%Y" }}</div>
  </div>
   <!-- Article-->
  <h1>What is a Prime Number?</h1>
  <p>A <strong>prime number</strong> is a natural number greater than 1 that has exactly <strong>two factors: 1 and itself</strong>. These numbers cannot be divided evenly by any other number, making them fundamental in mathematics and number theory.</p>
<p>For example, <strong>2, 3, 5, and 7</strong> are prime numbers because they are only divisible by 1 and themselves.</p>
</div>


<script src="{{ '/assets/js/math/prime-number.js' | relative_url }}"></script>