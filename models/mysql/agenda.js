const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Patient = require("./patient");

const Agenda = sequelize.define(
  "agenda",
  {
    ag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    pc_id: {
      type: DataTypes.INTEGER,
    },
    pr_id: {
      type: DataTypes.INTEGER,
    },
    es_id: {
      type: DataTypes.INTEGER,
    },
    me_id: {
      type: DataTypes.INTEGER,
    },
    us_id: {
      type: DataTypes.INTEGER,
    },
    ag_fecha_reg: {
      type: DataTypes.DATE,
    },
    ag_fecha_age: {
      type: DataTypes.DATE,
    },
    tp_id: {
      type: DataTypes.INTEGER,
    },
    ag_cobertura: {
      type: DataTypes.INTEGER,
    },
    ag_valor: {
      type: DataTypes.INTEGER,
    },
    ag_atendido: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamp: false,
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

// IMPLEMENTING PERSONALIZE MODEL

Agenda.findOneAgenda = function (pc_id) {
  Agenda.belongsTo(Patient, {
    foreignKey: "pc_id",
    as: "paciente",
  });

  return Agenda.findOne({ where: { pc_id }, include: "paciente" });
};

module.exports = Agenda;
