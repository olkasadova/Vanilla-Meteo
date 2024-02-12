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
    let units = getUserUnits (event);
    let APIkey="c9c17abaa3otf64ba314bf3fce705208";
    console.log (units);

    let APIUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=${units}&key=${APIkey}`;
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
       
        unitsSelected = "metric";
        //console.log(unitsSelected);
    }
    if (unitsImperial){
       
        unitsSelected = "imperial";
       // console.log(unitsSelected);
        return (unitsSelected);
    }
   // console.log(unitsMetric);
   // return(unitsSelected);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", displayCityWeather);

let unitsC = document.querySelector(".metric");
unitsC.addEventListener("click", getUserUnits);
let unitsF = document.querySelector(".imperial");
unitsF.addEventListener("click", getUserUnits);

displayDate();

