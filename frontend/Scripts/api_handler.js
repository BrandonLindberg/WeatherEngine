const apiKey = '';

const submitButton = document.querySelector('#searchButton');

const separators = /[,\s]+/;

let cityName = '';
let stateName = '';
let countryName = '';
let queryString = '';

// Take the location input and convert it into separate objects
function convertInputToObjects () {
    const searchQuery = document.getElementById('searchBox');
    const inputValue = searchQuery.value.toUpperCase();

    const locationCode = inputValue.split(separators);

    cityName = locationCode[0];
    stateName = locationCode[1];
    countryName = locationCode[2];

    convertObjectsToString();
}

// Convert the objects into an array, filtering out any null or undefined values, and convert it to one string properly formatted for the geocode API call
function convertObjectsToString() {
    const objects = [cityName, stateName, countryName].filter(Boolean);
    let queryString = objects.join(',');

    convertLocationToCords(queryString);

    console.log(queryString);
}

// Convert the location into coordinates
async function convertLocationToCords(query) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`;
    const result = await fetch(url);

    if (!result.ok) {
        console.log(`HTTP ${result.status}: ${result.statusText}`);
    }

    const data = await result.json();

    if (!Array.isArray(data) || data.length === 0) {
        ('No location found');
    }

    const {lat, lon} = data[0];

    getConditionsFromCoords(lat, lon);
    console.log(`latitude: ${lat}, longitude: ${lon}`);
}

// Get current weather conditions for location from coordinates
async function getConditionsFromCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,daily,alerts&appid=${apiKey}`;
    const result = await fetch(url);

    if (!result.ok) {
        console.log(`HTTP ${result.status}: ${result.statusText}`);
    }

    const data = await result.json();

    console.log(data);
}

submitButton.addEventListener('click', () => {
    convertInputToObjects();
});