module.exports = function(sequelize, DataTypes) {
    let Patient = sequelize.define("Patients", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            len: [1]
        }
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      phone_number: {
          type: DataTypes.STRING,
      },
      city: DataTypes.STRING,
      symptoms: DataTypes.STRING,
      infected: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      },
      treatment: DataTypes.STRING,
      admitted: {
          type: DataTypes.BOOLEAN,
          allowNull: false
      }, 
      doctor: DataTypes.STRING,
    });

    return Patient;
};