const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

// =====================================================
// SELEZIONE ELEMENTI

const equalBtn = qS("#equal");
const plusBtn = qS("#plus");
const difBtn = qS("#dif");
const prodBtn = qS("#prod");
const rapBtn = qS("#rap");
const squareRootBtn = qS("#squareRoot");
const upTwoBtn = qS("#upTwo");
const upThreeBtn = qS("#upThree");
const resultScreen = qS(".resultScreen");

// =====================================================

/*  FUNZIONI OPERAZIONI  */
const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const prod = (a, b) => a * b;
const rap = (a, b) => a / b;

// =====================================================

const firstNumb = 10;
const secondNumb = 5;

// ZONA RISULTATO
resultScreen.textContent = "Risultato";

// =====================================================

// =====================================================

equalBtn.addEventListener("click", () => {
  console.log("Hai premuto =");
});

plusBtn.addEventListener("click", () => {
  console.log(sum(firstNumb, secondNumb));
  resultScreen.textContent = sum(firstNumb, secondNumb);
});

difBtn.addEventListener("click", () => {
  console.log(dif(firstNumb, secondNumb));
  resultScreen.textContent = dif(firstNumb, secondNumb);
});

prodBtn.addEventListener("click", () => {
  console.log(prod(firstNumb, secondNumb));
  resultScreen.textContent = prod(firstNumb, secondNumb);
});

rapBtn.addEventListener("click", () => {
  console.log(rap(firstNumb, secondNumb));
  resultScreen.textContent = rap(firstNumb, secondNumb);
});

// DA IMPLEMENTARE
squareRootBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});

squareRootBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});

upTwoBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});

upThreeBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});
