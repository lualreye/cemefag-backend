const ENGINE_DB = process.env.ENGINE_DB

const pathModels = (ENGINE_DB === "nosql") ? './nosel' : "./mysql"

const models = {
  patientModel: require(`${pathModels}/patient`),
  userModel: require(`${pathModels}/users`),
  consultationModel: require(`${pathModels}/consultation`),
};

module.exports = models