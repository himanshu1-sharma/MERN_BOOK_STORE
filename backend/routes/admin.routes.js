const express = require('express')
const router = express.Router()
const Controller = require('../controller/admin.controller')


router.post("/register", Controller.register)
router.post("/login", Controller.login)
router.get("/admin", Controller.getAdmin)
router.get("/get-all-admin", Controller.getAllAdmin)
router.delete("/delete-admin/:id", Controller.deleteAdmin)

module.exports = router