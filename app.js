//Import express
let express = require('express');
//Import Body parser
let bodyParser = require('body-parser');
//Import mongoose
var mongoose = require('mongoose');
//Initialise app
let app = express();


//Import routes
let apiRoutes = require("./api-routes.js");
//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: 
	true 
}));
app.use(bodyParser.json());
//app.use("/", (req, res) => {
//	res.sendFile(__dirname + "/index.html");
//});




//Import db
let config = require('./db.js');
var db = mongoose.connection;
//Added check for db connection
if(!db)
  console.log("Error connecting db")
else
	console.log("Db connected successfully")

//Setup port
var port = process.env.PORT || 3000;
//send message for default URL
app.get('/', (req, res) => 
	res.send('Welcome to Student Record'));

//use Api routes in the App
app.use('/api', apiRoutes);
//Launch app to listern to specified port
app.listen(port, function () {
	console.log("Running StudentnRecord on port " +port);
});