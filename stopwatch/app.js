const timer = document.querySelector(".timer");
const startbtn = document.getElementById("startbtn");
const resetbtn = document.getElementById("resetbtn");
const stopbtn = document.getElementById("stopbtn");

let startTime;
let isRunning = false;
let elapsedTime = 0;
let Timer;
function startwatch() {
  if (!isRunning) {
    startTime = new Date() - elapsedTime;
    Timer = setInterval(updateTime, 1000);
  }
  isRunning = true;
}

function stopWatch() {
  if (isRunning) {
    clearInterval(Timer);
  }
  isRunning = false;
}

function resetWatch() {
  clearInterval(Timer);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
}

function updateTime() {
  elapsedTime = new Date() - startTime;

  updateDisplay();
}

function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  console.log(totalSeconds);
  const sec = totalSeconds % 60;
  const min = Math.floor(totalSeconds / 60) % 60;
  const hour = Math.floor(totalSeconds / 3600);
  const displaytime = `${String(hour).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")}`;
  timer.innerHTML = `<p>${displaytime}</p>`;
}
startbtn.addEventListener("click", () => {
  startwatch();
});

resetbtn.addEventListener("click", () => {
  resetWatch();
});

stopbtn.addEventListener("click", () => {
  stopWatch();
});
