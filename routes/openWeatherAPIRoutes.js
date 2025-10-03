const express = require('express');
const router = express.Router();
const { getLocationData, getWeatherData} = require('../controllers/weatherAPICalls.js');


router.get('/location/:cityName', getLocationData);

router.get('/weather/:lat/:lon', getWeatherData);



module.exports = router;