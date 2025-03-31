let countdown;
        let alarm = new Audio('https://www.soundjay.com/button/beep-07.wav');

        function startTimer(duration) {
            clearInterval(countdown);
            let timer = duration, minutes, seconds;
            countdown = setInterval(function () {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                document.getElementById('timerDisplay').textContent = minutes + ":" + seconds;

                if (timer === 10) {
                    alarm.play();
                }

                if (--timer < 0) {
                    clearInterval(countdown);
                    document.getElementById('timerDisplay').textContent = "Time's up!";
                }
            }, 1000);
        }

        function startCustomTimer() {
            let customTime = document.getElementById('customTime').value;
            let duration = parseInt(customTime) * 60;
            if (!isNaN(duration) && duration > 0) {
                startTimer(duration);
            }
        }

        function resetTimer() {
            clearInterval(countdown);
            document.getElementById('timerDisplay').textContent = "0:00";
        }

        function editTime() {
            clearInterval(countdown);
            document.getElementById('customTime').removeAttribute('disabled');
        }

        function toggleFullscreen() {
            let timerDisplay = document.getElementById('timerDisplay');
            if (!document.fullscreenElement) {
                timerDisplay.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable full-screen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }