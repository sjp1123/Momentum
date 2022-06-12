const API_KEY = "898ddf8427da1d1ac25a6cbf10b3a48b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:last-child");
            weather.innerText = "weather : " + data.weather[0].main;
            temp.innerText = "temperature : " + data.main.temp + "°C";
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
