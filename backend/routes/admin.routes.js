const express = require('express')
const router = express.Router()
const Controller = require('../controller/admin.controller')


router.post("/create-admin", Controller.addAdmin)

module.exports = router