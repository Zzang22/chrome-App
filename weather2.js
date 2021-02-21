const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
//const API_KEY = '9bfe3fbfac837fd2630d7141d0feed72';
// kelvin 켈빈
//const KELVIN = 273;
const weather = {};
const key = '9bfe3fbfac837fd2630d7141d0feed72';

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
  
}else{
  notificationElement.style.display = "block";  // 보이게 하려면 
  notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation.</p>"
}

function setPosition(position){
 // console.log(position);
  let latitude = position.coords.latitude;
  let longtitude = position.coords.longitude;

  getWeather(latitude, longtitude);
}

function showError(error){
  notificationElement.style.display = "block";  
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longtitude){
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${key}&units=metric`;

  fetch(api).then(function(response){
    let data = response.json();
    return data;
  })
  .then(function(data){
    console.log(data);
    weather.temperature = Math.floor(data.main.temp);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then(function(){
    displayWeather();
  });
}

function displayWeather(){
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature} ℃`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML =`${weather.city}, ${weather.country}`;  
  }
