const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize")

const Schedule = sequelize.define(
  "medico_horario",
  {
    mh_id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    me_id: {
      type: DataTypes.NUMBER
    },
    mh_dia: {
      type: DataTypes.NUMBER
    },
    mh_hora_inicio: {
      type: DataTypes.STRING
    },
    mh_hora_fin: {
      type: DataTypes.STRING
    },
    mh_tipo_horario: {
      type: DataTypes.STRING
    },
    mh_intervalo: {
      type: DataTypes.STRING
    },
    mh_hueco: {
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

module.exports = Schedule