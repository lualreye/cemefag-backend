const express = require("express");
const router = express.Router();

const { getAgenda } = require("../controllers/agenda")

const { authMiddleware } = require("../middlewares/session");

// TODO http://localhost:3000/api/agenda/pc_id


// GETTING PATIENT AGENDA
router.get("/:pc_id", authMiddleware, getAgenda);

// CREATING PATIENT AGENDA
// router.post("/", authMiddleware, createAgenda);

// UPDATING PATIENT AGENDA
// router.put("/:id", authMiddleware, updateAgenda);

module.exports = router;
