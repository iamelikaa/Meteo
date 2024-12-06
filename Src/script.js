function refreshTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather_app_city");
  cityElement.innerHTML = respons.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
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
