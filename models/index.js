const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
  patientModel: require(`${pathModels}/patient`),
  userModel: require(`${pathModels}/users`),
  agendaModel: require(`${pathModels}/agenda`),
};

module.exports = models;
