//UPPERCASE COMMENT --- Category
//lowercase comment --- Line explanation

//DICTIONARY WITH ALL THE API INFORMATION
let weather = {
    //your api key
    "apiKey": "ce86501f43804acd8bb5f670c9ff1800",
    //function that contain all the weather info of the city you type
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    //function that change the element text to the fetchWeather data
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
    //function that take the value of the search bar and use it in the city parameter of fetchWeather
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
}


//ELEMENT DECLARATION

input = document.querySelector(".search-bar");

//LISTENERS

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
