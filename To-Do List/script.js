const inputTask = document.getElementById("input-task");
const saveButton = document.getElementById("save-button");
const listTask = document.getElementById("list-task");

saveButton.addEventListener("click", () => {
  const li = document.createElement("li"); // <li> </li>
  li.innerText = inputTask.value; // <li> data </li>

  const button = document.createElement("button"); //<button> </button>
  button.innerText = "X"; //<button> X </button>

  button.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(button); // <li> data  <button> X </button></li>
  listTask.appendChild(li); //<ol> <li> data  <button> X </button></li></ol>
  inputTask.value = ""
});
