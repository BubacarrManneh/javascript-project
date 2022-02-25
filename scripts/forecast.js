const key = "mFZqgyB9yShFdIxMwWUlB8AAu1FTRZHD";

// Current weather of the city
const getWeather = async (id) => {
  const base = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const req = await fetch(base + query);
  const res = await req.json();
  return res[0];
};

// City weather
const getCity = async (city) => {
  const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const request = await fetch(base + query);
  const data = await request.json();
    return data[0];
  //   console.log(data[0]);
};

