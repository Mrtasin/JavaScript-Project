const inputText = document.getElementById("input-text");
const charCount = document.getElementById("char-count");
const overflowResult = document.getElementById("overflow-result");

inputText.addEventListener("input", (e) => {
  let length = e.target.value.length;
  charCount.innerText = `${length} / 100 Charactors`;

  if (length > 100) {
    charCount.style.color = "red";
    overflowResult.textContent = "Limit OverFlow";
    overflowResult.style.color = "red";
    overflowResult.style.backgroundColor = "";
  } else if (length === 100) {
    charCount.style.color = "orange";
    overflowResult.textContent = "Limit Over";
    overflowResult.style.color = "yellow";
    overflowResult.style.backgroundColor = "black";
  } else if (length === 0) {
    charCount.style.color = "black";
    overflowResult.textContent = "";
  } else {
    charCount.style.color = "green";
    overflowResult.textContent = "";
  }
});
