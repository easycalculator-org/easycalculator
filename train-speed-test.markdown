---
layout: default
title: Train Speed Test | Check Real-Time Train Speed Online
permalink: /train-speed-test
description: "Instantly test and monitor the real-time speed of your train using GPS technology. Perfect for train travelers, rail enthusiasts, and data lovers. Try our Train Speed Test online — fast, free, and accurate!"
---
<style>

        .speed-display {
            font-size: 3rem;
            font-weight: bold;
            text-align: center;
            margin: 15px 0;
        }
        .unit-selector {
            margin-bottom: 15px;
            text-align: center;
        }
        .btn-unit {
            padding: 5px 10px;
            font-size: 0.9rem;
        }
        .gps-status {
            font-size: 0.8rem;
            text-align: center;
            margin: 10px 0;
        }
        .gps-active {
            color: green;
        }
        .gps-inactive {
            color: red;
        }
        .btn-start {
            width: 100%;
            padding: 10px;
            font-weight: bold;
        }
        .max-speed {
            font-size: 0.9rem;
            text-align: center;
            margin-top: 10px;
        }
    </style>

  <div class="container">
        <h5 class="text-center mb-3">Train Speed Test</h5>
        <div class="unit-selector">
            <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-primary btn-unit active" data-unit="kmh">km/h</button>
                <button class="btn btn-outline-primary btn-unit" data-unit="mph">mph</button>
                <button class="btn btn-outline-primary btn-unit" data-unit="ms">m/s</button>
            </div>
        </div>
        <div class="speed-display">
            <span id="speed-value">0</span>
            <span id="speed-unit">km/h</span>
        </div>
        <div class="gps-status gps-inactive" id="gps-status">
            GPS Not Active
        </div>
        <button class="btn btn-primary btn-start" id="start-btn">
            Start GPS Speed Test
        </button>
        <div class="max-speed">
            Max: <span id="max-speed">0</span> <span class="max-speed-unit">km/h</span>
        </div>
    </div>

<!-- Bootstrap JS Bundle with Popper -->
 <script src="{{ '/assets/js/train-speed-test.js' | relative_url }}"></script>
