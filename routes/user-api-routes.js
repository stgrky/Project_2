var db = require("../models");

module.exports = function(app) {
    // Create a user
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
        res.json(dbUser);
        });
     });
};