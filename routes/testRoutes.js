const express = require('express');
const router = express.Router();
const { connectionTest } = require('../controllers/connectionTest.js');



// Server connection test: "/test/connection"
router.get('/connection', connectionTest);



module.exports = router;
