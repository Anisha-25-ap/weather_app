
const apikey="79aea6bbde03f90d89b5fced79def369";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkweather(city){

     const response = await fetch(apiUrl+city+`&appid=${apikey}`);

        if(response.status == 404)
          {
            document.querySelector(".error").stlye.display = "block";
            document.querySelector(".weather").stlye.display = "none";
        }
        else
        { 
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
            document.querySelector(".humdity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";

            if(data.weather[0].main == "Clouds")
            {
                weatherIcon.src= "image/clouds.png";
            }
            else  if(data.weather[0].main == "Clear")
            {
                weatherIcon.src= "image/clear.png";
            }
            else  if(data.weather[0].main == "Rain")
            {
                weatherIcon.src= "image/rain.png";
            }
            else  if(data.weather[0].main == "Drizzle")
            {
                weatherIcon.src= "image/drizzle.png";
            }
            else  if(data.weather[0].main == "Mist")
            {
                weatherIcon.src= "image/mist.png";
            }

            document.querySelector(".weather").stlye.display = "block";
            document.querySelector(".error").stlye.display = "none";
        }
    }
    searchBtn.addEventListener( "click", () =>{
        checkweather(searchBox.value);
    })


    .weather{
        display: none;
    }
