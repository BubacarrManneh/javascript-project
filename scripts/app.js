const cityForm = document.querySelector("form");
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const time = document.querySelector("img.time")
const icon = document.querySelector(".icon img")

const updateUi = async(data) => {
   const {cityDetails, weather} = data;
   console.log(data)
    // Output weather details on browser 
    details.innerHTML = `
        <div class="text-muted text-center text-uppercase details">
            <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="my-4 display-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
        </div>`;

        const iconSrc = `./img/icons/${weather.WeatherIcon}.svg`;
        icon.setAttribute('src', iconSrc);

        let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.jpg";
       
        time.setAttribute('src' ,timeSrc)
        // Remove display none classList if exists
        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
        
}

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return { cityDetails, weather};
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get city data
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
