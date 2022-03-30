const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { userModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");
const { compare } = require("bcryptjs");

const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const hashPassword = await encrypt(req.userPassword);
    const body = { ...req, userPassword: hashPassword };
    const userData = await userModel.create(body);
    userData.set("userPassword", undefined, { strict: false });

    const data = {
      token: await tokenSign(userData),
      user: userData,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel
      .findOne({ userName: req.userName })
    if (!user) {
      handleHttpError(res, "USER_DOES_NOT_EXIST");
      return;
    }

    const hashPassword = user.get("userPassword");
    const check = await compare(req.userPassword, hashPassword);
    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    user.set("userPassword", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

module.exports = { registerController, loginController };
