---
layout: default
title: What is a Prime Number? Definition, Example & Prime Checker
permalink: /prime-number
description: "Learn what a prime number is with simple examples, prime numbers from 1 to 100, prime vs composite numbers, and a free Prime Number Checker."
image: "/assets/images/prime-numbers-1-to-100-chart.jpg"
last_modified_at: 2026-08-21
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



<!-- Why 1 Is Not Prime -->
<div class="mb-5">
 <h2>Why Is 1 Not a Prime Number?</h2>
  <p><strong>1 is not a prime number.</strong></p>
  <p>A prime number must have exactly two factors: <strong>1</strong> and itself.</p>
  <p>The number 1 has only one factor, which is 1. Therefore, it does not meet the definition of a prime number.</p>
 </div>
 <!-- Is 2 Prime -->
 <div class="mb-5">
  <h2>Is 2 a Prime Number?</h2>
     <p>Yes, <strong>2 is a prime number</strong>.</p>
     <p>It has exactly two factors:</p>
     <div class="alert alert-primary"><strong>1 × 2 = 2</strong></div>
     <p>The number 2 is special because it is the <strong>only even prime number</strong>. Every other even number can be divided by 2 and therefore has more than two factors.</p>
   </div>

  <!-- Prime vs Composite -->
<div class="mb-5">
<h2>Prime Numbers vs Composite Numbers</h2>
<p>Prime and composite numbers are different because of the number of factors they have. </p>
<div class="table-responsive">
<table class="table table-bordered table-striped align-middle"><thead class="table-primary"><tr><th>Prime Number</th><th>Composite Number</th></tr></thead><tbody><tr><td>Has exactly two factors</td><td>Has more than two factors</td></tr><tr><td>Greater than 1</td><td>Greater than 1</td></tr><tr><td>Example: 7</td><td>Example: 12</td></tr><tr><td>Factors of 7: 1, 7</td><td>Factors of 12: 1, 2, 3, 4, 6, 12</td></tr></tbody></table>
</div>
<p>For example, <strong>7 is prime</strong>because only 1 and 7 divide it exactly. </p><p>But <strong>12 is composite</strong>because it can be divided by 1, 2, 3, 4, 6, and 12. </p>
</div>

 <!-- How to Check -->
 <div class="mb-5"><h2>How to Check if a Number Is Prime</h2><p>You can use a simple method to check whether a number is prime. </p><ol><li>Make sure the number is greater than 1.</li><li>Try dividing it by smaller numbers.</li><li>If another number divides it exactly, it is not prime.</li><li>If no other number divides it exactly, the number is prime.</li></ol><h3 class="h4 mt-4">Example: Is 29 a Prime Number?</h3><p>Let's check 29:</p><ul><li>29 cannot be divided evenly by 2.</li><li>29 cannot be divided evenly by 3.</li><li>29 cannot be divided evenly by 5.</li></ul><div class="alert alert-success">Therefore, <strong>29 is a prime number</strong>. </div><p>You can also use our <strong>Prime Number Checker</strong>to check a number quickly. </p></div>

 <!-- Factors -->
 <section class="mb-5"><h2>What Are the Factors of a Prime Number?</h2><p>A prime number has exactly two factors. </p><p>For example: </p><div class="bg-light rounded-3 p-3 mb-3"><strong>13 → 1 × 13</strong></div><p>So, the factors of 13 are <strong>1 and 13</strong>. </p><div class="bg-light rounded-3 p-3 mb-3"><strong>17 → 1 × 17</strong></div><p>Therefore, the factors of 17 are <strong>1 and 17</strong>. </p></section>


 <!-- Importance -->
 <section class="mb-5"><h2>Why Are Prime Numbers Important?</h2><p>Prime numbers are important in mathematics because they are the basic building blocks of whole numbers. </p><p>For example: </p><div class="alert alert-light border"><strong>12=2 × 2 × 3</strong></div><p>The number 12 can be broken down into prime numbers. </p><p>Prime numbers are also used in areas such as <strong>computer science, encryption, and cybersecurity</strong>. </p></section>


 <!-- Interesting Facts -->
 <section class="mb-5"><div class="card border-0 bg-light shadow-sm"><div class="card-body p-4"><h2 class="h3 mb-3"><i class="fas fa-lightbulb text-warning me-2"></i>Interesting Facts About Prime Numbers </h2><ul class="mb-0"><li class="mb-2"><strong>2</strong>is the smallest prime number. </li><li class="mb-2"><strong>2</strong>is the only even prime number. </li><li class="mb-2"><strong>1 is not a prime number.</strong></li><li class="mb-2">There are <strong>25 prime numbers from 1 to 100</strong>. </li><li class="mb-2">Prime numbers continue forever. </li><li>Numbers greater than 1 can be broken down into prime factors. </li></ul></div></div></section>

 <!-- Prime Number Checker CTA -->
 <section class="mb-5"><div class="bg-primary bg-opacity-10 rounded-4 p-4 p-md-5 text-center"><h2>Use the Prime Number Checker</h2><p>Not sure whether a number is prime? Enter a number into our <strong>Prime Number Checker</strong>to quickly find out whether it is a prime or composite number. </p><p class="mb-4">The tool is useful for students, teachers, and anyone working with numbers. </p><a href="#prime-checker" class="btn btn-primary rounded-pill px-4"><i class="fas fa-calculator me-2"></i>Check a Number </a></div></section>

 <!-- FAQ -->
 <section class="mb-5"><h2 class="mb-4">Frequently Asked Questions About Prime Numbers</h2><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">1. What is a prime number? </h3><p class="mb-0">A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself. Examples include 2, 3, 5, 7, and 11. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">2. Is 1 a prime number? </h3><p class="mb-0">No. The number 1 is not prime because it has only one factor. A prime number must have exactly two factors. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">3. Is 2 a prime number? </h3><p class="mb-0">Yes. 2 is a prime number and is the only even prime number. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">4. How many prime numbers are there between 1 and 100? </h3><p class="mb-0">There are <strong>25 prime numbers</strong>between 1 and 100. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">5. What is the smallest prime number? </h3><p class="mb-0">The smallest prime number is <strong>2</strong>. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">6. Is 7 a prime number? </h3><p class="mb-0">Yes. 7 is prime because its only factors are 1 and 7. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">7. What is the difference between a prime and composite number? </h3><p class="mb-0">A prime number has exactly two factors, while a composite number has more than two factors. For example, 7 is prime and 12 is composite. </p></div></div><div class="card mb-3 border-0 bg-light"><div class="card-body"><h3 class="h5 fw-bold text-primary">8. Are there infinitely many prime numbers? </h3><p class="mb-0">Yes. There are infinitely many prime numbers, so there is no largest prime number. </p></div></div></section>





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