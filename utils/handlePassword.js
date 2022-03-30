const md5 = require=("md5")

// PASSWORD WITHOUT ENCRYPT
// @params {*} userPassword
const encrypt = async (userPassword) => {
  const hash = await md5(userPassword);
  // TODO: "ew9s)9s0f89das9090asf/].["
  return hash;
};

// PASS PASSWORD WITHOUT ENCRYPTING AND ENCRYPTED PASSWORD
// @params {*} userPassword
// @params {*} hashPassword
const compare = async (userPassword, hashPassword) => {
  return await md5(userPassword) === hashPassword
};

module.exports = {
  encrypt,
  compare,
};
