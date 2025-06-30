const inputData = document.querySelector("#input-data");
const checkButton = document.querySelector("#check-button");
const resultText = document.querySelector("#result-text");

checkButton.addEventListener("click", () => {
  let data = inputData.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(data);

  let reverseData = data.split("").reverse().join("");
  console.log(data);

  if (data === reverseData) {
    resultText.textContent = `${inputData.value} is a Palindrome`;
    resultText.style.color = "green";
  } else {
    resultText.textContent = `${inputData.value} is NOT a Palindrome`;
    resultText.style.color = "red";
  }
  inputData.value = "";
});

