const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Patient = sequelize.define(
  "paciente",
  {
    pc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    pc_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    pc_apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_mail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    pr_producto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    pr_fecha_nacim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Patient;
