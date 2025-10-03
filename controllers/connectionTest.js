require('dotenv').config();


const PORT = process.env.PORT;


async function connectionTest (req, res) {
  res.send("Reached WehaterAPI Server", PORT);
};



module.exports = { connectionTest };



