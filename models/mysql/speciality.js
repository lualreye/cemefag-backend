const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const SpecialityByDoctor = require("./specialityByDoctor");

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
  Speciality.hasMany(SpecialityByDoctor, {
    foreignKey: "es_id",
  });
  return Speciality.findOne({
    where: { es_id: es_id },
    include: SpecialityByDoctor
  });
};

module.exports = Speciality;
