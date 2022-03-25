const express = require("express");
const router = express.Router();
const {
  validatorCreatePatient,
  validatorGetPatient,
} = require("../validators/patient");
const {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patient");
const { authMiddleware } = require("../middlewares/session");

// TODO http://localhost/patient GET,POST, DELETE, PUT

// GETTING PATIENTS LIST
router.get("/", authMiddleware, getPatients);

// GETTING PATIENT DETAILED
router.get("/:id", validatorGetPatient, getPatient);

// CREATING NEW PATIENT
router.post("/", validatorCreatePatient, createPatient);

// UPDATING PATIENT DETAILED
router.put("/:id", validatorGetPatient, validatorCreatePatient, updatePatient);

// DELETING PATIENT DETAILED
router.delete("/:id", validatorGetPatient, deletePatient);

module.exports = router;
