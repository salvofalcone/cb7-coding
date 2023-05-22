//   const weatherMain = cE("div");

//   const location = cE("h2");

//   const weatherTop = cE("div");
//   const region = cE("p");
//   const state = cE("p");

//   const weatherMid = cE("div");
//   const degrees = cE("h3");
//   const conditions = cE("p");

//   const img = cE("img");

//   const weatherBot = cE("div");

//   const first = cE("div");
//   const textFirst = cE("p");
//   const humidity = cE("p");
//   const second = cE("div");
//   const textSecond = cE("p");
//   const wind = cE("p");
//   const third = cE("div");
//   const textThird = cE("p");
//   const pressure = cE("p");

//   /* CLASSI */
//   location.classList.add("location");
//   weatherTop.classList.add("weather__top");
//   region.classList.add("region");
//   state.classList.add("state");

//   weatherMid.classList.add("weather__mid");
//   degrees.classList.add("degrees");
//   conditions.classList.add("conditions");

//   img.classList.add("weather__img");

//   first.classList.add("weather__bott__container");
//   textFirst.textContent = "Humidity";
//   humidity.classList.add("humidity");
//   second.classList.add("weather__bott__container");
//   textSecond.textContent = "Wind";
//   wind.classList.add("wind");
//   third.classList.add("weather__bott__container");
//   textThird.textContent = "Pressure";
//   pressure.classList.add("pressure");

//   /* APPENDO */
//   weatherTop.append(region, state);
//   weatherMid.append(degrees, conditions);
//   first.append(textFirst, humidity);
//   second.append(textSecond, wind);
//   third.append(textThird, pressure);
//   weatherBot.append(first, second, third);
//   weatherMain.append(location, weatherTop, weatherMid, img, weatherBot);
