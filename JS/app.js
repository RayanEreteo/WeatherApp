let weather = {
    "apiKey": "GET YOUR API KEY ON OPENWEATHERMAP",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}

input = document.querySelector(".search-bar");

document.querySelector('.search-button').addEventListener('click', function() {
    weather.search();
    input.value = "";
})

input.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
        input.value = "";
    }
})