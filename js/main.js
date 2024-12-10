function fetchWeather(country) {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=0e23e32283844019aa5145527240712&q=${country}&days=3`)
        .then(response => {
            if (!response.ok) throw new Error("Location not found");
            return response.json();
        })
        .then(data => {
            document.getElementById("temp_c").textContent = `${data.current.temp_c}°C`;
            document.getElementById("region").textContent = `${data.location.name}`;
            document.getElementById("localtime").textContent = `${data.location.localtime}`;
            document.getElementById("stuts").textContent = `${data.current.condition.text}`;
            document.getElementById("icon").src = `https:${data.current.condition.icon}`;
            document.getElementById("stutss").textContent = `${data.forecast.forecastday[1].hour[1].condition.text}`;
            document.getElementById("icon2").src = `https:${data.forecast.forecastday[1].hour[1].condition.icon}`;
            document.getElementById("temp_c2").textContent = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
            document.getElementById("time").textContent = `${data.forecast.forecastday[1].hour[0].time}`;
            document.getElementById("time2").textContent = `${data.forecast.forecastday[2].hour[0].time}`;
            document.getElementById("icon3").src = `https:${data.forecast.forecastday[2].hour[0].condition.icon}`;
            document.getElementById("temp_c3").textContent = `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
            document.getElementById("stutsss").textContent = `${data.forecast.forecastday[1].hour[1].condition.text}`;
        })
        .catch(error => {
            console.error(error);
            alert("Location not found");
        });
}

document.getElementById("searchButton").addEventListener("click", () => {
    const country = document.getElementById("city").value.trim();
    if (!country) {
        alert("Please enter a location!");
        return;
    }
    fetchWeather(country);
});

fetchWeather("Cairo");
