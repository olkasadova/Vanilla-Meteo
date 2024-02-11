function refreshWeather(response){
    console.log (response);
}


function searchCity (city){
    //serach for city weather values through API
    let APIkey="c9c17abaa3otf64ba314bf3fce705208";
    //let city = userCity.value;
    let APIUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(APIUrl).then (refreshWeather);

}


function displayCityWeather (event) {
   event.preventDefault();
    let userCity = document.querySelector (".search-form-input");
    let cityDisplayed = document.querySelector(".city-display-weather");
    cityDisplayed.innerHTML = userCity.value;
    searchCity (userCity.value);

}


let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", displayCityWeather);

