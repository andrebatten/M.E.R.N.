const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
const DB_NAME = "pirates_db"

//============Middleware=====================
//Allows us to receive json
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//////////////////////////////////////////////////

//Connect to mongoDB with the server by requiring the file here


const exportedDBfunction = require("./config/mongoose.config")
exportedDBfunction(DB_NAME);

//=============Routes======================
// Import the route here (after the db has connected)
const routesFunction = require("./routes/pirate.routes")
routesFunction(app);



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Im at ${port}, waiting on you Playa!`) );