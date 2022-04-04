const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreatePatient = [
  check("pc_nombres").exists().notEmpty(),
  check("pc_apellidos").exists().notEmpty(),
  check("pr_fecha_nacim").exists().notEmpty(),
  check("pc_cedula").exists().notEmpty(),
  check("pc_mail").exists().notEmpty(),
  check("pc_celular").exists().notEmpty(),
  check("pr_producto").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

const validatorGetPatient = [
  check("pc_cedula").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validatorCreatePatient, validatorGetPatient };
