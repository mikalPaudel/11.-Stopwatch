let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    timeDisplay.textContent = 
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`;
}

startStopBtn.addEventListener("click", () => {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = "Stop";
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        isRunning = false;
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    timeDisplay.textContent = "00:00:00";
    startStopBtn.textContent = "Start";
    isRunning = false;
});

pauseBtn.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = "Start";
        isRunning = false;
    }
});