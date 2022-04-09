const { handleHttpError } = require("../utils/customHttpErros");
const { specialityModel } = require("../models/index");

// GETTING SPECIALITIES
const getSpecialities = async (req, res) => {
  try {
    const user = req.user;
    const data = await specialityModel.findAll({});
    res.send({ data, user });
  } catch (err) {
    handleHttpError(res, "CANNOT_GET_SPECIALITIES_LIST", err);
  }
};

// GETTING DOCTOR RELATIONS
const getSpecialityRelation = async (req, res) => {
  try {
    const user = req.user;
    const relationId = req.params.es_id;
    const data = await specialityModel.findDoctor(relationId);
    res.send({ data, user });
  } catch (err) {
    handleHttpError(res, "CANNOT_GET_RELATIONS_DOCTORS_SPECIALITY", err);
  }
};

module.exports = { getSpecialities, getSpecialityRelation };
