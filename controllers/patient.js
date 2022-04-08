const { matchedData } = require("express-validator");
const { patientModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");

// GETTING PATIENTS LIST
const getPatients = async (req, res) => {
  try {
    const user = req.user;
    const data = await patientModel.findAll({});
    res.send({ data, user });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_PATIENTS", e);
  }
};

// GETTING PATIENT DETAILS
const getPatient = async (req, res) => {
  try {
    req = matchedData(req);
    const { pc_cedula } = req;
    const data = await patientModel.findOne({
      where: {
        pc_cedula: pc_cedula,
      },
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_PATIENT", e);
  }
};

// CREATING A NEW PATIENT
const createPatient = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await patientModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_PATIENT", e);
  }
};

// UPDATING PATIENT DETAILS
const updatePatient = async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body
    const data = await patientModel.update(body, {
      where: {
        pc_id: id
      }
    });
    if(data[0] === 1) {
      res.send({msg: "Usuario actualizado"});
    } else {
      res.send({msg: "Actualizado sin cambios"})
    }
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_PATIENT");
  }
};

// DELETING PATIENT DETAILS
const deletePatient = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await patientModel.delete({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_PATIENT");
  }
};

module.exports = {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
};
