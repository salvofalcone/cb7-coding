import { cartItems, cartEl } from "../script.js";

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
  descriptionEl.textContent = noMoreText(data.description);
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
export const noMoreText = (str) =>
  str.split(" ").splice(0, 8).join(" ") + " ...";
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
  buyTextSecondBtnEl.textContent = "Go back!";

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
    buyTextSecondBtnEl.addEventListener("click", () =>
      parentEl.removeChild(wrapperEl)
    );
  }

  buyTextFirstBtnEl.addEventListener("click", () => {
    cartItems.push(productData);
    parentEl.removeChild(wrapperEl);

    if (cartItems.length >= 1) {
      cartEl.classList.add("itemsInCart");
    }
  });

  return wrapperEl;
};

/* ==================================================================== */

export const createCartModal = (cartItems, parentEl = null) => {
  //stessa struttura delle altre modali
  const wrapperEl = cE("div");
  const totalItemsEl = cE("h2");

  const priceEl = cE("p");
  const closeBtnEl = cE("button");

  wrapperEl.className = "cartModal";
  totalItemsEl.textContent = `Products added to cart: ${cartItems.length}`;

  closeBtnEl.classList = "cartModal__closeBtn";
  closeBtnEl.textContent = "X";

  priceEl.textContent = `Total:$ ${cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  )}`;

  cartItems.forEach((item) => {
    wrapperEl.append(closeBtnEl, newProduct(item), totalItemsEl, priceEl); //analogo
  });

  closeBtnEl.addEventListener("click", () => {
    parentEl.removeChild(wrapperEl);
    cartEl.disabled = false;
  });

  return wrapperEl;
};
