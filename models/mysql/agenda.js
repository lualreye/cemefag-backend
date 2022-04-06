const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Agenda = sequelize.define(
  "agenda",
  {
    ag_id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    ag_fecha_reg: {
      type: DataTypes.DATE,
    },
    as_fecha_age: {
      type: DataTypes.DATE
    },
    ag_cobertura: {
      type: DataTypes.NUMBER
    },
    ag_valor: {
      type: DataTypes.NUMBER
    },
    ag_atendido: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    timestamp: false,
    freezeTableName: true,
  }
);

module.exports = Agenda;
