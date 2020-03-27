// Dependencies
// =============================================================
const express = require("express");
// const serveStatic = require("serve-static");
// const path = require("path");


// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// here we are configuring dist to serve app files
// app.use("/", serveStatic(path.join(_dirname, "/dist")));

// this * route is to serve project on different page routes except root '/'
// app.get(/.*/, function (req, res) {
//   res.sendFile(path.join(_dirname, "/dist/index.html"));
// });


// Requiring our models for syncing
let db = require("./models");


// Static directory
app.use(express.static("dist"));


// Routes
// =============================================================
require("./routes/doctor-api-routes")(app);
// require("./routes/html-routes")(app);
require("./routes/patients-api-routes")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});