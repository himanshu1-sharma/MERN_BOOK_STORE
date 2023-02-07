const express = require('express')
const router = express.Router()
const Controller = require("../controller/category.controller")

router.post("/add-category", Controller.addCategory)
router.delete("/delete-category/:id", Controller.deleteCategory)
router.get("/get-all-category", Controller.getAllCategory)

module.exports = router