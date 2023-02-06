const express = require('express')
const router = express.Router()
const Controller = require("../controller/book.controller")

router.post("/add-book", Controller.addBook)
router.get("/get-all-book", Controller.getAllBook)
router.patch("/update-book", Controller.updateBook)
router.delete("/delete-book/:id", Controller.deleteBook)



module.exports = router