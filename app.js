const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;


// CORS settings
const allowedOrigins = [
  // 'http://localhost:3131', // Where??? (This was remaining from the old version)
  // 'http://localhost:5502',
  'https://weather-report-api-client.netlify.app', // Accept the access from the client on Netlify
];

const coreOptions = {
  origin: function(origin, callback) {
    if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS on Server: ${PORT}`));
    }
  },
  methods: ['GET', 'PORT', 'PUT', 'DELETE'], // Remore unnecessary methods later!!!
  allowedHeaders: ['Content-Type', 'Authrization'],
  credentials: true // This time, no use
};
app.use(cors(coreOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
const openWeatherRoutes = require('./routes/openWeatherAPIRoutes.js');
app.use('', openWeatherRoutes);

const testRoutes = require('./routes/testRoutes.js');
app.use('/test', testRoutes);




app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

