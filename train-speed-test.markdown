---
layout: default
title: Train Speed Test | Check Real-Time Train Speed Online
permalink: /train-speed-test
description: "Instantly test and monitor the real-time speed of your train using GPS technology. Perfect for train travelers, rail enthusiasts, and data lovers. Try our Train Speed Test online — fast, free, and accurate!"
---

<style>
        .speed-container {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            color: white;
            padding: 30px;
            margin-top: 30px;
            position: relative;
            overflow: hidden;
        }
        .speed-container::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
            transform: rotate(30deg);
            animation: shine 3s infinite;
        }
        @keyframes shine {
            0% { transform: rotate(30deg) translate(-10%, -10%); }
            100% { transform: rotate(30deg) translate(10%, 10%); }
        }
        .digital-display {
            font-size: 5rem;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            font-family: 'Segment7Standard', monospace;
        }
        .unit-selector {
            margin-bottom: 20px;
        }
        .btn-unit {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            margin: 0 5px;
        }
        .btn-unit.active {
            background-color: #0d6efd;
            box-shadow: 0 0 10px rgba(13, 110, 253, 0.7);
        }
        .btn-unit:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
        .analog-container {
            position: relative;
            width: 300px;
            height: 300px;
            margin: 0 auto;
        }
        
        .speedometer {
            width: 100%;
            height: 100%;
        }
        
        .needle {
            position: absolute;
            top: 15%;
            left: 50%;
            width: 4px;
            height: 35%;
            background-color: #ff3d3d;
            transform-origin: bottom center;
            transform: translateX(-50%) rotate(-90deg);
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(255, 61, 61, 0.7);
            transition: transform 0.5s ease-out;
            z-index: 10;
        }
        
        .start-btn {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            border: none;
            padding: 12px 30px;
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0, 242, 254, 0.4);
            transition: all 0.3s;
        }
        
        .start-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 242, 254, 0.6);
        }

        .start-btn:active {
            transform: translateY(1px);
        }
        .train-icon {
            font-size: 2rem;
            margin-right: 10px;
            animation: moveTrain 0.5s infinite alternate;
        }
        @keyframes moveTrain {
            0% { transform: translateX(0); }
            100% { transform: translateX(5px); }
        }
        
        @font-face {
            font-family: 'Segment7Standard';
            src: url('https://cdn.rawgit.com/raphaelbastide/Segment7Standard/master/Segment7Standard.otf') format('opentype');
            font-weight: normal;
            font-style: italic;
        }
        .max-speed {
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 0.8rem;
            opacity: 0.7;
        }
        .gps-status {
            margin-top: 15px;
            font-size: 0.9rem;
        }
        .gps-active {
            color: #4caf50;
        }
        .gps-inactive {
            color: #f44336;
        }
        .coordinates {
            font-size: 0.8rem;
            margin-top: 10px;
            opacity: 0.7;
        }
    </style>

 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="speed-container text-center">
                    <h1><i class="fas fa-train train-icon"></i>Train Speed Test (GPS)</h1>
                    <div class="unit-selector">
                        <p class="mb-2">Select Speed Unit:</p>
                        <div class="btn-group">
                            <button class="btn btn-unit active" data-unit="kmh">km/h</button>
                            <button class="btn btn-unit" data-unit="mph">mph</button>
                            <button class="btn btn-unit" data-unit="ms">m/s</button>
                        </div>
                    </div>
                    <div class="analog-container">
                    <svg class="speedometer" viewBox="0 0 100 50"><!-- Speedometer background --><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="#444" stroke-width="2"/><!-- Speedometer ticks and labels --><path d="M10,50 A40,40 0 0,1 90,50" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="20" stroke-dasharray="1,4.5" stroke-linecap="round"/><!-- KM/H labels --> <text x="15" y="40" fill="white" font-size="3" class="kmh-label">0</text> <text x="30" y="25" fill="white" font-size="3" class="kmh-label">50</text> <text x="50" y="15" fill="white" font-size="3" class="kmh-label">100</text> <text x="70" y="25" fill="white" font-size="3" class="kmh-label">150</text> <text x="85" y="40" fill="white" font-size="3" class="kmh-label">200</text><!-- MPH labels (hidden by default) --><text x="15" y="45" fill="white" font-size="3" class="mph-label" style="display:none">0</text><text x="30" y="30" fill="white" font-size="3" class="mph-label" style="display:none">30</text><text x="50" y="20" fill="white" font-size="3" class="mph-label" style="display:none">60</text> <text x="70" y="30" fill="white" font-size="3" class="mph-label" style="display:none">90</text><text x="85" y="45" fill="white" font-size="3" class="mph-label" style="display:none">120</text><!-- M/S labels (hidden by default) --><text x="15" y="45" fill="white" font-size="3" class="ms-label" style="display:none">0</text><text x="30" y="30" fill="white" font-size="3" class="ms-label" style="display:none">15</text><text x="50" y="20" fill="white" font-size="3" class="ms-label" style="display:none">30</text><text x="70" y="30" fill="white" font-size="3" class="ms-label" style="display:none">45</text><text x="85" y="45" fill="white" font-size="3" class="ms-label" style="display:none">60</text></svg>
                        <div class="needle" id="needle"></div>
                    </div>
                    <div class="digital-display">
                        <span id="speed-value">0</span>
                        <span id="speed-unit">km/h</span>
                    </div>
                    <button class="btn start-btn mb-3" id="start-btn"><i class="fas fa-location-arrow"></i> Start GPS Speed Test</button>
                    <div class="gps-status gps-inactive" id="gps-status">
                        <i class="fas fa-circle"></i> GPS Not Active
                    </div>
                    <div class="coordinates" id="coordinates">
                        Latitude: 0, Longitude: 0
                    </div>
                    <div class="max-speed">
                        Max speed: <span id="max-speed">0</span> <span class="max-speed-unit">km/h</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- Bootstrap JS Bundle with Popper -->
 <script src="{{ '/assets/js/train-speed-test.js' | relative_url }}"></script>
