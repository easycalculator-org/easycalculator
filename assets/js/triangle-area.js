  // Base & Height Form Handler
        document.getElementById('baseHeightForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            const area = (base * height) / 2;
            
            displayResult(
                `<div class="input-value"><strong>Base:</strong> ${base} units</div>
                 <div class="input-value"><strong>Height:</strong> ${height} units</div>`,
                `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                    <line x1="100" y1="30" x2="100" y2="130" stroke="#dc3545" stroke-width="2" stroke-dasharray="5,3"/>
                    <line x1="30" y1="135" x2="170" y2="135" stroke="#0d6efd" stroke-width="2"/>
                    <text x="100" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">${base}</text>
                    <text x="110" y="80" fill="#dc3545" font-size="12">${height}</text>
                </svg>`,
                `Area = (base × height) ÷ 2<br>
                 = (${base} × ${height}) ÷ 2<br>
                 = ${area.toFixed(2)}`,
                area.toFixed(2)
            );
        });
        
        // Three Sides Form Handler
        document.getElementById('threeSidesForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const a = parseFloat(document.getElementById('sideA').value);
            const b = parseFloat(document.getElementById('sideB').value);
            const c = parseFloat(document.getElementById('sideC').value);
            
            // Check triangle inequality
            if (a + b <= c || a + c <= b || b + c <= a) {
                alert("These sides don't form a valid triangle. The sum of any two sides must be greater than the third side.");
                return;
            }
            
            const s = (a + b + c) / 2;
            const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
            
            displayResult(
                `<div class="input-value"><strong>Side a:</strong> ${a} units</div>
                 <div class="input-value"><strong>Side b:</strong> ${b} units</div>
                 <div class="input-value"><strong>Side c:</strong> ${c} units</div>`,
                `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                    <text x="30" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">${a}</text>
                    <text x="170" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">${b}</text>
                    <text x="100" y="20" text-anchor="middle" fill="#0d6efd" font-size="12">${c}</text>
                </svg>`,
                `1. Calculate semi-perimeter: (${a} + ${b} + ${c}) ÷ 2 = ${s}<br>
                 2. Area = √[${s} × (${s}-${a}) × (${s}-${b}) × (${s}-${c})]<br>
                 3. Area = √[${s} × ${(s-a).toFixed(2)} × ${(s-b).toFixed(2)} × ${(s-c).toFixed(2)}]<br>
                 4. Area = √[${(s*(s-a)*(s-b)*(s-c)).toFixed(2)}]`,
                area.toFixed(2)
            );
        });
        
        // SAS Form Handler
        document.getElementById('sasForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const a = parseFloat(document.getElementById('sasSideA').value);
            const b = parseFloat(document.getElementById('sasSideB').value);
            const angle = parseFloat(document.getElementById('sasAngle').value);
            const angleRad = angle * Math.PI / 180;
            const sinValue = Math.sin(angleRad);
            const area = (a * b * sinValue) / 2;
            
            displayResult(
                `<div class="input-value"><strong>Side a:</strong> ${a} units</div>
                 <div class="input-value"><strong>Side b:</strong> ${b} units</div>
                 <div class="input-value"><strong>Angle:</strong> ${angle}°</div>`,
                `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="30,130 170,130 100,30" fill="#d4edda" stroke="#155724" stroke-width="2"/>
                    <text x="30" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">${a}</text>
                    <text x="170" y="145" text-anchor="middle" fill="#0d6efd" font-size="12">${b}</text>
                    <text x="70" y="100" fill="#dc3545" font-size="12">${angle}°</text>
                </svg>`,
                `1. Convert angle to radians: ${angle}° × π/180 ≈ ${angleRad.toFixed(4)}<br>
                 2. Calculate sin(${angle}°) ≈ ${sinValue.toFixed(4)}<br>
                 3. Area = (${a} × ${b} × ${sinValue.toFixed(4)}) ÷ 2<br>
                 4. Area = ${(a*b*sinValue).toFixed(2)} ÷ 2`,
                area.toFixed(2)
            );
        });
        
        // Reset all forms when switching tabs
        document.querySelectorAll('.nav-link').forEach(tab => {
            tab.addEventListener('click', function() {
                document.getElementById('resultContainer').classList.add('d-none');
                document.getElementById('emptyResult').classList.remove('d-none');
            });
        });
        
        // Function to display results
        function displayResult(inputs, diagram, steps, result) {
            document.getElementById('inputValues').innerHTML = inputs;
            document.getElementById('diagramResult').innerHTML = diagram;
            document.getElementById('calculationSteps').innerHTML = steps;
            document.getElementById('finalResult').textContent = result;
            
            document.getElementById('resultContainer').classList.remove('d-none');
            document.getElementById('emptyResult').classList.add('d-none');
        }