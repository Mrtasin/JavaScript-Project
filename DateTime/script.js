const time = document.getElementById("time");
const date = document.getElementById("date");

function dateFunction() {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const now = new Date();
  date.innerText = now.toLocaleDateString("en-GB", options);
}

function timeFunction() {
  const now = new Date();
  let HH = (now.getHours() > 0 ? now.getHours() % 12 : 12)
    .toString()
    .padStart(2, 0);

  let MM = now.getMinutes().toString().padStart(2, 0);
  let SS = now.getSeconds().toString().padStart(2, 0);
  let ampm = now.getHours() >= 12 ? "PM" : "AM";

  time.innerText = `${HH}:${MM}:${SS} ${ampm}`;
  dateFunction();
}

timeFunction();

setInterval(timeFunction, 1000);
