const result = document.getElementById("result");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let intervel;
let running = false;
let startTime = 0;

const pad = (num) => num.toString().padStart(2, "0");
const padMilli = (num) => num.toString().padStart(3, "0");

startButton.addEventListener("click", () => {
  if (startTime === 0) startTime = Date.now();

  if (!running) {
    running = true;
    intervel = setInterval(() => {
      let timeGap = Date.now() - startTime;

      let MSS = timeGap % 1000;

      let SS = Math.floor(timeGap / 1000);

      let MM = Math.floor(timeGap / 1000 / 60);

      if (SS >= 60) SS %= 60;

      result.textContent = `${pad(MM)}:${pad(SS)}:${padMilli(MSS)}`;
    }, 15);
  }
});

stopButton.addEventListener("click", () => {
  running = false;
  clearInterval(intervel);
});

resetButton.addEventListener("click", () => {
  running = false;
  clearInterval(intervel);
  startTime = 0;
  result.textContent = "00:00:000";
});
