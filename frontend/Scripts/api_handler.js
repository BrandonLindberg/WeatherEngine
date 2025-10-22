fetch('https://api.openweathermap.org/data/3.0/onecall?lat=43.82&lon=-111.79&units=imperial&exclude=hourly,daily&appid=96d1b0cebb92c0268171d4eb02a4e776')
    .then((response) => response.json())
    .then((data) => console.log(data));