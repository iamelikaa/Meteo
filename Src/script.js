function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search_form_input");
  let cityElement = document.querySelector("#weather_app_city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search_form");
searchFormElement.addEventListener("submit", handleSearch);
