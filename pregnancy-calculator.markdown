---
layout: default
title: Pregnancy Due Date Calculator – Find Your Baby’s Due Date
permalink: /pregnancy-due-date-calculator
description: "Use our free Pregnancy Due Date Calculator to estimate your baby’s due date based on the first day of your last period or conception date. Track your pregnancy week-by-week!"
image: "/assets/images/pregnancy-calculator.jpg"
---

<div class="container py-5">
    <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="card shadow-lg">
                    <div class="card-header bg-primary text-white">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-baby-carriage fa-2x me-3"></i>
                            <div>
                                <h1 class="h4 mb-0">Pregnancy Due Date Calculator</h1>
                                <p class="small mb-0">Estimate your baby's arrival date</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="p-4 border rounded bg-white">
                                    <h2 class="h5 mb-4 text-center text-primary"><i class="fas fa-calendar-alt me-2"></i>Calculate from LMP </h2>
                                    <form id="lmpForm">
                                        <div class="mb-3">
                                            <label for="lmpDate" class="form-label">First day of last menstrual period:</label>
                                            <input type="text" class="form-control datepicker" id="lmpDate" placeholder="Select date" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="cycleLength" class="form-label">Average cycle length (days):</label>
                                            <select class="form-select" id="cycleLength">
                                                <option value="28" selected>28 (average)</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                            </select>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100"><i class="fas fa-calculator me-2"></i>Calculate Due Date</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-4 border rounded bg-white">
                                    <h2 class="h5 mb-4 text-center text-primary"><i class="fas fa-heartbeat me-2"></i>Calculate from Conception</h2>
                                    <form id="conceptionForm">
                                        <div class="mb-3">
                                            <label for="conceptionDate" class="form-label">Conception date:</label>
                                            <input type="text" class="form-control datepicker" id="conceptionDate" placeholder="Select date" required>
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label">Or select conception method:</label>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="conceptionMethod" id="ivf" value="ivf">
                                                <label class="form-check-label" for="ivf">
                                                    <i class="fas fa-flask me-1"></i>IVF/Embryo Transfer
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="conceptionMethod" id="iui" value="iui">
                                                <label class="form-check-label" for="iui">
                                                    <i class="fas fa-syringe me-1"></i>IUI
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary w-100"><i class="fas fa-calculator me-2"></i>Calculate Due Date</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="results" class="mt-4 p-4 border rounded bg-white text-center d-none">
                            <h2 class="h4 mb-3 text-success"> <i class="fas fa-baby me-2"></i>Your Pregnancy Results</h2>
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <div class="p-3 border rounded bg-light">
                                        <h3 class="h6 text-muted"><i class="fas fa-calendar-check me-1"></i>Due Date</h3>
                                        <p class="h4 text-primary" id="dueDate">--</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="p-3 border rounded bg-light">
                                        <h3 class="h6 text-muted"><i class="fas fa-clock me-1"></i>Current Gestation</h3>
                                        <p class="h4 text-primary" id="gestation">--</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="p-3 border rounded bg-light">
                                        <h3 class="h6 text-muted"><i class="fas fa-heart me-1"></i>Conception Date</h3>
                                        <p class="h4 text-primary" id="conception">--</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="progress" style="height: 25px;">
                                    <div id="progressBar" class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 0%">0%</div>
                                </div>
                                <small class="text-muted"><i class="fas fa-chart-line me-1"></i>Pregnancy progress</small>
                            </div>
                            <div class="mt-3">
                                <button id="resetBtn" class="btn btn-outline-secondary"><i class="fas fa-redo me-2"></i>Reset Calculator</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-light">
                        <div class="small text-muted">
                            <i class="fas fa-info-circle me-1"></i> This calculator provides an estimate only. 
                            Only 5% of babies are born on their exact due date. Consult your healthcare provider.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="{{ '/assets/js/pregnancy-calc.js' | relative_url }}"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
