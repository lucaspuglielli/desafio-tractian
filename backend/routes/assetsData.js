const express = require("express");
const router = express.Router();
const assetsDataController = require('../controller/assetsDataController')

router.post("/create/:dataId", assetsDataController.create)
router.get("/read/:dataId", assetsDataController.read)

module.exports = router;