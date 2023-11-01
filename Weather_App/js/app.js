// 9c210f744e53064e3a11b466319b0164

// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9c210f744e53064e3a11b466319b0164


// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=9c210f744e53064e3a11b466319b0164&units=matrix



const apiKey = "9c210f744e53064e3a11b466319b0164";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } else {
        const data = await response.json();
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
    // console.log(data)
    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}
searchBtn.addEventListener('click', function () {
    checkWeather(searchBox.value)
})
