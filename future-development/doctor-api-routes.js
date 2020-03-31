var db = require("../models");

module.exports = function(app) {
  // Find all Doctors
	app.get("/api/doctors", function(req, res) {
		db.Doctor.findAll({}).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });
   
  // Find one Doctor with the name
  app.get("/api/doctor/:name", function(req, res) {
    db.Doctor.findOne({
      where: {
        name: req.params.name
      }
    }).then(function(dbDoctor) {
      res.json(dbDoctor);
    });
  });
    
  // Create an Doctor
  // app.post("/api/doctors", function(req, res) {
  //   console.log(req.body);
  //   db.Doctor.create(req.body).then(function(dbDoctor) {
  //     res.json(dbDoctor);
  //   });
  // });

   // updating Doctor
  //  app.put("/api/doctor", function(req, res) {
  //   // NOT REQUIRED FOR PROJECT, BUT FIGURED WE'D DO IT ANYWAYS.
  //   // CAN ALWAYS REMOVE IF WE WANT!
  //   db.Doctor.update(req.body,
  //     {
  //       where: {
  //           doctor_id: req.body.id
  //       }
  //     })
  //     .then(function(dbDoctor) {
  //       res.json(dbDoctor);
  //     });
  // });
    
  // Delete the Doctor with the id
  // app.delete("/api/doctor/:id", function(req, res) {
  //   // NOT REQUIRED FOR PROJECT, BUT FIGURED WE'D DO IT ANYWAYS.
  //   // CAN ALWAYS REMOVE IF WE WANT!
  //   db.Doctor.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbDoctor) {
  //     res.json(dbDoctor);
  //   });
  // });

};