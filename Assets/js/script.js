var apiKey = 'ece933bf2ec6b5665201a9e858129794';
var cityCont = [];
var searchButton = document.getElementById('search');
var clearButton = document.getElementById('clear');
var cityName = document.getElementById('city');
let city = document.getElementById('city').value.trim();

var currentWeather = {};

console.log(city);
function getApi(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + apiKey//'https://api.openweathermap.org/data/2.5/onecall?lat=33.42&lon=111.94&units=imperial&appid=ece933bf2ec6b5665201a9e858129794';
    //var testCity = "api.openweathermap.org/data/2.5/forecast?q=" + "Phoenix" + "&appid=" + apiKey

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            currentWeather.name = data.city.name;
            currentWeather.temp = data.temp;
            currentWeather.wind = data.list.wind.speed;
            currentWeather.humidity = data.humidity;
        })

    //  var currentWeather = {  //index these data values at the index in the data for the date so current day would be index of 0 
    //      temp: data.temp,
    //      city: data.name,
    //      wind: data.wind.speed,
    //      humidity: data.humidity,
    //      uvIndex: data.uvi,
    //  }

    function addCurrentWeather() { // append data to html element 
        var ul = document.getElementById("current-city");
        var li = document.createElement("li");
        li.appendChild(currentWeather);
        ul.appendChild(li);

        var fiveDayWeather = { // index these data values for the 5 day forecast at index 1-5 
            temp: data.temp,
            wind: data.wind.speed,
            humidity: data.humidity,
        }

        function addFiveDay() { // append data to html element
            var ul2 = document.getElementsByClassName('five-day');
            var li2 = document.createElement('li');
            li2.appendChild(fiveDay);
            ul2.appendChild(li2);
        }
    }

};

function revealFiveDay() {
    var current = document.getElementById('current-city');
    var dayOne = document.getElementById('day-1')
    var dayTwo = document.getElementById('day-2')
    var dayThree = document.getElementById('day-3')
    var dayFour = document.getElementById('day-4')
    var dayFive = document.getElementById('day-5')

    current.style.display = "block";
    dayOne.style.display = "block";
    dayTwo.style.display = "block";
    dayThree.style.display = "block";
    dayFour.style.display = "block";
    dayFive.style.display = "block";
}


function getCity() {
    // event.preventDefault();
    var city = document.getElementById('city').value.trim();
    console.log(getApi(city));
    revealFiveDay();
}

getApi();

// searchButton.addEventListener('click', getCity());
// searchButton.addEventListener('click', getApi);

