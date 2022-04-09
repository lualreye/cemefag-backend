const { handleHttpError } = require("../utils/customHttpErros");
const { specialityModel, doctorModel } = require("../models/index");

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
    const doctorsRelated = data.spe_rel_doc;
    const doctorsResult = [];

    for (let i = 0; i < doctorsRelated.length; i++) {
      const res = await doctorModel.findByPk(doctorsRelated[i].me_id);
      doctorsResult.push(res);
    }

    const doctors = await Promise.all(doctorsResult);
    res.send({ doctors, user });
  } catch (err) {
    handleHttpError(res, "CANNOT_GET_RELATIONS_DOCTORS_SPECIALITY", err);
  }
};

module.exports = { getSpecialities, getSpecialityRelation };
