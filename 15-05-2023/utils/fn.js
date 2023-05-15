export const cE = (element) => document.createElement(element);
export const qS = (element) => document.querySelector(element);

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
  wrapperEl.className = "product_card";
  textWrapperEl.className = "product_card__text";
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

export const noMoreText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";
