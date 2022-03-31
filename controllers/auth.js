const { matchedData } = require("express-validator");
const { tokenSign } = require("../utils/handleJwt");
const { userModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");
const md5 = require("md5");

const registerController = async (req, res) => {
  try {
    req = matchedData(req);
    const hashPassword = await md5(req.us_clave);
    const body = { ...req, us_clave: hashPassword };
    console.log(body);
    const userData = await userModel.create(body);
    console.log("No estamos llegando auqi");
    console.log(userData);
    userData.set("us_clave", undefined, { strict: false });

    const data = {
      token: await tokenSign(userData),
      user: userData,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_REGISTER_USER_mysql");
  }
};

const loginController = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel.findOne({
      where: { us_nombre: req.us_nombre },
    });
    if (!user) {
      handleHttpError(res, "USER_DOES_NOT_EXIST");
      return;
    }

    const hashPassword = user.get("us_clave");
    const check = md5(req.us_clave) === hashPassword;
    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401);
      return;
    }

    user.set("us_clave", undefined, { strict: false });
    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_LOGIN_USER", e);
  }
};

module.exports = { registerController, loginController };
