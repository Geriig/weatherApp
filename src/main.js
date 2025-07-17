import "@css/style.css";

const apiKey = "1baec01be86cbe5456ca5a4cc545538a";
const submitButton = document.getElementById('submit');
const cityName = document.getElementById('city');

submitButton.addEventListener("click", async () => {
    if(cityName.value.replace(/\s+/g, '') != ""){
        let searchedCity = cityName.value.replace(/\s+/g, '');
        let searchedCitysGeoLocations = await Geolocations(searchedCity)
        if(searchedCitysGeoLocations.length != 0){
            console.log(searchedCitysGeoLocations)
            console.log(searchedCitysGeoLocations[0].name)
            
        }else{
            console.log('Nincs ilyen varos!');
        }
        
    }else{
        console.error("Ures a varosnev!")
    }
})



async function Geolocations(sC){
    let fetchedData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${sC}&appid=${apiKey}`);
    return fetchedData.json();
}