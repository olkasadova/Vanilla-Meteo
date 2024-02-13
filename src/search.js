function refreshWeather(response){
     //if (response.status === "not_found"){
       // alert ("City was not found. Try")
    //}
   
    let currentCityTemp = Math.round(response.data.temperature.current);
    let currentCityHumidity = response.data.temperature.humidity;
    let currentCityWind = Math.round(response.data.wind.speed);

    let displayTemp = document.querySelector (".temperature-value");
    let displayHumidity = document.querySelector (".humidity-value");
    let displayWind = document.querySelector (".wind-value");
    let tempUnits = document.querySelector (".temperature-degree-scale");
    let windUnits = document.querySelector(".wind-units");
    let units = getUserUnits (event);

    //convert returned values to imperial values
    if (units === "imperial"){
       // convertToImperial(displayTemp);
       let convertedValue = Math.round(currentCityTemp *9/5 + 32);
       displayTemp.innerHTML = convertedValue;
       convertedCityWind = Math.round(currentCityWind*0.62);
       displayWind.innerHTML = convertedCityWind;
       tempUnits.innerHTML = "F";
       windUnits.innerHTML = "m/h"
    }
     //display in metric units returned by default from API
    else
        {
            displayTemp.innerHTML = currentCityTemp;
            displayHumidity.innerHTML = currentCityHumidity;
            displayWind.innerHTML = currentCityWind;
            tempUnits.innerHTML = "C";
            windUnits.innerHTML = "km/h";
        }
    let displayIcon = document.querySelector (".tempareture-icon");
    let apiIcon = response.data.condition.icon;
        switch (apiIcon){
            case "broken-clouds-night": displayIcon.src = "images/free-blue-clouds-and-blue-moon-icon-16538.png"
            case "broken-clouds-day": displayIcon.src = "images/free-yellow-sun-and-blue-cloud-icon-16528.png"
            case "rain-day": displayIcon.src = "images/free-downpour-rainy-day-icon-16531.png"
            case "scattered-clouds-day": displayIcon.src = "images/free-yellow-sun-and-blue-cloud-icon-16528.png"
        }
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

function displayDate () {
    //get current date-time data
    let weekDayslist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let monthsList = ["January","February","MArch","April","May","June","July","August","September","October","November","December"];
    let todayDate = new Date();
    let day = todayDate.getDay();
    let date = todayDate.getDate();
    let month = todayDate.getMonth();
    let hours = todayDate.getHours ();
    let minutes = todayDate.getMinutes();
    //get corresponsing elements
    let displayWeekDay = document.querySelector(".weekday")
    let displayDay = document.querySelector(".day");
    let displayMonth = document.querySelector(".month");
    let displayHours = document.querySelector(".time-hours");
    let displayMinutes = document.querySelector(".time-minutes");

    displayWeekDay.innerHTML = weekDayslist[day];
    displayDay.innerHTML = date;
    displayMonth.innerHTML = monthsList[month];
    displayHours.innerHTML = hours;
    displayMinutes.innerHTML = minutes;

    console.log (todayDate, day, date, month, hours, minutes);

}
function getUserUnits (event) {
    let unitsMetric = document.querySelector(".metric").checked;
    let unitsImperial = document.querySelector(".imperial").checked;
    let unitSelected= "";

    if (unitsMetric){
        unitSelected = "metric";
    }
    if (unitsImperial){    
        unitSelected = "imperial";
        return (unitSelected);
    }
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", displayCityWeather);

let unitsC = document.querySelector(".metric");
unitsC.addEventListener("click", getUserUnits);
let unitsF = document.querySelector(".imperial");
unitsF.addEventListener("click", getUserUnits);

displayDate();

