let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

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
    // Set the text content of the time display element
timeDisplay.textContent = 
    // Format the 'hours' to 2 digits, and add a colon after it
    `${hours.toString().padStart(2, '0')}:` + 
    // Format the 'minutes' to 2 digits, and add a colon after it
    `${minutes.toString().padStart(2, '0')}:` + 
    // Format the 'seconds' to 2 digits
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

lapBtn.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = document.createElement("div");
        lapTime.textContent = timeDisplay.textContent;
        document.getElementById("laps").appendChild(lapTime);
    }
});