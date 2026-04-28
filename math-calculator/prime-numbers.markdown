---
layout: default
title: What is a Prime Number? Definition, Example & Prime Number Finder
permalink: /prime-number
description: "Learn what a prime number is with definition, examples, and list. Use our free Prime Number Finder to check any number instantly online."
image: "/assets/images/prime-numbers-1-to-100-chart.jpg"
last_modified_at: 2026-04-28
---

<style>
.prime-card{border-radius:2rem;border:none;backdrop-filter:blur(2px);background:#fffffff5;box-shadow:0 25px 45px -12px #0003 0 2px 6px #00000005;transition:transform .2s ease}.prime-card:hover{transform:translateY(-4px)}.result-badge{font-size:1.35rem;font-weight:600;padding:.8rem 1.2rem;border-radius:2rem;letter-spacing:-.2px}.check-btn{border-radius:2.5rem;padding:.7rem 1.8rem;font-weight:600;background:#0d6efd;border:none;box-shadow:0 6px 14px #0d6efd40;transition:all .2s}.check-btn:hover{background:#0b5ed7;transform:scale(1.02);box-shadow:0 10px 18px #0d6efd59}.reset-btn{border-radius:2.5rem;padding:.7rem 1.8rem;font-weight:500;background:#f8f9fa;border:1px solid #dee2e6;color:#2c3e50;transition:.2s}.reset-btn:hover{background:#e9ecef;transform:scale(0.98)}.input-number{border-radius:2rem;padding:.8rem 1.2rem;font-size:1.1rem;border:1.5px solid #e2e8f0;transition:all .2s;background-color:#fff}.input-number:focus{border-color:#0d6efd;box-shadow:0 0 0 4px #0d6efd33;outline:none}.info-text{font-size:.9rem;background:#f1f3f9;border-radius:1.5rem;padding:.65rem 1rem}.prime-example{font-size:.85rem;color:#4b5565}.footnote{border-top:1px solid #e9edf2;font-size:.8rem;color:#6c757d}@media (max-width: 576px){body{padding:1rem .75rem}.result-badge{font-size:1.1rem}.check-btn,.reset-btn{width:100%;margin-bottom:.5rem}.button-group{flex-direction:column;gap:.6rem}}
</style>
 <div class="row justify-content-center align-items-center g-4">
  <div class="col-lg-7 col-md-9 col-12">
  <!-- Main Card -->
 <div class="card prime-card p-4 p-md-5 shadow-lg" id="prime-checker">
  <div class="card-body text-center">
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



<div class="bg-light p-4 rounded mt-4">
   <h2 class="text-primary"><i class="fas fa-star me-2"></i>Properties of Prime Numbers</h2>
   <p>Prime numbers have several important properties:</p>
    <ul class="list-group list-group-flush mb-4">
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>They are always greater than 1</li>
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>They have exactly two divisors</li>
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>They cannot be formed by multiplying smaller natural numbers</li>
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>There are infinitely many prime numbers</li>
     <li class="list-group-item bg-light"><i class="fas fa-check-circle text-success me-2"></i>Every number greater than 1 can be expressed as a product of prime numbers</li>
    </ul>
    <p>This last property is known as the <strong>Fundamental Theorem of Arithmetic</strong>, which makes prime numbers the &ldquo;building blocks&rdquo; of all numbers.</p>
   </div>


<div class="container py-5">
  <div class="row align-items-center bg-white rounded-4 shadow-sm p-4 p-md-5">
    <!-- Left side: Content -->
    <div class="col-md-6">
      <h2 class="fw-bold mb-3">Examples of Prime Numbers</h2>
      <p class="text-muted mb-3"> Prime numbers are numbers that are divisible only by <strong>1</strong> and themselves. Here are some common examples:</p>
      <!-- Highlight Numbers -->
      <div class="bg-light rounded-3 p-3 mb-4 text-center">
        <span class="fs-4 fw-bold text-primary"> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29... </span>
      </div>
      <!-- Key Points -->
      <h5 class="fw-semibold mb-3">Key Points</h5>
      <ul class="list-unstyled mb-4">
        <li class="mb-2">✔ <strong>2</strong> is the only even prime number</li>
        <li class="mb-2">✔ All other prime numbers are <strong>odd</strong></li>
        <li class="mb-2">✔ <strong>1</strong> is not considered a prime number</li>
      </ul>
    </div>
    <!-- Right side: Image -->
    <div class="col-md-6 text-center mt-4 mt-md-0">
      <img src="/assets/images/prime-numbers-1-to-100-chart.jpg" alt="Prime numbers from 1 to 100 chart showing highlighted prime numbers" class="img-fluid rounded-4 shadow-sm"   width="600"  height="600"  loading="lazy"  decoding="async">
      <p class="mt-2 text-muted small">Prime numbers from 1 to 100</p>
    </div>
  </div>
</div>

<div class="bg-light p-3 rounded mb-4 text-center">
  <p class="mb-2 fw-semibold">Check any number instantly 👇</p>
  <a href="#prime-checker" class="btn btn-primary rounded-pill px-4">
    🔢 Open Prime Number Finder
  </a>
</div>

<!-- FAQ Section -->
<section class="mb-5">
  <h2 class="mb-4">FAQ on Prime Numbers</h2>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">1. Are all prime numbers odd?</div>
      <p class="mb-0">
        No, not all prime numbers are odd. <strong>2</strong> is the only even prime number.
        All other prime numbers are odd because they are not divisible by 2.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">2. How many prime numbers are there between 1 and 100?</div>
      <p class="mb-0">
        There are <strong>25 prime numbers</strong> between 1 and 100.
        Examples include 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">3. Is 7 a prime number?</div>
      <p class="mb-0">
        Yes, <strong>7 is a prime number</strong> because it has only two factors: 1 and 7.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">4. What is the smallest prime number?</div>
      <p class="mb-0">
        The smallest prime number is <strong>2</strong>. It is also the only even prime number.
      </p>
    </div>
  </div>

  <div class="card mb-3 border-0 bg-light">
    <div class="card-body">
      <div class="fw-bold text-primary">5. Is 1 a prime number?</div>
      <p class="mb-0">
        No, <strong>1 is not a prime number</strong> because it has only one factor (itself).
        A prime number must have exactly two factors.
      </p>
    </div>
  </div>

</section>


<!-- Did You Know? -->
<section class="mb-5">
  <div class="bg-primary bg-opacity-10 rounded-4 p-4 shadow-sm">
    <h3><i class="fas fa-lightbulb text-warning me-2"></i>Did You Know?</h3>
    <ul class="mb-0">
      <li class="mb-2">Around <strong>300 BC</strong>, the mathematician <strong>Euclid</strong> proved that there are infinitely many prime numbers.</li>
      <li class="mb-2">The <strong>Sieve of Eratosthenes</strong> is one of the oldest and fastest methods to find prime numbers.</li>
      <li class="mb-2">Prime numbers are used in <strong>encryption and cybersecurity</strong> to protect online transactions.</li>
      <li class="mb-2">Some primes come in pairs like <strong>(11, 13)</strong>, called <strong>twin primes</strong>.</li>
    </ul>
  </div>
</section>

<p class="mt-2">You can also use our <strong>Prime Number Finder</strong> tool above to quickly check whether any number is prime or not.</p>


<script src="{{ '/assets/js/math/prime-number.js' | relative_url }}"></script>