const express = require("express");
const router = express.Router();
const categoryController = require('../controller/categoryController')

router.post("/create/:unitId", categoryController.create)
router.get("/read/:unitId", categoryController.read)

module.exports = router;