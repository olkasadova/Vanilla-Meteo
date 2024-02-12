function refreshWeather(response){
    let currentCityTemp = Math.round(response.data.temperature.current);
    let currentCityHumidity = response.data.temperature.humidity;
    let currentCityWind = Math.round(response.data.wind.speed);

    let displayTemp = document.querySelector (".temperature-value");
    let displayHumidity = document.querySelector (".humidity-value");
    let displayWind = document.querySelector (".wind-value");

    displayTemp.innerHTML = currentCityTemp;
    displayHumidity.innerHTML = currentCityHumidity;
    displayWind.innerHTML = currentCityWind;
}


function searchCity (city){
    //serach for city weather values through API
    let APIkey="c9c17abaa3otf64ba314bf3fce705208";
    let APIUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${APIkey}`;
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

