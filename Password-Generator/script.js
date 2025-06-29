const digitsData = "0123456789";
const upperCaseData = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseData = "abcdefghijklmnopqrstuvwxyz";
const spacilSymbolData = "!@#$&-_|";

function passwordGenerator(size, uppercase, digite, symbol) {
  let password = "";
  password += lowerCaseData.at(Math.floor(Math.random() * 26));

  for (let x = 1; x < size; ) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        if (uppercase) {
          password += upperCaseData.at(Math.floor(Math.random() * 26));
          x++;
        }
        break;

      case 1:
        if (digite) {
          password += digitsData.at(Math.floor(Math.random() * 10));
          x++;
        }
        break;

      case 2:
        if (symbol) {
          password += spacilSymbolData.at(
            Math.floor(Math.random() * spacilSymbolData.length)
          );
          x++;
        }
        break;

      default:
        password += lowerCaseData.at(Math.floor(Math.random() * 26));
        x++;
    }
  }
  return password;
}

const showPasswordResult = document.querySelector("#password-result");
const copyPassword = document.querySelector("#copy-password");
const passwordSize = document.querySelector("#password-size");
const setPasswordValue = document.querySelector("#set-password-value");

setPasswordValue.innerText = passwordSize.value;

passwordSize.addEventListener("input", (e) => {
  setPasswordValue.innerText = e.target.value;
  showPasswordResult.innerText = passwordGenerator(
    setPasswordValue.innerText,
    upperCase.checked,
    digits.checked,
    symbol.checked
  );
});

copyPassword.addEventListener("click", () => {
  navigator.clipboard.writeText(showPasswordResult.innerText);
});

const upperCase = document.querySelector("#upper-case");
const digits = document.querySelector("#digits");
const symbol = document.querySelector("#symbol");
const refershButton = document.querySelector("#refersh-button");

refershButton.addEventListener("click", () => {
  showPasswordResult.innerText = passwordGenerator(
    setPasswordValue.innerText,
    upperCase.checked,
    digits.checked,
    symbol.checked
  );
});

upperCase.addEventListener("input", () => {
  showPasswordResult.innerText = passwordGenerator(
    setPasswordValue.innerText,
    upperCase.checked,
    digits.checked,
    symbol.checked
  );
});

digits.addEventListener("input", () => {
  showPasswordResult.innerText = passwordGenerator(
    setPasswordValue.innerText,
    upperCase.checked,
    digits.checked,
    symbol.checked
  );
});

symbol.addEventListener("input", () => {
  showPasswordResult.innerText = passwordGenerator(
    setPasswordValue.innerText,
    upperCase.checked,
    digits.checked,
    symbol.checked
  );
});

showPasswordResult.innerText = passwordGenerator(
  setPasswordValue.innerText,
  upperCase.checked,
  digits.checked,
  symbol.checked
);
