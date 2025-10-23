require('dotenv').config();



// Connection test with THIS server
async function connectionTest (req, res) {
  res.send("Reached Weather API Server ", true);
};



module.exports = { connectionTest };



