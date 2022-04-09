const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const { DoctorSpeciality } = require("./specialityDoctors");

const Speciality = sequelize.define(
  "especialidad",
  {
    es_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    es_nombre: {
      type: DataTypes.STRING,
    },
    es_estado: {
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

Speciality.findDoctor = function (es_id) {
  Speciality.hasOne(DoctorSpeciality, {
    foreignKey: "es_id",
    as: "doc_especialidades",
  });
  return Speciality.findAll({
    where: { es_id: es_id },
    include: "doc_especialidades",
  });
};

module.exports = Speciality;
