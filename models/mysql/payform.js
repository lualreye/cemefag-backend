const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Payform = sequelize.define(
  "tipo_pago",
  {
    tp_id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    tp_nombre: {
      type: DataTypes.STRING
    },
    tp_estado: {
      type: DataTypes.NUMBER
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Payform;
