const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

// const Doctor = require("./doctor");

const SpecialityByDoctor = sequelize.define(
  "especialidad_medico",
  {
    em_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    es_id: {
      type: DataTypes.NUMBER,
    },
    me_id: {
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

// DoctorSpeciality.findAllDoctors = function () {
//   DoctorSpeciality.belongsToMany(Doctor, {
//     foreignKey: "me_id",
//     as: "doctores",
//   });

//   return DoctorSpeciality.findAll({ include: "doctores" });
// };

module.exports = SpecialityByDoctor;
