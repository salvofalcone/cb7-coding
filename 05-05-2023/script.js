// Esercizio 1

// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

// ------- ESERCIZIO 2 -------
// (come consigliato da Casimiro ho fatto il secondo esercizio usando una sola funzione)

function calc() {
  var firstNumb = parseFloat(prompt("Inserisci il primo numero: "));
  var secondNumber = parseFloat(prompt("Inserisci il secondo numero: "));
  var operator = prompt("Inserisci un operatore matematico tra +, -, *, / :");
  var result;

  switch (operator) {
    case "+":
      result = firstNumb + secondNumber;
      break;
    case "-":
      result = firstNumb - secondNumber;
      break;
    case "*":
      result = firstNumb * secondNumber;
      break;
    case "/":
      result = firstNumb / secondNumber;
      break;
    default:
      result = "Qualcosa è andato storto, riproviamo?";
  }
  return result;
}

var result = calc();
console.log("Il risultato dell'operazione è: "+ result);


// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

// ------- ESERCIZIO 3 -------
// const person = {
//   name: "Salvo",
//   surname: "Falcone",
//   age: 25,
//   address: {
//     street: "Via Gabriele D'Annunzio",
//     city: "Licodia Eubea",
//     state: "Italy",
//   },
//   contact: {
//     email: "salvofalcone57@gmail.com",
//     phone: "+39 333 22 44 567",
//   },
// };

// console.log(
//   "Ciao! Mi chiamo " + person.name + " e ho " + person["age"] + " anni."
// );
// console.log("Contattami a questa mail: " + person.contact.email);


// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------

// ------- AVANZATO -------

// // addizione
// function sum(firstNumb, secondNumb) {
//   return firstNumb + secondNumb;
// }
// // differenza
// function dif(firstNumb, secondNumb) {
//   return firstNumb - secondNumb;
// }
// // prodotto
// function prod(firstNumb, secondNumb) {
//   return firstNumb * secondNumb;
// }
// // divisione
// function rap(firstNumb, secondNumb) {
//   return firstNumb / secondNumb;
// }

// // chiedo all'utente di inserire i valori
// let firstNumb = parseFloat(prompt("Inserisci il primo numero: "));
// let secondNumb = parseFloat(prompt("Inserisci il secondo numero: "));
// let operator = prompt(
//   "Inserisci l'operazione tramite uno dei seguenti simboli (+, -, *, /):"
// );
// let result;

// // eseguo l'operazione
// switch (operator) {
//   case "+":
//     result = sum(firstNumb, secondNumb);
//     break;
//   case "-":
//     result = dif(firstNumb, secondNumb);
//     break;
//   case "*":
//     result = prod(firstNumb, secondNumb);
//     break;
//   case "/":
//     result = rap(firstNumb, secondNumb);
//     break;
//   default:
//     console.log("Qualcosa è andato storto, riproviamo?");
// }

// console.log("Il risultato dell'operazione è: " + result);
