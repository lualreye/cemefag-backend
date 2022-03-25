const bcrypt = require("bcryptjs");

// PASSWORD WITHOUT ENCRYPT
// @params {*} userPassword
const encrypt = async (userPassword) => {
  const hash = await bcrypt.hash(userPassword, 10);
  // TODO: "ew9s)9s0f89das9090asf/].["
  return hash;
};

// PASS PASSWORD WITHOUT ENCRYPTING AND ENCRYPTED PASSWORD
// @params {*} userPassword
// @params {*} hashPassword
const compare = async (userPassword, hashPassword) => {
  return await bcrypt.compare(userPassword, hashPassword);
};

module.exports = {
  encrypt,
  compare,
};
