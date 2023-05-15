import { cE, qS, newProduct } from "./utils/fn.js"; //sarebbe la stessa cosa che scrivere {cE:cE, qS:qS}

//questo funziona anche nel caso in cui dummyjson dovrebbe esplodere
const productMock = [
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
];

//query selector
const rootEl = qS("#root");

//create element
const productList = cE("div");
const productListTitle = cE("h2");

const fsMain = cE("div");

const fsSort = cE("div");
const sortMenuBtn = cE("button");
const sortMenuDiv = cE("div");
const sort1 = cE("a");
const sort2 = cE("a");
const sort3 = cE("a");

const fsFilter = cE("div");
const filterBtnPrice = cE("button");
const filterBtnColor = cE("button");
const filterBtnMaterial = cE("button");
const filterBtnReview = cE("button");

//text content
productListTitle.textContent = "Products for you!";

sortMenuBtn.textContent = "Sort by";
sort1.textContent = "pippo";
sort2.textContent = "pluto";
sort3.textContent = "paperino";

filterBtnPrice.textContent = "Price";
filterBtnColor.textContent = "Color";
filterBtnMaterial.textContent = "Material";
filterBtnReview.textContent = "Review";

//attributi
sort1.setAttribute("href", "#");
sort2.setAttribute("href", "#");
sort3.setAttribute("href", "#");

//classi
fsMain.className = "fs__main";

fsFilter.className = "fs__filter";
filterBtnPrice.className = "filter__menu__btn filterBtnPrice";
filterBtnColor.className = "filter__menu__btn filterBtnColor";
filterBtnMaterial.className = "filter__menu__btn filterBtnMaterial";
filterBtnReview.className = "filter__menu__btn filterBtnReview";

fsSort.className = "fs__sort";
sortMenuBtn.className = "sort__menu__btn";
sortMenuDiv.className = "sort__menu__div";
sort1.className = "sort__menu__links";
sort2.className = "sort__menu__links";
sort3.className = "sort__menu__links";
productList.className = "product__list";

// // con queste due righe creo due carte così anche se dummy non funziona stampo comunque qualcosa e non lascio la pagina vuota
productList.append(newProduct(productMock[0]));
productList.append(newProduct(productMock[1]));

//dialogo con dummy
fetch("https://dummyjson.com/products")
  .then((res) => res.json()) //per la risposta
  .then((data) =>
    data.products.forEach(
      (product) => productList.append(newProduct(product)) //questa funzione appende la funzione che mi stampa la card
    )
  ); //per i dati

//appendo tutto

rootEl.append(fsMain, productListTitle, productList);

fsMain.append(fsFilter, fsSort);

fsSort.append(sortMenuBtn, sortMenuDiv);
sortMenuDiv.append(sort1, sort2, sort3);

fsFilter.append(
  filterBtnPrice,
  filterBtnColor,
  filterBtnMaterial,
  filterBtnReview
);

