import {
  cE,
  qS,
  qSA,
  newProduct,
  newProductModal,
  createCartModal,
  noMoreText,
} from "./utils/fn.js";

const callModal = () => {
  {
    const productCardEls = qSA(".product__card");
    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(newProductModal(data, rootEl)))
      )
    );
  }
};

/******* SINCRONO *******/
// let searchProductValue = "";
let productListData = [];
export let cartItems = [];
export let cartEl = qS(".cart");

const rootEl = qS("#root");
const searchProductEl = qS(".searchInput");

const productList = cE("div");
const productListTitle = cE("h2");

productListTitle.textContent = "Products for you!";

productList.className = "product__list";

/******* ASINCRONO *******/
/* DIALOGO CON DUMMY */
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData = data.products;
    productListData.forEach((product) =>
      productList.append(newProduct(product))
    );
  })
  .then(() => {
    const productCardEls = qSA(".product__card");
    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(newProductModal(data, rootEl)))
      )
    );
  });

/* per la ricerca dalla searchbar */
searchProductEl.addEventListener("input", (evt) => {
  if (evt.target.value === "") {
    productListData.forEach((el) => {
      rootEl.append(newProduct(el));
    });
  } else {
    productList.textContent = "";
    productListData
      .filter((product) =>
        product.description
          .toLowerCase()
          .includes(evt.target.value.toLowerCase())
      )
      .forEach((obj) => productList.append(newProduct(obj)));
    callModal();
  }
});

const categories = qS("#categories");

categories.addEventListener("change", (evt) => {
  if (evt.target.value === "dfl") {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        productList.textContent = "";
        productListData = data.products;
        productListData.forEach((product) =>
          productList.append(newProduct(product))
        );
      })
      .then(() => callModal());
  } else {
    fetch(`https://dummyjson.com/products/category/${evt.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        productList.textContent = "";
        data.products.forEach((obj) => productList.append(newProduct(obj)));
      })
      .then(() => callModal());
  }
});

rootEl.append(productListTitle, productList);

/* =============================================================== */

// const btnEl = cE("button");
// btnEl.textContent = "show cart items";
// document.body.append(btnEl);
// btnEl.addEventListener("click", () => console.log(cartItems));

/* =============================================================== */

if (cartItems.length >= 1) {
  cartEl.classList.add("itemsInCart");
}

cartEl.addEventListener("click", () => {
  rootEl.append(createCartModal(cartItems, rootEl));
  const cartModal = qS(".cartModal");

  cartEl.disable = true;
  cartModal.classList.add("cartModal__active");
});
