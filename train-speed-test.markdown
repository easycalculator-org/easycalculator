---
layout: default
title: Train Speed Test | Check Real-Time Train Speed Online
permalink: /train-speed-test
description: "Instantly test and monitor the real-time speed of your train using GPS technology. Perfect for train travelers, rail enthusiasts, and data lovers. Try our Train Speed Test online — fast, free, and accurate!"
---
<style>
        :root {
            --primary-color: #3498db;
            --danger-color: #e74c3c;
            --success-color: #2ecc71;
            --dark-color: #2c3e50;
            --light-color: #ecf0f1;
        }
        
     
        .speed-container {
            max-width: 500px;
            margin: 20px auto;
            padding: 30px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .speed-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, var(--primary-color), var(--success-color));
        }
        
        .header {
            text-align: center;
            margin-bottom: 25px;
        }
        
        .header h4 {
            color: var(--dark-color);
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .header p {
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        
        .digital-display {
            text-align: center;
            margin: 30px 0;
            position: relative;
        }
        
        .speed-value-container {
            display: inline-block;
            position: relative;
            padding: 0 20px;
        }
        
        .speed-value {
            font-size: 5rem;
            font-weight: 700;
            color: var(--dark-color);
            font-family: 'Segment7Standard', monospace;
            line-height: 1;
            text-shadow: 0 0 10px rgba(52, 152, 219, 0.2);
            position: relative;
            display: inline-block;
            min-width: 180px;
        }
        
        .speed-unit {
            font-size: 1.8rem;
            color: var(--primary-color);
            vertical-align: top;
            margin-left: 5px;
            font-weight: 600;
            position: absolute;
            right: 0;
            top: 15px;
        }
        
        .speed-value::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-color), var(--success-color));
            border-radius: 3px;
        }
        
        .unit-selector {
            display: flex;
            justify-content: center;
            margin-bottom: 25px;
        }
        
        .btn-unit {
            margin: 0 5px;
            border-radius: 20px;
            padding: 6px 18px;
            font-size: 0.9rem;
            border: 1px solid #ddd;
            background: white;
            color: var(--dark-color);
            transition: all 0.3s;
        }
        
        .btn-unit.active {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(52, 152, 219, 0.2);
        }
        
        .gps-status {
            text-align: center;
            margin: 20px 0;
            font-size: 0.9rem;
            padding: 10px;
            border-radius: 5px;
            background-color: rgba(236, 240, 241, 0.5);
        }
        
        .gps-active {
            color: var(--success-color);
            background-color: rgba(46, 204, 113, 0.1);
        }
        
        .gps-inactive {
            color: var(--danger-color);
            background-color: rgba(231, 76, 60, 0.1);
        }
        
        .btn-start {
            display: block;
            width: 100%;
            padding: 14px;
            font-weight: 600;
            border-radius: 30px;
            background: linear-gradient(135deg, var(--primary-color), #2980b9);
            border: none;
            color: white;
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
            transition: all 0.3s;
            margin-top: 20px;
        }
        
        .btn-start:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
        }
        
        .btn-start:active {
            transform: translateY(0);
        }
        
        .max-speed {
            text-align: center;
            margin-top: 25px;
            font-size: 1rem;
            color: #7f8c8d;
        }
        
        .max-speed-value {
            font-weight: bold;
            color: var(--dark-color);
            font-size: 1.1rem;
        }
        
        .train-icon {
            margin-right: 10px;
            color: var(--primary-color);
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .pulse {
            animation: pulse 1.5s infinite;
        }
        
        @font-face {
            font-family: 'Segment7Standard';
            src: url('https://cdn.rawgit.com/raphaelbastide/Segment7Standard/master/Segment7Standard.otf') format('opentype');
            font-weight: normal;
            font-style: italic;
        }
    </style>
<div class="speed-container">
<div class="header">
            <h4><i class="fas fa-train train-icon"></i>Train Speed Test</h4>
            <p>Real-time speed measurement using GPS</p>
        </div>
        <div class="digital-display">
            <div class="speed-value-container">
                <span class="speed-value" id="speed-value">0</span>
                <span class="speed-unit" id="speed-unit">km/h</span>
            </div>
        </div>
        <div class="unit-selector">
            <button class="btn-unit active" data-unit="kmh">km/h</button>
            <button class="btn-unit" data-unit="mph">mph</button>
            <button class="btn-unit" data-unit="ms">m/s</button>
        </div>
        <div class="gps-status gps-active" id="gps-status">
            <i class="fas fa-sync-alt fa-spin"></i> Starting GPS...
        </div>
        <button class="btn-start" id="start-btn" style="display: none;">
            <i class="fas fa-stop"></i> Stop GPS Tracking
        </button>
        <div class="max-speed">
            Max speed: <span class="max-speed-value" id="max-speed">0</span> <span id="max-speed-unit">km/h</span>
        </div>
    </div>

<!-- Bootstrap JS Bundle with Popper -->
 <script src="{{ '/assets/js/train-speed-test.js' | relative_url }}"></script>
