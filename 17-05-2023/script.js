import {
  cE,
  qS,
  qSA,
  newProduct,
  newProductModal,
  // filterSort,
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

/* const productMock = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
]; */
let searchProductValue = "";
let productListData = [];

const rootEl = qS("#root");
const searchProductEl = qS(".searchInput");

const productList = cE("div");
const productListTitle = cE("h2");

productListTitle.textContent = "Products for you!";

productList.className = "product__list";

/* DIALOGO CON DUMMY  - asincrono*/
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
  }
});

// filterSort();

// const filterBtnCategories = qS(".filterBtnCategories");

// const categories=qS("#categories") --> ho inventato questa funzionalità! Funziona anche senza averlo dichiarato...perché?
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

// const price=qS("#price")
//aggiungere sort by price

rootEl.append(productListTitle, productList);
