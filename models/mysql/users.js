const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "usuario",
  {
    us_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
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
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  },
);

module.exports = Users;
