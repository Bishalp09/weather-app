const apiKey = '7ee419703276db3453b154886d989020';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const error = document.querySelector(".error")
const weather = document.querySelector(".weather")

async function checkWeather (city){
const response = await fetch(apiUrl +  `&q=${city}&appid=${apiKey}`)
var data = await response.json();

if(response.status === 404) {
error.style.display ="block";
weather.style.display = "none";

} else {




document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

if(data.weather[0].main == "Clouds") {
    weatherIcon.src= "images/clouds.png"
} else if (data.weather[0].main == "Mist") {
    weatherIcon.src = 'images/mist.png'
}else if (data.weather[0].main == "Rain") {
    weatherIcon.src = 'images/rain.png'

}else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = 'images/drizzle.png'
} else {
    weatherIcon.src = 'images/snow.png'
}

weather.style.display = "block"
error.style.display = "none"
}
}

searchBtn.addEventListener('click', () => {
checkWeather(searchBox.value);
})

searchBox.addEventListener('keypress', (e) => {
if(e.key === "Enter") {
    checkWeather(searchBox.value)
}
})
