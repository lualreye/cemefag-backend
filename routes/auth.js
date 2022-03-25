const express = require("express");
const router = express.Router();
const {
  validatorRegisterItem,
  validatorLoginItem,
} = require("../validators/auth");
const { loginController, registerController } = require("../controllers/auth");

// TODO http://localhost/api/auth/register
router.post("/register", validatorRegisterItem, registerController);

// TODO http://localhost/api/auth/login
router.post("/login", validatorLoginItem, loginController);

module.exports = router;
