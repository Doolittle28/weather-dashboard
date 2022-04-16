var apiKey = 'ece933bf2ec6b5665201a9e858129794';
var cityCont = [];
var searchButton = document.getElementById('search');
var clearButton = document.getElementById('clear');
var cityName = document.getElementById('city');
let city = document.getElementById('city').value.trim();

console.log(city);
function getApi(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey//'https://api.openweathermap.org/data/2.5/onecall?lat=33.42&lon=111.94&units=imperial&appid=ece933bf2ec6b5665201a9e858129794';
    //var testCity = "api.openweathermap.org/data/2.5/forecast?q=" + "Phoenix" + "&appid=" + apiKey

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })

    /* var currentWeather = {
         temp: data.temp,
         cityName: data.name,
         wind: data.wind.speed,
         humidity: data.humidity,
         uvIndex: data.uvi,
     }
 
     var currentWeatherCont = {
 
     }
 
     function addCurrentWeather() {
         var ul = document.getElementById("city");
         var li = document.createElement("li");
         li.appendChild(document.textContent);
         ul.appendChild(li);
     }
 */
};

function revealFiveDay() {
    var dayOne = document.getElementById('day-1')
    var dayTwo = document.getElementById('day-2')
    var dayThree = document.getElementById('day-3')
    var dayFour = document.getElementById('day-4')
    var dayFive = document.getElementById('day-5')

    dayOne.style.display = "block";
    dayTwo.style.display = "block";
    dayThree.style.display = "block";
    dayFour.style.display = "block";
    dayFive.style.display = "block";
}


function getCity() {
    // event.preventDefault();
    let city = document.getElementById('city').value.trim();
    console.log(getApi(city));
    revealFiveDay();
}


// getCity();
// console.log('city');
// $('search').on('click', getCity)
// $('city').on('click', getApi())
getApi();

// searchButton.addEventListener('click', getCity());
// searchButton.addEventListener('click', getApi);

