require('dotenv').config();


const PORT = process.env.PORT;

// Connection test with THIS server
async function connectionTest (req, res) {
  res.send("Reached WehaterAPI Server", PORT);
};



module.exports = { connectionTest };



