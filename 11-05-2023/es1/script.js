const films = [
  {
    id: 1,
    title: "HP e la pietra filosofale",
    director: "Chris Columbus",
    year: 2001,
    posterUrl: "./assets/1.jpeg",
  },
  {
    id: 2,
    title: "HP e la camera dei segreti",
    director: "Chris Columbus",
    year: 2002,
    posterUrl: "./assets/2.jpeg",
  },
  {
    id: 3,
    title: "HP e il prigioniero di Azkaban",
    director: "Alfonso Cuarón",
    year: 2004,
    posterUrl: "./assets/3.jpeg",
  },
  {
    id: 4,
    title: "HP e il calice di fuoco",
    director: "Mike Newell",
    year: 2005,
    posterUrl: "./assets/4.jpeg",
  },
  {
    id: 5,
    title: "HP e l'Ordine della Fenice",
    director: "David Yates",
    year: 2007,
    posterUrl: "./assets/5.jpeg",
  },
  {
    id: 6,
    title: "HP e il principe mezzosangue",
    director: "David Yates",
    year: 2009,
    posterUrl: "./assets/6.jpeg",
  },
  {
    id: 7,
    title: "HP e i doni della morte - Parte 1",
    director: "David Yates",
    year: 2010,
    posterUrl: "./assets/7.jpeg",
  },
  {
    id: 8,
    title: "HP e i doni della morte - Parte 2",
    director: "David Yates",
    year: 2011,
    posterUrl: "./assets/7.jpeg",
  },
];

const body = document.querySelector("body");
const moviesContainer = document.createElement("div");
moviesContainer.classList = "movies-container";

body.appendChild(moviesContainer);

for (let film of films) {
  const card = document.createElement("div");
  const title = document.createElement("h2");
  const director = document.createElement("p");
  const year = document.createElement("p");
  const imgPoster = document.createElement("img");

  imgPoster.src = film.posterUrl;
  title.textContent = film.title;
  director.textContent = film.director;
  year.textContent = film.year;
  card.classList.add("movie-card");
  imgPoster.classList.add("img-poster");
  
  moviesContainer.appendChild(card);
  card.appendChild(title);
  card.appendChild(director);
  card.appendChild(year);
  card.appendChild(imgPoster);
}
