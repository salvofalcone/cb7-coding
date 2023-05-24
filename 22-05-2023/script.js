const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

/* INTRO */
const intro = qS("#intro");
const search = qS(".intro__input");
const searchBtn = qS(".intro__btn");

/* WEATHER MAIN */
const weatherMain = qS("#weatherMain");
const location = qS(".location");
const region = qS(".region");
const state = qS(".state");
const degrees = qS(".degrees");
const conditions = qS(".conditions");
const img = qS(".weather__img");
const humidity = qS(".humidity");
const wind = qS(".wind");
const pressure = qS(".pressure");

/* FUNZIONI */
const newData = async (userSearch) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b6864d43b09940acb6c130603232205&q=${userSearch}&aqi=no&lang=it`
  );

  const data = await res.json();

  changeInfo(data);

  return data;
};

/* Aggiornamento info in base alla località */
const changeInfo = (data) => {
  location.textContent = data.location.name;
  region.textContent = data.location.region + "," + " ";
  state.textContent = data.location.country;
  degrees.textContent = data.current.temp_c + "°C";
  if (data.current.temp_c >= 18) {
    document.body.classList.add("sunny");
  } else {
    document.body.classList.add("rainy");
  }
  conditions.textContent = data.current.condition.text;
  img.src = data.current.condition.icon;
  humidity.textContent = data.current.humidity + "%";
  wind.textContent = data.current.wind_mph + " " + data.current.wind_dir;
  pressure.textContent = data.current.pressure_mb + "mb";
};

/* EVENT LISTENER */
searchBtn.addEventListener("click", () => {
  let userSearch = search.value;
  document.body.removeChild(intro);
  weatherMain.classList.toggle("none");

  newData(userSearch);
});
