const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreatePatient = [
  check("name").exists().notEmpty(),
  check("lastname").exists().notEmpty(),
  check("birthday").exists().notEmpty(),
  check("cedula").exists().notEmpty(),
  check("email").exists().notEmpty(),
  check("phone").exists().notEmpty(),
  check("product").exists().notEmpty(),
  check("role").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

const validatorGetPatient = [
  check("id").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next)
  }
];

module.exports = { validatorCreatePatient, validatorGetPatient };
