export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (elements) => document.querySelectorAll(elements);

/* ==================================================================== */
/* carta prodotto */
export const newProduct = (data) => {
  /***** CREATE ELEMENT *****/
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  /***** CLASSI e ATTRIBUTI*****/
  wrapperEl.className = "product__card";
  wrapperEl.setAttribute("id", data.id); //aggiungo questo così da avere id unico per ogni card
  textWrapperEl.className = "product__card__text";
  descriptionEl.className = "product__card__description";
  buttonEl.className = "product__card__btn";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;

  /***** TEXT CONTENT *****/
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + "$";
  buttonEl.textContent = "Add to Cart";

  /***** APPEND *****/
  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);
  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

/* ==================================================================== */

/* funzione per limitare la stampa di parole nei paragrafi */
// export const noMoreText = (str) =>
//   str.split(" ").splice(0, 5).join(" ") + " ...";

/* ==================================================================== */
/* modale */
export const newProductModal = (productData, parentEl = null) => {
  /***** CREATE ELEMENT *****/
  const wrapperEl = cE("div"); //contenitore principale
  const overlayEl = cE("div");

  //contenitore principale a sinistra
  const galleryEl = cE("div");
  const mainImgEl = cE("img");
  // const thumbWrapperEl = cE("div");

  //contenitore principale a destra
  const textEl = cE("div");
  const mainTextEl = cE("div");
  const mainTextTitleEl = cE("h1");
  const mainTextRateEl = cE("p");
  const mainTextDescEl = cE("p");

  //contenitore pulsanti
  const buyTextEl = cE("div");
  const buyTextFirstBtnEl = cE("button");
  const buyTextSecondBtnEl = cE("button");

  /***** CLASSI *****/
  wrapperEl.className = "modal__product";
  overlayEl.className = "modal__overlay";

  galleryEl.className = "modal__product__gallery";

  textEl.className = "modal__product__text";
  mainTextEl.className = "modal__main__text";
  buyTextEl.className = "modal__main__buy";

  /***** ATTRIBUTI *****/
  mainImgEl.src = productData.thumbnail; //voglio che sia l'immagine principale
  mainImgEl.alt = productData.title;

  /***** TEXT CONTENT *****/
  mainTextTitleEl.textContent = productData.title;
  mainTextDescEl.textContent = productData.description;
  mainTextRateEl.textContent = productData.rating;

  buyTextFirstBtnEl.textContent = "Buy now!";
  buyTextSecondBtnEl.textContent = "Add to cart!";

  // productData.images.forEach((image) => {});

  /***** APPEND *****/
  mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
  buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(overlayEl, galleryEl, textEl);

  /***** listener per eliminare la modale al click *****/
  if (parentEl) {
    overlayEl.addEventListener("click", () => parentEl.removeChild(wrapperEl));
  }

  return wrapperEl;
};

/* ==================================================================== */
/* creazione filtri e sort */
// export const filterSort = () => {
//   const rootEl = qS("#root");

//   const fsMain = cE("div");

//   const fsSort = cE("div");
//   const sortMenuBtn = cE("button");
//   const sortMenuDiv = cE("div");
//   const sort1 = cE("a");
//   const sort2 = cE("a");
//   const sort3 = cE("a");

//   const fsFilter = cE("div");
//   const filterBtnCategories = cE("button");
//   const filterBtnColor = cE("button");
//   const filterBtnMaterial = cE("button");
//   const filterBtnReview = cE("button");

//   sortMenuBtn.textContent = "Sort by";
//   sort1.textContent = "Sort 1";
//   sort2.textContent = "Sort 2";
//   sort3.textContent = "Sort 3";

//   filterBtnCategories.textContent = "Categories";
//   filterBtnColor.textContent = "Color";
//   filterBtnMaterial.textContent = "Material";
//   filterBtnReview.textContent = "Review";

//   sort1.setAttribute("href", "#");
//   sort2.setAttribute("href", "#");
//   sort3.setAttribute("href", "#");

//   fsMain.className = "fs__main";

//   fsFilter.className = "fs__filter";
//   filterBtnCategories.className = "filter__menu__btn filterBtnCategories";
//   filterBtnColor.className = "filter__menu__btn filterBtnColor";
//   filterBtnMaterial.className = "filter__menu__btn filterBtnMaterial";
//   filterBtnReview.className = "filter__menu__btn filterBtnReview";

//   fsSort.className = "fs__sort";
//   sortMenuBtn.className = "sort__menu__btn";
//   sortMenuDiv.className = "sort__menu__div";
//   sort1.className = "sort__menu__links";
//   sort2.className = "sort__menu__links";
//   sort3.className = "sort__menu__links";

//   rootEl.append(fsMain);

//   fsMain.append(fsFilter, fsSort);

//   fsSort.append(sortMenuBtn, sortMenuDiv);
//   sortMenuDiv.append(sort1, sort2, sort3);

//   fsFilter.append(
//     filterBtnCategories,
//     filterBtnColor,
//     filterBtnMaterial,
//     filterBtnReview
//   );
// };

/* ==================================================================== */
