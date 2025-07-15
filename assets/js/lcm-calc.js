 document.getElementById('lcmForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get all input values
            const num1 = parseInt(document.getElementById('num1').value);
            const num2 = parseInt(document.getElementById('num2').value);
            const num3 = document.getElementById('num3').value ? parseInt(document.getElementById('num3').value) : null;
            const num4 = document.getElementById('num4').value ? parseInt(document.getElementById('num4').value) : null;
            const num5 = document.getElementById('num5').value ? parseInt(document.getElementById('num5').value) : null;
            
            // Create array of numbers (excluding empty/zero values)
            const numbers = [num1, num2];
            if (num3) numbers.push(num3);
            if (num4) numbers.push(num4);
            if (num5) numbers.push(num5);
            
            // Calculate LCM and get steps
            const { lcm, steps, primeFactors } = calculateLCMWithSteps(numbers);
            
            // Display result
            document.getElementById('resultText').textContent = lcm;
            document.getElementById('inputNumbers').textContent = numbers.join(', ');
            
            // Display calculation steps
            const stepsList = document.getElementById('calculationSteps');
            stepsList.innerHTML = '';
            steps.forEach(step => {
                const li = document.createElement('li');
                li.innerHTML = step;
                stepsList.appendChild(li);
            });
            
            // Display prime factors
            const primeFactorsBody = document.getElementById('primeFactorsBody');
            primeFactorsBody.innerHTML = '';
            primeFactors.forEach(factor => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${factor.number}</td>
                    <td>${factor.factors.join(' × ')}</td>
                `;
                primeFactorsBody.appendChild(row);
            });
            
            document.getElementById('result').style.display = 'block';
            
            // Scroll to result
            document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Function to calculate LCM with steps
        function calculateLCMWithSteps(numbers) {
            if (numbers.length === 0) return { lcm: 0, steps: [], primeFactors: [] };
            
            const steps = [];
            const primeFactors = numbers.map(num => ({
                number: num,
                factors: getPrimeFactors(num)
            }));
            
            steps.push(`First, find the prime factors of each number (see table below).`);
            
            let lcm = numbers[0];
            let currentNumbers = [numbers[0]];
            
            for (let i = 1; i < numbers.length; i++) {
                const prevLcm = lcm;
                const currentNum = numbers[i];
                currentNumbers.push(currentNum);
                
                const gcd = gcdOfTwoNumbers(lcm, currentNum);
                lcm = (lcm * currentNum) / gcd;
                
                steps.push(`LCM of ${currentNumbers.slice(0, i+1).join(', ')}:<br>
                    = (${prevLcm} × ${currentNum}) / GCD(${prevLcm}, ${currentNum})<br>
                    = (${prevLcm * currentNum}) / ${gcd}<br>
                    = ${lcm}`);
            }
            
            steps.push(`Final LCM of all numbers is <strong>${lcm}</strong>.`);
            
            return { lcm, steps, primeFactors };
        }
        
        // Function to calculate GCD using Euclidean algorithm
        function gcdOfTwoNumbers(a, b) {
            if (b === 0) return a;
            return gcdOfTwoNumbers(b, a % b);
        }
        
        // Function to get prime factors
        function getPrimeFactors(num) {
            const factors = [];
            if (num === 1) return [1];
            
            let n = num;
            for (let i = 2; i <= n; i++) {
                while (n % i === 0) {
                    factors.push(i);
                    n /= i;
                }
            }
            
            return factors.length ? factors : [num];
        }

  
  document.getElementById("customReset").addEventListener("click", function (e) {
        e.preventDefault(); // prevent the default button behavior

        // Reset form fields
        document.getElementById("lcmForm").reset();

        // Hide and clear result section
        const resultSection = document.getElementById("result");
        if (resultSection) {
            resultSection.style.display = "none";

            document.getElementById("resultText").textContent = "";
            document.getElementById("inputNumbers").textContent = "";
            document.getElementById("calculationSteps").innerHTML = "";
            document.getElementById("primeFactorsBody").innerHTML = "";
        }
    });