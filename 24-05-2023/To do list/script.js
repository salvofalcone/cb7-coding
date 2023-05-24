import { qS, createEl, POST, DELETE } from "./utils/fn.js";
const title = createEl("h1", "To-Do List", {
  name: "class",
  value: "title",
});

const switchMode = qS(".input");

/***************** FUNZIONI *****************/
function listItemGen(toDoData) {
  const toDo = createEl("li", "", { name: "class", value: "toDO" });
  const removeBtn = createEl("button", "X", {
    name: "class",
    value: "removeBtn",
  });

  const todoText = toDoData;

  removeBtn.addEventListener("click", () => {
    let index = todos.indexOf(toDoData);
    DELETE(index); //per eliminare dal server
    todos.splice(index, 1);
    toDoMain.removeChild(toDo);
  });

  toDo.textContent = todoText;

  toDo.append(removeBtn);
  toDoMain.append(toDo);
}

/***************** STRUTTURA *****************/
const toDoMain = createEl("ul", "", { name: "class", value: "toDoMain" });
const todos = [];
const toDoInput = createEl(
  "input",
  "",
  { name: "class", value: "toDoInput" },
  { name: "placeholder", value: "Add a new task here" }
);
const addBtn = createEl("button", "Add", {
  name: "class",
  value: "addBtn",
});

/***************** EVENT LISTENER *****************/
addBtn.addEventListener("click", () => {
  const inputValue = toDoInput.value;
  
  if (inputValue !== "") {
    listItemGen(inputValue);
    todos.push(inputValue);
    POST(inputValue); //per aggiungere al server
    toDoInput.value = "";
  }
});

switchMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/***************** APPEND *****************/
document.body.append(title, toDoInput, addBtn, toDoMain);
