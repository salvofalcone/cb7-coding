/******************** ESERCIZIO 1 ********************/
// let persona = ["Mario", "Rossi", "Italia"];
// const [nome, cognome, paese] = persona;

// console.log(nome);
// console.log(cognome);
// console.log(paese);

/******************** ESERCIZIO 2 ********************/
// const libro = {
//   titolo: "Il Nome della Rosa",
//   autore: "Umberto Eco",
//   anno: 1980,
// };

// const { titolo, autore, anno } = libro;
// console.log(titolo);
// console.log(autore);
// console.log(anno);

/******************** AVANZATO 1 ********************/
/* ESERIZIO 1 */
let persona = ["Mario", "Rossi", "Italia"];
const [
  nome = "Non specificato",
  cognome = "Non specificato",
  paese = "Non specificato",
] = persona;

console.log(nome);
console.log(cognome);
console.log(paese);

/* ESERIZIO 2 */
const libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

const {
  titolo = "Non specificato",
  autore = "Non specificato",
  anno = "Non specificato",
} = libro;
console.log(titolo);
console.log(autore);
console.log(anno);
