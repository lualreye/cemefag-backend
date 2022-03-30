const { sequelize } = require("../../config/mysql");
const { Datatypes } = require("sequelize");

const Patient = sequelize.define(
  "patient",
  {
    cedula: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    product: {
      type: Datatypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Patient;
