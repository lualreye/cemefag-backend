const express = require("express");
const router = express.Router();

const { getSpecialities } = require("../controllers/speciality");

const { authMiddleware } = require("../middlewares/session");

// TODO: http://localhost/api/speciality

// TODO: getting specialities list
router.get("/", authMiddleware, getSpecialities);

module.exports = router;
