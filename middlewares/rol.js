const { handleHttpError } = require("../utils/customHttpErros");

// TYPE OF USERS IN ARRAY
// @params {*} rol
// @return
const checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.userRole; //TODO ["user"]
    //TODO: ["admin", "manager"]
    const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); //TODO: true, false

    console.log(checkValueRole)

    if (!checkValueRole) {
      handleHttpError(res, "USER_NOT_PERMISSIONS", 403);
      return;
    }

    next();
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSION", 403);
  }
};

module.exports = { checkRole };
