const express = require("express");
const router = express.Router();
const unitController = require('../controller/unitController')

router.post("/create", unitController.create)

module.exports = router;