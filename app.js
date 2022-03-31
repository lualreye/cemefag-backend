// USING DOTENV FOR ENVIRONMENT VARIABLES
require("dotenv").config();

// IMPORTING PACKAGES
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
// const loggerStream = require("./utils/handleLogger")
const dbConnectNosql = require("./config/mongoo");
const {dbConnectMysql} = require("./config/mysql")

// INITIALIZING EXPRESS
const app = express();

// SWITCHING DATABASE
const ENGINE_DB = process.env.ENGINE_DB

// PREVENTING CORS TROUBLESHOT IN BROWSER
const whiteList = ["http://localhost:8080"]
app.use(cors({
  origin: whiteList
}));

// PREPARED TO RECEIVE JSON
app.use(express.json());


// morganBody(app, {
//   noColors: true,
//   stream: loggerStream,
//   skip: function(req, res) {
//     return res.statusCode < 400 //TODO: 2xx, 3xx
//   }
// });

// GETTING PORT
const port = process.env.PORT || 3000;

// GETTING ROUTES
//TODO localhost/api/_______
app.use("/api", require("./routes"));

// LISTENING TO SERVER
app.listen(port, () => {
  console.log(`Tu App esta lista por http://localhost:${port}`);
});

// CONNECTING WITH MONGODB
(ENGINE_DB === "nosql") ? dbConnectNosql() : dbConnectMysql()
