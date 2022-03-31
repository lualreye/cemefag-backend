const { userModel } = require("../models")
const { handleHttpError } = require("../utils/customHttpErros")
const { verifyToken } = require("../utils/handleJwt")
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

const authMiddleware = async (req, res, next) => {
  try {

    if(!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401)
    }

    const token = req.headers.authorization.split(" ").pop()


    const dataToken = await verifyToken(token)


    if(!dataToken) {
      handleHttpError(res, "ERROR_NO_PAYLOAD_DATA", 401);
      return
    }

    const query = {
      [propertiesKey.us_id] : dataToken[propertiesKey.us_id]
    }

    console.log(query)
    //TODO: searching according to the database type
    const user = await userModel.findOne({where: query})

    req.user = user

    next()

  } catch(e) {
    console.log(e)
    handleHttpError(res, "NOT_SESSION", 401)
  }
}

module.exports = { authMiddleware }