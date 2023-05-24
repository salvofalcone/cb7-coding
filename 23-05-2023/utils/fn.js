export const qS = (e) => document.querySelector(e);

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};
/* ================================================================ */
const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint = "") => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};

export const POST = (body) => {
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then(console.log); //come da documentazione questo mi stampa id 101
};

export const DELETE = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
  });
  const data = await res.json();
};
/* ================================================================ */

export const cartPage = (username) => {
  const wrapperEl = createEl("div", "", {
    name: "class",
    value: "hello__container",
  });
  const titleEl = createEl("h2", `Benvenuto ${username} !`, {
    name: "class",
    value: "hello__title",
  });

  wrapperEl.append(titleEl);

  return wrapperEl;
};

/* ================================================================ */

export const productGen = (productData) => {
  const wrapperEl = createEl("div", "", { name: "class", value: "cart__item" });

  const titleEl = createEl(
    "h4",
    productData.title,
    {
      name: "src",
      value: productData.title,
    },
    {
      name: "class",
      value: "cart__title",
    }
  );

  const priceEl = createEl(
    "p",
    "$ " + productData.price,
    {
      name: "class",
      value: "cart__item__price",
    },
    {
      name: "class",
      value: "cart__price",
    }
  );

  const quantityEl = createEl("p", "Stock available: " + productData.quantity, {
    name: "class",
    value: "cart__item__quantity",
  });

  wrapperEl.append(titleEl, priceEl, quantityEl);

  wrapperEl.addEventListener("click", () => {
    const isConfirmed = confirm("Are you sure you want to delete the article?");
    if (isConfirmed) DELETE(`/carts/${productData.id}`);
  });

  return wrapperEl;
};
