const hamburgerBtn = document.querySelector(".hamburger");
const tendinaDiv = document.querySelector(".tendina");

function hamburgerFunc() {
  console.log("Hai cliccato");
  tendinaDiv.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", hamburgerFunc);

// ---------------------------------- ESERCIZIO 1 ----------------------------------
const btn = document.querySelector("#buttonOne");
const output1 = document.querySelector(".exOne");

function textFunction() {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Hello World! :) ";
  output1.appendChild(paragrafo);
}

btn.addEventListener("click", textFunction);

//se ho capito le anonymous function posso costruirlo anche così
// btn.addEventListener("click", () =>{
//   const paragrafo = document.createElement("p");
//   paragrafo.textContent = "Hello World";
//   output1.appendChild(paragrafo);
// });
// ---------------------------------------------------------------------------------

// ---------------------------------- ESERCIZIO 2 ----------------------------------
const btn2 = document.querySelector("#button"); // #button
const input2 = document.querySelector("#input"); // contenuto da prendere
const output2 = document.querySelector(".exTwo"); // dove stamperò il contenuto

function submitFunction(e) {
  e.preventDefault(); // per evitare il refresh dovuto al submit

  const paragTwo = document.createElement("p"); // creo un contenitore p in cui inserirò il contenuto testuale

  // console.log("Hai inserito un nuovo paragravo per l'esercizio 2");
  paragTwo.textContent = input2.value; // mi serve per prendere il testo digitato dall'utente e inserirso in html
  output2.appendChild(paragTwo); // appendo altrimenti non funziona nulla
}

btn2.addEventListener("click", submitFunction);
// ---------------------------------------------------------------------------------

// ---------------------------------- ESERCIZIO 3 ----------------------------------
const btn3 = document.querySelector("#buttonThree"); // #button
const inputAlcool = document.querySelector("#inputAlcool"); // contenuto da prendere
const add = document.querySelector(".listIngredient"); // dove stamperò il contenuto

function addingFunc(e) {
  e.preventDefault(); // per evitare il refresh dovuto al submit

  const newIngredient = document.createElement("li");
  newIngredient.textContent = inputAlcool.value;
  add.appendChild(newIngredient); // appendo altrimenti non funziona nulla
}

btn3.addEventListener("click", addingFunc);
// ---------------------------------------------------------------------------------
