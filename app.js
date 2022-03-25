// USING DOTENV FOR ENVIRONMENT VARIABLES
require("dotenv").config()

// IMPORTING PACKAGES
const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongoo")

// INITIALIZING EXPRESS
const app = express()

// PREVENTING CORS TROUBLESHOT IN BROWSER
app.use(cors())

// PREPARED TO RECEIVE JSON
app.use(express.json())

// GETTING PORT
const port = process.env.PORT || 3000

// GETTING ROUTES
//TODO localhost/api/_______
app.use("/api", require("./routes"))

// LISTENING TO SERVER
app.listen(port, () => {
  console.log(`Tu App esta lista por http://localhost:${port}`)
})


// CONNECTING WITH MONGODB
dbConnect()