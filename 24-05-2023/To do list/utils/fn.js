export const qS = (element) => document.querySelector(element);
// export const qSA = (elements) => document.querySelectorAll(elements);

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

export const POST = (inputValue) => {
  fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: inputValue,
      completed: false,
      userId: 5,
    }),
  }).then((res) => res.json());
  // .then(console.log);
};

export const DELETE = (index) => {
  const indice = index === 0 ? 1 : index;
  fetch(`https://dummyjson.com/todos/${indice}`, {
    method: "DELETE",
  }).then((res) => res.json());
  // .then(console.log);
};
