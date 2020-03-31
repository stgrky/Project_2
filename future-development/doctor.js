module.exports = function(sequelize, DataTypes) {
  let Doctor = sequelize.define("Doctor", {
    doctor_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1, 100]
      }
  });

  Doctor.associate = function(models) {
    // Associating Doctor with Patients
    Doctor.hasMany(models.Patients, {

    });
  };

  return Doctor;
};
