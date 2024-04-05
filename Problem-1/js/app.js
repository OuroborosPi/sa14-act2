document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if(city) {
        fetchWeatherData(city);
    } else {
        alert("Please enter a city name");
    }
});

async function fetchWeatherData(city) {
    const apiKey = '8656ae67bac84d4e80d213227240504';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;

    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            updateWeatherDetails(data);
        } else {
            alert("Weather data for the specified city not found.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


function updateWeatherDetails(data) {
    const weatherDetails = document.getElementById('weatherDetails');
    const iconUrl = `https:${data.current.condition.icon}`;

    // Add a title for the forecast
    let forecastHtml = '<div class="forecast-container"><h2>5-Day Forecast</h2>';
    
    data.forecast.forecastday.forEach(fcast => {
        forecastHtml += `
            <div class="forecast-item">
                <div class="date">${new Date(fcast.date).toLocaleDateString()}</div>
                <img src="https:${fcast.day.condition.icon}" alt="${fcast.day.condition.text}" class="forecast-icon"/>
                <div class="forecast-temp">
                    <span class="max-temp">Max Temp: ${fcast.day.maxtemp_c}°C</span>
                    <span class="min-temp">Min Temp: ${fcast.day.mintemp_c}°C</span>
                </div>
                <div class="forecast-condition">${fcast.day.condition.text}</div>
                <div class="forecast-humidity">Humidity: ${fcast.day.avghumidity}%</div>
            </div>
        `;
    });

    forecastHtml += '</div>'; // Close the forecast-container div

    weatherDetails.innerHTML = `
        <div class="current-weather">
            <h2>Current Weather in ${data.location.name}, ${data.location.country}</h2>
            <img src="${iconUrl}" alt="Weather Icon" class="weather-icon">
            <div class="temperature">Temperature: ${data.current.temp_c}°C</div>
            <div class="condition">${data.current.condition.text}</div>
            <div class="humidity">Humidity: ${data.current.humidity}%</div>
        </div>
        ${forecastHtml}
    `;
}
