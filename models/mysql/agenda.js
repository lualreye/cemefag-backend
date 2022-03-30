const sequelize = require("../../config/mysql");
const { Datatype } = require("sequilize");

const agenda = sequilize.define(
  "agenda",
  {
    patient: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    product: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    speciality: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    doctor: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    user: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    dateReg: {
      type: Datatype.DATE,
    },
    dateAge: {
      type: Datatype.DATE,
    },
    payform: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    coverage: {
      type: Datatype.STRING,
    },
    value: {
      type: Datatype.NUMBER,
      allowNull: false
    },
    treated: {
      type: Dataype.BOOLEAN,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = agenda;
