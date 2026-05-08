let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;

const timerDisplay = document.getElementById("timer");
const statusDisplay = document.getElementById("status");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimer() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    timerDisplay.textContent = `${h}:${m}:${s}`;
}

startBtn.addEventListener("click", function () {
    if (timer !== null) {
        clearInterval(timer);
    }

    
    
    timer = setInterval(updateTimer, 1000);
    statusDisplay.textContent = "Status: Running";
});

pauseBtn.addEventListener("click", function () {
    clearInterval(timer);
    statusDisplay.textContent = "Status: Paused";
});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);

    hours = 0;
    minutes = 0;
    seconds = 0;

    timerDisplay.textContent = "00:00:00";
    statusDisplay.textContent = "Status: Reset";
});

document.addEventListener("keydown", function (event) {
    if (event.key === "s" || event.key === "S") {
        startBtn.click();
    }

    if (event.key === "p" || event.key === "P") {
        pauseBtn.click();
    }

    if (event.key === "r" || event.key === "R") {
        resetBtn.click();
    }
});

