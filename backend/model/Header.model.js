const mongoose = require("mongoose")
const Schema = mongoose.Schema

const headerSchema = new Schema({
    image: {
        type: String,
        default: null,
        require: true
    },
    name: {
        type: String,
        default: null,
        require: true
    }
})

module.exports = mongoose.model("Header", headerSchema)