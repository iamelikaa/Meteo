function refreshTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather_app_city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDay(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDay(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "7054a26b3ao026dad3btbddfe1386602";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&unit=metric&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshTemperature);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search_form_input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search_form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Paris");
