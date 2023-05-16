// export const cE = (element) => document.createElement(element);
// export const qS = (element) => document.querySelector(element);
// export const qSA = (elements) => document.querySelectorAll(elements);

// /* ==================================================================== */

// export const newProduct = (data) => {
//   //creation
//   const wrapperEl = cE("div");
//   const textWrapperEl = cE("div");
//   const imageEl = cE("img");
//   const titleEl = cE("h3");
//   const descriptionEl = cE("p");
//   const ratingEl = cE("p");
//   const priceEl = cE("h4");
//   const buttonEl = cE("button");

//   // classi e attributi
//   wrapperEl.className = "product__card";
//   wrapperEl.setAttribute("id", data.id); //aggiungo questo così da avere id unico per ogni card
//   textWrapperEl.className = "product__card__text";
//   descriptionEl.className = "product__card__description";
//   buttonEl.className = "product__card__btn";
//   imageEl.src = data.thumbnail;
//   imageEl.alt = data.title;

//   //text content
//   titleEl.textContent = data.title;
//   descriptionEl.textContent = data.description;
//   ratingEl.textContent = data.rating;
//   priceEl.textContent = data.price + "$";
//   buttonEl.textContent = "Add to Cart";

//   textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);
//   wrapperEl.append(imageEl, textWrapperEl);

//   return wrapperEl;
// };

// /* ==================================================================== */

// // export const noMoreText = (str) =>
// //   str.split(" ").splice(0, 5).join(" ") + " ...";

// /* ==================================================================== */

// //ora creo la modale
// export const newProductModal = (productData, parentEl = null) => {
//   /***** CREATE ELEMENT *****/
//   const wrapperEl = cE("div"); //contenitore principale
//   const overlayEl = cE("div");

//   //contenitore principale a sinistra
//   const galleryEl = cE("div");
//   const mainImgEl = cE("img");
//   // const thumbWrapperEl = cE("div");

//   //contenitore principale a destra
//   const textEl = cE("div");
//   const mainTextEl = cE("div");
//   const mainTextTitleEl = cE("h1");
//   const mainTextRateEl = cE("p");
//   const mainTextDescEl = cE("p");

//   //contenitore pulsanti
//   const buyTextEl = cE("div");
//   const buyTextFirstBtnEl = cE("button");
//   const buyTextSecondBtnEl = cE("button");
//   const closeBtnEl = cE("button");

//   /***** CLASSI *****/
//   wrapperEl.className = "modal__product";
//   overlayEl.className = "modal__overlay";

//   galleryEl.className = "modal__product__gallery";

//   textEl.className = "modal__product__text";
//   mainTextEl.className = "modal__main__text";
//   buyTextEl.className = "modal__main__buy";

//   closeBtnEl.className = "modal__close__btn";

//   /***** ATTRIBUTI *****/
//   mainImgEl.src = productData.thumbnail; //voglio che sia l'immagine principale
//   mainImgEl.alt = productData.title;

//   /***** TEXT CONTENT *****/
//   mainTextTitleEl.textContent = productData.title;
//   mainTextDescEl.textContent = productData.description;
//   mainTextRateEl.textContent = productData.rating;

//   buyTextFirstBtnEl.textContent = "Buy now!";
//   buyTextSecondBtnEl.textContent = "Add to cart!";

//   closeBtnEl.textContent = "X";

//   // productData.images.forEach((image) => {});

//   /***** APPENDO GLI ELEMENTI *****/
//   mainTextEl.append(mainTextTitleEl, mainTextDescEl, mainTextRateEl);
//   buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
//   galleryEl.append(mainImgEl);
//   textEl.append(mainTextEl, buyTextEl);
//   wrapperEl.append(overlayEl, galleryEl, textEl, closeBtnEl);

//   /***** listener per eliminare la modale al click sul close *****/
//   if (parentEl) {
//     closeBtnEl.addEventListener("click", () => parentEl.removeChild(wrapperEl));
//   }

//   return wrapperEl;
// };

//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////
//////////

export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);
export const qSA = (elements) => document.querySelectorAll(elements);

/* ==================================================================== */

export const newProduct = (data) => {
  //creation
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  // classi e attributi
  wrapperEl.className = "product__card";
  wrapperEl.setAttribute("id", data.id); //aggiungo questo così da avere id unico per ogni card
  textWrapperEl.className = "product__card__text";
  descriptionEl.className = "product__card__description";
  buttonEl.className = "product__card__btn";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;

  //text content
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + "$";
  buttonEl.textContent = "Add to Cart";

  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);
  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

/* ==================================================================== */

// export const noMoreText = (str) =>
//   str.split(" ").splice(0, 5).join(" ") + " ...";

/* ==================================================================== */

//ora creo la modale
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

  /***** APPENDO GLI ELEMENTI *****/
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
