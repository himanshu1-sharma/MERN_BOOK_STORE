const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
require("dotenv").config()
const { DB_CONNECT, PORT } = process.env
var router = express()
const bookRouter = require("./routes/book.routes")
const categoryRouter = require("./routes/category.routes")
const adminRouter = require("./routes/admin.routes")



app.use(express.json())
app.use(cors())
app.use(cookieParser())

//db connect

mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection
db.once("open", () => console.log("Connected to MongoDB"));
db.on("disconnected", () => console.log("Disonnected to MongoDB"));
db.on("reconnected", () => console.log("Reconnected to MongoDB"));
db.on("error", (err) => console.log(err));

//roures

router.use(bodyparser.json())
app.use("/api/book", bookRouter)
app.use("/api/category", categoryRouter)
app.use("/api/admin", adminRouter)


app.listen(PORT, () => {
    console.log(`app in running on ${PORT} port`)
})