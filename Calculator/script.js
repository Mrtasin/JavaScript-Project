const result = document.getElementById("result");

const dataArray = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "%",
  "/",
  "*",
  "-",
  "+",
  ".",
];
function display(value) {
  if (dataArray.includes(value)) {
    result.value += value;
  } else if (value === "X") {
    result.value = result.value.slice(0, -1);
  } else if (value === "=") {
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "ERROR";
      result.style.color = "red";
      result.style.textAlign = "center";
    }
  } else if (value === "C") {
    result.value = "";
    result.style.color = "black";
    result.style.textAlign = "right";
  }
}
