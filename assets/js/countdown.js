 document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const timerDisplay = document.getElementById('timerDisplay');
            const fsTimerDisplay = document.getElementById('fsTimerDisplay');
            const progressBar = document.getElementById('progressBar');
            const startBtn = document.getElementById('startBtn');
            const pauseBtn = document.getElementById('pauseBtn');
            const resetBtn = document.getElementById('resetBtn');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');
            const fullscreenTimer = document.getElementById('fullscreenTimer');
            const presetButtons = document.querySelectorAll('.preset-btn');
            const customTimeInput = document.getElementById('customTime');
            const setCustomTimeBtn = document.getElementById('setCustomTime');
            
            // Timer variables
            let totalSeconds = 0;
            let remainingSeconds = 0;
            let timerInterval = null;
            let isRunning = false;
            let wakeLock = null;
            
            // Format time as MM:SS
            function formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            }
            
            // Update display
            function updateDisplay() {
                const displayText = formatTime(remainingSeconds);
                timerDisplay.textContent = displayText;
                fsTimerDisplay.textContent = displayText;
                
                // Update progress bar
                if (totalSeconds > 0) {
                    const progress = (remainingSeconds / totalSeconds) * 100;
                    progressBar.style.width = `${progress}%`;
                    
                    // Change color based on progress
                    if (progress < 20) {
                        progressBar.className = 'progress-bar bg-danger';
                    } else if (progress < 50) {
                        progressBar.className = 'progress-bar bg-warning';
                    } else {
                        progressBar.className = 'progress-bar bg-success';
                    }
                }
            }
            
            // Start timer
            function startTimer() {
                if (remainingSeconds <= 0) return;
                
                isRunning = true;
                startBtn.disabled = true;
                pauseBtn.disabled = false;
                
                timerInterval = setInterval(() => {
                    remainingSeconds--;
                    updateDisplay();
                    
                    if (remainingSeconds <= 0) {
                        clearInterval(timerInterval);
                        isRunning = false;
                        startBtn.disabled = true;
                        pauseBtn.disabled = true;
                        
                        // Play sound when timer completes
                        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3');
                        audio.play();
                    }
                }, 1000);
            }
            
            // Pause timer
            function pauseTimer() {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.disabled = false;
                pauseBtn.disabled = true;
            }
            
            // Reset timer
            function resetTimer() {
                pauseTimer();
                remainingSeconds = totalSeconds;
                updateDisplay();
            }
            
            // Set timer with seconds
            function setTimer(seconds) {
                totalSeconds = seconds;
                remainingSeconds = seconds;
                updateDisplay();
                resetTimer();
            }
            
            // Event Listeners
            startBtn.addEventListener('click', startTimer);
            pauseBtn.addEventListener('click', pauseTimer);
            resetBtn.addEventListener('click', resetTimer);
            
            // Preset buttons
            presetButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const seconds = parseInt(btn.dataset.seconds);
                    setTimer(seconds);
                });
            });
            
            // Custom time
            setCustomTimeBtn.addEventListener('click', () => {
                const seconds = parseInt(customTimeInput.value);
                if (seconds > 0) {
                    setTimer(seconds);
                } else {
                    customTimeInput.focus();
                }
            });
            
            // Fullscreen functionality
            fullscreenBtn.addEventListener('click', () => {
                fullscreenTimer.classList.remove('d-none');
                fullscreenTimer.classList.add('d-flex');
                
                // Prevent screen from locking
                if ('wakeLock' in navigator) {
                    navigator.wakeLock.request('screen').then(wl => {
                        wakeLock = wl;
                    }).catch(err => {
                        console.error('Screen Wake Lock failed:', err);
                    });
                }
            });
            
            exitFullscreenBtn.addEventListener('click', () => {
                fullscreenTimer.classList.remove('d-flex');
                fullscreenTimer.classList.add('d-none');
                
                // Release wake lock
                if (wakeLock !== null) {
                    wakeLock.release().then(() => {
                        wakeLock = null;
                    });
                }
            });
            
            // Initialize with 5 minutes
            setTimer(300);
        });