import { createEl, qS, cartPage, GET, productGen } from "./utils/fn.js";
import { usersList } from "./utils/credentials.js";

/************** VARIABILI **************/
const rootEl = qS("#root");
const cart = createEl("div", "", {
  name: "class",
  value: "cart",
});

/* Relativo alla form */
const formEl = createEl("form", "", { name: "class", value: "login" });
const formTitle = createEl("h2", "Log-In", {
  name: "class",
  value: "title__login",
});
const formUsername = createEl(
  "input",
  "",
  { name: "class", value: "input__login" },
  { name: "placeholder", value: "Username" },
  { name: "type", value: "text" }
);
const formPass = createEl(
  "input",
  "",
  { name: "class", value: "input__login" },
  { name: "placeholder", value: "Password" },
  { name: "type", value: "password" }
);
const formSubmit = createEl(
  "input",
  "",
  {
    name: "class",
    value: "submit__login",
  },
  {
    name: "type",
    value: "submit",
  }
);

/************** EVENT LISTNER **************/
formEl.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const isAuth = usersList.find(
    (user) =>
      user.username === evt.srcElement[0].value &&
      user.password === evt.srcElement[1].value
  );

  if (isAuth) {
    rootEl.removeChild(formEl);
    rootEl.append(cartPage(isAuth.name));
    GET(`/carts/${isAuth.id}`).then((data) =>
      data.products.forEach((product) => cart.append(productGen(product)))
    );
  } else {
    alert("Something went wrong, try again?");
  }
});

/************** APPEND **************/
formEl.append(formTitle, formUsername, formPass, formSubmit);
rootEl.append(formEl, cart);
