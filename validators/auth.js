const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegisterItem = [
  check("userName").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("userCode").exists().notEmpty(),
  check("userLevel").exists().notEmpty(),
  check("userPassword").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

const validatorLoginItem = [
  check("userName").exists().notEmpty().isLength({ min: 3, max: 99 }),
  check("userPassword").exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = { validatorLoginItem, validatorRegisterItem };
