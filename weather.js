const api = "https://api.weatherapi.com/v1/current.json?key=deac16c0372945b3b3851724240707&q="
// const apikey = "deac16c0372945b3b3851724240707"
const imgElement = document.querySelector('.middle-img');
function updateWeather(data) {

    document.querySelector('.temp').innerHTML = data.current.temp_c + "°C"

    document.querySelector('.city').innerHTML = data.location.region

    document.querySelector('.humi').innerHTML = data.current.humidity + "%"

    document.querySelector('.wi').innerHTML = data.current.wind_kph + "kph"

    if (data.current.condition.text == "Mist") {
        imgElement.src = "mist.png";

    } else if (data.current.condition.text == "Clear") {
        imgElement.src = "clear.png";

    } else if (data.current.condition.text == "Partly cloudy") {
        imgElement.src = "clouds.png";

    } else if (data.current.condition.text == "Drizzle") {
        imgElement.src = "drizzle.png";
    } else if (data.current.condition.text == "Rain") {
        imgElement.src = "rain.png";
    }
    else if (data.current.condition.text == "Snow") {
        imgElement.src = "snow.png";
    }
    else{
        imgElement.src = "clouds.png";
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
