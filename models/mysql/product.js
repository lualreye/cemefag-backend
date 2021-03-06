const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "producto",
  {
    pr_id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    pr_nombre: {
      type: DataTypes.STRING,
    },
    pr_estado: {
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

module.exports = Product;
