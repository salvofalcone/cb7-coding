const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

// =====================================================
// SELEZIONE ELEMENTI

const equalBtn = qS("#equal");
const plusBtn = qS("#plus");
const difBtn = qS("#dif");
const prodBtn = qS("#prod");
const rapBtn = qS("#rap");
const upTwoBtn = qS("#upTwo");
const upThreeBtn = qS("#upThree");
const resultScreen = qS("#resultScreen");

const cancelBtn = qS("#cancelBtn");

const zeroBtn = qS("#zero");
const oneBtn = qS("#one");
const twoBtn = qS("#two");
const threeBtn = qS("#three");
const fourBtn = qS("#four");
const fiveBtn = qS("#five");
const sixBtn = qS("#six");
const sevenBtn = qS("#seven");
const eightBtn = qS("#eight");
const nineBtn = qS("#nine");

// =====================================================
/* Test aggiunta numeri schermo */
zeroBtn.addEventListener("click", () => {
  resultScreen.textContent += 0;
});

oneBtn.addEventListener("click", () => {
  resultScreen.textContent += 1;
});

twoBtn.addEventListener("click", () => {
  resultScreen.textContent += 2;
});

threeBtn.addEventListener("click", () => {
  resultScreen.textContent += 3;
});

fourBtn.addEventListener("click", () => {
  resultScreen.textContent += 4;
});

fiveBtn.addEventListener("click", () => {
  resultScreen.textContent += 5;
});

sixBtn.addEventListener("click", () => {
  resultScreen.textContent += 6;
});

sevenBtn.addEventListener("click", () => {
  resultScreen.textContent += 7;
});

eightBtn.addEventListener("click", () => {
  resultScreen.textContent += 8;
});

nineBtn.addEventListener("click", () => {
  resultScreen.textContent += 9;
});

cancelBtn.addEventListener("click", () => {
  resultScreen.textContent = null;
  RISULTATO = 0;
});
// =====================================================

/*  FUNZIONI OPERAZIONI  */
const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const prod = (a, b) => a * b;
const rap = (a, b) => a / b;

// =====================================================

// mi servono come stringa al momento così le posso concatenare sullo schermo
let firstNumb = null;
let secondNumb = null;
let operation = null;
let RISULTATO = 0;

// =====================================================

function operationChoice() {
  // prendo la stringa contenuta in resultScreen e la trasformo in numero
  let temp = parseFloat(qS("#resultScreen").innerHTML);

  //svuoto resultScreen

  resultScreen.textContent = " ";
  // operazione corrispondente
  RISULTATO += temp;
}

function operationSUM() {
  // prendo la stringa contenuta in resultScreen e la trasformo in numero
  let temp = parseFloat(qS("#resultScreen").innerHTML);

  //svuoto resultScreen
  resultScreen.textContent = " ";

  // operazione corrispondente
  RISULTATO += temp;
}

// =====================================================

/* operazioni */
plusBtn.addEventListener("click", () => {
  operationSUM();
});

difBtn.addEventListener("click", () => {
  operationChoice();
});

prodBtn.addEventListener("click", () => {
  operationChoice();
});

rapBtn.addEventListener("click", () => {
  operationChoice();
});

equalBtn.addEventListener("click", () => {
  operationChoice();
  resultScreen.textContent = RISULTATO;
});

// DA IMPLEMENTARE
upTwoBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});

upThreeBtn.addEventListener("click", () => {
  alert("Non sono ancora pronto! 😂");
});
