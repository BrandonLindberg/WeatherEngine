const apiKey = "7452b20bcd78b372c5fd56d46266531e";

const submitButton = document.querySelector("#searchButton");

const separators = /[,\s]+/;

let cityName = "";
let stateName = "";
let countryName = "";

let queryString = "";

function convertInputToObjects () {
    const searchQuery = document.getElementById("searchBox");
    const inputValue = searchQuery.value.toUpperCase();

    const locationCode = inputValue.split(separators);

    cityName = locationCode[0];
    stateName = locationCode[1];
    countryName = locationCode[2];

    console.log(locationCode)

    convertObjectsToString();
}

function convertObjectsToString() {
    const objects = [cityName, stateName, countryName].filter(Boolean);
    let queryString = objects.join(",")

    convertLocationToCords(queryString);

    console.log(queryString);
}

function convertLocationToCords(string) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${string}&limit=1&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch(error => console.error('Error:', error));
}

submitButton.addEventListener("click", () => {
    convertInputToObjects();
});