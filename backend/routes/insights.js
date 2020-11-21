const express = require("express");
const router = express.Router();
const insightsController = require('../controller/insightsController')

router.post("/create/:unitId", insightsController.create)
router.get("/read/:unitId", insightsController.read)

module.exports = router;