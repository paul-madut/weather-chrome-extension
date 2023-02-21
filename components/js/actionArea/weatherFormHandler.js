import getData from "../fetchingAllData.js";

import { setData } from "../index.js";
import { setCurrentForcast } from "../current/currentForcast.js";

let allData;

let weatherForm = document.getElementById("form");
let weatherFormButton = document.getElementById("weather-form-button");
let form = document.getElementById("form-area");
var gps ='';
navigator.geolocation.getCurrentPosition(position => {
  let loc = `${position.coords.longitude},${position.coords.latitude}`;
  
  let location = document.getElementById("location");
  location = location.value;

  location = loc
  });
console.log(gps)

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = document.getElementById("location");
  location = location.value;
  let loading = document.getElementById("loader");
  form.style.display = "none";
  loading.style.display = "flex";
  getData(location, (error, data) => {
    if (error) {
    } else {
      setData(data);
      loading.style.display = "none";
    }
  });
});


weatherFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  let location = document.getElementById("location");
  location = location.value;
  if(location == ''){
    location = "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA"
  }
  
  let loading = document.getElementById("loader");
  loading.style.display = "flex";
  form.style.display = "none";
  getData(location, (error, data) => {
    if (error) {
    } else {
      setData(data);
      loading.style.display = "none";
    }
  });
});
