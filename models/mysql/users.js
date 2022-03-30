const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "usuario",
  {
    userCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRole: {
      type: DataTypes.ENUM(["user", "admin"]),
    },
  },
  {
    timestamps: true, //TODO SAVING creating_at
  }
);

module.exports = Users;
