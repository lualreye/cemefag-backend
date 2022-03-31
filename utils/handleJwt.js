const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()

// PASS USER OBJECT
// @params {*} user
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      [propertiesKey.us_id]: user[propertiesKey.s_id],
    },
    JWT_SECRET,
    {
      expiresIn: "10h",
    }
  );
  return sign
};


// WE GOTTA PASS SESSION TOKEN
// @params {*} tokenJwt
// @return
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (e) {
    return null
  }
};

module.exports = { tokenSign, verifyToken };
