import { cE, qS, qSA, newProduct, newProductModal } from "./utils/fn.js"; //sarebbe la stessa cosa che scrivere {cE:cE, qS:qS}

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
let searchProductValue = "";
let productListData = [];

/* QUERY SELECTOR */
const rootEl = qS("#root");
const searchProductEl = qS(".searchInput");


/* CREATE ELEMENT */
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

/* TEXT CONTENT */
productListTitle.textContent = "Products for you!";

sortMenuBtn.textContent = "Sort by";
sort1.textContent = "Sort 1";
sort2.textContent = "Sort 2";
sort3.textContent = "Sort 3";

filterBtnPrice.textContent = "Price";
filterBtnColor.textContent = "Color";
filterBtnMaterial.textContent = "Material";
filterBtnReview.textContent = "Review";

/* ATTRIBUTI */ sort1.setAttribute("href", "#");
sort2.setAttribute("href", "#");
sort3.setAttribute("href", "#");

/* CLASSI */
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
// productList.append(newProduct(productMock[0]));
// productList.append(newProduct(productMock[1]));

/* DIALOGO CON DUMMY  - asincrono*/
fetch("https://dummyjson.com/products")
  .then((res) => res.json()) //per la risposta
  .then((data) => {
    productListData = data.products;
    productListData.forEach(
      (product) => productList.append(newProduct(product)) //questa funzione appende la funzione che mi stampa la card
    ); //per i dati
  })
  .then(() => {
    //la parte della modale la inserisco fuori dal forEach
    const productCardEls = qSA(".product__card");
    productCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`) //vado a fare la chiamata in base al singolo id, in modo tale che dal click all'elemento avente id n, la chiamata avverrà rispetto l'id n
          .then((res) => res.json())
          .then((data) => rootEl.append(newProductModal(data, rootEl)))
      )
    );
  });

/* per la ricerca dalla searchbar */
searchProductEl.addEventListener("input", (evt) => {
  // if (evt.target.value.length >= 3) {
  // rootEl.removeChild(productList);
  // searchProductValue = evt.target.value;
  if (evt.target.value === "") {
    productListData.forEach((el) => {
      rootEl.append(newProduct(el));
    });
  } else {
    productList.textContent = "";
    productListData
      .filter((product) =>
        product.description.toLowerCase().includes(evt.target.value.toLowerCase())
      )
      .forEach((obj) => productList.append(newProduct(obj)));
    
  }
  // }
});




/* APPENDO TUTTO */
//inizio appendendo la modale con già un elemento interno per sistemare lo stile staticamente, successivamente inserirò i dati di dummyjson
/* rootEl.append(
  newProductModal({
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
  })
);
 */

// adesso lo faccio in modo dinamico al click sulla card, quindi direttamente da fn.js
//seleziono tutti gli elementi che corrisponono alla classe della product card
// const productCardEls = qSA(".product__card");
// console.log(productCardEls);

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


