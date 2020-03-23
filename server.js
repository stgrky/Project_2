// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory
app.use(express.static("public"));


// Routes
// =============================================================
require("./routes/doctor-api-routes")(app);
require("./routes/html-routes")(app);
require("./routes/patients-api-routes")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// -------

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();