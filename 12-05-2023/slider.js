// ESERCIZIO 1 e AVANZATO
// ======================================================================

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

// ======================================================================

const imageList = [
  "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1524242109383-e349707a106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1518798495352-92ac911fc5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",

  // "https://images.unsplash.com/photo-1476837754190-8036496cea40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  // "https://images.unsplash.com/photo-1522092372459-dff01028d904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  // "https://images.unsplash.com/photo-1518218392262-1beb4730fb09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  // "https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  // "https://images.unsplash.com/photo-1604509082195-1d60a05fbe1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
];

/* pongo questo a 0 fuori dal ciclo altrimenti ogni volta mi viene portato a zero */
let imageIndex = 0;

const rootEl = qS("#root");
const body = qS("body");

const imgEl = cE("img");
const buttonNextEl = cE("button");
const buttonPrevEl = cE("button");
const dotsDiv = cE("div");

imgEl.src = imageList[imageIndex];
imgEl.alt = "New York Image";

buttonNextEl.textContent = ">";
buttonPrevEl.textContent = "<";
// dotsDiv.textContent = "qui inserisco i radio button";

buttonNextEl.className = "button";
buttonPrevEl.className = "button";
dotsDiv.className = "dotsDiv";

rootEl.append(buttonPrevEl, imgEl, buttonNextEl);
body.append(dotsDiv);

/* SCROLL IMAGE */
setInterval(() => {
  imgEl.src = imageList[imageIndex];
  imageIndex++;

  if (imageIndex === imageList.length) imageIndex = 0;
}, 4500);

/* pulsante per andare avanti e indietro */
buttonNextEl.addEventListener("click", () => {
  if (imageIndex > imageList.length - 2) imageIndex = 0;

  imageIndex++;
  imgEl.src = imageList[imageIndex];
});

buttonPrevEl.addEventListener("click", () => {
  if (imageIndex <= 0) imageIndex = imageList.length - 1;

  imageIndex--;
  imgEl.src = imageList[imageIndex];
});

const createRadio = () => {
  const radio = cE("input");
  radio.type = "radio";
  radio.setAttribute("name", "radioBtn");
  radio.className = "radioBtn";
  dotsDiv.append(radio);

  for (let image in imageList) {
    radio.setAttribute("id", image);
  }
};

for (let pippo of imageList) {
  createRadio(pippo);
}
