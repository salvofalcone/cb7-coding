/* Utilizzando callbacks, ricreare la calcolatrice in forma base includendo il DOM, pertanto non avremo più i risultati via console, ma direttamente renderizzati sulla pagina (qualunque interpretazione qui va bene, e qualunque grado di complessità verrà valutato positivamente, per es. potrete avere anche un solo operatore e due valori da sommare) */

const newElement = document.createElement("p");
const containerElement = document.querySelector(".containerExOne");
containerElement.appendChild(newElement);

/*  FUNZIONI OPERAZIONI  */
const sum = (a, b) => a + b;
const dif = (a, b) => a - b;
const prod = (a, b) => a * b;
const rap = (a, b) => a / b;

/* DATI UTENTE */
const firstNumb = document.querySelector(".firstNumb");
const secondNumb = document.querySelector(".secondNumb");
const operator = document.querySelector(".operator");
const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", () => {
  const num1 = parseFloat(firstNumb.value);
  const num2 = parseFloat(secondNumb.value);
  const oper = operator.value;

  switch (oper) {
    case "sum":
      newElement.textContent = `${num1} + ${num2} = ${sum(num1, num2)}`;
      break;
    case "dif":
      newElement.textContent = ` ${num1} - ${num2} = ${dif(num1, num2)}`;
      break;
    case "prod":
      newElement.textContent = `${num1} * ${num2} = ${prod(num1, num2)}`;
      break;
    case "rap":
      newElement.textContent = `${num1} / ${num2} = ${rap(num1, num2)}`;
      break;
  }
});
