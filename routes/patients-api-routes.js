var db = require("../models");

module.exports = function(app) {
  // Find all Patients
  app.get("/api/patients", function(req, res) {
    db.Patients.findAll({}).then(function(dbPatients) {
        console.log(dbPatients);
      res.json(dbPatients);
    });
  });
   
  // Find one Patient with the id
  app.get("/api/patient/:id", function(req, res) {
    db.Patients.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });
    
  // Create an patient
  app.post("/api/patient", function(req, res) {
    console.log(req.body);
    db.Patients.create(req.body).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

   // updating Patients
   app.put("/api/patient", function(req, res) {
    // NOT REQUIRED FOR PROJECT, BUT FIGURED WE'D DO IT ANYWAYS.
    // CAN ALWAYS REMOVE IF WE WANT!
    db.Patients.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPatients) {
        res.json(dbPatients);
      });
  });
    
  // Delete the Doctor with the id
  app.delete("/api/patient/:id", function(req, res) {
    // NOT REQUIRED FOR PROJECT, BUT FIGURED WE'D DO IT ANYWAYS.
    // CAN ALWAYS REMOVE IF WE WANT!
    db.Patients.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPatients) {
      res.json(dbPatients);
    });
  });

};