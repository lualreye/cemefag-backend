const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
  patientModel: require(`${pathModels}/patient`),
  userModel: require(`${pathModels}/users`),
  agendaModel: require(`${pathModels}/agenda`),
  doctorModel: require(`${pathModels}/doctor`),
  payformModel: require(`${pathModels}/payform`),
  productModel: require(`${pathModels}/product`),
  specialityModel: require(`${pathModels}/speciality`),
};

module.exports = models;
