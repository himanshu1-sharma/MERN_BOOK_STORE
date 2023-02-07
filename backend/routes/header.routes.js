const express = require('express')
const router = express.Router()
const Controller = require("../controller/header.controller")

router.post("/add-header", Controller.addHeader)

module.exports = router