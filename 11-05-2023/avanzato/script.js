const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
// const qSA = (elements) => document.querySelectorAll(elements

// ======================================================================
const toDoMain = cE("ul");
toDoMain.className = "toDoMain";

//contenitore dei todo
const todos = [];

//funzione per creare nuovo elemento todo
function listItemGen(pippoData) {
  const toDo = cE("li"); //creo il singolo elemento li per ogni todo
  const removeBtn = cE("button");

  const todoText = pippoData; //DA CONTROLLARE PERCHÈ NON SONO SICURISSSIMO
  toDo.className = "toDo";

  removeBtn.textContent = "x";
  removeBtn.className = "removeBtn";

  removeBtn.addEventListener("click", () => {
    let index = todos.indexOf(pippoData);
    //eliminazione elemento dall'array
    todos.splice(index, 1);
    toDoMain.removeChild(toDo);
  });

  toDo.textContent = todoText;

  toDo.appendChild(removeBtn);
  toDoMain.appendChild(toDo);
}

const toDoInput = cE("input");
const addBtn = cE("button");

toDoInput.className = "toDoInput";
addBtn.textContent = "Add new task...";
addBtn.className = "addBtn";

//tasto aggiunta nuovo elemento di lista
addBtn.addEventListener("click", function () {
  const inputValue = toDoInput.value.trim();

  if (inputValue !== "") {
    listItemGen(inputValue);
    todos.push(inputValue);
    toDoInput.value = "";
  }
});

document.body.appendChild(toDoInput);
document.body.appendChild(addBtn);
document.body.appendChild(toDoMain);
