const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "usuario",
  {
    us_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    us_codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_clave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    us_estado: {
      type: DataTypes.INTEGER,
    },
  }
);

module.exports = Users;
