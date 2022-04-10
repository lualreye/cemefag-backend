const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/session");
const { getSchedule } = require("../controllers/schedule");

// TODO: http://localhost/api/schedule/

// TODO: getting doctor schedulef
router.get("/:me_id", authMiddleware, getSchedule);

module.exports = router;
