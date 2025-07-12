  document.addEventListener('DOMContentLoaded', function() {
            // Initialize date pickers
            flatpickr(".datepicker", {
                dateFormat: "Y-m-d",
                maxDate: "today",
                allowInput: true
            });
            // LMP Form Submission
            document.getElementById('lmpForm').addEventListener('submit', function(e) {
                e.preventDefault();
                calculateFromLMP();
            });
            // Conception Form Submission
            document.getElementById('conceptionForm').addEventListener('submit', function(e) {
                e.preventDefault();
                calculateFromConception();
            });
            // Reset Button
            document.getElementById('resetBtn').addEventListener('click', function() {
                resetCalculator();
            });
        });
        function calculateFromLMP() {
            const lmpDateStr = document.getElementById('lmpDate').value;
            if (!lmpDateStr) {
                alert('Please select a valid date');
                return;
            }
            const lmpDate = new Date(lmpDateStr);
            const cycleLength = parseInt(document.getElementById('cycleLength').value);
            
            if (isNaN(lmpDate.getTime())) {
                alert('Please enter a valid date');
                return;
            }
            // Adjust for cycle length (default is 28 days)
            const ovulationDay = cycleLength - 14;
            const conceptionDate = new Date(lmpDate);
            conceptionDate.setDate(lmpDate.getDate() + ovulationDay);
            // Calculate due date (LMP + 280 days)
            const dueDate = new Date(lmpDate);
            dueDate.setDate(lmpDate.getDate() + 280);
            
            displayResults(dueDate, conceptionDate);
        }
        function calculateFromConception() {
            const conceptionDateStr = document.getElementById('conceptionDate').value;
            if (!conceptionDateStr) {
                alert('Please select a valid date');
                return;
            }
            const conceptionDate = new Date(conceptionDateStr);
            if (isNaN(conceptionDate.getTime())) {
                alert('Please enter a valid date');
                return;
            }
            // Calculate due date (conception + 266 days)
            const dueDate = new Date(conceptionDate);
            dueDate.setDate(conceptionDate.getDate() + 266);
            
            displayResults(dueDate, conceptionDate);
        }
        function displayResults(dueDate, conceptionDate) {
            // Format dates
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('dueDate').textContent = dueDate.toLocaleDateString('en-US', options);
            document.getElementById('conception').textContent = conceptionDate.toLocaleDateString('en-US', options);
            // Calculate gestation
            const today = new Date();
            const diffTime = Math.abs(today - conceptionDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            const weeks = Math.floor(diffDays / 7);
            const days = diffDays % 7;
            document.getElementById('gestation').textContent = `${weeks} weeks and ${days} days`;
            // Calculate progress
            const totalDays = 280;
            const daysPassed = Math.abs(today - new Date(conceptionDate.setDate(conceptionDate.getDate() - 14))) / (1000 * 60 * 60 * 24);
            const progress = Math.min(Math.round((daysPassed / totalDays) * 100), 100);
            const progressBar = document.getElementById('progressBar');
            progressBar.style.width = `${progress}%`;
            progressBar.textContent = `${progress}%`;
            // Show results
            document.getElementById('results').classList.remove('d-none');
            // Scroll to results
            document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
        }
        function resetCalculator() {
            document.getElementById('lmpForm').reset();
            document.getElementById('conceptionForm').reset();
            document.getElementById('results').classList.add('d-none');
            
            // Clear Flatpickr inputs
            const datepickers = document.querySelectorAll('.datepicker');
            datepickers.forEach(picker => {
                picker._flatpickr.clear();
            });
        }