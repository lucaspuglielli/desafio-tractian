const express = require("express");
const router = express.Router();
const dataController = require('../controller/dataController')

router.post("/create/:unitId", dataController.create)
router.get("/read/:unitId", dataController.read)

module.exports = router;