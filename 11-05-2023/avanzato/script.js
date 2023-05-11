const todos = [];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const listItemGen = (todoData) => {
  const listItemEl = cE("li");
  const buttonRemover = cE("button");

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.todo;
  listItemEl.className = "listItem";

  if (todoData.completed) listItemEl.classList.add("listCompleted");

  buttonRemover.textContent = "x";
  buttonRemover.classList = "buttonRemover";

  listItemEl.append(buttonRemover);

  buttonRemover.addEventListener("click", () => {
    listItemEl.remove();
  });

  return listItemEl;
};

const listRender = () => {
  const listItemEls = qSA(".listItem");

  listItemEls.forEach((element) =>
    element.addEventListener("click", (evt) => {
      todos.forEach((item) => {
        if (item.id === parseInt(evt.target.id)) {
          item.completed = !item.completed;
          element.classList.toggle("listCompleted");
        }
      });
    })
  );
};

const todoInputEL = cE("input");
const todoButtonEL = cE("button");
const listEl = cE("ul");

todoInputEL.setAttribute("type", "text");
todoInputEL.setAttribute("placeholder", "Todo text");
todoInputEL.className = "todoInput";
todoButtonEL.className = "todoButton";
todoButtonEL.textContent = "Add todo";
listEl.className = "list";

todos.forEach((item) => listEl.append(listItemGen(item)));

document.body.append(todoInputEL, todoButtonEL, listEl);

listRender();

let inputValueText;

todoInputEL.addEventListener("change", (event) => {
  inputValueText = event.target.value;
});

todoButtonEL.addEventListener("click", () => {
  todos.push({
    id: Math.floor(Math.random() * 10000),
    todo: inputValueText,
    completed: false,
  });
  listEl.textContent = "";
  todos.forEach((item) => listEl.append(listItemGen(item)));
  listRender();
});
