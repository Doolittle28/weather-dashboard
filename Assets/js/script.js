var apiKey = 'ece933bf2ec6b5665201a9e858129794';
var cityCont = [];
var searchButton = document.getElementById('search');
var clearButton = document.getElementById('clear');
var city = document.getElementById('city').value.trim();

var currentWeather = {};
console.log(city);

function getApi(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&current.uvi&units=imperial&appid=" + apiKey;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // append just the name for local storage to created a button 

            // loops through the data to give current day and 5 day forecast data 
            for (var i = 0; i < data.list.length; i++) {
                currentWeather.name = data.city.name;
                currentWeather.date = data.list[i].dt;
                currentWeather.temp = data.list[i].main.temp;
                currentWeather.wind = data.list[i].wind.speed;
                currentWeather.humidity = data.list[i].main.humidity;


                localStorage.setItem(data.city.name, JSON.stringify(data));

                if (i == 0) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('current-city').appendChild(cityDate);
                    var cityName = document.createElement('p');
                    cityName.textContent = "City: " + currentWeather.name;
                    document.getElementById('current-city').appendChild(cityName);
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

                else if (i == 8) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('day-1').appendChild(cityDate);
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

                else if (i == 16) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('day-2').appendChild(cityDate);
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

                else if (i == 24) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('day-3').appendChild(cityDate);
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

                else if (i == 32) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('day-4').appendChild(cityDate);
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

                else if (i == 39) {
                    var cityDate = document.createElement('p');
                    cityDate.textContent = "Date: " + currentWeather.dt_txt;
                    document.getElementById('day-5').appendChild(cityDate);
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

    // clears containers so new city shows without old city 
    document.getElementById('current-city').innerHTML = "";
    document.getElementById('day-1').innerHTML = "";
    document.getElementById('day-2').innerHTML = "";
    document.getElementById('day-3').innerHTML = "";
    document.getElementById('day-4').innerHTML = "";
    document.getElementById('day-5').innerHTML = "";
};

function getHistory(data) {
    for (var i = 0; i < data.list.length; i++) {
        currentWeather.name = data.city.name;
        currentWeather.temp = data.list[i].main.temp;
        currentWeather.wind = data.list[i].wind.speed;
        currentWeather.humidity = data.list[i].main.humidity;

        if (i == 0) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('current-city').appendChild(cityDate);
            var cityName = document.createElement('p');
            cityName.textContent = "City: " + currentWeather.name;
            document.getElementById('current-city').appendChild(cityName);
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

        else if (i == 8) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('day-1').appendChild(cityDate);
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

        else if (i == 16) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('day-2').appendChild(cityDate);
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

        else if (i == 24) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('day-3').appendChild(cityDate);
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

        else if (i == 32) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('day-4').appendChild(cityDate);
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

        else if (i == 39) {
            var cityDate = document.createElement('p');
            cityDate.textContent = "Date: " + currentWeather.dt_txt;
            document.getElementById('day-5').appendChild(cityDate);
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
}
// function uvIndex(cityName) {
//     let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityName + "&units=imperial&appid=" + apiKey; ""
//     fetch(apiUrl)
//         .then(function (response) {
//             return response.json()
//             // console.log(response);
//         })
//         .then(function (data) {
//             let uv = data.current.uvi;
//             console.log(uv)
//         });

// }
// uvIndex();

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

function deleteItems() {
    localStorage.clear();
    alert('Local Storage Cleared')
    location.reload();
};

getApi();

data.city.name(localStorage.getItem)(JSON.stringify(data));