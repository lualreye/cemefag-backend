const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Agenda = sequelize.define(
  "agenda",
  {
    patient: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    product: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    speciality: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    doctor: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    user: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    dateReg: {
      type: DataTypes.DATE,
    },
    dateAge: {
      type: DataTypes.DATE,
    },
    payform: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    coverage: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    treated: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = Agenda;
