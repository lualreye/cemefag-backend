const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

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

module.exports = SpecialityByDoctor;
