const { userModel } = require("../models")
const { handleHttpError } = require("../utils/customHttpErros")
const { verifyToken } = require("../utils/handleJwt")

const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization) {
      console.log(req.headers)
      handleHttpError(res, "NOT_TOKEN", 401)
    }

    const token = req.headers.authorization.split(" ").pop()

    const dataToken = await verifyToken(token)
    if(!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401)
      return
    }

    const user = await userModel.findById(dataToken._id)
    req.user = user

    next()

  } catch(e) {
    console.log(e)
    handleHttpError(res, "NOT_SESSION", 401)
  }
}

module.exports = { authMiddleware }