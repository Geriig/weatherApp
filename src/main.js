import "@css/style.css";

const apiKey = "1baec01be86cbe5456ca5a4cc545538a";
const submitButton = document.getElementById('submit');
const cityName = document.getElementById('city');

submitButton.addEventListener("click", async () => {
    if(cityName.value.replace(/\s+/g, '') != ""){
        let searchedCity = cityName.value.replace(/\s+/g, '');
        let weatherData = await getWeather(searchedCity);
        if(weatherData.cod == 404){
            console.error("Nincs ilyen varos!")
        }else{
            console.log(weatherData)
            console.log(weatherData.main.temp);
        }
        
        
    }else{
        console.error("Ures a varosnev!")
    }
})

async function getWeather(sC) {
    let fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sC}&appid=${apiKey}&units=metric`)
    return fetchedData.json();
}
