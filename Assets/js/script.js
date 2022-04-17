var apiKey = 'ece933bf2ec6b5665201a9e858129794';
var cityCont = [];
var searchButton = document.getElementById('search');
var clearButton = document.getElementById('clear');
var city = document.getElementById('city').value.trim();

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
            currentWeather.temp = data.list[0].main.temp;
            currentWeather.wind = data.list[0].wind.speed;
            currentWeather.humidity = data.list[0].main.humidity;

            var cityName = document.createElement('p');
            cityName.textContent = "Name: " + currentWeather.name;
            document.getElementById('current-city').appendChild(cityName);


            for (var i = 0; i < data.list.length; i + 8) {
                currentWeather.temp = data.list[i].main.temp;
                currentWeather.wind = data.list[i].wind.speed;
                currentWeather.humidity = data.list[i].main.humidity;

                if (i = 0) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('current-city').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('current-city').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('current-city').appendChild(cityHum);
                }
                else if (i = 8) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('day-1').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('day-1').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('day-1').appendChild(cityHum);
                }
                else if (i = 16) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('day-2').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('day-2').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('day-2').appendChild(cityHum);
                }
                else if (i = 24) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('day-3').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('day-3').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('day-3').appendChild(cityHum);
                }
                else if (i = 32) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('day-4').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('day-4').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('day-4').appendChild(cityHum);
                } 
                else if (i =40) {
                    var cityTemp = document.createElement('p');
                    cityTemp.textContent = "Temp: " + currentWeather.temp;
                    document.getElementById('day-5').appendChild(cityTemp);
                    var cityWind = document.createElement('p');
                    cityWind.textContent = "Wind: " + currentWeather.wind;
                    document.getElementById('day-5').appendChild(cityWind);
                    var cityHum = document.createElement('p');
                    cityHum.textContent = "Humidity: " + currentWeather.humidity;
                    document.getElementById('day-5').appendChild(cityHum);
                }
            }

        })

    //  var currentWeather = {  //index these data values at the index in the data for the date so current day would be index of 0 
    //      temp: data.temp,
    //      city: data.name,
    //      wind: data.wind.speed,
    //      humidity: data.humidity,
    //      uvIndex: data.uvi,
    //  }

    // function addCurrentWeather() { // append data to html element 
    //     var ul = document.getElementById("current-city");
    //     var li = document.createElement("li");
    //     li.appendChild(currentWeather);
    //     ul.appendChild(li);

    //     var fiveDayWeather = { // index these data values for the 5 day forecast at index 1-5 
    //         temp: data.temp,
    //         wind: data.wind.speed,
    //         humidity: data.humidity,
    //     }

    //     function addFiveDay() { // append data to html element
    //         var ul2 = document.getElementsByClassName('five-day');
    //         var li2 = document.createElement('li');
    //         li2.appendChild(fiveDay);
    //         ul2.appendChild(li2);
    //     }
    // }

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

