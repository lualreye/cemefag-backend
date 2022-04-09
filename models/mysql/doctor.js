const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

// const Schedule = require("./schedule");

const Doctor = sequelize.define(
  "medico",
  {
    me_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    me_cedula: {
      type: DataTypes.STRING,
    },
    me_nombre: {
      type: DataTypes.STRING,
    },
    me_mail: {
      type: DataTypes.STRING,
    },
    me_celular: {
      type: DataTypes.STRING,
    },
    me_estado: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

// Doctor.findDoctorInformation = function (me_id) {
//   Doctor.hasOne(Schedule, {
//     foreignKey: "me_id",
//     as: "horario",
//   });
//   return Doctor.findOne({ where: { me_id: me_id }, include: "horario" });
// };

module.exports = Doctor;
