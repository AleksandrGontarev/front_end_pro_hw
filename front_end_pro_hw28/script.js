const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

const data = document.querySelector('.weather__get');
const btn = document.querySelector('.weather__btn');
const section = document.querySelector('.weather');

btn.addEventListener('click', () => data.addEventListener('change', weather));

async function getInfo(value, url) {
    try {
        const response = await fetch(url + value);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        console.log('Something went wrong >>>>>>', err);
    }
}


async function weather(event) {
    let city = `${event.target.value.toUpperCase()}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    let body = await getInfo(city, apiUrl);
    
    if (body.cod === 200) {
        removeElement('.weather__show');
        let weatherBody = document.createElement('div');
        weatherBody.setAttribute('class', 'weather__show');
        weatherBody.innerHTML = `<div class="weather__header">
        <h1 class="weather__city">City: ${body.name}</h1>
        <img class="weather__ico" src="http://openweathermap.org/img/w/${body.weather[0].icon}.png" alt="picture weather"
            width="150px" height="150px">
    </div>
    <h2 class="weather__temp">Temp: ${body.main.temp}</h2>
    <h2 class="weather__pressure">Pressure: ${body.main.pressure}</h2>
    <h2 class="weather__description">Description: ${body.weather[0].description}</h2>
    <h2 class="weather__humidity">Humidity: ${body.main.humidity}</h2>
    <h2 class="weather__speed">Speed wind: ${body.wind.speed}</h2>
    <h2 class="weather__deg">Deg: ${body.wind.deg}</h2>`;
        section.appendChild(weatherBody);
    } else {
        removeElement('.weather__show');
        let weatherBody = document.createElement('div');
        weatherBody.setAttribute('class', 'weather__show');
        weatherBody.innerText = 'NO INFO';
        section.appendChild(weatherBody);
    }
}

function removeElement(elemClass) {
    const elem = document.querySelector(elemClass);
    if (elem) {
        elem.remove();
    }
}