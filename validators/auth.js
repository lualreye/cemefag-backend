const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegisterItem = [
  check("us_nombre").exists().notEmpty(),
  check("us_codigo").exists().notEmpty(),
  check("us_nivel").exists().notEmpty(),
  check("us_clave").exists().notEmpty(),
  check("us_estado").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

const validatorLoginItem = [
  check("us_nombre").exists().notEmpty(),
  check("us_clave").exists().notEmpty(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validatorLoginItem, validatorRegisterItem };
