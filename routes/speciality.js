const express = require("express");
const router = express.Router();

const {
  getSpecialities,
  getSpecialityRelation,
} = require("../controllers/speciality");

const { authMiddleware } = require("../middlewares/session");

// TODO: http://localhost/api/speciality

// TODO: getting specialities list
router.get("/", authMiddleware, getSpecialities);

// TODO: getting all doctors related to the speciality params
router.get("/:es_id", authMiddleware, getSpecialityRelation);

module.exports = router;
