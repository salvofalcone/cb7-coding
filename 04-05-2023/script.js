// ------- ESERCIZIO 1 -------

// let arrayInit = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let arrayFinal = [];

// console.log("Array iniziale", arrayInit);
// console.log("Array Finale", arrayFinal);

// for (let i = arrayInit.length; i > 0; i--) {
//   let x = arrayInit.pop();
//   arrayFinal.push(x);
// }
// console.log("Array iniziale", arrayInit);
// console.log("Array Finale", arrayFinal);

// -------------------------------------------------

// ------- ESERCIZIO 2 -------

// // nel caso in cui l'array contenga solo numeri compresi tra 0 a 9 (estremi inclusi)
// let array = [6, 7, 8, 9, 1, 2, 3, 4, 5, 0];
// let orderedArray = array.sort();
// console.log("Il numero più piccolo è: ", +orderedArray[0]);

// let inverseOrderedArray = orderedArray.reverse();
// console.log("Il numero più grande è: ", +inverseOrderedArray[0]);

// // nel caso in cui l'array contenga numeri maggiori a 9

// let array = [9, 10, 81, ,-10, 12, 0, -1, -9];
// let min = array.shift();
// for (let item of array) {
//   if (min > item) {
//     min = item;
//   }
// }
// console.log(min);

let array = [-10390, 9, 10, 81, -10, 12, 0, -1, -9];

let max = array[0];
for (let item of array) {
  if (max < item) {
    max = item;
  }
}

let min=array[0];
for (let item of array) {
  if (min > item) {
    min = item;
  }
}

console.log("Il più piccolo è: ",+min);
console.log("Il più grande è: ",+max);
