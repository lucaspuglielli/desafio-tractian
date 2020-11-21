const express = require("express");
const router = express.Router();
const healthScoreController = require('../controller/healthScoreController')

router.post("/create/:unitId", healthScoreController.create)
router.get("/read/:unitId", healthScoreController.read)

module.exports = router;