const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //TODO CONTINUE TO THE CONTROLLER
  } catch (error) {
    res.status(403);
    res.send({ error: error.array() });
  }
};

module.exports = validateResults;
