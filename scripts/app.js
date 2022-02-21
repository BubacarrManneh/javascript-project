const cityForm = document.querySelector("form");

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get city data
  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
