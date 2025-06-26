const generateButton = document.getElementById("generate-button");
const otpResult = document.getElementById("otp-result");

generateButton.addEventListener("click", () => {
  let otp = Math.floor(Math.random() * 1000000);
  otpResult.textContent = otp.toString().padStart(6, "3");
});
