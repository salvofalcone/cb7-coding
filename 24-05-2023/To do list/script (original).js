import { /* qS, */ createEl } from "./utils/fn.js";

/***************** FUNZIONI *****************/
function listItemGen(toDoData) {
  const toDo = createEl("li", "", { name: "class", value: "toDO" });
  const removeBtn = createEl("button", "x", {
    name: "class",
    value: "removeBtn",
  });

  const todoText = toDoData;

  removeBtn.addEventListener("click", () => {
    let index = todos.indexOf(toDoData);
    //eliminazione elemento dall'array
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
const toDoInput = createEl("input", "", { name: "class", value: "toDoInput" });
const addBtn = createEl("button", "Add new task...", {
  name: "class",
  value: "addBtn",
});

/***************** EVENT LISTENER *****************/
addBtn.addEventListener("click", function () {
  const inputValue = toDoInput.value;

  if (inputValue !== "") {
    listItemGen(inputValue);
    todos.push(inputValue);
    toDoInput.value = "";
  }
});

/***************** APPEND *****************/
document.body.append(toDoInput, addBtn, toDoMain);
