const express = require("express");
const router = express.Router();
const modelController = require('../controller/modelController')

router.post("/create/:unitId", modelController.create)
router.get("/read/:unitId", modelController.read)

module.exports = router;