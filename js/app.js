const API_KEY = `9f68b905b27e5b1e19aed32c2f7490ba`;


const loadData = () =>{
    const searchField = document.getElementById("search-bar");
    const searchValue = searchField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayWeather = (temperature) =>{
    setInnerText("city", temperature.name);
    setInnerText("temp", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById("weather-icon");
    imageIcon.setAttribute("src", url);

}