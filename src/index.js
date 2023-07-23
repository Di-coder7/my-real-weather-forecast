let date = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let hour = [date.getHours()];
  if (hour < 10) {
    hour = `0 ${hour}`;
  }
  let minutes = [date.getMinutes(2)];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentDay = days[date.getDay()];

  return `${currentDay} ${hour}:${minutes}`;
}
let now = document.querySelector("#currentData");
now.innerHTML = formatDate(date);

// HW

// 2 step

function displayWeather(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#currentTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#temperature-discribe").innerHTML =
    response.data.weather[0].main;
}

// 1 step
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  searchCity(city);
}

// 3 step
function searchCity(city) {
  let apiKey = "d527df6aa83c9f534ae4562144311714";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}
// 5 step
function searchLocation(position) {
  let apiKey = "d527df6aa83c9f534ae4562144311714";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
}

// 4 step
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

//
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentLocation);

searchCity("Berlin");

function cityValue(event) {
  event.preventDefault();
  let city = document.querySelector("#currentCity").value;
  searchCity(city);
}
