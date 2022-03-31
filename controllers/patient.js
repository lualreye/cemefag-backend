const { matchedData } = require("express-validator");
const { patientModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");

// GETTING PATIENTS LIST
const getPatients = async (req, res) => {
  try {
    const user = req.user
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
    const { id } = req;
    const data = await patientModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_PATIENT");
  }
};

// CREATING A NEW PATIENT
const createPatient = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await patientModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_PATIENT");
  }
};

// UPDATING PATIENT DETAILS
const updatePatient = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await patientModel.findOneAndUpdate(id, body);
    console.log(data);
    res.send({ data });
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
    console.log(e)
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
