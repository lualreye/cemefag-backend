const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "producto",
  {
    pr_nombre: {
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
