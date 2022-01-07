const API_KEY = "3b7de6bd457eabc194ba12cd0100d790";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const  city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `Location: ${data.name}`;
        weather.innerText = `/ ${data.weather[0].main} / Temp: ${data.main.temp}`;
    });
}

function onGeoErr(){
    alert("Can't get your Location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);