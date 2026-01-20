require('dotenv').config();
const axios = require('axios');




const APIKEY = process.env.OPEN_WEATHER_API_KEY;



async function getLocationData(req, res) {
  const { cityName } = req.params;

    // Input check
  if (!cityName || cityName.trim() === '') {
    console.error('City name is required!');
    // return [];
    res.json({ result: [], msg: "City name is required." });
  }

  try {
    const result = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${APIKEY}`);

    if (result.data.length === 0) {
      console.error('No data found for the specified city');
      // return [];
      res.json({ result: [], msg: "No data found for the specified city." });
    } else {
      console.log('API call result: ', result.data);
      // return result.data;
      res.json({ result: result.data, msg: "Found the target location data." });
    }
  } catch (error) {
    console.error('Error fetching location data: ', error);
    // return [];
    res.json({ result: [], msg: "Error fetching location data: " + error });
  }

};




async function getWeatherData(req, res) {
  // const { lat, lon } = req.location;
  let { lat, lon } = req.params;
  console.log('getWeatherData - Lat, Lon: ', lat, lon);

  // Input check
  if (!lat || !lon) {
    console.error('Location data is required.');
    // return [];
    res.json({ result: [], msg: "Location data is require." });
  }

  // lat = lat.slice(1);
  // lon = lon.slice(1);
  console.log('Lat, Lon after slice: ', lat, lon);

  try {
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);

    if (result.data.length === 0) {
      console.error('No weather data found for the specified locaton');
      // return [];
      res.json({ result: [], msg: "No weather data found for the specified location." });
    } else {
      console.log('Weater data: ', result.data);
      // return result.data;
      res.json({ result: result.data, msg: "Found the weather data for the target city." });
    }
  } catch (error) {
    // console.error('Error fetching weather data: ', error);
    console.error('Error fetching weather data for the specified location.');
    // return [];
    res.json({ result: [], msg: "Error fetching weather data: " + error });
  }

};




module.exports = { getLocationData, getWeatherData };