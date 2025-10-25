document.addEventListener("weatherDataReady", (event) => {
    const data = event.detail;
    renderForecastGraph(data)
});

function renderForecastGraph(data) {
    const dailyTemps = data.daily.splice(0, 5);

    const days = ['tomorrow', 'next', 'next', 'next', 'next'];
    const temps = [dailyTemps[0].temp.max,
                dailyTemps[1].temp.max,
                dailyTemps[2].temp.max,
                dailyTemps[3].temp.max,
                dailyTemps[4].temp.max];
    
    new Chart(
        document.getElementById('forecastGraph'),
        {
            type: 'line',
            data: {
                labels: days,
                datasets: [{
                    label: '5 Day Forecast',
                    data: temps,
                    fill: false,
                    borderColor: 'rgb(255, 136, 0)',
                    tension: .2
                }]
            }
        }
    )
}