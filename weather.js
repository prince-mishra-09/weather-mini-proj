const api = "https://api.weatherapi.com/v1/current.json?key=deac16c0372945b3b3851724240707&q="
// const apikey = "deac16c0372945b3b3851724240707"
const imgElement = document.querySelector('.middle-img');
function updateWeather(data) {

    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C"

    document.querySelector('.city').innerHTML = data.location.region

    document.querySelector('.humi').innerHTML = data.current.humidity + "%"

    document.querySelector('.wi').innerHTML = data.current.wind_kph + "kph"

    if (data.current.condition.text == "Mist") {
        imgElement.src = "assets/images/mist.png";

    } else if (data.current.condition.text == "Clear") {
        imgElement.src = "assets/images/clear.png";

    } else if (data.current.condition.text == "Partly cloudy") {
        imgElement.src = "assets/images/clouds.png";

    } else if (data.current.condition.text == "Drizzle") {
        imgElement.src = "assets/images/drizzle.png";
    } else if (data.current.condition.text == "Rain") {
        imgElement.src = "assets/images/rain.png";
    }
    else if (data.current.condition.text == "Snow") {
        imgElement.src = "assets/images/snow.png";
    }
    else{
        imgElement.src = "assets/images/clouds.png";
    }
    input = "";
}


async function weather(input) {
    const response = await fetch(api + input)

    let data = await response.json();
    updateWeather(data)
    // console.log(data);
}

document.querySelector('.search').addEventListener('click', function () {
    let input = document.querySelector('.input-box').value
    weather(input);
})