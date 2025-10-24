document.addEventListener("weatherDataReady", (event) => {
    const data = event.detail;
    renderConditions(data);
});

function renderConditions(data) {
    console.log(data);
}