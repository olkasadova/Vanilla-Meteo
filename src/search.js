
function displayCity (event) {
   event.preventDefault();
    let userCity = document.querySelector (".search-form-input");
    let cityDisplayed = document.querySelector(".city-display-weather");
    cityDisplayed.innerHTML = userCity.value;

}


let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", displayCity);

