const express = require('express')
const router = express.Router()
const Controller = require('../controller/admin.controller')


router.post("/register", Controller.register)
router.post("/login", Controller.login)

module.exports = router