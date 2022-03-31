const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Patient = sequelize.define(
  "paciente",
  {
    pc_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    pc_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_fecha_nacim: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pc_mail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    pc_celular: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pc_producto: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Patient;
