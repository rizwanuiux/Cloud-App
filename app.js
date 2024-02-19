const apiKey = "863242cfb2b1d357e9093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi";

async function checkWeahter(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    let data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML = city.name;
}

checkWeahter();